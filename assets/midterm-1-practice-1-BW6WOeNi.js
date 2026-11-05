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

**What to recognize.** An expanded sphere equation: complete the square in each variable to read off the center and radius.

**Steps.**

1. $x^2 - 6x = (x - 3)^2 - 9$, $\\;y^2 + 2y = (y + 1)^2 - 1$, $\\;z^2 + 4z = (z + 2)^2 - 4$.
2. So $(x - 3)^2 + (y + 1)^2 + (z + 2)^2 = 2 + 9 + 1 + 4 = 16$.
3. Center $(3, -1, -2)$, radius $\\sqrt{16} = 4$.
4. **(b)** Set $z = 0$: $(x - 3)^2 + (y + 1)^2 = 16 - (0 + 2)^2 = 12$. That's a circle of radius $\\sqrt{12} = 2\\sqrt3$.

**Why (b) works.** The center is at height $-2$, so it's distance $2$ from the $xy$-plane. Each point where the sphere meets the plane is $4$ from the center, so the circle's radius is $\\sqrt{4^2 - 2^2} = \\sqrt{12}$.

**Check.** The point $(7, -1, -2)$ is $4$ units from the center: $49 + 1 + 4 - 42 - 2 - 8 = 2$. ✓

**Common mistakes.** Writing the center as $(-3, 1, 2)$ (the signs flip: $(x - 3)^2$ means $h = 3$), or giving $16$ as the radius.
:::

:::problem 2
Let $\\mathbf u = \\langle 1, 2, -2 \\rangle$ and $\\mathbf v = \\langle 3, 0, 4 \\rangle$.

**(a)** $\\mathbf u \\cdot \\mathbf v =$ {{expr 1: -5}}

**(b)** $\\cos\\theta =$ {{expr 2: -1/3}}, where $\\theta$ is the angle between $\\mathbf u$ and $\\mathbf v$.

**(c)** The angle $\\theta$ is: {{circle 1: acute | right | *obtuse}}

**(d)** The scalar projection of $\\mathbf v$ onto $\\mathbf u$, $\\operatorname{comp}_{\\mathbf u} \\mathbf v$, is {{expr 1: -5/3}}
+++
review: 2026-08-26 The dot product; 2026-08-26 The angle between two vectors; 2026-08-28

**Steps.**

1. $\\mathbf u \\cdot \\mathbf v = 3 + 0 - 8 = -5$.
2. $|\\mathbf u| = \\sqrt{1 + 4 + 4} = 3$ and $|\\mathbf v| = \\sqrt{9 + 0 + 16} = 5$, so $\\cos\\theta = \\dfrac{-5}{3 \\cdot 5} = -\\dfrac13$.
3. **(d)** $\\operatorname{comp}_{\\mathbf u} \\mathbf v = \\dfrac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|} = -\\dfrac53$. It's $|\\mathbf v|\\cos\\theta = 5 \\cdot (-\\tfrac13)$: the signed length of $\\mathbf v$'s shadow along $\\mathbf u$.

**Why not the other choices in (c).**
- **acute:** needs $\\mathbf u \\cdot \\mathbf v > 0$, but it's $-5$.
- **right:** needs $\\mathbf u \\cdot \\mathbf v = 0$.

**Common mistake in (d).** Dividing by $|\\mathbf v|$ instead of $|\\mathbf u|$. You project **onto** $\\mathbf u$, so you divide by the length of $\\mathbf u$.
:::

:::problem 3
Let $P = (1, 0, 0)$, $Q = (0, 2, 0)$, and $R = (0, 0, 3)$.

**(a)** The area of triangle $PQR$ is {{expr 2: 7/2}}

**(b)** The plane through $P$, $Q$, and $R$:

{{plane 4: 6, 3, 2, 6}}
+++
review: 2026-08-31; 2026-08-28

**What to recognize.** The cross product of two sides gives both the area (half its length) and a normal vector for the plane.

**Steps.**

1. $\\overrightarrow{PQ} = \\langle -1, 2, 0 \\rangle$ and $\\overrightarrow{PR} = \\langle -1, 0, 3 \\rangle$.
2. $\\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle 2\\cdot 3 - 0\\cdot 0,\\ 0\\cdot(-1) - (-1)\\cdot 3,\\ (-1)\\cdot 0 - 2\\cdot(-1) \\rangle = \\langle 6, 3, 2 \\rangle$.
3. **(a)** $|\\langle 6, 3, 2 \\rangle| = \\sqrt{36 + 9 + 4} = 7$ is the area of the parallelogram on these sides, so the triangle's area is $\\tfrac72$.
4. **(b)** Normal $\\langle 6, 3, 2 \\rangle$ through $P$: $6(x - 1) + 3y + 2z = 0$, so $6x + 3y + 2z = 6$.

