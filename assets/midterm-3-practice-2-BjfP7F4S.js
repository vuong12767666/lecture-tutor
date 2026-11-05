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

**Steps, from the equations.**
1. **Meet:** $x^2 - 2 = x$, so $x^2 - x - 2 = 0$, which factors as $(x - 2)(x + 1) = 0$: $x = -1$ or $x = 2$.
2. **Top:** test $x = 0$: the line gives $0$ and the parabola gives $-2$, so the line is on top.
3. **Limits:** $-1 \\le x \\le 2$ and $x^2 - 2 \\le y \\le x$.
4. **(b)** $\\int_{-1}^{2}\\big(x - (x^2 - 2)\\big)\\, dx = \\Big[\\tfrac{x^2}{2} - \\tfrac{x^3}{3} + 2x\\Big]_{-1}^{2} = \\tfrac{10}{3} - \\left(-\\tfrac76\\right) = \\tfrac92$.

**Why not the other choices in (a).**
- **$\\int_x^{x^2 - 2}$:** bottom and top are reversed, which gives the negative.
- **$\\int_{-2}^{1}$:** the signs of the meeting points are flipped. Check: $(x - 2)(x + 1) = 0$ gives $2$ and $-1$.
- **$\\int_0^2$:** the region also extends left of the $y$-axis, to $x = -1$.
:::

:::problem 2
**(a)** Switch the order of $\\displaystyle\\int_0^1\\int_{y}^{2 - y} f(x, y)\\, dx\\, dy$ to $dy$ inside. {{circle 2: *$\\displaystyle\\int_0^1\\int_0^{x} f\\, dy\\, dx + \\int_1^2\\int_0^{2 - x} f\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{x} f\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_{x}^{2 - x} f\\, dy\\, dx$ | $\\displaystyle\\int_y^{2 - y}\\int_0^1 f\\, dy\\, dx$}}

**(b)** With $f(x, y) = y$, the integral equals {{expr 2: 1/3}}
+++
review: 2026-10-19 Switching the order

**(a) The goal.** Right now $x$ is inside: the limits say, for each $y$, which $x$-values belong to the region. Switching means answering the opposite question: for each $x$, which $y$-values belong? To write the new integral you need two things:
- the **new outside limits**: the smallest and largest $x$ anywhere in the region (they must be numbers), and
- the **new inside limits**: for one fixed $x$, the lowest and highest $y$ allowed.

The region itself doesn't change, only the question you ask about it. So everything comes from the conditions the old limits already give.

**Step 1: list the conditions every point must meet.** The old limits say a point $(x, y)$ is in the region exactly when $0 \\le y \\le 1$ and $y \\le x \\le 2 - y$. Writing them as inequalities lets you work with them without drawing.

**Step 2: find every possible $x$ (the new outside limits).** *Why:* the outside integral has to sweep across every $x$ the region contains.
- *Smallest $x$:* the conditions say $x \\ge y$ and $y \\ge 0$, so $x$ can't be negative. And $x = 0$ really occurs, at the point $(0, 0)$.
- *Largest $x$:* the conditions say $x \\le 2 - y$, and $y \\ge 0$ makes $2 - y$ at most $2$, so $x \\le 2$. And $x = 2$ occurs, at $(2, 0)$.

So the new outside limits are $0 \\le x \\le 2$.

**Step 3: hold $x$ fixed and solve every condition for $y$ (the new inside limits).** *Why:* with $dy$ inside, $x$ stays fixed while $y$ moves, so each condition has to be rewritten as "$y \\ge$ something" or "$y \\le$ something".
- $0 \\le y$ is already a lower bound: $y \\ge 0$.
- $y \\le 1$ is already an upper bound.
- $y \\le x$ comes straight from "$y \\le x$" in $y \\le x \\le 2 - y$.
- $x \\le 2 - y$ isn't solved for $y$ yet. Add $y$ to both sides and subtract $x$: $y \\le 2 - x$.

So $y$ must be at least $0$ and at most each of $1$, $x$, and $2 - x$.

