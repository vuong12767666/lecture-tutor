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
**Distance from the $z$-axis.** The closest point of the $z$-axis to $(x, y, z)$ is $(0, 0, z)$, at the same height. The distance between them is $\\sqrt{x^2 + y^2 + 0^2} = \\sqrt{x^2 + y^2}$, and since $x^2 + y^2 = r^2$ with $r \\ge 0$, that distance is $r$. So "$r = 2$" means "every point at distance $2$ from the $z$-axis", which is the cylinder.

**Rewriting any surface.** Replace $x$ with $r\\cos\\theta$ and $y$ with $r\\sin\\theta$, and simplify. Whenever $x^2 + y^2$ appears, it becomes $r^2$ in one step, because $\\cos^2\\theta + \\sin^2\\theta = 1$. For the paraboloid: $z = 4 - (x^2 + y^2) = 4 - r^2$. The $\\theta$ disappears, which says the surface looks the same in every direction around the $z$-axis.
<<<

**The volume of a small piece is $r\\, dz\\, dr\\, d\\theta$.** Cut the solid by small changes $\\Delta r$, $\\Delta\\theta$, and $\\Delta z$. Each piece is a polar patch from Oct 23 lifted to height $\\Delta z$:
1. **The base** is a piece of a ring. Its curved side is an arc of a circle of radius $r$ through angle $\\Delta\\theta$, so it is $r\\,\\Delta\\theta$ long. Its other side is $\\Delta r$ long. So its area is about $r\\,\\Delta r\\,\\Delta\\theta$.
2. **The height** is $\\Delta z$.
3. **Base times height** gives $\\Delta V \\approx r\\,\\Delta z\\,\\Delta r\\,\\Delta\\theta$.
>>> Each step of $dV$, worked out
**Step 1: the base.** The base is the region between two circles (radius $r$ and $r + \\Delta r$) and two rays (angle $\\theta$ and $\\theta + \\Delta\\theta$), the same polar piece as on Oct 19. Arc length is radius times angle: a full circle is $2\\pi r$ long for a full turn of $2\\pi$, so an angle $\\Delta\\theta$ gives the fraction $\\tfrac{\\Delta\\theta}{2\\pi}$ of it, which is $r\\,\\Delta\\theta$. When $\\Delta r$ and $\\Delta\\theta$ are small, the piece is nearly a rectangle with sides $\\Delta r$ and $r\\,\\Delta\\theta$. (Its exact area, worked out on Oct 19, is $\\big(r + \\tfrac{\\Delta r}{2}\\big)\\Delta r\\,\\Delta\\theta$, which differs only by a tiny amount.)

**Step 2: the height.** Changing only $z$ moves straight up, perpendicular to the base, so the piece is a slab of thickness $\\Delta z$.

**Step 3: base times height.** A slab's volume is its base area times its thickness: $r\\,\\Delta r\\,\\Delta\\theta \\cdot \\Delta z$.

**Where the $r$ comes from.** Pieces with the same $\\Delta r$, $\\Delta\\theta$, $\\Delta z$ are bigger farther from the $z$-axis, because their curved side $r\\,\\Delta\\theta$ is longer there. Without the factor $r$, the integral would count a piece near the axis the same as one far out.
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
**Step 1: the density.** $\\sqrt{x^2 + y^2}$ is the distance from the $z$-axis, which is $r$. Algebraically, $x^2 + y^2 = r^2$, and $\\sqrt{r^2} = r$ because $r$ is never negative.

**Step 2: the limits, from the inequalities.** The can is $x^2 + y^2 \\le 4$ and $0 \\le z \\le 3$. The $z$-inequality gives the inside limits directly: $0$ to $3$. The other one becomes $r^2 \\le 4$, so $r \\le 2$, and it says nothing about $\\theta$, so $\\theta$ goes all the way around: $0$ to $2\\pi$.

**Step 3: the integrand.** Mass is density times volume, added up: $\\iiint \\rho\\, dV$. The density is $r$ and $dV = r\\, dz\\, dr\\, d\\theta$, so the integrand is $r \\cdot r = r^2$.

