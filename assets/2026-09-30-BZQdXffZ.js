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
Let $\\mathbf r(t)$ trace the constraint curve $g = c$, and say $f$ is largest along it at $\\mathbf r(t_0)$.

*Step 1: $\\nabla f$ is perpendicular to the curve.* The one-variable function $f(\\mathbf r(t))$ has its max at $t_0$, so its derivative is $0$ there (Calc I). By the chain rule,
$$\\frac{d}{dt} f(\\mathbf r(t)) = \\nabla f \\cdot \\mathbf r'(t) = 0 \\quad \\text{at } t_0.$$
So $\\nabla f$ is **perpendicular to the curve's tangent** $\\mathbf r'(t_0)$.
>>> Step 1 with numbers: $f = x + 2y$ around the circle $x^2 + y^2 = 5$
Trace the circle as $\\mathbf r(t) = \\langle \\sqrt5 \\cos t, \\sqrt5 \\sin t \\rangle$. Along it, $f$ becomes the one-variable function $f(\\mathbf r(t)) = \\sqrt5 \\cos t + 2\\sqrt5 \\sin t$.
1. **Its largest value** is at $(1, 2)$, where $f = 5$. Nearby points on the circle give less: $(1.1, 1.947)$ gives about $4.994$, and $(0.9, 2.047)$ gives about $4.994$.
2. **So its derivative is $0$ there**, as at any max in Calc I.
3. **The chain rule says that derivative is $\\nabla f \\cdot \\mathbf r'$.** At $(1, 2)$ the circle's direction is $\\langle -2, 1 \\rangle$, and $\\nabla f = \\langle 1, 2 \\rangle$. The dot product is $-2 + 2 = 0$. So $\\nabla f$ is perpendicular to the circle there.

**Compare a point that isn't the max.** At $(2, 1)$ the circle's direction is $\\langle -1, 2 \\rangle$, and $\\nabla f \\cdot \\langle -1, 2 \\rangle = -1 + 4 = 3 \\ne 0$. So moving counterclockwise from $(2, 1)$ still increases $f$: from $4$ there up to $5$ at $(1, 2)$.
<<<

*Step 2: $\\nabla g$ is perpendicular to the curve too.* The curve stays on $g = c$, so $g(\\mathbf r(t)) = c$ for every $t$. A constant has derivative $0$, so by the chain rule $\\nabla g \\cdot \\mathbf r'(t) = 0$.
>>> Steps 2 and 3 with numbers, at $(1, 2)$
1. **$\\nabla g$.** $g = x^2 + y^2$, so $\\nabla g = \\langle 2x, 2y \\rangle = \\langle 2, 4 \\rangle$ at $(1, 2)$.
2. **Perpendicular to the circle.** $\\langle 2, 4 \\rangle \\cdot \\langle -2, 1 \\rangle = -4 + 4 = 0$. This is true at every point of the circle, because $g$ is $5$ everywhere on it and so doesn't change as you move along it.
3. **Parallel.** The vectors perpendicular to $\\langle -2, 1 \\rangle$ are the multiples of $\\langle 1, 2 \\rangle$, for example $\\langle 2, 4 \\rangle$ and $\\langle -3, -6 \\rangle$. Both $\\nabla f = \\langle 1, 2 \\rangle$ and $\\nabla g = \\langle 2, 4 \\rangle$ are among them, and $\\langle 1, 2 \\rangle = \\tfrac12 \\langle 2, 4 \\rangle$. So $\\nabla f = \\lambda \\nabla g$ with $\\lambda = \\tfrac12$.
<<<

*Step 3: so they're parallel.* In the plane, the vectors perpendicular to a tangent vector $\\langle a, b \\rangle$ are exactly the multiples of $\\langle -b, a \\rangle$: they all lie along one line. $\\nabla f$ and $\\nabla g$ are both on that line, so one is a multiple of the other:
$$\\nabla f = \\lambda\\, \\nabla g.$$
This needs $\\nabla g \\neq \\mathbf 0$ on the constraint, so there's something to be a multiple of. For circles and lines, that's automatic.

The same three steps work at a constrained min, since its derivative along the curve is $0$ too.

**In pictures:** at a constrained max or min, the level curve of $f$ **just touches** the constraint curve, tangent to it, without crossing.
>>> Crossing vs touching, with numbers
**A level line that crosses.** The line $f = x + 2y = 4$ passes through $(2, 1)$, which is on the circle. On one side of that line $f < 4$, on the other $f > 4$. The circle goes from one side to the other there: $(2.1, 0.768)$ on the circle has $f \\approx 3.64$, and $(1.9, 1.179)$ has $f \\approx 4.26$. So moving along the circle reaches values above $4$, and $4$ isn't the max.

