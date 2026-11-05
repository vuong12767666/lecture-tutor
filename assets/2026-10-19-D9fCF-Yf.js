var e=`---
title: Integrating over more complicated regions
date: 2026-10-19
stewart: 15.2, 15.3
source: OpenStax Calculus Volume 3, §5.2 Double Integrals over General Regions and §5.3 Double Integrals in Polar Coordinates
---

:::recap Last time
- $\\iint_R f\\, dA$ is the limit of sums of boxes $f \\cdot \\Delta A$: the volume under the graph of $f$ when $f \\ge 0$.
- **Fubini:** on a rectangle, $\\iint_R f\\, dA = \\int_a^b \\int_c^d f\\, dy\\, dx = \\int_c^d \\int_a^b f\\, dx\\, dy$. The inside integral adds one column (or row) of boxes, holding the other variable constant.
:::

:::check
Warm-up: compute $\\displaystyle\\int_0^2 \\int_0^1 (x + y)\\, dy\\, dx$.
answer: 3
???
Inside, $x$ is a constant: $\\int_0^1 (x + y)\\, dy = \\Big[xy + \\tfrac{y^2}{2}\\Big]_0^1 = x + \\tfrac12$. Then $\\int_0^2 \\big(x + \\tfrac12\\big)\\, dx = 2 + 1 = 3$.
:::

:::question Today
Most regions aren't rectangles: a triangle, the area between a parabola and a line, a disk. How do you set up the limits when the edges are curves? And when one order of integration is impossible, how do you switch to the other?
:::

:::idea Regions bounded by curves
**Slicing vertically ($dy$ inside).** Suppose every vertical line $x = c$, for $a \\le c \\le b$, crosses the region $D$ in one segment: it enters $D$ at a bottom curve $y = g_1(x)$ and leaves at a top curve $y = g_2(x)$. Then
$$\\iint_D f\\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x, y)\\, dy\\, dx.$$

**Slicing horizontally ($dx$ inside).** If instead every horizontal line $y = k$, for $c_1 \\le k \\le c_2$, crosses $D$ in one segment from a left curve $x = h_1(y)$ to a right curve $x = h_2(y)$, then
$$\\iint_D f\\, dA = \\int_{c_1}^{c_2} \\int_{h_1(y)}^{h_2(y)} f(x, y)\\, dx\\, dy.$$

**Why the inside limits are functions.** On Oct 16, the iterated integral came from adding up the boxes one column at a time. Over a region, the column at $x$ contains only the boxes inside $D$, which are the ones with $y$ between $g_1(x)$ and $g_2(x)$. So the inside integral at that $x$ runs over exactly that segment. Different columns have different heights, so these limits depend on $x$. The outside limits only say which columns exist at all, so they're numbers: the smallest and largest $x$ in $D$.
>>> Why a column's limits change with $x$
**What a column (vertical line) is.** Pick one value of $x$, say $x = 0.5$. All the points with $x = 0.5$, like $(0.5, 0.1)$, $(0.5, 0.3)$, and $(0.5, 0.5)$, lie on one vertical line. On that line $x$ never changes; only $y$ does. With $dy$ inside, the integral adds up the region one such line at a time.

**Two lines through the same region.** Take the region between $y = x^2$ (below) and $y = x$ (above), from the example below.
- **At $x = 0.5$:** the line is inside the region from $y = 0.5^2 = 0.25$ up to $y = 0.5$. Its length is $0.25$.
- **At $x = 0.8$:** it's inside from $y = 0.8^2 = 0.64$ up to $y = 0.8$. Its length is $0.16$.

The line at $x = 0.5$ starts at $0.25$ and the line at $x = 0.8$ starts at $0.64$. Different lines start and stop at different heights, so the inside limits can't be two fixed numbers. Writing them as formulas, from $x^2$ to $x$, gives the right start and stop for every line at once: when the outside integral reaches a particular $x$, you plug that $x$ into the formulas.

**The outside limits are different.** They don't describe one line; they say which lines to use at all, from the first one ($x = 0$) to the last one ($x = 1$). Those are fixed numbers.
<<<

**Reading the limits off a picture:**
1. Sketch $D$ and find where its edges meet.
2. Draw a vertical line through $D$. The curve where it enters is the bottom limit, and the curve where it leaves is the top limit, each solved for $y$.
3. The outside limits are the smallest and largest $x$ in $D$.
4. Check: the outside limits are numbers, and the inside limits use only the outside variable.

**Finding the limits from the equations alone, without drawing:**
1. **Where do the edges meet?** Set the formulas equal and solve. For a region between two curves, the $x$-values where they meet are the outside limits.
2. **Which curve is on top?** Plug one $x$ between the meeting points into both formulas. The one that gives the larger $y$ is the top curve on that whole interval.
3. **Write the region as inequalities:** $a \\le x \\le b$ and (bottom formula) $\\le y \\le$ (top formula). Those are the limits for $dy\\, dx$.
4. **For $dx\\, dy$ instead:** solve each edge for $x$. The lowest and highest $y$ in the region (usually at the meeting points) are the outside limits. Plug one $y$ in between into both $x$-formulas: the smaller $x$ is the left edge (bottom limit), the larger is the right edge (top limit).

If the problem also names a straight edge, like $x = 0$ or $y = 4$, include it as one of the curves in step 1.

**Example.** The region between $y = x^2$ and $y = x$, using only the equations.
1. **Meet:** $x^2 = x$ at $x = 0$ and $x = 1$.
2. **Top:** at $x = 0.5$, the line gives $0.5$ and the parabola gives $0.25$, so $y = x$ is on top.
3. **Inequalities:** $0 \\le x \\le 1$ and $x^2 \\le y \\le x$, so with vertical slices the integral is $\\displaystyle\\int_0^1 \\int_{x^2}^{x} f\\, dy\\, dx$.
>>> Each step of the example, worked out
**Step 1: where the curves meet.** The region is closed off where the two curves cross, so those points are its ends. The curves cross where they give the same height: $x^2 = x$. Move everything to one side: $x^2 - x = 0$. Pull out the common factor $x$: $x(x - 1) = 0$. A product of two numbers is $0$ only when one of them is $0$, so $x = 0$ or $x = 1$. The crossing points are $(0, 0)$ and $(1, 1)$.

(Be careful not to divide $x^2 = x$ by $x$. That gives only $x = 1$, because dividing by $x$ secretly assumes $x$ isn't $0$, and loses the crossing at $x = 0$.)

**Step 2: which curve is on top.** Pick one $x$ between $0$ and $1$, say $x = 0.5$. The line gives height $0.5$, and the parabola gives $0.5^2 = 0.25$. The line is higher. The two curves only cross at $x = 0$ and $x = 1$, so in between they can't switch places: for the parabola to get above the line, the two would have to cross somewhere first. So the line is on top for every $x$ from $0$ to $1$, and one test point is enough.

**Step 3: why these rules are the limits.** A point $(x, y)$ is in the region when it's at or above the parabola and at or below the line: $x^2 \\le y \\le x$. That's possible only when $x^2 \\le x$, which is exactly when $0 \\le x \\le 1$. (At $x = 1.5$, for example, $x^2 = 2.25$ is bigger than $1.5$, so no $y$ is both above $2.25$ and below $1.5$.) The rule about $x$ uses only numbers, so it gives the outside limits. The rule about $y$ depends on which $x$ you're at, so it gives the inside limits.

**What it looks like.** Walk up the vertical line $x = 0.5$. Below $y = 0.25$ you're under the parabola, outside the region. At $y = 0.25$ you cross the parabola and enter. At $y = 0.5$ you reach the line and leave. That's $0.25 \\le y \\le 0.5$, which is $x^2 \\le y \\le x$ at $x = 0.5$.
<<<
4. **With $dx$ inside instead:** solve each edge for $x$: $y = x$ is $x = y$, and $y = x^2$ is $x = \\sqrt y$. The meeting points $(0, 0)$ and $(1, 1)$ give $0 \\le y \\le 1$. At $y = 0.25$, $x = y$ gives $0.25$ and $x = \\sqrt y$ gives $0.5$, so $x = y$ is the left edge: $y \\le x \\le \\sqrt y$, and the integral is $\\displaystyle\\int_0^1 \\int_{y}^{\\sqrt y} f\\, dx\\, dy$.
>>> Step 4, worked out
**What changes with $dx$ inside.** Now the integral adds the region one horizontal line at a time. On the horizontal line at one $y$, say $y = 0.25$, every point has the same $y$, like $(0.3, 0.25)$ and $(0.4, 0.25)$, and only $x$ changes. So the inside limits must say where that horizontal line starts and stops, as values of $x$.

**Solving each edge for $x$.** To read off where a horizontal line hits an edge, each edge has to be written as "$x = $ (something with $y$)".
- The line $y = x$ is the same as $x = y$.
- The parabola $y = x^2$: undo the square with a square root, $x = \\sqrt y$ or $x = -\\sqrt y$. This region only has $x$ between $0$ and $1$, so the edge is $x = +\\sqrt y$. (Check: at $y = 0.25$, $\\sqrt{0.25} = 0.5$, and $(0.5, 0.25)$ is on $y = x^2$ ✓.)

**The range of $y$.** The lowest point of the region is the crossing point $(0, 0)$ and the highest is $(1, 1)$, so $y$ runs from $0$ to $1$.

**Which edge is on the left.** On the line $y = 0.25$, the edge $x = y$ is at $x = 0.25$, and the edge $x = \\sqrt y$ is at $x = 0.5$. Smaller $x$ is farther left, so $x = y$ is the left edge (where the line enters) and $x = \\sqrt y$ the right edge (where it leaves). Check a point in between, $(0.4, 0.25)$: is it above the parabola ($0.25 \\ge 0.4^2 = 0.16$ ✓) and below the line ($0.25 \\le 0.4$ ✓)? Yes, so it's in the region.

**It flipped.** With vertical lines, the line $y = x$ was the top edge. With horizontal lines, it's the left edge, the one where the line enters. Which curve comes first depends on the direction of the lines, so test a point each time instead of reusing the other order's limits.

**Check that both orders cover the same region.** With $f = 1$, both give the region's area. Vertical lines: $\\int_0^1 (x - x^2)\\, dx = \\tfrac12 - \\tfrac13 = \\tfrac16$. Horizontal lines: $\\int_0^1 (\\sqrt y - y)\\, dy = \\tfrac23 - \\tfrac12 = \\tfrac16$ ✓.
<<<

**When one description needs two pieces.** If the top (or bottom) edge changes formula partway across, split the region where it changes and add the two integrals (Oct 16: splitting the region). For the triangle with corners $(0, 0)$, $(2, 0)$, $(1, 1)$, vertical slicing needs two integrals, but horizontal slicing needs only one: $\\int_0^1 \\int_y^{2-y} f\\, dx\\, dy$.
>>> Why vertical slicing needs two pieces here, and horizontal slicing doesn't
**The triangle's top edge is two different lines.** The triangle has corners $(0, 0)$, $(2, 0)$, $(1, 1)$. From $(0, 0)$ to $(1, 1)$, the top edge is the line $y = x$. From $(1, 1)$ to $(2, 0)$, it's the line $y = 2 - x$ (check: at $x = 1$ it gives $1$, at $x = 2$ it gives $0$ ✓).

**Vertical lines.** The vertical line at $x = 0.5$ leaves the triangle through $y = x$, at height $0.5$. The vertical line at $x = 1.5$ leaves through $y = 2 - x$, at height $0.5$. A single integral's top limit has to be one formula, and no single formula is right for both lines. So split at $x = 1$, where the top edge changes, and add two integrals:
$$\\int_0^1 \\int_0^{x} f\\, dy\\, dx + \\int_1^2 \\int_0^{2 - x} f\\, dy\\, dx.$$

**Horizontal lines.** The horizontal line at height $y$ (between $0$ and $1$) always enters through the left edge $y = x$, which is $x = y$, and always leaves through the right edge $y = 2 - x$, which is $x = 2 - y$. For example, at $y = 0.5$ it runs from $x = 0.5$ to $x = 1.5$. The same two formulas work for every $y$, so one integral is enough: $\\int_0^1 \\int_y^{2 - y} f\\, dx\\, dy$.

**Check with $f = 1$.** The two-piece version gives $\\tfrac12 + \\tfrac12 = 1$. The one-piece version gives $\\int_0^1 (2 - 2y)\\, dy = 2 - 1 = 1$. The triangle's area is $\\tfrac12 \\times \\text{base } 2 \\times \\text{height } 1 = 1$ ✓.
<<<
:::

:::figure region-between-curves
The region $D$ between $y = x^2$ (below) and $y = x$ (above). The vertical slice at $x = 0.75$ runs from $y = x^2 = 0.5625$ up to $y = x = 0.75$. The horizontal slice at $y = 0.45$ runs from $x = y = 0.45$ to $x = \\sqrt y \\approx 0.67$.
:::

:::theorem Iterated integrals over a region
If $f$ is continuous on $D = \\{a \\le x \\le b,\\; g_1(x) \\le y \\le g_2(x)\\}$, then
$$\\iint_D f\\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x, y)\\, dy\\, dx,$$
and the same holds with the roles of $x$ and $y$ swapped for a region described by horizontal slices.

**Why:** put $D$ inside a rectangle $R$, and set $f = 0$ at the points of $R$ outside $D$. The added points contribute nothing, so $\\iint_D f\\, dA = \\iint_R f\\, dA$. On the rectangle, Fubini applies (it still holds when $f$ jumps only along curves). For each $x$, the inside integral over all of $R$'s $y$-range is $0$ except between $g_1(x)$ and $g_2(x)$, which leaves exactly $\\int_{g_1(x)}^{g_2(x)} f\\, dy$.
:::

:::check
Which sets up $\\displaystyle\\iint_D f\\, dA$ with $dy$ inside, for the region $D$ between the parabola $y = x^2$ and the line $y = 4$?
- [x] $\\displaystyle\\int_{-2}^{2} \\int_{x^2}^{4} f\\, dy\\, dx$
- [ ] $\\displaystyle\\int_{-2}^{2} \\int_{4}^{x^2} f\\, dy\\, dx$
  why: The inside limits go from bottom to top. A vertical line enters at the parabola $y = x^2$ and leaves at $y = 4$. Reversed limits give the negative.
- [ ] $\\displaystyle\\int_{0}^{4} \\int_{x^2}^{4} f\\, dy\\, dx$
  why: The outside limits are $x$-values. The parabola meets $y = 4$ where $x^2 = 4$, at $x = \\pm 2$. The interval $0$ to $4$ is the region's $y$-range.
- [ ] $\\displaystyle\\int_{x^2}^{4} \\int_{-2}^{2} f\\, dx\\, dy$
  why: The outside limits must be numbers. These contain $x$, so the result would still depend on $x$.
???
**From the equations:** the edges meet where $x^2 = 4$, at $x = \\pm 2$, so $x$ runs from $-2$ to $2$. Test $x = 0$: the parabola gives $0$ and the line gives $4$, so the parabola is the bottom. That's $-2 \\le x \\le 2$, $x^2 \\le y \\le 4$.

**In the picture:** each vertical line between $x = -2$ and $x = 2$ enters $D$ at $y = x^2$ and leaves at $y = 4$.
:::

:::idea Switching the order
**When to switch.** Sometimes the inside integral can't be done. For example, $\\int e^{y^2}\\, dy$ has no formula built from the usual functions. If the given order needs it, describe the same region with the other order.

**Why you can't just swap the integral signs.** The inside limits depend on the outside variable. Swapping $\\int_0^1 \\int_x^1 \\cdots\\, dy\\, dx$ into $\\int_x^1 \\int_0^1 \\cdots\\, dx\\, dy$ would put $x$ in the outside limits, so the answer would still depend on $x$. But the integral over a fixed region is a single number.

**Switching with the inequalities alone, without drawing:**
1. **Write the given limits as inequalities**, for example $0 \\le x \\le 1$ and $x \\le y \\le 1$.
2. **Find the new outside variable's full range.** Combine the inequalities to find its smallest and largest possible values. Those numbers are the new outside limits.
3. **Fix the new outside variable and collect every inequality on the other one,** solving each for it. The **largest** of the lower bounds is the new bottom limit, and the **smallest** of the upper bounds is the new top limit.
4. **If which bound is largest (or smallest) changes partway through the range,** split the integral at the value where it changes.
>>> Step 4: what to do when the deciding bound changes
Here the method runs on the triangle from the first part, $\\displaystyle\\int_0^1 \\int_y^{2-y} f\\, dx\\, dy$, switching it to $dy$ inside without drawing.

1. **The rules a point must follow.** The outside integral says $0 \\le y \\le 1$; the inside one says $y \\le x \\le 2 - y$. A point is in the region when it follows all of them.
2. **Every possible $x$.** The rules say $x \\ge y$ and $y \\ge 0$, so $x$ can't be negative; and $x \\le 2 - y$, which is at most $2$ (when $y = 0$). Both ends happen: on the line $y = 0$, $x$ runs from $0$ to $2$. So $0 \\le x \\le 2$.
3. **Each rule as a rule about $y$.** For one fixed $x$:
   - $y \\ge 0$ and $y \\le 1$ already are.
   - $y \\le x$ is the left part of "$y \\le x \\le 2 - y$".
   - $x \\le 2 - y$: add $y$ to both sides ($x + y \\le 2$), then subtract $x$ ($y \\le 2 - x$).

   So $y$ must be at least $0$, and at most each of $1$, $x$, and $2 - x$.
4. **Which upper limit actually stops $y$?** $y$ has to obey all three at once, so the smallest one is the one that matters. At $x = 0.5$, the three are $1$, $0.5$, $1.5$: the smallest is $0.5$, which is $x$. At $x = 1.5$, they're $1$, $1.5$, $0.5$: the smallest is $0.5$, which is $2 - x$. The two formulas trade places where they're equal, $x = 2 - x$, at $x = 1$. So split there:
$$\\int_0^1 \\int_0^{x} f\\, dy\\, dx + \\int_1^2 \\int_0^{2 - x} f\\, dy\\, dx.$$

That's the same two-piece answer the picture gave, found without drawing. (The upper limit $1$ is never the smallest, except at $x = 1$ where all three equal $1$, so it never needs its own piece.)
<<<

**Switching with a picture:** draw the region from the limits, then slice it the other way, as in the first part. The two methods give the same limits, so you can use one to check the other.

**Example.** $\\displaystyle\\int_0^1 \\int_x^1 e^{y^2}\\, dy\\, dx$. The inside integral is stuck, so switch to $dx$ inside.
1. **Inequalities:** $0 \\le x \\le 1$ and $x \\le y \\le 1$.
2. **Range of $y$:** $y \\ge x$ and $x \\ge 0$, so $y \\ge 0$. Also $y \\le 1$. So $0 \\le y \\le 1$.
3. **Bounds on $x$ for a fixed $y$:** the inequalities that mention $x$ are $x \\ge 0$, $x \\le 1$, and $x \\le y$. The only lower bound is $0$. Of the upper bounds $1$ and $y$, the smaller is $y$ (since $y \\le 1$). So $0 \\le x \\le y$.
4. **No split needed:** $y$ is the smaller upper bound for every $y$ from $0$ to $1$.
>>> Each step of the switch, worked out
**What switching means.** The given integral adds up the region one vertical line at a time (on each, $x$ is one number and $y$ changes). Switching means adding it up one horizontal line at a time instead (on each, $y$ is one number and $x$ changes). The region stays the same; only the question changes, from "for this $x$, which $y$-values?" to "for this $y$, which $x$-values?"

**Step 1: the rules.** The outside integral $\\int_0^1 \\cdots\\, dx$ says $0 \\le x \\le 1$. The inside integral $\\int_x^1 \\cdots\\, dy$ says that for each such $x$, $y$ runs from $x$ to $1$: $x \\le y \\le 1$. A point $(x, y)$ is in the region exactly when all of these are true. For example, $(0.3, 0.7)$ is: $0.3$ is between $0$ and $1$, and $0.7$ is between $0.3$ and $1$.

**Step 2: the smallest and largest $y$ (the new outside limits).**
- *Smallest:* $y$ is at least $x$, and $x$ is at least $0$, so $y$ is at least $0$. And $y = 0$ really happens, at the point $(0, 0)$.
- *Largest:* $y \\le 1$ is one of the rules, and $y = 1$ happens (at any $x$ from $0$ to $1$).
- *Nothing in between is skipped:* on the vertical line $x = 0$, every $y$ from $0$ to $1$ is allowed.

So the new outside limits are $0$ and $1$.

**Step 3: for one $y$, the smallest and largest $x$ (the new inside limits).** Fix $y = 0.7$. The rules about $x$ are: $x \\ge 0$, $x \\le 1$, and $x \\le 0.7$ (from $x \\le y$). Any $x$ that's at most $0.7$ is automatically at most $1$, so the rule $x \\le 1$ adds nothing. The allowed $x$ are $0 \\le x \\le 0.7$, which is $0 \\le x \\le y$. The same thing happens for every $y$ between $0$ and $1$, because $y$ is never bigger than $1$.

**Check one point both ways.** $(0.3, 0.7)$: in the original rules, $x = 0.3$ is in $[0, 1]$ and $y = 0.7$ is in $[0.3, 1]$ ✓. In the new ones, $y = 0.7$ is in $[0, 1]$ and $x = 0.3$ is in $[0, 0.7]$ ✓.
<<<

$$\\int_0^1 \\int_0^y e^{y^2}\\, dx\\, dy = \\int_0^1 y\\, e^{y^2}\\, dy = \\Big[\\tfrac12 e^{y^2}\\Big]_0^1 = \\frac{e - 1}{2}.$$
>>> Each step of the integral, worked out
**The inside integral.** Now $x$ is inside: you add along one horizontal line, where $y$ is a single number. So $e^{y^2}$ is a single number too (for example, at $y = 0.5$ it's $e^{0.25} \\approx 1.28$ at every point of that line). Adding a constant $c$ along a line of length $L$ gives $c \\times L$, and this line runs from $x = 0$ to $x = y$, so its length is $y$:
$$\\int_0^y e^{y^2}\\, dx = e^{y^2} \\times y.$$

**The outside integral, by substitution.** $\\int_0^1 y\\, e^{y^2}\\, dy$. Let $u = y^2$. Then $\\tfrac{du}{dy} = 2y$, so $y\\, dy = \\tfrac12\\, du$. The limits change too: $y = 0$ gives $u = 0$, and $y = 1$ gives $u = 1$:
$$\\int_0^1 y\\, e^{y^2}\\, dy = \\int_0^1 \\tfrac12 e^{u}\\, du = \\tfrac12\\Big[e^u\\Big]_0^1 = \\tfrac12(e - 1).$$

**Why switching made it work.** The factor $y$ came from the length of each horizontal line, and that $y$ is exactly what the substitution $u = y^2$ needs. In the original order, the inside integral was $\\int e^{y^2}\\, dy$, with no extra $y$, and no formula from the usual functions has derivative $e^{y^2}$.

**A check with numbers.** Adding up the original order on a computer, one vertical line at a time, gives about $0.859141$, and $\\tfrac{e - 1}{2} \\approx 0.859141$ ✓.
<<<

**The picture agrees.** The inequalities $0 \\le x \\le 1$, $x \\le y \\le 1$ describe the triangle above the line $y = x$ and below $y = 1$, with corners $(0, 0)$, $(1, 1)$, and $(0, 1)$. A horizontal line at height $y$ enters it at $x = 0$ and leaves at the line $x = y$.
:::

:::figure switch-order-triangle
The triangle described by $\\int_0^1 \\int_x^1 \\cdots\\, dy\\, dx$. The given order uses vertical slices: at $x = 0.35$, $y$ runs from the line $y = x$ up to $1$. The switched order uses horizontal slices: at $y = 0.7$, $x$ runs from $0$ to the line $x = y$.
:::

:::check
Switch the order: $\\displaystyle\\int_0^4 \\int_{\\sqrt y}^{2} f(x, y)\\, dx\\, dy = \\;?$
- [x] $\\displaystyle\\int_0^2 \\int_0^{x^2} f\\, dy\\, dx$
- [ ] $\\displaystyle\\int_0^2 \\int_{x^2}^{4} f\\, dy\\, dx$
  why: That's the region above the parabola. Here $x$ runs from $\\sqrt y$ to $2$, so the points are to the right of the parabola $x = \\sqrt y$, which puts them below it: $0 \\le y \\le x^2$.
- [ ] $\\displaystyle\\int_{\\sqrt y}^{2} \\int_0^4 f\\, dy\\, dx$
  why: Just swapping the integral signs leaves $y$ in the outside limits. Draw the region and read off new limits instead.
- [ ] $\\displaystyle\\int_0^4 \\int_0^{x^2} f\\, dy\\, dx$
  why: The region's $x$-values run from $0$ to $2$, not $0$ to $4$.
???
**With the inequalities:**
1. The limits say $0 \\le y \\le 4$ and $\\sqrt y \\le x \\le 2$.
2. **Range of $x$:** $x \\ge \\sqrt y \\ge 0$ and $x \\le 2$, so $0 \\le x \\le 2$ (at $y = 0$, every $x$ from $0$ to $2$ is allowed).
3. **Bounds on $y$ for a fixed $x$:** $y \\ge 0$, $y \\le 4$, and $\\sqrt y \\le x$. Both sides of $\\sqrt y \\le x$ are $\\ge 0$, so squaring keeps it true: $y \\le x^2$. The upper bounds are $4$ and $x^2$, and since $x \\le 2$, $x^2 \\le 4$ is the smaller. So $0 \\le y \\le x^2$.

**In the picture:** points to the right of the curve $x = \\sqrt y$ (the parabola $y = x^2$) and left of $x = 2$. A vertical line enters at $y = 0$ and leaves at $y = x^2$.

**Check with $f = 1$:** $\\int_0^4 (2 - \\sqrt y)\\, dy = 8 - \\tfrac{16}{3} = \\tfrac83$ and $\\int_0^2 x^2\\, dx = \\tfrac83$. ✓
:::

:::idea Area, volume, and average value over a region
- **Area:** $A(D) = \\iint_D 1\\, dA$. With vertical slices, the inside integral is $\\int_{g_1(x)}^{g_2(x)} 1\\, dy = g_2(x) - g_1(x)$, the height of the slice. So $A(D) = \\int_a^b \\big(g_2(x) - g_1(x)\\big)\\, dx$, which is Calc I's area between curves.
- **Volume between two surfaces:** if a solid lies above $D$ between a bottom surface $z = b(x, y)$ and a top surface $z = t(x, y)$, its volume is $\\iint_D (t - b)\\, dA$. Each box now reaches from the bottom surface to the top one, so its height is $t - b$.
- **Average value:** $f_{\\text{avg}} = \\dfrac{1}{A(D)} \\iint_D f\\, dA$, for the same reason as on a rectangle.
>>> Why each of the three formulas works
**Area.** Picture a box of height $1$ standing on a small piece of the region. Its volume is $1 \\times (\\text{area of the piece})$, the same number as the piece's area. Adding all the boxes adds all the pieces' areas, which is the area of the region. So $\\iint_D 1\\, dA$ is a volume whose number equals the region's area. For example, over a $2 \\times 3$ rectangle it's a $2 \\times 3 \\times 1$ box: volume $6$, area $6$.

**Volume between two surfaces.** Over a small piece at $(x, y)$, the solid runs from the bottom surface at height $b(x, y)$ up to the top at $t(x, y)$. That's a thin column of height $t - b$ (for example, from height $1$ to height $4$ is $3$ tall) standing on a base of area $\\Delta A$, so its volume is about $(t - b)\\,\\Delta A$. Adding the columns gives $\\iint_D (t - b)\\, dA$. When the bottom is the floor ($b = 0$), it's just the volume under the top, as on Oct 16.

**Average value.** For numbers, the average is the total divided by how many. For a function on a region, every small piece should count in proportion to its size, so the "total" is $\\iint_D f\\, dA$ (each value times its piece's area) and "how many" becomes the total area. Check with a constant: if $f = 5$ everywhere, $\\iint_D 5\\, dA = 5 \\times \\text{area}$, and dividing by the area gives $5$, as the average of a constant should be.
<<<

**Example: a tetrahedron.** Find the volume of the solid in the first octant ($x, y, z \\ge 0$) under the plane $x + 2y + z = 4$.
1. **Top and bottom.** The top is $z = 4 - x - 2y$, and the bottom is $z = 0$.
2. **The base $D$.** The solid stands over the part of the first quadrant where the top is above $0$: $x + 2y \\le 4$. That's the triangle with corners $(0, 0)$, $(4, 0)$, and $(0, 2)$.
3. **Limits.** For $0 \\le x \\le 4$, a vertical line enters at $y = 0$ and leaves at the edge $x + 2y = 4$, which is $y = \\tfrac{4 - x}{2}$.
4. **Integrate.** The inside integral is $\\displaystyle\\int_0^{(4-x)/2} (4 - x - 2y)\\, dy = \\tfrac{(4-x)^2}{4}$. Then $\\displaystyle\\int_0^4 \\tfrac{(4-x)^2}{4}\\, dx = \\tfrac{16}{3}$.
>>> Each step of the tetrahedron, worked out
**Step 1: the top and bottom.** The plane is $x + 2y + z = 4$. To get its height above each point of the floor, solve for $z$: subtract $x$ and $2y$ from both sides, $z = 4 - x - 2y$. For example, above $(1, 1)$ the plane is at height $4 - 1 - 2 = 1$. "In the first octant" means $x$, $y$, and $z$ are all $0$ or more, so the bottom is the floor, $z = 0$.

**Step 2: the base, from the equations.** Above a point of the floor, the solid exists only if the top is at or above the floor: $4 - x - 2y \\ge 0$, which is $x + 2y \\le 4$. Above $(4, 1)$, for example, the top would be at $4 - 4 - 2 = -2$, below the floor, so there's no solid there. Together with $x \\ge 0$ and $y \\ge 0$, these three rules describe the base, a triangle. Its corners are where two edges meet:
- $x = 0$ and $y = 0$: the point $(0, 0)$.
- $y = 0$ and $x + 2y = 4$: then $x = 4$, so $(4, 0)$.
- $x = 0$ and $x + 2y = 4$: then $2y = 4$, so $(0, 2)$.

**Step 3: the limits, from the rules.** On the vertical line at one $x$, only $y$ changes, so rewrite $x + 2y \\le 4$ as a rule about $y$: subtract $x$ ($2y \\le 4 - x$), then divide by $2$ ($y \\le \\tfrac{4 - x}{2}$). With $y \\ge 0$, the line runs from $y = 0$ to $y = \\tfrac{4 - x}{2}$. For that to allow any $y$, $\\tfrac{4 - x}{2}$ can't be negative, so $x \\le 4$; with $x \\ge 0$, $x$ runs from $0$ to $4$. Check the top limit at the ends: at $x = 0$ it's $2$ and at $x = 4$ it's $0$, matching the corners $(0, 2)$ and $(4, 0)$.

**Step 4: the inside integral.** Along the line at one $x$, $x$ is a single number, so $4 - x$ is a single number too; call it $c$. The integral becomes $\\int_0^{c/2} (c - 2y)\\, dy = \\Big[cy - y^2\\Big]_0^{c/2} = c \\cdot \\tfrac c2 - \\tfrac{c^2}{4} = \\tfrac{c^2}{4}$. Putting $c = 4 - x$ back: $\\tfrac{(4 - x)^2}{4}$. (Check at $x = 0$: $c = 4$, and $\\int_0^2 (4 - 2y)\\, dy = 8 - 4 = 4 = \\tfrac{16}{4}$ ✓.)

**Step 5: the outside integral.** $\\int_0^4 \\tfrac{(4 - x)^2}{4}\\, dx$. Let $u = 4 - x$, so $du = -dx$; $x = 0$ gives $u = 4$ and $x = 4$ gives $u = 0$. The minus sign flips the limits back: $\\int_0^4 \\tfrac{u^2}{4}\\, du = \\tfrac14 \\cdot \\tfrac{4^3}{3} = \\tfrac{16}{3}$.
<<<

**Check.** A pyramid's volume is $\\tfrac13 \\times$ (base area) $\\times$ (height). The base triangle has area $\\tfrac12 \\cdot 4 \\cdot 2 = 4$ and the height is $4$, so $\\tfrac13 \\cdot 4 \\cdot 4 = \\tfrac{16}{3}$. ✓
:::

:::check
Use a double integral to find the area of the region between $y = x^2$ and $y = 2 - x^2$.
answer: 8/3
???
The curves meet where $x^2 = 2 - x^2$, at $x = \\pm 1$. In between, $2 - x^2$ is on top (at $x = 0$, $2 > 0$). So
$$A = \\int_{-1}^{1} \\int_{x^2}^{2 - x^2} 1\\, dy\\, dx = \\int_{-1}^{1} (2 - 2x^2)\\, dx = 4 - \\tfrac43 = \\tfrac83.$$
:::

:::idea Disks: switching to polar coordinates
**Why a disk is awkward in $x$ and $y$.** For the disk $x^2 + y^2 \\le 4$, a vertical line at $x$ enters at $y = -\\sqrt{4 - x^2}$ and leaves at $y = \\sqrt{4 - x^2}$, so
$$\\iint_D f\\, dA = \\int_{-2}^{2} \\int_{-\\sqrt{4 - x^2}}^{\\sqrt{4 - x^2}} f\\, dy\\, dx.$$
That's correct, but the square roots usually make the integrals hard.
>>> Where those limits come from, using the equation
**What the limits must say.** With $dy$ inside, the integral adds up the disk one vertical line at a time. On the line at one $x$, only $y$ changes, so the inside limits must say which $y$-values are in the disk on that line.

**Solve the disk's rule for $y$.** The disk is $x^2 + y^2 \\le 4$. With $x$ fixed, subtract $x^2$: $y^2 \\le 4 - x^2$. A number's square is at most $4 - x^2$ exactly when the number is between $-\\sqrt{4 - x^2}$ and $\\sqrt{4 - x^2}$. For example, at $x = 0$: $y^2 \\le 4$, so $-2 \\le y \\le 2$. At $x = 1$: $y^2 \\le 3$, so $y$ is between about $-1.73$ and $1.73$. Those are the inside limits.

**The outside limits.** For any $y$ to fit, $4 - x^2$ can't be negative, so $x^2 \\le 4$, which means $-2 \\le x \\le 2$. At $x = 3$, for example, you'd need $y^2 \\le -5$, which no number satisfies: the line $x = 3$ misses the disk.
<<<

**[[polar coordinates|Polar coordinates]].** Describe a point by its distance $r$ from the origin and its angle $\\theta$ from the positive $x$-axis: $x = r\\cos\\theta$ and $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$. Then the disk is just $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$, with constant limits like a rectangle. Other shapes with constant limits: the ring $1 \\le r \\le 2$, and the quarter disk $0 \\le r \\le 2$, $0 \\le \\theta \\le \\tfrac\\pi2$ in the first quadrant.
>>> Why $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $x^2 + y^2 = r^2$
**What $r$ and $\\theta$ are.** $r$ is the point's distance from the origin, and $\\theta$ is the angle from the positive $x$-axis, measured counterclockwise. For example, $(0, 3)$ has $r = 3$ and $\\theta = \\tfrac\\pi2$ (straight up).

**Getting $x$ and $y$ back.** Draw the segment from the origin to the point, and drop a vertical segment from the point to the $x$-axis. That makes a right triangle: the long side (hypotenuse) is $r$, the bottom side is $x$, and the upright side is $y$, with the angle $\\theta$ at the origin. In a right triangle, the side next to the angle is (long side) $\\times \\cos$(angle), and the side across from it is (long side) $\\times \\sin$(angle). So $x = r\\cos\\theta$ and $y = r\\sin\\theta$. Check with $r = 2$, $\\theta = \\tfrac\\pi3$: $x = 2 \\cdot \\tfrac12 = 1$ and $y = 2 \\cdot \\tfrac{\\sqrt3}{2} = \\sqrt3$, and the point $(1, \\sqrt3)$ is indeed $\\sqrt{1 + 3} = 2$ from the origin ✓.

**$x^2 + y^2 = r^2$.** $x^2 + y^2 = r^2\\cos^2\\theta + r^2\\sin^2\\theta = r^2(\\cos^2\\theta + \\sin^2\\theta) = r^2$, because $\\cos^2\\theta + \\sin^2\\theta = 1$ for every angle. That's the Pythagorean theorem for the triangle above.

**Why the disk gets number limits.** $x^2 + y^2 \\le 4$ becomes $r^2 \\le 4$, which is $r \\le 2$ (distances aren't negative). "All the way around" is $0 \\le \\theta \\le 2\\pi$. The square roots are gone because the disk's edge is "distance from the origin $= 2$", and $r$ *is* the distance from the origin.

**The other shapes.** $1 \\le x^2 + y^2 \\le 4$ becomes $1 \\le r^2 \\le 4$, so $1 \\le r \\le 2$: a ring. "First quadrant" means $x \\ge 0$ and $y \\ge 0$: the angles from the positive $x$-axis ($0$) to the positive $y$-axis ($\\tfrac\\pi2$).
<<<

**Why $dA$ becomes $r\\, dr\\, d\\theta$.** Cut $D$ with circles (fixed $r$) and rays from the origin (fixed $\\theta$). One piece runs from radius $r$ to $r + \\Delta r$ and from angle $\\theta$ to $\\theta + \\Delta\\theta$. It's nearly a rectangle. One side runs along a ray and has length $\\Delta r$. The other is an arc of the circle of radius $r$ through the angle $\\Delta\\theta$, with length $r\\, \\Delta\\theta$ (arc length is radius times angle, in radians). So the piece has area about $r\\, \\Delta r\\, \\Delta\\theta$. Pieces farther out are wider, and the factor $r$ accounts for exactly that. Adding up boxes over these pieces gives
$$\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_a^b f(r\\cos\\theta,\\, r\\sin\\theta)\\; r\\, dr\\, d\\theta.$$
>>> Why the piece's area is $r\\,\\Delta r\\,\\Delta\\theta$, exactly worked out
**Arc length is radius times angle.** A full circle of radius $r$ is $2\\pi r$ long, and a full turn is $2\\pi$ (radians). An angle $\\Delta\\theta$ is the fraction $\\tfrac{\\Delta\\theta}{2\\pi}$ of a full turn, so the part of the circle it covers is $\\tfrac{\\Delta\\theta}{2\\pi} \\times 2\\pi r = r\\,\\Delta\\theta$ long. For example, at $r = 3$ an angle of $0.1$ covers $0.3$ of the circle, but at $r = 1$ only $0.1$.

**The exact area of a polar piece.** A pizza-slice shape (sector) of radius $R$ and angle $\\Delta\\theta$ is the fraction $\\tfrac{\\Delta\\theta}{2\\pi}$ of a whole disk of area $\\pi R^2$, so its area is $\\tfrac12 R^2\\,\\Delta\\theta$. The polar piece is the slice of radius $r + \\Delta r$ with the slice of radius $r$ cut out of it:
$$\\tfrac12(r + \\Delta r)^2\\Delta\\theta - \\tfrac12 r^2\\,\\Delta\\theta = \\tfrac12\\big(2r\\,\\Delta r + (\\Delta r)^2\\big)\\Delta\\theta = \\Big(r + \\tfrac{\\Delta r}{2}\\Big)\\Delta r\\,\\Delta\\theta.$$
That's (the radius halfway across the piece) $\\times\\,\\Delta r \\times \\Delta\\theta$. So $r\\,\\Delta r\\,\\Delta\\theta$ is off by only $\\tfrac12(\\Delta r)^2\\,\\Delta\\theta$. For a piece with $r = 1$, $\\Delta r = 0.1$, $\\Delta\\theta = 0.1$, that's $0.0005$ out of $0.0105$; with smaller pieces it becomes a smaller and smaller fraction, and it disappears in the integral.

**Checking the factor $r$.** The area of a disk of radius $a$ is $\\int_0^{2\\pi}\\int_0^a r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{a^2}{2} = \\pi a^2$ ✓. Without the $r$, you'd get $\\int_0^{2\\pi}\\int_0^a dr\\, d\\theta = 2\\pi a$, which is the circle's length, not the disk's area.
<<<

**Example.** Over the disk of radius $2$:
$$\\iint_D (x^2 + y^2)\\, dA = \\int_0^{2\\pi} \\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = \\int_0^{2\\pi} \\Big[\\tfrac{r^4}{4}\\Big]_0^2\\, d\\theta = \\int_0^{2\\pi} 4\\, d\\theta = 8\\pi.$$
>>> Each step of the polar example, worked out
1. **Rewrite the function.** $x^2 + y^2$ is the squared distance from the origin, which is $r^2$.
2. **Multiply by the piece's size.** A polar piece has area about $r\\,\\Delta r\\,\\Delta\\theta$, so $dA = r\\, dr\\, d\\theta$, and the integrand becomes $r^2 \\times r = r^3$.
3. **Limits.** The disk $x^2 + y^2 \\le 4$ is "distance at most $2$": $0 \\le r \\le 2$, all the way around: $0 \\le \\theta \\le 2\\pi$.
4. **Inside integral, along one ray (one angle, $r$ changing).** $\\int_0^2 r^3\\, dr = \\Big[\\tfrac{r^4}{4}\\Big]_0^2 = \\tfrac{16}{4} - 0 = 4$.
5. **Outside integral, adding the rays.** Every ray gives the same $4$, so adding over angles from $0$ to $2\\pi$ multiplies by $2\\pi$: $4 \\times 2\\pi = 8\\pi$.

**Is $8\\pi$ reasonable?** The disk's area is $4\\pi$, so the average value of $x^2 + y^2$ over it is $\\tfrac{8\\pi}{4\\pi} = 2$. That's between $0$ (at the center) and $4$ (on the edge) ✓. It's more than the $\\tfrac43$ you'd get by averaging $r^2$ as if every distance from $0$ to $2$ had the same amount of disk, because there's more disk far from the center (the circle at distance $r$ is $2\\pi r$ long). That's the factor $r$ at work.
<<<

**Next lecture (Oct 23)** covers polar regions whose edges aren't circles, and applications of double integrals.
:::

:::figure polar-piece
One piece of a polar grid: $1.2 \\le r \\le 1.6$ and $0.45 \\le \\theta \\le 0.85$. The dashed rays and circles show where it comes from. Its sides are $\\Delta r$ along a ray and about $r\\, \\Delta\\theta$ along a circle, so its area is about $r\\, \\Delta r\\, \\Delta\\theta$.
:::

:::theorem Double integrals in polar coordinates
If $D$ is described by $\\alpha \\le \\theta \\le \\beta$ and $a \\le r \\le b$ (with $0 \\le a$ and $0 \\le \\beta - \\alpha \\le 2\\pi$), and $f$ is continuous on $D$, then
$$\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_a^b f(r\\cos\\theta,\\, r\\sin\\theta)\\; r\\, dr\\, d\\theta.$$

**Why:** cut $D$ into polar pieces. A piece with middle radius $\\bar r$ has area exactly $\\bar r\\, \\Delta r\\, \\Delta\\theta$, so adding up boxes $f \\times (\\text{area})$ over the pieces gives sums of $f(\\bar r\\cos\\theta, \\bar r\\sin\\theta)\\, \\bar r\\, \\Delta r\\, \\Delta\\theta$. Those are Riemann sums for the integral of $f(r\\cos\\theta, r\\sin\\theta)\\, r$ over the rectangle $a \\le r \\le b$, $\\alpha \\le \\theta \\le \\beta$, so they approach the right-hand side.
:::

:::check
Which equals $\\displaystyle\\iint_D f\\, dA$ over the disk $x^2 + y^2 \\le 9$?
- [x] $\\displaystyle\\int_0^{2\\pi} \\int_0^3 f(r\\cos\\theta, r\\sin\\theta)\\, r\\, dr\\, d\\theta$
- [ ] $\\displaystyle\\int_0^{2\\pi} \\int_0^3 f(r\\cos\\theta, r\\sin\\theta)\\, dr\\, d\\theta$
  why: It's missing the factor $r$. A polar piece has area about $r\\, \\Delta r\\, \\Delta\\theta$, not $\\Delta r\\, \\Delta\\theta$.
- [ ] $\\displaystyle\\int_0^{2\\pi} \\int_0^9 f(r\\cos\\theta, r\\sin\\theta)\\, r\\, dr\\, d\\theta$
  why: The radius is $3$. The disk is $x^2 + y^2 \\le 9$, which means $r^2 \\le 9$, so $r \\le 3$.
- [ ] $\\displaystyle\\int_0^{\\pi} \\int_0^3 f(r\\cos\\theta, r\\sin\\theta)\\, r\\, dr\\, d\\theta$
  why: $\\theta$ from $0$ to $\\pi$ covers only the upper half of the disk.
???
$x^2 + y^2 \\le 9$ means $r \\le 3$, all the way around ($0 \\le \\theta \\le 2\\pi$), and $dA = r\\, dr\\, d\\theta$.
:::

:::summary Summary
- **Limits from the equations:** find where the edges meet (outside limits), test one point to see which edge is on top (or on the left), and write the region as inequalities.
- **Vertical slices ($dy$ inside):** $\\displaystyle\\iint_D f\\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f\\, dy\\, dx$, bottom curve to top curve. **Horizontal slices ($dx$ inside):** left curve to right curve, each solved for $x$.
- The outside limits are numbers. The inside limits may use only the outside variable.
- **Switching the order without a picture:** write the limits as inequalities, find the new outside variable's smallest and largest values, then fix it and take the largest lower bound and smallest upper bound on the other variable. Split where the deciding bound changes. Never just swap the integral signs.
- Area is $\\iint_D 1\\, dA$, volume between surfaces is $\\iint_D (\\text{top} - \\text{bottom})\\, dA$, and the average is $\\frac{1}{A(D)}\\iint_D f\\, dA$.
- **Polar:** $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $dA = r\\, dr\\, d\\theta$. Disks, rings, and sectors get constant limits.

**Common mistakes:**
- Bottom and top limits reversed, or the region's $y$-range used as the outside $x$-limits.
- Swapping the integral signs without redrawing the region or redoing the inequalities.
- Dividing $x^2 = x$ by $x$ and losing the meeting point $x = 0$.
- Taking a looser bound when switching: with $x \\le 1$ and $x \\le y$, the limit is the smaller one, $y$.
- Forgetting the $r$ in $r\\, dr\\, d\\theta$.
:::
`;export{e as default};