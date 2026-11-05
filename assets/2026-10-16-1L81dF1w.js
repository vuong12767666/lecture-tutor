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
>>> Steps 1 to 3 with actual numbers
Take $f = x + y^2$ on $R = [0, 2] \\times [0, 2]$, with $m = n = 2$.

**Step 1.** $\\Delta x = \\tfrac{2 - 0}{2} = 1$ and $\\Delta y = \\tfrac{2 - 0}{2} = 1$, so $R$ is cut into $2 \\cdot 2 = 4$ unit squares, each with $\\Delta A = 1 \\cdot 1 = 1$: $[0,1] \\times [0,1]$, $[1,2] \\times [0,1]$, $[0,1] \\times [1,2]$, and $[1,2] \\times [1,2]$.

**Step 2, with midpoints as sample points.** The midpoints are $(0.5, 0.5)$, $(1.5, 0.5)$, $(0.5, 1.5)$, $(1.5, 1.5)$. Each height is $f = x + y^2$ there:
- $0.5 + 0.25 = 0.75$
- $1.5 + 0.25 = 1.75$
- $0.5 + 2.25 = 2.75$
- $1.5 + 2.25 = 3.75$

Each box's volume is its height times $\\Delta A = 1$.

**Step 3.** Add them: $0.75 + 1.75 + 2.75 + 3.75 = 9$.

**The sample point matters, a little.** Using each square's upper-right corner instead, $(1,1)$, $(2,1)$, $(1,2)$, $(2,2)$, gives heights $2$, $3$, $5$, $6$ and a sum of $16$. That's far too big because $f$ increases with both $x$ and $y$, so the upper-right corner is each square's highest point. The exact volume, computed later today, is $\\tfrac{28}{3} \\approx 9.33$. With smaller squares the choice matters less: with $100 \\times 100$ squares, the midpoint sum is about $9.3332$.
<<<

**Why the boxes approach the true volume.** Over one small rectangle, the graph of $f$ and the box's flat top differ in height by at most (largest value of $f$ there) minus (smallest value of $f$ there). For a continuous $f$, that difference shrinks to $0$ on every small rectangle as they shrink. So the total error is at most (the largest such difference) $\\times$ (area of $R$), which goes to $0$.
>>> Why the error goes to $0$, one step at a time
1. **One small rectangle.** Let $\\text{lo}$ and $\\text{hi}$ be the smallest and largest values of $f$ on it. The true solid over it has volume between $\\text{lo}\\cdot\\Delta A$ and $\\text{hi}\\cdot\\Delta A$, because the graph there is never lower than $\\text{lo}$ or higher than $\\text{hi}$. The box's height is $f$ at the sample point, which is also between $\\text{lo}$ and $\\text{hi}$, so the box's volume is in the same range.
2. **Two numbers in the same range** differ by at most the range's width, so the box and the true piece differ by at most $(\\text{hi} - \\text{lo})\\,\\Delta A$.
3. **Add over all the small rectangles.** Call $E$ the largest $\\text{hi} - \\text{lo}$ over all of them. The total error is at most $\\sum E\\,\\Delta A = E \\times (\\text{area of } R)$, since the $\\Delta A$'s add up to the area of $R$.
4. **Why $E$ shrinks.** A continuous $f$ (on a closed rectangle) changes by as little as you like over a small enough distance. As the rectangles shrink, every $\\text{hi} - \\text{lo}$ shrinks, so $E \\to 0$, and $E \\times (\\text{area})$ goes to $0$ too.
<<<

The limit is the [[double integral]]:
$$\\iint_R f(x, y)\\, dA = \\lim_{m, n \\to \\infty} \\sum_{i=1}^{m} \\sum_{j=1}^{n} f(x_{ij}^*, y_{ij}^*)\\, \\Delta A.$$
If $f$ is negative somewhere, the boxes there lie below the $xy$-plane and count as negative, so the double integral is a *signed* volume, just like Calc I's signed area.
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
>>> The average value, worked out for $f = x + y^2$
1. **The integral.** $\\iint_R (x + y^2)\\, dA = \\tfrac{28}{3}$ over $R = [0, 2] \\times [0, 2]$ (computed later today).
2. **The area.** $R$ is $2$ by $2$, so its area is $4$.
3. **Divide.** $f_{\\text{avg}} = \\tfrac{28/3}{4} = \\tfrac{7}{3} \\approx 2.33$.
4. **What it means.** A flat-topped box of height $\\tfrac73$ over $R$ has volume $\\tfrac73 \\cdot 4 = \\tfrac{28}{3}$, the same as the solid under $z = x + y^2$. The solid's top is lower than $\\tfrac73$ near $(0, 0)$ and higher near $(2, 2)$, and those differences cancel out exactly.
<<<

