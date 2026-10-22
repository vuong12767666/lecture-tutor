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

**Reading the limits off a picture:**
1. Sketch $D$ and find where its edges meet.
2. Draw a vertical line through $D$. The curve where it enters is the bottom limit, and the curve where it leaves is the top limit, each solved for $y$.
3. The outside limits are the smallest and largest $x$ in $D$.
4. Check: the outside limits are numbers, and the inside limits use only the outside variable.

**Example.** The region between $y = x^2$ and $y = x$. The curves meet where $x^2 = x$, at $x = 0$ and $x = 1$. In between, $x > x^2$ (for example $0.5 > 0.25$), so $y = x$ is on top.
- **Vertical lines** enter at $y = x^2$ and leave at $y = x$, for $0 \\le x \\le 1$: $\\displaystyle\\int_0^1 \\int_{x^2}^{x} f\\, dy\\, dx$.
- **Horizontal lines:** first solve each edge for $x$. $y = x$ gives $x = y$, and $y = x^2$ gives $x = \\sqrt y$. A horizontal line enters at $x = y$ and leaves at $x = \\sqrt y$, for $0 \\le y \\le 1$: $\\displaystyle\\int_0^1 \\int_{y}^{\\sqrt y} f\\, dx\\, dy$.
+++
**A check with numbers.** With $f = 1$, both orders give the area of $D$. Vertically: $\\int_0^1 (x - x^2)\\, dx = \\tfrac12 - \\tfrac13 = \\tfrac16$. Horizontally: $\\int_0^1 (\\sqrt y - y)\\, dy = \\tfrac23 - \\tfrac12 = \\tfrac16$. ✓

**When one description needs two pieces.** Take the triangle with corners $(0, 0)$, $(2, 0)$, $(1, 1)$. Vertically, the top edge changes formula at $x = 1$: it's $y = x$ for $0 \\le x \\le 1$ and $y = 2 - x$ for $1 \\le x \\le 2$. So $dy$ first takes two integrals, one for each piece, added together (Oct 16: splitting the region). Horizontally, every line enters at $x = y$ and leaves at $x = 2 - y$, for $0 \\le y \\le 1$, so $dx$ first takes one: $\\int_0^1 \\int_y^{2-y} f\\, dx\\, dy$. With $f = 1$ that's $\\int_0^1 (2 - 2y)\\, dy = 1$, matching $\\tfrac12 \\cdot 2 \\cdot 1$ for the triangle.
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
The parabola meets $y = 4$ at $x = \\pm 2$, so $x$ runs from $-2$ to $2$. Each vertical line enters $D$ at $y = x^2$ and leaves at $y = 4$.
:::

:::idea Switching the order
**When to switch.** Sometimes the inside integral can't be done. For example, $\\int e^{y^2}\\, dy$ has no formula built from the usual functions. If the given order needs it, describe the same region with the other kind of slice.

**How to switch.** You can't just swap the two integral signs, because the inside limits depend on the outside variable. Instead:
1. Draw the region from the given limits.
2. Slice it the other way and read off the new limits, as in the first part.

**Example.** $\\displaystyle\\int_0^1 \\int_x^1 e^{y^2}\\, dy\\, dx$.
1. The limits say $0 \\le x \\le 1$ and, for each $x$, $x \\le y \\le 1$. That's the triangle above the line $y = x$ and below $y = 1$, with corners $(0, 0)$, $(1, 1)$, and $(0, 1)$.
2. Horizontal lines: for $0 \\le y \\le 1$, a horizontal line enters the triangle at $x = 0$ and leaves at the line $x = y$.
$$\\int_0^1 \\int_0^y e^{y^2}\\, dx\\, dy = \\int_0^1 y\\, e^{y^2}\\, dy = \\Big[\\tfrac12 e^{y^2}\\Big]_0^1 = \\frac{e - 1}{2}.$$
The inside integral is now easy, because $e^{y^2}$ doesn't change with $x$: integrating it from $0$ to $y$ just multiplies it by $y$. That factor $y$ is what makes the outside integral work by substitution ($u = y^2$, $du = 2y\\, dy$).

**Why the answer doesn't change.** Both orders add up the same boxes over the same region, once in columns and once in rows.