**Step 3: the three integrals.**
- **Inside, in $z$:** $r^2$ doesn't depend on $z$, so it's a constant here: $\\int_0^3 r^2\\, dz = r^2 \\cdot 3 = 3r^2$. This is one column's share: the column at distance $r$ has height $3$.
- **Middle, in $r$:** $\\int_0^2 3r^2\\, dr = \\Big[r^3\\Big]_0^2 = 8$.
- **Outside, in $\\theta$:** $8$ doesn't depend on $\\theta$, so $\\int_0^{2\\pi} 8\\, d\\theta = 8 \\cdot 2\\pi = 16\\pi$.

**Is $16\\pi$ reasonable?** The can's volume is $\\pi \\cdot 2^2 \\cdot 3 = 12\\pi$, so its average density is $\\tfrac{16\\pi}{12\\pi} = \\tfrac43$. The density runs from $0$ on the center line to $2$ on the wall, so you might guess an average of $1$. It's higher because there's more of the can far from the center: the ring at distance $r$ has circumference $2\\pi r$, which grows with $r$. That growth is exactly the extra $r$ in $dV$.
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
**A right triangle.** Three segments make a right triangle: from the origin to the point (length $\\rho$), from the origin along the $z$-axis to the point's height (length $|z|$), and straight across from there to the point (length $r$, the distance from the $z$-axis). The right angle is where the horizontal segment meets the $z$-axis. The angle at the origin, between the $z$-axis and the segment to the point, is $\\varphi$.

**Reading off $z$ and $r$.** The side next to the angle $\\varphi$ is the one along the $z$-axis, and the side across from it is the horizontal one. So
$$z = \\rho\\cos\\varphi, \\qquad r = \\rho\\sin\\varphi.$$
(When $\\varphi > \\tfrac\\pi2$ the point is below the $xy$-plane, and $\\cos\\varphi < 0$ makes $z$ negative, as it should be.)

**Then $x$ and $y$.** Once you know $r$ and $\\theta$, cylindrical coordinates give $x = r\\cos\\theta$ and $y = r\\sin\\theta$. Substituting $r = \\rho\\sin\\varphi$ gives the formulas above.

**An example.** For $(3, 0, 4)$: $r = 3$ and $\\rho = \\sqrt{9 + 0 + 16} = 5$, so $\\cos\\varphi = \\tfrac{z}{\\rho} = \\tfrac45$ and $\\sin\\varphi = \\tfrac{r}{\\rho} = \\tfrac35$. Check: $\\rho\\sin\\varphi\\cos\\theta = 5 \\cdot \\tfrac35 \\cdot 1 = 3$ (with $\\theta = 0$) ✓ and $\\rho\\cos\\varphi = 4$ ✓.
<<<

**Shapes that become simple.**
- The sphere $x^2 + y^2 + z^2 = 4$ is $\\rho = 2$.
- The cone $z = \\sqrt{x^2 + y^2}$ is $\\varphi = \\tfrac\\pi4$.
>>> Rewriting the sphere and the cone, step by step
**The sphere.** First, $x^2 + y^2 = r^2 = \\rho^2\\sin^2\\varphi$. Add $z^2 = \\rho^2\\cos^2\\varphi$:
$$x^2 + y^2 + z^2 = \\rho^2\\sin^2\\varphi + \\rho^2\\cos^2\\varphi = \\rho^2(\\sin^2\\varphi + \\cos^2\\varphi) = \\rho^2.$$
So $x^2 + y^2 + z^2 = 4$ is $\\rho^2 = 4$, which is $\\rho = 2$ (since $\\rho \\ge 0$). That matches the meaning: $\\rho$ is the distance to the origin, and the sphere is every point at distance $2$.

**The cone.** $\\sqrt{x^2 + y^2} = r = \\rho\\sin\\varphi$ and $z = \\rho\\cos\\varphi$. So the cone $z = \\sqrt{x^2 + y^2}$ says $\\rho\\cos\\varphi = \\rho\\sin\\varphi$. Away from the origin ($\\rho > 0$), divide by $\\rho$: $\\cos\\varphi = \\sin\\varphi$, so $\\tan\\varphi = 1$, and with $0 \\le \\varphi \\le \\pi$ that's $\\varphi = \\tfrac\\pi4$. In words: every point on this cone is at $45^\\circ$ from the positive $z$-axis.
<<<

**The volume of a small piece is $\\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$.** Change each coordinate by a small amount. The piece is close to a box with three edges:
1. **Changing $\\rho$** moves straight out from the origin: an edge of length $\\Delta\\rho$.
2. **Changing $\\varphi$** moves along a circle of radius $\\rho$ through the poles (a line of longitude): an arc of length $\\rho\\,\\Delta\\varphi$.
3. **Changing $\\theta$** moves around the $z$-axis along a circle of radius $r = \\rho\\sin\\varphi$ (a line of latitude): an arc of length $\\rho\\sin\\varphi\\,\\Delta\\theta$.

