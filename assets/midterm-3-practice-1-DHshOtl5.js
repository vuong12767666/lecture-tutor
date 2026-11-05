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

**What to recognize.** The inside integral $\\int e^{y^3}\\, dy$ has no formula, so switch the order.

**Steps, with the inequalities.**
1. The limits say $0 \\le x \\le 1$ and $\\sqrt x \\le y \\le 1$.
2. **Range of $y$:** $y \\ge \\sqrt x \\ge 0$ and $y \\le 1$, so $0 \\le y \\le 1$.
3. **Bounds on $x$ for a fixed $y$:** $x \\ge 0$, $x \\le 1$, and $\\sqrt x \\le y$. Both sides of $\\sqrt x \\le y$ are $\\ge 0$, so squaring keeps it: $x \\le y^2$. Since $y \\le 1$, $y^2 \\le 1$ is the smaller upper bound. So $0 \\le x \\le y^2$.
4. **Integrate:** $\\int_0^{y^2} e^{y^3}\\, dx = y^2 e^{y^3}$, since $e^{y^3}$ is a constant in $x$. Then with $w = y^3$, $dw = 3y^2\\, dy$: $\\int_0^1 y^2 e^{y^3}\\, dy = \\tfrac13\\int_0^1 e^w\\, dw = \\tfrac{e - 1}{3}$.

**Check.** Adding up the original integral numerically gives about $0.5728$, and $\\tfrac{e - 1}{3} \\approx 0.5728$ ✓.

**Why not the other choices in (a).**
- **$\\int_0^1\\int_{y^2}^1$:** that's the region to the right of $x = y^2$, but $\\sqrt x \\le y$ means $x \\le y^2$, to the left.
- **$\\int_{\\sqrt x}^1\\int_0^1$:** just swapping the integral signs leaves $x$ in the outside limits.
- **$\\int_0^1\\int_0^{\\sqrt y}$:** $\\sqrt x \\le y$ squares to $x \\le y^2$, not $x \\le \\sqrt y$.
:::

:::problem 2
Let $D$ be the part of the ring $1 \\le x^2 + y^2 \\le 4$ in the first quadrant. Compute $\\displaystyle\\iint_D \\sqrt{x^2 + y^2}\\; dA$.

Answer: {{expr 4: 7pi/6}}
+++
review: 2026-10-19 Disks: switching to polar coordinates; 2026-10-23 Switching an x, y integral to polar

**Steps.**
1. **Limits, from the inequalities.** $1 \\le x^2 + y^2 \\le 4$ is $1 \\le r^2 \\le 4$, so $1 \\le r \\le 2$. First quadrant ($x, y \\ge 0$) is $0 \\le \\theta \\le \\tfrac\\pi2$.
2. **Integrand.** $\\sqrt{x^2 + y^2} = r$, times the $r$ from $dA$: $r^2$.
3. **Integrate.** $\\int_1^2 r^2\\, dr = \\tfrac{8 - 1}{3} = \\tfrac73$, and the $\\theta$-integral multiplies by $\\tfrac\\pi2$: $\\tfrac{7\\pi}{6}$.

**Common mistake.** Forgetting the $r$ in $dA$, which gives $\\tfrac\\pi2 \\cdot \\tfrac32 = \\tfrac{3\\pi}{4}$.
:::

:::problem 3
A thin plate fills the quarter disk $x^2 + y^2 \\le 9$, $x \\ge 0$, $y \\ge 0$, with density $\\rho = 1$.

**(a)** Its mass is {{expr 1: 9pi/4}}

**(b)** The $y$-coordinate of its center of mass is $\\bar y =$ {{expr 2: 4/pi}}
+++
review: 2026-10-23 Mass and center of mass

**Steps.**
1. **(a)** With $\\rho = 1$, the mass is the area: a quarter of $\\pi \\cdot 3^2$, which is $\\tfrac{9\\pi}{4}$.
2. **The moment.** In polar, $0 \\le r \\le 3$, $0 \\le \\theta \\le \\tfrac\\pi2$, and $y = r\\sin\\theta$:
$$\\iint_D y\\, dA = \\left(\\int_0^{\\pi/2}\\sin\\theta\\, d\\theta\\right)\\left(\\int_0^3 r^2\\, dr\\right) = 1 \\cdot 9 = 9.$$
3. **(b)** $\\bar y = \\dfrac{9}{9\\pi/4} = \\dfrac{4}{\\pi} \\approx 1.27$.

