---
layout: lecture
title: "5: Information as Entropy"
reading: ["SN4EQIZ5=>cc. 6-7"]
date: 2024-01-30
nav_order: 5
published: true
---

{% include math.html %}

## Table of contents
{: .no_toc .text-delta } 
1. TOC 
{:toc}

# Review and Introduction 

Claude Shannon is famous for his article titled "A mathematical theory of communication" in which he came up with the idea of "information" as **entropy**. 

Concretely, Shannon was faced with the challenge of trying to think of messages or information in the most compressed form possible without loss. 

For example, he asked: what is the minimal amount of information required to transmit a voice recording so that the sound could be re-produced? 

A voice recording is not actually sound, but the re-encoding of information from one form of difference into a new form of difference, such that it can be re-encoded back into sound waves at the end of transmission. Shannon's question is: what is the minimum amount of difference required in order to successfully complete this re-encoding back into sound waves.

In the same way, the "storage" of a pdf on your hard drive (containing a visually encoded page layout), is not actually the saving of an image or "look". It is the storage of something called "information" in such a way that the "look" you experienced when you saved the file can be "reproduced" or "reconstructed" when you open it again. What you are saving is a really a series of differences that when given to a particular application (your pdf viewer) a visual presentation can be re-assembled. (Think about how similar this is to the Jacquard loom.)

In order for this to be possible, there needs to be an idea of a "quantifiable information" that is separate from something we can hear or see, but precise enough to be machine actionable and for the machine to be able to reconstruct a particular view or message (without having to understand the meaning of what you intend to display and present).

[We also saw](04-wires-code-ideas.html) that this need for an idea of "quantifiable information" divorced from sounds or visual letters arose in the telegraph age as companies and customers sought a way to fairly or consistently charge for the transmissions of messages. 

Thus a new kind of question emerges, how much information does a message contain? (Just as we might have previously asked, how many letters or sounds does a message contain). And in that very question, we see a notion of information that has been separated from the message, meaning or semantics. Instead we see "information" spoken of as analogous to the media of letters or sounds. But while we are familiar with letters and sounds as medium, it less clear just what "information" is, much less how to quantify it.

# Information as Entropy

Shannon's breakthrough is related to an insight we started to see in our [earlier reading of Ong](03-from-orality-to-literacy.html#to-make-yourself-clear).

Ong noted that in verbal communications there are hundreds of "communicative redundancies" present in our verbal communication in order to assure the error-free transmission of the message. 

