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

**First, what the two orders mean.** A double integral adds up a function over a region, one thin strip at a time, and the order of $dx$ and $dy$ says which way the strips run.
- **$dy$ inside** (the given order, $\\int_0^1\\int_{\\sqrt x}^1 \\cdots\\, dy\\, dx$): pick one $x$, say $x = 0.25$. The points with $x = 0.25$, like $(0.25, 0.5)$, $(0.25, 0.7)$, and $(0.25, 1)$, form a vertical line: on it, $x$ is the same at every point and only $y$ is different. The inside limits say that line runs from $y = \\sqrt{0.25} = 0.5$ up to $y = 1$.
- **$dx$ inside** (the switched order): pick one $y$ instead. The points with that $y$ form a horizontal line, where only $x$ is different, and the inside limits must say where that line starts and stops.

**The goal.** The given order is stuck: its inside integral is $\\int e^{y^3}\\, dy$, and no formula from the usual functions has derivative $e^{y^3}$. In the switched order, the inside integral is in $x$, and $e^{y^3}$ doesn't change along a horizontal line (every point on it has the same $y$), so it acts like a plain number. That makes the inside integral easy.

**Step 1: write down the rules a point must follow.** $\\int_0^1$ on the outside says $0 \\le x \\le 1$. $\\int_{\\sqrt x}^1$ on the inside says $\\sqrt x \\le y \\le 1$. A point is in the region exactly when it follows all of these. For example, $(0.25, 0.7)$ is in it ($\\sqrt{0.25} = 0.5 \\le 0.7 \\le 1$), but $(0.81, 0.7)$ is not ($\\sqrt{0.81} = 0.9$, which is bigger than $0.7$).

**Step 2: find every possible $y$ (the new outside limits).** The outside integral has to cover every $y$ that any point of the region has.
- *Smallest:* $y \\ge \\sqrt x$, and a square root is never negative, so $y \\ge 0$. $y = 0$ happens at $(0, 0)$.
- *Largest:* the rules say $y \\le 1$, and $y = 1$ happens (for example at $(0, 1)$).

So the new outside limits are $0 \\le y \\le 1$.

**Step 3: pick one $y$ and rewrite every rule as a rule about $x$.** On a horizontal line, $y$ is one number and only $x$ changes, so each rule must say "$x$ must be at least ___" or "$x$ must be at most ___".
- $0 \\le x$ and $x \\le 1$ already do.
- $\\sqrt x \\le y$ doesn't yet. Square both sides: $x \\le y^2$. Squaring is safe here because both sides are $0$ or more, and for numbers $0$ or more, the bigger one stays bigger when you square (for example $0.5 \\le 0.7$ and $0.25 \\le 0.49$).

**Step 4: only the smallest upper limit matters.** $x$ has to be at most $1$ and at most $y^2$. On the line $y = 0.7$, that's $x \\le 1$ and $x \\le 0.49$. Any $x$ that's at most $0.49$ is automatically at most $1$, so the rule that actually stops $x$ is $x \\le y^2$. Since $y \\le 1$ means $y^2 \\le 1$, this is true for every line, so no splitting is needed: $0 \\le x \\le y^2$.

**Step 5 (b): integrate.**
- *Inside, along the horizontal line at height $y$:* $e^{y^3}$ is the same at every point of the line, so adding it up along the line just multiplies it by the line's length, $y^2$: $\\int_0^{y^2} e^{y^3}\\, dx = y^2 e^{y^3}$.
- *Outside:* $\\int_0^1 y^2 e^{y^3}\\, dy$. Let $w = y^3$. Then $\\tfrac{dw}{dy} = 3y^2$, so $y^2\\, dy = \\tfrac13\\, dw$, and $y$ from $0$ to $1$ means $w$ from $0$ to $1$: $\\tfrac13\\int_0^1 e^w\\, dw = \\tfrac{e - 1}{3}$. The $y^2$ that appeared in the inside integral is exactly what made this substitution work.

**Check.** Adding up the original integral numerically gives about $0.5728$, and $\\tfrac{e - 1}{3} \\approx 0.5728$ ✓.

**Why not the other choices in (a).**
- **$\\int_0^1\\int_{y^2}^1$:** that's $x$ from $y^2$ to $1$, to the right of $x = y^2$. But the rule $\\sqrt x \\le y$ means $x \\le y^2$, to the left. Test: $(0.81, 0.7)$ would be included, and it isn't in the region.
- **$\\int_{\\sqrt x}^1\\int_0^1$:** just swapping the integral signs leaves $x$ in the outside limits, so the answer would still depend on $x$.
- **$\\int_0^1\\int_0^{\\sqrt y}$:** $\\sqrt x \\le y$ squares to $x \\le y^2$, not $x \\le \\sqrt y$. Test: on the line $y = 0.25$, it would allow $x = 0.5$, but $\\sqrt{0.5} \\approx 0.71$ is bigger than $0.25$.
:::

:::problem 2
Let $D$ be the part of the ring $1 \\le x^2 + y^2 \\le 4$ in the first quadrant. Compute $\\displaystyle\\iint_D \\sqrt{x^2 + y^2}\\; dA$.

