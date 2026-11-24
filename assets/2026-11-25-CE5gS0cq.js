var e=`---
title: Conditional probability, independence, and Bayes' rule
date: 2026-11-25
source: Claude's general knowledge, following the topics of OpenStax Introductory Statistics 2e, §3.2 Independent and Mutually Exclusive Events, §3.3 Two Basic Rules of Probability, and §3.5 Tree and Venn Diagrams
---

:::recap Last time
- With equally likely outcomes, $P(A) = \\dfrac{\\text{outcomes in } A}{\\text{outcomes in } S}$. Two dice have $36$ equally likely pairs.
- Complement rule: $P(\\text{not } A) = 1 - P(A)$.
- Addition rule: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$.
:::

:::check
Warm-up: two dice are rolled. What is the probability that the red die shows $6$?
answer: 1/6
???
Six of the $36$ pairs have red $6$: $(6, 1)$ through $(6, 6)$. So $P = \\tfrac{6}{36} = \\tfrac16$, the same as for one die alone.
:::

:::question Today
How does learning something change a probability? When does it not change it at all? And if a medical test comes back positive, how likely is it that you actually have the disease?
:::

:::idea Conditional probability
The [[conditional-probability|conditional probability]] $P(A \\mid B)$, read "the probability of $A$ given $B$", is the probability of $A$ once you know $B$ happened:

$$P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)}.$$

**What it means:** knowing $B$ happened rules out every outcome outside $B$. So $B$ becomes the new sample space, and you count the outcomes of $A$ inside it. With equally likely outcomes, that is $\\dfrac{\\text{outcomes in both}}{\\text{outcomes in } B}$.
>>> Given the sum is $8$, step by step
Two dice are rolled, and you're told the sum is $8$. What is the probability that the red die shows $6$?

1. **The new sample space.** *Why shrink it:* every pair that doesn't add to $8$ is now impossible. The pairs left are $(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)$, five equally likely outcomes.
2. **Count $A$ inside it.** Only $(6, 2)$ has red $6$: one outcome.
3. **Divide.** $P(\\text{red } 6 \\mid \\text{sum } 8) = \\tfrac15 = 0.2$.
4. **Same answer from the formula.** $P(\\text{red } 6 \\text{ and sum } 8) = \\tfrac{1}{36}$, and $P(\\text{sum } 8) = \\tfrac{5}{36}$. Dividing, $\\tfrac{1/36}{5/36} = \\tfrac15$ ✓.

Knowing the sum is $8$ raised the chance of red $6$ from $\\tfrac16 \\approx 0.167$ to $0.2$.
<<<
:::

:::check
One die is rolled, and you're told the result is even. What is the probability that it is $6$?
answer: 1/3
???
The even results are $\\{2, 4, 6\\}$: the new sample space has $3$ equally likely outcomes. One of them is $6$, so $P(6 \\mid \\text{even}) = \\tfrac13$.
:::

:::idea Independent events
Two events are [[independent-events|independent]] when knowing one happened doesn't change the probability of the other: $P(A \\mid B) = P(A)$. Putting that into the formula above gives the test

$$P(A \\text{ and } B) = P(A)\\, P(B).$$

If the two sides are different, the events are **dependent**.

For example, with two dice, "red is $6$" and "blue is $6$" are independent. $P(\\text{both } 6) = \\tfrac{1}{36}$, and $\\tfrac16 \\times \\tfrac16 = \\tfrac{1}{36}$ ✓.
>>> A pair that is dependent, with numbers
Two dice: let $A$ = "red is $6$" and $B$ = "the sum is $8$".

1. **$P(A)$.** $\\tfrac16$, from the warm-up.
2. **$P(A \\mid B)$.** $\\tfrac15$, from the example above.
3. **Compare.** $\\tfrac15 \\ne \\tfrac16$: knowing the sum is $8$ changes the chance of red $6$. So $A$ and $B$ are **dependent**.
4. **The product test agrees.** $P(A \\text{ and } B) = \\tfrac{1}{36} \\approx 0.0278$, but $P(A)\\,P(B) = \\tfrac16 \\times \\tfrac{5}{36} = \\tfrac{5}{216} \\approx 0.0231$. They're different ✓.

**Why it's dependent:** a sum of $8$ rules out red $1$ (blue would have to be $7$). So the sum tells you something about the red die.
<<<
:::

:::check
Two cards are drawn from a $52$-card deck, without putting the first back. Are "the first card is an ace" and "the second card is an ace" independent?
- [ ] Yes
  why: If the first card is an ace, only $3$ aces are left among $51$ cards, so $P(\\text{second ace} \\mid \\text{first ace}) = \\tfrac{3}{51} \\approx 0.059$. Without that knowledge, $P(\\text{second ace}) = \\tfrac{4}{52} \\approx 0.077$. Knowing the first card changed the probability.
- [x] No
  why: Taking an ace out leaves fewer aces for the second draw: $\\tfrac{3}{51} \\approx 0.059$ instead of $\\tfrac{4}{52} \\approx 0.077$.
???
Without replacement, the first draw changes what's left in the deck. If the first card were put back and the deck shuffled, the draws would be independent, with $\\tfrac{4}{52}$ each time.
:::

:::idea Bayes' rule: turning a conditional around
The formula for $P(A \\mid B)$ can be rearranged into the **multiplication rule**, $P(A \\text{ and } B) = P(B)\\, P(A \\mid B)$. Using it on both ways $B$ can happen gives **Bayes' rule**, which turns $P(B \\mid A)$ into $P(A \\mid B)$:

$$P(A \\mid B) = \\frac{P(A)\\, P(B \\mid A)}{P(A)\\, P(B \\mid A) + P(\\text{not } A)\\, P(B \\mid \\text{not } A)}.$$

**The classic example.** A disease affects $1\\%$ of people. A test is positive for $90\\%$ of people who have it, and also, by mistake, for $5\\%$ of people who don't. You test positive. How likely is it that you have the disease? Bayes' rule gives about $15\\%$, much lower than most people guess.
>>> The test, with $10{,}000$ people
Count actual people instead of using the formula: imagine $10{,}000$ people take the test.

1. **Who has the disease.** $1\\%$ of $10{,}000$ is $100$ people. The other $9{,}900$ don't.
2. **Positives among the sick.** $90\\%$ of $100$ is $90$ people.
3. **Positives among the healthy.** $5\\%$ of $9{,}900$ is $495$ people. *Why so many:* $5\\%$ is small, but it's $5\\%$ of a much bigger group.
4. **Everyone who tests positive.** $90 + 495 = 585$ people.
5. **Of those, how many are sick?** $\\tfrac{90}{585} \\approx 0.154$, about $15\\%$.
6. **The same with Bayes' rule.** $\\dfrac{0.01 \\times 0.9}{0.01 \\times 0.9 + 0.99 \\times 0.05} = \\dfrac{0.009}{0.0585} \\approx 0.154$ ✓.

Most positive results come from the big healthy group, even though each healthy person rarely tests positive.
<<<
:::

:::check
Same test (positive for $90\\%$ of sick people and $5\\%$ of healthy people), but now the disease affects $2\\%$ of people. You test positive. What is the probability that you have the disease? (A fraction or a decimal is fine.)
answer: 18/67
???
Out of $10{,}000$ people, $200$ are sick and $9{,}800$ are healthy. Positives: $90\\%$ of $200$ is $180$, and $5\\%$ of $9{,}800$ is $490$, so $670$ in all. The probability is $\\tfrac{180}{670} = \\tfrac{18}{67} \\approx 0.269$. Doubling how common the disease is nearly doubled the answer, from about $15\\%$ to about $27\\%$.
:::

:::summary Summary
- **Conditional probability:** $P(A \\mid B) = \\dfrac{P(A \\text{ and } B)}{P(B)}$. Knowing $B$ shrinks the sample space to $B$.
- **Independent:** $P(A \\mid B) = P(A)$, or equivalently $P(A \\text{ and } B) = P(A)\\,P(B)$. Drawing without replacement usually makes events dependent.
- **Bayes' rule** turns $P(B \\mid A)$ into $P(A \\mid B)$. Counting $10{,}000$ imaginary people is an easy way to use it.

**Common mistakes:**
- Mixing up $P(A \\mid B)$ and $P(B \\mid A)$. "Positive given sick" is $90\\%$, but "sick given positive" is only about $15\\%$.
- Multiplying probabilities of events that aren't independent.
- Ignoring how rare the condition is when judging a positive test.
:::
`;export{e as default};