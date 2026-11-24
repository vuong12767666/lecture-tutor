var e=`---
title: Continuous random variables, uniform and exponential
date: 2026-12-04
source: Grinstead and Snell, Introduction to Probability, §2.2 Continuous Density Functions, §5.2 Important Densities, and §6.3 Continuous Random Variables
---

:::recap Last time
- A discrete random variable has a list of values, and $p(x) = P(X = x)$ gives each one's probability.
- $E[X] = \\sum x\\,p(x)$ and $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$.
- The **Poisson** distribution counts events that happen at an average rate $\\lambda$, for example $3$ calls per minute.
- From calculus: $\\int_a^b f(x)\\,dx$ is the area under the graph of $f$ from $a$ to $b$.
:::

:::check
Warm-up (calculus): what is $\\displaystyle\\int_0^2 \\frac{x}{2}\\,dx$?
answer: 1
???
An antiderivative of $\\tfrac x2$ is $\\tfrac{x^2}{4}$, so the integral is $\\tfrac{2^2}{4} - \\tfrac{0^2}{4} = 1$. Or by area: the graph from $0$ to $2$ makes a triangle with base $2$ and height $1$, area $\\tfrac12 \\times 2 \\times 1 = 1$.
:::

:::question Today
How long until the next bus? How long will a light bulb last? A waiting time can be any number, like $3.27$ minutes, not just a value from a list. So we can't give each value a probability the way a table does. Today: how probability works for these **continuous** random variables, and two important ones, the uniform and the exponential.
:::

:::idea Densities: probability is area
A **continuous** random variable $X$ has a [[density-function|density function]] $f(x)$, and probabilities are areas under its graph:

$$P(a \\le X \\le b) = \\int_a^b f(x)\\,dx.$$

A density has to satisfy two rules: $f(x) \\ge 0$ everywhere, and the total area is $1$, that is $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$.

**Example.** $f(x) = \\dfrac x2$ for $0 \\le x \\le 2$, and $f(x) = 0$ everywhere else. The warm-up showed its total area is $1$. The probability that $X$ is at most $1$ is $\\int_0^1 \\tfrac x2\\,dx = \\tfrac14$.
>>> The example, step by step
1. **Check that $f$ is a density.** *Why first:* if the rules fail, the areas aren't probabilities. $\\tfrac x2 \\ge 0$ for $x$ between $0$ and $2$, and $f$ is $0$ elsewhere, so it is never negative. Its total area is $1$, from the warm-up.
2. **Write the probability as an area.** *Why:* that's the definition. "$X$ is at most $1$" is $0 \\le X \\le 1$, because $X$ is never below $0$ here (the density is $0$ there). So $P(X \\le 1) = \\int_0^1 \\tfrac x2\\,dx$.
3. **Integrate.** $\\tfrac{x^2}{4}$ from $0$ to $1$ is $\\tfrac14 - 0 = \\tfrac14$.
4. **Check with geometry.** The region is a triangle with base $1$ and height $f(1) = \\tfrac12$, so its area is $\\tfrac12 \\times 1 \\times \\tfrac12 = \\tfrac14$ ✓.

Even though $X \\le 1$ covers half of the interval from $0$ to $2$, its probability is only $\\tfrac14$: the density is low near $0$, so values near $0$ are less likely than values near $2$.
<<<

**Two surprises.**
- **One exact value has probability $0$.** $P(X = a) = \\int_a^a f(x)\\,dx = 0$. So for a continuous $X$, $P(X \\le a)$ and $P(X < a)$ are the same.
- **$f(x)$ is not a probability.** It can be bigger than $1$. Only areas are probabilities.
>>> Why both surprises are true, with numbers
**One exact value.** Pick a number between $0$ and $1$ completely at random, so the density is $f(x) = 1$ on that interval. The probability of landing in a short interval is its length:
- between $0.5$ and $0.6$: $0.1$
- between $0.5$ and $0.51$: $0.01$
- between $0.5$ and $0.501$: $0.001$

Each interval contains $0.5$, so $P(X = 0.5)$ is smaller than every one of these. The only number that small is $0$. That doesn't mean $0.5$ can't happen; there are just so many possible values that any one alone gets no share of the probability.

**Density above $1$.** Now pick a number at random between $0$ and $0.5$. For the total area to be $1$ on an interval of width $0.5$, the height must be $2$: $f(x) = 2$, since $2 \\times 0.5 = 1$. The density is $2$, but every probability is still at most $1$. For example, $P(0 \\le X \\le 0.25) = 2 \\times 0.25 = 0.5$.
<<<
:::

:::check
For which number $c$ is $f(x) = c\\,x^2$ for $0 \\le x \\le 1$ (and $0$ elsewhere) a density?
answer: 3
???
The total area must be $1$: $\\int_0^1 c\\,x^2\\,dx = c \\cdot \\tfrac13$. Setting $\\tfrac c3 = 1$ gives $c = 3$.
:::

:::idea The cumulative distribution function
The [[cumulative-distribution-function|cumulative distribution function]] (CDF) of any random variable is $F(x) = P(X \\le x)$: the probability that $X$ is at most $x$. For a continuous $X$,

$$F(x) = \\int_{-\\infty}^{x} f(t)\\,dt, \\qquad f(x) = F'(x), \\qquad P(a < X \\le b) = F(b) - F(a).$$

$F$ starts at $0$ far to the left, never goes down, and ends at $1$ far to the right. It works for discrete random variables too: for one die, $F(3.5) = P(X \\le 3.5) = P(X \\text{ is } 1, 2, \\text{ or } 3) = \\tfrac12$.

**Example.** For $f(x) = \\tfrac x2$ on $[0, 2]$, the CDF is $F(x) = \\tfrac{x^2}{4}$ for $0 \\le x \\le 2$, with $F(x) = 0$ for $x < 0$ and $F(x) = 1$ for $x > 2$. So $P(0.5 < X \\le 1.5) = F(1.5) - F(0.5) = \\tfrac{2.25}{4} - \\tfrac{0.25}{4} = \\tfrac12$.
>>> Finding the CDF and using it, step by step
1. **For $x$ between $0$ and $2$, integrate the density up to $x$.** *Why:* $F(x)$ is the area to the left of $x$. The density is $0$ below $0$, so that part adds nothing, and $F(x) = \\int_0^x \\tfrac t2\\,dt = \\tfrac{x^2}{4}$. For example, $F(1) = \\tfrac14$, matching the first example.
2. **Outside $[0, 2]$.** For $x < 0$, there's no area to the left yet, so $F(x) = 0$. For $x > 2$, all the area is to the left, so $F(x) = 1$. Check: $\\tfrac{x^2}{4}$ is $0$ at $x = 0$ and $1$ at $x = 2$, so the pieces join up.
3. **Check $F' = f$.** The derivative of $\\tfrac{x^2}{4}$ is $\\tfrac{2x}{4} = \\tfrac x2$ ✓. Differentiating undoes the integral.
4. **Use it for an interval.** *Why subtract:* the area left of $1.5$ includes the area left of $0.5$, so removing that leaves just the area between them. $F(1.5) = \\tfrac{1.5^2}{4} = \\tfrac{2.25}{4} = 0.5625$ and $F(0.5) = \\tfrac{0.25}{4} = 0.0625$, so the probability is $0.5625 - 0.0625 = 0.5$.
<<<
:::

:::check
Same density, $f(x) = \\tfrac x2$ on $[0, 2]$, with CDF $F(x) = \\tfrac{x^2}{4}$. What is $P(X > 1)$?
answer: 3/4
???
"More than $1$" is everything except "at most $1$", so $P(X > 1) = 1 - F(1) = 1 - \\tfrac14 = \\tfrac34$.
:::

:::idea Expected value and variance
For a continuous random variable, sums become integrals, with $f(x)\\,dx$ in place of $p(x)$:

$$E[X] = \\int_{-\\infty}^{\\infty} x\\,f(x)\\,dx, \\qquad E[g(X)] = \\int_{-\\infty}^{\\infty} g(x)\\,f(x)\\,dx,$$

and as before, $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$.

**Example.** For $f(x) = \\tfrac x2$ on $[0, 2]$: $E[X] = \\int_0^2 x \\cdot \\tfrac x2\\,dx = \\tfrac43$ and $E[X^2] = \\int_0^2 x^2 \\cdot \\tfrac x2\\,dx = 2$, so $\\operatorname{Var}(X) = 2 - \\left(\\tfrac43\\right)^2 = \\tfrac29$.
>>> Why the sum turns into an integral, with numbers
Approximate $X$ by a discrete random variable and use the formula we already know.

1. **Chop $[0, 2]$ into $4$ pieces of width $0.5$.** *Why:* within one short piece, every value of $X$ is close to the piece's middle, so we can pretend $X$ is the middle. The middles are $0.25, 0.75, 1.25, 1.75$.
2. **Find each piece's probability.** *Why "height times width":* the area of a thin strip is about $f(\\text{middle}) \\times 0.5$. That gives $0.125 \\times 0.5 = 0.0625$, $0.375 \\times 0.5 = 0.1875$, $0.625 \\times 0.5 = 0.3125$, and $0.875 \\times 0.5 = 0.4375$. These add to $1$ ✓.
3. **Use $\\sum x\\,p(x)$.** $0.25(0.0625) + 0.75(0.1875) + 1.25(0.3125) + 1.75(0.4375) = 0.015625 + 0.140625 + 0.390625 + 0.765625 = 1.3125$.
4. **Compare with the integral.** $\\tfrac43 \\approx 1.3333$. With thinner pieces the sum gets closer, and the integral is what it approaches. Each term $x \\cdot f(x) \\times \\text{width}$ becomes $x\\,f(x)\\,dx$.
5. **The exact integrals.** $\\int_0^2 \\tfrac{x^2}{2}\\,dx = \\tfrac{x^3}{6}\\Big|_0^2 = \\tfrac86 = \\tfrac43$. Then $\\int_0^2 \\tfrac{x^3}{2}\\,dx = \\tfrac{x^4}{8}\\Big|_0^2 = \\tfrac{16}{8} = 2$, and $2 - \\tfrac{16}{9} = \\tfrac{18}{9} - \\tfrac{16}{9} = \\tfrac29$.
<<<
:::

:::check
$X$ has density $f(x) = 3x^2$ for $0 \\le x \\le 1$. What is $E[X]$?
answer: 3/4
???
$E[X] = \\int_0^1 x \\cdot 3x^2\\,dx = \\int_0^1 3x^3\\,dx = \\tfrac34 x^4 \\Big|_0^1 = \\tfrac34$. It's above $\\tfrac12$ because the density is bigger near $1$.
:::

:::idea The uniform distribution
$X$ is [[uniform-distribution|uniform]] on $[a, b]$ when every part of the interval is equally likely: the density is flat, $f(x) = \\dfrac{1}{b - a}$ for $a \\le x \\le b$. Then a probability is a fraction of the length:

$$P(c \\le X \\le d) = \\frac{d - c}{b - a} \\quad (\\text{for } a \\le c \\le d \\le b), \\qquad E[X] = \\frac{a + b}{2}, \\qquad \\operatorname{Var}(X) = \\frac{(b - a)^2}{12}.$$

**Example.** A bus comes every $15$ minutes, and you show up at a random time, so your wait $W$ is uniform on $[0, 15]$. The chance of waiting more than $10$ minutes is $\\tfrac{15 - 10}{15} = \\tfrac13$. The average wait is $7.5$ minutes, and the variance is $\\tfrac{15^2}{12} = 18.75$, so the standard deviation is about $4.33$ minutes.
>>> The bus, step by step, with the integrals
1. **The density.** *Why $\\tfrac{1}{15}$:* the height times the width $15$ must be $1$. So $f(w) = \\tfrac{1}{15}$ for $0 \\le w \\le 15$.
2. **Waiting more than $10$ minutes.** $\\int_{10}^{15} \\tfrac{1}{15}\\,dw = \\tfrac{15 - 10}{15} = \\tfrac{5}{15} = \\tfrac13$. It's a rectangle $5$ wide and $\\tfrac1{15}$ tall.
3. **The average wait.** $E[W] = \\int_0^{15} w \\cdot \\tfrac{1}{15}\\,dw = \\tfrac{1}{15} \\cdot \\tfrac{w^2}{2}\\Big|_0^{15} = \\tfrac{225}{30} = 7.5$. That's the middle of $[0, 15]$, as $\\tfrac{a + b}{2}$ says.
4. **The variance.** First $E[W^2] = \\int_0^{15} w^2 \\cdot \\tfrac{1}{15}\\,dw = \\tfrac{1}{15} \\cdot \\tfrac{w^3}{3}\\Big|_0^{15} = \\tfrac{3375}{45} = 75$. Then $\\operatorname{Var}(W) = 75 - 7.5^2 = 75 - 56.25 = 18.75$, which matches $\\tfrac{225}{12} = 18.75$ ✓.
5. **The standard deviation.** $\\sqrt{18.75} \\approx 4.33$ minutes: a typical wait is about $4.3$ minutes away from the average of $7.5$.
<<<
:::

:::check
$X$ is uniform on $[2, 6]$. What is $P(X < 3)$?
answer: 1/4
???
The interval from $2$ to $3$ is $1$ unit long, out of a total length of $6 - 2 = 4$. So $P(X < 3) = \\tfrac14$.
:::

:::idea The exponential distribution
Suppose events happen at an average rate of $\\lambda$ per unit of time, the way they do for a Poisson count. The waiting time $X$ until the next event has the [[exponential-distribution|exponential distribution]]:

$$f(x) = \\lambda e^{-\\lambda x} \\text{ for } x \\ge 0, \\qquad P(X > x) = e^{-\\lambda x}, \\qquad E[X] = \\frac1\\lambda, \\qquad \\operatorname{Var}(X) = \\frac{1}{\\lambda^2}.$$

**Example.** A help line gets on average $3$ calls per minute, so $\\lambda = 3$. The chance of waiting more than a minute for the next call is $e^{-3} \\approx 0.050$, and on average the wait is $\\tfrac13$ of a minute, $20$ seconds.
>>> Where the formulas come from, using the help line
1. **"Waiting more than $x$ minutes" means "no calls in the first $x$ minutes".** *Why this helps:* the number of calls in $x$ minutes is Poisson, and we know its formula. At $3$ per minute, the average count in $x$ minutes is $3x$.
2. **Use the Poisson formula with $k = 0$.** $P(\\text{no calls}) = e^{-3x} \\dfrac{(3x)^0}{0!} = e^{-3x}$. So $P(X > x) = e^{-3x}$. For $x = 1$, that's $e^{-3} \\approx 0.0498$, the same as last lecture's chance of no calls in a minute. For $x = 0.5$, it's $e^{-1.5} \\approx 0.223$.
3. **The CDF.** $F(x) = P(X \\le x) = 1 - e^{-3x}$.
4. **The density.** *Why differentiate:* $f = F'$. The derivative of $1 - e^{-3x}$ is $3e^{-3x}$, which is $\\lambda e^{-\\lambda x}$ with $\\lambda = 3$ ✓.
5. **The mean.** $3$ calls per minute means about $\\tfrac13$ minute between calls. The integral agrees: integrating by parts, $\\int_0^\\infty x \\cdot 3e^{-3x}\\,dx = \\left[-x e^{-3x}\\right]_0^\\infty + \\int_0^\\infty e^{-3x}\\,dx = 0 + \\tfrac13 = \\tfrac13$.
<<<

**No memory.** The exponential **forgets how long you've waited**: if you've already waited $s$ minutes, the chance of waiting $t$ more is the same as at the start,

$$P(X > s + t \\mid X > s) = P(X > t).$$
>>> No memory, step by step, with a light bulb
A bulb's lifetime is exponential with an average of $1000$ hours, so $\\lambda = \\tfrac{1}{1000}$.

1. **A new bulb lasting more than $500$ hours.** $P(X > 500) = e^{-500/1000} = e^{-0.5} \\approx 0.607$.
2. **Set up the question.** The bulb has already lasted $1000$ hours. What's the chance it lasts $500$ more, that is past $1500$? *Why conditional probability:* we know $X > 1000$ happened. So we want $P(X > 1500 \\mid X > 1000) = \\dfrac{P(X > 1500 \\text{ and } X > 1000)}{P(X > 1000)}$.
3. **Simplify the top.** Lasting past $1500$ already means lasting past $1000$, so "both" is just $X > 1500$.
4. **Compute.** $\\dfrac{e^{-1.5}}{e^{-1}} = e^{-1.5 + 1} = e^{-0.5} \\approx 0.607$, the same as step 1.

The used bulb is as good as a new one. That fits things that fail by sudden accident, like a call arriving, but not things that wear out, like a car's brakes.
<<<
:::

:::check
A bulb's lifetime is exponential with an average of $1000$ hours. What is the probability it burns out within its first $1000$ hours? (You can type \`1 - e^(-1)\`.)
answer: 1 - e^(-1)
???
$\\lambda = \\tfrac{1}{1000}$, so $P(X \\le 1000) = 1 - e^{-1000/1000} = 1 - e^{-1} \\approx 0.632$. Most bulbs burn out before the average lifetime, because a few last much longer and pull the average up.
:::

:::summary Summary
- A continuous $X$ has a **density** $f$: $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$, with $f \\ge 0$ and total area $1$.
- The **CDF** is $F(x) = P(X \\le x)$. $F' = f$, and $P(a < X \\le b) = F(b) - F(a)$.
- $E[X] = \\int x\\,f(x)\\,dx$, $E[g(X)] = \\int g(x)\\,f(x)\\,dx$, and $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$.

| Distribution | Density | Mean | Variance |
|---|---|---|---|
| Uniform on $[a, b]$ | $\\tfrac{1}{b - a}$ | $\\tfrac{a + b}{2}$ | $\\tfrac{(b - a)^2}{12}$ |
| Exponential, rate $\\lambda$ | $\\lambda e^{-\\lambda x}$ | $\\tfrac1\\lambda$ | $\\tfrac{1}{\\lambda^2}$ |

**Common mistakes:**
- Treating $f(x)$ as a probability. It can be more than $1$; only areas under it are probabilities.
- Mixing up the rate and the mean of an exponential. An average of $1000$ hours means $\\lambda = \\tfrac{1}{1000}$, not $1000$.
- Worrying about $<$ versus $\\le$. For a continuous $X$ they give the same probability.
:::
`;export{e as default};