The three directions are perpendicular to each other, so the volume is about the product of the edges: $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$.
>>> Each edge of the piece, worked out
**Edge 1.** Keeping $\\varphi$ and $\\theta$ fixed and changing only $\\rho$ slides the point along the ray from the origin. Distance along that ray is $\\rho$ itself, so the edge is $\\Delta\\rho$ long.

**Edge 2.** Keeping $\\rho$ and $\\theta$ fixed and changing $\\varphi$ keeps the point at distance $\\rho$ from the origin, in the vertical half-plane at angle $\\theta$. That's a circle of radius $\\rho$ through the north and south poles. Arc length is radius times angle, so the edge is $\\rho\\,\\Delta\\varphi$.

**Edge 3.** Keeping $\\rho$ and $\\varphi$ fixed keeps both the height $z = \\rho\\cos\\varphi$ and the distance from the $z$-axis $r = \\rho\\sin\\varphi$ fixed. Changing $\\theta$ then moves around a horizontal circle of radius $r = \\rho\\sin\\varphi$. So the edge is $r\\,\\Delta\\theta = \\rho\\sin\\varphi\\,\\Delta\\theta$.

**Multiply.** $\\Delta\\rho \\cdot \\rho\\,\\Delta\\varphi \\cdot \\rho\\sin\\varphi\\,\\Delta\\theta = \\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$.

**Why $\\sin\\varphi$.** Near the poles ($\\varphi$ close to $0$ or $\\pi$), the horizontal circles are tiny, so the pieces are thin there, like the slices of an orange near its ends. $\\sin\\varphi$ is small exactly there.
<<<

**Example: the volume of a ball of radius $a$.** The ball is $0 \\le \\rho \\le a$, $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$, so
$$V = \\int_0^{2\\pi}\\int_0^\\pi\\int_0^a \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = \\frac43\\pi a^3,$$
the formula from geometry.
>>> Each integral of the ball, worked out
**Limits.** A point is in the ball when its distance to the origin is at most $a$: $\\rho \\le a$. Nothing restricts the direction, so $\\varphi$ covers $0$ to $\\pi$ (top to bottom) and $\\theta$ covers $0$ to $2\\pi$ (all the way around).

**Inside, in $\\rho$:** $\\sin\\varphi$ is a constant here, so $\\int_0^a \\rho^2\\sin\\varphi\\, d\\rho = \\sin\\varphi \\cdot \\tfrac{a^3}{3}$.

**Middle, in $\\varphi$:** $\\int_0^\\pi \\sin\\varphi \\cdot \\tfrac{a^3}{3}\\, d\\varphi = \\tfrac{a^3}{3}\\Big[-\\cos\\varphi\\Big]_0^\\pi = \\tfrac{a^3}{3}\\big(-(-1) - (-1)\\big) = \\tfrac{a^3}{3} \\cdot 2$.

**Outside, in $\\theta$:** $\\int_0^{2\\pi} \\tfrac{2a^3}{3}\\, d\\theta = \\tfrac{2a^3}{3} \\cdot 2\\pi = \\tfrac43\\pi a^3$.

**Why $\\varphi$ stops at $\\pi$.** $\\theta$ already goes all the way around. Letting $\\varphi$ go past $\\pi$ would describe each point a second time, from the other side, and count the ball twice.

**A check on $dV$.** Without the $\\sin\\varphi$, the middle integral would be $\\int_0^\\pi d\\varphi = \\pi$ instead of $2$, giving $\\tfrac{2\\pi^2}{3}a^3 \\approx 6.58\\,a^3$ instead of the true $\\tfrac43\\pi a^3 \\approx 4.19\\,a^3$.
<<<
:::

:::example The ice cream cone
Find the volume of the solid inside the sphere $x^2 + y^2 + z^2 = 4$ and above the cone $z = \\sqrt{x^2 + y^2}$.

1. **Limits.** The sphere is $\\rho = 2$, so $0 \\le \\rho \\le 2$. Above the cone means closer to the positive $z$-axis, so $0 \\le \\varphi \\le \\tfrac\\pi4$. All the way around: $0 \\le \\theta \\le 2\\pi$.
>>> Why these limits, from the inequalities
**Inside the sphere** is $x^2 + y^2 + z^2 \\le 4$, which is $\\rho^2 \\le 4$, so $\\rho \\le 2$.

