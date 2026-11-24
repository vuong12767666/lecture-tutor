var e=`---
title: Probability Method Check
exam: Final
minutes: 25
format: multiple-choice
note: Multiple choice on choosing the right method, not computing. No scratch paper needed. Not an official exam.
---

:::problem 1
How many committees of $4$ can be chosen from $12$ people (no roles, just members)?

{{circle 1: $12 \\times 11 \\times 10 \\times 9$ | *$\\binom{12}{4}$ | $12^4$ | $4!$}}
+++
review: 2026-11-20 Combinations: choosing without order

**The method.** A committee has no order, so it's a combination: $\\binom{12}{4} = \\tfrac{12 \\times 11 \\times 10 \\times 9}{4!} = 495$. For example, with $4$ people choosing $2$, $\\binom42 = 6$: AB, AC, AD, BC, BD, CD.

**Why not the other choices.**
- **$12 \\times 11 \\times 10 \\times 9$:** that's ordered picks (a president, vice president, and so on). Each committee is counted $4! = 24$ times.
- **$12^4$:** that lets the same person be picked again, and counts order.
- **$4!$:** that's the number of ways to order $4$ people, not to choose them.
:::

:::problem 2
How many different arrangements are there of the letters in BANANA?

{{circle 1: $6!$ | $\\binom63$ | *$\\dfrac{6!}{3!\\,2!}$ | $\\dfrac{6!}{3!}$}}
+++
review: 2026-11-20 Permutations: arranging in order

**The method.** Arrange all $6$ letters, then divide by the ways to reorder each group of identical letters: three A's ($3!$) and two N's ($2!$). That's $\\tfrac{720}{12} = 60$. For example, BOOK has $\\tfrac{4!}{2!} = 12$ arrangements.

**Why not the other choices.**
- **$6!$:** it treats the three A's as different, so each word is counted $3! \\times 2! = 12$ times.
- **$\\binom63$:** that only places the A's and forgets to arrange the B and the N's.
- **$\\tfrac{6!}{3!}$:** it handles the A's but still counts each word twice because of the two N's.
:::

:::problem 3
How many ways can $10$ identical cookies be given to $4$ children (some may get none)?

{{circle 1: *$\\binom{13}{3}$ | $\\binom{10}{4}$ | $4^{10}$ | $10^4$}}
+++
review: 2026-11-20 Identical things into boxes: stars and bars

**The method.** Identical things into different boxes is stars and bars: $10$ stars and $3$ bars, choosing which $3$ of the $13$ spots are bars, $\\binom{13}{3} = 286$. For example, $4$ cookies to $3$ children: $\\binom62 = 15$.

**Why not the other choices.**
- **$\\binom{10}{4}$:** that chooses $4$ of $10$ different things, which isn't what's happening.
- **$4^{10}$:** that gives each cookie its own child, as if the cookies were different.
- **$10^4$:** that has no meaning here; it treats the children as choosing among $10$ options.
:::

:::problem 4
A die is rolled $4$ times. How do you find the probability of at least one $6$?

{{circle 1: $4 \\times \\tfrac16$ | $\\left(\\tfrac16\\right)^4$ | $1 - \\left(\\tfrac16\\right)^4$ | *$1 - \\left(\\tfrac56\\right)^4$}}
+++
review: 2026-11-23 The complement rule; 2026-11-25 Independent events

**The method.** "At least one" is everything except "none". No $6$ in $4$ independent rolls is $\\left(\\tfrac56\\right)^4$, so the answer is $1 - \\left(\\tfrac56\\right)^4 \\approx 0.518$. For example, with $2$ rolls: $1 - \\tfrac{25}{36} = \\tfrac{11}{36}$.

**Why not the other choices.**
- **$4 \\times \\tfrac16$:** it double-counts rolls with two or more $6$'s. With $6$ rolls it would give $1$, which is wrong.
- **$\\left(\\tfrac16\\right)^4$:** that's the chance that **all** four are $6$'s.
- **$1 - \\left(\\tfrac16\\right)^4$:** that's the chance that not all four are $6$'s.
:::

:::problem 5
You know $P(\\text{positive} \\mid \\text{sick})$, how common the disease is, and $P(\\text{positive} \\mid \\text{healthy})$. You want $P(\\text{sick} \\mid \\text{positive})$. What do you use?

{{circle 1: *Bayes' rule | $P(\\text{sick} \\mid \\text{positive}) = P(\\text{positive} \\mid \\text{sick})$ | Multiply $P(\\text{sick})$ by $P(\\text{positive})$ | The addition rule}}
+++
review: 2026-11-25 Bayes' rule: turning a conditional around

**The method.** Bayes' rule turns $P(B \\mid A)$ into $P(A \\mid B)$: the sick positives over all positives. For example, with $1\\%$ sick, $90\\%$ and $5\\%$ positive rates, out of $10{,}000$ people $90$ sick and $495$ healthy test positive, so $\\tfrac{90}{585} \\approx 15\\%$.

**Why not the other choices.**
- **They're equal:** that's the classic mistake. In the example, one is $90\\%$ and the other $15\\%$.
- **Multiply:** that would be $P(\\text{sick and positive})$ only if the two were independent, and they aren't.
- **The addition rule:** it's for "or", not for turning a conditional around.
:::

:::problem 6
A box of $50$ parts has $5$ defective ones. You draw $10$ without putting any back. The number of defective parts drawn has which distribution?

{{circle 1: Binomial | *Hypergeometric | Poisson | Geometric}}
+++
review: 2026-12-02 The hypergeometric distribution

**The method.** Drawing a fixed number without replacement from a fixed group is hypergeometric: $P(X = k) = \\tfrac{\\binom5k \\binom{45}{10 - k}}{\\binom{50}{10}}$. For example, $5$ red and $3$ blue marbles, draw $3$: $P(\\text{exactly } 2 \\text{ red}) = \\tfrac{15}{28}$.

**Why not the other choices.**
- **Binomial:** it needs the same chance every draw. Here each defective drawn makes the next one less likely.
- **Poisson:** it's for counts with no fixed number of tries.
- **Geometric:** it counts tries until the first success, not successes in $10$ tries.
:::

:::problem 7
A writer makes on average $3$ typos per page, independently. The number of typos on a page has which distribution?

{{circle 1: Binomial with $n = 3$ | Exponential | *Poisson with $\\lambda = 3$ | Uniform}}
+++
review: 2026-12-02 The Poisson distribution

**The method.** A count of rare, independent events at an average rate is Poisson: $P(X = k) = e^{-3}\\tfrac{3^k}{k!}$. For example, the chance of a page with no typos is $e^{-3} \\approx 0.05$.

**Why not the other choices.**
- **Binomial with $n = 3$:** that would mean at most $3$ typos, but a page could have $5$.
- **Exponential:** that's a waiting time (how far until the next typo), not a count.
- **Uniform:** that would make every count equally likely, which a page of text doesn't do.
:::

:::problem 8
$20$ people put their names in a hat and each draws one at random. How do you find the expected number who draw their own name?

{{circle 1: Find $P(X = k)$ for every $k$, then compute $\\sum k\\,P(X = k)$ | *Indicators: one per person, each with probability $\\tfrac{1}{20}$, then add | Multiply the $20$ probabilities | Use Chebyshev's inequality}}
+++
review: 2026-11-30 The expected value of a sum

**The method.** Write the count as a sum of indicators and add their probabilities: $20 \\times \\tfrac{1}{20} = 1$. This works even though the indicators depend on each other. For example, with $3$ people, the $6$ orders give $3 + 1 + 1 + 1 + 0 + 0 = 6$ matches, an average of $1$.

**Why not the other choices.**
- **The full distribution:** it would work, but finding $P(X = k)$ for $20$ people is very hard. The indicator method avoids it.
- **Multiply:** that gives the chance that **everyone** draws their own name, not an expected count.
- **Chebyshev:** it gives a bound on a probability, not an expected value.
:::

:::problem 9
$X$ and $Y$ are **not** independent. How do you find $\\operatorname{Var}(X + Y)$?

{{circle 1: $\\operatorname{Var}(X) + \\operatorname{Var}(Y)$ | $(\\sigma_X + \\sigma_Y)^2$ | $\\operatorname{Var}(X)\\operatorname{Var}(Y)$ | *$\\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)$}}
+++
review: 2026-12-11 The variance of a sum, and correlation

**The method.** Squaring $(X - \\mu_X) + (Y - \\mu_Y)$ gives two squares plus twice the product, so the covariance appears. For example, with $\\operatorname{Var}(X) = 4$, $\\operatorname{Var}(Y) = 9$, and $\\operatorname{Cov} = -3$, the variance of the sum is $4 + 9 - 6 = 7$.

**Why not the other choices.**
- **No covariance term:** that's only right when $\\operatorname{Cov}(X, Y) = 0$, for example when they're independent.
- **$(\\sigma_X + \\sigma_Y)^2$:** that's only right when they move together perfectly (correlation $1$).
- **The product:** variances never multiply for a sum.
:::

:::problem 10
You know the CDF $F(x)$ of a continuous $X$ and need its density. What do you do?

{{circle 1: *Differentiate $F$ | Integrate $F$ | Use $F$ itself | Use $1 - F$}}
+++
review: 2026-12-04 The cumulative distribution function

**The method.** $F(x) = \\int_{-\\infty}^x f(t)\\,dt$, so $f = F'$. For example, $F(x) = 1 - e^{-3x}$ gives $f(x) = 3e^{-3x}$.

**Why not the other choices.**
- **Integrate $F$:** that goes the wrong way; the density is the derivative.
- **$F$ itself:** $F$ is "probability up to $x$", a running total, not the density.
- **$1 - F$:** that's $P(X > x)$, also a probability, not a density.
:::

:::problem 11
$X$ has density $f$. How do you find $P(X > 2)$?

{{circle 1: $f(2)$ | $1 - f(2)$ | *$\\int_2^\\infty f(x)\\,dx$ | $\\int_{-\\infty}^2 f(x)\\,dx$}}
+++
review: 2026-12-04 Densities: probability is area

**The method.** For a continuous $X$, probabilities are areas under the density. "More than $2$" is the area to the right of $2$. For example, with $f(x) = e^{-x}$ for $x \\ge 0$, $\\int_2^\\infty e^{-x}\\,dx = e^{-2} \\approx 0.135$.

**Why not the other choices.**
- **$f(2)$ and $1 - f(2)$:** a density's value isn't a probability. It can even be bigger than $1$.
- **$\\int_{-\\infty}^2 f$:** that's $P(X \\le 2)$, the other side.
:::

:::problem 12
Customers arrive at an average rate of $4$ per hour, independently. The time until the next customer has which distribution?

{{circle 1: Poisson with $\\lambda = 4$ | *Exponential with rate $4$ | Uniform on $[0, 4]$ | Normal with mean $4$}}
+++
review: 2026-12-04 The exponential distribution

**The method.** When events come at rate $\\lambda$, the count in a fixed time is Poisson, and the **waiting time** until the next one is exponential with rate $\\lambda$, mean $\\tfrac1\\lambda$. Here the average wait is $\\tfrac14$ hour, $15$ minutes.

**Why not the other choices.**
- **Poisson:** that's for the number of customers in an hour, a count, not a time.
- **Uniform on $[0, 4]$:** a wait doesn't stop at $4$ hours, and short waits are more likely than long ones.
- **Normal with mean $4$:** a wait can't be negative, and its mean is $\\tfrac14$, not $4$.
:::

:::problem 13
You know the density of $X$ and need the density of $Y = X^2$. What's the method?

{{circle 1: Replace $x$ by $x^2$ in $f$ | Compute $E[X^2]$ | *Find $P(X^2 \\le y)$ in terms of $X$, then differentiate | Square the density}}
+++
review: 2026-12-07 The distribution of a function of X

**The method.** Go through the CDF: $F_Y(y) = P(X^2 \\le y)$, rewritten as a statement about $X$, then $f_Y = F_Y'$. For example, if $X$ is uniform on $[0, 1]$, $F_Y(y) = P(X \\le \\sqrt y) = \\sqrt y$, so $f_Y(y) = \\tfrac{1}{2\\sqrt y}$.

**Why not the other choices.**
- **Replace $x$ by $x^2$:** in the example that gives $1$, but the real density, $\\tfrac{1}{2\\sqrt y}$, piles up near $0$.
- **$E[X^2]$:** that's one number, the average of $Y$, not its density.
- **Square the density:** it doesn't even have total area $1$ in general.
:::

:::problem 14
$X \\sim N(\\mu, \\sigma^2)$. How do you find $P(X > a)$?

{{circle 1: *$1 - \\Phi\\!\\left(\\frac{a - \\mu}{\\sigma}\\right)$ | $\\Phi\\!\\left(\\frac{a - \\mu}{\\sigma}\\right)$ | $1 - \\Phi\\!\\left(\\frac{a - \\mu}{\\sigma^2}\\right)$ | $\\Phi(a)$}}
+++
review: 2026-12-07 Standardizing: one table for every normal

**The method.** Standardize with the standard deviation, then use "more than" $= 1 - $ "at most". For example, scores $N(70, 10^2)$: $P(X > 85) = 1 - \\Phi(1.5) = 0.0668$.

**Why not the other choices.**
- **Without $1 -$:** $\\Phi$ gives "at most", the other side.
- **Dividing by $\\sigma^2$:** with $\\sigma = 10$ that divides by $100$, making the z-score ten times too small.
- **$\\Phi(a)$:** that's only right for the standard normal, mean $0$ and standard deviation $1$.
:::

:::problem 15
A fair coin is flipped $400$ times. Which is the best way to approximate the probability of at least $220$ heads?

{{circle 1: The Poisson formula with $\\lambda = 200$ | Chebyshev's inequality | Normal with mean $200$ and standard deviation $10$, using $220.5$ | *Normal with mean $200$ and standard deviation $10$, using $219.5$}}
+++
review: 2026-12-07 The normal approximation to the binomial

**The method.** A binomial with $np(1 - p) = 100 \\ge 10$ is close to normal with $\\mu = np = 200$ and $\\sigma = \\sqrt{100} = 10$. "At least $220$" includes the whole bar for $220$, which starts at $219.5$. So $P \\approx 1 - \\Phi(1.95) \\approx 0.026$.

**Why not the other choices.**
- **Poisson:** it fits rare events (small $p$); here $p = \\tfrac12$.
- **Chebyshev:** it only gives an upper bound, not an approximation.
- **Using $220.5$:** that cuts off the bar for $220$, which "at least $220$" includes.
:::

:::problem 16
How do you show that $X$ and $Y$, with joint density $f(x, y)$, are independent?

{{circle 1: Check $f = f_X f_Y$ at one point | *Check $f(x, y) = f_X(x)\\,f_Y(y)$ for every $x$ and $y$ | Check $\\operatorname{Cov}(X, Y) = 0$ | Check that each marginal has total area $1$}}
+++
review: 2026-12-09 Independent random variables

**The method.** Independence means the joint density is the product of the marginals **everywhere**. For example, $4xy = (2x)(2y)$ on the unit square, for all $x$ and $y$.

**Why not the other choices.**
- **One point:** matching at one point proves nothing; failing at one point proves dependence.
- **Covariance $0$:** $X$ uniform on $\\{-1, 0, 1\\}$ and $Y = X^2$ have covariance $0$ but are completely dependent.
- **Total area $1$:** every marginal has that, independent or not.
:::

:::problem 17
Roll a die, then flip that many coins. How do you find the expected number of heads?

{{circle 1: The binomial formula with $n = 3.5$ coins | *Condition on the die: $E[H] = \\sum_n E[H \\mid N = n]\\,P(N = n)$ | Multiply $E[N]$ by $P(\\text{heads})^{E[N]}$ | Use the central limit theorem}}
+++
review: 2026-12-11 Conditional expectation

**The method.** The law of total expectation: average the easy conditional answers. Given $N = n$, $E[H \\mid N = n] = \\tfrac n2$, so $E[H] = \\sum_n \\tfrac n2 \\cdot \\tfrac16 = \\tfrac{3.5}{2} = 1.75$.

**Why not the other choices.**
- **Binomial with $n = 3.5$:** you can't flip $3.5$ coins, and $H$ isn't binomial, because the number of flips is random. The answer happens to equal $\\tfrac{3.5}{2}$, but conditioning is what shows it.
- **The power:** that mixes up an expected count with a probability of all heads.
- **The central limit theorem:** it describes the shape of a sum of many pieces, not this expected value.
:::

:::problem 18
$X$ and $Y$ are independent Poissons with rates $2$ and $3$. How do you show $X + Y$ is Poisson?

{{circle 1: Multiply the rates | *Multiply the moment generating functions and recognize $e^{5(e^t - 1)}$ | Add the probabilities $P(X = k) + P(Y = k)$ | It's normal, not Poisson}}
+++
review: 2026-12-11 Moment generating functions; 2026-12-09 Sums of independent random variables

**The method.** For independent random variables, the MGF of the sum is the product, and an MGF determines the distribution. $e^{2(e^t - 1)}\\,e^{3(e^t - 1)} = e^{5(e^t - 1)}$, the Poisson MGF with rate $5$.

**Why not the other choices.**
- **Multiply the rates:** rates add; a line with $2$ calls an hour and one with $3$ have $5$ together, not $6$.
- **Add the probabilities:** those add up to $2$ over all $k$, so they can't be a distribution.
- **Normal:** the sum still takes whole-number values, and its MGF is exactly Poisson.
:::

:::problem 19
You know only the mean $\\mu$ and standard deviation $\\sigma$ of $X$ (nothing about its shape). How do you bound $P(|X - \\mu| \\ge 3\\sigma)$?

{{circle 1: The normal table: about $0.003$ | *Chebyshev's inequality: at most $\\tfrac19$ | The central limit theorem | Markov's inequality with $a = 3\\sigma$}}
+++
review: 2026-12-14 Markov's and Chebyshev's inequalities

**The method.** Chebyshev works for any distribution with a mean and variance: $P(|X - \\mu| \\ge k) \\le \\tfrac{\\sigma^2}{k^2} = \\tfrac19$ for $k = 3\\sigma$.

**Why not the other choices.**
- **The normal table:** that assumes $X$ is normal, which we don't know.
- **The central limit theorem:** it's about sums or averages of many independent pieces, and here there's just one $X$.
- **Markov:** it needs $X \\ge 0$ and bounds $P(X \\ge a)$, not the distance from the mean.
:::

:::problem 20
You average $100$ independent measurements, each with mean $\\mu$ and standard deviation $\\sigma$, and want the approximate probability that the average is more than $\\mu + 0.2\\sigma$. What do you use?

{{circle 1: The normal table with standard deviation $\\sigma$ | *The normal table with standard deviation $\\tfrac{\\sigma}{10}$ | The law of large numbers, which gives the exact answer | Chebyshev's inequality, which gives the exact answer}}
+++
review: 2026-12-14 The central limit theorem

**The method.** By the central limit theorem, the average is approximately normal with standard deviation $\\tfrac{\\sigma}{\\sqrt{100}} = \\tfrac{\\sigma}{10}$. So $z = \\tfrac{0.2\\sigma}{\\sigma/10} = 2$, and $P \\approx 1 - \\Phi(2) = 0.0228$.

**Why not the other choices.**
- **Standard deviation $\\sigma$:** that's one measurement's spread. It would give $z = 0.2$, a probability of about $0.42$, far too big.
- **The law of large numbers:** it says the average gets close to $\\mu$, but gives no probability for this case.
- **Chebyshev:** it gives an upper bound, not the answer (here, at most $\\tfrac14$).
:::

:::problem 21
$X$ has moment generating function $M(t)$. How do you find $E[X^2]$?

{{circle 1: $M'(0)^2$ | $M(0)$ | *$M''(0)$ | $M'(1)$}}
+++
review: 2026-12-11 Moment generating functions

**The method.** Each derivative of $M(t) = E[e^{tX}]$ brings down one factor of $X$, and $t = 0$ removes the exponential, so $M''(0) = E[X^2]$. For example, for one die, $M''(0) = \\tfrac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\tfrac{91}{6}$.

**Why not the other choices.**
- **$M'(0)^2$:** that's $(E[X])^2$, which is $12.25$ for a die, not $\\tfrac{91}{6} \\approx 15.17$.
- **$M(0)$:** that's always $E[e^0] = 1$.
- **$M'(1)$:** the moments come from $t = 0$; at $t = 1$ the exponentials don't disappear.
:::
`;export{e as default};