**Why swapping the integral signs fails.** It would give $\\int_x^1 \\int_0^1 e^{y^2}\\, dx\\, dy$. The outside limits contain $x$, so the result would still depend on $x$. But the integral over a fixed region is a single number.
+++
**A check with numbers.** Adding up the original order numerically, column by column, gives about $0.859141$, and $\\tfrac{e - 1}{2} \\approx 0.859141$. ✓

**Another one.** $\\displaystyle\\int_0^1 \\int_{\\sqrt x}^1 \\sqrt{y^3 + 1}\\, dy\\, dx$ is stuck on the inside. The limits say $0 \\le x \\le 1$, $\\sqrt x \\le y \\le 1$: above the curve $y = \\sqrt x$, which is $x = y^2$. Horizontally, for $0 \\le y \\le 1$, a line enters at $x = 0$ and leaves at $x = y^2$:
$$\\int_0^1 \\int_0^{y^2} \\sqrt{y^3 + 1}\\, dx\\, dy = \\int_0^1 y^2 \\sqrt{y^3 + 1}\\, dy = \\Big[\\tfrac29 (y^3 + 1)^{3/2}\\Big]_0^1 = \\tfrac29\\big(2\\sqrt2 - 1\\big) \\approx 0.406.$$
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
The limits say $0 \\le y \\le 4$ and $\\sqrt y \\le x \\le 2$: points to the right of the curve $x = \\sqrt y$ (the parabola $y = x^2$) and left of $x = 2$. For $0 \\le x \\le 2$, a vertical line enters at $y = 0$ and leaves at $y = x^2$. Check with $f = 1$: $\\int_0^4 (2 - \\sqrt y)\\, dy = 8 - \\tfrac{16}{3} = \\tfrac83$ and $\\int_0^2 x^2\\, dx = \\tfrac83$. ✓
:::

:::idea Area, volume, and average value over a region
- **Area:** $A(D) = \\iint_D 1\\, dA$. With vertical slices, the inside integral is $\\int_{g_1(x)}^{g_2(x)} 1\\, dy = g_2(x) - g_1(x)$, the height of the slice. So $A(D) = \\int_a^b \\big(g_2(x) - g_1(x)\\big)\\, dx$, which is Calc I's area between curves.
- **Volume between two surfaces:** if a solid lies above $D$ between a bottom surface $z = b(x, y)$ and a top surface $z = t(x, y)$, its volume is $\\iint_D (t - b)\\, dA$. Each box now reaches from the bottom surface to the top one, so its height is $t - b$.
- **Average value:** $f_{\\text{avg}} = \\dfrac{1}{A(D)} \\iint_D f\\, dA$, for the same reason as on a rectangle.

**Example: a tetrahedron.** Find the volume of the solid in the first octant ($x, y, z \\ge 0$) under the plane $x + 2y + z = 4$.
1. **Top and bottom.** The top is $z = 4 - x - 2y$, and the bottom is $z = 0$.
2. **The base $D$.** The solid stands over the part of the first quadrant where the top is above $0$: $x + 2y \\le 4$. That's the triangle with corners $(0, 0)$, $(4, 0)$, and $(0, 2)$.
3. **Limits.** For $0 \\le x \\le 4$, a vertical line enters at $y = 0$ and leaves at the edge $x + 2y = 4$, which is $y = \\tfrac{4 - x}{2}$.
4. **Integrate.** The inside integral is $\\displaystyle\\int_0^{(4-x)/2} (4 - x - 2y)\\, dy = \\Big[(4 - x)y - y^2\\Big]_0^{(4-x)/2} = \\tfrac{(4-x)^2}{2} - \\tfrac{(4-x)^2}{4} = \\tfrac{(4-x)^2}{4}$. Then $\\displaystyle\\int_0^4 \\tfrac{(4-x)^2}{4}\\, dx = \\tfrac14 \\cdot \\tfrac{64}{3} = \\tfrac{16}{3}$.

**Check.** A pyramid's volume is $\\tfrac13 \\times$ (base area) $\\times$ (height). The base triangle has area $\\tfrac12 \\cdot 4 \\cdot 2 = 4$ and the height is $4$, so $\\tfrac13 \\cdot 4 \\cdot 4 = \\tfrac{16}{3}$. ✓
+++
**An average value with a check.** The average of $y$ over the base triangle $D$ is $\\frac{1}{4}\\iint_D y\\, dA$. The inside integral is $\\int_0^{(4-x)/2} y\\, dy = \\tfrac{(4-x)^2}{8}$, and $\\int_0^4 \\tfrac{(4-x)^2}{8}\\, dx = \\tfrac83$. So the average height is $\\tfrac{8/3}{4} = \\tfrac23$. That matches a known fact: a triangle's balance point is the average of its corners, here $\\tfrac{0 + 0 + 2}{3} = \\tfrac23$.
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