Answer: {{expr 4: 7pi/6}}
+++
review: 2026-10-19 Disks: switching to polar coordinates; 2026-10-23 Switching an x, y integral to polar

**First, what polar coordinates are.** Instead of naming a point by $x$ and $y$, name it by
- $r$, its distance from the origin, and
- $\\theta$, its angle, measured counterclockwise from the positive $x$-axis.

For example, $(1, 1)$ has $r = \\sqrt{1^2 + 1^2} = \\sqrt2$ and $\\theta = \\tfrac\\pi4$ ($45^\\circ$). To go back, $x = r\\cos\\theta$ and $y = r\\sin\\theta$, and $x^2 + y^2 = r^2$ because $x^2 + y^2$ is the squared distance from the origin.

**The goal.** This region and integrand are both about distance from the origin: the ring is "distance between $1$ and $2$", and $\\sqrt{x^2 + y^2}$ is the distance itself. In polar coordinates, distance is just $r$, so both become simple.

**Step 1: the region in $r$ and $\\theta$.**
- $1 \\le x^2 + y^2 \\le 4$ says the squared distance is between $1$ and $4$, so the distance $r$ is between $1$ and $2$.
- "First quadrant" means $x \\ge 0$ and $y \\ge 0$: the points to the right of the $y$-axis and above the $x$-axis. Their angles run from $0$ (the positive $x$-axis) to $\\tfrac\\pi2$ (the positive $y$-axis).

**Step 2: the size of a small piece.** A double integral adds up (value) $\\times$ (area of a small piece). In polar, a small piece runs from distance $r$ to $r + \\Delta r$ and from angle $\\theta$ to $\\theta + \\Delta\\theta$. One side has length $\\Delta r$. The other is part of a circle of radius $r$, and a piece of a circle has length radius $\\times$ angle (in radians): $r\\,\\Delta\\theta$. For example, at $r = 2$ an angle of $0.1$ gives a curved side of length $0.2$, but at $r = 1$ only $0.1$. So the piece's area is about $r\\,\\Delta r\\,\\Delta\\theta$: pieces farther out are bigger, and that's why every polar integral gets an extra factor $r$.

**Step 3: the integrand.** $\\sqrt{x^2 + y^2} = r$. Times the $r$ from the piece's area: $r \\cdot r = r^2$.

**Step 4: integrate.**
- *Inside, in $r$:* $\\int_1^2 r^2\\, dr = \\Big[\\tfrac{r^3}{3}\\Big]_1^2 = \\tfrac83 - \\tfrac13 = \\tfrac73$.
- *Outside, in $\\theta$:* the inside answer $\\tfrac73$ is the same for every angle, so adding it over angles from $0$ to $\\tfrac\\pi2$ multiplies it by $\\tfrac\\pi2$: $\\tfrac{7\\pi}{6}$.

**Common mistake.** Forgetting the $r$ in the piece's area, which gives $\\tfrac\\pi2 \\cdot \\tfrac32 = \\tfrac{3\\pi}{4}$.
:::

:::problem 3
A thin plate fills the quarter disk $x^2 + y^2 \\le 9$, $x \\ge 0$, $y \\ge 0$, with density $\\rho = 1$.

**(a)** Its mass is {{expr 1: 9pi/4}}

**(b)** The $y$-coordinate of its center of mass is $\\bar y =$ {{expr 2: 4/pi}}
+++
review: 2026-10-23 Mass and center of mass

**First, what these words mean.** The plate is a thin flat sheet in the shape of the quarter disk. Its **density** $\\rho$ is its mass per unit of area; $\\rho = 1$ means every square unit of plate has mass $1$. Its **center of mass** $(\\bar x, \\bar y)$ is the point where it would balance on the tip of a pencil.

**Why $\\bar y$ is an average.** With the same density everywhere, the balance point's height $\\bar y$ is the average of $y$ over the plate: the height at which there's as much "pull" from the plate above as below. An average over a region is (total of $y$ over the region) $\\div$ (area), so
$$\\bar y = \\frac{\\iint_D y\\, dA}{\\text{area}}.$$
With $\\rho = 1$, mass and area are the same number, so this matches the formula $\\bar y = \\tfrac{1}{m}\\iint_D y\\rho\\, dA$.

**Step 1 (a): the mass.** With $\\rho = 1$, each small piece's mass equals its area, so the mass is the area of the quarter disk: a quarter of $\\pi \\cdot 3^2$, which is $\\tfrac{9\\pi}{4}$.

**Step 2: the total of $y$, in polar.** The region is part of a disk centered at the origin, so polar coordinates give number limits ($r$ is the distance from the origin, $\\theta$ the angle from the positive $x$-axis).
- *Region:* $x^2 + y^2 \\le 9$ means distance at most $3$: $0 \\le r \\le 3$. $x \\ge 0$ and $y \\ge 0$ means angles from $0$ to $\\tfrac\\pi2$.
- *Integrand:* $y = r\\sin\\theta$, times the factor $r$ for the size of a polar piece: $r^2\\sin\\theta$.
- *Integrate:* every limit is a number and the integrand is (a part with only $\\theta$) $\\times$ (a part with only $r$), so the double integral is the product of two single integrals: $\\int_0^{\\pi/2}\\sin\\theta\\, d\\theta = \\Big[-\\cos\\theta\\Big]_0^{\\pi/2} = 0 - (-1) = 1$, and $\\int_0^3 r^2\\, dr = 9$. Total: $9$.

