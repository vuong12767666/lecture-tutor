var e=`---
title: The normal distribution, and functions of a random variable
date: 2026-12-07
source: Grinstead and Snell, Introduction to Probability, §5.2 Important Densities (Normal Density) and §9.1 Central Limit Theorem for Bernoulli Trials
---

:::recap Last time
- A continuous $X$ has a density $f$, with $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$, and a CDF $F(x) = P(X \\le x)$ with $F' = f$.
- $E[aX + b] = a\\,E[X] + b$ and $\\operatorname{Var}(aX + b) = a^2 \\operatorname{Var}(X)$, so the standard deviation gets multiplied by $|a|$.
- A binomial count has mean $np$ and variance $np(1 - p)$.
:::

:::check
Warm-up: exam scores $X$ have mean $70$ and standard deviation $10$. Let $Z = \\dfrac{X - 70}{10}$. What is $E[Z]$?
answer: 0
???
$Z = \\tfrac{1}{10}X - 7$, so $E[Z] = \\tfrac{1}{10}(70) - 7 = 7 - 7 = 0$. Subtracting the mean moves the center to $0$.
:::

:::question Today
Heights, measurement errors, and exam scores tend to follow a bell-shaped curve: most values near the middle, fewer and fewer far away. This is the **normal distribution**. Its density can't be integrated with a formula, so how do you get probabilities? And once you know how $X$ is distributed, how do you find the distribution of something computed from it, like $X^2$?
:::

:::idea The normal distribution
$X$ is [[normal-distribution|normal]] with mean $\\mu$ and standard deviation $\\sigma$, written $X \\sim N(\\mu, \\sigma^2)$, when its density is the bell curve

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-(x - \\mu)^2 / (2\\sigma^2)}.$$

It's symmetric around $\\mu$, $E[X] = \\mu$, and $\\operatorname{Var}(X) = \\sigma^2$. A useful rule of thumb: about $68\\%$ of values are within $1$ standard deviation of the mean, about $95\\%$ within $2$, and about $99.7\\%$ within $3$.
>>> Reading the formula with numbers
Take exam scores with $\\mu = 70$ and $\\sigma = 10$.

1. **At the mean, $x = 70$.** *Why start here:* the exponent is $-(70 - 70)^2 / 200 = 0$, and $e^0 = 1$, so this is where $f$ is biggest. $f(70) = \\dfrac{1}{10\\sqrt{2\\pi}} \\approx \\dfrac{1}{25.07} \\approx 0.0399$.
2. **One standard deviation above, $x = 80$.** The exponent is $-\\dfrac{(80 - 70)^2}{2 \\times 10^2} = -\\dfrac{100}{200} = -0.5$, so $f(80) = 0.0399 \\times e^{-0.5} \\approx 0.0399 \\times 0.607 \\approx 0.0242$.
3. **One below, $x = 60$.** $(60 - 70)^2 = (-10)^2 = 100$, the same as for $80$, so $f(60) \\approx 0.0242$ too. *Why symmetric:* the formula only uses the squared distance from $\\mu$, and $10$ above and $10$ below square to the same number.
4. **Farther out, $x = 90$.** The exponent is $-\\dfrac{400}{200} = -2$, so $f(90) = 0.0399 \\times e^{-2} \\approx 0.0054$. Doubling the distance made the exponent $4$ times as negative, which is why the curve drops off so fast.
5. **What $\\sigma$ does.** It sets the scale: every distance is measured in steps of $\\sigma$. A bigger $\\sigma$ makes the bell wider and lower, since the total area must stay $1$.
<<<
:::

:::check
Exam scores are $N(70, 10^2)$. Using the $68$–$95$–$99.7$ rule, about what fraction of scores are above $90$?
answer: 0.025
???
$90$ is $2$ standard deviations above the mean. About $95\\%$ of scores are within $2$ standard deviations, between $50$ and $90$, so about $5\\%$ are outside. By symmetry, half of that, $2.5\\% = 0.025$, are above $90$.
:::

:::idea Standardizing: one table for every normal
If $X \\sim N(\\mu, \\sigma^2)$, then $Z = \\dfrac{X - \\mu}{\\sigma}$ is the **standard normal**, $N(0, 1)$. The number $z = \\dfrac{x - \\mu}{\\sigma}$ is the [[z-score|z-score]] of $x$: how many standard deviations $x$ is above the mean. The CDF of $Z$ is written $\\Phi(z) = P(Z \\le z)$, and its values come from a table:

| $z$ | $\\Phi(z)$ |
|---|---|
| $0$ | $0.5000$ |
| $0.5$ | $0.6915$ |
| $1$ | $0.8413$ |
| $1.5$ | $0.9332$ |
| $1.9$ | $0.9713$ |
| $1.96$ | $0.9750$ |
| $2$ | $0.9772$ |
| $2.5$ | $0.9938$ |
| $3$ | $0.9987$ |

For negative $z$, use symmetry: $\\Phi(-z) = 1 - \\Phi(z)$. Then for any normal $X$,

$$P(X \\le x) = \\Phi\\!\\left(\\frac{x - \\mu}{\\sigma}\\right).$$

**Example.** Exam scores are $N(70, 10^2)$. The chance of scoring above $85$ is $1 - \\Phi(1.5) = 1 - 0.9332 = 0.0668$, about $7\\%$.
>>> The example, step by step
1. **Find the z-score of $85$.** *Why:* the table is only for the standard normal, so we measure $85$ in standard deviations from the mean. $z = \\dfrac{85 - 70}{10} = 1.5$: $85$ is $1.5$ standard deviations above average.
2. **Turn "above" into the table's "at most".** *Why:* $\\Phi$ gives the probability of being **at most** $z$. Above is everything else, so $P(X > 85) = 1 - P(X \\le 85) = 1 - \\Phi(1.5)$.
3. **Read the table.** $\\Phi(1.5) = 0.9332$, so $P(X > 85) = 1 - 0.9332 = 0.0668$.
4. **Why $Z$ has mean $0$ and standard deviation $1$.** $Z = \\tfrac1\\sigma X - \\tfrac\\mu\\sigma$. By the rules from last time, $E[Z] = \\tfrac{\\mu}{\\sigma} - \\tfrac{\\mu}{\\sigma} = 0$, and the standard deviation is $\\tfrac1\\sigma \\times \\sigma = 1$. With our numbers, $Z = \\tfrac{X}{10} - 7$, and the standard deviation $10$ becomes $\\tfrac{10}{10} = 1$.
5. **Why $\\Phi(-z) = 1 - \\Phi(z)$.** The bell is symmetric around $0$, so the area left of $-1.5$ equals the area right of $1.5$. For example, $P(X < 55)$ has $z = -1.5$, so it's $\\Phi(-1.5) = 1 - 0.9332 = 0.0668$, the same as scoring above $85$.
<<<
:::

:::check
Heights are normal with mean $70$ inches and standard deviation $4$ inches. What is the z-score of a height of $64$ inches?
answer: -1.5
???
$z = \\dfrac{64 - 70}{4} = \\dfrac{-6}{4} = -1.5$: $64$ inches is $1.5$ standard deviations below the mean.
:::

:::check
Exam scores are $N(70, 10^2)$. Using the table, about what is the probability of a score between $60$ and $80$?
- [ ] $0.3413$
  why: That's $\\Phi(1) - \\Phi(0)$, only the part between $70$ and $80$. The part between $60$ and $70$ is just as big.
- [x] $0.6826$
  why: The z-scores are $-1$ and $1$, so it's $\\Phi(1) - \\Phi(-1) = 0.8413 - (1 - 0.8413) = 0.6826$.
- [ ] $0.8413$
  why: That's $\\Phi(1) = P(X \\le 80)$. It includes every score below $60$ too, which needs to be subtracted.
- [ ] $0.9544$
  why: That's the probability of being within $2$ standard deviations, $50$ to $90$.
???
$P(60 \\le X \\le 80) = \\Phi(1) - \\Phi(-1) = 0.8413 - 0.1587 = 0.6826$, the "about $68\\%$" from the rule of thumb.
:::

:::idea The normal approximation to the binomial
When $n$ is large, a binomial count is close to normal with the same mean and variance, $\\mu = np$ and $\\sigma^2 = np(1 - p)$. A common rule is that this works well when $np(1 - p) \\ge 10$. Because the binomial only takes whole numbers, use a **continuity correction**: the whole number $k$ stands for the stretch from $k - 0.5$ to $k + 0.5$.

**Example.** Flip a fair coin $100$ times. Then $\\mu = 50$ and $\\sigma = \\sqrt{100 \\times 0.5 \\times 0.5} = 5$. The chance of at least $60$ heads is about $P(Y \\ge 59.5) = 1 - \\Phi(1.9) = 0.0287$, where $Y \\sim N(50, 5^2)$. The exact binomial answer is $0.0284$.
>>> The coin example, step by step
1. **Check that the approximation is reasonable.** $np(1 - p) = 100 \\times 0.5 \\times 0.5 = 25$, which is at least $10$.
2. **Match the mean and standard deviation.** *Why these:* the normal curve should be centered and spread like the binomial. $\\mu = np = 50$, and $\\sigma = \\sqrt{25} = 5$.
3. **Apply the continuity correction.** *Why $59.5$:* picture the binomial as bars, one per whole number, each $1$ wide. The bar for $60$ covers $59.5$ to $60.5$. "At least $60$" means the bars for $60, 61, 62, \\ldots$, which start at $59.5$. Using $60$ instead would cut off half of the first bar.
4. **Standardize.** $z = \\dfrac{59.5 - 50}{5} = \\dfrac{9.5}{5} = 1.9$.
5. **Use the table.** $P(Y \\ge 59.5) = 1 - \\Phi(1.9) = 1 - 0.9713 = 0.0287$.
6. **Compare.** Adding up the exact binomial probabilities for $60$ through $100$ heads gives $0.0284$. Without the correction, $1 - \\Phi(2) = 0.0228$, which is noticeably further off.
<<<
:::

:::check
$X$ is binomial and you approximate it by a normal $Y$. With the continuity correction, which normal probability approximates $P(X \\le 45)$?
- [ ] $P(Y \\le 44.5)$
  why: That would leave out the bar for $45$, which runs from $44.5$ to $45.5$.
- [ ] $P(Y \\le 45)$
  why: That cuts the bar for $45$ in half.
- [x] $P(Y \\le 45.5)$
  why: "At most $45$" includes the whole bar for $45$, which ends at $45.5$.
- [ ] $P(Y \\ge 45.5)$
  why: That's the other side: $46$ or more.
???
The bar for $45$ covers $44.5$ to $45.5$. "At most $45$" keeps it entirely, so use $45.5$.
:::

:::idea The distribution of a function of X
If you know how $X$ is distributed and $Y = g(X)$, find the CDF of $Y$ first, then differentiate:
1. Write $F_Y(y) = P(g(X) \\le y)$.
2. Rewrite "$g(X) \\le y$" as a statement about $X$ alone, and use what you know about $X$.
3. Differentiate: $f_Y(y) = F_Y'(y)$.

**Example.** $X$ is uniform on $[0, 1]$ and $Y = X^2$. Then $F_Y(y) = P(X \\le \\sqrt y) = \\sqrt y$ for $0 \\le y \\le 1$, so $f_Y(y) = \\dfrac{1}{2\\sqrt y}$.

**Straight lines keep normals normal.** If $X \\sim N(\\mu, \\sigma^2)$, then $aX + b$ is normal with mean $a\\mu + b$ and standard deviation $|a|\\sigma$. That's why standardizing gives a normal. For example, temperatures in Celsius that are $N(20, 5^2)$ become, in Fahrenheit ($1.8C + 32$), $N(68, 9^2)$.
>>> The $X^2$ example, step by step
1. **Write the CDF of $Y$.** $F_Y(y) = P(X^2 \\le y)$, for a number $y$ between $0$ and $1$.
2. **Rewrite it in terms of $X$.** *Why:* we know probabilities for $X$, not yet for $X^2$. $X$ is between $0$ and $1$, so it's never negative, and for such numbers, $X^2 \\le y$ exactly when $X \\le \\sqrt y$. For example, $X^2 \\le 0.25$ exactly when $X \\le 0.5$: $0.4^2 = 0.16$ is at most $0.25$, but $0.6^2 = 0.36$ is not.
3. **Use the uniform distribution.** For a uniform on $[0, 1]$, $P(X \\le c) = c$, the length from $0$ to $c$. So $F_Y(y) = \\sqrt y$. For example, $P(Y \\le 0.25) = \\sqrt{0.25} = 0.5$.
4. **Differentiate.** $f_Y(y) = \\dfrac{d}{dy}\\, y^{1/2} = \\tfrac12 y^{-1/2} = \\dfrac{1}{2\\sqrt y}$. It's large near $0$: squaring pushes numbers between $0$ and $1$ toward $0$ (for example, $0.3$ becomes $0.09$), so $Y$ piles up there.
5. **Check with the expected value.** Using $f_Y$: $E[Y] = \\int_0^1 y \\cdot \\dfrac{1}{2\\sqrt y}\\,dy = \\int_0^1 \\tfrac12 \\sqrt y\\,dy = \\tfrac12 \\cdot \\tfrac23 = \\tfrac13$. Using $X$ directly: $E[X^2] = \\int_0^1 x^2\\,dx = \\tfrac13$ ✓.
<<<
:::

:::check
$X$ is uniform on $[0, 1]$ and $Y = X^2$. What is $P(Y \\le 0.81)$?
answer: 0.9
???
$Y \\le 0.81$ exactly when $X \\le \\sqrt{0.81} = 0.9$, and for a uniform on $[0, 1]$ that probability is $0.9$.
:::

:::summary Summary
- **Normal** $N(\\mu, \\sigma^2)$: the bell curve, symmetric around $\\mu$, with mean $\\mu$ and variance $\\sigma^2$. About $68\\%$, $95\\%$, and $99.7\\%$ of values are within $1$, $2$, and $3$ standard deviations.
- **Standardize:** $z = \\dfrac{x - \\mu}{\\sigma}$ and $P(X \\le x) = \\Phi(z)$, from the table. $\\Phi(-z) = 1 - \\Phi(z)$.
- **Binomial $\\approx$ normal** with $\\mu = np$ and $\\sigma^2 = np(1 - p)$, when $np(1 - p) \\ge 10$, with the continuity correction ($\\pm 0.5$).
- **Function of $X$:** find $F_Y(y) = P(g(X) \\le y)$ by rewriting it in terms of $X$, then $f_Y = F_Y'$. A straight line $aX + b$ of a normal is normal.

**Common mistakes:**
- Dividing by the variance instead of the standard deviation in a z-score. With $\\sigma^2 = 100$, divide by $10$, not $100$.
- Forgetting that $\\Phi$ gives "at most". For "more than", use $1 - \\Phi(z)$.
- Skipping the continuity correction, or moving $0.5$ the wrong way.
:::
`;export{e as default};