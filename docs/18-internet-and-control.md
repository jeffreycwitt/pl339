---
layout: lecture
title: "18: internet and control"
reading: ["PIHI9TSZ=>cc. 3-5"]
nav_order: 18
date: 2024-03-21
published: true
---

## Table of contents
{: .no_toc .text-delta } 
1. TOC 
{:toc}

# Review and Transition

Near the opening of our class we considered different modalities that accompany different communication types.

One of those modalities was identity or anonymity. 

As our reading today suggests, the Internet at its birth seemed to carry with it all kinds of new potentials (both positive and negative) because it enabled anonymous communication in ways never before thought possible. 

One conclusion drawn from this is that the Internet and communication via the Internet is "un-regulable". 

Lessig's burden in these early chapters is to show us that this assumption of "un-regulability" or "uncontrollability" is false. An "un-regulability" due to anonymity was due to design decisions made by humans pursuing certain goals. Accordingly, if new goals (or values) are raised to a higher priority, new design choices can be made. Thus Lessig predicts: if control becomes a dominating value, then the Internet -- far from being "uncontrollable" -- can and will become one of the most controllable communications spaces ever imagined. 

But despite the fact that the Internet can be regulated, the belief that the Internet is "un-regulable" leads to a kind of **public complacency**.  

Lessig wants to show us here that, whether or not the public/government becomes involved in this regulation, the Internet will nevertheless be regulated, namely by commerce. 

But how can commerce regulate, if private interests do not have the power to create laws.

Lessig show us that control is being implemented through private interest, not via laws, but via the code which makes the Internet run.

Thus (as we will see more clearly in chapters 6-8), if the public is going to have a say in the Internet we get (and the access to information we have), regular citizens, like you and me, are going to have to 1) take an interest in how the Internet "currently works", 2) separate that from any idea of how the internet must "necessarily work", and 3) be willing to imagine how the Internet could "work differently".

Our focus here (in chapters 3-5) will be to follow Lessig's tour in order to see clearly **how** the Internet is already being controlled through the participation of commercial interest and government influence over commercial enterprise.

# Internet: Uncontrollable or the Platform of Total Control?

Let's jump straight into chapter 4 and focus on a few key sections.

<div class="discussion" markdown="1">

To begin, we might ask: is anonymity a good thing or bad thing?

{:.rquestion}
How does anonymity encourage public discourse and deliberation?

{:.rquestion}
How does anonymity discourage public discourse?

</div>

Given the importance of identity, it seems useful to think about the ways non-digital communications media do and do not reveal identity, and the degree to which anonymity (or lack there of) affects the control of speech.

We might remember Judith Butler's claim that "No one 'goes for a walk' without there being something that supports a walk.

Similarly, we might say, no one "speaks" without there being an "infrastructure" or "platform" to make that speech possible.

Lessig introduces the categories of "identity, authentication, credential" to help us think about the ways the infrastructure affects identity, access, and control.

<div class="discussion" markdown="1">

Let's think about this with a real, non-virtual, example?

{:.rquestion}
In what way is a **physical park** a platform that enables communication? 

{:.rquestion}
How are the structures of "identity, authentication, credential" at work in the "Park" platform?

{:.rquestion}
What are some other examples of physical places that function as a communications platform? How do these platforms employ structures of "identity, authentication, credential" similarly or differently than a public park?

</div>

With this in the background let's turn to the Internet.

We need to consider first why the Internet seems quite different from a park, especially with respect to issues of "identity, authentication, credential".

At first glance, it seems like the Internet (in its core design) makes "identity, authentication, credential" difficult, making it possible to speak anonymously. 

But an important question here is whether this initial "anonymity" is somehow part of the "nature" of digital medium, such that that the Internet is "of necessity" anonymous. 

This is an important question because, if it is "necessary", then it can't be changed. Thus its logic does not reflect anyone's values; it just is the way it is by nature. But if is not "necessary", then the way it works now is a product of someone's choices that support their values. And if it is chosen, then it is possible to "choose" to change it to support a different set of values. This really raises the stakes for who is writing the code: private interest or public interest.
 
