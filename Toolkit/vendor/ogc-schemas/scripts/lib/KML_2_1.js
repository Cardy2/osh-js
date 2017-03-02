var KML_2_1_Module_Factory = function () {
  var KML_2_1 = {
    n: 'KML_2_1',
    dens: 'http:\/\/earth.google.com\/kml\/2.1',
    tis: [{
        ln: 'MetadataType',
        ps: [{
            n: 'any',
            rq: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'LatLonBoxType',
        bti: '.ObjectType',
        ps: [{
            n: 'north',
            ti: 'Double'
          }, {
            n: 'south',
            ti: 'Double'
          }, {
            n: 'east',
            ti: 'Double'
          }, {
            n: 'west',
            ti: 'Double'
          }, {
            n: 'rotation',
            ti: 'Double'
          }]
      }, {
        ln: 'TimePrimitiveType',
        bti: '.ObjectType'
      }, {
        ln: 'StyleMapPairType',
        ps: [{
            n: 'key',
            rq: true
          }, {
            n: 'styleUrl',
            rq: true
          }]
      }, {
        ln: 'IconType',
        bti: '.LinkType',
        ps: [{
            n: 'x',
            rq: true,
            ti: 'Int'
          }, {
            n: 'y',
            rq: true,
            ti: 'Int'
          }, {
            n: 'w',
            rq: true,
            ti: 'Int'
          }, {
            n: 'h',
            rq: true,
            ti: 'Int'
          }]
      }, {
        ln: 'DeleteType',
        ps: [{
            n: 'feature',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Feature',
            ti: '.FeatureType',
            t: 'er'
          }]
      }, {
        ln: 'PolyStyleType',
        bti: '.ColorStyleType',
        ps: [{
            n: 'fill',
            ti: 'Boolean'
          }, {
            n: 'outline',
            ti: 'Boolean'
          }]
      }, {
        ln: 'ContainerType',
        bti: '.FeatureType'
      }, {
        ln: 'SnippetType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'maxLines',
            ti: 'Int',
            an: {
              lp: 'maxLines'
            },
            t: 'a'
          }]
      }, {
        ln: 'LatLonAltBoxType',
        bti: '.LatLonBoxType',
        ps: [{
            n: 'minAltitude',
            ti: 'Double'
          }, {
            n: 'maxAltitude',
            ti: 'Double'
          }, {
            n: 'altitudeMode'
          }]
      }, {
        ln: 'MultiGeometryType',
        bti: '.GeometryType',
        ps: [{
            n: 'geometry',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'Geometry',
            ti: '.GeometryType',
            t: 'er'
          }]
      }, {
        ln: 'ModelType',
        bti: '.GeometryType',
        ps: [{
            n: 'altitudeMode'
          }, {
            n: 'location',
            en: 'Location',
            ti: '.LocationType'
          }, {
            n: 'orientation',
            en: 'Orientation',
            ti: '.OrientationType'
          }, {
            n: 'scale',
            en: 'Scale',
            ti: '.ScaleType'
          }, {
            n: 'link',
            en: 'Link',
            ti: '.LinkType'
          }]
      }, {
        ln: 'TimeSpanType',
        bti: '.TimePrimitiveType',
        ps: [{
            n: 'begin'
          }, {
            n: 'end'
          }]
      }, {
        ln: 'GroundOverlayType',
        bti: '.OverlayType',
        ps: [{
            n: 'altitude',
            ti: 'Double'
          }, {
            n: 'altitudeMode'
          }, {
            n: 'latLonBox',
            en: 'LatLonBox',
            ti: '.LatLonBoxType'
          }]
      }, {
        ln: 'ScreenOverlayType',
        bti: '.OverlayType',
        ps: [{
            n: 'overlayXY',
            ti: '.Vec2Type'
          }, {
            n: 'screenXY',
            ti: '.Vec2Type'
          }, {
            n: 'rotationXY',
            ti: '.Vec2Type'
          }, {
            n: 'size',
            ti: '.Vec2Type'
          }, {
            n: 'rotation',
            ti: 'Float'
          }]
      }, {
        ln: 'Vec2Type',
        tn: 'vec2Type',
        ps: [{
            n: 'x',
            ti: 'Double',
            an: {
              lp: 'x'
            },
            t: 'a'
          }, {
            n: 'y',
            ti: 'Double',
            an: {
              lp: 'y'
            },
            t: 'a'
          }, {
            n: 'xunits',
            an: {
              lp: 'xunits'
            },
            t: 'a'
          }, {
            n: 'yunits',
            an: {
              lp: 'yunits'
            },
            t: 'a'
          }]
      }, {
        ln: 'UpdateType',
        ps: [{
            n: 'targetHref',
            rq: true
          }, {
            n: 'createOrDeleteOrChange',
            mno: 0,
            col: true,
            etis: [{
                en: 'Create',
                ti: '.CreateType'
              }, {
                en: 'Delete',
                ti: '.DeleteType'
              }, {
                en: 'Change',
                ti: '.ChangeType'
              }, {
                en: 'Replace',
                ti: '.ReplaceType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'IconStyleType',
        bti: '.ColorStyleType',
        ps: [{
            n: 'scale',
            ti: 'Float'
          }, {
            n: 'heading',
            ti: 'Float'
          }, {
            n: 'icon',
            en: 'Icon',
            ti: '.IconStyleIconType'
          }, {
            n: 'hotSpot',
            ti: '.Vec2Type'
          }]
      }, {
        ln: 'LabelStyleType',
        bti: '.ColorStyleType',
        ps: [{
            n: 'scale',
            ti: 'Float'
          }]
      }, {
        ln: 'StyleMapType',
        bti: '.StyleSelectorType',
        ps: [{
            n: 'pair',
            rq: true,
            col: true,
            en: 'Pair',
            ti: '.StyleMapPairType'
          }]
      }, {
        ln: 'LineStringType',
        bti: '.GeometryType',
        ps: [{
            n: 'extrude',
            ti: 'Boolean'
          }, {
            n: 'tessellate',
            ti: 'Boolean'
          }, {
            n: 'altitudeMode'
          }, {
            n: 'coordinates',
            rq: true,
            ti: {
              t: 'l'
            }
          }]
      }, {
        ln: 'ObjectType',
        ps: [{
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'targetId',
            ti: 'NCName',
            an: {
              lp: 'targetId'
            },
            t: 'a'
          }]
      }, {
        ln: 'PlacemarkType',
        bti: '.FeatureType',
        ps: [{
            n: 'geometry',
            mx: false,
            dom: false,
            en: 'Geometry',
            ti: '.GeometryType',
            t: 'er'
          }]
      }, {
        ln: 'ListStyleType',
        bti: '.ObjectType',
        ps: [{
            n: 'listItemType'
          }, {
            n: 'bgColor',
            ti: 'HexBinary'
          }, {
            n: 'itemIcon',
            mno: 0,
            col: true,
            en: 'ItemIcon',
            ti: '.ItemIconType'
          }]
      }, {
        ln: 'ChangeType',
        ps: [{
            n: 'objectOrFeatureOrGeometry',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Geometry',
                ti: '.GeometryType'
              }, {
                en: 'Feature',
                ti: '.FeatureType'
              }, {
                en: 'TimePrimitive',
                ti: '.TimePrimitiveType'
              }, {
                en: 'Object',
                ti: '.ObjectType'
              }, {
                en: 'StyleSelector',
                ti: '.StyleSelectorType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'LodType',
        bti: '.ObjectType',
        ps: [{
            n: 'minLodPixels',
            ti: 'Float'
          }, {
            n: 'maxLodPixels',
            ti: 'Float'
          }, {
            n: 'minFadeExtent',
            ti: 'Float'
          }, {
            n: 'maxFadeExtent',
            ti: 'Float'
          }]
      }, {
        ln: 'IconStyleIconType',
        bti: '.ObjectType',
        ps: [{
            n: 'href',
            rq: true
          }]
      }, {
        ln: 'DocumentType',
        bti: '.ContainerType',
        ps: [{
            n: 'feature',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Feature',
            ti: '.FeatureType',
            t: 'er'
          }]
      }, {
        ln: 'FeatureType',
        bti: '.ObjectType',
        ps: [{
            n: 'name'
          }, {
            n: 'visibility',
            ti: 'Boolean'
          }, {
            n: 'open',
            ti: 'Boolean'
          }, {
            n: 'address'
          }, {
            n: 'phoneNumber'
          }, {
            n: 'snippet',
            en: 'Snippet',
            ti: '.SnippetType'
          }, {
            n: 'description'
          }, {
            n: 'lookAt',
            en: 'LookAt',
            ti: '.LookAtType'
          }, {
            n: 'timePrimitive',
            mx: false,
            dom: false,
            en: 'TimePrimitive',
            ti: '.TimePrimitiveType',
            t: 'er'
          }, {
            n: 'styleUrl'
          }, {
            n: 'styleSelector',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'StyleSelector',
            ti: '.StyleSelectorType',
            t: 'er'
          }, {
            n: 'region',
            en: 'Region',
            ti: '.RegionType'
          }, {
            n: 'metadata',
            en: 'Metadata',
            ti: '.MetadataType'
          }]
      }, {
        ln: 'NetworkLinkType',
        bti: '.FeatureType',
        ps: [{
            n: 'refreshVisibility',
            ti: 'Boolean'
          }, {
            n: 'flyToView',
            ti: 'Boolean'
          }, {
            n: 'link',
            rq: true,
            en: 'Link',
            ti: '.LinkType'
          }, {
            n: 'url',
            rq: true,
            en: 'Url',
            ti: '.LinkType'
          }]
      }, {
        ln: 'FolderType',
        bti: '.ContainerType',
        ps: [{
            n: 'feature',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'Feature',
            ti: '.FeatureType',
            t: 'er'
          }]
      }, {
        ln: 'OverlayType',
        bti: '.FeatureType',
        ps: [{
            n: 'color',
            ti: 'HexBinary'
          }, {
            n: 'drawOrder',
            ti: 'Int'
          }, {
            n: 'icon',
            en: 'Icon',
            ti: '.LinkType'
          }]
      }, {
        ln: 'PolygonType',
        bti: '.GeometryType',
        ps: [{
            n: 'extrude',
            ti: 'Boolean'
          }, {
            n: 'tessellate',
            ti: 'Boolean'
          }, {
            n: 'altitudeMode'
          }, {
            n: 'outerBoundaryIs',
            ti: '.BoundaryType'
          }, {
            n: 'innerBoundaryIs',
            mno: 0,
            col: true,
            ti: '.BoundaryType'
          }]
      }, {
        ln: 'ItemIconType',
        bti: '.ObjectType',
        ps: [{
            n: 'state',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: {
              t: 'l'
            },
            t: 'er'
          }, {
            n: 'href',
            rq: true
          }]
      }, {
        ln: 'ColorStyleType',
        bti: '.ObjectType',
        ps: [{
            n: 'color',
            ti: 'HexBinary'
          }, {
            n: 'colorMode'
          }]
      }, {
        ln: 'TimeStampType',
        bti: '.TimePrimitiveType',
        ps: [{
            n: 'when',
            rq: true
          }]
      }, {
        ln: 'LinkType',
        bti: '.ObjectType',
        ps: [{
            n: 'href'
          }, {
            n: 'refreshMode'
          }, {
            n: 'refreshInterval',
            ti: 'Float'
          }, {
            n: 'viewRefreshMode'
          }, {
            n: 'viewRefreshTime',
            ti: 'Float'
          }, {
            n: 'viewBoundScale',
            ti: 'Float'
          }, {
            n: 'viewFormat'
          }, {
            n: 'httpQuery'
          }]
      }, {
        ln: 'ScaleType',
        bti: '.ObjectType',
        ps: [{
            n: 'x',
            ti: 'Double'
          }, {
            n: 'y',
            ti: 'Double'
          }, {
            n: 'z',
            ti: 'Double'
          }]
      }, {
        ln: 'CreateType',
        ps: [{
            n: 'folder',
            rq: true,
            en: 'Folder',
            ti: '.FolderType'
          }]
      }, {
        ln: 'LocationType',
        bti: '.ObjectType',
        ps: [{
            n: 'longitude',
            ti: 'Double'
          }, {
            n: 'latitude',
            ti: 'Double'
          }, {
            n: 'altitude',
            ti: 'Double'
          }]
      }, {
        ln: 'LineStyleType',
        bti: '.ColorStyleType',
        ps: [{
            n: 'width',
            ti: 'Float'
          }]
      }, {
        ln: 'StyleSelectorType',
        bti: '.ObjectType'
      }, {
        ln: 'PointType',
        bti: '.GeometryType',
        ps: [{
            n: 'extrude',
            ti: 'Boolean'
          }, {
            n: 'tessellate',
            ti: 'Boolean'
          }, {
            n: 'altitudeMode'
          }, {
            n: 'coordinates',
            rq: true,
            ti: {
              t: 'l'
            }
          }]
      }, {
        ln: 'OrientationType',
        bti: '.ObjectType',
        ps: [{
            n: 'heading',
            ti: 'Double'
          }, {
            n: 'tilt',
            ti: 'Double'
          }, {
            n: 'roll',
            ti: 'Double'
          }]
      }, {
        ln: 'BoundaryType',
        tn: 'boundaryType',
        ps: [{
            n: 'linearRing',
            rq: true,
            en: 'LinearRing',
            ti: '.LinearRingType'
          }]
      }, {
        ln: 'RegionType',
        bti: '.ObjectType',
        ps: [{
            n: 'latLonAltBox',
            rq: true,
            en: 'LatLonAltBox',
            ti: '.LatLonAltBoxType'
          }, {
            n: 'lod',
            en: 'Lod',
            ti: '.LodType'
          }]
      }, {
        ln: 'BalloonStyleType',
        bti: '.ObjectType',
        ps: [{
            n: 'color',
            ti: 'HexBinary'
          }, {
            n: 'bgColor',
            ti: 'HexBinary'
          }, {
            n: 'textColor',
            ti: 'HexBinary'
          }, {
            n: 'text'
          }]
      }, {
        ln: 'LookAtType',
        bti: '.ObjectType',
        ps: [{
            n: 'longitude',
            ti: 'Double'
          }, {
            n: 'latitude',
            ti: 'Double'
          }, {
            n: 'altitude',
            ti: 'Double'
          }, {
            n: 'range',
            ti: 'Double'
          }, {
            n: 'tilt',
            ti: 'Double'
          }, {
            n: 'heading',
            ti: 'Double'
          }, {
            n: 'altitudeMode'
          }]
      }, {
        ln: 'StyleType',
        bti: '.StyleSelectorType',
        ps: [{
            n: 'iconStyle',
            en: 'IconStyle',
            ti: '.IconStyleType'
          }, {
            n: 'labelStyle',
            en: 'LabelStyle',
            ti: '.LabelStyleType'
          }, {
            n: 'lineStyle',
            en: 'LineStyle',
            ti: '.LineStyleType'
          }, {
            n: 'polyStyle',
            en: 'PolyStyle',
            ti: '.PolyStyleType'
          }, {
            n: 'balloonStyle',
            en: 'BalloonStyle',
            ti: '.BalloonStyleType'
          }, {
            n: 'listStyle',
            en: 'ListStyle',
            ti: '.ListStyleType'
          }]
      }, {
        ln: 'ReplaceType',
        ps: [{
            n: 'feature',
            mx: false,
            dom: false,
            en: 'Feature',
            ti: '.FeatureType',
            t: 'er'
          }]
      }, {
        ln: 'GeometryType',
        bti: '.ObjectType'
      }, {
        ln: 'KmlType',
        ps: [{
            n: 'networkLinkControl',
            en: 'NetworkLinkControl',
            ti: '.NetworkLinkControlType'
          }, {
            n: 'feature',
            mx: false,
            dom: false,
            en: 'Feature',
            ti: '.FeatureType',
            t: 'er'
          }]
      }, {
        ln: 'NetworkLinkControlType',
        ps: [{
            n: 'minRefreshPeriod',
            ti: 'Float'
          }, {
            n: 'cookie'
          }, {
            n: 'message'
          }, {
            n: 'linkName'
          }, {
            n: 'linkDescription'
          }, {
            n: 'linkSnippet',
            ti: '.SnippetType'
          }, {
            n: 'expires'
          }, {
            n: 'update',
            en: 'Update',
            ti: '.UpdateType'
          }, {
            n: 'lookAt',
            en: 'LookAt',
            ti: '.LookAtType'
          }]
      }, {
        ln: 'LinearRingType',
        bti: '.GeometryType',
        ps: [{
            n: 'extrude',
            ti: 'Boolean'
          }, {
            n: 'tessellate',
            ti: 'Boolean'
          }, {
            n: 'altitudeMode'
          }, {
            n: 'coordinates',
            rq: true,
            ti: {
              t: 'l'
            }
          }]
      }, {
        t: 'enum',
        ln: 'UnitsEnum',
        vs: ['fraction', 'pixels', 'insetPixels']
      }, {
        t: 'enum',
        ln: 'ItemIconStateEnum',
        vs: ['open', 'closed', 'error', 'fetching0', 'fetching1', 'fetching2']
      }, {
        t: 'enum',
        ln: 'RefreshModeEnum',
        vs: ['onChange', 'onInterval', 'onExpire']
      }, {
        t: 'enum',
        ln: 'ListItemTypeEnum',
        vs: ['radioFolder', 'check', 'checkHideChildren', 'checkOffOnly']
      }, {
        t: 'enum',
        ln: 'StyleStateEnum',
        vs: ['normal', 'highlight']
      }, {
        t: 'enum',
        ln: 'ColorModeEnum',
        vs: ['normal', 'random']
      }, {
        t: 'enum',
        ln: 'AltitudeModeEnum',
        vs: ['clampToGround', 'relativeToGround', 'absolute']
      }, {
        t: 'enum',
        ln: 'ViewRefreshModeEnum',
        vs: ['never', 'onRequest', 'onStop', 'onRegion']
      }],
    eis: [{
        en: 'state',
        ti: {
          t: 'l'
        },
        sc: '.ItemIconType'
      }, {
        en: 'Style',
        ti: '.StyleType',
        sh: 'StyleSelector'
      }, {
        en: 'kml',
        ti: '.KmlType'
      }, {
        en: 'Orientation',
        ti: '.OrientationType',
        sh: 'Object'
      }, {
        en: 'Polygon',
        ti: '.PolygonType',
        sh: 'Geometry'
      }, {
        en: 'LookAt',
        ti: '.LookAtType',
        sh: 'Object'
      }, {
        en: 'ListStyle',
        ti: '.ListStyleType',
        sh: 'Object'
      }, {
        en: 'Location',
        ti: '.LocationType',
        sh: 'Object'
      }, {
        en: 'TimeSpan',
        ti: '.TimeSpanType',
        sh: 'TimePrimitive'
      }, {
        en: 'MultiGeometry',
        ti: '.MultiGeometryType',
        sh: 'Geometry'
      }, {
        en: 'Lod',
        ti: '.LodType',
        sh: 'Object'
      }, {
        en: 'PolyStyle',
        ti: '.PolyStyleType',
        sh: 'Object'
      }, {
        en: 'Point',
        ti: '.PointType',
        sh: 'Geometry'
      }, {
        en: 'Folder',
        ti: '.FolderType',
        sh: 'Feature'
      }, {
        en: 'TimePrimitive',
        ti: '.TimePrimitiveType'
      }, {
        en: 'Region',
        ti: '.RegionType',
        sh: 'Object'
      }, {
        en: 'LineStyle',
        ti: '.LineStyleType',
        sh: 'Object'
      }, {
        en: 'Icon',
        ti: '.LinkType',
        sh: 'Object'
      }, {
        en: 'Scale',
        ti: '.ScaleType',
        sh: 'Object'
      }, {
        en: 'BalloonStyle',
        ti: '.BalloonStyleType',
        sh: 'Object'
      }, {
        en: 'StyleMap',
        ti: '.StyleMapType',
        sh: 'StyleSelector'
      }, {
        en: 'ScreenOverlay',
        ti: '.ScreenOverlayType',
        sh: 'Feature'
      }, {
        en: 'LinearRing',
        ti: '.LinearRingType',
        sh: 'Geometry'
      }, {
        en: 'Document',
        ti: '.DocumentType',
        sh: 'Feature'
      }, {
        en: 'coordinates',
        ti: {
          t: 'l'
        }
      }, {
        en: 'LatLonAltBox',
        ti: '.LatLonAltBoxType'
      }, {
        en: 'IconStyle',
        ti: '.IconStyleType',
        sh: 'Object'
      }, {
        en: 'Object',
        ti: '.ObjectType'
      }, {
        en: 'TimeStamp',
        ti: '.TimeStampType',
        sh: 'TimePrimitive'
      }, {
        en: 'Feature',
        ti: '.FeatureType'
      }, {
        en: 'NetworkLink',
        ti: '.NetworkLinkType',
        sh: 'Feature'
      }, {
        en: 'LabelStyle',
        ti: '.LabelStyleType',
        sh: 'Object'
      }, {
        en: 'Geometry',
        ti: '.GeometryType'
      }, {
        en: 'Link',
        ti: '.LinkType',
        sh: 'Object'
      }, {
        en: 'LatLonBox',
        ti: '.LatLonBoxType',
        sh: 'Object'
      }, {
        en: 'StyleSelector',
        ti: '.StyleSelectorType'
      }, {
        en: 'GroundOverlay',
        ti: '.GroundOverlayType',
        sh: 'Feature'
      }, {
        en: 'Placemark',
        ti: '.PlacemarkType',
        sh: 'Feature'
      }, {
        en: 'Model',
        ti: '.ModelType',
        sh: 'Geometry'
      }, {
        en: 'styleUrl'
      }, {
        en: 'LineString',
        ti: '.LineStringType',
        sh: 'Geometry'
      }]
  };
  return {
    KML_2_1: KML_2_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], KML_2_1_Module_Factory);
}
else {
  var KML_2_1_Module = KML_2_1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.KML_2_1 = KML_2_1_Module.KML_2_1;
  }
  else {
    var KML_2_1 = KML_2_1_Module.KML_2_1;
  }
}