**[[polar coordinates|Polar coordinates]].** Describe a point by its distance $r$ from the origin and its angle $\\theta$ from the positive $x$-axis: $x = r\\cos\\theta$ and $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$. Then the disk is just $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$, with constant limits like a rectangle. Other shapes with constant limits: the ring $1 \\le r \\le 2$, and the quarter disk $0 \\le r \\le 2$, $0 \\le \\theta \\le \\tfrac\\pi2$ in the first quadrant.

**Why $dA$ becomes $r\\, dr\\, d\\theta$.** Cut $D$ with circles (fixed $r$) and rays from the origin (fixed $\\theta$). One piece runs from radius $r$ to $r + \\Delta r$ and from angle $\\theta$ to $\\theta + \\Delta\\theta$. It's nearly a rectangle. One side runs along a ray and has length $\\Delta r$. The other is an arc of the circle of radius $r$ through the angle $\\Delta\\theta$, with length $r\\, \\Delta\\theta$ (arc length is radius times angle, in radians). So the piece has area about $r\\, \\Delta r\\, \\Delta\\theta$. Pieces farther out are wider, and the factor $r$ accounts for exactly that. Adding up boxes over these pieces gives
$$\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_a^b f(r\\cos\\theta,\\, r\\sin\\theta)\\; r\\, dr\\, d\\theta.$$

**Example.** Over the disk of radius $2$:
$$\\iint_D (x^2 + y^2)\\, dA = \\int_0^{2\\pi} \\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = \\int_0^{2\\pi} \\Big[\\tfrac{r^4}{4}\\Big]_0^2\\, d\\theta = \\int_0^{2\\pi} 4\\, d\\theta = 8\\pi.$$
+++
**The area of a polar piece, exactly.** A sector of radius $R$ and angle $\\Delta\\theta$ has area $\\tfrac12 R^2\\, \\Delta\\theta$. The piece is a sector of radius $r + \\Delta r$ minus one of radius $r$, so its area is
$$\\tfrac12\\big((r + \\Delta r)^2 - r^2\\big)\\Delta\\theta = \\Big(r + \\tfrac{\\Delta r}{2}\\Big)\\, \\Delta r\\, \\Delta\\theta.$$
That's exactly (the middle radius) $\\times\\, \\Delta r \\times \\Delta\\theta$. So $r\\, \\Delta r\\, \\Delta\\theta$ is off by only $\\tfrac12 (\\Delta r)^2\\, \\Delta\\theta$, which is tiny compared with the piece itself when $\\Delta r$ is small.

**Checking the factor $r$.** The area of a disk of radius $a$ is $\\int_0^{2\\pi} \\int_0^a r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{a^2}{2} = \\pi a^2$. ✓ Without the $r$, you'd get $\\int_0^{2\\pi} \\int_0^a dr\\, d\\theta = 2\\pi a$, which is the circumference, not the area.

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
- **Vertical slices ($dy$ inside):** $\\displaystyle\\iint_D f\\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f\\, dy\\, dx$, bottom curve to top curve. **Horizontal slices ($dx$ inside):** left curve to right curve, each solved for $x$.
- The outside limits are numbers. The inside limits may use only the outside variable.
- **Switching the order:** draw the region from the limits, then slice it the other way. Never just swap the integral signs.
- Area is $\\iint_D 1\\, dA$, volume between surfaces is $\\iint_D (\\text{top} - \\text{bottom})\\, dA$, and the average is $\\frac{1}{A(D)}\\iint_D f\\, dA$.
- **Polar:** $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $dA = r\\, dr\\, d\\theta$. Disks, rings, and sectors get constant limits.

**Common mistakes:**
- Bottom and top limits reversed, or the region's $y$-range used as the outside $x$-limits.
- Swapping the integral signs without redrawing the region.
- Forgetting the $r$ in $r\\, dr\\, d\\theta$.
:::
`;export{e as default};