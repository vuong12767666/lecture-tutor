var e=`---
title: Discrete random variables, expected value, and variance
date: 2026-11-30
source: Grinstead and Snell, Introduction to Probability, §6.1 Expected Value of Discrete Random Variables and §6.2 Variance of Discrete Random Variables
---

:::recap Last time
- With equally likely outcomes, $P(A) = \\dfrac{\\text{outcomes in } A}{\\text{outcomes in } S}$. Flipping a coin $3$ times has $8$ equally likely outcomes, like $HHT$ or $THT$.
- Two events are **independent** when knowing one happened doesn't change the probability of the other. Separate coin flips are independent, and so are separate die rolls.
:::

:::check
Warm-up: a fair coin is flipped $3$ times. What is the probability of getting exactly $2$ heads?
answer: 3/8
???
The $8$ outcomes are $HHH, HHT, HTH, HTT, THH, THT, TTH, TTT$. Exactly two heads: $HHT, HTH, THH$, which is $3$ outcomes. So $P = \\tfrac38$.
:::

:::question Today
A game costs $1$ dollar to play. Is it worth playing? Questions like this need more than one probability: they need a number for each outcome, and a way to combine them. Today: random variables, their **expected value** (the long-run average), and their **variance** (how spread out they are).
:::

:::idea Random variables and their distribution
A [[random-variable|random variable]] is a number decided by the outcome of an experiment. We name it with a capital letter, like $X$. For example, flip a coin $3$ times and let $X$ be the number of heads. The outcome $HTH$ gives $X = 2$, and $TTT$ gives $X = 0$.

A random variable is **discrete** when you can list its possible values, like $0, 1, 2, 3$. Its **probability mass function**, written $p(x)$, gives the probability of each value: $p(x) = P(X = x)$. For the number of heads in $3$ flips:

| $x$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| $p(x)$ | $\\tfrac18$ | $\\tfrac38$ | $\\tfrac38$ | $\\tfrac18$ |

The probabilities always add to $1$, because $X$ always takes exactly one of its values.
>>> Building the table, step by step
1. **List every outcome.** *Why:* each outcome decides one value of $X$, so we need all of them. The $8$ outcomes are $HHH, HHT, HTH, HTT, THH, THT, TTH, TTT$, and each has probability $\\tfrac18$.
2. **Write $X$ next to each outcome.** *Why:* this shows which outcomes give which value. Count the $H$'s: $HHH \\to 3$, $HHT \\to 2$, $HTH \\to 2$, $HTT \\to 1$, $THH \\to 2$, $THT \\to 1$, $TTH \\to 1$, $TTT \\to 0$.
3. **Group the outcomes by value of $X$.** *Why:* $P(X = x)$ is the probability of the event "the outcome is one that gives $x$", and with equally likely outcomes that is the count over $8$.
   - $X = 0$: only $TTT$, so $p(0) = \\tfrac18$.
   - $X = 1$: $HTT, THT, TTH$, so $p(1) = \\tfrac38$.
   - $X = 2$: $HHT, HTH, THH$, so $p(2) = \\tfrac38$.
   - $X = 3$: only $HHH$, so $p(3) = \\tfrac18$.
4. **Check that they add to $1$.** $\\tfrac18 + \\tfrac38 + \\tfrac38 + \\tfrac18 = \\tfrac88 = 1$ ✓. Every one of the $8$ outcomes was counted exactly once.
<<<
:::

:::check
Two dice are rolled, and $X$ is their sum. What is $p(4)$, the probability that $X = 4$?
answer: 1/12
???
Of the $36$ equally likely (red, blue) pairs, three add to $4$: $(1, 3), (2, 2), (3, 1)$. So $p(4) = \\tfrac{3}{36} = \\tfrac{1}{12}$.
:::

:::idea Expected value
The [[expected-value|expected value]] of $X$, written $E[X]$ (also called the **mean**, $\\mu$), multiplies each value by its probability and adds:

$$E[X] = \\sum_x x\\, p(x).$$

**What it means:** if you repeat the experiment many times, the average of the values of $X$ gets close to $E[X]$.

**The game.** It costs $1$ dollar to play. You roll a die, and if it shows $6$ you get $4$ dollars back, so you're up $3$ dollars. Otherwise you get nothing and you're down $1$ dollar. Let $X$ be what you gain, in dollars. Then $X = 3$ with probability $\\tfrac16$, and $X = -1$ with probability $\\tfrac56$, so

$$E[X] = 3 \\cdot \\tfrac16 + (-1) \\cdot \\tfrac56 = -\\tfrac13.$$

On average you lose about $33$ cents a game, so it isn't worth playing.
>>> The game, step by step
1. **Find the values of $X$.** *Why:* the formula needs every value $X$ can take. You paid $1$ dollar. With a $6$ you get $4$ dollars back, so you gain $4 - 1 = 3$. With anything else you get $0$ dollars back, so you gain $0 - 1 = -1$.
2. **Find their probabilities.** *Why:* each value gets weighted by how likely it is. One face out of six is a $6$, so $P(X = 3) = \\tfrac16$. The other five faces give $P(X = -1) = \\tfrac56$. Check: $\\tfrac16 + \\tfrac56 = 1$ ✓.
3. **Multiply and add.** $3 \\cdot \\tfrac16 = \\tfrac36$, and $(-1) \\cdot \\tfrac56 = -\\tfrac56$. Adding, $\\tfrac36 - \\tfrac56 = -\\tfrac26 = -\\tfrac13 \\approx -0.33$.
4. **Why this is the long-run average.** Imagine playing $600$ times. About $\\tfrac16$ of the rolls, $100$ of them, are $6$'s, gaining $100 \\times 3 = 300$ dollars. The other $500$ lose $1$ dollar each, so $-500$ dollars. In total you're at $300 - 500 = -200$ dollars, and $-200 \\div 600 = -\\tfrac13$ per game. That is the same arithmetic as step 3, with $600$ written in front of each probability.
<<<

The expected value doesn't have to be a value $X$ can actually take. For the number of heads in $3$ flips, $E[X] = 0 \\cdot \\tfrac18 + 1 \\cdot \\tfrac38 + 2 \\cdot \\tfrac38 + 3 \\cdot \\tfrac18 = \\tfrac{12}{8} = 1.5$, even though you can never get $1.5$ heads.
:::

:::check
One fair die is rolled, and $X$ is the number it shows. What is $E[X]$?
answer: 7/2
???
Each of $1, 2, 3, 4, 5, 6$ has probability $\\tfrac16$, so $E[X] = (1 + 2 + 3 + 4 + 5 + 6) \\cdot \\tfrac16 = \\tfrac{21}{6} = 3.5$.
:::

:::idea Expected value of a function of X
If $g$ is a function, then $g(X)$ is a new random variable, and you can find its expected value from the table for $X$: apply $g$ to each value, then weight by the same probabilities.

$$E[g(X)] = \\sum_x g(x)\\, p(x).$$

For a die, $E[X^2] = (1 + 4 + 9 + 16 + 25 + 36) \\cdot \\tfrac16 = \\tfrac{91}{6} \\approx 15.17$. That is **not** $(E[X])^2 = 3.5^2 = 12.25$. Squaring the average is not the same as averaging the squares.

**The shortcut for a straight line.** When $g(x) = ax + b$, you don't need the table at all:

$$E[aX + b] = a\\,E[X] + b.$$
>>> Why $E[aX + b] = a\\,E[X] + b$, with a die
Take a die, so $E[X] = 3.5$, and let $Y = 2X + 1$.

1. **List the values of $Y$.** *Why:* this lets us find $E[Y]$ the long way and compare. The faces $1, 2, 3, 4, 5, 6$ become $2(1) + 1 = 3$, then $5, 7, 9, 11, 13$. Each still has probability $\\tfrac16$, because $Y$ is a given number exactly when $X$ is the face that produces it.
2. **Average them.** $(3 + 5 + 7 + 9 + 11 + 13) \\cdot \\tfrac16 = \\tfrac{48}{6} = 8$.
3. **Compare with the shortcut.** $2 \\cdot 3.5 + 1 = 8$ ✓.
4. **Why it always works.** $E[aX + b] = \\sum (ax + b)\\,p(x)$. Split the sum into $a \\sum x\\,p(x) + b \\sum p(x)$. The first sum is $E[X]$, and the second is $1$, because the probabilities add to $1$. So you get $a\\,E[X] + b$. Here: $2 \\times 3.5 + 1 \\times 1 = 8$.
<<<
:::

:::check
A random variable has $E[X] = 4$. What is $E[3X - 2]$?
answer: 10
???
Use $E[aX + b] = a\\,E[X] + b$ with $a = 3$ and $b = -2$: $3 \\times 4 - 2 = 10$.
:::

:::idea Variance and standard deviation
Two random variables can have the same mean but be spread out very differently. Let $X$ be $0$ or $10$, each with probability $\\tfrac12$, and let $Y$ always be $5$. Both have mean $5$, but $X$ always lands $5$ away from it, while $Y$ is always exactly $5$.

The [[variance|variance]] measures the spread: it is the expected **squared distance** from the mean $\\mu = E[X]$.

$$\\operatorname{Var}(X) = E\\big[(X - \\mu)^2\\big] = E[X^2] - \\mu^2.$$

The second form is usually quicker. The **standard deviation** is $\\sigma = \\sqrt{\\operatorname{Var}(X)}$, which is back in the same units as $X$.

For $X$ above, $(X - 5)^2$ is $25$ either way, so $\\operatorname{Var}(X) = 25$ and $\\sigma = 5$. For $Y$, $(Y - 5)^2$ is always $0$, so $\\operatorname{Var}(Y) = 0$.
>>> The variance of a die, both ways
$X$ is one roll of a die, with $\\mu = 3.5$.

**From the definition.**
1. **Find each distance from the mean.** *Why:* variance is about how far $X$ lands from $\\mu$. The faces $1$ to $6$ are $-2.5, -1.5, -0.5, 0.5, 1.5, 2.5$ away from $3.5$.
2. **Square them.** *Why square:* the distances below the mean are negative and would cancel the ones above it (they add to $0$). Squares are never negative. The squares are $6.25, 2.25, 0.25, 0.25, 2.25, 6.25$.
3. **Take their expected value.** Each face has probability $\\tfrac16$: $(6.25 + 2.25 + 0.25 + 0.25 + 2.25 + 6.25) \\cdot \\tfrac16 = \\tfrac{17.5}{6} = \\tfrac{35}{12} \\approx 2.92$.

**From the shortcut.** $E[X^2] = \\tfrac{91}{6}$, from the last part, and $\\mu^2 = 3.5^2 = \\tfrac{49}{4}$. So $\\operatorname{Var}(X) = \\tfrac{91}{6} - \\tfrac{49}{4} = \\tfrac{182}{12} - \\tfrac{147}{12} = \\tfrac{35}{12}$ ✓, the same.

**Standard deviation.** $\\sigma = \\sqrt{35/12} \\approx 1.71$. A roll is typically about $1.7$ away from $3.5$.
<<<

**Stretching and shifting.** $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$. Adding $b$ moves every value and the mean by the same amount, so the distances don't change. Multiplying by $a$ multiplies every distance from the mean by $a$ (a negative $a$ also flips its sign), so the squared distances get multiplied by $a^2$.
>>> Checking $\\operatorname{Var}(2X + 1) = 4 \\operatorname{Var}(X)$ with a die
$Y = 2X + 1$ has values $3, 5, 7, 9, 11, 13$ and mean $8$, from the last part.

1. **Distances from the mean $8$.** $-5, -3, -1, 1, 3, 5$. These are exactly twice the die's distances $-2.5, -1.5, -0.5, 0.5, 1.5, 2.5$. The $+1$ moved both the values and the mean up by $1$, so it dropped out.
2. **Square and average.** $(25 + 9 + 1 + 1 + 9 + 25) \\cdot \\tfrac16 = \\tfrac{70}{6} = \\tfrac{35}{3} \\approx 11.67$.
3. **Compare.** $2^2 \\times \\tfrac{35}{12} = \\tfrac{140}{12} = \\tfrac{35}{3}$ ✓. Each distance doubled, so each square became $4$ times as big.
<<<
:::

:::check
A fair coin is flipped twice, and $X$ is the number of heads, so $p(0) = \\tfrac14$, $p(1) = \\tfrac12$, $p(2) = \\tfrac14$. What is $\\operatorname{Var}(X)$?
answer: 1/2
???
First $\\mu = 0 \\cdot \\tfrac14 + 1 \\cdot \\tfrac12 + 2 \\cdot \\tfrac14 = 1$. Then $E[X^2] = 0 \\cdot \\tfrac14 + 1 \\cdot \\tfrac12 + 4 \\cdot \\tfrac14 = \\tfrac32$. So $\\operatorname{Var}(X) = \\tfrac32 - 1^2 = \\tfrac12$.
:::

:::idea The expected value of a sum
For any random variables, the expected value of a sum is the sum of the expected values:

$$E[X_1 + X_2 + \\cdots + X_n] = E[X_1] + E[X_2] + \\cdots + E[X_n].$$

This holds **even when they are not independent**, and it makes many problems easy. The trick is to write a count as a sum of **indicators**: random variables that are $1$ if something happens and $0$ if it doesn't. An indicator's expected value is $1 \\cdot P(\\text{it happens}) + 0 \\cdot P(\\text{it doesn't}) = P(\\text{it happens})$.

**Example.** $3$ coin flips: the number of heads is $I_1 + I_2 + I_3$, where $I_k$ is $1$ if flip $k$ is heads. Each $E[I_k] = \\tfrac12$, so the expected number of heads is $\\tfrac12 + \\tfrac12 + \\tfrac12 = 1.5$, the same as the table gave, with no table.

**A harder one.** $10$ people leave their coats at a party, and the coats are handed back in a random order. On average, how many people get their own coat back? Let $I_k$ be $1$ if person $k$ gets their own coat. Person $k$'s coat is equally likely to be any of the $10$, so $E[I_k] = \\tfrac{1}{10}$. Adding $10$ of these, the expected number is $10 \\times \\tfrac{1}{10} = 1$.
>>> Why the coat answer works, checked with $3$ people
The indicators here are **not** independent: if persons $1$ and $2$ both get their own coats, person $3$ must too. The sum rule still works. Let's check it with $3$ people, where we can list everything.

1. **List every way to hand back the coats.** *Why:* each order is equally likely, so we can average over them. Write the order as which coat goes to persons $1, 2, 3$. There are $3 \\times 2 \\times 1 = 6$ orders: $123, 132, 213, 231, 312, 321$.
2. **Count the matches in each.** *Why:* the number of people with their own coat is the random variable we want the average of. A match is a position where the digit equals the position.
   - $123$: all three match, so $3$.
   - $132$: only person $1$, so $1$. $213$: only person $3$, so $1$. $321$: only person $2$, so $1$.
   - $231$ and $312$: nobody, so $0$ each.
3. **Average.** $(3 + 1 + 1 + 1 + 0 + 0) \\div 6 = \\tfrac66 = 1$.
4. **Compare with the sum rule.** Each person gets their own coat in $2$ of the $6$ orders (for person $1$: $123$ and $132$), so $E[I_k] = \\tfrac26 = \\tfrac13$. Then $3 \\times \\tfrac13 = 1$ ✓, the same answer, without listing anything.
<<<
:::

:::check
A quiz has $20$ multiple-choice questions, each with $4$ choices. If you guess every answer at random, what is the expected number you get right?
answer: 5
???
Let $I_k$ be $1$ if you get question $k$ right. Each guess is right with probability $\\tfrac14$, so $E[I_k] = \\tfrac14$. The number right is $I_1 + \\cdots + I_{20}$, so its expected value is $20 \\times \\tfrac14 = 5$.
:::

:::summary Summary
- A **random variable** $X$ is a number decided by the outcome. Its **probability mass function** $p(x) = P(X = x)$ lists the probability of each value, and these add to $1$.
- **Expected value:** $E[X] = \\sum x\\,p(x)$, the long-run average. $E[g(X)] = \\sum g(x)\\,p(x)$, and $E[aX + b] = a\\,E[X] + b$.
- **Variance:** $\\operatorname{Var}(X) = E[(X - \\mu)^2] = E[X^2] - \\mu^2$, and $\\sigma = \\sqrt{\\operatorname{Var}(X)}$. $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$.
- **Sums:** $E[X_1 + \\cdots + X_n] = E[X_1] + \\cdots + E[X_n]$ always. To find an expected count, write it as a sum of $0$-or-$1$ indicators.

**Common mistakes:**
- Using $(E[X])^2$ for $E[X^2]$. For a die they are $12.25$ and about $15.17$.
- Writing $\\operatorname{Var}(aX + b) = a \\operatorname{Var}(X) + b$. The $b$ disappears and the $a$ gets squared.
- Thinking the expected value has to be a possible value. You expect $1.5$ heads in $3$ flips.
:::
`;export{e as default};