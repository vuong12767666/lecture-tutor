var e=`---
title: Constrained min and max
date: 2026-09-30
stewart: 14.8
source: OpenStax Calculus Volume 3, §4.8 Lagrange Multipliers
---

:::recap Last time
To find absolute extremes on a closed, bounded region: check critical points inside, check the boundary, and compare. The boundary step is itself a problem of maximizing $f$ **on a curve**.
:::

:::check
Warm-up: which of these is a *constrained* optimization problem?
- [ ] Find the local minima of $f = x^4 + y^4 - 4xy$
  why: There's no constraint. You search the whole plane with $\\nabla f = \\mathbf 0$ and the second derivative test.
- [x] Find the point on the circle $x^2 + y^2 = 1$ where $f = x + 2y$ is largest
- [ ] Find where $\\nabla f = \\mathbf 0$ for $f = x^2 + y^2$
  why: That's finding critical points over the whole plane, with no curve to stay on.
???
The second one restricts you to a curve, $g(x,y) = x^2 + y^2 = 1$. That's a constraint.
:::

:::question Today
How do you maximize $f$ when you're stuck on a curve $g = c$? And why do the gradients have to be parallel there?
:::

:::idea Why the gradients line up
Picture walking along the constraint curve $g = c$ while watching the value of $f$. At the highest point *along the curve*, stepping either way along the curve doesn't increase $f$, so the directional derivative of $f$ along the curve is $0$. That means $\\nabla f$ is **perpendicular to the curve**.

But $\\nabla g$ is also perpendicular to the curve, because the curve is a level curve of $g$. Two vectors perpendicular to the same curve at the same point are parallel:
$$\\nabla f = \\lambda\\, \\nabla g.$$

**In pictures:** at a constrained max or min, the level curve of $f$ **just touches** the constraint curve, tangent to it, without crossing.
+++
**Why "just touching" means extreme.** If a level curve $f = k$ *crosses* the constraint, then the constraint passes from the region where $f < k$ to where $f > k$. So you can move along the constraint to a bigger value, and $k$ wasn't the max. At the max, the highest level curve the constraint can reach only touches it.

**The fine print.** This needs $\\nabla g \\neq \\mathbf 0$ on the constraint. For curves like circles that's automatic.
:::

:::figure lagrange-tangent
Level lines of $f = x + 2y$ and the constraint circle $x^2 + y^2 = 5$. The line $f = 5$ just touches the circle at $(1, 2)$: that's the max. The line $f = -5$ touches at $(-1,-2)$: the min. The arrow is $\\nabla f$ at $(1,2)$. It points straight out from the circle, the same direction as $\\nabla g$.
:::

:::check
At a constrained max, the level curve of $f$ through that point is:
- [ ] crossing the constraint curve
  why: If the level curve crossed, the constraint would pass into the region where $f$ is bigger, so moving along it would beat this point. It couldn't be the max.
- [x] tangent to the constraint curve
- [ ] perpendicular to the constraint curve
  why: Then $\\nabla f$ (perpendicular to its level curve) would point *along* the constraint, so moving along the constraint would change $f$ at its fastest possible rate. That's not an extreme.
???
Tangent: it just touches. If it crossed, you could move along the constraint into higher values of $f$.
:::

:::idea The method
To find the max and min of $f$ subject to $g(x,y) = c$:

1. Write the equations $\\nabla f = \\lambda \\nabla g$ together with $g = c$. In 2D that's three equations in $x$, $y$, $\\lambda$:
$$f_x = \\lambda g_x, \\qquad f_y = \\lambda g_y, \\qquad g(x,y) = c.$$
2. Solve for all points $(x, y)$. A common trick is to divide the first two equations to cancel $\\lambda$, after checking you're not dividing by zero.
3. Evaluate $f$ at every solution. If the constraint is closed and bounded (like a circle), the largest value is the max and the smallest is the min.

The value of $\\lambda$ itself is usually not needed.
+++
**The same method in 3D.** For $f(x,y,z)$ with $g(x,y,z) = c$, solve four equations in $x, y, z, \\lambda$. For example, maximize $f = xyz$ with $x + y + z = 3$ and $x, y, z > 0$: the equations $yz = \\lambda$, $xz = \\lambda$, $xy = \\lambda$ force $x = y = z$ (divide pairs, which is safe since all are positive), so $x = y = z = 1$ and the max is $f = 1$.

**What $\\lambda$ means.** $\\lambda$ measures how fast the best value of $f$ changes if you loosen the constraint $c$. You won't need that on the exam.
:::

:::example The figure's problem
Max and min of $f = x + 2y$ on $x^2 + y^2 = 5$.

**Equations.** $1 = 2\\lambda x$, $2 = 2\\lambda y$, and $x^2 + y^2 = 5$. Neither $x$ nor $y$ can be $0$ (that would give $1 = 0$ or $2 = 0$), so dividing is safe: $\\dfrac{1}{2} = \\dfrac{x}{y}$, so $y = 2x$.

**Substitute.** $x^2 + 4x^2 = 5$, so $x = \\pm 1$. The points are $(1, 2)$ and $(-1, -2)$.

**Compare.** $f(1, 2) = 5$ is the max and $f(-1,-2) = -5$ is the min, matching the figure.
:::

:::example Four candidate points
Max and min of $f = xy$ on $x^2 + y^2 = 8$.

**Equations.** $y = 2\\lambda x$, $x = 2\\lambda y$, $x^2 + y^2 = 8$. If $x = 0$, the first equation gives $y = 0$, which isn't on the circle. So $x \\neq 0$, and likewise $y \\neq 0$. Dividing the equations gives $\\dfrac{y}{x} = \\dfrac{x}{y}$, so $x^2 = y^2$.

**Substitute.** $2x^2 = 8$, so $x = \\pm 2$ and $y = \\pm 2$: four points.

**Compare.** $f = 4$ at $(2, 2)$ and $(-2, -2)$: the max. $f = -4$ at $(2, -2)$ and $(-2, 2)$: the min.
:::

:::check
What is the max of $f = 2x + y$ on the circle $x^2 + y^2 = 5$?
answer: 5
???
$2 = 2\\lambda x$ and $1 = 2\\lambda y$ give $x = 2y$. Then $5y^2 = 5$, so $y = \\pm1$: the points $(2, 1)$ and $(-2, -1)$. $f(2, 1) = 5$ is the max (and $-5$ the min).
:::

:::check
What is the minimum of $f = x^2 + y^2$ on the line $x + y = 4$?
answer: 8
???
$2x = \\lambda$ and $2y = \\lambda$ give $x = y$, then $x + y = 4$ gives $(2, 2)$ and $f = 8$. Geometrically, that's the squared distance from the origin to the closest point on the line. (A line isn't bounded, so there's no max, only this min.)
:::

:::idea Lagrange on the boundary
Sep 28's method needs the extremes on the **boundary** of a region. When the boundary is a curve $g = c$, Lagrange multipliers do that step.

**Full procedure on a disk** $g(x,y) \\le c$:
1. Interior critical points ($\\nabla f = \\mathbf 0$ with $g < c$).
2. Boundary candidates from $\\nabla f = \\lambda \\nabla g$, $g = c$.
3. Compare all the values.
+++
**Example.** $f = x^2 + 2y^2$ on the disk $x^2 + y^2 \\le 1$.

1. **Inside:** $\\nabla f = \\langle 2x, 4y \\rangle = \\mathbf 0$ at $(0,0)$, with $f = 0$.
2. **Boundary:** $2x = 2\\lambda x$ and $4y = 2\\lambda y$, so $x(1 - \\lambda) = 0$ and $y(2 - \\lambda) = 0$. If $\\lambda = 1$, then $y = 0$, giving $(\\pm1, 0)$ with $f = 1$. If $\\lambda = 2$, then $x = 0$, giving $(0, \\pm1)$ with $f = 2$. (Both $x = 0$ and $y = 0$ isn't on the circle.)
3. **Compare:** the max is $2$ at $(0, \\pm 1)$ and the min is $0$ at $(0, 0)$.

Notice that writing $x(1 - \\lambda) = 0$ (instead of dividing by $x$) keeps every case.
:::

:::check
What is the absolute max of $f = x^2 + 2y^2$ on the disk $x^2 + y^2 \\le 1$?
- [ ] 0
  why: That's the absolute **min**, at the interior critical point $(0,0)$.
- [ ] 1
  why: That's the value at $(\\pm 1, 0)$, but $(0, \\pm 1)$ gives more: $f = 2$.
- [x] 2
- [ ] 3
  why: Nothing in the disk reaches $3$: $f = x^2 + 2y^2 \\le 2(x^2 + y^2) \\le 2$.
???
$2$, at $(0, \\pm 1)$, found on the boundary. (See "Go deeper" above for the full work.)
:::

:::summary Summary
- At a constrained extreme, the level curve of $f$ is tangent to $g = c$, so $\\nabla f = \\lambda \\nabla g$.
- Solve $\\nabla f = \\lambda \\nabla g$ with $g = c$, then **evaluate $f$ at every solution** and compare.
- On a region: interior critical points, plus Lagrange on the boundary, then compare.

**Common mistakes:**
- Dividing by a variable that could be $0$ and losing solutions. Factor instead.
- Forgetting the constraint equation, so there aren't enough equations.
- Reporting $\\lambda$ instead of the max or min value of $f$.
:::
`;export{e as default};