**Properties, and why each holds.** Each one is true for every Riemann sum, so it's true for the limit.
- **Sums and constants:** $\\iint_R (f + g)\\, dA = \\iint_R f\\, dA + \\iint_R g\\, dA$ and $\\iint_R cf\\, dA = c\\iint_R f\\, dA$. Each box's height splits the same way, $f + g$ or $c$ times $f$.
- **Splitting the region:** if $R$ is cut into two pieces $S$ and $T$, then $\\iint_R f\\, dA = \\iint_S f\\, dA + \\iint_T f\\, dA$. The boxes split into those over $S$ and those over $T$.
- **Bounds:** if $m \\le f \\le M$ on $R$, then $m \\cdot \\text{Area}(R) \\le \\iint_R f\\, dA \\le M \\cdot \\text{Area}(R)$. Every box is at least as tall as $m$ and at most as tall as $M$.
>>> Each property, shown on a Riemann sum
**Sums.** Each box in the sum for $f + g$ has height $f + g$ at its sample point, so
$$\\sum (f + g)\\,\\Delta A = \\sum f\\,\\Delta A + \\sum g\\,\\Delta A,$$
just by splitting each term. The same split works in the limit. Constants work the same way: $\\sum c f\\,\\Delta A = c \\sum f\\,\\Delta A$, pulling $c$ out of every term.

**Splitting the region.** Cut $R$ along a grid line into $S$ and $T$. Every small rectangle is then in $S$ or in $T$, so the sum over $R$ is the sum over the rectangles in $S$ plus the sum over those in $T$.

**Bounds.** If $m \\le f \\le M$, every box satisfies $m\\,\\Delta A \\le f\\,\\Delta A \\le M\\,\\Delta A$. Adding all of them, and using that the $\\Delta A$'s add up to the area of $R$:
$$m \\cdot \\text{Area}(R) \\le \\sum f\\,\\Delta A \\le M \\cdot \\text{Area}(R).$$

**Using the bounds to check an answer.** For $f = x + y^2$ on $[0, 2] \\times [0, 2]$ (area $4$), $f$ is smallest at $(0, 0)$, where it's $0$, and largest at $(2, 2)$, where it's $6$. So the integral must be between $0 \\cdot 4 = 0$ and $6 \\cdot 4 = 24$. The exact value $\\tfrac{28}{3} \\approx 9.33$ is in that range. A computed answer outside it would have to be wrong.
<<<
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
>>> The regrouping, shown on the four midpoint boxes
The midpoint sum for $f = x + y^2$ on $[0, 2] \\times [0, 2]$ had four boxes with volumes $0.75$, $1.75$, $2.75$, $3.75$.

**By columns** (fixed $x$, adding along $y$):
- Column $x = 0.5$: the boxes at $(0.5, 0.5)$ and $(0.5, 1.5)$, so $0.75 + 2.75 = 3.5$.
- Column $x = 1.5$: $1.75 + 3.75 = 5.5$.
- Total: $3.5 + 5.5 = 9$.

**By rows** (fixed $y$, adding along $x$):
- Row $y = 0.5$: $0.75 + 1.75 = 2.5$.
- Row $y = 1.5$: $2.75 + 3.75 = 6.5$.
- Total: $2.5 + 6.5 = 9$.

The same four numbers, added in a different order, give the same total. With more and more boxes, each column's sum becomes an integral in $y$ with $x$ held fixed (the inside integral), and adding the columns becomes the integral in $x$.
<<<

