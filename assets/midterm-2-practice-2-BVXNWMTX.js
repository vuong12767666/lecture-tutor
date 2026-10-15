var e=`---
title: Midterm 2 Practice Test 2
exam: Midterm 2
minutes: 60
---

:::problem 1
Let $f(x,y) = xy$ and let $C$ be the ellipse $x^2 + 4y^2 = 8$.

**(a)** Use Lagrange multipliers to find the absolute max and min of $f$ on $C$.

Absolute max of $f$ on $C$ is {{expr 2: 2}} which occurs at the point(s) {{point 1: (2, 1); (-2, -1)}}

Absolute min of $f$ on $C$ is {{expr 1: -2}} which occurs at the point(s) {{point 1: (2, -1); (-2, 1)}}

**(b)** At the point $(2, 1)$, the multiplier $\\lambda$ in $\\nabla f = \\lambda \\nabla g$ is: {{circle 1: $-\\tfrac14$ | *$\\tfrac14$ | $\\tfrac12$ | $2$}}
+++
review: 2026-09-30 The method

**What to recognize.** Extremes of $f$ *on a curve* mean Lagrange multipliers. An ellipse is closed and bounded, so a max and a min exist.

**Steps.**

1. $g = x^2 + 4y^2$, so $\\nabla f = \\langle y, x \\rangle$ and $\\nabla g = \\langle 2x, 8y \\rangle$.
2. Equations: $y = 2\\lambda x$, $x = 8\\lambda y$, and $x^2 + 4y^2 = 8$.
3. If $x = 0$, the first equation gives $y = 0$, which isn't on the ellipse, so $x, y \\neq 0$. Multiply the first two equations: $xy = 16\\lambda^2 xy$, so $\\lambda^2 = \\tfrac{1}{16}$ and $\\lambda = \\pm\\tfrac14$.
4. $\\lambda = \\tfrac14$ gives $y = \\tfrac{x}{2}$. Then $x^2 + x^2 = 8$, so $x = \\pm 2$: the points $(2, 1)$ and $(-2, -1)$, where $f = 2$.
5. $\\lambda = -\\tfrac14$ gives $y = -\\tfrac{x}{2}$: the points $(2, -1)$ and $(-2, 1)$, where $f = -2$.

**(b)** At $(2, 1)$: $y = 2\\lambda x$ becomes $1 = 4\\lambda$, so $\\lambda = \\tfrac14$.

**Why not the other choices in (b).**
- **$-\\tfrac14$** belongs to the min points $(2,-1)$ and $(-2,1)$.
- **$\\tfrac12$ or $2$** don't satisfy $1 = 4\\lambda$ (or $2 = 8\\lambda$ from the other equation).

**Common mistake.** Dividing the equations without checking $x, y \\ne 0$, or missing two of the four points.
:::

:::problem 2
Let $f(x,y,z) = x^2 y z$ and $P = (1, 2, -1)$.

The directional derivative of $f$ at $P$ in the direction toward the point $(3, 3, 1)$ is {{expr 3: -5/3}}

The maximum rate of change of $f$ at $P$ is {{expr 1: sqrt(21)}}
+++
review: 2026-09-18 Directional derivatives; 2026-09-18 The gradient

**What to recognize.** $D_{\\vec u} f = \\nabla f \\cdot \\vec u$ with $\\vec u$ a **unit** vector, and the maximum rate is $\\lVert \\nabla f \\rVert$.

**Steps.**

1. $\\nabla f = \\langle 2xyz,\\; x^2 z,\\; x^2 y \\rangle = \\langle -4,\\; -1,\\; 2 \\rangle$ at $P$.
2. Direction: $\\vec v = \\langle 3 - 1,\\; 3 - 2,\\; 1 - (-1) \\rangle = \\langle 2, 1, 2 \\rangle$ with $\\lVert \\vec v \\rVert = 3$, so $\\vec u = \\tfrac13 \\langle 2, 1, 2 \\rangle$.
3. $D_{\\vec u} f = \\tfrac13(-8 - 1 + 4) = -\\tfrac53$.
4. Maximum rate: $\\lVert \\nabla f \\rVert = \\sqrt{16 + 1 + 4} = \\sqrt{21}$.

**Common mistakes.** Using $\\langle 3, 3, 1 \\rangle$ (the target point) as the direction. Forgetting to divide by $\\lVert \\vec v \\rVert = 3$ (that gives $-5$).
:::

:::problem 3
Let $f(x,y) = x^3 - 12x + y^2 - 2y$.

The local min of $f$ is at the point {{point 2: (2, 1)}} with value {{expr 1: -17}}

The saddle point of $f$ is at {{point 1: (-2, 1)}}

Does $f$ have a local max? {{circle 1: yes | *no}}
+++
review: 2026-09-25 Critical points; 2026-09-25 The second derivative test

**What to recognize.** Find all critical points, then classify each with $D = f_{xx} f_{yy} - f_{xy}^2$.

**Steps.**

1. $f_x = 3x^2 - 12 = 0$ gives $x = \\pm 2$, and $f_y = 2y - 2 = 0$ gives $y = 1$. Critical points: $(2, 1)$ and $(-2, 1)$.
2. $f_{xx} = 6x$, $f_{yy} = 2$, $f_{xy} = 0$, so $D = 12x$.
3. At $(2, 1)$: $D = 24 > 0$ and $f_{xx} = 12 > 0$: a **local min**, with $f = 8 - 24 + 1 - 2 = -17$.
4. At $(-2, 1)$: $D = -24 < 0$: a **saddle**.

**Why not "yes".** The only critical points are a min and a saddle, and a local max can only be at a critical point.

**Common mistake.** Missing $x = -2$ by taking only the positive square root.
:::

:::scratch
:::

:::problem 4
The contour map of a differentiable function $f$ is shown on the region $D = \\{-2 \\le x \\le 2,\\ -1.5 \\le y \\le 1.5\\}$. Each level curve is labeled with its value of $f$. Circle the best answer. (1 point each)

{{figure 0: contour-m2p2}}

**(a)** The number of local minima of $f$ in $D$ is: {{circle 1: 0 | 1 | *2 | 3}}

**(b)** The value of $f$ at its saddle point is: {{circle 1: 0 | 0.5 | *1 | 2}}

**(c)** The directional derivative $D_{\\vec u} f(P)$, where $\\vec u$ is the unit vector drawn as the arrow labeled $\\vec u$ at $P$, is: {{circle 1: negative | zero | *positive}}

**(d)** The gradient $\\nabla f(A)$ points: {{circle 1: up | down | left | *right}}

**(e)** Circle the correct relationship: {{circle 1: *$\\lVert \\nabla f(A) \\rVert > \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert = \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert < \\lVert \\nabla f(B) \\rVert$}}

**(f)** For the curve $C$ shown, from $S$ to $E$, the integral $\\int_C \\nabla f \\cdot d\\mathbf r$ is: {{circle 1: -2 | -1 | 0 | *1 | 2 | 3}}
+++
review: 2026-09-18 Gradients and level curves; 2026-09-25 Critical points; 2026-10-09 The Fundamental Theorem for Line Integrals

**What to recognize.** Read the map with these facts:
- $\\nabla f$ is perpendicular to the level curves and points toward bigger labels.
- $\\lVert \\nabla f \\rVert$ is large where the level curves are close together.
- **Max or min:** the level curves form **rings inside rings** around one point (closed loops, one inside another). The point in the middle is a min if the labels get smaller toward it (a max if they get bigger).
- **Saddle:** one level curve **crosses itself**, making an X shape. The crossing point is the saddle.

(The map shows $f = (x^2 - 1)^2 + y^2$.)

**(a)** There are **two** sets of rings inside rings, centered at $(1, 0)$ and $(-1, 0)$. The labels get smaller toward each center ($0.5$, then $0.25$), so both are minima, with $f = 0$.

**(b)** Between the two minima, the curve labeled $1$ crosses itself at the origin, making a figure-eight shape. That crossing point is the saddle, so its value is the label on that curve: $1$.

**(c)** $\\vec u$ points straight up from $P$, toward curves with bigger labels, so $D_{\\vec u} f(P) > 0$. (Exactly: at $P = (0.5, 1.1)$, $f_y = 2y = 2.2$.)

**(d)** At $A$, the level curve runs vertically, so $\\nabla f$ (perpendicular to it) points straight left or straight right. The labels get bigger to the right, toward the outer curves, so it points **right**. (Exactly: $\\nabla f(1.5, 0) = \\langle 7.5, 0 \\rangle$.)

**(e)** Near $A$ the level curves are close together, and near $B$ they're far apart. Close-together curves mean $f$ changes a lot over a short distance, so $\\lVert \\nabla f(A) \\rVert$ is larger. (Exactly: $7.5$ vs $2.4$.)

**(f)** By the Fundamental Theorem, $\\int_C \\nabla f \\cdot d\\mathbf r = f(E) - f(S) = 2 - 1 = 1$.

**Why not the other choices.**
- **(a)** **0 or 1:** there are two separate sets of rings inside rings, one around each minimum. **3:** the third critical point, where the curve crosses itself, is a saddle, not a min.
- **(b)** **0** is the value at the two minima. **0.5 and 2** are curves that don't cross themselves.
- **(c)** **zero** would mean $\\vec u$ runs along a level curve. **negative** is backward, since the labels increase upward from $P$.
- **(d)** **left** points to lower values. **up or down** would be along the vertical level curve at $A$.
- **(e)** The gaps between curves are clearly different near $A$ and $B$, and smaller gaps (at $A$) mean a longer gradient.
- **(f)** **$-1$** has the sign backward, $f(S) - f(E)$. The others don't equal $2 - 1$.
:::

:::problem 5
The vector field $\\mathbf F = \\langle y^2 z + 1,\\; 2xyz,\\; xy^2 + 2z \\rangle$ on $\\mathbb{R}^3$ is conservative. Find the potential function $f$ with $\\mathbf F = \\nabla f$ and $f(0, 0, 0) = 0$.

$f(x,y,z) =$ {{expr 3: x y^2 z + x + z^2}}
+++
review: 2026-10-14 Conservative fields in 3D

**What to recognize.** A 3D potential function: integrate one variable at a time, and each new "constant" depends on one fewer variable.

**Steps.**

1. Integrate $P$ in $x$: $f = xy^2 z + x + g(y, z)$.
2. Match $Q$: $f_y = 2xyz + g_y = 2xyz$, so $g_y = 0$ and $g = h(z)$.
3. Match $R$: $f_z = xy^2 + h'(z) = xy^2 + 2z$, so $h = z^2 + C$.
4. $f(0,0,0) = 0$ gives $C = 0$:
$$f = xy^2 z + x + z^2.$$

**Check.** $\\nabla f = \\langle y^2 z + 1,\\; 2xyz,\\; xy^2 + 2z \\rangle$. ✓

**Common mistake.** Forgetting the $+x$ from integrating the $1$ in $P$, or the $z^2$ from $R$.
:::

:::problem 6
Let $C$ be the curve where the cylinder $y^2 + z^2 = 4$ meets the plane $x + y = 1$.

**(a)** Find a vector function $\\mathbf r(t)$ that parametrizes $C$, going around it exactly once. Give the domain of $t$.

{{self 4}}

**(b)** A tangent vector to $C$ at the point $(1, 0, 2)$ is: {{circle 1: *$\\langle 1, -1, 0 \\rangle$ | $\\langle 0, 0, 1 \\rangle$ | $\\langle 1, 1, 0 \\rangle$ | $\\langle 0, 1, 0 \\rangle$}}
+++
review: 2026-10-02 Curves as vector functions; 2026-10-02 Derivatives and tangent vectors

**What to recognize.** The cylinder uses $y$ and $z$, so parametrize those with $\\cos$ and $\\sin$, then let the plane give $x$.

**(a)** $y = 2\\cos t$, $z = 2\\sin t$, and $x = 1 - y = 1 - 2\\cos t$:
$$\\mathbf r(t) = \\langle 1 - 2\\cos t,\\; 2\\cos t,\\; 2\\sin t \\rangle, \\qquad 0 \\le t \\le 2\\pi.$$
**Grade yourself:** right if $y^2 + z^2 = 4$ and $x + y = 1$ for every $t$, traced exactly once.

**(b)** $(1, 0, 2)$ is at $t = \\tfrac\\pi2$ (where $y = 0$, $z = 2$). $\\mathbf r'(t) = \\langle 2\\sin t,\\; -2\\sin t,\\; 2\\cos t \\rangle$, so $\\mathbf r'(\\tfrac\\pi2) = \\langle 2, -2, 0 \\rangle$, a multiple of $\\langle 1, -1, 0 \\rangle$.

**Why not the other choices in (b).**
- **$\\langle 0, 0, 1 \\rangle$:** at that point $z = 2$ is at its top, so $z$ isn't changing.
- **$\\langle 1, 1, 0 \\rangle$:** along $C$, $x + y = 1$ stays constant, so tangent vectors need $x' + y' = 0$, and this has $1 + 1 = 2$.
- **$\\langle 0, 1, 0 \\rangle$:** it has $x' + y' = 1 \\ne 0$, so moving that way leaves the plane.
:::

:::scratch
:::

:::problem 7
A wire has the shape of the helix $\\mathbf r(t) = \\langle \\cos t,\\; \\sin t,\\; t \\rangle$ for $0 \\le t \\le \\pi$.

**(a)** The length of the wire is: {{circle 1: $\\pi$ | *$\\sqrt2\\,\\pi$ | $2\\pi$ | $\\pi^2$}}

**(b)** Find $\\displaystyle\\int_C x^2 z\\, ds$.

$\\int_C x^2 z\\, ds =$ {{expr 4: sqrt(2)*pi^2/4}}
+++
review: 2026-10-02 Arc length; 2026-10-05 Integrating a function along a curve

**What to recognize.** Scalar line integral: $\\int_C f\\, ds = \\int f(\\mathbf r(t))\\,\\lVert \\mathbf r'(t) \\rVert\\, dt$.

**(a)** $\\lVert \\mathbf r'(t) \\rVert = \\lVert \\langle -\\sin t, \\cos t, 1 \\rangle \\rVert = \\sqrt2$, so the length is $\\sqrt2\\,\\pi$.

**(b)**
1. Substitute: $x^2 z = \\cos^2 t \\cdot t$.
2. $\\displaystyle\\int_0^\\pi t\\cos^2 t \\cdot \\sqrt2\\, dt$. Use $\\cos^2 t = \\tfrac12(1 + \\cos 2t)$:
$$\\sqrt2\\left[\\frac{t^2}{4} + \\frac{t\\sin 2t}{4} + \\frac{\\cos 2t}{8}\\right]_0^\\pi = \\sqrt2\\left(\\frac{\\pi^2}{4} + 0 + \\frac18 - \\frac18\\right) = \\frac{\\sqrt2\\,\\pi^2}{4}.$$
(The $t\\cos 2t$ part needs integration by parts: $\\int t\\cos 2t\\, dt = \\tfrac{t\\sin 2t}{2} + \\tfrac{\\cos 2t}{4}$.)

**Why not the other choices in (a).**
- **$\\pi$** forgets the vertical rise: the speed is $\\sqrt2$, not $1$.
- **$2\\pi$** would be the length of a full circle, not this half-turn helix.
- **$\\pi^2$** isn't speed $\\times$ time. The length is $\\int_0^\\pi \\sqrt2\\, dt = \\sqrt2 \\cdot \\pi$, with the speed $\\sqrt2$ constant.

**Common mistake.** Forgetting $\\lVert \\mathbf r' \\rVert = \\sqrt2$.
:::

:::problem 8
Let $\\mathbf F = \\langle y^2,\\; x \\rangle$ and let $C$ be the triangle from $(0,0)$ to $(1,0)$ to $(1,1)$ and back to $(0,0)$.

**(a)** $\\displaystyle\\oint_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 3: 1/6}}

**(b)** Is $\\mathbf F$ conservative? {{circle 1: yes | *no}}
+++
review: 2026-10-09 Pieces and directions; 2026-10-09 Path independence

**What to recognize.** A piecewise path: do each side separately and add. Use $\\int P\\,dx + Q\\,dy$ with $P = y^2$, $Q = x$.

**Steps.**

1. $(0,0) \\to (1,0)$: $y = 0$ and $dy = 0$, so the integrand is $0$. Contributes $0$.
2. $(1,0) \\to (1,1)$: $x = 1$, $dx = 0$, $\\mathbf r = \\langle 1, t \\rangle$. $\\int_0^1 1\\, dt = 1$.
3. $(1,1) \\to (0,0)$: $\\mathbf r = \\langle 1 - t, 1 - t \\rangle$, $\\mathbf r' = \\langle -1, -1 \\rangle$. $\\mathbf F \\cdot \\mathbf r' = -(1-t)^2 - (1-t)$, and $\\int_0^1 = -\\tfrac13 - \\tfrac12 = -\\tfrac56$.
4. Total: $0 + 1 - \\tfrac56 = \\tfrac16$.

**(b)** A closed loop gave a nonzero answer, so $\\mathbf F$ is **not** conservative. (Also $P_y = 2y \\ne 1 = Q_x$.)

**Why not "yes".** A conservative field would give $0$ around every closed loop.

**Common mistake.** Getting the direction wrong on the last side, which is traced from $(1,1)$ back to the origin.
:::

:::problem 9
Find the length of $\\mathbf r(t) = \\langle 3t,\\; 3t^2,\\; 2t^3 \\rangle$ for $0 \\le t \\le 1$.

Length = {{expr 4: 5}}
+++
review: 2026-10-02 Arc length

**What to recognize.** Arc length $\\int \\lVert \\mathbf r' \\rVert\\, dt$, set up so the root simplifies.

**Steps.**

1. $\\mathbf r' = \\langle 3,\\; 6t,\\; 6t^2 \\rangle$.
2. $\\lVert \\mathbf r' \\rVert^2 = 9 + 36t^2 + 36t^4 = 9(1 + 4t^2 + 4t^4) = 9(1 + 2t^2)^2$.
3. So $\\lVert \\mathbf r' \\rVert = 3(1 + 2t^2)$, and
$$L = \\int_0^1 3(1 + 2t^2)\\, dt = 3\\left(1 + \\frac23\\right) = 5.$$

**Common mistake.** Not factoring out the $9$ first, which hides the perfect square.
:::

:::problem 10
A particle moves along $\\mathbf r(t) = \\langle e^t,\\; e^{-t},\\; \\sqrt2\\, t \\rangle$.

Its speed at $t = 0$ is {{expr 2: 2}}

Its acceleration at $t = 0$ is $\\mathbf a(0) = \\langle$ {{expr 1: 1}} , {{expr 1: 1}} , {{expr 1: 0}} $\\rangle$
+++
review: 2026-10-02 Velocity, speed, and acceleration

**Steps.**

1. $\\vec v = \\langle e^t,\\; -e^{-t},\\; \\sqrt2 \\rangle$, so $\\vec v(0) = \\langle 1, -1, \\sqrt2 \\rangle$ and the speed is $\\sqrt{1 + 1 + 2} = 2$.
2. $\\mathbf a = \\langle e^t,\\; e^{-t},\\; 0 \\rangle$, so $\\mathbf a(0) = \\langle 1, 1, 0 \\rangle$.

**Common mistake.** Losing a sign: the derivative of $e^{-t}$ is $-e^{-t}$, and differentiating again gives back $+e^{-t}$.
:::

:::scratch
:::

:::problem 11
Find the absolute max and min of $f(x,y) = x^2 + y^2 - 2x - 4y$ on the square $0 \\le x \\le 3$, $0 \\le y \\le 3$.

Absolute max is {{expr 1: 3}} at the point(s) {{point 1: (3, 0)}}

Absolute min is {{expr 2: -5}} at the point(s) {{point 1: (1, 2)}}
+++
review: 2026-09-28 The three-step method

**What to recognize.** Absolute extremes on a closed, bounded region: (1) inside, (2) the boundary, (3) compare.

**Steps.**

1. **Inside:** $\\nabla f = \\langle 2x - 2,\\; 2y - 4 \\rangle = \\mathbf 0$ at $(1, 2)$, which is inside the square, with $f = 1 + 4 - 2 - 8 = -5$.
2. **Edges** (each becomes a one-variable function):
   - $y = 0$: $x^2 - 2x$ on $[0,3]$, from $-1$ (at $x = 1$) to $3$ (at $x = 3$).
   - $y = 3$: $x^2 - 2x - 3$, from $-4$ to $0$.
   - $x = 0$: $y^2 - 4y$, from $-4$ (at $y = 2$) to $0$.
   - $x = 3$: $y^2 - 4y + 3$, from $-1$ to $3$ (at $y = 0$).
3. **Compare:** the largest value is $3$, at $(3, 0)$. The smallest is $-5$, at the interior point $(1, 2)$.

**Check.** $f = (x - 1)^2 + (y - 2)^2 - 5$, so $f$ is smallest at $(1, 2)$ and largest at the point of the square farthest from $(1, 2)$. That's the corner $(3, 0)$, at squared distance $4 + 4 = 8$, giving $8 - 5 = 3$. ✓

**Common mistake.** Forgetting to check the corners, or stopping at the interior point.
:::

:::problem 12
Consider the three vector fields $E$, $F$, and $G$ shown below. (1 point each)

{{figure 0: fields-m2p2}}

**(a)** One of these is $\\langle y,\\; -x \\rangle$. Circle it: {{circle 1: *E | F | G}}

**(b)** Exactly one of them is conservative. Circle it: {{circle 1: E | *F | G}}

**(c)** Exactly one of these is a flowline of $F$. Circle it: {{circle 1: $\\langle t, 2t \\rangle$ | $\\langle \\cos t, \\sin t \\rangle$ | *$\\langle e^t, 2e^t \\rangle$ | $\\langle e^{-t}, e^{-t} \\rangle$}}

**(d)** For the unit circle traced counterclockwise, $\\oint E \\cdot d\\mathbf r$ is: {{circle 1: *negative | zero | positive}}
+++
review: 2026-10-07 What a vector field is; 2026-10-07 Flowlines; 2026-10-07 Line integrals of vector fields; 2026-10-12 A necessary condition

The fields are $E = \\langle y, -x \\rangle$, $F = \\langle x, y \\rangle$, and $G = \\langle y, 1 \\rangle$.

**(a)** At $(1, 0)$, $\\langle y, -x \\rangle = \\langle 0, -1 \\rangle$ points down, and at $(0, 1)$ it's $\\langle 1, 0 \\rangle$, pointing right. That's a **clockwise** swirl: **E**.

**(b)** $F = \\nabla\\big(\\tfrac{x^2 + y^2}{2}\\big)$, pointing straight outward. **F**.

**(c)** A flowline needs $\\mathbf r' = F(\\mathbf r) = \\mathbf r$. For $\\langle e^t, 2e^t \\rangle$, $\\mathbf r' = \\langle e^t, 2e^t \\rangle = \\mathbf r$. ✓

**(d)** $\\mathbf r = \\langle \\cos t, \\sin t \\rangle$, so $E(\\mathbf r) \\cdot \\mathbf r' = \\langle \\sin t, -\\cos t \\rangle \\cdot \\langle -\\sin t, \\cos t \\rangle = -1$, and the integral is $-2\\pi$: **negative**. $E$ swirls clockwise while you go counterclockwise.

**Why not the other choices.**
- **(a)** **F** points straight out from the origin. **G** has $y$-component $1$ everywhere, so it never points down, but $\\langle y, -x \\rangle$ points down at $(1, 0)$.
- **(b)** **E** fails cross-partials ($P_y = 1$, $Q_x = -1$). **G** fails too ($P_y = 1$, $Q_x = 0$).
- **(c)** $\\langle t, 2t \\rangle$: $\\mathbf r' = \\langle 1, 2 \\rangle \\neq \\langle t, 2t \\rangle$ except at $t = 1$. $\\langle \\cos t, \\sin t \\rangle$: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle \\neq \\mathbf r$. $\\langle e^{-t}, e^{-t} \\rangle$: $\\mathbf r' = -\\mathbf r$, which flows inward, the wrong way.
- **(d)** **zero** would need a conservative field, and $E$ swirls. **positive** would need the field to turn the same way you walk.
:::
`;export{e as default};