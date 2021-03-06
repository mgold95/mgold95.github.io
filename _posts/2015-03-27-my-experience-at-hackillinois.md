---
layout: post
comments: true
title:  "My Experience at HackIllinois"
date:   2015-03-27 22:54:21 -0500
---

# What is HackIllinois?

HackIllinois is the University of Illinois’ annual hackathon.  As a University of Illinois student 
who had never attended a hackathon, I thought it would be a cool experience. It was.

# Arrival

![HackIllinois -- Siebel Center](/assets/img1_web.jpg){:style="float: right; margin: 5px 0px 5px 10px;"}
It’s 5:32. I just finish a nice small meal at my dorm. My teammates Noah and Mitchell call. They 
have arrived to pick me up. I get in the car and we’re off to Siebel Center. We walk in and see the 
registration table. The volunteers give us the standard hackathon kit: nametags, a barcode for 
meals, a t-shirt, and some cool stickers. I then make my way to the atrium.

There, I see a mass of people standing around and talking to various companies. Noah then comes to 
a staunch realization: he hadn’t finished his ECE-391 MP. He excuses himself and rushes to a room 
hurriedly finish the MP: a perfect pregame of sorts for the hackathon.

Mitchell and I walk around the Siebel atrium. We stop and say hello to one of my bosses, Ken. After 
a firm handshake, Ken gives us well wishes and we are on our way to speak with various other 
companies. After speaking with a particularly socially awkward recruiter, we decide we’ve had 
enough. On to Location B.

As we crept down a hallway towards the Siebel exit, from the corner of my eye I see a curious 
thing. One of the classrooms is labeled “sleeping room.” I peer inside. To my delight, I see a 
room laden with air mattresses. I leap onto a stack of mattresses four high and smile with a 
childish delight.

We step into the night and begin a brisk walk through the coldness of an Illinois winter eve’. 
Mitchell comments, “how convenient; they trucked in snow to enhance the arctic theme.” HackIllinois 
indeed has an arctic theme this year and the campus conveniently received nearly a foot of snow over 
the past week. Finally, we arrive at the ECE Building. A rush of warm air begins to revive the 
feeling in my cheeks. The building atrium is bustling with activity. Mitchell points to a sign that 
reads, “Swag bags upstairs.” We give each other a look of understanding and ascend the staircase. 
After a glance at my watch, I see it is time for the opening ceremony.

![HackIllinois - ECE Building](/assets/img2_web.jpg)

The opening ceremony proceeded as one may expect. The companies explain their particular challenge 
and the prizes they were to give out at the closing ceremony. We then rush back to ECEB for the 
8:30 dinner. After dinner, we head back to the apartment to relax a little before the hackathon 
begins.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">And it&#39;s time! Tune into the opening ceremony at <a href="http://t.co/kAB9Lnozs4">http://t.co/kAB9Lnozs4</a>! <a href="https://twitter.com/hashtag/hackillinois?src=hash">#hackillinois</a></p>&mdash; HackIllinois (@HackIllinois) <a href="https://twitter.com/HackIllinois/status/571476135189606401">February 28, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# Let the Hacking Begin

10:00 rolls around. It’s officially time for the hacking to start. Noah, Mitchell, and I really 
aren’t the best prepared. We start shooting around ideas for what to make. I say, “Maybe we could 
make a markdown editor with LaTeX support!” Noah suggests, “Let’s make a TODO list with a social 
aspect so you’re accountable to friends.” Finally we find our golden idea! Imagine this: you go out 
to the bars some Friday night. While you’re there, you have all sorts of fun. Then, closing time 
rolls around. You can’t find your friends. It’s 2:00am and you have to walk home all alone. That’s 
not exactly the safest thing to do. Our idea is to create an app to facilitate contacting the police 
in case something happens in a situation like that. The design we came up with was to have a button 
you hold down. After your finger comes off, the phone locks and a countdown starts after which the 
police are contacted. Noah points out a problem: “What if you get a call or want to send a text?” 
As engineers, particularly computer engineers, we’re trained to think about the edge cases. The 
three of us quickly brainstorm. I say, “We could have a ‘shake mode’ that can be activated to allow 
you to take your finger off.” We all decide that my solution is a good one. We all begin to install 
Android Studio so we’re ready to go. I create a public git repository on github. Noah makes the 
project in Android Studio. We finally are ready to begin. I glance down at my watch. It is nearly 
2:00am. I tell everyone to get a good night’s sleep and we’ll get started tomorrow.

