var e=`---
title: Binomial, geometric, Poisson, and hypergeometric distributions
date: 2026-12-02
source: Grinstead and Snell, Introduction to Probability, §5.1 Important Distributions
---

:::recap Last time
- A **random variable** $X$ is a number decided by the outcome, and $p(x) = P(X = x)$ lists the probability of each value.
- $E[X] = \\sum x\\,p(x)$ is the long-run average, and $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$ measures the spread.
- An expected count can be written as a sum of indicators ($1$ if something happens, $0$ if not), and $E[\\text{sum}] = \\text{sum of the } E$'s.
:::

:::check
Warm-up: a basketball player makes each free throw with probability $0.7$, and the shots are independent. What is the probability that they make both of their next $2$ shots?
answer: 0.49
???
Independent, so multiply: $0.7 \\times 0.7 = 0.49$.
:::

:::question Today
The same few situations come up again and again: repeat a try and count the successes; repeat it until the first success; count rare events in an hour or on a page; draw from a bag without putting things back. Each one has a named distribution with a ready-made formula for $p(k)$, the mean, and the variance. Today: which is which, and why each formula is what it is.
:::

:::idea The binomial distribution
A **Bernoulli trial** is one try with two results, success or failure, where success has probability $p$. Do $n$ trials that are independent, each with the same $p$, and let $X$ be the number of successes. Then $X$ has the [[binomial-distribution|binomial distribution]] with parameters $n$ and $p$, and

$$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}, \\qquad k = 0, 1, \\ldots, n.$$

Here $\\binom{n}{k}$, read "$n$ choose $k$", is the number of ways to pick which $k$ of the $n$ trials are the successes:

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n - k)!}, \\qquad\\text{where } n! = n \\times (n - 1) \\times \\cdots \\times 2 \\times 1.$$

**Example.** The free-throw shooter ($p = 0.7$) takes $5$ shots. The probability of making exactly $4$ is $\\binom54 (0.7)^4 (0.3)^1 = 5 \\times 0.2401 \\times 0.3 = 0.36015$, about $36\\%$.
>>> Why the formula is what it is, with the $5$ shots
Write a shot sequence with M for make and X for miss, like MMXMM.

1. **Find the probability of one sequence with $4$ makes.** *Why start here:* "exactly $4$ makes" is made up of several such sequences, so we add up their probabilities. Take MMMMX. The shots are independent, so multiply: $0.7 \\times 0.7 \\times 0.7 \\times 0.7 \\times 0.3 = (0.7)^4 (0.3) = 0.07203$.
2. **Notice every such sequence has the same probability.** MXMMM is $0.7 \\times 0.3 \\times 0.7 \\times 0.7 \\times 0.7$: the same four $0.7$'s and one $0.3$, just in a different order, so it's also $0.07203$. That is the $p^k (1 - p)^{n - k}$ part: $k = 4$ factors of $p$ and $n - k = 1$ factor of $1 - p$.
3. **Count the sequences.** *Why:* the probability is (number of sequences) $\\times$ (probability of each). The one miss can be shot $1, 2, 3, 4,$ or $5$: XMMMM, MXMMM, MMXMM, MMMXM, MMMMX. That is $5$ sequences, and $\\binom54 = 5$.
4. **Multiply.** $5 \\times 0.07203 = 0.36015$ ✓.
<<<
>>> Counting with $\\binom{n}{k}$, step by step
How many ways are there to choose which $2$ of $5$ shots are the makes?

1. **List them.** *Why:* listing shows what $\\binom52$ is counting. Writing the shot numbers of the two makes: $\\{1,2\\}$, $\\{1,3\\}$, $\\{1,4\\}$, $\\{1,5\\}$, $\\{2,3\\}$, $\\{2,4\\}$, $\\{2,5\\}$, $\\{3,4\\}$, $\\{3,5\\}$, $\\{4,5\\}$. That's $10$.
2. **Count them a faster way.** Pick the first make's shot: $5$ choices. Then the second: $4$ choices left. That gives $5 \\times 4 = 20$, but each pair got counted twice, once as $\\{1,3\\}$ and once as $\\{3,1\\}$. So divide by $2$: $\\tfrac{20}{2} = 10$ ✓.
3. **Match the formula.** $\\binom52 = \\dfrac{5!}{2!\\,3!} = \\dfrac{120}{2 \\times 6} = 10$ ✓. The $5!$ over $3!$ is the $5 \\times 4$ from step 2, since $\\tfrac{5 \\times 4 \\times 3 \\times 2 \\times 1}{3 \\times 2 \\times 1} = 5 \\times 4$. The $2!$ underneath is the "counted twice".
<<<

**Mean and variance.** $E[X] = np$ and $\\operatorname{Var}(X) = np(1 - p)$. For the $5$ shots, $E[X] = 5 \\times 0.7 = 3.5$ makes, and $\\operatorname{Var}(X) = 5 \\times 0.7 \\times 0.3 = 1.05$.
>>> Why $E[X] = np$ and $\\operatorname{Var}(X) = np(1 - p)$
Write $X = I_1 + I_2 + \\cdots + I_n$, where $I_j$ is $1$ if trial $j$ succeeds and $0$ if not.

1. **The mean of one indicator.** $E[I_j] = 1 \\cdot p + 0 \\cdot (1 - p) = p$. For a free throw, $0.7$.
2. **Add them up.** *Why we can:* the expected value of a sum is the sum of the expected values. So $E[X] = p + p + \\cdots + p = np$. For $5$ shots, $0.7 \\times 5 = 3.5$.
3. **The variance of one indicator.** $I_j^2 = I_j$, because $0^2 = 0$ and $1^2 = 1$. So $E[I_j^2] = p$, and $\\operatorname{Var}(I_j) = p - p^2 = p(1 - p)$. For a free throw, $0.7 - 0.49 = 0.21$.
4. **Add the variances.** For **independent** random variables, variances add too (we'll see why in a later lecture). So $\\operatorname{Var}(X) = n\\,p(1 - p)$. For $5$ shots, $5 \\times 0.21 = 1.05$.
<<<
:::

:::check
A fair coin is flipped $4$ times. What is the probability of exactly $2$ heads?
answer: 3/8
???
Binomial with $n = 4$ and $p = \\tfrac12$: $\\binom42 \\left(\\tfrac12\\right)^2 \\left(\\tfrac12\\right)^2 = 6 \\times \\tfrac{1}{16} = \\tfrac{6}{16} = \\tfrac38$. The $6$ ways are HHTT, HTHT, HTTH, THHT, THTH, TTHH.
:::

:::idea The geometric distribution
Now keep doing independent trials, each with success probability $p$, until the **first** success, and let $X$ be the number of trials it takes. Then $X$ has the [[geometric-distribution|geometric distribution]]:

$$P(X = k) = (1 - p)^{k - 1}\\, p, \\qquad k = 1, 2, 3, \\ldots$$

with $E[X] = \\dfrac1p$ and $\\operatorname{Var}(X) = \\dfrac{1 - p}{p^2}$.

**Example.** Roll a die until you get a $6$. The probability that the first $6$ comes on roll $3$ is $\\left(\\tfrac56\\right)^2 \\tfrac16 = \\tfrac{25}{216} \\approx 0.116$. On average it takes $E[X] = \\tfrac{1}{1/6} = 6$ rolls.
>>> The formula, step by step, for "first $6$ on roll $3$"
1. **Say what has to happen.** *Why:* "the first $6$ is on roll $3$" means rolls $1$ and $2$ are **not** $6$, and roll $3$ **is**. Write it as F, F, S (fail, fail, success).
2. **Find each probability.** A roll fails with probability $\\tfrac56$ and succeeds with $\\tfrac16$.
3. **Multiply.** *Why multiply:* the rolls are independent. $\\tfrac56 \\times \\tfrac56 \\times \\tfrac16 = \\tfrac{25}{216} \\approx 0.116$. In general it's $k - 1$ failures and then one success, which is $(1 - p)^{k - 1} p$.
4. **A useful shortcut.** "It takes more than $3$ rolls" means the first $3$ rolls all fail, so $P(X > 3) = \\left(\\tfrac56\\right)^3 = \\tfrac{125}{216} \\approx 0.579$. In general, $P(X > k) = (1 - p)^k$.
<<<
>>> Why it takes $\\tfrac1p$ trials on average
Use the die, with $p = \\tfrac16$, and call the average number of rolls $m$.

1. **Look at the first roll.** *Why:* the first roll either ends the wait or doesn't, and each case is easy. You always use that $1$ roll.
2. **If it's a $6$** (probability $\\tfrac16$), you're done: $1$ roll in total.
3. **If it isn't** (probability $\\tfrac56$), you're back where you started: the next rolls don't remember the first one, so you still need $m$ more rolls on average, after the $1$ you used.
4. **Put it together.** $m = 1 + \\tfrac56 m$: one roll always, plus $m$ more, $\\tfrac56$ of the time.
5. **Solve.** Subtract $\\tfrac56 m$ from both sides: $\\tfrac16 m = 1$, so $m = 6$. With a general $p$, the same steps give $p\\,m = 1$, so $m = \\tfrac1p$.
6. **Check with a coin, from the formula.** For heads, $p = \\tfrac12$, so the average should be $2$ flips. Using $E[X] = \\sum k\\,P(X = k)$ with $P(X = k) = \\left(\\tfrac12\\right)^k$, the first terms are $1 \\times 0.5 = 0.5$, $2 \\times 0.25 = 0.5$, $3 \\times 0.125 = 0.375$, $4 \\times 0.0625 = 0.25$, and $5 \\times 0.03125 = 0.15625$. These already add to $1.78125$, and the terms keep shrinking toward $0$, so the total creeps up to $2$ ✓.
<<<

Waiting for the $r$th success instead of the first gives the **negative binomial** distribution. It is a sum of $r$ geometric waits, so its mean is $\\tfrac{r}{p}$.
:::

:::check
A fair coin is flipped until the first head. What is the probability that the first head comes on flip $4$?
answer: 1/16
???
Three tails, then a head: $\\left(\\tfrac12\\right)^3 \\tfrac12 = \\tfrac{1}{16}$.
:::

:::idea The Poisson distribution
Some counts have no fixed number of trials: the number of typos on a page, or calls to a help line in a minute. Each tiny piece of the page or minute has a tiny chance of an event. If the events happen independently, at an average rate of $\\lambda$ (the Greek letter lambda) per page or per minute, the count $X$ has the [[poisson-distribution|Poisson distribution]]:

$$P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}, \\qquad k = 0, 1, 2, \\ldots$$

with $E[X] = \\lambda$ and $\\operatorname{Var}(X) = \\lambda$. Here $e \\approx 2.718$, and $0! = 1$.

It is what the binomial becomes when $n$ is large and $p$ is small, with $\\lambda = np$.

**Example.** A writer makes on average $2$ typos per page. The probability that a page has no typos is $e^{-2} \\approx 0.135$, and exactly one typo is $e^{-2} \\cdot 2 \\approx 0.271$.
>>> The typo example, step by step, and why Poisson fits
1. **Find $\\lambda$.** *Why:* the formula needs the average count. It's $2$ typos per page, so $\\lambda = 2$.
2. **No typos, $k = 0$.** $e^{-2} \\dfrac{2^0}{0!} = e^{-2} \\cdot \\dfrac11 = e^{-2} \\approx 0.1353$.
3. **One typo, $k = 1$.** $e^{-2} \\dfrac{2^1}{1!} = 2e^{-2} \\approx 0.2707$.
4. **Two typos, $k = 2$.** $e^{-2} \\dfrac{2^2}{2!} = e^{-2} \\dfrac{4}{2} = 2e^{-2} \\approx 0.2707$.
5. **At most two.** Add them: $e^{-2}(1 + 2 + 2) = 5e^{-2} \\approx 0.677$.
6. **Why Poisson fits.** Say a page has $1000$ words, and each word independently has a typo with probability $0.002$. That's binomial with $n = 1000$ and $p = 0.002$, so the average is $1000 \\times 0.002 = 2$. Its exact probability of no typos is $(0.998)^{1000} \\approx 0.1351$, almost the same as $e^{-2} \\approx 0.1353$. Poisson only needs the average, $2$, not the number of words or the chance per word.
<<<
:::

:::check
A help line gets on average $3$ calls per minute, and the number of calls is Poisson. What is the probability of no calls in a given minute? (You can type \`e^(-3)\`.)
answer: e^(-3)
???
With $\\lambda = 3$ and $k = 0$: $e^{-3} \\dfrac{3^0}{0!} = e^{-3} \\approx 0.0498$, about $5\\%$.
:::

:::idea The hypergeometric distribution
The binomial needs the same $p$ on every trial. When you draw **without putting things back**, $p$ changes after each draw. If a bag has $N$ items, $K$ of them "successes", and you draw $n$ without replacement, the number of successes $X$ is [[hypergeometric-distribution|hypergeometric]]:

$$P(X = k) = \\frac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}.$$

Its mean is $E[X] = n \\dfrac{K}{N}$, the same as if you put things back.

**Example.** A bag has $5$ red and $3$ blue marbles, and you draw $3$ without putting them back. The probability of exactly $2$ red is $\\dfrac{\\binom52 \\binom31}{\\binom83} = \\dfrac{10 \\times 3}{56} = \\dfrac{15}{28} \\approx 0.536$.
>>> The marble example, step by step
1. **Count all possible draws.** *Why:* every set of $3$ marbles is equally likely, so the probability is (good sets) over (all sets). Choosing $3$ of the $8$ marbles: $\\binom83 = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$.
2. **Count the draws with exactly $2$ red.** *Why split it:* such a draw is $2$ of the $5$ red **and** $1$ of the $3$ blue, and every choice of the reds goes with every choice of the blue. Choosing the reds: $\\binom52 = 10$. Choosing the blue: $\\binom31 = 3$. Together: $10 \\times 3 = 30$.
3. **Divide.** $\\tfrac{30}{56} = \\tfrac{15}{28} \\approx 0.536$.
4. **Compare with putting marbles back.** Then each draw is red with probability $\\tfrac58$ every time, which is binomial: $\\binom32 \\left(\\tfrac58\\right)^2 \\tfrac38 = \\tfrac{225}{512} \\approx 0.439$. The answers differ because, without replacement, drawing a red marble makes the next one less likely to be red.
5. **The mean is the same either way.** Each draw, looked at on its own, is equally likely to be any of the $8$ marbles, so it is red with probability $\\tfrac58$, even the second or third draw (before you know what came earlier). So with indicators the expected number of red is $3 \\times \\tfrac58 = 1.875$, with or without replacement.
<<<
:::

:::check
Which distribution fits "the number of aces in a $5$-card hand dealt from a $52$-card deck"?
- [ ] Binomial
  why: The cards are dealt without putting any back, so the chance of an ace changes from card to card. The binomial needs the same chance every time.
- [ ] Geometric
  why: Geometric counts how many tries it takes until the first success, not how many successes there are in a fixed number of tries.
- [ ] Poisson
  why: Poisson is for counts with no fixed number of tries, like calls per minute. Here there are exactly $5$ cards.
- [x] Hypergeometric
  why: There are $N = 52$ cards with $K = 4$ aces, and you draw $n = 5$ without putting them back.
???
Without replacement from a fixed deck is hypergeometric: $P(X = k) = \\dfrac{\\binom4k \\binom{48}{5 - k}}{\\binom{52}{5}}$.
:::

:::summary Summary
| Distribution | $P(X = k)$ | Mean | Variance |
| --- | --- | --- | --- |
| Binomial | $\\binom nk p^k (1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Geometric | $(1-p)^{k-1} p$ | $\\tfrac1p$ | $\\tfrac{1-p}{p^2}$ |
| Poisson | $e^{-\\lambda} \\tfrac{\\lambda^k}{k!}$ | $\\lambda$ | $\\lambda$ |
| Hypergeometric | $\\dfrac{\\binom Kk \\binom{N-K}{n-k}}{\\binom Nn}$ | $n\\tfrac KN$ | $n \\tfrac KN \\left(1 - \\tfrac KN\\right) \\tfrac{N-n}{N-1}$ |

**How to choose:** a fixed number of independent tries with the same $p$ is binomial. Counting until the first success is geometric. An average rate with no fixed number of tries is Poisson. Drawing without replacement from a fixed group is hypergeometric.

**Common mistakes:**
- Forgetting $\\binom nk$ in the binomial: $p^k(1 - p)^{n - k}$ is the probability of **one** order, not of all of them.
- Using the binomial for draws without replacement. Use the hypergeometric.
- Starting the geometric at $k = 0$. The first success is on try $1$ at the earliest, so $P(X = 1) = p$.
:::
`;export{e as default};