**Step 4: only the smallest upper bound matters.** *Why:* $y$ has to obey all three upper bounds at once, so the strictest one is the real limit. Try two values of $x$:
- At $x = 0.5$: $y \\le 1$, $y \\le 0.5$, $y \\le 1.5$. Any $y \\le 0.5$ already obeys the other two, so the top limit is $0.5$, which is $x$.
- At $x = 1.5$: $y \\le 1$, $y \\le 1.5$, $y \\le 0.5$. Now the strictest is $0.5$, which is $2 - x$.

**Step 5: split where the winning bound changes.** *Why:* an integral's top limit has to be one formula, but the strictest bound is $x$ for some values of $x$ and $2 - x$ for others. They're equal where $x = 2 - x$, at $x = 1$. So use $y \\le x$ for $0 \\le x \\le 1$ and $y \\le 2 - x$ for $1 \\le x \\le 2$, as two integrals added together:
$$\\int_0^1\\int_0^{x} f\\, dy\\, dx + \\int_1^2\\int_0^{2 - x} f\\, dy\\, dx.$$
(The bound $1$ never wins on its own: at $x = 1$ all three are equal.)

**What it looks like.** The region is the triangle with corners $(0, 0)$, $(2, 0)$, and $(1, 1)$. Its top is made of two different lines meeting at $(1, 1)$, which is exactly why one formula can't be the top for every $x$.

**(b) The goal:** compute the same number with $f = y$. Either order works, since both describe the same region. The original order is one integral instead of two, so use it.
1. Inside, $y$ is a constant, so $\\int_y^{2 - y} y\\, dx = y \\cdot \\big((2 - y) - y\\big) = y(2 - 2y)$.
2. Outside: $\\int_0^1 (2y - 2y^2)\\, dy = 1 - \\tfrac23 = \\tfrac13$.

**Check with the switched order:** $\\int_0^1\\int_0^x y\\, dy\\, dx = \\int_0^1 \\tfrac{x^2}{2}\\, dx = \\tfrac16$ and $\\int_1^2\\int_0^{2 - x} y\\, dy\\, dx = \\int_1^2 \\tfrac{(2 - x)^2}{2}\\, dx = \\tfrac16$. Together, $\\tfrac13$ ✓, which also confirms the switch in (a).

**Why not the other choices in (a).**
- **$\\int_0^2\\int_0^x$:** for $x > 1$ the top isn't $y = x$ anymore; it's $y = 2 - x$ (try $x = 1.5$: $2 - x = 0.5 < 1.5$).
- **$\\int_0^2\\int_x^{2 - x}$:** that uses the old $x$-limits as $y$-limits. Redo the inequalities instead.
- **$\\int_y^{2 - y}\\int_0^1$:** just swapping the integral signs leaves $y$ in the outside limits.
:::

:::problem 3
$D$ is the disk $x^2 + (y - 1)^2 \\le 1$, which in polar is $r \\le 2\\sin\\theta$.

**(a)** The $\\theta$-limits are: {{circle 1: *$0 \\le \\theta \\le \\pi$ | $0 \\le \\theta \\le 2\\pi$ | $-\\tfrac\\pi2 \\le \\theta \\le \\tfrac\\pi2$ | $0 \\le \\theta \\le \\tfrac\\pi2$}}

**(b)** $\\displaystyle\\iint_D y\\, dA =$ {{expr 3: pi}}
+++
review: 2026-10-23 Polar regions with curved edges

**Steps.**
1. **The edge in polar:** $x^2 + y^2 - 2y + 1 \\le 1$ is $x^2 + y^2 \\le 2y$, so $r^2 \\le 2r\\sin\\theta$, which is $r \\le 2\\sin\\theta$.
2. **(a)** The range $0 \\le r \\le 2\\sin\\theta$ isn't empty only where $\\sin\\theta \\ge 0$: $0 \\le \\theta \\le \\pi$.
3. **(b)** $\\int_0^\\pi\\int_0^{2\\sin\\theta} (r\\sin\\theta)\\, r\\, dr\\, d\\theta = \\int_0^\\pi \\sin\\theta \\cdot \\tfrac{8\\sin^3\\theta}{3}\\, d\\theta = \\tfrac83\\int_0^\\pi \\sin^4\\theta\\, d\\theta = \\tfrac83 \\cdot \\tfrac{3\\pi}{8} = \\pi$.