**Check.** $\\bar y$ is between $0$ and $3$, and below $1.5$, because the quarter disk is wider near the bottom. By symmetry across $y = x$, $\\bar x = \\tfrac4\\pi$ too.
:::

:::scratch
:::

:::problem 4
$E$ is the solid in the first octant under the plane $2x + y + z = 4$.

**(a)** Which integral gives the volume of $E$? {{circle 2: *$\\displaystyle\\int_0^2\\int_0^{4 - 2x}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{4}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^4\\int_0^{4 - 2x}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{4 - 2x}\\int_0^{4} dz\\, dy\\, dx$}}

**(b)** The volume is {{expr 2: 16/3}}
+++
review: 2026-10-26 Solids between two surfaces

**Steps, from the inequalities.**
1. The solid is $x, y, z \\ge 0$ and $2x + y + z \\le 4$.
2. **$z$-limits:** solve for $z$: $0 \\le z \\le 4 - 2x - y$.
3. **The shadow** is where $0 \\le 4 - 2x - y$: $2x + y \\le 4$ with $x, y \\ge 0$. Solving for $y$: $0 \\le y \\le 4 - 2x$, which needs $x \\le 2$. So $0 \\le x \\le 2$.
4. **(b)** Inside: $4 - 2x - y$. Middle: $\\int_0^{4 - 2x}(4 - 2x - y)\\, dy = \\tfrac{(4 - 2x)^2}{2}$. Outside: $\\int_0^2 \\tfrac{(4 - 2x)^2}{2}\\, dx = \\tfrac{16}{3}$ (with $w = 4 - 2x$).

**Check.** The tetrahedron has corners on the axes at $x = 2$, $y = 4$, $z = 4$, so its volume is $\\tfrac13 \\cdot (\\tfrac12 \\cdot 2 \\cdot 4) \\cdot 4 = \\tfrac{16}{3}$ ✓.

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

**Steps.**
1. **Cylindrical coordinates,** since the paraboloid is $z = r^2$.
2. **Limits.** Bottom $z = r^2$, top $z = 4$. They meet where $r^2 = 4$, so the shadow is $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$.
3. **Integrate.** Inside: $\\int_{r^2}^4 z\\, dz = \\tfrac{16 - r^4}{2}$. Times $r$: $\\tfrac{16r - r^5}{2}$. Middle: $\\int_0^2 \\tfrac{16r - r^5}{2}\\, dr = \\tfrac12\\left(32 - \\tfrac{64}{6}\\right) = \\tfrac{32}{3}$. Outside: $2\\pi \\cdot \\tfrac{32}{3} = \\tfrac{64\\pi}{3}$.

**Common mistake.** Using $0 \\le z \\le 4$: the solid starts at the paraboloid, not at $z = 0$.
:::

:::problem 6
$E$ is the solid inside the sphere $x^2 + y^2 + z^2 = 9$ and above the cone $z = \\sqrt{\\tfrac{x^2 + y^2}{3}}$, which is $\\varphi = \\tfrac\\pi3$.

**(a)** The easiest coordinates for $E$ are: {{circle 1: $x, y, z$ | cylindrical | *spherical}}

**(b)** The volume of $E$ is {{expr 3: 9pi}}
+++
review: 2026-10-28 Spherical coordinates; 2026-10-28 Which coordinates to use

**Steps.**
1. **Limits.** Inside the sphere: $0 \\le \\rho \\le 3$. Above the cone: $0 \\le \\varphi \\le \\tfrac\\pi3$. Around: $0 \\le \\theta \\le 2\\pi$.
2. **Integrate** $\\rho^2\\sin\\varphi$: $\\int_0^3 \\rho^2\\, d\\rho = 9$, $\\int_0^{\\pi/3}\\sin\\varphi\\, d\\varphi = 1 - \\cos\\tfrac\\pi3 = \\tfrac12$, $\\int_0^{2\\pi} d\\theta = 2\\pi$. Product: $9 \\cdot \\tfrac12 \\cdot 2\\pi = 9\\pi$.

**Why the cone is $\\varphi = \\tfrac\\pi3$.** On it, $z = \\tfrac{r}{\\sqrt3}$, so $\\tan\\varphi = \\tfrac rz = \\sqrt3$, which is $\\varphi = \\tfrac\\pi3$.