**Check.** $P$: $6 = 6$. $Q$: $6 = 6$. $R$: $6 = 6$. ✓ Also $\\langle 6, 3, 2 \\rangle \\cdot \\overrightarrow{PQ} = -6 + 6 = 0$ and $\\cdot\\, \\overrightarrow{PR} = -6 + 6 = 0$. ✓

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

**Steps.**

1. $L$: $\\mathbf r(t) = \\langle 1 + 2t,\\ 2 - t,\\ 3 + t \\rangle$.
2. **(a)** Substitute into the plane: $(1 + 2t) + (2 - t) + (3 + t) = 6 + 2t = 12$, so $t = 3$ and the point is $(7, -1, 6)$. Check: $7 - 1 + 6 = 12$. ✓
3. **(b)** The plane's normal is $\\mathbf n = \\langle 1, 1, -1 \\rangle$, and $\\mathbf n \\cdot \\langle 2, -1, 1 \\rangle = 2 - 1 - 1 = 0$. The line's direction is perpendicular to the normal, so the line runs parallel to the plane. Its point $(1, 2, 3)$ gives $1 + 2 - 3 = 0 \\ne 5$, so it's not in the plane.

**Another way to see (b).** Substitute: $(1 + 2t) + (2 - t) - (3 + t) = 0$ for every $t$. It never equals $5$, so there's no intersection.

**Why not the other choices in (b).**
- **lies in it:** then every point would satisfy $x + y - z = 5$, but the left side is always $0$.
- **crosses it at one point:** that needs $\\mathbf n \\cdot \\mathbf d \\ne 0$.
- **perpendicular to it:** that needs the direction parallel to $\\mathbf n$, but $\\langle 2, -1, 1 \\rangle$ isn't a multiple of $\\langle 1, 1, -1 \\rangle$.
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

**How to tell them apart.** Count the squared variables, then look at signs.

- **One variable not squared** ($z = \\ldots$): a paraboloid. Same signs on $x^2$ and $y^2$ give an **elliptic** paraboloid (a bowl), opposite signs a **hyperbolic** one (a saddle).
- **All three squared, set equal to $0$** (or $z^2 = x^2 + y^2$): a **cone**.
- **All three squared, $= 1$, one minus sign:** a hyperboloid of **one** sheet. **Two** minus signs: **two** sheets.

**Checks with slices.**
- (b) At $z = 0$: $x^2 + y^2 = 1$, a circle, and every height gives a circle ($x^2 + y^2 = 1 + z^2$). One connected piece.
- (e) $x^2 + y^2 = z^2 - 1$ needs $z^2 \\ge 1$, so nothing exists for $-1 < z < 1$: two separate pieces.
- (c) At $z = 0$ only the point $(0,0)$: the tip of the cone.

**Why not the other choices.**
- **(a)** and **(d)** have $z$ not squared, so they can't be a cone or a hyperboloid. (a) has $x^2$ and $y^2$ with the same sign, so it isn't hyperbolic; (d) has opposite signs, so it isn't elliptic.
- **(b)**, **(c)**, and **(e)** square all three variables, so they aren't paraboloids. (c) has $0$ where the others have $1$ (write it as $x^2 + y^2 - z^2 = 0$), so it's the cone. (b) has one minus sign and (e) has two, so (b) is one sheet and (e) is two.
:::

:::problem 6
Let $f(x, y) = \\sqrt{4 - x^2 - y^2}$.

**(a)** The domain of $f$ is: {{circle 1: *the disk $x^2 + y^2 \\le 4$ | the circle $x^2 + y^2 = 4$ | the open disk $x^2 + y^2 < 4$ | every point $(x, y)$}}

**(b)** The range of $f$ is: {{circle 1: *$[0, 2]$ | $[0, 4]$ | $[0, \\infty)$ | $[-2, 2]$}}

**(c)** The level curve $f(x, y) = 1$ is a circle of radius {{expr 1: sqrt(3)}}
+++
review: 2026-09-02

**Steps.**

1. **(a)** The square root needs $4 - x^2 - y^2 \\ge 0$, so $x^2 + y^2 \\le 4$, including the edge (where $f = 0$).
2. **(b)** $4 - x^2 - y^2$ goes from $4$ (at the origin) down to $0$ (on the edge), so $f$ goes from $2$ down to $0$.
3. **(c)** $\\sqrt{4 - x^2 - y^2} = 1$ gives $x^2 + y^2 = 3$, radius $\\sqrt3$.

