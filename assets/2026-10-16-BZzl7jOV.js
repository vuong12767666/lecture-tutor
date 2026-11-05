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
Here is the whole idea on one real example: $f(x, y) = x + y^2$ over the square $0 \\le x \\le 2$, $0 \\le y \\le 2$. The graph $z = x + y^2$ is a curved roof over that square, and the goal is the volume of the solid between the floor and the roof.

**Step 1: cut the floor into pieces.** Cut the $x$-range $[0, 2]$ into $m = 2$ equal parts, each $\\Delta x = \\tfrac{2 - 0}{2} = 1$ wide, and the $y$-range into $n = 2$ parts, each $\\Delta y = 1$ tall. That cuts the square into $2 \\times 2 = 4$ small squares, each with area $\\Delta A = 1 \\times 1 = 1$:
- $[0,1] \\times [0,1]$ (the bottom-left one),
- $[1,2] \\times [0,1]$ (bottom-right),
- $[0,1] \\times [1,2]$ (top-left),
- $[1,2] \\times [1,2]$ (top-right).

**Step 2: stand a box on each piece.** A box with a flat top can't follow the curved roof exactly, so give each box the roof's height at one chosen point of its square, called the sample point. Using each square's middle point:
- $(0.5, 0.5)$: height $0.5 + 0.5^2 = 0.5 + 0.25 = 0.75$,
- $(1.5, 0.5)$: height $1.5 + 0.25 = 1.75$,
- $(0.5, 1.5)$: height $0.5 + 1.5^2 = 0.5 + 2.25 = 2.75$,
- $(1.5, 1.5)$: height $1.5 + 2.25 = 3.75$.

Each box's volume is its height times its floor area, and every floor area is $1$, so the volumes are the same four numbers.

**Step 3: add the boxes.** $0.75 + 1.75 + 2.75 + 3.75 = 9$. That's the estimate of the volume. (A "Riemann sum" is just this kind of sum: heights at sample points times small areas, added up.)

**Which point you pick matters, a little.** Using each square's upper-right corner instead, $(1, 1)$, $(2, 1)$, $(1, 2)$, $(2, 2)$, gives heights $2$, $3$, $5$, $6$ and a total of $16$, much too big. Here's why: $x + y^2$ grows as $x$ grows and as $y$ grows, so the upper-right corner is the highest point of each square, and every box sticks up above the roof. The exact volume, worked out later in this lecture, is $\\tfrac{28}{3} \\approx 9.33$. With smaller squares the choice matters less: with $100 \\times 100$ squares, the middle-point total is about $9.3332$.
<<<

**Why the boxes approach the true volume.** Over one small rectangle, the graph of $f$ and the box's flat top differ in height by at most (largest value of $f$ there) minus (smallest value of $f$ there). For a continuous $f$, that difference shrinks to $0$ on every small rectangle as they shrink. So the total error is at most (the largest such difference) $\\times$ (area of $R$), which goes to $0$.
>>> Why the error goes to $0$, one step at a time
The boxes have flat tops but the roof is curved, so each box is a bit wrong. Here is why the total mistake shrinks to nothing as the squares get smaller.

1. **Look at one small square.** Call the lowest roof height over it $\\text{lo}$ and the highest $\\text{hi}$. For example, over the square $[1, 2] \\times [1, 2]$ with $f = x + y^2$, the lowest point is the corner $(1, 1)$ with height $2$ and the highest is $(2, 2)$ with height $6$. The true piece of solid over that square has volume somewhere between $\\text{lo} \\times \\Delta A$ and $\\text{hi} \\times \\Delta A$, because the roof there is never lower than $\\text{lo}$ or higher than $\\text{hi}$. The box also has a height between $\\text{lo}$ and $\\text{hi}$ (it's the roof's height at one point of the square).
2. **So the box is off by at most $(\\text{hi} - \\text{lo}) \\times \\Delta A$.** Two numbers that both lie between $\\text{lo}\\,\\Delta A$ and $\\text{hi}\\,\\Delta A$ can't be farther apart than the width of that range.
3. **Add up the mistakes.** Let $E$ be the biggest $\\text{hi} - \\text{lo}$ over all the small squares. Every box is off by at most $E \\times \\Delta A$, and the $\\Delta A$'s add up to the area of the whole rectangle. So the total mistake is at most $E \\times (\\text{area of the rectangle})$.
4. **Why $E$ shrinks.** As the squares get smaller, the roof has less room to rise or fall over each one. For $f = x + y^2$ on squares of side $0.1$ inside $[0, 2] \\times [0, 2]$, $f$ changes by at most $0.1$ in the $x$ direction and at most $2^2 - 1.9^2 = 0.39$ in the $y$ direction, so $E \\le 0.49$; with side $0.01$, $E \\le 0.0499$. A function with no sudden jumps (a **continuous** function) always behaves this way. So $E$ goes to $0$, and the total mistake goes to $0$ with it.
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
**What "average value" means.** For numbers, the average is the total divided by how many there are. For a function spread over a region, the total is the integral (the volume under the roof) and "how many" is the area of the region. The average is the height of a flat roof that would hold the same volume.