**Why not the other choices in (a).**
- **$x, y, z$:** the sphere and cone both give square-root limits.
- **cylindrical:** the sphere's top is $z = \\sqrt{9 - r^2}$ and you'd need where the cone meets it. In spherical, every limit is a number.
:::

:::scratch
:::

:::problem 7
Let $D$ be the region $0 \\le x - y \\le 2$, $1 \\le x + y \\le 3$. Use $u = x + y$, $v = x - y$.

**(a)** $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| =$ {{expr 1: 1/2}}

**(b)** $\\displaystyle\\iint_D (x + y)\\, dA =$ {{expr 3: 4}}
+++
review: 2026-10-30 The Jacobian: how much areas stretch; 2026-10-30 Using it: the tilted square

**Steps.**
1. **New region:** $1 \\le u \\le 3$, $0 \\le v \\le 2$.
2. **(a) Jacobian, with the shortcut:** $\\dfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 1 \\cdot 1 = -2$, so $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\tfrac12$.
3. **(b)** The integrand $x + y$ is $u$: $\\displaystyle\\int_0^2\\int_1^3 u \\cdot \\tfrac12\\, du\\, dv = \\tfrac12 \\cdot 4 \\cdot 2 = 4$ (since $\\int_1^3 u\\, du = \\tfrac{9 - 1}{2} = 4$).

**Common mistake.** Using $|J| = 2$ instead of $\\tfrac12$. The shortcut gives $\\tfrac{\\partial(u,v)}{\\partial(x,y)}$, which has to be flipped.
:::

:::problem 8
**(a)** Which parametrizes the cone $z = \\sqrt{x^2 + y^2}$, $0 \\le z \\le 2$? {{circle 1: *$\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$, $0 \\le r \\le 2$ | $\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r^2 \\rangle$, $0 \\le r \\le 2$ | $\\langle 2\\cos\\theta,\\ 2\\sin\\theta,\\ z \\rangle$, $0 \\le z \\le 2$ | $\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$, $0 \\le r \\le 4$}}

**(b)** Find the tangent plane to $\\mathbf r(u, v) = \\langle u^2,\\ v^2,\\ u + 2v \\rangle$ at the point $(1, 1, 3)$.

{{plane 3: 1, 2, -2, -3}}
+++
review: 2026-11-04 Parametric surfaces; 2026-11-04 Tangent vectors and the normal vector

**(b) Steps.**
1. **Which $(u, v)$?** $u^2 = 1$, $v^2 = 1$, and $u + 2v = 3$. Only $u = v = 1$ works (for example, $u = -1$ would need $v = 2$, but $v^2 = 1$).
2. **Tangent vectors:** $\\mathbf r_u = \\langle 2u, 0, 1 \\rangle = \\langle 2, 0, 1 \\rangle$ and $\\mathbf r_v = \\langle 0, 2v, 2 \\rangle = \\langle 0, 2, 2 \\rangle$.
3. **Normal:** $\\mathbf r_u \\times \\mathbf r_v = \\langle 0 \\cdot 2 - 1 \\cdot 2,\\ 1 \\cdot 0 - 2 \\cdot 2,\\ 2 \\cdot 2 - 0 \\cdot 0 \\rangle = \\langle -2, -4, 4 \\rangle$.
4. **Plane:** $-2(x - 1) - 4(y - 1) + 4(z - 3) = 0$, which simplifies to $x + 2y - 2z = -3$ (divide by $-2$).

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

**Steps.**
1. **As a graph:** $f = \\sqrt{x^2 + y^2}$, so $f_x = \\tfrac{x}{\\sqrt{x^2 + y^2}}$ and $f_y = \\tfrac{y}{\\sqrt{x^2 + y^2}}$.
2. $f_x^2 + f_y^2 = \\tfrac{x^2 + y^2}{x^2 + y^2} = 1$, so $\\sqrt{1 + f_x^2 + f_y^2} = \\sqrt2$, the same everywhere.
3. **Shadow:** $z \\le 2$ means $\\sqrt{x^2 + y^2} \\le 2$, the disk of radius $2$, with area $4\\pi$.
4. **Area:** $\\sqrt2 \\cdot 4\\pi = 4\\sqrt2\\,\\pi \\approx 17.8$.