**What the inside integral means.** Hold $x$ fixed. The plane at that $x$ cuts the solid in a slice: the region under the curve $z = f(x, y)$ for $c \\le y \\le d$. The inside integral
$$A(x) = \\int_c^d f(x, y)\\, dy$$
is that slice's area. A thin slab of thickness $\\Delta x$ has volume about $A(x)\\, \\Delta x$, so the volume is $\\int_a^b A(x)\\, dx$, Calc I's volume by slicing.
>>> The slice at $x = 1$, worked out
1. **Fix $x = 1$.** The slice is the region under the curve $z = 1 + y^2$ for $0 \\le y \\le 2$ (the figure below shows it).
2. **Its area** is an ordinary Calc I integral: $A(1) = \\int_0^2 (1 + y^2)\\, dy = \\Big[y + \\tfrac{y^3}{3}\\Big]_0^2 = 2 + \\tfrac83 = \\tfrac{14}{3}$.
3. **A different slice.** At $x = 2$ the curve is $z = 2 + y^2$, exactly $1$ higher everywhere. Over a width of $2$, that adds $1 \\cdot 2 = 2$ to the area, so $A(2) = \\tfrac{14}{3} + 2 = \\tfrac{20}{3}$.
4. **The formula agrees.** The example below finds $A(x) = 2x + \\tfrac83$, which gives $\\tfrac{14}{3}$ at $x = 1$ and $\\tfrac{20}{3}$ at $x = 2$. ✓
<<<

**Example.** $f = x + y^2$ on $[0, 2] \\times [0, 2]$.
- $y$ first, holding $x$ constant: $\\displaystyle\\int_0^2 (x + y^2)\\, dy = \\Big[xy + \\tfrac{y^3}{3}\\Big]_{y=0}^{y=2} = 2x + \\tfrac83$. That's $A(x)$. Then $\\displaystyle\\int_0^2 \\Big(2x + \\tfrac83\\Big)\\, dx = \\Big[x^2 + \\tfrac{8x}{3}\\Big]_0^2 = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$.
- $x$ first, holding $y$ constant: $\\displaystyle\\int_0^2 (x + y^2)\\, dx = \\Big[\\tfrac{x^2}{2} + xy^2\\Big]_{x=0}^{x=2} = 2 + 2y^2$. Then $\\displaystyle\\int_0^2 (2 + 2y^2)\\, dy = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$. ✓ Same answer.
>>> Each step of the example, worked out
**Which limits go with which variable.** In $\\int_0^2 \\int_0^2 (x + y^2)\\, dy\\, dx$, read the differentials from the inside out: the inside limits belong to $dy$, the outside ones to $dx$. Here both are $0$ to $2$, but on other rectangles they differ, so always pair them this way.

**$y$ first.**
1. $x$ is a constant inside. The antiderivative of a constant $x$ with respect to $y$ is $xy$ (just like the antiderivative of $5$ is $5y$). The antiderivative of $y^2$ is $\\tfrac{y^3}{3}$.
2. Plug in $y = 2$: $2x + \\tfrac83$. Plug in $y = 0$: $0$. Subtract: $A(x) = 2x + \\tfrac83$.
3. Now integrate in $x$: the antiderivative of $2x + \\tfrac83$ is $x^2 + \\tfrac{8x}{3}$. At $x = 2$: $4 + \\tfrac{16}{3} = \\tfrac{12}{3} + \\tfrac{16}{3} = \\tfrac{28}{3}$. At $x = 0$: $0$.

**$x$ first.**
1. $y$ is a constant inside, so $y^2$ is a constant: its antiderivative in $x$ is $xy^2$. The antiderivative of $x$ is $\\tfrac{x^2}{2}$.
2. Plug in $x = 2$: $2 + 2y^2$. Plug in $x = 0$: $0$.
3. Integrate in $y$: $\\Big[2y + \\tfrac{2y^3}{3}\\Big]_0^2 = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$.

The middle results are different ($2x + \\tfrac83$ is a slice's area at fixed $x$, and $2 + 2y^2$ is a slice's area at fixed $y$), but the totals match, as they must.
<<<
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
>>> Each step of the $x$-first integral, worked out
1. **Find an antiderivative in $x$.** With $y$ held constant, the chain rule gives $\\frac{\\partial}{\\partial x} e^{xy} = e^{xy} \\cdot \\frac{\\partial}{\\partial x}(xy) = e^{xy} \\cdot y$. That's exactly the integrand, so $e^{xy}$ is an antiderivative.
2. **Plug in the $x$-limits.** At $x = 1$: $e^{y}$. At $x = 0$: $e^{0} = 1$. Subtract: $e^y - 1$.
3. **Integrate in $y$.** The antiderivative of $e^y - 1$ is $e^y - y$. At $y = \\ln 2$: $e^{\\ln 2} - \\ln 2 = 2 - \\ln 2$. At $y = 0$: $1 - 0 = 1$. Subtract: $(2 - \\ln 2) - 1 = 1 - \\ln 2 \\approx 0.307$.

