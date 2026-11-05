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

**The goal.** With $dy$ inside, the outside limits are the smallest and largest $x$ in $D$, and the inside limits are the bottom and top edges. Both come from the two equations, without drawing.

**Step 1: where the edges meet.** *Why:* between two curves, the region starts and ends where they meet, so those $x$-values are the outside limits. Set them equal: $x^2 - 2 = x$, so $x^2 - x - 2 = 0$, which factors as $(x - 2)(x + 1) = 0$: $x = -1$ or $x = 2$.

**Step 2: which edge is on top.** *Why one test point is enough:* the curves only cross at $x = -1$ and $x = 2$, so in between they can't trade places. Test $x = 0$: the line gives $0$ and the parabola gives $-2$, so the line is on top for every $x$ in between.

**Step 3: the limits.** $-1 \\le x \\le 2$ and (bottom) $x^2 - 2 \\le y \\le x$ (top).

**Step 4 (b): the area.** *Why top minus bottom:* with $f = 1$, the inside integral is the height of each vertical slice.
$$\\int_{-1}^{2}\\big(x - (x^2 - 2)\\big)\\, dx = \\Big[\\tfrac{x^2}{2} - \\tfrac{x^3}{3} + 2x\\Big]_{-1}^{2} = \\left(2 - \\tfrac83 + 4\\right) - \\left(\\tfrac12 + \\tfrac13 - 2\\right) = \\tfrac{10}{3} + \\tfrac76 = \\tfrac92.$$

**Why not the other choices in (a).**
- **$\\int_x^{x^2 - 2}$:** bottom and top are reversed, which gives the negative.
- **$\\int_{-2}^{1}$:** the signs of the meeting points are flipped. $(x - 2)(x + 1) = 0$ gives $2$ and $-1$.
- **$\\int_0^2$:** the region also extends left of the $y$-axis, to $x = -1$.
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

**The goal.** $D$ is a disk through the origin, so in polar each ray from the origin enters at $r = 0$ and leaves at the edge. You need the edge as "$r = $ formula in $\\theta$" and the range of $\\theta$ whose rays actually hit the disk.

**Step 1: the edge in polar.** *Why expand first:* $x^2 + y^2$ becomes $r^2$, so get it to appear. $x^2 + (y - 1)^2 \\le 1$ expands to $x^2 + y^2 - 2y + 1 \\le 1$, so $x^2 + y^2 \\le 2y$, which is $r^2 \\le 2r\\sin\\theta$. For $r > 0$, divide by $r$: $r \\le 2\\sin\\theta$.

**Step 2 (a): which $\\theta$.** *Why this decides it:* a ray hits the disk only if $0 \\le r \\le 2\\sin\\theta$ allows some $r > 0$, which needs $\\sin\\theta > 0$. That's $0 < \\theta < \\pi$ (the upper half-plane, where the disk is).

**Step 3 (b): the integral.** *Why each piece:* $y = r\\sin\\theta$, and $dA = r\\, dr\\, d\\theta$, so the integrand is $r^2\\sin\\theta$.
- Inside: $\\int_0^{2\\sin\\theta} r^2\\sin\\theta\\, dr = \\sin\\theta \\cdot \\tfrac{8\\sin^3\\theta}{3}$.
- Outside: $\\tfrac83\\int_0^\\pi \\sin^4\\theta\\, d\\theta = \\tfrac83 \\cdot \\tfrac{3\\pi}{8} = \\pi$. (Use $\\sin^2\\theta = \\tfrac{1 - \\cos 2\\theta}{2}$ twice to get $\\int_0^\\pi \\sin^4\\theta\\, d\\theta = \\tfrac{3\\pi}{8}$.)

**Check.** The disk is centered at $(0, 1)$, so the average $y$ is $1$; its area is $\\pi$; and $\\iint_D y\\, dA = (\\text{average } y) \\times (\\text{area}) = \\pi$ ✓.

