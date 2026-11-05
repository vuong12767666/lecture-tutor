var e=`---
title: Integrating in cylindrical and spherical coordinates
date: 2026-10-28
stewart: 15.7, 15.8
source: OpenStax Calculus Volume 3, §5.5 Triple Integrals in Cylindrical and Spherical Coordinates
---

:::recap Last time
- A triple integral adds up $f \\cdot \\Delta V$ over a solid. Between two surfaces, $\\iiint_E f\\, dV = \\iint_D \\Big[\\int_{\\text{bottom}}^{\\text{top}} f\\, dz\\Big] dA$, where $D$ is the solid's shadow on the $xy$-plane.
- On Oct 23, round shadows were easier in polar: $x = r\\cos\\theta$, $y = r\\sin\\theta$, and $dA = r\\, dr\\, d\\theta$.
:::

:::check
Warm-up: compute $\\displaystyle\\iint_D (x^2 + y^2)\\, dA$, where $D$ is the disk $x^2 + y^2 \\le 4$.
answer: 8pi
???
In polar, $x^2 + y^2 = r^2$, and the disk is $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$. Don't forget the $r$ in $dA$:
$$\\int_0^{2\\pi} \\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\Big[\\tfrac{r^4}{4}\\Big]_0^2 = 2\\pi \\cdot 4 = 8\\pi.$$
:::

:::question Today
How do you set up a triple integral over a round solid, like a can, a ball, or an ice cream cone, without square roots in the limits?
:::

:::idea Cylindrical coordinates
**The coordinates.** Keep $z$, and describe $(x, y)$ in polar:
$$x = r\\cos\\theta, \\qquad y = r\\sin\\theta, \\qquad z = z.$$
Here $r$ is the distance from the $z$-axis, and $\\theta$ is the angle around the $z$-axis, measured from the positive $x$-axis. These are [[cylindrical coordinates]].

**Why they help.** A solid that is round around the $z$-axis has simple limits in them:
- The cylinder $x^2 + y^2 = 4$ is $r = 2$, because $x^2 + y^2 = r^2\\cos^2\\theta + r^2\\sin^2\\theta = r^2$.
- The paraboloid $z = 4 - x^2 - y^2$ is $z = 4 - r^2$.
>>> Why $r$ is the distance from the $z$-axis, and how to rewrite a surface
**What cylindrical coordinates are.** Keep $z$ (the height) as it is. For the position over the floor, use polar coordinates: $r$ for the distance and $\\theta$ for the angle. For example, $(3, 4, 7)$ has $r = \\sqrt{9 + 16} = 5$, $\\theta$ the angle of $(3, 4)$, and $z = 7$.

**Why $r$ is the distance from the $z$-axis.** The $z$-axis is the vertical line through the origin, made of the points $(0, 0, z)$. The point of the axis closest to $(3, 4, 7)$ is $(0, 0, 7)$, at the same height. The distance between them is $\\sqrt{3^2 + 4^2 + 0^2} = 5$, which is $r$. In general the distance is $\\sqrt{x^2 + y^2}$, and $x^2 + y^2 = r^2$. So "$r = 2$" means "every point at distance $2$ from the $z$-axis", which is a cylinder (a tube) of radius $2$ around the axis.

**Rewriting any surface.** Replace $x$ with $r\\cos\\theta$ and $y$ with $r\\sin\\theta$, and simplify. Whenever $x^2 + y^2$ appears, it becomes $r^2$ in one step. For the paraboloid $z = 4 - x^2 - y^2$: $z = 4 - (x^2 + y^2) = 4 - r^2$. No $\\theta$ is left, which says the surface looks the same in every direction around the $z$-axis: its height depends only on how far out you are.
<<<

**The volume of a small piece is $r\\, dz\\, dr\\, d\\theta$.** Cut the solid by small changes $\\Delta r$, $\\Delta\\theta$, and $\\Delta z$. Each piece is a polar patch from Oct 23 lifted to height $\\Delta z$:
1. **The base** is a piece of a ring. Its curved side is an arc of a circle of radius $r$ through angle $\\Delta\\theta$, so it is $r\\,\\Delta\\theta$ long. Its other side is $\\Delta r$ long. So its area is about $r\\,\\Delta r\\,\\Delta\\theta$.
2. **The height** is $\\Delta z$.
3. **Base times height** gives $\\Delta V \\approx r\\,\\Delta z\\,\\Delta r\\,\\Delta\\theta$.
>>> Each step of $dV$, worked out
**What has to be found.** A triple integral adds (value) $\\times$ (volume of a small piece). In cylindrical coordinates the pieces are cut by changing $r$, $\\theta$, and $z$ a little, and the question is how big such a piece is.

**Step 1: the floor of the piece.** Changing $r$ from $r$ to $r + \\Delta r$ and $\\theta$ from $\\theta$ to $\\theta + \\Delta\\theta$ gives the same curved piece of the floor as in polar coordinates (Oct 19). One side is $\\Delta r$ long. The other is part of a circle of radius $r$, and a piece of a circle is (radius) $\\times$ (angle) long: $r\\,\\Delta\\theta$. For example, at $r = 2$ and $\\Delta\\theta = 0.1$, that side is $0.2$ long. When the changes are small, the piece is nearly a rectangle, so its area is about $\\Delta r \\times r\\,\\Delta\\theta$.

**Step 2: its height.** Changing $z$ by $\\Delta z$ moves straight up, so the piece is that floor shape raised to a thickness $\\Delta z$.

**Step 3: volume = floor area $\\times$ height.** $r\\,\\Delta r\\,\\Delta\\theta \\times \\Delta z$. So $dV = r\\, dz\\, dr\\, d\\theta$.

**Where the $r$ comes from.** Pieces with the same $\\Delta r$, $\\Delta\\theta$, $\\Delta z$ are bigger farther from the axis, because their curved side $r\\,\\Delta\\theta$ is longer there. At $r = 2$ a piece is twice as big as at $r = 1$. Without the factor $r$, the integral would count a small piece near the axis the same as a big piece far out.
<<<

So Oct 26's formula, with the shadow done in polar, becomes
$$\\iiint_E f\\, dV = \\int_\\alpha^\\beta \\int_{h_1(\\theta)}^{h_2(\\theta)} \\int_{u_1(r, \\theta)}^{u_2(r, \\theta)} f(r\\cos\\theta, r\\sin\\theta, z)\\, r\\, dz\\, dr\\, d\\theta.$$
The $z$-limits are the bottom and top surfaces, written with $r$ and $\\theta$. The $r$- and $\\theta$-limits describe the shadow, as on Oct 23.

**Example.** A can fills $x^2 + y^2 \\le 4$, $0 \\le z \\le 3$, and its density is $\\rho = \\sqrt{x^2 + y^2}$, so it gets denser away from its center line. Find its mass.
1. **Rewrite the density.** $\\sqrt{x^2 + y^2} = \\sqrt{r^2} = r$, since $r \\ge 0$.
2. **Limits.** Bottom $z = 0$, top $z = 3$. The shadow is the disk $r \\le 2$: $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$.
3. **Integrate from the inside out.** The integrand is the density $r$ times the $r$ from $dV$:
$$m = \\int_0^{2\\pi} \\int_0^2 \\int_0^3 r \\cdot r\\, dz\\, dr\\, d\\theta = 16\\pi \\approx 50.3.$$
>>> Each step of the can's mass, worked out
**What's being found.** The can's density is its mass per unit of volume, and it's different in different places. Mass is (density) $\\times$ (volume) added up over all the small pieces: $\\iiint \\rho\\, dV$.

**Step 1: the density in cylindrical coordinates.** $\\sqrt{x^2 + y^2}$ is the distance from the $z$-axis, which is $r$. So the density is $r$: $0$ on the can's center line, $1$ at distance $1$, $2$ at the wall.

**Step 2: the limits, from the rules.** The can is $x^2 + y^2 \\le 4$ and $0 \\le z \\le 3$.
- $0 \\le z \\le 3$ already says where each column starts and stops: from the bottom ($z = 0$) to the lid ($z = 3$).
- $x^2 + y^2 \\le 4$ is $r^2 \\le 4$, so $0 \\le r \\le 2$.
- Nothing limits the angle, so $0 \\le \\theta \\le 2\\pi$.

**Step 3: the integrand.** Density $r$ times the piece's volume $r\\, dz\\, dr\\, d\\theta$ gives $r \\cdot r = r^2$.

**Step 4: the three integrals.**
- **Inside, up one column:** in a column, $r$ is a single number, so $r^2$ is too: $\\int_0^3 r^2\\, dz = r^2 \\times 3 = 3r^2$. (A column of height $3$ with the same density all the way up.)
- **Middle, outward from the center:** $\\int_0^2 3r^2\\, dr = \\Big[r^3\\Big]_0^2 = 8$.
- **Outside, around:** $8$ for every angle, so multiply by $2\\pi$: $16\\pi \\approx 50.3$.

**Is $16\\pi$ reasonable?** The can's volume is $\\pi \\cdot 2^2 \\cdot 3 = 12\\pi$, so its average density is $\\tfrac{16\\pi}{12\\pi} = \\tfrac43$. The density goes from $0$ at the center to $2$ at the wall, so you might guess an average of $1$, halfway. It's higher because there's more can far from the center: the circle at distance $r$ is $2\\pi r$ long, so there's twice as much can at distance $2$ as at distance $1$. That's exactly the extra $r$ in $dV$.
<<<
:::

:::figure cylinder-column
The can $x^2 + y^2 \\le 4$, $0 \\le z \\le 3$, with its shadow, the disk $D$, shaded on the $xy$-plane. The point $(1, 1)$ of the shadow is at distance $r = \\sqrt2$ from the $z$-axis. Above it, the column runs from the bottom $z = 0$ to the top $z = 3$; the inside integral adds up one such column.
:::

:::check
Compute $\\displaystyle\\iiint_E (x^2 + y^2)\\, dV$, where $E$ is the solid between the plane $z = 0$ and the paraboloid $z = 4 - x^2 - y^2$.
answer: 32pi/3
???
**In cylindrical coordinates,** the integrand is $x^2 + y^2 = r^2$ and the top is $z = 4 - r^2$. The top meets the bottom $z = 0$ where $r = 2$, so the shadow is $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$.
$$\\int_0^{2\\pi} \\int_0^2 \\int_0^{4 - r^2} r^2 \\cdot r\\, dz\\, dr\\, d\\theta.$$
- $\\int_0^{4 - r^2} r^3\\, dz = r^3(4 - r^2) = 4r^3 - r^5$.
- $\\int_0^2 (4r^3 - r^5)\\, dr = \\Big[r^4 - \\tfrac{r^6}{6}\\Big]_0^2 = 16 - \\tfrac{64}{6} = \\tfrac{16}{3}$.
- $\\int_0^{2\\pi} \\tfrac{16}{3}\\, d\\theta = \\tfrac{32\\pi}{3}$.
:::

:::idea Spherical coordinates
**The coordinates.** Describe a point by
- $\\rho$ (rho): its distance from the **origin**, $\\rho \\ge 0$,
- $\\theta$: the same angle around the $z$-axis as in cylindrical coordinates,
- $\\varphi$ (phi): the angle down from the **positive $z$-axis**, $0 \\le \\varphi \\le \\pi$. The north pole direction is $\\varphi = 0$, the $xy$-plane is $\\varphi = \\tfrac\\pi2$, and straight down is $\\varphi = \\pi$.

These are [[spherical coordinates]], and
$$x = \\rho\\sin\\varphi\\cos\\theta, \\qquad y = \\rho\\sin\\varphi\\sin\\theta, \\qquad z = \\rho\\cos\\varphi.$$
>>> Why these formulas
**What spherical coordinates are.** Name a point by
- $\\rho$, its distance from the origin,
- $\\varphi$, the angle between straight up (the positive $z$-axis) and the line from the origin to the point, and
- $\\theta$, the same angle around the $z$-axis as in polar and cylindrical coordinates.

For example, the point $(0, 0, 5)$ is straight up: $\\rho = 5$, $\\varphi = 0$. The point $(5, 0, 0)$ is level with the floor: $\\rho = 5$, $\\varphi = \\tfrac\\pi2$.

**A right triangle gives $z$ and $r$.** Three segments make a right triangle: from the origin to the point (length $\\rho$), from the origin up the $z$-axis to the point's height (length $z$), and straight across from there to the point (length $r$, the distance from the $z$-axis). The right angle is where the across segment meets the axis, and the angle at the origin is $\\varphi$. The side next to $\\varphi$ is the one along the axis, and the side across from it is the horizontal one, so
$$z = \\rho\\cos\\varphi, \\qquad r = \\rho\\sin\\varphi.$$
(Below the floor, $\\varphi$ is more than $\\tfrac\\pi2$, $\\cos\\varphi$ is negative, and so $z$ comes out negative, as it should.)

**Then $x$ and $y$.** Once you know $r$ and $\\theta$, $x = r\\cos\\theta$ and $y = r\\sin\\theta$ as in polar coordinates. Putting $r = \\rho\\sin\\varphi$ in gives $x = \\rho\\sin\\varphi\\cos\\theta$ and $y = \\rho\\sin\\varphi\\sin\\theta$.

**An example.** For $(3, 0, 4)$: $\\rho = \\sqrt{9 + 0 + 16} = 5$ and $r = 3$. So $\\cos\\varphi = \\tfrac{z}{\\rho} = \\tfrac45$ and $\\sin\\varphi = \\tfrac{r}{\\rho} = \\tfrac35$, and $\\theta = 0$. Check: $x = 5 \\cdot \\tfrac35 \\cdot 1 = 3$ ✓ and $z = 5 \\cdot \\tfrac45 = 4$ ✓.
<<<

**Shapes that become simple.**
- The sphere $x^2 + y^2 + z^2 = 4$ is $\\rho = 2$.
- The cone $z = \\sqrt{x^2 + y^2}$ is $\\varphi = \\tfrac\\pi4$.
>>> Rewriting the sphere and the cone, step by step
**The sphere.** $x^2 + y^2 + z^2$ is the squared distance from the origin, which is $\\rho^2$. To see it from the formulas: $x^2 + y^2 = r^2 = \\rho^2\\sin^2\\varphi$, and $z^2 = \\rho^2\\cos^2\\varphi$, so
$$x^2 + y^2 + z^2 = \\rho^2\\sin^2\\varphi + \\rho^2\\cos^2\\varphi = \\rho^2(\\sin^2\\varphi + \\cos^2\\varphi) = \\rho^2.$$
So $x^2 + y^2 + z^2 = 4$ is $\\rho^2 = 4$, which is $\\rho = 2$: every point at distance $2$ from the origin.

**The cone.** $z = \\sqrt{x^2 + y^2}$ says the height equals the distance from the $z$-axis. For example, $(1, 0, 1)$ is on it: $1$ out and $1$ up. The line from the origin to that point goes $1$ across and $1$ up, so it makes a $45^\\circ$ angle with straight up: $\\varphi = \\tfrac\\pi4$. With the formulas: the cone says $\\rho\\cos\\varphi = \\rho\\sin\\varphi$; for points other than the origin, divide by $\\rho$ to get $\\cos\\varphi = \\sin\\varphi$, which (for angles from $0$ to $\\pi$) happens only at $\\varphi = \\tfrac\\pi4$. Every point of the cone is at $45^\\circ$ from straight up.
<<<

**The volume of a small piece is $\\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$.** Change each coordinate by a small amount. The piece is close to a box with three edges:
1. **Changing $\\rho$** moves straight out from the origin: an edge of length $\\Delta\\rho$.
2. **Changing $\\varphi$** moves along a circle of radius $\\rho$ through the poles (a line of longitude): an arc of length $\\rho\\,\\Delta\\varphi$.
3. **Changing $\\theta$** moves around the $z$-axis along a circle of radius $r = \\rho\\sin\\varphi$ (a line of latitude): an arc of length $\\rho\\sin\\varphi\\,\\Delta\\theta$.

The three directions are perpendicular to each other, so the volume is about the product of the edges: $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$.
>>> Each edge of the piece, worked out
**What has to be found.** The volume of a small piece cut by changing $\\rho$, $\\varphi$, and $\\theta$ a little. The piece is close to a box, so find its three edge lengths.

**Edge 1: changing $\\rho$.** Keeping the two angles the same and changing only $\\rho$ moves the point straight out from the origin along a line. Distance along that line is $\\rho$ itself, so this edge is $\\Delta\\rho$ long.

**Edge 2: changing $\\varphi$.** Keeping $\\rho$ and $\\theta$ the same and changing $\\varphi$ keeps the point at distance $\\rho$ from the origin and swings it from top to bottom, along a circle of radius $\\rho$ through the north and south poles. A piece of a circle is (radius) $\\times$ (angle), so this edge is $\\rho\\,\\Delta\\varphi$. For example, at $\\rho = 2$ and $\\Delta\\varphi = 0.1$, it's $0.2$.

**Edge 3: changing $\\theta$.** Keeping $\\rho$ and $\\varphi$ the same keeps both the height $z = \\rho\\cos\\varphi$ and the distance from the $z$-axis $r = \\rho\\sin\\varphi$ the same. Changing $\\theta$ then moves the point around a horizontal circle of radius $r = \\rho\\sin\\varphi$. So this edge is $\\rho\\sin\\varphi\\,\\Delta\\theta$.

**Multiply.** The three directions are at right angles to each other, so the volume is about $\\Delta\\rho \\times \\rho\\,\\Delta\\varphi \\times \\rho\\sin\\varphi\\,\\Delta\\theta = \\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$.

**Why the $\\sin\\varphi$.** Near the north pole ($\\varphi$ close to $0$), the horizontal circles are tiny, so changing $\\theta$ barely moves the point, and the pieces are thin. For example, at $\\varphi = 0.1$, $\\sin\\varphi \\approx 0.1$, so edge 3 is only a tenth as long as at the equator ($\\varphi = \\tfrac\\pi2$, $\\sin\\varphi = 1$).
<<<

**Example: the volume of a ball of radius $a$.** The ball is $0 \\le \\rho \\le a$, $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$, so
$$V = \\int_0^{2\\pi}\\int_0^\\pi\\int_0^a \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = \\frac43\\pi a^3,$$
the formula from geometry.
>>> Each integral of the ball, worked out
**The limits.** A point is in the ball of radius $a$ when its distance from the origin is at most $a$: $0 \\le \\rho \\le a$. Nothing limits the direction: $\\varphi$ goes from $0$ (straight up) to $\\pi$ (straight down), and $\\theta$ goes all the way around, $0$ to $2\\pi$.

**Inside, in $\\rho$.** With the two angles held at single values, $\\sin\\varphi$ is a single number and comes out front: $\\sin\\varphi\\int_0^a \\rho^2\\, d\\rho = \\sin\\varphi \\cdot \\tfrac{a^3}{3}$.

**Middle, in $\\varphi$.** $\\tfrac{a^3}{3}\\int_0^\\pi \\sin\\varphi\\, d\\varphi = \\tfrac{a^3}{3}\\Big[-\\cos\\varphi\\Big]_0^\\pi = \\tfrac{a^3}{3}\\big(-\\cos\\pi + \\cos 0\\big) = \\tfrac{a^3}{3}(1 + 1) = \\tfrac{2a^3}{3}$.

**Outside, in $\\theta$.** The same for every $\\theta$, so multiply by $2\\pi$: $\\tfrac{2a^3}{3} \\cdot 2\\pi = \\tfrac43\\pi a^3$, the volume of a ball from geometry ✓.

**Why $\\varphi$ stops at $\\pi$.** $\\theta$ already goes all the way around. If $\\varphi$ also went past $\\pi$, it would reach every point a second time from the other side, and the ball would be counted twice.

**A check on the factor.** Without the $\\sin\\varphi$, the middle integral would be $\\int_0^\\pi 1\\, d\\varphi = \\pi$ instead of $2$, giving $\\tfrac{2\\pi^2}{3}a^3 \\approx 6.58\\,a^3$ instead of the true $\\tfrac43\\pi a^3 \\approx 4.19\\,a^3$.
<<<
:::

:::example The ice cream cone
Find the volume of the solid inside the sphere $x^2 + y^2 + z^2 = 4$ and above the cone $z = \\sqrt{x^2 + y^2}$.

1. **Limits.** The sphere is $\\rho = 2$, so $0 \\le \\rho \\le 2$. Above the cone means closer to the positive $z$-axis, so $0 \\le \\varphi \\le \\tfrac\\pi4$. All the way around: $0 \\le \\theta \\le 2\\pi$.
>>> Why these limits, from the inequalities
**Inside the sphere** is $x^2 + y^2 + z^2 \\le 4$: squared distance at most $4$, so distance at most $2$: $\\rho \\le 2$.

**Above the cone** is $z \\ge \\sqrt{x^2 + y^2}$: the height is at least the distance from the $z$-axis. In spherical coordinates that's $\\rho\\cos\\varphi \\ge \\rho\\sin\\varphi$; for points other than the origin, divide by $\\rho$: $\\cos\\varphi \\ge \\sin\\varphi$. Test some angles:
- $\\varphi = 0.3$: $\\cos 0.3 \\approx 0.955$ and $\\sin 0.3 \\approx 0.296$, so $\\cos \\ge \\sin$ ✓ (above the cone).
- $\\varphi = \\tfrac\\pi4 \\approx 0.785$: they're equal (on the cone).
- $\\varphi = 1$: $\\cos 1 \\approx 0.540$ and $\\sin 1 \\approx 0.841$, so $\\cos < \\sin$ (below the cone).

So above the cone is $0 \\le \\varphi \\le \\tfrac\\pi4$. In words: a smaller angle from straight up means closer to straight up, which is above the cone.

**Around:** neither rule mentions the angle around the axis, so $\\theta$ goes from $0$ to $2\\pi$.
<<<
2. **Integrate.**
$$V = \\int_0^{2\\pi}\\int_0^{\\pi/4}\\int_0^2 \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = \\frac{16\\pi}{3}\\left(1 - \\frac{\\sqrt2}{2}\\right) \\approx 4.91.$$
>>> Each integral, worked out
**Inside, in $\\rho$.** With the angles held at single values, $\\sin\\varphi$ comes out front: $\\sin\\varphi\\int_0^2 \\rho^2\\, d\\rho = \\sin\\varphi \\cdot \\tfrac83$.

**Middle, in $\\varphi$.** $\\tfrac83\\int_0^{\\pi/4}\\sin\\varphi\\, d\\varphi = \\tfrac83\\Big[-\\cos\\varphi\\Big]_0^{\\pi/4} = \\tfrac83\\left(-\\tfrac{\\sqrt2}{2} + 1\\right)$, using $\\cos\\tfrac\\pi4 = \\tfrac{\\sqrt2}{2} \\approx 0.707$ and $\\cos 0 = 1$.

**Outside, in $\\theta$.** The same for every $\\theta$, so multiply by $2\\pi$: $\\tfrac{16\\pi}{3}\\left(1 - \\tfrac{\\sqrt2}{2}\\right) \\approx 4.91$.

**Is $4.91$ reasonable?** The whole ball of radius $2$ has volume $\\tfrac{32\\pi}{3} \\approx 33.5$. The cone's integral is the same as the ball's except for the middle step: $1 - \\tfrac{\\sqrt2}{2} \\approx 0.293$ instead of $2$. So the cone is about $\\tfrac{0.293}{2} \\approx 14.6\\%$ of the ball, and $0.146 \\times 33.5 \\approx 4.91$ ✓.
<<<
:::

:::check
Compute $\\displaystyle\\iiint_B (x^2 + y^2 + z^2)\\, dV$, where $B$ is the ball $x^2 + y^2 + z^2 \\le 1$.
answer: 4pi/5
???
In spherical coordinates $x^2 + y^2 + z^2 = \\rho^2$, and with the $\\rho^2\\sin\\varphi$ from $dV$:
$$\\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 \\rho^2 \\cdot \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = 2\\pi \\cdot 2 \\cdot \\frac15 = \\frac{4\\pi}{5}.$$
:::

:::idea Which coordinates to use
Pick the system in which the **boundaries** are "coordinate $=$ number" or close to it, and the **integrand** gets simpler.

| The solid involves | Use | Because |
|---|---|---|
| boxes, planes like $z = 2 - x - y$ | $x, y, z$ | the boundaries are already simple there |
| cylinders $x^2 + y^2 = a^2$, paraboloids $z = c - x^2 - y^2$, round shadows | cylindrical | $x^2 + y^2$ becomes $r^2$ and a round shadow becomes $r \\le a$ |
| spheres $x^2 + y^2 + z^2 = a^2$, cones $z = k\\sqrt{x^2 + y^2}$ | spherical | a sphere becomes $\\rho = a$ and a cone becomes $\\varphi = $ constant |

**Why it matters which one.** The limits come from the boundaries. A boundary that is "coordinate $=$ number" gives a limit that is a number, and numbers make every inner integral easier. A solid can be done in any system; the right one just makes the work short.
>>> Seeing the difference: the ice cream cone in cylindrical coordinates
Here are the same steps as the spherical example, done in cylindrical coordinates instead, to show exactly where the extra work comes from.

**Columns.** In cylindrical coordinates, the cone $z = \\sqrt{x^2 + y^2}$ is $z = r$ (height equals distance from the axis), and the sphere $r^2 + z^2 = 4$ has its top half at $z = \\sqrt{4 - r^2}$. A column at distance $r$ runs from the cone up to the sphere: from $z = r$ to $z = \\sqrt{4 - r^2}$. For example, at $r = 1$ it runs from $1$ to $\\sqrt3 \\approx 1.73$. Already one limit has a square root.

**The shadow needs an extra step.** The columns stop where the cone meets the sphere, where $r = \\sqrt{4 - r^2}$. Square both sides: $r^2 = 4 - r^2$, so $r^2 = 2$ and $r = \\sqrt2$. In spherical coordinates this step wasn't needed: the cone was simply $\\varphi \\le \\tfrac\\pi4$.

**The integral.** Each column contributes its height times $r$ (the size factor):
$$V = \\int_0^{2\\pi}\\int_0^{\\sqrt2}\\big(\\sqrt{4 - r^2} - r\\big)\\, r\\, dr\\, d\\theta = 2\\pi\\int_0^{\\sqrt2}\\left(r\\sqrt{4 - r^2} - r^2\\right) dr.$$
For the first part, let $u = 4 - r^2$, so $du = -2r\\, dr$; $r = 0$ gives $u = 4$ and $r = \\sqrt2$ gives $u = 2$:
$$\\int_0^{\\sqrt2} r\\sqrt{4 - r^2}\\, dr = \\tfrac12\\int_2^4 \\sqrt u\\, du = \\tfrac13\\big(8 - 2\\sqrt2\\big).$$
The second part is $\\int_0^{\\sqrt2} r^2\\, dr = \\tfrac{(\\sqrt2)^3}{3} = \\tfrac{2\\sqrt2}{3}$. So
$$V = 2\\pi\\left(\\tfrac{8 - 2\\sqrt2}{3} - \\tfrac{2\\sqrt2}{3}\\right) = \\tfrac{2\\pi}{3}\\big(8 - 4\\sqrt2\\big) = \\tfrac{16\\pi}{3}\\left(1 - \\tfrac{\\sqrt2}{2}\\right).$$
The same answer, but it took a square-root limit, a meeting-point calculation, and a substitution. That's the extra work the table's advice avoids.
<<<
:::

:::check
Which coordinates make $\\displaystyle\\iiint_E z\\, dV$ easiest, where $E$ is the part of the ball $x^2 + y^2 + z^2 \\le 9$ with $z \\ge 0$?
- [x] spherical
- [ ] cylindrical
  why: The top would be $z = \\sqrt{9 - r^2}$, a square root limit. It works, but spherical turns the whole boundary into numbers: $\\rho \\le 3$, $\\varphi \\le \\tfrac\\pi2$.
- [ ] $x, y, z$
  why: The limits would be square roots in both $y$ and $z$. A ball is round, so a round coordinate system fits it.
???
The upper half-ball is $0 \\le \\rho \\le 3$, $0 \\le \\varphi \\le \\tfrac\\pi2$, $0 \\le \\theta \\le 2\\pi$: every limit is a number. The integrand becomes $z = \\rho\\cos\\varphi$, and the answer is $2\\pi \\cdot \\tfrac12 \\cdot \\tfrac{81}{4} = \\tfrac{81\\pi}{4}$.
:::

:::summary Summary
- **Cylindrical coordinates:** $x = r\\cos\\theta$, $y = r\\sin\\theta$, $z = z$, so $x^2 + y^2 = r^2$.
- **$dV = r\\, dz\\, dr\\, d\\theta$:** a small piece is a polar patch of area $r\\,\\Delta r\\,\\Delta\\theta$ with height $\\Delta z$.
- **Setting up:** $z$ from the bottom surface to the top one (written with $r$), then $r$ and $\\theta$ over the shadow, as in polar.
- **Spherical coordinates:** $x = \\rho\\sin\\varphi\\cos\\theta$, $y = \\rho\\sin\\varphi\\sin\\theta$, $z = \\rho\\cos\\varphi$, so $x^2 + y^2 + z^2 = \\rho^2$.
- **$dV = \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$:** a small piece has edges $\\Delta\\rho$, $\\rho\\,\\Delta\\varphi$, and $\\rho\\sin\\varphi\\,\\Delta\\theta$.
- **Choosing:** cylinders and paraboloids → cylindrical; spheres and cones → spherical.

**Common mistakes:**
- Forgetting the $r$ in $dV$.
- Leaving $x$ and $y$ in the integrand: rewrite $x^2 + y^2$ as $r^2$, and $x$ as $r\\cos\\theta$.
- Forgetting $\\rho^2\\sin\\varphi$ in spherical, or mixing up $\\rho$ (distance to the origin) with $r$ (distance to the $z$-axis).
- Measuring $\\varphi$ from the $xy$-plane. It's measured down from the positive $z$-axis.
:::
`;export{e as default};