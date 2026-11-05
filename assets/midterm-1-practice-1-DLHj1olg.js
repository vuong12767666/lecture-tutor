var e=`---
title: Midterm 1 Practice Test 1
exam: Midterm 1
minutes: 60
---

:::problem 1
Consider the sphere $x^2 + y^2 + z^2 - 6x + 2y + 4z = 2$.

**(a)** Its center is {{point 1: (3, -1, -2)}} and its radius is {{expr 1: 4}}

**(b)** The sphere meets the $xy$-plane in a circle. The radius of that circle is {{expr 2: sqrt(12)}}
+++
review: 2026-08-24 Spheres

**The goal.** The center and radius can be read off the form $(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2$, so rewrite the expanded equation in that form by completing the square.

**Step 1: complete the square in each variable.** *Why:* each pair like $x^2 - 6x$ hides a perfect square. $(x - 3)^2 = x^2 - 6x + 9$ has an extra $9$, so $x^2 - 6x = (x - 3)^2 - 9$. Likewise $y^2 + 2y = (y + 1)^2 - 1$ and $z^2 + 4z = (z + 2)^2 - 4$.

**Step 2: move the constants.** *Why add them to the right side:* subtracting $9$, $1$, and $4$ on the left has to be balanced. $(x - 3)^2 + (y + 1)^2 + (z + 2)^2 = 2 + 9 + 1 + 4 = 16$.

**Step 3 (a): read it off.** Center $(3, -1, -2)$ (the signs flip: $(y + 1)^2$ means $k = -1$), radius $\\sqrt{16} = 4$.

**Step 4 (b): the circle in the $xy$-plane.** *Why set $z = 0$:* that's the plane's equation. $(x - 3)^2 + (y + 1)^2 = 16 - (0 + 2)^2 = 12$, a circle of radius $\\sqrt{12} = 2\\sqrt3$.

**Why (b) works geometrically.** The center is at height $-2$, so it's $2$ from the plane. Each point of the circle is $4$ from the center, so the circle's radius is the third side of a right triangle: $\\sqrt{4^2 - 2^2} = \\sqrt{12}$.

**Check.** $(7, -1, -2)$ is $4$ from the center along $x$: $49 + 1 + 4 - 42 - 2 - 8 = 2$ ✓.

**Common mistakes.** Writing the center as $(-3, 1, 2)$, or giving $16$ as the radius.
:::

:::problem 2
Let $\\mathbf u = \\langle 1, 2, -2 \\rangle$ and $\\mathbf v = \\langle 3, 0, 4 \\rangle$.

**(a)** $\\mathbf u \\cdot \\mathbf v =$ {{expr 1: -5}}

**(b)** $\\cos\\theta =$ {{expr 2: -1/3}}, where $\\theta$ is the angle between $\\mathbf u$ and $\\mathbf v$.

**(c)** The angle $\\theta$ is: {{circle 1: acute | right | *obtuse}}

**(d)** The scalar projection of $\\mathbf v$ onto $\\mathbf u$, $\\operatorname{comp}_{\\mathbf u} \\mathbf v$, is {{expr 1: -5/3}}
+++
review: 2026-08-26 The dot product; 2026-08-26 The angle between two vectors; 2026-08-28

**The goal.** Everything here comes from the dot product and the two lengths: $\\cos\\theta = \\tfrac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u||\\mathbf v|}$, and the scalar projection is $\\tfrac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|}$.

**Step 1 (a): the dot product.** Multiply matching components and add: $3 + 0 - 8 = -5$.

**Step 2 (b): the lengths, then $\\cos\\theta$.** $|\\mathbf u| = \\sqrt{1 + 4 + 4} = 3$ and $|\\mathbf v| = \\sqrt{9 + 16} = 5$. *Why divide by both:* $\\mathbf u \\cdot \\mathbf v = |\\mathbf u||\\mathbf v|\\cos\\theta$ (from the law of cosines). So $\\cos\\theta = \\tfrac{-5}{15} = -\\tfrac13$.

**Step 3 (c): the sign.** *Why the sign decides it:* the lengths are positive, so $\\cos\\theta$ has the sign of the dot product. Negative means obtuse.

**Step 4 (d): the projection.** *Why divide by $|\\mathbf u|$:* the scalar projection is the signed length of $\\mathbf v$'s shadow along $\\mathbf u$, which is $|\\mathbf v|\\cos\\theta = \\tfrac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|} = -\\tfrac53$.

**Why not the other choices in (c).**
- **acute:** needs $\\mathbf u \\cdot \\mathbf v > 0$, but it's $-5$.
- **right:** needs $\\mathbf u \\cdot \\mathbf v = 0$.

**Common mistake in (d).** Dividing by $|\\mathbf v|$ instead of $|\\mathbf u|$: you project **onto** $\\mathbf u$.
:::

:::problem 3
Let $P = (1, 0, 0)$, $Q = (0, 2, 0)$, and $R = (0, 0, 3)$.

**(a)** The area of triangle $PQR$ is {{expr 2: 7/2}}

**(b)** The plane through $P$, $Q$, and $R$:

{{plane 4: 6, 3, 2, 6}}
+++
review: 2026-08-31; 2026-08-28

**The goal.** The cross product of two sides does both jobs: its length is the parallelogram's area (half of it is the triangle's), and it's perpendicular to both sides, so it's the plane's normal.

**Step 1: two sides from the same corner.** *Why from $P$:* both vectors must start at the same point to span the triangle. $\\overrightarrow{PQ} = \\langle -1, 2, 0 \\rangle$ and $\\overrightarrow{PR} = \\langle -1, 0, 3 \\rangle$.

**Step 2: the cross product.** $\\langle 2 \\cdot 3 - 0 \\cdot 0,\\ 0 \\cdot (-1) - (-1) \\cdot 3,\\ (-1) \\cdot 0 - 2 \\cdot (-1) \\rangle = \\langle 6, 3, 2 \\rangle$.

**Step 3 (a): the area.** *Why half:* the triangle is half the parallelogram. $|\\langle 6, 3, 2 \\rangle| = \\sqrt{36 + 9 + 4} = 7$, so the area is $\\tfrac72$.

**Step 4 (b): the plane.** *Why this form:* every vector from $P$ to a point of the plane is perpendicular to the normal. $6(x - 1) + 3y + 2z = 0$, so $6x + 3y + 2z = 6$.

**Check.** $P$, $Q$, $R$ all give $6$ ✓. Also $\\langle 6, 3, 2 \\rangle \\cdot \\overrightarrow{PQ} = 0$ and $\\cdot\\,\\overrightarrow{PR} = 0$ ✓.

**A shortcut to check with.** A plane crossing the axes at $a$, $b$, $c$ is $\\tfrac xa + \\tfrac yb + \\tfrac zc = 1$. Here $x + \\tfrac y2 + \\tfrac z3 = 1$; times $6$ gives the same plane.
:::

:::scratch
:::

:::problem 4
The line $L$ passes through $(1, 2, 3)$ in the direction $\\langle 2, -1, 1 \\rangle$.

**(a)** $L$ meets the plane $x + y + z = 12$ at the point {{point 2: (7, -1, 6)}}

**(b)** How is $L$ related to the plane $x + y - z = 5$? {{circle 1: *parallel to it and never meets it | lies in it | crosses it at one point | perpendicular to it}}
+++
review: 2026-08-28

**(a) The goal.** Points on the line have the form $\\langle 1 + 2t, 2 - t, 3 + t \\rangle$; find the $t$ whose point also satisfies the plane's equation.

**Step 1: the line.** *Why this form:* start at $(1, 2, 3)$ and add $t$ copies of the direction $\\langle 2, -1, 1 \\rangle$.

**Step 2: substitute into the plane.** $(1 + 2t) + (2 - t) + (3 + t) = 6 + 2t = 12$, so $t = 3$, and the point is $(7, -1, 6)$. Check: $7 - 1 + 6 = 12$ ✓.

**(b) The goal.** Compare the line's direction with the plane's normal $\\mathbf n = \\langle 1, 1, -1 \\rangle$. *Why:* if the direction is perpendicular to the normal, the line runs parallel to the plane.

**Step 1.** $\\mathbf n \\cdot \\langle 2, -1, 1 \\rangle = 2 - 1 - 1 = 0$: parallel to the plane (or in it).

**Step 2: in it or not?** *Why test one point:* if any point of the line is off the plane, all of it is. $(1, 2, 3)$ gives $1 + 2 - 3 = 0 \\ne 5$, so the line never meets the plane.

**Another way.** Substituting the line into $x + y - z$ gives $0$ for every $t$, which never equals $5$.

**Why not the other choices in (b).**
- **lies in it:** every point would satisfy $x + y - z = 5$, but the left side is always $0$.
- **crosses it at one point:** that needs $\\mathbf n \\cdot \\mathbf d \\ne 0$.
- **perpendicular to it:** that needs the direction parallel to $\\mathbf n$, and $\\langle 2, -1, 1 \\rangle$ isn't a multiple of $\\langle 1, 1, -1 \\rangle$.
:::

:::problem 5
Circle the name of each surface. (1 point each)

**(a)** $z = x^2 + y^2$: {{circle 1: *elliptic paraboloid | hyperbolic paraboloid | cone | hyperboloid of one sheet | hyperboloid of two sheets}}

**(b)** $x^2 + y^2 - z^2 = 1$: {{circle 1: elliptic paraboloid | hyperbolic paraboloid | cone | *hyperboloid of one sheet | hyperboloid of two sheets}}

**(c)** $z^2 = x^2 + y^2$: {{circle 1: elliptic paraboloid | hyperbolic paraboloid | *cone | hyperboloid of one sheet | hyperboloid of two sheets}}

**(d)** $z = y^2 - x^2$: {{circle 1: elliptic paraboloid | *hyperbolic paraboloid | cone | hyperboloid of one sheet | hyperboloid of two sheets}}

**(e)** $z^2 - x^2 - y^2 = 1$: {{circle 1: elliptic paraboloid | hyperbolic paraboloid | cone | hyperboloid of one sheet | *hyperboloid of two sheets}}
+++
review: 2026-09-04

**The goal.** Name each surface from its equation's shape: which variables are squared, what it's set equal to, and the signs. *Why that's enough:* each quadric type has a distinct pattern.

- **One variable not squared** ($z = \\ldots$): a paraboloid. Same signs on $x^2$ and $y^2$ give an **elliptic** paraboloid (a bowl), opposite signs a **hyperbolic** one (a saddle).
- **All three squared, equal to $0$** (like $z^2 = x^2 + y^2$): a **cone**.
- **All three squared, $= 1$, one minus sign:** a hyperboloid of **one** sheet. **Two** minus signs: **two** sheets.

**Checks with slices,** to see why the names fit:
- (b) At height $z$, $x^2 + y^2 = 1 + z^2$: a circle at every height, so one connected piece.
- (e) $x^2 + y^2 = z^2 - 1$ needs $z^2 \\ge 1$, so nothing exists for $-1 < z < 1$: two separate pieces.
- (c) At $z = 0$ only the point $(0, 0)$: the tip of the cone.

**Why not the other choices.**
- **(a)** and **(d)** have $z$ not squared, so they can't be a cone or a hyperboloid. (a) has $x^2$ and $y^2$ with the same sign, so it isn't hyperbolic; (d) has opposite signs, so it isn't elliptic.
- **(b)**, **(c)**, and **(e)** square all three variables, so they aren't paraboloids. (c) equals $0$ (write it as $x^2 + y^2 - z^2 = 0$), so it's the cone. (b) has one minus sign and (e) has two.
:::

:::problem 6
Let $f(x, y) = \\sqrt{4 - x^2 - y^2}$.

**(a)** The domain of $f$ is: {{circle 1: *the disk $x^2 + y^2 \\le 4$ | the circle $x^2 + y^2 = 4$ | the open disk $x^2 + y^2 < 4$ | every point $(x, y)$}}

**(b)** The range of $f$ is: {{circle 1: *$[0, 2]$ | $[0, 4]$ | $[0, \\infty)$ | $[-2, 2]$}}

**(c)** The level curve $f(x, y) = 1$ is a circle of radius {{expr 1: sqrt(3)}}
+++
review: 2026-09-02

**The goal.** The domain is where the formula makes sense, the range is every value it produces, and a level curve is where $f$ equals a given number.

**Step 1 (a): domain.** *Why look at the square root:* it needs a non-negative input. $4 - x^2 - y^2 \\ge 0$ means $x^2 + y^2 \\le 4$, including the edge, where $\\sqrt0 = 0$ is fine.

**Step 2 (b): range.** *Why look at the inside:* $4 - x^2 - y^2$ runs from $4$ (at the origin) down to $0$ (on the edge), so its square root runs from $2$ down to $0$: $[0, 2]$.

**Step 3 (c): the level curve.** *Why square both sides:* to remove the root. $\\sqrt{4 - x^2 - y^2} = 1$ gives $4 - x^2 - y^2 = 1$, so $x^2 + y^2 = 3$, radius $\\sqrt3$.

**Why not the other choices.**
- **(a)** The circle alone leaves out the inside. The open disk leaves out the edge, where $\\sqrt0 = 0$ is fine. Not every point: at $(3, 0)$ you'd need $\\sqrt{-5}$.
- **(b)** $[0, 4]$ forgets the square root. $[0, \\infty)$ ignores that the inside is at most $4$. $[-2, 2]$: a square root is never negative.

**The picture.** $z = \\sqrt{4 - x^2 - y^2}$ is the top half of the sphere of radius $2$.
:::

:::scratch
:::

:::problem 7
Find each limit, or circle "does not exist". (1 point each)

**(a)** $\\displaystyle\\lim_{(x,y)\\to(0,0)} \\frac{x^2 - y^2}{x^2 + y^2}$: {{circle 1: $0$ | $1$ | *does not exist}}

**(b)** $\\displaystyle\\lim_{(x,y)\\to(0,0)} \\frac{x^2 y}{x^2 + y^2}$: {{circle 1: *$0$ | $1$ | does not exist}}

**(c)** $\\displaystyle\\lim_{(x,y)\\to(1,2)} \\frac{x^2 y + 3}{x + y} =$ {{expr 1: 5/3}}

**(d)** Along the line $y = 2x$, $\\dfrac{xy}{x^2 + y^2}$ approaches {{expr 1: 2/5}} as $(x, y) \\to (0, 0)$.
+++
review: 2026-09-09; 2026-09-11

**The goal.** For each limit, decide whether it exists and find it. *The plan:* if the function is continuous there, plug in. If plugging in gives $\\tfrac00$, try two paths: different answers mean no limit; to prove a limit exists, squeeze it.

**(a)** *Why try the axes:* they're the easiest paths. Along $y = 0$: $\\tfrac{x^2}{x^2} = 1$. Along $x = 0$: $\\tfrac{-y^2}{y^2} = -1$. Two paths, two values: the limit **doesn't exist**.

**(b)** *Why squeeze:* the axes both give $0$, but agreeing paths don't prove a limit. Since $x^2 \\le x^2 + y^2$, $\\left|\\tfrac{x^2 y}{x^2 + y^2}\\right| \\le |y| \\to 0$. Squeezed to $0$.

**(c)** *Why just plug in:* it's a fraction of polynomials and the bottom is $3 \\ne 0$ at $(1, 2)$, so it's continuous there. $\\tfrac{2 + 3}{3} = \\tfrac53$.

**(d)** *Why substitute $y = 2x$:* that's what "along the line" means. $\\tfrac{2x^2}{x^2 + 4x^2} = \\tfrac25$. (Along $y = x$ it's $\\tfrac12$, so this function's limit at the origin doesn't exist.)

**Why not the other choices.**
- **(a)** $0$ and $1$: the function is $1$ along one axis and $-1$ along the other, so no single value works.
- **(b)** $1$: the squeeze shows the values approach $0$. Does not exist: the squeeze proves the limit is $0$ along every path at once.

**Common mistake.** Checking two paths that agree and concluding the limit exists.
:::

:::problem 8
Let $f(x, y) = x^2 y^3 + e^{xy}$.

$f_x =$ {{expr 2: 2 x y^3 + y exp(x y)}}

$f_{xy} =$ {{expr 2: 6 x y^2 + exp(x y) + x y exp(x y)}}
+++
review: 2026-09-11; 2026-09-14

**The goal.** $f_x$ treats $y$ as a constant; $f_{xy}$ is $f_x$ differentiated in $y$.

**Step 1: $f_x$.** $\\tfrac{\\partial}{\\partial x}(x^2 y^3) = 2xy^3$, since $y^3$ is a constant factor. *Why the chain rule for $e^{xy}$:* the inside $xy$ has $x$-derivative $y$, so $\\tfrac{\\partial}{\\partial x}e^{xy} = ye^{xy}$.

**Step 2: $f_{xy}$.** Differentiate $2xy^3 + ye^{xy}$ in $y$. The first term gives $6xy^2$. *Why the product rule on $ye^{xy}$:* both factors depend on $y$. $1 \\cdot e^{xy} + y \\cdot xe^{xy}$.

**Result.** $f_{xy} = 6xy^2 + e^{xy} + xye^{xy}$.

**Check with Clairaut.** *Why it's a good check:* mixed partials in either order must agree. $f_y = 3x^2y^2 + xe^{xy}$, and $(f_y)_x = 6xy^2 + e^{xy} + xye^{xy}$ ✓.

**Common mistake.** Forgetting the product rule on $ye^{xy}$, which loses the $e^{xy}$ term.
:::

:::problem 9
Let $f(x, y) = x^2 + 3xy - y^2$.

**(a)** The tangent plane to $z = f(x, y)$ at $(1, 2, 3)$:

{{plane 3: 8, -1, -1, 3}}

**(b)** Use the linear approximation at $(1, 2)$ to estimate $f(1.1,\\ 1.9) \\approx$ {{expr 2: 3.9}}
+++
review: 2026-09-14

**The goal.** The tangent plane at $(1, 2, 3)$ is $z = f(1, 2) + f_x\\,(x - 1) + f_y\\,(y - 2)$, and the linear approximation uses that plane to estimate $f$ nearby.

**Step 1: check the point.** $f(1, 2) = 1 + 6 - 4 = 3$ ✓, so it's on the graph.

**Step 2: partials at $(1, 2)$.** $f_x = 2x + 3y = 8$ and $f_y = 3x - 2y = -1$.

**Step 3 (a): the plane.** *Why this formula:* moving $\\Delta x$ and $\\Delta y$ changes the plane's height by $f_x\\,\\Delta x + f_y\\,\\Delta y$. $z = 3 + 8(x - 1) - (y - 2)$, which rearranges to $8x - y - z = 3$.

**Step 4 (b): estimate.** *Why use the plane:* near the point, the plane is close to the graph. $\\Delta x = 0.1$ and $\\Delta y = -0.1$: $3 + 8(0.1) - (-0.1) = 3.9$.

**Check.** The exact value is $1.21 + 6.27 - 3.61 = 3.87$, close to $3.9$ ✓.

**Common mistake.** $\\Delta y = 1.9 - 2 = -0.1$ and $f_y = -1$, so the $y$-term is $+0.1$: two minus signs.
:::

:::scratch
:::

:::problem 10
Let $z = x^2 y$, where $x = t^2 + 1$ and $y = 3t - 1$. Find $\\dfrac{dz}{dt}$ at $t = 1$.

$\\dfrac{dz}{dt}\\Big|_{t=1} =$ {{expr 3: 28}}
+++
review: 2026-09-16; 2026-09-18 More on the chain rule

**The goal.** $z$ depends on $t$ through both $x$ and $y$, so the chain rule adds the two routes: $\\tfrac{dz}{dt} = z_x\\tfrac{dx}{dt} + z_y\\tfrac{dy}{dt}$.

**Step 1: where you are at $t = 1$.** *Why first:* the partials are evaluated at that point. $x = 2$ and $y = 2$.

**Step 2: each factor.** $z_x = 2xy = 8$, $z_y = x^2 = 4$, $\\tfrac{dx}{dt} = 2t = 2$, $\\tfrac{dy}{dt} = 3$.

**Step 3: add the routes.** $8 \\cdot 2 + 4 \\cdot 3 = 28$.

**Check by substituting first.** $z = (t^2 + 1)^2(3t - 1)$, so $z' = 2(t^2 + 1)(2t)(3t - 1) + 3(t^2 + 1)^2$. At $t = 1$: $16 + 12 = 28$ ✓.
:::

:::problem 11
The equation $x^2 + y^2 + z^2 = 3xyz$ defines $z$ as a function of $x$ and $y$ near $(1, 1, 1)$. Find $\\dfrac{\\partial z}{\\partial x}$ at $(1, 1, 1)$.

$\\dfrac{\\partial z}{\\partial x} =$ {{expr 3: -1}}
+++
review: 2026-09-16

**The goal.** $z$ is only given implicitly, so differentiate the equation instead of solving for $z$. *The formula:* with $F(x, y, z) = 0$, $\\tfrac{\\partial z}{\\partial x} = -\\tfrac{F_x}{F_z}$.

**Why the formula.** Holding $y$ fixed and differentiating $F(x, y, z(x, y)) = 0$ in $x$ by the chain rule gives $F_x + F_z\\,\\tfrac{\\partial z}{\\partial x} = 0$. Solve for $\\tfrac{\\partial z}{\\partial x}$.

**Step 1: write it as $F = 0$.** $F = x^2 + y^2 + z^2 - 3xyz$. At $(1, 1, 1)$: $3 - 3 = 0$ ✓, so the point is on the surface.

**Step 2: the partials.** $F_x = 2x - 3yz = -1$ and $F_z = 2z - 3xy = -1$ at $(1, 1, 1)$.

**Step 3: the formula.** $-\\tfrac{-1}{-1} = -1$.

**Common mistake.** Dropping the minus sign in $-F_x/F_z$.
:::

:::problem 12
Circle true or false. (1 point each)

**(a)** If $f_x$ and $f_y$ both exist at $(a, b)$, then $f$ is continuous at $(a, b)$. {{circle 1: true | *false}}

**(b)** If $\\mathbf u \\cdot \\mathbf v = 0$ and $\\mathbf u \\times \\mathbf v = \\mathbf 0$, then $\\mathbf u = \\mathbf 0$ or $\\mathbf v = \\mathbf 0$. {{circle 1: *true | false}}

**(c)** For all vectors, $\\mathbf u \\times \\mathbf v = \\mathbf v \\times \\mathbf u$. {{circle 1: true | *false}}
+++
review: 2026-09-11; 2026-08-31; 2026-09-14

**The goal.** For each statement, find the fact that decides it, and a counterexample if it's false.

**(a) False.** *Why:* partial derivatives only look along the two axes, and a function can behave badly in other directions. $f = \\tfrac{xy}{x^2 + y^2}$ (with $f(0, 0) = 0$) is $0$ on both axes, so $f_x(0, 0) = f_y(0, 0) = 0$, but along $y = x$ it's $\\tfrac12$, so it isn't continuous at the origin.

**(b) True.** *Why:* $|\\mathbf u \\cdot \\mathbf v| = |\\mathbf u||\\mathbf v||\\cos\\theta|$ and $|\\mathbf u \\times \\mathbf v| = |\\mathbf u||\\mathbf v|\\sin\\theta$. If both are $0$ and neither vector is $\\mathbf 0$, then $\\cos\\theta = \\sin\\theta = 0$, which can't happen since $\\cos^2\\theta + \\sin^2\\theta = 1$.

**(c) False.** *Why:* swapping the order flips the right-hand-rule direction: $\\mathbf u \\times \\mathbf v = -\\,\\mathbf v \\times \\mathbf u$. For example, $\\mathbf i \\times \\mathbf j = \\mathbf k$ but $\\mathbf j \\times \\mathbf i = -\\mathbf k$.

**Why not the other choices.**
- **(a) true:** the function above has both partial derivatives at the origin and still isn't continuous there.
- **(b) false:** a counterexample would need two nonzero vectors with $\\cos\\theta = 0$ and $\\sin\\theta = 0$ at once, and no angle has both.
- **(c) true:** one example breaks an "always": $\\mathbf i \\times \\mathbf j = \\mathbf k$ and $\\mathbf j \\times \\mathbf i = -\\mathbf k$ differ.
:::
`;export{e as default};