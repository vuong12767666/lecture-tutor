var e=`---
title: Vector fields and integrating them along curves
date: 2026-10-07
stewart: 16.1, 16.2
source: OpenStax Calculus Volume 3, §6.1 Vector Fields and §6.2 Line Integrals
---

:::recap Last time
$\\displaystyle\\int_C f\\, ds = \\int_a^b f(\\mathbf r(t))\\, \\lVert \\mathbf r'(t) \\rVert\\, dt$ adds up a *number* $f$ along a curve, for mass, length, or averages. Direction doesn't matter.
:::

:::check
Warm-up: what is $\\displaystyle\\int_C 1\\, ds$ when $C$ is the circle of radius $2$?
answer: 4pi
???
$\\int_C 1\\, ds$ is the length of $C$, the circumference $2\\pi \\cdot 2 = 4\\pi$.
:::

:::question Today
What is a vector field? And how do you add up how much a field **pushes you along** a path?
:::

:::idea What a vector field is
A [[vector field]] attaches an arrow to every point:
$$\\mathbf F(x,y) = \\langle P(x,y),\\; Q(x,y) \\rangle \\qquad\\text{(in 3D, add } R(x,y,z)\\text{)}.$$
Examples: wind velocity on a weather map, the flow of water, the force of gravity. A [[gradient]] field $\\nabla f$ is a vector field too, with its arrows crossing the level curves of $f$.

**Sketching.** Plug in a few points and draw $\\mathbf F$ there as an arrow starting at the point.
+++
**Matching formulas to pictures (a common exam question).** Plug in easy points, such as on the axes:
- At $(1, 0)$ and $(0, 1)$, which way should the arrow point?
- Do the arrows get longer far from the origin (like $\\langle x, y \\rangle$) or stay the same (a constant field)?
- Is there symmetry? For example, $\\langle -y, x \\rangle$ always points perpendicular to the line from the origin, so it circles.

Eliminating wrong pictures this way is usually faster than drawing the right one.
:::

:::figure field-gallery
Three fields to recognize: $\\langle x, y \\rangle$ points straight away from the origin, $\\langle -y, x \\rangle$ circles counterclockwise, and $\\langle 1, 0.5 \\rangle$ is the same arrow everywhere. (Arrows are drawn the same length to show direction only.)
:::

:::check
At the point $(1, 2)$, the field $\\mathbf F = \\langle x - y,\\; xy \\rangle$ is:
- [x] $\\langle -1, 2 \\rangle$
- [ ] $\\langle 1, 2 \\rangle$
  why: That's the point $(1,2)$ itself, not the arrow there. The first component is $x - y = -1$.
- [ ] $\\langle -1, 3 \\rangle$
  why: The second component is $xy = 2$, not $x + y = 3$.
- [ ] $\\langle 2, 1 \\rangle$
  why: Neither component matches: $x - y = -1$ and $xy = 2$.
???
$x - y = 1 - 2 = -1$ and $xy = 1 \\cdot 2 = 2$, so $\\mathbf F(1,2) = \\langle -1, 2 \\rangle$.
:::

:::idea Flowlines
A [[flowline]] (also called a streamline or integral curve) is a path that **follows the arrows**: at every moment its velocity equals the field there,
$$\\mathbf r'(t) = \\mathbf F(\\mathbf r(t)).$$
Picture dropping a cork in a stream: the cork's path is a flowline of the water's velocity field.

**Checking a proposed flowline:** compute $\\mathbf r'(t)$, compute $\\mathbf F(\\mathbf r(t))$, and check they're equal for **every** $t$.
+++
**Two examples.**
- For $\\mathbf F = \\langle -y, x \\rangle$, try $\\mathbf r = \\langle \\cos t, \\sin t \\rangle$: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle -\\sin t, \\cos t \\rangle$. ✓ The flowlines are circles.
- For $\\mathbf F = \\langle x, y \\rangle$, try $\\mathbf r = \\langle e^t, 2e^t \\rangle$: $\\mathbf r' = \\langle e^t, 2e^t \\rangle = \\mathbf F(\\mathbf r)$. ✓ The flowlines are rays heading outward, speeding up.

**A trap.** A curve can pass through the right points with the wrong *speed* or direction. Flowlines need the velocity itself to match, not just the shape.
:::

:::check
Which curve is a flowline of $\\mathbf F = \\langle 1,\\; 2x \\rangle$?
- [ ] $\\langle t,\\; 2t \\rangle$
  why: $\\mathbf r' = \\langle 1, 2 \\rangle$, but $\\mathbf F(\\mathbf r) = \\langle 1, 2t \\rangle$. They agree only at $t = 1$, not for every $t$.
- [x] $\\langle t,\\; t^2 \\rangle$
- [ ] $\\langle t^2,\\; t \\rangle$
  why: $\\mathbf r' = \\langle 2t, 1 \\rangle$, but $\\mathbf F(\\mathbf r) = \\langle 1, 2t^2 \\rangle$. The first components already disagree.
- [ ] $\\langle \\cos t,\\; \\sin t \\rangle$
  why: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$, but $\\mathbf F(\\mathbf r) = \\langle 1, 2\\cos t \\rangle$. The first components disagree.
???
For $\\langle t, t^2 \\rangle$: $\\mathbf r' = \\langle 1, 2t \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle 1, 2t \\rangle$. ✓

For $\\langle t, 2t \\rangle$: $\\mathbf r' = \\langle 1, 2 \\rangle$, but $\\mathbf F = \\langle 1, 2t \\rangle$, which only matches at $t = 1$.
:::

:::idea Line integrals of vector fields
To add up how much $\\mathbf F$ pushes **along** a path $C$, use the [[line integral]]
$$\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt.$$
If $\\mathbf F$ is a force, this is the **work** it does on an object moving along $C$.

**Recipe:** (1) parametrize $C$ in the right direction, (2) substitute to get $\\mathbf F(\\mathbf r(t))$, (3) dot it with $\\mathbf r'(t)$, which gives one function of $t$, (4) integrate.

**Sign:** positive if $\\mathbf F$ mostly points along the direction of motion, negative if against it, and zero if it's always perpendicular.
+++
**Why the dot product.** $\\mathbf F \\cdot \\mathbf r'\\, dt = (\\mathbf F \\cdot \\mathbf T)\\, ds$, where $\\mathbf T$ is the unit tangent. $\\mathbf F \\cdot \\mathbf T$ is the part of $\\mathbf F$ pointing along the path. So $\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_C (\\mathbf F \\cdot \\mathbf T)\\, ds$: "force along the path times distance," added up.

**Direction matters now.** Reversing $C$ flips $\\mathbf T$, so the integral changes sign. Compare $\\int_C f\\, ds$, which doesn't care.

**Other notation.** $\\int_C P\\, dx + Q\\, dy$ means the same thing, with $dx = x'(t)\\, dt$ and $dy = y'(t)\\, dt$.
:::

:::figure work-along-curve
$\\mathbf F = \\langle -y, x \\rangle$ and the upper half circle traced counterclockwise. The arrows point along the path the whole way, so the work is positive.
:::

:::example Work along a half circle
$\\mathbf F = \\langle -y, x \\rangle$ along $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\pi$.

$\\mathbf F(\\mathbf r(t)) = \\langle -\\sin t, \\cos t \\rangle$ and $\\mathbf r'(t) = \\langle -\\sin t, \\cos t \\rangle$, so the dot product is $\\sin^2 t + \\cos^2 t = 1$.
$$\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_0^\\pi 1\\, dt = \\pi.$$
:::

:::example Along a segment
$\\mathbf F = \\langle x^2,\\; xy \\rangle$ along the segment from $(0,0)$ to $(1,2)$.

$\\mathbf r(t) = \\langle t, 2t \\rangle$, $0 \\le t \\le 1$, so $\\mathbf r' = \\langle 1, 2 \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle t^2, 2t^2 \\rangle$. The dot product is $t^2 + 4t^2 = 5t^2$.
$$\\int_0^1 5t^2\\, dt = \\frac53.$$
:::

:::check
Find $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r$ for $\\mathbf F = \\langle y, x \\rangle$ along $\\mathbf r(t) = \\langle t, t^2 \\rangle$, $0 \\le t \\le 1$.
answer: 1
???
$\\mathbf F(\\mathbf r) = \\langle t^2, t \\rangle$ and $\\mathbf r' = \\langle 1, 2t \\rangle$, so the dot product is $t^2 + 2t^2 = 3t^2$, and $\\int_0^1 3t^2\\, dt = 1$.
:::

:::check
$\\mathbf F = \\langle 1, 0 \\rangle$ (pushing right) and $C$ is the segment from $(2, 0)$ to $(0, 0)$. The sign of $\\int_C \\mathbf F \\cdot d\\mathbf r$ is:
- [x] negative
- [ ] zero
  why: Zero would need $\\mathbf F$ perpendicular to the motion. Here it points exactly *opposite* to it.
- [ ] positive
  why: Positive would need $\\mathbf F$ to point along the motion, but you move left while $\\mathbf F$ pushes right.
???
You move **left** while $\\mathbf F$ pushes **right**, so the field works against you. With $\\mathbf r = \\langle 2 - 2t, 0 \\rangle$, $\\mathbf F \\cdot \\mathbf r' = -2$, and the integral is $-2$.
:::

:::summary Summary
- A vector field puts an arrow at every point. Match formulas to pictures by plugging in easy points.
- Flowline: $\\mathbf r'(t) = \\mathbf F(\\mathbf r(t))$ for every $t$.
- $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt$ is work, and its sign depends on direction.

| | $\\int_C f\\, ds$ | $\\int_C \\mathbf F \\cdot d\\mathbf r$ |
|---|---|---|
| integrand | $f(\\mathbf r(t))\\,\\lVert \\mathbf r'(t) \\rVert$ | $\\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)$ |
| reverse $C$ | same value | sign flips |
| means | mass, length, total | work, flow along $C$ |

**Common mistakes:**
- Using $\\lVert \\mathbf r' \\rVert$ in a vector line integral, or forgetting it in a scalar one.
- Parametrizing in the wrong direction.
- Checking only that a flowline passes through the right points.
:::
`;export{e as default};