var e=`---
title: Final Practice Test 2
exam: Final
minutes: 60
---

:::problem 1
Let $\\mathbf r(t) = \\langle 2t,\\ t^2,\\ \\ln t \\rangle$ for $t > 0$.

**(a)** The speed at $t = 1$ is {{expr 2: 3}}

**(b)** The length of the curve from $t = 1$ to $t = e$ is {{expr 3: e^2}}
+++
review: 2026-10-02 Velocity, speed, and acceleration; 2026-10-02 Arc length

**First, what speed and length are.** The velocity $\\mathbf r'(t)$ is the arrow of motion at time $t$, and the speed is its length $|\\mathbf r'(t)|$. The length of the curve adds up the speed over the time interval: $L = \\int_a^b |\\mathbf r'(t)|\\, dt$. For example, $\\langle \\cos t, \\sin t \\rangle$ has speed $1$, so from $t = 0$ to $t = 2\\pi$ its length is $2\\pi$, the circumference of the unit circle.

**The goal.** Find $\\mathbf r'(t)$ and its length, plug in $t = 1$ for (a), and integrate it from $1$ to $e$ for (b).

**Step 1: the velocity.** *Why each component:* differentiate each one separately. $\\tfrac{d}{dt}(2t) = 2$, $\\tfrac{d}{dt}t^2 = 2t$, $\\tfrac{d}{dt}\\ln t = \\tfrac1t$. So $\\mathbf r'(t) = \\langle 2, 2t, \\tfrac1t \\rangle$.

**Step 2 (a): the speed at $t = 1$.** $\\mathbf r'(1) = \\langle 2, 2, 1 \\rangle$, and its length is $\\sqrt{4 + 4 + 1} = \\sqrt9 = 3$.

**Step 3: the speed at any $t$.** $|\\mathbf r'(t)|^2 = 4 + 4t^2 + \\tfrac{1}{t^2}$. *Why look for a square:* a square root is only easy to integrate if what's inside is a perfect square. Here $\\left(2t + \\tfrac1t\\right)^2 = 4t^2 + 2 \\cdot 2t \\cdot \\tfrac1t + \\tfrac{1}{t^2} = 4t^2 + 4 + \\tfrac{1}{t^2}$, the same thing. So $|\\mathbf r'(t)| = 2t + \\tfrac1t$ (positive for $t > 0$). Check at $t = 1$: $2 + 1 = 3$ ✓, matching (a).

**Step 4 (b): integrate.** $\\int_1^e \\left(2t + \\tfrac1t\\right) dt = \\left[t^2 + \\ln t\\right]_1^e = (e^2 + 1) - (1 + 0) = e^2 \\approx 7.389$.

**Common mistake.** Integrating $\\mathbf r'(t)$ itself instead of its length. That gives a vector, not a length.
:::

:::problem 2
Let $f(x, y) = x^2 - 2x + y^2 - 4y$ on the closed triangle $T$ with corners $(0, 0)$, $(4, 0)$, and $(0, 4)$.

**(a)** The absolute maximum of $f$ on $T$ is {{expr 2: 8}}

**(b)** The absolute minimum of $f$ on $T$ is {{expr 2: -5}}, at the point {{point 1: (1, 2)}}
+++
review: 2026-09-28 The three-step method; 2026-09-28 A triangle

**First, why there is a largest and a smallest value, and where to look.** A continuous function on a closed, bounded region always reaches a largest and a smallest value. Each one happens either at a critical point inside, or somewhere on the edge. So the method lists candidates from both places and compares their values. For example, $x^2$ on $[-1, 2]$ has its smallest value $0$ at the critical point $x = 0$ inside, and its largest value $4$ at the edge $x = 2$.

**The goal.** Find the critical points inside $T$, then the largest and smallest values on each of the three edges, and compare all the candidates.

**Step 1: critical points.** *Why set both partials to $0$:* a smallest or largest value inside the region has a flat tangent plane. $f_x = 2x - 2 = 0$ gives $x = 1$, and $f_y = 2y - 4 = 0$ gives $y = 2$. The point $(1, 2)$ is inside $T$, because $1 + 2 = 3 \\le 4$. Value: $f(1, 2) = 1 - 2 + 4 - 8 = -5$.

**Step 2: the bottom edge, $y = 0$, $0 \\le x \\le 4$.** *Why one variable:* on this edge $y$ is $0$ at every point, so $f$ becomes $g(x) = x^2 - 2x$. Its critical point is $x = 1$, with $g(1) = -1$. Its ends are $g(0) = 0$ and $g(4) = 16 - 8 = 8$.

**Step 3: the left edge, $x = 0$, $0 \\le y \\le 4$.** $f$ becomes $y^2 - 4y$. Its critical point is $y = 2$, with value $-4$. Its ends give $0$ (at $y = 0$) and $16 - 16 = 0$ (at $y = 4$).

**Step 4: the slanted edge, $y = 4 - x$, $0 \\le x \\le 4$.** *Why substitute:* every point on this edge has $y = 4 - x$, for example $(1, 3)$. So $f = x^2 - 2x + (4 - x)^2 - 4(4 - x) = 2x^2 - 6x$. Its critical point is $x = 1.5$, the point $(1.5, 2.5)$, with value $4.5 - 9 = -4.5$. Its ends are the corners, already found: $0$ and $8$.

**Step 5: compare.** The candidates are $-5, -1, 0, 8, -4, 0, -4.5$. The largest is $8$, at the corner $(4, 0)$. The smallest is $-5$, at the critical point $(1, 2)$.

**Check.** Completing the square, $f = (x - 1)^2 + (y - 2)^2 - 5$, so $f \\ge -5$ everywhere, with $-5$ only at $(1, 2)$ ✓. And $f + 5$ is the squared distance from $(1, 2)$, which is largest at the corner farthest from $(1, 2)$. The corner $(4, 0)$ is at squared distance $9 + 4 = 13$, more than $(0, 0)$ at $5$ and $(0, 4)$ at $5$. So the maximum is $13 - 5 = 8$ ✓.
:::

:::problem 3
Let $D$ be the disk $x^2 + y^2 \\le 4$. Find $\\displaystyle\\iint_D e^{-(x^2 + y^2)}\\, dA$.

Value $=$ {{expr 3: pi(1 - e^(-4))}}
+++
review: 2026-10-19 Double integrals in polar coordinates; 2026-10-23 Switching an x, y integral to polar

**First, why polar coordinates.** In polar coordinates a point is described by its distance $r$ from the origin and its angle $\\theta$. A disk centered at the origin becomes $0 \\le r \\le$ its radius and $0 \\le \\theta \\le 2\\pi$: every limit is a number. The small area piece is $r\\, dr\\, d\\theta$, not $dr\\, d\\theta$. For example, the area of the disk of radius $2$ is $\\int_0^{2\\pi}\\int_0^2 r\\, dr\\, d\\theta = 2\\pi \\cdot 2 = 4\\pi$.

**The goal.** Rewrite the integrand and the region in polar coordinates, include the extra $r$, and integrate.

**Step 1: the integrand.** *Why it simplifies:* $x^2 + y^2 = r^2$, so $e^{-(x^2 + y^2)} = e^{-r^2}$. For example, at the point $(1, 1)$, $x^2 + y^2 = 2$ and $r = \\sqrt2$, so $r^2 = 2$ too.

**Step 2: the limits.** The disk of radius $2$: $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$.

**Step 3: the inside integral.** *Why the extra $r$ helps:* $e^{-r^2}$ alone has no simple antiderivative, but $r e^{-r^2}$ does. Substitute $w = r^2$, so $dw = 2r\\, dr$: $\\int_0^2 r e^{-r^2}\\, dr = \\tfrac12\\int_0^4 e^{-w}\\, dw = \\tfrac12\\left(1 - e^{-4}\\right)$.

**Step 4: the outside integral.** Nothing depends on $\\theta$, so it multiplies by $2\\pi$: $2\\pi \\cdot \\tfrac12\\left(1 - e^{-4}\\right) = \\pi\\left(1 - e^{-4}\\right) \\approx 3.084$.

**Check.** The integrand is at most $1$ (at the origin), so the answer must be less than the disk's area, $4\\pi \\approx 12.57$ ✓.
:::

:::problem 4
Let $R$ be the parallelogram bounded by the lines $x + y = 0$, $x + y = 2$, $x - y = 0$, and $x - y = 3$. Use $u = x + y$ and $v = x - y$.

**(a)** The area stretching factor $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| =$ {{expr 1: 1/2}}

**(b)** $\\displaystyle\\iint_R (x + y)^2\\, dA =$ {{expr 3: 4}}
+++
review: 2026-10-30 The Jacobian: how much areas stretch; 2026-10-30 Change of variables in a double integral

**First, what a change of variables does.** New variables $u$ and $v$ turn a slanted region into a rectangle. But a small rectangle in the $u, v$ plane covers a different area in the $x, y$ plane. The Jacobian $\\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right|$ is that ratio of areas, and it goes in the integral: $dA = \\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right| du\\, dv$. For example, $x = 2u$, $y = 3v$ turns the unit square into a $2$ by $3$ rectangle, so the Jacobian is $6$.

**The goal.** Solve for $x$ and $y$ in terms of $u$ and $v$, find the Jacobian, then integrate over the $u, v$ rectangle.

**Step 1: the new region.** *Why it's a rectangle:* each edge of $R$ is a line where $u$ or $v$ is a single number. So $0 \\le u \\le 2$ and $0 \\le v \\le 3$.

**Step 2: solve for $x$ and $y$.** *Why:* the Jacobian needs the partial derivatives of $x$ and $y$. Adding $u + v = 2x$ gives $x = \\tfrac{u + v}{2}$. Subtracting $u - v = 2y$ gives $y = \\tfrac{u - v}{2}$. Check with the point $(x, y) = (2, 1)$: $u = 3$, $v = 1$, and $\\tfrac{3 + 1}{2} = 2$, $\\tfrac{3 - 1}{2} = 1$ ✓.

**Step 3 (a): the Jacobian.** $x_u = \\tfrac12$, $x_v = \\tfrac12$, $y_u = \\tfrac12$, $y_v = -\\tfrac12$. The determinant is $x_u y_v - x_v y_u = -\\tfrac14 - \\tfrac14 = -\\tfrac12$. *Why the absolute value:* an area factor can't be negative. So it is $\\tfrac12$.

**Step 4 (b): integrate.** *Why the integrand is easy now:* $(x + y)^2 = u^2$. So $\\int_0^2 \\int_0^3 u^2 \\cdot \\tfrac12\\, dv\\, du = \\tfrac12 \\cdot 3 \\cdot \\int_0^2 u^2\\, du = \\tfrac32 \\cdot \\tfrac83 = 4$.

**Check.** The area of $R$ is the rectangle's area times the Jacobian: $6 \\times \\tfrac12 = 3$. The integrand $u^2$ averages $\\tfrac{1}{2}\\int_0^2 u^2\\, du = \\tfrac43$ across $0 \\le u \\le 2$, and $\\tfrac43 \\times 3 = 4$ ✓.
:::

:::scratch
:::

:::problem 5
Let $E$ be the solid inside the cylinder $x^2 + y^2 = 4$, above the plane $z = 0$, and below the paraboloid $z = x^2 + y^2$.

**(a)** The volume of $E$ is {{expr 2: 8pi}}

**(b)** $\\displaystyle\\iiint_E z\\, dV =$ {{expr 3: 32pi/3}}
+++
review: 2026-10-28 Cylindrical coordinates; 2026-10-28 Which coordinates to use

**First, why cylindrical coordinates.** Cylindrical coordinates are polar coordinates $r, \\theta$ for $x$ and $y$, with $z$ left as it is. A cylinder around the $z$-axis is $r = $ a number, and $x^2 + y^2$ becomes $r^2$. The small volume piece is $r\\, dz\\, dr\\, d\\theta$. For example, the point $(0, 2, 3)$ has $r = 2$, $\\theta = \\tfrac\\pi2$, $z = 3$.

**The goal.** Write the limits in $r$, $\\theta$, $z$, then integrate $1$ for the volume and $z$ for part (b).

**Step 1: the limits.** *Why each one:* inside the cylinder means $0 \\le r \\le 2$. All the way around: $0 \\le \\theta \\le 2\\pi$. From the plane up to the paraboloid: $0 \\le z \\le r^2$. For example, at $r = 1$ the solid goes from $z = 0$ up to $z = 1$.

**Step 2 (a): volume.** $\\int_0^{2\\pi}\\int_0^2\\int_0^{r^2} r\\, dz\\, dr\\, d\\theta$. The inside integral is $r \\cdot r^2 = r^3$. Then $\\int_0^2 r^3\\, dr = 4$, and the $\\theta$ integral multiplies by $2\\pi$: $8\\pi$.

**Step 3 (b): integrate $z$.** *Why the inside integral changes:* now the integrand is $z \\cdot r$. $\\int_0^{r^2} z\\, dz = \\tfrac{r^4}{2}$, times $r$ gives $\\tfrac{r^5}{2}$. Then $\\int_0^2 \\tfrac{r^5}{2}\\, dr = \\tfrac{64}{12} = \\tfrac{16}{3}$, and times $2\\pi$: $\\tfrac{32\\pi}{3} \\approx 33.5$.

**Check.** Dividing, the average height of the solid is $\\tfrac{32\\pi/3}{8\\pi} = \\tfrac43$. The top goes from $z = 0$ at the center up to $z = 4$ at the edge, and most of the volume is near the edge where it's tall, so an average between $0$ and $4$ like $1.33$ makes sense ✓.
:::

:::problem 6
Let $\\mathbf F = \\langle -y,\\ x \\rangle$ and let $C$ be the part of the parabola $y = x^2$ from $(0, 0)$ to $(1, 1)$. Find the work $\\displaystyle\\int_C \\mathbf F\\cdot d\\mathbf r$.

Work $=$ {{expr 3: 1/3}}
+++
review: 2026-10-07 Line integrals of vector fields; 2026-10-07 Work along a half circle

**First, what the line integral adds up.** At each point of the path, $\\mathbf F\\cdot\\mathbf r'$ measures how much the field pushes along the direction of motion. The line integral adds that up along the path: $\\int_C \\mathbf F\\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t))\\cdot\\mathbf r'(t)\\, dt$. For example, $\\langle 1, 0 \\rangle$ along the segment from $(0, 0)$ to $(3, 0)$ gives $\\int_0^3 1\\, dt = 3$.

**The goal.** Parametrize the parabola, put it into $\\mathbf F$, dot with $\\mathbf r'$, and integrate.

**Step 1: parametrize.** *Why $x = t$:* the curve is a graph $y = x^2$, so letting $x = t$ gives $y = t^2$. $\\mathbf r(t) = \\langle t, t^2 \\rangle$, $0 \\le t \\le 1$. Check the ends: $t = 0$ gives $(0, 0)$ and $t = 1$ gives $(1, 1)$ ✓.

**Step 2: the pieces.** $\\mathbf F(\\mathbf r(t)) = \\langle -t^2, t \\rangle$ (put $x = t$, $y = t^2$ into $\\langle -y, x \\rangle$). $\\mathbf r'(t) = \\langle 1, 2t \\rangle$.

**Step 3: dot product.** $-t^2 \\cdot 1 + t \\cdot 2t = -t^2 + 2t^2 = t^2$.

**Step 4: integrate.** $\\int_0^1 t^2\\, dt = \\tfrac13$.

**Why there's no shortcut.** $\\mathbf F$ is not conservative: $Q_x - P_y = 1 - (-1) = 2 \\ne 0$. So the answer depends on the path. Along the straight segment $\\langle t, t \\rangle$ instead, $\\mathbf F\\cdot\\mathbf r' = -t + t = 0$ and the work is $0$, not $\\tfrac13$.
:::

:::problem 7
Find the area of the part of the paraboloid $z = x^2 + y^2$ with $z \\le 2$.

Area $=$ {{expr 4: 13pi/3}}
+++
review: 2026-11-06 Surface area; 2026-11-04 Tangent vectors and the normal vector

**First, how surface area is computed.** Describe the surface by a parametrization $\\Phi(r, \\theta)$. The two partial derivatives $\\Phi_r$ and $\\Phi_\\theta$ are tangent arrows, and the length of their cross product is how much area a small $dr\\, d\\theta$ rectangle covers on the surface. So the area is $\\iint |\\Phi_r \\times \\Phi_\\theta|\\, dr\\, d\\theta$. For example, the flat disk $\\Phi = \\langle r\\cos\\theta, r\\sin\\theta, 0 \\rangle$ has $|\\Phi_r \\times \\Phi_\\theta| = r$, and the familiar polar area piece $r\\, dr\\, d\\theta$ comes back.

**The goal.** Parametrize the paraboloid, find the length of the cross product, and integrate it over the right $r$ and $\\theta$.

**Step 1: parametrize.** *Why polar:* the height $x^2 + y^2$ is $r^2$. $\\Phi(r, \\theta) = \\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r^2 \\rangle$. The top edge is at $z = 2$, which is $r^2 = 2$, so $0 \\le r \\le \\sqrt2$ and $0 \\le \\theta \\le 2\\pi$.

**Step 2: tangent arrows.** $\\Phi_r = \\langle \\cos\\theta, \\sin\\theta, 2r \\rangle$ and $\\Phi_\\theta = \\langle -r\\sin\\theta, r\\cos\\theta, 0 \\rangle$.

**Step 3: cross product.** $\\Phi_r \\times \\Phi_\\theta = \\langle -2r^2\\cos\\theta,\\ -2r^2\\sin\\theta,\\ r \\rangle$. Its length is $\\sqrt{4r^4 + r^2} = r\\sqrt{4r^2 + 1}$. For example, at $r = 1$, $\\theta = 0$: the cross product is $\\langle -2, 0, 1 \\rangle$, with length $\\sqrt5$, and $1 \\cdot \\sqrt{4 + 1} = \\sqrt5$ ✓.

**Step 4: integrate.** *Why substitute:* $r$ is (up to a constant) the derivative of $4r^2 + 1$. With $w = 4r^2 + 1$, $dw = 8r\\, dr$: $\\int_0^{\\sqrt2} r\\sqrt{4r^2 + 1}\\, dr = \\tfrac18\\int_1^9 \\sqrt w\\, dw = \\tfrac18 \\cdot \\tfrac23\\left(27 - 1\\right) = \\tfrac{13}{6}$. Times $2\\pi$: $\\tfrac{13\\pi}{3} \\approx 13.6$.

**Check.** The flat disk below it has area $\\pi(\\sqrt2)^2 = 2\\pi \\approx 6.3$. The paraboloid is tilted, steeply near its edge, so it should have more area than the disk ✓.
:::

:::problem 8
Let $\\mathbf F = \\langle x,\\ y,\\ z \\rangle$ and let $S$ be the part of the paraboloid $z = 4 - x^2 - y^2$ above the plane $z = 0$, with upward normal. Find the flux $\\displaystyle\\iint_S \\mathbf F\\cdot d\\mathbf S$.

Flux $=$ {{expr 4: 24pi}}
+++
review: 2026-11-16 Surfaces that aren't closed: close them off; 2026-11-16 The Divergence Theorem

**First, the closing-off trick.** The Divergence Theorem only works for a closed surface. $S$ is open at the bottom, but adding the flat disk $D$ at $z = 0$ closes it. Then the flux out of the closed surface ($S$ plus $D$) equals $\\iiint \\operatorname{div}\\mathbf F\\, dV$. Subtracting the flux through $D$ leaves the flux through $S$. For example, if the closed surface had flux $10$ and the disk had $3$, then $S$ would have $10 - 3 = 7$.

**The goal.** Find $\\operatorname{div}\\mathbf F$, integrate it over the solid under the paraboloid, then subtract the flux through the bottom disk.

**Step 1: divergence.** $\\operatorname{div}\\mathbf F = 1 + 1 + 1 = 3$.

**Step 2: the solid's volume.** *Why cylindrical:* the top is $z = 4 - r^2$. The paraboloid meets $z = 0$ where $r^2 = 4$, so $0 \\le r \\le 2$. Volume $= \\int_0^{2\\pi}\\int_0^2 (4 - r^2)\\, r\\, dr\\, d\\theta = 2\\pi\\left(8 - 4\\right) = 8\\pi$.

**Step 3: flux out of the closed surface.** $\\iiint 3\\, dV = 3 \\cdot 8\\pi = 24\\pi$.

**Step 4: the bottom disk.** *Why its outward normal points down:* out of the solid, at the bottom, is downward, $\\langle 0, 0, -1 \\rangle$. So $\\mathbf F\\cdot\\mathbf n = -z$, which is $0$ at every point of the disk, where $z = 0$. For example, at $(1, 1, 0)$, $\\mathbf F = \\langle 1, 1, 0 \\rangle$, which lies flat in the disk and doesn't cross it. Flux through $D$: $0$.

**Step 5: subtract.** Flux through $S$ $= 24\\pi - 0 = 24\\pi \\approx 75.4$.

**Check directly.** With $\\Phi = \\langle r\\cos\\theta, r\\sin\\theta, 4 - r^2 \\rangle$, the upward normal is $\\Phi_r \\times \\Phi_\\theta = \\langle 2r^2\\cos\\theta, 2r^2\\sin\\theta, r \\rangle$. Then $\\mathbf F\\cdot(\\Phi_r \\times \\Phi_\\theta) = 2r^3 + (4 - r^2)r = r^3 + 4r$. And $2\\pi\\int_0^2 (r^3 + 4r)\\, dr = 2\\pi(4 + 8) = 24\\pi$ ✓.
:::

:::scratch
:::

:::problem 9
Let $\\mathbf F = \\langle -y,\\ x,\\ z e^{xy} \\rangle$ and let $S$ be the upper half of the sphere $x^2 + y^2 + z^2 = 9$ (the part with $z \\ge 0$), with upward normal. Find $\\displaystyle\\iint_S \\operatorname{curl}\\mathbf F\\cdot d\\mathbf S$.

Value $=$ {{expr 4: 18pi}}
+++
review: 2026-11-30 Stokes' Theorem; 2026-12-02 Swapping to an easier surface

**First, what Stokes' Theorem says.** The flux of $\\operatorname{curl}\\mathbf F$ through a surface equals the line integral of $\\mathbf F$ around the surface's edge: $\\iint_S \\operatorname{curl}\\mathbf F\\cdot d\\mathbf S = \\oint_C \\mathbf F\\cdot d\\mathbf r$. The edge is traced so that, with your right thumb along the normal, your fingers curl the way you go. For example, a surface with upward normal and the unit circle as its edge gets the circle counterclockwise seen from above.

**The goal.** Skip the hard curl. Use Stokes' Theorem to replace the surface integral with a line integral around the hemisphere's edge.

**Step 1: the edge.** *Why it's this circle:* the hemisphere's bottom edge is where $z = 0$, so $x^2 + y^2 = 9$, a circle of radius $3$ in the $xy$-plane. The normal points up, so the circle goes counterclockwise seen from above: $\\mathbf r(t) = \\langle 3\\cos t, 3\\sin t, 0 \\rangle$, $0 \\le t \\le 2\\pi$.

**Step 2: $\\mathbf F$ on the circle.** $\\mathbf F = \\langle -3\\sin t,\\ 3\\cos t,\\ 0 \\cdot e^{xy} \\rangle = \\langle -3\\sin t, 3\\cos t, 0 \\rangle$. *Why the third component vanishes:* it has a factor $z$, and $z = 0$ on the circle.

**Step 3: dot with $\\mathbf r'$.** $\\mathbf r' = \\langle -3\\sin t, 3\\cos t, 0 \\rangle$, so $\\mathbf F\\cdot\\mathbf r' = 9\\sin^2 t + 9\\cos^2 t = 9$.

**Step 4: integrate.** $\\int_0^{2\\pi} 9\\, dt = 18\\pi$.

**Check by swapping surfaces.** The flat disk $x^2 + y^2 \\le 9$, $z = 0$, with upward normal has the same edge. $\\operatorname{curl}\\mathbf F = \\langle xze^{xy},\\ -yze^{xy},\\ 2 \\rangle$, and on the disk the third component is $2$. So the flux through the disk is $2 \\times 9\\pi = 18\\pi$ ✓.
:::

:::problem 10
Let $\\mathbf F = \\langle z,\\ x,\\ y \\rangle$ and let $C$ be the triangle with corners $(1, 0, 0)$, $(0, 1, 0)$, and $(0, 0, 1)$, traced in that order. Find $\\displaystyle\\oint_C \\mathbf F\\cdot d\\mathbf r$.

Value $=$ {{expr 4: 3/2}}
+++
review: 2026-12-02 Using Stokes' Theorem for a line integral; 2026-11-30 Stokes' Theorem

**First, why Stokes' Theorem helps here.** Computed directly, the loop integral is three line integrals, one per side. Stokes' Theorem replaces it with one surface integral of the curl over the flat triangle. That's easy here, because the curl of $\\mathbf F$ turns out to be the same arrow at every point. For example, $\\operatorname{curl}\\langle -y, x, 0 \\rangle = \\langle 0, 0, 2 \\rangle$ at every point, so its flux through any flat region is just a dot product times an area.

**The goal.** Find $\\operatorname{curl}\\mathbf F$, find the triangle's normal with the direction that matches the order of the corners, and integrate.

**Step 1: the curl.** $\\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle 1 - 0,\\ 1 - 0,\\ 1 - 0 \\rangle = \\langle 1, 1, 1 \\rangle$.

**Step 2: the surface and its normal.** The three corners lie on the plane $x + y + z = 1$. *Why the normal points up:* going $(1, 0, 0) \\to (0, 1, 0) \\to (0, 0, 1)$ is counterclockwise seen from above, so the right-hand rule gives an upward normal. As a graph $z = 1 - x - y$, the upward normal piece is $d\\mathbf S = \\langle 1, 1, 1 \\rangle\\, dA$, where $dA$ is area in the triangle's shadow on the $xy$-plane.

**Step 3: the integrand.** $\\operatorname{curl}\\mathbf F\\cdot\\langle 1, 1, 1 \\rangle = 1 + 1 + 1 = 3$, the same at every point.

**Step 4: the shadow's area.** *Why the shadow:* $dA$ measures area in the $xy$-plane. The shadow is the triangle with corners $(0, 0)$, $(1, 0)$, $(0, 1)$, with area $\\tfrac12$.

**Step 5: integrate.** $3 \\times \\tfrac12 = \\tfrac32$.

**Check directly.** Side 1, $\\langle 1 - t, t, 0 \\rangle$: $\\mathbf F\\cdot\\mathbf r' = \\langle 0, 1 - t, t \\rangle\\cdot\\langle -1, 1, 0 \\rangle = 1 - t$, integral $\\tfrac12$. The other two sides give $\\tfrac12$ each in the same way (the field and the triangle look the same after renaming $x \\to y \\to z \\to x$). Total $\\tfrac32$ ✓.
:::

:::problem 11
Let $\\mathbf F = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2},\\ z \\right\\rangle$, defined everywhere except on the $z$-axis.

**(a)** $\\operatorname{curl}\\mathbf F =$ {{circle 1: *$\\langle 0, 0, 0 \\rangle$ | $\\langle 0, 0, 2 \\rangle$ | $\\langle 0, 0, 1 \\rangle$}}

**(b)** $\\oint_C \\mathbf F\\cdot d\\mathbf r$ around the circle $x^2 + y^2 = 4$ in the plane $z = 1$, counterclockwise seen from above, is {{expr 2: 2pi}}

**(c)** Is $\\mathbf F$ conservative on the region where it is defined? {{circle 1: yes | *no}}

**(d)** $\\int_C \\mathbf F\\cdot d\\mathbf r$ along the straight segment from $(1, 0, 0)$ to $(1, 0, 3)$ is {{expr 2: 9/2}}
+++
review: 2026-12-04 Zero curl in space, with a hole that is a line; 2026-12-04 The method for a field on a region of space

**First, what a missing line does.** Removing the $z$-axis from space leaves a region with a hole: a loop around the axis can't be shrunk to a point without crossing it. On such a region, zero curl does **not** guarantee conservative. A loop around the axis has to be checked. For example, the swirl field $\\langle -y, x, 0 \\rangle / (x^2 + y^2)$ from Dec 4 has zero curl but gives $2\\pi$ around the unit circle.

**The goal.** Compute the curl, integrate around a loop that circles the axis, decide, and then integrate along the segment directly.

**Step 1 (a): the curl.** *Why the $z$ part adds nothing:* $R = z$ depends only on $z$, so $R_y = 0$ and $R_x = 0$, and $P$ and $Q$ have no $z$, so $P_z = Q_z = 0$. The third component is the swirl field's: $Q_x - P_y = \\tfrac{y^2 - x^2}{(x^2 + y^2)^2} - \\tfrac{y^2 - x^2}{(x^2 + y^2)^2} = 0$. So $\\operatorname{curl}\\mathbf F = \\langle 0, 0, 0 \\rangle$.

**Step 2 (b): around the circle.** $\\mathbf r = \\langle 2\\cos t, 2\\sin t, 1 \\rangle$, so $x^2 + y^2 = 4$ and $\\mathbf F = \\langle -\\tfrac{\\sin t}{2},\\ \\tfrac{\\cos t}{2},\\ 1 \\rangle$. $\\mathbf r' = \\langle -2\\sin t, 2\\cos t, 0 \\rangle$. Dot product: $\\sin^2 t + \\cos^2 t + 0 = 1$. Integral: $2\\pi$.

**Step 3 (c): decide.** *Why one loop settles it:* a conservative field gives $0$ around every closed loop. This loop gives $2\\pi$, so $\\mathbf F$ is **not conservative**, even with zero curl.

**Step 4 (d): along the segment.** *Why compute directly:* there is no potential function to use. $\\mathbf r = \\langle 1, 0, t \\rangle$, $0 \\le t \\le 3$, so $\\mathbf F = \\langle 0, 1, t \\rangle$ and $\\mathbf r' = \\langle 0, 0, 1 \\rangle$. Dot product: $t$. Integral: $\\int_0^3 t\\, dt = \\tfrac92$.

**Why not the other choices.**
- **(a)** $\\langle 0, 0, 2 \\rangle$ is the curl of $\\langle -y, x, 0 \\rangle$, without the division by $x^2 + y^2$. The division changes $Q_x$ and $P_y$ into two equal expressions. $\\langle 0, 0, 1 \\rangle$ would come from treating $R = z$ as if it added to the third component, but $Q_x - P_y$ doesn't involve $R$.
- **(c)** Yes: zero curl gives "conservative" only on a region with no holes, and the missing $z$-axis is a hole. The $2\\pi$ from (b) proves it's not conservative.
:::

:::problem 12
Let $\\mathbf F = \\dfrac{\\langle x, y, z \\rangle}{(x^2 + y^2 + z^2)^{3/2}}$, defined everywhere except the origin.

**(a)** The outward flux of $\\mathbf F$ through the ellipsoid $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} + z^2 = 1$ is {{expr 2: 4pi}}

**(b)** The outward flux of $\\mathbf F$ through the sphere of radius $1$ centered at $(5, 0, 0)$ is {{expr 1: 0}}

**(c)** A magnetic field is $\\mathbf B = \\langle 0, 0, 2t \\rangle$. Around the circle of radius $2$ in the $xy$-plane, counterclockwise seen from above, Faraday's law gives $\\oint_C \\mathbf E\\cdot d\\mathbf r =$ {{expr 2: -8pi}}
+++
review: 2026-12-07 Any closed surface: the origin inside or outside; 2026-12-09 Row 3: Faraday's law

**First, the flux of the inverse-square field.** $\\mathbf F$ has zero divergence everywhere except the origin, where it isn't defined. So by the Divergence Theorem, the flux out of a closed surface is $0$ if the origin is outside it. If the origin is inside, cut out a small sphere around the origin: the flux equals the small sphere's, which is $4\\pi$ for any radius. For example, the sphere of radius $1$ centered at the origin has $\\mathbf F\\cdot\\mathbf n = 1$ everywhere and area $4\\pi$, so its flux is $4\\pi$.

**The goal.** For (a) and (b), decide whether the origin is inside the surface. For (c), find the rate of change of the magnetic flux and put a minus sign in front.

**Step 1 (a): is the origin inside the ellipsoid?** *Why plug in:* a point is inside when the left side is less than $1$. At $(0, 0, 0)$: $0 + 0 + 0 = 0 < 1$, so it's inside. The flux is $4\\pi$, the same as for a sphere, whatever the ellipsoid's shape.

**Step 2 (b): is the origin inside the sphere?** The sphere's points are within $1$ of $(5, 0, 0)$, so they all have $x$ between $4$ and $6$. The origin, at distance $5$ from the center, is outside. The flux is $0$.

**Step 3 (c): the magnetic flux.** *Why it's a product:* $\\mathbf B\\cdot\\mathbf n = 2t$ at every point of the disk inside the circle (normal $\\langle 0, 0, 1 \\rangle$, by the right-hand rule for counterclockwise). The disk's area is $\\pi(2)^2 = 4\\pi$, so the flux is $2t \\cdot 4\\pi = 8\\pi t$.

**Step 4 (c): Faraday.** The flux grows at the rate $\\tfrac{d}{dt}(8\\pi t) = 8\\pi$, so $\\oint_C \\mathbf E\\cdot d\\mathbf r = -8\\pi$. For example, from $t = 1$ to $t = 2$ the flux goes from $8\\pi$ to $16\\pi$, up by $8\\pi$.

**Common mistakes.** Using the Divergence Theorem on the ellipsoid with $\\operatorname{div}\\mathbf F = 0$ and getting $0$: the field isn't defined at the origin, which is inside. And dropping the minus sign in Faraday's law.
:::
`;export{e as default};