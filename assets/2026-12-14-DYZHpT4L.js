var e=`---
title: The law of large numbers and the central limit theorem
date: 2026-12-14
source: Grinstead and Snell, Introduction to Probability, §8.1 and §8.2 Law of Large Numbers, and §9.1 to §9.3 Central Limit Theorem
---

:::recap Last time
- For independent random variables, means add and **variances** add: $\\operatorname{Var}(X_1 + \\cdots + X_n) = \\operatorname{Var}(X_1) + \\cdots + \\operatorname{Var}(X_n)$.
- $\\operatorname{Var}(aX) = a^2 \\operatorname{Var}(X)$.
- For a normal $X \\sim N(\\mu, \\sigma^2)$, $P(X \\le x) = \\Phi\\!\\left(\\frac{x - \\mu}{\\sigma}\\right)$, with $\\Phi(1) = 0.8413$ and $\\Phi(2) = 0.9772$.
:::

:::check
Warm-up: $X_1, \\ldots, X_{16}$ are independent, each with variance $4$. Their average is $\\bar X = \\dfrac{X_1 + \\cdots + X_{16}}{16}$. What is $\\operatorname{Var}(\\bar X)$?
answer: 1/4
???
The sum has variance $16 \\times 4 = 64$. Dividing by $16$ multiplies the variance by $\\tfrac{1}{16^2}$, so $\\operatorname{Var}(\\bar X) = \\tfrac{64}{256} = \\tfrac14$. In general, the average of $n$ has variance $\\tfrac{\\sigma^2}{n}$.
:::

:::question Today
Lecture 3 said the expected value is the "long-run average". Why is that true? And why do so many things, like the total of many dice or the average of many measurements, end up shaped like a bell curve, even when each piece isn't? These two facts, the **law of large numbers** and the **central limit theorem**, are the two big theorems of a first probability course.
:::

:::idea Markov's and Chebyshev's inequalities
Even knowing only the mean, or the mean and the variance, you can put a limit on how often a random variable is far out:

- **Markov's inequality.** If $X \\ge 0$, then for any $a > 0$: $\\quad P(X \\ge a) \\le \\dfrac{E[X]}{a}$.
- **Chebyshev's inequality.** For any $X$ with mean $\\mu$ and variance $\\sigma^2$, and any $k > 0$: $\\quad P(|X - \\mu| \\ge k) \\le \\dfrac{\\sigma^2}{k^2}$.

**Example.** Exam scores have mean $70$ and standard deviation $10$, and nothing else is known. Chebyshev with $k = 20$: the chance of a score at most $50$ or at least $90$ is at most $\\tfrac{100}{400} = \\tfrac14$. So **at least** $75\\%$ of scores are between $50$ and $90$. (If the scores happened to be normal, the true chance would be only about $4.6\\%$; Chebyshev is a guarantee for every distribution, so it's cautious.)
>>> Why the two inequalities are true, with numbers
**Markov.** Say the average wait at a clinic is $5$ minutes. Can more than a quarter of people wait $20$ minutes or more?
1. **Suppose they did.** *Why suppose:* we'll show it leads to an impossible average. If more than $\\tfrac14$ of people waited at least $20$ minutes, those people alone would add more than $\\tfrac14 \\times 20 = 5$ minutes to the average. For example, if $30\\%$ waited $20$ minutes or more, they'd add at least $0.3 \\times 20 = 6$ minutes, already more than $5$.
2. **Nobody waits a negative time.** So everyone else adds at least $0$, and the average would be **more** than $5$. But it's exactly $5$. So at most $\\tfrac14$ wait $20$ minutes or more: $P(X \\ge 20) \\le \\tfrac{5}{20}$, which is Markov.

**Chebyshev.** It's Markov applied to the squared distance $(X - \\mu)^2$, which is never negative.
1. **Rewrite the event.** "$|X - \\mu| \\ge k$" is the same as "$(X - \\mu)^2 \\ge k^2$". For the exam, "at least $20$ from $70$" is "squared distance at least $400$".
2. **Use Markov on $(X - \\mu)^2$.** Its expected value is the variance, $\\sigma^2 = 100$. So $P\\big((X - 70)^2 \\ge 400\\big) \\le \\tfrac{100}{400} = \\tfrac14$.
<<<
:::

:::check
Chebyshev's inequality says the probability of being at least $3$ standard deviations from the mean is at most what?
answer: 1/9
???
Take $k = 3\\sigma$: $\\dfrac{\\sigma^2}{(3\\sigma)^2} = \\dfrac{\\sigma^2}{9\\sigma^2} = \\dfrac19 \\approx 0.111$. For a normal it's really about $0.003$, but $\\tfrac19$ holds for any distribution.
:::

:::idea The law of large numbers
Let $X_1, X_2, \\ldots, X_n$ be independent, each with mean $\\mu$ and variance $\\sigma^2$, and let $\\bar X_n$ be their average. Then $E[\\bar X_n] = \\mu$ and $\\operatorname{Var}(\\bar X_n) = \\dfrac{\\sigma^2}{n}$, so Chebyshev gives, for any $\\varepsilon > 0$,

$$P\\big(|\\bar X_n - \\mu| \\ge \\varepsilon\\big) \\le \\frac{\\sigma^2}{n\\,\\varepsilon^2},$$

which goes to $0$ as $n$ grows. This is the [[law-of-large-numbers|law of large numbers]]: with enough repetitions, the average is almost certainly as close to $\\mu$ as you like. That's why the expected value is the long-run average.

**Example.** Flip a fair coin $n$ times; each flip is $1$ for heads, $0$ for tails, with $\\mu = \\tfrac12$ and $\\sigma^2 = \\tfrac14$. The chance that the fraction of heads is off from $0.5$ by $0.05$ or more is at most $\\dfrac{0.25}{n \\times 0.0025} = \\dfrac{100}{n}$. For $n = 10{,}000$ flips, that's at most $1\\%$.
>>> The coin, with numbers, and what the law does not say
1. **Why $\\operatorname{Var}(\\bar X_n) = \\tfrac{\\sigma^2}{n}$.** The sum of $n$ independent flips has variance $n\\sigma^2$, and dividing by $n$ divides the variance by $n^2$. So $\\tfrac{n\\sigma^2}{n^2} = \\tfrac{\\sigma^2}{n}$. For $100$ flips, $\\tfrac{0.25}{100} = 0.0025$, a standard deviation of $0.05$.
2. **The bound for a few values of $n$.** With $\\varepsilon = 0.05$, the bound is $\\tfrac{100}{n}$:
   - $n = 100$: at most $1$, which says nothing (every probability is at most $1$).
   - $n = 1{,}000$: at most $0.1$.
   - $n = 10{,}000$: at most $0.01$.
3. **What it does not say.** The **count** of heads doesn't get close to $\\tfrac n2$. The count's standard deviation is $\\sqrt{n \\times 0.25} = \\tfrac{\\sqrt n}{2}$: $5$ for $100$ flips, but $50$ for $10{,}000$ flips. It's the **fraction** that settles down: $\\tfrac{5}{100} = 0.05$, then $\\tfrac{50}{10{,}000} = 0.005$.
4. **No "catching up".** After $10$ tails in a row, the next flip is still heads with probability $\\tfrac12$; the coin doesn't remember. Early streaks don't get canceled; they just get diluted by thousands of later flips.
<<<
:::

:::check
Using Chebyshev, how many coin flips $n$ are needed to guarantee that the fraction of heads is within $0.1$ of $0.5$ with probability at least $0.95$? (Give the smallest $n$.)
answer: 500
???
We need $P(|\\bar X_n - 0.5| \\ge 0.1) \\le 0.05$. The bound is $\\dfrac{0.25}{n \\times 0.01} = \\dfrac{25}{n}$, and $\\dfrac{25}{n} \\le 0.05$ when $n \\ge \\dfrac{25}{0.05} = 500$.
:::

:::idea The central limit theorem
The law of large numbers says the average settles near $\\mu$. The [[central-limit-theorem|central limit theorem]] says what shape the leftover randomness has: for large $n$, the sum $S_n$ of $n$ independent, identically distributed random variables with mean $\\mu$ and variance $\\sigma^2$ is approximately normal, **whatever the shape of each one**:

$$\\frac{S_n - n\\mu}{\\sigma\\sqrt n} \\approx N(0, 1), \\qquad\\text{equivalently}\\qquad \\bar X_n \\approx N\\!\\left(\\mu, \\frac{\\sigma^2}{n}\\right).$$

So probabilities about sums and averages come from the $\\Phi$ table. Lecture 6's normal approximation to the binomial was a special case: a binomial is a sum of $n$ indicators.

**Example.** Light bulb lifetimes are exponential with mean $100$ hours, so the standard deviation is also $100$ (lecture 5). The average lifetime of $100$ bulbs is approximately normal with mean $100$ and standard deviation $\\tfrac{100}{\\sqrt{100}} = 10$. So the chance the average is above $120$ hours is about $1 - \\Phi(2) = 0.0228$.
>>> The bulb example, step by step
1. **The mean and standard deviation of one bulb.** *Why:* the theorem only needs these two numbers. An exponential with mean $100$ has $\\lambda = \\tfrac{1}{100}$, and its variance is $\\tfrac{1}{\\lambda^2} = 10{,}000$, so $\\sigma = 100$.
2. **The average of $100$ bulbs.** Its mean is still $100$. Its variance is $\\tfrac{\\sigma^2}{n} = \\tfrac{10{,}000}{100} = 100$, so its standard deviation is $10$.
3. **Use the normal shape.** *Why we can:* the central limit theorem says the average of $100$ independent bulbs is close to normal, even though one bulb's lifetime is very lopsided (most burn out early, a few last very long).
4. **Standardize.** $z = \\dfrac{120 - 100}{10} = 2$.
5. **Use the table.** $P(\\bar X > 120) \\approx 1 - \\Phi(2) = 1 - 0.9772 = 0.0228$.
6. **How good is it?** The exact answer (the sum of exponentials has a known distribution, the gamma) is about $0.0279$. Close, but a little higher, because some of the original lopsidedness is still there at $n = 100$. With more bulbs the match gets better.
<<<
>>> Watching the bell appear, with dice
Count the ways to get each total.

1. **One die.** Each of $1$ to $6$ has $1$ way: flat, nothing like a bell.
2. **Two dice.** *Why the middle wins:* there are more pairs that add to middle totals. The counts for totals $2$ to $12$ are $1$, $2$, $3$, $4$, $5$, $6$, $5$, $4$, $3$, $2$, $1$ out of $36$: a triangle.
3. **Three dice.** The counts for totals $3$ to $18$ are $1$, $3$, $6$, $10$, $15$, $21$, $25$, $27$, $27$, $25$, $21$, $15$, $10$, $6$, $3$, $1$ out of $216$. The sides already curve like a bell.
4. **Compare with the normal.** Three dice have mean $3 \\times 3.5 = 10.5$ and variance $3 \\times \\tfrac{35}{12} = 8.75$. The normal approximation (with continuity correction) for a total of $10$ or $11$ gives $\\Phi\\!\\left(\\tfrac{11.5 - 10.5}{\\sqrt{8.75}}\\right) - \\Phi\\!\\left(\\tfrac{9.5 - 10.5}{\\sqrt{8.75}}\\right) \\approx 0.265$, and the exact answer is $\\tfrac{27 + 27}{216} = 0.25$. Already close with just $3$ dice.
<<<
:::

:::check
Measurements have mean $50$ and standard deviation $12$. What is the standard deviation of the average of $36$ independent measurements?
answer: 2
???
$\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{12}{\\sqrt{36}} = \\dfrac{12}{6} = 2$. By the central limit theorem, that average is approximately $N(50, 2^2)$.
:::

:::check
Same measurements. About what is the probability that the average of $36$ of them is above $54$?
- [ ] $0.1587$
  why: That's $1 - \\Phi(1)$. The average's standard deviation is $2$, not $4$, so $54$ is $2$ standard deviations above $50$.
- [x] $0.0228$
  why: $z = \\tfrac{54 - 50}{2} = 2$, and $1 - \\Phi(2) = 0.0228$.
- [ ] $0.3694$
  why: That uses the standard deviation of one measurement, $12$: $z = \\tfrac{4}{12} = \\tfrac13$, and $1 - \\Phi\\!\\left(\\tfrac13\\right) \\approx 0.3694$. The average is much less spread out than one measurement.
- [ ] $0.9772$
  why: That's $\\Phi(2)$, the chance of being **below** $54$.
???
The average is approximately $N(50, 2^2)$, so $z = 2$ and $P(\\bar X > 54) \\approx 1 - 0.9772 = 0.0228$.
:::

:::summary Summary
- **Markov:** $P(X \\ge a) \\le \\dfrac{E[X]}{a}$ for $X \\ge 0$. **Chebyshev:** $P(|X - \\mu| \\ge k) \\le \\dfrac{\\sigma^2}{k^2}$. They hold for every distribution, so they're cautious.
- **Law of large numbers:** the average $\\bar X_n$ has variance $\\dfrac{\\sigma^2}{n}$, so it gets as close to $\\mu$ as you like with high probability. The fraction settles down; the count does not, and there's no catching up.
- **Central limit theorem:** sums and averages of many independent, identically distributed pieces are approximately normal: $\\bar X_n \\approx N\\!\\left(\\mu, \\dfrac{\\sigma^2}{n}\\right)$, whatever each piece looks like.

**Common mistakes:**
- Using $\\sigma$ instead of $\\dfrac{\\sigma}{\\sqrt n}$ for the spread of an average.
- Thinking a streak of tails makes heads "due".
- Treating Chebyshev's bound as the actual probability. It's only an upper limit.
:::
`;export{e as default};