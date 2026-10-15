var e=`---
title: Midterm 2 Concept Check
exam: Midterm 2
minutes: 25
format: multiple-choice
---

:::problem 1
At a point $P$, $\\nabla f(P) = \\mathbf 0$. What can you conclude?

{{circle 1: $f$ has a local max at $P$ | $f$ has a local min at $P$ | *$P$ is a critical point, which could be a max, a min, or a saddle | $f(P) = 0$}}
+++
review: 2026-09-21 Where the gradient is zero; 2026-09-25 Critical points

$\\nabla f = \\mathbf 0$ is exactly the definition of a critical point. Critical points are the only *candidates* for local extremes, but some are saddles, like $f = x^2 - y^2$ at the origin.

**Why not the other choices.**
- **local max / local min:** a critical point can also be a saddle, so neither is guaranteed. You'd need the second derivative test.
- **$f(P) = 0$:** $\\nabla f = \\mathbf 0$ says the *slopes* are zero, not the value. For example, $f = x^2 + y^2 + 5$ has $\\nabla f(0,0) = \\mathbf 0$ but $f(0,0) = 5$.
:::

:::problem 2
At a point $P$ where $\\nabla f(P) \\neq \\mathbf 0$, the directional derivative $D_{\\vec u} f(P)$ is $0$ for a unit vector $\\vec u$. Then $\\vec u$ is:

{{circle 1: parallel to $\\nabla f(P)$ | *perpendicular to $\\nabla f(P)$ | pointing toward the maximum of $f$ | the zero vector}}
+++
review: 2026-09-18 The gradient

$D_{\\vec u} f = \\nabla f \\cdot \\vec u = \\lVert \\nabla f \\rVert \\cos\\theta$. With $\\nabla f \\ne \\mathbf 0$, this is $0$ exactly when $\\cos\\theta = 0$, so $\\vec u \\perp \\nabla f$. That's the direction along the level curve.

**Why not the other choices.**
- **parallel:** then $\\cos\\theta = \\pm 1$ and $D_{\\vec u} f = \\pm\\lVert \\nabla f \\rVert \\ne 0$.
- **toward the maximum:** moving toward higher values gives a positive rate, not $0$.
- **the zero vector:** $\\vec u$ is a unit vector, so it has length $1$.
:::

:::problem 3
Over all unit vectors $\\vec u$, the largest possible value of $D_{\\vec u} f(P)$ is:

{{circle 1: *$\\lVert \\nabla f(P) \\rVert$ | $\\nabla f(P)$ | $f(P)$ | $1$}}
+++
review: 2026-09-18 The gradient

$D_{\\vec u} f = \\lVert \\nabla f \\rVert \\cos\\theta$ is largest when $\\theta = 0$, giving $\\lVert \\nabla f(P) \\rVert$, in the direction of $\\nabla f(P)$.

**Why not the other choices.**
- **$\\nabla f(P)$:** that's a vector, the *direction* of fastest increase. The rate itself is a number, its length.
- **$f(P)$:** that's the value of $f$, not a rate of change.
- **$1$:** that's the length of $\\vec u$, not the rate.
:::

:::problem 4
On a contour map, the level curves are close together near point $A$ and far apart near point $B$. Then:

{{circle 1: *$\\lVert \\nabla f(A) \\rVert > \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert < \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert = \\lVert \\nabla f(B) \\rVert$ | they can't be compared}}
+++
review: 2026-09-18 Gradients and level curves

Close-together level curves mean $f$ changes by the same amount over a shorter distance, so it's changing faster. The gradient's length is that rate of change.

**Why not the other choices.**
- **less than:** backward. Far-apart curves (at $B$) mean slower change.
- **equal:** the spacing is different, so the rates are different.
- **can't be compared:** the spacing between neighboring level curves is exactly what tells you $\\lVert \\nabla f \\rVert$.
:::

:::problem 5
The tangent plane to the level surface $F(x,y,z) = k$ at a point $P$ has normal vector:

{{circle 1: *$\\nabla F(P)$ | the position vector of $P$ | $F(P)$ | $\\langle F_x(P),\\, F_y(P),\\, 0 \\rangle$}}
+++
review: 2026-09-21 Tangent planes to level surfaces

The gradient is perpendicular to level surfaces, so $\\nabla F(P)$ is perpendicular to the tangent plane: it's the normal vector.

**Why not the other choices.**
- **the position vector of $P$:** that's only the normal for a sphere centered at the origin, not for surfaces in general.
- **$F(P)$:** that's a number (it equals $k$), not a vector.
- **$\\langle F_x, F_y, 0 \\rangle$:** dropping $F_z$ gives the wrong direction whenever $F_z(P) \\ne 0$.
:::

:::problem 6
At a critical point, $D = f_{xx} f_{yy} - f_{xy}^2 < 0$. The point is a:

{{circle 1: local min | local max | *saddle point | the test can't tell}}
+++
review: 2026-09-25 The second derivative test

$D < 0$ means $f$ curves up in some directions and down in others: a saddle.

**Why not the other choices.**
- **local min / local max:** these need $D > 0$. The sign of $f_{xx}$ only matters then.
- **can't tell:** the test is inconclusive only when $D = 0$.
:::

:::problem 7
At a critical point, $D = 0$. Then:

{{circle 1: it's a saddle point | it's a local min | it isn't a max or a min | *the second derivative test gives no conclusion}}
+++
review: 2026-09-25 The second derivative test

When $D = 0$, the test says nothing. For example, $x^4 + y^4$ (a min), $-x^4 - y^4$ (a max), and $x^4 - y^4$ (a saddle) all have $D = 0$ at the origin.

**Why not the other choices.**
- **saddle / local min:** each is possible, but neither is guaranteed. See the examples above.
- **isn't a max or a min:** $x^4 + y^4$ has $D = 0$ and a min at the origin.
:::

:::problem 8
To find the absolute max of a continuous $f$ on a closed, bounded region, you must:

{{circle 1: *check critical points inside and the boundary, then compare all the values | check only the critical points | check only the boundary | use the second derivative test at each critical point}}
+++
review: 2026-09-28 The three-step method

The absolute max could be at an interior critical point or anywhere on the boundary, so you check both and compare.

**Why not the other choices.**
- **only critical points:** the max is often on the boundary, where $\\nabla f$ needn't be $\\mathbf 0$.
- **only the boundary:** the max can be at an interior critical point.
- **second derivative test:** it only says local max, min, or saddle. Comparing values is what finds the absolute max.
:::

:::problem 9
On which region is a continuous function $f$ **guaranteed** to have an absolute max?

{{circle 1: *$x^2 + y^2 \\le 1$ | $x^2 + y^2 < 1$ | $y \\ge 0$ | the line $y = x$}}
+++
review: 2026-09-28 When must extremes exist?

The Extreme Value Theorem needs the region to be **closed** (contains its boundary) and **bounded** (fits in a disk). Only the closed disk is both.

**Why not the other choices.**
- **$x^2 + y^2 < 1$:** not closed. $f = x$ gets close to $1$ but never reaches it.
- **$y \\ge 0$:** not bounded. $f = y$ grows forever.
- **the line $y = x$:** not bounded. $f = x$ grows forever along it.
:::

:::problem 10
At the point where $f$ has its max on the constraint curve $g(x,y) = c$ (with $\\nabla g \\ne \\mathbf 0$), the level curve of $f$ through that point is:

{{circle 1: *tangent to the curve $g = c$ | perpendicular to the curve $g = c$ | crossing the curve $g = c$ | the same as the curve $g = c$ everywhere}}
+++
review: 2026-09-30 Why the gradients line up

At a constrained max, the level curve of $f$ just touches the constraint. That's why $\\nabla f$ and $\\nabla g$ are parallel: $\\nabla f = \\lambda \\nabla g$.

**Why not the other choices.**
- **perpendicular:** then moving along the constraint would change $f$ as fast as possible, so it couldn't be a max.
- **crossing:** then the constraint would pass into higher values of $f$, so it couldn't be a max.
- **the same everywhere:** only if $f$ is constant on the whole constraint. They only need to touch at that point.
:::

:::problem 11
A particle moves around a circle at constant speed. Its acceleration is:

{{circle 1: zero | *nonzero, pointing toward the center | nonzero, tangent to the circle | nonzero, pointing away from the center}}
+++
review: 2026-10-02 Velocity, speed, and acceleration

Acceleration measures change in velocity, including direction. On a circle at steady speed, the velocity keeps turning, and the acceleration points toward the center.

**Why not the other choices.**
- **zero:** that would mean the velocity never changes, but its direction changes constantly.
- **tangent:** a tangent part would speed the particle up or slow it down, but the speed is constant.
- **away from the center:** that would push the particle off the circle.
:::

:::problem 12
As $t$ goes from $0$ to $\\pi$, the curve $\\mathbf r(t) = \\langle \\cos t,\\; \\sin t \\rangle$ traces:

{{circle 1: the whole unit circle | *the upper half of the unit circle | the lower half of the unit circle | the right half of the unit circle}}
+++
review: 2026-10-02 Curves as vector functions

It starts at $(1, 0)$, passes through $(0, 1)$ at $t = \\tfrac\\pi2$, and ends at $(-1, 0)$. Since $y = \\sin t \\ge 0$ the whole way, that's the upper half.

**Why not the other choices.**
- **whole circle:** that needs $0 \\le t \\le 2\\pi$.
- **lower half:** $y = \\sin t$ is never negative on $[0, \\pi]$.
- **right half:** that would need $x = \\cos t \\ge 0$ throughout, but $x$ reaches $-1$.
:::

:::problem 13
The **speed** of a particle at position $\\mathbf r(t)$ is:

{{circle 1: *the length of its velocity vector, $\\lVert \\mathbf r'(t) \\rVert$ | its velocity vector $\\mathbf r'(t)$ | the length of its acceleration, $\\lVert \\mathbf r''(t) \\rVert$ | its distance from the origin, $\\lVert \\mathbf r(t) \\rVert$}}
+++
review: 2026-10-02 Velocity, speed, and acceleration

Speed is how fast the particle moves: the length of the velocity vector, a number.

**Why not the other choices.**
- **$\\mathbf r'(t)$:** that's the velocity, a vector with a direction.
- **$\\lVert \\mathbf r'' \\rVert$:** that's how fast the velocity is changing.
- **$\\lVert \\mathbf r(t) \\rVert$:** that's how far the particle is from the origin, not how fast it moves.
:::

:::problem 14
You trace the same curve exactly once, but twice as fast (for example $t \\mapsto 2t$ on half the $t$-interval). The arc length you compute:

{{circle 1: *stays the same | doubles | is cut in half | changes sign}}
+++
review: 2026-10-02 Arc length; 2026-10-05 Arc length, again

The speed $\\lVert \\mathbf r' \\rVert$ doubles, but the time interval is half as long, so $\\int \\lVert \\mathbf r' \\rVert\\, dt$ is unchanged. Length belongs to the curve, not to how fast you trace it.

**Why not the other choices.**
- **doubles / cut in half:** the doubled speed and halved time cancel exactly.
- **changes sign:** length is never negative.
:::

:::problem 15
If you reverse the direction of $C$, the value of $\\int_C f\\, ds$:

{{circle 1: *stays the same | flips sign | doubles | becomes $0$}}
+++
review: 2026-10-05 Integrating a function along a curve

$ds$ is a length, always positive, so walking the other way adds up the same values over the same pieces.

**Why not the other choices.**
- **flips sign:** that's what happens to $\\int_C \\mathbf F \\cdot d\\mathbf r$, not $\\int_C f\\, ds$.
- **doubles / becomes $0$:** nothing is added twice or cancelled.
:::

:::problem 16
If you reverse the direction of $C$, the value of $\\int_C \\mathbf F \\cdot d\\mathbf r$:

{{circle 1: stays the same | *flips sign | doubles | becomes $0$}}
+++
review: 2026-10-07 Line integrals of vector fields; 2026-10-09 Pieces and directions

Reversing $C$ reverses $\\mathbf r'$ at every point, so every $\\mathbf F \\cdot \\mathbf r'$ changes sign: $\\int_{-C} \\mathbf F \\cdot d\\mathbf r = -\\int_C \\mathbf F \\cdot d\\mathbf r$.

**Why not the other choices.**
- **stays the same:** that's $\\int_C f\\, ds$. The vector version depends on direction.
- **doubles / becomes $0$:** reversing doesn't add the path twice or cancel it.
:::

:::problem 17
$\\mathbf F = \\nabla f$ and $C$ goes from $A$ to $B$. Then $\\int_C \\mathbf F \\cdot d\\mathbf r$ equals:

{{circle 1: *$f(B) - f(A)$ | $f(A) - f(B)$ | something that depends on the shape of $C$ | $0$}}
+++
review: 2026-10-09 The Fundamental Theorem for Line Integrals

That's the Fundamental Theorem for Line Integrals: end value minus start value.

**Why not the other choices.**
- **$f(A) - f(B)$:** backward. That's the integral from $B$ to $A$.
- **depends on the shape:** for a gradient field, only the endpoints matter.
- **$0$:** only if $C$ is closed ($A = B$) or $f(A) = f(B)$.
:::

:::problem 18
For some closed curve $C$, $\\oint_C \\mathbf F \\cdot d\\mathbf r = 5$. Then $\\mathbf F$:

{{circle 1: *is not conservative | is conservative | is path independent | must have $P_y \\ne Q_x$ everywhere}}
+++
review: 2026-10-09 Path independence; 2026-10-14 Closed loops

A conservative field gives $0$ around every closed curve. One loop giving $5$ rules that out.

**Why not the other choices.**
- **conservative / path independent:** both would force every closed-loop integral to be $0$.
- **$P_y \\ne Q_x$ everywhere:** not necessarily. The swirl field has $P_y = Q_x$ everywhere it's defined and still gives a nonzero loop around its hole.
:::

:::problem 19
$\\mathbf F = \\langle P, Q \\rangle$ satisfies $P_y = Q_x$ everywhere on the plane **minus the origin**. Then $\\mathbf F$:

{{circle 1: *might or might not be conservative there | must be conservative there | can't be conservative there | is the gradient of $P + Q$}}
+++
review: 2026-10-12 Is the condition enough?; 2026-10-12 Why holes matter

The cross-partials test only proves conservative on a region with no holes, and this region has a hole at the origin. Some such fields are conservative there (like $\\langle y, x \\rangle$, the gradient of $xy$), and some aren't (like the swirl field $\\langle -y, x \\rangle/(x^2+y^2)$).

**Why not the other choices.**
- **must be:** the swirl field is a counterexample.
- **can't be:** $\\langle y, x \\rangle = \\nabla(xy)$ is a counterexample.
- **gradient of $P + Q$:** that's not how potentials work. You find $f$ by integrating $P$ in $x$ and matching $Q$.
:::

:::problem 20
A flowline of a vector field $\\mathbf F$ is a curve $\\mathbf r(t)$ whose:

{{circle 1: *velocity equals $\\mathbf F$ at every point, $\\mathbf r'(t) = \\mathbf F(\\mathbf r(t))$ | position equals $\\mathbf F$, $\\mathbf r(t) = \\mathbf F(t)$ | velocity is perpendicular to $\\mathbf F$ | path passes through the points where $\\mathbf F = \\mathbf 0$}}
+++
review: 2026-10-07 Flowlines

A flowline follows the arrows, like a cork in a stream: at every moment its velocity is the field's arrow at that spot.

**Why not the other choices.**
- **position equals $\\mathbf F$:** the field is evaluated *at* the position, $\\mathbf F(\\mathbf r(t))$, and matched to the velocity.
- **perpendicular:** that would cross the arrows instead of following them.
- **passes through zeros of $\\mathbf F$:** a flowline only sits still where $\\mathbf F = \\mathbf 0$. It doesn't have to pass through such points.
:::

:::problem 21
Along a path $C$, the field $\\mathbf F$ points **exactly opposite** to the direction of motion at every point. Then $\\int_C \\mathbf F \\cdot d\\mathbf r$ is:

{{circle 1: *negative | zero | positive | impossible to tell without a formula}}
+++
review: 2026-10-07 Line integrals of vector fields

$\\mathbf F \\cdot \\mathbf r'$ is negative at every point when $\\mathbf F$ points against the motion, so the integral is negative.

**Why not the other choices.**
- **zero:** that needs $\\mathbf F$ perpendicular to the motion.
- **positive:** that needs $\\mathbf F$ to point along the motion.
- **impossible to tell:** the sign of $\\mathbf F \\cdot \\mathbf r'$ is known at every point, so the sign of the integral is known too.
:::

:::problem 22
To check that $\\mathbf F = \\langle P, Q, R \\rangle$ is conservative on all of $\\mathbb R^3$, you check:

{{circle 1: only $P_y = Q_x$ | *$P_y = Q_x$, $P_z = R_x$, and $Q_z = R_y$ | $P_x = Q_y = R_z$ | $P + Q + R = 0$}}
+++
review: 2026-10-14 Conservative fields in 3D

In 3D there are three pairs of mixed partials, one for each pair of variables, and all three must match. $\\mathbb R^3$ has no holes, so matching all three proves conservative.

**Why not the other choices.**
- **only $P_y = Q_x$:** that checks the $x$, $y$ pair and ignores $z$. For example, $\\langle 0, 0, x \\rangle$ passes it but isn't conservative ($P_z = 0 \\ne 1 = R_x$).
- **$P_x = Q_y = R_z$:** these aren't cross-partials. They compare each component with its own variable.
- **$P + Q + R = 0$:** that has nothing to do with being a gradient.
:::
`;export{e as default};