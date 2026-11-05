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
**Solving for $u$ and $v$.** Add the two equations: $x + y = \\tfrac{u + v}{2} + \\tfrac{u - v}{2} = \\tfrac{2u}{2} = u$. Subtract them: $x - y = \\tfrac{u + v}{2} - \\tfrac{u - v}{2} = \\tfrac{2v}{2} = v$. So $u = x + y$ and $v = x - y$.

**Where the square goes, from the inequalities.** A point is in $S$ when $0 \\le u \\le 2$ and $0 \\le v \\le 2$. Replacing $u$ with $x + y$ and $v$ with $x - y$ gives exactly the inequalities for $D$: $0 \\le x + y \\le 2$ and $0 \\le x - y \\le 2$. No drawing needed.

**The corners.** Plug each corner of $S$ into $x = \\tfrac{u + v}{2}$, $y = \\tfrac{u - v}{2}$:
- $(u, v) = (0, 0)$ goes to $(0, 0)$.
- $(2, 0)$ goes to $\\big(\\tfrac22, \\tfrac22\\big) = (1, 1)$.
- $(2, 2)$ goes to $\\big(\\tfrac42, \\tfrac02\\big) = (2, 0)$.
- $(0, 2)$ goes to $\\big(\\tfrac22, -\\tfrac22\\big) = (1, -1)$.

**The edges.** The edge $u = 0$ of $S$ goes to the line $x + y = 0$, the edge $u = 2$ to $x + y = 2$, and similarly $v = 0$ and $v = 2$ go to $x - y = 0$ and $x - y = 2$. Each line where $u$ or $v$ stays constant in the $uv$-plane becomes a line where $x + y$ or $x - y$ stays constant: the dashed lines in the figure below.
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
**Step 1: where the corners go.** The linear approximation (Sep 14) says that for a small change $\\Delta u$,
$$x(u + \\Delta u, v) \\approx x(u, v) + x_u\\,\\Delta u, \\qquad y(u + \\Delta u, v) \\approx y(u, v) + y_u\\,\\Delta u.$$
So the image point moves by about $\\langle x_u\\,\\Delta u,\\ y_u\\,\\Delta u \\rangle = \\langle x_u, y_u \\rangle \\Delta u$. Changing $v$ instead moves it by about $\\langle x_v, y_v \\rangle \\Delta v$ in the same way.

**Step 2: why a parallelogram.** With the linear approximation, moving $\\Delta u$ and $\\Delta v$ together moves the point by the sum of the two moves. So the fourth corner is at the first corner plus both vectors, which is what makes the four corners a parallelogram. The real image has slightly curved sides, but the difference is much smaller than the piece itself when $\\Delta u$ and $\\Delta v$ are small.

**Step 3: the area of a parallelogram in the plane.** Put the two side vectors in space with a $z$-component of $0$: $\\langle a, b, 0 \\rangle$ and $\\langle c, d, 0 \\rangle$. The length of their cross product is the parallelogram's area (Aug 31), and
$$\\langle a, b, 0 \\rangle \\times \\langle c, d, 0 \\rangle = \\langle b \\cdot 0 - 0 \\cdot d,\\ 0 \\cdot c - a \\cdot 0,\\ ad - bc \\rangle = \\langle 0, 0, ad - bc \\rangle,$$
whose length is $|ad - bc|$. For example, $\\langle 2, 0 \\rangle$ and $\\langle 0, 3 \\rangle$ make a $2 \\times 3$ rectangle: $|2 \\cdot 3 - 0 \\cdot 0| = 6$ ✓.

**Putting in the side vectors.** $a = x_u\\Delta u$, $b = y_u\\Delta u$, $c = x_v\\Delta v$, $d = y_v\\Delta v$, so
$$ad - bc = x_u\\Delta u \\cdot y_v\\Delta v - y_u\\Delta u \\cdot x_v\\Delta v = (x_u y_v - x_v y_u)\\,\\Delta u\\,\\Delta v.$$
The absolute value is there because an area can't be negative. (A negative Jacobian means the transformation flips the region over, like a mirror.)
<<<

**Check it on polar coordinates.** For $x = r\\cos\\theta$, $y = r\\sin\\theta$:
$$\\frac{\\partial(x, y)}{\\partial(r, \\theta)} = \\cos\\theta \\cdot r\\cos\\theta - (-r\\sin\\theta)\\cdot\\sin\\theta = r(\\cos^2\\theta + \\sin^2\\theta) = r.$$
That's the $r$ in $dA = r\\, dr\\, d\\theta$, found a second way.
>>> Each partial derivative in the polar check
Here $u$ is $r$ and $v$ is $\\theta$.
- $x_r = \\tfrac{\\partial}{\\partial r}(r\\cos\\theta) = \\cos\\theta$, holding $\\theta$ constant.
- $y_\\theta = \\tfrac{\\partial}{\\partial \\theta}(r\\sin\\theta) = r\\cos\\theta$, holding $r$ constant.
- $x_\\theta = \\tfrac{\\partial}{\\partial \\theta}(r\\cos\\theta) = -r\\sin\\theta$.
- $y_r = \\tfrac{\\partial}{\\partial r}(r\\sin\\theta) = \\sin\\theta$.

