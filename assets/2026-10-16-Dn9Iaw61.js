var e=`---
title: Intro to multiple integrals
date: 2026-10-16
stewart: 15.1
source: OpenStax Calculus Volume 3, §5.1 Double Integrals over Rectangular Regions
---

:::recap Last time
That finished line integrals. Chapter 15 starts from Calc I's definite integral: $\\int_a^b f(x)\\,dx$ is the limit of Riemann sums $\\sum f(x_i^*)\\,\\Delta x$, which is the area under the graph of $f$ (counted negative where $f < 0$).
:::

:::check
Warm-up from Calc I: estimate $\\int_0^2 x^2\\,dx$ with two rectangles of width $1$, using each rectangle's right endpoint.
answer: 5
???
The right endpoints are $1$ and $2$, so the sum is $f(1) \\cdot 1 + f(2) \\cdot 1 = 1 + 4 = 5$. The exact value is $\\tfrac83 \\approx 2.67$. Right endpoints overestimate here because $x^2$ is increasing, so each rectangle's right edge is its highest point.
:::

:::question Today
How do you add up a function of two variables over a region of the plane, such as the volume under a surface? And how do you compute that with the one-variable integrals you already know?
:::

:::idea Volume as a sum of boxes
Let $R = [a, b] \\times [c, d]$ be the rectangle $a \\le x \\le b$, $c \\le y \\le d$, and suppose $f(x, y) \\ge 0$ on it. Take the solid that lies above $R$ and below the graph $z = f(x, y)$. To find its volume:

1. **Cut $R$ into small rectangles.** Split $[a, b]$ into $m$ pieces of width $\\Delta x = \\frac{b - a}{m}$ and $[c, d]$ into $n$ pieces of height $\\Delta y = \\frac{d - c}{n}$. That cuts $R$ into $mn$ small rectangles, each with area $\\Delta A = \\Delta x\\, \\Delta y$.
2. **Stand a box on each one.** Pick a sample point $(x_{ij}^*, y_{ij}^*)$ in each small rectangle, and give the box over it the height $f(x_{ij}^*, y_{ij}^*)$. Its volume is height times base area: $f(x_{ij}^*, y_{ij}^*)\\, \\Delta A$.
3. **Add up the boxes.** This is a **double Riemann sum**:
$$V \\approx \\sum_{i=1}^{m} \\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\\, \\Delta A.$$

**Why the boxes approach the true volume.** Over one small rectangle, the graph of $f$ and the box's flat top differ in height by at most (largest value of $f$ there) minus (smallest value of $f$ there). For a continuous $f$, that difference shrinks to $0$ on every small rectangle as they shrink. So the total error is at most (the largest such difference) $\\times$ (area of $R$), which goes to $0$. The limit is the [[double integral]]:
$$\\iint_R f(x, y)\\, dA = \\lim_{m, n \\to \\infty} \\sum_{i=1}^{m} \\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\\, \\Delta A.$$
If $f$ is negative somewhere, the boxes there lie below the $xy$-plane and count as negative, so the double integral is a *signed* volume, just like Calc I's signed area.
+++
**A sum with numbers.** Take $f = x + y^2$ on $R = [0, 2] \\times [0, 2]$, with $m = n = 2$: four unit squares, so $\\Delta A = 1$.
- **Midpoints** $(0.5, 0.5)$, $(1.5, 0.5)$, $(0.5, 1.5)$, $(1.5, 1.5)$ give heights $0.75$, $1.75$, $2.75$, $3.75$, so the sum is $9$.
- **Upper-right corners** $(1, 1)$, $(2, 1)$, $(1, 2)$, $(2, 2)$ give heights $2$, $3$, $5$, $6$, so the sum is $16$.

The exact value, computed later today, is $\\tfrac{28}{3} \\approx 9.33$. The corner sum is far too big because $f$ increases with both $x$ and $y$, so each square's upper-right corner is its highest point. Midpoints do much better, and they improve as the squares shrink: with $100 \\times 100$ squares, the midpoint sum is about $9.3332$.
:::

:::figure riemann-grid
$R = [0, 2] \\times [0, 2]$ cut into four unit squares. Each dot is a square's midpoint, labeled with the height $f = x + y^2$ there. Each box has base area $1$, so the midpoint sum is $0.75 + 1.75 + 2.75 + 3.75 = 9$.
:::

:::check
Estimate $\\displaystyle\\iint_R (x^2 + y)\\, dA$ over $R = [0, 4] \\times [0, 2]$ with $m = 2$, $n = 1$, using midpoints.
answer: 48
???
$m = 2$ splits $[0, 4]$ into two pieces of width $2$, and $n = 1$ keeps $[0, 2]$ whole, so there are two $2 \\times 2$ squares with $\\Delta A = 4$. Their midpoints are $(1, 1)$ and $(3, 1)$, with heights $1 + 1 = 2$ and $9 + 1 = 10$. The sum is $(2 + 10) \\cdot 4 = 48$. (The exact value is $\\tfrac{152}{3} \\approx 50.7$.)
:::

:::idea What a double integral measures
Each meaning comes from reading the boxes differently:
- **$f = 1$: the area of $R$.** Every box has height $1$, so each box's volume equals its base area, and they add up to the area of $R$.
- **$f \\ge 0$: the volume under the graph** of $f$ above $R$.
- **$f$ = density** (mass per unit area): each small piece of a thin plate has mass about $f\\, \\Delta A$, so the double integral is the plate's **mass**.
- **Average value:** $\\displaystyle f_{\\text{avg}} = \\frac{1}{\\text{Area}(R)} \\iint_R f\\, dA$. Why: the average is the constant height that gives the same volume. A box of height $f_{\\text{avg}}$ over $R$ has volume $f_{\\text{avg}} \\cdot \\text{Area}(R)$, and setting that equal to $\\iint_R f\\, dA$ gives the formula. It's the same idea as Calc I's $\\frac{1}{b - a}\\int_a^b f\\, dx$.

**Properties, and why each holds.** Each one is true for every Riemann sum, so it's true for the limit.
- **Sums and constants:** $\\iint_R (f + g)\\, dA = \\iint_R f\\, dA + \\iint_R g\\, dA$ and $\\iint_R cf\\, dA = c\\iint_R f\\, dA$. Each box's height splits the same way, $f + g$ or $c$ times $f$.
- **Splitting the region:** if $R$ is cut into two pieces $S$ and $T$, then $\\iint_R f\\, dA = \\iint_S f\\, dA + \\iint_T f\\, dA$. The boxes split into those over $S$ and those over $T$.
- **Bounds:** if $m \\le f \\le M$ on $R$, then $m \\cdot \\text{Area}(R) \\le \\iint_R f\\, dA \\le M \\cdot \\text{Area}(R)$. Every box is at least as tall as $m$ and at most as tall as $M$.
+++
**Checking an answer with the bounds.** For $f = x + y^2$ on $[0, 2] \\times [0, 2]$ (area $4$), $f$ runs from $0$ at $(0, 0)$ to $6$ at $(2, 2)$. So the integral must be between $0 \\cdot 4 = 0$ and $6 \\cdot 4 = 24$. The exact value $\\tfrac{28}{3}$ is. Its average value is $\\tfrac{28/3}{4} = \\tfrac73 \\approx 2.33$, between $0$ and $6$ as it must be.
:::

:::check
On $R = [0, 2] \\times [0, 1]$, the function $f$ satisfies $1 \\le f \\le 5$ everywhere. Which of these could be $\\displaystyle\\iint_R f\\, dA$?
- [x] $7$
- [ ] $1$
  why: The area of $R$ is $2$, so the integral is at least $1 \\cdot 2 = 2$.
- [ ] $12$
  why: The integral is at most $5 \\cdot 2 = 10$.
- [ ] $0.5$
  why: Since $f \\ge 1$ everywhere, the integral is at least $1 \\cdot 2 = 2$.
???
The area of $R$ is $2 \\cdot 1 = 2$, so the integral is between $1 \\cdot 2 = 2$ and $5 \\cdot 2 = 10$. Only $7$ fits.
:::

:::idea Computing it: iterated integrals
On a rectangle, you can compute a double integral with two ordinary integrals, one inside the other:
$$\\iint_R f\\, dA = \\int_a^b \\left( \\int_c^d f(x, y)\\, dy \\right) dx = \\int_c^d \\left( \\int_a^b f(x, y)\\, dx \\right) dy.$$
This is an [[iterated integral]]. The inside integral treats the other variable as a constant, the same way a partial derivative does.

**Why: add up the boxes one column at a time.** The double Riemann sum adds the same boxes no matter how you group them. Group them into columns, one column for each $x_i$:
$$\\sum_{i=1}^{m} \\left( \\sum_{j=1}^{n} f(x_i, y_j)\\, \\Delta y \\right) \\Delta x.$$
The inside sum adds the boxes in one column, along $y$ with $x = x_i$ held fixed. As $\\Delta y \\to 0$, it becomes $\\int_c^d f(x_i, y)\\, dy$, a one-variable integral. Then the outside sum, over the columns, becomes an integral in $x$. Grouping the boxes into rows instead gives the other order. Since both groupings add exactly the same boxes, both orders give the same answer.

**What the inside integral means.** Hold $x$ fixed. The plane at that $x$ cuts the solid in a slice: the region under the curve $z = f(x, y)$ for $c \\le y \\le d$. The inside integral
$$A(x) = \\int_c^d f(x, y)\\, dy$$
is that slice's area. A thin slab of thickness $\\Delta x$ has volume about $A(x)\\, \\Delta x$, so the volume is $\\int_a^b A(x)\\, dx$, Calc I's volume by slicing.

**Example.** $f = x + y^2$ on $[0, 2] \\times [0, 2]$.
- $y$ first, holding $x$ constant: $\\displaystyle\\int_0^2 (x + y^2)\\, dy = \\Big[xy + \\tfrac{y^3}{3}\\Big]_{y=0}^{y=2} = 2x + \\tfrac83$. That's $A(x)$. Then $\\displaystyle\\int_0^2 \\Big(2x + \\tfrac83\\Big)\\, dx = \\Big[x^2 + \\tfrac{8x}{3}\\Big]_0^2 = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$.
- $x$ first, holding $y$ constant: $\\displaystyle\\int_0^2 (x + y^2)\\, dx = \\Big[\\tfrac{x^2}{2} + xy^2\\Big]_{x=0}^{x=2} = 2 + 2y^2$. Then $\\displaystyle\\int_0^2 (2 + 2y^2)\\, dy = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$. ✓ Same answer.
+++
**The slice in the figure below, with numbers.** At $x = 1$, the slice is the region under $z = 1 + y^2$ for $0 \\le y \\le 2$, with area $A(1) = \\int_0^2 (1 + y^2)\\, dy = 2 + \\tfrac83 = \\tfrac{14}{3}$. That matches $A(x) = 2x + \\tfrac83$ at $x = 1$. The slice at $x = 2$ is taller everywhere by exactly $1$, since $f(2, y) - f(1, y) = 1$. Over a width of $2$, that adds $1 \\cdot 2 = 2$ to the area: $\\tfrac{14}{3} + 2 = \\tfrac{20}{3}$, again matching $2x + \\tfrac83$.

**Limits go with their variable.** In $\\int_a^b \\int_c^d f\\, dy\\, dx$, the inside limits $c, d$ belong to $dy$ (the innermost), and the outside limits $a, b$ belong to $dx$. Reading the differentials from the inside out tells you which limits go where.
:::

:::figure fubini-slice
The slice of the solid under $f = x + y^2$ at $x = 1$. Holding $x = 1$ leaves the curve $z = 1 + y^2$ over $0 \\le y \\le 2$, and the shaded region under it has area $A(1) = \\tfrac{14}{3}$. The inside integral $\\int_0^2 f(x, y)\\, dy$ computes this area for each $x$.
:::

:::theorem Fubini's Theorem
If $f$ is continuous on the rectangle $R = [a, b] \\times [c, d]$, then
$$\\iint_R f\\, dA = \\int_a^b \\int_c^d f(x, y)\\, dy\\, dx = \\int_c^d \\int_a^b f(x, y)\\, dx\\, dy.$$

**Why:** the double Riemann sum adds the same boxes whether you group them into columns (fixed $x$) or rows (fixed $y$). The inside sum of a column becomes $\\int_c^d f(x, y)\\, dy$, and the inside sum of a row becomes $\\int_a^b f(x, y)\\, dx$, so both iterated integrals equal the limit of the same sums.
:::

:::check
Compute $\\displaystyle\\int_0^1 \\int_0^2 6xy^2\\, dy\\, dx$.
answer: 8
???
Inside, $x$ is a constant: $\\int_0^2 6xy^2\\, dy = 6x \\Big[\\tfrac{y^3}{3}\\Big]_0^2 = 6x \\cdot \\tfrac83 = 16x$. Then $\\int_0^1 16x\\, dx = 8$.
:::

:::idea Choosing the order
Both orders give the same answer, but one can take much less work. Look at the inside integral each way and pick the one you can do quickly.

**Example.** $\\displaystyle\\iint_R y\\, e^{xy}\\, dA$ over $R = [0, 1] \\times [0, \\ln 2]$.
- **$x$ first:** $\\displaystyle\\int_0^1 y\\, e^{xy}\\, dx = \\Big[e^{xy}\\Big]_{x=0}^{x=1} = e^{y} - 1$, because $\\frac{\\partial}{\\partial x} e^{xy} = y\\, e^{xy}$. Then $\\displaystyle\\int_0^{\\ln 2} (e^y - 1)\\, dy = (2 - 1) - \\ln 2 = 1 - \\ln 2$.
- **$y$ first** needs integration by parts on $\\int_0^{\\ln 2} y\\, e^{xy}\\, dy$. What comes out simplifies to $\\dfrac{d}{dx}\\Big(\\dfrac{2^x - 1}{x}\\Big)$, which you'd have to notice, and then evaluating $\\dfrac{2^x - 1}{x}$ at $x = 0$ takes a limit. Same answer, much more work.

**Shortcut for products.** If $f(x, y) = g(x)\\, h(y)$ on a rectangle, then
$$\\iint_R g(x)\\, h(y)\\, dA = \\left(\\int_a^b g(x)\\, dx\\right) \\left(\\int_c^d h(y)\\, dy\\right).$$
Why: in the inside integral $\\int_c^d g(x)\\, h(y)\\, dy$, the factor $g(x)$ is a constant, so it comes out: $g(x) \\int_c^d h(y)\\, dy$. That leftover integral is just a number, so it comes out of the outside integral too.
+++
**The product shortcut with numbers.** Over $[0, 1] \\times [0, 2]$: $\\iint x^2 y\\, dA = \\Big(\\int_0^1 x^2\\, dx\\Big)\\Big(\\int_0^2 y\\, dy\\Big) = \\tfrac13 \\cdot 2 = \\tfrac23$. Doing it the long way, $\\int_0^1 \\int_0^2 x^2 y\\, dy\\, dx = \\int_0^1 2x^2\\, dx = \\tfrac23$. ✓

**Only on rectangles.** The shortcut needs constant limits on both integrals. On the curved regions of the next lecture, the inside limits depend on the outside variable, and it no longer applies.
:::

:::check
For $\\displaystyle\\iint_R x\\cos(xy)\\, dA$ over $R = [0, \\tfrac\\pi2] \\times [0, 1]$, which inside integral should you do?
- [x] $dy$ first
- [ ] $dx$ first
  why: Inside, $\\int x\\cos(xy)\\, dx$ needs integration by parts, because the $x$ in front isn't the derivative of $xy$ with respect to $x$.
- [ ] It doesn't matter
  why: Both orders give the same value (Fubini), but one takes far more work, so it does matter for you.
???
$dy$ first: $\\int_0^1 x\\cos(xy)\\, dy = \\Big[\\sin(xy)\\Big]_{y=0}^{y=1} = \\sin x$, because $\\frac{\\partial}{\\partial y}\\sin(xy) = x\\cos(xy)$. Then $\\int_0^{\\pi/2} \\sin x\\, dx = 1$.
:::

:::summary Summary
- $\\displaystyle\\iint_R f\\, dA$ is the limit of double Riemann sums $\\sum \\sum f(x_{ij}^*, y_{ij}^*)\\, \\Delta A$: the volume under the graph when $f \\ge 0$, a signed volume otherwise.
- $f = 1$ gives the area. The average value is $\\dfrac{1}{\\text{Area}(R)} \\iint_R f\\, dA$. If $m \\le f \\le M$, the integral is between $m \\cdot \\text{Area}$ and $M \\cdot \\text{Area}$.
- **Fubini:** on a rectangle, $\\displaystyle\\iint_R f\\, dA = \\int_a^b \\int_c^d f\\, dy\\, dx = \\int_c^d \\int_a^b f\\, dx\\, dy$. The inside integral holds the other variable constant.
- Pick the order whose inside integral is easy. Products $g(x)h(y)$ split into two integrals.

**Common mistakes:**
- Putting the $x$-limits on the $dy$ integral. Limits go with their own variable, read from the inside out.
- Forgetting $\\Delta A$ in a Riemann sum, or using only $\\Delta x$.
- Treating the held-constant variable as if it changes in the inside integral.
:::
`;export{e as default};