# Jumbotron

Fill your background with a video.

A simple jQuery plugin to scale and center a video to fill the background of a webpage.


## Installation

```
bower install jumbotron
```


## Usage

1. Create a wrapper div with a video inside

```html
<div id="jumbo">
  <video src="http://vjs.zencdn.net/v/oceans.mp4" autoplay loop muted></video>
</div>
```

2. Call `jumbotron()` on the wrapper element

```js
// default
$("#jumbo").jumbotron()

// with options
$("#jumbo").jumbotron({interval: 500})
```



## Notes

The plugin will resize the wrapper to fill the screen and make the wrapper fixed position with a z-index of -100.  If your document is taller than the window, the video will stay fixed in the background as you scroll.

The plugin also sets a default interval of 500ms to resize the video.  This handles both video loading and window resizing.  If the video takes a seconds to load, the interval will pick up the aspect ratio when the video loads and resize to fill screen.  Similarly when the user resizes the window the interval will resize the video to fill new window size.  You can configure this interval with the `interval` option.