1. **The total.** The volume under $z = x + y^2$ over $[0, 2] \\times [0, 2]$ is $\\tfrac{28}{3} \\approx 9.33$ (computed later in this lecture).
2. **The area.** The square is $2$ by $2$, so its area is $4$.
3. **Divide.** $\\tfrac{28/3}{4} = \\tfrac{28}{12} = \\tfrac73 \\approx 2.33$.
4. **What it means.** A box with a flat top at height $\\tfrac73$ over the same square has volume $\\tfrac73 \\times 4 = \\tfrac{28}{3}$, exactly the volume under the curved roof. The real roof is lower than $\\tfrac73$ near the corner $(0, 0)$ (height $0$) and higher near $(2, 2)$ (height $6$); the extra above and the shortfall below balance out exactly.
<<<

**Properties, and why each holds.** Each one is true for every Riemann sum, so it's true for the limit.
- **Sums and constants:** $\\iint_R (f + g)\\, dA = \\iint_R f\\, dA + \\iint_R g\\, dA$ and $\\iint_R cf\\, dA = c\\iint_R f\\, dA$. Each box's height splits the same way, $f + g$ or $c$ times $f$.
- **Splitting the region:** if $R$ is cut into two pieces $S$ and $T$, then $\\iint_R f\\, dA = \\iint_S f\\, dA + \\iint_T f\\, dA$. The boxes split into those over $S$ and those over $T$.
- **Bounds:** if $m \\le f \\le M$ on $R$, then $m \\cdot \\text{Area}(R) \\le \\iint_R f\\, dA \\le M \\cdot \\text{Area}(R)$. Every box is at least as tall as $m$ and at most as tall as $M$.
>>> Each property, shown on a Riemann sum
Each property is true for every sum of boxes, so it's true for the integral, which is what those sums approach. Here is each one on the boxes.

**Adding two functions.** Over each small square, the box for $f + g$ has height $f + g$ at the sample point, so its volume is $(f + g)\\,\\Delta A = f\\,\\Delta A + g\\,\\Delta A$. Adding every box:
$$\\sum (f + g)\\,\\Delta A = \\sum f\\,\\Delta A + \\sum g\\,\\Delta A.$$
For example, with one square of area $1$ where $f = 2$ and $g = 3$: the $f + g$ box has volume $5$, which is $2 + 3$.

**Multiplying by a number.** The box for $c \\cdot f$ has height $c$ times as tall, so its volume is $c\\,(f\\,\\Delta A)$. Every box is multiplied by $c$, so the total is too.

**Splitting the region.** Cut the rectangle into two parts $S$ and $T$ along a line of the grid. Every small square is then in $S$ or in $T$, not both, so the total over everything equals (total over the squares in $S$) $+$ (total over the squares in $T$).

**Bounds.** If $m \\le f \\le M$ everywhere, every box is at least $m$ tall and at most $M$ tall: $m\\,\\Delta A \\le f\\,\\Delta A \\le M\\,\\Delta A$. Adding all the boxes, and using that the $\\Delta A$'s add up to the area:
$$m \\times \\text{area} \\le \\text{total} \\le M \\times \\text{area}.$$

