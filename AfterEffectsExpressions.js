
// Bounce expression
n = 0;
if (numKeys > 0){
n = nearestKey(time).index;
if (key(n).time > time){
n--;
}
}
if (n == 0){
t = 0;
}else{
t = time - key(n).time;
}
if (n > 0 && t < 1){
v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
amp = .06;
freq = 3;
decay = 5.0;
value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
}else{
value;
}




// Drop expression
e = .5;
g = 20000;
nMax = 9;

n = 0;
if (numKeys > 0){
  n = nearestKey(time).index;
  if (key(n).time > time) n--;
}
if (n > 0){
  t = time - key(n).time;
  v = -velocityAtTime(key(n).time - .001)*e;
  vl = length(v);
  if (value instanceof Array){
    vu = (vl > 0) ? normalize(v) : [0,0,0];
  }else{
    vu = (v < 0) ? -1 : 1;
  }
  tCur = 0;
  segDur = 2*vl/g;
  tNext = segDur;
  nb = 1; // number of bounces
  while (tNext < t && nb <= nMax){
    vl *= e;
    segDur *= e;
    tCur = tNext;
    tNext += segDur;
    nb++
  }
  if(nb <= nMax){
    delta = t - tCur;
    value +  vu*delta*(vl - g*delta/2);
  }else{
    value
  }
}else
  value




// Wiggle expression
wiggle(1,50);




// Motion tail expression
delay = 5; //number of frames to delay
d = delay*thisComp.frameDuration*(index - 1);
thisComp.layer(1).position.valueAtTime(time - d)




// Opacity expression
opacityFactor = .75;
Math.pow(opacityFactor,index - 1)*100





// Timer up or down expression
//Define time values
var hour = Math.floor((time/60)/60);
var min = Math.floor(time/60);
var sec = Math.floor(time);
var mili = Math.floor(time*60);
// Cleaning up the values
if (mili > 59){ mili = mili - sec*60; }
if (mili < 10){ mili = "0" + mili; } if (sec > 59){ sec = sec - min*60; }
if (sec < 10){ sec = "0" + sec; } if (min >= 59){ min = min - hour*60; }
if (min < 10){ min = "0" + min; }
// no hour cleanup
if (hour < 10){ hour = "0" + hour; }
//Output
hour + ' : ' + min + ' : ' + sec + ' : ' + mili;




// Squash And Stretch Expression
maxDev = 13; // max deviation in pixels
spd = 30; //speed of oscillation
decay = 1.0; //how fast it slows down
t = time - inPoint;
x = scale[0] + maxDev*Math.sin(spd*t)/Math.exp(decay*t);
y = scale[0]*scale[1]/x;
[x,y]