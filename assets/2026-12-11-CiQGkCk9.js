var e=`---
title: Covariance, conditional expectation, and moment generating functions
date: 2026-12-11
source: Grinstead and Snell, Introduction to Probability, §6.1 and §6.2 (expected value and variance of sums, conditional expectation), §10.1 Generating Functions for Discrete Distributions, and §10.3 Generating Functions for Continuous Densities
---

:::recap Last time
- A **joint table** $p(x, y)$ gives probabilities for two random variables together. In the coin example (flip twice; $X = 1$ if the first flip is heads, $Y$ = total heads), each of the pairs $(0, 0)$, $(0, 1)$, $(1, 1)$, $(1, 2)$ has probability $\\tfrac14$.
- $E[X + Y] = E[X] + E[Y]$ always, and $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y)$ when $X$ and $Y$ are independent.
- $E[g(X, Y)] = \\sum g(x, y)\\,p(x, y)$: apply $g$ to each pair, then weight by its probability.
:::

:::check
Warm-up: in the coin example, what is $E[XY]$?
answer: 3/4
???
Multiply $x \\cdot y$ in each cell and weight by $\\tfrac14$: $(0)(0) + (0)(1) + (1)(1) + (1)(2) = 3$, times $\\tfrac14$, is $\\tfrac34$.
:::

:::question Today
Last time we only asked **whether** two random variables are related. Today: **how strongly**, with one number; what that means for the variance of a sum; how to average one variable once you know the other; and a function that packs every moment $E[X], E[X^2], \\ldots$ into one formula.
:::

:::idea Covariance
The [[covariance|covariance]] measures whether $X$ and $Y$ tend to be above their means at the same time:

$$\\operatorname{Cov}(X, Y) = E\\big[(X - \\mu_X)(Y - \\mu_Y)\\big] = E[XY] - E[X]\\,E[Y].$$

It's **positive** when they tend to move together, **negative** when one tends to be high while the other is low, and **zero** when $X$ and $Y$ are independent. Also, $\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$ and $\\operatorname{Cov}(aX, bY) = ab\\,\\operatorname{Cov}(X, Y)$.

**Example.** In the coin example, $E[X] = \\tfrac12$ and $E[Y] = 1$, so $\\operatorname{Cov}(X, Y) = \\tfrac34 - \\tfrac12 \\cdot 1 = \\tfrac14$. Positive, as expected: a heads on the first flip pushes the total up.
>>> What the sign means, cell by cell
Use the first formula, $E[(X - \\mu_X)(Y - \\mu_Y)]$, with $\\mu_X = \\tfrac12$ and $\\mu_Y = 1$.

1. **Find each cell's deviations.** *Why:* the deviation says whether that value is above (positive) or below (negative) its mean.
   - $(0, 0)$: $0 - \\tfrac12 = -\\tfrac12$ and $0 - 1 = -1$. Both below.
   - $(0, 1)$: $-\\tfrac12$ and $0$.
   - $(1, 1)$: $\\tfrac12$ and $0$.
   - $(1, 2)$: $\\tfrac12$ and $1$. Both above.
2. **Multiply the deviations.** *Why multiply:* the product is positive when both are on the same side of their means, and negative when they're on opposite sides. The products are $\\tfrac12$, $0$, $0$, $\\tfrac12$.
3. **Average with the probabilities.** $\\tfrac14\\left(\\tfrac12 + 0 + 0 + \\tfrac12\\right) = \\tfrac14$ ✓, the same as the shortcut.

The only nonzero cells are "both below" and "both above", so the covariance came out positive. No cell had one above and one below.
<<<
>>> Zero covariance does not mean independent
Let $X$ be $-1$, $0$, or $1$, each with probability $\\tfrac13$, and let $Y = X^2$.

1. **They're clearly dependent.** *Why:* knowing $X$ tells you $Y$ exactly. If $X = 0$, then $Y = 0$ for sure, but $P(Y = 0) = \\tfrac13$ on its own.
2. **Find $E[X]$.** $\\tfrac13(-1 + 0 + 1) = 0$.
3. **Find $E[XY]$.** $XY = X^3$, which is $-1, 0, 1$, so $E[XY] = \\tfrac13(-1 + 0 + 1) = 0$.
4. **Covariance.** The three equally likely pairs $(X, Y)$ are $(-1, 1)$, $(0, 0)$, and $(1, 1)$, so $E[Y] = \\tfrac13(1 + 0 + 1) = \\tfrac23$. Then $\\operatorname{Cov}(X, Y) = 0 - 0 \\times \\tfrac23 = 0$ ✓.

Covariance only detects a **straight-line** trend. Here $Y$ is high at both ends ($X = -1$ and $X = 1$) and low in the middle, so there's no upward or downward trend, even though $Y$ depends on $X$ completely.
<<<
:::

:::check
$E[XY] = 10$, $E[X] = 2$, and $E[Y] = 3$. What is $\\operatorname{Cov}(X, Y)$?
answer: 4
???
$\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y] = 10 - 2 \\times 3 = 4$.
:::

:::idea The variance of a sum, and correlation
When $X$ and $Y$ aren't independent, the variance of their sum has an extra term:

$$\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y).$$

Covariance depends on the units (centimeters instead of meters multiplies it by $100$). The [[correlation|correlation]] removes that by dividing by both standard deviations:

$$\\rho(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X\\,\\sigma_Y}, \\qquad -1 \\le \\rho \\le 1.$$

$\\rho = 1$ or $-1$ means $Y$ is exactly a straight-line function of $X$; $\\rho = 0$ means no straight-line trend.

**Example.** In the coin example, $\\operatorname{Var}(X) = \\tfrac14$, $\\operatorname{Var}(Y) = \\tfrac12$, and $\\operatorname{Cov}(X, Y) = \\tfrac14$. So $\\operatorname{Var}(X + Y) = \\tfrac14 + \\tfrac12 + 2 \\cdot \\tfrac14 = \\tfrac54$, and $\\rho = \\dfrac{1/4}{\\sqrt{1/4}\\,\\sqrt{1/2}} \\approx 0.707$.
>>> Checking $\\operatorname{Var}(X + Y) = \\tfrac54$ directly
1. **Where the extra term comes from.** *Why:* $\\operatorname{Var}(X + Y)$ is the expected square of $(X - \\mu_X) + (Y - \\mu_Y)$. Squaring a sum gives $(X - \\mu_X)^2 + (Y - \\mu_Y)^2 + 2(X - \\mu_X)(Y - \\mu_Y)$, and the expected values of those three pieces are $\\operatorname{Var}(X)$, $\\operatorname{Var}(Y)$, and $2\\operatorname{Cov}(X, Y)$.
2. **List $X + Y$ for each outcome.** $TT$: $0 + 0 = 0$. $TH$: $0 + 1 = 1$. $HT$: $1 + 1 = 2$. $HH$: $1 + 2 = 3$. Each has probability $\\tfrac14$.
3. **Its mean.** $\\tfrac14(0 + 1 + 2 + 3) = 1.5$, which is $\\mu_X + \\mu_Y = 0.5 + 1$ ✓.
4. **Its variance.** The distances from $1.5$ are $-1.5, -0.5, 0.5, 1.5$, with squares $2.25, 0.25, 0.25, 2.25$. Averaging: $\\tfrac{5}{4}$ ✓.
5. **Without the covariance term** you'd get $\\tfrac14 + \\tfrac12 = \\tfrac34$, too small. $X$ and $Y$ move together, so their sum swings more than independent pieces would.
6. **The correlation.** $\\sigma_X = \\sqrt{1/4} = 0.5$ and $\\sigma_Y = \\sqrt{1/2} \\approx 0.707$, so $\\rho = \\dfrac{0.25}{0.5 \\times 0.707} \\approx 0.707$: a fairly strong positive trend, but not $1$, because the second flip adds randomness to $Y$ that $X$ doesn't know about.
<<<
:::

:::check
$\\operatorname{Var}(X) = 4$, $\\operatorname{Var}(Y) = 9$, and $\\operatorname{Cov}(X, Y) = -3$. What is $\\operatorname{Var}(X + Y)$?
answer: 7
???
$4 + 9 + 2(-3) = 7$. The negative covariance makes the sum **less** spread out: when one is high, the other tends to be low, and they partly cancel.
:::

:::idea Conditional expectation
The [[conditional-expectation|conditional expectation]] $E[X \\mid Y = y]$ is the average of $X$ once you know $Y = y$: the expected value using the conditional distribution,

$$E[X \\mid Y = y] = \\sum_x x\\,p_{X \\mid Y}(x \\mid y).$$

Averaging those over $Y$ gives back $E[X]$. This is the **law of total expectation**:

$$E[X] = \\sum_y E[X \\mid Y = y]\\,P(Y = y).$$

It lets you split a hard problem into cases. (Lecture 4 did this to show a geometric wait takes $\\tfrac1p$ tries on average: it split on whether the first try succeeded.)

**Example.** Roll a die, then flip that many coins. On average, how many heads? Given the die shows $n$, the heads are binomial with mean $\\tfrac n2$. Averaging over the die, the expected number of heads is $\\tfrac{3.5}{2} = 1.75$.
>>> The die-and-coins example, step by step
Let $N$ be the die roll and $H$ the number of heads.

1. **Condition on what makes it easy.** *Why $N$:* once you know how many coins you're flipping, $H$ is a binomial you already know. Given $N = n$, $H$ is binomial with $n$ flips and $p = \\tfrac12$, so $E[H \\mid N = n] = \\tfrac n2$. For example, with $4$ coins you expect $2$ heads.
2. **List the cases.** $E[H \\mid N = n]$ for $n = 1, \\ldots, 6$ is $0.5, 1, 1.5, 2, 2.5, 3$, each with probability $\\tfrac16$.
3. **Average them.** $\\tfrac16(0.5 + 1 + 1.5 + 2 + 2.5 + 3) = \\tfrac{10.5}{6} = 1.75$.
4. **The same as half the average die.** $\\tfrac12 E[N] = \\tfrac12 \\times 3.5 = 1.75$ ✓.

Doing it directly would mean finding $P(H = k)$ for every $k$ from $0$ to $6$, which mixes all six dice outcomes together. Splitting by $N$ avoided that.
<<<
:::

:::check
In the coin example, what is $E[Y \\mid X = 1]$, the expected total number of heads given that the first flip was heads?
answer: 3/2
???
Given $X = 1$, $Y$ is $1$ or $2$ with probability $\\tfrac12$ each (the second flip decides), so $E[Y \\mid X = 1] = \\tfrac12(1) + \\tfrac12(2) = \\tfrac32$. Similarly $E[Y \\mid X = 0] = \\tfrac12$, and averaging the two cases, $\\tfrac12 \\cdot \\tfrac32 + \\tfrac12 \\cdot \\tfrac12 = 1 = E[Y]$ ✓.
:::

:::idea Moment generating functions
The **moments** of $X$ are $E[X], E[X^2], E[X^3], \\ldots$ The [[moment-generating-function|moment generating function]] packs all of them into one function of $t$:

$$M(t) = E\\big[e^{tX}\\big], \\qquad M'(0) = E[X], \\qquad M''(0) = E[X^2], \\qquad M^{(n)}(0) = E[X^n].$$

Two facts make it powerful:
- If two random variables have the same $M(t)$ (near $t = 0$), they have the same distribution.
- If $X$ and $Y$ are independent, $M_{X + Y}(t) = M_X(t)\\,M_Y(t)$.

**Common ones:** binomial $(1 - p + pe^t)^n$; Poisson $e^{\\lambda(e^t - 1)}$; normal $e^{\\mu t + \\sigma^2 t^2 / 2}$; exponential $\\dfrac{\\lambda}{\\lambda - t}$ for $t < \\lambda$.

**Why Poissons add up to a Poisson.** $M_X(t)\\,M_Y(t) = e^{\\lambda_1(e^t - 1)}\\,e^{\\lambda_2(e^t - 1)} = e^{(\\lambda_1 + \\lambda_2)(e^t - 1)}$, which is the Poisson formula with rate $\\lambda_1 + \\lambda_2$. Normals work the same way.
>>> Why $M'(0) = E[X]$, with a die
$X$ is one roll of a die.

1. **Write $M(t)$.** *Why:* $E[e^{tX}]$ is $e^{tx}$ weighted by each probability.

   $$M(t) = \\tfrac16\\left(e^{t} + e^{2t} + e^{3t} + e^{4t} + e^{5t} + e^{6t}\\right).$$

2. **Differentiate once.** The derivative of $e^{xt}$ is $x\\,e^{xt}$, so

   $$M'(t) = \\tfrac16\\left(1e^{t} + 2e^{2t} + \\cdots + 6e^{6t}\\right).$$

3. **Set $t = 0$.** *Why $0$:* every $e^{x \\cdot 0} = 1$, which leaves just the $x$'s. $M'(0) = \\tfrac16(1 + 2 + \\cdots + 6) = 3.5 = E[X]$ ✓.
4. **Differentiate twice.** Each term picks up another factor of $x$: $M''(0) = \\tfrac16(1 + 4 + 9 + 16 + 25 + 36) = \\tfrac{91}{6} = E[X^2]$ ✓, the same as in lecture 3.

Each derivative brings down one more power of $x$, and $t = 0$ removes the exponentials. That's why the $n$th derivative at $0$ is $E[X^n]$.
<<<
>>> Finding the Poisson's $M(t)$ and mean, step by step
Take $\\lambda = 2$.

1. **Write the sum.** $M(t) = \\sum_{k=0}^\\infty e^{tk}\\, e^{-2} \\dfrac{2^k}{k!}$.
2. **Combine the powers.** *Why:* $e^{tk}\\,2^k = (2e^t)^k$, which makes a familiar series. $M(t) = e^{-2} \\sum_{k=0}^\\infty \\dfrac{(2e^t)^k}{k!}$.
3. **Use the series for $e$.** *Why this applies:* from calculus, $\\sum_{k=0}^\\infty \\dfrac{a^k}{k!} = e^a$ for any number $a$. With $a = 2e^t$, the sum is $e^{2e^t}$. So $M(t) = e^{-2}\\,e^{2e^t} = e^{2(e^t - 1)}$.
4. **Find the mean.** By the chain rule, $M'(t) = 2e^t \\cdot e^{2(e^t - 1)}$. At $t = 0$: $2 \\cdot 1 \\cdot e^{0} = 2 = \\lambda$ ✓.
<<<
:::

:::check
$X$ has moment generating function $M(t) = \\left(\\tfrac12 + \\tfrac12 e^t\\right)^{10}$. What is $E[X]$?
answer: 5
???
This is the binomial formula with $n = 10$ and $p = \\tfrac12$, so $E[X] = np = 5$. Or differentiate: $M'(t) = 10\\left(\\tfrac12 + \\tfrac12 e^t\\right)^9 \\cdot \\tfrac12 e^t$, and $M'(0) = 10 \\cdot 1 \\cdot \\tfrac12 = 5$.
:::

:::summary Summary
- **Covariance:** $\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]$. Positive means they move together; independent means $0$, but $0$ doesn't mean independent.
- **Variance of a sum:** $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)$. **Correlation** $\\rho = \\dfrac{\\operatorname{Cov}}{\\sigma_X \\sigma_Y}$ is between $-1$ and $1$.
- **Conditional expectation:** $E[X \\mid Y = y]$ averages $X$ given $Y = y$, and $E[X] = \\sum_y E[X \\mid Y = y]\\,P(Y = y)$. Split into cases that are easy.
- **Moment generating function:** $M(t) = E[e^{tX}]$ with $M^{(n)}(0) = E[X^n]$. It determines the distribution, and for independent sums the $M$'s multiply.

**Common mistakes:**
- Leaving out $2\\operatorname{Cov}(X, Y)$ for a sum that isn't independent.
- Concluding "independent" from a covariance of $0$.
- Forgetting to set $t = 0$ after differentiating $M(t)$.
:::
`;export{e as default};