**Above the cone** is $z \\ge \\sqrt{x^2 + y^2}$, which is $\\rho\\cos\\varphi \\ge \\rho\\sin\\varphi$. For $\\rho > 0$, divide by $\\rho$: $\\cos\\varphi \\ge \\sin\\varphi$. On $0 \\le \\varphi \\le \\pi$, that's true exactly when $\\varphi \\le \\tfrac\\pi4$. (Test $\\varphi = 0.3$: $\\cos 0.3 \\approx 0.955 \\ge \\sin 0.3 \\approx 0.296$ ✓. Test $\\varphi = 1$: $\\cos 1 \\approx 0.540 < \\sin 1 \\approx 0.841$, so it's below the cone.) In words: a smaller angle from the positive $z$-axis means closer to straight up, which is above the cone.

**Around:** neither inequality mentions $\\theta$, so $\\theta$ goes from $0$ to $2\\pi$.
<<<
2. **Integrate.**
$$V = \\int_0^{2\\pi}\\int_0^{\\pi/4}\\int_0^2 \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = \\frac{16\\pi}{3}\\left(1 - \\frac{\\sqrt2}{2}\\right) \\approx 4.91.$$
>>> Each integral, worked out
**Inside, in $\\rho$:** $\\int_0^2 \\rho^2\\sin\\varphi\\, d\\rho = \\sin\\varphi \\cdot \\tfrac{8}{3}$.

**Middle, in $\\varphi$:** $\\int_0^{\\pi/4} \\tfrac83 \\sin\\varphi\\, d\\varphi = \\tfrac83\\Big[-\\cos\\varphi\\Big]_0^{\\pi/4} = \\tfrac83\\left(-\\tfrac{\\sqrt2}{2} + 1\\right)$, using $\\cos\\tfrac\\pi4 = \\tfrac{\\sqrt2}{2}$ and $\\cos 0 = 1$.

**Outside, in $\\theta$:** the middle result doesn't depend on $\\theta$, so multiply by $2\\pi$: $\\tfrac{16\\pi}{3}\\left(1 - \\tfrac{\\sqrt2}{2}\\right)$.

**Is $4.91$ reasonable?** The whole ball of radius $2$ has volume $\\tfrac{32\\pi}{3} \\approx 33.5$. The only difference from the ball's integral is the $\\varphi$-integral: $1 - \\tfrac{\\sqrt2}{2} \\approx 0.293$ instead of $2$, so the cone is about $\\tfrac{0.293}{2} \\approx 14.6\\%$ of the ball. And $0.146 \\times 33.5 \\approx 4.91$. ✓
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
Here are the same steps as the spherical example, done in cylindrical coordinates instead, to show where the extra work comes from.

**Limits.** In cylindrical coordinates the cone is $z = r$ and the sphere is $r^2 + z^2 = 4$, so its top half is $z = \\sqrt{4 - r^2}$. A column at distance $r$ runs from the cone up to the sphere: $r \\le z \\le \\sqrt{4 - r^2}$. Already one limit has a square root.

**The shadow needs an extra step.** The columns stop where the cone meets the sphere: $r = \\sqrt{4 - r^2}$, so $r^2 = 4 - r^2$, $r^2 = 2$, and $r = \\sqrt2$. In spherical coordinates this step wasn't needed: the cone was just $\\varphi \\le \\tfrac\\pi4$.

**The integral.**
$$V = \\int_0^{2\\pi}\\int_0^{\\sqrt2}\\int_r^{\\sqrt{4 - r^2}} r\\, dz\\, dr\\, d\\theta = 2\\pi\\int_0^{\\sqrt2}\\left(r\\sqrt{4 - r^2} - r^2\\right) dr.$$
For the first part, let $u = 4 - r^2$, so $du = -2r\\, dr$; $r = 0$ gives $u = 4$ and $r = \\sqrt2$ gives $u = 2$:
$$\\int_0^{\\sqrt2} r\\sqrt{4 - r^2}\\, dr = \\int_4^2 \\sqrt u \\left(-\\tfrac12\\, du\\right) = \\tfrac12\\int_2^4 \\sqrt u\\, du = \\tfrac13\\big(8 - 2\\sqrt2\\big).$$
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