Then $x_r y_\\theta - x_\\theta y_r = \\cos\\theta \\cdot r\\cos\\theta - (-r\\sin\\theta)(\\sin\\theta) = r\\cos^2\\theta + r\\sin^2\\theta = r$. Watch the minus sign: subtracting a negative adds.
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
**Step 1: why these $u$ and $v$.** The goal is a region with number limits. Each edge of $D$ says some combination of $x$ and $y$ equals a number, so making those combinations the new coordinates turns every edge into "$u = $ number" or "$v = $ number".

**Step 2.** Substitute $u = x + y$ and $v = x - y$ into $0 \\le x + y \\le 2$ and $0 \\le x - y \\le 2$. The new limits are numbers, so $S$ is a rectangle (here a square).

**Step 3.** Add and subtract the equations $u = x + y$ and $v = x - y$: adding gives $u + v = 2x$, so $x = \\tfrac{u + v}{2}$; subtracting gives $u - v = 2y$, so $y = \\tfrac{u - v}{2}$. The formula needs $x$ and $y$ in terms of $u$ and $v$, because the Jacobian is built from $x_u$, $x_v$, $y_u$, $y_v$.

**Step 4.** $x_u = \\tfrac12$, $x_v = \\tfrac12$, $y_u = \\tfrac12$, $y_v = -\\tfrac12$. So $x_u y_v - x_v y_u = \\tfrac12 \\cdot \\left(-\\tfrac12\\right) - \\tfrac12 \\cdot \\tfrac12 = -\\tfrac14 - \\tfrac14 = -\\tfrac12$. The absolute value is $\\tfrac12$: every small square of the $uv$-grid becomes a tilted square half its area.

**Step 5.** $x + y$ is $u$ by definition, so $(x + y)^2 = u^2$. No need to plug in the formulas for $x$ and $y$.

**Step 6.** The limits are numbers and the integrand is a product, so split it: $\\tfrac12\\Big(\\int_0^2 u^2\\, du\\Big)\\Big(\\int_0^2 dv\\Big) = \\tfrac12 \\cdot \\tfrac{8}{3} \\cdot 2 = \\tfrac83$.

**Two checks.**
- **Area:** with $f = 1$, the formula gives $\\int_0^2\\int_0^2 \\tfrac12\\, du\\, dv = 2$. $D$ is a square with side $\\sqrt2$ (from $(0, 0)$ to $(1, 1)$), so its area is $2$ ✓.
- **Numbers:** adding up $(x + y)^2$ over $D$ on a fine grid in $x$ and $y$ also gives about $2.667 = \\tfrac83$ ✓.
<<<

**A shortcut for the Jacobian.** You don't have to solve for $x$ and $y$ to get $|J|$. Compute the Jacobian the other way, $\\dfrac{\\partial(u, v)}{\\partial(x, y)}$, and flip it:
$$\\frac{\\partial(x, y)}{\\partial(u, v)} = \\frac{1}{\\;\\dfrac{\\partial(u, v)}{\\partial(x, y)}\\;}.$$
Here $\\dfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = 1 \\cdot (-1) - 1 \\cdot 1 = -2$, so $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = -\\dfrac12$ ✓.
>>> Why flipping works
The transformation from $(u, v)$ to $(x, y)$ and the one from $(x, y)$ back to $(u, v)$ undo each other. Going there and back, a small piece ends up exactly where it started, with its original area. The first trip multiplies its area by $\\big|\\tfrac{\\partial(x, y)}{\\partial(u, v)}\\big|$ and the second by $\\big|\\tfrac{\\partial(u, v)}{\\partial(x, y)}\\big|$, so the two factors multiply to $1$. They're reciprocals. (The signs match too, since flipping over twice leaves the region unflipped.)

**In this example:** going from $(x, y)$ to $(u, v)$ doubles areas (factor $2$), and going back halves them (factor $\\tfrac12$). $2 \\cdot \\tfrac12 = 1$ ✓.

**When to use it:** whenever the problem hands you $u$ and $v$ as formulas in $x$ and $y$. It saves solving for $x$ and $y$. Just make sure to write the answer in terms of $u$ and $v$ if it depends on them.
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