**Using the bounds to catch mistakes.** For $f = x + y^2$ on $[0, 2] \\times [0, 2]$ (area $4$), the smallest value is $0$ (at $(0, 0)$) and the largest is $2 + 4 = 6$ (at $(2, 2)$). So the integral has to be between $0 \\times 4 = 0$ and $6 \\times 4 = 24$. The exact value $\\tfrac{28}{3} \\approx 9.33$ is. If a calculation gave $30$, you'd know it was wrong.
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
The four boxes from the first Go deeper had volumes $0.75$, $1.75$, $2.75$, and $3.75$. They can be added in different groupings.

**By columns.** A column is all the boxes that share the same $x$ (stacked along the $y$ direction).
- The column at $x = 0.5$ has the boxes at $(0.5, 0.5)$ and $(0.5, 1.5)$: $0.75 + 2.75 = 3.5$.
- The column at $x = 1.5$: $1.75 + 3.75 = 5.5$.
- Total: $3.5 + 5.5 = 9$.

**By rows.** A row is all the boxes that share the same $y$.
- The row at $y = 0.5$: $0.75 + 1.75 = 2.5$.
- The row at $y = 1.5$: $2.75 + 3.75 = 6.5$.
- Total: $2.5 + 6.5 = 9$.

Same four numbers, added in a different order, same total.

**What this has to do with integrals.** Inside one column, $x$ is the same for every box, and only $y$ is different. With more and more, thinner and thinner boxes, adding up one column becomes an ordinary one-variable integral in $y$, with $x$ treated as a fixed number: that's the inside integral $\\int_c^d f(x, y)\\, dy$. Adding the columns together then becomes the outside integral in $x$. Grouping by rows instead gives the other order, $dx$ inside.
<<<

**What the inside integral means.** Hold $x$ fixed. The plane at that $x$ cuts the solid in a slice: the region under the curve $z = f(x, y)$ for $c \\le y \\le d$. The inside integral
$$A(x) = \\int_c^d f(x, y)\\, dy$$
is that slice's area. A thin slab of thickness $\\Delta x$ has volume about $A(x)\\, \\Delta x$, so the volume is $\\int_a^b A(x)\\, dx$, Calc I's volume by slicing.
>>> The slice at $x = 1$, worked out
**What a slice is.** Cut the solid with the flat vertical wall $x = 1$. On that wall, every point has $x = 1$, and only $y$ and the height change. The cut face is a flat shape: everything under the curve $z = 1 + y^2$ (the roof with $x = 1$ plugged in) for $y$ from $0$ to $2$. The figure below shows it.

1. **Its area** is an ordinary Calc I area under a curve: $A(1) = \\int_0^2 (1 + y^2)\\, dy = \\Big[y + \\tfrac{y^3}{3}\\Big]_0^2 = 2 + \\tfrac83 = \\tfrac{14}{3}$.
2. **A different slice.** At $x = 2$, the curve is $z = 2 + y^2$: exactly $1$ higher than at $x = 1$, at every $y$. A strip $1$ tall over a width of $2$ adds $1 \\times 2 = 2$ of area, so $A(2) = \\tfrac{14}{3} + 2 = \\tfrac{20}{3}$.
3. **Why slices give the volume.** Think of the solid as made of thin slabs, each one slice thick. A slab of thickness $\\Delta x$ at position $x$ has volume about $A(x)\\,\\Delta x$ (its face area times its thickness). Adding the slabs from $x = 0$ to $2$ gives $\\int_0^2 A(x)\\, dx$: the inside integral is the slice area, and the outside integral adds the slabs.
4. **The formula agrees.** The example below finds $A(x) = 2x + \\tfrac83$ for every $x$, which gives $\\tfrac{14}{3}$ at $x = 1$ and $\\tfrac{20}{3}$ at $x = 2$ ✓.
<<<

**Example.** $f = x + y^2$ on $[0, 2] \\times [0, 2]$.
- $y$ first, holding $x$ constant: $\\displaystyle\\int_0^2 (x + y^2)\\, dy = \\Big[xy + \\tfrac{y^3}{3}\\Big]_{y=0}^{y=2} = 2x + \\tfrac83$. That's $A(x)$. Then $\\displaystyle\\int_0^2 \\Big(2x + \\tfrac83\\Big)\\, dx = \\Big[x^2 + \\tfrac{8x}{3}\\Big]_0^2 = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$.
- $x$ first, holding $y$ constant: $\\displaystyle\\int_0^2 (x + y^2)\\, dx = \\Big[\\tfrac{x^2}{2} + xy^2\\Big]_{x=0}^{x=2} = 2 + 2y^2$. Then $\\displaystyle\\int_0^2 (2 + 2y^2)\\, dy = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$. ✓ Same answer.
>>> Each step of the example, worked out
**Reading the integral.** In $\\int_0^2\\int_0^2 (x + y^2)\\, dy\\, dx$, the inner integral (with $dy$) is done first, and its limits ($0$ to $2$) are the $y$-limits; the outer one (with $dx$) is done second, and its limits are the $x$-limits. Here both are $0$ to $2$, but on other rectangles they differ, so pair each pair of limits with the $d$ next to it, working from the inside out.