## Anonymous Design: TCP/IP. Overview of Packets

Understanding why the Internet was first experienced as "anonymous" requires some attention to the way the Internet works.

<div class="discussion" markdown="1">

As you read, be able to explain Lessig's basic description about how TCP/IP works and why it allows for anonymous speech (both in the identity of the speaker and the content that travels through the medium)

{:.rquestion}
Compare TCP/IP to a public park on the issues of "identity, authentication, and credential"? How are they similar? How are they different? 

{:.rquestion}
What are the design choices of TCP/IP that explain this difference?

</div>

## Increasing control

Understanding that TCP/IP is the result of design choices makes it clear that there is no "natural law" that says the Internet must be anonymous. This means that new coding decisions can change this feature of the Internet.

Let's look at some of the ways control and identity layers are being added to the Internet (and the possible pros and cons) that might occur as consequences.

### ISP

<div class="discussion" markdown="1">

{:.rquestion}
How do ISPs create a way to trace a request back to a source or identity?

{:.rquestion}
[Use this link to find your ip address](https://whatismyipaddress.com/). [Also try this link](https://www.whatismyip.com/my-ip-information/?iref=homegb). When you send a request, your ip address gets transmitted (so that a response can be set back). So how much can a website learn about you from your ip address?

{:.rquestion}
In what way is it possible to still use the Internet and avoid these revelations of identity.

</div>


### Cookies

In addition to Lessig's description of cookies as means of "identification", I offer a few further ideas and explanations here.

Concretely, how do advertisers know you across platforms?

Each site creates a cookie (e.g. a unique id that lives on your computer and corresponds to a database id with corresponding information). But access to cookies is normally restricted to the website (domain) that planted the cookie. And thus as you move around within the domain (e.g. amazon.com) of a website, it continues to know who you are.

But what about cross domains? Why is it that when I am on Facebook, it knows that I've been looking at lamps on Amazon?

Websites can join advertising networks and two websites can join the same "Ad Network".

Thus website A and website B, as a member of the ad network, both embed a little bit of another website (website C, the ad server) into their website allowing them to set their own cookie and harvest user data from the initial request to website C. Website C (the ad server) logs this request along with information about where the request originated (what site you were on, what you were looking at, etc) and stores this information in association with unique id of the cookie.

This is called a third party cookie. 

Now when you go to a website B, it also embeds part of website C. When the request to website C is made, the existing third party cookie (set by the visit to website A) is sent along with the new browsing behavior of the user on website B. Thus your behavior on site A and site B is associated with the same identifier.

Here's a great video from Vox on third party cookies.

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HFyaW50GFOs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="vda">Video Discuss Anchor</p>
</div>

You can view the cookies set in Chrome here by putting "chrome://settings/content/all" in your chrome url address bar.

And you can control whether you want Chrome to allow 3-party cookies by putting chrome://settings/cookies in your chrome url address bar.

### SSO

<div class="discussion" markdown="1">

{:.rquestion} 
How does Single Sign On make your Internet life easier. Where and when have you used it?

{:.rquestion}
How does this reveal your identity as you travel around the web and make requests?

</div>

# From code that regulates to regulating code.

As the theme of chapter 5 will become more pronounced in part 2, titled "regulation by code" (cc. 6-8), let me try to quickly capture the central message of chapter 5. 

If chapter 4 has shown us that "code" can regulate behavior, then chapter 5 attempts to show that those who seek to regulate behavior (e.g. government) will soon realize something important. 

They will quickly see that an effective way to regulate human behavior is to regulate **indirectly** by regulating the code that regulates behavior. 

<div class="discussion" markdown="1">

{:.rquestion}
What are some examples Lessig offers for why this "indirect regulation" might be more effective or cost efficient than "direct regulation"?

* Consider his discussion of the regulation of criminal behavior vs. regulating phone networks so that criminal behavior can be detected.
* Consider his discussion of encryption and how the government (through its influence over commerce) controls the use of encryption.

</div>

Let's connect this back to the main theme. If code that regulates imposes values, the indirect regulation through the regulation of code will equally impose values. **But because the imposition of value (via government control over code) is indirect, it will be harder to see.** Accordingly, it will be harder for "the people" to be a check on power of governments. How will the public be able to influence this kind of government regulation without the ability to see that it is happening?

On p. 79, Lessig concludes chapter 5 with a similar question: 

> "If code is law, then, as William Mitchell writes, "control of code is power"...How the code regulates, who the code writers are, and who controls the code writers--these are the question which the practice of justice must focus in the age of cyberspace."

Lessig will have much more to say on this is the next chapters, so let's mark this as something to keep an eye out for in the next section. 

# In Sum 

The central point in all of part 1 (chapter 3-5) is simply to prove that the Internet can be regulated by both commerce and government.

Further, commerce is already implementing this kind of regulation with urgency, but it is often hidden because it does not occur though publicly debated laws, but through the coding decisions of private actors. Likewise, when government does act, its actions are hidden to most people because does not directly regulate Internet behavior, but indirectly regulates the code that regulates Internet behavior.

Lessig then asks the central question (which I think captures the point of the whole section):

> "If commerce is going to define the emerging architectures of cyberspace, isn't the role of government to ensure that those public values that are not in commerce's interest are also built into the architecture." (Lessig, p. 77)

<div class="discussion" markdown="1">

{:.rquestion}
Do you think the general public has felt any urgency to be involved at this level? 

{:.rquestion}
If yes, can you point to some examples of this concern?

{:.rquestion}
If no, can you think of some reasons why this urgency has been lacking?

</div>

One possible answer to the last question stems from another central point of these chapters. 

To the uninitiated, the Internet can appear as kind of "black box" whose operations, limits, and possibilities are not the product of human decisions or private interest but of nature.

The general public don't usually fight nature or necessity because we consider this to be simply the way the world works and then we navigate our lives around these fixed and immoveable laws. 

But Lessig has tried to show us that the "fixed" or "necessary" nature of the Internet is an illusion. 

The Internet could in fact work many different ways. Thus the ways in which it does and does not work are the result of value decisions made by people. Our experience of it is therefore "political", and if we want the Internet to work for the public and not against it, then the public (elected officials, political activists, not just coders working for private companies) needs to be involved in shaping its development.

This plea for involvement is something that Lessig states at the beginning of chapter 3: 

> "But underlying everything in this book is a single normative plea: that all of us must learn at least enough to see that technology is plastic. It can be remade to do things differently. And that if there is a mistake that we who know too little about technology should make, it is the mistake of imagining technology to be too plastic, rather than not plastic enough. We should expect -- and demand -- that it can be made to reflect any set of values that we think important. The burden should be on the technologists to show us why that demand can't be met."

<div class="discussion" markdown="1">

{:.rquestion}
Do you think this is a reasonable demand? Given all the others things you have to learn in your life, Lessig is also asking you to learn about the tools you use to accomplish your main task.

{:.rquestion}
People sometimes say: "a technology is successful when we no longer are aware of it." Cars might be a good example. Many of us regularly use a car as tool to get our main tasks done, but how many of us really know anything about how a car works? Does the general public really need to know anything about how cars work? 

{:.rquestion}
If Lessig is correct about the need for the general public to understand how the Internet works, what then is different about cars and the Internet?

In a way, Loyola, by including a computer science course in the core has implicitly said that "computer literacy" is important, not just for computer scientists, but for general citizens no matter what theirs major is.

{:.rquestion}
If you've taken your CS course already, do you agree? Why? If not, how might you change the course in light of Lessig's plea and reflections in these chapters?

</div>

One final note: In my view, the scary proposition is that if we don't get involved (become sufficiently knowledgeable to influence how the Internet gets built), then, because the "medium affects consciousness" as McLuhan claimed, increasingly the way the Internet works "now" will begin to determine our values, rather than our values shaping the Internet.