**Step 3 (b): divide.** $\\bar y = \\dfrac{9}{9\\pi/4} = 9 \\cdot \\dfrac{4}{9\\pi} = \\dfrac4\\pi \\approx 1.27$.

**Is it reasonable?** The plate runs from $y = 0$ to $y = 3$, but it's wide at the bottom (along the $x$-axis it's $3$ wide) and narrow at the top (near $(0, 3)$ it's almost $0$ wide). More of the plate is low, so the balance height should be below the halfway mark $1.5$. $1.27$ is ✓. By the same reasoning with $x$ and $y$ swapped, $\\bar x = \\tfrac4\\pi$ too.
:::

:::scratch
:::

:::problem 4
$E$ is the solid in the first octant under the plane $2x + y + z = 4$.

**(a)** Which integral gives the volume of $E$? {{circle 2: *$\\displaystyle\\int_0^2\\int_0^{4 - 2x}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{4}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^4\\int_0^{4 - 2x}\\int_0^{4 - 2x - y} dz\\, dy\\, dx$ | $\\displaystyle\\int_0^2\\int_0^{4 - 2x}\\int_0^{4} dz\\, dy\\, dx$}}

**(b)** The volume is {{expr 2: 16/3}}
+++
review: 2026-10-26 Solids between two surfaces

**First, how a triple integral finds a volume.** Picture the solid standing on the floor (the $xy$-plane). Above each point $(x, y)$ of the floor there's a vertical column of the solid, from its bottom up to its top. The innermost integral, in $z$, finds each column's height. The other two integrals add up all the columns over the solid's **shadow**, the part of the floor directly under it.

**The goal.** Find (1) where each column starts and stops, and (2) the shadow, then integrate.

**Step 1: the rules a point must follow.** "First octant" means $x \\ge 0$, $y \\ge 0$, $z \\ge 0$ (all three coordinates zero or more). "Under the plane $2x + y + z = 4$" means $2x + y + z \\le 4$.

**Step 2: where each column starts and stops.** On a column, $x$ and $y$ are the same at every point and only $z$ changes, so rewrite each rule about $z$ as "$z$ is at least ___" or "at most ___".
- $z \\ge 0$: the column starts on the floor.
- $2x + y + z \\le 4$: subtract $2x + y$ from both sides, $z \\le 4 - 2x - y$. The column stops at the plane.

For example, above $(0.5, 1)$ the column runs from $z = 0$ up to $z = 4 - 1 - 1 = 2$.

**Step 3: the shadow.** A column only exists where its top is at or above its bottom: $0 \\le 4 - 2x - y$, which is $2x + y \\le 4$. Above $(2, 1)$, for example, the top would be $4 - 4 - 1 = -1$, below the floor, so there's no column there. Together with $x \\ge 0$ and $y \\ge 0$, the shadow is the triangle $2x + y \\le 4$ in the first quadrant.

**Step 4: describe the shadow.** Do it as on Oct 19: on the vertical line at one $x$, only $y$ changes. $2x + y \\le 4$ gives $y \\le 4 - 2x$, and $y \\ge 0$, so $0 \\le y \\le 4 - 2x$. For that to allow any $y$ at all, $4 - 2x \\ge 0$, so $x \\le 2$. With $x \\ge 0$: $0 \\le x \\le 2$.

**Step 5 (b): integrate, inside out.**
- *Inside:* $\\int_0^{4 - 2x - y} 1\\, dz = 4 - 2x - y$, the column's height.
- *Middle (adding the columns along one vertical line of the shadow):* $\\int_0^{4 - 2x}(4 - 2x - y)\\, dy$. Here $4 - 2x$ is one number on that line; call it $c$. Then $\\int_0^c (c - y)\\, dy = c^2 - \\tfrac{c^2}{2} = \\tfrac{c^2}{2} = \\tfrac{(4 - 2x)^2}{2}$.
- *Outside:* $\\int_0^2 \\tfrac{(4 - 2x)^2}{2}\\, dx$. Let $w = 4 - 2x$, so $dw = -2\\, dx$; $x = 0$ gives $w = 4$ and $x = 2$ gives $w = 0$: $\\int_4^0 \\tfrac{w^2}{2}\\cdot\\left(-\\tfrac12\\right) dw = \\tfrac14\\int_0^4 w^2\\, dw = \\tfrac14 \\cdot \\tfrac{64}{3} = \\tfrac{16}{3}$.

**Check.** The solid is a pyramid with a triangular base (corners $(0, 0)$, $(2, 0)$, $(0, 4)$, area $4$) and height $4$. A pyramid's volume is $\\tfrac13 \\times \\text{base} \\times \\text{height} = \\tfrac13 \\cdot 4 \\cdot 4 = \\tfrac{16}{3}$ ✓.

**Why not the other choices in (a).**
- **$y$ from $0$ to $4$:** on the line $x = 1$, that would include $(1, 3)$, but there $4 - 2 - 3 = -1$: no column. The edge is $y = 4 - 2x$, which depends on $x$.
- **$x$ from $0$ to $4$:** at $x = 3$, $4 - 2x = -2$, so no $y$ fits; the shadow stops at $x = 2$.
- **$z$ from $0$ to $4$:** that's a box-shaped top at height $4$, but the real top is the slanted plane $z = 4 - 2x - y$.
:::

:::problem 5
$E$ is the solid between the paraboloid $z = x^2 + y^2$ and the plane $z = 4$. Compute $\\displaystyle\\iiint_E z\\, dV$.

Answer: {{expr 4: 64pi/3}}
+++
review: 2026-10-28 Cylindrical coordinates

**First, what cylindrical coordinates are.** Keep $z$ as it is, and name the position over the floor by polar coordinates: $r$ is the distance from the $z$-axis and $\\theta$ is the angle around it. For example, $(1, 1, 3)$ has $r = \\sqrt2$, $\\theta = \\tfrac\\pi4$, $z = 3$. Since $x^2 + y^2 = r^2$, any formula with $x^2 + y^2$ becomes simpler.

**The goal.** The paraboloid $z = x^2 + y^2$ is $z = r^2$ in these coordinates: its height depends only on the distance from the $z$-axis. So the limits will be simple.

**Step 1: where each column starts and stops.** A column is the set of points above one spot of the floor, where only $z$ changes. The solid is above the paraboloid and below the plane, so a column at distance $r$ runs from $z = r^2$ up to $z = 4$. For example, at $r = 1$ it runs from $z = 1$ to $z = 4$.

**Step 2: the shadow.** A column exists only where its bottom is at or below its top: $r^2 \\le 4$, so $r \\le 2$. At $r = 3$, the bottom would be at $9$, above the top at $4$: no column. The shadow is the disk $0 \\le r \\le 2$, all the way around ($0 \\le \\theta \\le 2\\pi$).

**Step 3: the size of a small piece.** A small piece is a polar piece of the floor (area about $r\\,\\Delta r\\,\\Delta\\theta$, as in polar coordinates) times a small height $\\Delta z$. So each piece contributes $z \\times r\\,\\Delta z\\,\\Delta r\\,\\Delta\\theta$, and the integrand is $z \\cdot r$.

**Step 4: integrate, inside out.**
- *Inside, up one column:* $\\int_{r^2}^4 z\\, dz = \\Big[\\tfrac{z^2}{2}\\Big]_{r^2}^4 = \\tfrac{16 - r^4}{2}$. Times $r$: $\\tfrac{16r - r^5}{2}$.
- *Middle, outward from $r = 0$ to $2$:* $\\tfrac12\\Big[8r^2 - \\tfrac{r^6}{6}\\Big]_0^2 = \\tfrac12\\left(32 - \\tfrac{64}{6}\\right) = \\tfrac{32}{3}$.
- *Outside, around:* nothing depends on $\\theta$, so multiply by $2\\pi$: $\\tfrac{64\\pi}{3}$.

**Common mistake.** Starting each column at $z = 0$. The solid starts at the paraboloid; below it is empty.
:::

:::problem 6
$E$ is the solid inside the sphere $x^2 + y^2 + z^2 = 9$ and above the cone $z = \\sqrt{\\tfrac{x^2 + y^2}{3}}$, which is $\\varphi = \\tfrac\\pi3$.

**(a)** The easiest coordinates for $E$ are: {{circle 1: $x, y, z$ | cylindrical | *spherical}}

**(b)** The volume of $E$ is {{expr 3: 9pi}}
+++
review: 2026-10-28 Spherical coordinates; 2026-10-28 Which coordinates to use

**First, what spherical coordinates are.** Name a point by
- $\\rho$, its distance from the origin,
- $\\varphi$, the angle between the positive $z$-axis and the line from the origin to the point ($\\varphi = 0$ is straight up, $\\varphi = \\tfrac\\pi2$ is level with the floor, $\\varphi = \\pi$ is straight down), and
- $\\theta$, the same angle around the $z$-axis as in polar coordinates.

For example, $(0, 0, 3)$ has $\\rho = 3$ and $\\varphi = 0$, and $(3, 0, 0)$ has $\\rho = 3$ and $\\varphi = \\tfrac\\pi2$.

**The goal.** The solid is bounded by a sphere ("distance $= 3$", so $\\rho = 3$) and a cone (which, as below, is "angle from straight up $= \\tfrac\\pi3$"). In spherical coordinates both are "one coordinate $=$ a number", so every limit is a number.

**Step 1: the limits.**
- *Inside the sphere:* $x^2 + y^2 + z^2 \\le 9$ says the distance from the origin is at most $3$: $0 \\le \\rho \\le 3$.
- *The cone:* on it, $z = \\sqrt{\\tfrac{x^2 + y^2}{3}}$, which says height $= \\tfrac{\\text{distance from the } z\\text{-axis}}{\\sqrt3}$. For example, the point $(\\sqrt3, 0, 1)$ is on it. The line from the origin to that point goes $\\sqrt3$ sideways and $1$ up, so its angle from straight up has $\\tan\\varphi = \\tfrac{\\sqrt3}{1}$, which is $\\varphi = \\tfrac\\pi3$ ($60^\\circ$). Every point on the cone has this same angle.
- *Above the cone:* closer to straight up than the cone, so a smaller angle: $0 \\le \\varphi \\le \\tfrac\\pi3$.
- *Around:* nothing limits $\\theta$: $0 \\le \\theta \\le 2\\pi$.

**Step 2: the size of a small piece.** A small spherical piece has three edges: $\\Delta\\rho$ (straight out), $\\rho\\,\\Delta\\varphi$ (along a circle of radius $\\rho$ through the poles), and $\\rho\\sin\\varphi\\,\\Delta\\theta$ (along a horizontal circle, whose radius is the distance from the $z$-axis, $\\rho\\sin\\varphi$). Their product is $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$.

**Step 3 (b): integrate.** Every limit is a number and $\\rho^2\\sin\\varphi$ is (a part with only $\\rho$) $\\times$ (a part with only $\\varphi$), so it's a product of three single integrals: $\\int_0^3 \\rho^2\\, d\\rho = 9$, $\\int_0^{\\pi/3}\\sin\\varphi\\, d\\varphi = \\Big[-\\cos\\varphi\\Big]_0^{\\pi/3} = -\\tfrac12 + 1 = \\tfrac12$, and $\\int_0^{2\\pi} d\\theta = 2\\pi$. Volume: $9 \\cdot \\tfrac12 \\cdot 2\\pi = 9\\pi$.

**Why not the other choices in (a).**
- **$x, y, z$:** the sphere's top would be $z = \\sqrt{9 - x^2 - y^2}$, and the cone gives another square root: hard limits.
- **cylindrical:** the sphere's top would be $z = \\sqrt{9 - r^2}$, and you'd first have to find where the cone meets the sphere. In spherical coordinates neither step is needed.
:::

:::scratch
:::

:::problem 7
Let $D$ be the region $0 \\le x - y \\le 2$, $1 \\le x + y \\le 3$. Use $u = x + y$, $v = x - y$.

**(a)** $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| =$ {{expr 1: 1/2}}

**(b)** $\\displaystyle\\iint_D (x + y)\\, dA =$ {{expr 3: 4}}
+++
review: 2026-10-30 The Jacobian: how much areas stretch; 2026-10-30 Using it: the tilted square

**First, what new coordinates do.** Give every point two new labels, $u = x + y$ and $v = x - y$. For example, $(2, 0)$ gets $u = 2$, $v = 2$, and $(1, 1)$ gets $u = 2$, $v = 0$. The region's edges are lines where $x + y$ or $x - y$ is a fixed number, so in the new labels each edge is "$u = $ number" or "$v = $ number", and the region becomes a rectangle.

**The goal.** Rewrite the integral in $u$ and $v$. The catch: a small square in the $u, v$ labels doesn't have the same area as the piece of the $xy$-plane it stands for, so each piece has to be multiplied by a correction factor (the Jacobian).

**Step 1: the new region.** Substitute the labels into the rules: $1 \\le x + y \\le 3$ becomes $1 \\le u \\le 3$, and $0 \\le x - y \\le 2$ becomes $0 \\le v \\le 2$.

**Step 2 (a): the correction factor, by checking one square.** Take the square $0 \\le u \\le 1$, $0 \\le v \\le 1$ (area $1$ in the new labels). Solving $u = x + y$, $v = x - y$ for $x$ and $y$ gives $x = \\tfrac{u + v}{2}$ and $y = \\tfrac{u - v}{2}$, so its corners are at
- $(u, v) = (0, 0)$: $(x, y) = (0, 0)$,
- $(1, 0)$: $(0.5, 0.5)$,
- $(1, 1)$: $(1, 0)$,
- $(0, 1)$: $(0.5, -0.5)$.

That's a tilted square with side $\\sqrt{0.5^2 + 0.5^2} = \\sqrt{0.5}$, so its area is $0.5$. Every square of the new labels stands for a piece of the plane half its size, so the factor is $\\tfrac12$.

**The general way, with the shortcut.** $\\left|\\tfrac{\\partial(u, v)}{\\partial(x, y)}\\right| = |u_x v_y - u_y v_x| = |1 \\cdot (-1) - 1 \\cdot 1| = 2$ measures the opposite direction (going from $x, y$ to $u, v$ doubles areas), so the factor we need is its flip, $\\tfrac12$.

**Step 3: the integrand.** $x + y$ is exactly $u$.

**Step 4 (b): integrate.** $\\int_0^2\\int_1^3 u \\cdot \\tfrac12\\, du\\, dv$. Inside: $\\tfrac12\\Big[\\tfrac{u^2}{2}\\Big]_1^3 = \\tfrac12 \\cdot 4 = 2$. Outside: $2$ for each $v$ from $0$ to $2$, so $2 \\cdot 2 = 4$.

**Common mistake.** Using $2$ instead of $\\tfrac12$. The shortcut's number tells how $u, v$ areas compare to $x, y$ areas the other way around, so it has to be flipped.
:::

:::problem 8
**(a)** Which parametrizes the cone $z = \\sqrt{x^2 + y^2}$, $0 \\le z \\le 2$? {{circle 1: *$\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$, $0 \\le r \\le 2$ | $\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r^2 \\rangle$, $0 \\le r \\le 2$ | $\\langle 2\\cos\\theta,\\ 2\\sin\\theta,\\ z \\rangle$, $0 \\le z \\le 2$ | $\\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$, $0 \\le r \\le 4$}}

**(b)** Find the tangent plane to $\\mathbf r(u, v) = \\langle u^2,\\ v^2,\\ u + 2v \\rangle$ at the point $(1, 1, 3)$.

{{plane 3: 1, 2, -2, -3}}
+++
review: 2026-11-04 Parametric surfaces; 2026-11-04 Tangent vectors and the normal vector

**First, what $\\mathbf r(u, v)$ means.** It's a rule that turns each pair of numbers $(u, v)$ into a point in space. For example, $\\mathbf r(1, 1) = \\langle 1^2, 1^2, 1 + 2 \\rangle = (1, 1, 3)$ and $\\mathbf r(1.1, 1) = (1.21, 1, 3.1)$. All the points together make a surface.

**(b) The goal.** A plane is set by one point on it and one direction that sticks straight out of it (a **normal** vector). The point is $(1, 1, 3)$; the work is finding the normal.

**Step 1: which $(u, v)$ gives the point?** Match each coordinate: $u^2 = 1$, $v^2 = 1$, and $u + 2v = 3$. Trying the options, only $u = 1$, $v = 1$ works (for example, $u = -1$ would need $v = 2$, but then $v^2 = 4$, not $1$).

**Step 2: two directions along the surface.** Keep $v = 1$ and change only $u$: the points $\\mathbf r(u, 1) = (u^2, 1, u + 2)$ trace a curve on the surface. Its direction of travel is the derivative in $u$: $\\mathbf r_u = \\langle 2u, 0, 1 \\rangle = \\langle 2, 0, 1 \\rangle$ at $u = 1$. You can see it in the numbers: going from $\\mathbf r(1, 1) = (1, 1, 3)$ to $\\mathbf r(1.1, 1) = (1.21, 1, 3.1)$ moves by about $\\langle 0.21, 0, 0.1 \\rangle$, roughly $0.1 \\times \\langle 2, 0, 1 \\rangle$. Keeping $u = 1$ and changing $v$ gives the other direction: $\\mathbf r_v = \\langle 0, 2v, 2 \\rangle = \\langle 0, 2, 2 \\rangle$.

**Step 3: a direction perpendicular to both.** The cross product of two vectors is perpendicular to both of them. Since $\\mathbf r_u$ and $\\mathbf r_v$ both lie along the surface, their cross product sticks straight out of it:
$$\\mathbf r_u \\times \\mathbf r_v = \\langle 0 \\cdot 2 - 1 \\cdot 2,\\ 1 \\cdot 0 - 2 \\cdot 2,\\ 2 \\cdot 2 - 0 \\cdot 0 \\rangle = \\langle -2, -4, 4 \\rangle.$$
Check: $\\langle -2, -4, 4 \\rangle \\cdot \\langle 2, 0, 1 \\rangle = -4 + 0 + 4 = 0$ ✓ and $\\cdot\\, \\langle 0, 2, 2 \\rangle = 0 - 8 + 8 = 0$ ✓.

**Step 4: the plane.** A point $(x, y, z)$ is on the plane when the arrow from $(1, 1, 3)$ to it is perpendicular to the normal, which means their dot product is $0$:
$$-2(x - 1) - 4(y - 1) + 4(z - 3) = 0.$$
Multiplying out: $-2x - 4y + 4z = 6$. Dividing by $-2$: $x + 2y - 2z = -3$.

**Check.** $(1, 1, 3)$: $1 + 2 - 6 = -3$ ✓. Any nonzero multiple of the equation is also correct.

**Why not the other choices in (a).**
- **$\\langle r\\cos\\theta, r\\sin\\theta, r^2 \\rangle$:** its height is $r^2$, the paraboloid $z = x^2 + y^2$, not the cone (whose height equals the distance from the axis, $z = r$).
- **$\\langle 2\\cos\\theta, 2\\sin\\theta, z \\rangle$:** every point is at distance $2$ from the $z$-axis, which is a cylinder.
- **$0 \\le r \\le 4$:** on the cone the height equals $r$, so stopping at height $2$ means stopping at $r = 2$.
:::

:::problem 9
Find the area of the part of the cone $z = \\sqrt{x^2 + y^2}$ with $z \\le 2$.

Answer: {{expr 4: 4 sqrt(2) pi}}
+++
review: 2026-11-06 Surface area

**First, how the area of a tilted surface relates to its shadow.** A flat piece that's tilted has more area than its shadow on the floor. For example, a piece of the plane $z = x$ (rising $1$ for every $1$ across) whose shadow is a $1 \\times 1$ square is a $1 \\times \\sqrt2$ rectangle: one side is still $1$, but the other goes $1$ across and $1$ up, so it's $\\sqrt{1 + 1} = \\sqrt2$ long. Its area is $\\sqrt2$ times its shadow's. In general, for a graph $z = f(x, y)$, a small piece has area $\\sqrt{1 + f_x^2 + f_y^2}$ times its shadow's, where $f_x$ and $f_y$ are the slopes in the $x$ and $y$ directions.

**The goal.** Find that stretch factor for the cone, then add it up over the shadow.

**Step 1: the slopes.** $f = \\sqrt{x^2 + y^2}$, the distance from the $z$-axis. By the chain rule, $f_x = \\tfrac{x}{\\sqrt{x^2 + y^2}}$ and $f_y = \\tfrac{y}{\\sqrt{x^2 + y^2}}$. For example, at $(3, 4)$: $f_x = \\tfrac35$ and $f_y = \\tfrac45$.

**Step 2: the stretch factor.** $f_x^2 + f_y^2 = \\tfrac{x^2 + y^2}{x^2 + y^2} = 1$ everywhere (at $(3, 4)$: $\\tfrac{9}{25} + \\tfrac{16}{25} = 1$). So the factor is $\\sqrt{1 + 1} = \\sqrt2$ at every point. That matches the cone's shape: going straight out from the axis, its height goes up by $1$ for every $1$ out, just like the plane $z = x$ above.

**Step 3: the shadow.** $z \\le 2$ means the distance from the axis is at most $2$: the disk of radius $2$, with area $\\pi \\cdot 2^2 = 4\\pi$.

**Step 4: the area.** Every piece is $\\sqrt2$ times its shadow, so the total is $\\sqrt2 \\cdot 4\\pi = 4\\sqrt2\\,\\pi \\approx 17.8$.
:::

:::scratch
:::

:::problem 10
$C$ is the boundary of the triangle with corners $(0, 0)$, $(2, 0)$, $(0, 2)$, counterclockwise. Compute $\\displaystyle\\oint_C (y^2 - x)\\, dx + (3xy + e^y)\\, dy$.

Answer: {{expr 4: 4/3}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-09 Using it: hard line integral, easy double integral

**First, what the integral means.** $\\oint_C P\\, dx + Q\\, dy$ adds up how much the field $\\langle P, Q \\rangle$ pushes you along the path as you walk once around the triangle. Done directly, that's three separate integrals, one per side.

**What Green's Theorem says.** For a closed path walked counterclockwise, that total push equals the total of $Q_x - P_y$ over the inside. $Q_x - P_y$ measures how much the field swirls around each point: around a tiny square of side $h$, the push adds up to about $(Q_x - P_y) \\times h^2$. Adding the tiny squares that fill the triangle, the push along every inside edge cancels (each inside edge is walked once each way), and what's left is the push along the outer boundary.

**The goal.** Replace three line integrals with one double integral over the triangle.

**Step 1: check that it applies.** The path is closed (it ends where it starts), it goes counterclockwise (the triangle is on your left as you walk from $(0, 0)$ to $(2, 0)$ to $(0, 2)$), and $P = y^2 - x$ and $Q = 3xy + e^y$ are defined everywhere, with no division by zero.

**Step 2: the swirl.** $Q_x$ is how fast $Q$ changes as only $x$ changes: $3y$ ($e^y$ doesn't change with $x$). $P_y$ is how fast $P$ changes as only $y$ changes: $2y$ ($-x$ doesn't change with $y$). So $Q_x - P_y = 3y - 2y = y$.

**Step 3: the triangle as rules.** Its sides are the $x$-axis ($y = 0$), the $y$-axis ($x = 0$), and the line through $(2, 0)$ and $(0, 2)$, which is $x + y = 2$. Inside means $x \\ge 0$, $y \\ge 0$, and $y \\le 2 - x$. On the vertical line at one $x$, $y$ runs from $0$ to $2 - x$, and $x$ runs from $0$ to $2$.

**Step 4: integrate.** Inside: $\\int_0^{2 - x} y\\, dy = \\tfrac{(2 - x)^2}{2}$. Outside: $\\int_0^2 \\tfrac{(2 - x)^2}{2}\\, dx = \\tfrac12 \\cdot \\tfrac83 = \\tfrac43$.

**Check.** Doing the three sides directly also gives $\\tfrac43$. The terms $-x\\, dx$ and $e^y\\, dy$ add up to $0$ around any closed path (each is the change in one function, $-\\tfrac{x^2}{2}$ and $e^y$, and a closed path ends where it started). That's why they dropped out of $Q_x - P_y$.
:::

:::problem 11
Let $\\mathbf F = \\langle 2xy + z,\\ x^2,\\ x \\rangle$.

**(a)** $\\mathbf F$ is: {{circle 1: *conservative | not conservative}}

**(b)** A potential function is $f =$ {{expr-c 2: x^2 y + x z}}
+++
review: 2026-11-13 Curl; 2026-11-13 Two identities, and what they say about conservative fields

**First, what "conservative" means.** A field $\\mathbf F$ is conservative if it's the gradient of some function $f$ (called a potential): $\\mathbf F = \\langle f_x, f_y, f_z \\rangle$. Then the work along any path is just $f(\\text{end}) - f(\\text{start})$, whatever route you take.

**How to test it.** If $\\mathbf F = \\langle f_x, f_y, f_z \\rangle$, its components have to fit together: for example, $\\tfrac{\\partial}{\\partial y}(f_x)$ and $\\tfrac{\\partial}{\\partial x}(f_y)$ are both $f_{xy}$, so they must be equal. There are three such pairs, and the curl lists their differences:
$$\\operatorname{curl}\\mathbf F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle.$$
If all three are $0$ and $\\mathbf F$ is defined everywhere (no holes in the region), $\\mathbf F$ is conservative.

**(a) Step 1: the three pairs.** $P = 2xy + z$, $Q = x^2$, $R = x$.
- $R_y = 0$ ($x$ doesn't change with $y$) and $Q_z = 0$: difference $0$.
- $P_z = 1$ (only the $z$ term changes with $z$) and $R_x = 1$: difference $0$.
- $Q_x = 2x$ and $P_y = 2x$: difference $0$.

**Step 2:** $\\mathbf F$ is defined everywhere, so it's **conservative**.

**(b) The goal.** Find $f$ whose three partial derivatives are $P$, $Q$, $R$. Undo one at a time.
1. *Undo $f_x = 2xy + z$:* integrate in $x$, treating $y$ and $z$ as fixed numbers: $f = x^2 y + xz + g(y, z)$. The extra $g(y, z)$ is there because anything made of only $y$ and $z$ has $x$-derivative $0$, so it could be hiding in $f$.
2. *Match $f_y$:* the $y$-derivative of $x^2 y + xz + g$ is $x^2 + g_y$. It must equal $Q = x^2$, so $g_y = 0$: $g$ has no $y$ in it.
3. *Match $f_z$:* the $z$-derivative is $x + g_z$. It must equal $R = x$, so $g_z = 0$: $g$ has no $z$ either. So $g$ is just a constant, and $f = x^2 y + xz$.

**Check.** The partial derivatives of $x^2 y + xz$ are $2xy + z$, $x^2$, and $x$ ✓.

**Why not "not conservative".** That would need some pair to be unequal, or a hole in the region. All three pairs match and $\\mathbf F$ is defined everywhere.
:::

:::problem 12
**(a)** Find the outward flux of $\\mathbf F = \\langle x + y^2,\\ y + z^2,\\ z + x^2 \\rangle$ through the sphere $x^2 + y^2 + z^2 = 4$.

Answer: {{expr 3: 32pi}}

**(b)** The outward flux of $\\mathbf G = \\langle -y, x, 0 \\rangle$ through any closed surface is: {{circle 1: *$0$ | positive | negative | it depends on the surface}}
+++
review: 2026-11-16 The Divergence Theorem; 2026-11-13 Divergence

**First, what flux and divergence are.** Think of $\\mathbf F$ as the velocity of a flowing gas. The **flux** through the sphere is how much gas leaves through its surface per second (gas coming in counts as negative). The **divergence** $P_x + Q_y + R_z$ at a point measures how much the flow spreads out from there, per unit of volume. For example, $\\langle x, 0, 0 \\rangle$ has divergence $1$: at $x = 1$ the gas moves right at speed $1$, at $x = 2$ at speed $2$, so it's spreading apart.

**What the Divergence Theorem says.** For a closed surface (one that completely encloses a solid), the total flowing out through the surface equals the total spreading out inside: $\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iiint_E \\operatorname{div}\\mathbf F\\, dV$.

**(a) The goal.** The sphere is closed, so compute the easier side: add up the divergence over the ball.

**Step 1: the divergence.** Differentiate each component by its own variable:
- $\\tfrac{\\partial}{\\partial x}(x + y^2) = 1$ ($y^2$ doesn't change when only $x$ changes),
- $\\tfrac{\\partial}{\\partial y}(y + z^2) = 1$,
- $\\tfrac{\\partial}{\\partial z}(z + x^2) = 1$.

So $\\operatorname{div}\\mathbf F = 3$ at every point.

**Step 2: add it up over the ball.** It's $3$ everywhere, so the total is $3 \\times (\\text{volume of the ball of radius } 2) = 3 \\cdot \\tfrac43\\pi \\cdot 2^3 = 32\\pi$.

**(b)** $\\operatorname{div}\\mathbf G = \\tfrac{\\partial}{\\partial x}(-y) + \\tfrac{\\partial}{\\partial y}(x) + \\tfrac{\\partial}{\\partial z}(0) = 0 + 0 + 0 = 0$. The flow never spreads out or gathers anywhere, so by the Divergence Theorem, the total leaving any closed surface is $0$: whatever flows in, flows out.

**Why not the other choices in (b).**
- **positive / negative:** that would need the flow to spread out (or gather) somewhere inside, which means a nonzero divergence.
- **it depends on the surface:** the divergence is $0$ everywhere, so every solid gives $0$.
:::
`;export{e as default};