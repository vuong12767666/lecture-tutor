var e=`---
title: Counting, permutations, and combinations
date: 2026-11-20
source: Grinstead and Snell, Introduction to Probability, §3.1 Permutations and §3.2 Combinations
---

:::recap Before you start
- Multiplication and division of whole numbers. That's all; this lecture starts from the beginning.
- Why it matters: when every outcome is equally likely, a probability is $\\dfrac{\\text{number of outcomes you want}}{\\text{number of all outcomes}}$. So probability often comes down to counting, and counting by listing gets impossible fast.
:::

:::check
Warm-up: a restaurant has $3$ appetizers and $4$ main courses. How many different meals of one appetizer and one main course are there?
answer: 12
???
Each of the $3$ appetizers can go with any of the $4$ mains: $3 \\times 4 = 12$. For example, with appetizers A, B, C and mains $1$ to $4$, the meals are A1, A2, A3, A4, then B1 to B4, then C1 to C4.
:::

:::question Today
How many license plates, passwords, poker hands, or committees are there? Listing them is hopeless, but four ideas count almost anything: multiply the choices; arrange things in order; choose without caring about order; and split things into groups.
:::

:::idea The basic counting principle
If a task is done in $r$ steps, with $n_1$ choices for the first step, $n_2$ for the second (whatever happened in the first), and so on, the number of ways to do the whole task is

$$n_1 \\times n_2 \\times \\cdots \\times n_r.$$

**Example.** A license plate is $3$ letters followed by $3$ digits, and repeats are allowed. There are $26 \\times 26 \\times 26 \\times 10 \\times 10 \\times 10 = 17{,}576{,}000$ plates.
>>> Why we multiply, with a small list
You have $2$ shirts (red, blue) and $3$ pants (jeans, khakis, shorts).

1. **List every outfit.** *Why:* listing a small case shows the pattern. Red with jeans, red with khakis, red with shorts; blue with jeans, blue with khakis, blue with shorts. That's $6$.
2. **See the pattern.** *Why it's a product:* each shirt starts its own group of outfits, and every group has the same size, $3$ (one per pair of pants). Two groups of $3$ is $2 \\times 3 = 6$.
3. **Add a third step.** With $2$ pairs of shoes, each of the $6$ outfits splits into $2$, giving $6 \\times 2 = 12$.
4. **When choices depend on earlier ones.** The principle still works as long as the **number** of choices doesn't. For example, choosing a president and then a different vice president from $10$ people: $10$ choices, then $9$ (anyone except the president), so $10 \\times 9 = 90$. Which $9$ people are left depends on the first choice, but there are always $9$.
<<<
:::

:::check
A PIN has $4$ digits, each from $0$ to $9$, and digits can repeat. How many PINs are there?
answer: 10000
???
$10$ choices for each of the $4$ digits: $10 \\times 10 \\times 10 \\times 10 = 10{,}000$, the numbers $0000$ through $9999$.
:::

:::idea Permutations: arranging in order
A [[permutation|permutation]] is an arrangement in order. The number of ways to arrange $n$ different things in a row is

$$n! = n \\times (n - 1) \\times \\cdots \\times 2 \\times 1, \\qquad\\text{read "}n\\text{ factorial", with } 0! = 1.$$

Arranging only $k$ of the $n$ in order (first, second, ..., $k$th) gives $n \\times (n - 1) \\times \\cdots \\times (n - k + 1) = \\dfrac{n!}{(n - k)!}$.

If some things are identical, divide by the ways to rearrange the identical ones among themselves. With $n$ letters where one letter repeats $a$ times and another $b$ times, there are $\\dfrac{n!}{a!\\,b!}$ different arrangements.

**Examples.** $5$ books on a shelf: $5! = 120$ orders. First, second, and third place among $8$ runners: $8 \\times 7 \\times 6 = 336$. The letters of BOOK: $\\dfrac{4!}{2!} = 12$ different words.
>>> Why BOOK gives $\\tfrac{4!}{2!} = 12$, step by step
1. **Pretend the O's are different.** *Why:* then all $4$ letters are different and we already know how to count: write them B, O₁, O₂, K, with $4! = 24$ arrangements.
2. **See the double counting.** Each real word appears twice among those $24$. For example, BO₁O₂K and BO₂O₁K both read BOOK; KO₁BO₂ and KO₂BO₁ both read KOBO. Swapping the two O's never changes the word.
3. **Divide.** *Why by $2!$:* the two O's can be ordered in $2! = 2$ ways, and every word was counted once for each. So there are $\\tfrac{24}{2} = 12$ words.
4. **Check by listing.** Place the two O's first: they take $2$ of the $4$ spots, in $6$ ways (spots $1\\,2$, $1\\,3$, $1\\,4$, $2\\,3$, $2\\,4$, $3\\,4$). Then B and K fill the other $2$ spots in $2$ orders. That's $6 \\times 2 = 12$ ✓.
<<<
:::

:::check
How many different arrangements are there of the letters in LEVEL?
answer: 30
???
$5$ letters, with L twice and E twice: $\\dfrac{5!}{2!\\,2!} = \\dfrac{120}{4} = 30$.
:::

:::idea Combinations: choosing without order
A [[combination|combination]] is a choice where order doesn't matter, like a committee or a hand of cards. The number of ways to choose $k$ things from $n$ is

$$\\binom{n}{k} = \\frac{n!}{k!\\,(n - k)!},$$

read "$n$ choose $k$". Choosing which $k$ to take is the same as choosing which $n - k$ to leave, so $\\binom{n}{k} = \\binom{n}{n - k}$.

**Example.** A committee of $3$ from $8$ people: $\\binom83 = \\dfrac{8!}{3!\\,5!} = 56$. The probability that a random committee of $3$ from $5$ women and $3$ men is all women is $\\dfrac{\\binom53}{\\binom83} = \\dfrac{10}{56} = \\dfrac{5}{28} \\approx 0.18$.
>>> From $336$ ordered to $56$ unordered, step by step
1. **Count with order first.** *Why:* we know how to count ordered choices. Picking a first, second, and third person from $8$: $8 \\times 7 \\times 6 = 336$.
2. **See how many times each committee was counted.** The committee $\\{$Ana, Ben, Cy$\\}$ shows up as ABC, ACB, BAC, BCA, CAB, CBA: $3! = 6$ times, once for each order of the same $3$ people.
3. **Divide.** $\\tfrac{336}{6} = 56$ committees. That's the formula: $\\tfrac{8!}{5!}$ is the $336$, and the $3!$ underneath removes the orders.
4. **The probability.** Every committee is equally likely, so it's (all-women committees) over (all committees). An all-women committee is $3$ of the $5$ women: $\\binom53 = \\tfrac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$. So $\\tfrac{10}{56} = \\tfrac{5}{28} \\approx 0.179$.
<<<

**The binomial theorem.** These numbers are also the coefficients when you expand a power: $(x + y)^n = \\sum_{k=0}^{n} \\binom nk x^k y^{n - k}$. For example, $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$, and $\\binom30, \\binom31, \\binom32, \\binom33$ are $1, 3, 3, 1$. Each $x^2y$ term comes from choosing which $2$ of the $3$ factors give an $x$.
:::

:::check
$6$ people meet, and each pair shakes hands once. How many handshakes are there?
answer: 15
???
A handshake is a pair of people, with no order: $\\binom62 = \\dfrac{6 \\times 5}{2} = 15$.
:::

:::idea Splitting into groups: multinomial coefficients
The number of ways to split $n$ different things into groups of sizes $n_1, n_2, \\ldots, n_r$ (with $n_1 + \\cdots + n_r = n$, and the groups labeled) is the [[multinomial-coefficient|multinomial coefficient]]

$$\\binom{n}{n_1, n_2, \\ldots, n_r} = \\frac{n!}{n_1!\\,n_2! \\cdots n_r!}.$$

It's the same count as arranging letters with repeats: deciding which positions get each letter is splitting the positions into groups.

**Example.** $10$ students split into team A of $5$, team B of $3$, and team C of $2$: $\\dfrac{10!}{5!\\,3!\\,2!} = 2520$ ways.
>>> Why $\\tfrac{10!}{5!\\,3!\\,2!}$, by choosing one team at a time
1. **Choose team A.** *Why one team at a time:* each step is a plain combination, which we can count. $5$ of the $10$ students: $\\binom{10}{5} = 252$.
2. **Choose team B from who's left.** $3$ of the remaining $5$: $\\binom53 = 10$.
3. **Team C is whoever remains.** $\\binom22 = 1$ way.
4. **Multiply.** *Why multiply:* it's a task in steps, so the basic counting principle applies. $252 \\times 10 \\times 1 = 2520$.
5. **Match the formula.** $\\binom{10}{5}\\binom{5}{3} = \\dfrac{10!}{5!\\,5!} \\cdot \\dfrac{5!}{3!\\,2!}$, and the $5!$ on top of the second cancels one $5!$ underneath the first, leaving $\\dfrac{10!}{5!\\,3!\\,2!}$ ✓.
<<<
:::

:::check
In how many ways can $6$ people be split into three labeled groups (group $1$, group $2$, group $3$) of $2$ each?
answer: 90
???
$\\dfrac{6!}{2!\\,2!\\,2!} = \\dfrac{720}{8} = 90$. Step by step: $\\binom62 = 15$ for group $1$, then $\\binom42 = 6$ for group $2$, and the last $2$ go to group $3$: $15 \\times 6 = 90$.
:::

:::idea Identical things into boxes: stars and bars
To put $n$ **identical** things into $r$ different boxes (for example, $n$ identical candies to $r$ children), count arrangements of $n$ stars and $r - 1$ bars, where the bars separate the boxes:

$$\\binom{n + r - 1}{r - 1} \\text{ ways}, \\qquad\\text{or } \\binom{n - 1}{r - 1} \\text{ if every box must get at least one.}$$

This also counts whole-number solutions of $x_1 + x_2 + \\cdots + x_r = n$, with each $x_i \\ge 0$ (or each $x_i \\ge 1$).

**Example.** $10$ identical candies to $3$ children: $\\binom{12}{2} = 66$ ways. If each child gets at least one: $\\binom92 = 36$ ways.
>>> Stars and bars, with $4$ candies and $3$ children
1. **Turn a sharing into a row of symbols.** *Why:* rows of symbols are easy to count. Write a star for each candy and a bar between children. For example, $\\star\\star \\mid \\star \\mid \\star$ means child $1$ gets $2$, child $2$ gets $1$, child $3$ gets $1$. And $\\mid \\star\\star\\star \\mid \\star$ means $0$, $3$, $1$.
2. **Check it's a perfect match.** Every sharing gives exactly one row, and every row of $4$ stars and $2$ bars gives exactly one sharing. So counting sharings is counting rows.
3. **Count the rows.** A row has $4 + 2 = 6$ spots, and we choose which $2$ of them are bars: $\\binom62 = 15$.
4. **Each child at least one.** Give each child one candy first, leaving $4 - 3 = 1$ candy to share freely among $3$ children: $\\binom{1 + 2}{2} = \\binom32 = 3$ ways (the extra candy goes to child $1$, $2$, or $3$). The formula $\\binom{n - 1}{r - 1} = \\binom32 = 3$ agrees ✓.
<<<
:::

:::check
How many solutions in whole numbers $x_i \\ge 0$ does $x_1 + x_2 + x_3 + x_4 = 5$ have?
answer: 56
???
$5$ stars and $3$ bars: $\\binom{5 + 3}{3} = \\binom83 = 56$.
:::

:::summary Summary
- **Basic counting principle:** a task in steps with $n_1, n_2, \\ldots$ choices can be done in $n_1 \\times n_2 \\times \\cdots$ ways.
- **Permutations:** $n!$ orders of $n$ things; $\\dfrac{n!}{(n - k)!}$ ordered choices of $k$; divide by $a!\\,b!\\cdots$ for identical items.
- **Combinations:** $\\binom nk = \\dfrac{n!}{k!\\,(n - k)!}$ choices of $k$ when order doesn't matter.
- **Multinomial:** $\\dfrac{n!}{n_1! \\cdots n_r!}$ ways to split $n$ things into labeled groups.
- **Stars and bars:** $\\binom{n + r - 1}{r - 1}$ ways to put $n$ identical things into $r$ boxes.

**Which one?** Does order matter? Yes: permutation. No: combination. Are the things identical, going into boxes? Stars and bars. Several groups at once? Multinomial.

**Common mistakes:**
- Using a permutation when order doesn't matter (a committee isn't a ranking), which overcounts by $k!$.
- Forgetting to divide for identical letters.
- Using $\\binom{n}{r}$ instead of $\\binom{n + r - 1}{r - 1}$ for identical things into boxes.
:::
`;export{e as default};