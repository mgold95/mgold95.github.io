---
layout: post
comments: true
title:  "The Odds of Pitching a Perfect Game"
date:   2014-11-16 22:54:21 -0500
---

<figure style="margin-bottom: 10px;">
    <img src="/assets/felix.jpg" />
    <figcaption>Felix Hernandex, Seattle Mariners Pitcher and the last pitcher to throw a perfect
        game (as of 2014)</figcaption>
</figure>
The perfect game: the greatest feat a baseball pitcher can accomplish. Over a quarter of a million 
MLB games have been played and yet only 23 perfect games have ever been thrown. As a statistics 
aficionado, I would like to model the probability that a great pitcher throws a perfect game in 
a single season.

Throwing a perfect game means allowing no walks or hits over the entire game. Conveniently, there 
is a baseball statistic that works almost perfectly. Walks and Hits per Inning Pitched, a.k.a. 
WHIP, can be simply multiplied by 9 to obtain the average number of walks and hits allowed by a 
pitcher per game. The average number of baserunners a pitcher allows can be modeled by the Poisson 
Distribution with $$\lambda = 9$$ multiplied by the pitcher’s WHIP. The Poisson Distribution says that with an average 
number of occurrences, $$\lambda$$, the probability of x successes (in this case walks & hits) in the 
interval is equal to 

$$ 
\begin{align}
\frac{\lambda^x * e^{-y}}{x!} 
\end{align}
$$

We need to find the probability that the 
pitcher allows no baserunners.

Earlier I said I would find the probability that a great pitcher throws a perfect game in a single 
season. Well, what exactly is a “great pitcher?” In 2014, Clayton Kershaw had an incredible year 
with a WHIP of only 0.86. That is the sort of thing you see from a great pitcher once in their 
career. We’re talking Bob Gibson or Sandy Koufax during their best season kind of stuff. For this 
calculation, let’s say our “great pitcher” has a WHIP of 0.85. Taking that WHIP of $$ 0.85 * 9 $$ gives 
us a $$ \lambda $$ of $$ 7.65 $$. Accordingly, the probability of this “great pitcher” allowing zero baserunners in 
any given game comes out to $$ (7.65)^0 * e^-7.65/0! = 0.000476044 $$. Wow! So the probability of a 
great pitcher allowing no batters to reach through 9 innings pitched is only about 0.05%.

<figure style="float: right; margin: 5px 0px 5px 10px; width: 260px">
    <img src="/assets/kershaw.jpg" />
    <figcaption>Clayton Kershaw, Los Angeles Dodgers Pitcher, Winner of the 2014 Cy Young Award and 2014
        NL MVP</figcaption>
</figure>
Okay, well what’s the probability that this “great pitcher” throws a perfect game over the span of 
a season then? To model that probability, we use the Binomial Distribution with a probability of 
success, p, equal to $$0.000476044$$. What about the number of trials? Well, in 2014, ten pitchers 
tied for most games started with 34, so let’s choose $$n=34$$. We want to find the probability that 
one or more perfect games are thrown which is equal to 1 minus the compliment (no perfect games 
thrown). Hence the probability of 1 or more perfect games being thrown is $$ 1-34!/(0!*34!) * 
0.000476044^0 * (1- 0.000476044)^{34} $$. If you throw all that into your calculator, you should get $$ 0.01606 $$.

**Therefore, the probability that a great pitcher throws a perfect game in his best season is only 
around 1.6% – a fine accomplishment indeed.**

Just to further prove the point that perfect games are a statistical wonder, let’s calculate the 
probability of this same great pitcher allowing just one base runner. The probability of allowing 
one base runner through nine innings is $$(7.65)^1 * e^-7.65/1! = 0.00364174$$. That looks pretty 
small (it’s still a pretty awesome feat). Small is relative though. $$0.00364174 / 0.000476044 = 7.65$$. 
In other words, it’s almost 8 times as likely for this great pitcher to throw a complete game 
allowing just one baserunner as it is for him to throw a perfect game! The probability allowing 
just one baserunner during at least one game of the season is 11.67%.

Time for the disclaimer and a fair warning for you fellow stats lovers; those probabilities are 
not necessarily accurate. In order to make use of these statistical models, we make some 
assumptions that aren’t necessarily valid. Basically, we assume the data set is “nice.” We assume 
it’s random, independent, and normally distributed. That may not be true. For example, if a 
pitcher walks two straight batters in a crucial situation, he may get a little flustered. That 
could then lead to him leaving a pitch out over the plate or walking another batter. In other 
words, baserunners are probably not independent of each other. Either way, this calculation 
probably provides a somewhat fair approximation and it certainly emphasizes the true difficulty in 
throwing a perfect game.