**Why not the other choices.**
- **(a)** The circle alone leaves out the inside, where $f$ is defined. The open disk leaves out the edge, where $\\sqrt0 = 0$ is fine. Not every point: at $(3, 0)$ you'd need $\\sqrt{-5}$.
- **(b)** $[0, 4]$ forgets the square root. $[0, \\infty)$ ignores that the inside is at most $4$. $[-2, 2]$: a square root is never negative.

**The picture.** The graph $z = \\sqrt{4 - x^2 - y^2}$ is the top half of the sphere of radius $2$.
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

**(a)** Along the $x$-axis ($y = 0$) the function is $\\tfrac{x^2}{x^2} = 1$. Along the $y$-axis it's $\\tfrac{-y^2}{y^2} = -1$. Two paths give two different values, so the limit doesn't exist.

**(b)** $x^2 \\le x^2 + y^2$, so $\\left|\\dfrac{x^2 y}{x^2 + y^2}\\right| \\le |y| \\to 0$. Squeezed to $0$.

**(c)** The function is a fraction of polynomials and the bottom is $3 \\ne 0$ at $(1, 2)$, so it's continuous there: plug in. $\\dfrac{2 + 3}{3} = \\dfrac53$.

**(d)** With $y = 2x$: $\\dfrac{2x^2}{x^2 + 4x^2} = \\dfrac25$. (Along $y = x$ it's $\\tfrac12$ instead, so this function's limit at the origin doesn't exist.)

**Why not the other choices.**
- **(a)** $0$ and $1$: the function is $1$ along one axis and $-1$ along the other, so no single value works.
- **(b)** $1$: the squeeze shows the values get close to $0$. Does not exist: every path gives $0$, and the squeeze proves it for all of them at once.

**Common mistake.** Checking two paths that agree and concluding the limit exists. Agreeing paths never prove a limit; you need a squeeze (or continuity).
:::

:::problem 8
Let $f(x, y) = x^2 y^3 + e^{xy}$.

$f_x =$ {{expr 2: 2 x y^3 + y exp(x y)}}

$f_{xy} =$ {{expr 2: 6 x y^2 + exp(x y) + x y exp(x y)}}
+++
review: 2026-09-11; 2026-09-14

**Steps.**

1. $f_x$: treat $y$ as a constant. $\\tfrac{\\partial}{\\partial x}(x^2 y^3) = 2xy^3$, and by the chain rule $\\tfrac{\\partial}{\\partial x} e^{xy} = y e^{xy}$.
2. $f_{xy} = (f_x)_y$: differentiate $2xy^3 + y e^{xy}$ in $y$. The first term gives $6xy^2$. The second needs the product rule: $1 \\cdot e^{xy} + y \\cdot x e^{xy}$.
3. So $f_{xy} = 6xy^2 + e^{xy} + xy e^{xy}$.

**Check with Clairaut.** $f_y = 3x^2y^2 + x e^{xy}$, and $(f_y)_x = 6xy^2 + e^{xy} + xy e^{xy}$, the same. ✓

**Common mistake.** Forgetting the product rule on $y e^{xy}$, which loses the $e^{xy}$ term.
:::

:::problem 9
Let $f(x, y) = x^2 + 3xy - y^2$.

**(a)** The tangent plane to $z = f(x, y)$ at $(1, 2, 3)$:

{{plane 3: 8, -1, -1, 3}}

**(b)** Use the linear approximation at $(1, 2)$ to estimate $f(1.1,\\ 1.9) \\approx$ {{expr 2: 3.9}}
+++
review: 2026-09-14

**Steps.**

1. $f(1, 2) = 1 + 6 - 4 = 3$. ✓ (the point is on the graph)
2. $f_x = 2x + 3y = 8$ and $f_y = 3x - 2y = -1$ at $(1, 2)$.
3. **(a)** $z = 3 + 8(x - 1) - (y - 2)$, which rearranges to $8x - y - z = 3$.
4. **(b)** $f(1.1, 1.9) \\approx 3 + 8(0.1) - (-0.1) = 3.9$.

**Check.** The exact value is $1.21 + 6.27 - 3.61 = 3.87$, close to $3.9$. ✓ And $(1, 2, 3)$ is on the plane: $8 - 2 - 3 = 3$. ✓

**Common mistake.** $\\Delta y = 1.9 - 2 = -0.1$, and $f_y = -1$, so the $y$-term is $+0.1$. Two minus signs.
:::

:::scratch
:::

:::problem 10
Let $z = x^2 y$, where $x = t^2 + 1$ and $y = 3t - 1$. Find $\\dfrac{dz}{dt}$ at $t = 1$.

$\\dfrac{dz}{dt}\\Big|_{t=1} =$ {{expr 3: 28}}
+++
review: 2026-09-16; 2026-09-18 More on the chain rule

**Steps.**

1. At $t = 1$: $x = 2$ and $y = 2$.
2. $z_x = 2xy = 8$ and $z_y = x^2 = 4$.
3. $\\tfrac{dx}{dt} = 2t = 2$ and $\\tfrac{dy}{dt} = 3$.
4. $\\tfrac{dz}{dt} = z_x \\tfrac{dx}{dt} + z_y \\tfrac{dy}{dt} = 8 \\cdot 2 + 4 \\cdot 3 = 28$.

**Check by substituting first.** $z = (t^2 + 1)^2 (3t - 1)$, so $z' = 2(t^2 + 1)(2t)(3t - 1) + 3(t^2 + 1)^2$. At $t = 1$: $2 \\cdot 2 \\cdot 2 \\cdot 2 + 3 \\cdot 4 = 16 + 12 = 28$. ✓
:::

:::problem 11
The equation $x^2 + y^2 + z^2 = 3xyz$ defines $z$ as a function of $x$ and $y$ near $(1, 1, 1)$. Find $\\dfrac{\\partial z}{\\partial x}$ at $(1, 1, 1)$.

$\\dfrac{\\partial z}{\\partial x} =$ {{expr 3: -1}}
+++
review: 2026-09-16

**What to recognize.** Implicit differentiation: write everything as $F(x, y, z) = 0$, then $\\dfrac{\\partial z}{\\partial x} = -\\dfrac{F_x}{F_z}$.

**Steps.**

1. $F = x^2 + y^2 + z^2 - 3xyz$. At $(1, 1, 1)$: $F = 3 - 3 = 0$, so the point is on the surface. ✓
2. $F_x = 2x - 3yz = -1$ and $F_z = 2z - 3xy = -1$ at $(1, 1, 1)$.
3. $\\dfrac{\\partial z}{\\partial x} = -\\dfrac{-1}{-1} = -1$.

**Why the formula.** Holding $y$ fixed and differentiating $F(x, y, z(x, y)) = 0$ in $x$ by the chain rule gives $F_x + F_z \\dfrac{\\partial z}{\\partial x} = 0$.

**Common mistake.** Dropping the minus sign in $-F_x / F_z$.
:::

:::problem 12
Circle true or false. (1 point each)

**(a)** If $f_x$ and $f_y$ both exist at $(a, b)$, then $f$ is continuous at $(a, b)$. {{circle 1: true | *false}}

**(b)** If $\\mathbf u \\cdot \\mathbf v = 0$ and $\\mathbf u \\times \\mathbf v = \\mathbf 0$, then $\\mathbf u = \\mathbf 0$ or $\\mathbf v = \\mathbf 0$. {{circle 1: *true | false}}

**(c)** For all vectors, $\\mathbf u \\times \\mathbf v = \\mathbf v \\times \\mathbf u$. {{circle 1: true | *false}}
+++
review: 2026-09-11; 2026-08-31; 2026-09-14

**(a) False.** Partial derivatives only look along the two axes. $f = \\dfrac{xy}{x^2 + y^2}$ (with $f(0,0) = 0$) is $0$ on both axes, so $f_x(0,0) = f_y(0,0) = 0$, but along $y = x$ it's $\\tfrac12$, so it isn't continuous at the origin.

**(b) True.** $|\\mathbf u \\cdot \\mathbf v| = |\\mathbf u||\\mathbf v||\\cos\\theta|$ and $|\\mathbf u \\times \\mathbf v| = |\\mathbf u||\\mathbf v|\\sin\\theta$. If both are $0$ and neither vector is $\\mathbf 0$, then $\\cos\\theta = \\sin\\theta = 0$, which can't happen since $\\cos^2\\theta + \\sin^2\\theta = 1$.

**(c) False.** Swapping the order flips the direction: $\\mathbf u \\times \\mathbf v = -\\,\\mathbf v \\times \\mathbf u$. For example, $\\mathbf i \\times \\mathbf j = \\mathbf k$ but $\\mathbf j \\times \\mathbf i = -\\mathbf k$.

**Why not the other choices.**
- **(a) true:** the function above has both partial derivatives at the origin and still isn't continuous there, so "true" fails.
- **(b) false:** a counterexample would need two nonzero vectors with $\\cos\\theta = 0$ and $\\sin\\theta = 0$ at once, and no angle has both.
- **(c) true:** one example is enough to break an "always": $\\mathbf i \\times \\mathbf j = \\mathbf k$ and $\\mathbf j \\times \\mathbf i = -\\mathbf k$ differ.
:::
`;export{e as default};