**Why not the other choices in (a).**
- **$0$ to $2\\pi$:** for $\\pi < \\theta < 2\\pi$, $2\\sin\\theta < 0$ and no $r \\ge 0$ fits. Those rays miss the disk.
- **$-\\tfrac\\pi2$ to $\\tfrac\\pi2$:** that's for a disk to the right of the origin, like $r \\le 2\\cos\\theta$.
- **$0$ to $\\tfrac\\pi2$:** that's only the right half of the disk.
:::

:::problem 4
What is the average value of $f(x, y) = x^2 + y^2$ over the disk $x^2 + y^2 \\le 4$?

Answer: {{expr 3: 2}}
+++
review: 2026-10-19 Area, volume, and average value over a region

**The goal.** An average over a region is (total of $f$) $\\div$ (area): $\\tfrac{1}{A(D)}\\iint_D f\\, dA$. So compute the integral and the area, then divide. The disk and the integrand $x^2 + y^2$ both suggest polar.

**Step 1: the integral.** *Why polar:* $x^2 + y^2 = r^2$ and the disk is $0 \\le r \\le 2$, all the way around. With $dA = r\\, dr\\, d\\theta$: $\\int_0^{2\\pi}\\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{16}{4} = 8\\pi$.

**Step 2: the area.** $\\pi \\cdot 2^2 = 4\\pi$.

**Step 3: divide.** $\\tfrac{8\\pi}{4\\pi} = 2$.

**Don't guess the halfway value.** Here the answer happens to equal the halfway point between $0$ and $4$, but that's a coincidence of this function. The common mistake is forgetting the $r$ in $dA$: averaging $r^2$ evenly over $0 \\le r \\le 2$ gives $\\tfrac43$, which is wrong. The $r$ counts the fact that more of the disk's area is near the edge, where $x^2 + y^2$ is large.
:::

:::scratch
:::

:::problem 5
$E$ is the solid bounded by the parabolic cylinder $y = x^2$ and the planes $z = 0$ and $y + z = 4$. Find its volume.

Answer: {{expr 4: 256/15}}
+++
review: 2026-10-26 Solids between two surfaces

**The goal.** A volume is $\\iiint_E 1\\, dV$. Cut $E$ into vertical columns: for each point of the shadow, $z$ runs from the bottom surface to the top one. Then describe the shadow.

**Step 1: bottom and top.** *Why solve for $z$:* $z$ is the inside variable. The bottom is $z = 0$; the plane $y + z = 4$ gives the top $z = 4 - y$.

