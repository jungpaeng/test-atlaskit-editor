(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1002:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879)],void 0===(o="function"===typeof(n=function(e){var t=e.transform;e.transform=function(i,n,a,o,r){t.call(e,e.scale(i,n,r),n,a,o,r)},e.transformCoordinates=function(){},e.getTransformedOptions=function(e,t){var i,n,a,o,r=t.aspectRatio;if(!r)return t;for(n in i={},t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i.crop=!0,a=e.naturalWidth||e.width,o=e.naturalHeight||e.height,a/o>r?(i.maxWidth=o*r,i.maxHeight=o):(i.maxWidth=a,i.maxHeight=a/r),i},e.renderImageToCanvas=function(e,t,i,n,a,o,r,s,c,l){return e.getContext("2d").drawImage(t,i,n,a,o,r,s,c,l),e},e.hasCanvasOption=function(e){return e.canvas||e.crop||!!e.aspectRatio},e.scale=function(t,i,n){i=i||{};var a,o,r,s,c,l,u,f,d,g,p,h=document.createElement("canvas"),m=t.getContext||e.hasCanvasOption(i)&&h.getContext,S=t.naturalWidth||t.width,y=t.naturalHeight||t.height,b=S,v=y;function x(){var e=Math.max((r||b)/b,(s||v)/v);e>1&&(b*=e,v*=e)}function C(){var e=Math.min((a||b)/b,(o||v)/v);e<1&&(b*=e,v*=e)}if(m&&(i=e.getTransformedOptions(t,i,n),u=i.left||0,f=i.top||0,i.sourceWidth?(c=i.sourceWidth,void 0!==i.right&&void 0===i.left&&(u=S-c-i.right)):c=S-u-(i.right||0),i.sourceHeight?(l=i.sourceHeight,void 0!==i.bottom&&void 0===i.top&&(f=y-l-i.bottom)):l=y-f-(i.bottom||0),b=c,v=l),a=i.maxWidth,o=i.maxHeight,r=i.minWidth,s=i.minHeight,m&&a&&o&&i.crop?(b=a,v=o,(p=c/l-a/o)<0?(l=o*c/a,void 0===i.top&&void 0===i.bottom&&(f=(y-l)/2)):p>0&&(c=a*l/o,void 0===i.left&&void 0===i.right&&(u=(S-c)/2))):((i.contain||i.cover)&&(r=a=a||r,s=o=o||s),i.cover?(C(),x()):(x(),C())),m){if((d=i.pixelRatio)>1&&(h.style.width=b+"px",h.style.height=v+"px",b*=d,v*=d,h.getContext("2d").scale(d,d)),(g=i.downsamplingRatio)>0&&g<1&&b<c&&v<l)for(;c*g>b;)h.width=c*g,h.height=l*g,e.renderImageToCanvas(h,t,u,f,c,l,0,0,h.width,h.height),u=0,f=0,c=h.width,l=h.height,(t=document.createElement("canvas")).width=c,t.height=l,e.renderImageToCanvas(t,h,0,0,c,l,0,0,c,l);return h.width=b,h.height=v,e.transformCoordinates(h,i),e.renderImageToCanvas(h,t,u,f,c,l,0,0,b,v)}return t.width=b,t.height=v,t}})?n.apply(t,a):n)||(e.exports=o)}()},1003:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879),i(896)],void 0===(o="function"===typeof(n=function(e){e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(t,i,n){if(n&&!(i+n>t.byteLength))return e.createObjectURL(new Blob([t.buffer.slice(i,i+n)]));console.log("Invalid Exif data: Invalid thumbnail data.")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,i,n,a,o,r){var s,c,l,u,f,d,g=e.exifTagTypes[a];if(g){if(s=g.size*o,!((c=s>4?i+t.getUint32(n+8,r):n+8)+s>t.byteLength)){if(1===o)return g.getValue(t,c,r);for(l=[],u=0;u<o;u+=1)l[u]=g.getValue(t,c+u*g.size,r);if(g.ascii){for(f="",u=0;u<l.length&&"\0"!==(d=l[u]);u+=1)f+=d;return f}return l}console.log("Invalid Exif data: Invalid data offset.")}else console.log("Invalid Exif data: Invalid tag type.")},e.parseExifTag=function(t,i,n,a,o){var r=t.getUint16(n,a);o.exif[r]=e.getExifValue(t,i,n,t.getUint16(n+2,a),t.getUint32(n+4,a),a)},e.parseExifTags=function(e,t,i,n,a){var o,r,s;if(i+6>e.byteLength)console.log("Invalid Exif data: Invalid directory offset.");else{if(o=e.getUint16(i,n),!((r=i+2+12*o)+4>e.byteLength)){for(s=0;s<o;s+=1)this.parseExifTag(e,t,i+2+12*s,n,a);return e.getUint32(r,n)}console.log("Invalid Exif data: Invalid directory size.")}},e.parseExifData=function(t,i,n,a,o){if(!o.disableExif){var r,s,c,l=i+10;if(1165519206===t.getUint32(i+4))if(l+8>t.byteLength)console.log("Invalid Exif data: Invalid segment size.");else if(0===t.getUint16(i+8)){switch(t.getUint16(l)){case 18761:r=!0;break;case 19789:r=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}42===t.getUint16(l+2,r)?(s=t.getUint32(l+4,r),a.exif=new e.ExifMap,(s=e.parseExifTags(t,l,l+s,r,a))&&!o.disableExifThumbnail&&(c={exif:{}},s=e.parseExifTags(t,l,l+s,r,c),c.exif[513]&&(a.exif.Thumbnail=e.getExifThumbnail(t,l+c.exif[513],c.exif[514]))),a.exif[34665]&&!o.disableExifSub&&e.parseExifTags(t,l,l+a.exif[34665],r,a),a.exif[34853]&&!o.disableExifGps&&e.parseExifTags(t,l,l+a.exif[34853],r,a)):console.log("Invalid Exif data: Missing TIFF marker.")}else console.log("Invalid Exif data: Missing byte alignment offset.")}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)})?n.apply(t,a):n)||(e.exports=o)}()},1004:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879),i(896)],void 0===(o="function"===typeof(n=function(e){e.IptcMap=function(){return this},e.IptcMap.prototype.map={ObjectName:5},e.IptcMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.parseIptcTags=function(e,t,i,n){function a(e,t,i){for(var n="",a=t;a<t+i;a++)n+=String.fromCharCode(e.getUint8(a));return n}for(var o,r,s,c=t;c<t+i;)28===e.getUint8(c)&&2===e.getUint8(c+1)&&(s=e.getUint8(c+2))in n.iptc.tags&&(r=e.getInt16(c+3),o=a(e,c+5,r),n.iptc.hasOwnProperty(s)?n.iptc[s]instanceof Array?n.iptc[s].push(o):n.iptc[s]=[n.iptc[s],o]:n.iptc[s]=o),c++},e.parseIptcData=function(t,i,n,a,o){if(!o.disableIptc){for(var r=i+n,s=function(e,t){return 943868237===e.getUint32(t)&&1028===e.getUint16(t+4)};i+8<r;){if(s(t,i)){var c=t.getUint8(i+7);c%2!==0&&(c+=1),0===c&&(c=4);var l=i+8+c;if(l>r){console.log("Invalid IPTC data: Invalid segment offset.");break}var u=t.getUint16(i+6+c);if(i+u>r){console.log("Invalid IPTC data: Invalid segment size.");break}return a.iptc=new e.IptcMap,e.parseIptcTags(t,l,u,a)}i++}console.log("No IPTC data at this offset - could be XMP")}},e.metaDataParsers.jpeg[65517].push(e.parseIptcData)})?n.apply(t,a):n)||(e.exports=o)}()},1228:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879),i(896)],void 0===(o="function"===typeof(n=function(e){"undefined"!==typeof fetch&&"undefined"!==typeof Request&&(e.fetchBlob=function(t,i,n){if(e.hasMetaOption(n))return fetch(new Request(t,n)).then(function(e){return e.blob()}).then(i).catch(function(e){console.log(e),i()});i()})})?n.apply(t,a):n)||(e.exports=o)}()},1229:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879),i(1003)],void 0===(o="function"===typeof(n=function(e){e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":if(!t)return;return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":if(!t)return;return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":if(!t)return;return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,i=e.tags,n=e.map;for(t in i)i.hasOwnProperty(t)&&(n[i[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,i={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e])&&(i[t]=this.getText(t));return i}})?n.apply(t,a):n)||(e.exports=o)}()},1230:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879),i(1004)],void 0===(o="function"===typeof(n=function(e){e.IptcMap.prototype.tags={3:"ObjectType",4:"ObjectAttribute",5:"ObjectName",7:"EditStatus",8:"EditorialUpdate",10:"Urgency",12:"SubjectRef",15:"Category",20:"SupplCategory",22:"FixtureID",25:"Keywords",26:"ContentLocCode",27:"ContentLocName",30:"ReleaseDate",35:"ReleaseTime",37:"ExpirationDate",38:"ExpirationTime",40:"SpecialInstructions",42:"ActionAdvised",45:"RefService",47:"RefDate",50:"RefNumber",55:"DateCreated",60:"TimeCreated",62:"DigitalCreationDate",63:"DigitalCreationTime",65:"OriginatingProgram",70:"ProgramVersion",75:"ObjectCycle",80:"Byline",85:"BylineTitle",90:"City",92:"Sublocation",95:"State",100:"CountryCode",101:"CountryName",103:"OrigTransRef",105:"Headline",110:"Credit",115:"Source",116:"CopyrightNotice",118:"Contact",120:"Caption",122:"WriterEditor",130:"ImageType",131:"ImageOrientation",135:"LanguageID"},e.IptcMap.prototype.getText=function(e){var t=this.get(e);return String(t)},function(e){var t,i=e.tags,n=e.map||{};for(t in i)i.hasOwnProperty(t)&&(n[i[t]]=t)}(e.IptcMap.prototype),e.IptcMap.prototype.getAll=function(){var e,t,i={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e])&&(i[t]=this.getText(t));return i}})?n.apply(t,a):n)||(e.exports=o)}()},1231:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879),i(1002),i(896)],void 0===(o="function"===typeof(n=function(e){var t=e.hasCanvasOption,i=e.hasMetaOption,n=e.transformCoordinates,a=e.getTransformedOptions;e.hasCanvasOption=function(i){return!!i.orientation||t.call(e,i)},e.hasMetaOption=function(t){return t&&!0===t.orientation||i.call(e,t)},e.transformCoordinates=function(t,i){n.call(e,t,i);var a=t.getContext("2d"),o=t.width,r=t.height,s=t.style.width,c=t.style.height,l=i.orientation;if(l&&!(l>8))switch(l>4&&(t.width=r,t.height=o,t.style.width=c,t.style.height=s),l){case 2:a.translate(o,0),a.scale(-1,1);break;case 3:a.translate(o,r),a.rotate(Math.PI);break;case 4:a.translate(0,r),a.scale(1,-1);break;case 5:a.rotate(.5*Math.PI),a.scale(1,-1);break;case 6:a.rotate(.5*Math.PI),a.translate(0,-r);break;case 7:a.rotate(.5*Math.PI),a.translate(o,-r),a.scale(-1,1);break;case 8:a.rotate(-.5*Math.PI),a.translate(-o,0)}},e.getTransformedOptions=function(t,i,n){var o,r,s=a.call(e,t,i),c=s.orientation;if(!0===c&&n&&n.exif&&(c=n.exif.get("Orientation")),!c||c>8||1===c)return s;for(r in o={},s)s.hasOwnProperty(r)&&(o[r]=s[r]);switch(o.orientation=c,c){case 2:o.left=s.right,o.right=s.left;break;case 3:o.left=s.right,o.top=s.bottom,o.right=s.left,o.bottom=s.top;break;case 4:o.top=s.bottom,o.bottom=s.top;break;case 5:o.left=s.top,o.top=s.left,o.right=s.bottom,o.bottom=s.right;break;case 6:o.left=s.top,o.top=s.right,o.right=s.bottom,o.bottom=s.left;break;case 7:o.left=s.bottom,o.top=s.right,o.right=s.top,o.bottom=s.left;break;case 8:o.left=s.bottom,o.top=s.left,o.right=s.top,o.bottom=s.right}return o.orientation>4&&(o.maxWidth=s.maxHeight,o.maxHeight=s.maxWidth,o.minWidth=s.minHeight,o.minHeight=s.minWidth,o.sourceWidth=s.sourceHeight,o.sourceHeight=s.sourceWidth),o}})?n.apply(t,a):n)||(e.exports=o)}()},1400:function(e,t,i){e.exports=i(879),i(1002),i(896),i(1228),i(1003),i(1229),i(1004),i(1230),i(1231)},879:function(e,t,i){var n;!function(a){"use strict";function o(e,t,i){var n,a=document.createElement("img");return a.onerror=function(n){return o.onerror(a,n,e,t,i)},a.onload=function(n){return o.onload(a,n,e,t,i)},"string"===typeof e?(o.fetchBlob(e,function(t){t?(e=t,n=o.createObjectURL(e)):(n=e,i&&i.crossOrigin&&(a.crossOrigin=i.crossOrigin)),a.src=n},i),a):o.isInstanceOf("Blob",e)||o.isInstanceOf("File",e)?(n=a._objectURL=o.createObjectURL(e))?(a.src=n,a):o.readFile(e,function(e){var i=e.target;i&&i.result?a.src=i.result:t&&t(e)}):void 0}var r=a.createObjectURL&&a||a.URL&&URL.revokeObjectURL&&URL||a.webkitURL&&webkitURL;function s(e,t){!e._objectURL||t&&t.noRevoke||(o.revokeObjectURL(e._objectURL),delete e._objectURL)}o.fetchBlob=function(e,t,i){t()},o.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},o.transform=function(e,t,i,n,a){i(e,a)},o.onerror=function(e,t,i,n,a){s(e,a),n&&n.call(e,t)},o.onload=function(e,t,i,n,a){s(e,a),n&&o.transform(e,a,n,i,{originalWidth:e.naturalWidth||e.width,originalHeight:e.naturalHeight||e.height})},o.createObjectURL=function(e){return!!r&&r.createObjectURL(e)},o.revokeObjectURL=function(e){return!!r&&r.revokeObjectURL(e)},o.readFile=function(e,t,i){if(a.FileReader){var n=new FileReader;if(n.onload=n.onerror=t,n[i=i||"readAsDataURL"])return n[i](e),n}return!1},void 0===(n=function(){return o}.call(t,i,t,e))||(e.exports=n)}("undefined"!==typeof window&&window||this)},896:function(e,t,i){var n,a,o;!function(r){"use strict";a=[i(879)],void 0===(o="function"===typeof(n=function(e){var t="undefined"!==typeof Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[],65517:[]}},e.parseMetaData=function(t,i,n,a){a=a||{};var o=this,r=(n=n||{}).maxMetaDataSize||262144,s=!("undefined"!==typeof DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice);!s&&e.readFile(e.blobSlice.call(t,0,r),function(t){if(t.target.error)return console.log(t.target.error),void i(a);var r,s,c,l,u=t.target.result,f=new DataView(u),d=2,g=f.byteLength-4,p=d;if(65496===f.getUint16(0)){for(;d<g&&((r=f.getUint16(d))>=65504&&r<=65519||65534===r);){if(s=f.getUint16(d+2)+2,d+s>f.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(c=e.metaDataParsers.jpeg[r])for(l=0;l<c.length;l+=1)c[l].call(o,f,d,s,a,n);p=d+=s}!n.disableImageHead&&p>6&&(u.slice?a.imageHead=u.slice(0,p):a.imageHead=new Uint8Array(u).subarray(0,p))}else console.log("Invalid JPEG file: Missing JPEG marker.");i(a)},"readAsArrayBuffer")||i(a)},e.hasMetaOption=function(e){return e&&e.meta};var i=e.transform;e.transform=function(t,n,a,o,r){e.hasMetaOption(n)?e.parseMetaData(o,function(r){i.call(e,t,n,a,o,r)},n,r):i.apply(e,arguments)}})?n.apply(t,a):n)||(e.exports=o)}()}}]);
//# sourceMappingURL=192.d3c5397f.chunk.js.map