# Day 2 – The Workhorse Day

My alarm rings. I glance at my phone. 9:00am. I jump out of bed and into the shower. After throwing 
on my new HackIllinois T-shirt, I head to my dorm’s cafeteria and eat some breakfast. I open my 
laptap and get started in Android Studio. Yesterday, we had decided that since I had a fair amount 
of front-end experience from my internship, I would start out doing the front end of our app.

None of us have any prior Android experience and I am pretty clueless as to what sort of design 
patterns are standard. I grab a legal pad and begin sketching out what various interfaces in the 
app should look like. I decided to model the UI on the locked UI of my phone, the Moto X. When 
receiving a notification, the monochrome icon appears white within a circle. You can then press and 
hold the circle to view a little more information about the notification. You can also slide up to 
other buttons and release. After sketching the UI screens, I get  to work creating them. I research 
Android layouts and decide that a linear layout would work ideally for our app. After messing 
around with the activity XML for five different activities, I finally get a text from Noah. He and 
Mitchell are finally awake and ready to get to work. They pick me up and we drive to Siebel Center. 
We arrive at Siebel Center just in time for food.

After making quick work of the food, we head to the third floor in search of a place to work. Noah 
and I spot some unoccupied benches in a spacious corner of the hallway with golden rays of sunlight 
shining through the window. We quickly decide it’s the perfect spot. The views are created. I move 
on to my next task: handling touch events. I add a touch listener and open the Android emulator. 
After what felt like an eternity but in reality was something like ten minutes, the Android studio 
finally opens. I monitor the console as it prints off various events results from my interaction 
with the emulator. Once I make sense of it all, I add a handler that should transition from the 
first activity to the next.

I run the app and test it out. Crash! After Googling the error message and making a minor 
correction, I give it another go. Crash! I grimace a little and again, Google the error. “This 
time, it’ll work for sure,” I think to myself. I then realize with dismay that I accidentally 
closed the emulator. I wait patiently as the simulator boots. I test the transition between 
activities and…… it works! Sort of. It’s slow as hell. After thinking about it for a minute I come 
to a harsh realization: the activity simply takes too long to open to make the UI transition 
smooth. I begin running through solutions in my head. I could preload all the activites. Maybe 
possible next state activities for any given activity. I then come up with the best solution. All 
of the activities have more or less the same components. I could reuse the same activity and simply 
have a method to reword the labels, change the icon on buttons, change the spacing between 
components, et cetera. Painfully, I delete three of the five activities I had spent so long 
creating (I decide the lock screen should still have its own activity). I make the necessary method 
to transition between UI views and continue working on transitions and move on to other necessary 
components.

<figure style="width: 620px">
    <a href="/assets/android-studio.png"><img src="/assets/android-studio.png" /></a>
    <figcaption>Working in Android Studio</figcaption>
</figure>

Noah mumbles something about making an iPhone app. He says, “I’m going to go talk to the Apple 
guys.” I decide to go along with him. We step into the “Apple Lounge.” The Apple Lounge is 
everything you might imagine would be. There are bean bag chairs, hipster programmer dudes in Apple 
tees, and a few groupie hackers sitting around asking for help every once in a while. Apple had 
said at the Opening Ceremony that they had a few loaner Macbooks available. We ask one of the dude 
programmers about them. He replies, “Yeah… we ran out of those yesterday.” Noah then asks about the 
possibility of setting up a virtual machine. Programmer dude says, “I mean, dude, it’s not really a 
trivial thing to do. Setting up a VM could be a hackathon project of its own.” Another programmer 
dude jumps into the conversation and adds, “Yeah it’s definitely not officially supported. We work 
really closely with Intel to make sure OS X can only be run on our hardware.” Noah replies, “I 
think I’d still like to try. Would it be legal and if I get it working could I get a developer 
license?” Apple dude says something along the lines of, “I mean, like I said… it’s not officially 
supported. But if you get it working, stop on by and we’ll be impressed. We might be able to do 
something for you.” It turns out Apple dude was right. After a considerable amount of effort, Noah 
was unable to setup a Macintosh VM on his linux machine.

