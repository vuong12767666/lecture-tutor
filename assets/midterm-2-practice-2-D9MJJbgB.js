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

**The goal.** Extremes of $f$ *on a curve* mean Lagrange multipliers. An ellipse is closed and bounded, so a max and a min exist; Lagrange finds the candidates and comparing $f$ picks them.

**Step 1: gradients.** *Why:* at an extreme on the curve, $\\nabla f$ must be parallel to $\\nabla g$. $g = x^2 + 4y^2$, so $\\nabla f = \\langle y, x \\rangle$ and $\\nabla g = \\langle 2x, 8y \\rangle$.

**Step 2: equations.** $y = 2\\lambda x$, $x = 8\\lambda y$, and $x^2 + 4y^2 = 8$.

**Step 3: rule out zeros, then find $\\lambda$.** *Why check zeros first:* the next step divides by $xy$. If $x = 0$, the first equation gives $y = 0$, but $(0, 0)$ isn't on the ellipse; so $x, y \\ne 0$. *Why multiply the two equations:* it removes $x$ and $y$ at once: $xy = 16\\lambda^2 xy$, so $\\lambda^2 = \\tfrac1{16}$ and $\\lambda = \\pm\\tfrac14$.

**Step 4: $\\lambda = \\tfrac14$.** Then $y = \\tfrac x2$. *Why the constraint next:* the points must be on the ellipse. $x^2 + x^2 = 8$, so $x = \\pm 2$: $(2, 1)$ and $(-2, -1)$, where $f = 2$.

**Step 5: $\\lambda = -\\tfrac14$.** Then $y = -\\tfrac x2$: $(2, -1)$ and $(-2, 1)$, where $f = -2$.

**Step 6: compare.** Max $2$, min $-2$, each at two points.

**(b)** *Why use the first equation:* it involves $\\lambda$ directly. At $(2, 1)$: $1 = 2\\lambda \\cdot 2$, so $\\lambda = \\tfrac14$.

**Why not the other choices in (b).**
- **$-\\tfrac14$** belongs to the min points $(2, -1)$ and $(-2, 1)$.
- **$\\tfrac12$ or $2$** don't satisfy $1 = 4\\lambda$ (or $2 = 8\\lambda$ from the other equation).

**Common mistake.** Dividing without checking $x, y \\ne 0$, or missing two of the four points.
:::

:::problem 2
Let $f(x,y,z) = x^2 y z$ and $P = (1, 2, -1)$.

The directional derivative of $f$ at $P$ in the direction toward the point $(3, 3, 1)$ is {{expr 3: -5/3}}

The maximum rate of change of $f$ at $P$ is {{expr 1: sqrt(21)}}
+++
review: 2026-09-18 Directional derivatives; 2026-09-18 The gradient

**The goal.** The rate of change in a direction is $\\nabla f \\cdot \\vec u$, with $\\vec u$ a **unit** vector in that direction, and the fastest rate is $\\lVert \\nabla f \\rVert$. So find the gradient at $P$ and the unit direction.

**Step 1: the gradient at $P$.** $\\nabla f = \\langle 2xyz,\\ x^2 z,\\ x^2 y \\rangle = \\langle -4, -1, 2 \\rangle$ at $(1, 2, -1)$.

**Step 2: the direction.** *Why subtract:* "toward $(3, 3, 1)$" means the arrow from $P$ to that point: $\\vec v = \\langle 2, 1, 2 \\rangle$. *Why divide by its length:* the formula needs a unit vector, or the answer gets multiplied by the length. $\\lVert \\vec v \\rVert = 3$, so $\\vec u = \\tfrac13\\langle 2, 1, 2 \\rangle$.

**Step 3: dot.** $D_{\\vec u} f = \\tfrac13(-8 - 1 + 4) = -\\tfrac53$.

**Step 4: maximum rate.** *Why the gradient's length:* $\\nabla f \\cdot \\vec u = \\lVert \\nabla f \\rVert\\cos\\theta$ is largest when $\\vec u$ points along $\\nabla f$. $\\lVert \\nabla f \\rVert = \\sqrt{16 + 1 + 4} = \\sqrt{21}$.

**Common mistakes.** Using $\\langle 3, 3, 1 \\rangle$ (the target point) as the direction. Forgetting to divide by $3$ (that gives $-5$).
:::

:::problem 3
Let $f(x,y) = x^3 - 12x + y^2 - 2y$.

The local min of $f$ is at the point {{point 2: (2, 1)}} with value {{expr 1: -17}}

The saddle point of $f$ is at {{point 1: (-2, 1)}}