**Why it was quick.** The $y$ in front was exactly the factor the chain rule produces when you differentiate $e^{xy}$ in $x$. Spotting that is the whole trick.
<<<
- **$y$ first** needs integration by parts on $\\int_0^{\\ln 2} y\\, e^{xy}\\, dy$. What comes out simplifies to $\\dfrac{d}{dx}\\Big(\\dfrac{2^x - 1}{x}\\Big)$, which you'd have to notice, and then evaluating $\\dfrac{2^x - 1}{x}$ at $x = 0$ takes a limit. Same answer, much more work.
>>> What the $y$-first route actually involves
1. **Integration by parts** with $u = y$ and $dv = e^{xy}\\, dy$, so $du = dy$ and $v = \\tfrac{1}{x} e^{xy}$ (for $x \\ne 0$):
$$\\int_0^{\\ln 2} y\\, e^{xy}\\, dy = \\Big[\\tfrac{y}{x} e^{xy}\\Big]_0^{\\ln 2} - \\int_0^{\\ln 2} \\tfrac1x e^{xy}\\, dy = \\frac{\\ln 2 \\cdot 2^x}{x} - \\frac{2^x - 1}{x^2},$$
using $e^{x \\ln 2} = 2^x$.
2. **The outside integral** of that in $x$ isn't a standard form. It happens to be the derivative of $\\dfrac{2^x - 1}{x}$ (check with the quotient rule: $\\dfrac{x\\,2^x \\ln 2 - (2^x - 1)}{x^2}$), so the answer is $\\Big[\\dfrac{2^x - 1}{x}\\Big]_0^1$.
3. **At $x = 1$** that's $1$. **At $x = 0$** it's $\\tfrac00$, so you need a limit: $\\lim_{x \\to 0} \\tfrac{2^x - 1}{x} = \\ln 2$ (L'Hôpital's rule, or the definition of the derivative of $2^x$ at $0$).
4. **Result:** $1 - \\ln 2$, the same as before, after three hard steps instead of three easy ones.
<<<

**Shortcut for products.** If $f(x, y) = g(x)\\, h(y)$ on a rectangle, then
$$\\iint_R g(x)\\, h(y)\\, dA = \\left(\\int_a^b g(x)\\, dx\\right) \\left(\\int_c^d h(y)\\, dy\\right).$$
Why: in the inside integral $\\int_c^d g(x)\\, h(y)\\, dy$, the factor $g(x)$ is a constant, so it comes out: $g(x) \\int_c^d h(y)\\, dy$. That leftover integral is just a number, so it comes out of the outside integral too.
>>> The shortcut, step by step on $x^2 y$ over $[0, 1] \\times [0, 2]$
1. **Inside integral, $x$ held constant:** $\\int_0^2 x^2 y\\, dy = x^2 \\int_0^2 y\\, dy$, pulling out the constant $x^2$.
2. **That integral is a number:** $\\int_0^2 y\\, dy = \\Big[\\tfrac{y^2}{2}\\Big]_0^2 = 2$. So the inside result is $2x^2$.
3. **Outside integral:** $\\int_0^1 2x^2\\, dx = 2 \\int_0^1 x^2\\, dx$, pulling out the constant $2$. And $\\int_0^1 x^2\\, dx = \\tfrac13$.
4. **Result:** $2 \\cdot \\tfrac13 = \\tfrac23$, which is exactly $\\Big(\\int_0^1 x^2\\, dx\\Big)\\Big(\\int_0^2 y\\, dy\\Big) = \\tfrac13 \\cdot 2$.

**Only on rectangles.** Step 2 needed the inside limits to be numbers. On the curved regions of the next lecture, the inside limits depend on the outside variable, so the inside integral isn't a plain number and the shortcut no longer applies.
<<<
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