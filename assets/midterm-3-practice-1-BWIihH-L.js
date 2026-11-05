var e=`---
title: Midterm 3 Practice Test 1
exam: Midterm 3
minutes: 60
---

:::problem 1
Consider $\\displaystyle\\int_0^1\\int_{\\sqrt x}^{1} e^{y^3}\\, dy\\, dx$.

**(a)** Which integral is the same with the order switched? {{circle 2: *$\\displaystyle\\int_0^1\\int_0^{y^2} e^{y^3}\\, dx\\, dy$ | $\\displaystyle\\int_0^1\\int_{y^2}^{1} e^{y^3}\\, dx\\, dy$ | $\\displaystyle\\int_{\\sqrt x}^1\\int_0^1 e^{y^3}\\, dx\\, dy$ | $\\displaystyle\\int_0^1\\int_0^{\\sqrt y} e^{y^3}\\, dx\\, dy$}}

**(b)** Its value is {{expr 2: (e - 1)/3}}
+++
review: 2026-10-19 Switching the order

**The goal.** The inside integral is $\\int e^{y^3}\\, dy$, and $e^{y^3}$ has no antiderivative built from the usual functions, so this order is stuck. The plan: describe the same region with $x$ inside instead, where the inside integral will be easy, and then integrate.

**Step 1: list the conditions every point must meet.** *Why:* switching the order doesn't change the region, so these conditions are all you need. The limits say $0 \\le x \\le 1$ and $\\sqrt x \\le y \\le 1$.

**Step 2: find every possible $y$ (the new outside limits).** *Why:* the outside integral has to sweep across every $y$ in the region, using numbers.
- *Smallest:* $y \\ge \\sqrt x$ and $\\sqrt x \\ge 0$, so $y \\ge 0$. It happens at $(0, 0)$.
- *Largest:* $y \\le 1$, which happens (for example at $x = 0$).

So $0 \\le y \\le 1$.

**Step 3: hold $y$ fixed and solve each condition for $x$.** *Why:* with $dx$ inside, $y$ stays fixed while $x$ moves, so each condition must read "$x \\ge$ something" or "$x \\le$ something".
- $x \\ge 0$ and $x \\le 1$ already are.
- $\\sqrt x \\le y$ isn't. Square both sides: $x \\le y^2$. Squaring is allowed because both sides are $\\ge 0$, and squaring numbers $\\ge 0$ keeps their order.

**Step 4: keep the strictest upper bound.** *Why:* $x$ has to obey both $x \\le 1$ and $x \\le y^2$. Since $y \\le 1$, $y^2 \\le 1$, so $x \\le y^2$ is always the stricter one, and $x \\le 1$ adds nothing. No split is needed: $0 \\le x \\le y^2$.

**Step 5 (b): integrate.** *Why the inside is easy now:* with $dx$ inside, $e^{y^3}$ doesn't change, so it's a constant: $\\int_0^{y^2} e^{y^3}\\, dx = y^2 e^{y^3}$. The $y^2$ that appeared is exactly what the substitution $w = y^3$ needs, since $dw = 3y^2\\, dy$:
$$\\int_0^1 y^2 e^{y^3}\\, dy = \\frac13\\int_0^1 e^w\\, dw = \\frac{e - 1}{3}.$$

**Check.** Adding up the original integral numerically gives about $0.5728$, and $\\tfrac{e - 1}{3} \\approx 0.5728$ ✓.

**Why not the other choices in (a).**
- **$\\int_0^1\\int_{y^2}^1$:** that's the region to the right of $x = y^2$, but $\\sqrt x \\le y$ means $x \\le y^2$, to the left.
- **$\\int_{\\sqrt x}^1\\int_0^1$:** just swapping the integral signs leaves $x$ in the outside limits, so the answer would still depend on $x$.
- **$\\int_0^1\\int_0^{\\sqrt y}$:** $\\sqrt x \\le y$ squares to $x \\le y^2$, not $x \\le \\sqrt y$.
:::

:::problem 2
Let $D$ be the part of the ring $1 \\le x^2 + y^2 \\le 4$ in the first quadrant. Compute $\\displaystyle\\iint_D \\sqrt{x^2 + y^2}\\; dA$.

Answer: {{expr 4: 7pi/6}}
+++
review: 2026-10-19 Disks: switching to polar coordinates; 2026-10-23 Switching an x, y integral to polar

**The goal.** The region is part of a ring and the integrand is $\\sqrt{x^2 + y^2}$. Both are about distance from the origin, which is exactly what $r$ measures, so polar coordinates will turn the ring into number limits and the square root into $r$.

**Step 1: the limits, from the inequalities.** *Why:* the limits have to describe the same region in $r$ and $\\theta$.
- $1 \\le x^2 + y^2 \\le 4$ becomes $1 \\le r^2 \\le 4$, since $x^2 + y^2 = r^2$. With $r \\ge 0$, that's $1 \\le r \\le 2$.
- First quadrant means $x \\ge 0$ and $y \\ge 0$, so $\\cos\\theta \\ge 0$ and $\\sin\\theta \\ge 0$: $0 \\le \\theta \\le \\tfrac\\pi2$.

**Step 2: the integrand.** *Why multiply by $r$:* in polar, a small piece has area about $r\\,\\Delta r\\,\\Delta\\theta$ (its curved side is an arc of radius $r$), so $dA = r\\, dr\\, d\\theta$. The integrand $\\sqrt{x^2 + y^2} = r$, times that $r$, gives $r^2$.

**Step 3: integrate.** *Why the $\\theta$-integral is just a multiplication:* $r^2$ doesn't depend on $\\theta$.
- Inside: $\\int_1^2 r^2\\, dr = \\tfrac{8 - 1}{3} = \\tfrac73$.
- Outside: $\\tfrac73 \\cdot \\tfrac\\pi2 = \\tfrac{7\\pi}{6}$.

**Common mistake.** Forgetting the $r$ in $dA$, which gives $\\tfrac\\pi2 \\cdot \\tfrac32 = \\tfrac{3\\pi}{4}$.
:::

:::problem 3
A thin plate fills the quarter disk $x^2 + y^2 \\le 9$, $x \\ge 0$, $y \\ge 0$, with density $\\rho = 1$.

**(a)** Its mass is {{expr 1: 9pi/4}}

**(b)** The $y$-coordinate of its center of mass is $\\bar y =$ {{expr 2: 4/pi}}
+++
review: 2026-10-23 Mass and center of mass

**The goal.** The center of mass is where the plate balances: $\\bar y = \\dfrac{\\iint_D y\\rho\\, dA}{m}$. So you need two numbers, the mass $m$ and the moment $\\iint_D y\\rho\\, dA$, and then divide.

**Step 1 (a): the mass.** *Why it's the area:* with $\\rho = 1$, each small piece has mass $1 \\cdot \\Delta A$, so the mass adds up to the area. A disk of radius $3$ has area $9\\pi$, and this is a quarter of it: $\\tfrac{9\\pi}{4}$.

**Step 2: the moment, in polar.** *Why polar:* the region is part of a disk centered at the origin.
- *Limits, from the inequalities:* $x^2 + y^2 \\le 9$ is $r \\le 3$; $x \\ge 0$ and $y \\ge 0$ give $0 \\le \\theta \\le \\tfrac\\pi2$.
- *Integrand:* $y = r\\sin\\theta$, times the $r$ from $dA$: $r^2\\sin\\theta$.
- *Why it splits:* every limit is a number and the integrand is (function of $\\theta$) $\\times$ (function of $r$), so it's a product of two single integrals: $\\int_0^{\\pi/2}\\sin\\theta\\, d\\theta = 1$ and $\\int_0^3 r^2\\, dr = 9$. The moment is $9$.

**Step 3 (b): divide.** $\\bar y = \\dfrac{9}{9\\pi/4} = 9 \\cdot \\dfrac{4}{9\\pi} = \\dfrac4\\pi \\approx 1.27$.

**Check.** $\\bar y$ is between $0$ and $3$, and below $1.5$ because the quarter disk is wider near the bottom, so more of its mass is low. By symmetry across the line $y = x$, $\\bar x = \\tfrac4\\pi$ too.
:::

:::scratch
:::

:::problem 4
$E$ is the solid in the first octant under the plane $2x + y + z = 4$.

**(a)** Which integral gives the volume of $E$? {{circle 2: *$\\displaystyle\\int_0^2\\int_0^{4 - 2x}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{4}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^4\\int_0^{4 - 2x}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{4 - 2x}\\int_0^{4} dz\\, dy\\, dx$}}

**(b)** The volume is {{expr 2: 16/3}}
+++
review: 2026-10-26 Solids between two surfaces

**The goal.** A volume is $\\iiint_E 1\\, dV$. The plan is to cut $E$ into vertical columns: for each point of its shadow, $z$ runs from the bottom of the solid to the top. Then describe the shadow as on Oct 19.

**Step 1: write the solid as inequalities.** *Why:* the limits come straight from them. "First octant" is $x, y, z \\ge 0$; "under the plane" is $2x + y + z \\le 4$.

**Step 2: the $z$-limits.** *Why solve for $z$:* $z$ is the inside variable, so its limits are the bottom and top of each column. $z \\ge 0$ is the bottom. Subtracting $2x + y$ from both sides of $2x + y + z \\le 4$ gives the top: $z \\le 4 - 2x - y$.

**Step 3: the shadow.** *Why "bottom $\\le$ top":* a column exists above $(x, y)$ only if it has room, which is $0 \\le 4 - 2x - y$, so $2x + y \\le 4$. With $x, y \\ge 0$, that's the shadow.

**Step 4: describe the shadow.** *Why solve for $y$:* $y$ is the middle variable, so its limits can depend on $x$ but nothing else. $2x + y \\le 4$ gives $y \\le 4 - 2x$; with $y \\ge 0$, $0 \\le y \\le 4 - 2x$. For any $y$ to fit, $4 - 2x \\ge 0$, so $x \\le 2$; with $x \\ge 0$, the outside limits are $0 \\le x \\le 2$.

**Step 5 (b): integrate, inside out.**
- Inside: $\\int_0^{4 - 2x - y} 1\\, dz = 4 - 2x - y$, the height of the column.
- Middle: $\\int_0^{4 - 2x}(4 - 2x - y)\\, dy = (4 - 2x)^2 - \\tfrac{(4 - 2x)^2}{2} = \\tfrac{(4 - 2x)^2}{2}$.
- Outside: with $w = 4 - 2x$, $dw = -2\\, dx$: $\\int_0^2 \\tfrac{(4 - 2x)^2}{2}\\, dx = \\tfrac14\\int_0^4 w^2\\, dw = \\tfrac{16}{3}$.

**Check.** The solid is a tetrahedron with corners on the axes at $x = 2$, $y = 4$, $z = 4$, so its volume is $\\tfrac13 \\times (\\text{base } \\tfrac12 \\cdot 2 \\cdot 4) \\times 4 = \\tfrac{16}{3}$ ✓.

**Why not the other choices in (a).**
- **$y$ from $0$ to $4$:** the shadow's edge is $y = 4 - 2x$, which depends on $x$. A constant $4$ includes points outside the solid.
- **$x$ from $0$ to $4$:** the shadow only reaches $x = 2$, where $4 - 2x = 0$.
- **$z$ from $0$ to $4$:** the top is the slanted plane $z = 4 - 2x - y$, not $z = 4$.
:::

:::problem 5
$E$ is the solid between the paraboloid $z = x^2 + y^2$ and the plane $z = 4$. Compute $\\displaystyle\\iiint_E z\\, dV$.

Answer: {{expr 4: 64pi/3}}
+++
review: 2026-10-28 Cylindrical coordinates

**The goal.** The solid is round around the $z$-axis (the paraboloid $z = x^2 + y^2$ looks the same in every direction), so cylindrical coordinates will turn $x^2 + y^2$ into $r^2$ and the round shadow into number limits.

**Step 1: bottom and top.** *Why:* $z$ is the inside variable, so its limits are where each column starts and stops. The solid is above the paraboloid and below the plane: $r^2 \\le z \\le 4$.

**Step 2: the shadow.** *Why "bottom $\\le$ top":* a column exists only where it has room, $r^2 \\le 4$, so $0 \\le r \\le 2$. Nothing limits the angle, so $0 \\le \\theta \\le 2\\pi$.

**Step 3: the integrand.** *Why the extra $r$:* in cylindrical coordinates a small piece is a polar patch ($r\\,\\Delta r\\,\\Delta\\theta$) times a height $\\Delta z$, so $dV = r\\, dz\\, dr\\, d\\theta$. The integrand becomes $z \\cdot r$.

**Step 4: integrate, inside out.**
- Inside (in $z$, with $r$ fixed): $\\int_{r^2}^4 z\\, dz = \\tfrac{16 - r^4}{2}$. Times $r$: $\\tfrac{16r - r^5}{2}$.
- Middle: $\\int_0^2 \\tfrac{16r - r^5}{2}\\, dr = \\tfrac12\\Big[8r^2 - \\tfrac{r^6}{6}\\Big]_0^2 = \\tfrac12\\left(32 - \\tfrac{64}{6}\\right) = \\tfrac{32}{3}$.
- Outside: nothing depends on $\\theta$, so multiply by $2\\pi$: $\\tfrac{64\\pi}{3}$.

**Common mistake.** Using $0 \\le z \\le 4$: the solid starts at the paraboloid, not at $z = 0$.
:::

:::problem 6
$E$ is the solid inside the sphere $x^2 + y^2 + z^2 = 9$ and above the cone $z = \\sqrt{\\tfrac{x^2 + y^2}{3}}$, which is $\\varphi = \\tfrac\\pi3$.

**(a)** The easiest coordinates for $E$ are: {{circle 1: $x, y, z$ | cylindrical | *spherical}}

**(b)** The volume of $E$ is {{expr 3: 9pi}}
+++
review: 2026-10-28 Spherical coordinates; 2026-10-28 Which coordinates to use

**The goal.** The solid is bounded by a sphere and a cone. In spherical coordinates the sphere is "$\\rho = $ number" and the cone is "$\\varphi = $ number", so every limit will be a number.

**Step 1: the limits.** *Why each one:*
- *Inside the sphere:* $x^2 + y^2 + z^2 \\le 9$ is $\\rho^2 \\le 9$, so $0 \\le \\rho \\le 3$.
- *Above the cone:* on the cone, $z = \\tfrac{r}{\\sqrt3}$, so $\\tan\\varphi = \\tfrac rz = \\sqrt3$, which is $\\varphi = \\tfrac\\pi3$. Above the cone means closer to straight up, which is a smaller angle from the positive $z$-axis: $0 \\le \\varphi \\le \\tfrac\\pi3$.
- *Around:* nothing limits $\\theta$, so $0 \\le \\theta \\le 2\\pi$.

**Step 2: the volume factor.** *Why $\\rho^2\\sin\\varphi$:* a small spherical piece has edges $\\Delta\\rho$, $\\rho\\,\\Delta\\varphi$, and $\\rho\\sin\\varphi\\,\\Delta\\theta$, so its volume is $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$.

**Step 3 (b): integrate.** *Why it splits into three:* every limit is a number and $\\rho^2\\sin\\varphi$ is a product. $\\int_0^3 \\rho^2\\, d\\rho = 9$, $\\int_0^{\\pi/3}\\sin\\varphi\\, d\\varphi = 1 - \\cos\\tfrac\\pi3 = \\tfrac12$, and $\\int_0^{2\\pi} d\\theta = 2\\pi$. Product: $9 \\cdot \\tfrac12 \\cdot 2\\pi = 9\\pi$.

**Why not the other choices in (a).**
- **$x, y, z$:** the sphere and cone both give square-root limits.
- **cylindrical:** the top would be $z = \\sqrt{9 - r^2}$, and you'd first have to find where the cone meets the sphere. In spherical coordinates neither step is needed.
:::

:::scratch
:::

:::problem 7
Let $D$ be the region $0 \\le x - y \\le 2$, $1 \\le x + y \\le 3$. Use $u = x + y$, $v = x - y$.

**(a)** $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| =$ {{expr 1: 1/2}}

**(b)** $\\displaystyle\\iint_D (x + y)\\, dA =$ {{expr 3: 4}}
+++
review: 2026-10-30 The Jacobian: how much areas stretch; 2026-10-30 Using it: the tilted square

**The goal.** $D$'s edges are "$x - y = $ number" and "$x + y = $ number", so with $u = x + y$ and $v = x - y$ it becomes a rectangle with number limits. The cost is a Jacobian factor, because the change of coordinates stretches areas.

**Step 1: the new region.** *Why substitute into the inequalities:* they describe the same points in the new coordinates. $1 \\le x + y \\le 3$ is $1 \\le u \\le 3$, and $0 \\le x - y \\le 2$ is $0 \\le v \\le 2$.

**Step 2 (a): the Jacobian.** *Why it's needed:* a small rectangle $\\Delta u \\times \\Delta v$ is a tilted square in the $xy$-plane with a different area, and $\\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right|$ is the factor.
- *Why use the shortcut:* $u$ and $v$ are given as formulas in $x$ and $y$, so it's quicker to compute $\\tfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 1 \\cdot 1 = -2$ than to solve for $x$ and $y$.
- *Why flip it:* going from $(u, v)$ to $(x, y)$ and back must leave areas unchanged, so the two factors multiply to $1$. So $\\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\tfrac12$.

**Step 3: the integrand.** $x + y$ is $u$ by definition.

**Step 4 (b): integrate.** $\\int_0^2\\int_1^3 u \\cdot \\tfrac12\\, du\\, dv = \\tfrac12 \\cdot 4 \\cdot 2 = 4$, since $\\int_1^3 u\\, du = \\tfrac{9 - 1}{2} = 4$ and $\\int_0^2 dv = 2$.

**Common mistake.** Using $|J| = 2$ instead of $\\tfrac12$: the shortcut gives $\\tfrac{\\partial(u, v)}{\\partial(x, y)}$, which has to be flipped.
:::

:::problem 8
**(a)** Which parametrizes the cone $z = \\sqrt{x^2 + y^2}$, $0 \\le z \\le 2$? {{circle 1: *$\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$, $0 \\le r \\le 2$ | $\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r^2 \\rangle$, $0 \\le r \\le 2$ | $\\langle 2\\cos\\theta,\\ 2\\sin\\theta,\\ z \\rangle$, $0 \\le z \\le 2$ | $\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$, $0 \\le r \\le 4$}}

**(b)** Find the tangent plane to $\\mathbf r(u, v) = \\langle u^2,\\ v^2,\\ u + 2v \\rangle$ at the point $(1, 1, 3)$.

{{plane 3: 1, 2, -2, -3}}
+++
review: 2026-11-04 Parametric surfaces; 2026-11-04 Tangent vectors and the normal vector

**(b) The goal.** A plane needs a point and a normal vector. The point is given; the normal comes from the cross product of the two tangent vectors $\\mathbf r_u$ and $\\mathbf r_v$, which has to be evaluated at the $(u, v)$ that gives the point.

**Step 1: which $(u, v)$?** *Why:* $\\mathbf r_u$ and $\\mathbf r_v$ change from point to point, so they must be evaluated at the right one. Match components: $u^2 = 1$, $v^2 = 1$, and $u + 2v = 3$. Only $u = v = 1$ works. (For example, $u = -1$ would need $v = 2$, but $v^2 = 1$.)

**Step 2: the tangent vectors.** *Why they're tangent:* fixing $v$ and changing $u$ traces a curve on the surface, and $\\mathbf r_u$ is that curve's velocity. Differentiate each component: $\\mathbf r_u = \\langle 2u, 0, 1 \\rangle = \\langle 2, 0, 1 \\rangle$ and $\\mathbf r_v = \\langle 0, 2v, 2 \\rangle = \\langle 0, 2, 2 \\rangle$.

**Step 3: the normal.** *Why the cross product:* it's perpendicular to both tangent vectors, so it's perpendicular to the surface.
$$\\mathbf r_u \\times \\mathbf r_v = \\langle 0 \\cdot 2 - 1 \\cdot 2,\\ 1 \\cdot 0 - 2 \\cdot 2,\\ 2 \\cdot 2 - 0 \\cdot 0 \\rangle = \\langle -2, -4, 4 \\rangle.$$

**Step 4: the plane.** A plane through $(x_0, y_0, z_0)$ with normal $\\langle a, b, c \\rangle$ is $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$: every direction in the plane is perpendicular to the normal. Here $-2(x - 1) - 4(y - 1) + 4(z - 3) = 0$, which simplifies (divide by $-2$) to $x + 2y - 2z = -3$.

**Check.** $(1, 1, 3)$: $1 + 2 - 6 = -3$ ✓. Any nonzero multiple of the equation is also correct.

**Why not the other choices in (a).**
- **$z = r^2$:** that's the paraboloid $z = x^2 + y^2$.
- **$\\langle 2\\cos\\theta, 2\\sin\\theta, z \\rangle$:** that's the cylinder of radius $2$.
- **$0 \\le r \\le 4$:** on the cone $z = r$, so $z \\le 2$ means $r \\le 2$.
:::

:::problem 9
Find the area of the part of the cone $z = \\sqrt{x^2 + y^2}$ with $z \\le 2$.

Answer: {{expr 4: 4 sqrt(2) pi}}
+++
review: 2026-11-06 Surface area

**The goal.** The cone is the graph $z = \\sqrt{x^2 + y^2}$, and a graph's area is $\\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\, dA$ over its shadow $D$. *Why that formula:* each small patch is a tilted parallelogram whose area is its shadow's area times $\\sqrt{1 + f_x^2 + f_y^2}$, the length of the normal $\\langle -f_x, -f_y, 1 \\rangle$.

**Step 1: the partial derivatives.** $f = (x^2 + y^2)^{1/2}$, so by the chain rule $f_x = \\tfrac{x}{\\sqrt{x^2 + y^2}}$ and $f_y = \\tfrac{y}{\\sqrt{x^2 + y^2}}$.

**Step 2: the area factor.** $f_x^2 + f_y^2 = \\tfrac{x^2 + y^2}{x^2 + y^2} = 1$, so $\\sqrt{1 + f_x^2 + f_y^2} = \\sqrt2$ everywhere. *Why it's constant:* the cone's surface is tilted at $45^\\circ$ everywhere, so every patch is stretched by the same factor.

**Step 3: the shadow.** *Why the disk:* $z \\le 2$ means $\\sqrt{x^2 + y^2} \\le 2$, the disk of radius $2$, with area $4\\pi$.

**Step 4: the area.** A constant factor times the shadow's area: $\\sqrt2 \\cdot 4\\pi = 4\\sqrt2\\,\\pi \\approx 17.8$.
:::

:::scratch
:::

:::problem 10
$C$ is the boundary of the triangle with corners $(0, 0)$, $(2, 0)$, $(0, 2)$, counterclockwise. Compute $\\displaystyle\\oint_C (y^2 - x)\\, dx + (3xy + e^y)\\, dy$.

Answer: {{expr 4: 4/3}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-09 Using it: hard line integral, easy double integral

**The goal.** Going along three edges means three line integrals. Since $C$ is closed, Green's Theorem replaces all three with one double integral over the triangle, of $Q_x - P_y$.

**Step 1: check that Green's Theorem applies.** *Why:* it needs a closed curve, counterclockwise, with $P$ and $Q$ well-behaved inside. The triangle's boundary is closed and counterclockwise, and $P = y^2 - x$, $Q = 3xy + e^y$ have no trouble points.

**Step 2: the integrand.** $Q_x = 3y$ ($e^y$ doesn't change with $x$) and $P_y = 2y$ ($-x$ doesn't change with $y$), so $Q_x - P_y = y$.

**Step 3: the triangle, from its edges.** *Why as inequalities:* they give the limits directly. The edges are $x = 0$, $y = 0$, and the line through $(2, 0)$ and $(0, 2)$, which is $x + y = 2$. So $x \\ge 0$, $y \\ge 0$, $y \\le 2 - x$, and $0 \\le x \\le 2$.

**Step 4: integrate.** $\\int_0^{2 - x} y\\, dy = \\tfrac{(2 - x)^2}{2}$, and $\\int_0^2 \\tfrac{(2 - x)^2}{2}\\, dx = \\tfrac12 \\cdot \\tfrac83 = \\tfrac43$.

**Check.** Doing the three line integrals directly also gives $\\tfrac43$. The terms $-x\\, dx$ and $e^y\\, dy$ contribute nothing around a closed curve; that's why they vanished from $Q_x - P_y$.
:::

:::problem 11
Let $\\mathbf F = \\langle 2xy + z,\\ x^2,\\ x \\rangle$.

**(a)** $\\mathbf F$ is: {{circle 1: *conservative | not conservative}}

**(b)** A potential function is $f =$ {{expr-c 2: x^2 y + x z}}
+++
review: 2026-11-13 Curl; 2026-11-13 Two identities, and what they say about conservative fields

**(a) The goal.** On a region with no holes, a field is conservative exactly when its curl is $\\mathbf 0$ (all three cross-partial pairs match). So compute the curl and check where $\\mathbf F$ is defined.

**Step 1: the curl.** $P = 2xy + z$, $Q = x^2$, $R = x$:
- $R_y - Q_z = 0 - 0 = 0$,
- $P_z - R_x = 1 - 1 = 0$,
- $Q_x - P_y = 2x - 2x = 0$.

**Step 2: holes.** $\\mathbf F$ is defined everywhere, so there are no holes, and zero curl means conservative.

**(b) The goal.** Find $f$ with $\\nabla f = \\mathbf F$. *Why one component at a time:* each component of $\\mathbf F$ is one partial derivative of $f$, so integrate one, then use the others to fix what's left.
1. $f_x = 2xy + z$. Integrate in $x$, holding $y$ and $z$ fixed: $f = x^2 y + xz + g(y, z)$. The "constant" can depend on $y$ and $z$, because they were held fixed.
2. $f_y = x^2 + g_y$ must equal $Q = x^2$, so $g_y = 0$: $g$ doesn't depend on $y$.
3. $f_z = x + g_z$ must equal $R = x$, so $g_z = 0$: $g$ doesn't depend on $z$ either. So $g$ is a constant, and $f = x^2 y + xz$.

**Check.** $\\nabla f = \\langle 2xy + z,\\ x^2,\\ x \\rangle$ ✓.

**Why not "not conservative".** That needs some cross-partial pair to differ, or a hole that matters. Here all three pairs match and there are no holes.
:::

:::problem 12
**(a)** Find the outward flux of $\\mathbf F = \\langle x + y^2,\\ y + z^2,\\ z + x^2 \\rangle$ through the sphere $x^2 + y^2 + z^2 = 4$.

Answer: {{expr 3: 32pi}}

**(b)** The outward flux of $\\mathbf G = \\langle -y, x, 0 \\rangle$ through any closed surface is: {{circle 1: *$0$ | positive | negative | it depends on the surface}}
+++
review: 2026-11-16 The Divergence Theorem; 2026-11-13 Divergence

**(a) The goal.** The sphere is a closed surface, so the Divergence Theorem turns the flux into $\\iiint_E \\operatorname{div}\\mathbf F\\, dV$ over the ball inside. That avoids parametrizing the sphere and dotting $\\mathbf F$ with its normal.

**Step 1: the divergence.** $\\tfrac{\\partial}{\\partial x}(x + y^2) = 1$, $\\tfrac{\\partial}{\\partial y}(y + z^2) = 1$, $\\tfrac{\\partial}{\\partial z}(z + x^2) = 1$. *Why the squares drop out:* each squared term doesn't involve the variable it's differentiated by. So $\\operatorname{div}\\mathbf F = 3$.

**Step 2: integrate.** *Why it's just a multiplication:* the divergence is a constant, so its integral is $3$ times the ball's volume: $3 \\cdot \\tfrac43\\pi \\cdot 2^3 = 32\\pi$.

**(b)** $\\operatorname{div}\\mathbf G = 0 + 0 + 0 = 0$ ($-y$ doesn't change with $x$, $x$ doesn't change with $y$, and the third component is $0$). By the Divergence Theorem the flux through any closed surface is $\\iiint_E 0\\, dV = 0$.

**Why not the other choices in (b).**
- **positive / negative:** those need sources or drains inside, which means nonzero divergence somewhere.
- **it depends on the surface:** the integrand is $0$ for every solid, so every closed surface gives $0$.
:::
`;export{e as default};