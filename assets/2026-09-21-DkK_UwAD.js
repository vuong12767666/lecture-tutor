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
A surface like $x^2 + 2y^2 + 3z^2 = 6$ is a **level surface** $F(x,y,z) = k$. Last time's argument shows $\\nabla F(P)$ is perpendicular to the surface at $P$, so it's the **normal vector** of the [[tangent plane]]:
$$F_x(P)\\,(x - x_0) + F_y(P)\\,(y - y_0) + F_z(P)\\,(z - z_0) = 0.$$
The **normal line** at $P$ is $\\langle x_0, y_0, z_0 \\rangle + t\\,\\nabla F(P)$.
+++
**Graphs are level surfaces too.** The graph $z = f(x,y)$ is the level surface $F(x,y,z) = f(x,y) - z = 0$. Then $\\nabla F = \\langle f_x, f_y, -1 \\rangle$, and the formula above becomes
$$f_x(x - x_0) + f_y(y - y_0) - (z - z_0) = 0, \\quad\\text{i.e.}\\quad z - z_0 = f_x(x - x_0) + f_y(y - y_0),$$
which is the tangent plane formula from §14.4. So the level-surface version is the more general tool. Use it whenever the surface isn't already solved for $z$.
:::

:::example Tangent plane to an ellipsoid
Find the tangent plane to $x^2 + 2y^2 + 3z^2 = 6$ at $(1, 1, 1)$.

**Normal.** $F = x^2 + 2y^2 + 3z^2$, so $\\nabla F = \\langle 2x, 4y, 6z \\rangle = \\langle 2, 4, 6 \\rangle$ at the point.

**Plane.** $2(x - 1) + 4(y - 1) + 6(z - 1) = 0$, which simplifies to $x + 2y + 3z = 6$.

**Check.** $(1,1,1)$ is on it: $1 + 2 + 3 = 6$. ✓
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
Suppose $f$ has a local max at a point $P$ inside its domain. Moving away from $P$ in any direction can't increase $f$, so $D_{\\mathbf u} f(P) = \\nabla f(P) \\cdot \\mathbf u \\le 0$ for every unit vector $\\mathbf u$. Using both $\\mathbf u$ and $-\\mathbf u$ gives $\\nabla f(P) \\cdot \\mathbf u \\le 0$ and $\\nabla f(P) \\cdot \\mathbf u \\ge 0$, so $\\nabla f(P) \\cdot \\mathbf u = 0$ for every $\\mathbf u$. The only vector with that property is $\\mathbf 0$. (A local min works the same way.) That gives the first rule of optimization:

A [[critical point]] is where $\\nabla f = \\mathbf 0$ (or a partial derivative doesn't exist). **Local maxima and minima can only happen at critical points.**

But a critical point doesn't have to be a max or min. For $f = x^2 - y^2$, the gradient is $\\mathbf 0$ at the origin, yet the surface goes up along the $x$-axis and down along the $y$-axis: a **saddle point**.
+++
**Why $\\nabla f = \\mathbf 0$ at an interior max.** If $\\nabla f \\neq \\mathbf 0$, then moving a tiny step in the direction of $\\nabla f$ increases $f$ (that's what $D_{\\mathbf u} f = \\lVert \\nabla f \\rVert > 0$ means). So the point couldn't have been a max. The same argument with $-\\nabla f$ rules out a min.

**"Interior" matters.** This argument needs room to step in every direction. On the edge of a region, a max can happen where $\\nabla f \\neq \\mathbf 0$. That's why Sep 28's method checks the boundary separately.
:::

:::example Finding a critical point
Find the critical point of $f = x^2 + y^2 - 4x + 6y$.

$\\nabla f = \\langle 2x - 4,\\; 2y + 6 \\rangle = \\mathbf 0$ gives $x = 2$, $y = -3$, and $f(2, -3) = 4 + 9 - 8 - 18 = -13$.

Completing the square, $f = (x - 2)^2 + (y + 3)^2 - 13$, so this is a minimum: $f \\ge -13$ everywhere.
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

**Preview of Lagrange.** If you're stuck walking on the curve $g = c$, then at the highest point *along the curve* you can't gain by moving along it. So $\\nabla f$ has no component along the curve. It's perpendicular to the curve, just like $\\nabla g$. Two vectors perpendicular to the same curve are parallel: $\\nabla f = \\lambda \\nabla g$.
+++
**Constrained extremes don't need $\\nabla f = \\mathbf 0$.** Take $f = x^2 + y^2$ (squared distance from the origin) on the circle $(x - 3)^2 + y^2 = 1$. The closest point to the origin is $(2, 0)$, a constrained min with $f = 4$. But $\\nabla f(2, 0) = \\langle 4, 0 \\rangle \\neq \\mathbf 0$. It is parallel to $\\nabla g = \\langle 2(x - 3), 2y \\rangle = \\langle -2, 0 \\rangle$, though, exactly as Lagrange predicts.
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