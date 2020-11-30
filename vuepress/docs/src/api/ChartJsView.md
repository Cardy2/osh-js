<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Class: ChartJsView</title>
    
    
    <script src="scripts/prettify/prettify.js"></script>
    <script src="scripts/prettify/lang-css.js"></script>
    <script src="scripts/jquery.min.js"></script>
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link type="text/css" rel="stylesheet" href="styles/prettify-tomorrow.css">
    <link type="text/css" rel="stylesheet" href="styles/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="styles/jaguar.css">

    
    <script>
    var config = {"monospaceLinks":false,"cleverLinks":false,"default":{"outputSourceFiles":true}};
    </script>
    

    
</head>
<body>
<div id="wrap" class="clearfix">
    <!--?js= this.partial('navigation.tmpl', this) ?-->
    <div class="main">
        <h1 class="page-title" data-filename="ChartJsView.html">Class: ChartJsView</h1>
        



<section>

<header>
    <h2>
    ChartJsView
    </h2>
    
</header>

<article>
    <div class="container-overview">
    

    
        
<dt>
    <div class="nameContainer">
        <h4 class="name" id="ChartJsView">
            
            new ChartJsView<span class="signature">(parentElementDivId, viewItems, options)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_chart_ChartJsView.js.html">osh/ui/view/chart/ChartJsView.js</a>, <a href="osh_ui_view_chart_ChartJsView.js.html#line41">line 41</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Create a View.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>parentElementDivId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The div element to attach to</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>viewItems</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Array.&lt;Object></span>


            
            </td>
            
            
            
            <td class="description last">
                
                The initial view items to add
                

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>name</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The name of the view item</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>styler</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="Styler.html">Styler</a></span>


            
            </td>
            
            
            
            <td class="description last">
                
                The styler object representing the view item</td>
        </tr>
	
	
	</tbody>
</table>
            </td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>options</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                the properties of the view
                

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>datasetsOpts</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                chart.js dataset options</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>gridLinesOpts</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                chart.js gridline options</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>scaleLabelOpts</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                chart.js scaleLabel options</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>tickOpts</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                chart.js tick options</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>legendOpts</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                chart.js legend options</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>maxPoints</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Number</span>


            
            </td>
            
            
            
            <td class="description last">
                
                max points to display before shifting</td>
        </tr>
	
	
	</tbody>
</table>
            </td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

    
    </div>

    

    
        <h3 class="subsection-title">Extends</h3>

        <ul>
            <li><a href="View.html">View</a></li>
        </ul>
    

    

    

    

    

    
        <h3 class="subsection-title">Methods</h3>

        <dl>
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="addViewItem">
            
                <span class="inherited"><a href="View.html#addViewItem">inherited</a></span>
            
            addViewItem<span class="signature">(viewItem)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line267">line 267</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Adds a viewItem to the view. A broadcastChannel is going to listen the new dataSources
and EventManager.EVENT.SELECT_VIEW are then observed using the
dataSource(s) contained into the styler.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>viewItem</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The initial view items to add
                

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>name</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The name of the view item</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>styler</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="Styler.html">Styler</a></span>


            
            </td>
            
            
            
            <td class="description last">
                
                The styler object representing the view item</td>
        </tr>
	
	
	</tbody>
</table>
            </td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="attachTo">
            
                <span class="inherited"><a href="View.html#attachTo">inherited</a></span>
            
            attachTo<span class="signature">(divId)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line203">line 203</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Attach the view to a specific div. If the view has already been attached to a div, it will be removed
from its current parent and will be attached to new one.
Note: the onResize() is called at the end of the process.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>divId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The div element to attach to</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="getDataSourcesId">
            
                <span class="inherited"><a href="View.html#getDataSourcesId">inherited</a></span>
            
            getDataSourcesId<span class="signature">()</span><span class="glyphicon glyphicon-circle-arrow-right"></span><span class="type-signature returnType">{Array.&lt;String>}</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line402">line 402</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Gets the list of the dataSource ids contained into the view.
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    <h5>Returns:</h5>
    


<table class="params">
    <thead>
    <tr>
        
        <th>Type</th>
        <th class="last">Description</th>
    </tr>
    </thead>
    <tbody>
    
        <tr>
            
            <td class="type">
            
                        Array.&lt;String>
                        
                    
            </td>
            <td class="description last">The list of dataSource ids</td>
        </tr>
    
    </tbody>
</table>

    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="getDivId">
            
                <span class="inherited"><a href="View.html#getDivId">inherited</a></span>
            
            getDivId<span class="signature">()</span><span class="glyphicon glyphicon-circle-arrow-right"></span><span class="type-signature returnType">{String}</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line237">line 237</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Gets the div id of the DOM element.
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    <h5>Returns:</h5>
    


<table class="params">
    <thead>
    <tr>
        
        <th>Type</th>
        <th class="last">Description</th>
    </tr>
    </thead>
    <tbody>
    
        <tr>
            
            <td class="type">
            
                        String
                        
                    
            </td>
            <td class="description last">The div id of the view</td>
        </tr>
    
    </tbody>
</table>

    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="getId">
            
                <span class="inherited"><a href="View.html#getId">inherited</a></span>
            
            getId<span class="signature">()</span><span class="glyphicon glyphicon-circle-arrow-right"></span><span class="type-signature returnType">{String}</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line229">line 229</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Gets the inner id of the view object.
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    <h5>Returns:</h5>
    