**Check.** The disk has center $(0, 1)$, so the average $y$ is $1$, and its area is $\\pi$: $\\iint_D y\\, dA = 1 \\cdot \\pi$ ✓.

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

**Steps.**
1. $\\iint_D (x^2 + y^2)\\, dA = \\int_0^{2\\pi}\\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot 4 = 8\\pi$.
2. The area is $4\\pi$.
3. Average: $\\tfrac{8\\pi}{4\\pi} = 2$.

**Don't guess the halfway value.** Here the answer happens to equal the halfway point between $0$ and $4$, but that's a coincidence of this function. The common mistake is forgetting the $r$ in $dA$: averaging $r^2$ evenly over $0 \\le r \\le 2$ gives $\\tfrac43$, which is wrong. The $r$ counts the fact that more of the disk's area is near the edge, where $x^2 + y^2$ is large.
:::

:::scratch
:::

:::problem 5
$E$ is the solid bounded by the parabolic cylinder $y = x^2$ and the planes $z = 0$ and $y + z = 4$. Find its volume.

Answer: {{expr 4: 256/15}}
+++
review: 2026-10-26 Solids between two surfaces

**Steps, from the inequalities.**
1. **Bottom and top:** $0 \\le z \\le 4 - y$.
2. **Shadow:** the column has room where $4 - y \\ge 0$, so $y \\le 4$, and the solid is on the side $y \\ge x^2$. So $x^2 \\le y \\le 4$, which needs $x^2 \\le 4$: $-2 \\le x \\le 2$.
3. **Integrate:** $\\int_{x^2}^4 (4 - y)\\, dy = \\tfrac{(4 - x^2)^2}{2}$. Then $\\int_{-2}^{2}\\tfrac{(4 - x^2)^2}{2}\\, dx = \\tfrac12\\int_{-2}^{2}(16 - 8x^2 + x^4)\\, dx = \\tfrac12\\left(64 - \\tfrac{128}{3} + \\tfrac{64}{5}\\right) = \\tfrac{256}{15} \\approx 17.07$.

**Common mistake.** Using $0 \\le z \\le 4$: the top is the slanted plane $z = 4 - y$.
:::

:::problem 6
Find the volume of the solid inside both the sphere $x^2 + y^2 + z^2 = 4$ and the cylinder $x^2 + y^2 = 1$.

Answer: {{expr 4: 4pi/3 (8 - 3 sqrt(3))}}
+++
review: 2026-10-28 Cylindrical coordinates; 2026-10-28 Which coordinates to use

**Steps.**
1. **Cylindrical coordinates,** since the cylinder is $r = 1$.
2. **Column:** inside the sphere, $z^2 \\le 4 - r^2$, so $-\\sqrt{4 - r^2} \\le z \\le \\sqrt{4 - r^2}$, a height of $2\\sqrt{4 - r^2}$.
3. **Shadow:** inside the cylinder, $0 \\le r \\le 1$, all the way around.
4. **Integrate:** $2\\pi\\int_0^1 2\\sqrt{4 - r^2}\\, r\\, dr$. With $w = 4 - r^2$, $dw = -2r\\, dr$: $\\int_0^1 2\\sqrt{4 - r^2}\\, r\\, dr = \\int_3^4 \\sqrt w\\, dw = \\tfrac23\\big(8 - 3\\sqrt3\\big)$. Times $2\\pi$: $\\tfrac{4\\pi}{3}\\big(8 - 3\\sqrt3\\big) \\approx 11.74$.

**Is it reasonable?** The cylinder from $z = -2$ to $2$ would hold $\\pi \\cdot 1 \\cdot 4 \\approx 12.57$. Our solid is a bit less, because the sphere's caps curve down near the cylinder's wall ✓.
:::

