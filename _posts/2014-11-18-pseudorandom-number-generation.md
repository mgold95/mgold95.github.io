---
layout: post
comments: true
title:  "Pseudorandom Number Generation"
date:   2014-11-18 22:54:21 -0500
---

Most of us don’t often think about how random numbers are generated or even why they’re needed. 
Believe it or not, random numbers are all around us. They are crucial to various facets of 
computing such as games, cryptography, running simulations, statistical sampling, and more. Because 
of the importance of many of these applications, random number generation has been studied a great 
deal in computer science.

<figure style="width: 254px; float: right; margin: 5px 0px 5px 10px;">
    <img src="/assets/von-neumann.jpg" alt="" />
    <figcaption>John von Neumann, one of the fathers of modern computing and among
        the first to come up with a pseudorandom number generation algorithm</figcaption>
</figure>
You may ask, how are random numbers generated by computers? Computers are inherently deterministic 
machines; you make a mathematical function, give it some inputs, and it gives an output. For the 
same set of inputs, the output is always identical. This fact is sort of contrary in nature to 
randomness.

The truth is computers cannot really create true random numbers. Instead, they produce *pseudorandom 
numbers* (The prefix *pseudo* comes from the Greek word for *false*). In producing random numbers, we 
use mathematical formulas to produce sequences of numbers that act kind of random. Some of these 
generators are actually quite good; a sequence of randomish numbers that repeats itself after a few 
trillion bits isn’t so bad! I will explain how random numbers are generated by computers and then 
show you my own pseudorandom number generator implemented in Java.

Let’s begin with a trivial form of random number generation proposed in 1946 by John von Neumann. 
It is called the Middle Square Method. Let’s say we want to generate random numbers from 0 to 10000. 
First, take any 4-digit number. It is called the seed. Let’s choose 5555. We square the seed 
producing 30<u>8580</u>25. The middle 4 digits, 8580, become our result (and also our seed). To then 
generate another random number, we take the seed, 8580, and square it to obtain 73<u>6164</u>00. The 
resultant random number is 6164.

This algorithm is really neat in the sense that pretty much anyone anywhere can generate 
pseudorandom numbers with a pencil and paper or the calculator app on their smartphone. However, 
as you might imagine, it has a couple flaws. What happens if we somehow get to a seed of 0000? 
That’s right, the random number generator will output “0000” forever which is obviously a highly 
undesirable behavior. It’s actually a behavior that more legitimate PRNGs face. Such seeds are 
called “bad seeds” because once you reach them, the generator becomes stuck in a short sequence of 
repeating numbers. You may think an easy solution to the “0000” bad seed in the Middle Square 
Random Method would be to just add a fixed number before you square it. For example, do 
$$(Seed + 71)^2$$ instead of just $$(Seed)^2$$. You’d be correct in thinking that! Adding an increment 
helps prevent “bad seeds” from being quite so bad.

<figure style="width: 300px; float: left; margin: 5px 10px 5px 0px;">
    <img src="/assets/roulette.jpg" alt="" />
    <figcaption>The Linear Congruential Method is similar to the Roulette Wheel in that it wraps
        around a set of numbers many times before finally settling on one</figcaption>
</figure>
Now let’s get into the actual algorithm I used for my PRNG. First, let me be clear; this algorithm 
doesn’t produce the best random numbers around. On the other hand though, it’s extremely fast, it’s 
used extensively today, and it produces random numbers that are “good enough” for many 
applications. It is called the Linear Congruential Method. It goes like this: take the seed and 
multiply it by a really large number. Since computers use modular arithmetic, if the number is too 
large after the multiplication (it probably will be), it will “wrap around.” Normally 
when generating random numbers, this “wrap around” happens several hundred times. It’s sort of 
like spinning a wheel; it’s somewhat unpredictable where it will stop. After the multiplication, we 
add an “increment” to help prevent bad seeds as explained previously. That’s all there is too it! 
I also added some extension methods to make the random number generator more usable in actual 
applications.

Here is the stripped-down version of the code of my random number generator along with a call in 
the main method that will generate 10 random numbers from 1 to 100.

{% highlight java %}
public class Random {

    private static final long MULTIPLIER = 1103515245;
    private static final long INC = 0xbeef;
    private static final float MAX_FLOAT = 5.36871012E8f; 

    private long seed;

    public static void main(String[] args) {
        Random rand = new Random();
        for(int i = 0; i < 10; i++) {
            System.out.println(rand.nextInt(100) + 1);
    }

    public Random() {
        seed = System.nanoTime() % 7744144276301L;
    }

    protected long next(int bits) {
        seed = seed * MULTIPLIER + INC;
        return(seed >>> (64 - bits));
    }

    public float nextFloat() {
        return next(29) / MAX_FLOAT;
    }

    public int nextInt(int n) {
        if(n < 0)
            throw new IllegalArgumentException("n must be positive");
        return (int)(nextFloat() * n);
    }
}
{% endhighlight %}

Let’s do a quick step-though of what exactly happens when the PRNG is seeded and then a number from 
1 to 100 is generated.

1.  The constructor is called.
2.  `System.nanoTime()` returns `522952139754313`.
3.  `522952139754313` modulo `7744144276301` gives us a start seed of `4094473531130`.
4.  The seed `4094473531130` * the multiplier 1103515245 overflows exactly 245 times. After all the 
    overflows, we get `-1138336207903069070`.
5.  We add our increment of `0xbeef` (48879) to obtain the new seed, `-1138336207903020191`.
6.  The `nextInt(int n)` method is called. After making an argument check, it calls `nextFloat`.
7.  `nextFloat` takes the first 29 bits of the seed. Our seed in binary is 
    `1111000000110011110100010100000000000100111110011010101101100001`, 
    so the first 29 bits are `11110000001100111101000101000`. As an integer that’s `503740968`.
8.  `503740968` divided by the max 29-bit float value of `5.36871012E8` gives us the return value 
    of `0.9382904`
9.  `nextInt` takes `nextFloat`’s return value of `0.9382904` and multiplies it by `n=100` to give 
    us `93.82904` which is converted to an integer giving us `93`.
10. We add 1 to get the result of `94`.

Be sure to check back later for a post on the topic of running tests for randomness on 
random number generators!

Edit: [Link to my article on statistical tests for random number generators][0]

[Link to my random number generator][1] (you’re free to use or modify it as you like!)

[0]: /2015/02/17/statistical-tests-for-random-number-generators.html
[1]: https://github.com/mgold95/random/blob/master/src/mgold/random/generators/LinearCongruentialRandom.java
