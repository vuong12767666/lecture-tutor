var e=`---
title: Midterm 2 Practice Test 3
exam: Midterm 2
minutes: 60
---

:::problem 1
Let $f(x,y,z) = x + 2y + 2z$ and let $S$ be the sphere $x^2 + y^2 + z^2 = 9$.

**(a)** Use Lagrange multipliers to find the absolute max and min of $f$ on $S$.

Absolute max of $f$ on $S$ is {{expr 2: 9}} which occurs at the point(s) {{point 1: (1, 2, 2)}}

Absolute min of $f$ on $S$ is {{expr 1: -9}} which occurs at the point(s) {{point 1: (-1, -2, -2)}}

**(b)** At the max, $\\nabla f$ and $\\nabla g$ are: {{circle 1: *parallel | perpendicular | neither}}
+++
review: 2026-09-30 The method; 2026-09-30 Why the gradients line up

**First, what "on the sphere" changes.** Only points on the sphere $x^2 + y^2 + z^2 = 9$ count, like $(3, 0, 0)$ or $(1, 2, 2)$ ($1 + 4 + 4 = 9$ ✓). On it, $f = x + 2y + 2z$ takes values like $f(3, 0, 0) = 3$ and $f(1, 2, 2) = 9$. At the best point, the arrow of fastest increase $\\nabla f$ can't point along the sphere at all (or moving that way would still help), so it points straight out, parallel to the sphere's gradient $\\nabla g$: $\\nabla f = \\lambda\\nabla g$.

**(a) The goal.** Extremes of $f$ on the sphere $g = 9$: Lagrange multipliers, now with four equations in $x, y, z, \\lambda$. The sphere is closed and bounded, so a max and min exist.

**Step 1: gradients.** *Why:* at an extreme on the surface, $\\nabla f$ must be parallel to $\\nabla g$. $\\nabla f = \\langle 1, 2, 2 \\rangle$ and $\\nabla g = \\langle 2x, 2y, 2z \\rangle$.

**Step 2: equations.** $1 = 2\\lambda x$, $2 = 2\\lambda y$, $2 = 2\\lambda z$.

**Step 3: relate the variables.** *Why it's safe to divide:* none of $x, y, z, \\lambda$ can be $0$ (each equation would then say a nonzero number is $0$). Dividing the second by the first gives $y = 2x$; the third by the first gives $z = 2x$.

**Step 4: the constraint.** *Why:* the points must be on the sphere. $x^2 + 4x^2 + 4x^2 = 9$, so $x = \\pm 1$: $(1, 2, 2)$ and $(-1, -2, -2)$.

**Step 5: compare.** $f(1, 2, 2) = 1 + 4 + 4 = 9$ (max) and $f(-1, -2, -2) = -9$ (min).

**Geometric check.** $f = \\langle 1, 2, 2 \\rangle \\cdot \\langle x, y, z \\rangle$ is largest when $\\langle x, y, z \\rangle$ points the same way as $\\langle 1, 2, 2 \\rangle$, and then it's $3 \\cdot 3 = 9$ (lengths $3$ and $3$) ✓.

**(b)** *Why parallel:* that's exactly what $\\nabla f = \\lambda\\nabla g$ says.

**Why not the other choices in (b).**
- **perpendicular:** then $\\nabla f$ would be tangent to the sphere, and moving along the sphere would change $f$, so it couldn't be a max.
- **neither:** at any constrained max or min (with $\\nabla g \\ne \\mathbf 0$), they must be parallel.
:::

:::problem 2
Find the tangent plane to the graph $z = x^2 y + y^3$ at the point $(1, 1, 2)$.

Equation: {{plane 4: 2, 4, -1, 4}}
+++
review: 2026-09-21 Tangent planes to level surfaces

**First, what a tangent plane is.** It's the flat plane that just touches the surface at one point and tilts the same way the surface does there. For a graph $z = f(x, y)$, its tilt is set by the slopes $f_x$ (in the $x$ direction) and $f_y$ (in the $y$ direction): moving $\\Delta x$ and $\\Delta y$ from the point changes the plane's height by $f_x\\,\\Delta x + f_y\\,\\Delta y$.

**The goal.** A plane needs a point and a normal. *The plan:* write the graph $z = f(x, y)$ as the level surface $F = f(x, y) - z = 0$, whose normal is $\\nabla F = \\langle f_x, f_y, -1 \\rangle$.

**Step 1: partials at the point.** $f_x = 2xy = 2$ and $f_y = x^2 + 3y^2 = 4$ at $(1, 1)$. *Why at $(1, 1)$:* that's where the plane touches.

**Step 2: the plane.** *Why this form:* moving $\\Delta x$ and $\\Delta y$ from the point changes the height by $f_x\\,\\Delta x + f_y\\,\\Delta y$ on the tangent plane. $z - 2 = 2(x - 1) + 4(y - 1)$.

**Step 3: rearrange.** $2x + 4y - z = 2 + 4 - 2 = 4$.

**Check.** $(1, 1, 2)$: $2 + 4 - 2 = 4$ ✓. Any nonzero multiple is also correct.

**Common mistake.** Forgetting the $z_0 = 2$ on the left side.
:::

:::problem 3
Let $f(x,y) = x e^y$ and $P = (2, 0)$.

The rate of change of $f$ at $P$ in the direction of $\\langle 3, -4 \\rangle$ is {{expr 2: -1}}

The maximum rate of change of $f$ at $P$ is {{expr 1: sqrt(5)}}

A direction in which $f$ does **not** change at $P$ is: {{circle 2: *$\\langle 2, -1 \\rangle$ | $\\langle 1, 2 \\rangle$ | $\\langle -1, -2 \\rangle$ | $\\langle 1, 0 \\rangle$}}
+++
review: 2026-09-18 Directional derivatives; 2026-09-18 The gradient

**First, what the gradient tells you.** $\\nabla f = \\langle f_x, f_y \\rangle$ is an arrow at the point. Stepping in a direction $\\vec u$ (an arrow of length $1$), $f$ changes at rate $\\nabla f \\cdot \\vec u$. That's biggest when $\\vec u$ points the same way as $\\nabla f$ (rate $\\lVert \\nabla f \\rVert$), most negative when it points opposite, and $0$ when it's perpendicular. For example, with $\\nabla f = \\langle 3, 4 \\rangle$: the fastest rate is $5$, and stepping in the direction $\\langle 4, -3 \\rangle$ (perpendicular) doesn't change $f$ at first.

**The goal.** Everything here comes from the gradient at $P$: the rate in a direction is $\\nabla f \\cdot \\vec u$ (unit $\\vec u$), the fastest rate is $\\lVert \\nabla f \\rVert$, and $f$ doesn't change in directions perpendicular to $\\nabla f$.

**Step 1: the gradient.** $\\nabla f = \\langle e^y, xe^y \\rangle = \\langle 1, 2 \\rangle$ at $(2, 0)$.

**Step 2: the unit direction.** *Why divide by $5$:* the formula needs length $1$, and $\\lVert \\langle 3, -4 \\rangle \\rVert = 5$. $\\vec u = \\tfrac15\\langle 3, -4 \\rangle$.

**Step 3: the rate.** $D_{\\vec u}f = \\tfrac15(3 - 8) = -1$.

**Step 4: the maximum rate.** $\\lVert \\langle 1, 2 \\rangle \\rVert = \\sqrt5$.

**Step 5: no change.** *Why perpendicular:* $D_{\\vec u}f = \\nabla f \\cdot \\vec u = 0$ exactly when $\\vec u \\perp \\nabla f$. $\\langle 2, -1 \\rangle \\cdot \\langle 1, 2 \\rangle = 0$ ✓.

**Why not the other choices.**
- **$\\langle 1, 2 \\rangle$** is the direction of fastest **increase**.
- **$\\langle -1, -2 \\rangle$** is the direction of fastest **decrease**.
- **$\\langle 1, 0 \\rangle$** gives $D_{\\vec u}f = f_x = 1 \\ne 0$.
:::

:::problem 4
Suppose $f(x,y)$ has continuous second partial derivatives with the values in the table. For each point, circle the best description. (1 point each)

| $(x,y)$ | $f_x$ | $f_y$ | $f_{xx}$ | $f_{yy}$ | $f_{xy}$ |
|---|---|---|---|---|---|
| $(0,0)$ | $0$ | $0$ | $-2$ | $-3$ | $1$ |
| $(1,2)$ | $0$ | $0$ | $4$ | $1$ | $3$ |
| $(-1,0)$ | $0$ | $1$ | $2$ | $2$ | $0$ |
| $(2,-1)$ | $0$ | $0$ | $2$ | $8$ | $4$ |

$(0,0)$: {{circle 1: not critical | local min | *local max | saddle | undetermined}}

$(1,2)$: {{circle 1: not critical | local min | local max | *saddle | undetermined}}

$(-1,0)$: {{circle 1: *not critical | local min | local max | saddle | undetermined}}

$(2,-1)$: {{circle 1: not critical | local min | local max | saddle | *undetermined}}
+++
review: 2026-09-25 The second derivative test

**First, what the table's numbers mean.** $f_x$ and $f_y$ are the slopes in the $x$ and $y$ directions; a **critical point** has both equal to $0$ (the surface is flat there). Then $D = f_{xx}f_{yy} - f_{xy}^2$ says whether it curves the same way in every direction ($D > 0$: a local min or max) or up one way and down another ($D < 0$: a saddle).

**The goal.** For each point: first, is it critical? Then, if so, what does $D = f_{xx}f_{yy} - f_{xy}^2$ say?

**Step 1: critical?** *Why first:* the test only applies where $f_x = f_y = 0$. At $(-1, 0)$, $f_y = 1 \\ne 0$: **not critical**.

**Step 2: $D$ at the others.** *Why $D$:* it tells whether $f$ curves the same way in every direction.

| point | $D$ | verdict |
|---|---|---|
| $(0,0)$ | $6 - 1 = 5 > 0$, $f_{xx} = -2 < 0$ | local max |
| $(1,2)$ | $4 - 9 = -5 < 0$ | saddle |
| $(2,-1)$ | $16 - 16 = 0$ | undetermined |

*Why $f_{xx}$ for the max:* with $D > 0$, $f_{xx} < 0$ means curving down in every direction.

**Why not the other choices.**
- At **$(0,0)$**, "local min" would need $f_{xx} > 0$, and "saddle" and "undetermined" would need $D \\le 0$.
- At **$(1,2)$**, it looks like a min ($f_{xx}, f_{yy} > 0$), but the large $f_{xy}$ makes $D$ negative.
- At **$(-1,0)$**, every other label requires a critical point.
- At **$(2,-1)$**, every classification requires $D \\ne 0$.
:::

:::scratch
:::

:::problem 5
The contour map of a differentiable function $f$ is shown on the closed rectangle $D = \\{-2.5 \\le x \\le 2.5,\\ -1.5 \\le y \\le 1.5\\}$. Each level curve is labeled with its value. Circle the best answer. (1 point each)

{{figure 0: contour-m2p3}}

**(a)** The number of critical points of $f$ in $D$ is: {{circle 1: 0 | 1 | *2 | 3}}

**(b)** Which marked point is a saddle? {{circle 1: Q | *R | A | P}}

**(c)** The directional derivative $D_{\\vec u} f(P)$, where $\\vec u$ is the unit vector drawn as the arrow labeled $\\vec u$ at $P$, is: {{circle 1: *negative | zero | positive}}

**(d)** The gradient $\\nabla f(A)$ points: {{circle 1: up | down | left | *right}}

**(e)** For the curve $C$ shown, from $S$ to $E$, $\\int_C \\nabla f \\cdot d\\mathbf r$ is: {{circle 1: -4 | *-2 | 0 | 2 | 4}}

**(f)** $f$ has an absolute minimum on $D$: {{circle 1: *true | false}}
+++
review: 2026-09-18 Gradients and level curves; 2026-09-25 Critical points; 2026-09-28 When must extremes exist?; 2026-10-09 The Fundamental Theorem for Line Integrals

**First, what a contour map shows.** Each curve joins the points where $f$ has the value written on it. Along a curve $f$ stays the same; crossing to a bigger label, $f$ goes up. Every part below is read off that.

**The goal.** Read gradient facts off the map:
- **Rings inside rings** around a point: a max if labels grow toward it, a min if they shrink ($f$ keeps rising or falling toward the middle in every direction).
- **A curve crossing itself** in an X: a saddle.
- $\\nabla f$ is perpendicular to the level curves and points toward bigger labels.

(The map shows $f = x^3 - 3x - 3y^2$.)

**(a)** Around $Q = (-1, 0)$, rings with labels growing toward $Q$ ($0$, then $1$): a **local max** ($f = 2$). At $R = (1, 0)$ a curve crosses itself: a **saddle** ($f = -2$). That's **2**.

**(b)** **R**: the curve labeled $-2$ crosses itself there.

**(c)** *Why look at the labels you move into:* $D_{\\vec u}f$ is the rate of change that way. Moving up from $P$, the labels get smaller, since $f$ shrinks as $|y|$ grows: **negative**. (Exactly: $f_y = -6y = -6$ at $P = (0.5, 1)$.)

**(d)** *Why right:* $\\nabla f$ points toward bigger labels, and at $A$ they grow to the right, toward the max at $Q$. (Exactly: $\\nabla f(-2, 0) = \\langle 9, 0 \\rangle$.)

**(e)** *Why no path work:* for a gradient field, $\\int_C \\nabla f \\cdot d\\mathbf r = f(E) - f(S)$. $S$ is on the curve labeled $2$ and $E$ on the one labeled $0$: $0 - 2 = -2$.

**(f)** *Why the Extreme Value Theorem:* $D$ is closed and bounded and $f$ is continuous, so an absolute min must exist (here, on the boundary). **True.**

**Why not the other choices.**
- **(a)** **0 or 1:** the map has both a max (rings around $Q$) and a saddle (a crossing at $R$). **3:** nowhere else do curves form rings or cross.
- **(b)** **Q** is a max. **A** and **P** aren't critical: a single level curve just passes through each.
- **(c)** **zero** would mean $\\vec u$ runs along the level curve. **positive** is backward.
- **(d)** **left** points to lower values. **Up or down** would run along the level curve through $A$.
- **(e)** **$2$** has the sign backward. The others don't equal $0 - 2$.
- **(f)** **false** ignores the Extreme Value Theorem.
:::

:::problem 6
Let $\\mathbf r(t) = \\langle t,\\; t^2,\\; t^3 \\rangle$. The tangent line to this curve at $t = 1$ meets the $xy$-plane ($z = 0$) at the point {{point 4: (2/3, 1/3, 0)}}
+++
review: 2026-10-02 Derivatives and tangent vectors

**First, what a tangent line is.** It's the straight line that touches the curve at one point and heads the same way the curve is heading there. It starts at the point $\\mathbf r(1)$ and goes in the direction of travel $\\mathbf r'(1)$: the points $\\mathbf r(1) + s\\,\\mathbf r'(1)$, for every number $s$. For example, the curve at $t = 1.1$ is at $(1.1, 1.21, 1.331)$, and the tangent line at $s = 0.1$ is at $(1.1, 1.2, 1.3)$: very close.

**The goal.** Write the tangent line as point $+$ $s \\times$ direction, then find where its $z$-coordinate is $0$.

**Step 1: point and direction.** *Why $\\mathbf r'(1)$:* the derivative is tangent to the curve. $\\mathbf r(1) = \\langle 1, 1, 1 \\rangle$ and $\\mathbf r'(t) = \\langle 1, 2t, 3t^2 \\rangle$, so $\\mathbf r'(1) = \\langle 1, 2, 3 \\rangle$.

**Step 2: the line.** $\\langle 1 + s,\\ 1 + 2s,\\ 1 + 3s \\rangle$.

**Step 3: hit the $xy$-plane.** *Why $z = 0$:* that's the plane's equation. $1 + 3s = 0$ gives $s = -\\tfrac13$, so the point is $\\left(\\tfrac23, \\tfrac13, 0\\right)$.

**Common mistake.** Using the curve itself instead of the tangent line, or using $\\mathbf r(1)$ as the direction.
:::

:::problem 7
A wire shaped like the helix $\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; t \\rangle$, $0 \\le t \\le 2\\pi$, has density $\\rho(x,y,z) = z$. Find its mass.

Mass = {{expr 5: 2 sqrt(5) pi^2}}
+++
review: 2026-10-05 Mass and average value

**First, what the mass of a wire means.** The density is the mass per unit of length, and here it's $z$, so the wire gets heavier as it climbs. The mass is (density) $\\times$ (length of each tiny piece), added up. Each tiny piece's length is the speed $\\lVert \\mathbf r'(t) \\rVert$ times $dt$.

**The goal.** Mass of a wire is density added up along its length: $\\int_C \\rho\\, ds$ with $ds = \\lVert \\mathbf r'(t) \\rVert\\, dt$.

**Step 1: the length factor.** *Why:* the integral runs over $t$, but density counts per unit length. $\\lVert \\langle -2\\sin t, 2\\cos t, 1 \\rangle \\rVert = \\sqrt{4 + 1} = \\sqrt5$.

**Step 2: density on the wire.** *Why substitute:* the integral is in $t$, and $z = t$ on the helix, so $\\rho = t$.

**Step 3: integrate.** $m = \\int_0^{2\\pi} t\\sqrt5\\, dt = \\sqrt5 \\cdot \\tfrac{(2\\pi)^2}{2} = 2\\sqrt5\\,\\pi^2$.

**Check.** The density grows evenly from $0$ to $2\\pi$, so its average is $\\pi$; the length is $2\\pi\\sqrt5$; and $\\pi \\cdot 2\\pi\\sqrt5 = 2\\sqrt5\\,\\pi^2$ ✓.
:::

:::problem 8
Let $\\mathbf F = \\langle 2xy + z^2,\\; x^2,\\; 2xz \\rangle$, which is conservative on $\\mathbb{R}^3$.

**(a)** For any path from $(1, 0, 1)$ to $(2, 1, -1)$, $\\int_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 3: 5}}

**(b)** For any closed curve, $\\oint_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 1: 0}}

**(c)** For any path from $(2, 1, -1)$ back to $(1, 0, 1)$, the integral is {{expr 1: -5}}
+++
review: 2026-10-09 The Fundamental Theorem for Line Integrals; 2026-10-14 Conservative fields in 3D

**First, why a potential makes this easy.** If $\\mathbf F = \\nabla f$, then walking a path, the total push is just how much $f$ changed: $f(\\text{end}) - f(\\text{start})$, whatever route you take. So find $f$ once, and every part is a subtraction.

**The goal.** For a conservative field, any line integral is $f(\\text{end}) - f(\\text{start})$. So find a potential $f$ once, and all three parts follow.

**Step 1: confirm it's conservative.** $P_y = 2x = Q_x$, $P_z = 2z = R_x$, $Q_z = 0 = R_y$ ✓ (and it's defined everywhere).

**Step 2: the potential.** *Why one variable at a time:* each component is one partial of $f$. Integrating $P$ in $x$: $f = x^2 y + xz^2 + g(y, z)$. Then $f_y = x^2$ means $g_y = 0$, and $f_z = 2xz$ means $g_z = 0$. So $f = x^2 y + xz^2$.

**Step 3 (a).** $f(2, 1, -1) - f(1, 0, 1) = (4 + 2) - (0 + 1) = 5$.

**Step 4 (b).** *Why $0$:* a closed curve ends where it starts, so $f(\\text{end}) - f(\\text{start}) = 0$.

**Step 5 (c).** *Why $-5$:* going the other way swaps end and start, which flips the sign.
:::

:::problem 9
Find the length of $\\mathbf r(t) = \\langle t,\\; \\ln(\\sec t) \\rangle$ for $0 \\le t \\le \\tfrac\\pi4$.

Length = {{expr 4: ln(1 + sqrt(2))}}
+++
review: 2026-10-02 Arc length

**First, why length is $\\int \\lVert \\mathbf r' \\rVert\\, dt$.** The speed $\\lVert \\mathbf r' \\rVert$ times a short time $\\Delta t$ is the short distance moved; adding those up gives the length. For example, at $t = 0$ the speed is $\\sec 0 = 1$, and at $t = \\tfrac\\pi4$ it's $\\sec\\tfrac\\pi4 \\approx 1.414$.

**The goal.** Length is $\\int \\lVert \\mathbf r' \\rVert\\, dt$; the root should simplify.

**Step 1: velocity.** *Why $\\tan t$:* by the chain rule, the derivative of $\\ln(\\sec t)$ is $\\tfrac{\\sec t\\tan t}{\\sec t} = \\tan t$. So $\\mathbf r' = \\langle 1, \\tan t \\rangle$.

**Step 2: simplify the root.** *Why it works:* $1 + \\tan^2 t = \\sec^2 t$, and $\\sec t > 0$ on $[0, \\tfrac\\pi4]$, so $\\lVert \\mathbf r' \\rVert = \\sec t$.

**Step 3: integrate.** $\\int_0^{\\pi/4} \\sec t\\, dt = \\Big[\\ln|\\sec t + \\tan t|\\Big]_0^{\\pi/4} = \\ln(\\sqrt2 + 1) - \\ln 1 = \\ln(1 + \\sqrt2)$.

**Common mistake.** Not recognizing $1 + \\tan^2 t = \\sec^2 t$.
:::

:::scratch
:::

:::problem 10
True or false. (1 point each)

**(a)** If $\\nabla f(P) = \\mathbf 0$, then $f$ has a local max or min at $P$. {{circle 1: true | *false}}

**(b)** $\\int_C f\\, ds$ changes sign when $C$ is traced in the opposite direction. {{circle 1: true | *false}}

**(c)** If $\\mathbf F = \\nabla f$ and $C$ is a closed curve, then $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$. {{circle 1: *true | false}}

**(d)** Since $\\langle -y, x \\rangle/(x^2 + y^2)$ satisfies $P_y = Q_x$, it is conservative on $\\mathbb{R}^2$ minus the origin. {{circle 1: true | *false}}
+++
review: 2026-09-25 Critical points; 2026-10-05 Integrating a function along a curve; 2026-10-09 Path independence; 2026-10-12 Why holes matter

**First, what each statement is about.** Each one is a claim that's either always true or has a counterexample. To show a claim is false, one example where it fails is enough. To show it's true, you need a reason that works every time.

**The goal.** For each statement, find the fact that decides it, and a counterexample if it's false.

**(a) False.** *Why:* $\\nabla f = \\mathbf 0$ only makes a point critical, and critical points can be saddles. $f = x^2 - y^2$ at the origin has $\\nabla f = \\mathbf 0$ but goes up along $x$ and down along $y$.

**(b) False.** *Why:* $ds$ is a length, always positive, so reversing the direction doesn't change anything. It's $\\int_C \\mathbf F \\cdot d\\mathbf r$ that flips sign.

**(c) True.** *Why:* by the Fundamental Theorem, a closed curve gives $f(A) - f(A) = 0$.

**(d) False.** *Why:* the cross-partials test needs a region with no holes, and the plane minus the origin has one. Around the unit circle this field gives $2\\pi \\ne 0$.

**Why not the other answer.** Each part names the fact that rules out the other choice: a saddle for (a), $ds > 0$ for (b), the Fundamental Theorem for (c), and the hole for (d).
:::

:::problem 11
Find the absolute max and min of $f(x,y) = xy$ on the disk $x^2 + y^2 \\le 2$.

Absolute max is {{expr 1: 1}} at the point(s) {{point 1: (1, 1); (-1, -1)}}

Absolute min is {{expr 1: -1}} at the point(s) {{point 1: (1, -1); (-1, 1)}}

Is the critical point $(0,0)$ where the absolute min occurs? {{circle 1: yes | *no}}
+++
review: 2026-09-28 The three-step method; 2026-09-30 Lagrange on the boundary

**First, why check the inside and the edge.** On the closed disk (edge included), $f$ has a biggest and a smallest value somewhere. Inside, those can only be where the surface is flat (both slopes $0$). On the edge, the region just stops, so the surface needn't be flat there, and the edge needs its own check. The edge here is a circle, so Lagrange's method finds its candidates.

**The goal.** On a closed, bounded region, absolute extremes are at interior critical points or on the boundary. Check both, then compare.

**Step 1: inside.** *Why:* an interior extreme needs $\\nabla f = \\mathbf 0$. $\\langle y, x \\rangle = \\mathbf 0$ only at $(0, 0)$, where $f = 0$.

**Step 2: the boundary circle, by Lagrange.** *Why Lagrange:* the boundary is a curve $x^2 + y^2 = 2$. $y = 2\\lambda x$ and $x = 2\\lambda y$ give $x^2 = y^2$ (multiply the first by $y$ and the second by $x$, then compare). With $x^2 + y^2 = 2$: $x^2 = 1$, so four points. $f = 1$ at $(1, 1)$ and $(-1, -1)$; $f = -1$ at $(1, -1)$ and $(-1, 1)$.

**Step 3: compare** $0$, $1$, $-1$: max $1$, min $-1$, both on the boundary.

**Why not "yes".** $f(0, 0) = 0$ is bigger than $-1$, so the origin isn't the min. It's a saddle.
:::

:::problem 12
A particle moves along $\\mathbf r(t) = \\langle t\\cos t,\\; t\\sin t,\\; t \\rangle$.

Its speed at $t = \\pi$ is {{expr 2: sqrt(2 + pi^2)}}

Its acceleration at $t = 0$ is $\\mathbf a(0) = \\langle$ {{expr 1: 0}} , {{expr 1: 2}} , {{expr 1: 0}} $\\rangle$
+++
review: 2026-10-02 Velocity, speed, and acceleration

**First, what speed and acceleration are.** The velocity $\\mathbf r'$ is an arrow (direction and how fast); the speed is its length. The acceleration $\\mathbf r''$ is how the velocity changes. Each component here is a product like $t\\cos t$, so each derivative needs the product rule: (derivative of the first) $\\times$ second $+$ first $\\times$ (derivative of the second). For example, the derivative of $t\\cos t$ is $\\cos t - t\\sin t$, which at $t = 0$ is $1 - 0 = 1$.

**The goal.** Speed is $\\lVert \\mathbf r' \\rVert$ and acceleration is $\\mathbf r''$. Each component is a product, so differentiate carefully.

**Step 1: velocity.** *Why the product rule:* $t\\cos t$ and $t\\sin t$ are products of two functions of $t$. $\\vec v = \\langle \\cos t - t\\sin t,\\ \\sin t + t\\cos t,\\ 1 \\rangle$.

**Step 2: speed at $\\pi$.** $\\vec v(\\pi) = \\langle -1, -\\pi, 1 \\rangle$, so the speed is $\\sqrt{1 + \\pi^2 + 1} = \\sqrt{2 + \\pi^2}$.

**Step 3: acceleration.** Differentiate again (product rule on the $t\\sin t$ and $t\\cos t$ terms): $\\mathbf a = \\langle -2\\sin t - t\\cos t,\\ 2\\cos t - t\\sin t,\\ 0 \\rangle$, so $\\mathbf a(0) = \\langle 0, 2, 0 \\rangle$.

**Common mistake.** Forgetting the product rule on $t\\cos t$ and $t\\sin t$.
:::
`;export{e as default};