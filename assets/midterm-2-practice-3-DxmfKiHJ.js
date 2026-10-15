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

**What to recognize.** Lagrange multipliers work the same in 3D: $\\nabla f = \\lambda \\nabla g$ plus the constraint, now four equations in $x, y, z, \\lambda$.

**Steps.**

1. $\\nabla f = \\langle 1, 2, 2 \\rangle$ and $\\nabla g = \\langle 2x, 2y, 2z \\rangle$.
2. $1 = 2\\lambda x$, $2 = 2\\lambda y$, $2 = 2\\lambda z$. None of $x, y, z$ can be $0$, and dividing gives $y = 2x$ and $z = 2x$.
3. Constraint: $x^2 + 4x^2 + 4x^2 = 9$, so $x = \\pm 1$. The points are $(1, 2, 2)$ and $(-1, -2, -2)$.
4. $f(1,2,2) = 1 + 4 + 4 = 9$ (max) and $f(-1,-2,-2) = -9$ (min).

**Geometric check.** The max of $\\mathbf a \\cdot \\langle x, y, z \\rangle$ on a sphere of radius $3$ is $3\\lVert \\mathbf a \\rVert = 3 \\cdot 3 = 9$, at the point where $\\langle x,y,z \\rangle$ points the same way as $\\mathbf a = \\langle 1, 2, 2 \\rangle$. ✓

**(b)** That's exactly what the Lagrange equation says: $\\nabla f = \\lambda \\nabla g$.

**Why not the other choices in (b).**
- **perpendicular:** then $\\nabla f$ would be tangent to the sphere, and moving along the sphere would change $f$, so it couldn't be a max.
- **neither:** at any constrained max or min (with $\\nabla g \\ne \\mathbf 0$), they must be parallel.
:::

:::problem 2
Find the tangent plane to the graph $z = x^2 y + y^3$ at the point $(1, 1, 2)$.

Equation: {{plane 4: 2, 4, -1, 4}}
+++
review: 2026-09-21 Tangent planes to level surfaces

**What to recognize.** A graph $z = f(x,y)$ is the level surface $F = f(x,y) - z = 0$, with normal $\\langle f_x, f_y, -1 \\rangle$.

**Steps.**

1. $f_x = 2xy = 2$ and $f_y = x^2 + 3y^2 = 4$ at $(1, 1)$.
2. $z - 2 = 2(x - 1) + 4(y - 1)$.
3. Rearranged: $2x + 4y - z = 2 + 4 - 2 = 4$.

**Check.** $(1,1,2)$: $2 + 4 - 2 = 4$. ✓ Any nonzero multiple is also correct.

**Common mistake.** Forgetting the $z_0 = 2$ on the left side.
:::

:::problem 3
Let $f(x,y) = x e^y$ and $P = (2, 0)$.

The rate of change of $f$ at $P$ in the direction of $\\langle 3, -4 \\rangle$ is {{expr 2: -1}}

The maximum rate of change of $f$ at $P$ is {{expr 1: sqrt(5)}}

A direction in which $f$ does **not** change at $P$ is: {{circle 2: *$\\langle 2, -1 \\rangle$ | $\\langle 1, 2 \\rangle$ | $\\langle -1, -2 \\rangle$ | $\\langle 1, 0 \\rangle$}}
+++
review: 2026-09-18 Directional derivatives; 2026-09-18 The gradient

**Steps.**

1. $\\nabla f = \\langle e^y,\\; x e^y \\rangle = \\langle 1, 2 \\rangle$ at $P$.
2. $\\vec u = \\tfrac15 \\langle 3, -4 \\rangle$, so $D_{\\vec u} f = \\tfrac15(3 - 8) = -1$.
3. Maximum rate: $\\lVert \\langle 1, 2 \\rangle \\rVert = \\sqrt5$.
4. $f$ doesn't change in directions perpendicular to $\\nabla f$: $\\langle 2, -1 \\rangle \\cdot \\langle 1, 2 \\rangle = 0$. ✓

**Why not the other choices.**
- **$\\langle 1, 2 \\rangle$** is the direction of fastest **increase**.
- **$\\langle -1, -2 \\rangle$** is the direction of fastest **decrease**.
- **$\\langle 1, 0 \\rangle$** gives $D_{\\vec u} f = f_x = 1 \\ne 0$.
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

**Steps.** Check $f_x = f_y = 0$ first, then $D = f_{xx} f_{yy} - f_{xy}^2$.

| point | $D$ | verdict |
|---|---|---|
| $(0,0)$ | $6 - 1 = 5 > 0$, $f_{xx} = -2 < 0$ | local max |
| $(1,2)$ | $4 - 9 = -5 < 0$ | saddle |
| $(-1,0)$ | $f_y = 1 \\ne 0$ | not critical |
| $(2,-1)$ | $16 - 16 = 0$ | undetermined |

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

