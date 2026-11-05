var e=`---
title: Midterm 3 Practice Test 2
exam: Midterm 3
minutes: 60
---

:::problem 1
$D$ is the region between the line $y = x$ and the parabola $y = x^2 - 2$.

**(a)** With $dy$ inside, $\\displaystyle\\iint_D f\\, dA =$ {{circle 2: *$\\displaystyle\\int_{-1}^{2}\\int_{x^2 - 2}^{x} f\\, dy\\, dx$ | $\\displaystyle\\int_{-1}^{2}\\int_{x}^{x^2 - 2} f\\, dy\\, dx$ | $\\displaystyle\\int_{-2}^{1}\\int_{x^2 - 2}^{x} f\\, dy\\, dx$ | $\\displaystyle\\int_{0}^{2}\\int_{x^2 - 2}^{x} f\\, dy\\, dx$}}

**(b)** The area of $D$ is {{expr 2: 9/2}}
+++
review: 2026-10-19 Regions bounded by curves

**First, what the limits mean.** With $dy$ inside, the integral adds up the region one vertical line at a time. On the vertical line at one $x$, say $x = 0.5$, every point has the same $x$ and only $y$ is different. The inside limits say where that line enters the region (its bottom) and leaves it (its top); the outside limits say which $x$-values have a line inside the region at all.

**The goal.** Find the bottom and top curves and the range of $x$, using only the two equations.

**Step 1: where the curves meet.** The region is closed off where the two curves cross, so those $x$-values are where it starts and ends. They cross where they give the same $y$: $x^2 - 2 = x$. Move everything to one side: $x^2 - x - 2 = 0$. Factor (two numbers that multiply to $-2$ and add to $-1$ are $-2$ and $1$): $(x - 2)(x + 1) = 0$. A product is $0$ only when one factor is $0$, so $x = 2$ or $x = -1$.

**Step 2: which curve is on top.** Pick any $x$ between $-1$ and $2$, say $x = 0$. The line gives $y = 0$ and the parabola gives $y = 0 - 2 = -2$. The line is higher. Since the curves only cross at $x = -1$ and $x = 2$, they can't switch places in between, so the line is on top for every $x$ from $-1$ to $2$.

**Step 3: the limits.** $x$ from $-1$ to $2$; on each vertical line, $y$ from the parabola ($x^2 - 2$) up to the line ($x$).

**Step 4 (b): the area.** With $f = 1$, the inside integral is just the length of each vertical line, top minus bottom: $x - (x^2 - 2) = x - x^2 + 2$. Adding these lengths across:
$$\\int_{-1}^{2}(x - x^2 + 2)\\, dx = \\Big[\\tfrac{x^2}{2} - \\tfrac{x^3}{3} + 2x\\Big]_{-1}^{2} = \\left(2 - \\tfrac83 + 4\\right) - \\left(\\tfrac12 + \\tfrac13 - 2\\right) = \\tfrac{10}{3} + \\tfrac76 = \\tfrac92.$$

**Why not the other choices in (a).**
- **$\\int_x^{x^2 - 2}$:** this goes from the line down to the parabola, top to bottom, which gives the negative.
- **$\\int_{-2}^{1}$:** the crossing points are $x = -1$ and $x = 2$. At $x = -2$, the parabola gives $2$ and the line gives $-2$, so the parabola is on top there, outside the region.
- **$\\int_0^2$:** this misses the part of the region from $x = -1$ to $x = 0$.
:::

:::problem 2
**(a)** Switch the order of $\\displaystyle\\int_0^1\\int_{y}^{2 - y} f(x, y)\\, dx\\, dy$ to $dy$ inside. {{circle 2: *$\\displaystyle\\int_0^1\\int_0^{x} f\\, dy\\, dx + \\int_1^2\\int_0^{2 - x} f\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{x} f\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_{x}^{2 - x} f\\, dy\\, dx$ | $\\displaystyle\\int_y^{2 - y}\\int_0^1 f\\, dy\\, dx$}}

**(b)** With $f(x, y) = y$, the integral equals {{expr 2: 1/3}}
+++
review: 2026-10-19 Switching the order

**First, what the two orders mean.** A double integral adds up $f$ over a region, one thin strip at a time. The order of $dx$ and $dy$ says which way the strips run.

- **$dx$ inside** (the given order, $\\int_0^1\\int_y^{2 - y} \\cdots\\, dx\\, dy$): pick one value of $y$, say $y = 0.5$. Every point with $y = 0.5$ lies on one horizontal line, such as $(0.6, 0.5)$, $(1, 0.5)$, and $(1.4, 0.5)$. On that line the $y$-value is the same at every point (that's what "$y$ is held fixed" means), and only $x$ is different from point to point. The inside limits say where that line starts and stops: from $x = y = 0.5$ to $x = 2 - y = 1.5$. The outside integral then does the same for every $y$ from $0$ to $1$ and adds the lines up.
- **$dy$ inside** (what the problem asks for): pick one value of $x$ instead, say $x = 0.5$. Every point with $x = 0.5$ lies on one vertical line, such as $(0.5, 0)$, $(0.5, 0.2)$, and $(0.5, 0.4)$. On that line the $x$-value is the same at every point, and only $y$ is different. Now the inside limits have to say where the vertical line starts and stops, and the outside limits say which $x$-values have a line at all.

So switching the order means answering a new question about the same region: instead of "for this $y$, which $x$-values are in the region?", ask "for this $x$, which $y$-values are in the region?"

**(a) The goal.** Find two things:
- the **new outside limits**: the smallest and largest $x$ anywhere in the region, and
- the **new inside limits**: for one value of $x$, the lowest and highest $y$ on its vertical line.

**Step 1: write down the rules a point must follow.** The given limits are really rules. $\\int_0^1$ on the outside says $0 \\le y \\le 1$. $\\int_y^{2 - y}$ on the inside says $y \\le x \\le 2 - y$. A point $(x, y)$ is in the region exactly when it follows all of these rules. For example, $(1, 0.5)$ is in it: $0 \\le 0.5 \\le 1$, and $0.5 \\le 1 \\le 1.5$. But $(1.8, 0.5)$ is not: $1.8$ is bigger than $2 - 0.5 = 1.5$. The region stays the same when you switch the order, so these rules are all you need.

**Step 2: find every possible $x$ (the new outside limits).** The outside integral has to cover every $x$ that any point of the region has.
- *Smallest $x$:* the rules say $x \\ge y$ and $y \\ge 0$. So $x$ is at least $y$, which is at least $0$: $x$ can't be negative. And $x = 0$ really happens, at the point $(0, 0)$ (check: $0 \\le 0 \\le 1$ and $0 \\le 0 \\le 2$).
- *Largest $x$:* the rules say $x \\le 2 - y$. The biggest $2 - y$ can be is when $y$ is smallest, $y = 0$, giving $2$. So $x$ is at most $2$, and $x = 2$ happens at $(2, 0)$.

So the new outside limits are $0 \\le x \\le 2$.

**Step 3: pick one $x$ and rewrite every rule as a rule about $y$.** With $dy$ inside, you look at one vertical line at a time, where $x$ is one number and only $y$ changes. So every rule has to say "$y$ must be at least ___" or "$y$ must be at most ___".
- $0 \\le y$ already says: $y$ must be at least $0$.
- $y \\le 1$ already says: $y$ must be at most $1$.
- $y \\le x$ (the left part of $y \\le x \\le 2 - y$) already says: $y$ must be at most $x$.
- $x \\le 2 - y$ is about $y$, but not written as "$y \\le$ ___" yet. Add $y$ to both sides: $x + y \\le 2$. Subtract $x$ from both sides: $y \\le 2 - x$. So $y$ must be at most $2 - x$.

**Step 4: only the smallest upper limit matters.** $y$ has to follow all three "at most" rules at the same time. Try it on the line $x = 0.5$:
- the rules say $y \\le 1$, $y \\le 0.5$, and $y \\le 1.5$.
- If $y$ is at most $0.5$, it's automatically at most $1$ and at most $1.5$ too. But a $y$ like $0.8$ breaks the rule $y \\le 0.5$. So the rule that actually stops $y$ is $y \\le 0.5$, the smallest one. On this line, $y$ goes from $0$ to $0.5$, which is $x$.

Now try the line $x = 1.5$:
- the rules say $y \\le 1$, $y \\le 1.5$, and $y \\le 0.5$ (since $2 - 1.5 = 0.5$).
- The smallest is $0.5$ again, but this time it's $2 - x$. So on this line, $y$ goes from $0$ to $2 - x$.

**Step 5: split where the stopping rule changes.** The inside integral's top limit has to be one formula. But for $x = 0.5$ the top is $x$, and for $x = 1.5$ it's $2 - x$. The two formulas give the same number where $x = 2 - x$, which is $x = 1$. To the left of $x = 1$, $x$ is the smaller one (at $x = 0.5$: $0.5 < 1.5$). To the right, $2 - x$ is smaller (at $x = 1.5$: $0.5 < 1.5$). So split the $x$-range at $1$ and add two integrals:
$$\\int_0^1\\int_0^{x} f\\, dy\\, dx + \\int_1^2\\int_0^{2 - x} f\\, dy\\, dx.$$
(The rule $y \\le 1$ never stops $y$ first: $x$ and $2 - x$ are always at most $1$ in their halves, and all three equal $1$ at $x = 1$.)

**What the region looks like.** The rules describe the triangle with corners $(0, 0)$, $(2, 0)$, and $(1, 1)$. Its top edge is made of two different lines, $y = x$ on the left and $y = 2 - x$ on the right, which meet at $(1, 1)$. That's the picture of why one formula can't be the top for every $x$.

**(b) The goal:** compute the same number with $f = y$. Both orders describe the same region, so they give the same answer. The original order is one integral instead of two, so use it.
1. **Inside, along the horizontal line at height $y$:** $y$ is one number on that line, so it comes out like any constant: $\\int_y^{2 - y} y\\, dx = y \\times (\\text{length of the line}) = y\\big((2 - y) - y\\big) = y(2 - 2y)$.
2. **Outside, adding the lines from $y = 0$ to $1$:** $\\int_0^1 (2y - 2y^2)\\, dy = \\Big[y^2 - \\tfrac{2y^3}{3}\\Big]_0^1 = 1 - \\tfrac23 = \\tfrac13$.

**Check with the switched order:** $\\int_0^1\\int_0^x y\\, dy\\, dx = \\int_0^1 \\tfrac{x^2}{2}\\, dx = \\tfrac16$ and $\\int_1^2\\int_0^{2 - x} y\\, dy\\, dx = \\int_1^2 \\tfrac{(2 - x)^2}{2}\\, dx = \\tfrac16$. Together, $\\tfrac13$ ✓, which also confirms the switch in (a).

**Why not the other choices in (a).**
- **$\\int_0^2\\int_0^x$:** this uses the top $y = x$ for every $x$. But on the line $x = 1.5$, the top is $y = 2 - x = 0.5$, not $1.5$; the point $(1.5, 1)$ breaks the rule $x \\le 2 - y$.
- **$\\int_0^2\\int_x^{2 - x}$:** this reuses the old $x$-limits as $y$-limits. The limits have to be worked out again from the rules.
- **$\\int_y^{2 - y}\\int_0^1$:** just swapping the integral signs leaves $y$ in the outside limits, so the answer would still depend on $y$.
:::

:::problem 3
$D$ is the disk $x^2 + (y - 1)^2 \\le 1$, which in polar is $r \\le 2\\sin\\theta$.

**(a)** The $\\theta$-limits are: {{circle 1: *$0 \\le \\theta \\le \\pi$ | $0 \\le \\theta \\le 2\\pi$ | $-\\tfrac\\pi2 \\le \\theta \\le \\tfrac\\pi2$ | $0 \\le \\theta \\le \\tfrac\\pi2$}}

**(b)** $\\displaystyle\\iint_D y\\, dA =$ {{expr 3: pi}}
+++
review: 2026-10-23 Polar regions with curved edges

**First, polar coordinates.** A point is named by $r$, its distance from the origin, and $\\theta$, its angle from the positive $x$-axis. A ray is a half-line starting at the origin at one angle; along it, $\\theta$ is the same and only $r$ changes. With $dr$ inside, the integral adds up the region one ray at a time: the inside limits say where each ray enters and leaves the region, and the $\\theta$-limits say which rays hit it at all.

**The goal.** Rewrite the disk's rule in $r$ and $\\theta$, then see which angles' rays pass through it.

**Step 1: the disk's rule in polar.** $x^2 + (y - 1)^2 \\le 1$. Multiply out $(y - 1)^2 = y^2 - 2y + 1$: $x^2 + y^2 - 2y + 1 \\le 1$, so $x^2 + y^2 \\le 2y$. Now use $x^2 + y^2 = r^2$ (squared distance) and $y = r\\sin\\theta$: $r^2 \\le 2r\\sin\\theta$. For $r > 0$, divide both sides by $r$ (dividing by a positive number keeps $\\le$): $r \\le 2\\sin\\theta$.

So along the ray at angle $\\theta$, the points of the disk are the ones with $0 \\le r \\le 2\\sin\\theta$. For example, the ray straight up ($\\theta = \\tfrac\\pi2$) runs from $r = 0$ to $r = 2$, ending at the disk's top point $(0, 2)$.

**Step 2 (a): which rays hit the disk.** The ray at angle $\\theta$ contains disk points only if $2\\sin\\theta > 0$. $\\sin\\theta$ is positive for angles between $0$ and $\\pi$ (pointing into the upper half of the plane) and negative for angles between $\\pi$ and $2\\pi$ (pointing down). The disk sits above the $x$-axis, touching the origin, so only the upward rays hit it: $0 \\le \\theta \\le \\pi$.

**Step 3 (b): the integral.** In polar, a small piece has area $r\\,\\Delta r\\,\\Delta\\theta$ (a piece of a circle of radius $r$ has length $r$ times the angle), and $y = r\\sin\\theta$. So the integrand is $r\\sin\\theta \\cdot r = r^2\\sin\\theta$.
- *Inside, along one ray:* $\\int_0^{2\\sin\\theta} r^2\\sin\\theta\\, dr = \\sin\\theta \\cdot \\tfrac{(2\\sin\\theta)^3}{3} = \\tfrac{8\\sin^4\\theta}{3}$.
- *Outside, adding the rays:* $\\tfrac83\\int_0^\\pi \\sin^4\\theta\\, d\\theta = \\tfrac83 \\cdot \\tfrac{3\\pi}{8} = \\pi$. (Use $\\sin^2\\theta = \\tfrac{1 - \\cos 2\\theta}{2}$ twice to get $\\int_0^\\pi\\sin^4\\theta\\, d\\theta = \\tfrac{3\\pi}{8}$.)

**Check without polar.** $\\iint_D y\\, dA$ is (the average $y$ over the disk) $\\times$ (its area). The disk is centered at $(0, 1)$, so its average $y$ is $1$; its radius is $1$, so its area is $\\pi$. $1 \\times \\pi = \\pi$ ✓.

**Why not the other choices in (a).**
- **$0$ to $2\\pi$:** the downward rays ($\\pi < \\theta < 2\\pi$) have $2\\sin\\theta < 0$, so no $r \\ge 0$ fits: they miss the disk.
- **$-\\tfrac\\pi2$ to $\\tfrac\\pi2$:** those are the rays pointing right. They'd fit a disk sitting to the right of the origin, like $r \\le 2\\cos\\theta$.
- **$0$ to $\\tfrac\\pi2$:** those rays only reach the right half of the disk.
:::

:::problem 4
What is the average value of $f(x, y) = x^2 + y^2$ over the disk $x^2 + y^2 \\le 4$?

Answer: {{expr 3: 2}}
+++
review: 2026-10-19 Area, volume, and average value over a region

**First, what the average of a function over a region means.** For numbers, the average is (sum) $\\div$ (how many). For a function spread over a region, the "sum" is the integral $\\iint_D f\\, dA$ (each value times the area of its small piece, added up) and "how many" becomes the total area. So the average is $\\dfrac{\\iint_D f\\, dA}{\\text{area}}$.

**The goal.** Compute $\\iint_D (x^2 + y^2)\\, dA$ and the area, then divide. $x^2 + y^2$ is the squared distance from the origin and the region is a disk, so polar coordinates fit ($r$ is the distance, so $x^2 + y^2 = r^2$).

**Step 1: the integral.** The disk of radius $2$ is $0 \\le r \\le 2$, all the way around ($0 \\le \\theta \\le 2\\pi$). A small polar piece has area $r\\,\\Delta r\\,\\Delta\\theta$, so the integrand is $r^2 \\cdot r = r^3$. $\\int_0^{2\\pi}\\int_0^2 r^3\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{16}{4} = 8\\pi$.

**Step 2: the area.** $\\pi \\cdot 2^2 = 4\\pi$.

**Step 3: divide.** $\\tfrac{8\\pi}{4\\pi} = 2$.

**What the factor $r$ does here.** Without it, you'd be averaging $r^2$ as if every distance from $0$ to $2$ had the same amount of disk. But the circle at distance $r$ has length $2\\pi r$, so there's more disk at larger distances: the ring from $r = 1.9$ to $2$ has much more area than the ring from $0$ to $0.1$. Forgetting the $r$ gives the wrong answer $\\tfrac43$.
:::

:::scratch
:::

:::problem 5
$E$ is the solid bounded by the parabolic cylinder $y = x^2$ and the planes $z = 0$ and $y + z = 4$. Find its volume.

Answer: {{expr 4: 256/15}}
+++
review: 2026-10-26 Solids between two surfaces

**First, how a triple integral finds a volume.** Above each point $(x, y)$ of the floor, the solid forms a vertical column. The inside integral, in $z$, finds each column's height; the other two add up the columns over the **shadow** (the part of the floor under the solid).

**The goal.** Find where each column starts and stops, and the shadow, then integrate.

**Step 1: where each column starts and stops.** The solid is bounded below by the floor $z = 0$ and above by the plane $y + z = 4$, which is $z = 4 - y$ (subtract $y$ from both sides). So the column above $(x, y)$ runs from $z = 0$ up to $z = 4 - y$. For example, above $(1, 2)$ it's $2$ tall.

**Step 2: the shadow.** Two things limit it.
- A column needs its top above its bottom: $4 - y \\ge 0$, so $y \\le 4$.
- The surface $y = x^2$ is a curved wall standing straight up (a parabola in the floor, extended up and down). The solid is on the side where $y \\ge x^2$: that's the side the plane closes off with $y \\le 4$. On the other side ($y < x^2$), $x$ could grow forever, with no finite volume.

So the shadow is $x^2 \\le y \\le 4$: between the parabola and the line $y = 4$. They meet where $x^2 = 4$, at $x = \\pm 2$, so $-2 \\le x \\le 2$.

**Step 3: integrate, inside out.**
- *Inside (one column's height):* $\\int_0^{4 - y} 1\\, dz = 4 - y$.
- *Middle (along the vertical line in the shadow at one $x$, from $y = x^2$ to $4$):* $\\int_{x^2}^4 (4 - y)\\, dy = \\Big[4y - \\tfrac{y^2}{2}\\Big]_{x^2}^4 = 8 - \\left(4x^2 - \\tfrac{x^4}{2}\\right) = \\tfrac{(4 - x^2)^2}{2}$. (Check at $x = 0$: $8$ both ways.)
- *Outside:* $\\tfrac12\\int_{-2}^{2}(16 - 8x^2 + x^4)\\, dx = \\tfrac12\\left(64 - \\tfrac{128}{3} + \\tfrac{64}{5}\\right) = \\tfrac{256}{15} \\approx 17.07$.

**Common mistake.** Making every column $4$ tall. The top is the slanted plane, which gets lower as $y$ grows.
:::

:::problem 6
Find the volume of the solid inside both the sphere $x^2 + y^2 + z^2 = 4$ and the cylinder $x^2 + y^2 = 1$.

Answer: {{expr 4: 4pi/3 (8 - 3 sqrt(3))}}
+++
review: 2026-10-28 Cylindrical coordinates; 2026-10-28 Which coordinates to use

**First, cylindrical coordinates.** Keep $z$, and describe the position over the floor by $r$ (distance from the $z$-axis) and $\\theta$ (angle around it). The cylinder $x^2 + y^2 = 1$ is every point at distance $1$ from the $z$-axis, so it's simply $r = 1$, and inside it is $r \\le 1$.

**The goal.** The solid is "inside the cylinder" and "inside the sphere". Use columns: for each point of the floor inside the cylinder, find how far up and down the sphere lets the column go.

**Step 1: where each column starts and stops.** Inside the sphere means $x^2 + y^2 + z^2 \\le 4$, which is $r^2 + z^2 \\le 4$, so $z^2 \\le 4 - r^2$. A number's square is at most $4 - r^2$ exactly when the number is between $-\\sqrt{4 - r^2}$ and $\\sqrt{4 - r^2}$. So the column at distance $r$ runs from $-\\sqrt{4 - r^2}$ to $\\sqrt{4 - r^2}$, a height of $2\\sqrt{4 - r^2}$. For example, the column on the axis ($r = 0$) runs from $-2$ to $2$.

**Step 2: the shadow.** Inside the cylinder: $0 \\le r \\le 1$, all the way around. (The sphere alone would allow $r$ up to $2$, but the cylinder cuts it off at $1$.)

**Step 3: integrate.** A small piece has volume $r\\,\\Delta z\\,\\Delta r\\,\\Delta\\theta$ (a polar piece of floor times a height), so the column at distance $r$ contributes its height times $r$: $2\\sqrt{4 - r^2}\\, r$.
- For the $r$-integral, let $w = 4 - r^2$. Then $\\tfrac{dw}{dr} = -2r$, so $2r\\, dr = -dw$; $r = 0$ gives $w = 4$ and $r = 1$ gives $w = 3$:
$$\\int_0^1 2\\sqrt{4 - r^2}\\, r\\, dr = \\int_3^4 \\sqrt w\\, dw = \\tfrac23\\big(4^{3/2} - 3^{3/2}\\big) = \\tfrac23\\big(8 - 3\\sqrt3\\big).$$
- Around: multiply by $2\\pi$: $\\tfrac{4\\pi}{3}\\big(8 - 3\\sqrt3\\big) \\approx 11.74$.

**Is it reasonable?** A plain cylinder of radius $1$ from $z = -2$ to $z = 2$ holds $\\pi \\cdot 1^2 \\cdot 4 \\approx 12.57$. Our solid is that cylinder with its top and bottom rounded by the sphere (the columns near the wall, at $r = 1$, only reach $\\pm\\sqrt3 \\approx \\pm 1.73$), so it should be a little less ✓.
:::

:::problem 7
**(a)** In spherical coordinates, the upper half of the ball $x^2 + y^2 + z^2 \\le 1$ ($z \\ge 0$) is: {{circle 1: *$0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\tfrac\\pi2$, $0 \\le \\theta \\le 2\\pi$ | $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le \\pi$ | $0 \\le \\rho \\le 1$, $\\tfrac\\pi2 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$ | $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le 2\\pi$, $0 \\le \\theta \\le \\tfrac\\pi2$}}

**(b)** Compute $\\displaystyle\\iiint_B e^{(x^2 + y^2 + z^2)^{3/2}}\\, dV$ over the whole unit ball $B$. {{expr 3: 4pi (e - 1)/3}}
+++
review: 2026-10-28 Spherical coordinates

**First, spherical coordinates.** $\\rho$ is the distance from the origin, $\\varphi$ is the angle down from straight up (the positive $z$-axis), and $\\theta$ is the angle around the $z$-axis. Straight up is $\\varphi = 0$, level with the floor is $\\varphi = \\tfrac\\pi2$, straight down is $\\varphi = \\pi$.

**(a)** Inside the unit ball means distance at most $1$: $0 \\le \\rho \\le 1$. The upper half means $z \\ge 0$: the points level with the floor or above it, whose angle from straight up is at most $\\tfrac\\pi2$. So $0 \\le \\varphi \\le \\tfrac\\pi2$. Nothing limits going around: $0 \\le \\theta \\le 2\\pi$.

**(b) The goal.** The integrand $e^{(x^2 + y^2 + z^2)^{3/2}}$ only depends on the distance from the origin, and the region is a ball, so spherical coordinates make both simple.

**Step 1: rewrite the integrand.** $x^2 + y^2 + z^2$ is the squared distance, $\\rho^2$. So $(x^2 + y^2 + z^2)^{3/2} = (\\rho^2)^{3/2} = \\rho^3$, and the integrand is $e^{\\rho^3}$.

**Step 2: the size of a small piece.** A small spherical piece has volume $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$ (its edges are $\\Delta\\rho$, $\\rho\\,\\Delta\\varphi$, and $\\rho\\sin\\varphi\\,\\Delta\\theta$). So the integrand becomes $e^{\\rho^3}\\rho^2\\sin\\varphi$.

**Step 3: the $\\rho$-integral.** Let $w = \\rho^3$. Then $\\tfrac{dw}{d\\rho} = 3\\rho^2$, so $\\rho^2\\, d\\rho = \\tfrac13\\, dw$; $\\rho$ from $0$ to $1$ gives $w$ from $0$ to $1$. $\\int_0^1 e^{\\rho^3}\\rho^2\\, d\\rho = \\tfrac13\\int_0^1 e^w\\, dw = \\tfrac{e - 1}{3}$. The $\\rho^2$ from the piece's size is exactly what made this work.

**Step 4: the angles.** The limits are numbers and the rest is $\\sin\\varphi$, so the angle integrals just multiply: $\\int_0^\\pi\\sin\\varphi\\, d\\varphi = 2$ and $\\int_0^{2\\pi} d\\theta = 2\\pi$. Total: $\\tfrac{e - 1}{3} \\cdot 2 \\cdot 2\\pi = \\tfrac{4\\pi(e - 1)}{3} \\approx 7.20$.

**Why not the other choices in (a).**
- **$0 \\le \\theta \\le \\pi$ with all $\\varphi$:** limiting $\\theta$ to half a turn keeps the half with $y \\ge 0$ (the back half), not the top half.
- **$\\tfrac\\pi2 \\le \\varphi \\le \\pi$:** those angles point below the floor: the lower half.
- **$\\varphi$ up to $2\\pi$:** $\\varphi$ only needs $0$ to $\\pi$ to go from straight up to straight down; going around is $\\theta$'s job.
:::

:::scratch
:::

:::problem 8
$D$ is the parallelogram $0 \\le x + 2y \\le 2$, $-1 \\le x - y \\le 1$. Use $u = x + 2y$, $v = x - y$.

**(a)** $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| =$ {{expr 1: 1/3}}

**(b)** $\\displaystyle\\iint_D (x - y)^2\\, dA =$ {{expr 3: 4/9}}
+++
review: 2026-10-30 Using it: the tilted square; 2026-11-02 Curved edges: let the edges choose u and v

**First, what new coordinates do.** Give every point new labels $u = x + 2y$ and $v = x - y$. For example, $(1, 0)$ gets $u = 1$, $v = 1$. The region's edges are lines where $x + 2y$ or $x - y$ is a fixed number, so in the new labels they're "$u = $ number" or "$v = $ number", and the region becomes a rectangle.

**The goal.** Rewrite the integral in $u$ and $v$, including a correction factor: a square of size $1 \\times 1$ in the new labels stands for a piece of the $xy$-plane with a different area.

**Step 1: the new region.** Substitute the labels into the rules: $0 \\le u \\le 2$ and $-1 \\le v \\le 1$.

**Step 2 (a): the correction factor.** Going from $(x, y)$ to $(u, v)$ multiplies small areas by $|u_x v_y - u_y v_x|$, where $u_x = 1$ is how fast $u$ changes as only $x$ changes, and so on: $|1 \\cdot (-1) - 2 \\cdot 1| = |-3| = 3$. The integral needs the opposite direction (a $u, v$ square back to the $xy$-plane), so flip it: $\\tfrac13$. In words: every $1 \\times 1$ square of the new labels stands for a piece of the plane with area $\\tfrac13$.

**Check one square.** Solving $u = x + 2y$, $v = x - y$ gives $x = \\tfrac{u + 2v}{3}$ and $y = \\tfrac{u - v}{3}$. The square $0 \\le u \\le 1$, $0 \\le v \\le 1$ has corners at $(0, 0)$, $(\\tfrac13, \\tfrac13)$, $(1, 0)$, and $(\\tfrac23, -\\tfrac13)$: a parallelogram with sides $\\langle \\tfrac13, \\tfrac13 \\rangle$ and $\\langle \\tfrac23, -\\tfrac13 \\rangle$, whose area is $\\left|\\tfrac13 \\cdot \\left(-\\tfrac13\\right) - \\tfrac13 \\cdot \\tfrac23\\right| = \\tfrac13$ ✓.

**Step 3: the integrand.** $(x - y)^2$ is $v^2$, since $v = x - y$.

**Step 4 (b): integrate.** $\\int_0^2\\int_{-1}^{1} v^2 \\cdot \\tfrac13\\, dv\\, du$. Inside: $\\tfrac13 \\cdot \\tfrac23 = \\tfrac29$ (since $\\int_{-1}^1 v^2\\, dv = \\tfrac{1}{3} - \\left(-\\tfrac13\\right) = \\tfrac23$). Outside: $\\tfrac29$ for each $u$ from $0$ to $2$, so $\\tfrac49$.

**Common mistake.** Multiplying by $3$ instead of $\\tfrac13$.
:::

:::problem 9
**(a)** $\\mathbf r(u, v) = \\langle 2\\cos u,\\ v,\\ 2\\sin u \\rangle$ is: {{circle 1: *a cylinder around the $y$-axis | a cylinder around the $z$-axis | a sphere | a cone}}

**(b)** $\\mathbf r(u, v) = \\langle u\\cos v,\\ u\\sin v,\\ u \\rangle$, $u \\ge 0$, is: {{circle 1: a cylinder | a paraboloid | *a cone | a plane}}

**(c)** Compute $\\displaystyle\\iint_S (x^2 + y^2)\\, dS$, where $S$ is the sphere $x^2 + y^2 + z^2 = 4$. {{expr 3: 128pi/3}}
+++
review: 2026-11-04 From a parametrization back to an equation; 2026-11-06 Integrals over a surface

**First, what a parametrization is.** $\\mathbf r(u, v)$ turns each pair of numbers $(u, v)$ into a point in space. To tell what surface you get, find an equation that all those points satisfy, by combining $x$, $y$, $z$ so that $u$ and $v$ cancel.

**(a)** Here $x = 2\\cos u$, $y = v$, $z = 2\\sin u$. Squaring and adding $x$ and $z$ uses $\\cos^2 u + \\sin^2 u = 1$: $x^2 + z^2 = 4$. And $y = v$ can be anything. So every point is at distance $2$ from the $y$-axis, at any position along it: a cylinder of radius $2$ around the $y$-axis. (For example, $\\mathbf r(0, 5) = (2, 5, 0)$, which is $2$ away from the $y$-axis.)

**(b)** $x^2 + y^2 = u^2(\\cos^2 v + \\sin^2 v) = u^2$, so the distance from the $z$-axis is $u$. And $z = u$. So the height always equals the distance from the axis: a cone.

**(c) First, what a surface integral adds up.** $\\iint_S f\\, dS$ adds up $f$ times the area of each small patch of the surface. On the sphere of radius $2$, using $\\varphi$ (angle down from straight up) and $\\theta$ (angle around), a small patch has area $4\\sin\\varphi\\,\\Delta\\varphi\\,\\Delta\\theta$: its sides are $2\\,\\Delta\\varphi$ (along a circle of radius $2$) and $2\\sin\\varphi\\,\\Delta\\theta$ (along a horizontal circle of radius $2\\sin\\varphi$).

**Step 1: $f$ on the sphere.** $x^2 + y^2$ is the squared distance from the $z$-axis. A point of the sphere at angle $\\varphi$ from straight up is at distance $2\\sin\\varphi$ from the axis, so $x^2 + y^2 = 4\\sin^2\\varphi$.

**Step 2: integrate.** $\\int_0^{2\\pi}\\int_0^\\pi 4\\sin^2\\varphi \\cdot 4\\sin\\varphi\\, d\\varphi\\, d\\theta = 16 \\cdot 2\\pi\\int_0^\\pi\\sin^3\\varphi\\, d\\varphi$. For $\\int\\sin^3$, write $\\sin^3\\varphi = (1 - \\cos^2\\varphi)\\sin\\varphi$ and let $w = \\cos\\varphi$ (so $dw = -\\sin\\varphi\\, d\\varphi$; $\\varphi$ from $0$ to $\\pi$ gives $w$ from $1$ to $-1$): $\\int_{-1}^{1}(1 - w^2)\\, dw = 2 - \\tfrac23 = \\tfrac43$. Total: $32\\pi \\cdot \\tfrac43 = \\tfrac{128\\pi}{3}$.

**Why not the other choices.**
- **(a)** Around the $z$-axis would need $x^2 + y^2 = 4$ with $z$ free; here it's $y$ that's free. A sphere would need all three coordinates limited, and a cone's distance from its axis changes with height.
- **(b)** A cylinder keeps the same distance from its axis at every height, but here the distance $u$ grows with the height $u$. A paraboloid would have height $u^2$. A plane would only use $u$ and $v$ to the first power, with no $\\cos v$ or $\\sin v$.
:::

:::problem 10
**(a)** Use Green's Theorem to compute $\\displaystyle\\oint_C -y^3\\, dx + x^3\\, dy$ around the unit circle, counterclockwise. {{expr 3: 3pi/2}}

**(b)** For $\\mathbf F = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2} \\right\\rangle$, $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around the square $|x| + |y| = 1$, counterclockwise, is: {{circle 1: *$2\\pi$ | $0$ | $4$ | $\\pi$}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-11 Regions with holes

**(a) First, what Green's Theorem says.** For a closed path walked counterclockwise, the total push of the field along the path, $\\oint_C P\\, dx + Q\\, dy$, equals the total of $Q_x - P_y$ over the inside. $Q_x - P_y$ measures how much the field swirls around each point.

**The goal.** Turn the line integral around the circle into a double integral over the disk, which is easy in polar.

**Step 1: check it applies.** The circle is closed and walked counterclockwise, and $P = -y^3$, $Q = x^3$ are defined everywhere.

**Step 2: the swirl.** $Q_x$ (how fast $Q = x^3$ changes as only $x$ changes) is $3x^2$. $P_y$ (how fast $P = -y^3$ changes as only $y$ changes) is $-3y^2$. So $Q_x - P_y = 3x^2 + 3y^2 = 3r^2$, where $r$ is the distance from the origin.

**Step 3: integrate in polar.** The unit disk is $0 \\le r \\le 1$, all the way around, and a small piece has area $r\\,\\Delta r\\,\\Delta\\theta$: $\\int_0^{2\\pi}\\int_0^1 3r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac34 = \\tfrac{3\\pi}{2}$.

**(b) First, why this field is different.** $\\mathbf F = \\left\\langle \\tfrac{-y}{x^2 + y^2}, \\tfrac{x}{x^2 + y^2} \\right\\rangle$ divides by $x^2 + y^2$, which is $0$ at the origin, so it isn't defined there. Green's Theorem needs the field defined at every point inside the path, and the origin is inside the square. So plain Green's Theorem can't be used.

**The goal.** Compare the square with a small circle around the origin.

**Why the answer is $2\\pi$.** Away from the origin this field's swirl $Q_x - P_y$ is $0$ (worked out on Nov 11). Apply Green's Theorem to the region between the square and a small circle around the origin: that region doesn't contain the origin, and its swirl is $0$, so the square and the circle (both counterclockwise) give the same total. Around the unit circle, with $x = \\cos t$, $y = \\sin t$, the integrand works out to $1$ at every point, so the total is $2\\pi$. So the square gives $2\\pi$ too.

**Why not the other choices in (b).**
- **$0$:** that's what Green's Theorem would give if the origin weren't inside, but it is.
- **$4$:** the answer doesn't depend on the square's size (its perimeter is $4\\sqrt2$ anyway); any counterclockwise loop once around the origin gives the same value.
- **$\\pi$:** that's half of the full value; a full loop around the origin gives $2\\pi$.
:::

:::problem 11
**(a)** Find the outward flux of $\\mathbf F = \\langle xy^2,\\ x^2 y \\rangle$ across the circle $x^2 + y^2 = 4$. {{expr 3: 8pi}}

**(b)** $\\mathbf G = \\langle yz,\\ xz,\\ xy + 1 \\rangle$ is: {{circle 1: *conservative | not conservative}}
+++
review: 2026-11-11 Green's Theorem for flux; 2026-11-13 Two identities, and what they say about conservative fields

**(a) First, what flux and divergence mean.** Think of $\\mathbf F$ as the velocity of a flowing liquid in the plane. The flux across the circle is how much liquid leaves the disk through its edge per second. The divergence $P_x + Q_y$ at a point is how much the flow spreads out from that point, per unit of area. The flux form of Green's Theorem says: the total leaving through the edge equals the total spreading out inside.

**The goal.** Add up the divergence over the disk instead of working on the circle.

**Step 1: the divergence.** $P_x$ (how fast $P = xy^2$ changes as only $x$ changes) is $y^2$. $Q_y$ (how fast $Q = x^2 y$ changes as only $y$ changes) is $x^2$. So $P_x + Q_y = x^2 + y^2 = r^2$.

**Step 2: integrate in polar.** The disk of radius $2$ is $0 \\le r \\le 2$, all the way around, with pieces of area $r\\,\\Delta r\\,\\Delta\\theta$: $\\int_0^{2\\pi}\\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{16}{4} = 8\\pi$.

**(b) First, what "conservative" means.** $\\mathbf G$ is conservative if it's the gradient of some function $f$, $\\mathbf G = \\langle f_x, f_y, f_z \\rangle$. Then its three components must fit together: for example, the $y$-derivative of the first component and the $x$-derivative of the second are both $f_{xy}$, so they must match. The curl lists the three differences; all $0$ (with no holes in the region) means conservative.
- $R_y - Q_z$: $\\tfrac{\\partial}{\\partial y}(xy + 1) = x$ and $\\tfrac{\\partial}{\\partial z}(xz) = x$, difference $0$.
- $P_z - R_x$: $\\tfrac{\\partial}{\\partial z}(yz) = y$ and $\\tfrac{\\partial}{\\partial x}(xy + 1) = y$, difference $0$.
- $Q_x - P_y$: $\\tfrac{\\partial}{\\partial x}(xz) = z$ and $\\tfrac{\\partial}{\\partial y}(yz) = z$, difference $0$.

$\\mathbf G$ is defined everywhere, so it's **conservative**. (A potential is $f = xyz + z$: its partial derivatives are $yz$, $xz$, and $xy + 1$ ✓.)

**Why not "not conservative".** That would need one of the three pairs to differ, or a hole in the region. All match, and there's no hole.
:::

:::problem 12
**(a)** Find the upward flux of $\\mathbf F = \\langle x,\\ y,\\ 2z \\rangle$ through the upper hemisphere $x^2 + y^2 + z^2 = 1$, $z \\ge 0$. {{expr 3: 8pi/3}}

**(b)** The divergence of $\\langle x^2, y^2, z^2 \\rangle$ at the point $(1, 2, 3)$ is {{expr 1: 12}}
+++
review: 2026-11-16 Surfaces that aren't closed: close them off; 2026-11-16 The Divergence Theorem

**(a) First, what's being asked.** The flux through the hemisphere is how much of the flow $\\mathbf F$ passes up through the dome per second. The Divergence Theorem would turn this into an easy integral, but only for a closed surface, one that completely encloses a solid. The hemisphere alone has an open bottom.

**The goal.** Close it with a lid, use the Divergence Theorem on the closed surface, and subtract what goes through the lid.

**Step 1: the lid.** The flat disk $x^2 + y^2 \\le 1$ on the floor ($z = 0$) closes the dome into the surface of a half ball. "Outward" on the lid means pointing down, out of the half ball: the direction $\\langle 0, 0, -1 \\rangle$.

**Step 2: what goes through the lid.** The part of $\\mathbf F$ that goes straight down through the lid is $\\mathbf F \\cdot \\langle 0, 0, -1 \\rangle = -2z$. On the lid, $z = 0$, so it's $0$: nothing crosses the lid.

**Step 3: the total out of the half ball.** The divergence (how much the flow spreads out per unit of volume) is $\\tfrac{\\partial}{\\partial x}(x) + \\tfrac{\\partial}{\\partial y}(y) + \\tfrac{\\partial}{\\partial z}(2z) = 1 + 1 + 2 = 4$, the same everywhere. The half ball of radius $1$ has volume $\\tfrac12 \\cdot \\tfrac43\\pi = \\tfrac23\\pi$. By the Divergence Theorem, the total leaving the closed surface is $4 \\cdot \\tfrac23\\pi = \\tfrac{8\\pi}{3}$.

**Step 4: subtract the lid.** The total out of the half ball is (out through the dome) $+$ (out through the lid). The lid gave $0$, so the dome gives $\\tfrac{8\\pi}{3}$. Outward on the dome is upward, which is what the problem asks for.

**Check.** Computing the flux through the dome directly gives about $8.378$, and $\\tfrac{8\\pi}{3} \\approx 8.378$ ✓.

**(b)** The divergence of $\\langle x^2, y^2, z^2 \\rangle$ is $\\tfrac{\\partial}{\\partial x}(x^2) + \\tfrac{\\partial}{\\partial y}(y^2) + \\tfrac{\\partial}{\\partial z}(z^2) = 2x + 2y + 2z$. At $(1, 2, 3)$: $2 + 4 + 6 = 12$.
:::
`;export{e as default};