**The level line that touches.** The line $x + 2y = 5$ meets the circle only at $(1, 2)$. Every other point of the circle has $f < 5$, so the circle never gets to the side where $f > 5$. That's why $5$ is the max.
<<<
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

**Why step 3 finds the answer.** Every constrained max and min satisfies these equations (that's what the steps above showed), so the true max and min are among your solutions. A closed, bounded constraint like a circle is guaranteed to have both (Extreme Value Theorem, Sep 28). But the solutions can include other points too, such as the min when you're looking for the max, so you compare values instead of trusting any single solution.
>>> Why compare, with numbers, and the same method in 3D
**Why compare.** For $f = x + 2y$ on $x^2 + y^2 = 5$, the equations give two points, $(1, 2)$ and $(-1, -2)$. Both satisfy $\\nabla f = \\lambda \\nabla g$: one with $\\lambda = \\tfrac12$, the other with $\\lambda = -\\tfrac12$. The equations alone don't say which is the max. Plugging in does: $f(1, 2) = 5$ and $f(-1, -2) = -5$.

**In 3D:** maximize $f = xyz$ with $x + y + z = 3$ and $x, y, z > 0$.
1. **Equations.** $\\nabla f = \\langle yz, xz, xy \\rangle$ and $\\nabla g = \\langle 1, 1, 1 \\rangle$, so $yz = \\lambda$, $xz = \\lambda$, $xy = \\lambda$.
2. **Divide pairs.** $yz = xz$ with $z > 0$ gives $y = x$. Likewise $xz = xy$ gives $z = y$. So $x = y = z$.
3. **Constraint.** $3x = 3$, so $x = y = z = 1$, and $f = 1$.
4. **Spot check.** Another point on the plane, $(1.5, 1, 0.5)$, gives $f = 0.75 < 1$.

It works for the same reason as in 2D: $\\nabla f$ and $\\nabla g$ are both perpendicular to the surface $g = c$ at the max, and those vectors all lie along one line.

**What $\\lambda$ means.** It measures how fast the best value of $f$ changes if you loosen the constraint $c$. You won't need that on the exam.
<<<
:::

:::example The figure's problem
Max and min of $f = x + 2y$ on $x^2 + y^2 = 5$.

**Equations.** $1 = 2\\lambda x$, $2 = 2\\lambda y$, and $x^2 + y^2 = 5$. Neither $x$ nor $y$ can be $0$ (that would give $1 = 0$ or $2 = 0$), so dividing is safe: $\\dfrac{1}{2} = \\dfrac{x}{y}$, so $y = 2x$.
>>> Writing the equations, and why dividing is safe
1. **The gradients.** $\\nabla f = \\langle 1, 2 \\rangle$ (the same at every point), and $\\nabla g = \\langle 2x, 2y \\rangle$.
2. **$\\nabla f = \\lambda \\nabla g$, one component at a time.** First components: $1 = \\lambda \\cdot 2x$. Second: $2 = \\lambda \\cdot 2y$.
3. **Why $x$ can't be $0$.** If $x = 0$, the first equation would say $1 = 0$. Same for $y$ with the second equation. So neither is $0$, and neither is $\\lambda$.
4. **Divide the first by the second.** $\\frac{1}{2} = \\frac{2\\lambda x}{2\\lambda y} = \\frac{x}{y}$. The $2\\lambda$ cancels. Cross-multiplying, $y = 2x$.
5. **For example,** at $(1, 2)$: $\\nabla g = \\langle 2, 4 \\rangle$, and with $\\lambda = \\tfrac12$, $\\lambda \\nabla g = \\langle 1, 2 \\rangle = \\nabla f$ ✓. And $y = 2 = 2 \\cdot 1$ ✓.
<<<

**Substitute.** $x^2 + 4x^2 = 5$, so $x = \\pm 1$. The points are $(1, 2)$ and $(-1, -2)$.

**Compare.** $f(1, 2) = 5$ is the max and $f(-1,-2) = -5$ is the min, matching the figure.
>>> Substituting and comparing
1. **Put $y = 2x$ into the circle.** $x^2 + (2x)^2 = x^2 + 4x^2 = 5x^2 = 5$, so $x^2 = 1$ and $x = 1$ or $x = -1$. Don't forget the negative one.
2. **Find $y$.** $y = 2x$: the points are $(1, 2)$ and $(-1, -2)$. Both are on the circle: $1 + 4 = 5$ ✓.
3. **Compare.** $f(1, 2) = 1 + 4 = 5$ and $f(-1, -2) = -1 - 4 = -5$.
4. **Why these are really the max and min.** The circle is closed and bounded, so $f$ has a max and a min on it, and each one satisfies the equations. These are the only two solutions, so the larger is the max and the smaller is the min. Spot check: $(2, 1)$ on the circle gives $4$, in between.
<<<
:::

:::example Four candidate points
Max and min of $f = xy$ on $x^2 + y^2 = 8$.

**Equations.** $y = 2\\lambda x$, $x = 2\\lambda y$, $x^2 + y^2 = 8$. If $x = 0$, the first equation gives $y = 0$, which isn't on the circle. So $x \\neq 0$, and likewise $y \\neq 0$. Dividing the equations gives $\\dfrac{y}{x} = \\dfrac{x}{y}$, so $x^2 = y^2$.
>>> Each step, with the zero cases checked
1. **The gradients.** $\\nabla f = \\langle y, x \\rangle$ and $\\nabla g = \\langle 2x, 2y \\rangle$. Componentwise: $y = 2\\lambda x$ and $x = 2\\lambda y$.
2. **Rule out $x = 0$.** The first equation would give $y = 2\\lambda \\cdot 0 = 0$. But $(0, 0)$ isn't on the circle, since $0 + 0 \\ne 8$. So $x \\ne 0$. The same argument with the second equation gives $y \\ne 0$.
3. **Divide.** $\\frac{y}{x} = \\frac{2\\lambda x}{2\\lambda y} = \\frac{x}{y}$. Cross-multiplying: $y^2 = x^2$.
4. **What $x^2 = y^2$ means.** $y = x$ or $y = -x$. For example, $(2, 2)$ and $(2, -2)$ both have $x^2 = y^2 = 4$.
<<<

**Substitute.** $2x^2 = 8$, so $x = \\pm 2$ and $y = \\pm 2$: four points.

**Compare.** $f = 4$ at $(2, 2)$ and $(-2, -2)$: the max. $f = -4$ at $(2, -2)$ and $(-2, 2)$: the min.
>>> Substituting, and all four values
1. **Put $y^2 = x^2$ into the circle.** $x^2 + x^2 = 2x^2 = 8$, so $x^2 = 4$ and $x = \\pm 2$. Likewise $y = \\pm 2$.
2. **All four sign choices are on the circle:** $(2, 2)$, $(2, -2)$, $(-2, 2)$, $(-2, -2)$, each with $4 + 4 = 8$ ✓.
3. **Values of $f = xy$.** $2 \\cdot 2 = 4$, $2 \\cdot (-2) = -4$, $(-2) \\cdot 2 = -4$, $(-2)(-2) = 4$.
4. **Spot check.** The point $(\\sqrt8, 0) \\approx (2.83, 0)$ is on the circle, with $f = 0$, between $-4$ and $4$.
<<<
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
>>> The full procedure on $f = x^2 + 2y^2$, disk $x^2 + y^2 \\le 1$
1. **Inside.** $\\nabla f = \\langle 2x, 4y \\rangle = \\mathbf 0$ only at $(0, 0)$, which is inside ($0 < 1$). There $f = 0$.
2. **Boundary equations.** $\\nabla g = \\langle 2x, 2y \\rangle$, so $2x = 2\\lambda x$ and $4y = 2\\lambda y$. Move everything to one side and factor: $x(1 - \\lambda) = 0$ and $y(2 - \\lambda) = 0$.
3. **The cases.** A product is $0$ when a factor is $0$.
   - If $x \\ne 0$, then $\\lambda = 1$. The second equation becomes $y(2 - 1) = 0$, so $y = 0$. On the circle, $x = \\pm 1$: the points $(\\pm 1, 0)$, with $f = 1$.
   - If $x = 0$, the circle forces $y = \\pm 1$, which isn't $0$, so $\\lambda = 2$: the points $(0, \\pm 1)$, with $f = 2$.
4. **Compare** $0$, $1$, $2$. The max is $2$ at $(0, \\pm 1)$ and the min is $0$ at $(0, 0)$. Spot check: $(0.6, 0.8)$ on the circle gives $0.36 + 1.28 = 1.64$, in between.

Dividing $2x = 2\\lambda x$ by $x$ would have lost the case $x = 0$, and with it the max.
<<<
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
$2$, at $(0, \\pm 1)$, found on the boundary. (The Go deeper under "Lagrange on the boundary" has the full work.)
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