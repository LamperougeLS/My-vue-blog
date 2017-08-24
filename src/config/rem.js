(function (doc, win) {
  var docEL = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEL.clientWidth
    if (!clientWidth) return
    docEL.style.fontSize = 32 * (clientWidth / 750) + 'px'
  }

  if (!docEL.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DomContentLoaded', recalc, false)
  // body..
})(document, window)