**Step 2: the shadow.** *Why "bottom $\\le$ top":* a column has room only where $0 \\le 4 - y$, so $y \\le 4$. The solid is the part on the $y \\ge x^2$ side of the cylinder $y = x^2$, because only that side is closed off by $y \\le 4$ (on the other side, $x$ could grow forever and there'd be no finite volume). So $x^2 \\le y \\le 4$, which needs $x^2 \\le 4$, so $-2 \\le x \\le 2$.

**Step 3: integrate, inside out.**
- Inside: $\\int_0^{4 - y} 1\\, dz = 4 - y$, the column's height.
- Middle: $\\int_{x^2}^4 (4 - y)\\, dy = \\Big[4y - \\tfrac{y^2}{2}\\Big]_{x^2}^4 = 8 - \\left(4x^2 - \\tfrac{x^4}{2}\\right) = \\tfrac{(4 - x^2)^2}{2}$.
- Outside: $\\tfrac12\\int_{-2}^{2}(16 - 8x^2 + x^4)\\, dx = \\tfrac12\\left(64 - \\tfrac{128}{3} + \\tfrac{64}{5}\\right) = \\tfrac{256}{15} \\approx 17.07$.

**Common mistake.** Using $0 \\le z \\le 4$: the top is the slanted plane $z = 4 - y$, which is lower for larger $y$.
:::

:::problem 6
Find the volume of the solid inside both the sphere $x^2 + y^2 + z^2 = 4$ and the cylinder $x^2 + y^2 = 1$.

Answer: {{expr 4: 4pi/3 (8 - 3 sqrt(3))}}
+++
review: 2026-10-28 Cylindrical coordinates; 2026-10-28 Which coordinates to use

**The goal.** The solid is cut out by a cylinder around the $z$-axis ($r = 1$), so cylindrical coordinates make the shadow "$r \\le 1$". Each column goes from the bottom of the sphere to the top.

**Step 1: the column.** *Why from the sphere:* inside the sphere, $r^2 + z^2 \\le 4$, so $z^2 \\le 4 - r^2$, which is $-\\sqrt{4 - r^2} \\le z \\le \\sqrt{4 - r^2}$. The column's height is $2\\sqrt{4 - r^2}$.

**Step 2: the shadow.** *Why the cylinder decides it:* the solid must also be inside $x^2 + y^2 = 1$, which is $r \\le 1$. The sphere doesn't limit $r$ further here, since $r \\le 1 < 2$. All the way around: $0 \\le \\theta \\le 2\\pi$.

**Step 3: integrate.** With $dV = r\\, dz\\, dr\\, d\\theta$, the inside integral gives the column height times $r$: $2\\sqrt{4 - r^2}\\, r$. For the $r$-integral, let $w = 4 - r^2$, so $dw = -2r\\, dr$; $r = 0$ gives $w = 4$ and $r = 1$ gives $w = 3$:
$$\\int_0^1 2\\sqrt{4 - r^2}\\, r\\, dr = \\int_3^4 \\sqrt w\\, dw = \\tfrac23\\big(4^{3/2} - 3^{3/2}\\big) = \\tfrac23\\big(8 - 3\\sqrt3\\big).$$
Times $2\\pi$: $\\tfrac{4\\pi}{3}\\big(8 - 3\\sqrt3\\big) \\approx 11.74$.

**Is it reasonable?** A cylinder of radius $1$ from $z = -2$ to $2$ would hold $\\pi \\cdot 1^2 \\cdot 4 \\approx 12.57$. Our solid is a little less, because the sphere's caps curve down near the cylinder's wall ✓.
:::

:::problem 7
**(a)** In spherical coordinates, the upper half of the ball $x^2 + y^2 + z^2 \\le 1$ ($z \\ge 0$) is: {{circle 1: *$0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\tfrac\\pi2$, $0 \\le \\theta \\le 2\\pi$ | $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le \\pi$ | $0 \\le \\rho \\le 1$, $\\tfrac\\pi2 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$ | $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le 2\\pi$, $0 \\le \\theta \\le \\tfrac\\pi2$}}

**(b)** Compute $\\displaystyle\\iiint_B e^{(x^2 + y^2 + z^2)^{3/2}}\\, dV$ over the whole unit ball $B$. {{expr 3: 4pi (e - 1)/3}}
+++
review: 2026-10-28 Spherical coordinates

**(a) The goal.** Describe "upper half of the unit ball" in $\\rho$, $\\varphi$, $\\theta$. *Why each limit:* inside the unit ball is $\\rho \\le 1$. $z \\ge 0$ means $\\rho\\cos\\varphi \\ge 0$, so $\\cos\\varphi \\ge 0$, which is $\\varphi \\le \\tfrac\\pi2$ ($\\varphi$ is measured down from the positive $z$-axis). Nothing limits $\\theta$.

**(b) The goal.** The integrand depends only on the distance to the origin, $(x^2 + y^2 + z^2)^{3/2} = \\rho^3$, and the region is a ball, so spherical coordinates make both simple.

**Step 1: rewrite.** $(x^2 + y^2 + z^2)^{3/2} = (\\rho^2)^{3/2} = \\rho^3$, so the integrand is $e^{\\rho^3}$, times $\\rho^2\\sin\\varphi$ from $dV$.

**Step 2: the $\\rho$-integral.** *Why substitution works:* the $\\rho^2$ from $dV$ is exactly the derivative of $\\rho^3$ (up to the factor $3$). With $w = \\rho^3$, $dw = 3\\rho^2\\, d\\rho$: $\\int_0^1 e^{\\rho^3}\\rho^2\\, d\\rho = \\tfrac13\\int_0^1 e^w\\, dw = \\tfrac{e - 1}{3}$.

**Step 3: the angles.** *Why they just multiply:* the limits are numbers and $\\sin\\varphi$ doesn't involve $\\rho$. $\\int_0^\\pi\\sin\\varphi\\, d\\varphi = 2$ and $\\int_0^{2\\pi} d\\theta = 2\\pi$. Total: $\\tfrac{e - 1}{3} \\cdot 2 \\cdot 2\\pi = \\tfrac{4\\pi(e - 1)}{3} \\approx 7.20$.

**Why not the other choices in (a).**
- **$0 \\le \\theta \\le \\pi$ with all $\\varphi$:** that's the half with $y \\ge 0$, not $z \\ge 0$.
- **$\\tfrac\\pi2 \\le \\varphi \\le \\pi$:** that's the lower half, where $\\cos\\varphi \\le 0$.
- **$\\varphi$ up to $2\\pi$:** $\\varphi$ only goes from $0$ to $\\pi$; $\\theta$ does the going-around.
:::

:::scratch
:::

:::problem 8
$D$ is the parallelogram $0 \\le x + 2y \\le 2$, $-1 \\le x - y \\le 1$. Use $u = x + 2y$, $v = x - y$.

**(a)** $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| =$ {{expr 1: 1/3}}

**(b)** $\\displaystyle\\iint_D (x - y)^2\\, dA =$ {{expr 3: 4/9}}
+++
review: 2026-10-30 Using it: the tilted square; 2026-11-02 Curved edges: let the edges choose u and v

**The goal.** $D$'s edges are "$x + 2y = $ number" and "$x - y = $ number", so with $u = x + 2y$ and $v = x - y$ it's a rectangle. Pay for that with the Jacobian factor.

**Step 1: the new region.** *Why substitute:* the inequalities describe the same points in the new coordinates: $0 \\le u \\le 2$ and $-1 \\le v \\le 1$.

**Step 2 (a): the Jacobian.** *Why the shortcut:* $u$ and $v$ are given in terms of $x$ and $y$. $\\tfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 2 \\cdot 1 = -3$. *Why flip:* the two changes of coordinates undo each other, so their area factors multiply to $1$: $\\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\tfrac13$.

**Step 3: the integrand.** $(x - y)^2 = v^2$, since $v = x - y$.

**Step 4 (b): integrate.** *Why it splits:* number limits and a product. $\\int_0^2\\int_{-1}^{1} v^2 \\cdot \\tfrac13\\, dv\\, du = \\tfrac13 \\cdot \\tfrac23 \\cdot 2 = \\tfrac49$ (since $\\int_{-1}^1 v^2\\, dv = \\tfrac23$).

**Common mistake.** Multiplying by $3$ instead of $\\tfrac13$.
:::

:::problem 9
**(a)** $\\mathbf r(u, v) = \\langle 2\\cos u,\\ v,\\ 2\\sin u \\rangle$ is: {{circle 1: *a cylinder around the $y$-axis | a cylinder around the $z$-axis | a sphere | a cone}}

**(b)** $\\mathbf r(u, v) = \\langle u\\cos v,\\ u\\sin v,\\ u \\rangle$, $u \\ge 0$, is: {{circle 1: a cylinder | a paraboloid | *a cone | a plane}}

**(c)** Compute $\\displaystyle\\iint_S (x^2 + y^2)\\, dS$, where $S$ is the sphere $x^2 + y^2 + z^2 = 4$. {{expr 3: 128pi/3}}
+++
review: 2026-11-04 From a parametrization back to an equation; 2026-11-06 Integrals over a surface

**(a) and (b) The goal.** Identify a surface by eliminating the parameters: combine $x$, $y$, $z$ until $u$ and $v$ cancel.
- **(a)** *Why combine $x$ and $z$:* they hold the $\\cos u$ and $\\sin u$, and squaring and adding uses $\\cos^2 + \\sin^2 = 1$. $x^2 + z^2 = 4\\cos^2 u + 4\\sin^2 u = 4$, with $y = v$ free: a cylinder of radius $2$ around the $y$-axis.
- **(b)** $x^2 + y^2 = u^2(\\cos^2 v + \\sin^2 v) = u^2$, and $z = u \\ge 0$, so $z = \\sqrt{x^2 + y^2}$: a cone.

**(c) The goal.** A surface integral adds $f$ times the area of each patch: $\\iint_S f\\, dS$. On a sphere of radius $2$, use the sphere's parametrization, where $dS = 4\\sin\\varphi\\, d\\varphi\\, d\\theta$.

**Step 1: $f$ on the surface.** *Why substitute:* the integral runs over $\\varphi$ and $\\theta$, so $f$ must be written with them. $x^2 + y^2 = (2\\sin\\varphi)^2(\\cos^2\\theta + \\sin^2\\theta) = 4\\sin^2\\varphi$.

**Step 2: integrate.** $\\int_0^{2\\pi}\\int_0^\\pi 4\\sin^2\\varphi \\cdot 4\\sin\\varphi\\, d\\varphi\\, d\\theta = 32\\pi\\int_0^\\pi \\sin^3\\varphi\\, d\\varphi$. *Why rewrite $\\sin^3$:* write $\\sin^3\\varphi = (1 - \\cos^2\\varphi)\\sin\\varphi$ and let $w = \\cos\\varphi$; then $\\int_{-1}^{1}(1 - w^2)\\, dw = \\tfrac43$. Total: $32\\pi \\cdot \\tfrac43 = \\tfrac{128\\pi}{3}$.

**Why not the other choices.**
- **(a)** Around the $z$-axis would be $x^2 + y^2 = 4$ with $z$ free; here $y$ is free. A sphere needs all three coordinates limited, and a cone's radius changes with height.
- **(b)** A cylinder keeps the same radius at every height, but here the radius $u$ grows with $z = u$. A paraboloid would have $z = u^2$. A plane would have every component linear in $u$ and $v$, and $u\\cos v$ isn't.
:::

:::problem 10
**(a)** Use Green's Theorem to compute $\\displaystyle\\oint_C -y^3\\, dx + x^3\\, dy$ around the unit circle, counterclockwise. {{expr 3: 3pi/2}}

**(b)** For $\\mathbf F = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2} \\right\\rangle$, $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around the square $|x| + |y| = 1$, counterclockwise, is: {{circle 1: *$2\\pi$ | $0$ | $4$ | $\\pi$}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-11 Regions with holes

**(a) The goal.** The curve is closed and counterclockwise, and $P = -y^3$, $Q = x^3$ have no trouble points, so Green's Theorem turns the line integral into $\\iint_D (Q_x - P_y)\\, dA$, which will be easy in polar.

**Step 1: the integrand.** $Q_x = 3x^2$ and $P_y = -3y^2$, so $Q_x - P_y = 3x^2 + 3y^2 = 3r^2$.

**Step 2: integrate in polar.** *Why polar:* the region is the unit disk and the integrand is $3r^2$. $\\int_0^{2\\pi}\\int_0^1 3r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac34 = \\tfrac{3\\pi}{2}$.

**(b) The goal.** This field is undefined at the origin, which is inside the square, so plain Green's Theorem doesn't apply. Use the version with a hole instead.

**Why the answer is $2\\pi$.** Take a small circle around the origin inside the square. In the region between the square and the circle, $\\mathbf F$ is defined and $Q_x - P_y = 0$, so Green's Theorem with a hole says the square and the circle (both counterclockwise) give the same value. Around a circle centered at the origin, this field gives $2\\pi$.

**Why not the other choices in (b).**
- **$0$:** that would follow from Green's Theorem only if the origin weren't inside.
- **$4$:** this integral doesn't measure the square's size (its perimeter is $4\\sqrt2$ anyway). The shape doesn't matter, only that the loop goes once around the origin.
- **$\\pi$:** that's half a turn. A full loop around the origin gives $2\\pi$.
:::

:::problem 11
**(a)** Find the outward flux of $\\mathbf F = \\langle xy^2,\\ x^2 y \\rangle$ across the circle $x^2 + y^2 = 4$. {{expr 3: 8pi}}

**(b)** $\\mathbf G = \\langle yz,\\ xz,\\ xy + 1 \\rangle$ is: {{circle 1: *conservative | not conservative}}
+++
review: 2026-11-11 Green's Theorem for flux; 2026-11-13 Two identities, and what they say about conservative fields

**(a) The goal.** Flux across a closed curve equals the total divergence inside: $\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\iint_D (P_x + Q_y)\\, dA$. That avoids computing $\\mathbf F \\cdot \\mathbf n$ on the circle.

**Step 1: the divergence.** $P_x = \\tfrac{\\partial}{\\partial x}(xy^2) = y^2$ and $Q_y = \\tfrac{\\partial}{\\partial y}(x^2 y) = x^2$, so $P_x + Q_y = x^2 + y^2 = r^2$.

**Step 2: integrate in polar.** The disk of radius $2$: $\\int_0^{2\\pi}\\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac{16}{4} = 8\\pi$.

**(b) The goal.** On a region with no holes, zero curl means conservative. $\\operatorname{curl}\\mathbf G = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle x - x,\\ y - y,\\ z - z \\rangle = \\mathbf 0$, and $\\mathbf G$ is defined everywhere, so it's conservative. (A potential is $f = xyz + z$: $f_x = yz$, $f_y = xz$, $f_z = xy + 1$ ✓.)

**Why not "not conservative".** Every cross-partial pair matches and there are no holes, so nothing stops it from being conservative.
:::

:::problem 12
**(a)** Find the upward flux of $\\mathbf F = \\langle x,\\ y,\\ 2z \\rangle$ through the upper hemisphere $x^2 + y^2 + z^2 = 1$, $z \\ge 0$. {{expr 3: 8pi/3}}

**(b)** The divergence of $\\langle x^2, y^2, z^2 \\rangle$ at the point $(1, 2, 3)$ is {{expr 1: 12}}
+++
review: 2026-11-16 Surfaces that aren't closed: close them off; 2026-11-16 The Divergence Theorem

**(a) The goal.** The hemisphere isn't closed, so the Divergence Theorem doesn't apply to it directly. The plan: add a lid to make a closed surface, use the theorem on that, then subtract the lid's flux.

**Step 1: the lid.** *Why the flat disk:* it closes the hemisphere into the boundary of the half ball. On it, "outward" points down: $\\mathbf n = \\langle 0, 0, -1 \\rangle$.

**Step 2: the lid's flux.** $\\mathbf F \\cdot \\mathbf n = -2z$, and $z = 0$ on the lid, so the lid's flux is $0$.

**Step 3: the total, by the Divergence Theorem.** $\\operatorname{div}\\mathbf F = 1 + 1 + 2 = 4$, a constant, so the total flux is $4 \\times (\\text{volume of the half ball}) = 4 \\cdot \\tfrac23\\pi = \\tfrac{8\\pi}{3}$.

**Step 4: subtract.** *Why:* total $=$ hemisphere $+$ lid, so hemisphere $=$ total $-$ lid $= \\tfrac{8\\pi}{3} - 0 = \\tfrac{8\\pi}{3}$. Outward on the hemisphere is upward, which is what the problem asks.

**Check.** Computing the hemisphere's flux directly, with $\\mathbf r_\\varphi \\times \\mathbf r_\\theta = \\sin\\varphi\\,\\mathbf r$, also gives about $8.378 \\approx \\tfrac{8\\pi}{3}$ ✓.

**(b)** $\\operatorname{div}\\langle x^2, y^2, z^2 \\rangle = 2x + 2y + 2z$, which is $2 + 4 + 6 = 12$ at $(1, 2, 3)$.
:::
`;export{e as default};