function ImgPreload()
{
  var appVer=parseInt(navigator.appVersion);
  var isNC=false,isN6=false,isIE=false;
  if (document.all && appVer >= 4) isIE=true; else
    if (document.getElementById && appVer > 4) isN6=true; else
      if (document.layers && appVer >= 4) isNC=true;
  if (isNC||isN6||isIE)
  {
    if (document.images)
    {
      var imgName = ImgPreload.arguments[0];
      var cnt;
      swImg[imgName] = new Array;
      for (cnt = 1; cnt < ImgPreload.arguments.length; cnt++)
      {
        swImg[imgName][ImgPreload.arguments[cnt]] = new Image();
        swImg[imgName][ImgPreload.arguments[cnt]].src = ImgPreload.arguments[cnt];
      }
    }
  }
}
// ImgFind:
//
function ImgFind(doc, imgName)
{
  for (var i=0; i < doc.layers.length; i++)
  {
    var img = doc.layers[i].document.images[imgName];
    if (!img) img = ImgFind(doc.layers[i], imgName);
    if (img) return img;
  }
  return null;
}
// ImgSwap:
//
function ImgSwap(imgName, imgSrc)
{
  var appVer=parseInt(navigator.appVersion);
  var isNC=false,isN6=false,isIE=false;
  if (document.all && appVer >= 4) isIE=true; else
    if (document.getElementById && appVer > 4) isN6=true; else
      if (document.layers && appVer >= 4) isNC=true;
  if (isNC||isN6||isIE)
  {
    if (document.images)
    {
      var img = document.images[imgName];
      if (!img) img = ImgFind(document, imgName);
      if (img) img.src = imgSrc;
    }
  }
}
var swImg; swImg=new Array;