:::problem 7
**(a)** In spherical coordinates, the upper half of the ball $x^2 + y^2 + z^2 \\le 1$ ($z \\ge 0$) is: {{circle 1: *$0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\tfrac\\pi2$, $0 \\le \\theta \\le 2\\pi$ | $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le \\pi$ | $0 \\le \\rho \\le 1$, $\\tfrac\\pi2 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$ | $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le 2\\pi$, $0 \\le \\theta \\le \\tfrac\\pi2$}}

**(b)** Compute $\\displaystyle\\iiint_B e^{(x^2 + y^2 + z^2)^{3/2}}\\, dV$ over the whole unit ball $B$. {{expr 3: 4pi (e - 1)/3}}
+++
review: 2026-10-28 Spherical coordinates

**(a)** $z \\ge 0$ means $\\rho\\cos\\varphi \\ge 0$, so $\\varphi \\le \\tfrac\\pi2$ ($\\varphi$ is measured down from the positive $z$-axis). $\\theta$ still goes all the way around.

**(b) Steps.**
1. $(x^2 + y^2 + z^2)^{3/2} = (\\rho^2)^{3/2} = \\rho^3$.
2. $\\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 e^{\\rho^3}\\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$. With $w = \\rho^3$, $dw = 3\\rho^2\\, d\\rho$: $\\int_0^1 e^{\\rho^3}\\rho^2\\, d\\rho = \\tfrac{e - 1}{3}$.
3. Times $\\int_0^\\pi\\sin\\varphi\\, d\\varphi = 2$ and $2\\pi$: $\\tfrac{4\\pi(e - 1)}{3} \\approx 7.20$.

**Why the $\\rho^2$ helped.** It's exactly the $dw$ the substitution needed, just like the $r$ in polar on Oct 23.

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

**Steps.**
1. **New region:** $0 \\le u \\le 2$, $-1 \\le v \\le 1$.
2. **(a)** $\\dfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 2 \\cdot 1 = -3$, so $|J| = \\tfrac13$.
3. **(b)** $(x - y)^2 = v^2$: $\\int_0^2\\int_{-1}^{1} v^2 \\cdot \\tfrac13\\, dv\\, du = \\tfrac13 \\cdot \\tfrac23 \\cdot 2 = \\tfrac49$.

**Common mistake.** Multiplying by $3$ instead of $\\tfrac13$.
:::

:::problem 9
**(a)** $\\mathbf r(u, v) = \\langle 2\\cos u,\\ v,\\ 2\\sin u \\rangle$ is: {{circle 1: *a cylinder around the $y$-axis | a cylinder around the $z$-axis | a sphere | a cone}}

**(b)** $\\mathbf r(u, v) = \\langle u\\cos v,\\ u\\sin v,\\ u \\rangle$, $u \\ge 0$, is: {{circle 1: a cylinder | a paraboloid | *a cone | a plane}}

**(c)** Compute $\\displaystyle\\iint_S (x^2 + y^2)\\, dS$, where $S$ is the sphere $x^2 + y^2 + z^2 = 4$. {{expr 3: 128pi/3}}
+++
review: 2026-11-04 From a parametrization back to an equation; 2026-11-06 Integrals over a surface

**(a)** $x^2 + z^2 = 4\\cos^2 u + 4\\sin^2 u = 4$, with $y = v$ free: a cylinder of radius $2$ around the $y$-axis.

**(b)** $x^2 + y^2 = u^2$ and $z = u \\ge 0$, so $z = \\sqrt{x^2 + y^2}$: a cone.

**(c) Steps.**
1. On the sphere of radius $2$, $x^2 + y^2 = (2\\sin\\varphi)^2 = 4\\sin^2\\varphi$, and $dS = 4\\sin\\varphi\\, d\\varphi\\, d\\theta$.
2. $\\int_0^{2\\pi}\\int_0^\\pi 16\\sin^3\\varphi\\, d\\varphi\\, d\\theta = 32\\pi\\int_0^\\pi\\sin^3\\varphi\\, d\\varphi = 32\\pi \\cdot \\tfrac43 = \\tfrac{128\\pi}{3}$.
3. $\\int_0^\\pi\\sin^3\\varphi\\, d\\varphi$: write $\\sin^3 = (1 - \\cos^2)\\sin$ and let $w = \\cos\\varphi$: $\\int_{-1}^{1}(1 - w^2)\\, dw = \\tfrac43$.

