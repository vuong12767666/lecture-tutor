var e=`---
title: More on the chain rule; directional derivatives and the gradient
date: 2026-09-18
stewart: 14.5, 14.6
source: OpenStax Calculus Volume 3, §4.5 The Chain Rule and §4.6 Directional Derivatives and the Gradient
---

:::recap Last time
The [[chain rule]] for $z = f(x,y)$ where $x$ and $y$ both depend on $t$:
$$\\frac{dz}{dt} = f_x\\,\\frac{dx}{dt} + f_y\\,\\frac{dy}{dt}.$$
Partial derivatives $f_x$ and $f_y$ measure how fast $f$ changes moving due east or due north.
:::

:::check
Warm-up: $z = x^2 y$ with $x = \\cos t$ and $y = \\sin t$. What is $\\dfrac{dz}{dt}$ at $t = 0$?
answer: 1
???
$f_x = 2xy$ and $f_y = x^2$. At $t = 0$: $x = 1$, $y = 0$, so $f_x = 0$, $f_y = 1$, $x'(0) = -\\sin 0 = 0$, $y'(0) = \\cos 0 = 1$.
$$\\frac{dz}{dt} = 0\\cdot 0 + 1\\cdot 1 = 1.$$
:::

:::question Today
$f_x$ and $f_y$ tell you how $f$ changes going east or north. How fast does $f$ change in **any** direction, and which direction makes it increase fastest?
:::

:::idea More on the chain rule
When $x$ and $y$ depend on **two** variables $s$ and $t$, each partial derivative gets its own chain rule:
$$\\frac{\\partial z}{\\partial s} = f_x \\frac{\\partial x}{\\partial s} + f_y \\frac{\\partial y}{\\partial s}, \\qquad \\frac{\\partial z}{\\partial t} = f_x \\frac{\\partial x}{\\partial t} + f_y \\frac{\\partial y}{\\partial t}.$$

**Why it's true.** Start from the linear approximation of $f$ (the tangent plane, §14.4): for small changes $\\Delta x$ and $\\Delta y$,
$$\\Delta z \\approx f_x\\,\\Delta x + f_y\\,\\Delta y.$$
Now change only $s$, by a small $\\Delta s$. Then $x$ changes by $\\Delta x \\approx x_s\\,\\Delta s$ and $y$ changes by $\\Delta y \\approx y_s\\,\\Delta s$ (the definition of the partial derivatives $x_s$ and $y_s$). Substitute both:
$$\\Delta z \\approx f_x\\, x_s\\,\\Delta s + f_y\\, y_s\\,\\Delta s.$$
Divide by $\\Delta s$ and let $\\Delta s \\to 0$. The approximations become exact in the limit, giving $\\dfrac{\\partial z}{\\partial s} = f_x x_s + f_y y_s$. The two terms are the two ways a change in $s$ reaches $z$: through $x$ and through $y$.
>>> The approximation with numbers, for $z = x^2 + y^2$, $x = s\\cos t$, $y = s\\sin t$
Take $s = 2$, $t = 0$, so $x = 2$, $y = 0$, and $z = 4$.
1. **The pieces.** $f_x = 2x = 4$ and $f_y = 2y = 0$. Changing $s$ with $t = 0$ held at $0$: $x_s = \\cos t = 1$ and $y_s = \\sin t = 0$.
2. **A small change.** Let $s$ go from $2$ to $2.01$, so $\\Delta s = 0.01$. Then $x$ goes from $2$ to $2.01$ ($\\Delta x = 0.01 = x_s\\,\\Delta s$), and $y$ stays $0$.
3. **The estimate.** $\\Delta z \\approx f_x\\,\\Delta x + f_y\\,\\Delta y = 4 \\times 0.01 + 0 = 0.04$.
4. **The actual change.** $z = 2.01^2 + 0 = 4.0401$, so $\\Delta z = 0.0401$. Close to $0.04$.
5. **Divide by $\\Delta s$.** $\\frac{0.04}{0.01} = 4$, which is $\\frac{\\partial z}{\\partial s} = f_x x_s + f_y y_s = 4 \\cdot 1 + 0 \\cdot 0 = 4$.

**The same at every point.** Here $z = s^2\\cos^2 t + s^2 \\sin^2 t = s^2$, so $\\frac{\\partial z}{\\partial s} = 2s$. The chain rule gives $(2x)\\cos t + (2y)\\sin t = 2s\\cos^2 t + 2s\\sin^2 t = 2s$. At $s = 2$, both are $4$.
<<<

**Tree diagram.** That's exactly what the tree records. Draw $z$ at the top, branching to $x$ and $y$, each branching to $s$ and $t$. Each path from $z$ down to $s$ is one way $s$ affects $z$, so multiply the derivatives along each path and add the paths.
>>> The tree, used on $z = xy$, $x = s + t$, $y = s - t$
**The paths from $z$ down to $t$.**
- Through $x$: $\\frac{\\partial z}{\\partial x} = y$, then $\\frac{\\partial x}{\\partial t} = 1$. Product: $y \\cdot 1$.
- Through $y$: $\\frac{\\partial z}{\\partial y} = x$, then $\\frac{\\partial y}{\\partial t} = -1$. Product: $x \\cdot (-1)$.

**Add the paths.** $\\frac{\\partial z}{\\partial t} = y - x = (s - t) - (s + t) = -2t$.

**With numbers.** At $s = 3$, $t = 1$: $x = 4$, $y = 2$, and the formula gives $2 - 4 = -2 = -2 \\cdot 1$. Directly, $z = (s + t)(s - t) = s^2 - t^2$: at $t = 1$ it's $8$, and at $t = 1.01$ it's $9 - 1.0201 = 7.9799$. The change is $-0.0201$ over $0.01$, a rate of about $-2$.

**Why this matters today.** With one parameter, the chain rule is a dot product: $\\frac{d}{dt} f(\\mathbf r(t)) = \\langle f_x, f_y \\rangle \\cdot \\langle x'(t), y'(t) \\rangle$. The first vector is the [[gradient]], and that one line is where the directional derivative formula comes from.
<<<
:::

:::check
$z = xy$ with $x = s + t$ and $y = s - t$. Find $\\dfrac{\\partial z}{\\partial t}$ in terms of $t$.
answer: -2t
???
$f_x = y$, $f_y = x$, $x_t = 1$, $y_t = -1$:
$$\\frac{\\partial z}{\\partial t} = y\\cdot 1 + x\\cdot(-1) = (s - t) - (s + t) = -2t.$$
Check: $z = (s+t)(s-t) = s^2 - t^2$, and $\\partial z/\\partial t = -2t$. ✓
:::

:::idea Directional derivatives
Stand at a point $(a, b)$ and walk at unit speed in the direction of a **unit** vector $\\mathbf u = \\langle u_1, u_2 \\rangle$. The [[directional derivative]] $D_{\\mathbf u} f(a,b)$ is how fast $f$ changes as you go:
$$D_{\\mathbf u} f(a,b) = \\lim_{h \\to 0} \\frac{f(a + h u_1,\\; b + h u_2) - f(a,b)}{h}.$$
$f_x$ and $f_y$ are the special cases $\\mathbf u = \\langle 1, 0 \\rangle$ and $\\mathbf u = \\langle 0, 1 \\rangle$.

**Why $D_{\\mathbf u} f = f_x u_1 + f_y u_2$.** The limit above is the derivative at $h = 0$ of the one-variable function
$$g(h) = f(a + h u_1,\\; b + h u_2),$$
which is $f$ along the straight line through $(a,b)$ in direction $\\mathbf u$. Here $x = a + h u_1$ and $y = b + h u_2$ both depend on $h$, with $\\frac{dx}{dh} = u_1$ and $\\frac{dy}{dh} = u_2$. The chain rule gives
$$g'(0) = f_x \\frac{dx}{dh} + f_y \\frac{dy}{dh} = f_x u_1 + f_y u_2.$$
So you never need to compute the limit: the directional derivative is the gradient dotted with $\\mathbf u$.
>>> The limit and the formula, side by side, for $f = x^2 y$ at $(1, 2)$
Take the direction $\\mathbf u = \\langle \\tfrac35, \\tfrac45 \\rangle$ (the next example). Its length is $\\sqrt{0.36 + 0.64} = 1$.
1. **The formula.** $\\nabla f = \\langle 2xy, x^2 \\rangle = \\langle 4, 1 \\rangle$, so $f_x u_1 + f_y u_2 = 4 \\cdot 0.6 + 1 \\cdot 0.8 = 3.2$.
2. **The limit, with $h = 0.01$.** The new point is $(1 + 0.006,\\; 2 + 0.008) = (1.006, 2.008)$, where $f = 1.006^2 \\times 2.008 \\approx 2.03217$. The change is $0.03217$, and dividing by $h = 0.01$ gives about $3.217$.
3. **Smaller $h$ gets closer to $3.2$.** With $h = 0.001$ the quotient is about $3.202$.

**Why $\\mathbf u$ must have length $1$.** Using $\\mathbf v = \\langle 3, 4 \\rangle$ instead gives $4 \\cdot 3 + 1 \\cdot 4 = 16$, five times too big. Since $\\lVert \\mathbf v \\rVert = 5$, stepping by $h\\mathbf v$ moves five times as far, so $f$ changes five times as much. The directional derivative is a rate per unit distance, so divide by the length first.

**Directions given as angles.** If the direction makes angle $\\theta$ with the positive $x$-axis, then $\\mathbf u = \\langle \\cos\\theta, \\sin\\theta \\rangle$, which already has length $1$. For example, $\\theta = 60°$ gives $\\langle 0.5, 0.866 \\rangle$.
<<<
:::

:::theorem Directional derivative formula
If $f$ is differentiable and $\\mathbf u$ is a **unit** vector, then
$$D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u = f_x u_1 + f_y u_2.$$
In 3D, add the term $f_z u_3$.

**Why:** it's the derivative of $f$ along the line through the point in direction $\\mathbf u$, computed with the chain rule (derived just above). In 3D the line has a third coordinate $c + h u_3$, which adds the term $f_z u_3$.
:::

:::example Directional derivative toward a point
Find the rate of change of $f(x,y) = x^2 y$ at $(1, 2)$ in the direction toward $(4, 6)$.

**Direction.** $\\mathbf v = \\langle 4 - 1, 6 - 2 \\rangle = \\langle 3, 4 \\rangle$ with $\\lVert \\mathbf v \\rVert = 5$, so $\\mathbf u = \\langle \\tfrac35, \\tfrac45 \\rangle$.
>>> Turning "toward $(4, 6)$" into a unit vector
1. **The arrow from the start to the target.** End minus start: $\\langle 4 - 1, 6 - 2 \\rangle = \\langle 3, 4 \\rangle$. Using $(4, 6)$ itself as the direction is a common mistake: that would be the arrow from the origin.
2. **Its length.** $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.
3. **Divide by the length.** $\\langle \\tfrac35, \\tfrac45 \\rangle = \\langle 0.6, 0.8 \\rangle$. Same direction, length $\\sqrt{0.36 + 0.64} = 1$.
<<<

**Gradient.** $\\nabla f = \\langle 2xy,\\; x^2 \\rangle = \\langle 4, 1 \\rangle$ at $(1,2)$.

**Dot product.** $D_{\\mathbf u} f(1,2) = 4\\cdot\\tfrac35 + 1\\cdot\\tfrac45 = \\tfrac{16}{5}.$
>>> The gradient and the dot product, step by step
1. **$f_x$.** In $x^2 y$, $y$ doesn't change as $x$ moves, so it acts like a number in front: $f_x = 2xy$. At $(1, 2)$: $4$.
2. **$f_y$.** Now $x^2$ acts like a number: $f_y = x^2$. At $(1, 2)$: $1$.
3. **Dot product.** $\\langle 4, 1 \\rangle \\cdot \\langle 0.6, 0.8 \\rangle = 2.4 + 0.8 = 3.2 = \\tfrac{16}{5}$.
4. **What it means.** Walking from $(1, 2)$ toward $(4, 6)$, $f$ goes up about $3.2$ for each unit of distance. A step of $0.01$ raises $f$ by about $0.032$.
<<<
:::

:::check
For $f = x^2 + y^2$ at $(1,1)$, what is the directional derivative in the direction of $\\langle 1, -1 \\rangle$?
answer: 0
???
$\\nabla f = \\langle 2x, 2y \\rangle = \\langle 2, 2 \\rangle$ and $\\mathbf u = \\tfrac{1}{\\sqrt 2}\\langle 1, -1 \\rangle$, so $D_{\\mathbf u} f = \\tfrac{1}{\\sqrt 2}(2 - 2) = 0$.

That makes sense: at $(1,1)$, the direction $\\langle 1, -1 \\rangle$ is tangent to the circle $x^2 + y^2 = 2$, a level curve, so $f$ isn't changing at that instant.
:::

:::idea The gradient
The **gradient** collects all the partial derivatives into one vector:
$$\\nabla f = \\langle f_x, f_y \\rangle \\quad\\text{(add } f_z \\text{ in 3D).}$$

**Why the gradient answers today's question.** Use the dot product formula $\\mathbf a \\cdot \\mathbf b = \\lVert \\mathbf a \\rVert\\,\\lVert \\mathbf b \\rVert \\cos\\theta$ (from §12.3), with $\\theta$ the angle between $\\nabla f$ and $\\mathbf u$, and $\\lVert \\mathbf u \\rVert = 1$:
$$D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u = \\lVert \\nabla f \\rVert \\cos\\theta.$$
At a given point, $\\lVert \\nabla f \\rVert$ is a fixed number, so the rate depends only on $\\cos\\theta$, which ranges from $-1$ to $1$:
- $\\cos\\theta = 1$ (that is, $\\theta = 0$, $\\mathbf u$ points the same way as $\\nabla f$) gives the **largest** rate, $\\lVert \\nabla f \\rVert$.
- $\\cos\\theta = -1$ ($\\mathbf u$ points opposite $\\nabla f$) gives the **most negative** rate, $-\\lVert \\nabla f \\rVert$.
- $\\cos\\theta = 0$ ($\\mathbf u$ perpendicular to $\\nabla f$) gives rate $0$.
>>> Checking it with real numbers
Take $f = x^2 y$ at $(1, 2)$, where $\\nabla f = \\langle 4, 1 \\rangle$ and $\\lVert \\nabla f \\rVert = \\sqrt{17} \\approx 4.12$. Move a distance $0.01$ in five different unit directions and compare how much $f$ actually changes:

| direction $\\mathbf u$ | angle $\\theta$ from $\\nabla f$ | $D_{\\mathbf u} f = 4.12\\cos\\theta$ | actual change in $f$ |
|---|---|---|---|
| $\\tfrac{1}{\\sqrt{17}}\\langle 4, 1 \\rangle$, same as $\\nabla f$ | $0°$ | $4.12$ | $+0.0415$ |
| $\\langle 1, 0 \\rangle$ | $14°$ | $4.00$ | $+0.0402$ |
| $\\langle 0, 1 \\rangle$ | $76°$ | $1.00$ | $+0.0100$ |
| $\\tfrac{1}{\\sqrt{17}}\\langle -1, 4 \\rangle$, perpendicular | $90°$ | $0$ | about $0$ |
| $\\tfrac{1}{\\sqrt{17}}\\langle -4, -1 \\rangle$, opposite | $180°$ | $-4.12$ | $-0.0410$ |

Each actual change is close to $D_{\\mathbf u} f \\times 0.01$. The direction of $\\nabla f$ gives the biggest increase, the perpendicular direction leaves $f$ almost unchanged, and the opposite direction gives the biggest decrease.
<<<
:::

:::theorem Properties of the gradient
At a point where $\\nabla f \\neq \\mathbf 0$:
- $f$ increases fastest in the direction of $\\nabla f$, at rate $\\lVert \\nabla f \\rVert$.
- $f$ decreases fastest in the direction of $-\\nabla f$, at rate $-\\lVert \\nabla f \\rVert$.
- $f$ doesn't change ($D_{\\mathbf u} f = 0$) in directions perpendicular to $\\nabla f$.

**Why:** all three come from $D_{\\mathbf u} f = \\lVert \\nabla f \\rVert \\cos\\theta$, derived above, at $\\theta = 0°$, $180°$, and $90°$.
:::

:::example Steepest direction, in 2D and 3D
**2D.** For $f = x^2 y$ at $(1, 2)$, $\\nabla f = \\langle 4, 1 \\rangle$. The fastest increase is in the direction $\\langle 4, 1 \\rangle$, at rate $\\sqrt{16 + 1} = \\sqrt{17}$. The fastest decrease is toward $\\langle -4, -1 \\rangle$.
>>> Why the rate is the length of the gradient
1. **The unit vector in the gradient's direction.** $\\langle 4, 1 \\rangle$ has length $\\sqrt{17} \\approx 4.123$, so $\\mathbf u = \\langle \\tfrac{4}{\\sqrt{17}}, \\tfrac{1}{\\sqrt{17}} \\rangle \\approx \\langle 0.970, 0.243 \\rangle$.
2. **The rate in that direction.** $\\nabla f \\cdot \\mathbf u = \\frac{16 + 1}{\\sqrt{17}} = \\frac{17}{\\sqrt{17}} = \\sqrt{17}$.
3. **Compare another direction.** Due east, $\\langle 1, 0 \\rangle$, gives $4$, a little less than $4.123$.
<<<

**3D.** For $f = xyz$ at $(1, 2, 3)$ in the direction of $\\langle 1, 2, 2 \\rangle$: $\\nabla f = \\langle yz, xz, xy \\rangle = \\langle 6, 3, 2 \\rangle$, and $\\lVert\\langle 1,2,2\\rangle\\rVert = 3$, so
$$D_{\\mathbf u} f = \\frac{6 + 6 + 4}{3} = \\frac{16}{3}.$$
>>> The 3D steps
1. **Each partial.** $f_x$: $y$ and $z$ don't change as $x$ moves, so $f_x = yz = 6$. Likewise $f_y = xz = 3$ and $f_z = xy = 2$.
2. **Unit vector.** $\\langle 1, 2, 2 \\rangle$ has length $\\sqrt{1 + 4 + 4} = 3$, so $\\mathbf u = \\langle \\tfrac13, \\tfrac23, \\tfrac23 \\rangle$.
3. **Dot product.** $6 \\cdot \\tfrac13 + 3 \\cdot \\tfrac23 + 2 \\cdot \\tfrac23 = 2 + 2 + \\tfrac43 = \\tfrac{16}{3} \\approx 5.33$.
<<<
:::

:::check
What is the maximum rate of increase of $f = x y^2$ at the point $(1, 3)$?
answer: sqrt(117)
???
$\\nabla f = \\langle y^2,\\; 2xy \\rangle = \\langle 9, 6 \\rangle$ at $(1, 3)$. The maximum rate is $\\lVert \\nabla f \\rVert = \\sqrt{81 + 36} = \\sqrt{117} = 3\\sqrt{13} \\approx 10.8$.
:::

:::idea Gradients and level curves
**The gradient is perpendicular to the [[level curve]] through the point.**

**Why.** Walk along a level curve $f(x,y) = c$ with some path $\\mathbf r(t)$. Then $f(\\mathbf r(t)) = c$ stays constant, so by the chain rule
$$0 = \\frac{d}{dt} f(\\mathbf r(t)) = \\nabla f \\cdot \\mathbf r'(t).$$
A zero dot product means $\\nabla f$ is perpendicular to the curve's tangent $\\mathbf r'(t)$.

The same argument in 3D shows $\\nabla F$ is perpendicular to the level *surface* $F(x,y,z) = k$. That's how you'll find tangent planes on Sep 21.
>>> The argument with numbers, on the circle $x^2 + y^2 = 2$
Take $f = x^2 + y^2$ and its level curve $f = 2$, the circle of radius $\\sqrt2$, traced as $\\mathbf r(t) = \\langle \\sqrt2\\cos t, \\sqrt2\\sin t \\rangle$.
1. **The point $(1, 1)$** is at $t = \\tfrac{\\pi}{4}$. There $\\nabla f = \\langle 2x, 2y \\rangle = \\langle 2, 2 \\rangle$.
2. **The curve's direction.** $\\mathbf r'(t) = \\langle -\\sqrt2 \\sin t, \\sqrt2 \\cos t \\rangle = \\langle -1, 1 \\rangle$ at $t = \\tfrac{\\pi}{4}$.
3. **Dot product.** $\\langle 2, 2 \\rangle \\cdot \\langle -1, 1 \\rangle = -2 + 2 = 0$: perpendicular.
4. **Why.** $f$ is $2$ at every point of the circle, so walking along it, $f$ doesn't change. Its rate of change, $\\nabla f \\cdot \\mathbf r'$, must be $0$.

**Reading a contour map.** $\\nabla f$ crosses each level curve at a right angle, toward higher values. It's longer where level curves are close together: if neighboring curves are a distance $\\Delta s$ apart and differ by $\\Delta c$, then $\\lVert \\nabla f \\rVert \\approx \\Delta c / \\Delta s$. For example, the circles $f = 2$ and $f = 2.1$ have radii $\\sqrt2$ and $\\sqrt{2.1}$, so they're about $0.0349$ apart. Then $\\frac{0.1}{0.0349} \\approx 2.86$, close to $\\lVert \\langle 2, 2 \\rangle \\rVert \\approx 2.83$.
<<<
:::

:::figure gradient-level-curves
Level curves of $f = x^2 + 2y^2$ (ellipses) with $\\nabla f$ drawn at several points. Every arrow crosses its level curve at a right angle and points outward, toward higher values.
:::

:::check
On a contour map, the gradient $\\nabla f$ at a point points:
- [ ] along the level curve through that point
  why: Moving along a level curve doesn't change $f$ at all, so that's the direction of *zero* change, not fastest increase.
- [x] across the level curve, toward higher values
- [ ] across the level curve, toward lower values
  why: That's $-\\nabla f$, the direction of fastest *decrease*.
???
$\\nabla f$ is perpendicular to the level curve and points in the direction of fastest **increase**.
:::

:::summary Summary
- [[chain rule|Chain rule]] with a tree: multiply along each path, add the paths.
- $D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u$, with $\\mathbf u$ a **unit** vector.
- $\\nabla f = \\langle f_x, f_y \\rangle$ points in the direction of fastest increase, with rate $\\lVert \\nabla f \\rVert$. The opposite direction is the fastest decrease.
- $\\nabla f$ is perpendicular to level curves (and $\\nabla F$ to level surfaces).

**Common mistakes:**
- Forgetting to make the direction a unit vector.
- Using a point's coordinates as the direction. "Toward $(4,6)$ from $(1,2)$" means $\\langle 3, 4 \\rangle$.
- Saying the maximum rate is $\\nabla f$ (a vector) when it's $\\lVert \\nabla f \\rVert$ (a number).
:::
`;export{e as default};