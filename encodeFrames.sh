#!/bin/bash

#avconv -f image2 -i frames/%04d.png video.mpeg

avconv -r 10 -f image2 -i frames/%04d.png -b:v 1000k video.mp4
