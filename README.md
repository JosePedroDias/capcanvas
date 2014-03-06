## WAT?

So you want to capture an animation or interaction with a canvas element?

capcanvas is for you!



## Steps

1) fire a capcanvas server on your node.js

```
node capcanvas_srv.js
```

2) inject capcanvas on the page

```javascript
var el = document.createElement('script');
el.src = 'http://127.0.0.1/capcanvas_cli.js';
document.head.appendChild(el);
capcanvas( document.getElementsByTagName('canvas')[0], 'http://127.0.0.1:9999/', 5);
```

3) interact all you want

4) stop the server

```
ctrl+C on the node.js console
```

5) generate the video out of the captured frames

```
./encodeFrames.sh
```

6) play your awesome video

```
mplayer/vlc/whatever video.mp4
```


## TODO

* serve cli from github O:)

* http://stackoverflow.com/questions/15558418/how-do-you-save-an-image-from-a-three-js-canvas