<table class="params">
    <thead>
    <tr>
        
        <th>Type</th>
        <th class="last">Description</th>
    </tr>
    </thead>
    <tbody>
    
        <tr>
            
            <td class="type">
            
                        String
                        
                    
            </td>
            <td class="description last">The id of the view</td>
        </tr>
    
    </tbody>
</table>

    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="hide">
            
                <span class="inherited"><a href="View.html#hide">inherited</a></span>
            
            hide<span class="signature">()</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line186">line 186</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Hide the view
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="init">
            
                <span class="inherited"><a href="View.html#init">inherited</a></span>
            
            init<span class="signature">(parentElementDivId, viewItems, options)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line90">line 90</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Inits the view component.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>parentElementDivId</code></td>
            
            
            <td class="type">
            
            </td>
            
            
            
            <td class="description last">
                
                The parent html element object to attach/create the view</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>viewItems</code></td>
            
            
            <td class="type">
            
            </td>
            
            
            
            <td class="description last">
                
                the list of items to add</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>options</code></td>
            
            
            <td class="type">
            
            </td>
            
            
            
            <td class="description last">
                
                [TODO]</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="removeViewItem">
            
                <span class="inherited"><a href="View.html#removeViewItem">inherited</a></span>
            
            removeViewItem<span class="signature">(viewItem)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line334">line 334</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Removes a view item from the view.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>viewItem</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The initial view items to add
                

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>name</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The name of the view item</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>styler</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="Styler.html">Styler</a></span>


            
            </td>
            
            
            
            <td class="description last">
                
                The styler object representing the view item</td>
        </tr>
	
	
	</tbody>
</table>
            </td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="removeViewItems">
            
                <span class="inherited"><a href="View.html#removeViewItems">inherited</a></span>
            
            removeViewItems<span class="signature">()</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line353">line 353</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Removes all view item from the view.
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="reset">
            
                <span class="inherited"><a href="View.html#reset">inherited</a></span>
            
            reset<span class="signature">()</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line423">line 423</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Calls for resetting the view.
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="selectDataView">
            
                <span class="inherited"><a href="View.html#selectDataView">inherited</a></span>
            
            selectDataView<span class="signature">(dataSourcesIds, entityId)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line386">line 386</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Selects the view by setting the current selected entity and dataSource.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>dataSourcesIds</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The dataSource id</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>entityId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The entity id</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="setData">
            
                <span class="inherited"><a href="View.html#setData">inherited</a></span>
            
            setData<span class="signature">(dataSourceId, data)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line246">line 246</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Set the data to the view. Each view has to handle the kind of the data separately.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>dataSourceId</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The dataSource id of the source providing the data</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>data</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Array.&lt;any></span>


            
            </td>
            
            
            
            <td class="description last">
                
                The data array to set</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="show">
            
                <span class="inherited"><a href="View.html#show">inherited</a></span>
            
            show<span class="signature">(properties)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line253">line 253</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Show the view.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>properties</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                A generic object</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer">
        <h4 class="name" id="updateCurve">
            
            updateCurve<span class="signature">(styler, values, options)</span>
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_chart_ChartJsView.js.html">osh/ui/view/chart/ChartJsView.js</a>, <a href="osh_ui_view_chart_ChartJsView.js.html#line153">line 153</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>styler</code></td>
            
            
            <td class="type">
            
                
<span class="param-type"><a href="Curve.html">Curve</a></span>


            
            </td>
            
            
            
            <td class="description last">
                
                -</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>values</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Array</span>


            
            </td>
            
            
            
            <td class="description last">
                
                The values values to set. Each value is composed of raw data and timeStamp</td>
        </tr>
	
	
	
        <tr>
            
                <td class="name"><code>options</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                -</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        </dl>
    

    

    
        <h3 class="subsection-title">Events</h3>

        <dl>
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="event:beforeAddingItems">
            
                <span class="inherited"><a href="View.html#event:beforeAddingItems">inherited</a></span>
            
            beforeAddingItems
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line221">line 221</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        This method is called before attaching any view items passed as arguments in the constructor of the view.
    </div>
    

    
    
    
    
    
        

<table class="params">
    <thead>
	<tr>
		
		<th>Name</th>
		
		
		<th>Type</th>
		
		
		
		<th class="last">Description</th>
	</tr>
	</thead>
	
	<tbody>
	
	
        <tr>
            
                <td class="name"><code>options</code></td>
            
            
            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>
            
            
            
            <td class="description last">
                
                A generic object to use</td>
        </tr>
	
	
	</tbody>
</table>
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        
            
<dt>
    <div class="nameContainer inherited">
        <h4 class="name" id="event:onResize">
            
                <span class="inherited"><a href="View.html#event:onResize">inherited</a></span>
            
            onResize
        </h4>
    
        
        <div class="tag-source">
            <a href="osh_ui_view_View.js.html">osh/ui/view/View.js</a>, <a href="osh_ui_view_View.js.html#line194">line 194</a>
        </div>
        
    </div>

    
</dt>
<dd>
    
    
    <div class="description">
        Callback called when the view is resized
    </div>
    

    
    
    
    
    
    
    
<dl class="details">
    
        
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</dl>

    
    

    

    
    
    
    
    
    
    
</dd>

        </dl>
    
</article>

</section>





        

        <footer>
            Documentation generated by <a target="_blank" href="https://github.com/jsdoc3/jsdoc">JSDoc 3.6.5</a> on Thu Nov 19 2020 22:03:01 GMT+0100 (Central European Standard Time)
        </footer>
    </div>
</div>
<script>prettyPrint();</script>
<script src="scripts/linenumber.js"></script>
<script src="scripts/main.js"></script>
</body>
</html>