**How to read the map.**
- **Max or min:** the level curves form **rings inside rings** around one point (closed loops, one inside another). It's a max if the labels get bigger toward the middle, a min if they get smaller.
- **Saddle:** one level curve **crosses itself**, making an X shape. The crossing point is the saddle.
- $\\nabla f$ is perpendicular to the level curves and points toward bigger labels.

(The map shows $f = x^3 - 3x - 3y^2$.)

**(a)** Around $Q = (-1, 0)$ the level curves form rings inside rings, and the labels get bigger toward $Q$ ($0$, then $1$), so $Q$ is a **local max** (with $f = 2$). At $R = (1, 0)$ a level curve crosses itself, so $R$ is a **saddle** (with $f = -2$). That's **2** critical points.

**(b)** **R**: that's where the curve labeled $-2$ crosses itself, making an X shape.

**(c)** Moving up from $P$, you cross into curves with smaller labels, because $f$ gets smaller as $|y|$ grows. (Exactly: at $P = (0.5, 1)$, $f_y = -6y = -6$.)

**(d)** At $A$, the labels get bigger going right, toward the max at $Q$. The gradient points toward bigger labels, so it points **right**. (Exactly: $\\nabla f(-2, 0) = \\langle 9, 0 \\rangle$.)

**(e)** $f(E) - f(S) = 0 - 2 = -2$. $S$ sits on the curve labeled $2$ and $E$ on the curve labeled $0$.

**(f)** $D$ is closed and bounded and $f$ is continuous, so the Extreme Value Theorem guarantees an absolute min (it's on the boundary).

**Why not the other choices.**
- **(a)** **0 or 1:** the map has both a max (rings around $Q$) and a saddle (a curve crossing itself at $R$). **3:** nowhere else do the curves form rings or cross.
- **(b)** **Q** is a max, since rings surround it. **A** and **P** aren't critical points, because a single level curve just passes through each of them, with no rings and no crossing.
- **(c)** **zero** would mean $\\vec u$ runs along the level curve. **positive** is backward.
- **(d)** **left** points to lower values. **Up or down** would run along the level curve through $A$.
- **(e)** **$2$** has the sign backward. The others don't equal $0 - 2$.
- **(f)** **false** ignores the Extreme Value Theorem: a continuous function on a closed, bounded region always has an absolute min.
:::

:::problem 6
Let $\\mathbf r(t) = \\langle t,\\; t^2,\\; t^3 \\rangle$. The tangent line to this curve at $t = 1$ meets the $xy$-plane ($z = 0$) at the point {{point 4: (2/3, 1/3, 0)}}
+++
review: 2026-10-02 Derivatives and tangent vectors

**Steps.**

1. $\\mathbf r(1) = \\langle 1, 1, 1 \\rangle$ and $\\mathbf r'(t) = \\langle 1, 2t, 3t^2 \\rangle$, so $\\mathbf r'(1) = \\langle 1, 2, 3 \\rangle$.
2. Tangent line: $\\langle 1 + s,\\; 1 + 2s,\\; 1 + 3s \\rangle$.
3. $z = 0$ gives $1 + 3s = 0$, so $s = -\\tfrac13$, and the point is $\\left(\\tfrac23,\\; \\tfrac13,\\; 0\\right)$.

**Common mistake.** Using $\\mathbf r(t)$ itself instead of the tangent line, or using $\\mathbf r(1)$ as the direction.
:::

:::problem 7
A wire shaped like the helix $\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; t \\rangle$, $0 \\le t \\le 2\\pi$, has density $\\rho(x,y,z) = z$. Find its mass.

Mass = {{expr 5: 2 sqrt(5) pi^2}}
+++
review: 2026-10-05 Mass and average value

**Steps.**

1. $\\lVert \\mathbf r'(t) \\rVert = \\lVert \\langle -2\\sin t, 2\\cos t, 1 \\rangle \\rVert = \\sqrt{4 + 1} = \\sqrt5$.
2. $\\rho(\\mathbf r(t)) = t$.
3. $\\displaystyle m = \\int_0^{2\\pi} t\\sqrt5\\, dt = \\sqrt5 \\cdot \\frac{(2\\pi)^2}{2} = 2\\sqrt5\\,\\pi^2.$

**Check.** The density runs from $0$ to $2\\pi$, so the mass is between $0$ and $2\\pi \\times$ length $= 2\\pi \\cdot 2\\pi\\sqrt5 = 4\\sqrt5\\,\\pi^2$. With density growing evenly, it should be exactly half the upper bound. ✓
:::

:::problem 8
Let $\\mathbf F = \\langle 2xy + z^2,\\; x^2,\\; 2xz \\rangle$, which is conservative on $\\mathbb{R}^3$.

**(a)** For any path from $(1, 0, 1)$ to $(2, 1, -1)$, $\\int_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 3: 5}}

**(b)** For any closed curve, $\\oint_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 1: 0}}

**(c)** For any path from $(2, 1, -1)$ back to $(1, 0, 1)$, the integral is {{expr 1: -5}}
+++
review: 2026-10-09 The Fundamental Theorem for Line Integrals; 2026-10-14 Conservative fields in 3D

**Steps.**