**Why not the other choices.**
- **(a)** Around the $z$-axis would be $x^2 + y^2 = 4$ with $z$ free; here $y$ is free. A sphere needs all three coordinates limited, and a cone's radius changes with height.
- **(b)** A cylinder keeps the same radius at every height, but here the radius $u$ grows with $z = u$. A paraboloid would have $z = u^2$. A plane would have every component linear in $u$ and $v$, and $u\\cos v$ isn't.
:::

:::problem 10
**(a)** Use Green's Theorem to compute $\\displaystyle\\oint_C -y^3\\, dx + x^3\\, dy$ around the unit circle, counterclockwise. {{expr 3: 3pi/2}}

**(b)** For $\\mathbf F = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2} \\right\\rangle$, $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around the square $|x| + |y| = 1$, counterclockwise, is: {{circle 1: *$2\\pi$ | $0$ | $4$ | $\\pi$}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-11 Regions with holes

**(a) Steps.**
1. $Q_x - P_y = 3x^2 - (-3y^2) = 3x^2 + 3y^2 = 3r^2$.
2. $\\iint_D 3r^2\\, dA = \\int_0^{2\\pi}\\int_0^1 3r^3\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac34 = \\tfrac{3\\pi}{2}$.

**(b)** The square goes once around the origin, where $\\mathbf F$ is undefined. Between the square and a small circle around the origin, $Q_x - P_y = 0$, so the square gives the same as the circle: $2\\pi$.

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

**(a) Steps.**
1. $\\operatorname{div}\\mathbf F = P_x + Q_y = y^2 + x^2 = r^2$.
2. $\\iint_D r^2\\, dA = \\int_0^{2\\pi}\\int_0^2 r^3\\, dr\\, d\\theta = 2\\pi \\cdot 4 = 8\\pi$.

**(b)** $\\operatorname{curl}\\mathbf G = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle x - x,\\ y - y,\\ z - z \\rangle = \\mathbf 0$, and $\\mathbf G$ is defined everywhere, so it's conservative. A potential is $f = xyz + z$.

**Why not "not conservative".** Every cross-partial pair matches and there are no holes, so nothing stops it from being conservative.
:::

:::problem 12
**(a)** Find the upward flux of $\\mathbf F = \\langle x,\\ y,\\ 2z \\rangle$ through the upper hemisphere $x^2 + y^2 + z^2 = 1$, $z \\ge 0$. {{expr 3: 8pi/3}}

**(b)** The divergence of $\\langle x^2, y^2, z^2 \\rangle$ at the point $(1, 2, 3)$ is {{expr 1: 12}}
+++
review: 2026-11-16 Surfaces that aren't closed: close them off; 2026-11-16 The Divergence Theorem

**(a) Steps.**
1. **Close it off** with the disk $x^2 + y^2 \\le 1$ at $z = 0$, whose outward normal is $\\langle 0, 0, -1 \\rangle$.
2. **Lid flux:** $\\mathbf F \\cdot \\langle 0, 0, -1 \\rangle = -2z = 0$ on $z = 0$, so it's $0$.
3. **Divergence Theorem:** $\\operatorname{div}\\mathbf F = 1 + 1 + 2 = 4$, and the half ball has volume $\\tfrac23\\pi$, so the total is $4 \\cdot \\tfrac23\\pi = \\tfrac{8\\pi}{3}$.
4. **Hemisphere flux** $=$ total $-$ lid $= \\tfrac{8\\pi}{3}$.

**Check.** Computing the hemisphere's flux directly, with $\\mathbf r_\\varphi \\times \\mathbf r_\\theta = \\sin\\varphi\\,\\mathbf r$, also gives about $8.378 \\approx \\tfrac{8\\pi}{3}$ ✓.

**(b)** $\\operatorname{div} = 2x + 2y + 2z = 2 + 4 + 6 = 12$ at $(1, 2, 3)$.
:::
`;export{e as default};