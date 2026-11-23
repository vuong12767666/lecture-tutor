var e=`---
title: More on the gradient; overview of optimization
date: 2026-09-21
stewart: 14.6, 14.7, 14.8
source: OpenStax Calculus Volume 3, §4.6 Directional Derivatives and the Gradient, §4.7 Maxima/Minima Problems, and §4.8 Lagrange Multipliers
---

:::recap Last time
- $D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u$ for a unit vector $\\mathbf u$.
- The [[gradient]] $\\nabla f$ points in the direction of fastest increase, with rate $\\lVert \\nabla f \\rVert$.
- $\\nabla f$ is perpendicular to [[level curve|level curves]].
:::

:::check
Warm-up: what is the maximum rate of increase of $f(x,y) = 3x - 4y$ at any point?
answer: 5
???
$\\nabla f = \\langle 3, -4 \\rangle$ everywhere, so the maximum rate is $\\lVert \\nabla f \\rVert = \\sqrt{9 + 16} = 5$.
:::

:::question Today
How does the gradient give the tangent plane to **any** surface? And how do "$\\nabla f = \\mathbf 0$" and "$\\nabla f$ parallel to $\\nabla g$" find maxima and minima?
:::

:::idea Tangent planes to level surfaces
A surface like $x^2 + 2y^2 + 3z^2 = 6$ is a **level surface** $F(x,y,z) = k$. At a point $P = (x_0, y_0, z_0)$ on it, $\\nabla F(P)$ is the **normal vector** of the [[tangent plane]]:
$$F_x(P)\\,(x - x_0) + F_y(P)\\,(y - y_0) + F_z(P)\\,(z - z_0) = 0.$$
The **normal line** at $P$ is $\\langle x_0, y_0, z_0 \\rangle + t\\,\\nabla F(P)$.

**Why $\\nabla F(P)$ is perpendicular to the surface.** Take any curve $\\mathbf r(t)$ that stays on the surface and passes through $P$ at $t = t_0$. Staying on the surface means $F(\\mathbf r(t)) = k$ for every $t$, so its derivative is $0$. By the chain rule,
$$\\frac{d}{dt} F(\\mathbf r(t)) = \\nabla F(\\mathbf r(t)) \\cdot \\mathbf r'(t) = 0.$$
At $t_0$ this says $\\nabla F(P)$ is perpendicular to $\\mathbf r'(t_0)$, the curve's direction as it passes through $P$. Every direction along the surface at $P$ is the direction of some curve on the surface, so $\\nabla F(P)$ is perpendicular to all of them. That's what it means to be the normal of the tangent plane. (This needs $\\nabla F(P) \\neq \\mathbf 0$.)
>>> The argument with numbers, on $x^2 + 2y^2 + 3z^2 = 6$ at $(1, 1, 1)$
1. **The gradient.** $\\nabla F = \\langle 2x, 4y, 6z \\rangle$, so at $(1, 1, 1)$ it's $\\langle 2, 4, 6 \\rangle$.
2. **A curve on the surface.** Take $\\mathbf r(t) = \\langle \\sqrt3 \\cos t,\\; \\sqrt{3/2}\\, \\sin t,\\; 1 \\rangle$. Plugging it in: $3\\cos^2 t + 2 \\cdot \\tfrac32 \\sin^2 t + 3 = 3 + 3 = 6$ for every $t$, so it never leaves the surface.
3. **Where it passes through $(1, 1, 1)$.** Where $\\sqrt3 \\cos t = 1$ and $\\sqrt{3/2}\\,\\sin t = 1$, so $\\cos t = \\tfrac{1}{\\sqrt3} \\approx 0.577$ and $\\sin t = \\sqrt{2/3} \\approx 0.816$.
4. **Its direction there.** $\\mathbf r' = \\langle -\\sqrt3 \\sin t,\\; \\sqrt{3/2}\\, \\cos t,\\; 0 \\rangle = \\langle -\\sqrt2,\\; \\tfrac{1}{\\sqrt2},\\; 0 \\rangle \\approx \\langle -1.414, 0.707, 0 \\rangle$.
5. **Perpendicular.** $\\langle 2, 4, 6 \\rangle \\cdot \\langle -\\sqrt2, \\tfrac{1}{\\sqrt2}, 0 \\rangle = -2\\sqrt2 + 2\\sqrt2 + 0 = 0$. ✓

**Why the dot product is $0$.** Along the curve, $F$ is $6$ at every moment, so it isn't changing: its rate of change is $0$. The chain rule says that rate is $\\nabla F \\cdot \\mathbf r'$.
<<<

**Why the plane's equation looks like that.** A point $(x, y, z)$ is in the plane exactly when the arrow from $P$ to it, $\\langle x - x_0,\\, y - y_0,\\, z - z_0 \\rangle$, is perpendicular to the normal. Writing "$\\nabla F(P) \\cdot \\langle x - x_0,\\, y - y_0,\\, z - z_0 \\rangle = 0$" out in components gives the equation above.
>>> Points on the plane, checked with the dot product
The tangent plane at $(1, 1, 1)$ with normal $\\langle 2, 4, 6 \\rangle$ is $x + 2y + 3z = 6$ (next example).
- **The point $(3, 0, 1)$.** The arrow from $(1, 1, 1)$ to it is $\\langle 2, -1, 0 \\rangle$. Dot with the normal: $4 - 4 + 0 = 0$, so it's perpendicular, and the point is in the plane. Check: $3 + 0 + 3 = 6$ ✓.
- **The point $(2, 1, 1)$.** The arrow is $\\langle 1, 0, 0 \\rangle$. Dot with the normal: $2 \\ne 0$, so the point is not in the plane. Check: $2 + 2 + 3 = 7 \\ne 6$.

Writing the dot product out in components, $2(x - 1) + 4(y - 1) + 6(z - 1) = 0$, is exactly the plane's equation.
<<<

**Graphs are level surfaces too.** The graph $z = f(x,y)$ is the level surface $F(x,y,z) = f(x,y) - z = 0$. Then $\\nabla F = \\langle f_x, f_y, -1 \\rangle$, and the formula above becomes
$$f_x(x - x_0) + f_y(y - y_0) - (z - z_0) = 0, \\quad\\text{i.e.}\\quad z - z_0 = f_x(x - x_0) + f_y(y - y_0),$$
which is the tangent plane formula from §14.4. So the level-surface version is the more general tool. Use it whenever the surface isn't already solved for $z$.
>>> Both formulas on one graph, $z = x^2 + y^2$ at $(1, 2, 5)$
1. **As a level surface.** $F = x^2 + y^2 - z = 0$. Then $\\nabla F = \\langle 2x, 2y, -1 \\rangle = \\langle 2, 4, -1 \\rangle$ at the point.
2. **Level-surface plane.** $2(x - 1) + 4(y - 2) - (z - 5) = 0$, which rearranges to $z = 5 + 2(x - 1) + 4(y - 2)$.
3. **Graph formula.** $f_x = 2x = 2$ and $f_y = 2y = 4$ at $(1, 2)$, so $z = 5 + 2(x - 1) + 4(y - 2)$.
4. **Same plane.** For example, at $(1.1, 2)$ both give $z = 5.2$, and the surface itself gives $1.21 + 4 = 5.21$.
<<<
:::

:::example Tangent plane to an ellipsoid
Find the tangent plane to $x^2 + 2y^2 + 3z^2 = 6$ at $(1, 1, 1)$.

**Normal.** $F = x^2 + 2y^2 + 3z^2$, so $\\nabla F = \\langle 2x, 4y, 6z \\rangle = \\langle 2, 4, 6 \\rangle$ at the point.
>>> Each partial derivative
1. **$F_x$.** Moving in the $x$ direction, $y$ and $z$ don't change, so $2y^2 + 3z^2$ is one number, with derivative $0$. Only $x^2$ changes, giving $2x$. At $(1, 1, 1)$: $2$.
2. **$F_y$.** Only $2y^2$ changes, giving $4y$. At the point: $4$.
3. **$F_z$.** Only $3z^2$ changes, giving $6z$. At the point: $6$.
<<<

**Plane.** $2(x - 1) + 4(y - 1) + 6(z - 1) = 0$, which simplifies to $x + 2y + 3z = 6$.

**Check.** $(1,1,1)$ is on it: $1 + 2 + 3 = 6$. ✓
>>> Simplifying, and checking that the plane hugs the surface
1. **Multiply out.** $2x - 2 + 4y - 4 + 6z - 6 = 0$, so $2x + 4y + 6z = 12$.
2. **Divide by $2$.** $x + 2y + 3z = 6$.
3. **Near the point.** Take $x = 1.1$, $y = 1$. On the ellipsoid, $3z^2 = 6 - 1.21 - 2 = 2.79$, so $z = \\sqrt{0.93} \\approx 0.9644$. On the plane, $3z = 6 - 1.1 - 2 = 2.9$, so $z \\approx 0.9667$. Close to the point, they nearly agree.
<<<
:::

:::check
Which is the tangent plane to the sphere $x^2 + y^2 + z^2 = 9$ at $(1, 2, 2)$?
- [x] $x + 2y + 2z = 9$
- [ ] $x + 2y + 2z = 0$
  why: Right normal, but this plane goes through the origin. Plugging in $(1,2,2)$ gives $1 + 4 + 4 = 9 \\neq 0$, so it misses the point.
- [ ] $2x + 4y + 4z = 9$
  why: Right normal direction, but $(1,2,2)$ gives $2 + 8 + 8 = 18 \\neq 9$, so it misses the point. Doubling the left side means doubling the right side too.
- [ ] $x + y + z = 5$
  why: It does contain $(1,2,2)$, but its normal $\\langle 1,1,1 \\rangle$ isn't parallel to $\\nabla F = \\langle 2,4,4 \\rangle$, so it's tilted wrong.
???
$\\nabla F = \\langle 2x, 2y, 2z \\rangle = \\langle 2, 4, 4 \\rangle$, so the plane is $2(x-1) + 4(y-2) + 4(z-2) = 0$, which is $x + 2y + 2z = 9$.

$x + y + z = 5$ passes through the point but has the wrong normal. $2x + 4y + 4z = 9$ has the right normal but misses the point ($2 + 8 + 8 = 18$).
:::

:::idea Where the gradient is zero
Suppose $f$ has a local max at a point $P$ inside its domain, and $f$ is differentiable there. Here is why $\\nabla f(P)$ must be $\\mathbf 0$.

1. Moving away from $P$ can't increase $f$. So for any unit vector $\\mathbf u$ and small $h > 0$, the difference quotient $\\dfrac{f(P + h\\mathbf u) - f(P)}{h}$ is $\\le 0$. Its limit is $D_{\\mathbf u} f(P) = \\nabla f(P) \\cdot \\mathbf u$, so $\\nabla f(P) \\cdot \\mathbf u \\le 0$.
2. That holds for $-\\mathbf u$ too: $\\nabla f(P) \\cdot (-\\mathbf u) \\le 0$, which means $\\nabla f(P) \\cdot \\mathbf u \\ge 0$. Together, $\\nabla f(P) \\cdot \\mathbf u = 0$ for every unit vector $\\mathbf u$.
3. If $\\nabla f(P)$ weren't $\\mathbf 0$, choosing $\\mathbf u$ in its own direction would give $\\nabla f(P) \\cdot \\mathbf u = \\lVert \\nabla f(P) \\rVert > 0$. So $\\nabla f(P) = \\mathbf 0$.
>>> The three steps with numbers
**At a max, for $f = -(x^2 + y^2)$ at $(0, 0)$**, where $f = 0$ is the largest value.
1. Step $h = 0.1$ in the direction $\\mathbf u = \\langle 1, 0 \\rangle$: $f(0.1, 0) = -0.01$, so the quotient is $\\tfrac{-0.01 - 0}{0.1} = -0.1 \\le 0$.
2. Step the other way, $-\\mathbf u$: $f(-0.1, 0) = -0.01$, quotient $-0.1 \\le 0$. As $h$ shrinks, both quotients go to $0$, so the slope in that direction is $0$.
3. Here $\\nabla f = \\langle -2x, -2y \\rangle = \\langle 0, 0 \\rangle$ at the origin. ✓

**Where the gradient isn't zero, for $f = x^2 + y^2 - 4x + 6y$ at $(0, 0)$.** Here $\\nabla f = \\langle -4, 6 \\rangle$ and $f(0, 0) = 0$.
- A small step along $\\nabla f$, to $(-0.004, 0.006)$, gives $f = 0.052052 > 0$, so $(0, 0)$ isn't a max.
- A small step the other way, to $(0.004, -0.006)$, gives $f = -0.051948 < 0$, so it isn't a min either.

A nonzero gradient always allows one step up and one step down.
<<<

A local min works the same way with the inequalities reversed. That gives the first rule of optimization:

A [[critical point]] is where $\\nabla f = \\mathbf 0$ (or a partial derivative doesn't exist). **Local maxima and minima can only happen at critical points.**

But a critical point doesn't have to be a max or min. For $f = x^2 - y^2$, the gradient is $\\mathbf 0$ at the origin, yet the surface goes up along the $x$-axis and down along the $y$-axis: a **saddle point**.
>>> The saddle with numbers, and why "inside" matters
**The saddle $f = x^2 - y^2$.** $\\nabla f = \\langle 2x, -2y \\rangle$, which is $\\langle 0, 0 \\rangle$ at the origin, where $f = 0$.
- Along the $x$-axis: $f(0.1, 0) = 0.01 > 0$. Higher than at the origin, so the origin isn't a max.
- Along the $y$-axis: $f(0, 0.1) = -0.01 < 0$. Lower, so it isn't a min.

**Why the point must be inside.** The argument steps in every direction from $P$. On the edge of a region you can't. For example, $f = x$ on the square $0 \\le x \\le 1$, $0 \\le y \\le 1$ is largest at the right edge, $x = 1$. There $\\nabla f = \\langle 1, 0 \\rangle \\ne \\mathbf 0$: stepping right would increase $f$, but that step leaves the square. That's why Sep 28's method checks the boundary separately.
<<<
:::

:::example Finding a critical point
Find the critical point of $f = x^2 + y^2 - 4x + 6y$.

$\\nabla f = \\langle 2x - 4,\\; 2y + 6 \\rangle = \\mathbf 0$ gives $x = 2$, $y = -3$, and $f(2, -3) = 4 + 9 - 8 - 18 = -13$.
>>> Each step of solving $\\nabla f = \\mathbf 0$
1. **$f_x$.** The terms with only $y$, $y^2 + 6y$, don't change as $x$ moves, so they give $0$. $x^2 - 4x$ gives $2x - 4$.
2. **$f_y$.** Likewise, $y^2 + 6y$ gives $2y + 6$.
3. **Set both to $0$.** $2x - 4 = 0$ gives $x = 2$. $2y + 6 = 0$ gives $y = -3$. Each equation has only one variable, so they solve separately.
4. **The value there.** $f(2, -3) = 2^2 + (-3)^2 - 4 \\cdot 2 + 6 \\cdot (-3) = 4 + 9 - 8 - 18 = -13$.
<<<

Completing the square, $f = (x - 2)^2 + (y + 3)^2 - 13$, so this is a minimum: $f \\ge -13$ everywhere.
>>> Completing the square, checked
1. **Expand.** $(x - 2)^2 = x^2 - 4x + 4$ and $(y + 3)^2 = y^2 + 6y + 9$. Their sum is $x^2 + y^2 - 4x + 6y + 13$, so subtracting $13$ gives back $f$.
2. **Why it's a minimum.** A square is never negative, so $(x - 2)^2 + (y + 3)^2 \\ge 0$, and it is $0$ only at $(2, -3)$. So $f \\ge 0 - 13 = -13$, with $-13$ reached only there.
3. **With a nearby point.** $f(3, -3) = 9 + 9 - 12 - 18 = -12$, which is $1 + 0 - 13$ ✓, and bigger than $-13$.
<<<
:::

:::check
Find the critical point of $f = x^2 + xy + y^2 - 3x$.
- [x] $(2, -1)$
- [ ] $(1, 1)$
  why: $\\nabla f(1,1) = \\langle 2 + 1 - 3,\\; 1 + 2 \\rangle = \\langle 0, 3 \\rangle \\neq \\mathbf 0$.
- [ ] $(-2, 1)$
  why: $\\nabla f(-2,1) = \\langle -4 + 1 - 3,\\; -2 + 2 \\rangle = \\langle -6, 0 \\rangle \\neq \\mathbf 0$. It satisfies $f_y = 0$ but not $f_x = 0$.
- [ ] $(\\tfrac32, 0)$
  why: $\\nabla f(\\tfrac32, 0) = \\langle 3 - 3,\\; \\tfrac32 \\rangle = \\langle 0, \\tfrac32 \\rangle \\neq \\mathbf 0$. It satisfies $f_x = 0$ but not $f_y = 0$.
???
$f_x = 2x + y - 3 = 0$ and $f_y = x + 2y = 0$. The second gives $x = -2y$, then $-4y + y = 3$, so $y = -1$ and $x = 2$.

Check: $\\nabla f(2,-1) = \\langle 4 - 1 - 3,\\; 2 - 2 \\rangle = \\langle 0, 0 \\rangle$. ✓
:::

:::idea Three kinds of optimization
The next three lectures each handle one kind of problem:

1. **Local max/min** (Sep 25): find where $\\nabla f = \\mathbf 0$, then classify with the second derivative test.
2. **Absolute max/min on a closed, bounded region** (Sep 28): check critical points inside, check the boundary, and compare all the values.
3. **Max/min on a constraint curve $g = c$** (Sep 30): solve $\\nabla f = \\lambda \\nabla g$ with [[lagrange multipliers|Lagrange multipliers]].

**Preview of Lagrange.** If you're stuck walking on the curve $g = c$, then at the highest point *along the curve* you can't gain by moving along it. So $\\nabla f$ has no component along the curve. It's perpendicular to the curve, just like $\\nabla g$. In the plane, all the vectors perpendicular to a curve at a point lie along one line, so those two are parallel: $\\nabla f = \\lambda \\nabla g$. (Sep 30 goes through each step.)
>>> The preview with numbers: closest point on a circle
Take $f = x^2 + y^2$, the squared distance from the origin, on the circle $(x - 3)^2 + y^2 = 1$ (center $(3, 0)$, radius $1$).
1. **The closest point** is $(2, 0)$, where $f = 4$. Other points on the circle are farther: $(3, 1)$ gives $f = 10$, and $(4, 0)$ gives $f = 16$.
2. **$\\nabla f$ isn't zero there.** $\\nabla f = \\langle 2x, 2y \\rangle = \\langle 4, 0 \\rangle$. Off the circle, stepping left would lower $f$, but that step leaves the circle.
3. **But it's parallel to $\\nabla g$.** With $g = (x - 3)^2 + y^2$, $\\nabla g = \\langle 2(x - 3), 2y \\rangle = \\langle -2, 0 \\rangle$ at $(2, 0)$. And $\\langle 4, 0 \\rangle = -2 \\, \\langle -2, 0 \\rangle$, so $\\nabla f = \\lambda \\nabla g$ with $\\lambda = -2$.
4. **Why that happens.** The circle at $(2, 0)$ runs straight up and down, direction $\\langle 0, 1 \\rangle$. Both gradients point left or right, perpendicular to that direction, so moving along the circle doesn't change $f$ at first.
<<<
:::

:::check
You want the largest value of $f = xy$ on the circle $x^2 + y^2 = 8$. Which method fits?
- [ ] The second derivative test
  why: It classifies critical points of $f$ over the whole plane. It doesn't know about being stuck on a curve.
- [ ] Check critical points inside a region, then its boundary
  why: There's no region with an inside here, only the curve itself. (That method uses Lagrange or a parametrization for its boundary step anyway.)
- [x] Lagrange multipliers
- [ ] A directional derivative
  why: That measures how fast $f$ changes in one direction at one point. It doesn't find a max or min.
???
You're restricted to a curve $g(x,y) = 8$, so this is a constrained problem: solve $\\nabla f = \\lambda \\nabla g$ (Sep 30).
:::

:::summary Summary
- Level surface $F = k$: the tangent plane at $P$ has normal $\\nabla F(P)$.
- [[critical point|Critical points]] ($\\nabla f = \\mathbf 0$) are the only candidates for local extremes, but some are saddles.
- Three problem types: local (second derivative test), absolute on a region (interior plus boundary), and constrained (Lagrange).

**Common mistakes:**
- Using the graph formula for a surface not solved for $z$. Use $\\nabla F$ instead.
- Assuming every critical point is a max or a min.
- Expecting $\\nabla f = \\mathbf 0$ at a constrained or boundary extreme.
:::
`;export{e as default};