Does $f$ have a local max? {{circle 1: yes | *no}}
+++
review: 2026-09-25 Critical points; 2026-09-25 The second derivative test

**The goal.** Local extremes and saddles can only be at critical points, so find all of them, then classify each with $D = f_{xx}f_{yy} - f_{xy}^2$.

**Step 1: critical points.** *Why both equations:* a critical point needs $f_x = 0$ **and** $f_y = 0$. $3x^2 - 12 = 0$ gives $x = \\pm 2$ (both roots), and $2y - 2 = 0$ gives $y = 1$: $(2, 1)$ and $(-2, 1)$.

**Step 2: second partials.** $f_{xx} = 6x$, $f_{yy} = 2$, $f_{xy} = 0$, so $D = 12x$.

**Step 3: classify.** *Why $D$ then $f_{xx}$:* $D > 0$ means $f$ curves the same way in every direction, and $f_{xx}$ shows whether that's up or down.
- $(2, 1)$: $D = 24 > 0$ and $f_{xx} = 12 > 0$: **local min**, $f = 8 - 24 + 1 - 2 = -17$.
- $(-2, 1)$: $D = -24 < 0$: **saddle**.

**Why not "yes".** A local max can only be at a critical point, and the only two are a min and a saddle.

**Common mistake.** Taking only the positive square root and missing $x = -2$.
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

