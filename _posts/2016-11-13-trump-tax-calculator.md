---
layout: post
title:  "Trump Tax Calculator"
date:   2016-11-13 21:25:00 -0500
---

Like it or not, Donald Trump is going to be our next president. One thing 
Trump promised all along was tax simplification and cuts for the middle
class. Earlier today, [the good folks at NPR outlined the details of Donald
Trump's tax plan](http://www.npr.org/2016/11/13/501739277/who-benefits-from-donald-trumps-tax-plan){:target="_blank"}.

My first response of course was to find out how it might affect me. After
doing the math, I was surprised to learn that I'll likely be paying about
the same amount of taxes under Trump's plan. Basically, Trump wants to
reduce the number of tax brackets from seven down to three. The top bracket
will be taxed at 33% versus 40%. Under Trump's plan, most people will 
likely end up with an effective tax rate that's a percent or two lower,
but as NPR points out, those who actually will benefit the most are top
earners.

I created a handy calculator for you to see how your tax rates could be
affected. Simply select your filing status and input your total taxable
income (don't forget to add your bonus). Also, don't forget to subtract
your [standard deduction](https://www.irs.gov/publications/p17/ch20.html#en_US_2015_publink100017022){:target="_blank"}
(usually $6,300 if you're single or $12,600
if you're married) from your taxable income. After that, the calculator will do all the rest of the work
for you! 

<link href="/css/bootstrap.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/trump.js"></script>
<div style="border: 1px solid gray; border-radius: 18px; padding: 10px;">
<h3 style="margin: 0px;">Michael's Tax Comparison Calculator</h3>
<hr/>
<div class="btn-group" data-toggle="buttons" style="margin: 10px 0px 10px 0px;">
    <label class="btn btn-primary active">
        <input type="radio" name="filing" onchange="calcTaxes()" value="1" autocomplete="off" checked> Single
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="filing" onchange="calcTaxes()" value="2" autocomplete="off"> Married
    </label>
    <label class="btn btn-primary">
        <input type="radio" name="filing" onchange="calcTaxes()" value="3" autocomplete="off"> Head of Household
    </label>
</div>
<div class="input-group">
    <span class="input-group-addon">$</span>
    <input type="number" id="income" onkeyup="calcTaxes()" style="width: 93%;" class="form-control" min="0" step="0.01" placeholder="total taxable income">
</div>
<h4 style="margin: 10px 0px 10px 0px;">Right now, you're taxed at about <span id="rate1" style="color: #0000ff;">0.0%</span> and pay about 
<span id="amt1" style="color: #0000ff;">$0</span>.</h4>
<h4 style="margin: 10px 0px 5px 0px;">Under Trump's plan, you'd be taxed at about <span id="rate2" style="color: #0000ff;">0.0%</span> and pay about 
<span id="amt2" style="color: #0000ff;">$0</span>.</h4>
</div>
