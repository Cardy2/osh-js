var gulp = require('gulp-help')(require('gulp'),{hideDepsMessage:true});
var argv = require('yargs').argv;
var clean = require('gulp-clean');
var merge = require('merge-stream');
var jshint= require("gulp-jshint");
var uglify = require('gulp-uglify');
var sort = require('gulp-sort');
var order = require('gulp-order');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var gulpif = require('gulp-if');

gulp.task('build','build a distributable osh-js instance',['normal','minify'],function () {
    // ...
}, {
    options: {
        'ffmpeg': 'Include FFMPEG library. This library provides FFmpeg builds ported to JavaScript using Emscripten project. ' +
        'Builds are optimized for in-browser use: minimal size for faster loading, asm.js, performance tunings, etc. This is a fork ' +
        'from Kagami/ffmpeg.js: https://github.com/sensiasoft/ffmpeg.js\n',
        'nvd3': 'Include NVD3 library: http://nvd3.org/\n',
        'broadway': 'Include broadway JS library. Broadway JS is a JavaScript H.264 decoder: https://github.com/mbebenita/Broadway\n',
        'jsonix': 'Include jsonix library. sonix (JSON interfaces for XML) is a JavaScript library ' +
        'which allows you to convert between XML and JSON structures: ' +
        ' https://github.com/highsource/jsonix\n',
        'cesium':'An open-source JavaScript library for world-class 3D globes and maps: https://cesiumjs.org/\n',
        'leaflet':'An open-source JavaScript library for mobile-friendly interactive maps: http://leafletjs.com/\n',
        'ol3':'OpenLayer 3 makes it easy to put a dynamic map in any web page. It can display map tiles, ' +
        'vector data and markers loaded from any source: https://openlayers.org/\n',
        'nouislider': 'This library is responsible for displaying the RangeSlider bar.It is lightweight JavaScript range slider, ' +
        'originally developed to be a jQuery UI alternative: https://github.com/leongersen/noUiSlider\n',
        'tree': 'This library is responsible for displaying the Entity Tree View. It is a pure Javascript TreeView Component: https://github.com/rafaelthca/aimaraJS\n'
    }
});

