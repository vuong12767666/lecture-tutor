var e=`---
title: Joint distributions, independence, and sums
date: 2026-12-09
source: Grinstead and Snell, Introduction to Probability, §4.2 Continuous Conditional Probability (joint densities), §7.1 Sums of Discrete Random Variables, and §7.2 Sums of Continuous Random Variables
---

:::recap Last time
- A continuous $X$ has a density $f$ with $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$, and $X \\sim N(\\mu, \\sigma^2)$ is the bell curve, with $P(X \\le x) = \\Phi\\!\\left(\\frac{x - \\mu}{\\sigma}\\right)$.
- Events are **independent** when $P(A \\text{ and } B) = P(A)\\,P(B)$, and $P(A \\mid B) = \\dfrac{P(A \\text{ and } B)}{P(B)}$.
- From Calc 3: a double integral $\\iint_R f(x, y)\\,dA$ adds up $f$ over a region $R$ of the plane.
:::

:::check
Warm-up (Calc 3): what is $\\displaystyle\\int_0^1 \\!\\! \\int_0^1 (x + y)\\,dy\\,dx$?
answer: 1
???
Inside: $\\int_0^1 (x + y)\\,dy = x + \\tfrac12$. Outside: $\\int_0^1 \\left(x + \\tfrac12\\right) dx = \\tfrac12 + \\tfrac12 = 1$.
:::

:::question Today
So far we've had one random variable at a time. But a person has a height **and** a weight, and an exam has a part 1 score **and** a part 2 score. How do you describe two random variables together, tell whether they're related, and find the distribution of their sum?
:::

:::idea Joint distributions of discrete random variables
The **joint probability mass function** of $X$ and $Y$ is $p(x, y) = P(X = x \\text{ and } Y = y)$, usually written as a table. Adding across a row or down a column gives the probabilities for one variable alone, called its **marginal** distribution:

$$p_X(x) = \\sum_y p(x, y), \\qquad p_Y(y) = \\sum_x p(x, y).$$

**Example.** Flip a fair coin twice. Let $X$ be $1$ if the **first** flip is heads (else $0$), and $Y$ the **total** number of heads.

| | $Y = 0$ | $Y = 1$ | $Y = 2$ | $p_X(x)$ |
|---|---|---|---|---|
| $X = 0$ | $\\tfrac14$ | $\\tfrac14$ | $0$ | $\\tfrac12$ |
| $X = 1$ | $0$ | $\\tfrac14$ | $\\tfrac14$ | $\\tfrac12$ |
| $p_Y(y)$ | $\\tfrac14$ | $\\tfrac12$ | $\\tfrac14$ | $1$ |
>>> Building the table, step by step
1. **List the outcomes.** *Why:* each outcome gives one pair $(X, Y)$. The $4$ equally likely outcomes are $HH, HT, TH, TT$, each with probability $\\tfrac14$.
2. **Find the pair for each outcome.** $HH$: first is heads, so $X = 1$, and $2$ heads in total, so $Y = 2$. $HT$: $X = 1$, $Y = 1$. $TH$: $X = 0$, $Y = 1$. $TT$: $X = 0$, $Y = 0$.
3. **Fill in the table.** Each of those $4$ cells gets $\\tfrac14$. The other two cells get $0$. For example, $X = 0$ and $Y = 2$ would need the first flip to be tails and both flips to be heads, which can't happen.
4. **Add rows and columns for the marginals.** *Why this works:* "$X = 0$" happens with $Y = 0$, $1$, or $2$, and those can't happen together, so their probabilities add: $\\tfrac14 + \\tfrac14 + 0 = \\tfrac12$. Down the $Y = 1$ column: $\\tfrac14 + \\tfrac14 = \\tfrac12$. These match what we know: the first flip is heads half the time, and exactly $1$ head in $2$ flips has probability $\\tfrac12$.
<<<
:::

:::check
Using the table, what is $P(X = 1 \\text{ and } Y \\ge 1)$?
answer: 1/2
???
Add the cells in the $X = 1$ row with $Y = 1$ or $Y = 2$: $\\tfrac14 + \\tfrac14 = \\tfrac12$. In words: the first flip is heads, which already guarantees at least one head.
:::

:::idea Joint densities
Two continuous random variables have a [[joint-density|joint density]] $f(x, y) \\ge 0$ with total volume $1$, and probabilities are double integrals over regions:

$$P\\big((X, Y) \\text{ in } R\\big) = \\iint_R f(x, y)\\,dA.$$

The marginal density of $X$ comes from integrating out $y$: $f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy$, and similarly for $Y$.

**Example.** $f(x, y) = x + y$ on the unit square $0 \\le x \\le 1$, $0 \\le y \\le 1$ (and $0$ elsewhere). The warm-up showed its total is $1$. The probability that both are at most $\\tfrac12$ is $\\int_0^{1/2}\\!\\int_0^{1/2} (x + y)\\,dy\\,dx = \\tfrac18$, and the marginal density of $X$ is $f_X(x) = x + \\tfrac12$.
>>> The example, step by step
1. **Set up the region.** *Why:* "both at most $\\tfrac12$" is the small square $0 \\le x \\le \\tfrac12$, $0 \\le y \\le \\tfrac12$, so we integrate $f$ over it.
2. **Inner integral.** $\\int_0^{1/2} (x + y)\\,dy = x \\cdot \\tfrac12 + \\tfrac12 \\left(\\tfrac12\\right)^2 = \\tfrac x2 + \\tfrac18$.
3. **Outer integral.** $\\int_0^{1/2} \\left(\\tfrac x2 + \\tfrac18\\right) dx = \\tfrac14 \\left(\\tfrac12\\right)^2 + \\tfrac18 \\cdot \\tfrac12 = \\tfrac{1}{16} + \\tfrac{1}{16} = \\tfrac18$.
4. **Compare with the area.** The small square is a quarter of the unit square, but its probability is only $\\tfrac18$. That's because $f = x + y$ is small near the corner $(0, 0)$ and big near $(1, 1)$.
5. **The marginal of $X$.** *Why integrate over $y$:* $X$ being near some $x$ happens together with every possible $y$, so we add over all of them, just as we added across a row of the table. $f_X(x) = \\int_0^1 (x + y)\\,dy = x + \\tfrac12$. Check it's a density: $\\int_0^1 \\left(x + \\tfrac12\\right) dx = 1$ ✓.
<<<
:::

:::check
Same density, $f(x, y) = x + y$ on the unit square. What is $P(X + Y \\le 1)$?
answer: 1/3
???
The region is the triangle below the line $y = 1 - x$. Inside: $\\int_0^{1 - x} (x + y)\\,dy = x(1 - x) + \\tfrac{(1 - x)^2}{2}$. Outside: $\\int_0^1 \\left[x(1 - x) + \\tfrac{(1 - x)^2}{2}\\right] dx = \\tfrac16 + \\tfrac16 = \\tfrac13$. The triangle is half the square, but the density is small there, so the probability is less than $\\tfrac12$.
:::

:::idea Independent random variables
$X$ and $Y$ are [[independent-random-variables|independent]] when the joint distribution is the product of the marginals, for **every** $x$ and $y$:

$$p(x, y) = p_X(x)\\,p_Y(y) \\qquad\\text{or}\\qquad f(x, y) = f_X(x)\\,f_Y(y).$$

Then every event about $X$ is independent of every event about $Y$. Two separate dice, or two numbers picked separately at random, are independent.

**Examples.** In the coin table, $X$ and $Y$ are **dependent**: $p(0, 2) = 0$, but $p_X(0)\\,p_Y(2) = \\tfrac12 \\cdot \\tfrac14 = \\tfrac18$. The density $f(x, y) = 4xy$ on the unit square is independent: it equals $(2x)(2y)$, and $2x$ and $2y$ are its marginals.
>>> Checking independence, step by step
**For $f(x, y) = x + y$:**
1. **Find the marginals.** From before, $f_X(x) = x + \\tfrac12$, and by the same steps $f_Y(y) = y + \\tfrac12$.
2. **Test one point.** *Why one point is enough to say no:* independence needs the product to match **everywhere**, so one failure settles it. At $(0, 0)$: $f(0, 0) = 0$, but $f_X(0)\\,f_Y(0) = \\tfrac12 \\cdot \\tfrac12 = \\tfrac14$. Not equal, so $X$ and $Y$ are **dependent**. Knowing $X$ is near $0$ makes small $y$'s less likely, because $f$ is small near $(0, 0)$.

**For $f(x, y) = 4xy$:**
1. **Find the marginals.** $f_X(x) = \\int_0^1 4xy\\,dy = 4x \\cdot \\tfrac12 = 2x$, and similarly $f_Y(y) = 2y$.
2. **Test every point at once.** $f_X(x)\\,f_Y(y) = 2x \\cdot 2y = 4xy = f(x, y)$ for all $x$ and $y$. So they're **independent**. For example, at $(0.5, 0.25)$: $f = 4(0.5)(0.25) = 0.5$, and $f_X(0.5)\\,f_Y(0.25) = 1 \\times 0.5 = 0.5$ ✓.
<<<
:::

:::check
$X$ and $Y$ are independent, each uniform on $[0, 1]$. What is $P(X \\le 0.5 \\text{ and } Y \\le 0.2)$?
answer: 0.1
???
Independent, so multiply: $P(X \\le 0.5)\\,P(Y \\le 0.2) = 0.5 \\times 0.2 = 0.1$. It's also the area of the $0.5$ by $0.2$ rectangle inside the unit square, where the joint density is $1$.
:::

:::idea Sums of independent random variables
If $X$ and $Y$ are independent, the distribution of $S = X + Y$ comes from adding up every way to reach each total:

$$P(S = s) = \\sum_x p_X(x)\\,p_Y(s - x), \\qquad f_S(s) = \\int_{-\\infty}^{\\infty} f_X(x)\\,f_Y(s - x)\\,dx.$$

This is called the [[convolution|convolution]]. For example, two dice total $7$ in $6$ ways, $(1, 6)$ through $(6, 1)$, so $P(S = 7) = 6 \\times \\tfrac{1}{36} = \\tfrac16$.

**Two uniforms make a triangle.** If $X$ and $Y$ are independent and uniform on $[0, 1]$, the sum has density $f_S(s) = s$ for $0 \\le s \\le 1$ and $2 - s$ for $1 \\le s \\le 2$.
>>> The triangle, step by step, using areas
1. **Use the CDF.** *Why:* the joint density is $1$ on the unit square, so a probability is just an area there, which is easier than the convolution integral. $P(S \\le s)$ is the area of the part of the square below the line $x + y = s$.
2. **For $s$ between $0$ and $1$.** That part is a right triangle with both legs $s$, so its area is $\\tfrac{s^2}{2}$. For example, $P(S \\le 0.5) = \\tfrac{0.25}{2} = 0.125$.
3. **Differentiate.** $f_S(s) = \\dfrac{d}{ds} \\dfrac{s^2}{2} = s$.
4. **For $s$ between $1$ and $2$.** Now the part **above** the line is a triangle with legs $2 - s$, so $P(S \\le s) = 1 - \\tfrac{(2 - s)^2}{2}$, and differentiating gives $2 - s$.
5. **What the shape says.** The density is highest at $s = 1$: there are many ways to total about $1$ ($0.5 + 0.5$, $0.2 + 0.8$, and so on), but only pairs near $(0, 0)$ total about $0$. The same thing happens with dice, where $7$ is the most common total.
<<<

**Sums that keep their family.** For independent random variables:
- Normal plus normal is normal; the means add and the **variances** add.
- Poisson with rate $\\lambda_1$ plus Poisson with rate $\\lambda_2$ is Poisson with rate $\\lambda_1 + \\lambda_2$.
- Binomial $(n_1, p)$ plus binomial $(n_2, p)$, with the same $p$, is binomial $(n_1 + n_2, p)$.
>>> Two exam parts, step by step
Part 1 scores are $N(40, 3^2)$ and part 2 scores are $N(30, 4^2)$, independent. What's the chance the total is above $80$?

1. **The total is normal.** *Why:* a sum of independent normals is normal, so we only need its mean and standard deviation.
2. **Add the means.** $40 + 30 = 70$. (This works for any sum, independent or not.)
3. **Add the variances, not the standard deviations.** *Why variances:* for independent random variables, variances add. $3^2 + 4^2 = 9 + 16 = 25$, so the standard deviation is $\\sqrt{25} = 5$, not $3 + 4 = 7$. The spread grows less than you might guess, because a low score on one part is often balanced by a higher score on the other.
4. **Standardize.** $z = \\dfrac{80 - 70}{5} = 2$.
5. **Use the table.** $P(\\text{total} > 80) = 1 - \\Phi(2) = 1 - 0.9772 = 0.0228$.
<<<
:::

:::check
Line A gets calls at an average of $2$ per minute and line B at $1$ per minute, independently, and both counts are Poisson. What is the probability of no calls at all in a given minute? (You can type \`e^(-3)\`.)
answer: e^(-3)
???
The total is Poisson with rate $2 + 1 = 3$, so $P(\\text{no calls}) = e^{-3} \\approx 0.0498$. Or multiply, since the lines are independent: $e^{-2} \\times e^{-1} = e^{-3}$.
:::

:::idea Conditional distributions
Once you know $Y = y$, the distribution of $X$ is the joint distribution divided by the marginal of $Y$, the same way $P(A \\mid B) = \\tfrac{P(A \\text{ and } B)}{P(B)}$:

$$p_{X \\mid Y}(x \\mid y) = \\frac{p(x, y)}{p_Y(y)}, \\qquad f_{X \\mid Y}(x \\mid y) = \\frac{f(x, y)}{f_Y(y)}.$$

**Examples.** In the coin table, given $Y = 1$, $X$ is $0$ or $1$ with probability $\\tfrac{1/4}{1/2} = \\tfrac12$ each. For $f(x, y) = x + y$, given $Y = 0.5$, the density of $X$ is $x + 0.5$ on $[0, 1]$, so $P(X \\le 0.5 \\mid Y = 0.5) = 0.375$.
>>> The continuous example, step by step
1. **Find $f_Y(0.5)$.** *Why:* it's what we divide by. $f_Y(y) = y + \\tfrac12$, so $f_Y(0.5) = 1$.
2. **Divide.** $f_{X \\mid Y}(x \\mid 0.5) = \\dfrac{x + 0.5}{1} = x + 0.5$ for $0 \\le x \\le 1$. Check it's a density: $\\int_0^1 (x + 0.5)\\,dx = 0.5 + 0.5 = 1$ ✓. *Why divide at all:* the slice $f(x, 0.5)$ has the right shape but not total area $1$ in general; dividing by $f_Y(0.5)$ fixes that, just as dividing by $P(B)$ does for events.
3. **Use it.** $P(X \\le 0.5 \\mid Y = 0.5) = \\int_0^{0.5} (x + 0.5)\\,dx = \\tfrac{0.25}{2} + 0.25 = 0.125 + 0.25 = 0.375$.
4. **Compare with not knowing $Y$.** Using the marginal $f_X(x) = x + \\tfrac12$, $P(X \\le 0.5) = 0.375$ too: here $f_Y(0.5) = 1$ happens to make the slice equal the marginal. Try $Y = 1$ instead: $f_Y(1) = 1.5$, so $f_{X \\mid Y}(x \\mid 1) = \\tfrac{x + 1}{1.5}$, and $P(X \\le 0.5 \\mid Y = 1) = \\tfrac{0.125 + 0.5}{1.5} = \\tfrac{0.625}{1.5} \\approx 0.417$. Knowing $Y$ is large changes the chances for $X$, because they're dependent.
<<<
:::

:::check
In the coin table, what is $P(Y = 2 \\mid X = 1)$?
answer: 1/2
???
$\\dfrac{p(1, 2)}{p_X(1)} = \\dfrac{1/4}{1/2} = \\dfrac12$. In words: the first flip was heads, so the total is $2$ exactly when the second flip is heads too.
:::

:::summary Summary
- **Joint distribution:** a table $p(x, y)$ or a density $f(x, y)$, with probabilities as sums or double integrals. **Marginals:** add across rows, or integrate out the other variable.
- **Independent:** $p(x, y) = p_X(x)\\,p_Y(y)$ or $f(x, y) = f_X(x)\\,f_Y(y)$ for **every** $x, y$. One point where it fails means dependent.
- **Sums of independent random variables:** the convolution adds up every way to reach a total. Normals, Poissons, and binomials (same $p$) stay in their family, with means and **variances** adding.
- **Conditional distribution:** divide the joint by the marginal of what you know.

**Common mistakes:**
- Adding standard deviations instead of variances for a sum.
- Calling variables independent because the product matches at one point. It has to match at every point.
- Forgetting to divide by $p_Y(y)$ or $f_Y(y)$ in a conditional distribution.
:::
`;export{e as default};