{:#to-make-yourself-clear}
> "To make yourself clear without gesture, without facial expression, without intonation, without a real hearer, you have to foresee circumspectly all possible meanings of a statement may have for a possible reader in any possible situation, and you have to make your language work so as to come clear all by itself, with no existential context. The need for this exquisite circumspection makes writing the agonizing work it commonly is." <span class="citation" data-reading="MKVLEEA6=>p. 101" data-annotation="https://hyp.is/C00AmriREe6pLeetXEXntw/s3.amazonaws.com/lum-faculty-jcwitt-public/pl399/Ong_2002_Writing_Restructures_Consciousness,_chapter_4.pdf"/>

Shannon noticed the same kinds of redundancies in our visual encoding of information through the use of letters. 

<!-- link to his paper: Markov Chains?-->

For example, he showed that there are statistical patterns in our language that create lower and higher probabilities for the appearance of a given word or letter, based on the words or letters that precede (probabilities that change or depend on what came before are called **dependent variables**).

For example, if I write "q", there is a high probability that the next letter is "u", and a very low probability that the next letter will be a consonant. 

Because of this high level of predictability, Shannon thinks I need less information to communicate this message "qu" than I would for example "qk" even though in our written encoding they have the same number of letters.

For example, I could transmit "q" and tell a receiver to always add a "u" unless "q" is followed by a "/". In rare occasions an extra "/" will have to be transmitted, but all "qu" transmissions will have been dramatically reduced in size.

His idea was that if we could identify the minimal amount of information in the message apart from these redundancies, we would have identified the essence of the "information" abstracted from its visual or linguistic encoding.

In terms of the above example, Shannon wants us to see that "qu", despite its visual appearances, points to **one** piece of information (within a pre-defined set of possibilities), even though it is typically visually represented in a way that looks like two. Neither "q" or "u" or even "qu" is the information. Rather the pattern is the logical profile that is pointed at by the visual symbol (just as a visual triangle points at the logical properties that constitute an ideal triangle). This logical profile is a describable statistical frequency within the context of the other symbols in the pre-defined set.

At the heart of his theory was the idea that information was fundamentally the amount of **uncertainty** or **predictability** in a system, or what he called "entropy" (borrowing the term usually reserved for the tendency in thermodynamics of energy to dissolve from something organized and structured to something unstructured). That "u" follows "q" is highly predictable, therefore there is less entropy and less information. That "k" follows "q" is less predictable and contains more entropy and therefore contains more information. 

Let's watch a short video that tries to explain this:

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/2s3aJfRr9gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<span class="vda"/>
</div>

For most of us I think this leads to a fairly confusing way of thinking about information, as evidenced by the [comment thread](https://www.khanacademy.org/computing/computer-science/informationtheory/moderninfotheory/v/information-entropy) of this video: 

Question from Daniel Hollas: 

> This definition of information seems somehow unintuitive to me. For example, if I wrote a book, in which I would just randomly select letters from the alphabet, would it contain more information than the "normal" books with words in it? Or did I miss something?

Answer from Nick Corrado:

> You've got it right. Indeed, it is unintuitive, but consider this. If you compare a normal English text with another text of the same length, but with all the vowels (which are often redundant) taken out, the second text surely has more information. After all, the second text is the same length, but it's missing letters that are just "taking up space," and it's doing something with that space instead. A random selection of letters definitely has the highest information: you can't reduce any of it by removing redundancy the way you can in English by removing all the vowels.

> If these examples seem a little abstract, just consider what we do in newspaper and on the Internet every day: we remove letters and even whole words (articles like "the" don't convey much information) to say more in the same space, or the same in less space. A newspaper doesn't have less information by being denser: on the contrary, it can fit more!

In this helpful reply, I think we can see clearly how information is being separated from the content or message, and thus is becoming a medium that has the potential to carry a message. The book without vowels has more information because it has the potential to carry more messaging content than the book without vowels. 

A book with lots of random letters in it might not **actually** carry a meaningful message. However, this doesn't change the fact that, because of the high level of entropy (or we could even say the high level of unpredictable difference), it certainly has the **potential** to carry more content than a book with less entropy (or lots of redundancies and less difference).

Let's go over this again with two small examples and then we can think about an application of this kind of thinking to the encoding and display of texts.

## Example 1: 

All encoding systems have a defined set of available symbols. As such, Shannon wants us to see that the writing of a letter, word, or even a phrase or sentence is not the **production** of something new and unique, but rather a **choice** among a finite set of options (finite, even though the number of options may still be very large).

For example Gleick says: 

> "the message was seen as a choice" (Gleick p. 218)

and 

> "the point was to represent a message as the outcome of a process that generated events [choices] with discrete probabilities" (Gleick, p. 228)

In this regard let's focus on the "choice" of a particular letter. But Shannon would want you to recognize that you are making as similar choice from a pre-defined set when you choose to use a word or phrase (but in the case the size of the set is much larger than 26)

Let's suppose we have an alphabet of 32 characters, and the letter z is number 32. 

I could communicate this as a "picture of the letter z", but this would require hundreds of pieces of information within a very large set of spatial information. Think of the range possible visual positions (x ad y coordinates), and the various "look" of "z" in different fonts.

That fact that despite all this visual variation, we can still recognize the same letter "z" is evidence to Shannon that there is something more essential about "Z" than how it looks. 

What is important is its statistical relationship to the other characters in the 32-character set.

He says: the amount of information a system needs to communicate it symbols and to **differentiate** them from one another can be calculated as follows:

Take the `Sum` of the `probability` of the available symbols `times` the `log2` of the `inverse of that probability`. 

$$H = -\sum_{i}^{n} p_i \log_2 p_i$$

In the above equation: 

* $$H$$ is the symbol for Information
* $$n$$ is the number of symbols in the set
* $$i$$ is a given symbol within that set
* $$p_i$$ is the probability of a given symbol

So, for a 32 symbol set, where the probability of each symbol is 1/32, the uncertainty or entropy of a message composed of a single symbol would be calculated as follows.

$$H = -\sum_{i=1}^{n=32} 1/32 * \log_2 1/32$$

$$H = -\sum_{i=1}^{n=32}1/32 * - 5 = 0.15625 * 32 = 5$$

So H or Information = 5

Why 5?

Because it only takes me on average five questions/choices (and never more than 5) to identify the letter in question.

In terms of logical "difference" we could think of this 5 as a measure of "difference". To communicate a set of 32 requires 5 differences. Shannon referred to these difference as "bits".

Calling these difference "bits" helps us abstract from any particular physical medium and thereby helps us recognize that these bits can be "encoded" or realized in any physical material admits of difference. Thus 5 stones would work, 5 sticks would work, and of course 5 electrical impulses. The letter "a" might be encoded with 4 absences of stone, stick or impulse and 1 presence as 00001 and 'z' could be encoded as the presence of 5 stones, sticks, or impulses as 11111.

What is critical here is not so much the math but the reduction of information to a new essence. 

Shannon asks us to consider: what do we really care about? Do we care about how a "Z" looks, or do we care about something more fundamental, something that the "look" of the Z is pointing to? 

If the latter, then we should be thinking about how to encode this information independent of how it "looks" in one medium, so that it can be re-encoded in any medium where at least 5 discernible differences can be found.

## Example 2: 

Let's say we are watching a coin toss game and we want to communicate who won the game (where the player who gets "heads" alone wins.).

The intuitive thing to do is to communicate the scores. 

Either the Tie (00) or (11), Player 1 Wins (10), Player 2 Wins (01)

Thus in a coin toss, we have a set of possible outcomes (00, 11, 10, 01) each with 1/4 probability

So we need to compute entropy of this channel, or the amount of information a channel would need to help in order to communicate these scores.

$$H = -\sum_{i=1}^{n=4}p_i log_2 p_i = -4(1/4 log_2 1/4) = 0.5 + 0.5 + 0.5 + 0.5 = 2$$

In total, it will always take 2 bits (differences) to communicate the full context of this game and the "look" of the end result.

But again, Shannon asks us to consider more precisely what we are trying to communicate when we communicate the "look" of the end result of the game.

The information we want to communicate is the winner, but the way we are communicating is by transmitting the "the full results of the game" without thinking about the precise information needed to successfully communicate. Not being precise, creates redundancies that can be helpful when extracting semantics, but can also be distracting and confusing noise that makes it hard to communicate without understanding semantics.

If we want to communicate the information precisely and not merely by the visual "look" of the game, we can do so more efficiently by being more precise. 
	
We can always send player 1's score, and then only send further bits when it was not a tie. 

This will change the available outcomes in our set from four (00 tie, 11 tie, 10 win, 01 lose) to (1 or 0 tie, 10 win, 01 lose). 

It will also change the probabilities of the second bit, as its probability will be affected by the previous outcome. Thus it is a **dependent variable**. Its value or presence depends on what came before.
 <!-- markov chain, dependent variable -->

Because we know the tie happens 50 percent of the time, we know the second question will have to be asked half the time, and therefore the probability of either result is 1/4 (rather than 1/2). 

So, we can have something like: 

$$H = -(\frac{1}{2} log_2 \frac{1}{2}) - (\frac{1}{4} log_2 \frac{1}{4}) - (\frac{1}{4} log_2 \frac{1}{4}) = 0.5 + 0. 5 + 0.5 = 1.5$$

Or the probability of three outcomes instead of four will be 1/3 instead of 1/4, so we would have something like: 

$$H = -\sum_{i=1}^{n=3}p_i log_2 p_i = -3(1/3 log_2 1/3) = 0.5 + 0.5 + 0.5 = 1.5$$

Instead of taking 2 bits to communicate the outcome of the game, it now only takes 1.5. 

Or said differently, it will takes on average 1.5 yes/no questions to figure out who won the game.

Here precision about what we want to communicate allows us to be more efficient. Because we are interested in the the outcome as win, lose, or tie., not necessarily in "how" a tie was created, we can reduce the amount of information needed in order to communicate this.

Further, when we are less efficient, we are also less precise, making semantic-free communication and automatic processing more difficult. 

When we communicate the tie in both way (heads, heads) (tails, tails), we are communicating four possible results instead of the desired three (win, lose, tie). A further step of interpretation is now required to understand that (heads, heads) **means** (semantics) the same thing (tails, tails).

**In sum** 

What are we trying to communicate? Our instinct was to communicate the "look" of the game. But this gives us four results (win, lose, tie, tie) when we really want to communicate three results (win, lose, tie). The "look" of the outcome is not just more inefficient, it creates ambiguities. 

In contrast, Shannon's focus on efficiency forces us to encode our communication more precisely, in ways that allow for automatic communication and processing without requiring the understanding of underlying semantics.

# Application: Beyond visual encoding.

Let's step back a little from these details and consider some downstream effects. 

As noted, of considerable importance is the manner in which Shannon's concern for efficiency forces us to be more precise about what we want to communicate. 

And this precision is a key part of what allows for the automatic transference of a message across multiple media types. 

I'd like to think about this with a concrete consideration of how we "visually encode" the "look of a text" and why this has historically tethered our texts to a particular presentation and made automatic transformations difficult.

In contrast, when we think about encoding the features of our texts as explicit data-types within a predefined set, we find that automatic transformation becomes possible at a dramatic scale. 

To facilitate this exercise, it will be helpful to introduce a few distinctions or technical terms. 

What we are saying here is that printed books are secretly filled with "data" *about* "data". But this **metadata** is usually so tightly tethered to the presentation of the book medium itself that it often fades into the background and escapes our direct notice. We see it, use it, and interpret it constantly to get access to the message. But in our eagerness to arrive at the message, we rarely thematize it. 

For example, the text of a heading and the text of paragraph are both data, but we instinctively know that the "heading data" should be read differently than that "paragraph data". 

Our awareness that a particular string functions in special way (as a "heading" or as a "paragraph") shows our awareness that this string of data belongs to a particular class or type of data. We sometimes call these "data-types".

Further, there are "relationships" asserted between other data-types (e.g. paragraphs or divisions to which this heading applies). The types of "relationships" is another kind of data-type and each specific relationship is the data communicated.

How do we recognize this? Where do we get this information? How does the printed text communicate this?

<div class="discussion" markdown="1">

Take a look at a printed text near you. Nearly any text will do. With a pencil, draw boxes around distinct data types that you see and give that data-type a name. 

Then draw and label lines between boxes to indicate the relationship that exists between data types. ("child" "next", "source", "reference", etc.)

For example:

<div class="image" markdown="1">
![text-data-types.png](https://s3.amazonaws.com/lum-faculty-jcwitt-public/pl399/text-data-types.jpg)
<p class="vda">discuss image anchor</p>
</div>

Then ask yourself

{:.rquestion}
How many data-types are communicated?

{:.rquestion}
How are these data types "visually encoded"? 

{:.rquestion}
What are the visual context clues that indicate tell you the function or role of a text string?

{:.rquestion}
How many context clues are required to ensure that this information is transmitted?

{:.rquestion}
Are there places where data-types are unclear or ambiguous? Where is a guess required? Is the same visual formatting used to mark more than one data type?

</div>

The tendency of the book paradigm is to record the **look**, and then expect the reader to understand the intention (meaning, semantics) behind this "look". That is, the reader is expected understand that the text in visualized in this or that way because the author intends the data, so formatted, to be understood as having this or that purpose/function.

But Shannon's pursuit of efficiency pushes us to think more precisely. Aren't we really just trying to communicate a data-type, which is a symbol with a finite set of symbols. If so, what if, instead of communicating the visual "look" of our text, expecting further interpretation, we could directly label the text with one of the data-types within the predefined set of data-types.

In such a case, no human interpreter would be required to mediate the transition from one "look" to another "look" or from one media representation to another. It could be automated. 

Consider the example below: 

Here I have encoded a "recipe" and then "displayed" it. Flip over to the "result" tab to see the display. Here you can see that I encoded things by their look: "blue" or "italic".

<iframe src="https://jsfiddle.net/tuaes2xn/3/embedded/html,css,result/dark/" width="100%" style="min-height: 500px"></iframe>

In the next example below, you can see that I've encoded things differently, by describing, not how I want something to look, but what type of thing it is. But if you flip over to the result tab, you can see that I've displayed it in the same way.

<iframe src="https://jsfiddle.net/1haj53mr/embedded/html,css,result/dark/" width="100%" style="min-height: 500px"></iframe>

The benefit of the latter approach comes in the ability to automatically transform presentations without requiring a re-encoding. Imagine that I no longer when the "headings" and "measurements" to be blue. Because I have encoded the headings as "heading" and measurement as "measure" rather than as "blue". It is easy for me to change the styling of headings to "bold" and measurements to "red". (See the result tab). 

But this would have been impossible with the first approach. 

The first example would require a RE-ENCODING. I would have to go back through each of the "blue" things and interpret the semantics, figure out which things are "blue" because they are headings and which things are "blue" because they are measurements, and only after that act of human interpretation could the transformation be made.

<iframe src="https://jsfiddle.net/mvt093fr/9/embedded/html,css,result/dark/" width="100%" style="min-height: 500px"></iframe>


<!-- add iframe code snippet with XML visuall encoding a text, bold, italic, etc --> 
<!-- try to manipulate look through, css, view the confus`ion -->
<!-- add iframe code snippet with XML visual encoding a text, bold, italic, etc label instead with data types, paragragph, title, name. etc. --> 
<!-- could add video of creating pdf from same source document -->


<!-- Cut notes
[visual and semantic encoding discussion] (10 min) 

Let me conclude this little exercise and apply this more directly to our encoding of a text.

Yesterday, we looked at some print layouts and talked about the kind of "visual encoding" that occurs in a print layout. 

Visual encoding is perhaps as remarkable for its ability to communicate lots of different types of information as for the amount of variated ways it does this. 

The communication of information visually like speech is replete with "redundancies" and "ambiguities" that have to be sorted out by a processor like a human brain. 

Shannon shows us that this kind of encoding is not only more expensive, but highly imprecise and error prone, making machine processing very difficult.  

It encodes the look of information in a particular context, and then expects the receiver to perform hundreds of inferences to ultimately access the essential information. 

Semantic encoding is the name given to a type of text encoding that tries to look past the visual look of a text and encourages us to identify the essential information. 

And a type of semantic encoding familiar to many textual scholars is XML or TEI.

[but we should that semantic markup is not identical to xml. It is completely possible to use XML to try to record the "look" of a text, or instructions about how it should be visualized. This is called presentational markup.

In contrast, descriptive markup, aims to identify the type of information with a limited set of data types. In terms of entropy, the aim is to dramatically reduce the number of symbols in a set, and therefore reduce the amount of entropy/uncertainty in our encoding.

For example: Instead of trying to transmit the look or position of header or paragraph, and then requiring the receiver to use these context clues to understand the difference between a heading text and paragraph text, semantic code is uninterested in the "look" and instead tries to identify the essential information by explicitly assigning a symbol <p> or <head> from a limited set of symbols (something like 500 available symbols). 

[apparatus example, lombardpress-schema example]

Let me try to illustrate in a more familiar environment, namely in the context of constructing a critical apparatus, and compare my encoding in contrast to the recommendations of the TEI guidelines.

A traditional visually encoded apparatus might try to visual communicate the same information in a lots of different ways. 

Consider a transposition: 

105 cum fides] fides ante cum B C
105 cum fides] fides cum B C
19 fides cum B C
19 fides cum transpositio B C

The point is there are lots of micro variations in the attempts to visually encode this information (and this is only a small part of the visual presentation. The position of the apparatus, the font size, etc) but in terms of information there is really one thing that is happening. A transposition is being recorded. 

But the interpretation of this visualization requires and expansive knowledge the entire context the other possible kinds of visualizations representation. To lose any part of this visualization, the placement within a footnote, the italics, the capital letters, the number, the square bracket, would threaten data loss.

Even in TEI it can be tempting to want to record this in terms of the look expected on a printed page.

<app>
  <lem>fides</lem>
  <rdg wit="#V">
    fides <desc>ante</desc> cum <wit>B C</wit>
  </rdg>
</app>

In both the cases, the size of the "set" of possible symbols is so large and ill-defined, that the communication of the essential information difficult. The entropy is very high, and this makes it very hard for the computer to reliably process this information.

The kind of encoding that Shannon is recommending, albeit at a much deeper level, is to recognize, despite the variations in presentation seen here, how many other kinds of variants there are and the probability that this variation is a transposition.

The number of possible variation types is many times smaller than the ways in which choose to present or visually encode the variation. 

So, his point is, let's encode the information in this more efficient way. This will then make it possible to transmit that information into multiple context without data loss and to re-construct any presentation we might desire.

This it turns out is precisely what we've tried to do in our Lombardpress TEI customization schema. 

In our schema, unlike general TEI, would do not leave a space for editors encode what they want to see on the printed page. 

[lombardpres-schema example]

Instead we've constructed a catalogue of possible variation types (we've created a limited SET of possible symbols), and then we instruct the editor to identify which variation type they want to record. (In this case, we no longer need to record information like "om." or "transposition" or square bracket or line number because the visual indicators to add new information). The variation type is a more efficient way to carry all the information needed. 

And that means we can return to any visual presentation type without data loss.

[lbp-print example]

And this is something that "semantic encoding" does for every data type. It tries to identify the information to its most succinct form without data loss, which in turn means that information efficiently and accurately be transmitted, communicated, in a variety of different contexts.

And here I think is an example of new consciousness forming. Just as writing forced us to be more precise and created new modes of consciousness. 

Here an example of semantic encoding sharpening our notion of variant types. 

In a print only world, we had to record each of these variants individually, thus there was very little pushing us classify them and to think of them instances of defined classes. 

But our new approach to information is asking us to take consider them in an entirely new light.


--- 

<!-- # Letters and raw statistical frequency

"signal rate" how many differences can be sent per second with these difference bleeding into each other.

"channel capacity" determined by
1. symbol rate, number of clearly distinguishable signals per second, "baud", = n = n symbol transfers per second. 
2. How many differences per symbol (s) (symbol space.)

Message space = S to power of N 

3 symbols ^ (2 (2 symbols per second)) = 9 messages possible messages over the 2 seconds. 

# Shanon and Markov Chains

The problem is that the probability of a letter in a message in not a zero sum game. 

The probability is not 1/26 for each letter.

A letter is word, a word in a message is a "dependent variable". It's probability is affected by the previous outcome. 

But this is what Markov chains attempted to describe. 

Claude Shannon is credited with seeing the application of Markove chains to human language and thus to ultimately to the quantification of message to be communicated independent of the number of letters. 

[explain markov chain] [video]

explain Shannon's use of a markov chain [video] 


Side Note: The summation is of just one symbol, not two, since initially we are simply transmitting whatever they get, heads/tails. This is like asking which symbol is it in a set of 1, rather than in a set of 2. 

Side Note: I think of like this: first we say, did player 1 get something. Yes, they got something. Then we ask, did player 2 get the same thing? If they did, then it is a tie. As of yet we still don't need to know whether it was heads or tails. If player 2 did not get the same thing. Then we need to ask one further question, did player 2 get heads or tails, if they got heads, they must have won (and by inference we know player one had tails). If they got tails they must have lost (and by inference we know player 1 must have had heads). So, to get our desired out come (e.g. who won), we don't initially need to know whether the first flip was head or tails, as this can be deduced from the the outcome of player 2's outcome) 

 -->