**The goal.** Each part asks what a gradient fact looks like on a contour map. These facts do all the work:
- $\\nabla f$ is perpendicular to the level curves and points toward bigger labels (along a level curve $f$ doesn't change, so the fastest change is straight across).
- $\\lVert \\nabla f \\rVert$ is large where the curves are close together ($f$ changes a lot over a short distance).
- **Rings inside rings** around a point: a min if labels shrink toward it, a max if they grow.
- **A curve crossing itself** in an X: a saddle.

(The map shows $f = (x^2 - 1)^2 + y^2$.)

**(a)** *Why count ring centers:* each is a local min or max. There are two, at $(1, 0)$ and $(-1, 0)$, with labels shrinking toward each ($0.5$, then $0.25$): **two** minima, with $f = 0$.

**(b)** *Why the crossing curve's label:* the saddle is the crossing point, which lies on that curve. The curve labeled $1$ crosses itself at the origin: value **$1$**.

**(c)** *Why look at the labels you move into:* $D_{\\vec u}f$ is the rate of change that way. $\\vec u$ points up from $P$, toward bigger labels: **positive**. (Exactly: $f_y = 2y = 2.2$ at $P = (0.5, 1.1)$.)

**(d)** *Why left or right:* at $A$ the level curve is vertical, and $\\nabla f$ is perpendicular to it. Labels grow to the right: **right**. (Exactly: $\\nabla f(1.5, 0) = \\langle 7.5, 0 \\rangle$.)

**(e)** Close curves near $A$, far apart near $B$, so $\\lVert \\nabla f(A) \\rVert$ is larger ($7.5$ vs $2.4$).

**(f)** *Why no path work:* for a gradient field, $\\int_C \\nabla f \\cdot d\\mathbf r = f(E) - f(S)$ whatever the path. $2 - 1 = 1$.

**Why not the other choices.**
- **(a)** **0 or 1:** there are two separate sets of rings. **3:** the third critical point (the crossing) is a saddle.
- **(b)** **0** is the value at the minima. **0.5 and 2** label curves that don't cross themselves.
- **(c)** **zero** would mean $\\vec u$ runs along a level curve. **negative** is backward: labels increase upward from $P$.
- **(d)** **left** points to lower values. **up or down** would run along the vertical level curve at $A$.
- **(e)** The spacing clearly differs, and closer curves (at $A$) mean a longer gradient.
- **(f)** **$-1$** has the sign backward. The others don't equal $2 - 1$.
:::

:::problem 5
The vector field $\\mathbf F = \\langle y^2 z + 1,\\; 2xyz,\\; xy^2 + 2z \\rangle$ on $\\mathbb{R}^3$ is conservative. Find the potential function $f$ with $\\mathbf F = \\nabla f$ and $f(0, 0, 0) = 0$.

$f(x,y,z) =$ {{expr 3: x y^2 z + x + z^2}}
+++
review: 2026-10-14 Conservative fields in 3D

**The goal.** Find $f$ with $\\nabla f = \\mathbf F$. *The plan:* integrate one component, then use the other two to pin down what's left. Each step's "constant" depends on one fewer variable.

**Step 1: integrate $P$ in $x$.** *Why "$+\\, g(y, z)$":* $y$ and $z$ are held fixed, so anything depending only on them vanishes when you differentiate in $x$. $f = xy^2 z + x + g(y, z)$.

**Step 2: match $Q$.** $f_y = 2xyz + g_y$ must equal $2xyz$, so $g_y = 0$: $g$ depends only on $z$, call it $h(z)$.

**Step 3: match $R$.** $f_z = xy^2 + h'(z)$ must equal $xy^2 + 2z$, so $h'(z) = 2z$ and $h = z^2 + C$.

**Step 4: use $f(0, 0, 0) = 0$.** *Why:* it picks the constant. $C = 0$, so $f = xy^2 z + x + z^2$.

**Check.** $\\nabla f = \\langle y^2 z + 1,\\ 2xyz,\\ xy^2 + 2z \\rangle$ ✓.

**Common mistake.** Forgetting the $+x$ (from the $1$ in $P$) or the $z^2$ (from $R$).
:::

:::problem 6
Let $C$ be the curve where the cylinder $y^2 + z^2 = 4$ meets the plane $x + y = 1$.

**(a)** Find a vector function $\\mathbf r(t)$ that parametrizes $C$, going around it exactly once. Give the domain of $t$.

{{self 4}}

**(b)** A tangent vector to $C$ at the point $(1, 0, 2)$ is: {{circle 1: *$\\langle 1, -1, 0 \\rangle$ | $\\langle 0, 0, 1 \\rangle$ | $\\langle 1, 1, 0 \\rangle$ | $\\langle 0, 1, 0 \\rangle$}}
+++
review: 2026-10-02 Curves as vector functions; 2026-10-02 Derivatives and tangent vectors

**(a) The goal.** A curve that satisfies both equations for every $t$. *The plan:* the cylinder is a circle in $y$ and $z$, so use $\\cos$ and $\\sin$ there, then the plane gives $x$.

- *Why $y$ and $z$:* those are the variables in $y^2 + z^2 = 4$, a circle of radius $2$.
- $y = 2\\cos t$, $z = 2\\sin t$, $0 \\le t \\le 2\\pi$ for one trip around.
- The plane: $x = 1 - y = 1 - 2\\cos t$.
$$\\mathbf r(t) = \\langle 1 - 2\\cos t,\\ 2\\cos t,\\ 2\\sin t \\rangle, \\qquad 0 \\le t \\le 2\\pi.$$
**Grade yourself:** right if $y^2 + z^2 = 4$ and $x + y = 1$ for every $t$, traced exactly once.

**(b) The goal.** A tangent vector is $\\mathbf r'(t)$ at the $t$ that gives the point.
- *Which $t$:* $y = 0$ and $z = 2$ means $\\cos t = 0$ and $\\sin t = 1$, so $t = \\tfrac\\pi2$.
- $\\mathbf r'(t) = \\langle 2\\sin t, -2\\sin t, 2\\cos t \\rangle$, so $\\mathbf r'(\\tfrac\\pi2) = \\langle 2, -2, 0 \\rangle$, a multiple of $\\langle 1, -1, 0 \\rangle$.

**Why not the other choices in (b).**
- **$\\langle 0, 0, 1 \\rangle$:** at that point $z = 2$ is at its top, so $z$ isn't changing.
- **$\\langle 1, 1, 0 \\rangle$:** along $C$, $x + y = 1$ stays constant, so tangent vectors need $x' + y' = 0$; this has $2$.
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

**The goal.** Both parts add things up along the wire, so both need the length factor $\\lVert \\mathbf r'(t) \\rVert$ that turns $dt$ into a length $ds$.

**(a)** $\\mathbf r' = \\langle -\\sin t, \\cos t, 1 \\rangle$, so $\\lVert \\mathbf r' \\rVert = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt2$. *Why the length is $\\sqrt2\\,\\pi$:* constant speed $\\sqrt2$ for a time $\\pi$.

**(b)** $\\int_C f\\, ds = \\int f(\\mathbf r(t))\\,\\lVert \\mathbf r' \\rVert\\, dt$.
1. *Why substitute:* the integral is in $t$. $x^2 z = \\cos^2 t \\cdot t$.
2. $\\int_0^\\pi t\\cos^2 t \\cdot \\sqrt2\\, dt$. *Why rewrite $\\cos^2 t$:* $\\tfrac12(1 + \\cos 2t)$ has a simple antiderivative.
3. The $t\\cos 2t$ part needs integration by parts: $\\int t\\cos 2t\\, dt = \\tfrac{t\\sin 2t}{2} + \\tfrac{\\cos 2t}{4}$. Together:
$$\\sqrt2\\left[\\frac{t^2}{4} + \\frac{t\\sin 2t}{4} + \\frac{\\cos 2t}{8}\\right]_0^\\pi = \\sqrt2\\left(\\frac{\\pi^2}{4} + 0 + \\frac18 - \\frac18\\right) = \\frac{\\sqrt2\\,\\pi^2}{4}.$$

**Why not the other choices in (a).**
- **$\\pi$** forgets the vertical rise: the speed is $\\sqrt2$, not $1$.
- **$2\\pi$** would be a full circle, not this half-turn helix.
- **$\\pi^2$** isn't speed times time.

**Common mistake.** Forgetting $\\lVert \\mathbf r' \\rVert = \\sqrt2$.
:::

:::problem 8
Let $\\mathbf F = \\langle y^2,\\; x \\rangle$ and let $C$ be the triangle from $(0,0)$ to $(1,0)$ to $(1,1)$ and back to $(0,0)$.

**(a)** $\\displaystyle\\oint_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 3: 1/6}}