We head back to our “office” in the hallway. After a considerable amount of time spent on various 
user interface stuff, I finally exclaim, “check this out!” I fire up the emulator and show the team 
the fruits of my labor. The UI responds fluidly. Then, I try the latest feature I added. Crash! 
Noah and Mitchell literally laugh out loud. I guess my confidence was a little unwarranted. I tweak 
a line of code, open the app and exclaim, “I’d bet on it this time!” After returning to the same 
feature, a different crash occurs. I scowl. I finally fix it and lacking the previous confidence, I 
test it myself. It works.

Our backs start to ache from sitting with awful posture on the bench. We decide to move. Mitchell 
goes ahead to scout out locations. He comes back with a recon report. We move out. On the way to 
our new location, we notice that IMO has abandoned their lounge. It’s the perfect place. We setup 
shop. As dinnertime nears, Noah and Mitchell growl something about being hungry. I tell them that 
I’ll continue working and watch our stuff if they’ll go and get food. They agree. Around half an 
hour later, they return, Panda Express in hand. I continue working with a fork in my left fingers 
and keys in my right. I then merge in some of Noah’s work into master and am astounded at how far 
our app has come. The user interface is complete. I glance at my watch. 7:42pm. Noah is also 
astounded at our progress. He makes some comment about finishing around ten and going out after. If 
only.

I begin work on the next feature: shake mode. I read the Android documentation of the 
accelerometer. The accelerometer event gives the acceleration in the x, y, and z directions. I pull 
out my legal pad and start scratching out an algorithm I think should work. After coding it up, I 
realize that I’ll need to test on an actual device. I enable developer options on my phone and plug 
it into the computer. The Android Studio console prints a message saying the app is being 
installed. The app fires up on my phone and my heart starts pounding. My excitement is 
uncontrollable. It is the first time I see the app actually running on my phone. I call everyone 
over and we check it out. I then put some print statements in the shake event so I can see what 
type of acceleration typical shaking might give. I do a little math, and adjust my algorithm’s 
sensitivity. I then give shake mode its first test. Activation is a little too sporadic for my 
liking. I increase the sensitivity to my satisfaction. I move on to a key part of the UI: icons. 
The icons were simply white square placeholders. I opened GIMP and began working on the icons. I 
complete them just before midnight.

A U of I police offer makes his rounds past our workspace. I ask him if he’d like to check out our 
app. We explain what it does and I then hand him my phone to test out the prototype. He is 
impressed and thinks it’s a great idea. The officer explains to us how very often in emergency 
situations, individuals don’t have enough time to call 911. He says our app would be a great thing 
and could really help a lot of people. He collects our names, phone numbers, and email addresses 
and promises to forward information of our apps to some of his colleagues. Sure enough, we soon 
receive an email addressed to some of his colleagues and CC’d to us. I move on to adding the phone 
call method. Noah is working on background services to prevent things like closing of the app in 
lock mode. I get calling working and begin testing the app like crazy. We use Noah’s number as our 
placeholder 911. His call log soon gets to be pretty impressive. Noah continues working on the 
service while Mitchell and I quickly start trying to improve things that need improving and fix 
bugs that need patching.

I glance at my watch. Nearly 4:00am. We select a commit that we decide is acceptable for 
presentation. Mitchell drafts a submission description. Noah and I work on filming a short video 
to demonstrate the use of the app. Certainly, the app needs a lot of work to be market-ready. 
Despite that, we decide that it is ready for presentation. We begin filming the video. Take one: 
the app crashes. We hotfix an overlooked issue. Take two: the app sporadically calls when it 
shouldn’t. We fix that too. Take three: I mess up my demonstration. Finally around take five or 
six the video is acceptable. I build a release version of the app and submit our app for the 
challenge. I submit us for Dropbox’s Most Dropboxy, Yelp’s Best Local Focus, and Goldman Sachs’ 
Most Unconventional Tech Choices (even though it didn’t really apply that much). I glance at my 
watch again. The hour hand had just crossed five.

