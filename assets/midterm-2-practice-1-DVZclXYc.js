var e=`---
title: Midterm 2 Practice Test 1
exam: Midterm 2
minutes: 60
---

:::problem 1
Let $f(x,y) = 3x + y$ and let $C$ be the circle $x^2 + y^2 = 10$.

**(a)** Use Lagrange multipliers to find the absolute max and min of $f$ on $C$.

Absolute max of $f$ on $C$ is {{expr 2: 10}} which occurs at the point(s) {{point 1: (3, 1)}}

Absolute min of $f$ on $C$ is {{expr 1: -10}} which occurs at the point(s) {{point 1: (-3, -1)}}

**(b)** The absolute max of $f$ on all of $\\mathbb{R}^2$ is: {{circle 1: 0 | 10 | 20 | *does not exist}}
+++
review: 2026-09-30 The method; 2026-09-28 When must extremes exist?

**First, what "on the circle" changes.** Here you may only use points on the circle $x^2 + y^2 = 10$, like $(3, 1)$ or $(1, 3)$ or $(-\\sqrt{10}, 0)$. On it, $f = 3x + y$ takes values like $f(3, 1) = 10$, $f(1, 3) = 6$, and $f(-\\sqrt{10}, 0) \\approx -9.5$. The question is which point of the circle gives the biggest value and which the smallest. The **gradient** $\\nabla f = \\langle f_x, f_y \\rangle$ is the arrow pointing the way $f$ increases fastest. At the best point on the circle, that arrow has no part pointing along the circle; otherwise moving along the circle would still increase $f$. So it points straight across the circle, the same direction as the circle's own gradient $\\nabla g$. That's the Lagrange equation $\\nabla f = \\lambda\\nabla g$: the two arrows are parallel, and $\\lambda$ is just the number relating their lengths.

**The goal.** "Max and min of $f$ *on a curve* $g = c$" is a Lagrange multiplier problem. A circle is closed and bounded, so a max and a min must exist; Lagrange finds the only places they can be, and then comparing $f$ there picks them out.

**Step 1: set up.** *Why gradients:* at a max or min on the curve, $f$ can't increase by moving along the curve, which happens exactly when $\\nabla f$ is parallel to $\\nabla g$ (both perpendicular to the curve). Here $g = x^2 + y^2$, $\\nabla f = \\langle 3, 1 \\rangle$, $\\nabla g = \\langle 2x, 2y \\rangle$.

**Step 2: the equations.** $\\nabla f = \\lambda\\nabla g$ plus the constraint:
$$3 = 2\\lambda x, \\qquad 1 = 2\\lambda y, \\qquad x^2 + y^2 = 10.$$

**Step 3: eliminate $\\lambda$.** *Why divide:* $\\lambda$ isn't asked for, and dividing the first equation by the second removes it. *Why dividing is safe here:* $\\lambda \\ne 0$ (otherwise $3 = 0$) and $y \\ne 0$ (otherwise $1 = 0$), so nothing is divided by zero. $\\tfrac31 = \\tfrac xy$, so $x = 3y$.

**Step 4: use the constraint.** *Why:* the points must be on the circle. $9y^2 + y^2 = 10$, so $y = \\pm 1$, giving $(3, 1)$ and $(-3, -1)$.

**Step 5: compare.** *Why evaluate every candidate:* Lagrange only says where extremes *can* be. $f(3, 1) = 10$ (max) and $f(-3, -1) = -10$ (min).

**Check.** At $(3, 1)$, $\\nabla f = \\langle 3, 1 \\rangle$ and $\\nabla g = \\langle 6, 2 \\rangle$ point the same way ✓.

**(b)** *Why it's different:* without the constraint, nothing keeps $x$ bounded. Along the $x$-axis, $f(x, 0) = 3x$ grows forever, so there's no absolute max on $\\mathbb R^2$.

**Common mistake.** Reporting $\\lambda$ instead of $f$'s value, or not comparing $f$ at all the candidates.

**Why not the other choices in (b).**
- **0, 10, 20:** $f$ takes these values, but for any of them a point farther out on the $x$-axis gives more.
- **10** in particular is the max *on the circle*. Off the circle, $f$ keeps growing.
:::

:::problem 2
Find the tangent plane to the surface $x^2 + 2y^2 - z^2 = 5$ at the point $P = (2, 1, 1)$.

Equation: {{plane 4: 2, 2, -1, 5}}
+++
review: 2026-09-21 Tangent planes to level surfaces

**First, what a level surface and its gradient are.** The surface is every point where $F = x^2 + 2y^2 - z^2$ equals $5$, like $P = (2, 1, 1)$: $4 + 2 - 1 = 5$. Moving along the surface keeps $F$ at $5$, so $F$ doesn't change in any direction along it. The gradient $\\nabla F$ points the way $F$ changes fastest, so it must point straight out of the surface, with no part along it. That's why $\\nabla F(P)$ is the direction perpendicular to the tangent plane (its **normal**).

**The goal.** A plane needs a point and a normal vector. The surface is a level surface $F(x, y, z) = 5$, and the gradient of $F$ is perpendicular to its level surfaces, so $\\nabla F(P)$ is the normal.

**Step 1: the gradient.** $F = x^2 + 2y^2 - z^2$, so $\\nabla F = \\langle 2x, 4y, -2z \\rangle$.

**Step 2: at $P$.** *Why at $P$:* the normal direction changes from point to point; the plane touches at $P$. $\\nabla F(2, 1, 1) = \\langle 4, 4, -2 \\rangle$.

**Step 3: the plane.** *Why this form:* every vector from $P$ to a point $(x, y, z)$ of the plane must be perpendicular to the normal, so their dot product is $0$:
$$4(x - 2) + 4(y - 1) - 2(z - 1) = 0.$$

**Step 4: simplify.** $4x + 4y - 2z = 10$, and dividing by $2$: $2x + 2y - z = 5$.

**Check.** $P$: $4 + 2 - 1 = 5$ ✓. Any nonzero multiple is the same plane, and the grader accepts it.

**Common mistakes.** Solving for $z$ and using the graph formula (it works, but it's slower and error-prone). Evaluating $\\nabla F$ at a general point instead of at $P$.
:::

:::problem 3
Suppose $f(x,y)$ has continuous second partial derivatives with the values in the table. For each point, circle the best description. (1 point each)

| $(x,y)$ | $f$ | $f_x$ | $f_y$ | $f_{xx}$ | $f_{yy}$ | $f_{xy}$ |
|---|---|---|---|---|---|---|
| $(0,0)$ | $1$ | $0$ | $0$ | $3$ | $2$ | $1$ |
| $(1,0)$ | $4$ | $0$ | $2$ | $1$ | $1$ | $0$ |
| $(0,2)$ | $-2$ | $0$ | $0$ | $1$ | $-2$ | $0$ |
| $(2,1)$ | $6$ | $0$ | $0$ | $-3$ | $-1$ | $1$ |
| $(-1,1)$ | $0$ | $0$ | $0$ | $2$ | $2$ | $2$ |

$(0,0)$: {{circle 1: not critical | *local min | local max | saddle | undetermined}}

$(1,0)$: {{circle 1: *not critical | local min | local max | saddle | undetermined}}

$(0,2)$: {{circle 1: not critical | local min | local max | *saddle | undetermined}}

$(2,1)$: {{circle 1: not critical | local min | *local max | saddle | undetermined}}

$(-1,1)$: {{circle 1: not critical | local min | local max | saddle | *undetermined}}
+++
review: 2026-09-25 The second derivative test

**First, what the table's numbers mean.** $f_x$ and $f_y$ are the slopes of $f$ in the $x$ and $y$ directions at that point. A **critical point** is where both slopes are $0$: the surface is flat there. It can be a local max (higher than every nearby point), a local min (lower than every nearby point), or a saddle (higher in some directions, lower in others). $f_{xx}$, $f_{yy}$, $f_{xy}$ say how the slopes change, which tells you which of those shapes it is. For example, $f = x^2 + y^2$ at $(0, 0)$ has $f_x = f_y = 0$ and $f_{xx} = f_{yy} = 2 > 0$: it curves up in every direction: a local min.

**The goal.** For each point, answer two questions in order: is it a critical point at all, and if so, what does the second derivative test say?

**Step 1: critical?** *Why first:* the second derivative test only applies at critical points, where $f_x = f_y = 0$. At $(1, 0)$, $f_y = 2 \\ne 0$, so it's **not critical**, and nothing else matters there.

**Step 2: the test.** *Why $D$:* $D = f_{xx}f_{yy} - f_{xy}^2$ tells whether $f$ curves the same way in every direction ($D > 0$) or up in some directions and down in others ($D < 0$).

| point | $D$ | $f_{xx}$ | verdict |
|---|---|---|---|
| $(0,0)$ | $3\\cdot 2 - 1^2 = 5$ | $3 > 0$ | local min |
| $(0,2)$ | $1\\cdot(-2) - 0 = -2$ | | saddle |
| $(2,1)$ | $(-3)(-1) - 1^2 = 2$ | $-3 < 0$ | local max |
| $(-1,1)$ | $2\\cdot 2 - 2^2 = 0$ | | undetermined |

**Step 3: read the verdicts.** *Why $f_{xx}$ decides between min and max:* when $D > 0$, $f$ curves the same way in every direction, and $f_{xx}$ shows which way: up (min) if positive, down (max) if negative. $D < 0$ means a saddle, and $D = 0$ means the test can't decide.

**Common mistakes.** Forgetting to square $f_{xy}$. Using the value of $f$ (that column never matters). Calling a $D = 0$ point a saddle.

**Why not the other choices.**
- **"not critical"** fits only $(1,0)$. Every other point has $f_x = f_y = 0$.
- **"local min" or "local max"** need $D > 0$, ruling them out at $(0,2)$ and $(-1,1)$. At $(0,0)$, $f_{xx} > 0$ rules out max; at $(2,1)$, $f_{xx} < 0$ rules out min.
- **"saddle"** needs $D < 0$, which happens only at $(0,2)$.
- **"undetermined"** needs $D = 0$, which happens only at $(-1,1)$.
:::

:::scratch
:::

:::problem 4
The contour map of a differentiable function $f$ is shown on the region $D = \\{-2.5 \\le x \\le 2.5,\\ -2 \\le y \\le 2\\}$. Each level curve is labeled with its value of $f$. Circle the best answer. (1 point each)

{{figure 0: contour-m2p1}}

**(a)** The number of critical points of $f$ in $D$ is: {{circle 1: 0 | 1 | *2 | 3 | 4}}

**(b)** The number of those critical points that are saddle points is: {{circle 1: 0 | *1 | 2 | 3}}

**(c)** The directional derivative $D_{\\vec u} f(P)$, where $\\vec u$ is the unit vector drawn as the arrow labeled $\\vec u$ at $P$, is: {{circle 1: *negative | zero | positive}}

**(d)** The gradient $\\nabla f(A)$ points: {{circle 1: *up | down | left | right}}

**(e)** Circle the correct relationship: {{circle 1: *$\\lVert \\nabla f(A) \\rVert > \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert = \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert < \\lVert \\nabla f(B) \\rVert$}}

**(f)** For the curve $C$ shown, from $S$ to $E$, the integral $\\int_C \\nabla f \\cdot d\\mathbf r$ is: {{circle 1: -4 | -2 | 0 | *2 | 4 | 8}}
+++
review: 2026-09-18 Gradients and level curves; 2026-09-18 The gradient; 2026-09-25 Critical points; 2026-10-09 The Fundamental Theorem for Line Integrals

**First, what a contour map shows.** Each curve connects the points where $f$ has one value, written on the curve. Walking along a curve, $f$ stays the same; crossing from the curve labeled $0$ to the one labeled $1$, $f$ goes up by $1$. Where the curves are close together, $f$ changes a lot over a short walk (steep); where they're far apart, it changes slowly (gentle). Every part below is read off those two facts.

**The goal.** Each part asks what a gradient fact looks like on a map, so first list the facts, then read each one off the picture.

- $\\nabla f$ is perpendicular to the level curve and points toward **higher** values. *Why:* along a level curve $f$ doesn't change, so the direction of fastest change is straight across it.
- $\\lVert \\nabla f \\rVert$ is large where level curves are **close together**. *Why:* close curves mean $f$ changes a lot over a short distance.
- $D_{\\vec u} f(P)$ is the rate $f$ changes moving from $P$ in direction $\\vec u$: positive if you cross into higher labels.
- **Max or min:** level curves form **rings inside rings** around one point. *Why:* $f$ keeps rising (or falling) toward the middle in every direction.
- **Saddle:** one level curve **crosses itself** in an X. *Why:* $f$ goes up in two opposite directions and down in the other two.

**(a)** On the right, rings inside rings around $(1, 0)$, with labels getting smaller toward the middle: a **minimum**. On the left, the curve labeled $2$ crosses itself at $(-1, 0)$: a **saddle**. That's **2** critical points. (The map is of $f = x^3 - 3x + y^2$, whose critical points are $(\\pm 1, 0)$.)

**(b)** Only the X-shaped crossing is a saddle: **1**.

**(c)** *Why look at the labels you move into:* $D_{\\vec u}f$ is the rate of change in that direction. Moving right from $P$, the labels get smaller, so $f$ decreases: **negative**. (Formula check: $f_x(0, 1) = -3$.)

**(d)** *Why up or down:* at $A$ the level curve is horizontal, and $\\nabla f$ is perpendicular to it. The labels get bigger going up, so it points **up**. (Formula check: $\\nabla f(1, 1.5) = \\langle 0, 3 \\rangle$.)

**(e)** *Why compare spacing:* close curves mean a long gradient. Near $A$ the curves are close and near $B$ they're far apart, so $\\lVert \\nabla f(A) \\rVert > \\lVert \\nabla f(B) \\rVert$ (exactly $3$ vs $1$).

**(f)** *Why no path computation:* it's a gradient field, so the Fundamental Theorem for Line Integrals says $\\int_C \\nabla f \\cdot d\\mathbf r = f(E) - f(S)$, whatever the path's shape. $S$ is on the curve labeled $0$ and $E$ on the curve labeled $2$: $2 - 0 = 2$.

**Common mistakes.** In (d), pointing *along* the level curve. In (f), estimating the integral piece by piece along $C$.

**Why not the other choices.**
- **(a)** **0 or 1:** the map has both a min (rings) and a saddle (a crossing). **3 or 4:** nowhere else do the curves form rings or cross.
- **(b)** **0:** the X-shaped crossing is a saddle. **2:** the other critical point is a min. **3:** there are only two critical points.
- **(c)** **zero** would mean $\\vec u$ runs along the level curve through $P$, but it cuts across. **positive** is backward: the labels drop as you move right.
- **(d)** **down** points toward smaller labels. **left or right** would run along the horizontal level curve at $A$.
- **(e)** **equal:** the spacing differs near $A$ and $B$. **less than:** backward, since closer curves (at $A$) mean a longer gradient.
- **(f)** **$-2$** has the sign backward. **$0$** would need $S$ and $E$ on the same level curve. The others don't match $2 - 0$.
:::

:::problem 5
The vector field $\\mathbf F(x,y) = \\langle 2xy + 3,\\; x^2 - 4y \\rangle$ on $\\mathbb{R}^2$ is conservative. Find the potential function $f(x,y)$ with $\\mathbf F = \\nabla f$ and $f(0,0) = 0$. No partial credit, so check your answer!

$f(x,y) =$ {{expr 3: x^2 y + 3x - 2y^2}}
+++
review: 2026-10-12 Finding the potential function

**First, what a potential function is.** It's a function $f$ whose slopes are the field's components: $f_x = P$ and $f_y = Q$. For example, $f = x^2$ has $f_x = 2x$ and $f_y = 0$, so it's a potential for $\\langle 2x, 0 \\rangle$. Finding $f$ means undoing the derivatives one variable at a time.

**The goal.** Find $f$ with $f_x = P$ and $f_y = Q$. *Why one variable at a time:* integrating $P$ in $x$ recovers $f$ except for a piece that doesn't depend on $x$; then $Q$ pins that piece down.

**Step 1: integrate $P$ in $x$.** *Why "$+\\, h(y)$" instead of "$+\\, C$":* $y$ is held fixed, so anything that depends only on $y$ disappears when you differentiate in $x$. $f = x^2 y + 3x + h(y)$.

**Step 2: differentiate in $y$.** $f_y = x^2 + h'(y)$.

**Step 3: match $Q$.** *Why:* $f_y$ must equal $Q = x^2 - 4y$. So $h'(y) = -4y$. No $x$ is left over, which confirms the field is conservative.

**Step 4: integrate.** $h(y) = -2y^2 + C$.

**Step 5: use $f(0, 0) = 0$.** *Why:* it picks the one constant the problem wants: $0 + 0 - 0 + C = 0$, so $C = 0$.
$$f(x, y) = x^2 y + 3x - 2y^2.$$

**Check.** $\\nabla f = \\langle 2xy + 3,\\ x^2 - 4y \\rangle = \\mathbf F$ ✓. With no partial credit, this ten-second check is worth it.

**Common mistakes.** Writing $+\\,C$ when $f(0, 0) = 0$ is given. Treating $h$ as a number instead of a function of $y$. Adding $\\int P\\,dx$ and $\\int Q\\,dy$ (that counts the $x^2 y$ term twice).
:::

:::problem 6
Let $C$ be the curve where the cylinder $x^2 + z^2 = 9$ meets the plane $y = z + 2$.

**(a)** Find a vector function $\\mathbf r(t)$ that parametrizes $C$, going around the whole curve exactly once. Give the domain of $t$.

{{self 4}}

**(b)** The point $(0, 5, 3)$ lies on $C$: {{circle 1: *true | false}}
+++
review: 2026-10-02 Curves as vector functions

**First, what parametrizing a curve means.** It means writing one formula $\\mathbf r(t) = \\langle x(t), y(t), z(t) \\rangle$ so that, as $t$ goes from start to end, the point travels the whole curve. For example, $\\langle 3\\cos t, 0, 3\\sin t \\rangle$ at $t = 0$ is $(3, 0, 0)$ and at $t = \\tfrac\\pi2$ is $(0, 0, 3)$: it travels around a circle of radius $3$ in the $x$ and $z$ directions. Every point it gives must satisfy both surfaces' equations.

**(a) The goal.** Find $\\mathbf r(t)$ that satisfies both surfaces' equations for every $t$. *The plan:* the cylinder is a circle in two of the coordinates, so use $\\cos$ and $\\sin$ for those, then let the plane give the third.

**Step 1: which two coordinates?** *Why it matters:* the circle has to be in the variables the cylinder uses. $x^2 + z^2 = 9$ is a circle of radius $3$ in $x$ and $z$ (the cylinder runs along the $y$-axis).

**Step 2: parametrize the circle.** $x = 3\\cos t$, $z = 3\\sin t$, with $0 \\le t \\le 2\\pi$ for exactly one trip around. *Why it works:* $x^2 + z^2 = 9(\\cos^2 t + \\sin^2 t) = 9$.

**Step 3: the plane gives $y$.** $y = z + 2 = 3\\sin t + 2$.
$$\\mathbf r(t) = \\langle 3\\cos t,\\ 3\\sin t + 2,\\ 3\\sin t \\rangle, \\qquad 0 \\le t \\le 2\\pi.$$

**How to grade yourself.** Your answer is right if it satisfies **both** equations for every $t$ and the domain goes around exactly once: $x^2 + z^2 = 9$ ✓ and $y - z = 2$ ✓. Swapping $\\cos$ and $\\sin$, or starting elsewhere, is also correct.

**(b)** *Why plug in:* a point is on $C$ exactly when it's on both surfaces. $(0, 5, 3)$: $0 + 9 = 9$ ✓ and $3 + 2 = 5$ ✓. **True.**

**Common mistakes.** Using $\\cos$ and $\\sin$ for $x$ and $y$ when the cylinder uses $x$ and $z$. Using $0 \\le t \\le \\pi$, which only goes halfway around.

**Why not "false" in (b).** The point satisfies both equations, so it's on $C$.
:::

:::scratch
:::

:::problem 7
A thin wire has the shape of the curve $\\mathbf r(t) = \\langle 3\\cos t,\\; 3\\sin t \\rangle$ for $0 \\le t \\le \\pi$.

**(a)** Circle the picture of the wire.

{{figure 0: wires-m2p1}}

{{circle 1: (i) | *(ii) | (iii) | (iv)}}

**(b)** The density of the wire is $\\rho(x,y) = 2 + y$. Find the total mass of the wire.

Total mass = {{expr 5: 6pi + 18}}
+++
review: 2026-10-02 Curves as vector functions; 2026-10-05 Mass and average value

**First, what the mass of a wire means.** The density $\\rho$ is the mass per unit of length, and here it changes along the wire (at the right end, where $y = 0$, it's $2$; at the top, where $y = 3$, it's $5$). The mass is (density) $\\times$ (length of a tiny piece), added up along the wire. The length of a tiny piece is the speed $\\lVert \\mathbf r'(t) \\rVert$ times the small change in $t$, because the integral counts in steps of $t$, not of length.

**(a) The goal.** Find which part of the circle $t$ covers. *Why plug in values:* each $t$ gives a point, and a few points show where the curve starts, goes, and ends. $t = 0$ gives $(3, 0)$, $t = \\tfrac\\pi2$ gives $(0, 3)$, and $t = \\pi$ gives $(-3, 0)$: the **upper** half, picture (ii).

**(b) The goal.** Mass of a wire is density added up along its length: $\\int_C \\rho\\, ds$, where $ds = \\lVert \\mathbf r'(t) \\rVert\\, dt$ is the length of a small piece.

**Step 1: the length factor.** *Why:* the integral runs over $t$, but density counts per unit *length*, so each $dt$ must be converted to a length. $\\mathbf r' = \\langle -3\\sin t, 3\\cos t \\rangle$, so $\\lVert \\mathbf r' \\rVert = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$.

**Step 2: density on the wire.** *Why substitute:* the integral is in $t$, so $y$ must be written with $t$: $\\rho = 2 + y = 2 + 3\\sin t$.

**Step 3: integrate.**
$$\\int_0^\\pi (2 + 3\\sin t)\\cdot 3\\, dt = 3\\Big[2t - 3\\cos t\\Big]_0^\\pi = 3\\big[(2\\pi + 3) - (0 - 3)\\big] = 6\\pi + 18.$$

**Check.** On the upper half, $0 \\le y \\le 3$, so the density is between $2$ and $5$, and the length is $3\\pi$. The mass must be between $2 \\cdot 3\\pi \\approx 18.8$ and $5 \\cdot 3\\pi \\approx 47.1$. $6\\pi + 18 \\approx 36.8$ ✓.

**Common mistakes.** Forgetting $\\lVert \\mathbf r' \\rVert = 3$ (that gives $2\\pi + 6$). Leaving $y$ in the integral.

**Why not the other pictures in (a).**
- **(i)** is the right half, which $-\\tfrac\\pi2 \\le t \\le \\tfrac\\pi2$ would trace.
- **(iii)** is the lower half, but on $0 \\le t \\le \\pi$, $y = 3\\sin t \\ge 0$.
- **(iv)** is the full circle, but $t$ only runs to $\\pi$, half a turn.
:::

:::problem 8
Calculate the line integral of $\\mathbf F(x,y,z) = \\langle -y,\\; x,\\; z \\rangle$ along the curve $C$ parametrized by $\\mathbf r(t) = \\langle \\cos t,\\; \\sin t,\\; t \\rangle$ for $0 \\le t \\le \\pi$.

$\\int_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 4: pi + pi^2/2}}
+++
review: 2026-10-07 Line integrals of vector fields

**First, what this line integral adds up.** Walking along the curve, the field $\\mathbf F$ pushes you. The part of the push along your direction of travel, times the distance walked, added up over the whole walk, is $\\int_C \\mathbf F \\cdot d\\mathbf r$ (it's the work done by $\\mathbf F$). With the curve written as $\\mathbf r(t)$, each small step is $\\mathbf r'(t)\\,dt$, so the integrand is $\\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)$.

**The goal.** Compute $\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt$. *Why check for a shortcut first:* if $\\mathbf F$ were conservative, the answer would be $f(\\text{end}) - f(\\text{start})$. But $P_y = -1$ and $Q_x = 1$ don't match, so compute directly.

**Step 1: $\\mathbf F$ on the curve.** *Why:* the integral is in $t$, so $\\mathbf F$ must be written with $t$. $\\mathbf F(\\mathbf r(t)) = \\langle -\\sin t, \\cos t, t \\rangle$.

**Step 2: the curve's velocity.** $\\mathbf r'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle$.

**Step 3: dot them.** *Why the dot product:* it keeps only the part of $\\mathbf F$ that pushes along the path. $\\sin^2 t + \\cos^2 t + t = 1 + t$.

**Step 4: integrate.** $\\int_0^\\pi (1 + t)\\, dt = \\Big[t + \\tfrac{t^2}{2}\\Big]_0^\\pi = \\pi + \\tfrac{\\pi^2}{2}$.

**Why it's positive.** In the $xy$ part, $\\langle -y, x \\rangle$ swirls counterclockwise, the same way the helix turns. In the $z$ part, $z = t \\ge 0$ while the curve rises. Both push along the path.

**Common mistakes.** Multiplying by $\\lVert \\mathbf r' \\rVert$ (that's for $\\int f\\, ds$). Using the Fundamental Theorem on a field that isn't conservative.
:::

:::problem 9
Find the length of the curve $\\mathbf r(t) = \\langle 2t,\\; t^2,\\; \\ln t \\rangle$ for $1 \\le t \\le e$.

Length = {{expr 4: e^2}}
+++
review: 2026-10-02 Arc length; 2026-10-05 Arc length, again

**First, why length is $\\int \\lVert \\mathbf r' \\rVert\\, dt$.** $\\lVert \\mathbf r'(t) \\rVert$ is the speed of the moving point. Distance $=$ speed $\\times$ time, so over a short time $\\Delta t$ the point moves about $\\lVert \\mathbf r' \\rVert\\,\\Delta t$, and adding up those short distances gives the curve's length. For example, $\\langle 2t, 0, 0 \\rangle$ moves at speed $2$, so from $t = 0$ to $t = 3$ it covers $6$.

**The goal.** Length is $\\int_a^b \\lVert \\mathbf r'(t) \\rVert\\, dt$: speed times time, added up. *The plan:* exam arc-length problems are built so the square root simplifies, so look for a perfect square under it.

**Step 1: velocity.** $\\mathbf r'(t) = \\langle 2, 2t, \\tfrac1t \\rangle$.

**Step 2: speed squared.** $\\lVert \\mathbf r' \\rVert^2 = 4 + 4t^2 + \\tfrac{1}{t^2}$.

**Step 3: find the perfect square.** *Why try $\\big(2t + \\tfrac1t\\big)^2$:* its middle term is $2 \\cdot 2t \\cdot \\tfrac1t = 4$, exactly the constant that's there. $\\big(2t + \\tfrac1t\\big)^2 = 4t^2 + 4 + \\tfrac{1}{t^2}$ ✓, so $\\lVert \\mathbf r' \\rVert = 2t + \\tfrac1t$ (positive for $t \\ge 1$).

**Step 4: integrate.** $\\int_1^e \\big(2t + \\tfrac1t\\big)\\, dt = \\Big[t^2 + \\ln t\\Big]_1^e = (e^2 + 1) - (1 + 0) = e^2$.

**Common mistake.** Trying to integrate $\\sqrt{4 + 4t^2 + 1/t^2}$ as it is. If a root looks impossible, look for $(a + b)^2 = a^2 + 2ab + b^2$.
:::

:::problem 10
A particle moves along $\\mathbf r(t) = \\langle t^2,\\; t^3,\\; 2t \\rangle$.

Its speed at $t = 1$ is {{expr 2: sqrt(17)}}

Its acceleration at $t = 1$ is $\\mathbf a(1) = \\langle$ {{expr 1: 2}} , {{expr 1: 6}} , {{expr 1: 0}} $\\rangle$
+++
review: 2026-10-02 Velocity, speed, and acceleration

**First, what velocity, speed, and acceleration are.** The velocity $\\mathbf r'(t)$ is an arrow: which way the point moves and how fast. The speed is just how fast, the arrow's length (a number). The acceleration $\\mathbf r''(t)$ is how the velocity itself is changing. For example, $\\langle t^2, 0, 0 \\rangle$ has velocity $\\langle 2t, 0, 0 \\rangle$ (at $t = 1$, moving right at speed $2$) and acceleration $\\langle 2, 0, 0 \\rangle$ (speeding up).

**The goal.** Speed is the length of the velocity $\\mathbf r'$ (a number), and acceleration is $\\mathbf r''$ (a vector). So differentiate twice and evaluate at $t = 1$.

**Step 1: velocity.** $\\vec v(t) = \\langle 2t, 3t^2, 2 \\rangle$, so $\\vec v(1) = \\langle 2, 3, 2 \\rangle$.

**Step 2: speed.** *Why the length:* speed is how fast, regardless of direction. $\\lVert \\vec v(1) \\rVert = \\sqrt{4 + 9 + 4} = \\sqrt{17}$.

**Step 3: acceleration.** *Why differentiate before plugging in:* plugging in $t = 1$ first would give constants, whose derivatives are $0$. $\\mathbf a(t) = \\langle 2, 6t, 0 \\rangle$, so $\\mathbf a(1) = \\langle 2, 6, 0 \\rangle$.

**Common mistakes.** Giving the velocity vector when asked for speed. Plugging in $t = 1$ before differentiating.
:::

:::scratch
:::

:::problem 11
Consider these four regions in the plane. (1 point each)

- $R_1 = \\{x^2 + y^2 \\le 9\\}$
- $R_2 = \\{1 < x^2 + y^2 < 9\\}$
- $R_3 = \\{y > x^2\\}$
- $R_4 = \\{x^2 + y^2 < 4 \\text{ and } x \\ge 0\\}$

**(a)** Which region is not bounded? {{circle 1: $R_1$ | $R_2$ | *$R_3$ | $R_4$}}

**(b)** Which region is closed? {{circle 1: *$R_1$ | $R_2$ | $R_3$ | $R_4$}}

**(c)** Which region is not simply connected? {{circle 1: $R_1$ | *$R_2$ | $R_3$ | $R_4$}}
+++
review: 2026-09-28 When must extremes exist?; 2026-10-12 Is the condition enough?

**First, what the four words mean, on simple examples.**
- **Bounded:** the whole region fits inside some disk. For example, the disk $x^2 + y^2 \\le 9$ fits inside a disk of radius $3$; the region above $y = x^2$ goes up forever, so it doesn't.
- **Boundary:** the edge. For $x^2 + y^2 \\le 9$ it's the circle $x^2 + y^2 = 9$.
- **Closed:** contains all of its edge ("$\\le$" includes the edge, "$<$" leaves it out). **Open:** contains none of its edge.
- **Simply connected:** one piece with no holes. A ring $1 < x^2 + y^2 < 9$ has a hole in the middle: a loop around the hole can't be shrunk to a point without leaving the ring.

**The goal.** These are definitions. *The plan:* for each region, decide whether it fits in a disk, which of its edges it includes, and whether it has a hole.

- **Bounded:** fits inside some disk.
- **Closed:** contains **all** of its boundary. *Why look at $\\le$ vs $<$:* "$\\le$" includes the edge where equality holds; "$<$" leaves it out.
- **Open:** contains **none** of its boundary.
- **Simply connected:** one piece with **no holes**.

| region | bounded? | boundary included | holes? |
|---|---|---|---|
| $R_1$ disk, $\\le 9$ | yes | all (closed) | none |
| $R_2$ ring, $<$ both sides | yes | none (open) | **yes**, the inner disk |
| $R_3$ above the parabola | **no** | none (open) | none |
| $R_4$ half-disk | yes | some: the flat edge $x = 0$, but not the arc or the corners $(0, \\pm 2)$ | none |

**(a)** $R_3$: $y$ can be as large as you like. **(b)** $R_1$: the only one containing all of its boundary. **(c)** $R_2$: a loop around the hole can't shrink to a point without crossing the hole.

**Common mistake.** Thinking "not open" means "closed." $R_4$ is neither.

**Why not the other choices.**
- **(a)** $R_1$, $R_2$, and $R_4$ all fit inside the disk of radius $3$.
- **(b)** $R_2$ and $R_3$ use only strict inequalities, so they contain none of their boundary. $R_4$ is missing its arc.
- **(c)** $R_1$, $R_3$, and $R_4$ are each one piece with no holes.
:::

:::problem 12
Consider the three vector fields $E$, $F$, and $G$ shown below. (1 point each)

{{figure 0: fields-m2p1}}

**(a)** One of these is $\\langle -y,\\; x \\rangle$. Circle it: {{circle 1: E | *F | G}}

**(b)** Exactly one of them is conservative. Circle it: {{circle 1: *E | F | G}}

**(c)** Exactly one of these is a flowline of $E$. Circle it: {{circle 1: $\\langle t, 1 - t \\rangle$ | $\\langle \\cos t, \\sin t \\rangle$ | *$\\langle e^t, e^t \\rangle$ | $\\langle t, t^2 \\rangle$}}

**(d)** For the segment $L$ from $(0,0)$ to $(1,1)$, the integral $\\int_L G \\cdot d\\mathbf r$ is: {{circle 1: negative | zero | *positive}}
+++
review: 2026-10-07 What a vector field is; 2026-10-07 Flowlines; 2026-10-12 A necessary condition

**First, how to read a field picture.** At each point the picture draws the field's arrow there. To match a formula, plug in a few easy points and see which way its arrows point. For example, $\\langle -y, x \\rangle$ at $(1, 0)$ is $\\langle 0, 1 \\rangle$, pointing up, and at $(0, 1)$ is $\\langle -1, 0 \\rangle$, pointing left: arrows going counterclockwise around the origin. A **flowline** is a path that follows the arrows: at every moment, its velocity equals the arrow where it is.

**The goal.** Match formulas to pictures, then use the formulas. *Why plug in easy points:* each formula gives an arrow at each point, and a couple of arrows are enough to recognize the picture. The fields are $E = \\langle y, x \\rangle$, $F = \\langle -y, x \\rangle$, and $G = \\langle 1, x \\rangle$.

**(a)** For $\\langle -y, x \\rangle$: at $(1, 0)$ the arrow is $\\langle 0, 1 \\rangle$ (up), and at $(0, 1)$ it's $\\langle -1, 0 \\rangle$ (left). That's a counterclockwise swirl around the origin: **F**.

**(b)** *Why rule out the swirl first:* going around a loop with a swirl gains something every time, which a conservative field can't do. Then test the formulas with cross-partials: $E$ has $P_y = 1 = Q_x$ ✓ (it's $\\nabla(xy)$); $G$ has $P_y = 0 \\ne 1 = Q_x$ ✗. So **E**.

**(c)** *Why compare velocities:* a flowline follows the arrows, so its velocity must equal the field at every point: $\\mathbf r'(t) = E(\\mathbf r(t)) = \\langle y, x \\rangle$.
- $\\langle t, 1 - t \\rangle$: $\\mathbf r' = \\langle 1, -1 \\rangle$, but $E = \\langle 1 - t, t \\rangle$ ✗
- $\\langle \\cos t, \\sin t \\rangle$: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$, but $E = \\langle \\sin t, \\cos t \\rangle$ ✗
- $\\langle e^t, e^t \\rangle$: $\\mathbf r' = \\langle e^t, e^t \\rangle$ and $E = \\langle e^t, e^t \\rangle$ ✓
- $\\langle t, t^2 \\rangle$: $\\mathbf r' = \\langle 1, 2t \\rangle$, but $E = \\langle t^2, t \\rangle$ ✗

**(d)** *Why check the sign of $G \\cdot \\mathbf r'$:* if it's positive everywhere on the path, the integral is positive. With $\\mathbf r(t) = \\langle t, t \\rangle$, $G \\cdot \\mathbf r' = \\langle 1, t \\rangle \\cdot \\langle 1, 1 \\rangle = 1 + t > 0$. (The integral is $\\tfrac32$.) **Positive.**

**Common mistake.** In (c), checking only that the curve passes through the right points. A flowline's *velocity* has to match the field.

**Why not the other choices.**
- **(a)** **E:** at $(0, 1)$, $E = \\langle 1, 0 \\rangle$ points right, but $\\langle -y, x \\rangle$ points left. **G:** its $x$-component is always $1$, so it never points left.
- **(b)** **F** swirls, so a loop around the origin gains something. **G** fails the cross-partials test.
- **(c)** The ✗ checks above show each other curve's velocity disagrees with $E$.
- **(d)** **negative or zero:** $G \\cdot \\mathbf r' = 1 + t$ is positive at every point of the path.
:::
`;export{e as default};