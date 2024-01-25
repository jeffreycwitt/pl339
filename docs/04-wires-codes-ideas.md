---
layout: lecture
title: "4: Wires, Codes, and New Ideas"
reading: ["SN4EQIZ5=>cc. 4-5"]
date: 2024-01-25
nav_order: 4
watchtime: 20
published: true
---

## Table of contents
{: .no_toc .text-delta } 
1. TOC 
{:toc}


# Review

Last time we focused on the transition from oral to literate culture, as well as the shift within literate culture from the handwritten to the print medium. 

A central goal in our observations is the way the shift in medium enabled new possibilities for intellectual thought, but also came with trade offs. 

In this lesson, we want to begin look at the beginnings of analogous communication shifts, namely the shift to electronic communication or communicating via wires, rather than paper or sound. 

But our goal here remains similar. We want to observe the way new technological possibilities (and their auxiliary effects on markets, commerce, and human behavior) pushed human beings to see things in new ways and to recognize real concepts that were never before seen -- precisely because the available media never pushed us to see them. 

More specifically, it is with the invention of the telegraph that we will see new a kind of circular and almost self-referential process: new media pushing us to ask new questions about what a "medium" is and forcing us to  generate a new concept of the true medium of communication.

# Babbage and the Jacquard Loom

Before turning to the telegraph, it's worth pausing and reflecting on why Gleick devotes a chapter to Charles Babbage and his difference machine. 

You can see a modern reproduction of the machine here. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/be1EM3gQkAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- this might be an even better video of the loom: https://youtu.be/x_ijmjx7Xys?si=o7z_hzugOMK-yAF2 -->

Gleick also noted that Babbage was fascinated with the Jacquard Loom, which you can see here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/MQzpLLhN0fY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div class="discussion" markdown="1">

{:.rquestion}
What do Babbage's "differential machine" (consider p. 95) and the Jacquard Loom (consider p. 109) have to contribute to the history of information that Gleick is telling?

{:.rquestion}
What kind of new thinking do they both require?

{:.rquestion}
How do they push us think about information, physical media, and messages differently?

</div>

# Telegraph and New Abstractions

As our reading in Gleick indicates, the telegraph was a momentous invention. The telegraph offered the ability to pass a message from one point to another without needing and human or a bird to carry it. Instead, it could travel on an electrical current. 

But there is an obvious difficulty here. Because the electrical current could neither be written on nor spoken to, it was not obvious how oral or literary messages could make use of this medium to send a message.