**$y$ first.** While doing the inner integral, you're adding along one line where $x$ is a single number (for example $x = 1$), so treat $x$ exactly like a number such as $5$.
1. The antiderivative of $x$ with respect to $y$ is $xy$, just as the antiderivative of $5$ is $5y$ (its $y$-derivative is $5$). The antiderivative of $y^2$ is $\\tfrac{y^3}{3}$.
2. Plug in $y = 2$: $2x + \\tfrac83$. Plug in $y = 0$: $0$. Subtract: $2x + \\tfrac83$. That's the slice area $A(x)$ (at $x = 1$ it's $\\tfrac{14}{3}$, as in the slice Go deeper).
3. Now the outer integral, in $x$: the antiderivative of $2x + \\tfrac83$ is $x^2 + \\tfrac{8x}{3}$. At $x = 2$: $4 + \\tfrac{16}{3} = \\tfrac{12}{3} + \\tfrac{16}{3} = \\tfrac{28}{3}$. At $x = 0$: $0$.

**$x$ first.** Now the inner integral adds along a line where $y$ is a single number, so $y^2$ acts like a number.
1. The antiderivative of $x$ in $x$ is $\\tfrac{x^2}{2}$. The antiderivative of the number $y^2$ is $xy^2$.
2. Plug in $x = 2$: $2 + 2y^2$. Plug in $x = 0$: $0$.
3. Outer integral in $y$: $\\Big[2y + \\tfrac{2y^3}{3}\\Big]_0^2 = 4 + \\tfrac{16}{3} = \\tfrac{28}{3}$.

The middle results are different ($2x + \\tfrac83$ is a slice at fixed $x$; $2 + 2y^2$ is a slice at fixed $y$), but both totals are the same volume, $\\tfrac{28}{3}$.
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
**The idea.** The inner integral is $\\int_0^1 y\\, e^{xy}\\, dx$, done along a line where $y$ is a single number. To integrate, you need a function whose $x$-derivative is $y\\,e^{xy}$.