**(b)** Is $\\mathbf F$ conservative? {{circle 1: yes | *no}}
+++
review: 2026-10-09 Pieces and directions; 2026-10-09 Path independence

**(a) The goal.** The path is three straight sides, so parametrize each, compute its integral, and add. *Why not a shortcut:* $P_y = 2y$ and $Q_x = 1$ don't match, so the field isn't conservative.

Use $\\int P\\, dx + Q\\, dy$ with $P = y^2$, $Q = x$.

1. **$(0,0) \\to (1,0)$:** $y = 0$ and $dy = 0$, so the integrand is $0$.
2. **$(1,0) \\to (1,1)$:** $\\mathbf r = \\langle 1, t \\rangle$, so $dx = 0$ and $Q\\, dy = 1\\, dt$: $\\int_0^1 1\\, dt = 1$.
3. **$(1,1) \\to (0,0)$:** *Why this parametrization:* it starts at $(1, 1)$ and ends at $(0, 0)$, the direction the loop goes. $\\mathbf r = \\langle 1 - t, 1 - t \\rangle$, $\\mathbf r' = \\langle -1, -1 \\rangle$, and $\\mathbf F \\cdot \\mathbf r' = -(1 - t)^2 - (1 - t)$. $\\int_0^1 = -\\tfrac13 - \\tfrac12 = -\\tfrac56$.
4. **Total:** $0 + 1 - \\tfrac56 = \\tfrac16$.

**(b)** *Why the loop decides it:* a conservative field gives $0$ around every closed loop, and this one gave $\\tfrac16$. **Not** conservative (and $P_y = 2y \\ne 1 = Q_x$ agrees).

**Why not "yes".** A conservative field would give $0$ around every closed loop.

**Common mistake.** Getting the direction wrong on the last side.
:::

:::problem 9
Find the length of $\\mathbf r(t) = \\langle 3t,\\; 3t^2,\\; 2t^3 \\rangle$ for $0 \\le t \\le 1$.

Length = {{expr 4: 5}}
+++
review: 2026-10-02 Arc length

**The goal.** Length is $\\int \\lVert \\mathbf r' \\rVert\\, dt$. *The plan:* look for a perfect square under the root.

1. $\\mathbf r' = \\langle 3, 6t, 6t^2 \\rangle$.
2. $\\lVert \\mathbf r' \\rVert^2 = 9 + 36t^2 + 36t^4$. *Why factor out $9$:* it reveals $1 + 4t^2 + 4t^4 = (1 + 2t^2)^2$.
3. So $\\lVert \\mathbf r' \\rVert = 3(1 + 2t^2)$, and $L = \\int_0^1 3(1 + 2t^2)\\, dt = 3\\left(1 + \\tfrac23\\right) = 5$.

**Common mistake.** Not factoring out the $9$, which hides the perfect square.
:::

:::problem 10
A particle moves along $\\mathbf r(t) = \\langle e^t,\\; e^{-t},\\; \\sqrt2\\, t \\rangle$.

Its speed at $t = 0$ is {{expr 2: 2}}

Its acceleration at $t = 0$ is $\\mathbf a(0) = \\langle$ {{expr 1: 1}} , {{expr 1: 1}} , {{expr 1: 0}} $\\rangle$
+++
review: 2026-10-02 Velocity, speed, and acceleration

**The goal.** Speed is the length of $\\mathbf r'$, and acceleration is $\\mathbf r''$. Differentiate, then plug in $t = 0$.

