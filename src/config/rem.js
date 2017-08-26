(function (doc, win) {
  var docEL = doc.documentElement
  // 判断是resize事件还是orientationchange（手机方向）事件
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  // 随便设计的，设计图宽度以750，字体32px为基准，一般页面基准320px(20px)。
  var recalc = function () {
    var clientWidth = docEL.clientWidth
    if (!clientWidth) return
    docEL.style.fontSize = 32 * (clientWidth / 750) + 'px'
  }

  if (!docEL.addEventListener) return
  // 添加事件监听
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DomContentLoaded', recalc, false)
})(document, window)
