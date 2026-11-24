var e=`---
title: Probability Final Practice Test 2 (harder)
exam: Final
minutes: 75
note: Harder original practice problems on every lecture in this course. Each problem chains several ideas together. Not an official exam.
---

:::problem 1
A $5$-card hand is dealt from a standard $52$-card deck ($13$ ranks, $4$ suits each).

**(a)** The number of full houses (three cards of one rank and two of another) is {{expr 2: 3744}}

**(b)** The probability of exactly one pair (two cards of one rank, and three cards of three other, different ranks) is {{expr 3: 1098240/2598960}} (you can leave it as a fraction)
+++
review: 2026-11-20 Combinations: choosing without order; 2026-11-20 The basic counting principle; 2026-11-23 Sample spaces and events

**First, building a hand in steps.** Count a kind of hand by making it one choice at a time: which ranks, then which suits for each rank. Multiply the steps (the basic counting principle), and use combinations wherever order doesn't matter. All $\\binom{52}{5} = 2{,}598{,}960$ hands are equally likely, so a probability is a count over that. For example, four of a kind: $13$ choices for the rank, then $48$ for the fifth card, so $13 \\times 48 = 624$ hands.

**The goal.** For (a), choose the two ranks (in order, since one is the triple), then the suits. For (b), choose the pair's rank, its suits, the three other ranks (unordered), and one suit for each.

**Step 1 (a): the ranks.** *Why order matters here:* the triple and the pair are different jobs, so "kings over threes" isn't "threes over kings". $13$ choices for the triple's rank, then $12$ for the pair's.

**Step 2 (a): the suits.** $\\binom43 = 4$ ways for the triple, $\\binom42 = 6$ for the pair. Total: $13 \\times 4 \\times 12 \\times 6 = 3744$.

**Step 3 (b): the pair.** $13$ ranks, then $\\binom42 = 6$ suits: $78$ ways.

**Step 4 (b): the other three cards.** *Why a combination for the ranks:* the three single cards play the same role, so their order doesn't matter. Choose $3$ of the remaining $12$ ranks: $\\binom{12}{3} = 220$. Each card can be any of $4$ suits: $4^3 = 64$.

**Step 5 (b): divide.** $78 \\times 220 \\times 64 = 1{,}098{,}240$, so the probability is $\\tfrac{1098240}{2598960} = \\tfrac{352}{833} \\approx 0.423$.

**Common mistake.** In (b), choosing the three single ranks one after another ($12 \\times 11 \\times 10$). That counts each set of three $3! = 6$ times.
:::

:::problem 2
**(a)** The number of ways to put $8$ identical balls into $3$ different boxes so that no box is empty is {{expr 2: 21}}

**(b)** The number of solutions of $x_1 + x_2 + x_3 = 8$ in whole numbers $x_i \\ge 0$ with $x_1 \\le 2$ is {{expr 2: 24}}
+++
review: 2026-11-20 Identical things into boxes: stars and bars; 2026-11-23 The complement rule

**First, stars and bars, and counting what you don't want.** $n$ identical things into $r$ boxes is $\\binom{n + r - 1}{r - 1}$ ways, and $\\binom{n - 1}{r - 1}$ if every box gets at least one. When a condition like "$x_1 \\le 2$" is awkward, count everything and subtract the ones that break it, like the complement rule. For example, $4$ candies to $3$ children is $\\binom62 = 15$ ways.

**The goal.** Use the "at least one" formula for (a). For (b), count all solutions, then subtract those with $x_1 \\ge 3$.

**Step 1 (a).** $\\binom{8 - 1}{3 - 1} = \\binom72 = 21$. *Why:* put one ball in each box first, then share the other $5$ freely: $\\binom{5 + 2}{2} = 21$, the same.

**Step 2 (b): all solutions.** $\\binom{8 + 2}{2} = \\binom{10}{2} = 45$.

**Step 3 (b): the ones to remove, $x_1 \\ge 3$.** *Why this is easy to count:* give box $1$ three balls first, then share the remaining $5$ freely among all $3$ boxes: $\\binom{5 + 2}{2} = 21$.

**Step 4 (b): subtract.** $45 - 21 = 24$.

**Check (b) directly.** $x_1 = 0$: $x_2 + x_3 = 8$ has $9$ solutions. $x_1 = 1$: $8$. $x_1 = 2$: $7$. Total $9 + 8 + 7 = 24$ ✓.
:::

:::problem 3
A disease affects $1\\%$ of people. A test is positive for $90\\%$ of people who have it and for $5\\%$ of people who don't.

**(a)** One test is positive. The probability of having the disease is {{expr 2: 2/13}}

**(b)** Two tests are done, and their results are independent given whether you have the disease. Both are positive. The probability of having the disease is {{expr 3: 36/47}}
+++
review: 2026-11-25 Bayes' rule: turning a conditional around; 2026-11-25 Independent events

**First, Bayes' rule by counting people.** Imagine a big group, split it into sick and healthy, and count who tests positive in each part. The answer is the sick positives over all positives. For example, out of $10{,}000$ people, $100$ are sick and $90$ of them test positive.

**The goal.** Count $10{,}000$ imaginary people for one test, then for two tests, using independence to multiply within each group.

**Step 1 (a): one test.** Sick and positive: $90\\%$ of $100 = 90$. Healthy and positive: $5\\%$ of $9{,}900 = 495$. So $\\tfrac{90}{585} = \\tfrac{2}{13} \\approx 0.154$.

**Step 2 (b): both positive, sick.** *Why multiply:* given that someone is sick, the two results are independent, so the chance both are positive is $0.9 \\times 0.9 = 0.81$. That's $81$ of the $100$ sick people.

**Step 3 (b): both positive, healthy.** $0.05 \\times 0.05 = 0.0025$ of $9{,}900$ healthy people: $24.75$ people on average.

**Step 4 (b): divide.** $\\tfrac{81}{81 + 24.75} = \\tfrac{81}{105.75} = \\tfrac{324}{423} = \\tfrac{36}{47} \\approx 0.766$.

**Why it jumps so much.** A second positive is far more likely for a sick person ($0.9$) than a healthy one ($0.05$), so it multiplies the odds by $18$ again. The same answer comes from using $\\tfrac{2}{13}$ as the new starting rate: $\\tfrac{\\frac{2}{13}(0.9)}{\\frac{2}{13}(0.9) + \\frac{11}{13}(0.05)} = \\tfrac{1.8}{2.35} = \\tfrac{36}{47}$ ✓.
:::

:::problem 4
A bag has $3$ red and $2$ blue marbles. You draw one at random, then put it back **together with one more marble of the same color**, and draw again.

**(a)** The probability that the second marble is red is {{expr 2: 3/5}}

**(b)** The second marble is red. The probability that the first was red is {{expr 2: 2/3}}
+++
review: 2026-11-25 Conditional probability; 2026-11-25 Bayes' rule: turning a conditional around

**First, splitting into cases.** When the second draw depends on the first, split by what the first draw was: multiply along each case, then add the cases. For example, in the original bag, $P(\\text{red first}) = \\tfrac35$, and then the bag has $4$ red out of $6$.

**The goal.** Add the two ways to get red second for (a), then divide the "red, red" case by that total for (b).

**Step 1 (a): red first, then red.** $\\tfrac35 \\times \\tfrac46 = \\tfrac{12}{30}$. *Why $\\tfrac46$:* after a red, the bag has $4$ red and $2$ blue.

**Step 2 (a): blue first, then red.** $\\tfrac25 \\times \\tfrac36 = \\tfrac{6}{30}$. After a blue, the bag has $3$ red and $3$ blue.

**Step 3 (a): add.** $\\tfrac{12}{30} + \\tfrac{6}{30} = \\tfrac{18}{30} = \\tfrac35$. Surprisingly, the same as the first draw.

**Step 4 (b): divide.** *Why:* we know the second was red, so only the two cases from steps 1 and 2 are possible. The one with red first has $\\tfrac{12}{30}$ of the $\\tfrac{18}{30}$: $\\tfrac{12}{18} = \\tfrac23$.

**Why it's more than $\\tfrac35$.** A red first draw adds a red marble, making a red second draw more likely. So seeing red second is evidence that the first was red.
:::

:::problem 5
$10$ people each choose one of $3$ restaurants at random, independently.

**(a)** The expected number of restaurants that nobody chooses is {{expr 3: 3(2/3)^10}}

**(b)** The expected number of pairs of people who choose the same restaurant is {{expr 2: 15}}
+++
review: 2026-11-30 The expected value of a sum; 2026-11-20 Combinations: choosing without order

**First, expected counts with indicators.** To find the expected number of things that happen, give each thing an indicator ($1$ if it happens, $0$ if not) and add their probabilities. This works even when the things depend on each other. For example, the expected number of people who get their own coat back, out of $10$, is $10 \\times \\tfrac{1}{10} = 1$.

**The goal.** Use one indicator per restaurant for (a), and one per pair of people for (b).

**Step 1 (a): one restaurant.** *Why $\\left(\\tfrac23\\right)^{10}$:* each person avoids that restaurant with probability $\\tfrac23$, independently, so all $10$ avoid it with probability $\\left(\\tfrac23\\right)^{10} \\approx 0.0173$.

**Step 2 (a): add over the $3$ restaurants.** $3\\left(\\tfrac23\\right)^{10} \\approx 0.052$. (The events are dependent, since they can't all be empty at once, but the sum rule doesn't care.)

**Step 3 (b): one pair.** Two given people choose the same restaurant with probability $\\tfrac13$: whatever the first picks, the second matches with chance $\\tfrac13$.

**Step 4 (b): count the pairs and add.** There are $\\binom{10}{2} = 45$ pairs, so the expected number is $45 \\times \\tfrac13 = 15$.
:::

:::problem 6
A fair die is rolled repeatedly.

**(a)** The expected number of rolls until the second $6$ appears is {{expr 2: 12}}

**(b)** The first roll is not a $6$. The probability that the first $6$ comes on roll $3$ is {{expr 2: 5/36}}
+++
review: 2026-12-02 The geometric distribution; 2026-11-25 Conditional probability

**First, geometric waiting.** The number of rolls until the first $6$ is geometric with $p = \\tfrac16$: $P(X = k) = \\left(\\tfrac56\\right)^{k - 1}\\tfrac16$, with mean $\\tfrac1p = 6$. Waiting for the $r$th success is a sum of $r$ geometric waits. For example, $P(X = 2) = \\tfrac56 \\times \\tfrac16 = \\tfrac{5}{36}$.

**The goal.** For (a), add two geometric waits. For (b), use the definition of conditional probability.

**Step 1 (a).** *Why add:* after the first $6$, the wait for the next one starts over, with the same mean $6$. So $6 + 6 = 12$ rolls on average.

**Step 2 (b): set up.** $P(X = 3 \\mid X > 1) = \\dfrac{P(X = 3 \\text{ and } X > 1)}{P(X > 1)}$, and "first $6$ on roll $3$" already means roll $1$ wasn't a $6$, so the top is $P(X = 3) = \\left(\\tfrac56\\right)^2 \\tfrac16 = \\tfrac{25}{216}$.

**Step 3 (b): divide.** $P(X > 1) = \\tfrac56$, so $\\tfrac{25/216}{5/6} = \\tfrac{25}{216} \\times \\tfrac65 = \\tfrac{5}{36}$.

**What this shows.** $\\tfrac{5}{36}$ is exactly $P(X = 2)$: after one non-$6$, the wait starts over, so "roll $3$" is now just "the second roll from here". The geometric distribution has no memory, like the exponential.
:::

:::problem 7
Calls to line A are Poisson with an average of $2$ per hour, and calls to line B are Poisson with an average of $3$ per hour, independently.

**(a)** The probability of no calls at all in an hour is {{expr 1: e^(-5)}}

**(b)** In some hour there were exactly $5$ calls in total. The probability that all $5$ were to line A is {{expr 4: (2/5)^5}}
+++
review: 2026-12-09 Sums of independent random variables; 2026-12-02 The Poisson distribution; 2026-11-25 Conditional probability

**First, Poisson sums and conditioning.** The sum of independent Poissons is Poisson with the rates added. A conditional probability is $\\tfrac{P(\\text{both})}{P(\\text{what you know})}$. For example, if a line averages $2$ calls an hour, $P(\\text{exactly } 1) = 2e^{-2}$.

**The goal.** Use the total rate $5$ for (a). For (b), write "all $5$ to A" as "A $= 5$ and B $= 0$" and divide by $P(\\text{total} = 5)$.

**Step 1 (a).** The total is Poisson with rate $2 + 3 = 5$, so $P(0) = e^{-5}$.

**Step 2 (b): the top.** *Why multiply:* the lines are independent. $P(A = 5) = e^{-2}\\tfrac{2^5}{5!}$ and $P(B = 0) = e^{-3}$, so the product is $e^{-5}\\tfrac{2^5}{5!}$.

**Step 3 (b): the bottom.** $P(\\text{total} = 5) = e^{-5}\\tfrac{5^5}{5!}$.

**Step 4 (b): divide.** The $e^{-5}$ and the $5!$ cancel, leaving $\\tfrac{2^5}{5^5} = \\left(\\tfrac25\\right)^5 \\approx 0.0102$.

**What it means.** Given the total, each call is to line A with chance $\\tfrac{2}{2 + 3} = \\tfrac25$, as if each of the $5$ calls independently picked a line. All $5$ picking A is $\\left(\\tfrac25\\right)^5$.
:::

:::problem 8
$X$ has CDF $F(x) = 1 - \\dfrac{1}{x^2}$ for $x \\ge 1$ (and $F(x) = 0$ for $x < 1$).

**(a)** $P(2 < X \\le 4) =$ {{expr 2: 3/16}}

**(b)** $E[X] =$ {{expr 2: 2}}

**(c)** The median of $X$ (the number $m$ with $P(X \\le m) = \\tfrac12$) is {{expr 1: sqrt(2)}}
+++
review: 2026-12-04 The cumulative distribution function; 2026-12-04 Expected value and variance

**First, what the CDF gives you.** $F(x) = P(X \\le x)$, so an interval's probability is $F(b) - F(a)$, the density is $f = F'$, and $E[X] = \\int x\\,f(x)\\,dx$. For example, for $F(x) = x^2$ on $[0, 1]$, $P(X \\le 0.5) = 0.25$ and $f(x) = 2x$.

**The goal.** Subtract $F$ values for (a), differentiate and integrate for (b), and solve $F(m) = \\tfrac12$ for (c).

**Step 1 (a).** $F(4) - F(2) = \\left(1 - \\tfrac{1}{16}\\right) - \\left(1 - \\tfrac14\\right) = \\tfrac14 - \\tfrac{1}{16} = \\tfrac{3}{16}$.

**Step 2 (b): the density.** $f(x) = F'(x) = \\tfrac{2}{x^3}$ for $x \\ge 1$.

**Step 3 (b): the mean.** $\\int_1^\\infty x \\cdot \\tfrac{2}{x^3}\\,dx = \\int_1^\\infty \\tfrac{2}{x^2}\\,dx = \\left[-\\tfrac{2}{x}\\right]_1^\\infty = 0 - (-2) = 2$.

**Step 4 (c).** $1 - \\tfrac{1}{m^2} = \\tfrac12$ gives $m^2 = 2$, so $m = \\sqrt2 \\approx 1.41$.

**Why the mean is above the median.** Half the values are below $1.41$, but a few are very large (the density shrinks slowly), and they pull the average up to $2$.
:::

:::problem 9
$X$ is exponential with mean $1$, and $Y$ is exponential with mean $\\tfrac12$, independent of $X$.

**(a)** $P(X^2 > 4) =$ {{expr 2: e^(-2)}}

**(b)** Let $M$ be the smaller of $X$ and $Y$. Then $E[M] =$ {{expr 3: 1/3}}
+++
review: 2026-12-07 The distribution of a function of X; 2026-12-04 The exponential distribution; 2026-12-09 Independent random variables

**First, turning a question about a new variable into one about $X$.** To find probabilities for something computed from $X$, rewrite the event in terms of $X$ itself. For example, $P(2X \\le 1) = P(X \\le 0.5)$. An exponential with rate $\\lambda$ (mean $\\tfrac1\\lambda$) has $P(X > x) = e^{-\\lambda x}$.

**The goal.** Rewrite $X^2 > 4$ for (a). For (b), find $P(M > t)$ using independence, recognize the distribution, and read off its mean.

**Step 1 (a).** *Why only $X > 2$:* $X$ is never negative, so $X^2 > 4$ exactly when $X > 2$. With rate $1$: $P(X > 2) = e^{-2} \\approx 0.135$.

**Step 2 (b): "the smaller is more than $t$".** That happens exactly when **both** are more than $t$. *Why multiply:* $X$ and $Y$ are independent. $P(M > t) = e^{-t} \\cdot e^{-2t} = e^{-3t}$ (rate $2$ for $Y$, since its mean is $\\tfrac12$).

**Step 3 (b): recognize it.** $P(M > t) = e^{-3t}$ is the exponential with rate $3$, so $E[M] = \\tfrac13$.

**What it means.** If two independent clocks ring at rates $1$ and $2$ per hour, the first ring comes at rate $1 + 2 = 3$, so after $\\tfrac13$ hour on average.
:::

:::problem 10
$X \\sim N(10, 3^2)$ and $Y \\sim N(6, 4^2)$ are independent. Use $\\Phi(0.8) = 0.7881$ and $\\Phi(2) = 0.9772$.

**(a)** $P(X > Y) =$ {{expr 3: 0.7881}}

**(b)** $P(X + Y > 26) =$ {{expr 2: 0.0228}}
+++
review: 2026-12-09 Sums of independent random variables; 2026-12-07 Standardizing: one table for every normal

**First, sums and differences of independent normals.** They're normal too. Means add or subtract, but variances always **add**, because $\\operatorname{Var}(-Y) = (-1)^2\\operatorname{Var}(Y) = \\operatorname{Var}(Y)$. For example, part scores $N(40, 3^2)$ and $N(30, 4^2)$ total $N(70, 5^2)$.

**The goal.** Turn $X > Y$ into $X - Y > 0$, find that normal, and standardize. Do the same for $X + Y$.

**Step 1 (a): the difference.** $X - Y$ has mean $10 - 6 = 4$ and variance $9 + 16 = 25$, so standard deviation $5$.

**Step 2 (a): standardize.** $P(X - Y > 0)$ has $z = \\tfrac{0 - 4}{5} = -0.8$. So $P = 1 - \\Phi(-0.8) = \\Phi(0.8) = 0.7881$. *Why $\\Phi(0.8)$:* by symmetry, the area right of $-0.8$ equals the area left of $0.8$.

**Step 3 (b): the sum.** Mean $16$, standard deviation $5$. $z = \\tfrac{26 - 16}{5} = 2$, so $P = 1 - 0.9772 = 0.0228$.

**Common mistake.** Subtracting the variances for $X - Y$ ($16 - 9 = 7$). A difference is just as spread out as a sum.
:::

:::problem 11
$X$ and $Y$ have joint density $f(x, y) = x + y$ on the unit square $0 \\le x, y \\le 1$.

**(a)** $\\operatorname{Cov}(X, Y) =$ {{expr 3: -1/144}}

**(b)** $E[X \\mid Y = 1] =$ {{expr 2: 5/9}}
+++
review: 2026-12-09 Joint densities; 2026-12-11 Covariance; 2026-12-11 Conditional expectation

**First, expected values from a joint density.** $E[g(X, Y)] = \\iint g(x, y)\\,f(x, y)\\,dA$, and the conditional density of $X$ given $Y = y$ is $\\tfrac{f(x, y)}{f_Y(y)}$. For example, here $f_X(x) = \\int_0^1 (x + y)\\,dy = x + \\tfrac12$.

**The goal.** Find $E[X]$, $E[Y]$, and $E[XY]$ for the covariance. Then find the conditional density at $y = 1$ and average $x$ with it.

**Step 1: $E[X]$.** $\\int_0^1 x\\left(x + \\tfrac12\\right)dx = \\tfrac13 + \\tfrac14 = \\tfrac{7}{12}$. By symmetry ($f$ treats $x$ and $y$ the same), $E[Y] = \\tfrac{7}{12}$.

**Step 2: $E[XY]$.** $\\int_0^1\\!\\int_0^1 xy(x + y)\\,dy\\,dx = \\int_0^1\\!\\int_0^1 (x^2y + xy^2)\\,dy\\,dx = \\tfrac13 \\cdot \\tfrac12 + \\tfrac12 \\cdot \\tfrac13 = \\tfrac13$.

**Step 3 (a): covariance.** $\\tfrac13 - \\tfrac{7}{12} \\cdot \\tfrac{7}{12} = \\tfrac{48}{144} - \\tfrac{49}{144} = -\\tfrac{1}{144}$. Slightly negative.

**Step 4 (b): the conditional density.** $f_Y(1) = 1 + \\tfrac12 = \\tfrac32$, so given $Y = 1$, $X$ has density $\\tfrac{x + 1}{3/2} = \\tfrac{2(x + 1)}{3}$ on $[0, 1]$. Check: $\\int_0^1 \\tfrac{2(x + 1)}{3}\\,dx = \\tfrac23 \\cdot \\tfrac32 = 1$ ✓.

**Step 5 (b): average.** $\\int_0^1 x \\cdot \\tfrac{2(x + 1)}{3}\\,dx = \\tfrac23\\left(\\tfrac13 + \\tfrac12\\right) = \\tfrac23 \\cdot \\tfrac56 = \\tfrac59 \\approx 0.556$.

**It agrees with the sign of the covariance.** Knowing $Y$ is large ($1$) lowered the average of $X$ from $\\tfrac{7}{12} \\approx 0.583$ to $\\tfrac59 \\approx 0.556$: a slight downward trend, as the negative covariance says.
:::

:::problem 12
A random variable $W$ has moment generating function $M(t) = e^{2(e^t - 1)}\\left(\\tfrac12 + \\tfrac12 e^t\\right)^4$.

**(a)** $E[W] =$ {{expr 2: 4}}

**(b)** $\\operatorname{Var}(W) =$ {{expr 1: 3}}

**(c)** $48$ independent copies of $W$ are averaged. Using the central limit theorem and $\\Phi(2) = 0.9772$, the probability the average is more than $4.5$ is about {{expr 2: 0.0228}}
+++
review: 2026-12-11 Moment generating functions; 2026-12-14 The central limit theorem

**First, reading an MGF.** For independent random variables, the MGF of a sum is the product of their MGFs, and an MGF determines the distribution. So a product of known MGFs is a sum of known random variables. For example, $e^{\\lambda(e^t - 1)}$ is Poisson with rate $\\lambda$, and $(1 - p + pe^t)^n$ is binomial.

**The goal.** Recognize $W$ as a Poisson plus a binomial, add their means and variances, then use the central limit theorem for the average.

**Step 1: recognize the pieces.** $e^{2(e^t - 1)}$ is Poisson with rate $2$. $\\left(\\tfrac12 + \\tfrac12 e^t\\right)^4$ is binomial with $n = 4$, $p = \\tfrac12$. The product means $W$ is their sum, with the two independent.

**Step 2 (a): the mean.** $2 + 4 \\cdot \\tfrac12 = 2 + 2 = 4$.

**Step 3 (b): the variance.** *Why add:* the pieces are independent. Poisson: $2$. Binomial: $4 \\cdot \\tfrac12 \\cdot \\tfrac12 = 1$. Total $3$.

**Step 4 (c): the average.** It has mean $4$ and variance $\\tfrac{3}{48} = \\tfrac{1}{16}$, so standard deviation $\\tfrac14$. By the central limit theorem it's approximately normal.

**Step 5 (c): standardize.** $z = \\tfrac{4.5 - 4}{1/4} = 2$, so $P \\approx 1 - 0.9772 = 0.0228$.

**Check (a) by differentiating.** $\\ln M = 2(e^t - 1) + 4\\ln\\left(\\tfrac12 + \\tfrac12 e^t\\right)$, so $\\tfrac{M'}{M} = 2e^t + \\tfrac{2e^t}{\\frac12 + \\frac12 e^t}$. At $t = 0$, $M = 1$, so $M'(0) = 2 + \\tfrac{2}{1} = 4$ ✓.
:::
`;export{e as default};