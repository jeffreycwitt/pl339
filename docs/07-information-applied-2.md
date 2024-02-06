---
layout: lecture
title: "7: Information Applied"
reading: ["SN4EQIZ5=>cc. 9-10"]
date: "2024-02-06"
nav_order: 7
published: true
---

## Table of contents
{: .no_toc .text-delta } 

Student Presentations

# Applications of Information Turn in Physics (chapter 9)

[Course notes (created by your peers) can be found here](https://s3.amazonaws.com/lum-faculty-jcwitt-public/pl339/SP24-studentNotes/GleickCh9ClassNotesEdited.pdf). Please open the PDF in your browser and annotate directly on the PDF. 


# Applications of Information Turn in Biology (10)

[Course notes (created by your peers) can be found here](https://s3.amazonaws.com/lum-faculty-jcwitt-public/pl339/SP24-studentNotes/GleickCh10ClassnotesEdited.pdf). Please open the PDF in your browser and annotate directly on the PDF. 

I also thought this video about "translation" from mRNA to poly-peptides (Proteins or parts of Proteins) was really helpful to understand how "information" is used to instruct the building process of poly-peptides. (The video is about 15 minutes.)

<div class="video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ocAAkB32Hqs?si=m_gMdD3q7uUHxWB6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p class="vda">discuss video anchor</p>

</div>

This video is also helpful (a slightly higher level overview than the video above)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6gUY5NoX1Lk?si=NeBVsdTcz1IIES8W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<p class="vda">discuss video anchor</p>

</div>

# Follow-Up (Review) Questions

As we start to review our first unit, here are a few questions based on our reading of the last few chapters (especially chapter 10) that should also help us review and reinforce many key ideas that we've discussed up to this point.

## Question 1

Bob is missing an enzyme that is important for sugar regulation in the body. (Note: Proteins are key components in enzyme production)

{:.question}
On the old, pre-informational turn, paradigm, what would a biologist suggest is the fundamental problem

{:.answer}
There is a chemical, matter or energy problem. 

{:.question}
What would therapy look like on the old paradigm?

{:.answer}
Try to create the protein with the introduction of matter/energy etc

{:.question}
What would the new, post-informational, approach say?

{:.answer}
The missing protein needed for enzyme production is result of a miscommunication (a mistranslation) from gene code to the arrangement of amino acids.

{:.question}
What would therapy look like on the new paradigm?

{:.answer}
Try to fix the encoding used to assembly the amino acids. Fix the encoding to more accurately communicate the original information. If the information gets corrected, the building process will take care of itself. (See Gleick 298-299)

## Question 2

{:.rquestion}
In a channel that could communicate 100 bits per second, how many codons could be communicated per second? (Recall call that "codon" is a group of three bases, composed of either G, A, T, or C)

{:.question}
What is the size of our alphabet: 

{:.answer}
4 

{:.question}
How many bits do we need to communicate one "letter"? 

<div class="answer" markdown="1">

$$ 4(\frac{1}{4} log_2 4) = 4(0.5) = 2 bits $$

</div>

{:.question}
How many bits do we need to communicate one "codon"?

<div class="answer" markdown="1">

A codon (or "word") is made of three "letters", so we need 6 bits. 

$$ 64(\frac{1}{64} log_2 64) = 64(\frac{1}{64} * 6) = 64(0.09375) = 6  $$

</div>

{:.question}
How many possible codons can we make with 6 bits

{:.answer}
4x4x4 = 64 possibilities

{:.question}
Let's come back to our original question: How many codons can we transmit per second on a channel with a capacity of 100 bits per second?

{:.answer}
If each codon requires 6 bits, then we can compute this as follows:  100/6 = 16.66 codons per second.

## Question 3 (more advanced version of question 2)

If we asked for the amount of bits for a given amino acid this might change. There are 20 amino acids, which means some codons "code" for the same amino acid. 

This would change the probability of a given amino acid appearing (just as the word "practice" and "practise" or "and" and "&" might code for the same word).

Imagine that 5 amino acids are coded by the 4 different codons. In this case, 20 of the 64 combinations would code for 5 of the 20 amino acids. 

Imagine that another 5 amino acids are coded by 2 different codons. In this case, 10 out of the possible 64 combinations would code for another 5 of the 20 amino acids.

Assuming all codons appeared equally... 

The probability of the first set of 5 amino acid is 4/64 (1/16)

The probability of the second set of 5 amino acids is 2/64 (1/32)

And the probability for the other 10 amino acids would remain 1/64

{:.question}
How can we calculate the smallest number of differences we would need to communicate all 20 amino acids

<div class="answer" markdown="1">

$$ 5(\frac{1}{16} log 16) + 5(\frac{1}{32} log 32) + 10(\frac{1}{64} log 64) $$

$$ =  5(\frac{1}{16}*4)+  5(\frac{1}{32}*5) + 10(\frac{1}{64}*6)  = 1.25 + 0.78125  + 0.9375 = 2.96875 $$

= 2.968 bits (to communicate all 20 amino acids based on these made up probabilities)

</div>

## Question 4

{:.question}
Why does Dawkins suggest that the gene is not DNA but information?  How does this fit with the larger theme of shannon's information theory, whether talking about letters and words, mechanical or animal minds, or DNA?

<div class="answer" markdown="1">

Dawkins points out that evolutionary that storage of gene information via nucleic acids and then in proteins is itself a product of evolution. The gene building a kind of bigger and better vehicle with which to replicate the information. 

But this means we can't say that the gene is this chemical or that chemical, this molecule or that molecule. 

The gene is rather a "immaterial pattern of differences" that have been encoded in different ways and today are encoded in molecular patterns 

</div>
