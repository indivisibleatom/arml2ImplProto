//Given a JSONIX json file unmarshalled from XML, instantiate appropriate JSON objects, in accordance with the ARML spec

var ARMLLoader = (function() {
  var scene;
  var refElements = {};
  var arElements = [];

  var features = [];

  var armlTypeRef;
  var currentUserPosition;
  
  function existsInRef( arElementType )
  {
    if ( hasProperty( "id", arElementType.value ) && ( ("#" + arElementType.value[ "id" ]) in refElements ) )
    {
      return refElements[ "#"+arElementType.value[ "id" ] ];
    }
    return null;
  }
  
  function findARElementType( arElementID )
  {
    var retARElementType = null;
    armlType.value.arElements.arElement.forEach( function( arElementType, index ) {
      if ( hasProperty( "id", arElementType.value ) && ( arElementType.value[ "id" ] == arElementID ) )
      {
        retARElementType = arElementType;
      }
    }, this); 
    if ( retARElementType !== null )
    {
      throw( "Referenced ARElement not found!" );
    }
    return retARElementType;
  }

  function processARElement( arElementType )
  {
    var retVal = existsInRef( arElementType );
    if ( retVal !== null )
    {
      return retVal;
    }

    switch( arElementType.value.TYPE_NAME )
    {
      case "armlJSONSchema.FeatureType" : 
        retVal = new Feature( arElementType.value );
        features.push( retVal );
        break;
      
      case "armlJSONSchema.ScreenAnchorType" : 
        retVal = new ScreenAnchor( arElementType.value );
        break;
        
      case "armlJSONSchema.ImageType" :
        retVal = new Image( arElementType.value );
        break;
        
      case "armlJSONSchema.GeometryType" :
        retVal = new Geometry( arElementType.value );
      break;

      default: retVal = new Object();
        break;
    }
    arElements.push( retVal );
    return retVal;
  }

  function processARElementRef( arElementRef )
  {
    if ( arElementRef.href in refElements ) 
    {
      return refElements[ arElementRef.href ];
    }
    else
    {
      var arElementType= findARElementType( arElementRef.href );
      return processARElement( arElementType );
    }  
  }

  function hasProperty( property, object )
  {
    if ( object instanceof Object )
    {
      return property in object;
    }
    return false;
  }

  function initSetRequired( property, object )
  {
    if ( property in object )
    {
      return object[property];
    }
    throw property + " not found in " + object;
  }

  function initOrSetDefault( property, object, defVal )
  {
    if ( property in object )
    {
       return object[property];
    }
    return defVal;
  }
   
  function ARElement(arElementType)
  {
    this.id = initOrSetDefault( "id", arElementType, null );
    if ( this.id !== null )
    {
      refElements[ "#"+this.id ] = this;
    }
  }

  Feature.prototype = Object.create( ARElement.prototype );
  function Feature(featureType)
  {
    ARElement.call(this, featureType);
    this.name = initOrSetDefault( "name", featureType, "" );
    this.description = initOrSetDefault( "description", featureType, "" );
    this.enabled = initOrSetDefault( "enabled", featureType, false );
    this.metadata = initOrSetDefault( "metadata", featureType, "" );
    this.anchors = [];

    var anchorsContent = initOrSetDefault( "anchors", featureType, Object() );
    if ( "anchor" in anchorsContent )
    {
      anchorsContent.anchor.forEach( function( anchorType ) { 
        this.anchors.push( processARElement( anchorType ) );
         }, this );
    }
    if ( "anchorRef" in anchorsContent )
    {
      anchorsContent.anchorRef.forEach( function( anchorRefType ) { 
        this.anchors.push( processARElementRef( anchorRefType ) );
       }, this );
    }
  }

  Anchor.prototype = Object.create( ARElement.prototype );
  function Anchor(anchorType)
  {
    ARElement.call(this, anchorType);
    this.enabled = initOrSetDefault( "enabled", anchorType, true );
  }
   
  ARAnchor.prototype = Object.create( Anchor.prototype );
  function ARAnchor(arAnchorType)
  {
    Anchor.call(this, arAnchorType);
    
    var assetContent = initSetRequired( "assets", arAnchorType, Object() );
    this.assets = [];
    if ( "visualAsset" in assetContent ) 
    {
      assetContent.visualAsset.forEach( function( assetType ) { 
      this.assets.push( processARElement( assetType ) );
       }, this );
    }
    if ( "assetRef" in assetContent )
    {
      assetContent.assetRef.forEach( function( assetRefType ) { 
        this.assets.push( processARElementRef( assetRefType ) );
       }, this );
    }
  }
  
  Geometry.prototype = Object.create( ARAnchor.prototype );
  function Geometry(geometryType)
  {
    ARAnchor.call(this, geometryType);
    if ( "point" in geometryType )
    {
      this.point = new Point(geometryType.point);
    }
    
    //Rendering
    this.cssElement = function() {
      if ( "point" in this && this.point.isInView() )
      {
        var div = document.createElement( "div" );
        div.style = this.style;
        this.assets.forEach( function( asset ) {
          div.appendChild( asset.cssElement() );
        }, this );
        return div;
      }
      return null;
    }
  }
  
  ScreenAnchor.prototype = Object.create( Anchor.prototype );
  function ScreenAnchor(screenAnchorType)
  {
    Anchor.call(this, screenAnchorType);
    this.anchorClass = initOrSetDefault( "class", screenAnchorType, "" );
    this.assets = [];
    screenAnchorType.assets.label.forEach( function( labelType )  {
      this.assets.push( new Label( labelType ) );
    }, this );
    this.style = initOrSetDefault( "style", screenAnchorType, "" );
    this.style += ";position:absolute;"; //ScreenAnchors have absolute positioning
    
    this.cssElement = function() {
      var div = document.createElement( "div" );
      div.style = this.style;
      this.assets.forEach( function( asset ) {
        div.appendChild( asset.cssElement() );
      }, this );
      return div;
    }
  }
   
  VisualAsset.prototype = Object.create( ARElement.prototype );
  function VisualAsset(visualAssetType)
  {
    ARElement.call(this, visualAssetType);
    this.enabled = initOrSetDefault( "enabled", visualAssetType, true );
    this.zOrder = initOrSetDefault( "zOrder", visualAssetType, 0 );
    //this.conditions = ;
    //this.orientation = ;
    var scalingModeType = initOrSetDefault( "scalingMode", visualAssetType, null );
    this.scalingMode = scalingModeType !== null ? new ScalingMode( scalingModeType ) : new DefaultScalingMode();
  }

  VisualAsset2D.prototype = Object.create( VisualAsset.prototype );
  function VisualAsset2D(visualAsset2DType)
  {
    VisualAsset.call(this, visualAsset2DType);
    this.width = initOrSetDefault( "width", visualAsset2DType, "aspect" );
    this.height = initOrSetDefault( "height", visualAsset2DType, "aspect" );
    this.orientationMode = initOrSetDefault( "orientationMode", visualAsset2DType, "auto" );
    this.backSide = initOrSetDefault( "backSide", visualAsset2DType, "#808080" );   
  }
  
  Label.prototype = Object.create( VisualAsset2D.prototype );
  function Label(labelType)
  {
    VisualAsset2D.call(this, labelType);
    
    this.href = initOrSetDefault( "href", labelType, null );
    this.href = (this.href !== null) ? initOrSetDefault( "href", labelType.href, null ) : null;
    
    var srcContent = initOrSetDefault( "src", labelType, "" );
    this.src = "";
    if ( ! (srcContent === "") )
    {
      srcContent.content.forEach( function( srcContent ) {
        this.src += hasProperty( "outerHTML", srcContent ) ? srcContent.outerHTML : srcContent;
      }, this );
    }
    this.hyperlinkBehavior = initOrSetDefault( "hyperlinkBehavior", labelType, "blank" );
    this.viewportWidth = initOrSetDefault( "viewportWidth", labelType, 256 );

    this.cssElement = function() {
        var div = document.createElement( "div" );
        div.enabled = this.enabled;
        div.style += "z-index:" + this.zOrder + "; width:" + this.width + ";";
        div.innerHTML = this.src;
        return div;
    }
  }


  Image.prototype = Object.create( VisualAsset2D.prototype );
  function Image(imageType)
  {
    VisualAsset2D.call(this, imageType);

    this.href = initSetRequired( "href", imageType, null );
    this.href = (this.href !== null) ? initSetRequired( "href", imageType.href, null ) : null;
    
    this.cssElement = function() {
      var div = document.createElement( "div" );
      div.enabled = this.enabled;
      div.style += "z-index:" + this.zOrder + "; width:" + this.width + ";";
      var image = document.createElement( "img" );
      div.appendChild( image );
      image.src = this.href;
      return div;
    }
  }
  
  function GMLGeometry( gmlGeometryType )
  {
    this.id = initSetRequired( "id", orientationType, 0 );
    this.srsName = initOrSetDefault( "srsName", orientationType, "WGS84" );
    this.srsDimension = initOrSetDefault( "srsDimension", orientationType, 2 );
  }
  
  Point.prototype = Object.create( GMLGeometry.prototype );
  function Point(pointType)
  {
    var pos = initSetRequired( "pos", pointType );
    this.point = pos.value;
    this.isInView = function() {
      var pinLat = this.point[0];
      var pinLng = this.point[1];
      var dLat = (currentUserPosition.lat-pinLat)* Math.PI / 180;
      var dLon = (currentUserPosition.lon-pinLng)* Math.PI / 180;
      var lat1 = pinLat * Math.PI / 180;
      var lat2 = currentUserPosition.lat * Math.PI / 180;
      var y = Math.sin(dLon) * Math.cos(lat2);
      var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
      var bearing = Math.atan2(y, x) * 180 / Math.PI;
      bearing = bearing + 180;
          
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var distance = 3958.76  * c;
        
      if(Math.abs(bearing - currentUserPosition.heading) <= 30)
      {
        return true;
      }
      return false;
    }
  }
  
  function Orientation(orientationType)
  {
    this.roll = initOrSetDefault( "roll", orientationType, 0 );
    this.tilt = initOrSetDefault( "tilt", orientationType, 0 );
    this.heading = initOrSetDefault( "heading", orientationType, 0 );
  }

  function ScalingMode(scalingModeType)
  {
    this.type = initSetRequired( "type", scalingModeType );
    this.minScalingDistance = initOrSetDefault( "minScalingDistance", scalingModeType, 0 );
    this.maxScalingDistance = initOrSetDefault( "maxScalingDistance", scalingModeType, Number.POSITIVE_INFINITY );
    this.scalingFactor = initOrSetDefault( "scalingFactor", scalingModeType, 1 );
  }
  
  function DefaultScalingMode()
  {
    this.type = "natural";
    this.minScalingDistance = 0;
    this.maxScalingDistance = Number.POSITIVE_INFINITY;
    this.scalingFactor = 1;
  }

  Condition.prototype = Object.create( ARElement.prototype );
  function Condition(conditionType)
  {
    ARElement.call(this, conditionType);
  }

  DistanceCondition.prototype = Object.create( Condition.prototype );
  function DistanceCondition(distanceConditionType)
  {
    Condition.call(this, distanceConditionType);
    this.max = initOrSetDefault( "max", distanceConditionType, Number.POSITIVE_INFINITY );
    this.min = initOrSetDefault( "min", distanceConditionType, 0 );
  }

  SelectedCondition.prototype = Object.create( Condition.prototype );
  function SelectedCondition(selectedConditionType)
  {
    Condition.call(this, selectedConditionType);
    this.listener = initOrSetDefault( "listener", selectedConditionType, "anchor" );
    this.selected = initSetRequired( "selected", selectedConditionType );
  }
  
  function render()
  {
    requestAnimationFrame( render )
    renderer.render( scene, camera );
  }

  return {
    processARMLType: function( armlType )
    {
      console.log( armlType );
      armlTypeRef = armlType;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 1000;
      renderer = new THREE.CSS3DRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = 0;

      armlType.value.arElements.arElement.forEach(processARElement); 
      
      var div = document.createElement( "div" );
      div.id = "screenAnchorDiv";
      document.body.appendChild( div );
      document.body.appendChild( renderer.domElement );
      render( scene, camera );
    },
    
    //This function is just for simulating the Geo-location that will be provided by Argon
    handleRecomposition: function( simulatedPosition )
    {
      currentUserPosition = simulatedPosition;     
      var screenAnchorDiv = document.getElementById("screenAnchorDiv");
      while(screenAnchorDiv.firstChild) 
      {
        screenAnchorDiv.removeChild(screenAnchorDiv.firstChild);
      }
      scene = new THREE.Scene();

      document.getElementById("screenAnchorDiv")
      features.forEach( function( feature ) {
        if ( feature.enabled ) 
        {
          feature.anchors.forEach( function( anchor ) {
            var cssElement = anchor.cssElement();
            if ( cssElement !== null )
            {
              if ( anchor instanceof ScreenAnchor )
              {
                screenAnchorDiv.appendChild( cssElement );
              }
              else
              {
                scene.add( new THREE.CSS3DObject( cssElement ) );
              }
            }
          } );
        }       
      } );
    }
  };
} )();