1. Potential: integrate $P$ in $x$ to get $f = x^2 y + xz^2 + g(y,z)$. Then $f_y = x^2$ means $g_y = 0$, and $f_z = 2xz$ means $g_z = 0$. So $f = x^2 y + xz^2$.
2. **(a)** $f(2, 1, -1) - f(1, 0, 1) = (4 + 2) - (0 + 1) = 5$.
3. **(b)** A closed curve of a conservative field gives $0$.
4. **(c)** Reversing the direction flips the sign: $-5$.

**Check the field is conservative.** $P_y = 2x = Q_x$, $P_z = 2z = R_x$, and $Q_z = 0 = R_y$. ✓
:::

:::problem 9
Find the length of $\\mathbf r(t) = \\langle t,\\; \\ln(\\sec t) \\rangle$ for $0 \\le t \\le \\tfrac\\pi4$.

Length = {{expr 4: ln(1 + sqrt(2))}}
+++
review: 2026-10-02 Arc length

**Steps.**

1. $\\mathbf r' = \\langle 1,\\; \\tan t \\rangle$ (the derivative of $\\ln(\\sec t)$ is $\\tfrac{\\sec t \\tan t}{\\sec t} = \\tan t$).
2. $\\lVert \\mathbf r' \\rVert = \\sqrt{1 + \\tan^2 t} = \\sec t$ (positive on $[0, \\tfrac\\pi4]$).
3. $$L = \\int_0^{\\pi/4} \\sec t\\, dt = \\Big[\\ln|\\sec t + \\tan t|\\Big]_0^{\\pi/4} = \\ln(\\sqrt2 + 1) - \\ln 1 = \\ln(1 + \\sqrt2).$$

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

**(a) False.** A critical point can be a saddle. For example, $f = x^2 - y^2$ at the origin.

**(b) False.** $ds$ is a length, always positive, so direction doesn't matter. (It's $\\int_C \\mathbf F \\cdot d\\mathbf r$ that changes sign.)

**(c) True.** By the Fundamental Theorem, the answer is $f(A) - f(A) = 0$.

**(d) False.** The region has a hole, so the cross-partials test doesn't apply, and the integral around the unit circle is $2\\pi \\ne 0$.

**Why not the other answer.** Each part above names the fact that rules out the other choice: a saddle for (a), $ds > 0$ for (b), the Fundamental Theorem for (c), and the hole for (d).
:::

:::problem 11
Find the absolute max and min of $f(x,y) = xy$ on the disk $x^2 + y^2 \\le 2$.

Absolute max is {{expr 1: 1}} at the point(s) {{point 1: (1, 1); (-1, -1)}}

Absolute min is {{expr 1: -1}} at the point(s) {{point 1: (1, -1); (-1, 1)}}

Is the critical point $(0,0)$ where the absolute min occurs? {{circle 1: yes | *no}}
+++
review: 2026-09-28 The three-step method; 2026-09-30 Lagrange on the boundary

**Steps.**

1. **Inside:** $\\nabla f = \\langle y, x \\rangle = \\mathbf 0$ only at $(0,0)$, with $f = 0$. (It's a saddle.)
2. **Boundary** $x^2 + y^2 = 2$ by Lagrange: $y = 2\\lambda x$ and $x = 2\\lambda y$ give $x^2 = y^2$, so $2x^2 = 2$ and $x = \\pm 1$. That's four points: $f = 1$ at $(1,1)$ and $(-1,-1)$, and $f = -1$ at $(1,-1)$ and $(-1,1)$.
3. **Compare** $0, 1, -1$: the max is $1$ and the min is $-1$, both on the boundary.

**Why not "yes".** $f(0,0) = 0$ is bigger than $-1$, so the origin isn't the min. It's a saddle, not an extreme.
:::

:::problem 12
A particle moves along $\\mathbf r(t) = \\langle t\\cos t,\\; t\\sin t,\\; t \\rangle$.

Its speed at $t = \\pi$ is {{expr 2: sqrt(2 + pi^2)}}

Its acceleration at $t = 0$ is $\\mathbf a(0) = \\langle$ {{expr 1: 0}} , {{expr 1: 2}} , {{expr 1: 0}} $\\rangle$
+++
review: 2026-10-02 Velocity, speed, and acceleration

**Steps.**

1. $\\vec v = \\langle \\cos t - t\\sin t,\\; \\sin t + t\\cos t,\\; 1 \\rangle$ (product rule on each).
2. $\\vec v(\\pi) = \\langle -1,\\; -\\pi,\\; 1 \\rangle$, so the speed is $\\sqrt{1 + \\pi^2 + 1} = \\sqrt{2 + \\pi^2}$.
3. $\\mathbf a = \\langle -2\\sin t - t\\cos t,\\; 2\\cos t - t\\sin t,\\; 0 \\rangle$, so $\\mathbf a(0) = \\langle 0, 2, 0 \\rangle$.

**Common mistake.** Forgetting the product rule on $t\\cos t$ and $t\\sin t$.
:::
`;export{e as default};