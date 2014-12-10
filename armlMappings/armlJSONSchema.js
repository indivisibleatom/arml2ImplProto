var armlJSONSchema_Module_Factory = function () {
  var armlJSONSchema = {
    name: 'armlJSONSchema',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        localName: 'ConditionType',
        baseTypeInfo: 'armlJSONSchema.ARElementType'
      }, {
        localName: 'ARElementType',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TrackerType',
        baseTypeInfo: 'armlJSONSchema.ARElementType',
        propertyInfos: [{
            name: 'uri',
            elementName: {
              localPart: 'uri',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.TrackerType.Uri'
          }, {
            name: 'src',
            elementName: {
              localPart: 'src',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.TrackerType.Src'
          }]
      }, {
        localName: 'SelectedConditionType',
        baseTypeInfo: 'armlJSONSchema.ConditionType',
        propertyInfos: [{
            name: 'listener',
            elementName: {
              localPart: 'listener',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'selected',
            elementName: {
              localPart: 'selected',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'FillType',
        baseTypeInfo: 'armlJSONSchema.VisualAsset2DType',
        propertyInfos: [{
            name: 'style',
            elementName: {
              localPart: 'style',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'clazz',
            elementName: {
              localPart: 'class',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }]
      }, {
        localName: 'VisualAsset2DType',
        baseTypeInfo: 'armlJSONSchema.VisualAssetType',
        propertyInfos: [{
            name: 'width',
            elementName: {
              localPart: 'width',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'height',
            elementName: {
              localPart: 'height',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'orientationMode',
            elementName: {
              localPart: 'orientationMode',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'backside',
            elementName: {
              localPart: 'backside',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }]
      }, {
        localName: 'VisualAssetType',
        baseTypeInfo: 'armlJSONSchema.ARElementType',
        propertyInfos: [{
            name: 'enabled',
            elementName: {
              localPart: 'enabled',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'zOrder',
            elementName: {
              localPart: 'zOrder',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Int'
          }, {
            name: 'conditions',
            elementName: {
              localPart: 'conditions',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.VisualAssetType.Conditions'
          }, {
            name: 'orientation',
            elementName: {
              localPart: 'Orientation',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.OrientationType'
          }, {
            name: 'scalingMode',
            elementName: {
              localPart: 'ScalingMode',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ScalingModeType'
          }]
      }, {
        localName: 'DistanceConditionType',
        baseTypeInfo: 'armlJSONSchema.ConditionType',
        propertyInfos: [{
            name: 'max',
            elementName: {
              localPart: 'max',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'min',
            elementName: {
              localPart: 'min',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }]
      }, {
        localName: 'ScreenAnchorType',
        baseTypeInfo: 'armlJSONSchema.AnchorType',
        propertyInfos: [{
            name: 'style',
            elementName: {
              localPart: 'style',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'clazz',
            elementName: {
              localPart: 'class',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'assets',
            elementName: {
              localPart: 'assets',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ScreenAnchorType.Assets'
          }]
      }, {
        localName: 'AnchorType',
        baseTypeInfo: 'armlJSONSchema.ARElementType',
        propertyInfos: [{
            name: 'enabled',
            elementName: {
              localPart: 'enabled',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'LabelType',
        baseTypeInfo: 'armlJSONSchema.VisualAsset2DType',
        propertyInfos: [{
            name: 'href',
            elementName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.LabelType.Href'
          }, {
            name: 'src',
            elementName: {
              localPart: 'src',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'AnyType'
          }, {
            name: 'hyperlinkBehavior',
            elementName: {
              localPart: 'hyperlinkBehavior',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'viewportWidth',
            elementName: {
              localPart: 'viewportWidth',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'TextType',
        baseTypeInfo: 'armlJSONSchema.VisualAsset2DType',
        propertyInfos: [{
            name: 'src',
            elementName: {
              localPart: 'src',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'style',
            elementName: {
              localPart: 'style',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'clazz',
            elementName: {
              localPart: 'class',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }]
      }, {
        localName: 'ImageType',
        baseTypeInfo: 'armlJSONSchema.VisualAsset2DType',
        propertyInfos: [{
            name: 'href',
            elementName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ImageType.Href'
          }]
      }, {
        localName: 'FeatureType',
        baseTypeInfo: 'armlJSONSchema.ARElementType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'description',
            elementName: {
              localPart: 'description',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'enabled',
            elementName: {
              localPart: 'enabled',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'metadata',
            elementName: {
              localPart: 'metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.FeatureType.Metadata'
          }, {
            name: 'anchors',
            elementName: {
              localPart: 'anchors',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.FeatureType.Anchors'
          }]
      }, {
        localName: 'GeometryType',
        baseTypeInfo: 'armlJSONSchema.ARAnchorType',
        propertyInfos: [{
            name: 'point',
            elementName: 'Point',
            typeInfo: 'armlJSONSchema.PointType'
          }, {
            name: 'lineString',
            elementName: 'LineString',
            typeInfo: 'armlJSONSchema.LineStringType'
          }, {
            name: 'polygon',
            elementName: 'Polygon',
            typeInfo: 'armlJSONSchema.PolygonType'
          }]
      }, {
        localName: 'ARAnchorType',
        baseTypeInfo: 'armlJSONSchema.AnchorType',
        propertyInfos: [{
            name: 'assets',
            elementName: {
              localPart: 'assets',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ARAnchorType.Assets'
          }]
      }, {
        localName: 'RelativeToType',
        baseTypeInfo: 'armlJSONSchema.ARAnchorType',
        propertyInfos: [{
            name: 'ref',
            elementName: {
              localPart: 'ref',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.RelativeToType.Ref'
          }, {
            name: 'point',
            elementName: 'Point',
            typeInfo: 'armlJSONSchema.PointType'
          }, {
            name: 'lineString',
            elementName: 'LineString',
            typeInfo: 'armlJSONSchema.LineStringType'
          }, {
            name: 'polygon',
            elementName: 'Polygon',
            typeInfo: 'armlJSONSchema.PolygonType'
          }]
      }, {
        localName: 'ModelType',
        baseTypeInfo: 'armlJSONSchema.VisualAssetType',
        propertyInfos: [{
            name: 'href',
            elementName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ModelType.Href'
          }, {
            name: 'type',
            elementName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'scale',
            elementName: {
              localPart: 'Scale',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ScaleType'
          }]
      }, {
        localName: 'ArmlType',
        propertyInfos: [{
            name: 'arElements',
            elementName: {
              localPart: 'ARElements',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ArmlType.ARElements'
          }, {
            name: 'style',
            collection: true,
            elementName: {
              localPart: 'style',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ArmlType.Style'
          }, {
            name: 'script',
            collection: true,
            elementName: {
              localPart: 'script',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ArmlType.Script'
          }]
      }, {
        localName: 'TrackableType',
        baseTypeInfo: 'armlJSONSchema.ARAnchorType',
        propertyInfos: [{
            name: 'config',
            collection: true,
            elementName: {
              localPart: 'config',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.TrackableType.Config'
          }, {
            name: 'size',
            elementName: {
              localPart: 'size',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }]
      }, {
        localName: 'ScaleType',
        propertyInfos: [{
            name: 'x',
            elementName: {
              localPart: 'x',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'y',
            elementName: {
              localPart: 'y',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'z',
            elementName: {
              localPart: 'z',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }]
      }, {
        localName: 'ScalingModeType',
        baseTypeInfo: 'armlJSONSchema.ARElementType',
        propertyInfos: [{
            name: 'minScalingDistance',
            elementName: {
              localPart: 'minScalingDistance',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'maxScalingDistance',
            elementName: {
              localPart: 'maxScalingDistance',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'scalingFactor',
            elementName: {
              localPart: 'scalingFactor',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OrientationType',
        propertyInfos: [{
            name: 'roll',
            elementName: {
              localPart: 'roll',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'tilt',
            elementName: {
              localPart: 'tilt',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }, {
            name: 'heading',
            elementName: {
              localPart: 'heading',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'Double'
          }]
      }, {
        localName: 'ArcType',
        propertyInfos: [{
            name: 'locatorTitle',
            collection: true,
            elementName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            typeInfo: 'armlJSONSchema.TitleEltType'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'from',
            type: 'attribute'
          }, {
            name: 'to',
            type: 'attribute'
          }]
      }, {
        localName: 'ResourceType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'label',
            type: 'attribute'
          }]
      }, {
        localName: 'TitleEltType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LocatorType',
        propertyInfos: [{
            name: 'locatorTitle',
            collection: true,
            elementName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            typeInfo: 'armlJSONSchema.TitleEltType'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'label',
            type: 'attribute'
          }]
      }, {
        localName: 'Simple',
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'Extended',
        propertyInfos: [{
            name: 'extendedModel',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'locator',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: 'armlJSONSchema.LocatorType'
              }, {
                elementName: {
                  localPart: 'title',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: 'armlJSONSchema.TitleEltType'
              }, {
                elementName: {
                  localPart: 'resource',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: 'armlJSONSchema.ResourceType'
              }, {
                elementName: {
                  localPart: 'arc',
                  namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
                },
                typeInfo: 'armlJSONSchema.ArcType'
              }],
            type: 'elements'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }]
      }, {
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopoPointType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopologyType',
        propertyInfos: [{
            name: 'directedNode',
            typeInfo: 'armlJSONSchema.DirectedNodePropertyType'
          }]
      }, {
        localName: 'DerivedCRSPropertyType',
        propertyInfos: [{
            name: 'derivedCRS',
            elementName: 'DerivedCRS',
            typeInfo: 'armlJSONSchema.DerivedCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DomainSetType',
        propertyInfos: [{
            name: 'abstractGeometry',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'abstractTimeObject',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTimeObject',
            typeInfo: 'armlJSONSchema.AbstractTimeObjectType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TopoVolumePropertyType',
        propertyInfos: [{
            name: 'topoVolume',
            elementName: 'TopoVolume',
            typeInfo: 'armlJSONSchema.TopoVolumeType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGeometricPrimitiveType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometryType'
      }, {
        localName: 'AbstractGeometryType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType',
        propertyInfos: [{
            name: 'srsName',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGMLType',
        propertyInfos: [{
            name: 'metaDataProperty',
            collection: true,
            typeInfo: 'armlJSONSchema.MetaDataPropertyType'
          }, {
            name: 'description',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'descriptionReference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }, {
            name: 'identifier',
            typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
          }, {
            name: 'name',
            collection: true,
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ArcStringType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'numArc',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numArc'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'numDerivativesAtStart',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numDerivativesAtStart'
            },
            type: 'attribute'
          }, {
            name: 'numDerivativesAtEnd',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numDerivativesAtEnd'
            },
            type: 'attribute'
          }, {
            name: 'numDerivativeInterior',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numDerivativeInterior'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SphereType',
        baseTypeInfo: 'armlJSONSchema.AbstractGriddedSurfaceType',
        propertyInfos: [{
            name: 'horizontalCurveType',
            attributeName: {
              localPart: 'horizontalCurveType'
            },
            type: 'attribute'
          }, {
            name: 'verticalCurveType',
            attributeName: {
              localPart: 'verticalCurveType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGriddedSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractParametricCurveSurfaceType',
        propertyInfos: [{
            name: 'arows',
            elementName: 'rows',
            typeInfo: 'armlJSONSchema.AbstractGriddedSurfaceType.Rows'
          }, {
            name: 'rows',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'rows'
            },
            type: 'attribute'
          }, {
            name: 'columns',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'columns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractParametricCurveSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractSurfacePatchType'
      }, {
        localName: 'CoverageFunctionType',
        propertyInfos: [{
            name: 'mappingRule',
            elementName: 'MappingRule',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'coverageMappingRule',
            elementName: 'CoverageMappingRule',
            typeInfo: 'armlJSONSchema.MappingRuleType'
          }, {
            name: 'gridFunction',
            elementName: 'GridFunction',
            typeInfo: 'armlJSONSchema.GridFunctionType'
          }]
      }, {
        localName: 'TimeCSPropertyType',
        propertyInfos: [{
            name: 'timeCS',
            elementName: 'TimeCS',
            typeInfo: 'armlJSONSchema.TimeCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TopoCurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopologyType',
        propertyInfos: [{
            name: 'directedEdge',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedEdgePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RectifiedGridType',
        baseTypeInfo: 'armlJSONSchema.GridType'
      }, {
        localName: 'GridType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometryType',
        propertyInfos: [{
            name: 'rest',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'axisName'
              }, {
                elementName: 'limits',
                typeInfo: 'armlJSONSchema.GridLimitsType'
              }, {
                elementName: 'axisLabels',
                typeInfo: {
                  type: 'list'
                }
              }],
            type: 'elementRefs'
          }, {
            name: 'dimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimension'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AffineCSPropertyType',
        propertyInfos: [{
            name: 'affineCS',
            elementName: 'AffineCS',
            typeInfo: 'armlJSONSchema.AffineCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'FeaturePropertyType',
        propertyInfos: [{
            name: 'abstractFeature',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractFeature',
            typeInfo: 'armlJSONSchema.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GeometryPropertyType',
        propertyInfos: [{
            name: 'abstractGeometry',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GeometricComplexType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometryType',
        propertyInfos: [{
            name: 'element',
            collection: true,
            typeInfo: 'armlJSONSchema.GeometricPrimitivePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ParameterValueType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralParameterValueType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'armlJSONSchema.MeasureType'
          }, {
            name: 'dmsAngleValue',
            typeInfo: 'armlJSONSchema.DMSAngleType'
          }, {
            name: 'stringValue'
          }, {
            name: 'integerValue',
            typeInfo: 'Integer'
          }, {
            name: 'booleanValue',
            typeInfo: 'Boolean'
          }, {
            name: 'valueList',
            typeInfo: 'armlJSONSchema.MeasureListType'
          }, {
            name: 'integerValueList',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Integer'
            }
          }, {
            name: 'valueFile'
          }, {
            name: 'operationParameter',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.OperationParameterPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractGeneralParameterValueType'
      }, {
        localName: 'SingleCRSPropertyType',
        propertyInfos: [{
            name: 'abstractSingleCRS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSingleCRS',
            typeInfo: 'armlJSONSchema.AbstractCRSType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GeometryArrayPropertyType',
        propertyInfos: [{
            name: 'abstractGeometry',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGeneralOperationParameterPropertyType',
        propertyInfos: [{
            name: 'abstractGeneralOperationParameter',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeneralOperationParameter',
            typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DiscreteCoverageType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoverageType',
        propertyInfos: [{
            name: 'coverageFunction',
            typeInfo: 'armlJSONSchema.CoverageFunctionType'
          }]
      }, {
        localName: 'AbstractCoverageType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureType',
        propertyInfos: [{
            name: 'domainSet',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.DomainSetType',
            type: 'elementRef'
          }, {
            name: 'rangeSet',
            typeInfo: 'armlJSONSchema.RangeSetType'
          }]
      }, {
        localName: 'AbstractFeatureType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType',
        propertyInfos: [{
            name: 'boundedBy',
            typeInfo: 'armlJSONSchema.BoundingShapeType'
          }, {
            name: 'location',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.LocationPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractTimeTopologyPrimitiveType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimePrimitiveType',
        propertyInfos: [{
            name: 'complex',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'AbstractTimePrimitiveType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeObjectType',
        propertyInfos: [{
            name: 'relatedTime',
            collection: true,
            typeInfo: 'armlJSONSchema.RelatedTimeType'
          }]
      }, {
        localName: 'AbstractTimeObjectType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType'
      }, {
        localName: 'CartesianCSPropertyType',
        propertyInfos: [{
            name: 'cartesianCS',
            elementName: 'CartesianCS',
            typeInfo: 'armlJSONSchema.CartesianCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'PointPropertyType',
        propertyInfos: [{
            name: 'point',
            elementName: 'Point',
            typeInfo: 'armlJSONSchema.PointType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeInstantType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeGeometricPrimitiveType',
        propertyInfos: [{
            name: 'timePosition',
            typeInfo: 'armlJSONSchema.TimePositionType'
          }]
      }, {
        localName: 'AbstractTimeGeometricPrimitiveType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimePrimitiveType',
        propertyInfos: [{
            name: 'frame',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EngineeringCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'affineCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AffineCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'cartesianCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CartesianCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'cylindricalCS',
            typeInfo: 'armlJSONSchema.CylindricalCSPropertyType'
          }, {
            name: 'linearCS',
            typeInfo: 'armlJSONSchema.LinearCSPropertyType'
          }, {
            name: 'polarCS',
            typeInfo: 'armlJSONSchema.PolarCSPropertyType'
          }, {
            name: 'sphericalCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.SphericalCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'userDefinedCS',
            typeInfo: 'armlJSONSchema.UserDefinedCSPropertyType'
          }, {
            name: 'coordinateSystem',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CoordinateSystemPropertyType',
            type: 'elementRef'
          }, {
            name: 'engineeringDatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.EngineeringDatumPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractCRSType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'domainOfValidity',
            collection: true,
            typeInfo: 'armlJSONSchema.DomainOfValidity'
          }, {
            name: 'scope',
            collection: true
          }]
      }, {
        localName: 'DefinitionType',
        baseTypeInfo: 'armlJSONSchema.DefinitionBaseType',
        propertyInfos: [{
            name: 'remarks'
          }]
      }, {
        localName: 'OperationParameterGroupPropertyType',
        propertyInfos: [{
            name: 'operationParameterGroup',
            elementName: 'OperationParameterGroup',
            typeInfo: 'armlJSONSchema.OperationParameterGroupType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CRSPropertyType',
        propertyInfos: [{
            name: 'abstractCRS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCRS',
            typeInfo: 'armlJSONSchema.AbstractCRSType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EllipsoidalCSPropertyType',
        propertyInfos: [{
            name: 'ellipsoidalCS',
            elementName: 'EllipsoidalCS',
            typeInfo: 'armlJSONSchema.EllipsoidalCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGeneralParameterValuePropertyType',
        propertyInfos: [{
            name: 'abstractGeneralParameterValue',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeneralParameterValue',
            typeInfo: 'armlJSONSchema.AbstractGeneralParameterValueType',
            type: 'elementRef'
          }]
      }, {
        localName: 'OperationMethodType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'formulaCitation',
            typeInfo: 'armlJSONSchema.FormulaCitation'
          }, {
            name: 'formula',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CodeType',
            type: 'elementRef'
          }, {
            name: 'sourceDimensions',
            typeInfo: 'Integer'
          }, {
            name: 'targetDimensions',
            typeInfo: 'Integer'
          }, {
            name: 'parameter',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractRingPropertyType',
        propertyInfos: [{
            name: 'abstractRing',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractRing',
            typeInfo: 'armlJSONSchema.AbstractRingType',
            type: 'elementRef'
          }]
      }, {
        localName: 'SurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfaceType',
        propertyInfos: [{
            name: 'patches',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.SurfacePatchArrayPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricPrimitiveType'
      }, {
        localName: 'MeasureType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Double',
            type: 'value'
          }, {
            name: 'uom',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'VerticalCSPropertyType',
        propertyInfos: [{
            name: 'verticalCS',
            elementName: 'VerticalCS',
            typeInfo: 'armlJSONSchema.VerticalCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractSolidType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricPrimitiveType'
      }, {
        localName: 'GeneralConversionPropertyType',
        propertyInfos: [{
            name: 'abstractGeneralConversion',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeneralConversion',
            typeInfo: 'armlJSONSchema.AbstractGeneralConversionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'StringOrRefType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'UserDefinedCSPropertyType',
        propertyInfos: [{
            name: 'userDefinedCS',
            elementName: 'UserDefinedCS',
            typeInfo: 'armlJSONSchema.UserDefinedCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'SurfacePropertyType',
        propertyInfos: [{
            name: 'abstractSurface',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSurface',
            typeInfo: 'armlJSONSchema.AbstractSurfaceType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PolarCSPropertyType',
        propertyInfos: [{
            name: 'polarCS',
            elementName: 'PolarCS',
            typeInfo: 'armlJSONSchema.PolarCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DirectedObservationAtDistanceType',
        baseTypeInfo: 'armlJSONSchema.DirectedObservationType',
        propertyInfos: [{
            name: 'distance',
            typeInfo: 'armlJSONSchema.MeasureType'
          }]
      }, {
        localName: 'DirectedObservationType',
        baseTypeInfo: 'armlJSONSchema.ObservationType',
        propertyInfos: [{
            name: 'direction',
            typeInfo: 'armlJSONSchema.DirectionPropertyType'
          }]
      }, {
        localName: 'ObservationType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureType',
        propertyInfos: [{
            name: 'validTime',
            typeInfo: 'armlJSONSchema.TimePrimitivePropertyType'
          }, {
            name: 'using',
            typeInfo: 'armlJSONSchema.ProcedurePropertyType'
          }, {
            name: 'target',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.TargetPropertyType',
            type: 'elementRef'
          }, {
            name: 'resultOf',
            typeInfo: 'armlJSONSchema.ResultType'
          }]
      }, {
        localName: 'GeocentricCRSPropertyType',
        propertyInfos: [{
            name: 'geocentricCRS',
            elementName: 'GeocentricCRS',
            typeInfo: 'armlJSONSchema.GeocentricCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TinType',
        baseTypeInfo: 'armlJSONSchema.SurfaceType',
        propertyInfos: [{
            name: 'stopLines',
            collection: true,
            typeInfo: 'armlJSONSchema.LineStringSegmentArrayPropertyType'
          }, {
            name: 'breakLines',
            collection: true,
            typeInfo: 'armlJSONSchema.LineStringSegmentArrayPropertyType'
          }, {
            name: 'maxLength',
            typeInfo: 'armlJSONSchema.LengthType'
          }, {
            name: 'controlPoint',
            typeInfo: 'armlJSONSchema.TinType.ControlPoint'
          }]
      }, {
        localName: 'TemporalDatumPropertyType',
        propertyInfos: [{
            name: 'temporalDatum',
            elementName: 'TemporalDatum',
            typeInfo: 'armlJSONSchema.TemporalDatumType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LinearRingType',
        baseTypeInfo: 'armlJSONSchema.AbstractRingType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }]
      }, {
        localName: 'AbstractRingType'
      }, {
        localName: 'PrimeMeridianPropertyType',
        propertyInfos: [{
            name: 'primeMeridian',
            elementName: 'PrimeMeridian',
            typeInfo: 'armlJSONSchema.PrimeMeridianType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractCoordinateOperationType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'domainOfValidity',
            typeInfo: 'armlJSONSchema.DomainOfValidity'
          }, {
            name: 'scope',
            collection: true
          }, {
            name: 'operationVersion'
          }, {
            name: 'coordinateOperationAccuracy',
            collection: true,
            typeInfo: 'armlJSONSchema.CoordinateOperationAccuracy'
          }, {
            name: 'sourceCRS',
            typeInfo: 'armlJSONSchema.CRSPropertyType'
          }, {
            name: 'targetCRS',
            typeInfo: 'armlJSONSchema.CRSPropertyType'
          }]
      }, {
        localName: 'AbstractCoordinateSystemType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'axis',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CoordinateSystemAxisPropertyType',
            type: 'elementRef'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MappingRuleType',
        propertyInfos: [{
            name: 'ruleDefinition'
          }, {
            name: 'ruleReference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'AbstractTopologyType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType'
      }, {
        localName: 'LinearCSPropertyType',
        propertyInfos: [{
            name: 'linearCS',
            elementName: 'LinearCS',
            typeInfo: 'armlJSONSchema.LinearCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CompoundCRSPropertyType',
        propertyInfos: [{
            name: 'compoundCRS',
            elementName: 'CompoundCRS',
            typeInfo: 'armlJSONSchema.CompoundCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'VerticalCRSPropertyType',
        propertyInfos: [{
            name: 'verticalCRS',
            elementName: 'VerticalCRS',
            typeInfo: 'armlJSONSchema.VerticalCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MultiCurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
        propertyInfos: [{
            name: 'curveMember',
            collection: true,
            typeInfo: 'armlJSONSchema.CurvePropertyType'
          }, {
            name: 'curveMembers',
            typeInfo: 'armlJSONSchema.CurveArrayPropertyType'
          }]
      }, {
        localName: 'AbstractGeometricAggregateType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometryType',
        propertyInfos: [{
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BezierType',
        baseTypeInfo: 'armlJSONSchema.BSplineType'
      }, {
        localName: 'BSplineType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'degree',
            typeInfo: 'Integer'
          }, {
            name: 'knot',
            collection: true,
            typeInfo: 'armlJSONSchema.KnotPropertyType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'isPolynomial',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isPolynomial'
            },
            type: 'attribute'
          }, {
            name: 'knotType',
            attributeName: {
              localPart: 'knotType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractTopoPrimitiveType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopologyType'
      }, {
        localName: 'EllipsoidalCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'ClothoidType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'refLocation',
            typeInfo: 'armlJSONSchema.ClothoidType.RefLocation'
          }, {
            name: 'scaleFactor',
            typeInfo: 'Decimal'
          }, {
            name: 'startParameter',
            typeInfo: 'Double'
          }, {
            name: 'endParameter',
            typeInfo: 'Double'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CircleType',
        baseTypeInfo: 'armlJSONSchema.ArcType'
      }, {
        localName: 'ArcType',
        baseTypeInfo: 'armlJSONSchema.ArcStringType'
      }, {
        localName: 'BoundingShapeType',
        propertyInfos: [{
            name: 'envelope',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'Envelope',
            typeInfo: 'armlJSONSchema.EnvelopeType',
            type: 'elementRef'
          }, {
            name: '_null',
            elementName: 'Null',
            typeInfo: {
              type: 'list'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGeneralTransformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateOperationType'
      }, {
        localName: 'GeodeticCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'ellipsoidalCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.EllipsoidalCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'cartesianCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CartesianCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'sphericalCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.SphericalCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'geodeticDatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.GeodeticDatumPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'ObliqueCartesianCSPropertyType',
        propertyInfos: [{
            name: 'obliqueCartesianCS',
            elementName: 'ObliqueCartesianCS',
            typeInfo: 'armlJSONSchema.ObliqueCartesianCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EngineeringCRSPropertyType',
        propertyInfos: [{
            name: 'engineeringCRS',
            elementName: 'EngineeringCRS',
            typeInfo: 'armlJSONSchema.EngineeringCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MovingObjectStatusType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeSliceType',
        propertyInfos: [{
            name: 'position',
            typeInfo: 'armlJSONSchema.GeometryPropertyType'
          }, {
            name: 'pos',
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'locationName',
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'locationReference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }, {
            name: 'location',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.LocationPropertyType',
            type: 'elementRef'
          }, {
            name: 'speed',
            typeInfo: 'armlJSONSchema.MeasureType'
          }, {
            name: 'bearing',
            typeInfo: 'armlJSONSchema.DirectionPropertyType'
          }, {
            name: 'acceleration',
            typeInfo: 'armlJSONSchema.MeasureType'
          }, {
            name: 'elevation',
            typeInfo: 'armlJSONSchema.MeasureType'
          }, {
            name: 'status',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'statusReference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'AbstractTimeSliceType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType',
        propertyInfos: [{
            name: 'validTime',
            typeInfo: 'armlJSONSchema.TimePrimitivePropertyType'
          }, {
            name: 'dataSource',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }]
      }, {
        localName: 'TopoVolumeType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopologyType',
        propertyInfos: [{
            name: 'directedTopoSolid',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedTopoSolidPropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ImageDatumType',
        baseTypeInfo: 'armlJSONSchema.AbstractDatumType',
        propertyInfos: [{
            name: 'pixelInCell',
            typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
          }]
      }, {
        localName: 'AbstractDatumType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'domainOfValidity',
            typeInfo: 'armlJSONSchema.DomainOfValidity'
          }, {
            name: 'scope',
            collection: true
          }, {
            name: 'anchorDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CodeType',
            type: 'elementRef'
          }, {
            name: 'realizationEpoch',
            typeInfo: 'Calendar'
          }]
      }, {
        localName: 'SurfacePatchArrayPropertyType',
        propertyInfos: [{
            name: 'abstractSurfacePatch',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSurfacePatch',
            typeInfo: 'armlJSONSchema.AbstractSurfacePatchType',
            type: 'elementRef'
          }]
      }, {
        localName: 'MultiCurvePropertyType',
        propertyInfos: [{
            name: 'multiCurve',
            elementName: 'MultiCurve',
            typeInfo: 'armlJSONSchema.MultiCurveType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SolidPropertyType',
        propertyInfos: [{
            name: 'abstractSolid',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSolid',
            typeInfo: 'armlJSONSchema.AbstractSolidType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'OperationParameterPropertyType',
        propertyInfos: [{
            name: 'operationParameter',
            elementName: 'OperationParameter',
            typeInfo: 'armlJSONSchema.OperationParameterType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'SecondDefiningParameter',
        propertyInfos: [{
            name: 'inverseFlattening',
            typeInfo: 'armlJSONSchema.MeasureType'
          }, {
            name: 'semiMinorAxis',
            typeInfo: 'armlJSONSchema.LengthType'
          }, {
            name: 'isSphere',
            typeInfo: 'Boolean'
          }]
      }, {
        localName: 'LengthType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'LinearCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'TemporalCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'timeCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.TimeCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'usesTemporalCS',
            typeInfo: 'armlJSONSchema.TemporalCSPropertyType'
          }, {
            name: 'temporalDatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.TemporalDatumPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'DirectedTopoSolidPropertyType',
        propertyInfos: [{
            name: 'topoSolid',
            elementName: 'TopoSolid',
            typeInfo: 'armlJSONSchema.TopoSolidType'
          }, {
            name: 'orientation',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimeOrdinalReferenceSystemType',
        baseTypeInfo: 'armlJSONSchema.TimeReferenceSystemType',
        propertyInfos: [{
            name: 'component',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeOrdinalEraPropertyType'
          }]
      }, {
        localName: 'TimeReferenceSystemType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType',
        propertyInfos: [{
            name: 'domainOfValidity'
          }]
      }, {
        localName: 'TimeIntervalLengthType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'unit',
            attributeName: {
              localPart: 'unit'
            },
            type: 'attribute'
          }, {
            name: 'radix',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'radix'
            },
            type: 'attribute'
          }, {
            name: 'factor',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'factor'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CoordinateSystemPropertyType',
        propertyInfos: [{
            name: 'abstractCoordinateSystem',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCoordinateSystem',
            typeInfo: 'armlJSONSchema.AbstractCoordinateSystemType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GeographicCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'usesEllipsoidalCS',
            typeInfo: 'armlJSONSchema.EllipsoidalCSPropertyType'
          }, {
            name: 'usesGeodeticDatum',
            typeInfo: 'armlJSONSchema.GeodeticDatumPropertyType'
          }]
      }, {
        localName: 'CircleByCenterPointType',
        baseTypeInfo: 'armlJSONSchema.ArcByCenterPointType'
      }, {
        localName: 'ArcByCenterPointType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'pos',
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'pointProperty',
            typeInfo: 'armlJSONSchema.PointPropertyType'
          }, {
            name: 'pointRep',
            typeInfo: 'armlJSONSchema.PointPropertyType'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'radius',
            typeInfo: 'armlJSONSchema.LengthType'
          }, {
            name: 'startAngle',
            typeInfo: 'armlJSONSchema.AngleType'
          }, {
            name: 'endAngle',
            typeInfo: 'armlJSONSchema.AngleType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'numArc',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numArc'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ConversionToPreferredUnitType',
        baseTypeInfo: 'armlJSONSchema.UnitOfMeasureType',
        propertyInfos: [{
            name: 'factor',
            typeInfo: 'Double'
          }, {
            name: 'formula',
            typeInfo: 'armlJSONSchema.FormulaType'
          }]
      }, {
        localName: 'DerivedCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralDerivedCRSType',
        propertyInfos: [{
            name: 'baseCRS',
            typeInfo: 'armlJSONSchema.SingleCRSPropertyType'
          }, {
            name: 'derivedCRSType',
            typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
          }, {
            name: 'coordinateSystem',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CoordinateSystemPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractGeneralDerivedCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'conversion',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.GeneralConversionPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'UserDefinedCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'FeatureArrayPropertyType',
        propertyInfos: [{
            name: 'abstractFeature',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractFeature',
            typeInfo: 'armlJSONSchema.AbstractFeatureType',
            type: 'elementRef'
          }]
      }, {
        localName: 'TopoPrimitiveMemberType',
        propertyInfos: [{
            name: 'abstractTopoPrimitive',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTopoPrimitive',
            typeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MultiSurfacePropertyType',
        propertyInfos: [{
            name: 'multiSurface',
            elementName: 'MultiSurface',
            typeInfo: 'armlJSONSchema.MultiSurfaceType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CylinderType',
        baseTypeInfo: 'armlJSONSchema.AbstractGriddedSurfaceType',
        propertyInfos: [{
            name: 'horizontalCurveType',
            attributeName: {
              localPart: 'horizontalCurveType'
            },
            type: 'attribute'
          }, {
            name: 'verticalCurveType',
            attributeName: {
              localPart: 'verticalCurveType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopoSolidType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
        propertyInfos: [{
            name: 'isolated',
            collection: true,
            typeInfo: 'armlJSONSchema.NodeOrEdgePropertyType'
          }, {
            name: 'directedFace',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedFacePropertyType'
          }, {
            name: 'solidProperty',
            typeInfo: 'armlJSONSchema.SolidPropertyType'
          }, {
            name: 'universal',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'universal'
            },
            type: 'attribute'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MultiPointPropertyType',
        propertyInfos: [{
            name: 'multiPoint',
            elementName: 'MultiPoint',
            typeInfo: 'armlJSONSchema.MultiPointType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LineStringSegmentType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AngleType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'CylindricalCSPropertyType',
        propertyInfos: [{
            name: 'cylindricalCS',
            elementName: 'CylindricalCS',
            typeInfo: 'armlJSONSchema.CylindricalCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CompoundCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'componentReferenceSystem',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.SingleCRSPropertyType',
            type: 'elementRef'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GeodeticDatumPropertyType',
        propertyInfos: [{
            name: 'geodeticDatum',
            elementName: 'GeodeticDatum',
            typeInfo: 'armlJSONSchema.GeodeticDatumType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'SurfaceArrayPropertyType',
        propertyInfos: [{
            name: 'abstractSurface',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSurface',
            typeInfo: 'armlJSONSchema.AbstractSurfaceType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IndirectEntryType',
        propertyInfos: [{
            name: 'definitionProxy',
            elementName: 'DefinitionProxy',
            typeInfo: 'armlJSONSchema.DefinitionProxyType'
          }]
      }, {
        localName: 'OperationMethodPropertyType',
        propertyInfos: [{
            name: 'operationMethod',
            elementName: 'OperationMethod',
            typeInfo: 'armlJSONSchema.OperationMethodType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DynamicFeatureMemberType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureMemberType',
        propertyInfos: [{
            name: 'dynamicFeature',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'DynamicFeature',
            typeInfo: 'armlJSONSchema.DynamicFeatureType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractFeatureCollectionType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureType',
        propertyInfos: [{
            name: 'featureMember',
            collection: true,
            typeInfo: 'armlJSONSchema.FeaturePropertyType'
          }, {
            name: 'featureMembers',
            typeInfo: 'armlJSONSchema.FeatureArrayPropertyType'
          }]
      }, {
        localName: 'UnitOfMeasureType',
        propertyInfos: [{
            name: 'uom',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ImageCRSPropertyType',
        propertyInfos: [{
            name: 'imageCRS',
            elementName: 'ImageCRS',
            typeInfo: 'armlJSONSchema.ImageCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CurvePropertyType',
        propertyInfos: [{
            name: 'abstractCurve',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCurve',
            typeInfo: 'armlJSONSchema.AbstractCurveType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DirectedNodePropertyType',
        propertyInfos: [{
            name: 'node',
            elementName: 'Node',
            typeInfo: 'armlJSONSchema.NodeType'
          }, {
            name: 'orientation',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ResultType',
        propertyInfos: [{
            name: 'any',
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ImageDatumPropertyType',
        propertyInfos: [{
            name: 'imageDatum',
            elementName: 'ImageDatum',
            typeInfo: 'armlJSONSchema.ImageDatumType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'BaseUnitType',
        baseTypeInfo: 'armlJSONSchema.UnitDefinitionType',
        propertyInfos: [{
            name: 'unitsSystem',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'UnitDefinitionType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType',
        propertyInfos: [{
            name: 'quantityType',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'quantityTypeReference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }, {
            name: 'catalogSymbol',
            typeInfo: 'armlJSONSchema.CodeType'
          }]
      }, {
        localName: 'TimeCoordinateSystemType',
        baseTypeInfo: 'armlJSONSchema.TimeReferenceSystemType',
        propertyInfos: [{
            name: 'originPosition',
            typeInfo: 'armlJSONSchema.TimePositionType'
          }, {
            name: 'origin',
            typeInfo: 'armlJSONSchema.TimeInstantPropertyType'
          }, {
            name: 'interval',
            typeInfo: 'armlJSONSchema.TimeIntervalLengthType'
          }]
      }, {
        localName: 'SolidArrayPropertyType',
        propertyInfos: [{
            name: 'abstractSolid',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSolid',
            typeInfo: 'armlJSONSchema.AbstractSolidType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CurveArrayPropertyType',
        propertyInfos: [{
            name: 'abstractCurve',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCurve',
            typeInfo: 'armlJSONSchema.AbstractCurveType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimeClockType',
        baseTypeInfo: 'armlJSONSchema.TimeReferenceSystemType',
        propertyInfos: [{
            name: 'referenceEvent',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'referenceTime',
            typeInfo: 'Calendar'
          }, {
            name: 'utcReference',
            typeInfo: 'Calendar'
          }, {
            name: 'dateBasis',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeCalendarPropertyType'
          }]
      }, {
        localName: 'GeodeticCRSPropertyType',
        propertyInfos: [{
            name: 'geodeticCRS',
            elementName: 'GeodeticCRS',
            typeInfo: 'armlJSONSchema.GeodeticCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimePrimitivePropertyType',
        propertyInfos: [{
            name: 'abstractTimePrimitive',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTimePrimitive',
            typeInfo: 'armlJSONSchema.AbstractTimePrimitiveType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopoComplexPropertyType',
        propertyInfos: [{
            name: 'topoComplex',
            elementName: 'TopoComplex',
            typeInfo: 'armlJSONSchema.TopoComplexType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ReferenceType',
        propertyInfos: [{
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TopoSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopologyType',
        propertyInfos: [{
            name: 'directedFace',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedFacePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimeCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'CurveSegmentArrayPropertyType',
        propertyInfos: [{
            name: 'abstractCurveSegment',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCurveSegment',
            typeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
            type: 'elementRef'
          }]
      }, {
        localName: 'PassThroughOperationType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
        propertyInfos: [{
            name: 'modifiedCoordinate',
            collection: true,
            typeInfo: 'Integer'
          }, {
            name: 'coordOperation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CoordinateOperationPropertyType',
            type: 'elementRef'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'VerticalCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'verticalCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.VerticalCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'verticalDatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.VerticalDatumPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AssociationRoleType',
        propertyInfos: [{
            name: 'any',
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CompositeValueType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType',
        propertyInfos: [{
            name: 'valueComponent',
            collection: true,
            typeInfo: 'armlJSONSchema.ValuePropertyType'
          }, {
            name: 'valueComponents',
            typeInfo: 'armlJSONSchema.ValueArrayPropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ValueArrayPropertyType',
        propertyInfos: [{
            name: 'abstractValueOrAbstractGeometryOrAbstractTimeObject',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'Null',
                typeInfo: {
                  type: 'list'
                }
              }, {
                elementName: 'AbstractValue',
                typeInfo: 'AnyType'
              }, {
                elementName: 'AbstractTimeObject',
                typeInfo: 'armlJSONSchema.AbstractTimeObjectType'
              }, {
                elementName: 'AbstractGeometry',
                typeInfo: 'armlJSONSchema.AbstractGeometryType'
              }],
            type: 'elementRefs'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TemporalCSPropertyType',
        propertyInfos: [{
            name: 'temporalCS',
            elementName: 'TemporalCS',
            typeInfo: 'armlJSONSchema.TemporalCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DirectedEdgePropertyType',
        propertyInfos: [{
            name: 'edge',
            elementName: 'Edge',
            typeInfo: 'armlJSONSchema.EdgeType'
          }, {
            name: 'orientation',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'PrimeMeridianType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'greenwichLongitude',
            typeInfo: 'armlJSONSchema.AngleType'
          }]
      }, {
        localName: 'CompositeSolidType',
        baseTypeInfo: 'armlJSONSchema.AbstractSolidType',
        propertyInfos: [{
            name: 'solidMember',
            collection: true,
            typeInfo: 'armlJSONSchema.SolidPropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GeodesicType',
        baseTypeInfo: 'armlJSONSchema.GeodesicStringType'
      }, {
        localName: 'GeodesicStringType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'geometricPositionGroup',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elements'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PriorityLocationPropertyType',
        baseTypeInfo: 'armlJSONSchema.LocationPropertyType',
        propertyInfos: [{
            name: 'priority',
            attributeName: {
              localPart: 'priority'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LocationPropertyType',
        propertyInfos: [{
            name: 'abstractGeometry',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'locationKeyWord',
            elementName: 'LocationKeyWord',
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'locationString',
            elementName: 'LocationString',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: '_null',
            elementName: 'Null',
            typeInfo: {
              type: 'list'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DefinitionProxyType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType',
        propertyInfos: [{
            name: 'definitionRef',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'ValueArrayType',
        baseTypeInfo: 'armlJSONSchema.CompositeValueType',
        propertyInfos: [{
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }, {
            name: 'uom',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TargetPropertyType',
        propertyInfos: [{
            name: 'abstractFeature',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractFeature',
            typeInfo: 'armlJSONSchema.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'abstractGeometry',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DynamicFeatureCollectionType',
        baseTypeInfo: 'armlJSONSchema.DynamicFeatureType',
        propertyInfos: [{
            name: 'dynamicMembers',
            typeInfo: 'armlJSONSchema.DynamicFeatureMemberType'
          }]
      }, {
        localName: 'DynamicFeatureType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureType',
        propertyInfos: [{
            name: 'validTime',
            typeInfo: 'armlJSONSchema.TimePrimitivePropertyType'
          }, {
            name: 'history',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.HistoryPropertyType',
            type: 'elementRef'
          }, {
            name: 'dataSource',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'dataSourceReference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'DirectedFacePropertyType',
        propertyInfos: [{
            name: 'face',
            elementName: 'Face',
            typeInfo: 'armlJSONSchema.FaceType'
          }, {
            name: 'orientation',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DirectPositionListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'count',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'count'
            },
            type: 'attribute'
          }, {
            name: 'srsName',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'VerticalCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'ArrayAssociationType',
        propertyInfos: [{
            name: 'abstractObject',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractObject',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TemporalCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'VerticalDatumType',
        baseTypeInfo: 'armlJSONSchema.AbstractDatumType'
      }, {
        localName: 'ConversionType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralConversionType',
        propertyInfos: [{
            name: 'method',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.OperationMethodPropertyType',
            type: 'elementRef'
          }, {
            name: 'parameterValue',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AbstractGeneralParameterValuePropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractGeneralConversionType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateOperationType'
      }, {
        localName: 'CoordinateSystemAxisPropertyType',
        propertyInfos: [{
            name: 'coordinateSystemAxis',
            elementName: 'CoordinateSystemAxis',
            typeInfo: 'armlJSONSchema.CoordinateSystemAxisType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MultiSolidType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
        propertyInfos: [{
            name: 'solidMember',
            collection: true,
            typeInfo: 'armlJSONSchema.SolidPropertyType'
          }, {
            name: 'solidMembers',
            typeInfo: 'armlJSONSchema.SolidArrayPropertyType'
          }]
      }, {
        localName: 'CylindricalCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'TopoPointPropertyType',
        propertyInfos: [{
            name: 'topoPoint',
            elementName: 'TopoPoint',
            typeInfo: 'armlJSONSchema.TopoPointType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'FileType',
        propertyInfos: [{
            name: 'rangeParameters',
            typeInfo: 'armlJSONSchema.AssociationRoleType'
          }, {
            name: 'fileName'
          }, {
            name: 'fileReference'
          }, {
            name: 'fileStructure',
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'mimeType'
          }, {
            name: 'compression'
          }]
      }, {
        localName: 'PointArrayPropertyType',
        propertyInfos: [{
            name: 'point',
            collection: true,
            elementName: 'Point',
            typeInfo: 'armlJSONSchema.PointType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DictionaryType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType',
        propertyInfos: [{
            name: 'dictionaryEntryOrIndirectEntry',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'indirectEntry',
                typeInfo: 'armlJSONSchema.IndirectEntryType'
              }, {
                elementName: 'dictionaryEntry',
                typeInfo: 'armlJSONSchema.DictionaryEntryType'
              }],
            type: 'elementRefs'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ConventionalUnitType',
        baseTypeInfo: 'armlJSONSchema.UnitDefinitionType',
        propertyInfos: [{
            name: 'conversionToPreferredUnit',
            typeInfo: 'armlJSONSchema.ConversionToPreferredUnitType'
          }, {
            name: 'roughConversionToPreferredUnit',
            typeInfo: 'armlJSONSchema.ConversionToPreferredUnitType'
          }, {
            name: 'derivationUnitTerm',
            collection: true,
            typeInfo: 'armlJSONSchema.DerivationUnitTermType'
          }]
      }, {
        localName: 'MeasureOrNilReasonListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list'
            },
            type: 'value'
          }, {
            name: 'uom',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CoordinateSystemAxisType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'axisAbbrev',
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'axisDirection',
            typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
          }, {
            name: 'minimumValue',
            typeInfo: 'Double'
          }, {
            name: 'maximumValue',
            typeInfo: 'Double'
          }, {
            name: 'rangeMeaning',
            typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
          }, {
            name: 'uom',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MultiSolidPropertyType',
        propertyInfos: [{
            name: 'multiSolid',
            elementName: 'MultiSolid',
            typeInfo: 'armlJSONSchema.MultiSolidType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'QuantityExtentType',
        baseTypeInfo: 'armlJSONSchema.MeasureOrNilReasonListType'
      }, {
        localName: 'EngineeringDatumPropertyType',
        propertyInfos: [{
            name: 'engineeringDatum',
            elementName: 'EngineeringDatum',
            typeInfo: 'armlJSONSchema.EngineeringDatumType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeOrdinalEraType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType',
        propertyInfos: [{
            name: 'relatedTime',
            collection: true,
            typeInfo: 'armlJSONSchema.RelatedTimeType'
          }, {
            name: 'start',
            typeInfo: 'armlJSONSchema.TimeNodePropertyType'
          }, {
            name: 'end',
            typeInfo: 'armlJSONSchema.TimeNodePropertyType'
          }, {
            name: 'extent',
            typeInfo: 'armlJSONSchema.TimePeriodPropertyType'
          }, {
            name: 'member',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeOrdinalEraPropertyType'
          }, {
            name: 'group',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'DirectionPropertyType',
        propertyInfos: [{
            name: 'directionVector',
            elementName: 'DirectionVector',
            typeInfo: 'armlJSONSchema.DirectionVectorType'
          }, {
            name: 'directionDescription',
            elementName: 'DirectionDescription',
            typeInfo: 'armlJSONSchema.DirectionDescriptionType'
          }, {
            name: 'compassPoint',
            elementName: 'CompassPoint'
          }, {
            name: 'directionKeyword',
            elementName: 'DirectionKeyword',
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'directionString',
            elementName: 'DirectionString',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'OperationParameterGroupType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterType',
        propertyInfos: [{
            name: 'maximumOccurs',
            typeInfo: 'Integer'
          }, {
            name: 'parameter',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AbstractGeneralOperationParameterType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'minimumOccurs',
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'PointType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricPrimitiveType',
        propertyInfos: [{
            name: 'pos',
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }]
      }, {
        localName: 'AbstractTimeComplexType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeObjectType'
      }, {
        localName: 'ArrayType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType',
        propertyInfos: [{
            name: 'members',
            typeInfo: 'armlJSONSchema.ArrayAssociationType'
          }]
      }, {
        localName: 'CodeOrNilReasonListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list'
            },
            type: 'value'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SingleOperationPropertyType',
        propertyInfos: [{
            name: 'abstractSingleOperation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractSingleOperation',
            typeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MultiGeometryType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
        propertyInfos: [{
            name: 'geometryMember',
            collection: true,
            typeInfo: 'armlJSONSchema.GeometryPropertyType'
          }, {
            name: 'geometryMembers',
            typeInfo: 'armlJSONSchema.GeometryArrayPropertyType'
          }]
      }, {
        localName: 'EdgeType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
        propertyInfos: [{
            name: 'container',
            typeInfo: 'armlJSONSchema.TopoSolidPropertyType'
          }, {
            name: 'directedNode',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedNodePropertyType'
          }, {
            name: 'directedFace',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedFacePropertyType'
          }, {
            name: 'curveProperty',
            typeInfo: 'armlJSONSchema.CurvePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'VerticalDatumPropertyType',
        propertyInfos: [{
            name: 'verticalDatum',
            elementName: 'VerticalDatum',
            typeInfo: 'armlJSONSchema.VerticalDatumType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ConcatenatedOperationPropertyType',
        propertyInfos: [{
            name: 'concatenatedOperation',
            elementName: 'ConcatenatedOperation',
            typeInfo: 'armlJSONSchema.ConcatenatedOperationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'OperationPropertyType',
        propertyInfos: [{
            name: 'abstractOperation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractOperation',
            typeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'NodeType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
        propertyInfos: [{
            name: 'container',
            typeInfo: 'armlJSONSchema.FaceOrTopoSolidPropertyType'
          }, {
            name: 'directedEdge',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedEdgePropertyType'
          }, {
            name: 'pointProperty',
            typeInfo: 'armlJSONSchema.PointPropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OffsetCurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'offsetBase',
            typeInfo: 'armlJSONSchema.CurvePropertyType'
          }, {
            name: 'distance',
            typeInfo: 'armlJSONSchema.LengthType'
          }, {
            name: 'refDirection',
            typeInfo: 'armlJSONSchema.VectorType'
          }]
      }, {
        localName: 'ValuePropertyType',
        propertyInfos: [{
            name: 'abstractValue',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractValue',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'abstractGeometry',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'abstractTimeObject',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTimeObject',
            typeInfo: 'armlJSONSchema.AbstractTimeObjectType',
            type: 'elementRef'
          }, {
            name: '_null',
            elementName: 'Null',
            typeInfo: {
              type: 'list'
            }
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ProcedurePropertyType',
        propertyInfos: [{
            name: 'abstractFeature',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractFeature',
            typeInfo: 'armlJSONSchema.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TopoComplexType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopologyType',
        propertyInfos: [{
            name: 'maximalComplex',
            typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
          }, {
            name: 'superComplex',
            collection: true,
            typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
          }, {
            name: 'subComplex',
            collection: true,
            typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
          }, {
            name: 'topoPrimitiveMember',
            collection: true,
            typeInfo: 'armlJSONSchema.TopoPrimitiveMemberType'
          }, {
            name: 'topoPrimitiveMembers',
            typeInfo: 'armlJSONSchema.TopoPrimitiveArrayAssociationType'
          }, {
            name: 'isMaximal',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isMaximal'
            },
            type: 'attribute'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CoordinateOperationAccuracy',
        propertyInfos: [{
            name: 'abstractDQPositionalAccuracy',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_PositionalAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQPositionalAccuracyType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractDQPositionalAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQElementType'
      }, {
        localName: 'AbstractDQElementType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'nameOfMeasure',
            collection: true,
            elementName: {
              localPart: 'nameOfMeasure',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'measureIdentification',
            elementName: {
              localPart: 'measureIdentification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierPropertyType'
          }, {
            name: 'measureDescription',
            elementName: {
              localPart: 'measureDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'evaluationMethodType',
            elementName: {
              localPart: 'evaluationMethodType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQEvaluationMethodTypeCodePropertyType'
          }, {
            name: 'evaluationMethodDescription',
            elementName: {
              localPart: 'evaluationMethodDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'evaluationProcedure',
            elementName: {
              localPart: 'evaluationProcedure',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: 'dateTime',
            collection: true,
            elementName: {
              localPart: 'dateTime',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DateTimePropertyType'
          }, {
            name: 'result',
            collection: true,
            elementName: {
              localPart: 'result',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQResultPropertyType'
          }]
      }, {
        localName: 'DerivationUnitTermType',
        baseTypeInfo: 'armlJSONSchema.UnitOfMeasureType',
        propertyInfos: [{
            name: 'exponent',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'exponent'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ProjectedCRSPropertyType',
        propertyInfos: [{
            name: 'projectedCRS',
            elementName: 'ProjectedCRS',
            typeInfo: 'armlJSONSchema.ProjectedCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ImageCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'cartesianCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CartesianCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'affineCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AffineCSPropertyType',
            type: 'elementRef'
          }, {
            name: 'usesObliqueCartesianCS',
            typeInfo: 'armlJSONSchema.ObliqueCartesianCSPropertyType'
          }, {
            name: 'imageDatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.ImageDatumPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'SecondDefiningParameter',
        propertyInfos: [{
            name: 'secondDefiningParameter',
            elementName: 'SecondDefiningParameter',
            typeInfo: 'armlJSONSchema.SecondDefiningParameter'
          }]
      }, {
        localName: 'MultiSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
        propertyInfos: [{
            name: 'surfaceMember',
            collection: true,
            typeInfo: 'armlJSONSchema.SurfacePropertyType'
          }, {
            name: 'surfaceMembers',
            typeInfo: 'armlJSONSchema.SurfaceArrayPropertyType'
          }]
      }, {
        localName: 'CoordinateOperationPropertyType',
        propertyInfos: [{
            name: 'abstractCoordinateOperation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCoordinateOperation',
            typeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DictionaryEntryType',
        baseTypeInfo: 'armlJSONSchema.AbstractMemberType',
        propertyInfos: [{
            name: 'definition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'Definition',
            typeInfo: 'armlJSONSchema.DefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeEdgeType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeTopologyPrimitiveType',
        propertyInfos: [{
            name: 'start',
            typeInfo: 'armlJSONSchema.TimeNodePropertyType'
          }, {
            name: 'end',
            typeInfo: 'armlJSONSchema.TimeNodePropertyType'
          }, {
            name: 'extent',
            typeInfo: 'armlJSONSchema.TimePeriodPropertyType'
          }]
      }, {
        localName: 'EnvelopeType',
        propertyInfos: [{
            name: 'lowerCorner',
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'upperCorner',
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'pos',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'srsName',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SolidType',
        baseTypeInfo: 'armlJSONSchema.AbstractSolidType',
        propertyInfos: [{
            name: 'exterior',
            typeInfo: 'armlJSONSchema.ShellPropertyType'
          }, {
            name: 'interior',
            collection: true,
            typeInfo: 'armlJSONSchema.ShellPropertyType'
          }]
      }, {
        localName: 'TimeCalendarEraType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType',
        propertyInfos: [{
            name: 'referenceEvent',
            typeInfo: 'armlJSONSchema.StringOrRefType'
          }, {
            name: 'referenceDate'
          }, {
            name: 'julianReference',
            typeInfo: 'Decimal'
          }, {
            name: 'epochOfUse',
            typeInfo: 'armlJSONSchema.TimePeriodPropertyType'
          }]
      }, {
        localName: 'SphericalCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'DirectPositionType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'srsName',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SphericalCSPropertyType',
        propertyInfos: [{
            name: 'sphericalCS',
            elementName: 'SphericalCS',
            typeInfo: 'armlJSONSchema.SphericalCSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'VectorType',
        baseTypeInfo: 'armlJSONSchema.DirectPositionType'
      }, {
        localName: 'FaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
        propertyInfos: [{
            name: 'isolated',
            collection: true,
            typeInfo: 'armlJSONSchema.NodePropertyType'
          }, {
            name: 'directedEdge',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedEdgePropertyType'
          }, {
            name: 'directedTopoSolid',
            collection: true,
            typeInfo: 'armlJSONSchema.DirectedTopoSolidPropertyType'
          }, {
            name: 'surfaceProperty',
            typeInfo: 'armlJSONSchema.SurfacePropertyType'
          }, {
            name: 'universal',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'universal'
            },
            type: 'attribute'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DatumPropertyType',
        propertyInfos: [{
            name: 'abstractDatum',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractDatum',
            typeInfo: 'armlJSONSchema.AbstractDatumType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CoordinatesType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'decimal',
            attributeName: {
              localPart: 'decimal'
            },
            type: 'attribute'
          }, {
            name: 'cs',
            attributeName: {
              localPart: 'cs'
            },
            type: 'attribute'
          }, {
            name: 'ts',
            attributeName: {
              localPart: 'ts'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GeodeticDatumType',
        baseTypeInfo: 'armlJSONSchema.AbstractDatumType',
        propertyInfos: [{
            name: 'primeMeridian',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.PrimeMeridianPropertyType',
            type: 'elementRef'
          }, {
            name: 'ellipsoid',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.EllipsoidPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'RingType',
        baseTypeInfo: 'armlJSONSchema.AbstractRingType',
        propertyInfos: [{
            name: 'curveMember',
            collection: true,
            typeInfo: 'armlJSONSchema.CurvePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TemporalCRSPropertyType',
        propertyInfos: [{
            name: 'temporalCRS',
            elementName: 'TemporalCRS',
            typeInfo: 'armlJSONSchema.TemporalCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ConcatenatedOperationType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
        propertyInfos: [{
            name: 'coordOperation',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CoordinateOperationPropertyType',
            type: 'elementRef'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopoCurvePropertyType',
        propertyInfos: [{
            name: 'topoCurve',
            elementName: 'TopoCurve',
            typeInfo: 'armlJSONSchema.TopoCurveType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GridFunctionType',
        propertyInfos: [{
            name: 'sequenceRule',
            typeInfo: 'armlJSONSchema.SequenceRuleType'
          }, {
            name: 'startPoint',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Integer'
            }
          }]
      }, {
        localName: 'TimeNodeType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeTopologyPrimitiveType',
        propertyInfos: [{
            name: 'previousEdge',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeEdgePropertyType'
          }, {
            name: 'nextEdge',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeEdgePropertyType'
          }, {
            name: 'position',
            typeInfo: 'armlJSONSchema.TimeInstantPropertyType'
          }]
      }, {
        localName: 'ArcByBulgeType',
        baseTypeInfo: 'armlJSONSchema.ArcStringByBulgeType'
      }, {
        localName: 'ArcStringByBulgeType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'bulge',
            collection: true,
            typeInfo: 'Double'
          }, {
            name: 'normal',
            collection: true,
            typeInfo: 'armlJSONSchema.VectorType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'numArc',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numArc'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DerivedUnitType',
        baseTypeInfo: 'armlJSONSchema.UnitDefinitionType',
        propertyInfos: [{
            name: 'derivationUnitTerm',
            collection: true,
            typeInfo: 'armlJSONSchema.DerivationUnitTermType'
          }]
      }, {
        localName: 'EllipsoidPropertyType',
        propertyInfos: [{
            name: 'ellipsoid',
            elementName: 'Ellipsoid',
            typeInfo: 'armlJSONSchema.EllipsoidType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AffinePlacementType',
        propertyInfos: [{
            name: 'location',
            typeInfo: 'armlJSONSchema.DirectPositionType'
          }, {
            name: 'refDirection',
            collection: true,
            typeInfo: 'armlJSONSchema.VectorType'
          }, {
            name: 'inDimension',
            typeInfo: 'Integer'
          }, {
            name: 'outDimension',
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'CodeWithAuthorityType',
        baseTypeInfo: 'armlJSONSchema.CodeType'
      }, {
        localName: 'InlinePropertyType',
        propertyInfos: [{
            name: 'any',
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PolygonType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfaceType',
        propertyInfos: [{
            name: 'exterior',
            typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
          }, {
            name: 'interior',
            collection: true,
            typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
          }]
      }, {
        localName: 'OperationParameterType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterType'
      }, {
        localName: 'TemporalDatumType',
        baseTypeInfo: 'armlJSONSchema.TemporalDatumBaseType',
        propertyInfos: [{
            name: 'origin',
            typeInfo: 'Calendar'
          }]
      }, {
        localName: 'FormulaCitation',
        propertyInfos: [{
            name: 'ciCitation',
            elementName: {
              localPart: 'CI_Citation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CICitationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'title',
            elementName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'alternateTitle',
            collection: true,
            elementName: {
              localPart: 'alternateTitle',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'date',
            collection: true,
            elementName: {
              localPart: 'date',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIDatePropertyType'
          }, {
            name: 'edition',
            elementName: {
              localPart: 'edition',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'editionDate',
            elementName: {
              localPart: 'editionDate',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DatePropertyType'
          }, {
            name: 'identifier',
            collection: true,
            elementName: {
              localPart: 'identifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierPropertyType'
          }, {
            name: 'citedResponsibleParty',
            collection: true,
            elementName: {
              localPart: 'citedResponsibleParty',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }, {
            name: 'presentationForm',
            collection: true,
            elementName: {
              localPart: 'presentationForm',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIPresentationFormCodePropertyType'
          }, {
            name: 'series',
            elementName: {
              localPart: 'series',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CISeriesPropertyType'
          }, {
            name: 'otherCitationDetails',
            elementName: {
              localPart: 'otherCitationDetails',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'collectiveTitle',
            elementName: {
              localPart: 'collectiveTitle',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'isbn',
            elementName: {
              localPart: 'ISBN',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'issn',
            elementName: {
              localPart: 'ISSN',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'EnvelopeWithTimePeriodType',
        baseTypeInfo: 'armlJSONSchema.EnvelopeType',
        propertyInfos: [{
            name: 'beginPosition',
            typeInfo: 'armlJSONSchema.TimePositionType'
          }, {
            name: 'endPosition',
            typeInfo: 'armlJSONSchema.TimePositionType'
          }, {
            name: 'frame',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MetaDataPropertyType',
        propertyInfos: [{
            name: 'abstractMetaData',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractMetaData',
            typeInfo: 'armlJSONSchema.AbstractMetaDataType',
            type: 'elementRef'
          }, {
            name: 'about',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CompositeSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfaceType',
        propertyInfos: [{
            name: 'surfaceMember',
            collection: true,
            typeInfo: 'armlJSONSchema.SurfacePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ObliqueCartesianCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'DataBlockType',
        propertyInfos: [{
            name: 'rangeParameters',
            typeInfo: 'armlJSONSchema.AssociationRoleType'
          }, {
            name: 'tupleList',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'doubleOrNilReasonTupleList',
            typeInfo: {
              type: 'list'
            }
          }]
      }, {
        localName: 'ShellType',
        propertyInfos: [{
            name: 'surfaceMember',
            collection: true,
            typeInfo: 'armlJSONSchema.SurfacePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GeneralTransformationPropertyType',
        propertyInfos: [{
            name: 'abstractGeneralTransformation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeneralTransformation',
            typeInfo: 'armlJSONSchema.AbstractGeneralTransformationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeCalendarType',
        baseTypeInfo: 'armlJSONSchema.TimeReferenceSystemType',
        propertyInfos: [{
            name: 'referenceFrame',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeCalendarEraPropertyType'
          }]
      }, {
        localName: 'TimeTopologyComplexType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeComplexType',
        propertyInfos: [{
            name: 'primitive',
            collection: true,
            typeInfo: 'armlJSONSchema.TimeTopologyPrimitivePropertyType'
          }]
      }, {
        localName: 'TransformationPropertyType',
        propertyInfos: [{
            name: 'transformation',
            elementName: 'Transformation',
            typeInfo: 'armlJSONSchema.TransformationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GeographicCRSPropertyType',
        propertyInfos: [{
            name: 'geographicCRS',
            elementName: 'GeographicCRS',
            typeInfo: 'armlJSONSchema.GeographicCRSType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LineStringType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }]
      }, {
        localName: 'AbstractCurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricPrimitiveType'
      }, {
        localName: 'PolygonPatchType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'exterior',
            typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
          }, {
            name: 'interior',
            collection: true,
            typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RangeSetType',
        propertyInfos: [{
            name: 'valueArray',
            collection: true,
            elementName: 'ValueArray',
            typeInfo: 'armlJSONSchema.ValueArrayType'
          }, {
            name: 'abstractScalarValueList',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractScalarValueList',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'dataBlock',
            elementName: 'DataBlock',
            typeInfo: 'armlJSONSchema.DataBlockType'
          }, {
            name: 'file',
            elementName: 'File',
            typeInfo: 'armlJSONSchema.FileType'
          }]
      }, {
        localName: 'EllipsoidType',
        baseTypeInfo: 'armlJSONSchema.IdentifiedObjectType',
        propertyInfos: [{
            name: 'semiMajorAxis',
            typeInfo: 'armlJSONSchema.MeasureType'
          }, {
            name: 'secondDefiningParameter',
            typeInfo: 'armlJSONSchema.SecondDefiningParameter'
          }]
      }, {
        localName: 'GenericMetaDataType',
        baseTypeInfo: 'armlJSONSchema.AbstractMetaDataType'
      }, {
        localName: 'AbstractMetaDataType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            allowTypedObject: false,
            type: 'elementRefs'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ParameterValueGroupType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralParameterValueType',
        propertyInfos: [{
            name: 'parameterValue',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AbstractGeneralParameterValuePropertyType',
            type: 'elementRef'
          }, {
            name: 'group',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.OperationParameterGroupPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'TriangleType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'exterior',
            typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RectangleType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'exterior',
            typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Count',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DegreesType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Int',
            type: 'value'
          }, {
            name: 'direction',
            attributeName: {
              localPart: 'direction'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractContinuousCoverageType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoverageType',
        propertyInfos: [{
            name: 'coverageFunction',
            typeInfo: 'armlJSONSchema.CoverageFunctionType'
          }]
      }, {
        localName: 'Boolean',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Boolean',
            type: 'value'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CartesianCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'TimePeriodType',
        baseTypeInfo: 'armlJSONSchema.AbstractTimeGeometricPrimitiveType',
        propertyInfos: [{
            name: 'beginPosition',
            typeInfo: 'armlJSONSchema.TimePositionType'
          }, {
            name: 'begin',
            typeInfo: 'armlJSONSchema.TimeInstantPropertyType'
          }, {
            name: 'endPosition',
            typeInfo: 'armlJSONSchema.TimePositionType'
          }, {
            name: 'end',
            typeInfo: 'armlJSONSchema.TimeInstantPropertyType'
          }, {
            name: 'duration'
          }, {
            name: 'timeInterval',
            typeInfo: 'armlJSONSchema.TimeIntervalLengthType'
          }]
      }, {
        localName: 'CurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveType',
        propertyInfos: [{
            name: 'segments',
            typeInfo: 'armlJSONSchema.CurveSegmentArrayPropertyType'
          }]
      }, {
        localName: 'PassThroughOperationPropertyType',
        propertyInfos: [{
            name: 'passThroughOperation',
            elementName: 'PassThroughOperation',
            typeInfo: 'armlJSONSchema.PassThroughOperationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GeocentricCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCRSType',
        propertyInfos: [{
            name: 'usesCartesianCS',
            typeInfo: 'armlJSONSchema.CartesianCSPropertyType'
          }, {
            name: 'usesSphericalCS',
            typeInfo: 'armlJSONSchema.SphericalCSPropertyType'
          }, {
            name: 'usesGeodeticDatum',
            typeInfo: 'armlJSONSchema.GeodeticDatumPropertyType'
          }]
      }, {
        localName: 'ConversionPropertyType',
        propertyInfos: [{
            name: 'conversion',
            elementName: 'Conversion',
            typeInfo: 'armlJSONSchema.ConversionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ConeType',
        baseTypeInfo: 'armlJSONSchema.AbstractGriddedSurfaceType',
        propertyInfos: [{
            name: 'horizontalCurveType',
            attributeName: {
              localPart: 'horizontalCurveType'
            },
            type: 'attribute'
          }, {
            name: 'verticalCurveType',
            attributeName: {
              localPart: 'verticalCurveType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DomainOfValidity',
        propertyInfos: [{
            name: 'exExtent',
            elementName: {
              localPart: 'EX_Extent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXExtentType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EXExtentType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'description',
            elementName: {
              localPart: 'description',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'geographicElement',
            collection: true,
            elementName: {
              localPart: 'geographicElement',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXGeographicExtentPropertyType'
          }, {
            name: 'temporalElement',
            collection: true,
            elementName: {
              localPart: 'temporalElement',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXTemporalExtentPropertyType'
          }, {
            name: 'verticalElement',
            collection: true,
            elementName: {
              localPart: 'verticalElement',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXVerticalExtentPropertyType'
          }]
      }, {
        localName: 'PolarCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'ProjectedCRSType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralDerivedCRSType',
        propertyInfos: [{
            name: 'baseGeodeticCRS',
            typeInfo: 'armlJSONSchema.GeodeticCRSPropertyType'
          }, {
            name: 'baseGeographicCRS',
            typeInfo: 'armlJSONSchema.GeographicCRSPropertyType'
          }, {
            name: 'cartesianCS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.CartesianCSPropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'MultiPointType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
        propertyInfos: [{
            name: 'pointMember',
            collection: true,
            typeInfo: 'armlJSONSchema.PointPropertyType'
          }, {
            name: 'pointMembers',
            typeInfo: 'armlJSONSchema.PointArrayPropertyType'
          }]
      }, {
        localName: 'TransformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractGeneralTransformationType',
        propertyInfos: [{
            name: 'method',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.OperationMethodPropertyType',
            type: 'elementRef'
          }, {
            name: 'parameterValue',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            typeInfo: 'armlJSONSchema.AbstractGeneralParameterValuePropertyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'OrientableSurfaceType',
        baseTypeInfo: 'armlJSONSchema.AbstractSurfaceType',
        propertyInfos: [{
            name: 'baseSurface',
            typeInfo: 'armlJSONSchema.SurfacePropertyType'
          }, {
            name: 'orientation',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopoPrimitiveArrayAssociationType',
        propertyInfos: [{
            name: 'abstractTopoPrimitive',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTopoPrimitive',
            typeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DMSAngleType',
        propertyInfos: [{
            name: 'degrees',
            typeInfo: 'armlJSONSchema.DegreesType'
          }, {
            name: 'decimalMinutes',
            typeInfo: 'Decimal'
          }, {
            name: 'minutes',
            typeInfo: 'Int'
          }, {
            name: 'seconds',
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'CubicSplineType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementTypeInfos: [{
                elementName: 'pointRep',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'coordinates',
            typeInfo: 'armlJSONSchema.CoordinatesType'
          }, {
            name: 'vectorAtStart',
            typeInfo: 'armlJSONSchema.VectorType'
          }, {
            name: 'vectorAtEnd',
            typeInfo: 'armlJSONSchema.VectorType'
          }, {
            name: 'interpolation',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'degree',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'degree'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CategoryExtentType',
        baseTypeInfo: 'armlJSONSchema.CodeOrNilReasonListType'
      }, {
        localName: 'HistoryPropertyType',
        propertyInfos: [{
            name: 'abstractTimeSlice',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTimeSlice',
            typeInfo: 'armlJSONSchema.AbstractTimeSliceType',
            type: 'elementRef'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'OrientableCurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveType',
        propertyInfos: [{
            name: 'baseCurve',
            typeInfo: 'armlJSONSchema.CurvePropertyType'
          }, {
            name: 'orientation',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EngineeringDatumType',
        baseTypeInfo: 'armlJSONSchema.AbstractDatumType'
      }, {
        localName: 'Category',
        baseTypeInfo: 'armlJSONSchema.CodeType',
        propertyInfos: [{
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TopoSurfacePropertyType',
        propertyInfos: [{
            name: 'topoSurface',
            elementName: 'TopoSurface',
            typeInfo: 'armlJSONSchema.TopoSurfaceType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CompositeCurveType',
        baseTypeInfo: 'armlJSONSchema.AbstractCurveType',
        propertyInfos: [{
            name: 'curveMember',
            collection: true,
            typeInfo: 'armlJSONSchema.CurvePropertyType'
          }, {
            name: 'aggregationType',
            attributeName: {
              localPart: 'aggregationType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AffineCSType',
        baseTypeInfo: 'armlJSONSchema.AbstractCoordinateSystemType'
      }, {
        localName: 'MultiGeometryPropertyType',
        propertyInfos: [{
            name: 'abstractGeometricAggregate',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometricAggregate',
            typeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimePositionType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list'
            },
            type: 'value'
          }, {
            name: 'frame',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }, {
            name: 'calendarEraName',
            attributeName: {
              localPart: 'calendarEraName'
            },
            type: 'attribute'
          }, {
            name: 'indeterminatePosition',
            attributeName: {
              localPart: 'indeterminatePosition'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Quantity',
        baseTypeInfo: 'armlJSONSchema.MeasureType',
        propertyInfos: [{
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BagType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType',
        propertyInfos: [{
            name: 'member',
            collection: true,
            typeInfo: 'armlJSONSchema.AssociationRoleType'
          }, {
            name: 'members',
            typeInfo: 'armlJSONSchema.ArrayAssociationType'
          }]
      }, {
        localName: 'FeatureCollectionType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureCollectionType'
      }, {
        localName: 'MeasureListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'uom',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ScaleType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'TimeCalendarEraPropertyType',
        propertyInfos: [{
            name: 'timeCalendarEra',
            elementName: 'TimeCalendarEra',
            typeInfo: 'armlJSONSchema.TimeCalendarEraType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TopoSolidPropertyType',
        propertyInfos: [{
            name: 'topoSolid',
            elementName: 'TopoSolid',
            typeInfo: 'armlJSONSchema.TopoSolidType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeCalendarPropertyType',
        propertyInfos: [{
            name: 'timeCalendar',
            elementName: 'TimeCalendar',
            typeInfo: 'armlJSONSchema.TimeCalendarType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CategoryPropertyType',
        propertyInfos: [{
            name: 'category',
            elementName: 'Category',
            typeInfo: 'armlJSONSchema.Category'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CodeListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list'
            },
            type: 'value'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GridEnvelopeType',
        propertyInfos: [{
            name: 'low',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Integer'
            }
          }, {
            name: 'high',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Integer'
            }
          }]
      }, {
        localName: 'DirectionVectorType',
        propertyInfos: [{
            name: 'vector',
            typeInfo: 'armlJSONSchema.VectorType'
          }, {
            name: 'horizontalAngle',
            typeInfo: 'armlJSONSchema.AngleType'
          }, {
            name: 'verticalAngle',
            typeInfo: 'armlJSONSchema.AngleType'
          }]
      }, {
        localName: 'GeometricPrimitivePropertyType',
        propertyInfos: [{
            name: 'abstractGeometricPrimitive',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometricPrimitive',
            typeInfo: 'armlJSONSchema.AbstractGeometricPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TemporalDatumBaseType',
        baseTypeInfo: 'armlJSONSchema.AbstractDatumType'
      }, {
        localName: 'IdentifiedObjectType',
        baseTypeInfo: 'armlJSONSchema.DefinitionType'
      }, {
        localName: 'AbstractMemberType',
        propertyInfos: [{
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimeOrdinalEraPropertyType',
        propertyInfos: [{
            name: 'timeOrdinalEra',
            elementName: 'TimeOrdinalEra',
            typeInfo: 'armlJSONSchema.TimeOrdinalEraType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DefinitionBaseType',
        baseTypeInfo: 'armlJSONSchema.AbstractGMLType'
      }, {
        localName: 'AbstractFeatureMemberType',
        propertyInfos: [{
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimeNodePropertyType',
        propertyInfos: [{
            name: 'timeNode',
            elementName: 'TimeNode',
            typeInfo: 'armlJSONSchema.TimeNodeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GridLimitsType',
        propertyInfos: [{
            name: 'gridEnvelope',
            elementName: 'GridEnvelope',
            typeInfo: 'armlJSONSchema.GridEnvelopeType'
          }]
      }, {
        localName: 'NodePropertyType',
        propertyInfos: [{
            name: 'node',
            elementName: 'Node',
            typeInfo: 'armlJSONSchema.NodeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GeometricComplexPropertyType',
        propertyInfos: [{
            name: 'geometricComplex',
            elementName: 'GeometricComplex',
            typeInfo: 'armlJSONSchema.GeometricComplexType'
          }, {
            name: 'compositeCurve',
            elementName: 'CompositeCurve',
            typeInfo: 'armlJSONSchema.CompositeCurveType'
          }, {
            name: 'compositeSurface',
            elementName: 'CompositeSurface',
            typeInfo: 'armlJSONSchema.CompositeSurfaceType'
          }, {
            name: 'compositeSolid',
            elementName: 'CompositeSolid',
            typeInfo: 'armlJSONSchema.CompositeSolidType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeClockPropertyType',
        propertyInfos: [{
            name: 'timeClock',
            elementName: 'TimeClock',
            typeInfo: 'armlJSONSchema.TimeClockType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DirectionDescriptionType',
        propertyInfos: [{
            name: 'compassPoint'
          }, {
            name: 'keyword',
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'description'
          }, {
            name: 'reference',
            typeInfo: 'armlJSONSchema.ReferenceType'
          }]
      }, {
        localName: 'AreaType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'FormulaType',
        propertyInfos: [{
            name: 'a',
            typeInfo: 'Double'
          }, {
            name: 'b',
            typeInfo: 'Double'
          }, {
            name: 'c',
            typeInfo: 'Double'
          }, {
            name: 'd',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'LineStringSegmentArrayPropertyType',
        propertyInfos: [{
            name: 'lineStringSegment',
            collection: true,
            elementName: 'LineStringSegment',
            typeInfo: 'armlJSONSchema.LineStringSegmentType'
          }]
      }, {
        localName: 'RingPropertyType',
        propertyInfos: [{
            name: 'ring',
            elementName: 'Ring',
            typeInfo: 'armlJSONSchema.RingType'
          }]
      }, {
        localName: 'FaceOrTopoSolidPropertyType',
        propertyInfos: [{
            name: 'face',
            elementName: 'Face',
            typeInfo: 'armlJSONSchema.FaceType'
          }, {
            name: 'topoSolid',
            elementName: 'TopoSolid',
            typeInfo: 'armlJSONSchema.TopoSolidType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AngleChoiceType',
        propertyInfos: [{
            name: 'angle',
            typeInfo: 'armlJSONSchema.AngleType'
          }, {
            name: 'dmsAngle',
            typeInfo: 'armlJSONSchema.DMSAngleType'
          }]
      }, {
        localName: 'TimePeriodPropertyType',
        propertyInfos: [{
            name: 'timePeriod',
            elementName: 'TimePeriod',
            typeInfo: 'armlJSONSchema.TimePeriodType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeEdgePropertyType',
        propertyInfos: [{
            name: 'timeEdge',
            elementName: 'TimeEdge',
            typeInfo: 'armlJSONSchema.TimeEdgeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GridLengthType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'BooleanPropertyType',
        propertyInfos: [{
            name: '_boolean',
            elementName: 'Boolean',
            typeInfo: 'armlJSONSchema.Boolean'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TimeTopologyComplexPropertyType',
        propertyInfos: [{
            name: 'timeTopologyComplex',
            elementName: 'TimeTopologyComplex',
            typeInfo: 'armlJSONSchema.TimeTopologyComplexType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RelatedTimeType',
        baseTypeInfo: 'armlJSONSchema.TimePrimitivePropertyType',
        propertyInfos: [{
            name: 'relativePosition',
            attributeName: {
              localPart: 'relativePosition'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BoundedFeatureType',
        baseTypeInfo: 'armlJSONSchema.AbstractFeatureType'
      }, {
        localName: 'LinearRingPropertyType',
        propertyInfos: [{
            name: 'linearRing',
            elementName: 'LinearRing',
            typeInfo: 'armlJSONSchema.LinearRingType'
          }]
      }, {
        localName: 'TimeTopologyPrimitivePropertyType',
        propertyInfos: [{
            name: 'abstractTimeTopologyPrimitive',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTimeTopologyPrimitive',
            typeInfo: 'armlJSONSchema.AbstractTimeTopologyPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'SpeedType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'SequenceRuleType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'order',
            attributeName: {
              localPart: 'order'
            },
            type: 'attribute'
          }, {
            name: 'axisOrder',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'axisOrder'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'KnotPropertyType',
        propertyInfos: [{
            name: 'knot',
            elementName: 'Knot',
            typeInfo: 'armlJSONSchema.KnotType'
          }]
      }, {
        localName: 'NodeOrEdgePropertyType',
        propertyInfos: [{
            name: 'node',
            elementName: 'Node',
            typeInfo: 'armlJSONSchema.NodeType'
          }, {
            name: 'edge',
            elementName: 'Edge',
            typeInfo: 'armlJSONSchema.EdgeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TimeType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'VolumeType',
        baseTypeInfo: 'armlJSONSchema.MeasureType'
      }, {
        localName: 'CountPropertyType',
        propertyInfos: [{
            name: 'count',
            elementName: 'Count',
            typeInfo: 'armlJSONSchema.Count'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'KnotType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Double'
          }, {
            name: 'multiplicity',
            typeInfo: 'Integer'
          }, {
            name: 'weight',
            typeInfo: 'Double'
          }]
      }, {
        localName: 'TimeInstantPropertyType',
        propertyInfos: [{
            name: 'timeInstant',
            elementName: 'TimeInstant',
            typeInfo: 'armlJSONSchema.TimeInstantType'
          }, {
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'QuantityPropertyType',
        propertyInfos: [{
            name: 'quantity',
            elementName: 'Quantity',
            typeInfo: 'armlJSONSchema.Quantity'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ShellPropertyType',
        propertyInfos: [{
            name: 'shell',
            elementName: 'Shell',
            typeInfo: 'armlJSONSchema.ShellType'
          }]
      }, {
        localName: 'AbstractMetadataPropertyType',
        propertyInfos: [{
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CodeListValueType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeList',
            attributeName: {
              localPart: 'codeList'
            },
            type: 'attribute'
          }, {
            name: 'codeListValue',
            attributeName: {
              localPart: 'codeListValue'
            },
            type: 'attribute'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDDimensionType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'dimensionName',
            elementName: {
              localPart: 'dimensionName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDimensionNameTypeCodePropertyType'
          }, {
            name: 'dimensionSize',
            elementName: {
              localPart: 'dimensionSize',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'resolution',
            elementName: {
              localPart: 'resolution',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MeasurePropertyType'
          }]
      }, {
        localName: 'MDRangeDimensionType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'sequenceIdentifier',
            elementName: {
              localPart: 'sequenceIdentifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MemberNamePropertyType'
          }, {
            name: 'descriptor',
            elementName: {
              localPart: 'descriptor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'AbstractMDIdentificationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'citation',
            elementName: {
              localPart: 'citation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: '_abstract',
            elementName: {
              localPart: 'abstract',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'purpose',
            elementName: {
              localPart: 'purpose',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'credit',
            collection: true,
            elementName: {
              localPart: 'credit',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'status',
            collection: true,
            elementName: {
              localPart: 'status',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDProgressCodePropertyType'
          }, {
            name: 'pointOfContact',
            collection: true,
            elementName: {
              localPart: 'pointOfContact',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }, {
            name: 'resourceMaintenance',
            collection: true,
            elementName: {
              localPart: 'resourceMaintenance',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMaintenanceInformationPropertyType'
          }, {
            name: 'graphicOverview',
            collection: true,
            elementName: {
              localPart: 'graphicOverview',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDBrowseGraphicPropertyType'
          }, {
            name: 'resourceFormat',
            collection: true,
            elementName: {
              localPart: 'resourceFormat',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDFormatPropertyType'
          }, {
            name: 'descriptiveKeywords',
            collection: true,
            elementName: {
              localPart: 'descriptiveKeywords',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDKeywordsPropertyType'
          }, {
            name: 'resourceSpecificUsage',
            collection: true,
            elementName: {
              localPart: 'resourceSpecificUsage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDUsagePropertyType'
          }, {
            name: 'resourceConstraints',
            collection: true,
            elementName: {
              localPart: 'resourceConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDConstraintsPropertyType'
          }, {
            name: 'aggregationInfo',
            collection: true,
            elementName: {
              localPart: 'aggregationInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDAggregateInformationPropertyType'
          }]
      }, {
        localName: 'DQDomainConsistencyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'AbstractDQLogicalConsistencyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQElementType'
      }, {
        localName: 'LILineageType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'statement',
            elementName: {
              localPart: 'statement',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'processStep',
            collection: true,
            elementName: {
              localPart: 'processStep',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LIProcessStepPropertyType'
          }, {
            name: 'source',
            collection: true,
            elementName: {
              localPart: 'source',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LISourcePropertyType'
          }]
      }, {
        localName: 'MDGridSpatialRepresentationType',
        baseTypeInfo: 'armlJSONSchema.AbstractMDSpatialRepresentationType',
        propertyInfos: [{
            name: 'numberOfDimensions',
            elementName: {
              localPart: 'numberOfDimensions',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'axisDimensionProperties',
            collection: true,
            elementName: {
              localPart: 'axisDimensionProperties',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDimensionPropertyType'
          }, {
            name: 'cellGeometry',
            elementName: {
              localPart: 'cellGeometry',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDCellGeometryCodePropertyType'
          }, {
            name: 'transformationParameterAvailability',
            elementName: {
              localPart: 'transformationParameterAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }]
      }, {
        localName: 'AbstractMDSpatialRepresentationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType'
      }, {
        localName: 'DQDataQualityType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'scope',
            elementName: {
              localPart: 'scope',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQScopePropertyType'
          }, {
            name: 'report',
            collection: true,
            elementName: {
              localPart: 'report',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQElementPropertyType'
          }, {
            name: 'lineage',
            elementName: {
              localPart: 'lineage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LILineagePropertyType'
          }]
      }, {
        localName: 'CIContactType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'phone',
            elementName: {
              localPart: 'phone',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CITelephonePropertyType'
          }, {
            name: 'address',
            elementName: {
              localPart: 'address',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIAddressPropertyType'
          }, {
            name: 'onlineResource',
            elementName: {
              localPart: 'onlineResource',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIOnlineResourcePropertyType'
          }, {
            name: 'hoursOfService',
            elementName: {
              localPart: 'hoursOfService',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'contactInstructions',
            elementName: {
              localPart: 'contactInstructions',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDApplicationSchemaInformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: 'schemaLanguage',
            elementName: {
              localPart: 'schemaLanguage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'constraintLanguage',
            elementName: {
              localPart: 'constraintLanguage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'schemaAscii',
            elementName: {
              localPart: 'schemaAscii',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'graphicsFile',
            elementName: {
              localPart: 'graphicsFile',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BinaryPropertyType'
          }, {
            name: 'softwareDevelopmentFile',
            elementName: {
              localPart: 'softwareDevelopmentFile',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BinaryPropertyType'
          }, {
            name: 'softwareDevelopmentFileFormat',
            elementName: {
              localPart: 'softwareDevelopmentFileFormat',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDPortrayalCatalogueReferenceType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'portrayalCatalogueCitation',
            collection: true,
            elementName: {
              localPart: 'portrayalCatalogueCitation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }]
      }, {
        localName: 'MDBrowseGraphicType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'fileName',
            elementName: {
              localPart: 'fileName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'fileDescription',
            elementName: {
              localPart: 'fileDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'fileType',
            elementName: {
              localPart: 'fileType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'AbstractDQCompletenessType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQElementType'
      }, {
        localName: 'AbstractDQTemporalAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQElementType'
      }, {
        localName: 'MDFormatType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'version',
            elementName: {
              localPart: 'version',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'amendmentNumber',
            elementName: {
              localPart: 'amendmentNumber',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'specification',
            elementName: {
              localPart: 'specification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'fileDecompressionTechnique',
            elementName: {
              localPart: 'fileDecompressionTechnique',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'formatDistributor',
            collection: true,
            elementName: {
              localPart: 'formatDistributor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDistributorPropertyType'
          }]
      }, {
        localName: 'CIDateType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'date',
            elementName: {
              localPart: 'date',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DatePropertyType'
          }, {
            name: 'dateType',
            elementName: {
              localPart: 'dateType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIDateTypeCodePropertyType'
          }]
      }, {
        localName: 'DSAssociationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType'
      }, {
        localName: 'AbstractRSReferenceSystemType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RSIdentifierPropertyType'
          }, {
            name: 'domainOfValidity',
            collection: true,
            elementName: {
              localPart: 'domainOfValidity',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXExtentPropertyType'
          }]
      }, {
        localName: 'MDFeatureCatalogueDescriptionType',
        baseTypeInfo: 'armlJSONSchema.AbstractMDContentInformationType',
        propertyInfos: [{
            name: 'complianceCode',
            elementName: {
              localPart: 'complianceCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'language',
            collection: true,
            elementName: {
              localPart: 'language',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'includedWithDataset',
            elementName: {
              localPart: 'includedWithDataset',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'featureTypes',
            collection: true,
            elementName: {
              localPart: 'featureTypes',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.GenericNamePropertyType'
          }, {
            name: 'featureCatalogueCitation',
            collection: true,
            elementName: {
              localPart: 'featureCatalogueCitation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }]
      }, {
        localName: 'AbstractMDContentInformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType'
      }, {
        localName: 'MDUsageType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'specificUsage',
            elementName: {
              localPart: 'specificUsage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'usageDateTime',
            elementName: {
              localPart: 'usageDateTime',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DateTimePropertyType'
          }, {
            name: 'userDeterminedLimitations',
            elementName: {
              localPart: 'userDeterminedLimitations',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'userContactInfo',
            collection: true,
            elementName: {
              localPart: 'userContactInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }]
      }, {
        localName: 'MDMaintenanceInformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'maintenanceAndUpdateFrequency',
            elementName: {
              localPart: 'maintenanceAndUpdateFrequency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMaintenanceFrequencyCodePropertyType'
          }, {
            name: 'dateOfNextUpdate',
            elementName: {
              localPart: 'dateOfNextUpdate',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DatePropertyType'
          }, {
            name: 'userDefinedMaintenanceFrequency',
            elementName: {
              localPart: 'userDefinedMaintenanceFrequency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.TMPeriodDurationPropertyType'
          }, {
            name: 'updateScope',
            collection: true,
            elementName: {
              localPart: 'updateScope',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDScopeCodePropertyType'
          }, {
            name: 'updateScopeDescription',
            collection: true,
            elementName: {
              localPart: 'updateScopeDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDScopeDescriptionPropertyType'
          }, {
            name: 'maintenanceNote',
            collection: true,
            elementName: {
              localPart: 'maintenanceNote',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'contact',
            collection: true,
            elementName: {
              localPart: 'contact',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }]
      }, {
        localName: 'AbstractEXGeographicExtentType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'extentTypeCode',
            elementName: {
              localPart: 'extentTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }]
      }, {
        localName: 'EXSpatialTemporalExtentType',
        baseTypeInfo: 'armlJSONSchema.EXTemporalExtentType',
        propertyInfos: [{
            name: 'spatialExtent',
            collection: true,
            elementName: {
              localPart: 'spatialExtent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXGeographicExtentPropertyType'
          }]
      }, {
        localName: 'EXTemporalExtentType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'extent',
            elementName: {
              localPart: 'extent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.TMPrimitivePropertyType'
          }]
      }, {
        localName: 'DSSeriesType',
        baseTypeInfo: 'armlJSONSchema.AbstractDSAggregateType'
      }, {
        localName: 'AbstractDSAggregateType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'composedOf',
            collection: true,
            elementName: {
              localPart: 'composedOf',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSDataSetPropertyType'
          }, {
            name: 'seriesMetadata',
            collection: true,
            elementName: {
              localPart: 'seriesMetadata',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMetadataPropertyType'
          }, {
            name: 'subset',
            collection: true,
            elementName: {
              localPart: 'subset',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSAggregatePropertyType'
          }, {
            name: 'superset',
            collection: true,
            elementName: {
              localPart: 'superset',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSAggregatePropertyType'
          }]
      }, {
        localName: 'DQCompletenessOmissionType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQCompletenessType'
      }, {
        localName: 'DQConformanceResultType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQResultType',
        propertyInfos: [{
            name: 'specification',
            elementName: {
              localPart: 'specification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: 'explanation',
            elementName: {
              localPart: 'explanation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'pass',
            elementName: {
              localPart: 'pass',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }]
      }, {
        localName: 'AbstractDQResultType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType'
      }, {
        localName: 'MDReferenceSystemType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'referenceSystemIdentifier',
            elementName: {
              localPart: 'referenceSystemIdentifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RSIdentifierPropertyType'
          }]
      }, {
        localName: 'DSProductionSeriesType',
        baseTypeInfo: 'armlJSONSchema.DSSeriesType'
      }, {
        localName: 'RSIdentifierType',
        baseTypeInfo: 'armlJSONSchema.MDIdentifierType',
        propertyInfos: [{
            name: 'codeSpace',
            elementName: {
              localPart: 'codeSpace',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'version',
            elementName: {
              localPart: 'version',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDIdentifierType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'authority',
            elementName: {
              localPart: 'authority',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: 'code',
            elementName: {
              localPart: 'code',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDMetadataType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'fileIdentifier',
            elementName: {
              localPart: 'fileIdentifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'language',
            elementName: {
              localPart: 'language',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'characterSet',
            elementName: {
              localPart: 'characterSet',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDCharacterSetCodePropertyType'
          }, {
            name: 'parentIdentifier',
            elementName: {
              localPart: 'parentIdentifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'hierarchyLevel',
            collection: true,
            elementName: {
              localPart: 'hierarchyLevel',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDScopeCodePropertyType'
          }, {
            name: 'hierarchyLevelName',
            collection: true,
            elementName: {
              localPart: 'hierarchyLevelName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'contact',
            collection: true,
            elementName: {
              localPart: 'contact',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }, {
            name: 'dateStamp',
            elementName: {
              localPart: 'dateStamp',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DatePropertyType'
          }, {
            name: 'metadataStandardName',
            elementName: {
              localPart: 'metadataStandardName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'metadataStandardVersion',
            elementName: {
              localPart: 'metadataStandardVersion',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'dataSetURI',
            elementName: {
              localPart: 'dataSetURI',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'locale',
            collection: true,
            elementName: {
              localPart: 'locale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.PTLocalePropertyType'
          }, {
            name: 'spatialRepresentationInfo',
            collection: true,
            elementName: {
              localPart: 'spatialRepresentationInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDSpatialRepresentationPropertyType'
          }, {
            name: 'referenceSystemInfo',
            collection: true,
            elementName: {
              localPart: 'referenceSystemInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDReferenceSystemPropertyType'
          }, {
            name: 'metadataExtensionInfo',
            collection: true,
            elementName: {
              localPart: 'metadataExtensionInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMetadataExtensionInformationPropertyType'
          }, {
            name: 'identificationInfo',
            collection: true,
            elementName: {
              localPart: 'identificationInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentificationPropertyType'
          }, {
            name: 'contentInfo',
            collection: true,
            elementName: {
              localPart: 'contentInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDContentInformationPropertyType'
          }, {
            name: 'distributionInfo',
            elementName: {
              localPart: 'distributionInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDistributionPropertyType'
          }, {
            name: 'dataQualityInfo',
            collection: true,
            elementName: {
              localPart: 'dataQualityInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQDataQualityPropertyType'
          }, {
            name: 'portrayalCatalogueInfo',
            collection: true,
            elementName: {
              localPart: 'portrayalCatalogueInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDPortrayalCatalogueReferencePropertyType'
          }, {
            name: 'metadataConstraints',
            collection: true,
            elementName: {
              localPart: 'metadataConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDConstraintsPropertyType'
          }, {
            name: 'applicationSchemaInfo',
            collection: true,
            elementName: {
              localPart: 'applicationSchemaInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDApplicationSchemaInformationPropertyType'
          }, {
            name: 'metadataMaintenance',
            elementName: {
              localPart: 'metadataMaintenance',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMaintenanceInformationPropertyType'
          }, {
            name: 'series',
            collection: true,
            elementName: {
              localPart: 'series',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSAggregatePropertyType'
          }, {
            name: 'describes',
            collection: true,
            elementName: {
              localPart: 'describes',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSDataSetPropertyType'
          }, {
            name: 'propertyType',
            collection: true,
            elementName: {
              localPart: 'propertyType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }, {
            name: 'featureType',
            collection: true,
            elementName: {
              localPart: 'featureType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }, {
            name: 'featureAttribute',
            collection: true,
            elementName: {
              localPart: 'featureAttribute',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }]
      }, {
        localName: 'DQTemporalValidityType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQTemporalAccuracyType'
      }, {
        localName: 'DQTemporalConsistencyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQTemporalAccuracyType'
      }, {
        localName: 'MDDistributionType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'distributionFormat',
            collection: true,
            elementName: {
              localPart: 'distributionFormat',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDFormatPropertyType'
          }, {
            name: 'distributor',
            collection: true,
            elementName: {
              localPart: 'distributor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDistributorPropertyType'
          }, {
            name: 'transferOptions',
            collection: true,
            elementName: {
              localPart: 'transferOptions',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDigitalTransferOptionsPropertyType'
          }]
      }, {
        localName: 'DQAbsoluteExternalPositionalAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQPositionalAccuracyType'
      }, {
        localName: 'MDVectorSpatialRepresentationType',
        baseTypeInfo: 'armlJSONSchema.AbstractMDSpatialRepresentationType',
        propertyInfos: [{
            name: 'topologyLevel',
            elementName: {
              localPart: 'topologyLevel',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDTopologyLevelCodePropertyType'
          }, {
            name: 'geometricObjects',
            collection: true,
            elementName: {
              localPart: 'geometricObjects',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDGeometricObjectsPropertyType'
          }]
      }, {
        localName: 'EXGeographicDescriptionType',
        baseTypeInfo: 'armlJSONSchema.AbstractEXGeographicExtentType',
        propertyInfos: [{
            name: 'geographicIdentifier',
            elementName: {
              localPart: 'geographicIdentifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierPropertyType'
          }]
      }, {
        localName: 'CITelephoneType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'voice',
            collection: true,
            elementName: {
              localPart: 'voice',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'facsimile',
            collection: true,
            elementName: {
              localPart: 'facsimile',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDBandType',
        baseTypeInfo: 'armlJSONSchema.MDRangeDimensionType',
        propertyInfos: [{
            name: 'maxValue',
            elementName: {
              localPart: 'maxValue',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'minValue',
            elementName: {
              localPart: 'minValue',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'units',
            elementName: {
              localPart: 'units',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.UomLengthPropertyType'
          }, {
            name: 'peakResponse',
            elementName: {
              localPart: 'peakResponse',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'bitsPerValue',
            elementName: {
              localPart: 'bitsPerValue',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'toneGradation',
            elementName: {
              localPart: 'toneGradation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'scaleFactor',
            elementName: {
              localPart: 'scaleFactor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'offset',
            elementName: {
              localPart: 'offset',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }]
      }, {
        localName: 'CISeriesType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'issueIdentification',
            elementName: {
              localPart: 'issueIdentification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'page',
            elementName: {
              localPart: 'page',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'LIProcessStepType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'description',
            elementName: {
              localPart: 'description',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'rationale',
            elementName: {
              localPart: 'rationale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'dateTime',
            elementName: {
              localPart: 'dateTime',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DateTimePropertyType'
          }, {
            name: 'processor',
            collection: true,
            elementName: {
              localPart: 'processor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }, {
            name: 'source',
            collection: true,
            elementName: {
              localPart: 'source',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LISourcePropertyType'
          }]
      }, {
        localName: 'DQGriddedDataPositionalAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQPositionalAccuracyType'
      }, {
        localName: 'EXGeographicBoundingBoxType',
        baseTypeInfo: 'armlJSONSchema.AbstractEXGeographicExtentType',
        propertyInfos: [{
            name: 'westBoundLongitude',
            elementName: {
              localPart: 'westBoundLongitude',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DecimalPropertyType'
          }, {
            name: 'eastBoundLongitude',
            elementName: {
              localPart: 'eastBoundLongitude',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DecimalPropertyType'
          }, {
            name: 'southBoundLatitude',
            elementName: {
              localPart: 'southBoundLatitude',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DecimalPropertyType'
          }, {
            name: 'northBoundLatitude',
            elementName: {
              localPart: 'northBoundLatitude',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DecimalPropertyType'
          }]
      }, {
        localName: 'DQThematicClassificationCorrectnessType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQThematicAccuracyType'
      }, {
        localName: 'AbstractDQThematicAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQElementType'
      }, {
        localName: 'MDConstraintsType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'useLimitation',
            collection: true,
            elementName: {
              localPart: 'useLimitation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDDistributorType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'distributorContact',
            elementName: {
              localPart: 'distributorContact',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }, {
            name: 'distributionOrderProcess',
            collection: true,
            elementName: {
              localPart: 'distributionOrderProcess',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDStandardOrderProcessPropertyType'
          }, {
            name: 'distributorFormat',
            collection: true,
            elementName: {
              localPart: 'distributorFormat',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDFormatPropertyType'
          }, {
            name: 'distributorTransferOptions',
            collection: true,
            elementName: {
              localPart: 'distributorTransferOptions',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDigitalTransferOptionsPropertyType'
          }]
      }, {
        localName: 'CIResponsiblePartyType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'individualName',
            elementName: {
              localPart: 'individualName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'organisationName',
            elementName: {
              localPart: 'organisationName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'positionName',
            elementName: {
              localPart: 'positionName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'contactInfo',
            elementName: {
              localPart: 'contactInfo',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIContactPropertyType'
          }, {
            name: 'role',
            elementName: {
              localPart: 'role',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIRoleCodePropertyType'
          }]
      }, {
        localName: 'MDServiceIdentificationType',
        baseTypeInfo: 'armlJSONSchema.AbstractMDIdentificationType'
      }, {
        localName: 'DQScopeType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'level',
            elementName: {
              localPart: 'level',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDScopeCodePropertyType'
          }, {
            name: 'extent',
            elementName: {
              localPart: 'extent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXExtentPropertyType'
          }, {
            name: 'levelDescription',
            collection: true,
            elementName: {
              localPart: 'levelDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDScopeDescriptionPropertyType'
          }]
      }, {
        localName: 'EXBoundingPolygonType',
        baseTypeInfo: 'armlJSONSchema.AbstractEXGeographicExtentType',
        propertyInfos: [{
            name: 'polygon',
            collection: true,
            elementName: {
              localPart: 'polygon',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.GMObjectPropertyType'
          }]
      }, {
        localName: 'EXVerticalExtentType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'minimumValue',
            elementName: {
              localPart: 'minimumValue',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'maximumValue',
            elementName: {
              localPart: 'maximumValue',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'verticalCRS',
            elementName: {
              localPart: 'verticalCRS',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.SCCRSPropertyType'
          }]
      }, {
        localName: 'DSSensorType',
        baseTypeInfo: 'armlJSONSchema.DSSeriesType'
      }, {
        localName: 'CIOnlineResourceType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'linkage',
            elementName: {
              localPart: 'linkage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.URLPropertyType'
          }, {
            name: 'protocol',
            elementName: {
              localPart: 'protocol',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'applicationProfile',
            elementName: {
              localPart: 'applicationProfile',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'description',
            elementName: {
              localPart: 'description',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'function',
            elementName: {
              localPart: 'function',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIOnLineFunctionCodePropertyType'
          }]
      }, {
        localName: 'DQQuantitativeResultType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQResultType',
        propertyInfos: [{
            name: 'valueType',
            elementName: {
              localPart: 'valueType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RecordTypePropertyType'
          }, {
            name: 'valueUnit',
            elementName: {
              localPart: 'valueUnit',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.UnitOfMeasurePropertyType'
          }, {
            name: 'errorStatistic',
            elementName: {
              localPart: 'errorStatistic',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'value',
            collection: true,
            elementName: {
              localPart: 'value',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RecordPropertyType'
          }]
      }, {
        localName: 'MDGeoreferenceableType',
        baseTypeInfo: 'armlJSONSchema.MDGridSpatialRepresentationType',
        propertyInfos: [{
            name: 'controlPointAvailability',
            elementName: {
              localPart: 'controlPointAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'orientationParameterAvailability',
            elementName: {
              localPart: 'orientationParameterAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'orientationParameterDescription',
            elementName: {
              localPart: 'orientationParameterDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'georeferencedParameters',
            elementName: {
              localPart: 'georeferencedParameters',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RecordPropertyType'
          }, {
            name: 'parameterCitation',
            collection: true,
            elementName: {
              localPart: 'parameterCitation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }]
      }, {
        localName: 'MDGeorectifiedType',
        baseTypeInfo: 'armlJSONSchema.MDGridSpatialRepresentationType',
        propertyInfos: [{
            name: 'checkPointAvailability',
            elementName: {
              localPart: 'checkPointAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'checkPointDescription',
            elementName: {
              localPart: 'checkPointDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'cornerPoints',
            collection: true,
            elementName: {
              localPart: 'cornerPoints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.GMPointPropertyType'
          }, {
            name: 'centerPoint',
            elementName: {
              localPart: 'centerPoint',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.GMPointPropertyType'
          }, {
            name: 'pointInPixel',
            elementName: {
              localPart: 'pointInPixel',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDPixelOrientationCodePropertyType'
          }, {
            name: 'transformationDimensionDescription',
            elementName: {
              localPart: 'transformationDimensionDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'transformationDimensionMapping',
            collection: true,
            elementName: {
              localPart: 'transformationDimensionMapping',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDDigitalTransferOptionsType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'unitsOfDistribution',
            elementName: {
              localPart: 'unitsOfDistribution',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'transferSize',
            elementName: {
              localPart: 'transferSize',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'onLine',
            collection: true,
            elementName: {
              localPart: 'onLine',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIOnlineResourcePropertyType'
          }, {
            name: 'offLine',
            elementName: {
              localPart: 'offLine',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMediumPropertyType'
          }]
      }, {
        localName: 'MDResolutionType',
        propertyInfos: [{
            name: 'equivalentScale',
            elementName: {
              localPart: 'equivalentScale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRepresentativeFractionPropertyType'
          }, {
            name: 'distance',
            elementName: {
              localPart: 'distance',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DistancePropertyType'
          }]
      }, {
        localName: 'LocalisedCharacterStringType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'locale',
            attributeName: {
              localPart: 'locale'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PTLocaleType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'languageCode',
            elementName: {
              localPart: 'languageCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LanguageCodePropertyType'
          }, {
            name: 'country',
            elementName: {
              localPart: 'country',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CountryPropertyType'
          }, {
            name: 'characterEncoding',
            elementName: {
              localPart: 'characterEncoding',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDCharacterSetCodePropertyType'
          }]
      }, {
        localName: 'PTFreeTextType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'textGroup',
            collection: true,
            elementName: {
              localPart: 'textGroup',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LocalisedCharacterStringPropertyType'
          }]
      }, {
        localName: 'MDScopeDescriptionType',
        propertyInfos: [{
            name: 'attributes',
            collection: true,
            elementName: {
              localPart: 'attributes',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }, {
            name: 'features',
            collection: true,
            elementName: {
              localPart: 'features',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }, {
            name: 'featureInstances',
            collection: true,
            elementName: {
              localPart: 'featureInstances',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }, {
            name: 'attributeInstances',
            collection: true,
            elementName: {
              localPart: 'attributeInstances',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.ObjectReferencePropertyType'
          }, {
            name: 'dataset',
            elementName: {
              localPart: 'dataset',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'other',
            elementName: {
              localPart: 'other',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DQRelativeInternalPositionalAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQPositionalAccuracyType'
      }, {
        localName: 'MDSecurityConstraintsType',
        baseTypeInfo: 'armlJSONSchema.MDConstraintsType',
        propertyInfos: [{
            name: 'classification',
            elementName: {
              localPart: 'classification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDClassificationCodePropertyType'
          }, {
            name: 'userNote',
            elementName: {
              localPart: 'userNote',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'classificationSystem',
            elementName: {
              localPart: 'classificationSystem',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'handlingDescription',
            elementName: {
              localPart: 'handlingDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDGeometricObjectsType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'geometricObjectType',
            elementName: {
              localPart: 'geometricObjectType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDGeometricObjectTypeCodePropertyType'
          }, {
            name: 'geometricObjectCount',
            elementName: {
              localPart: 'geometricObjectCount',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }]
      }, {
        localName: 'DQTopologicalConsistencyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'MDMediumType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMediumNameCodePropertyType'
          }, {
            name: 'density',
            collection: true,
            elementName: {
              localPart: 'density',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'densityUnits',
            elementName: {
              localPart: 'densityUnits',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'volumes',
            elementName: {
              localPart: 'volumes',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'mediumFormat',
            collection: true,
            elementName: {
              localPart: 'mediumFormat',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMediumFormatCodePropertyType'
          }, {
            name: 'mediumNote',
            elementName: {
              localPart: 'mediumNote',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDKeywordsType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'keyword',
            collection: true,
            elementName: {
              localPart: 'keyword',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'type',
            elementName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDKeywordTypeCodePropertyType'
          }, {
            name: 'thesaurusName',
            elementName: {
              localPart: 'thesaurusName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }]
      }, {
        localName: 'PTLocaleContainerType',
        propertyInfos: [{
            name: 'description',
            elementName: {
              localPart: 'description',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'locale',
            elementName: {
              localPart: 'locale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.PTLocalePropertyType'
          }, {
            name: 'date',
            collection: true,
            elementName: {
              localPart: 'date',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIDatePropertyType'
          }, {
            name: 'responsibleParty',
            collection: true,
            elementName: {
              localPart: 'responsibleParty',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }, {
            name: 'localisedString',
            collection: true,
            elementName: {
              localPart: 'localisedString',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LocalisedCharacterStringPropertyType'
          }]
      }, {
        localName: 'DQFormatConsistencyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'MDExtendedElementInformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'shortName',
            elementName: {
              localPart: 'shortName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'domainCode',
            elementName: {
              localPart: 'domainCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'definition',
            elementName: {
              localPart: 'definition',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'obligation',
            elementName: {
              localPart: 'obligation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDObligationCodePropertyType'
          }, {
            name: 'condition',
            elementName: {
              localPart: 'condition',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'dataType',
            elementName: {
              localPart: 'dataType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDatatypeCodePropertyType'
          }, {
            name: 'maximumOccurrence',
            elementName: {
              localPart: 'maximumOccurrence',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'domainValue',
            elementName: {
              localPart: 'domainValue',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'parentEntity',
            collection: true,
            elementName: {
              localPart: 'parentEntity',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'rule',
            elementName: {
              localPart: 'rule',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'rationale',
            collection: true,
            elementName: {
              localPart: 'rationale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'source',
            collection: true,
            elementName: {
              localPart: 'source',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyPropertyType'
          }]
      }, {
        localName: 'DSPlatformType',
        baseTypeInfo: 'armlJSONSchema.DSSeriesType'
      }, {
        localName: 'MDMetadataExtensionInformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'extensionOnLineResource',
            elementName: {
              localPart: 'extensionOnLineResource',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIOnlineResourcePropertyType'
          }, {
            name: 'extendedElementInformation',
            collection: true,
            elementName: {
              localPart: 'extendedElementInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDExtendedElementInformationPropertyType'
          }]
      }, {
        localName: 'LISourceType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'description',
            elementName: {
              localPart: 'description',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'scaleDenominator',
            elementName: {
              localPart: 'scaleDenominator',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRepresentativeFractionPropertyType'
          }, {
            name: 'sourceReferenceSystem',
            elementName: {
              localPart: 'sourceReferenceSystem',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDReferenceSystemPropertyType'
          }, {
            name: 'sourceCitation',
            elementName: {
              localPart: 'sourceCitation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: 'sourceExtent',
            collection: true,
            elementName: {
              localPart: 'sourceExtent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXExtentPropertyType'
          }, {
            name: 'sourceStep',
            collection: true,
            elementName: {
              localPart: 'sourceStep',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LIProcessStepPropertyType'
          }]
      }, {
        localName: 'DQAccuracyOfATimeMeasurementType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQTemporalAccuracyType'
      }, {
        localName: 'MDDataIdentificationType',
        baseTypeInfo: 'armlJSONSchema.AbstractMDIdentificationType',
        propertyInfos: [{
            name: 'spatialRepresentationType',
            collection: true,
            elementName: {
              localPart: 'spatialRepresentationType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDSpatialRepresentationTypeCodePropertyType'
          }, {
            name: 'spatialResolution',
            collection: true,
            elementName: {
              localPart: 'spatialResolution',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDResolutionPropertyType'
          }, {
            name: 'language',
            collection: true,
            elementName: {
              localPart: 'language',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'characterSet',
            collection: true,
            elementName: {
              localPart: 'characterSet',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDCharacterSetCodePropertyType'
          }, {
            name: 'topicCategory',
            collection: true,
            elementName: {
              localPart: 'topicCategory',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDTopicCategoryCodePropertyType'
          }, {
            name: 'environmentDescription',
            elementName: {
              localPart: 'environmentDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'extent',
            collection: true,
            elementName: {
              localPart: 'extent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXExtentPropertyType'
          }, {
            name: 'supplementalInformation',
            elementName: {
              localPart: 'supplementalInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DSInitiativeType',
        baseTypeInfo: 'armlJSONSchema.AbstractDSAggregateType'
      }, {
        localName: 'DSStereoMateType',
        baseTypeInfo: 'armlJSONSchema.DSOtherAggregateType'
      }, {
        localName: 'DSOtherAggregateType',
        baseTypeInfo: 'armlJSONSchema.AbstractDSAggregateType'
      }, {
        localName: 'DQQuantitativeAttributeAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQThematicAccuracyType'
      }, {
        localName: 'MDLegalConstraintsType',
        baseTypeInfo: 'armlJSONSchema.MDConstraintsType',
        propertyInfos: [{
            name: 'accessConstraints',
            collection: true,
            elementName: {
              localPart: 'accessConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRestrictionCodePropertyType'
          }, {
            name: 'useConstraints',
            collection: true,
            elementName: {
              localPart: 'useConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRestrictionCodePropertyType'
          }, {
            name: 'otherConstraints',
            collection: true,
            elementName: {
              localPart: 'otherConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'CIAddressType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'deliveryPoint',
            collection: true,
            elementName: {
              localPart: 'deliveryPoint',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'city',
            elementName: {
              localPart: 'city',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'administrativeArea',
            elementName: {
              localPart: 'administrativeArea',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'postalCode',
            elementName: {
              localPart: 'postalCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'country',
            elementName: {
              localPart: 'country',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'electronicMailAddress',
            collection: true,
            elementName: {
              localPart: 'electronicMailAddress',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DQConceptualConsistencyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'DQCompletenessCommissionType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQCompletenessType'
      }, {
        localName: 'MDCoverageDescriptionType',
        baseTypeInfo: 'armlJSONSchema.AbstractMDContentInformationType',
        propertyInfos: [{
            name: 'attributeDescription',
            elementName: {
              localPart: 'attributeDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RecordTypePropertyType'
          }, {
            name: 'contentType',
            elementName: {
              localPart: 'contentType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDCoverageContentTypeCodePropertyType'
          }, {
            name: 'dimension',
            collection: true,
            elementName: {
              localPart: 'dimension',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRangeDimensionPropertyType'
          }]
      }, {
        localName: 'MDImageDescriptionType',
        baseTypeInfo: 'armlJSONSchema.MDCoverageDescriptionType',
        propertyInfos: [{
            name: 'illuminationElevationAngle',
            elementName: {
              localPart: 'illuminationElevationAngle',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'illuminationAzimuthAngle',
            elementName: {
              localPart: 'illuminationAzimuthAngle',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'imagingCondition',
            elementName: {
              localPart: 'imagingCondition',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDImagingConditionCodePropertyType'
          }, {
            name: 'imageQualityCode',
            elementName: {
              localPart: 'imageQualityCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierPropertyType'
          }, {
            name: 'cloudCoverPercentage',
            elementName: {
              localPart: 'cloudCoverPercentage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RealPropertyType'
          }, {
            name: 'processingLevelCode',
            elementName: {
              localPart: 'processingLevelCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierPropertyType'
          }, {
            name: 'compressionGenerationQuantity',
            elementName: {
              localPart: 'compressionGenerationQuantity',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'triangulationIndicator',
            elementName: {
              localPart: 'triangulationIndicator',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'radiometricCalibrationDataAvailability',
            elementName: {
              localPart: 'radiometricCalibrationDataAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'cameraCalibrationInformationAvailability',
            elementName: {
              localPart: 'cameraCalibrationInformationAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'filmDistortionInformationAvailability',
            elementName: {
              localPart: 'filmDistortionInformationAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }, {
            name: 'lensDistortionInformationAvailability',
            elementName: {
              localPart: 'lensDistortionInformationAvailability',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.BooleanPropertyType'
          }]
      }, {
        localName: 'MDAggregateInformationType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'aggregateDataSetName',
            elementName: {
              localPart: 'aggregateDataSetName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationPropertyType'
          }, {
            name: 'aggregateDataSetIdentifier',
            elementName: {
              localPart: 'aggregateDataSetIdentifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierPropertyType'
          }, {
            name: 'associationType',
            elementName: {
              localPart: 'associationType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSAssociationTypeCodePropertyType'
          }, {
            name: 'initiativeType',
            elementName: {
              localPart: 'initiativeType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSInitiativeTypeCodePropertyType'
          }]
      }, {
        localName: 'DSDataSetType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'has',
            collection: true,
            elementName: {
              localPart: 'has',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMetadataPropertyType'
          }, {
            name: 'partOf',
            collection: true,
            elementName: {
              localPart: 'partOf',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSAggregatePropertyType'
          }]
      }, {
        localName: 'MDStandardOrderProcessType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'fees',
            elementName: {
              localPart: 'fees',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'plannedAvailableDateTime',
            elementName: {
              localPart: 'plannedAvailableDateTime',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DateTimePropertyType'
          }, {
            name: 'orderingInstructions',
            elementName: {
              localPart: 'orderingInstructions',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'turnaround',
            elementName: {
              localPart: 'turnaround',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DQNonQuantitativeAttributeAccuracyType',
        baseTypeInfo: 'armlJSONSchema.AbstractDQThematicAccuracyType'
      }, {
        localName: 'MDRepresentativeFractionType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'denominator',
            elementName: {
              localPart: 'denominator',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }]
      }, {
        localName: 'MDVectorSpatialRepresentationPropertyType',
        propertyInfos: [{
            name: 'mdVectorSpatialRepresentation',
            elementName: {
              localPart: 'MD_VectorSpatialRepresentation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDVectorSpatialRepresentationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDistributionPropertyType',
        propertyInfos: [{
            name: 'mdDistribution',
            elementName: {
              localPart: 'MD_Distribution',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDistributionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDReferenceSystemPropertyType',
        propertyInfos: [{
            name: 'mdReferenceSystem',
            elementName: {
              localPart: 'MD_ReferenceSystem',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDReferenceSystemType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDServiceIdentificationPropertyType',
        propertyInfos: [{
            name: 'mdServiceIdentification',
            elementName: {
              localPart: 'MD_ServiceIdentification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDServiceIdentificationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDGridSpatialRepresentationPropertyType',
        propertyInfos: [{
            name: 'mdGridSpatialRepresentation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'MD_GridSpatialRepresentation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDGridSpatialRepresentationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LIProcessStepPropertyType',
        propertyInfos: [{
            name: 'liProcessStep',
            elementName: {
              localPart: 'LI_ProcessStep',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LIProcessStepType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSSensorPropertyType',
        propertyInfos: [{
            name: 'dsSensor',
            elementName: {
              localPart: 'DS_Sensor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSSensorType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDTopicCategoryCodePropertyType',
        propertyInfos: [{
            name: 'mdTopicCategoryCode',
            elementName: {
              localPart: 'MD_TopicCategoryCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDTopologyLevelCodePropertyType',
        propertyInfos: [{
            name: 'mdTopologyLevelCode',
            elementName: {
              localPart: 'MD_TopologyLevelCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EXExtentPropertyType',
        propertyInfos: [{
            name: 'exExtent',
            elementName: {
              localPart: 'EX_Extent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXExtentType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDCharacterSetCodePropertyType',
        propertyInfos: [{
            name: 'mdCharacterSetCode',
            elementName: {
              localPart: 'MD_CharacterSetCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDSpatialRepresentationPropertyType',
        propertyInfos: [{
            name: 'abstractMDSpatialRepresentation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractMD_SpatialRepresentation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractMDSpatialRepresentationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQAbsoluteExternalPositionalAccuracyPropertyType',
        propertyInfos: [{
            name: 'dqAbsoluteExternalPositionalAccuracy',
            elementName: {
              localPart: 'DQ_AbsoluteExternalPositionalAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQAbsoluteExternalPositionalAccuracyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSAssociationPropertyType',
        propertyInfos: [{
            name: 'dsAssociation',
            elementName: {
              localPart: 'DS_Association',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSAssociationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDResolutionPropertyType',
        propertyInfos: [{
            name: 'mdResolution',
            elementName: {
              localPart: 'MD_Resolution',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDResolutionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DSSeriesPropertyType',
        propertyInfos: [{
            name: 'dsSeries',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'DS_Series',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSSeriesType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQScopePropertyType',
        propertyInfos: [{
            name: 'dqScope',
            elementName: {
              localPart: 'DQ_Scope',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQScopeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDAggregateInformationPropertyType',
        propertyInfos: [{
            name: 'mdAggregateInformation',
            elementName: {
              localPart: 'MD_AggregateInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDAggregateInformationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EXVerticalExtentPropertyType',
        propertyInfos: [{
            name: 'exVerticalExtent',
            elementName: {
              localPart: 'EX_VerticalExtent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXVerticalExtentType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQConceptualConsistencyPropertyType',
        propertyInfos: [{
            name: 'dqConceptualConsistency',
            elementName: {
              localPart: 'DQ_ConceptualConsistency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQConceptualConsistencyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQRelativeInternalPositionalAccuracyPropertyType',
        propertyInfos: [{
            name: 'dqRelativeInternalPositionalAccuracy',
            elementName: {
              localPart: 'DQ_RelativeInternalPositionalAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQRelativeInternalPositionalAccuracyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSStereoMatePropertyType',
        propertyInfos: [{
            name: 'dsStereoMate',
            elementName: {
              localPart: 'DS_StereoMate',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSStereoMateType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDRangeDimensionPropertyType',
        propertyInfos: [{
            name: 'mdRangeDimension',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'MD_RangeDimension',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRangeDimensionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDKeywordsPropertyType',
        propertyInfos: [{
            name: 'mdKeywords',
            elementName: {
              localPart: 'MD_Keywords',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDKeywordsType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'RSIdentifierPropertyType',
        propertyInfos: [{
            name: 'rsIdentifier',
            elementName: {
              localPart: 'RS_Identifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.RSIdentifierType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LanguageCodePropertyType',
        propertyInfos: [{
            name: 'languageCode',
            elementName: {
              localPart: 'LanguageCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EXTemporalExtentPropertyType',
        propertyInfos: [{
            name: 'exTemporalExtent',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'EX_TemporalExtent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXTemporalExtentType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQConformanceResultPropertyType',
        propertyInfos: [{
            name: 'dqConformanceResult',
            elementName: {
              localPart: 'DQ_ConformanceResult',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQConformanceResultType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQCompletenessCommissionPropertyType',
        propertyInfos: [{
            name: 'dqCompletenessCommission',
            elementName: {
              localPart: 'DQ_CompletenessCommission',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQCompletenessCommissionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSInitiativePropertyType',
        propertyInfos: [{
            name: 'dsInitiative',
            elementName: {
              localPart: 'DS_Initiative',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSInitiativeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIOnLineFunctionCodePropertyType',
        propertyInfos: [{
            name: 'ciOnLineFunctionCode',
            elementName: {
              localPart: 'CI_OnLineFunctionCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DQCompletenessOmissionPropertyType',
        propertyInfos: [{
            name: 'dqCompletenessOmission',
            elementName: {
              localPart: 'DQ_CompletenessOmission',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQCompletenessOmissionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDLegalConstraintsPropertyType',
        propertyInfos: [{
            name: 'mdLegalConstraints',
            elementName: {
              localPart: 'MD_LegalConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDLegalConstraintsType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDistributorPropertyType',
        propertyInfos: [{
            name: 'mdDistributor',
            elementName: {
              localPart: 'MD_Distributor',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDistributorType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDMediumNameCodePropertyType',
        propertyInfos: [{
            name: 'mdMediumNameCode',
            elementName: {
              localPart: 'MD_MediumNameCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDProgressCodePropertyType',
        propertyInfos: [{
            name: 'mdProgressCode',
            elementName: {
              localPart: 'MD_ProgressCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CountryPropertyType',
        propertyInfos: [{
            name: 'country',
            elementName: {
              localPart: 'Country',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'LILineagePropertyType',
        propertyInfos: [{
            name: 'liLineage',
            elementName: {
              localPart: 'LI_Lineage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LILineageType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDObligationCodePropertyType',
        propertyInfos: [{
            name: 'mdObligationCode',
            elementName: {
              localPart: 'MD_ObligationCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DSPlatformPropertyType',
        propertyInfos: [{
            name: 'dsPlatform',
            elementName: {
              localPart: 'DS_Platform',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSPlatformType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDUsagePropertyType',
        propertyInfos: [{
            name: 'mdUsage',
            elementName: {
              localPart: 'MD_Usage',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDUsageType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIResponsiblePartyPropertyType',
        propertyInfos: [{
            name: 'ciResponsibleParty',
            elementName: {
              localPart: 'CI_ResponsibleParty',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIResponsiblePartyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDKeywordTypeCodePropertyType',
        propertyInfos: [{
            name: 'mdKeywordTypeCode',
            elementName: {
              localPart: 'MD_KeywordTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EXGeographicDescriptionPropertyType',
        propertyInfos: [{
            name: 'exGeographicDescription',
            elementName: {
              localPart: 'EX_GeographicDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXGeographicDescriptionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDMaintenanceInformationPropertyType',
        propertyInfos: [{
            name: 'mdMaintenanceInformation',
            elementName: {
              localPart: 'MD_MaintenanceInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMaintenanceInformationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSDataSetPropertyType',
        propertyInfos: [{
            name: 'dsDataSet',
            elementName: {
              localPart: 'DS_DataSet',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSDataSetType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDBrowseGraphicPropertyType',
        propertyInfos: [{
            name: 'mdBrowseGraphic',
            elementName: {
              localPart: 'MD_BrowseGraphic',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDBrowseGraphicType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDGeoreferenceablePropertyType',
        propertyInfos: [{
            name: 'mdGeoreferenceable',
            elementName: {
              localPart: 'MD_Georeferenceable',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDGeoreferenceableType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EXSpatialTemporalExtentPropertyType',
        propertyInfos: [{
            name: 'exSpatialTemporalExtent',
            elementName: {
              localPart: 'EX_SpatialTemporalExtent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXSpatialTemporalExtentType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIDateTypeCodePropertyType',
        propertyInfos: [{
            name: 'ciDateTypeCode',
            elementName: {
              localPart: 'CI_DateTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDGeometricObjectsPropertyType',
        propertyInfos: [{
            name: 'mdGeometricObjects',
            elementName: {
              localPart: 'MD_GeometricObjects',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDGeometricObjectsType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EXBoundingPolygonPropertyType',
        propertyInfos: [{
            name: 'exBoundingPolygon',
            elementName: {
              localPart: 'EX_BoundingPolygon',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXBoundingPolygonType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDCoverageDescriptionPropertyType',
        propertyInfos: [{
            name: 'mdCoverageDescription',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'MD_CoverageDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDCoverageDescriptionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDatatypeCodePropertyType',
        propertyInfos: [{
            name: 'mdDatatypeCode',
            elementName: {
              localPart: 'MD_DatatypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DQThematicClassificationCorrectnessPropertyType',
        propertyInfos: [{
            name: 'dqThematicClassificationCorrectness',
            elementName: {
              localPart: 'DQ_ThematicClassificationCorrectness',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQThematicClassificationCorrectnessType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDStandardOrderProcessPropertyType',
        propertyInfos: [{
            name: 'mdStandardOrderProcess',
            elementName: {
              localPart: 'MD_StandardOrderProcess',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDStandardOrderProcessType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDFeatureCatalogueDescriptionPropertyType',
        propertyInfos: [{
            name: 'mdFeatureCatalogueDescription',
            elementName: {
              localPart: 'MD_FeatureCatalogueDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDFeatureCatalogueDescriptionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDimensionNameTypeCodePropertyType',
        propertyInfos: [{
            name: 'mdDimensionNameTypeCode',
            elementName: {
              localPart: 'MD_DimensionNameTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DQQuantitativeResultPropertyType',
        propertyInfos: [{
            name: 'dqQuantitativeResult',
            elementName: {
              localPart: 'DQ_QuantitativeResult',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQQuantitativeResultType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSAssociationTypeCodePropertyType',
        propertyInfos: [{
            name: 'dsAssociationTypeCode',
            elementName: {
              localPart: 'DS_AssociationTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DSProductionSeriesPropertyType',
        propertyInfos: [{
            name: 'dsProductionSeries',
            elementName: {
              localPart: 'DS_ProductionSeries',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSProductionSeriesType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDConstraintsPropertyType',
        propertyInfos: [{
            name: 'mdConstraints',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'MD_Constraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDConstraintsType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSInitiativeTypeCodePropertyType',
        propertyInfos: [{
            name: 'dsInitiativeTypeCode',
            elementName: {
              localPart: 'DS_InitiativeTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDContentInformationPropertyType',
        propertyInfos: [{
            name: 'abstractMDContentInformation',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractMD_ContentInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractMDContentInformationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQTopologicalConsistencyPropertyType',
        propertyInfos: [{
            name: 'dqTopologicalConsistency',
            elementName: {
              localPart: 'DQ_TopologicalConsistency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQTopologicalConsistencyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDGeometricObjectTypeCodePropertyType',
        propertyInfos: [{
            name: 'mdGeometricObjectTypeCode',
            elementName: {
              localPart: 'MD_GeometricObjectTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDMediumPropertyType',
        propertyInfos: [{
            name: 'mdMedium',
            elementName: {
              localPart: 'MD_Medium',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMediumType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIPresentationFormCodePropertyType',
        propertyInfos: [{
            name: 'ciPresentationFormCode',
            elementName: {
              localPart: 'CI_PresentationFormCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDPortrayalCatalogueReferencePropertyType',
        propertyInfos: [{
            name: 'mdPortrayalCatalogueReference',
            elementName: {
              localPart: 'MD_PortrayalCatalogueReference',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDPortrayalCatalogueReferenceType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDMaintenanceFrequencyCodePropertyType',
        propertyInfos: [{
            name: 'mdMaintenanceFrequencyCode',
            elementName: {
              localPart: 'MD_MaintenanceFrequencyCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDRestrictionCodePropertyType',
        propertyInfos: [{
            name: 'mdRestrictionCode',
            elementName: {
              localPart: 'MD_RestrictionCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDCellGeometryCodePropertyType',
        propertyInfos: [{
            name: 'mdCellGeometryCode',
            elementName: {
              localPart: 'MD_CellGeometryCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDGeorectifiedPropertyType',
        propertyInfos: [{
            name: 'mdGeorectified',
            elementName: {
              localPart: 'MD_Georectified',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDGeorectifiedType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQTemporalValidityPropertyType',
        propertyInfos: [{
            name: 'dqTemporalValidity',
            elementName: {
              localPart: 'DQ_TemporalValidity',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQTemporalValidityType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQLogicalConsistencyPropertyType',
        propertyInfos: [{
            name: 'abstractDQLogicalConsistency',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_LogicalConsistency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQLogicalConsistencyType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'RSReferenceSystemPropertyType',
        propertyInfos: [{
            name: 'abstractRSReferenceSystem',
            elementName: {
              localPart: 'AbstractRS_ReferenceSystem',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractRSReferenceSystemType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDIdentifierPropertyType',
        propertyInfos: [{
            name: 'mdIdentifier',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'MD_Identifier',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDIdentifierType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDistributionUnitsPropertyType',
        propertyInfos: [{
            name: 'mdDistributionUnits',
            elementName: {
              localPart: 'MD_DistributionUnits',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CISeriesPropertyType',
        propertyInfos: [{
            name: 'ciSeries',
            elementName: {
              localPart: 'CI_Series',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CISeriesType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQElementPropertyType',
        propertyInfos: [{
            name: 'abstractDQElement',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_Element',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQElementType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDBandPropertyType',
        propertyInfos: [{
            name: 'mdBand',
            elementName: {
              localPart: 'MD_Band',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDBandType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDApplicationSchemaInformationPropertyType',
        propertyInfos: [{
            name: 'mdApplicationSchemaInformation',
            elementName: {
              localPart: 'MD_ApplicationSchemaInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDApplicationSchemaInformationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LISourcePropertyType',
        propertyInfos: [{
            name: 'liSource',
            elementName: {
              localPart: 'LI_Source',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LISourceType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQTemporalAccuracyPropertyType',
        propertyInfos: [{
            name: 'abstractDQTemporalAccuracy',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_TemporalAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQTemporalAccuracyType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDRepresentativeFractionPropertyType',
        propertyInfos: [{
            name: 'mdRepresentativeFraction',
            elementName: {
              localPart: 'MD_RepresentativeFraction',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDRepresentativeFractionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DSAggregatePropertyType',
        propertyInfos: [{
            name: 'abstractDSAggregate',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDS_Aggregate',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDSAggregateType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDCoverageContentTypeCodePropertyType',
        propertyInfos: [{
            name: 'mdCoverageContentTypeCode',
            elementName: {
              localPart: 'MD_CoverageContentTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DSOtherAggregatePropertyType',
        propertyInfos: [{
            name: 'dsOtherAggregate',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'DS_OtherAggregate',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DSOtherAggregateType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDimensionPropertyType',
        propertyInfos: [{
            name: 'mdDimension',
            elementName: {
              localPart: 'MD_Dimension',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDimensionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDataIdentificationPropertyType',
        propertyInfos: [{
            name: 'mdDataIdentification',
            elementName: {
              localPart: 'MD_DataIdentification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDataIdentificationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIRoleCodePropertyType',
        propertyInfos: [{
            name: 'ciRoleCode',
            elementName: {
              localPart: 'CI_RoleCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDFormatPropertyType',
        propertyInfos: [{
            name: 'mdFormat',
            elementName: {
              localPart: 'MD_Format',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDFormatType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQQuantitativeAttributeAccuracyPropertyType',
        propertyInfos: [{
            name: 'dqQuantitativeAttributeAccuracy',
            elementName: {
              localPart: 'DQ_QuantitativeAttributeAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQQuantitativeAttributeAccuracyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIDatePropertyType',
        propertyInfos: [{
            name: 'ciDate',
            elementName: {
              localPart: 'CI_Date',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIDateType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDScopeDescriptionPropertyType',
        propertyInfos: [{
            name: 'mdScopeDescription',
            elementName: {
              localPart: 'MD_ScopeDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDScopeDescriptionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DQEvaluationMethodTypeCodePropertyType',
        propertyInfos: [{
            name: 'dqEvaluationMethodTypeCode',
            elementName: {
              localPart: 'DQ_EvaluationMethodTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CIAddressPropertyType',
        propertyInfos: [{
            name: 'ciAddress',
            elementName: {
              localPart: 'CI_Address',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIAddressType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDScopeCodePropertyType',
        propertyInfos: [{
            name: 'mdScopeCode',
            elementName: {
              localPart: 'MD_ScopeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDIdentificationPropertyType',
        propertyInfos: [{
            name: 'abstractMDIdentification',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractMD_Identification',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractMDIdentificationType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'EXGeographicExtentPropertyType',
        propertyInfos: [{
            name: 'abstractEXGeographicExtent',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractEX_GeographicExtent',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractEXGeographicExtentType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQThematicAccuracyPropertyType',
        propertyInfos: [{
            name: 'abstractDQThematicAccuracy',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_ThematicAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQThematicAccuracyType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDImageDescriptionPropertyType',
        propertyInfos: [{
            name: 'mdImageDescription',
            elementName: {
              localPart: 'MD_ImageDescription',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDImageDescriptionType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQGriddedDataPositionalAccuracyPropertyType',
        propertyInfos: [{
            name: 'dqGriddedDataPositionalAccuracy',
            elementName: {
              localPart: 'DQ_GriddedDataPositionalAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQGriddedDataPositionalAccuracyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'PTLocalePropertyType',
        propertyInfos: [{
            name: 'ptLocale',
            elementName: {
              localPart: 'PT_Locale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.PTLocaleType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQNonQuantitativeAttributeAccuracyPropertyType',
        propertyInfos: [{
            name: 'dqNonQuantitativeAttributeAccuracy',
            elementName: {
              localPart: 'DQ_NonQuantitativeAttributeAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQNonQuantitativeAttributeAccuracyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDMetadataPropertyType',
        propertyInfos: [{
            name: 'mdMetadata',
            elementName: {
              localPart: 'MD_Metadata',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMetadataType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDExtendedElementInformationPropertyType',
        propertyInfos: [{
            name: 'mdExtendedElementInformation',
            elementName: {
              localPart: 'MD_ExtendedElementInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDExtendedElementInformationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDMetadataExtensionInformationPropertyType',
        propertyInfos: [{
            name: 'mdMetadataExtensionInformation',
            elementName: {
              localPart: 'MD_MetadataExtensionInformation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDMetadataExtensionInformationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDSecurityConstraintsPropertyType',
        propertyInfos: [{
            name: 'mdSecurityConstraints',
            elementName: {
              localPart: 'MD_SecurityConstraints',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDSecurityConstraintsType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQAccuracyOfATimeMeasurementPropertyType',
        propertyInfos: [{
            name: 'dqAccuracyOfATimeMeasurement',
            elementName: {
              localPart: 'DQ_AccuracyOfATimeMeasurement',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQAccuracyOfATimeMeasurementType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQDataQualityPropertyType',
        propertyInfos: [{
            name: 'dqDataQuality',
            elementName: {
              localPart: 'DQ_DataQuality',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQDataQualityType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CIContactPropertyType',
        propertyInfos: [{
            name: 'ciContact',
            elementName: {
              localPart: 'CI_Contact',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIContactType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDImagingConditionCodePropertyType',
        propertyInfos: [{
            name: 'mdImagingConditionCode',
            elementName: {
              localPart: 'MD_ImagingConditionCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CITelephonePropertyType',
        propertyInfos: [{
            name: 'ciTelephone',
            elementName: {
              localPart: 'CI_Telephone',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CITelephoneType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQFormatConsistencyPropertyType',
        propertyInfos: [{
            name: 'dqFormatConsistency',
            elementName: {
              localPart: 'DQ_FormatConsistency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQFormatConsistencyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQTemporalConsistencyPropertyType',
        propertyInfos: [{
            name: 'dqTemporalConsistency',
            elementName: {
              localPart: 'DQ_TemporalConsistency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQTemporalConsistencyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LocalisedCharacterStringPropertyType',
        baseTypeInfo: 'armlJSONSchema.ObjectReferencePropertyType',
        propertyInfos: [{
            name: 'localisedCharacterString',
            elementName: {
              localPart: 'LocalisedCharacterString',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.LocalisedCharacterStringType'
          }]
      }, {
        localName: 'DQCompletenessPropertyType',
        propertyInfos: [{
            name: 'abstractDQCompleteness',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_Completeness',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQCompletenessType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'URLPropertyType',
        propertyInfos: [{
            name: 'url',
            elementName: {
              localPart: 'URL',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DQPositionalAccuracyPropertyType',
        propertyInfos: [{
            name: 'abstractDQPositionalAccuracy',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_PositionalAccuracy',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQPositionalAccuracyType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDMediumFormatCodePropertyType',
        propertyInfos: [{
            name: 'mdMediumFormatCode',
            elementName: {
              localPart: 'MD_MediumFormatCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CIOnlineResourcePropertyType',
        propertyInfos: [{
            name: 'ciOnlineResource',
            elementName: {
              localPart: 'CI_OnlineResource',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CIOnlineResourceType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDDigitalTransferOptionsPropertyType',
        propertyInfos: [{
            name: 'mdDigitalTransferOptions',
            elementName: {
              localPart: 'MD_DigitalTransferOptions',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.MDDigitalTransferOptionsType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DQResultPropertyType',
        propertyInfos: [{
            name: 'abstractDQResult',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractDQ_Result',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.AbstractDQResultType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDClassificationCodePropertyType',
        propertyInfos: [{
            name: 'mdClassificationCode',
            elementName: {
              localPart: 'MD_ClassificationCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CICitationPropertyType',
        propertyInfos: [{
            name: 'ciCitation',
            elementName: {
              localPart: 'CI_Citation',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CICitationType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDSpatialRepresentationTypeCodePropertyType',
        propertyInfos: [{
            name: 'mdSpatialRepresentationTypeCode',
            elementName: {
              localPart: 'MD_SpatialRepresentationTypeCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.CodeListValueType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PTFreeTextPropertyType',
        baseTypeInfo: 'armlJSONSchema.CharacterStringPropertyType',
        propertyInfos: [{
            name: 'ptFreeText',
            elementName: {
              localPart: 'PT_FreeText',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.PTFreeTextType'
          }]
      }, {
        localName: 'EXGeographicBoundingBoxPropertyType',
        propertyInfos: [{
            name: 'exGeographicBoundingBox',
            elementName: {
              localPart: 'EX_GeographicBoundingBox',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.EXGeographicBoundingBoxType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MDPixelOrientationCodePropertyType',
        propertyInfos: [{
            name: 'mdPixelOrientationCode',
            elementName: {
              localPart: 'MD_PixelOrientationCode',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DQDomainConsistencyPropertyType',
        propertyInfos: [{
            name: 'dqDomainConsistency',
            elementName: {
              localPart: 'DQ_DomainConsistency',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.DQDomainConsistencyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'PTLocaleContainerPropertyType',
        propertyInfos: [{
            name: 'ptLocaleContainer',
            elementName: {
              localPart: 'PT_LocaleContainer',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
            },
            typeInfo: 'armlJSONSchema.PTLocaleContainerType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TypeNameType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'aName',
            elementName: {
              localPart: 'aName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MultiplicityRangeType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'lower',
            elementName: {
              localPart: 'lower',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.IntegerPropertyType'
          }, {
            name: 'upper',
            elementName: {
              localPart: 'upper',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.UnlimitedIntegerPropertyType'
          }]
      }, {
        localName: 'RecordTypeType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MultiplicityType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'range',
            collection: true,
            elementName: {
              localPart: 'range',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.MultiplicityRangePropertyType'
          }]
      }, {
        localName: 'AbstractObjectType',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'uuid',
            attributeName: {
              localPart: 'uuid'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MemberNameType',
        baseTypeInfo: 'armlJSONSchema.AbstractObjectType',
        propertyInfos: [{
            name: 'aName',
            elementName: {
              localPart: 'aName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.CharacterStringPropertyType'
          }, {
            name: 'attributeType',
            elementName: {
              localPart: 'attributeType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.TypeNamePropertyType'
          }]
      }, {
        localName: 'BinaryType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'src',
            attributeName: {
              localPart: 'src'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UnlimitedIntegerType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Integer',
            type: 'value'
          }, {
            name: 'isInfinite',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isInfinite'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomAreaPropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MultiplicityPropertyType',
        propertyInfos: [{
            name: 'multiplicity',
            elementName: {
              localPart: 'Multiplicity',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.MultiplicityType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'BooleanPropertyType',
        propertyInfos: [{
            name: '_boolean',
            elementName: {
              localPart: 'Boolean',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomVelocityPropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DateTimePropertyType',
        propertyInfos: [{
            name: 'dateTime',
            elementName: {
              localPart: 'DateTime',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Calendar'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GenericNamePropertyType',
        propertyInfos: [{
            name: 'abstractGenericName',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'AbstractGenericName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.CodeType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomLengthPropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'CharacterStringPropertyType',
        propertyInfos: [{
            name: 'characterString',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'CharacterString',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ScopedNamePropertyType',
        propertyInfos: [{
            name: 'scopedName',
            elementName: {
              localPart: 'ScopedName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MeasurePropertyType',
        propertyInfos: [{
            name: 'measure',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Measure',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.MeasureType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomScalePropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'RecordPropertyType',
        propertyInfos: [{
            name: 'record',
            elementName: {
              localPart: 'Record',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'AnyType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LengthPropertyType',
        propertyInfos: [{
            name: 'length',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Length',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.LengthType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UnlimitedIntegerPropertyType',
        propertyInfos: [{
            name: 'unlimitedInteger',
            elementName: {
              localPart: 'UnlimitedInteger',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.UnlimitedIntegerType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DatePropertyType',
        propertyInfos: [{
            name: 'date',
            elementName: {
              localPart: 'Date',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            }
          }, {
            name: 'dateTime',
            elementName: {
              localPart: 'DateTime',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Calendar'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomTimePropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TypeNamePropertyType',
        propertyInfos: [{
            name: 'typeName',
            elementName: {
              localPart: 'TypeName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.TypeNameType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DistancePropertyType',
        propertyInfos: [{
            name: 'distance',
            elementName: {
              localPart: 'Distance',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.LengthType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NumberPropertyType',
        propertyInfos: [{
            name: 'real',
            elementName: {
              localPart: 'Real',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Double'
          }, {
            name: 'decimal',
            elementName: {
              localPart: 'Decimal',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'integer',
            elementName: {
              localPart: 'Integer',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Integer'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BinaryPropertyType',
        propertyInfos: [{
            name: 'binary',
            elementName: {
              localPart: 'Binary',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.BinaryType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomAnglePropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'MemberNamePropertyType',
        propertyInfos: [{
            name: 'memberName',
            elementName: {
              localPart: 'MemberName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.MemberNameType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'DecimalPropertyType',
        propertyInfos: [{
            name: 'decimal',
            elementName: {
              localPart: 'Decimal',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomVolumePropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'RecordTypePropertyType',
        propertyInfos: [{
            name: 'recordType',
            elementName: {
              localPart: 'RecordType',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.RecordTypeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ObjectReferencePropertyType',
        propertyInfos: [{
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'ScalePropertyType',
        propertyInfos: [{
            name: 'scale',
            elementName: {
              localPart: 'Scale',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.ScaleType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'IntegerPropertyType',
        propertyInfos: [{
            name: 'integer',
            elementName: {
              localPart: 'Integer',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Integer'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MultiplicityRangePropertyType',
        propertyInfos: [{
            name: 'multiplicityRange',
            elementName: {
              localPart: 'MultiplicityRange',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.MultiplicityRangeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'LocalNamePropertyType',
        propertyInfos: [{
            name: 'localName',
            elementName: {
              localPart: 'LocalName',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.CodeType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AnglePropertyType',
        propertyInfos: [{
            name: 'angle',
            elementName: {
              localPart: 'Angle',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'armlJSONSchema.AngleType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UnitOfMeasurePropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'UnitDefinition',
            typeInfo: 'armlJSONSchema.UnitDefinitionType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'RealPropertyType',
        propertyInfos: [{
            name: 'real',
            elementName: {
              localPart: 'Real',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            typeInfo: 'Double'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'GMObjectPropertyType',
        propertyInfos: [{
            name: 'abstractGeometry',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'armlJSONSchema.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'GMPointPropertyType',
        propertyInfos: [{
            name: 'point',
            elementName: 'Point',
            typeInfo: 'armlJSONSchema.PointType'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'TMPeriodDurationPropertyType',
        propertyInfos: [{
            name: 'tmPeriodDuration',
            elementName: {
              localPart: 'TM_PeriodDuration',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gts'
            }
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TMPrimitivePropertyType',
        propertyInfos: [{
            name: 'abstractTimePrimitive',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractTimePrimitive',
            typeInfo: 'armlJSONSchema.AbstractTimePrimitiveType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'SCCRSPropertyType',
        propertyInfos: [{
            name: 'abstractCRS',
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: 'AbstractCRS',
            typeInfo: 'armlJSONSchema.AbstractCRSType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            type: 'attribute'
          }]
      }, {
        localName: 'AbstractGriddedSurfaceType.Rows',
        propertyInfos: [{
            name: 'row',
            collection: true,
            elementName: 'Row',
            typeInfo: 'armlJSONSchema.AbstractGriddedSurfaceType.Rows.Row'
          }]
      }, {
        localName: 'AbstractGriddedSurfaceType.Rows.Row',
        propertyInfos: [{
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'geometricPositionGroup',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ClothoidType.RefLocation',
        propertyInfos: [{
            name: 'affinePlacement',
            elementName: 'AffinePlacement',
            typeInfo: 'armlJSONSchema.AffinePlacementType'
          }]
      }, {
        localName: 'TinType.ControlPoint',
        propertyInfos: [{
            name: 'posList',
            typeInfo: 'armlJSONSchema.DirectPositionListType'
          }, {
            name: 'geometricPositionGroup',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'armlJSONSchema.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'armlJSONSchema.DirectPositionType'
              }],
            type: 'elements'
          }]
      }, {
        localName: 'ARAnchorType.Assets',
        propertyInfos: [{
            name: 'visualAsset',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'VisualAsset',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.VisualAssetType',
            type: 'elementRef'
          }, {
            name: 'assetRef',
            collection: true,
            elementName: {
              localPart: 'assetRef',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ARAnchorType.Assets.AssetRef'
          }]
      }, {
        localName: 'TrackableType.Config',
        propertyInfos: [{
            name: 'tracker',
            elementName: {
              localPart: 'tracker',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.TrackableType.Config.Tracker'
          }, {
            name: 'src',
            elementName: {
              localPart: 'src',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            }
          }, {
            name: 'order',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'order'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TrackableType.Config.Tracker',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'ARAnchorType.Assets.AssetRef',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'ArmlType.ARElements',
        propertyInfos: [{
            name: 'arElement',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'ARElement',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ARElementType',
            type: 'elementRef'
          }]
      }, {
        localName: 'ArmlType.Style',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'ArmlType.Script',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'VisualAssetType.Conditions',
        propertyInfos: [{
            name: 'condition',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Condition',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ConditionType',
            type: 'elementRef'
          }]
      }, {
        localName: 'ModelType.Href',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'RelativeToType.Ref',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'FeatureType.Metadata',
        propertyInfos: [{
            name: 'any',
            collection: true,
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'FeatureType.Anchors',
        propertyInfos: [{
            name: 'anchor',
            collection: true,
            mixed: false,
            allowDom: false,
            allowTypedObject: false,
            elementName: {
              localPart: 'Anchor',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.AnchorType',
            type: 'elementRef'
          }, {
            name: 'anchorRef',
            collection: true,
            elementName: {
              localPart: 'anchorRef',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.FeatureType.Anchors.AnchorRef'
          }]
      }, {
        localName: 'FeatureType.Anchors.AnchorRef',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'ImageType.Href',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'LabelType.Href',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'ScreenAnchorType.Assets',
        propertyInfos: [{
            name: 'label',
            collection: true,
            elementName: {
              localPart: 'Label',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.LabelType'
          }, {
            name: 'assetRef',
            elementName: {
              localPart: 'assetRef',
              namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
            },
            typeInfo: 'armlJSONSchema.ScreenAnchorType.Assets.AssetRef'
          }]
      }, {
        localName: 'ScreenAnchorType.Assets.AssetRef',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'TrackerType.Uri',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        localName: 'TrackerType.Src',
        propertyInfos: [{
            name: 'href',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TypeType',
        values: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }, {
        type: 'enumInfo',
        localName: 'ActuateType',
        values: ['onLoad', 'onRequest', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'ShowType',
        values: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'SequenceRuleEnumeration',
        values: ['Linear', 'Boustrophedonic', 'Cantor-diagonal', 'Spiral', 'Morton', 'Hilbert']
      }, {
        type: 'enumInfo',
        localName: 'SurfaceInterpolationType',
        values: ['none', 'planar', 'spherical', 'elliptical', 'conic', 'tin', 'parametricCurve', 'polynomialSpline', 'rationalSpline', 'triangulatedSpline']
      }, {
        type: 'enumInfo',
        localName: 'CompassPointEnumeration',
        values: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
      }, {
        type: 'enumInfo',
        localName: 'SuccessionType',
        values: ['substitution', 'division', 'fusion', 'initiation']
      }, {
        type: 'enumInfo',
        localName: 'KnotTypesType',
        values: ['uniform', 'quasiUniform', 'piecewiseBezier']
      }, {
        type: 'enumInfo',
        localName: 'TimeIndeterminateValueType',
        values: ['after', 'before', 'now', 'unknown']
      }, {
        type: 'enumInfo',
        localName: 'AggregationType',
        values: ['set', 'bag', 'sequence', 'array', 'record', 'table']
      }, {
        type: 'enumInfo',
        localName: 'CurveInterpolationType',
        values: ['linear', 'geodesic', 'circularArc3Points', 'circularArc2PointWithBulge', 'circularArcCenterPointWithRadius', 'elliptical', 'clothoid', 'conic', 'polynomialSpline', 'cubicSpline', 'rationalSpline']
      }, {
        type: 'enumInfo',
        localName: 'MDPixelOrientationCodeType',
        values: ['center', 'lowerLeft', 'lowerRight', 'upperRight', 'upperLeft']
      }, {
        type: 'enumInfo',
        localName: 'MDObligationCodeType',
        values: ['mandatory', 'optional', 'conditional']
      }, {
        type: 'enumInfo',
        localName: 'MDTopicCategoryCodeType',
        values: ['farming', 'biota', 'boundaries', 'climatologyMeteorologyAtmosphere', 'economy', 'elevation', 'environment', 'geoscientificInformation', 'health', 'imageryBaseMapsEarthCover', 'intelligenceMilitary', 'inlandWaters', 'location', 'oceans', 'planningCadastre', 'society', 'structure', 'transportation', 'utilitiesCommunication']
      }],
    elementInfos: [{
        elementName: 'SecondDefiningParameter',
        typeInfo: 'armlJSONSchema.SecondDefiningParameter'
      }, {
        elementName: 'coordinateOperationAccuracy',
        typeInfo: 'armlJSONSchema.CoordinateOperationAccuracy'
      }, {
        elementName: 'secondDefiningParameter',
        typeInfo: 'armlJSONSchema.SecondDefiningParameter'
      }, {
        elementName: 'formulaCitation',
        typeInfo: 'armlJSONSchema.FormulaCitation'
      }, {
        elementName: 'domainOfValidity',
        typeInfo: 'armlJSONSchema.DomainOfValidity'
      }, {
        elementName: 'CountList',
        typeInfo: {
          type: 'list'
        },
        substitutionHead: 'AbstractScalarValueList'
      }, {
        elementName: 'superComplex',
        typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
      }, {
        elementName: 'derivationUnitTerm',
        typeInfo: 'armlJSONSchema.DerivationUnitTermType'
      }, {
        elementName: 'projectedCRSRef',
        typeInfo: 'armlJSONSchema.ProjectedCRSPropertyType'
      }, {
        elementName: 'baseSurface',
        typeInfo: 'armlJSONSchema.SurfacePropertyType'
      }, {
        elementName: 'curveMember',
        typeInfo: 'armlJSONSchema.CurvePropertyType'
      }, {
        elementName: {
          localPart: 'CI_RoleCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'MD_Distributor',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDDistributorType'
      }, {
        elementName: 'patches',
        typeInfo: 'armlJSONSchema.SurfacePatchArrayPropertyType'
      }, {
        elementName: 'verticalCS',
        typeInfo: 'armlJSONSchema.VerticalCSPropertyType'
      }, {
        elementName: 'TopoComplex',
        typeInfo: 'armlJSONSchema.TopoComplexType',
        substitutionHead: 'AbstractTopology'
      }, {
        elementName: {
          localPart: 'VisualAsset2D',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.VisualAsset2DType',
        substitutionHead: {
          localPart: 'VisualAsset',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'using',
        typeInfo: 'armlJSONSchema.ProcedurePropertyType'
      }, {
        elementName: {
          localPart: 'CI_Series',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CISeriesType'
      }, {
        elementName: 'ImageCRS',
        typeInfo: 'armlJSONSchema.ImageCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'Arc',
        typeInfo: 'armlJSONSchema.ArcType',
        substitutionHead: 'ArcString'
      }, {
        elementName: 'OffsetCurve',
        typeInfo: 'armlJSONSchema.OffsetCurveType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'valueProperty',
        typeInfo: 'armlJSONSchema.ValuePropertyType'
      }, {
        elementName: 'usesTimeCS',
        typeInfo: 'armlJSONSchema.TimeCSPropertyType',
        substitutionHead: 'timeCS'
      }, {
        elementName: 'operationRef',
        typeInfo: 'armlJSONSchema.OperationPropertyType'
      }, {
        elementName: {
          localPart: 'CI_Telephone',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CITelephoneType'
      }, {
        elementName: 'conversionToPreferredUnit',
        typeInfo: 'armlJSONSchema.ConversionToPreferredUnitType'
      }, {
        elementName: 'concatenatedOperationRef',
        typeInfo: 'armlJSONSchema.ConcatenatedOperationPropertyType'
      }, {
        elementName: 'Node',
        typeInfo: 'armlJSONSchema.NodeType',
        substitutionHead: 'AbstractTopoPrimitive'
      }, {
        elementName: 'subComplex',
        typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
      }, {
        elementName: {
          localPart: 'MD_Band',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDBandType',
        substitutionHead: {
          localPart: 'MD_RangeDimension',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'quantityType',
        typeInfo: 'armlJSONSchema.StringOrRefType'
      }, {
        elementName: 'usesVerticalDatum',
        typeInfo: 'armlJSONSchema.VerticalDatumPropertyType',
        substitutionHead: 'verticalDatum'
      }, {
        elementName: {
          localPart: 'MD_VectorSpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDVectorSpatialRepresentationType',
        substitutionHead: {
          localPart: 'AbstractMD_SpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'MD_DimensionNameTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'DQ_EvaluationMethodTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'targetElement'
      }, {
        elementName: {
          localPart: 'MD_CharacterSetCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'DQ_CompletenessOmission',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQCompletenessOmissionType',
        substitutionHead: {
          localPart: 'AbstractDQ_Completeness',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'domainSet',
        typeInfo: 'armlJSONSchema.DomainSetType'
      }, {
        elementName: 'locationReference',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: {
          localPart: 'EX_SpatialTemporalExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXSpatialTemporalExtentType',
        substitutionHead: {
          localPart: 'EX_TemporalExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'DS_Series',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSSeriesType',
        substitutionHead: {
          localPart: 'AbstractDS_Aggregate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'URL',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'MD_ReferenceSystem',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDReferenceSystemType'
      }, {
        elementName: {
          localPart: 'MD_FeatureCatalogueDescription',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDFeatureCatalogueDescriptionType',
        substitutionHead: {
          localPart: 'AbstractMD_ContentInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'integerValueList',
        typeInfo: {
          type: 'list',
          baseTypeInfo: 'Integer'
        }
      }, {
        elementName: {
          localPart: 'MultiplicityRange',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.MultiplicityRangeType'
      }, {
        elementName: 'coordinates',
        typeInfo: 'armlJSONSchema.CoordinatesType'
      }, {
        elementName: {
          localPart: 'DS_InitiativeTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'LocalName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.CodeType',
        substitutionHead: {
          localPart: 'AbstractGenericName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'GeodeticDatum',
        typeInfo: 'armlJSONSchema.GeodeticDatumType',
        substitutionHead: 'AbstractDatum'
      }, {
        elementName: {
          localPart: 'Date',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'CountExtent',
        typeInfo: {
          type: 'list'
        },
        substitutionHead: 'AbstractValue'
      }, {
        elementName: 'multiCenterLineOf',
        typeInfo: 'armlJSONSchema.MultiCurvePropertyType'
      }, {
        elementName: {
          localPart: 'AbstractEX_GeographicExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractEXGeographicExtentType'
      }, {
        elementName: 'multiPointProperty',
        typeInfo: 'armlJSONSchema.MultiPointPropertyType'
      }, {
        elementName: 'datumRef',
        typeInfo: 'armlJSONSchema.DatumPropertyType'
      }, {
        elementName: 'AbstractGeneralDerivedCRS',
        typeInfo: 'armlJSONSchema.AbstractGeneralDerivedCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'usesTemporalCS',
        typeInfo: 'armlJSONSchema.TemporalCSPropertyType'
      }, {
        elementName: 'topoCurveProperty',
        typeInfo: 'armlJSONSchema.TopoCurvePropertyType'
      }, {
        elementName: 'GridFunction',
        typeInfo: 'armlJSONSchema.GridFunctionType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'edgeOf',
        typeInfo: 'armlJSONSchema.CurvePropertyType'
      }, {
        elementName: {
          localPart: 'MD_MediumFormatCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'ConcatenatedOperation',
        typeInfo: 'armlJSONSchema.ConcatenatedOperationType',
        substitutionHead: 'AbstractCoordinateOperation'
      }, {
        elementName: 'temporalCRSRef',
        typeInfo: 'armlJSONSchema.TemporalCRSPropertyType'
      }, {
        elementName: 'Ring',
        typeInfo: 'armlJSONSchema.RingType',
        substitutionHead: 'AbstractRing'
      }, {
        elementName: {
          localPart: 'Trackable',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.TrackableType',
        substitutionHead: {
          localPart: 'ARAnchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'Envelope',
        typeInfo: 'armlJSONSchema.EnvelopeType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'DefinitionCollection',
        typeInfo: 'armlJSONSchema.DictionaryType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'Solid',
        typeInfo: 'armlJSONSchema.SolidType',
        substitutionHead: 'AbstractSolid'
      }, {
        elementName: 'realizationEpoch',
        typeInfo: 'Calendar'
      }, {
        elementName: 'dictionaryEntry',
        typeInfo: 'armlJSONSchema.DictionaryEntryType'
      }, {
        elementName: 'TimeEdge',
        typeInfo: 'armlJSONSchema.TimeEdgeType',
        substitutionHead: 'AbstractTimeTopologyPrimitive'
      }, {
        elementName: {
          localPart: 'MD_GridSpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDGridSpatialRepresentationType',
        substitutionHead: {
          localPart: 'AbstractMD_SpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'DS_AssociationTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'operationParameterRef',
        typeInfo: 'armlJSONSchema.OperationParameterPropertyType'
      }, {
        elementName: 'MultiSurface',
        typeInfo: 'armlJSONSchema.MultiSurfaceType',
        substitutionHead: 'AbstractGeometricAggregate'
      }, {
        elementName: 'usesSingleOperation',
        typeInfo: 'armlJSONSchema.CoordinateOperationPropertyType',
        substitutionHead: 'coordOperation'
      }, {
        elementName: {
          localPart: 'MD_ApplicationSchemaInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDApplicationSchemaInformationType'
      }, {
        elementName: {
          localPart: 'MD_PortrayalCatalogueReference',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDPortrayalCatalogueReferenceType'
      }, {
        elementName: {
          localPart: 'Anchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.AnchorType',
        substitutionHead: {
          localPart: 'ARElement',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'Face',
        typeInfo: 'armlJSONSchema.FaceType',
        substitutionHead: 'AbstractTopoPrimitive'
      }, {
        elementName: {
          localPart: 'MD_GeometricObjectTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'MD_MaintenanceFrequencyCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'MD_KeywordTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'sphericalCS',
        typeInfo: 'armlJSONSchema.SphericalCSPropertyType'
      }, {
        elementName: 'vector',
        typeInfo: 'armlJSONSchema.VectorType'
      }, {
        elementName: 'pos',
        typeInfo: 'armlJSONSchema.DirectPositionType'
      }, {
        elementName: 'MultiPointCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractDiscreteCoverage'
      }, {
        elementName: 'definitionRef',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: 'AbstractParametricCurveSurface',
        typeInfo: 'armlJSONSchema.AbstractParametricCurveSurfaceType',
        substitutionHead: 'AbstractSurfacePatch'
      }, {
        elementName: 'TimeCalendarEra',
        typeInfo: 'armlJSONSchema.TimeCalendarEraType'
      }, {
        elementName: 'usesGeodeticDatum',
        typeInfo: 'armlJSONSchema.GeodeticDatumPropertyType',
        substitutionHead: 'geodeticDatum'
      }, {
        elementName: 'SphericalCS',
        typeInfo: 'armlJSONSchema.SphericalCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'baseCurve',
        typeInfo: 'armlJSONSchema.CurvePropertyType'
      }, {
        elementName: 'verticalDatumRef',
        typeInfo: 'armlJSONSchema.VerticalDatumPropertyType'
      }, {
        elementName: 'verticalDatum',
        typeInfo: 'armlJSONSchema.VerticalDatumPropertyType'
      }, {
        elementName: {
          localPart: 'AbstractDQ_LogicalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQLogicalConsistencyType',
        substitutionHead: {
          localPart: 'AbstractDQ_Element',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'DS_OtherAggregate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSOtherAggregateType',
        substitutionHead: {
          localPart: 'AbstractDS_Aggregate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'MD_StandardOrderProcess',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDStandardOrderProcessType'
      }, {
        elementName: 'OperationParameter',
        typeInfo: 'armlJSONSchema.OperationParameterType',
        substitutionHead: 'AbstractGeneralOperationParameter'
      }, {
        elementName: 'AbstractGeneralConversion',
        typeInfo: 'armlJSONSchema.AbstractGeneralConversionType',
        substitutionHead: 'AbstractOperation'
      }, {
        elementName: 'AbstractCurveSegment',
        typeInfo: 'armlJSONSchema.AbstractCurveSegmentType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'EnvelopeWithTimePeriod',
        typeInfo: 'armlJSONSchema.EnvelopeWithTimePeriodType',
        substitutionHead: 'Envelope'
      }, {
        elementName: 'ArcStringByBulge',
        typeInfo: 'armlJSONSchema.ArcStringByBulgeType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'Observation',
        typeInfo: 'armlJSONSchema.ObservationType',
        substitutionHead: 'AbstractFeature'
      }, {
        elementName: 'name',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: {
          localPart: 'DistanceCondition',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.DistanceConditionType',
        substitutionHead: {
          localPart: 'Condition',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'maximumOccurs',
        typeInfo: 'Integer'
      }, {
        elementName: 'TemporalDatum',
        typeInfo: 'armlJSONSchema.TemporalDatumType',
        substitutionHead: 'AbstractDatum'
      }, {
        elementName: 'measure',
        typeInfo: 'armlJSONSchema.MeasureType'
      }, {
        elementName: {
          localPart: 'MD_ImageDescription',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDImageDescriptionType',
        substitutionHead: {
          localPart: 'MD_CoverageDescription',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'MD_TopologyLevelCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'ArcByBulge',
        typeInfo: 'armlJSONSchema.ArcByBulgeType',
        substitutionHead: 'ArcStringByBulge'
      }, {
        elementName: 'usesOperation',
        typeInfo: 'armlJSONSchema.CoordinateOperationPropertyType',
        substitutionHead: 'coordOperation'
      }, {
        elementName: {
          localPart: 'MD_DataIdentification',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDDataIdentificationType',
        substitutionHead: {
          localPart: 'AbstractMD_Identification',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'LI_Source',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.LISourceType'
      }, {
        elementName: 'TimeNode',
        typeInfo: 'armlJSONSchema.TimeNodeType',
        substitutionHead: 'AbstractTimeTopologyPrimitive'
      }, {
        elementName: 'multiPointDomain',
        typeInfo: 'armlJSONSchema.DomainSetType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'Polygon',
        typeInfo: 'armlJSONSchema.PolygonType',
        substitutionHead: 'AbstractSurface'
      }, {
        elementName: {
          localPart: 'MD_Medium',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDMediumType'
      }, {
        elementName: 'usesImageDatum',
        typeInfo: 'armlJSONSchema.ImageDatumPropertyType',
        substitutionHead: 'imageDatum'
      }, {
        elementName: {
          localPart: 'Boolean',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'Boolean'
      }, {
        elementName: 'abstractInlineProperty',
        typeInfo: 'armlJSONSchema.InlinePropertyType'
      }, {
        elementName: 'integerValue',
        typeInfo: 'Integer'
      }, {
        elementName: 'derivedCRSType',
        typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
      }, {
        elementName: 'DerivedUnit',
        typeInfo: 'armlJSONSchema.DerivedUnitType',
        substitutionHead: 'UnitDefinition'
      }, {
        elementName: 'usesEllipsoid',
        typeInfo: 'armlJSONSchema.EllipsoidPropertyType',
        substitutionHead: 'ellipsoid'
      }, {
        elementName: {
          localPart: 'MD_Keywords',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDKeywordsType'
      }, {
        elementName: 'AbstractSurfacePatch',
        typeInfo: 'armlJSONSchema.AbstractSurfacePatchType'
      }, {
        elementName: 'AffinePlacement',
        typeInfo: 'armlJSONSchema.AffinePlacementType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'stringValue'
      }, {
        elementName: 'target',
        typeInfo: 'armlJSONSchema.TargetPropertyType'
      }, {
        elementName: 'baseGeographicCRS',
        typeInfo: 'armlJSONSchema.GeographicCRSPropertyType'
      }, {
        elementName: 'rangeParameters',
        typeInfo: 'armlJSONSchema.AssociationRoleType'
      }, {
        elementName: 'transformationRef',
        typeInfo: 'armlJSONSchema.TransformationPropertyType'
      }, {
        elementName: {
          localPart: 'DQ_RelativeInternalPositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQRelativeInternalPositionalAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_PositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'AbstractCRS',
        typeInfo: 'armlJSONSchema.AbstractCRSType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'AbstractTimeSlice',
        typeInfo: 'armlJSONSchema.AbstractTimeSliceType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: 'Ellipsoid',
        typeInfo: 'armlJSONSchema.EllipsoidType',
        substitutionHead: 'Definition'
      }, {
        elementName: {
          localPart: 'PT_Locale',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.PTLocaleType'
      }, {
        elementName: 'formula',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'TimeReferenceSystem',
        typeInfo: 'armlJSONSchema.TimeReferenceSystemType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'TriangulatedSurface',
        typeInfo: 'armlJSONSchema.SurfaceType',
        substitutionHead: 'Surface'
      }, {
        elementName: 'AbstractSingleOperation',
        typeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
        substitutionHead: 'AbstractCoordinateOperation'
      }, {
        elementName: 'location',
        typeInfo: 'armlJSONSchema.LocationPropertyType'
      }, {
        elementName: 'LineString',
        typeInfo: 'armlJSONSchema.LineStringType',
        substitutionHead: 'AbstractCurve'
      }, {
        elementName: 'rangeSet',
        typeInfo: 'armlJSONSchema.RangeSetType'
      }, {
        elementName: 'PolygonPatch',
        typeInfo: 'armlJSONSchema.PolygonPatchType',
        substitutionHead: 'AbstractSurfacePatch'
      }, {
        elementName: 'decimalMinutes',
        typeInfo: 'Decimal'
      }, {
        elementName: {
          localPart: 'Angle',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.AngleType',
        substitutionHead: {
          localPart: 'Measure',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'usesEllipsoidalCS',
        typeInfo: 'armlJSONSchema.EllipsoidalCSPropertyType',
        substitutionHead: 'ellipsoidalCS'
      }, {
        elementName: 'ObliqueCartesianCS',
        typeInfo: 'armlJSONSchema.ObliqueCartesianCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'DataBlock',
        typeInfo: 'armlJSONSchema.DataBlockType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: {
          localPart: 'Model',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ModelType',
        substitutionHead: {
          localPart: 'VisualAsset',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'description',
        typeInfo: 'armlJSONSchema.StringOrRefType'
      }, {
        elementName: 'CompositeSurface',
        typeInfo: 'armlJSONSchema.CompositeSurfaceType',
        substitutionHead: 'AbstractSurface'
      }, {
        elementName: 'coordinateSystemAxisRef',
        typeInfo: 'armlJSONSchema.CoordinateSystemAxisPropertyType'
      }, {
        elementName: 'generalConversionRef',
        typeInfo: 'armlJSONSchema.GeneralConversionPropertyType'
      }, {
        elementName: {
          localPart: 'MD_DigitalTransferOptions',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDDigitalTransferOptionsType'
      }, {
        elementName: 'BooleanList',
        typeInfo: {
          type: 'list'
        },
        substitutionHead: 'AbstractScalarValueList'
      }, {
        elementName: 'metaDataProperty',
        typeInfo: 'armlJSONSchema.MetaDataPropertyType'
      }, {
        elementName: {
          localPart: 'MD_SpatialRepresentationTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'RectifiedGridCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractDiscreteCoverage'
      }, {
        elementName: 'TimeTopologyComplex',
        typeInfo: 'armlJSONSchema.TimeTopologyComplexType',
        substitutionHead: 'AbstractTimeComplex'
      }, {
        elementName: 'UnitDefinition',
        typeInfo: 'armlJSONSchema.UnitDefinitionType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'valueComponent',
        typeInfo: 'armlJSONSchema.ValuePropertyType'
      }, {
        elementName: 'TimeCalendar',
        typeInfo: 'armlJSONSchema.TimeCalendarType',
        substitutionHead: 'TimeReferenceSystem'
      }, {
        elementName: {
          localPart: 'CI_DateTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'generalTransformationRef',
        typeInfo: 'armlJSONSchema.GeneralTransformationPropertyType'
      }, {
        elementName: {
          localPart: 'EX_Extent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXExtentType'
      }, {
        elementName: 'Shell',
        typeInfo: 'armlJSONSchema.ShellType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: {
          localPart: 'MD_ObligationCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'DQ_ThematicClassificationCorrectness',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQThematicClassificationCorrectnessType',
        substitutionHead: {
          localPart: 'AbstractDQ_ThematicAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'Definition',
        typeInfo: 'armlJSONSchema.DefinitionType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: 'Curve',
        typeInfo: 'armlJSONSchema.CurveType',
        substitutionHead: 'AbstractCurve'
      }, {
        elementName: 'pointRep',
        typeInfo: 'armlJSONSchema.PointPropertyType'
      }, {
        elementName: 'method',
        typeInfo: 'armlJSONSchema.OperationMethodPropertyType'
      }, {
        elementName: 'TimePeriod',
        typeInfo: 'armlJSONSchema.TimePeriodType',
        substitutionHead: 'AbstractTimeGeometricPrimitive'
      }, {
        elementName: {
          localPart: 'CI_ResponsibleParty',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CIResponsiblePartyType'
      }, {
        elementName: 'identifier',
        typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
      }, {
        elementName: 'CartesianCS',
        typeInfo: 'armlJSONSchema.CartesianCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'tupleList',
        typeInfo: 'armlJSONSchema.CoordinatesType'
      }, {
        elementName: 'AbstractGeometricAggregate',
        typeInfo: 'armlJSONSchema.AbstractGeometricAggregateType',
        substitutionHead: 'AbstractGeometry'
      }, {
        elementName: 'curveMembers',
        typeInfo: 'armlJSONSchema.CurveArrayPropertyType'
      }, {
        elementName: {
          localPart: 'MemberName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.MemberNameType'
      }, {
        elementName: {
          localPart: 'Binary',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.BinaryType'
      }, {
        elementName: {
          localPart: 'Label',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.LabelType',
        substitutionHead: {
          localPart: 'VisualAsset2D',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'AbstractCurve',
        typeInfo: 'armlJSONSchema.AbstractCurveType',
        substitutionHead: 'AbstractGeometricPrimitive'
      }, {
        elementName: 'AbstractDiscreteCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractCoverage'
      }, {
        elementName: 'temporalDatum',
        typeInfo: 'armlJSONSchema.TemporalDatumPropertyType'
      }, {
        elementName: 'degrees',
        typeInfo: 'armlJSONSchema.DegreesType'
      }, {
        elementName: {
          localPart: 'MD_Distribution',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDDistributionType'
      }, {
        elementName: 'Triangle',
        typeInfo: 'armlJSONSchema.TriangleType',
        substitutionHead: 'AbstractSurfacePatch'
      }, {
        elementName: 'Rectangle',
        typeInfo: 'armlJSONSchema.RectangleType',
        substitutionHead: 'AbstractSurfacePatch'
      }, {
        elementName: {
          localPart: 'DQ_TemporalValidity',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQTemporalValidityType',
        substitutionHead: {
          localPart: 'AbstractDQ_TemporalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'Count',
        typeInfo: 'armlJSONSchema.Count',
        substitutionHead: 'AbstractScalarValue'
      }, {
        elementName: 'ParameterValueGroup',
        typeInfo: 'armlJSONSchema.ParameterValueGroupType',
        substitutionHead: 'AbstractGeneralParameterValue'
      }, {
        elementName: 'solidArrayProperty',
        typeInfo: 'armlJSONSchema.SolidArrayPropertyType'
      }, {
        elementName: {
          localPart: 'TypeName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.TypeNameType'
      }, {
        elementName: 'GenericMetaData',
        typeInfo: 'armlJSONSchema.GenericMetaDataType',
        substitutionHead: 'AbstractMetaData'
      }, {
        elementName: {
          localPart: 'EX_GeographicDescription',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXGeographicDescriptionType',
        substitutionHead: {
          localPart: 'AbstractEX_GeographicExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'Boolean',
        typeInfo: 'armlJSONSchema.Boolean',
        substitutionHead: 'AbstractScalarValue'
      }, {
        elementName: {
          localPart: 'DQ_ConformanceResult',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQConformanceResultType',
        substitutionHead: {
          localPart: 'AbstractDQ_Result',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'UnlimitedInteger',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.UnlimitedIntegerType'
      }, {
        elementName: 'AbstractContinuousCoverage',
        typeInfo: 'armlJSONSchema.AbstractContinuousCoverageType',
        substitutionHead: 'AbstractFeature'
      }, {
        elementName: {
          localPart: 'DS_ProductionSeries',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSProductionSeriesType',
        substitutionHead: {
          localPart: 'DS_Series',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'usesCS',
        typeInfo: 'armlJSONSchema.CoordinateSystemPropertyType',
        substitutionHead: 'coordinateSystem'
      }, {
        elementName: 'definitionMember',
        typeInfo: 'armlJSONSchema.DictionaryEntryType',
        substitutionHead: 'dictionaryEntry'
      }, {
        elementName: 'axisDirection',
        typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
      }, {
        elementName: 'seconds',
        typeInfo: 'Decimal'
      }, {
        elementName: {
          localPart: 'DS_Association',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSAssociationType'
      }, {
        elementName: 'crsRef',
        typeInfo: 'armlJSONSchema.CRSPropertyType'
      }, {
        elementName: 'Cone',
        typeInfo: 'armlJSONSchema.ConeType',
        substitutionHead: 'AbstractGriddedSurface'
      }, {
        elementName: 'locationName',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'conversionRef',
        typeInfo: 'armlJSONSchema.ConversionPropertyType'
      }, {
        elementName: 'AbstractGeneralOperationParameter',
        typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'statusReference',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: {
          localPart: 'MD_Format',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDFormatType'
      }, {
        elementName: 'ellipsoidRef',
        typeInfo: 'armlJSONSchema.EllipsoidPropertyType'
      }, {
        elementName: {
          localPart: 'AbstractDQ_TemporalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQTemporalAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_Element',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'ProjectedCRS',
        typeInfo: 'armlJSONSchema.ProjectedCRSType',
        substitutionHead: 'AbstractGeneralDerivedCRS'
      }, {
        elementName: {
          localPart: 'Integer',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'Integer'
      }, {
        elementName: 'coordinateOperationRef',
        typeInfo: 'armlJSONSchema.CoordinateOperationPropertyType'
      }, {
        elementName: 'usesMethod',
        typeInfo: 'armlJSONSchema.OperationMethodPropertyType',
        substitutionHead: 'method'
      }, {
        elementName: 'PolarCS',
        typeInfo: 'armlJSONSchema.PolarCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'passThroughOperationRef',
        typeInfo: 'armlJSONSchema.PassThroughOperationPropertyType'
      }, {
        elementName: 'Grid',
        typeInfo: 'armlJSONSchema.GridType',
        substitutionHead: 'AbstractImplicitGeometry'
      }, {
        elementName: 'coordOperation',
        typeInfo: 'armlJSONSchema.CoordinateOperationPropertyType'
      }, {
        elementName: 'surfaceArrayProperty',
        typeInfo: 'armlJSONSchema.SurfaceArrayPropertyType'
      }, {
        elementName: 'multiSurfaceProperty',
        typeInfo: 'armlJSONSchema.MultiSurfacePropertyType'
      }, {
        elementName: 'geographicCRSRef',
        typeInfo: 'armlJSONSchema.GeographicCRSPropertyType'
      }, {
        elementName: 'GeocentricCRS',
        typeInfo: 'armlJSONSchema.GeocentricCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'ellipsoidalCS',
        typeInfo: 'armlJSONSchema.EllipsoidalCSPropertyType'
      }, {
        elementName: {
          localPart: 'MD_RangeDimension',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDRangeDimensionType'
      }, {
        elementName: 'sphericalCSRef',
        typeInfo: 'armlJSONSchema.SphericalCSPropertyType'
      }, {
        elementName: {
          localPart: 'LI_Lineage',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.LILineageType'
      }, {
        elementName: 'gmlProfileSchema'
      }, {
        elementName: 'usesTemporalDatum',
        typeInfo: 'armlJSONSchema.TemporalDatumPropertyType',
        substitutionHead: 'temporalDatum'
      }, {
        elementName: 'pointMembers',
        typeInfo: 'armlJSONSchema.PointArrayPropertyType'
      }, {
        elementName: 'includesSingleCRS',
        typeInfo: 'armlJSONSchema.SingleCRSPropertyType',
        substitutionHead: 'componentReferenceSystem'
      }, {
        elementName: {
          localPart: 'locator',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: 'armlJSONSchema.LocatorType'
      }, {
        elementName: 'OrientableCurve',
        typeInfo: 'armlJSONSchema.OrientableCurveType',
        substitutionHead: 'AbstractCurve'
      }, {
        elementName: 'ellipsoid',
        typeInfo: 'armlJSONSchema.EllipsoidPropertyType'
      }, {
        elementName: {
          localPart: 'MD_AggregateInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDAggregateInformationType'
      }, {
        elementName: 'AbstractFeature',
        typeInfo: 'armlJSONSchema.AbstractFeatureType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: 'multiCurveProperty',
        typeInfo: 'armlJSONSchema.MultiCurvePropertyType'
      }, {
        elementName: 'imageDatum',
        typeInfo: 'armlJSONSchema.ImageDatumPropertyType'
      }, {
        elementName: 'history',
        typeInfo: 'armlJSONSchema.HistoryPropertyType'
      }, {
        elementName: 'operationParameterGroupRef',
        typeInfo: 'armlJSONSchema.OperationParameterPropertyType'
      }, {
        elementName: {
          localPart: 'ARElement',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ARElementType'
      }, {
        elementName: 'minutes',
        typeInfo: 'Int'
      }, {
        elementName: 'CategoryExtent',
        typeInfo: 'armlJSONSchema.CategoryExtentType',
        substitutionHead: 'AbstractValue'
      }, {
        elementName: 'dataSource',
        typeInfo: 'armlJSONSchema.StringOrRefType'
      }, {
        elementName: {
          localPart: 'Feature',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.FeatureType',
        substitutionHead: {
          localPart: 'ARElement',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: {
          localPart: 'MD_LegalConstraints',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDLegalConstraintsType',
        substitutionHead: {
          localPart: 'MD_Constraints',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'AbstractGenericName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'abstractReference',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: 'booleanValue',
        typeInfo: 'Boolean'
      }, {
        elementName: 'pixelInCell',
        typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
      }, {
        elementName: 'AbstractDatum',
        typeInfo: 'armlJSONSchema.AbstractDatumType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'EngineeringDatum',
        typeInfo: 'armlJSONSchema.EngineeringDatumType',
        substitutionHead: 'AbstractDatum'
      }, {
        elementName: {
          localPart: 'DQ_ConceptualConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQConceptualConsistencyType',
        substitutionHead: {
          localPart: 'AbstractDQ_LogicalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'axis',
        typeInfo: 'armlJSONSchema.CoordinateSystemAxisPropertyType'
      }, {
        elementName: 'primeMeridianRef',
        typeInfo: 'armlJSONSchema.PrimeMeridianPropertyType'
      }, {
        elementName: 'topoPrimitiveMembers',
        typeInfo: 'armlJSONSchema.TopoPrimitiveArrayAssociationType'
      }, {
        elementName: {
          localPart: 'RelativeTo',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.RelativeToType',
        substitutionHead: {
          localPart: 'ARAnchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'OrientableSurface',
        typeInfo: 'armlJSONSchema.OrientableSurfaceType',
        substitutionHead: 'AbstractSurface'
      }, {
        elementName: 'usesSphericalCS',
        typeInfo: 'armlJSONSchema.SphericalCSPropertyType',
        substitutionHead: 'sphericalCS'
      }, {
        elementName: 'surfaceMember',
        typeInfo: 'armlJSONSchema.SurfacePropertyType'
      }, {
        elementName: 'MultiPoint',
        typeInfo: 'armlJSONSchema.MultiPointType',
        substitutionHead: 'AbstractGeometricAggregate'
      }, {
        elementName: 'Transformation',
        typeInfo: 'armlJSONSchema.TransformationType',
        substitutionHead: 'AbstractGeneralTransformation'
      }, {
        elementName: {
          localPart: 'Measure',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.MeasureType'
      }, {
        elementName: 'group',
        typeInfo: 'armlJSONSchema.OperationParameterGroupPropertyType'
      }, {
        elementName: 'AbstractMetaData',
        typeInfo: 'armlJSONSchema.AbstractMetaDataType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'CubicSpline',
        typeInfo: 'armlJSONSchema.CubicSplineType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'multiCurveDomain',
        typeInfo: 'armlJSONSchema.DomainSetType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'dmsAngleValue',
        typeInfo: 'armlJSONSchema.DMSAngleType'
      }, {
        elementName: {
          localPart: 'PT_LocaleContainer',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.PTLocaleContainerType'
      }, {
        elementName: 'polarCSRef',
        typeInfo: 'armlJSONSchema.PolarCSPropertyType'
      }, {
        elementName: {
          localPart: 'AbstractDS_Aggregate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDSAggregateType'
      }, {
        elementName: 'Quantity',
        typeInfo: 'armlJSONSchema.Quantity',
        substitutionHead: 'AbstractScalarValue'
      }, {
        elementName: 'Bag',
        typeInfo: 'armlJSONSchema.BagType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: {
          localPart: 'MD_ScopeDescription',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDScopeDescriptionType'
      }, {
        elementName: 'timePosition',
        typeInfo: 'armlJSONSchema.TimePositionType'
      }, {
        elementName: 'dmsAngle',
        typeInfo: 'armlJSONSchema.DMSAngleType'
      }, {
        elementName: 'pointProperty',
        typeInfo: 'armlJSONSchema.PointPropertyType'
      }, {
        elementName: 'multiGeometryProperty',
        typeInfo: 'armlJSONSchema.MultiGeometryPropertyType'
      }, {
        elementName: 'multiSolidDomain',
        typeInfo: 'armlJSONSchema.DomainSetType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'userDefinedCSRef',
        typeInfo: 'armlJSONSchema.UserDefinedCSPropertyType'
      }, {
        elementName: {
          localPart: 'MD_GeometricObjects',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDGeometricObjectsType'
      }, {
        elementName: {
          localPart: 'MD_ImagingConditionCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'CI_PresentationFormCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'LocalisedCharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.LocalisedCharacterStringType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'FeatureCollection',
        typeInfo: 'armlJSONSchema.FeatureCollectionType',
        substitutionHead: 'AbstractFeature'
      }, {
        elementName: 'valueList',
        typeInfo: 'armlJSONSchema.MeasureListType'
      }, {
        elementName: 'cartesianCS',
        typeInfo: 'armlJSONSchema.CartesianCSPropertyType'
      }, {
        elementName: {
          localPart: 'SelectedCondition',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.SelectedConditionType',
        substitutionHead: {
          localPart: 'Condition',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'featureMember',
        typeInfo: 'armlJSONSchema.FeaturePropertyType'
      }, {
        elementName: {
          localPart: 'PT_FreeText',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.PTFreeTextType'
      }, {
        elementName: 'AbstractGeneralParameterValue',
        typeInfo: 'armlJSONSchema.AbstractGeneralParameterValueType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: {
          localPart: 'TM_PeriodDuration',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gts'
        }
      }, {
        elementName: {
          localPart: 'LanguageCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'AbstractMD_SpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractMDSpatialRepresentationType'
      }, {
        elementName: 'abstractStrictAssociationRole',
        typeInfo: 'armlJSONSchema.AssociationRoleType'
      }, {
        elementName: {
          localPart: 'MD_Resolution',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDResolutionType'
      }, {
        elementName: 'Category',
        typeInfo: 'armlJSONSchema.Category',
        substitutionHead: 'AbstractScalarValue'
      }, {
        elementName: 'value',
        typeInfo: 'armlJSONSchema.MeasureType'
      }, {
        elementName: {
          localPart: 'title',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: 'armlJSONSchema.TitleEltType'
      }, {
        elementName: 'track',
        typeInfo: 'armlJSONSchema.HistoryPropertyType',
        substitutionHead: 'history'
      }, {
        elementName: {
          localPart: 'MD_ClassificationCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'MultiCurveCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractDiscreteCoverage'
      }, {
        elementName: 'AffineCS',
        typeInfo: 'armlJSONSchema.AffineCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'includesValue',
        typeInfo: 'armlJSONSchema.AbstractGeneralParameterValuePropertyType',
        substitutionHead: 'parameterValue'
      }, {
        elementName: 'CompositeCurve',
        typeInfo: 'armlJSONSchema.CompositeCurveType',
        substitutionHead: 'AbstractCurve'
      }, {
        elementName: 'topoComplexProperty',
        typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
      }, {
        elementName: 'topoSurfaceProperty',
        typeInfo: 'armlJSONSchema.TopoSurfacePropertyType'
      }, {
        elementName: 'rangeMeaning',
        typeInfo: 'armlJSONSchema.CodeWithAuthorityType'
      }, {
        elementName: 'parameter',
        typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType'
      }, {
        elementName: {
          localPart: 'DS_Sensor',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSSensorType',
        substitutionHead: {
          localPart: 'DS_Series',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'curveProperty',
        typeInfo: 'armlJSONSchema.CurvePropertyType'
      }, {
        elementName: 'usesObliqueCartesianCS',
        typeInfo: 'armlJSONSchema.ObliqueCartesianCSPropertyType'
      }, {
        elementName: 'modifiedCoordinate',
        typeInfo: 'Integer'
      }, {
        elementName: {
          localPart: 'VisualAsset',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.VisualAssetType',
        substitutionHead: {
          localPart: 'ARElement',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'componentReferenceSystem',
        typeInfo: 'armlJSONSchema.SingleCRSPropertyType'
      }, {
        elementName: 'geometryMembers',
        typeInfo: 'armlJSONSchema.GeometryArrayPropertyType'
      }, {
        elementName: 'abstractGeneralOperationParameterRef',
        typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType'
      }, {
        elementName: {
          localPart: 'CI_OnLineFunctionCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'DQ_GriddedDataPositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQGriddedDataPositionalAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_PositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'GeometricComplex',
        typeInfo: 'armlJSONSchema.GeometricComplexType',
        substitutionHead: 'AbstractGeometry'
      }, {
        elementName: 'ParameterValue',
        typeInfo: 'armlJSONSchema.ParameterValueType',
        substitutionHead: 'AbstractGeneralParameterValue'
      }, {
        elementName: {
          localPart: 'AbstractDQ_Element',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQElementType'
      }, {
        elementName: 'geometryMember',
        typeInfo: 'armlJSONSchema.GeometryPropertyType'
      }, {
        elementName: 'centerOf',
        typeInfo: 'armlJSONSchema.PointPropertyType'
      }, {
        elementName: 'TimeInstant',
        typeInfo: 'armlJSONSchema.TimeInstantType',
        substitutionHead: 'AbstractTimeGeometricPrimitive'
      }, {
        elementName: 'cartesianCSRef',
        typeInfo: 'armlJSONSchema.CartesianCSPropertyType'
      }, {
        elementName: 'minimumOccurs',
        typeInfo: 'Integer'
      }, {
        elementName: 'AbstractTimeTopologyPrimitive',
        typeInfo: 'armlJSONSchema.AbstractTimeTopologyPrimitiveType',
        substitutionHead: 'AbstractTimePrimitive'
      }, {
        elementName: 'MultiSolidCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractDiscreteCoverage'
      }, {
        elementName: {
          localPart: 'Fill',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.FillType',
        substitutionHead: {
          localPart: 'VisualAsset2D',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: {
          localPart: 'arml',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ArmlType'
      }, {
        elementName: 'AbstractGML',
        typeInfo: 'armlJSONSchema.AbstractGMLType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: {
          localPart: 'DQ_AbsoluteExternalPositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQAbsoluteExternalPositionalAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_PositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'MD_PixelOrientationCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'ArcString',
        typeInfo: 'armlJSONSchema.ArcStringType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'topoVolumeProperty',
        typeInfo: 'armlJSONSchema.TopoVolumePropertyType'
      }, {
        elementName: {
          localPart: 'MD_CellGeometryCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'AbstractGeometricPrimitive',
        typeInfo: 'armlJSONSchema.AbstractGeometricPrimitiveType',
        substitutionHead: 'AbstractGeometry'
      }, {
        elementName: 'catalogSymbol',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'TopoPoint',
        typeInfo: 'armlJSONSchema.TopoPointType'
      }, {
        elementName: 'derivedCRSRef',
        typeInfo: 'armlJSONSchema.DerivedCRSPropertyType'
      }, {
        elementName: 'gridDomain',
        typeInfo: 'armlJSONSchema.DomainSetType',
        substitutionHead: 'domainSet'
      }, {
        elementName: {
          localPart: 'Real',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'Double'
      }, {
        elementName: 'affineCS',
        typeInfo: 'armlJSONSchema.AffineCSPropertyType'
      }, {
        elementName: 'featureProperty',
        typeInfo: 'armlJSONSchema.FeaturePropertyType'
      }, {
        elementName: 'TopoCurve',
        typeInfo: 'armlJSONSchema.TopoCurveType'
      }, {
        elementName: 'RectifiedGrid',
        typeInfo: 'armlJSONSchema.RectifiedGridType',
        substitutionHead: 'Grid'
      }, {
        elementName: 'coverageFunction',
        typeInfo: 'armlJSONSchema.CoverageFunctionType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'timeCS',
        typeInfo: 'armlJSONSchema.TimeCSPropertyType'
      }, {
        elementName: 'Sphere',
        typeInfo: 'armlJSONSchema.SphereType',
        substitutionHead: 'AbstractGriddedSurface'
      }, {
        elementName: 'polarCS',
        typeInfo: 'armlJSONSchema.PolarCSPropertyType'
      }, {
        elementName: 'PolyhedralSurface',
        typeInfo: 'armlJSONSchema.SurfaceType',
        substitutionHead: 'Surface'
      }, {
        elementName: 'usesValue',
        typeInfo: 'armlJSONSchema.AbstractGeneralParameterValuePropertyType',
        substitutionHead: 'parameterValue'
      }, {
        elementName: {
          localPart: 'Scale',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.ScaleType',
        substitutionHead: {
          localPart: 'Measure',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'surfaceProperty',
        typeInfo: 'armlJSONSchema.SurfacePropertyType'
      }, {
        elementName: 'userDefinedCS',
        typeInfo: 'armlJSONSchema.UserDefinedCSPropertyType'
      }, {
        elementName: {
          localPart: 'Country',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'definedByConversion',
        typeInfo: 'armlJSONSchema.GeneralConversionPropertyType',
        substitutionHead: 'conversion'
      }, {
        elementName: 'LocationString',
        typeInfo: 'armlJSONSchema.StringOrRefType'
      }, {
        elementName: 'LocationKeyWord',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'LinearRing',
        typeInfo: 'armlJSONSchema.LinearRingType',
        substitutionHead: 'AbstractRing'
      }, {
        elementName: 'AbstractCoordinateOperation',
        typeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'usesPrimeMeridian',
        typeInfo: 'armlJSONSchema.PrimeMeridianPropertyType',
        substitutionHead: 'primeMeridian'
      }, {
        elementName: 'pointMember',
        typeInfo: 'armlJSONSchema.PointPropertyType'
      }, {
        elementName: 'Tin',
        typeInfo: 'armlJSONSchema.TinType',
        substitutionHead: 'TriangulatedSurface'
      }, {
        elementName: 'temporalDatumRef',
        typeInfo: 'armlJSONSchema.TemporalDatumPropertyType'
      }, {
        elementName: 'geocentricCRSRef',
        typeInfo: 'armlJSONSchema.GeocentricCRSPropertyType'
      }, {
        elementName: 'DirectedObservationAtDistance',
        typeInfo: 'armlJSONSchema.DirectedObservationAtDistanceType',
        substitutionHead: 'DirectedObservation'
      }, {
        elementName: 'parameterValue',
        typeInfo: 'armlJSONSchema.AbstractGeneralParameterValuePropertyType'
      }, {
        elementName: 'interior',
        typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
      }, {
        elementName: 'Surface',
        typeInfo: 'armlJSONSchema.SurfaceType',
        substitutionHead: 'AbstractSurface'
      }, {
        elementName: 'OperationMethod',
        typeInfo: 'armlJSONSchema.OperationMethodType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'AbstractTimeObject',
        typeInfo: 'armlJSONSchema.AbstractTimeObjectType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: 'ellipsoidalCSRef',
        typeInfo: 'armlJSONSchema.EllipsoidalCSPropertyType'
      }, {
        elementName: 'referenceSystemRef',
        typeInfo: 'armlJSONSchema.CRSPropertyType'
      }, {
        elementName: 'valuesOfGroup',
        typeInfo: 'armlJSONSchema.OperationParameterGroupPropertyType',
        substitutionHead: 'group'
      }, {
        elementName: {
          localPart: 'MD_BrowseGraphic',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDBrowseGraphicType'
      }, {
        elementName: {
          localPart: 'AbstractDQ_Completeness',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQCompletenessType',
        substitutionHead: {
          localPart: 'AbstractDQ_Element',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'EngineeringCRS',
        typeInfo: 'armlJSONSchema.EngineeringCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'AbstractCoverage',
        typeInfo: 'armlJSONSchema.AbstractCoverageType',
        substitutionHead: 'AbstractFeature'
      }, {
        elementName: 'AbstractSolid',
        typeInfo: 'armlJSONSchema.AbstractSolidType',
        substitutionHead: 'AbstractGeometricPrimitive'
      }, {
        elementName: {
          localPart: 'Record',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'AnyType'
      }, {
        elementName: 'semiMajorAxis',
        typeInfo: 'armlJSONSchema.MeasureType'
      }, {
        elementName: {
          localPart: 'RecordType',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.RecordTypeType'
      }, {
        elementName: 'verticalCSRef',
        typeInfo: 'armlJSONSchema.VerticalCSPropertyType'
      }, {
        elementName: 'AbstractGeneralTransformation',
        typeInfo: 'armlJSONSchema.AbstractGeneralTransformationType',
        substitutionHead: 'AbstractOperation'
      }, {
        elementName: 'GeodeticCRS',
        typeInfo: 'armlJSONSchema.GeodeticCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: {
          localPart: 'DS_DataSet',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSDataSetType'
      }, {
        elementName: 'boundedBy',
        typeInfo: 'armlJSONSchema.BoundingShapeType'
      }, {
        elementName: {
          localPart: 'AbstractMD_ContentInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractMDContentInformationType'
      }, {
        elementName: 'Circle',
        typeInfo: 'armlJSONSchema.CircleType',
        substitutionHead: 'Arc'
      }, {
        elementName: {
          localPart: 'Image',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ImageType',
        substitutionHead: {
          localPart: 'VisualAsset2D',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: {
          localPart: 'DQ_QuantitativeAttributeAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQQuantitativeAttributeAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_ThematicAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'multiSurfaceDomain',
        typeInfo: 'armlJSONSchema.DomainSetType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'ImageDatum',
        typeInfo: 'armlJSONSchema.ImageDatumType',
        substitutionHead: 'AbstractDatum'
      }, {
        elementName: 'TopoVolume',
        typeInfo: 'armlJSONSchema.TopoVolumeType'
      }, {
        elementName: 'multiEdgeOf',
        typeInfo: 'armlJSONSchema.MultiCurvePropertyType'
      }, {
        elementName: 'polygonPatches',
        typeInfo: 'armlJSONSchema.SurfacePatchArrayPropertyType',
        substitutionHead: 'patches'
      }, {
        elementName: {
          localPart: 'resource',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: 'armlJSONSchema.ResourceType'
      }, {
        elementName: 'engineeringCRSRef',
        typeInfo: 'armlJSONSchema.EngineeringCRSPropertyType'
      }, {
        elementName: 'GridCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractDiscreteCoverage'
      }, {
        elementName: 'MovingObjectStatus',
        typeInfo: 'armlJSONSchema.MovingObjectStatusType',
        substitutionHead: 'AbstractTimeSlice'
      }, {
        elementName: 'obliqueCartesianCSRef',
        typeInfo: 'armlJSONSchema.ObliqueCartesianCSPropertyType'
      }, {
        elementName: {
          localPart: 'DQ_CompletenessCommission',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQCompletenessCommissionType',
        substitutionHead: {
          localPart: 'AbstractDQ_Completeness',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'AbstractOperation',
        typeInfo: 'armlJSONSchema.AbstractCoordinateOperationType',
        substitutionHead: 'AbstractSingleOperation'
      }, {
        elementName: 'operationVersion'
      }, {
        elementName: 'axisAbbrev',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'compoundCRSRef',
        typeInfo: 'armlJSONSchema.CompoundCRSPropertyType'
      }, {
        elementName: {
          localPart: 'MD_MetadataExtensionInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDMetadataExtensionInformationType'
      }, {
        elementName: {
          localPart: 'MD_RestrictionCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'AbstractTopology',
        typeInfo: 'armlJSONSchema.AbstractTopologyType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: 'linearCSRef',
        typeInfo: 'armlJSONSchema.LinearCSPropertyType'
      }, {
        elementName: {
          localPart: 'DQ_AccuracyOfATimeMeasurement',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQAccuracyOfATimeMeasurementType',
        substitutionHead: {
          localPart: 'AbstractDQ_TemporalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'linearCS',
        typeInfo: 'armlJSONSchema.LinearCSPropertyType'
      }, {
        elementName: {
          localPart: 'DateTime',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'Calendar'
      }, {
        elementName: 'AbstractTimePrimitive',
        typeInfo: 'armlJSONSchema.AbstractTimePrimitiveType',
        substitutionHead: 'AbstractTimeObject'
      }, {
        elementName: 'CoverageMappingRule',
        typeInfo: 'armlJSONSchema.MappingRuleType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'AbstractCoordinateSystem',
        typeInfo: 'armlJSONSchema.AbstractCoordinateSystemType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'Clothoid',
        typeInfo: 'armlJSONSchema.ClothoidType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'AbstractTopoPrimitive',
        typeInfo: 'armlJSONSchema.AbstractTopoPrimitiveType',
        substitutionHead: 'AbstractTopology'
      }, {
        elementName: 'sourceDimensions',
        typeInfo: 'Integer'
      }, {
        elementName: 'EllipsoidalCS',
        typeInfo: 'armlJSONSchema.EllipsoidalCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: {
          localPart: 'Distance',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.LengthType',
        substitutionHead: {
          localPart: 'Length',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'associationName'
      }, {
        elementName: 'MultiCurve',
        typeInfo: 'armlJSONSchema.MultiCurveType',
        substitutionHead: 'AbstractGeometricAggregate'
      }, {
        elementName: 'verticalCRSRef',
        typeInfo: 'armlJSONSchema.VerticalCRSPropertyType'
      }, {
        elementName: 'Bezier',
        typeInfo: 'armlJSONSchema.BezierType',
        substitutionHead: 'BSpline'
      }, {
        elementName: {
          localPart: 'MD_ExtendedElementInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDExtendedElementInformationType'
      }, {
        elementName: {
          localPart: 'EX_TemporalExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXTemporalExtentType'
      }, {
        elementName: {
          localPart: 'DS_Platform',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSPlatformType',
        substitutionHead: {
          localPart: 'DS_Series',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'reversePropertyName'
      }, {
        elementName: 'topoPrimitiveMember',
        typeInfo: 'armlJSONSchema.TopoPrimitiveMemberType'
      }, {
        elementName: 'UserDefinedCS',
        typeInfo: 'armlJSONSchema.UserDefinedCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'DerivedCRS',
        typeInfo: 'armlJSONSchema.DerivedCRSType',
        substitutionHead: 'AbstractGeneralDerivedCRS'
      }, {
        elementName: 'featureMembers',
        typeInfo: 'armlJSONSchema.FeatureArrayPropertyType'
      }, {
        elementName: {
          localPart: 'MD_DistributionUnits',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'usesParameter',
        typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType',
        substitutionHead: 'generalOperationParameter'
      }, {
        elementName: {
          localPart: 'ARAnchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ARAnchorType',
        substitutionHead: {
          localPart: 'Anchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'roughConversionToPreferredUnit',
        typeInfo: 'armlJSONSchema.ConversionToPreferredUnitType'
      }, {
        elementName: {
          localPart: 'MD_Identifier',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDIdentifierType'
      }, {
        elementName: 'greenwichLongitude',
        typeInfo: 'armlJSONSchema.AngleType'
      }, {
        elementName: 'LineStringSegment',
        typeInfo: 'armlJSONSchema.LineStringSegmentType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: {
          localPart: 'AbstractDQ_ThematicAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQThematicAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_Element',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'multiLocation',
        typeInfo: 'armlJSONSchema.MultiPointPropertyType'
      }, {
        elementName: 'Cylinder',
        typeInfo: 'armlJSONSchema.CylinderType',
        substitutionHead: 'AbstractGriddedSurface'
      }, {
        elementName: 'TopoSolid',
        typeInfo: 'armlJSONSchema.TopoSolidType',
        substitutionHead: 'AbstractTopoPrimitive'
      }, {
        elementName: 'multiCoverage',
        typeInfo: 'armlJSONSchema.MultiSurfacePropertyType'
      }, {
        elementName: {
          localPart: 'AbstractObject',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.AbstractObjectType'
      }, {
        elementName: 'singleCRSRef',
        typeInfo: 'armlJSONSchema.SingleCRSPropertyType'
      }, {
        elementName: 'LinearCS',
        typeInfo: 'armlJSONSchema.LinearCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'valueOfParameter',
        typeInfo: 'armlJSONSchema.OperationParameterPropertyType',
        substitutionHead: 'operationParameter'
      }, {
        elementName: 'doubleOrNilReasonTupleList',
        typeInfo: {
          type: 'list'
        }
      }, {
        elementName: 'anchorPoint',
        typeInfo: 'armlJSONSchema.CodeType',
        substitutionHead: 'anchorDefinition'
      }, {
        elementName: 'origin',
        typeInfo: 'Calendar'
      }, {
        elementName: {
          localPart: 'Geometry',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.GeometryType',
        substitutionHead: {
          localPart: 'ARAnchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'solidMember',
        typeInfo: 'armlJSONSchema.SolidPropertyType'
      }, {
        elementName: 'operationParameter',
        typeInfo: 'armlJSONSchema.OperationParameterPropertyType'
      }, {
        elementName: 'CircleByCenterPoint',
        typeInfo: 'armlJSONSchema.CircleByCenterPointType',
        substitutionHead: 'ArcByCenterPoint'
      }, {
        elementName: 'conversion',
        typeInfo: 'armlJSONSchema.GeneralConversionPropertyType'
      }, {
        elementName: {
          localPart: 'MD_ServiceIdentification',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDServiceIdentificationType',
        substitutionHead: {
          localPart: 'AbstractMD_Identification',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'DQ_Scope',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQScopeType'
      }, {
        elementName: 'timeInterval',
        typeInfo: 'armlJSONSchema.TimeIntervalLengthType'
      }, {
        elementName: 'valueFile'
      }, {
        elementName: {
          localPart: 'Text',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.TextType',
        substitutionHead: {
          localPart: 'VisualAsset2D',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'coordinateSystem',
        typeInfo: 'armlJSONSchema.CoordinateSystemPropertyType'
      }, {
        elementName: 'GeographicCRS',
        typeInfo: 'armlJSONSchema.GeographicCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'TimeOrdinalReferenceSystem',
        typeInfo: 'armlJSONSchema.TimeOrdinalReferenceSystemType',
        substitutionHead: 'TimeReferenceSystem'
      }, {
        elementName: {
          localPart: 'EX_BoundingPolygon',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXBoundingPolygonType',
        substitutionHead: {
          localPart: 'AbstractEX_GeographicExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'scope'
      }, {
        elementName: 'duration'
      }, {
        elementName: 'directedTopoSolid',
        typeInfo: 'armlJSONSchema.DirectedTopoSolidPropertyType'
      }, {
        elementName: 'TemporalCRS',
        typeInfo: 'armlJSONSchema.TemporalCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'anchorDefinition',
        typeInfo: 'armlJSONSchema.CodeType'
      }, {
        elementName: 'solidMembers',
        typeInfo: 'armlJSONSchema.SolidArrayPropertyType'
      }, {
        elementName: 'curveArrayProperty',
        typeInfo: 'armlJSONSchema.CurveArrayPropertyType'
      }, {
        elementName: {
          localPart: 'EX_GeographicBoundingBox',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXGeographicBoundingBoxType',
        substitutionHead: {
          localPart: 'AbstractEX_GeographicExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'resultOf',
        typeInfo: 'armlJSONSchema.ResultType'
      }, {
        elementName: 'imageDatumRef',
        typeInfo: 'armlJSONSchema.ImageDatumPropertyType'
      }, {
        elementName: 'coordinateSystemRef',
        typeInfo: 'armlJSONSchema.CoordinateSystemPropertyType'
      }, {
        elementName: 'BaseUnit',
        typeInfo: 'armlJSONSchema.BaseUnitType',
        substitutionHead: 'UnitDefinition'
      }, {
        elementName: 'TimeCoordinateSystem',
        typeInfo: 'armlJSONSchema.TimeCoordinateSystemType',
        substitutionHead: 'TimeReferenceSystem'
      }, {
        elementName: 'MultiSurfaceCoverage',
        typeInfo: 'armlJSONSchema.DiscreteCoverageType',
        substitutionHead: 'AbstractDiscreteCoverage'
      }, {
        elementName: 'includesParameter',
        typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType',
        substitutionHead: 'parameter'
      }, {
        elementName: 'unitOfMeasure',
        typeInfo: 'armlJSONSchema.UnitOfMeasureType'
      }, {
        elementName: 'imageCRSRef',
        typeInfo: 'armlJSONSchema.ImageCRSPropertyType'
      }, {
        elementName: 'directedNode',
        typeInfo: 'armlJSONSchema.DirectedNodePropertyType'
      }, {
        elementName: 'centerLineOf',
        typeInfo: 'armlJSONSchema.CurvePropertyType'
      }, {
        elementName: {
          localPart: 'MD_Constraints',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDConstraintsType'
      }, {
        elementName: {
          localPart: 'LI_ProcessStep',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.LIProcessStepType'
      }, {
        elementName: 'status',
        typeInfo: 'armlJSONSchema.StringOrRefType'
      }, {
        elementName: {
          localPart: 'MD_MediumNameCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'validTime',
        typeInfo: 'armlJSONSchema.TimePrimitivePropertyType'
      }, {
        elementName: 'baseGeodeticCRS',
        typeInfo: 'armlJSONSchema.GeodeticCRSPropertyType'
      }, {
        elementName: 'AbstractRing',
        typeInfo: 'armlJSONSchema.AbstractRingType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: {
          localPart: 'Tracker',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.TrackerType',
        substitutionHead: {
          localPart: 'ARElement',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'TimeClock',
        typeInfo: 'armlJSONSchema.TimeClockType',
        substitutionHead: 'TimeReferenceSystem'
      }, {
        elementName: {
          localPart: 'DQ_TemporalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQTemporalConsistencyType',
        substitutionHead: {
          localPart: 'AbstractDQ_TemporalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'geodeticDatumRef',
        typeInfo: 'armlJSONSchema.GeodeticDatumPropertyType'
      }, {
        elementName: 'rectifiedGridDomain',
        typeInfo: 'armlJSONSchema.DomainSetType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'CompoundCRS',
        typeInfo: 'armlJSONSchema.CompoundCRSType',
        substitutionHead: 'AbstractCRS'
      }, {
        elementName: 'surfaceMembers',
        typeInfo: 'armlJSONSchema.SurfaceArrayPropertyType'
      }, {
        elementName: 'sourceCRS',
        typeInfo: 'armlJSONSchema.CRSPropertyType'
      }, {
        elementName: 'cylindricalCSRef',
        typeInfo: 'armlJSONSchema.CylindricalCSPropertyType'
      }, {
        elementName: 'trianglePatches',
        typeInfo: 'armlJSONSchema.SurfacePatchArrayPropertyType',
        substitutionHead: 'patches'
      }, {
        elementName: 'AbstractFeatureCollection',
        typeInfo: 'armlJSONSchema.AbstractFeatureCollectionType',
        substitutionHead: 'AbstractFeature'
      }, {
        elementName: 'operationMethodRef',
        typeInfo: 'armlJSONSchema.OperationMethodPropertyType'
      }, {
        elementName: 'dynamicMembers',
        typeInfo: 'armlJSONSchema.DynamicFeatureMemberType'
      }, {
        elementName: 'indirectEntry',
        typeInfo: 'armlJSONSchema.IndirectEntryType'
      }, {
        elementName: {
          localPart: 'RS_Identifier',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.RSIdentifierType',
        substitutionHead: {
          localPart: 'MD_Identifier',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'MD_Metadata',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDMetadataType'
      }, {
        elementName: 'minimumValue',
        typeInfo: 'Double'
      }, {
        elementName: 'directedEdge',
        typeInfo: 'armlJSONSchema.DirectedEdgePropertyType'
      }, {
        elementName: {
          localPart: 'AbstractRS_ReferenceSystem',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractRSReferenceSystemType'
      }, {
        elementName: 'usesCartesianCS',
        typeInfo: 'armlJSONSchema.CartesianCSPropertyType',
        substitutionHead: 'cartesianCS'
      }, {
        elementName: 'PrimeMeridian',
        typeInfo: 'armlJSONSchema.PrimeMeridianType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'usesAffineCS',
        typeInfo: 'armlJSONSchema.AffineCSPropertyType',
        substitutionHead: 'affineCS'
      }, {
        elementName: 'AbstractTimeGeometricPrimitive',
        typeInfo: 'armlJSONSchema.AbstractTimeGeometricPrimitiveType',
        substitutionHead: 'AbstractTimePrimitive'
      }, {
        elementName: {
          localPart: 'MD_MaintenanceInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDMaintenanceInformationType'
      }, {
        elementName: 'temporalCSRef',
        typeInfo: 'armlJSONSchema.TemporalCSPropertyType'
      }, {
        elementName: 'valueComponents',
        typeInfo: 'armlJSONSchema.ValueArrayPropertyType'
      }, {
        elementName: {
          localPart: 'MD_Usage',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDUsageType'
      }, {
        elementName: 'ValueArray',
        typeInfo: 'armlJSONSchema.ValueArrayType',
        substitutionHead: 'CompositeValue'
      }, {
        elementName: {
          localPart: 'ScopedName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.CodeType',
        substitutionHead: {
          localPart: 'AbstractGenericName',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'baseCRS',
        typeInfo: 'armlJSONSchema.SingleCRSPropertyType'
      }, {
        elementName: {
          localPart: 'ScreenAnchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ScreenAnchorType',
        substitutionHead: {
          localPart: 'Anchor',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: 'priorityLocation',
        typeInfo: 'armlJSONSchema.PriorityLocationPropertyType',
        substitutionHead: 'location'
      }, {
        elementName: 'Geodesic',
        typeInfo: 'armlJSONSchema.GeodesicType',
        substitutionHead: 'GeodesicString'
      }, {
        elementName: 'DefinitionProxy',
        typeInfo: 'armlJSONSchema.DefinitionProxyType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'CompositeSolid',
        typeInfo: 'armlJSONSchema.CompositeSolidType',
        substitutionHead: 'AbstractSolid'
      }, {
        elementName: 'AbstractObject',
        typeInfo: 'AnyType'
      }, {
        elementName: 'quantityTypeReference',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: 'dataSourceReference',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: {
          localPart: 'CI_Date',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CIDateType'
      }, {
        elementName: 'TimeCS',
        typeInfo: 'armlJSONSchema.TimeCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'segments',
        typeInfo: 'armlJSONSchema.CurveSegmentArrayPropertyType'
      }, {
        elementName: 'usesVerticalCS',
        typeInfo: 'armlJSONSchema.VerticalCSPropertyType',
        substitutionHead: 'verticalCS'
      }, {
        elementName: 'descriptionReference',
        typeInfo: 'armlJSONSchema.ReferenceType'
      }, {
        elementName: 'TopoSurface',
        typeInfo: 'armlJSONSchema.TopoSurfaceType'
      }, {
        elementName: {
          localPart: 'CI_Contact',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CIContactType'
      }, {
        elementName: 'maximalComplex',
        typeInfo: 'armlJSONSchema.TopoComplexPropertyType'
      }, {
        elementName: 'solidProperty',
        typeInfo: 'armlJSONSchema.SolidPropertyType'
      }, {
        elementName: {
          localPart: 'DQ_DataQuality',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQDataQualityType'
      }, {
        elementName: {
          localPart: 'arc',
          namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
        },
        typeInfo: 'armlJSONSchema.ArcType'
      }, {
        elementName: {
          localPart: 'AbstractMD_Identification',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractMDIdentificationType'
      }, {
        elementName: 'CompositeValue',
        typeInfo: 'armlJSONSchema.CompositeValueType',
        substitutionHead: 'AbstractValue'
      }, {
        elementName: 'angle',
        typeInfo: 'armlJSONSchema.AngleType'
      }, {
        elementName: 'VerticalCRS',
        typeInfo: 'armlJSONSchema.VerticalCRSType',
        substitutionHead: 'AbstractSingleCRS'
      }, {
        elementName: 'member',
        typeInfo: 'armlJSONSchema.AssociationRoleType'
      }, {
        elementName: {
          localPart: 'MD_Dimension',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDDimensionType'
      }, {
        elementName: {
          localPart: 'DQ_DomainConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQDomainConsistencyType',
        substitutionHead: {
          localPart: 'AbstractDQ_LogicalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'PassThroughOperation',
        typeInfo: 'armlJSONSchema.PassThroughOperationType',
        substitutionHead: 'AbstractSingleOperation'
      }, {
        elementName: {
          localPart: 'Condition',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        },
        typeInfo: 'armlJSONSchema.ConditionType',
        substitutionHead: {
          localPart: 'ARElement',
          namespaceURI: 'http:\/\/www.opengis.net\/arml\/2.0'
        }
      }, {
        elementName: {
          localPart: 'Multiplicity',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.MultiplicityType'
      }, {
        elementName: 'Conversion',
        typeInfo: 'armlJSONSchema.ConversionType',
        substitutionHead: 'AbstractGeneralConversion'
      }, {
        elementName: 'usesAxis',
        typeInfo: 'armlJSONSchema.CoordinateSystemAxisPropertyType',
        substitutionHead: 'axis'
      }, {
        elementName: 'VerticalDatum',
        typeInfo: 'armlJSONSchema.VerticalDatumType',
        substitutionHead: 'AbstractDatum'
      }, {
        elementName: {
          localPart: 'DQ_NonQuantitativeAttributeAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQNonQuantitativeAttributeAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_ThematicAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: {
          localPart: 'MD_RepresentativeFraction',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDRepresentativeFractionType'
      }, {
        elementName: 'TemporalCS',
        typeInfo: 'armlJSONSchema.TemporalCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: 'File',
        typeInfo: 'armlJSONSchema.FileType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'multiCenterOf',
        typeInfo: 'armlJSONSchema.MultiPointPropertyType'
      }, {
        elementName: 'pointArrayProperty',
        typeInfo: 'armlJSONSchema.PointArrayPropertyType'
      }, {
        elementName: {
          localPart: 'CI_Address',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CIAddressType'
      }, {
        elementName: 'multiPosition',
        typeInfo: 'armlJSONSchema.MultiPointPropertyType'
      }, {
        elementName: {
          localPart: 'DS_StereoMate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSStereoMateType',
        substitutionHead: {
          localPart: 'DS_OtherAggregate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'position',
        typeInfo: 'armlJSONSchema.PointPropertyType'
      }, {
        elementName: 'AbstractImplicitGeometry',
        typeInfo: 'armlJSONSchema.AbstractGeometryType',
        substitutionHead: 'AbstractGeometry'
      }, {
        elementName: 'topoPointProperty',
        typeInfo: 'armlJSONSchema.TopoPointPropertyType'
      }, {
        elementName: 'AbstractValue',
        typeInfo: 'AnyType',
        substitutionHead: 'AbstractObject'
      }, {
        elementName: 'MultiSolid',
        typeInfo: 'armlJSONSchema.MultiSolidType',
        substitutionHead: 'AbstractGeometricAggregate'
      }, {
        elementName: 'cylindricalCS',
        typeInfo: 'armlJSONSchema.CylindricalCSPropertyType'
      }, {
        elementName: 'CylindricalCS',
        typeInfo: 'armlJSONSchema.CylindricalCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: {
          localPart: 'MD_CoverageDescription',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDCoverageDescriptionType',
        substitutionHead: {
          localPart: 'AbstractMD_ContentInformation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'directedFace',
        typeInfo: 'armlJSONSchema.DirectedFacePropertyType'
      }, {
        elementName: {
          localPart: 'AbstractDQ_Result',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQResultType'
      }, {
        elementName: 'posList',
        typeInfo: 'armlJSONSchema.DirectPositionListType'
      }, {
        elementName: 'DynamicFeatureCollection',
        typeInfo: 'armlJSONSchema.DynamicFeatureCollectionType',
        substitutionHead: 'DynamicFeature'
      }, {
        elementName: {
          localPart: 'AbstractDQ_PositionalAccuracy',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.AbstractDQPositionalAccuracyType',
        substitutionHead: {
          localPart: 'AbstractDQ_Element',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'subject',
        typeInfo: 'armlJSONSchema.TargetPropertyType',
        substitutionHead: 'target'
      }, {
        elementName: {
          localPart: 'DS_Initiative',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DSInitiativeType',
        substitutionHead: {
          localPart: 'AbstractDS_Aggregate',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'Null',
        typeInfo: {
          type: 'list'
        }
      }, {
        elementName: {
          localPart: 'MD_CoverageContentTypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'AbstractSingleCRS',
        typeInfo: 'armlJSONSchema.AbstractCRSType',
        substitutionHead: 'AbstractCRS'
      }, {
        elementName: {
          localPart: 'DQ_TopologicalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQTopologicalConsistencyType',
        substitutionHead: {
          localPart: 'AbstractDQ_LogicalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'methodFormula',
        typeInfo: 'armlJSONSchema.CodeType',
        substitutionHead: 'formula'
      }, {
        elementName: {
          localPart: 'MD_ScopeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'VerticalCS',
        typeInfo: 'armlJSONSchema.VerticalCSType',
        substitutionHead: 'AbstractCoordinateSystem'
      }, {
        elementName: {
          localPart: 'CI_Citation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CICitationType'
      }, {
        elementName: {
          localPart: 'DQ_FormatConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQFormatConsistencyType',
        substitutionHead: {
          localPart: 'AbstractDQ_LogicalConsistency',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'members',
        typeInfo: 'armlJSONSchema.ArrayAssociationType'
      }, {
        elementName: {
          localPart: 'MD_TopicCategoryCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: {
          localPart: 'Decimal',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'Decimal'
      }, {
        elementName: 'primeMeridian',
        typeInfo: 'armlJSONSchema.PrimeMeridianPropertyType'
      }, {
        elementName: {
          localPart: 'MD_SecurityConstraints',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDSecurityConstraintsType',
        substitutionHead: {
          localPart: 'MD_Constraints',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'AbstractSurface',
        typeInfo: 'armlJSONSchema.AbstractSurfaceType',
        substitutionHead: 'AbstractGeometricPrimitive'
      }, {
        elementName: 'AbstractTimeComplex',
        typeInfo: 'armlJSONSchema.AbstractTimeComplexType',
        substitutionHead: 'AbstractTimeObject'
      }, {
        elementName: 'BSpline',
        typeInfo: 'armlJSONSchema.BSplineType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'GeodesicString',
        typeInfo: 'armlJSONSchema.GeodesicStringType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'AbstractScalarValueList',
        typeInfo: 'AnyType',
        substitutionHead: 'AbstractValue'
      }, {
        elementName: 'Point',
        typeInfo: 'armlJSONSchema.PointType',
        substitutionHead: 'AbstractGeometricPrimitive'
      }, {
        elementName: 'OperationParameterGroup',
        typeInfo: 'armlJSONSchema.OperationParameterGroupType',
        substitutionHead: 'AbstractGeneralOperationParameter'
      }, {
        elementName: 'geodeticDatum',
        typeInfo: 'armlJSONSchema.GeodeticDatumPropertyType'
      }, {
        elementName: 'engineeringDatumRef',
        typeInfo: 'armlJSONSchema.EngineeringDatumPropertyType'
      }, {
        elementName: 'usesEngineeringDatum',
        typeInfo: 'armlJSONSchema.EngineeringDatumPropertyType',
        substitutionHead: 'engineeringDatum'
      }, {
        elementName: 'Edge',
        typeInfo: 'armlJSONSchema.EdgeType',
        substitutionHead: 'AbstractTopoPrimitive'
      }, {
        elementName: 'maximumValue',
        typeInfo: 'Double'
      }, {
        elementName: 'generalOperationParameter',
        typeInfo: 'armlJSONSchema.AbstractGeneralOperationParameterPropertyType',
        substitutionHead: 'parameter'
      }, {
        elementName: 'remarks'
      }, {
        elementName: 'MultiGeometry',
        typeInfo: 'armlJSONSchema.MultiGeometryType',
        substitutionHead: 'AbstractGeometricAggregate'
      }, {
        elementName: 'singleOperationRef',
        typeInfo: 'armlJSONSchema.SingleOperationPropertyType'
      }, {
        elementName: 'targetCRS',
        typeInfo: 'armlJSONSchema.CRSPropertyType'
      }, {
        elementName: {
          localPart: 'Length',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        },
        typeInfo: 'armlJSONSchema.LengthType',
        substitutionHead: {
          localPart: 'Measure',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'Array',
        typeInfo: 'armlJSONSchema.ArrayType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: 'CategoryList',
        typeInfo: 'armlJSONSchema.CodeOrNilReasonListType',
        substitutionHead: 'AbstractScalarValueList'
      }, {
        elementName: 'DynamicFeature',
        typeInfo: 'armlJSONSchema.DynamicFeatureType',
        substitutionHead: 'AbstractFeature'
      }, {
        elementName: 'MappingRule',
        typeInfo: 'armlJSONSchema.StringOrRefType'
      }, {
        elementName: 'targetDimensions',
        typeInfo: 'Integer'
      }, {
        elementName: {
          localPart: 'MD_Georeferenceable',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDGeoreferenceableType',
        substitutionHead: {
          localPart: 'MD_GridSpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'DirectedObservation',
        typeInfo: 'armlJSONSchema.DirectedObservationType',
        substitutionHead: 'Observation'
      }, {
        elementName: 'CoordinateSystemAxis',
        typeInfo: 'armlJSONSchema.CoordinateSystemAxisType',
        substitutionHead: 'Definition'
      }, {
        elementName: {
          localPart: 'CI_OnlineResource',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CIOnlineResourceType'
      }, {
        elementName: {
          localPart: 'DQ_QuantitativeResult',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.DQQuantitativeResultType',
        substitutionHead: {
          localPart: 'AbstractDQ_Result',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'multiSolidProperty',
        typeInfo: 'armlJSONSchema.MultiSolidPropertyType'
      }, {
        elementName: {
          localPart: 'MD_ProgressCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'ConventionalUnit',
        typeInfo: 'armlJSONSchema.ConventionalUnitType',
        substitutionHead: 'UnitDefinition'
      }, {
        elementName: 'QuantityList',
        typeInfo: 'armlJSONSchema.MeasureOrNilReasonListType',
        substitutionHead: 'AbstractScalarValueList'
      }, {
        elementName: {
          localPart: 'MD_Georectified',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.MDGeorectifiedType',
        substitutionHead: {
          localPart: 'MD_GridSpatialRepresentation',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        }
      }, {
        elementName: 'defaultCodeSpace'
      }, {
        elementName: 'exterior',
        typeInfo: 'armlJSONSchema.AbstractRingPropertyType'
      }, {
        elementName: 'Dictionary',
        typeInfo: 'armlJSONSchema.DictionaryType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'AbstractGeometry',
        typeInfo: 'armlJSONSchema.AbstractGeometryType',
        substitutionHead: 'AbstractGML'
      }, {
        elementName: {
          localPart: 'MD_DatatypeCode',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.CodeListValueType',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        elementName: 'direction',
        typeInfo: 'armlJSONSchema.DirectionPropertyType'
      }, {
        elementName: 'AbstractGriddedSurface',
        typeInfo: 'armlJSONSchema.AbstractGriddedSurfaceType',
        substitutionHead: 'AbstractParametricCurveSurface'
      }, {
        elementName: 'multiExtentOf',
        typeInfo: 'armlJSONSchema.MultiSurfacePropertyType'
      }, {
        elementName: 'engineeringDatum',
        typeInfo: 'armlJSONSchema.EngineeringDatumPropertyType'
      }, {
        elementName: 'AbstractScalarValue',
        typeInfo: 'AnyType',
        substitutionHead: 'AbstractValue'
      }, {
        elementName: 'TimeOrdinalEra',
        typeInfo: 'armlJSONSchema.TimeOrdinalEraType'
      }, {
        elementName: {
          localPart: 'EX_VerticalExtent',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd'
        },
        typeInfo: 'armlJSONSchema.EXVerticalExtentType'
      }, {
        elementName: 'extentOf',
        typeInfo: 'armlJSONSchema.SurfacePropertyType'
      }, {
        elementName: 'abstractAssociationRole',
        typeInfo: 'armlJSONSchema.AssociationRoleType'
      }, {
        elementName: 'QuantityExtent',
        typeInfo: 'armlJSONSchema.QuantityExtentType',
        substitutionHead: 'AbstractValue'
      }, {
        elementName: 'ArcByCenterPoint',
        typeInfo: 'armlJSONSchema.ArcByCenterPointType',
        substitutionHead: 'AbstractCurveSegment'
      }, {
        elementName: 'limits',
        typeInfo: 'armlJSONSchema.GridLimitsType',
        scope: 'armlJSONSchema.GridType'
      }, {
        elementName: 'axisName',
        scope: 'armlJSONSchema.GridType'
      }, {
        elementName: 'axisLabels',
        typeInfo: {
          type: 'list'
        },
        scope: 'armlJSONSchema.GridType'
      }]
  };
  return {
    armlJSONSchema: armlJSONSchema
  };
};
if (typeof define === 'function' && define.amd) {
  define([], armlJSONSchema_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.armlJSONSchema = armlJSONSchema_Module_Factory().armlJSONSchema;
  }
  else {
    var armlJSONSchema = armlJSONSchema_Module_Factory().armlJSONSchema;
  }
}