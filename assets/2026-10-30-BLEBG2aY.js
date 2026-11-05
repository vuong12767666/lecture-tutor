var e=`---
title: Changing coordinates I
date: 2026-10-30
stewart: 15.9
source: OpenStax Calculus Volume 3, §5.7 Change of Variables in Multiple Integrals
---

:::recap Last time
- Polar, cylindrical, and spherical coordinates turn round regions into ones with number limits.
- Each comes with a factor for the size of a small piece: $dA = r\\, dr\\, d\\theta$, $dV = r\\, dz\\, dr\\, d\\theta$, and $dV = \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$.
:::

:::check
Warm-up: use polar coordinates to find the area of the disk $x^2 + y^2 \\le 9$.
answer: 9pi
???
The disk is $0 \\le r \\le 3$, $0 \\le \\theta \\le 2\\pi$, and $dA = r\\, dr\\, d\\theta$:
$$\\int_0^{2\\pi}\\int_0^3 r\\, dr\\, d\\theta = 2\\pi \\cdot \\frac{9}{2} = 9\\pi.$$
That matches $\\pi \\cdot 3^2$. Without the $r$ you'd get $6\\pi$, which is wrong.
:::

:::question Today
Polar coordinates are one way of changing coordinates. What if a region is a tilted square, or is bounded by lines like $x + y = 2$ and $x - y = 0$? How do you make up your own coordinates for it, and how do you find the factor that plays the role of the $r$ in $r\\, dr\\, d\\theta$?
:::

:::idea Transformations
A **transformation** $T$ takes a point $(u, v)$ of one plane to a point $(x, y)$ of another:
$$x = x(u, v), \\qquad y = y(u, v).$$
It carries a region $S$ of the $uv$-plane to a region $D$ of the $xy$-plane, called the **image** of $S$.

**Polar coordinates are one.** $x = r\\cos\\theta$, $y = r\\sin\\theta$ takes the rectangle $0 \\le r \\le 2$, $0 \\le \\theta \\le 2\\pi$ in the $r\\theta$-plane to the disk of radius $2$. That's why a disk gets number limits in polar: in the new coordinates, it *is* a rectangle.

**A new one.** $x = \\tfrac{u + v}{2}$, $y = \\tfrac{u - v}{2}$. Solving for $u$ and $v$ gives
$$u = x + y, \\qquad v = x - y.$$
The square $S$: $0 \\le u \\le 2$, $0 \\le v \\le 2$ goes to the tilted square $D$: $0 \\le x + y \\le 2$, $0 \\le x - y \\le 2$, with corners $(0, 0)$, $(1, 1)$, $(2, 0)$, and $(1, -1)$.
>>> Each step of the new transformation, worked out
**What a transformation does.** It's a rule that gives every point new labels. Here the old labels are $(x, y)$ and the new ones are $(u, v)$, with $x = \\tfrac{u + v}{2}$ and $y = \\tfrac{u - v}{2}$. For example, $(u, v) = (2, 0)$ is the point $(x, y) = (1, 1)$.

**Getting $u$ and $v$ from $x$ and $y$.** Add the two formulas: $x + y = \\tfrac{u + v}{2} + \\tfrac{u - v}{2} = \\tfrac{2u}{2} = u$. Subtract them: $x - y = \\tfrac{u + v}{2} - \\tfrac{u - v}{2} = \\tfrac{2v}{2} = v$. So $u = x + y$ and $v = x - y$. Check with $(1, 1)$: $u = 2$, $v = 0$ ✓.

**Where the square goes, from the rules.** The square $S$ is the points with $0 \\le u \\le 2$ and $0 \\le v \\le 2$. Replace $u$ with $x + y$ and $v$ with $x - y$: $0 \\le x + y \\le 2$ and $0 \\le x - y \\le 2$. Those are exactly the rules for $D$, so no drawing is needed.

**The corners.** Put each corner of $S$ into $x = \\tfrac{u + v}{2}$, $y = \\tfrac{u - v}{2}$:
- $(u, v) = (0, 0)$ gives $(0, 0)$.
- $(2, 0)$ gives $\\big(\\tfrac22, \\tfrac22\\big) = (1, 1)$.
- $(2, 2)$ gives $\\big(\\tfrac42, \\tfrac02\\big) = (2, 0)$.
- $(0, 2)$ gives $\\big(\\tfrac22, -\\tfrac22\\big) = (1, -1)$.

**The edges.** The edge $u = 0$ of $S$ (all points with $u = 0$) becomes the line $x + y = 0$; $u = 2$ becomes $x + y = 2$; $v = 0$ and $v = 2$ become $x - y = 0$ and $x - y = 2$. Every line where $u$ or $v$ stays the same becomes a tilted line in the $xy$-plane: the dashed lines in the figure.
<<<
:::

:::figure tilted-square-uv
The tilted square $D$: $0 \\le x + y \\le 2$, $0 \\le x - y \\le 2$. It's the image of the square $0 \\le u \\le 2$, $0 \\le v \\le 2$ under $u = x + y$, $v = x - y$. The dashed lines are where $u$ or $v$ equals $0.5$, $1$, or $1.5$. They cut $D$ into small squares, the images of the small squares of the $uv$-grid.
:::

:::check
Under $x = 2u$, $y = 3v$, where does the point $(u, v) = (1, 1)$ go?
- [x] $(2, 3)$
- [ ] $(1, 1)$
  why: That's where it started. The transformation multiplies $u$ by $2$ and $v$ by $3$.
- [ ] $(3, 2)$
  why: $x$ comes from $u$ and $y$ from $v$: $x = 2 \\cdot 1 = 2$ and $y = 3 \\cdot 1 = 3$.
- [ ] $(\\tfrac12, \\tfrac13)$
  why: That divides instead. The formulas give $x$ and $y$ by multiplying.
???
$x = 2 \\cdot 1 = 2$ and $y = 3 \\cdot 1 = 3$, so $(1, 1)$ goes to $(2, 3)$.
:::

:::idea The Jacobian: how much areas stretch
A transformation can stretch or squeeze areas, and by different amounts in different places. The factor is the [[jacobian|Jacobian]]:
$$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\frac{\\partial x}{\\partial u}\\frac{\\partial y}{\\partial v} - \\frac{\\partial x}{\\partial v}\\frac{\\partial y}{\\partial u}.$$
A small rectangle of area $\\Delta u\\, \\Delta v$ in the $uv$-plane goes to a small region of area about
$$\\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| \\Delta u\\, \\Delta v.$$

**Why, in three steps.**
1. **The rectangle's sides become two short vectors.** Moving from $(u, v)$ to $(u + \\Delta u, v)$ moves the image point by about $\\langle x_u, y_u \\rangle \\Delta u$, and moving to $(u, v + \\Delta v)$ moves it by about $\\langle x_v, y_v \\rangle \\Delta v$.
2. **So the image is nearly a parallelogram** with those two vectors as sides.
3. **A parallelogram with sides $\\langle a, b \\rangle$ and $\\langle c, d \\rangle$ has area $|ad - bc|$.** With $a = x_u\\Delta u$, $b = y_u\\Delta u$, $c = x_v\\Delta v$, $d = y_v\\Delta v$, that's $|x_u y_v - x_v y_u|\\,\\Delta u\\,\\Delta v$.
>>> Each of the three steps, worked out
**What has to be found.** In the new labels, a small rectangle is $\\Delta u$ by $\\Delta v$. The question is how much area the matching piece of the $xy$-plane has.

**Step 1: the rectangle's sides become two short arrows.** Moving from $(u, v)$ to $(u + \\Delta u, v)$ changes $x$ by about $x_u\\,\\Delta u$ and $y$ by about $y_u\\,\\Delta u$, where $x_u$ is how fast $x$ changes when only $u$ changes (with $v$ kept at one number). (That's the linear approximation: a small change times the rate of change.) So one side becomes the arrow $\\langle x_u, y_u \\rangle\\Delta u$. Changing $v$ instead gives the arrow $\\langle x_v, y_v \\rangle\\Delta v$. For the tilted-square example, $x_u = \\tfrac12$ and $y_u = \\tfrac12$, so a step of $\\Delta u = 1$ moves by $\\langle \\tfrac12, \\tfrac12 \\rangle$.

**Step 2: why a parallelogram.** Moving by both small changes moves by the sum of the two arrows, so the four corners are: the start, start $+$ first arrow, start $+$ second arrow, and start $+$ both. Four points like that form a parallelogram. (The real piece has slightly curved sides, but for small pieces the difference is much smaller than the piece.)

**Step 3: the area of a parallelogram with sides $\\langle a, b \\rangle$ and $\\langle c, d \\rangle$ is $|ad - bc|$.** Example: $\\langle 2, 0 \\rangle$ and $\\langle 0, 3 \\rangle$ make a $2 \\times 3$ rectangle, and $|2 \\cdot 3 - 0 \\cdot 0| = 6$ ✓. Another: $\\langle 1, 0 \\rangle$ and $\\langle 1, 1 \\rangle$ make a slanted parallelogram with base $1$ and height $1$, so area $1$, and $|1 \\cdot 1 - 0 \\cdot 1| = 1$ ✓. (The formula comes from the cross product: $\\langle a, b, 0 \\rangle \\times \\langle c, d, 0 \\rangle = \\langle 0, 0, ad - bc \\rangle$, whose length is the area.)

**Putting in the arrows.** $a = x_u\\Delta u$, $b = y_u\\Delta u$, $c = x_v\\Delta v$, $d = y_v\\Delta v$, so $ad - bc = (x_u y_v - x_v y_u)\\,\\Delta u\\,\\Delta v$. The number $x_u y_v - x_v y_u$ is the Jacobian. The absolute value is used because areas can't be negative (a negative Jacobian just means the new labels flip the region over, like a mirror).
<<<

**Check it on polar coordinates.** For $x = r\\cos\\theta$, $y = r\\sin\\theta$:
$$\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = \\cos\\theta \\cdot r\\cos\\theta - (-r\\sin\\theta)\\cdot\\sin\\theta = r(\\cos^2\\theta + \\sin^2\\theta) = r.$$
That's the $r$ in $dA = r\\, dr\\, d\\theta$, found a second way.
>>> Each partial derivative in the polar check
Here the new labels are $r$ (in the role of $u$) and $\\theta$ (in the role of $v$), with $x = r\\cos\\theta$ and $y = r\\sin\\theta$.
- $x_r$: how fast $x = r\\cos\\theta$ changes when only $r$ changes. $\\cos\\theta$ is then a fixed number, so $x_r = \\cos\\theta$.
- $y_\\theta$: how fast $y = r\\sin\\theta$ changes when only $\\theta$ changes. $r$ is fixed, and the derivative of $\\sin$ is $\\cos$, so $y_\\theta = r\\cos\\theta$.
- $x_\\theta$: the derivative of $\\cos$ is $-\\sin$, so $x_\\theta = -r\\sin\\theta$.
- $y_r = \\sin\\theta$.

Then $x_r y_\\theta - x_\\theta y_r = \\cos\\theta \\cdot r\\cos\\theta - (-r\\sin\\theta)(\\sin\\theta) = r\\cos^2\\theta + r\\sin^2\\theta = r(\\cos^2\\theta + \\sin^2\\theta) = r$. Watch the signs: subtracting a negative number adds it.

This is the $r$ in $dA = r\\, dr\\, d\\theta$ from Oct 19, found a second way.

**Check with numbers.** For example, at $r = 2$, $\\theta = \\tfrac\\pi3$: $x_r = \\cos\\tfrac\\pi3 = 0.5$, $y_\\theta = 2\\cos\\tfrac\\pi3 = 1$, $x_\\theta = -2\\sin\\tfrac\\pi3 \\approx -1.732$, $y_r = \\sin\\tfrac\\pi3 \\approx 0.866$. Then $0.5 \\cdot 1 - (-1.732)(0.866) = 0.5 + 1.5 = 2$, which is $r$ ✓.
<<<
:::

:::theorem Change of variables in a double integral
Suppose $T$ takes the region $S$ of the $uv$-plane one-to-one onto the region $D$ of the $xy$-plane, $x(u, v)$ and $y(u, v)$ have continuous partial derivatives, and the Jacobian isn't $0$ inside $S$. Then
$$\\iint_D f(x, y)\\, dA = \\iint_S f\\big(x(u, v),\\, y(u, v)\\big) \\left|\\frac{\\partial(x, y)}{\\partial(u, v)}\\right| du\\, dv.$$

**Why:** cut $S$ into small rectangles. Their images cut $D$ into small pieces of area about $\\big|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\big|\\,\\Delta u\\,\\Delta v$. A Riemann sum for the left side adds $f \\times (\\text{area of piece})$ over those pieces, which is exactly a Riemann sum for the right side. As the rectangles shrink, both sums approach their integrals.
:::

:::check
What is the Jacobian $\\dfrac{\\partial(x, y)}{\\partial(u, v)}$ of $x = u - v$, $y = u + 2v$?
answer: 3
???
$x_u = 1$, $x_v = -1$, $y_u = 1$, $y_v = 2$. So
$$x_u y_v - x_v y_u = 1 \\cdot 2 - (-1)(1) = 2 + 1 = 3.$$
Every small rectangle in the $uv$-plane becomes a parallelogram $3$ times its area.
:::

:::idea Using it: the tilted square
**Example.** Compute $\\displaystyle\\iint_D (x + y)^2\\, dA$ over the tilted square $D$: $0 \\le x + y \\le 2$, $0 \\le x - y \\le 2$.

In $x$ and $y$ this needs two pieces: the left and right halves of $D$ have different top and bottom edges. In the new coordinates it's one rectangle.
1. **Choose $u$ and $v$ from the edges.** The edges are "$x + y = $ number" and "$x - y = $ number", so let $u = x + y$ and $v = x - y$.
2. **The new region, from the inequalities:** $0 \\le u \\le 2$, $0 \\le v \\le 2$.
3. **Solve for $x$ and $y$:** $x = \\tfrac{u + v}{2}$, $y = \\tfrac{u - v}{2}$.
4. **The Jacobian:** $x_u y_v - x_v y_u = \\tfrac12 \\cdot \\left(-\\tfrac12\\right) - \\tfrac12 \\cdot \\tfrac12 = -\\tfrac12$, so $|J| = \\tfrac12$.
5. **The integrand:** $(x + y)^2 = u^2$.
6. **Integrate:** $\\displaystyle\\int_0^2\\int_0^2 u^2 \\cdot \\tfrac12\\, du\\, dv = \\tfrac12 \\cdot \\tfrac83 \\cdot 2 = \\tfrac83$.
>>> Each step of the tilted square, worked out
**Step 1: why these $u$ and $v$.** The goal is a region whose limits are numbers. Each edge of $D$ says some combination of $x$ and $y$ is a fixed number ($x + y = 0$, $x + y = 2$, $x - y = 0$, $x - y = 2$). Making those combinations the new labels turns every edge into "$u = $ number" or "$v = $ number".

**Step 2: the new region.** Substitute $u = x + y$ and $v = x - y$ into $0 \\le x + y \\le 2$ and $0 \\le x - y \\le 2$: $0 \\le u \\le 2$, $0 \\le v \\le 2$. Number limits, so it's a rectangle (here a square) in the new labels.

**Step 3: $x$ and $y$ in terms of $u$ and $v$.** The Jacobian uses $x_u$, $x_v$, $y_u$, $y_v$, so you need $x$ and $y$ as formulas in $u$ and $v$. Add $u = x + y$ and $v = x - y$: $u + v = 2x$, so $x = \\tfrac{u + v}{2}$. Subtract: $u - v = 2y$, so $y = \\tfrac{u - v}{2}$.

**Step 4: the Jacobian.** $x_u = \\tfrac12$ (how fast $\\tfrac{u + v}{2}$ changes with $u$), $x_v = \\tfrac12$, $y_u = \\tfrac12$, $y_v = -\\tfrac12$. So $x_u y_v - x_v y_u = \\tfrac12 \\cdot \\left(-\\tfrac12\\right) - \\tfrac12 \\cdot \\tfrac12 = -\\tfrac14 - \\tfrac14 = -\\tfrac12$. Its absolute value is $\\tfrac12$: every $1 \\times 1$ square of the new labels stands for a tilted square of area $\\tfrac12$. (Check: the square $0 \\le u \\le 1$, $0 \\le v \\le 1$ has corners $(0, 0)$, $(0.5, 0.5)$, $(1, 0)$, $(0.5, -0.5)$, a tilted square with side $\\sqrt{0.5}$ and area $0.5$ ✓.)

**Step 5: the function.** $x + y$ is $u$ by definition, so $(x + y)^2 = u^2$.

**Step 6: integrate.** The limits are numbers and the integrand is a product, so split it: $\\tfrac12\\Big(\\int_0^2 u^2\\, du\\Big)\\Big(\\int_0^2 dv\\Big) = \\tfrac12 \\cdot \\tfrac83 \\cdot 2 = \\tfrac83$.

**Two checks.** With $f = 1$, the formula gives $\\int_0^2\\int_0^2 \\tfrac12\\, du\\, dv = 2$, and $D$ is a square with side $\\sqrt2$ (from $(0, 0)$ to $(1, 1)$), area $2$ ✓. Adding up $(x + y)^2$ over $D$ on a computer also gives about $2.667$ ✓.
<<<

**A shortcut for the Jacobian.** You don't have to solve for $x$ and $y$ to get $|J|$. Compute the Jacobian the other way, $\\dfrac{\\partial(u, v)}{\\partial(x, y)}$, and flip it:
$$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\frac{1}{\\;\\dfrac{\\partial(u, v)}{\\partial(x, y)}\\;}.$$
Here $\\dfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 1 \\cdot 1 = -2$, so $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = -\\dfrac12$ ✓.
>>> Why flipping works
**Two trips that undo each other.** Going from $(u, v)$ labels to $(x, y)$ and then back to $(u, v)$ leaves every small piece exactly where it started, with its original area. The first trip multiplies areas by $\\big|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\big|$ and the second by $\\big|\\tfrac{\\partial(u, v)}{\\partial(x, y)}\\big|$. Since the area ends up unchanged, the two factors multiply to $1$, so each is $1$ divided by the other.

**In this example.** Going from $(x, y)$ to $(u, v)$ doubles areas: $u_x v_y - u_y v_x = 1 \\cdot (-1) - 1 \\cdot 1 = -2$, size $2$. Going back halves them: $\\tfrac12$. And $2 \\times \\tfrac12 = 1$ ✓.

**When to use it.** When the problem gives $u$ and $v$ as formulas in $x$ and $y$, computing $u_x$, $u_y$, $v_x$, $v_y$ is quick, and flipping saves you from solving for $x$ and $y$.
<<<
:::

:::check
Find the area of the region $D$: $1 \\le x + 2y \\le 3$, $0 \\le x - y \\le 2$, using $u = x + 2y$, $v = x - y$.
answer: 4/3
???
1. **New region:** $1 \\le u \\le 3$, $0 \\le v \\le 2$, a rectangle of area $2 \\cdot 2 = 4$ in the $uv$-plane.
2. **Jacobian, with the shortcut:** $\\dfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 2 \\cdot 1 = -3$, so $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\dfrac13$.
3. **Area:** $\\displaystyle\\int_0^2\\int_1^3 \\tfrac13\\, du\\, dv = \\tfrac13 \\cdot 4 = \\tfrac43$.
:::

:::summary Summary
- A **transformation** $x = x(u, v)$, $y = y(u, v)$ carries a region $S$ to a region $D$. Choose $u$ and $v$ so that $D$'s edges become "$u = $ number" and "$v = $ number"; then substitute into $D$'s inequalities to get $S$.
- **Jacobian:** $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = x_u y_v - x_v y_u$. Its absolute value is how much small areas stretch, because a small rectangle becomes a parallelogram with sides $\\langle x_u, y_u \\rangle\\Delta u$ and $\\langle x_v, y_v \\rangle\\Delta v$.
- **Change of variables:** $\\displaystyle\\iint_D f\\, dA = \\iint_S f\\big(x(u,v), y(u,v)\\big)\\,\\Big|\\frac{\\partial(x, y)}{\\partial(u, v)}\\Big|\\, du\\, dv$. For polar, $|J| = r$.
- **Shortcut:** $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = 1 \\Big/ \\dfrac{\\partial(u, v)}{\\partial(x, y)}$.

**Common mistakes:**
- Forgetting the absolute value of the Jacobian, or forgetting the Jacobian entirely.
- Using $\\dfrac{\\partial(u, v)}{\\partial(x, y)}$ itself instead of its reciprocal.
- Changing the integrand but leaving the old $x, y$ limits.
:::
`;export{e as default};