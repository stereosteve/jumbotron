$.fn.jumbotron = function(opts) {
  opts = opts || {}
  opts.interval = opts.interval || 500

  var win = $(window)
  var wrap = this
  var vid = wrap.find('video')

  if (vid.length == 0) {
    throw new Error("You must call backgroundVideo on a wrapper div that contains a video element. No video element found.")
  }

  wrap.css({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    'z-index': -100,
    overflow: 'hidden',
  })

  function resize() {
    var winAspect = win.width() / win.height()
    var vidAspect = vid.width() / vid.height()
    var scaleHeight = winAspect < vidAspect

    if (scaleHeight) {
      var newWidth = vidAspect * win.height()
      var leftover = newWidth - win.width()
      var margLeft = -1 * leftover / 2
      vid.css({
        width: newWidth,
        height: win.height(),
        'margin-top': '0',
        'margin-left': margLeft,
      })
    } else {
      var newHeight = win.width() / vidAspect
      var leftover = newHeight - win.height()
      var margTop = -1 * leftover / 2
      vid.css({
        width: win.width(),
        height: newHeight,
        'margin-top': margTop,
        'margin-left': '0',
      })
    }
  }

  setInterval(resize, opts.interval);
}