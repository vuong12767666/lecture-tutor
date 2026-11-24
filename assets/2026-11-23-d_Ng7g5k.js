var e=`---
title: Sample spaces, events, and counting
date: 2026-11-23
source: Claude's general knowledge, following the topics of OpenStax Introductory Statistics 2e, §3.1 Terminology and §3.3 Two Basic Rules of Probability
---

:::recap Before you start
- A fraction like $\\tfrac{3}{12}$ can be simplified to $\\tfrac14$, and it means "$3$ out of $12$".
- A **set** is a collection of things, written in braces: $\\{2, 4, 6\\}$ is the set of even numbers on a die.
- Nothing else is needed. (The counting lecture before this one helps with harder problems, but this one doesn't depend on it.)
:::

:::check
Warm-up: a normal six-sided die is rolled once. How many different results are possible?
answer: 6
???
The die can land on $1$, $2$, $3$, $4$, $5$, or $6$: six results.
:::

:::question Today
How do you turn "how likely is this?" into a number? And when two things can happen at once, how do you count without counting anything twice?
:::

:::idea Sample spaces and events
An **experiment** is anything with an uncertain result, like rolling a die. Its [[sample-space|sample space]] $S$ is the set of all possible results, called **outcomes**. An **event** is a set of outcomes: the ones where the thing you care about happens.

When every outcome is **equally likely**, the probability of an event $A$ is

$$P(A) = \\frac{\\text{number of outcomes in } A}{\\text{number of outcomes in } S}.$$

For example, roll one die. $S = \\{1, 2, 3, 4, 5, 6\\}$. The event "even" is $A = \\{2, 4, 6\\}$, so $P(A) = \\tfrac36 = \\tfrac12$.

Every probability is between $0$ (the event can't happen) and $1$ (it always happens).
>>> Two dice, step by step
Roll two dice, one red and one blue. What is the probability that they add up to $7$?

1. **List the sample space.** *Why list pairs, not sums:* the formula needs outcomes that are equally likely. Each die has $6$ results, and each red result can go with each blue result, so there are $6 \\times 6 = 36$ pairs, written (red, blue). For example, $(1, 6)$ and $(6, 1)$ are two different outcomes: red $1$ with blue $6$, and red $6$ with blue $1$.
2. **Why not use the $11$ possible sums:** the sums $2$ through $12$ are not equally likely. A sum of $2$ happens only one way, $(1, 1)$. A sum of $7$ happens six ways. Treating the $11$ sums as equally likely would give $\\tfrac{1}{11}$ for every sum, which is wrong.
3. **List the event.** The pairs adding to $7$ are $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$: $6$ outcomes.
4. **Divide.** $P(\\text{sum is } 7) = \\tfrac{6}{36} = \\tfrac16 \\approx 0.167$.
<<<
:::

:::check
Two dice are rolled. What is the probability that they add up to $8$?
answer: 5/36
???
The pairs are $(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)$: $5$ of the $36$ equally likely pairs. So $P = \\tfrac{5}{36} \\approx 0.139$. ($(1, 7)$ isn't possible, because a die only goes up to $6$.)
:::

:::idea The complement rule
The **complement** of an event $A$, written "not $A$", is every outcome where $A$ doesn't happen. Each outcome is in exactly one of $A$ and "not $A$", so their counts add up to the whole sample space. That gives

$$P(\\text{not } A) = 1 - P(A).$$

**When to use it:** when "not $A$" is easier to count than $A$. The words "at least one" are a strong hint.

For example, roll two dice. What is the probability of at least one six? "Not at least one six" means "no sixes at all". Each die then has $5$ results, so there are $5 \\times 5 = 25$ such pairs. So $P(\\text{at least one six}) = 1 - \\tfrac{25}{36} = \\tfrac{11}{36}$.
>>> Checking $\\tfrac{11}{36}$ by counting directly
Count the pairs with at least one six, and watch for double counting.

1. **Red is $6$:** $(6, 1), (6, 2), \\ldots, (6, 6)$, which is $6$ pairs.
2. **Blue is $6$:** $(1, 6), (2, 6), \\ldots, (6, 6)$, also $6$ pairs.
3. **Don't count $(6, 6)$ twice.** It is in both lists. So the total is $6 + 6 - 1 = 11$, not $12$.
4. **Divide.** $\\tfrac{11}{36}$ ✓, the same as the complement rule gave.

The complement rule avoided the double-counting problem entirely: "no sixes" has no overlap to worry about.
<<<
:::

:::check
Three coins are tossed. What is the probability of getting at least one head?
answer: 7/8
???
"Not at least one head" means all three are tails, which is one outcome, TTT, out of $2 \\times 2 \\times 2 = 8$. So $P(\\text{at least one head}) = 1 - \\tfrac18 = \\tfrac78$.
:::

:::idea The addition rule
"$A$ or $B$" means at least one of them happens. Adding the counts of $A$ and $B$ counts the outcomes in **both** twice, so subtract them once:

$$P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B).$$

If $A$ and $B$ can't happen together (they are **mutually exclusive**), then $P(A \\text{ and } B) = 0$ and the rule is just $P(A) + P(B)$.
>>> A card that is a heart or a king, step by step
Draw one card from a standard deck of $52$: $4$ suits (hearts, diamonds, clubs, spades) of $13$ cards each, with one king in each suit.

1. **Hearts:** $13$ cards, so $P(\\text{heart}) = \\tfrac{13}{52}$.
2. **Kings:** $4$ cards, so $P(\\text{king}) = \\tfrac{4}{52}$.
3. **Both:** only the king of hearts is a heart and a king, so $P(\\text{heart and king}) = \\tfrac{1}{52}$.
4. **Why subtract it:** in $13 + 4 = 17$, the king of hearts was counted once with the hearts and once with the kings. The number of different cards is $17 - 1 = 16$.
5. **Result.** $P(\\text{heart or king}) = \\tfrac{13}{52} + \\tfrac{4}{52} - \\tfrac{1}{52} = \\tfrac{16}{52} = \\tfrac{4}{13} \\approx 0.308$.
<<<
:::

:::check
One die is rolled. What is the probability that the result is even or greater than $4$?
answer: 2/3
???
Even is $\\{2, 4, 6\\}$, so $\\tfrac36$. Greater than $4$ is $\\{5, 6\\}$, so $\\tfrac26$. Both is $\\{6\\}$, so $\\tfrac16$. The addition rule gives $\\tfrac36 + \\tfrac26 - \\tfrac16 = \\tfrac46 = \\tfrac23$. Check by listing: $\\{2, 4, 5, 6\\}$ is $4$ of the $6$ results ✓.
:::

:::summary Summary
- The **sample space** is every possible outcome, and an **event** is a set of outcomes. With equally likely outcomes, $P(A) = \\dfrac{\\text{outcomes in } A}{\\text{outcomes in } S}$.
- Make sure the outcomes really are equally likely: for two dice, use the $36$ pairs, not the $11$ sums.
- **Complement rule:** $P(\\text{not } A) = 1 - P(A)$. Use it for "at least one".
- **Addition rule:** $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. Subtract the overlap, which was counted twice.

**Common mistakes:**
- Treating outcomes as equally likely when they aren't, like the sums of two dice.
- Forgetting to subtract the overlap in "or" questions.
- Counting "at least one" directly and double counting, when the complement is simpler.
:::
`;export{e as default};