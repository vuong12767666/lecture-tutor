var e=`---
title: Final Method Check
exam: Final
minutes: 25
format: multiple-choice
---

:::problem 1
You need the rate of change of $f$ at $P$ in the direction of $\\langle 1, 2, 2 \\rangle$. Which do you compute?

{{circle 1: $\\nabla f(P) \\cdot \\langle 1, 2, 2 \\rangle$ | *$\\nabla f(P) \\cdot \\tfrac13\\langle 1, 2, 2 \\rangle$ | $\\lVert \\nabla f(P) \\rVert$ | $f(P) \\cdot \\langle 1, 2, 2 \\rangle$}}
+++
review: 2026-09-18 Directional derivative formula; 2026-09-18 Directional derivatives

**The method.** The rate in a direction is $\\nabla f \\cdot \\mathbf u$, where $\\mathbf u$ is the direction scaled to length $1$. $\\langle 1, 2, 2 \\rangle$ has length $\\sqrt{1 + 4 + 4} = 3$, so $\\mathbf u = \\tfrac13\\langle 1, 2, 2 \\rangle$. For example, if $\\nabla f(P) = \\langle 3, 0, 0 \\rangle$, the rate is $3 \\cdot \\tfrac13 = 1$.

**Why not the other choices.**
- **Without the $\\tfrac13$:** the rate is per unit of distance, and $\\langle 1, 2, 2 \\rangle$ is $3$ units long. In the example you'd get $3$, three times too big.
- **$\\lVert \\nabla f(P) \\rVert$:** that's the largest rate over all directions, not the rate in this one.
- **$f(P) \\cdot \\langle 1, 2, 2 \\rangle$:** that uses the value of $f$, not its slopes, and gives a vector, not a rate.
:::

:::problem 2
You need the absolute maximum of $f(x, y)$ on a closed triangle. What's the method?

{{circle 1: The second derivative test at each critical point | Lagrange multipliers on the triangle's edge only | *Critical points inside, the largest and smallest on each edge, then compare all values | Set $f = 0$ and solve}}
+++
review: 2026-09-28 The three-step method; 2026-09-28 A triangle

**The method.** A continuous function on a closed, bounded region reaches its largest value either at a critical point inside or somewhere on the edge. So list candidates from both places and compare. For example, $f = x$ on the triangle with corners $(0, 0)$, $(1, 0)$, $(0, 1)$ has no critical points at all, and its maximum $1$ is at the corner $(1, 0)$.

**Why not the other choices.**
- **Second derivative test:** it only says what happens right next to a critical point. In the example there are no critical points, yet there is a maximum.
- **Lagrange on the edge only:** that misses a maximum at a critical point inside. (The edges of a triangle are also easier done one at a time, as one-variable problems.)
- **Set $f = 0$:** that finds where $f$ is zero, not where it's largest.
:::

:::problem 3
You need the largest value of $f(x, y)$ on the ellipse $x^2 + 4y^2 = 4$ (only on the curve, not inside it). What's the method?

{{circle 1: *Lagrange multipliers: $\\nabla f = \\lambda \\nabla g$ with $g = x^2 + 4y^2$ | Critical points of $f$: $\\nabla f = \\mathbf 0$ | The second derivative test | Arc length of the ellipse}}
+++
review: 2026-09-30 The method; 2026-09-30 Why the gradients line up

**The method.** On a curve $g = c$, the largest value of $f$ is where the level curve of $f$ just touches the constraint curve, so their gradients point the same way: $\\nabla f = \\lambda\\nabla g$. Then compare $f$ at every solution. For example, $f = x$ on this ellipse: $\\langle 1, 0 \\rangle = \\lambda\\langle 2x, 8y \\rangle$ gives $y = 0$, so $x = \\pm 2$, and the largest value is $2$.

**Why not the other choices.**
- **$\\nabla f = \\mathbf 0$:** the largest value on a curve usually isn't a critical point of $f$. In the example $\\nabla f = \\langle 1, 0 \\rangle$ is never $\\mathbf 0$.
- **Second derivative test:** it classifies critical points, and there may be none on the curve.
- **Arc length:** that measures the curve's length, not the values of $f$ on it.
:::

:::problem 4
You need the tangent plane to the surface $x^2 + y^2 z = 5$ at the point $P = (1, 2, 1)$. Where does its normal vector come from?

{{circle 1: $\\mathbf r'(t)$ at $P$ | *$\\nabla F(P)$ with $F = x^2 + y^2 z$ | $\\langle f_x, f_y, 0 \\rangle$ | The cross product $\\langle 1, 2, 1 \\rangle \\times \\langle 0, 0, 1 \\rangle$}}
+++
review: 2026-09-21 Tangent planes to level surfaces; 2026-09-21 Tangent plane to an ellipsoid

**The method.** The surface is a level surface $F = 5$, and $\\nabla F$ is perpendicular to every level surface. $\\nabla F = \\langle 2x, 2yz, y^2 \\rangle$, which is $\\langle 2, 4, 4 \\rangle$ at $(1, 2, 1)$. So the plane is $2(x - 1) + 4(y - 2) + 4(z - 1) = 0$. Check: $P$ is on the surface, $1 + 4 = 5$ ✓.

**Why not the other choices.**
- **$\\mathbf r'(t)$:** that's a tangent vector to a curve, which lies in the plane rather than sticking out of it.
- **$\\langle f_x, f_y, 0 \\rangle$:** there is no $f$ here (the surface isn't written as $z = f(x, y)$), and a normal to a graph is $\\langle f_x, f_y, -1 \\rangle$, not with $0$.
- **That cross product:** it uses the position of $P$, which has nothing to do with the surface's tilt.
:::

:::problem 5
You need the length of the curve $\\mathbf r(t)$ for $a \\le t \\le b$. Which integral?

{{circle 1: $\\int_a^b \\mathbf r'(t)\\, dt$ | $\\lVert \\mathbf r(b) - \\mathbf r(a) \\rVert$ | *$\\int_a^b \\lVert \\mathbf r'(t) \\rVert\\, dt$ | $\\int_a^b \\lVert \\mathbf r(t) \\rVert\\, dt$}}
+++
review: 2026-10-02 Arc length; 2026-10-05 Arc length, again

**The method.** In a short time $\\Delta t$ you move about (speed) $\\times$ (time) $= \\lVert \\mathbf r'(t) \\rVert\\,\\Delta t$, and adding those up gives the length. For example, $\\langle \\cos t, \\sin t \\rangle$ for $0 \\le t \\le 2\\pi$ has speed $1$, so its length is $2\\pi$.

**Why not the other choices.**
- **$\\int \\mathbf r'\\, dt$:** that's a vector, $\\mathbf r(b) - \\mathbf r(a)$. In the example it's $\\langle 0, 0 \\rangle$, because the circle ends where it started.
- **$\\lVert \\mathbf r(b) - \\mathbf r(a) \\rVert$:** that's the straight-line distance between the ends, $0$ for the circle.
- **$\\int \\lVert \\mathbf r \\rVert\\, dt$:** that adds up the distance from the origin, not the distance traveled.
:::

:::problem 6
A wire has the shape of a curve $C$ and density $\\rho(x, y, z)$. Which integral gives its mass?

{{circle 1: *$\\int_C \\rho\\, ds$ | $\\int_C \\langle \\rho, \\rho, \\rho \\rangle \\cdot d\\mathbf r$ | $\\iint_D \\rho\\, dA$ | $\\iiint_E \\rho\\, dV$}}
+++
review: 2026-10-05 Mass and average value; 2026-10-05 Integrating a function along a curve

**The method.** Mass is (density) $\\times$ (length), added up along the wire: $\\int_C \\rho\\, ds = \\int_a^b \\rho(\\mathbf r(t))\\,\\lVert \\mathbf r'(t) \\rVert\\, dt$. For example, density $2$ along a wire of length $5$ gives mass $10$.

**Why not the other choices.**
- **$\\int_C \\mathbf F\\cdot d\\mathbf r$:** that measures how much a field pushes along the path, which can be negative. Mass can't.
- **$\\iint_D \\rho\\, dA$:** that's for a flat plate, a 2D region.
- **$\\iiint_E \\rho\\, dV$:** that's for a solid.
:::

:::problem 7
$\\mathbf F = \\langle 2xy,\\ x^2 + 3 \\rangle$, and $C$ is a long, wiggly path from $(0, 0)$ to $(2, 1)$. What's the fastest way to find $\\int_C \\mathbf F\\cdot d\\mathbf r$?

{{circle 1: Parametrize the wiggly path | *Find a potential $f$ and compute $f(2, 1) - f(0, 0)$ | Green's Theorem | It's $0$}}
+++
review: 2026-10-12 Finding the potential function; 2026-10-09 Using the shortcut

**The method.** Check the cross-partials first: $P_y = 2x$ and $Q_x = 2x$, equal on the whole plane, which has no holes. So $\\mathbf F$ is conservative and the path's shape doesn't matter. $f = x^2 y + 3y$ works, so the answer is $f(2, 1) - f(0, 0) = 4 + 3 - 0 = 7$.

**Why not the other choices.**
- **Parametrize:** it would work, but the shape of the path doesn't matter, so all that work is wasted.
- **Green's Theorem:** it needs a closed curve, and this path goes from one point to another.
- **$0$:** that's the answer for a closed loop. This path starts and ends at different points.
:::

:::problem 8
$C$ is the boundary of the square $0 \\le x, y \\le 2$, counterclockwise. You need $\\oint_C (x^2 - y)\\, dx + (x + \\sin y)\\, dy$. What's the method?

{{circle 1: *Green's Theorem: $\\iint_D (Q_x - P_y)\\, dA$ | Parametrize the four sides: there's no other way | It's $0$, because $C$ is closed | The Divergence Theorem}}
+++
review: 2026-11-09 Using it: hard line integral, easy double integral; 2026-11-09 Green's Theorem

**The method.** Around a closed curve in the plane, Green's Theorem turns four line integrals into one double integral. $Q_x - P_y = 1 - (-1) = 2$, so the answer is $2 \\times \\text{area} = 2 \\times 4 = 8$.

**Why not the other choices.**
- **Four sides:** possible, but Green's Theorem does it in one step.
- **$0$:** a closed curve gives $0$ only for a conservative field. Here $Q_x - P_y = 2$, not $0$.
- **Divergence Theorem:** that's for flux out of a closed surface in space, not a loop in the plane.
:::

:::problem 9
$D$ is the ring between the circles $x^2 + y^2 = 1$ and $x^2 + y^2 = 9$. Which coordinates make $\\iint_D f\\, dA$ easiest?

{{circle 1: $x, y$ with $y$ inside | *Polar: $1 \\le r \\le 3$, $0 \\le \\theta \\le 2\\pi$, with $dA = r\\, dr\\, d\\theta$ | Spherical | $u = x + y$, $v = x - y$}}
+++
review: 2026-10-19 Double integrals in polar coordinates; 2026-10-23 Polar regions with curved edges

**The method.** Each circle centered at the origin is $r = $ a number, so the ring is $1 \\le r \\le 3$ all the way around, and every limit is a number. For example, its area is $\\int_0^{2\\pi}\\int_1^3 r\\, dr\\, d\\theta = 2\\pi \\cdot 4 = 8\\pi$, which is $9\\pi - \\pi$ ✓.

**Why not the other choices.**
- **$x, y$:** the ring has a hole, so in $x, y$ it splits into several pieces, each with square-root limits.
- **Spherical:** that's for solids in space, not a flat region.
- **$u = x + y$, $v = x - y$:** that straightens slanted lines, not circles.
:::

:::problem 10
$E$ is the solid inside the sphere $x^2 + y^2 + z^2 = 4$ and above the cone $z = \\sqrt{x^2 + y^2}$. Which coordinates make $\\iiint_E f\\, dV$ easiest?

{{circle 1: Cylindrical | *Spherical: $0 \\le \\rho \\le 2$, $0 \\le \\varphi \\le \\tfrac\\pi4$, $0 \\le \\theta \\le 2\\pi$ | Rectangular $x, y, z$ | Polar in the $xy$-plane only}}
+++
review: 2026-10-28 Which coordinates to use; 2026-10-28 The ice cream cone

**The method.** In spherical coordinates the sphere is $\\rho = 2$ and the cone is $\\varphi = \\tfrac\\pi4$ (it makes a $45°$ angle with straight up), so every limit is a number. For example, the point $(0, 0, 1)$ has $\\rho = 1 \\le 2$ and $\\varphi = 0 \\le \\tfrac\\pi4$, so it's inside $E$.

**Why not the other choices.**
- **Cylindrical:** it works, but the top is $z = \\sqrt{4 - r^2}$ and the bottom is $z = r$, so the $z$-limits have square roots, and you first need where they meet.
- **Rectangular:** the limits are square roots in every variable.
- **Polar only:** a solid needs three variables, not two.
:::

:::problem 11
$E$ is the solid above the paraboloid $z = x^2 + y^2$ and below the plane $z = 4$. Which coordinates make $\\iiint_E f\\, dV$ easiest?

{{circle 1: *Cylindrical: $r^2 \\le z \\le 4$, $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$ | Spherical | Rectangular $x, y, z$ | A change of variables $u = x + y$, $v = x - y$, $w = z$}}
+++
review: 2026-10-28 Cylindrical coordinates; 2026-10-28 Which coordinates to use

**The method.** The paraboloid $z = x^2 + y^2$ is $z = r^2$, and it meets $z = 4$ where $r = 2$. So the solid is $r^2 \\le z \\le 4$ over the disk $r \\le 2$. For example, at $r = 1$ the solid runs from $z = 1$ up to $z = 4$.

**Why not the other choices.**
- **Spherical:** neither surface is $\\rho = $ a number or $\\varphi = $ a number, so the limits get complicated.
- **Rectangular:** the shadow is a disk, which gives square-root limits.
- **$u = x + y$, $v = x - y$:** that is for slanted straight edges, and this solid's edges are round.
:::

:::problem 12
$R$ is the parallelogram bounded by $x - 2y = 0$, $x - 2y = 4$, $x + y = 1$, and $x + y = 3$. What's the best way to do $\\iint_R f\\, dA$?

{{circle 1: Polar coordinates | *$u = x - 2y$, $v = x + y$, so that $0 \\le u \\le 4$, $1 \\le v \\le 3$, with the Jacobian $\\tfrac13$ | $x, y$ with no splitting needed | Spherical coordinates}}
+++
review: 2026-10-30 Change of variables in a double integral; 2026-10-30 The Jacobian: how much areas stretch

**The method.** Each edge is a line where $x - 2y$ or $x + y$ is a single number, so these new variables turn $R$ into a rectangle. The area factor: $\\tfrac{\\partial(u, v)}{\\partial(x, y)} = 1 \\cdot 1 - (-2)(1) = 3$, so $\\left|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\tfrac13$. For example, the area of $R$ is $4 \\times 2 \\times \\tfrac13 = \\tfrac83$.

**Why not the other choices.**
- **Polar:** nothing here is a circle.
- **$x, y$:** the slanted edges make the limits change partway across, so the integral splits into pieces.
- **Spherical:** that's for solids in space.
:::

:::problem 13
A surface is given by $\\mathbf r(u, v)$ over a region $D$ of the $u, v$ plane. Which integral gives its area?

{{circle 1: $\\iint_D du\\, dv$ | $\\iint_D \\mathbf r_u \\cdot \\mathbf r_v\\, du\\, dv$ | *$\\iint_D \\lVert \\mathbf r_u \\times \\mathbf r_v \\rVert\\, du\\, dv$ | $\\int \\lVert \\mathbf r'(t) \\rVert\\, dt$}}
+++
review: 2026-11-06 Surface area; 2026-11-04 Tangent vectors and the normal vector

**The method.** A small $\\Delta u$ by $\\Delta v$ rectangle maps to a small patch on the surface with sides $\\mathbf r_u\\Delta u$ and $\\mathbf r_v\\Delta v$. Its area is the length of their cross product. For example, the flat disk $\\mathbf r = \\langle u\\cos v, u\\sin v, 0 \\rangle$ has $\\lVert \\mathbf r_u \\times \\mathbf r_v \\rVert = u$, the familiar polar $r\\, dr\\, d\\theta$.

**Why not the other choices.**
- **$\\iint du\\, dv$:** that's the area of $D$ in the $u, v$ plane. In the example it misses the factor $u$.
- **The dot product:** it measures how much the two arrows point the same way, not the area between them. For the disk it's $0$.
- **$\\int \\lVert \\mathbf r' \\rVert\\, dt$:** that's the length of a curve.
:::

:::problem 14
$S$ is the closed surface of a solid ball, with outward normal, and $\\operatorname{div}\\mathbf F = 3$. What's the method for $\\iint_S \\mathbf F\\cdot d\\mathbf S$?

{{circle 1: *The Divergence Theorem: $\\iiint_E 3\\, dV = 3 \\times \\text{volume}$ | Stokes' Theorem | Green's Theorem | The Fundamental Theorem for Line Integrals}}
+++
review: 2026-11-16 The Divergence Theorem; 2026-11-13 Divergence

**The method.** The flux out of a closed surface equals the integral of the divergence over the solid inside. For example, for a ball of radius $1$ the flux is $3 \\times \\tfrac43\\pi = 4\\pi$.

**Why not the other choices.**
- **Stokes' Theorem:** it turns the flux of a **curl** into a loop integral. It needs a surface with an edge, and a closed surface has none.
- **Green's Theorem:** that's for a closed curve in the plane.
- **Fundamental Theorem for Line Integrals:** that's for $\\int_C \\nabla f\\cdot d\\mathbf r$ along a path.
:::

:::problem 15
$S$ is the paraboloid $z = 4 - x^2 - y^2$ above $z = 0$, open at the bottom, with upward normal. The direct surface integral of $\\mathbf F$ is messy, but $\\operatorname{div}\\mathbf F$ is simple. What's the method?

{{circle 1: The Divergence Theorem directly on $S$ | *Close it off with the disk at $z = 0$, use the Divergence Theorem, then subtract the disk's flux | Stokes' Theorem, for any $\\mathbf F$ | Green's Theorem}}
+++
review: 2026-11-16 Surfaces that aren't closed: close them off; 2026-11-16 The Divergence Theorem

**The method.** The Divergence Theorem needs a closed surface, so add the flat disk to close it. Then (flux through $S$) $=$ (flux out of the closed surface) $-$ (flux out through the disk). For example, if the solid gives $24\\pi$ and the disk gives $0$, then $S$ gives $24\\pi$.

**Why not the other choices.**
- **Directly on $S$:** $S$ alone isn't closed, so it doesn't bound a solid.
- **Stokes' Theorem:** it only applies when the integrand is the curl of some field, not to any $\\mathbf F$.
- **Green's Theorem:** it's for curves in the plane.
:::

:::problem 16
$S$ is the upper half of a sphere, with upward normal. You need $\\iint_S \\operatorname{curl}\\mathbf F\\cdot d\\mathbf S$, and the curl is messy. What's the method?

{{circle 1: The Divergence Theorem on the half sphere | *Stokes' Theorem: $\\oint_C \\mathbf F\\cdot d\\mathbf r$ around the bottom circle (or the flux of the curl through the flat disk) | Integrate $\\mathbf F$ itself over $S$ | It's always $0$}}
+++
review: 2026-11-30 Stokes' Theorem; 2026-12-02 Swapping to an easier surface

**The method.** The flux of a curl depends only on the surface's edge. The half sphere's edge is the bottom circle, traced counterclockwise from above for an upward normal. So you can integrate $\\mathbf F$ around the circle, or integrate the curl over the flat disk with the same edge. For example, $\\mathbf F = \\langle -y, x, 0 \\rangle$ on the half sphere of radius $3$ gives $2 \\times 9\\pi = 18\\pi$.

**Why not the other choices.**
- **Divergence Theorem:** the half sphere isn't closed.
- **$\\mathbf F$ itself:** the question is about the flux of the curl, a different field.
- **Always $0$:** that's for a closed surface. The example gives $18\\pi$.
:::

:::problem 17
$C$ is a triangle in space with corners on the three axes, and $\\mathbf F$ is not conservative. What's the best method for $\\oint_C \\mathbf F\\cdot d\\mathbf r$?

{{circle 1: *Stokes' Theorem: the flux of $\\operatorname{curl}\\mathbf F$ through the flat triangle | Green's Theorem | The Divergence Theorem | It's $0$, because $C$ is closed}}
+++
review: 2026-12-02 Using Stokes' Theorem for a line integral; 2026-11-30 Stokes' Theorem

**The method.** Stokes' Theorem replaces three line integrals with one surface integral over the flat triangle. If the curl is the same arrow everywhere, it's a dot product times an area. For example, $\\mathbf F = \\langle z, x, y \\rangle$ around the triangle with corners $(1, 0, 0)$, $(0, 1, 0)$, $(0, 0, 1)$ gives $\\tfrac32$.

**Why not the other choices.**
- **Green's Theorem:** it's for curves in the $xy$-plane, and this triangle is tilted in space.
- **Divergence Theorem:** that's for closed surfaces, not loops.
- **$0$:** only a conservative field gives $0$ around every loop, and this $\\mathbf F$ isn't one.
:::

:::problem 18
$\\mathbf F$ has $\\operatorname{curl}\\mathbf F = \\mathbf 0$ everywhere except on the $z$-axis, where it isn't defined. $C$ is a circle around the $z$-axis. What can you say about $\\oint_C \\mathbf F\\cdot d\\mathbf r$?

{{circle 1: It's $0$, by Stokes' Theorem | It's $0$, by the Divergence Theorem | *You can't tell from the curl: compute it around the circle | It's $2\\pi$ for every such field}}
+++
review: 2026-12-04 The method for a field on a region of space; 2026-12-04 A hole doesn't always break conservativeness

**The method.** Every surface with this circle as its edge crosses the $z$-axis, where $\\mathbf F$ isn't defined, so Stokes' Theorem can't be used. The missing line is a hole. For example, $\\langle -y, x, 0 \\rangle / (x^2 + y^2)$ gives $2\\pi$ around the unit circle, but $\\langle x, y, 0 \\rangle / (x^2 + y^2)$ gives $0$. Both have zero curl.

**Why not the other choices.**
- **$0$ by Stokes:** Stokes needs a surface inside the region where $\\mathbf F$ is defined, and there isn't one.
- **$0$ by the Divergence Theorem:** that's about flux through closed surfaces, not loops.
- **$2\\pi$ always:** the second example gives $0$.
:::

:::problem 19
$\\mathbf F = \\langle x, y, z \\rangle / (x^2 + y^2 + z^2)^{3/2}$, and $S$ is a lumpy closed surface around the origin, with outward normal. What's its flux?

{{circle 1: $0$, by the Divergence Theorem, since $\\operatorname{div}\\mathbf F = 0$ | *$4\\pi$: cut out a small sphere around the origin, where the flux is $4\\pi$ | It depends on the shape of $S$ | It can't be found without parametrizing $S$}}
+++
review: 2026-12-07 Any closed surface: the origin inside or outside; 2026-12-07 The flux through a sphere around the charge

**The method.** $\\mathbf F$ isn't defined at the origin, which is inside $S$, so the Divergence Theorem can't be used on all of the solid. Between a small sphere around the origin and $S$, the divergence is $0$, so the flux through $S$ equals the small sphere's. On the sphere of radius $a$, $\\mathbf F\\cdot\\mathbf n = 1/a^2$ and the area is $4\\pi a^2$, so the flux is $4\\pi$. For example, with $a = 1$: $1 \\times 4\\pi = 4\\pi$.

**Why not the other choices.**
- **$0$:** that's right only when the origin is outside $S$.
- **Depends on the shape:** it doesn't, as long as the origin is inside.
- **Parametrize:** not needed, because cutting out the small sphere gives the answer.
:::

:::problem 20
Which fact shows that $\\langle x^2, y, z \\rangle$ can't be a magnetic field?

{{circle 1: Its curl isn't $\\mathbf 0$ | *Its divergence, $2x + 2$, isn't $0$ everywhere | It isn't conservative | It isn't defined everywhere}}
+++
review: 2026-12-09 Row 2: no magnetic charge; 2026-12-09 The four equations at a glance

**The method.** One of Maxwell's equations is $\\nabla\\cdot\\mathbf B = 0$ everywhere: there is no magnetic charge. Here the divergence is $2x + 1 + 1 = 2x + 2$, which is $2$ at the point $(0, 0, 0)$, not $0$.

**Why not the other choices.**
- **Curl:** magnetic fields can have nonzero curl (near a current, for example). Besides, this field's curl is $\\mathbf 0$: each component depends only on its own variable.
- **Not conservative:** it is conservative, with potential $\\tfrac{x^3}{3} + \\tfrac{y^2}{2} + \\tfrac{z^2}{2}$. Either way, magnetic fields don't have to be conservative.
- **Not defined everywhere:** it is defined at every point.
:::

:::problem 21
A magnetic field $\\mathbf B$ changes with time, and $C$ is a loop with a surface $D$ bounded by it. Faraday's law gives $\\oint_C \\mathbf E\\cdot d\\mathbf r$ as:

{{circle 1: $\\iint_D \\mathbf B\\cdot d\\mathbf S$ | *$-\\dfrac{d}{dt}\\iint_D \\mathbf B\\cdot d\\mathbf S$ | $\\dfrac{d}{dt}\\iint_D \\mathbf B\\cdot d\\mathbf S$ | $\\iiint \\nabla\\cdot\\mathbf B\\, dV$}}
+++
review: 2026-12-09 Row 3: Faraday's law; 2026-12-09 The four equations at a glance

**The method.** A **changing** magnetic flux through the loop makes the electric field circle it, with a minus sign. For example, $\\mathbf B = \\langle 0, 0, t \\rangle$ through the unit disk has flux $\\pi t$, changing at the rate $\\pi$, so $\\oint_C \\mathbf E\\cdot d\\mathbf r = -\\pi$.

**Why not the other choices.**
- **The flux itself:** a magnetic field that doesn't change makes no circling $\\mathbf E$, whatever its flux. It's the rate of change that counts.
- **Without the minus sign:** that's the most common mistake. The minus sign makes $\\mathbf E$ circle opposite to the right-hand direction of the growing $\\mathbf B$.
- **$\\iiint \\nabla\\cdot\\mathbf B\\, dV$:** that's always $0$, and it's about closed surfaces, not loops.
:::
`;export{e as default};