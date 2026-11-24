var e=`---
title: Probability Final Practice Test 1
exam: Final
minutes: 60
note: Original practice problems on every lecture in this course, in the style of a first probability final. Not an official exam.
---

:::problem 1
**(a)** How many different arrangements are there of the letters in STATS? {{expr 2: 30}}

**(b)** A committee of $4$ is chosen from $6$ women and $4$ men. How many committees have exactly $2$ women? {{expr 2: 90}}
+++
review: 2026-11-20 Permutations: arranging in order; 2026-11-20 Combinations: choosing without order

**First, when to divide and when to multiply.** If some letters are identical, swapping them doesn't make a new word, so you divide by the ways to reorder the identical ones. For example, BOOK has $\\tfrac{4!}{2!} = 12$ arrangements, not $24$. And when a choice happens in separate steps, like "pick the women, then pick the men", you multiply the number of ways for each step.

**The goal.** For (a), count arrangements of $5$ letters with repeats. For (b), choose the women and the men separately, then multiply.

**Step 1 (a): count the letters.** STATS has $5$ letters: S twice, T twice, and A once.

**Step 2 (a): divide for the repeats.** *Why divide:* if all $5$ letters were different there would be $5! = 120$ orders, but swapping the two S's (or the two T's) gives the same word, so each word was counted $2! \\times 2! = 4$ times. So there are $\\tfrac{120}{4} = 30$ arrangements.

**Step 3 (b): choose the women.** *Why a combination:* a committee has no order. Exactly $2$ of the $6$ women: $\\binom62 = \\tfrac{6 \\times 5}{2} = 15$.

**Step 4 (b): choose the men.** The other $2$ members are men: $\\binom42 = \\tfrac{4 \\times 3}{2} = 6$.

**Step 5 (b): multiply.** *Why multiply:* every choice of women goes with every choice of men. $15 \\times 6 = 90$.

**Common mistake.** In (b), using $\\binom{10}{4} = 210$, which counts every committee, not just those with exactly $2$ women.
:::

:::problem 2
Two fair dice are rolled.

**(a)** The probability that the sum is $9$ is {{expr 2: 1/9}}

**(b)** The probability that at least one die shows a $6$ is {{expr 2: 11/36}}
+++
review: 2026-11-23 Sample spaces and events; 2026-11-23 The complement rule

**First, counting equally likely outcomes.** Two dice have $6 \\times 6 = 36$ equally likely (red, blue) pairs. A probability is the number of pairs you want over $36$. For example, a sum of $2$ is only $(1, 1)$, so its probability is $\\tfrac{1}{36}$.

**The goal.** Count the pairs for each event. For (b), count the opposite event, which is easier.

**Step 1 (a): list the pairs adding to $9$.** $(3, 6)$, $(4, 5)$, $(5, 4)$, $(6, 3)$: $4$ pairs. So the probability is $\\tfrac{4}{36} = \\tfrac19$.

**Step 2 (b): use the complement.** *Why:* "at least one $6$" has many cases with overlap (both dice could be $6$), but "no $6$" is simple. No $6$ means each die is $1$ to $5$: $5 \\times 5 = 25$ pairs.

**Step 3 (b): subtract from $1$.** $1 - \\tfrac{25}{36} = \\tfrac{11}{36}$.

**Check.** Count directly: red is $6$ in $6$ pairs, blue is $6$ in $6$ pairs, and $(6, 6)$ was counted twice, so $6 + 6 - 1 = 11$ ✓.
:::

:::problem 3
A factory has two machines. Machine A makes $60\\%$ of the parts, and $2\\%$ of its parts are defective. Machine B makes the other $40\\%$, and $5\\%$ of its parts are defective.

**(a)** The probability that a random part is defective is {{expr 2: 0.032}}

**(b)** A random part is defective. The probability that it came from machine A is {{expr 3: 3/8}}
+++
review: 2026-11-25 Conditional probability; 2026-11-25 Bayes' rule: turning a conditional around

**First, turning a conditional around.** We know $P(\\text{defective} \\mid A) = 0.02$, but (b) asks for $P(A \\mid \\text{defective})$, which is a different number. Counting imaginary parts makes it concrete. For example, out of $1000$ parts, $600$ come from A and $2\\%$ of those, $12$ parts, are defective.

**The goal.** Imagine $1000$ parts, count the defective ones from each machine, then find the fraction of the defective ones that came from A.

**Step 1: parts from each machine.** $60\\%$ of $1000$ is $600$ from A, and $400$ from B.

**Step 2: defective parts from each.** *Why separately:* each machine has its own defect rate. A: $2\\%$ of $600 = 12$. B: $5\\%$ of $400 = 20$.

**Step 3 (a): all defective parts.** $12 + 20 = 32$ out of $1000$, so $P(\\text{defective}) = 0.032$.

**Step 4 (b): the fraction from A.** *Why divide by $32$:* we know the part is defective, so only the $32$ defective parts are possible now. $12$ of them are from A: $\\tfrac{12}{32} = \\tfrac38 = 0.375$.

**Check with Bayes' rule.** $\\dfrac{0.6 \\times 0.02}{0.6 \\times 0.02 + 0.4 \\times 0.05} = \\dfrac{0.012}{0.032} = \\dfrac38$ ✓. Even though A makes most parts, most defective parts come from B, because B's defect rate is more than twice as high.
:::

:::problem 4
Events $A$ and $B$ have $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\text{ or } B) = 0.7$. Are $A$ and $B$ independent? {{circle 2: *yes | no | there isn't enough information}}
+++
review: 2026-11-23 The addition rule; 2026-11-25 Independent events

**First, what independence means as a test.** $A$ and $B$ are independent when $P(A \\text{ and } B) = P(A)\\,P(B)$: knowing one happened doesn't change the chance of the other. For example, with two dice, "red is $6$" and "blue is $6$" have $P(\\text{both}) = \\tfrac{1}{36} = \\tfrac16 \\times \\tfrac16$.

**The goal.** Find $P(A \\text{ and } B)$ from the addition rule, then compare it with $P(A)\\,P(B)$.

**Step 1: use the addition rule.** *Why:* it connects "or" with "and". $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$, so $0.7 = 0.5 + 0.4 - P(A \\text{ and } B)$, which gives $P(A \\text{ and } B) = 0.2$.

**Step 2: compare.** $P(A)\\,P(B) = 0.5 \\times 0.4 = 0.2$. They're equal, so $A$ and $B$ are independent.

**Why not "no".** That would need $P(A \\text{ and } B) \\ne 0.2$, but the addition rule forces it to be exactly $0.2$.

**Why not "there isn't enough information".** The three numbers given pin down $P(A \\text{ and } B)$, and that's all the test needs.
:::

:::problem 5
A random variable $X$ takes the values $0$, $1$, $2$ with probabilities $0.2$, $0.5$, $0.3$.

**(a)** $E[X] =$ {{expr 2: 1.1}}

**(b)** $\\operatorname{Var}(X) =$ {{expr 2: 0.49}}

**(c)** $E[3X - 1] =$ {{expr 1: 2.3}}
+++
review: 2026-11-30 Expected value; 2026-11-30 Variance and standard deviation; 2026-11-30 Expected value of a function of X

**First, what $E$ and $\\operatorname{Var}$ measure.** $E[X] = \\sum x\\,p(x)$ is the long-run average of $X$. $\\operatorname{Var}(X) = E[X^2] - (E[X])^2$ measures how spread out $X$ is around that average. For example, a fair coin's number of heads, $0$ or $1$ with probability $\\tfrac12$ each, has $E = 0.5$ and $\\operatorname{Var} = 0.5 - 0.25 = 0.25$.

**The goal.** Compute $E[X]$, then $E[X^2]$ for the variance, then use $E[aX + b] = a\\,E[X] + b$.

**Step 1 (a): the mean.** $0(0.2) + 1(0.5) + 2(0.3) = 0 + 0.5 + 0.6 = 1.1$.

**Step 2 (b): $E[X^2]$.** *Why:* the shortcut formula for variance needs it. Square each value and keep the same probabilities: $0(0.2) + 1(0.5) + 4(0.3) = 0.5 + 1.2 = 1.7$.

**Step 3 (b): the variance.** $1.7 - 1.1^2 = 1.7 - 1.21 = 0.49$. (So the standard deviation is $0.7$.)

**Step 4 (c): use the straight-line rule.** *Why no table is needed:* expected value goes through $aX + b$ directly. $3 \\times 1.1 - 1 = 3.3 - 1 = 2.3$.

**Common mistake.** In (b), using $E[X]^2$ alone, $1.21$, or forgetting to square the values when finding $E[X^2]$.
:::

:::problem 6
**(a)** A player makes each free throw with probability $0.8$, independently. The probability of making exactly $9$ of $10$ free throws is {{expr 2: 10*0.8^9*0.2}} (you can leave it as an expression, like \`10*0.8^9*0.2\`)

**(b)** Emails arrive at an average of $2$ per hour, and the count is Poisson. The probability of at most $1$ email in an hour is {{expr 2: 3e^(-2)}}

**(c)** You roll a die until the first $6$. The number of rolls has which distribution? {{circle 1: binomial | *geometric | Poisson | hypergeometric}}
+++
review: 2026-12-02 The binomial distribution; 2026-12-02 The Poisson distribution; 2026-12-02 The geometric distribution

**First, which distribution fits which situation.** A fixed number of independent tries, counting successes, is binomial: $P(X = k) = \\binom nk p^k (1 - p)^{n - k}$. Counts of events at an average rate $\\lambda$, with no fixed number of tries, are Poisson: $P(X = k) = e^{-\\lambda}\\tfrac{\\lambda^k}{k!}$. Tries until the first success is geometric. For example, the number of heads in $4$ flips is binomial with $n = 4$, $p = \\tfrac12$.

**The goal.** Use the binomial formula for (a), add two Poisson probabilities for (b), and name the distribution in (c).

**Step 1 (a): binomial with $n = 10$, $p = 0.8$, $k = 9$.** *Why $\\binom{10}{9}$:* the one miss can be any of the $10$ shots, so there are $10$ orders, each with probability $0.8^9 \\times 0.2$. So the answer is $10 \\times 0.8^9 \\times 0.2 \\approx 0.268$.

**Step 2 (b): "at most $1$" is $0$ or $1$.** *Why add:* those can't both happen. With $\\lambda = 2$: $P(0) = e^{-2}$ and $P(1) = e^{-2} \\cdot 2$. Together, $3e^{-2} \\approx 0.406$.

**Step 3 (c).** Counting rolls until the first success, with the same chance $\\tfrac16$ each time, is geometric.

**Why not binomial in (c).** Binomial fixes the number of rolls and counts the $6$'s. Here the number of rolls is what's random.

**Why not Poisson in (c).** Poisson counts events at a rate, with no "first success" and no individual tries.

**Why not hypergeometric in (c).** That's for drawing without putting things back. Die rolls don't use anything up.
:::

:::problem 7
$X$ has density $f(x) = c\\,x^2$ for $0 \\le x \\le 3$, and $0$ elsewhere.

**(a)** $c =$ {{expr 1: 1/9}}

**(b)** $P(X \\le 1) =$ {{expr 2: 1/27}}

**(c)** $E[X] =$ {{expr 2: 9/4}}
+++
review: 2026-12-04 Densities: probability is area; 2026-12-04 Expected value and variance

**First, what a density does.** For a continuous $X$, probabilities are areas under the density: $P(a \\le X \\le b) = \\int_a^b f(x)\\,dx$. The total area must be $1$, and $E[X] = \\int x\\,f(x)\\,dx$. For example, $f(x) = 2x$ on $[0, 1]$ has total area $x^2 \\big|_0^1 = 1$.

**The goal.** Pick $c$ to make the total area $1$, then integrate for (b) and (c).

**Step 1 (a): total area $1$.** *Why:* it's required for $f$ to be a density. $\\int_0^3 c\\,x^2\\,dx = c \\cdot \\tfrac{27}{3} = 9c$. Setting $9c = 1$ gives $c = \\tfrac19$.

**Step 2 (b): area from $0$ to $1$.** $\\int_0^1 \\tfrac{x^2}{9}\\,dx = \\tfrac{1}{9} \\cdot \\tfrac13 = \\tfrac{1}{27}$. Small, because the density is low near $0$.

**Step 3 (c): the mean.** $\\int_0^3 x \\cdot \\tfrac{x^2}{9}\\,dx = \\tfrac19 \\cdot \\tfrac{x^4}{4}\\Big|_0^3 = \\tfrac{81}{36} = \\tfrac94 = 2.25$. It's above the middle, $1.5$, because the density is bigger near $3$.
:::

:::problem 8
A light bulb's lifetime is exponential with an average of $500$ hours.

**(a)** The probability it lasts more than $1000$ hours is {{expr 2: e^(-2)}}

**(b)** The bulb has already lasted $300$ hours. The probability it lasts at least $500$ more hours is {{expr 2: e^(-1)}}
+++
review: 2026-12-04 The exponential distribution

**First, the exponential and its lack of memory.** An exponential lifetime with average $\\tfrac1\\lambda$ has $P(X > x) = e^{-\\lambda x}$. It "forgets" how long it has lasted: $P(X > s + t \\mid X > s) = P(X > t)$. For example, with an average of $1000$ hours, $P(X > 500) = e^{-0.5} \\approx 0.607$, for a new bulb and for one that already lasted $1000$ hours.

**The goal.** Find $\\lambda$, use $P(X > x) = e^{-\\lambda x}$ for (a), and use the lack of memory for (b).

**Step 1: the rate.** *Why $\\tfrac{1}{500}$:* the mean is $\\tfrac1\\lambda$, so $\\lambda = \\tfrac{1}{500}$ per hour.

**Step 2 (a).** $P(X > 1000) = e^{-1000/500} = e^{-2} \\approx 0.135$.

**Step 3 (b): no memory.** *Why the $300$ hours don't matter:* for an exponential, a used bulb is as good as new. So $P(X > 800 \\mid X > 300) = P(X > 500) = e^{-500/500} = e^{-1} \\approx 0.368$.

**Check (b) the long way.** $\\dfrac{P(X > 800)}{P(X > 300)} = \\dfrac{e^{-1.6}}{e^{-0.6}} = e^{-1}$ ✓.
:::

:::problem 9
Heights are normal with mean $170$ cm and standard deviation $8$ cm. Use $\\Phi(1) = 0.8413$ and $\\Phi(2) = 0.9772$.

**(a)** The probability that a person is taller than $186$ cm is {{expr 2: 0.0228}}

**(b)** The probability that a person is between $162$ and $178$ cm is {{expr 2: 0.6826}}
+++
review: 2026-12-07 Standardizing: one table for every normal

**First, why standardize.** Every normal turns into the standard normal by $z = \\tfrac{x - \\mu}{\\sigma}$, the number of standard deviations above the mean, and $P(X \\le x) = \\Phi(z)$. For example, with mean $70$ and standard deviation $10$, a score of $85$ has $z = 1.5$.

**The goal.** Turn each height into a z-score, then use $\\Phi$, with $1 - \\Phi$ for "taller than" and symmetry for negative $z$.

**Step 1 (a): the z-score of $186$.** $\\tfrac{186 - 170}{8} = \\tfrac{16}{8} = 2$.

**Step 2 (a): "taller than".** *Why $1 - \\Phi$:* $\\Phi$ gives "at most". So $P(H > 186) = 1 - \\Phi(2) = 1 - 0.9772 = 0.0228$.

**Step 3 (b): both z-scores.** $\\tfrac{162 - 170}{8} = -1$ and $\\tfrac{178 - 170}{8} = 1$.

**Step 4 (b): subtract.** *Why $\\Phi(-1) = 1 - \\Phi(1)$:* the bell is symmetric around $0$. So $\\Phi(1) - \\Phi(-1) = 0.8413 - 0.1587 = 0.6826$.
:::

:::problem 10
$X$ and $Y$ each take the values $0$ and $1$, with joint probabilities $p(0, 0) = 0.1$, $p(0, 1) = 0.3$, $p(1, 0) = 0.2$, $p(1, 1) = 0.4$.

**(a)** $P(X = 1) =$ {{expr 1: 0.6}}

**(b)** $P(Y = 1 \\mid X = 1) =$ {{expr 2: 2/3}}

**(c)** Are $X$ and $Y$ independent? {{circle 1: yes | *no}}
+++
review: 2026-12-09 Joint distributions of discrete random variables; 2026-12-09 Conditional distributions; 2026-12-09 Independent random variables

**First, reading a joint table.** Each $p(x, y)$ is the chance of that pair. Adding over $y$ gives the probability for $X$ alone, and a conditional probability divides a cell by the probability of what you know. For example, in two coin flips with $X$ the first flip and $Y$ the total, $p(1, 2) = \\tfrac14$ and $P(X = 1) = \\tfrac12$, so $P(Y = 2 \\mid X = 1) = \\tfrac12$.

**The goal.** Add the $X = 1$ cells for (a), divide for (b), and test the product rule for (c).

**Step 1 (a).** $P(X = 1) = p(1, 0) + p(1, 1) = 0.2 + 0.4 = 0.6$.

**Step 2 (b): divide.** *Why by $0.6$:* knowing $X = 1$ leaves only the two $X = 1$ cells, which together have probability $0.6$. So $\\tfrac{p(1, 1)}{P(X = 1)} = \\tfrac{0.4}{0.6} = \\tfrac23$.

**Step 3 (c): test one cell.** $P(Y = 1) = 0.3 + 0.4 = 0.7$, so $P(X = 1)\\,P(Y = 1) = 0.6 \\times 0.7 = 0.42$, but $p(1, 1) = 0.4$. They differ, so $X$ and $Y$ are dependent.

**Why not "yes".** Independence needs the product to match in **every** cell, and it already fails at $(1, 1)$. Also, $P(Y = 1 \\mid X = 1) = \\tfrac23 \\approx 0.667$ differs from $P(Y = 1) = 0.7$: knowing $X$ changes the chances for $Y$.
:::

:::problem 11
Same $X$ and $Y$ as in problem 10.

**(a)** $\\operatorname{Cov}(X, Y) =$ {{expr 2: -0.02}}

**(b)** $\\operatorname{Var}(X + Y) =$ {{expr 2: 0.41}}
+++
review: 2026-12-11 Covariance; 2026-12-11 The variance of a sum, and correlation

**First, covariance and the variance of a sum.** $\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]$ is positive when $X$ and $Y$ tend to be high together and negative when one tends to be high while the other is low. It adds a term to the variance of a sum: $\\operatorname{Var}(X + Y) = \\operatorname{Var}(X) + \\operatorname{Var}(Y) + 2\\operatorname{Cov}(X, Y)$. For example, if $\\operatorname{Var}(X) = 4$, $\\operatorname{Var}(Y) = 9$, and $\\operatorname{Cov} = -3$, then $\\operatorname{Var}(X + Y) = 7$.

**The goal.** Find $E[XY]$, $E[X]$, and $E[Y]$ for the covariance, then each variance, then combine.

**Step 1: $E[XY]$.** *Why only one cell:* $XY$ is $0$ unless both are $1$. So $E[XY] = 1 \\times p(1, 1) = 0.4$.

**Step 2: the means.** A variable that is $0$ or $1$ has mean equal to its chance of being $1$: $E[X] = 0.6$ and $E[Y] = 0.7$.

**Step 3 (a): covariance.** $0.4 - 0.6 \\times 0.7 = 0.4 - 0.42 = -0.02$. Slightly negative.

**Step 4: the variances.** For a $0$-or-$1$ variable with chance $p$ of $1$, $E[X^2] = p$, so $\\operatorname{Var} = p - p^2 = p(1 - p)$. $\\operatorname{Var}(X) = 0.6 \\times 0.4 = 0.24$ and $\\operatorname{Var}(Y) = 0.7 \\times 0.3 = 0.21$.

**Step 5 (b): combine.** $0.24 + 0.21 + 2(-0.02) = 0.45 - 0.04 = 0.41$.

**Common mistake.** Leaving out $2\\operatorname{Cov}$ and answering $0.45$. That's only right for independent variables, and problem 10 showed these aren't.
:::

:::problem 12
**(a)** A fair die is rolled $100$ times. The standard deviation of the average roll is {{expr 2: sqrt(35/12)/10}} (one roll has variance $\\tfrac{35}{12}$)

**(b)** $100$ independent random variables each have mean $2$ and standard deviation $3$ (they are not normal). Using the central limit theorem and $\\Phi(1) = 0.8413$, the probability that their sum is more than $230$ is about {{expr 2: 0.1587}}

**(c)** For any random variable, Chebyshev's inequality says the probability of being at least $2$ standard deviations from the mean is at most {{expr 1: 1/4}}
+++
review: 2026-12-14 The central limit theorem; 2026-12-14 Markov's and Chebyshev's inequalities

**First, how sums and averages spread.** For $n$ independent pieces each with mean $\\mu$ and standard deviation $\\sigma$, the sum has mean $n\\mu$ and standard deviation $\\sigma\\sqrt n$, and the average has standard deviation $\\tfrac{\\sigma}{\\sqrt n}$. The central limit theorem says the sum is approximately normal for large $n$, whatever each piece looks like. For example, $36$ measurements with $\\sigma = 12$ have an average with standard deviation $\\tfrac{12}{6} = 2$.

**The goal.** Use $\\tfrac{\\sigma}{\\sqrt n}$ for (a), standardize the sum for (b), and plug $k = 2\\sigma$ into Chebyshev for (c).

**Step 1 (a).** One roll has $\\sigma = \\sqrt{35/12} \\approx 1.708$. *Why divide by $\\sqrt{100} = 10$:* the average's variance is $\\tfrac{\\sigma^2}{n}$, so its standard deviation is $\\tfrac{\\sigma}{\\sqrt n}$. That's $\\tfrac{\\sqrt{35/12}}{10} \\approx 0.171$.

**Step 2 (b): the sum's mean and standard deviation.** Mean $100 \\times 2 = 200$. Standard deviation $3\\sqrt{100} = 30$. *Why not $3 \\times 100$:* variances add ($100 \\times 9 = 900$), not standard deviations, and $\\sqrt{900} = 30$.

**Step 3 (b): standardize.** $z = \\tfrac{230 - 200}{30} = 1$, so $P(\\text{sum} > 230) \\approx 1 - \\Phi(1) = 1 - 0.8413 = 0.1587$.

**Step 4 (c): Chebyshev.** $P(|X - \\mu| \\ge k) \\le \\tfrac{\\sigma^2}{k^2}$ with $k = 2\\sigma$ gives $\\tfrac{\\sigma^2}{4\\sigma^2} = \\tfrac14$.
:::
`;export{e as default};