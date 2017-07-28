---
layout: post
title:  "Moore's Law Isn't Dead"
date:   2017-07-27 20:00:00 -0500
---

Moore's Law is one of the fundamental rules of thumb in computing; it states 
that every 18 months the performance of a CPU roughly doubles. Amazingly, that
rule of thumb has held true for over 40 years. Every five or so
years folks will tell you how Moore's Law is dying or dead. 

While technologies play a limiting role, new ideas and innovations continue
to drive Moore's law forward now and into the future. Just a decade or so ago,
Moore's law was reaching its limit. As more transitors could be packed onto a
single die, the CPU was able to spend more chip space on larger caches, better
branch predictors, more parallelized ALUs, instruction level parallelism, et cetera. 
Chip producers increased clock rates as high as 4 GHz. Then, the single core 
design simply became unsustainable. 

You see, more transistors being used for all those things means more power was 
required. Not only that: higher clock rates drastically increased power usage --
cubically to be specific. Increasing the clock rate means all of the 
synchronous components use linearly more power. However, without also 
increasing the voltage, the internal signals couldn't travel quickly enough
to prevent glitches (the speed of the current in a wire is proportional to its voltage).
Since voltage is quadrically proportional to power, increasing clock rate 
thus cubically increases power usage. Obviously nobody wants to spend a fortune 
powering their PC, but besides that, more power usage requires better cooling 
to prevent the chip from burning up. So, increasing clock rate simply became infeasible...

...but Moore's law did not die. Instead of increasing the clock rate, chip 
manufacturers began to realize that they could simply increase the number of 
physical processors on a die. Dual and quad-core processors began to hit the
market. Performance continued to double ever 18 months. The performance was a bit
more difficult for programmers to take advantage of, but it was there. 

Fast forward a few more years. The distance between transitors has shrunk to a tiny
10nm. The size of transistors is rapidly approaching the atomic limit on their size --
the point at which they will literally only be large enough to allow a single 
electron to pass through. In perhaps another 10 or 20 years we will reach that limit. 
Chip manufacturers are already preparing for that moment. They plan to boost future
performance by moving away from the idea of a general purpose processor and more 
towards a specialized purpose processor. 

Using GPUs for heavily parallelized programming absolutely exploded. Desktop CPUs
began putting special signal processing, encryption, and more special purpose
blocks of hardware on the chip. The rapidly approaching next step
is for the chip makers to add FPGAs to the chip. 

The means of achieving performance changes, but thanks to continued technological
innovations, Moore's law will continue into the foreseeable future. 
