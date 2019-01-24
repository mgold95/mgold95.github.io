---
layout: post
comments: true
title:  "Practical Online Security"
date:   2019-01-23 09:34:00 -0600
---

Online security can seem crazy difficult and overwhelming, but being diligent with
one's cybersecurity is important.
In general, the biggest cybersecurity risk is the part of the computer that lies
between the keyboard and the chair (hint: that's you!).
By putting forth a bit of continuous effort, you can avoid expensive and time-consuming
resolution of identity theft.

<figure style="float: center; margin: 10px 5px 10px 5px; width: 100%;">
    <img src="/assets/hacker.jpg" alt="hacker" style="width: 60%; margin: 5px auto 5px auto; display: block;" />
    <figcaption style="text-align: center;">What hackers look like, presumably</figcaption>
</figure>

An important thing to note is that security is a game of resources played between
attackers (those pesky hackers) and defenders (you). Have realistic expectations
for what you're defending against. If a government (Russia, NSA) want access to
your accounts, for most of us, it's almost guaranteed that they will be able to 
do so without too much effort. If you're defending against such an attack,
you will need to spend much more resources (use longer passwords, change them more
frequently, follow stricter security protocols, defend against more physical attacks
like [TEMPEST][1], etc.). If you are a notable person or celebrity, you also are
likely to face a more highly skilled adversary, so you should be more stringent with
cybersecurity. For most of us, we mostly need to protect against opportunistic criminals
searching for weak or reused passwords, smooth talkers trying to convince us that
they are Wells Fargo Customer Support, and folks who've bought our SSNs on the dark web
and plan on using it to get a payday loan.

In today's digital world, here's a few things I do to stay safe. _Just a note: I'm
suggesting a lot of products in this post. I'm not being paid to advertise any of
them; they just are the products that I personally use or have heard good things
about._

# Password Management

There's a few rules of passwords that you probably know, but don't really follow.
Here's a few of my recommendations for password management.

  * **DO** use a password manager to help you keep track of your passwords
  * **DO** use long, randomly generated passwords
  * **DO** change your passwords regularly
  * **DO NOT** reuse passwords for anything

Using a password manager makes it easy to follow many password guidelines. I personally
use [LastPass][2]. It is free and easy to use, which are important qualities for password
managers. It can be installed in your browser as an extension, where it will automatically
ask to save your passwords and can automatically fill in the saved passwords. It also is
available as an app for your phone, where it will automatically fill in passwords for
apps. LastPass can generate random, secure passwords for you by clicking the extension
icon and then clicking "generate secure password", or by going to their
[password generator website][3]. Long, random passwords are impossible to use normally,
but with a password manager it is easy to use a different long, random password for each
account you have on every website. Changing your passwords regularly is less important
when you have long, random passwords, but it should still be done occasionally. How often
it needs to happen depends a bit on the type of adversary you are defending against.
For most of us, about once a year is probably more than enough. 

<figure style="float: center; margin: 10px 5px 15px 5px; width: 100%;">
    <img src="/assets/lastpass.png" alt="LastPass" style="width: 85%; margin: 5px auto 5px auto; display: block;" />
    <figcaption style="text-align: center;">Use a password manager like LastPass</figcaption>
</figure>

In the [latest password recommendation guidelines from NIST][4], they state

> Verifiers SHOULD NOT require memorized secrets to be changed arbitrarily (e.g., periodically). 

This is because pretty much all the studies on this suggest that it leads to users choosing
bad passwords. If you work at a place that requires you to frequently change your password,
I fully support having one, strong password that you use continuously, and prefixing or suffixing
it with the month (e.g. if my base password was deLeYw4yce, using 05deLeYw4yce as my password if I
needed to change it in May; DO still change your base password periodically though, perhaps annually).
If your employer questions this, please direct them to the NIST password guidelines and tell them
to stop using bad practices. Tell them to use two-factor authentication while you're at it.

Helpful hint: LastPass can also perform a "security challenge" where it
will check for weak passwords, for password reuse, and for your information in any
known major breaches. 

Other password managers are available (such as [1Password][5] and the one built-in to Google Chrome), but I prefer
LastPass. Note: if you do choose to use LastPass, I recommend disabling your browser's built-in
password manager. For Google Chrome, this can be done by going to Settings, scrolling to
the bottom and clicking "Advanced", then going into "Manage Passwords" and toggling 
"Offer to save passwords" off.

At the end of the day though, the most important thing is to not reuse passwords. Why? Sometimes the
sites you use aren't so good at security. Sometimes they screw up so majorly that hackers get a dump of their
database use it to steal thousands of passwords. There's nothing you can do to stop something like that, and
if you reuse passwords, it doesn't just give them access to your [Adobe account][6], it gives them
access to everything. You can check if your password has been compromised in any known dumps at [haveibeenpwned.com][7].

  * **DO** use two-factor authentication, whenever possible

At the end of the day, passwords are fundamentally flawed as a means of authentication. They are based on
"something we know." If anyone else "knows" that shared secret, they can easily pretend to be us online.
Two-factor authentication attempts to improve the situation by adding a "something we have" means of
authenticating ourselves, in addition to the "something we know." In most cases, that usually means
that in order to login, you'll need to know your password and have your phone.

I *absolutely* recommend turning on two-factor authentication for any service that supports it, _especially_ services
like banks and email (because you can often recover other passwords through email). It's often easy to use!
With an app like Google Authenticator, you simply get a notification on your phone when you try to login, and click
"Approve."

Here's guidelines for how to enable 2FA for a few services:
* [Google][8]
* [Microsoft][9]
* [Facebook][10]
* [Twitter][11]

In addition to 2FA, you should have strong and unique passwords.

  * **DO** use a strong, random password for your computer and preferably a different strong, random password for your password manager
  * **DO** write down your master password and computer password in case you forget
  * **DO NOT** keep your written down password by your computer or in your wallet

<figure style="float: center; margin: 10px 5px 15px 5px; width: 100%;">
    <img src="/assets/password.jpg" alt="written down password" style="width: 85%; margin: 5px auto 5px auto; display: block;" />
    <figcaption style="text-align: center;">Write down your password and keep it somewhere safe</figcaption>
</figure>

Your password manager (and your email) accounts are single points of failure. Their passwords require extra care.
Please generate them with something like the [LastPass Password Generator][3] and **write them down**. That may
sound contrary to what you've been told your entire life. The security you give up by writing your password down
doesn't really apply to normal people. If you're some James Bond supervillain or something and regularly risk MI6
breaking into your flat to find your handily written-down password, then you probably shouldn't write it down.
If you're a boring normal person like me, you should. Still, you shouldn't, like, have a post-it with your password
stuck to your monitor along with a friendly note "here, please log-in to my bank account and take all my money."
Just write it on something, and put it away wherever you keep other important documents. If you
forget your password, it's there to remind you.

# Phishing Security

Phishing has emerged as probably the most successful "hacking" technique. The only real advice to give for phishing
is to be skeptical of everything and do your due diligence. 

  * **DO** Always be skeptical of requests for personal information

<figure style="float: center; margin: 10px 5px 15px 5px; width: 100%;">
    <img src="/assets/phish.jpg" alt="Phishing" style="width: 85%; margin: 5px auto 5px auto; display: block;" />
    <figcaption style="text-align: center;">Don't get phished; always be skeptical of requests for personal informaton</figcaption>
</figure>

Anytime an email or website asks for personal information which includes...

* passwords
* payment information
* street address
* phone number
* email
* SSN
* two-factor authentication codes
* bank information
* way more

...be very skeptical! Are you _absolutely_ sure that they are who they say they are? Even then, legitimate services
should _never_ ask for some information, like passwords and two-factor authentication codes. If they do, it is
absolutely a scam. When you are visiting websites, _especially_ after clicking links, make sure the URL is that
of the website you think it is. `microsoft.com4fpz.ru` is _not_ the same thing as `microsoft.com`. Using a password
manager can actually help with this. If your password manager doesn't prompt you to input a previously saved password
for that site, be very wary! It's likely the website is not what you think it is.

Be similarly skeptical when you're on the phone, _especially_ for in-bound calls, which takes me to my
next recommendation.

  * **DON'T** give _any_ information to an in-bound caller

Even if the Caller ID looks like your bank, or utility company, or whatever, it could be a scam. If you ever receive
an in-bound call asking about your account, politely inform the caller that for your security you will hang up and
call back. Then, call them back at the number shown on the back of your credit card, on your bill, or from some
other trusted source. Nobody likes waiting for a customer service rep, but listening to elevator music for 15 minutes
is better than getting your identity stolen. 

  * **DON'T** ever grant "remote desktop" permissions to tech support, or anyone else you don't know

A while back, I got a text from my mom saying she was on the phone with Microsoft tech support. Have a look at
our conversation.

<figure style="float: center; margin: 5px 5px 15px 5px; width: 100%;">
    <img src="/assets/mom_convo.png" alt="conversation with my mom" style="height:100vh; margin: 5px auto 5px auto; display: block;" />
    <figcaption style="text-align: center;">A text conversation with my mom</figcaption>
</figure>

As you can see, I immediately became very concerned. My dear mother had fallen for a scam, which, unfortunately,
Google enabled. You see, [until very recently][12], Google accepted ads from pretty much anyone. Money's money,
right? This allowed some of the more benign scammers to purchase ads for keywords like "Microsoft tech support", which
then got prominently displayed right at the top of the page, before the real results. My mom called up one of these
scammers and gave them remote access to her computer, which is _incredibly_ dangerous. This "tech support" fellow
was "fixing" made-up problems, and trying to convince my mom to pay for the services. Lucky for my mom, this is almost
a best-case scenario. Similar scams actually encrypt all the files on the computer so that they're inaccessible, and then
demand ransom payment to unencrypt them. The morale of the story here is please, do extra diligence to be sure who you're
talking to, and never give remote access to your computer.

# Payment Security

  * **DON'T** carry lots of cash
  * **DO** pay with credit cards or Apple/Android Pay

For obvious reasons, carrying lots of cash is more or less a bad idea. Cash payments also make it more difficult for you to
track your purchases (something you should do for your own financial well-being). Paying with credit cards or
Android/Apple Pay is generally regarded as being more secure than paying with debit cards. The reason is that with a credit
card, you can refuse to pay for fraudulent transactions. Essentially, the liability is on the credit card company (who will
hunt down the merchant to find out why they didn't properly verify your identity). Credit cards with the "chip" as well as
Apple/Android pay are more difficult payment methods to falsify. If your cards don't have the "chip", you can probably
request a new one from your bank.

  * **DON'T** use a PIN with meaning

Your PIN number is an important part of your bank account security. Treat it that way! One scam that happens these days
is that thieves will buy a slew of your information (debit card number, SSN) on the proverbial dark web and produce a
replica of your card, intending to go to the ATM and withdraw all your money. Fortunately for the good guys, PINs are
hard to come by on the dark web. They may try a few things like the last 4 digits of your phone number, the last 4
digits of your SSN, your birthday, etc. So, you *really* should not use any of those things as your PIN!!
[Here's a story about the extraordinary lengths some hackers will go to figure out your pin][13].

  * **DO** prefer ATMs in well-lit, preferably indoor areas, preferably with cameras and attendants
  * **DO** cover the keypad with your hand as you enter in your PIN

So this first one sort of goes along with "don't carry lots of cash". At the end of the day, some big brawny
dude with a tire iron can always pop out of a bush and threaten to hit you with said tire iron unless you
fork over the dough. For your own safety, you should use ATMs in well-lit, indoor areas. Indoor ATMs with
attendants are also much less likely to have been tampered with... which takes us to the second recommendation.
ATMs all over the place have been tampered with. A lot of the tamperings look really... normal! Basically,
when you use an ATM, there's a chance that your magnetic strip will be skimmed by a reader, and that your PIN
will be captured by a pinhole camera or a cover over the keypad. Maybe I wear my tin-foil hat out too much,
but I do generally give a light tug on the card reader and on the keypad, just in case. If anything comes off
with a light tug, it was probably put there by a hacker. Regardless, as a last line of defense, always cover
the keypad with your hand as you enter your PIN. Even if your debit card number is stolen, that may prevent
the thief from getting your PIN, without which they cannot do nearly as much damage.

<figure style="float: center; margin: 10px 5px 15px 5px; width: 100%;">
    <img src="/assets/atm.jpg" alt="ATM security" style="width: 85%; margin: 5px auto 5px auto; display: block;" />
    <figcaption style="text-align: center;">A few of the ways attackers steal information from ATMs;
    Source: First Financial Federal Credit Union</figcaption>
</figure>

# Identity Security

Identify security is a bit harder. This oligopoly of credit bureaus is charged with safekeeping
our personal information and basically does a horrible job of it (remember Equifax?). Essentially,
anyone with enough information about you, which is mostly available for purchase on the internet,
can do something like open a credit card in your name. A few actions can make it a bit harder on
the crooks. Unfortunately they also make your life a bit harder from time to time.

  * **DO** freeze your credit reports with the major bureaus
  * **DO** keep your reports frozen while you aren't applying for credit

You can freeze your credit accounts with the major bureaus (Equifax, TransUnion. Experian, Innovis).
When your credit report is frozen, any attempt to open a new account (bank account, loan, etc) will
be rejected. This will keep thieves from opening any new accounts in your name. However, if you need
to open a new account, you will need to unfreeze your reports temporarily. You can freeze your credit
for each bureau by following the below links.

  * [Equifax credit freeze][14]
  * [TransUnion credit freeze][15]
  * [Experian credit freeze][16]
  * [Innovis credit freeze][17]

When you freeze them, you will be given a PIN. Keep this PIN in a safe place (write it down and put it
in a safe or store it in your LastPass vault). You will need it to unfreeze your credit reports.

  * **DO** monitor your credit report

Companies like LifeLock monitor your credit report for you. It's often just as easy (and much cheaper)
to do it yourself. Keeping an app like [CreditKarma][18] on your phone will allow you to periodically
check your report and be notified of changes. You can then quickly know if an account has been opened
in your name that you didn't authorize.

  * **DO** opt out of preapproved offers

Junk mail is really darn annoying! It can also be a security threat. Thieves sometimes search through
trash to find preapproved offers to mail in and profit from. Even something like insurance can be
detrimental if a thief opens a policy in your name and files a fraudulent claim. [The FTC details
how you can opt-out of preapproved offers here.][19] I highly recommend it!

# Computer Security

Computer security is generally a game of "be skeptical of everything."

  * **DON'T** use bogus antivirus
  * **DO** use the built-in antivirus

So, back in the good ole days, Windows computers had awful security. These days, they've gotten a lot
better! Windows Defender antivirus is built-in to all the recent versions of Windows. Don't pay for
antivirus. Don't download and install sketchy free antivirus. Just use the antivirus that's built-in.
You can search "Windows Defender" in the start menu search box to find it and run a scan. 

  * **DO** keep your operating system up to date on your computer and phone

Windows, iOS, and Android updates are annoying... I know. However, once in a while, some neckbeard
with a PhD finds a vulnerability and, being the good-guy nerd he is, tells Microsoft or Apple or Google.
They patch the vulnerability and ship you an update. Just do it. It'll make your device more secure.

  * **DO** be very careful installing new software and apps -- make sure you trust it
  * **DON'T** grant permissions to software and apps that they don't need

This sort of goes without saying, but don't install random sketchy programs and apps. They could very
well be malware. More likely, they aren't malware (really bad guys), but they are mining your data
and selling it to advertising companies (kind of bad guys). Also, if there's no good reason
for an app to be able to do something like "Read text messages" or "use GPS", don't let it!

# Summary

Look. Security is hard. It's a lot of effort. It's worth it though. Putting a bit of time into
your security now means that you won't have to put hundreds of hours in later when your
the victim of a cyber crime.

Cheers and stay safe.

[1]: https://en.wikipedia.org/wiki/Tempest_(codename)
[2]: https://www.lastpass.com/
[3]: https://www.lastpass.com/password-generator
[4]: https://pages.nist.gov/800-63-3/sp800-63b.html
[5]: https://1password.com/
[6]: https://krebsonsecurity.com/2013/10/adobe-breach-impacted-at-least-38-million-users/
[7]: https://haveibeenpwned.com/
[8]: https://support.google.com/accounts/answer/185839
[9]: https://support.microsoft.com/en-us/help/12408/microsoft-account-how-to-use-two-step-verification
[10]: https://www.facebook.com/help/2FAC
[11]: https://help.twitter.com/en/managing-your-account/two-factor-authentication
[12]: http://fortune.com/2018/09/01/google-tech-support-scam/
[13]: https://www.usatoday.com/story/money/2018/09/27/phone-scams-atm-card-fraud-wells-fargo/1430261002/
[14]: https://www.equifax.com/personal/education/identity-theft/fraud-alert-security-freeze-credit-lock/
[15]: https://www.transunion.com/credit-freeze
[16]: https://www.experian.com/freeze/center.html
[17]: https://www.innovis.com/personal/securityFreeze
[18]: https://www.creditkarma.com/
[19]: https://www.consumer.ftc.gov/articles/0148-prescreened-credit-and-insurance-offers