Finding a way to send a message required the kind of abstraction we talked about [last time](03-from-orality-to-literacy.html#example-1): an abstraction from a letter or word (written or spoken) to a higher order of abstraction -- to the level of logical difference, allowing letter, word, or sound to be "re-encoded" into any medium.

In the following video, consider the solution proposed by Gauss and Weber. Pay attention to how they abstracted from written or spoken letters. 

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/abq95BTwOGo?start=0&end=85" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="vda">discuss video anchor</p>
</div>

{:.question}
What characteristics of letters did they observe and then use to develop a new encoding system for the letter or word idea.

{:.answer}
One characteristic they noticed was the frequency of a given letters compared to frequency of other letters: in other words, a letter's statistical probability of appearance within a defined set of possibilities. It's probability was a distinguishing feature and help determined the encoding they would use for that letter. Higher probability letters got the shorter encodings, lower probability letters got the longer encodings. **Notice** that this probability is an identifying characteristic that abstracts from both the visual or oral representation of a letter and to which both the visual, aural, and electric encodings can be mapped.



Let's recall our triangle example.

<svg height="210" width="500">
  <polygon points="183.138438763306,172 16.8615612366939,172 100,28" style="fill:none;stroke:purple;stroke-width:3px" />
</svg>

I can draw a picture of a triangle. 

But do any of us want to say that this thing I drew is *actually* a triangle. If we look closely at what I've drawn, none of the lines are perfectly straight, none of the angles are perfectly drawn. If we used this triangle as the "platonic form" of all triangles, its imperfections would certainly destroy all geometry. 

So what then is this thing that I have drawn?

We might say, it is merely a visual approximation of the pure idea of a triangle that can never actually be drawn. The picture is there, not to draw my attention to it, but to point my attention to the perfect idea it illustrates, to a "higher level of abstraction". 

Oddly then, even though we usually think of an image when we see a triangle, a true triangle cannot be drawn and it cannot be defined by its appearance. 

What then is a triangle? A triangle is rather an 'idea' with certain characteristics and properties that distinguish (**differentiate**) it from a limited set of other geometric shapes. (3 sides, angles that add up to 180 degrees, etc.)


**In Sum** 

The decision of telegraph engineers to represent a letter in a new way, via needle position (or later morse code), required them to "abstract" from the visual appearance of letter, and think about what a letter is independent of its "material manifestation". 

And though they perhaps did not complete the thought process, they pushed us to begin thinking about letters and words as logical ideas, with a given set of properties: namely a position within a decision tree, or a statistical frequency occurring within a pre-defined set of possibilities. 

While this still may be confusing, let's simply mark this idea as critical and something we will return to when we learn about Claude Shannon and his new idea of "information".

# Telegraph: Metaphors, Analogies, and New Ideas

In addition to the engineering problems of the telegraph pushing us think more precisely about the nature of information, the very existence of the telegraph and its apparent magical qualities has required familiar words and concepts to take on new valences. 

It would be harder to find better evidence of the maxim that "the medium affects consciousness". 

The Harper's article on the telegraph from 1873 saw this clearly and offers and couple of amusing examples: 

{:#the-difficulty-of-forming}
> "The difficulty of forming a clear conception of the subject is increased by the fact that while we have to deal with novel and strange facts, we have also to use old words in novel and inconsistent senses." <span class="citation" data-reading="CPKMG234=>p. 336" data-annotation="https://hyp.is/NrHLjLpMEe6l-2NRiJwEow/s3.amazonaws.com/lum-faculty-jcwitt-public/pl399/1873_The_Telegraph.pdf"/>

In the case, much confusion centers around the word "send"

{:#not-long-since-a}
> Not long since a countryman came into a telegraph office in Bangor, Maine, with a message, and asked that it be sent immediately. The operator took the message as usual, put his instrument in communication with its destination, ticked off the signals upon the key, and then, according to the rule of the office, hung the message paper on the hook with others that had been previously sent, that at night they might all be filed for preservation. The man lounged around some time, evidently unsatisfied. "At last," says the narrator of the incident, "his patience was exhausted, and he belched out, 'Ain't you going to send that dispatch?' The operator politely informed him that he had sent it. 'No, yer ain't,' replied the indignant man; 'there it is now on the hook.'" <span class="citation" data-reading="CPKMG234=>p. 336" data-annotation="https://hyp.is/aUGUTLpMEe6kg2daz4MlUw/s3.amazonaws.com/lum-faculty-jcwitt-public/pl399/1873_The_Telegraph.pdf"/>

Here we operating with a notion of "send" that betrays the assumptions of the prior medium. To send a "message" tethered to its visual encoding requires that for the message to be sent/communicated, the medium must accompany it or the message will be lost. 

But the telegraph introduces a new wrinkle -- a new possibility. Because the message can be encoded at a higher level of abstraction, above sound, letter, or electricity, the message can be easily detached from the old medium and a strange kind of "copy" can be sent without sending the printed manifestation of that message.

The "country man" in the story clearly operates in the old world and thus is confused about how a message ("encoded" in paper and ink) that he still sees on the wall could simultaneously have already been sent. 

A similar example involving a German sauerkraut makes a similar point: 

{:#thus-the-german-papers}
> "Thus the German papers reported that at Carlsruhe, toward the close of the late war, an aged mother came to the telegraph office carrying a dish full of sauerkraut, which she desired to have telegraphed to Rastadt. Her son must receive the kraut by Sunday. The operator could not convince her that the telegraph was not capable of such a performance. " How could so many soldiers have been sent to France by telegraph" she asked, and finally departed grumbling." <span class="citation" data-reading="CPKMG234=>p. 336" data-annotation="https://hyp.is/hDDRMrpMEe6MpSfddfQxhg/s3.amazonaws.com/lum-faculty-jcwitt-public/pl399/1873_The_Telegraph.pdf"/>


<div class="discussion" markdown="1">

As the Harper's quotation notes, the introduction of a new technology is often accompanied by explanation through metaphors and analogy that try to make the unfamiliar less strange through the comparison to familiar technologies? 

The use of familiar concepts can, on the one hand lead to amusing and serious misunderstandings about the new technology. On the other hand, it can lead to the transformation of the former meaning of the concept, generating an entirely new idea in consciousness while preserving the old name.

{:.rquestion}
Can you think of example of this kind of confusion happening today?

{:.rquestion}
What are some of the metaphors that structure our experience with a modern computer? How are the meanings of this words changing as they get used in the context of a foreign medium?

</div>

# Telegraph: The Influence of Markets Surrounding Technologies 

It's important that when we think about the impact of a medium, we don't just think about the immediate material and technology, but also the wider contexts in which that technology is embedded, especially the kinds of economies in which operates and the kind of human behaviors that occur in that economy. 

We talked about this a little bit when considering [the book and its place in the book market and the nature of publishing](03-from-orality-to-literacy.html#social-and-political-world-of-the-print-medium). 

But this dynamic impacted the telegraph as well. 

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/abq95BTwOGo?start=540&stop=598" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="vda">discuss video anchor</p>
</div>

{:.question}
According to the video, how do the telegraph companies charge clients?

{:.answer}
Per letter

{:.question}
How do these market constraints push people/customers to engage in new kinds of behaviors?

{:.answer}
They created code books, as short hand for long messages. 

{:.question}
How did telegraph companies feel about these short cuts?

{:.answer}
Obviously, they didn't like it, because it cut down on their profits.

{:.question}
What could they do about it? Or what could they potentially do about it?

<div class="answer" markdown="1">

Despite not liking these short cuts, there was little they could do about as long as they continued to understand a message as composed of letters, as long as the quantity of a message was seen as directly related to the number of letters.

But of course the existence of code books proved that that this identification was wrong. The quantity of message (whatever that means) was not equal to the number of letters. 

Code books showed that the same message could be transmitted in 20 words or in just one word. 
</div>

**In sum**: 

The telegraph company needed a reliable/uniform way to measure how much information was being sent that was independent or abstracted from the number of letters. This must be a reliable and uniform quantity, whether a message is first written in 100 letters or 20 letters. 





<!-- cut material 
This abstraction is a new way of thinking about what a letter is. It is abstraction that rises above sound and image, and says a letter in actuality is neither a sound or an image, but something deeper, a logical idea, that can be illustrated in sound or image.

{:.question}
What challenge to communication does the telegraph present?

{:.answer}
Electrical pulse admits a much more restricted amount of difference, namely on or off. How can the rich variety of our mental lives be transmitted via so little difference and variation. 

Prior to the telegraph our experience of messages and communication technology has involved a vast diversity of symbols and signs. This **difference** and **diversity** has seemed necessary for a communication system adequate to the complexity of the ideas, thoughts, and emotions that we want to communicate.

{:.question}
How did the needle system and then morse code through abstraction find a simpler pattern standing behind the more diverse English alphabet

{:.answer}
They re-imagined the alphabet, not as a picture or visual image or a sound, but a decision, made in succession.

[kahn academy code example of decision tree could go here] 

I think it is easy to see this simple as a engineer achievement, a reconfiguring of stuff that amounts to the same. But I think it is really important to see that there is more going on here. 


---

Directory and File

(the computer asks us to think of Directory's that are containers into which we dump files. But, of course, there actually is not such container. 

A "directory" is just another file listing other files, and there's no reason would can't have lots of directories containing the same information, creating multiple hierarchies of organization.

But that's not our experience of a paper file system,  and thus the analogy places a limit on our understanding and therefore a limit on our conception of what is possible with a computer. (I hope that we can look at this again in more detail on Thursday)

Page

Webpages
Composition pages.

Question: How many people write in page view in Microsoft word. Why do we this? Our texts don't conform to pages. In fact, pages create arbitrary breaks in our conceptual thought.

Yet I often think about my writing, its length in terms of pages. The page is actually quite foreign and yet the look of the page somehow helps me comprehend the information better.

Is a webpage a page? It's not really a page at all. It's an assemblage of resources. But we tend to treat the page not the resources on the page as the things we cite. Why? Because this was all we really could cite in our experience with printed static books. 

While there are other ways, it is hard to see (because of our familiarity with print and the analogy of the page translated to the computer) how we could cite or refer to anything on the web other than as a webpage. 


-->