<iframe width="420" height="315" src="https://www.youtube.com/embed/Jg5sVecqFsM" frameborder="0" allowfullscreen></iframe>

Meanwhile, all hell was letting loose outside. More snow fell than we saw the entire rest of 
winter. I step outside. My eyes amaze me. There are snowdrifts taller than me. I wade through 
snow up to my shin trying to follow in the deep footprints of an earlier wanderer. Finally, we 
reach Mitchell’s car. After sweeping off the snow and scraping off the ice, Mitchell starts his 
car. Astonishingly, the car is able to move on its own although it certainly was no small effort. 
A short drive later and I am in my bed. I set my alarm for eleven and close my eyes.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Some students drew us a great picture. We&#39;re expecting 4-6 more inches of snow tonight! Have fun but stay warm. <a href="http://t.co/cb4vbHA2Ar">pic.twitter.com/cb4vbHA2Ar</a></p>&mdash; HackIllinois (@HackIllinois) <a href="https://twitter.com/HackIllinois/status/571707756517969920">February 28, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# Day 3: Demos and Judging

Eleven o’clock rolls around. I jump in the shower, throw on a nice button up shirt, and head 
downstairs. I check my phone. I have a text from Mitchell saying that they’ll be a little late and 
arrive around 12:15. I wander through the snow for the Union. As I step inside, I see Noah. We grab 
some quick food and head to our table to set up our demo. I open my laptop to Android Studio and 
load the app onto my phone.

12:30 quickly arrives. A guy in a Dropbox tee stops by and asks if we are Stroll Safe. We say yes 
and give him the pitch of our app. I then hand him my phone for him to test it out. After a gentle 
shake, the app dials Noah. Dropbox guy, also known as David, comments, “It’s a little sensitive but 
I like the idea.” He then moves on. Around 1:00, a HackIllinois judge stops by. We do the usual: 
give him the pitch, let him demo the app. He seems interested and even asks a few questions. The 
next two hours slowly tick by as various adults and other hackers stop by to ask what we had made.

Just before the winners are to be announced, David from Dropbox comes by again. We strike up a 
conversation with him and ask which projects he liked. He lists a few projects and ideas he thought 
were cool. He then surprises all three of us: he asks for us to demo our app again. I open the app 
and explain its functionality. He thanks us and immediately after, a HackIllinois staff member 
takes the podium to announce the winners. The finalists for the software and hardware hacks are 
announced. None of us are surprised when we don’t make the list. The finalists give one final pitch 
of their projects to the entire crowd. Some of the ideas are really cool and I really would love to 
see them go somewhere. David from Dropbox excuses himself and heads off.

While the judges decide which of the finalists should win, the sponsor prizes are announced. A 
HackIllinois staffer starts by announcing for all the sponsors who couldn’t be there. Next, the 
sponsors that were there announced their prizes one by one. David steps up to the podium. He 
starts off with an honorable mention. Next, he announces that the winner of the Most Dropboxy is….. 
Stroll Safe!!!! We are ecstatic. From day one of the hackathon, our intention was pretty much to 
see what one was like – we had no idea we actually had any sort of shot at winning a prize.

We hurry over to the photobooth. David and his Dropbox compadre come over and congratulate us. We 
respond with the most sincere of thank yous. After taking a picture, we converse a while with the 
Dropbox guys. They give us our prizes: Raspberry Pi kits. As someone who had never owned a 
Raspberry Pi but was looking to buy one soon, I was very grateful. David asks us what our plans 
were for the night and invites us all to dinner. We accept. After exchanging handshakes and giving 
another set of thank yous, we make our way back to our table and head for home giggling like 
children.

![HackIllinois DropBox](/assets/dropbox-hackillinois.jpg)

# Conclusion

Overall, HackIllinois was a wonderful experience. I honestly went in a little bitter about it 
consuming my entire weekend. I left very satisfied with everything my teammates and I had created. 
I have grown into a firm believer in hackathons. They may not be the greatest place to develop 
quality, well-written code, however, they inspire innovation. They are a great way to come up with 
an idea and rapidly put vision to that idea.