gulp.task('minify', false, ['vendor-js-src-all','osh-js-src','vendor-css-src-all','osh-css-src','copy-vendor','images'],function(){
    // Minify OSH js min
    gulp.src("dist/js/osh.js")
        .pipe(uglify({mangle:false}))
        .pipe(concat('osh.min.js'))
        .pipe(gulp.dest('dist/js'));

    // Minify OSH css min
    gulp.src("dist/css/osh.css")
        .pipe(cleanCSS({compatibility: '*'}))
        .pipe(concat('osh.min.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor-js-src-all',false,function(){
    var jsSources = new Array();

    if(argv.ffmpeg) {
        jsSources.push('vendor/ffmpeg/ffmpeg-h264.js');
        jsSources.push('vendor/ffmpeg/YUVCanvas.js');
    }

    if(argv.d3) {
        jsSources.push('vendor/d3/d3.min.js');
    }

    if(argv.nvd3) {
        jsSources.push('vendor/nvd3/build/nv.d3.min.js');
    }

    if(argv.broadway) {
        jsSources.push('vendor/broadway/broadway-all.min.js');
        jsSources.push('vendor/broadway/YUVCanvas.js');
        jsSources.push('vendor/broadway/Decoder.js');
        jsSources.push('vendor/broadway/Player.js');
    }

    if(argv.nouislider) {
        jsSources.push('vendor/nouislider/distribute/nouislider.min.js');
        jsSources.push('vendor/wnumb/wNumb.js');
    }

    if(argv.cesium) {
        jsSources.push('vendor/cesium.js/dist/Cesium.js');
    }
    if(argv.ol3) {
        jsSources.push('vendor/ol3/ol.js');
        jsSources.push('vendor/ol3-layerswitcher/src/ol3-layerswitcher.js');
    }
    if(argv.leaflet) {
        jsSources.push('vendor/leaflet/dist/leaflet.js');
        jsSources.push('vendor/Leaflet.fullscreen/dist/Leaflet.fullscreen.min.js');
    }
    if(argv.tree) {
        jsSources.push('vendor/tree/tree.js');
    }
    if(argv.jsonix) {
        jsSources.push('vendor/jsonix/dist/*.js');
        jsSources.push('vendor-local/jsonix/dist/**/.js');
    }

    return gulp.src(jsSources).pipe(concat('vendor.js')).pipe(gulp.dest("dist/vendor/all-in-one"));
});

gulp.task('vendor-css-src-all',false,function(){
    var cssSources = new Array();

    if(argv.nvd3) {
        cssSources.push('vendor/nvd3/build/nv.d3.min.css');
    }

    if(argv.nouislider) {
        cssSources.push('vendor/nouislider/distribute/nouislider.min.css');
    }

    if(argv.cesium) {
        // copy cesium resources
        gulp.src(['vendor/cesium.js/dist/**','!vendor/cesium.js/dist/Cesium.js'])
            .pipe(gulp.dest('dist/vendor/all-in-one/'));
    }
    if(argv.ol3) {
        cssSources.push('vendor/ol3/ol.css');
        cssSources.push('vendor/ol3-layerswitcher/src/ol3-layerswitcher.css');
    }
    if(argv.leaflet) {
        // copy leaflet resources
        gulp.src('vendor/leaflet/dist/images/*').pipe(gulp.dest('dist/vendor/all-in-one/images'));
        gulp.src('vendor/Leaflet.fullscreen/dist/*.png').pipe(gulp.dest('dist/vendor/all-in-one/'));
    }
    if(argv.tree) {
        cssSources.push('vendor/tree/tree.css');
        // copy tree resources
        gulp.src('vendor/tree/images/*').pipe(gulp.dest('dist/vendor/all-in-one/images'));
    }
    if(argv.jsonix) {
        cssSources.push('vendor/jsonix/dist/*.css');
    }

    return gulp.src(cssSources).pipe(concat('vendor.css')).pipe(gulp.dest("dist/vendor/all-in-one"));;
});

gulp.task('osh-js-src',false,function(){
    var src = [];

    src.push('./src/osh/osh-BaseClass.js');
    src.push('./src/osh/osh-Template.js');
    src.push('./src/osh/osh-Browser.js');
    src.push('./src/osh/osh-Utils.js');
    src.push('./src/osh/osh-Browser.js');
    src.push('./src/osh/osh-DomEvent.js');
    src.push('./src/osh/osh-MapEvent.js');
    src.push('./src/osh/osh-EventManager.js');
    src.push('./src/osh/osh-Buffer.js');
    src.push('./src/osh/dataconnector/osh-DataConnector.js');
    src.push('./src/osh/dataconnector/osh-DataConnector-HttpAjaxConnector.js');
    src.push('./src/osh/dataconnector/osh-DataConnector-Websocket.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSource.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceEulerOrientation.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceLatLonAlt.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceNexrad.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceUAHWeather.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceOrientationQuaternion.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceVideoH264.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceVideoMjpeg.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceVideoMp4.js');
    src.push('./src/osh/datareceiver/osh-DataReceiver-DataSourceChart.js');
    src.push('./src/osh/datareceiver/osh-DataReceiverController.js');
    src.push('./src/osh/datasender/osh-DataSender-DataSink.js');
    src.push('./src/osh/datasender/osh-DataSender-PtzTasking.js');
    src.push('./src/osh/datasender/osh-DataSender-UavMapTasking.js');
    src.push('./src/osh/datasender/osh-DataSenderController.js');
    src.push('./src/osh/discovery/osh-Sensor.js');
    src.push('./src/osh/discovery/osh-Server.js');
    src.push('./src/osh/log/osh-Log.js');
    src.push('./src/osh/ui/view/osh-UI-View.js');
    src.push('./src/osh/ui/contextmenu/osh-UI-ContextMenu.js');
    src.push('./src/osh/ui/contextmenu/osh-UI-ContextMenu-CssMenu.js');
    src.push('./src/osh/ui/contextmenu/osh-UI-ContextMenu-CircularMenu.js');
    src.push('./src/osh/ui/contextmenu/osh-UI-ContextMenu-StackMenu.js');
    src.push('./src/osh/ui/styler/osh-UI-Styler.js');
    src.push('./src/osh/ui/styler/osh-UI-StylerImageDraping.js');
    src.push('./src/osh/ui/styler/osh-UI-StylerCurve.js');
    if(argv.cesium) {
        src.push('./src/osh/ui/styler/osh-UI-StylerNexrad.js');
    }
    src.push('./src/osh/ui/styler/osh-UI-StylerPolyline.js');
    src.push('./src/osh/ui/styler/osh-UI-StylerPointMarker.js');
    if(argv.nvd3) {
        src.push('./src/osh/ui/view/chart/osh-UI-Nvd3CurveChartView.js');
    }
    src.push('./src/osh/ui/view/discovery/osh-UI-DiscoveryView.js');
    if(argv.tree) {
        src.push('./src/osh/ui/view/entity/osh-UI-EntityTreeView.js');
    }
    if(argv.cesium) {
        src.push('./src/osh/ui/view/map/osh-UI-CesiumView.js');
    }
    if(argv.leaflet) {
        src.push('./src/osh/ui/view/map/osh-UI-LeafletView.js');
    }
    if(argv.ol3) {
        src.push('./src/osh/ui/view/map/osh-UI-OpenLayerView.js');
    }
    src.push('./src/osh/ui/view/dialog/osh-UI-DialogView.js');
    src.push('./src/osh/ui/view/dialog/osh-UI-MultiDialogView.js');
    src.push('./src/osh/ui/view/osh-UI-Loading.js');
    if(argv.nouislider) {
        src.push('./src/osh/ui/view/osh-UI-RangeSlider.js');
    }
    src.push('./src/osh/ui/view/tasking/osh-UI-PtzTaskingView.js');
    if(argv.ffmpeg) {
        src.push('./src/osh/ui/view/video/osh-UI-FFMPEGView.js');
    }
    if(argv.broadway) {
        src.push('./src/osh/ui/view/video/osh-UI-H264View.js');
    }
    src.push('./src/osh/ui/view/video/osh-UI-MjpegView.js');
    src.push('./src/osh/ui/view/video/osh-UI-Mp4View.js');

    return gulp.src(src)
        .pipe(concat('osh.js'))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('osh-css-src',false,['copy-fonts'],function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('osh.css')).pipe(gulp.dest("dist/css"));
});
//----------- NORMAL ------------------//

gulp.task('normal', false, ['vendor-js-src-all','vendor-css-src-all','osh-js-src','osh-css-src', 'copy-vendor','images']);

//---------- COPY VENDORS ------//
gulp.task('copy-vendor',false, function () {
    if(argv.ffmpeg) {
        gulp.src('vendor/ffmpeg/*.js')
            .pipe(gulp.dest('dist/vendor/ffmpeg'));
    }

    if(argv.d3) {
        gulp.src('vendor/d3/d3.min.js')
            .pipe(gulp.dest('dist/vendor/d3'));
    }

    if(argv.nvd3) {
        gulp.src('vendor/nvd3/build/nv.d3.min.js')
            .pipe(gulp.dest('dist/vendor/nvd3'));
        gulp.src('vendor/nvd3/build/nv.d3.min.css')
            .pipe(gulp.dest('dist/vendor/nvd3'));
    }

    if(argv.broadway) {
        gulp.src('vendor/broadway/*.js')
            .pipe(gulp.dest('dist/vendor/broadway'));
    }

    if(argv.nouislider) {
        gulp.src('vendor/nouislider/distribute/*.min.*')
            .pipe(gulp.dest('dist/vendor/nouislider'));
        gulp.src('vendor/wnumb/wNumb.js')
            .pipe(gulp.dest('dist/vendor/nouislider'));
    }

    if(argv.cesium) {
        gulp.src('vendor/cesium.js/dist/**/*')
            .pipe(gulp.dest('dist/vendor/cesium'));
    }

    if(argv.ol3) {
        gulp.src('vendor/ol3/ol.js')
            .pipe(gulp.dest('dist/vendor/ol3'));
        gulp.src('vendor/ol3/ol.css')
            .pipe(gulp.dest('dist/vendor/ol3'));
        gulp.src('vendor/ol3-layerswitcher/src/ol3-layerswitcher.js')
            .pipe(gulp.dest('dist/vendor/ol3'));
        gulp.src('vendor/ol3-layerswitcher/src/ol3-layerswitcher.css')
            .pipe(gulp.dest('dist/vendor/ol3'));
    }

    if(argv.leaflet) {
        gulp.src('vendor/leaflet/dist/**/*')
            .pipe(gulp.dest('dist/vendor/leaflet'));
        gulp.src('vendor/Leaflet.fullscreen/dist/**')
            .pipe(gulp.dest('dist/vendor/leaflet'));
    }
    if(argv.tree) {
        gulp.src('vendor/tree/**')
            .pipe(gulp.dest('dist/vendor/tree'));
    }
    if(argv.jsonix) {
        gulp.src('vendor/jsonix/dist/**')
            .pipe(gulp.dest('dist/vendor/jsonix'));
        gulp.src('vendor-local/jsonix/**')
            .pipe(gulp.dest('dist/vendor/jsonix'));
    }
});

gulp.task('copy-fonts',false, function () {
    return gulp.src('src/css/font-awesome-4.6.3/**/*')
        .pipe(gulp.dest('dist/css/font-awesome-4.6.3'));
});

//--------- IMAGES -----------//
gulp.task('images', false,function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/css/images'));
});

//------- TOOLS -------//
//clean
gulp.task('clean', "Clean the dist directory",function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean({force:true}));
});