1. **Find it.** Try $e^{xy}$. Its $x$-derivative, by the chain rule (derivative of the outside, $e^{\\text{something}}$, times the derivative of the inside, $xy$), is $e^{xy} \\times y$, because with $y$ a fixed number, $xy$ has $x$-derivative $y$. That's exactly the integrand. (Check with $y = 2$: the $x$-derivative of $e^{2x}$ is $2e^{2x}$ ✓.)
2. **Plug in the $x$-limits.** At $x = 1$: $e^{y}$. At $x = 0$: $e^{0} = 1$. Subtract: $e^y - 1$.
3. **The outer integral, in $y$.** The antiderivative of $e^y - 1$ is $e^y - y$. At $y = \\ln 2$: $e^{\\ln 2} - \\ln 2 = 2 - \\ln 2$ (since $e^{\\ln 2} = 2$; that's what $\\ln$ means). At $y = 0$: $1 - 0 = 1$. Subtract: $1 - \\ln 2 \\approx 0.307$.

**Why this order was quick.** The $y$ in front of $e^{xy}$ is exactly the extra factor the chain rule creates when you differentiate $e^{xy}$ in $x$. So the antiderivative was easy to spot. In the other order there's no such factor.
<<<
- **$y$ first** needs integration by parts on $\\int_0^{\\ln 2} y\\, e^{xy}\\, dy$. What comes out simplifies to $\\dfrac{d}{dx}\\Big(\\dfrac{2^x - 1}{x}\\Big)$, which you'd have to notice, and then evaluating $\\dfrac{2^x - 1}{x}$ at $x = 0$ takes a limit. Same answer, much more work.
>>> What the $y$-first route actually involves
This shows why the other order is much harder, so you can recognize a bad order on an exam.

1. **Integration by parts.** $\\int y\\, e^{xy}\\, dy$ is a product of $y$ and $e^{xy}$, so it needs integration by parts ($\\int u\\, dv = uv - \\int v\\, du$). Choose $u = y$ (so $du = dy$) and $dv = e^{xy}\\, dy$ (so $v = \\tfrac1x e^{xy}$, for $x \\ne 0$, since the $y$-derivative of $\\tfrac1x e^{xy}$ is $e^{xy}$):
$$\\int_0^{\\ln 2} y\\, e^{xy}\\, dy = \\Big[\\tfrac{y}{x} e^{xy}\\Big]_0^{\\ln 2} - \\int_0^{\\ln 2} \\tfrac1x e^{xy}\\, dy = \\frac{\\ln 2 \\cdot 2^x}{x} - \\frac{2^x - 1}{x^2},$$
using $e^{x\\ln 2} = 2^x$.
2. **The outer integral** of that in $x$ isn't in any standard table. It happens to be the $x$-derivative of $\\dfrac{2^x - 1}{x}$ (you can check with the quotient rule: $\\dfrac{x \\cdot 2^x\\ln 2 - (2^x - 1)}{x^2}$), so the answer is $\\Big[\\dfrac{2^x - 1}{x}\\Big]_0^1$, but you'd have to notice that.
3. **At $x = 1$** that's $\\tfrac{2 - 1}{1} = 1$. **At $x = 0$** it's $\\tfrac00$, which has no value, so you need a limit: as $x$ gets close to $0$, $\\tfrac{2^x - 1}{x}$ gets close to $\\ln 2$ (L'Hôpital's rule: differentiate top and bottom, $\\tfrac{2^x\\ln 2}{1} \\to \\ln 2$).
4. **Result:** $1 - \\ln 2$, the same as before, but after three hard steps instead of three easy ones.
<<<

**Shortcut for products.** If $f(x, y) = g(x)\\, h(y)$ on a rectangle, then
$$\\iint_R g(x)\\, h(y)\\, dA = \\left(\\int_a^b g(x)\\, dx\\right) \\left(\\int_c^d h(y)\\, dy\\right).$$
Why: in the inside integral $\\int_c^d g(x)\\, h(y)\\, dy$, the factor $g(x)$ is a constant, so it comes out: $g(x) \\int_c^d h(y)\\, dy$. That leftover integral is just a number, so it comes out of the outside integral too.
>>> The shortcut, step by step on $x^2 y$ over $[0, 1] \\times [0, 2]$
**The situation.** The limits are all numbers (a rectangle), and the function is (something with only $x$) $\\times$ (something with only $y$): here $x^2 \\times y$.

1. **Inner integral, along a line where $x$ is one number:** $\\int_0^2 x^2 y\\, dy$. Since $x^2$ is a single number on that line, it can come out front, like $\\int 5y\\, dy = 5\\int y\\, dy$: $x^2\\int_0^2 y\\, dy$.
2. **That integral is just a number:** $\\int_0^2 y\\, dy = \\Big[\\tfrac{y^2}{2}\\Big]_0^2 = 2$. So the inner result is $2x^2$.
3. **Outer integral:** $\\int_0^1 2x^2\\, dx$. The $2$ comes out the same way: $2\\int_0^1 x^2\\, dx = 2 \\cdot \\tfrac13 = \\tfrac23$.
4. **The pattern:** the answer is $\\Big(\\int_0^1 x^2\\, dx\\Big) \\times \\Big(\\int_0^2 y\\, dy\\Big) = \\tfrac13 \\times 2 = \\tfrac23$. Each part was integrated on its own, then multiplied.

**Only on rectangles.** Step 2 needed the inner limits to be numbers, so the inner integral came out as a plain number. If the inner limits depended on $x$ (as on the curved regions of the next lecture), the inner integral would depend on $x$ too, and the shortcut wouldn't work.

**For example,** on the line $x = 0.5$, $x^2$ is $0.25$ at every point, so the inner integral is $0.25 \\times \\int_0^2 y\\, dy = 0.25 \\times 2 = 0.5$, which matches $2x^2 = 0.5$ at $x = 0.5$.
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