**Why constant.** The cone's surface makes a $45^\\circ$ angle with the horizontal everywhere, so every piece is $\\sqrt2$ times the area of its shadow.
:::

:::scratch
:::

:::problem 10
$C$ is the boundary of the triangle with corners $(0, 0)$, $(2, 0)$, $(0, 2)$, counterclockwise. Compute $\\displaystyle\\oint_C (y^2 - x)\\, dx + (3xy + e^y)\\, dy$.

Answer: {{expr 4: 4/3}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-09 Using it: hard line integral, easy double integral

**Steps.**
1. **Green's Theorem:** $P = y^2 - x$, $Q = 3xy + e^y$, so $Q_x - P_y = 3y - 2y = y$.
2. **The triangle from its edges:** $x \\ge 0$, $y \\ge 0$, $x + y \\le 2$, so $0 \\le x \\le 2$ and $0 \\le y \\le 2 - x$.
3. **Integrate:** $\\int_0^{2 - x} y\\, dy = \\tfrac{(2 - x)^2}{2}$, and $\\int_0^2 \\tfrac{(2 - x)^2}{2}\\, dx = \\tfrac12 \\cdot \\tfrac83 = \\tfrac43$.

**Check.** Doing the line integral along the three sides directly also gives $\\tfrac43$. Note that $-x\\, dx$ and $e^y\\, dy$ drop out: they have no swirl.
:::

:::problem 11
Let $\\mathbf F = \\langle 2xy + z,\\ x^2,\\ x \\rangle$.

**(a)** $\\mathbf F$ is: {{circle 1: *conservative | not conservative}}

**(b)** A potential function is $f =$ {{expr-c 2: x^2 y + x z}}
+++
review: 2026-11-13 Curl; 2026-11-13 Two identities, and what they say about conservative fields

**(a)** The curl is $\\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle 0 - 0,\\ 1 - 1,\\ 2x - 2x \\rangle = \\mathbf 0$, and $\\mathbf F$ is defined everywhere (no holes), so it's conservative.

**(b)** $f_x = 2xy + z$ gives $f = x^2 y + xz + g(y, z)$. Then $f_y = x^2 + g_y$ must equal $x^2$, so $g_y = 0$. And $f_z = x + g_z$ must equal $x$, so $g_z = 0$. So $g$ is a constant: $f = x^2 y + xz$.

**Check.** $\\nabla f = \\langle 2xy + z,\\ x^2,\\ x \\rangle$ ✓.

**Why not "not conservative".** A field is not conservative only if some cross-partials differ (or there's a hole that matters). Here all three pairs match, and the field is defined everywhere.
:::

:::problem 12
**(a)** Find the outward flux of $\\mathbf F = \\langle x + y^2,\\ y + z^2,\\ z + x^2 \\rangle$ through the sphere $x^2 + y^2 + z^2 = 4$.

Answer: {{expr 3: 32pi}}

**(b)** The outward flux of $\\mathbf G = \\langle -y, x, 0 \\rangle$ through any closed surface is: {{circle 1: *$0$ | positive | negative | it depends on the surface}}
+++
review: 2026-11-16 The Divergence Theorem; 2026-11-13 Divergence

**(a) Steps.**
1. **Divergence Theorem:** the sphere is closed, so the flux is $\\iiint_E \\operatorname{div}\\mathbf F\\, dV$.
2. $\\operatorname{div}\\mathbf F = \\tfrac{\\partial}{\\partial x}(x + y^2) + \\tfrac{\\partial}{\\partial y}(y + z^2) + \\tfrac{\\partial}{\\partial z}(z + x^2) = 1 + 1 + 1 = 3$.
3. $3 \\times (\\text{volume of the ball of radius } 2) = 3 \\cdot \\tfrac43\\pi \\cdot 8 = 32\\pi$.

**(b)** $\\operatorname{div}\\mathbf G = 0 + 0 + 0 = 0$, so the flux through any closed surface is $\\iiint_E 0\\, dV = 0$.

**Why not the other choices in (b).**
- **positive / negative:** those need sources or drains inside, which means nonzero divergence somewhere.
- **it depends on the surface:** the Divergence Theorem makes it $0$ for every closed surface, since the integrand is $0$.
:::
`;export{e as default};