1. $\\vec v = \\langle e^t, -e^{-t}, \\sqrt2 \\rangle$, so $\\vec v(0) = \\langle 1, -1, \\sqrt2 \\rangle$. *Why the length:* speed ignores direction. $\\sqrt{1 + 1 + 2} = 2$.
2. $\\mathbf a = \\langle e^t, e^{-t}, 0 \\rangle$, so $\\mathbf a(0) = \\langle 1, 1, 0 \\rangle$.

**Common mistake.** Losing a sign: $e^{-t}$ differentiates to $-e^{-t}$, and again to $+e^{-t}$.
:::

:::scratch
:::

:::problem 11
Find the absolute max and min of $f(x,y) = x^2 + y^2 - 2x - 4y$ on the square $0 \\le x \\le 3$, $0 \\le y \\le 3$.

Absolute max is {{expr 1: 3}} at the point(s) {{point 1: (3, 0)}}

Absolute min is {{expr 2: -5}} at the point(s) {{point 1: (1, 2)}}
+++
review: 2026-09-28 The three-step method

**The goal.** On a closed, bounded region, absolute extremes exist and can only be at interior critical points or on the boundary. So check both and compare.

**Step 1: inside.** *Why critical points:* an interior max or min must have $\\nabla f = \\mathbf 0$. $\\langle 2x - 2, 2y - 4 \\rangle = \\mathbf 0$ at $(1, 2)$, inside the square, with $f = -5$.

**Step 2: the four edges.** *Why one variable each:* on an edge one coordinate is fixed, so $f$ becomes a Calc I function; check its critical points and endpoints.
- $y = 0$: $x^2 - 2x$ on $[0, 3]$, from $-1$ (at $x = 1$) to $3$ (at $x = 3$).
- $y = 3$: $x^2 - 2x - 3$, from $-4$ to $0$.
- $x = 0$: $y^2 - 4y$, from $-4$ (at $y = 2$) to $0$.
- $x = 3$: $y^2 - 4y + 3$, from $-1$ to $3$ (at $y = 0$).

**Step 3: compare.** Largest $3$ at $(3, 0)$; smallest $-5$ at $(1, 2)$.

**Check.** $f = (x - 1)^2 + (y - 2)^2 - 5$: smallest at $(1, 2)$, largest at the point of the square farthest from $(1, 2)$, the corner $(3, 0)$, where $f = 4 + 4 - 5 = 3$ ✓.

**Common mistake.** Forgetting the corners, or stopping at the interior point.
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

**The goal.** Match formulas to pictures by plugging in easy points, then use the formulas. The fields are $E = \\langle y, -x \\rangle$, $F = \\langle x, y \\rangle$, and $G = \\langle y, 1 \\rangle$.

**(a)** At $(1, 0)$, $\\langle y, -x \\rangle = \\langle 0, -1 \\rangle$ points down; at $(0, 1)$ it's $\\langle 1, 0 \\rangle$, right. A **clockwise** swirl: **E**.

**(b)** *Why $F$:* it's a gradient, $F = \\nabla\\big(\\tfrac{x^2 + y^2}{2}\\big)$, so it's conservative.

**(c)** *Why compare velocity with the field:* a flowline follows the arrows, so $\\mathbf r' = F(\\mathbf r) = \\mathbf r$. For $\\langle e^t, 2e^t \\rangle$, $\\mathbf r' = \\langle e^t, 2e^t \\rangle = \\mathbf r$ ✓.

**(d)** *Why compute $E \\cdot \\mathbf r'$:* its sign around the path decides the integral's sign. With $\\mathbf r = \\langle \\cos t, \\sin t \\rangle$: $\\langle \\sin t, -\\cos t \\rangle \\cdot \\langle -\\sin t, \\cos t \\rangle = -1$, so the integral is $-2\\pi$: **negative**. $E$ swirls clockwise while you walk counterclockwise.

**Why not the other choices.**
- **(a)** **F** points straight out from the origin. **G** has $y$-component $1$ everywhere, so it never points down.
- **(b)** **E** fails cross-partials ($P_y = 1$, $Q_x = -1$). **G** fails too ($P_y = 1$, $Q_x = 0$).
- **(c)** $\\langle t, 2t \\rangle$: $\\mathbf r' = \\langle 1, 2 \\rangle \\ne \\langle t, 2t \\rangle$ except at $t = 1$. $\\langle \\cos t, \\sin t \\rangle$: $\\mathbf r' \\ne \\mathbf r$. $\\langle e^{-t}, e^{-t} \\rangle$: $\\mathbf r' = -\\mathbf r$, flowing inward.
- **(d)** **zero** would need a conservative field. **positive** would need the field to turn the same way you walk.
:::
`;export{e as default};