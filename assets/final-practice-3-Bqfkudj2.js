var e=`---
title: Final Practice Test 3 (harder)
exam: Final
minutes: 75
note: Harder original practice problems for the Math 241 final. Each problem chains several ideas together. Not an official exam.
---

:::problem 1
The planes $x + y + z = 6$ and $x - y + 2z = 4$ meet in a line $L$.

**(a)** The point of $L$ with $z = 0$ is {{point 1: (5, 1, 0)}}

**(b)** A direction vector for $L$ is {{circle 1: $\\langle 1, 1, 1 \\rangle$ | *$\\langle 3, -1, -2 \\rangle$ | $\\langle 2, 0, 3 \\rangle$ | $\\langle 1, -1, 2 \\rangle$}}

**(c)** The distance from the origin to $L$ is {{expr 3: 2sqrt(3)}}
+++
review: 2026-08-28 How two planes meet; 2026-08-31 The cross product; 2026-08-31 The length is an area

**First, what the line of two planes looks like.** The line lies in **both** planes, so its direction is perpendicular to both normal vectors, which is what a cross product gives. For example, the planes $z = 0$ (normal $\\langle 0, 0, 1 \\rangle$) and $y = 0$ (normal $\\langle 0, 1, 0 \\rangle$) meet in the $x$-axis, and $\\langle 0, 0, 1 \\rangle \\times \\langle 0, 1, 0 \\rangle = \\langle -1, 0, 0 \\rangle$ points along it.

**The goal.** Find one point on $L$, find its direction with a cross product, then find the distance from the origin using the area of a parallelogram.

**Step 1 (a): a point.** *Why set $z = 0$:* any point on $L$ will do, and $z = 0$ leaves two easy equations. $x + y = 6$ and $x - y = 4$. Adding: $2x = 10$, so $x = 5$ and $y = 1$. The point is $(5, 1, 0)$. Check: $5 + 1 + 0 = 6$ ✓ and $5 - 1 + 0 = 4$ ✓.

**Step 2 (b): the direction.** *Why the cross product:* it's perpendicular to both normals $\\langle 1, 1, 1 \\rangle$ and $\\langle 1, -1, 2 \\rangle$. Components: $1 \\cdot 2 - 1 \\cdot (-1) = 3$, $1 \\cdot 1 - 1 \\cdot 2 = -1$, $1 \\cdot (-1) - 1 \\cdot 1 = -2$. So $\\mathbf d = \\langle 3, -1, -2 \\rangle$. Check: $\\mathbf d \\cdot \\langle 1, 1, 1 \\rangle = 0$ ✓ and $\\mathbf d \\cdot \\langle 1, -1, 2 \\rangle = 3 + 1 - 4 = 0$ ✓.

**Step 3 (c): distance as height of a parallelogram.** *Why this works:* the vectors $\\mathbf v = \\langle 5, 1, 0 \\rangle$ (from the origin to the point) and $\\mathbf d$ make a parallelogram whose area is $|\\mathbf v \\times \\mathbf d|$. Its base is $|\\mathbf d|$, and its height is exactly the distance from the origin to $L$. So distance $= \\dfrac{|\\mathbf v \\times \\mathbf d|}{|\\mathbf d|}$.

**Step 4 (c): compute.** $\\mathbf v \\times \\mathbf d = \\langle 1 \\cdot (-2) - 0 \\cdot (-1),\\ 0 \\cdot 3 - 5 \\cdot (-2),\\ 5 \\cdot (-1) - 1 \\cdot 3 \\rangle = \\langle -2, 10, -8 \\rangle$, with length $\\sqrt{4 + 100 + 64} = \\sqrt{168}$. And $|\\mathbf d| = \\sqrt{9 + 1 + 4} = \\sqrt{14}$. So the distance is $\\sqrt{\\tfrac{168}{14}} = \\sqrt{12} = 2\\sqrt3 \\approx 3.46$.

**Why not $\\langle 1, 1, 1 \\rangle$ or $\\langle 1, -1, 2 \\rangle$.** Those are the normals: each is perpendicular to its own plane, so it points **out of** that plane, not along $L$.

**Why not $\\langle 2, 0, 3 \\rangle$.** That's the sum of the normals. It isn't perpendicular to either one ($\\langle 2, 0, 3 \\rangle \\cdot \\langle 1, 1, 1 \\rangle = 5$), so it can't lie in both planes.
:::

:::problem 2
Let $f(x, y) = \\dfrac{x^2 y}{x^4 + y^2}$ for $(x, y) \\ne (0, 0)$.

**(a)** The limit of $f$ as $(x, y) \\to (0, 0)$ along any line $y = mx$ is {{expr 1: 0}}

**(b)** The limit along the parabola $y = x^2$ is {{expr 2: 1/2}}

**(c)** Does $\\displaystyle\\lim_{(x, y) \\to (0, 0)} f(x, y)$ exist? {{circle 1: yes | *no}}
+++
review: 2026-09-09 Paths: showing a limit doesn't exist; 2026-09-09 Every line agrees, but the limit still doesn't exist

**First, what a limit needs.** A limit exists only if $f$ gets close to the **same** number along **every** way of approaching the point. So two paths with different values prove it doesn't exist, but agreeing along lines proves nothing. For example, $\\tfrac{xy}{x^2 + y^2}$ is $0$ along the $x$-axis and $\\tfrac12$ along $y = x$, so its limit at $(0, 0)$ doesn't exist.

**The goal.** Compute the value along lines, then along $y = x^2$, and compare.

**Step 1 (a): along $y = mx$.** *Why substitute:* on that line every point has $y = mx$, so $f$ becomes a function of $x$ alone. $f = \\dfrac{x^2 (mx)}{x^4 + m^2x^2} = \\dfrac{m x}{x^2 + m^2}$ (after dividing top and bottom by $x^2$). As $x \\to 0$ this goes to $\\tfrac{0}{m^2} = 0$ when $m \\ne 0$. For $m = 0$ (the $x$-axis), $f = 0$ everywhere on it. And on the $y$-axis ($x = 0$), $f = 0$ too. So every line gives $0$.

**Step 2 (b): along $y = x^2$.** *Why this curve:* the top has $x^2y$ and the bottom has $x^4 + y^2$; with $y = x^2$, every term becomes $x^4$, so they match. $f = \\dfrac{x^2 \\cdot x^2}{x^4 + x^4} = \\dfrac{x^4}{2x^4} = \\dfrac12$ at every point of the parabola (except the origin). For example, at $(0.1, 0.01)$: $\\tfrac{0.0001}{0.0001 + 0.0001} = \\tfrac12$.

**Step 3 (c): compare.** Lines give $0$, the parabola gives $\\tfrac12$, so the limit doesn't exist.

**Why not "yes".** Getting $0$ along every line isn't enough: the parabola approaches $(0, 0)$ along a curve that no line follows, and there $f$ stays at $\\tfrac12$.
:::

:::problem 3
Let $S$ be the surface $x^2 + 2y^2 + 3z^2 = 12$, and $P = (1, 2, 1)$, which is on $S$.

**(a)** The tangent plane to $S$ at $P$ is $ax + by + cz = d$ with $a, b, c, d =$ {{plane 2: 1, 4, 3, 12}} (any nonzero multiple counts)

**(b)** The line through $P$ perpendicular to $S$ meets the $xy$-plane at {{point 2: (2/3, 2/3, 0)}}

**(c)** The temperature is $T(x, y, z) = xyz$. The largest rate of change of $T$ at $P$, over all directions, is {{expr 1: 3}}
+++
review: 2026-09-21 Tangent planes to level surfaces; 2026-09-18 Properties of the gradient

**First, why the gradient is the normal.** $S$ is a level surface of $g(x, y, z) = x^2 + 2y^2 + 3z^2$ (the level $12$). The gradient of $g$ is perpendicular to its level surfaces, so $\\nabla g(P)$ is a normal vector to the tangent plane, and it's also the direction of the line perpendicular to $S$. For example, on the sphere $x^2 + y^2 + z^2 = 1$, $\\nabla g = \\langle 2x, 2y, 2z \\rangle$ points straight out from the center.

**The goal.** Compute $\\nabla g(P)$, use it as the plane's normal and as the line's direction, then use $|\\nabla T(P)|$ for (c).

**Step 1: the gradient of $g$.** $\\nabla g = \\langle 2x, 4y, 6z \\rangle$, so $\\nabla g(1, 2, 1) = \\langle 2, 8, 6 \\rangle$. Any multiple is also a normal, so use $\\langle 1, 4, 3 \\rangle$.

**Step 2 (a): the plane.** *Why this form:* a plane with normal $\\langle a, b, c \\rangle$ through $P$ is $a(x - 1) + b(y - 2) + c(z - 1) = 0$. So $(x - 1) + 4(y - 2) + 3(z - 1) = 0$, which is $x + 4y + 3z = 12$. Check: $P$ gives $1 + 8 + 3 = 12$ ✓.

**Step 3 (b): the normal line.** It starts at $P$ and moves along $\\langle 1, 4, 3 \\rangle$: $(1 + t,\\ 2 + 4t,\\ 1 + 3t)$. *Why set $z = 0$:* that's where it meets the $xy$-plane. $1 + 3t = 0$ gives $t = -\\tfrac13$, so the point is $\\left(1 - \\tfrac13,\\ 2 - \\tfrac43,\\ 0\\right) = \\left(\\tfrac23, \\tfrac23, 0\\right)$.

**Step 4 (c): the largest rate.** *Why $|\\nabla T|$:* the directional derivative in a unit direction $\\mathbf u$ is $\\nabla T \\cdot \\mathbf u = |\\nabla T|\\cos\\theta$, which is biggest when $\\mathbf u$ points along $\\nabla T$ ($\\cos\\theta = 1$). $\\nabla T = \\langle yz, xz, xy \\rangle$, so $\\nabla T(1, 2, 1) = \\langle 2, 1, 2 \\rangle$, with length $\\sqrt{4 + 1 + 4} = 3$.
:::

:::problem 4
Let $f(x, y) = xy$ on the region $D$: $x^2 + 4y^2 \\le 8$ (a filled ellipse).

**(a)** The absolute maximum of $f$ on $D$ is {{expr 2: 2}}, reached at the points {{point 2: (2, 1); (-2, -1)}}

**(b)** The absolute minimum of $f$ on $D$ is {{expr 1: -2}}
+++
review: 2026-09-28 The three-step method; 2026-09-30 The method

**First, where extremes can be on a closed region.** On a closed, bounded region a continuous function has an absolute max and min, and each is either at a critical point inside or on the boundary. On a curved boundary, Lagrange multipliers find the candidates: at the best points, $\\nabla f$ is parallel to the gradient of the constraint. For example, for $f = x + y$ on the circle $x^2 + y^2 = 2$, $\\langle 1, 1 \\rangle = \\lambda\\langle 2x, 2y \\rangle$ gives $x = y$, so the candidates are $(1, 1)$ and $(-1, -1)$.

**The goal.** Check the inside, use Lagrange on the ellipse, and compare all candidates.

**Step 1: inside.** $f_x = y = 0$ and $f_y = x = 0$, so the only critical point is $(0, 0)$, with $f = 0$.

**Step 2: Lagrange on the boundary.** With $g = x^2 + 4y^2$, $\\nabla f = \\langle y, x \\rangle$ and $\\nabla g = \\langle 2x, 8y \\rangle$. *Why set them parallel:* that's the condition at a boundary extreme. So $y = 2\\lambda x$ and $x = 8\\lambda y$.

**Step 3: solve.** Put the first into the second: $x = 8\\lambda(2\\lambda x) = 16\\lambda^2 x$. Either $x = 0$, which forces $y = 0$, not on the ellipse; or $\\lambda^2 = \\tfrac{1}{16}$, so $\\lambda = \\pm\\tfrac14$ and $y = \\pm\\tfrac x2$.

**Step 4: put it on the ellipse.** With $y^2 = \\tfrac{x^2}{4}$: $x^2 + 4 \\cdot \\tfrac{x^2}{4} = 2x^2 = 8$, so $x = \\pm 2$ and $y = \\pm 1$. The four candidates are $(2, 1)$, $(-2, -1)$ with $f = 2$, and $(2, -1)$, $(-2, 1)$ with $f = -2$.

**Step 5: compare.** The candidates' values are $0$, $2$, and $-2$. The maximum is $2$, at $(2, 1)$ and $(-2, -1)$; the minimum is $-2$.
:::

:::problem 5
Let $I = \\displaystyle\\int_0^1 \\!\\! \\int_{\\sqrt y}^1 e^{x^3}\\, dx\\, dy$.

**(a)** With the order switched, $I$ is {{circle 1: *$\\int_0^1 \\int_0^{x^2} e^{x^3}\\,dy\\,dx$ | $\\int_0^1 \\int_{x^2}^1 e^{x^3}\\,dy\\,dx$ | $\\int_0^1 \\int_0^{\\sqrt x} e^{x^3}\\,dy\\,dx$}}

**(b)** $I =$ {{expr 3: (e - 1)/3}}
+++
review: 2026-10-19 Switching the order; 2026-10-19 Regions bounded by curves

**First, why switch.** $e^{x^3}$ has no antiderivative you can write down, so the $dx$-first integral is stuck. Switching the order can put an extra factor in front that makes it work. For example, $\\int_0^1 2x\\,e^{x^2}\\,dx = e - 1$ is easy because of the $2x$, while $\\int_0^1 e^{x^2}\\,dx$ alone isn't.

**The goal.** Sketch the region from the limits, describe it with $y$ first, then integrate.

**Step 1: the region.** The outer limits say $0 \\le y \\le 1$; the inner say $\\sqrt y \\le x \\le 1$. The curve $x = \\sqrt y$ is $y = x^2$. So the region is to the right of $y = x^2$ and left of $x = 1$: the region under the parabola $y = x^2$, from $x = 0$ to $x = 1$. For example, the point $(0.5, 0.1)$ is in it ($0.1 \\le 0.25$), and $(0.5, 0.5)$ isn't.

**Step 2 (a): $y$ first.** *Why these limits:* for each $x$ from $0$ to $1$, $y$ runs from the bottom, $0$, up to the parabola, $x^2$. So $I = \\int_0^1 \\int_0^{x^2} e^{x^3}\\,dy\\,dx$.

**Step 3 (b): inner integral.** $e^{x^3}$ doesn't involve $y$, so $\\int_0^{x^2} e^{x^3}\\,dy = x^2 e^{x^3}$.

**Step 4 (b): outer integral.** *Why it works now:* $x^2$ is a third of the derivative of $x^3$. With $u = x^3$, $du = 3x^2\\,dx$: $\\int_0^1 x^2 e^{x^3}\\,dx = \\tfrac13 \\int_0^1 e^u\\,du = \\tfrac{e - 1}{3} \\approx 0.573$.

**Why not $\\int_0^1 \\int_{x^2}^1$.** That's the region **above** the parabola, the other piece of the unit square.

**Why not $\\int_0^1 \\int_0^{\\sqrt x}$.** That flips the curve: $y = \\sqrt x$ is a different parabola, opening to the right.
:::

:::problem 6
Let $E$ be the solid inside the sphere $x^2 + y^2 + z^2 = 4$ and above the cone $z = \\sqrt{(x^2 + y^2)/3}$ (the cone $\\varphi = \\tfrac\\pi3$).

**(a)** The volume of $E$ is {{expr 2: 8pi/3}}

**(b)** $\\displaystyle\\iiint_E z\\, dV =$ {{expr 3: 3pi}}
+++
review: 2026-10-28 Spherical coordinates; 2026-10-28 The ice cream cone

**First, why spherical coordinates.** A sphere is $\\rho = $ constant and a cone around the $z$-axis is $\\varphi = $ constant, so this solid is a simple box in $\\rho, \\varphi, \\theta$. The volume piece is $dV = \\rho^2 \\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$. For example, the whole ball of radius $1$ is $\\int_0^{2\\pi}\\!\\int_0^\\pi\\!\\int_0^1 \\rho^2 \\sin\\varphi = 2\\pi \\cdot 2 \\cdot \\tfrac13 = \\tfrac{4\\pi}{3}$.

**The goal.** Write the limits, then integrate $1$ for the volume and $z = \\rho\\cos\\varphi$ for (b).

**Step 1: the limits.** The sphere is $\\rho = 2$, so $0 \\le \\rho \\le 2$. "Above the cone" means closer to the positive $z$-axis, so $0 \\le \\varphi \\le \\tfrac\\pi3$. All the way around: $0 \\le \\theta \\le 2\\pi$. (Check the cone: at $\\varphi = \\tfrac\\pi3$, $z = \\rho\\cos\\tfrac\\pi3 = \\tfrac\\rho2$ and $\\sqrt{x^2 + y^2} = \\rho\\sin\\tfrac\\pi3 = \\tfrac{\\sqrt3}{2}\\rho$, so $z = \\sqrt{(x^2 + y^2)/3}$ ✓.)

**Step 2 (a): the volume.** *Why it splits into three:* the limits are constants and the integrand is a product. $\\int_0^{2\\pi} d\\theta = 2\\pi$, $\\int_0^{\\pi/3} \\sin\\varphi\\,d\\varphi = 1 - \\cos\\tfrac\\pi3 = \\tfrac12$, and $\\int_0^2 \\rho^2\\,d\\rho = \\tfrac83$. Volume $= 2\\pi \\cdot \\tfrac12 \\cdot \\tfrac83 = \\tfrac{8\\pi}{3}$.

**Step 3 (b): the integrand.** $z = \\rho\\cos\\varphi$, so $z\\,dV = \\rho^3 \\cos\\varphi \\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$.

**Step 4 (b): integrate.** $\\int_0^{2\\pi} d\\theta = 2\\pi$. $\\int_0^2 \\rho^3\\,d\\rho = 4$. $\\int_0^{\\pi/3} \\cos\\varphi\\sin\\varphi\\,d\\varphi = \\tfrac12\\sin^2\\varphi\\Big|_0^{\\pi/3} = \\tfrac12 \\cdot \\tfrac34 = \\tfrac38$. Together: $2\\pi \\cdot 4 \\cdot \\tfrac38 = 3\\pi$.

**Check.** The average height is $\\tfrac{3\\pi}{8\\pi/3} = \\tfrac98 = 1.125$, between $0$ and the top of the sphere, $2$ ✓.
:::

:::problem 7
Let $R$ be the region bounded by the lines $x + y = 0$, $x + y = 1$, $x - y = 0$, and $x - y = 2$.

**(a)** With $u = x + y$ and $v = x - y$, the area factor $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right|$ is {{expr 1: 1/2}}

**(b)** $\\displaystyle\\iint_R (x + y)\\,e^{x - y}\\, dA =$ {{expr 3: (e^2 - 1)/4}}
+++
review: 2026-10-30 The Jacobian: how much areas stretch; 2026-10-30 Change of variables in a double integral

**First, what the change of variables does.** When the edges of a region are lines like $x + y = $ constant, using those expressions as new variables turns the region into a rectangle. The cost is an area factor: $dA = \\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right| du\\,dv$, which says how much a small $u, v$ rectangle stretches in the $x, y$ plane. For example, $x = 2u$, $y = 3v$ stretches areas by $2 \\times 3 = 6$.

**The goal.** Find the factor, write the region and integrand in $u, v$, and integrate.

**Step 1 (a): solve for $x$ and $y$.** *Why:* the factor uses derivatives of $x$ and $y$ with respect to $u$ and $v$. Adding $u + v = 2x$ gives $x = \\tfrac{u + v}{2}$; subtracting gives $y = \\tfrac{u - v}{2}$.

**Step 2 (a): the determinant.** $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = x_u y_v - x_v y_u = \\tfrac12 \\cdot \\left(-\\tfrac12\\right) - \\tfrac12 \\cdot \\tfrac12 = -\\tfrac12$, so the factor is $\\tfrac12$.

**Step 3 (b): the new region and integrand.** The four lines become $u = 0$, $u = 1$, $v = 0$, $v = 2$: a rectangle. The integrand $(x + y)e^{x - y}$ is $u\\,e^{v}$.

**Step 4 (b): integrate.** $\\int_0^2\\!\\int_0^1 u\\,e^v \\cdot \\tfrac12\\,du\\,dv = \\tfrac12 \\cdot \\left(\\int_0^1 u\\,du\\right)\\left(\\int_0^2 e^v\\,dv\\right) = \\tfrac12 \\cdot \\tfrac12 \\cdot (e^2 - 1) = \\tfrac{e^2 - 1}{4} \\approx 1.597$.

**Common mistake.** Using $2$, the factor for the other direction ($\\tfrac{\\partial(u, v)}{\\partial(x, y)} = -2$). The factor in $dA$ is for $x, y$ in terms of $u, v$, and it's the reciprocal.
:::

:::problem 8
Let $\\mathbf F = \\langle 2xy + z,\\ x^2 + z^2,\\ x + 2yz \\rangle$, and let $C$ be the helix $\\mathbf r(t) = \\langle \\cos t, \\sin t, t \\rangle$ for $0 \\le t \\le \\pi$.

**(a)** Is $\\mathbf F$ conservative on all of space? {{circle 1: *yes | no}}

**(b)** $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 3: -pi}}

**(c)** $\\displaystyle\\int_C (\\mathbf F + \\langle 0, x, 0 \\rangle) \\cdot d\\mathbf r =$ {{expr 2: -pi/2}}
+++
review: 2026-10-14 Deciding: conservative or not?; 2026-10-09 The Fundamental Theorem for Line Integrals; 2026-10-07 Line integrals of vector fields

**First, the shortcut for conservative fields.** If $\\mathbf F = \\nabla f$, then $\\int_C \\mathbf F \\cdot d\\mathbf r = f(\\text{end}) - f(\\text{start})$, whatever the path. On all of space, $\\mathbf F$ is conservative exactly when its curl is $\\mathbf 0$. For example, $\\langle 2x, 2y, 0 \\rangle = \\nabla(x^2 + y^2)$, so its integral from $(1, 0, 0)$ to $(0, 3, 0)$ is $9 - 1 = 8$ along any path.

**The goal.** Check the curl, find $f$, use the endpoints, and then add the extra piece, which is not conservative, by direct integration.

**Step 1 (a): the curl.** With $P = 2xy + z$, $Q = x^2 + z^2$, $R = x + 2yz$: $R_y - Q_z = 2z - 2z = 0$, $P_z - R_x = 1 - 1 = 0$, $Q_x - P_y = 2x - 2x = 0$. Zero curl on all of space (no holes), so conservative.

**Step 2: find $f$.** *Why integrate $P$ in $x$:* $f_x = P$. $\\int (2xy + z)\\,dx = x^2y + xz + g(y, z)$. Then $f_y = x^2 + g_y$ must equal $x^2 + z^2$, so $g_y = z^2$ and $g = yz^2 + h(z)$. Then $f_z = x + 2yz + h'(z)$ must equal $x + 2yz$, so $h$ is a constant. So $f = x^2y + xz + yz^2$.

**Step 3 (b): endpoints.** Start $\\mathbf r(0) = (1, 0, 0)$, end $\\mathbf r(\\pi) = (-1, 0, \\pi)$. $f(-1, 0, \\pi) = 0 - \\pi + 0 = -\\pi$ and $f(1, 0, 0) = 0$. So the integral is $-\\pi$.

**Step 4 (c): the extra piece directly.** *Why directly:* $\\langle 0, x, 0 \\rangle$ has curl $\\langle 0, 0, 1 \\rangle \\ne \\mathbf 0$, so it has no potential. Along the helix, $x = \\cos t$ and $dy = \\cos t\\,dt$, so $\\int_0^\\pi \\cos^2 t\\,dt = \\tfrac\\pi2$.

**Step 5 (c): add.** *Why we can split:* line integrals add over a sum of fields. $-\\pi + \\tfrac\\pi2 = -\\tfrac\\pi2$.

**Why not "no".** All three curl components are $0$, and space has no holes, so zero curl is enough.
:::

:::problem 9
Let $C$ be the circle $x^2 + y^2 = 4$, counterclockwise.

**(a)** $\\displaystyle\\oint_C y^3\\,dx - x^3\\,dy =$ {{expr 3: -24pi}}

**(b)** The outward flux of $\\mathbf F = \\langle x^3, y^3 \\rangle$ across $C$ is {{expr 2: 24pi}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-11 Green's Theorem for flux

**First, the two forms of Green's Theorem.** For a counterclockwise boundary $C$ of a region $D$: circulation $\\oint_C P\\,dx + Q\\,dy = \\iint_D (Q_x - P_y)\\,dA$, and outward flux $\\oint_C \\mathbf F \\cdot \\mathbf n\\,ds = \\iint_D (P_x + Q_y)\\,dA$. Both turn a line integral into a double integral, which here is easy in polar. For example, $\\oint_C -y\\,dx + x\\,dy = \\iint_D 2\\,dA$, twice the area.

**The goal.** Compute each double-integral integrand, then integrate over the disk of radius $2$ in polar.

**Step 1 (a): the integrand.** $P = y^3$, $Q = -x^3$. $Q_x - P_y = -3x^2 - 3y^2 = -3r^2$.

**Step 2 (a): polar.** *Why polar:* the region is a disk and the integrand only depends on $r$. $\\int_0^{2\\pi}\\!\\int_0^2 (-3r^2)\\,r\\,dr\\,d\\theta = -3 \\cdot 2\\pi \\cdot \\tfrac{2^4}{4} = -3 \\cdot 2\\pi \\cdot 4 = -24\\pi$.

**Step 3 (b): the flux integrand.** $P = x^3$, $Q = y^3$, so $P_x + Q_y = 3x^2 + 3y^2 = 3r^2$.

**Step 4 (b): integrate.** The same integral with the opposite sign: $24\\pi$.

**Check (a) directly.** With $x = 2\\cos t$, $y = 2\\sin t$: $y^3\\,dx - x^3\\,dy = -16(\\sin^4 t + \\cos^4 t)\\,dt$, and $\\int_0^{2\\pi} (\\sin^4 t + \\cos^4 t)\\,dt = \\tfrac{3\\pi}{2}$, giving $-16 \\cdot \\tfrac{3\\pi}{2} = -24\\pi$ ✓.
:::

:::problem 10
Let $S$ be the part of the paraboloid $z = 4 - x^2 - y^2$ above the plane $z = 0$.

**(a)** The flux of $\\mathbf F = \\langle 0, 0, z \\rangle$ upward through $S$ is {{expr 3: 8pi}}

**(b)** The surface area of $S$ is {{expr 3: (pi/6)(17sqrt(17) - 1)}}
+++
review: 2026-11-16 Flux through a surface; 2026-11-06 Surface area

**First, parametrizing a graph.** A surface $z = g(x, y)$ is parametrized by $\\mathbf r(x, y) = \\langle x, y, g(x, y) \\rangle$, with upward normal $\\mathbf r_x \\times \\mathbf r_y = \\langle -g_x, -g_y, 1 \\rangle$. Flux is $\\iint \\mathbf F \\cdot (\\mathbf r_x \\times \\mathbf r_y)\\,dA$ and area is $\\iint |\\mathbf r_x \\times \\mathbf r_y|\\,dA$, over the shadow in the $xy$-plane. For example, the flat disk $z = 0$ has normal $\\langle 0, 0, 1 \\rangle$ and area factor $1$.

**The goal.** Find the normal, then do both integrals over the shadow, the disk $x^2 + y^2 \\le 4$, in polar.

**Step 1: the normal.** $g = 4 - x^2 - y^2$, so $g_x = -2x$, $g_y = -2y$, and the upward normal is $\\langle 2x, 2y, 1 \\rangle$.

**Step 2: the shadow.** $z \\ge 0$ means $4 - x^2 - y^2 \\ge 0$, the disk of radius $2$.

**Step 3 (a): flux.** $\\mathbf F \\cdot \\langle 2x, 2y, 1 \\rangle = z = 4 - r^2$. $\\int_0^{2\\pi}\\!\\int_0^2 (4 - r^2)\\,r\\,dr\\,d\\theta = 2\\pi\\left[2r^2 - \\tfrac{r^4}{4}\\right]_0^2 = 2\\pi(8 - 4) = 8\\pi$.

**Step 4 (b): area.** $|\\langle 2x, 2y, 1 \\rangle| = \\sqrt{1 + 4r^2}$. With $u = 1 + 4r^2$, $du = 8r\\,dr$: $\\int_0^2 \\sqrt{1 + 4r^2}\\,r\\,dr = \\tfrac18 \\cdot \\tfrac23 u^{3/2}\\Big|_1^{17} = \\tfrac{1}{12}(17^{3/2} - 1)$. Times $2\\pi$: $\\tfrac\\pi6(17\\sqrt{17} - 1) \\approx 36.18$.

**Check (a) with the Divergence Theorem.** Close $S$ with the disk at $z = 0$, where $\\mathbf F = \\mathbf 0$, so no flux goes through it. $\\operatorname{div}\\mathbf F = 1$, so the flux out equals the volume under the paraboloid, $\\int_0^{2\\pi}\\!\\int_0^2 (4 - r^2)\\,r\\,dr\\,d\\theta = 8\\pi$ ✓.
:::

:::problem 11
Let $C$ be the curve where the cylinder $x^2 + y^2 = 1$ meets the plane $z = 2 - x$, counterclockwise seen from above, and $\\mathbf F = \\langle -y,\\ x,\\ z^2 \\rangle$.

**(a)** For Stokes' Theorem, the easiest surface with boundary $C$ is {{circle 1: *the flat piece of the plane $z = 2 - x$ inside the cylinder | the side of the cylinder below the plane | the disk $x^2 + y^2 \\le 1$ in the plane $z = 0$}}

**(b)** $\\displaystyle\\oint_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 3: 2pi}}
+++
review: 2026-11-30 Stokes' Theorem; 2026-12-02 Swapping to an easier surface; 2026-12-02 Using Stokes' Theorem for a line integral

**First, what Stokes' Theorem trades.** $\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_S \\operatorname{curl}\\mathbf F \\cdot d\\mathbf S$ for **any** surface $S$ whose boundary is $C$, oriented to match (counterclockwise from above goes with an upward normal). So pick the surface that makes the double integral easiest. For example, if $\\operatorname{curl}\\mathbf F = \\langle 0, 0, 2 \\rangle$ and $C$ is the unit circle in the $xy$-plane, the flat disk gives $2 \\times \\pi = 2\\pi$.

**The goal.** Find the curl, choose the flat surface inside $C$, and integrate over its shadow.

**Step 1: the curl.** $\\operatorname{curl}\\mathbf F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle 0 - 0,\\ 0 - 0,\\ 1 - (-1) \\rangle = \\langle 0, 0, 2 \\rangle$.

**Step 2 (a): the surface.** *Why the plane piece:* $C$ lies in the plane $z = 2 - x$, so the part of that plane inside the cylinder is a flat surface bounded by exactly $C$.

**Step 3: its normal.** As a graph $z = g(x, y) = 2 - x$, the upward normal is $\\langle -g_x, -g_y, 1 \\rangle = \\langle 1, 0, 1 \\rangle$. The shadow is the unit disk.

**Step 4 (b): integrate.** $\\operatorname{curl}\\mathbf F \\cdot \\langle 1, 0, 1 \\rangle = 2$, so the integral is $\\iint_{\\text{disk}} 2\\,dA = 2 \\times \\pi = 2\\pi$.

**Why not the side of the cylinder.** Its boundary is $C$ **plus** the bottom circle, so it isn't bounded by $C$ alone.

**Why not the disk at $z = 0$.** Its boundary is the unit circle in the $xy$-plane, which is a different curve: $C$ is tilted, with $z = 2 - x$ running from $1$ to $3$. A surface for Stokes' Theorem must be bounded by $C$ itself.
:::

:::problem 12
**(a)** The outward flux of $\\mathbf F = \\langle x^3, y^3, z^3 \\rangle$ through the sphere $x^2 + y^2 + z^2 = 1$ is {{expr 3: 12pi/5}}

**(b)** Let $\\mathbf E = \\dfrac{\\langle x, y, z \\rangle}{(x^2 + y^2 + z^2)^{3/2}}$. Its outward flux through the surface of the cube $-1 \\le x, y, z \\le 1$ is {{expr 1: 4pi}}, and through the sphere of radius $1$ centered at $(5, 0, 0)$ is {{expr 1: 0}}
+++
review: 2026-11-16 The Divergence Theorem; 2026-12-07 Any closed surface: the origin inside or outside

**First, the Divergence Theorem and its exception.** The outward flux through a closed surface equals $\\iiint \\operatorname{div}\\mathbf F\\,dV$ over the solid inside, as long as $\\mathbf F$ is defined everywhere inside. For the inverse-square field $\\mathbf E$, $\\operatorname{div}\\mathbf E = 0$ wherever it's defined, but it's undefined at the origin, and every closed surface around the origin has flux $4\\pi$. For example, the unit sphere: $\\mathbf E \\cdot \\mathbf n = 1$ on it, times area $4\\pi$.

**The goal.** For (a), integrate the divergence in spherical coordinates. For (b), ask whether the origin is inside each surface.

**Step 1 (a): the divergence.** $3x^2 + 3y^2 + 3z^2 = 3\\rho^2$.

**Step 2 (a): integrate over the ball.** $\\int_0^{2\\pi}\\!\\int_0^\\pi\\!\\int_0^1 3\\rho^2 \\cdot \\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta = 3 \\cdot 2\\pi \\cdot 2 \\cdot \\tfrac15 = \\tfrac{12\\pi}{5}$.

**Step 3 (b): the cube.** *Why $4\\pi$:* the origin is inside the cube. Between the unit sphere (inside the cube) and the cube, $\\operatorname{div}\\mathbf E = 0$, so the cube's flux equals the sphere's, $4\\pi$.

**Step 4 (b): the far sphere.** *Why $0$:* the sphere centered at $(5, 0, 0)$ with radius $1$ only reaches $x = 4$ at its closest, so the origin is outside. $\\mathbf E$ is defined everywhere inside and has divergence $0$, so the flux is $\\iiint 0\\,dV = 0$.
:::
`;export{e as default};