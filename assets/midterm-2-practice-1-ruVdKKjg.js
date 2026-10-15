var e=`---
title: Midterm 2 Practice Test 1
exam: Midterm 2
minutes: 60
---

:::problem 1
Let $f(x,y) = 3x + y$ and let $C$ be the circle $x^2 + y^2 = 10$.

**(a)** Use Lagrange multipliers to find the absolute max and min of $f$ on $C$.

Absolute max of $f$ on $C$ is {{expr 2: 10}} which occurs at the point(s) {{point 1: (3, 1)}}

Absolute min of $f$ on $C$ is {{expr 1: -10}} which occurs at the point(s) {{point 1: (-3, -1)}}

**(b)** The absolute max of $f$ on all of $\\mathbb{R}^2$ is: {{circle 1: 0 | 10 | 20 | *does not exist}}
+++
review: 2026-09-30 The method; 2026-09-28 When must extremes exist?

**What to recognize.** "Max and min of $f$ *on a curve* $g = c$" means Lagrange multipliers. A circle is closed and bounded, so both a max and a min must exist.

**Steps for (a).**

1. Name the constraint: $g(x,y) = x^2 + y^2 = 10$. Then $\\nabla f = \\langle 3, 1 \\rangle$ and $\\nabla g = \\langle 2x, 2y \\rangle$.
2. Set $\\nabla f = \\lambda \\nabla g$ and keep the constraint:
$$3 = 2\\lambda x, \\qquad 1 = 2\\lambda y, \\qquad x^2 + y^2 = 10.$$
3. $\\lambda$ can't be $0$ (the first equation would say $3 = 0$), and $y$ can't be $0$ (the second would say $1 = 0$). So it's safe to divide the first equation by the second, which eliminates $\\lambda$: $\\dfrac{3}{1} = \\dfrac{x}{y}$, so $x = 3y$.
4. Substitute into the constraint: $9y^2 + y^2 = 10$, so $y^2 = 1$ and $y = \\pm 1$. Then $x = 3y$ gives the points $(3, 1)$ and $(-3, -1)$.
5. Evaluate $f$ at **every** candidate and compare: $f(3,1) = 10$ (max) and $f(-3,-1) = -10$ (min).

**Check.** At $(3,1)$, $\\nabla f = \\langle 3,1 \\rangle$ and $\\nabla g = \\langle 6,2 \\rangle$ point the same way, as Lagrange requires.

**(b)** Without the constraint, nothing stops $x$ from growing: along the $x$-axis $f(x, 0) = 3x \\to \\infty$. So there is no absolute max on $\\mathbb{R}^2$. Lagrange multipliers only find extremes *on the constraint*.

**Common mistake.** Reporting $\\lambda$ instead of $f$'s value, or forgetting to compare $f$ at all the candidate points.

**Why not the other choices in (b).**
- **0, 10, 20:** $f$ does take these values, but none is the biggest. For any of them, a point farther out on the $x$-axis gives more, since $f(x, 0) = 3x$.
- **10** in particular is the max *on the circle*. Off the circle, $f$ keeps growing.
:::

:::problem 2
Find the tangent plane to the surface $x^2 + 2y^2 - z^2 = 5$ at the point $P = (2, 1, 1)$.

Equation: {{plane 4: 2, 2, -1, 5}}
+++
review: 2026-09-21 Tangent planes to level surfaces

**What to recognize.** The surface is a *level surface* $F(x,y,z) = 5$, not a graph $z = f(x,y)$. For a level surface, the gradient $\\nabla F$ is perpendicular to it, so it's the normal vector of the tangent plane.

**Steps.**

1. Let $F = x^2 + 2y^2 - z^2$. Then $\\nabla F = \\langle 2x,\\; 4y,\\; -2z \\rangle$.
2. Evaluate at $P = (2,1,1)$: $\\mathbf n = \\nabla F(P) = \\langle 4,\\; 4,\\; -2 \\rangle$.
3. A plane through $P$ with normal $\\mathbf n$: $\\mathbf n \\cdot \\langle x - 2,\\; y - 1,\\; z - 1 \\rangle = 0$, i.e.
$$4(x - 2) + 4(y - 1) - 2(z - 1) = 0.$$
4. Expand: $4x + 4y - 2z = 8 + 4 - 2 = 10$. Divide by 2: $2x + 2y - z = 5$.

**Check.** $P$ should satisfy the plane: $2(2) + 2(1) - 1 = 5$. ✓ Any nonzero multiple, such as $4x + 4y - 2z = 10$, is the same plane, and the grader accepts it.

**Common mistakes.** Solving for $z$ first ($z = \\sqrt{x^2 + 2y^2 - 5}$ near $P$) and using the graph formula. It can work, but it's slower and easy to get wrong. Also, evaluating $\\nabla F$ at a general point instead of at $P$.
:::

:::problem 3
Suppose $f(x,y)$ has continuous second partial derivatives with the values in the table. For each point, circle the best description. (1 point each)

| $(x,y)$ | $f$ | $f_x$ | $f_y$ | $f_{xx}$ | $f_{yy}$ | $f_{xy}$ |
|---|---|---|---|---|---|---|
| $(0,0)$ | $1$ | $0$ | $0$ | $3$ | $2$ | $1$ |
| $(1,0)$ | $4$ | $0$ | $2$ | $1$ | $1$ | $0$ |
| $(0,2)$ | $-2$ | $0$ | $0$ | $1$ | $-2$ | $0$ |
| $(2,1)$ | $6$ | $0$ | $0$ | $-3$ | $-1$ | $1$ |
| $(-1,1)$ | $0$ | $0$ | $0$ | $2$ | $2$ | $2$ |

$(0,0)$: {{circle 1: not critical | *local min | local max | saddle | undetermined}}

$(1,0)$: {{circle 1: *not critical | local min | local max | saddle | undetermined}}

$(0,2)$: {{circle 1: not critical | local min | local max | *saddle | undetermined}}

$(2,1)$: {{circle 1: not critical | local min | *local max | saddle | undetermined}}

$(-1,1)$: {{circle 1: not critical | local min | local max | saddle | *undetermined}}
+++
review: 2026-09-25 The second derivative test

**What to recognize.** Classifying points means two checks: is the point critical at all, and if so, what does the second derivative test say?

**Step 1: critical?** A point is critical only if $f_x = 0$ **and** $f_y = 0$. At $(1,0)$, $f_y = 2$, so it's not critical. Stop there.

**Step 2: the second derivative test.** At the others compute $D = f_{xx} f_{yy} - f_{xy}^2$:

| point | $D$ | $f_{xx}$ | verdict |
|---|---|---|---|
| $(0,0)$ | $3\\cdot 2 - 1^2 = 5$ | $3 > 0$ | local min |
| $(0,2)$ | $1\\cdot(-2) - 0 = -2$ | | saddle |
| $(2,1)$ | $(-3)(-1) - 1^2 = 2$ | $-3 < 0$ | local max |
| $(-1,1)$ | $2\\cdot 2 - 2^2 = 0$ | | undetermined |

The rules: $D > 0$ with $f_{xx} > 0$ is a min (curving up), $D > 0$ with $f_{xx} < 0$ is a max, $D < 0$ is a saddle, and $D = 0$ means the test can't decide.

**Common mistakes.** Forgetting to square $f_{xy}$. Using the value of $f$ (that column never matters here). Calling a $D = 0$ point a saddle.

**Why not the other choices.**
- **"not critical"** fits only $(1,0)$. Every other point has $f_x = f_y = 0$.
- **"local min" or "local max"** need $D > 0$. At $(0,2)$ ($D = -2$) and $(-1,1)$ ($D = 0$) they're ruled out. At $(0,0)$, $f_{xx} > 0$ rules out max, and at $(2,1)$, $f_{xx} < 0$ rules out min.
- **"saddle"** needs $D < 0$, which happens only at $(0,2)$.
- **"undetermined"** needs $D = 0$, which happens only at $(-1,1)$.
:::

:::scratch
:::

:::problem 4
The contour map of a differentiable function $f$ is shown on the region $D = \\{-2.5 \\le x \\le 2.5,\\ -2 \\le y \\le 2\\}$. Each level curve is labeled with its value of $f$. Circle the best answer. (1 point each)

{{figure 0: contour-m2p1}}

**(a)** The number of critical points of $f$ in $D$ is: {{circle 1: 0 | 1 | *2 | 3 | 4}}

**(b)** The number of those critical points that are saddle points is: {{circle 1: 0 | *1 | 2 | 3}}

**(c)** The directional derivative $D_{\\vec u} f(P)$, where $\\vec u$ is the unit vector drawn as the arrow labeled $\\vec u$ at $P$, is: {{circle 1: *negative | zero | positive}}

**(d)** The gradient $\\nabla f(A)$ points: {{circle 1: *up | down | left | right}}

**(e)** Circle the correct relationship: {{circle 1: *$\\lVert \\nabla f(A) \\rVert > \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert = \\lVert \\nabla f(B) \\rVert$ | $\\lVert \\nabla f(A) \\rVert < \\lVert \\nabla f(B) \\rVert$}}

**(f)** For the curve $C$ shown, from $S$ to $E$, the integral $\\int_C \\nabla f \\cdot d\\mathbf r$ is: {{circle 1: -4 | -2 | 0 | *2 | 4 | 8}}
+++
review: 2026-09-18 Gradients and level curves; 2026-09-18 The gradient; 2026-09-25 Critical points; 2026-10-09 The Fundamental Theorem for Line Integrals

**What to recognize.** Contour-map questions test what the gradient *means*, not formulas. These facts do all the work:

- $\\nabla f$ is perpendicular to the level curve and points toward **higher** values.
- $\\lVert \\nabla f \\rVert$ is large where level curves are **close together**.
- $D_{\\vec u} f(P)$ is the rate $f$ changes as you move from $P$ in direction $\\vec u$.
- **Max or min:** the level curves form **rings inside rings** around one point (closed loops, one inside another). The point in the middle is a max (if the labels go up toward it) or a min (if they go down).
- **Saddle:** one level curve **crosses itself**, making an X shape. The crossing point is the saddle.

**(a)** On the right, the level curves form rings inside rings around $(1, 0)$, and the labels get smaller toward the middle, so that's a **minimum**. On the left, the curve labeled $2$ crosses itself at $(-1, 0)$, making an X, so that's a **saddle**. That's **2** critical points. (The map is of $f = x^3 - 3x + y^2$, whose critical points are $(\\pm 1, 0)$.)

**(b)** Only the X-shaped crossing is a saddle: **1**.

**(c)** Moving right from $P$, you cross into curves with smaller labels, so $f$ is decreasing: **negative**. (Formula check: $f_x(0, 1) = -3$.)

**(d)** At $A$ the level curve runs horizontally, so $\\nabla f$, which is perpendicular to it, points straight up or straight down. The labels get bigger going up, so it points **up**. (Formula check: $\\nabla f(1, 1.5) = \\langle 0, 3 \\rangle$.)

**(e)** Near $A$ the level curves are close together, and near $B$ they're far apart. Close-together curves mean $f$ changes a lot over a short distance, so $\\lVert \\nabla f(A) \\rVert > \\lVert \\nabla f(B) \\rVert$. (Exactly: $3$ vs $1$.)

**(f)** This is a gradient field, so the Fundamental Theorem for Line Integrals applies: $\\int_C \\nabla f \\cdot d\\mathbf r = f(E) - f(S)$. $S$ sits on the curve labeled $0$ and $E$ on the curve labeled $2$, so the answer is $2 - 0 = 2$. The curvy shape of $C$ doesn't matter, only its two ends.

**Common mistakes.** In (d), pointing *along* the level curve instead of across it. In (f), trying to estimate the integral piece by piece along $C$.

**Why not the other choices.**
- **(a)** **0 or 1:** the map has both a min (rings inside rings) and a saddle (a curve crossing itself). **3 or 4:** nowhere else do the curves form rings or cross.
- **(b)** **0:** the X-shaped crossing is a saddle. **2:** the other critical point is a min, since rings surround it. **3:** there are only two critical points.
- **(c)** **zero** would mean $\\vec u$ runs along the level curve through $P$, but it cuts across level curves. **positive** is backward, because the labels drop as you move right.
- **(d)** **down** points toward smaller labels. **left or right** would run along the horizontal level curve at $A$, where $f$ doesn't change.
- **(e)** **equal:** the gaps between curves are different near $A$ and $B$. **less than:** backward, since smaller gaps (at $A$) mean a longer gradient.
- **(f)** **$-2$** has the sign backward, $f(S) - f(E)$. **$0$** would need $S$ and $E$ on the same level curve. The others don't match $2 - 0$.
:::

:::problem 5
The vector field $\\mathbf F(x,y) = \\langle 2xy + 3,\\; x^2 - 4y \\rangle$ on $\\mathbb{R}^2$ is conservative. Find the potential function $f(x,y)$ with $\\mathbf F = \\nabla f$ and $f(0,0) = 0$. No partial credit, so check your answer!

$f(x,y) =$ {{expr 3: x^2 y + 3x - 2y^2}}
+++
review: 2026-10-12 Finding the potential function

**What to recognize.** "Find $f$ with $\\nabla f = \\mathbf F$": build $f$ one variable at a time, as in the Oct 12 lecture.

**Steps.**

1. $f_x$ must equal $P = 2xy + 3$. Integrate with respect to $x$, treating $y$ as a constant:
$$f = x^2 y + 3x + h(y).$$
The "constant" $h(y)$ can depend on $y$, because it disappears when you differentiate in $x$.
2. Differentiate with respect to $y$: $f_y = x^2 + h'(y)$.
3. That must equal $Q = x^2 - 4y$, so $h'(y) = -4y$. There's no $x$ left, which confirms the field really is conservative.
4. Integrate: $h(y) = -2y^2 + C$.
5. Use $f(0,0) = 0$: $0 + 0 - 0 + C = 0$, so $C = 0$.
$$f(x,y) = x^2 y + 3x - 2y^2.$$

**Check.** $\\nabla f = \\langle 2xy + 3,\\; x^2 - 4y \\rangle = \\mathbf F$. ✓ With no partial credit, this 10-second check is worth it.

**Common mistakes.** Writing $+\\,C$ when the problem fixes $f(0,0) = 0$. Treating $h$ as a number instead of a function of $y$. Adding $\\int P\\,dx$ and $\\int Q\\,dy$ (that double-counts the $x^2 y$ term).
:::

:::problem 6
Let $C$ be the curve where the cylinder $x^2 + z^2 = 9$ meets the plane $y = z + 2$.

**(a)** Find a vector function $\\mathbf r(t)$ that parametrizes $C$, going around the whole curve exactly once. Give the domain of $t$.

{{self 4}}

**(b)** The point $(0, 5, 3)$ lies on $C$: {{circle 1: *true | false}}
+++
review: 2026-10-02 Curves as vector functions

**What to recognize.** For "cylinder meets surface," parametrize the cylinder's circle with $\\cos$ and $\\sin$, then let the other equation give the remaining coordinate.

**Steps for (a).**

1. Which variables does the cylinder use? $x^2 + z^2 = 9$ is a circle of radius $3$ in the $x$ and $z$ directions (the cylinder runs along the $y$-axis).
2. Parametrize that circle: $x = 3\\cos t$, $z = 3\\sin t$. One trip around is $0 \\le t \\le 2\\pi$.
3. The plane gives the last coordinate: $y = z + 2 = 3\\sin t + 2$.
$$\\mathbf r(t) = \\langle 3\\cos t,\\; 3\\sin t + 2,\\; 3\\sin t \\rangle, \\qquad 0 \\le t \\le 2\\pi.$$

**How to grade yourself.** Your answer is right if, for every $t$, it satisfies **both** equations and the domain traces the curve exactly once. Plug in: $x^2 + z^2 = 9\\cos^2 t + 9\\sin^2 t = 9$ ✓ and $y - z = 2$ ✓. Swapping $\\cos$ and $\\sin$ or starting somewhere else is also correct.

**(b)** Plug in $(0, 5, 3)$: $0^2 + 3^2 = 9$ ✓ and $3 + 2 = 5$ ✓. **True.**

**Common mistakes.** Pairing $\\cos$ and $\\sin$ with $x$ and $y$ when the cylinder uses $x$ and $z$. Using $0 \\le t \\le \\pi$, which only goes halfway around.

**Why not "false" in (b).** The point satisfies both equations, so it is on $C$.
:::

:::scratch
:::

:::problem 7
A thin wire has the shape of the curve $\\mathbf r(t) = \\langle 3\\cos t,\\; 3\\sin t \\rangle$ for $0 \\le t \\le \\pi$.

**(a)** Circle the picture of the wire.

{{figure 0: wires-m2p1}}

{{circle 1: (i) | *(ii) | (iii) | (iv)}}

**(b)** The density of the wire is $\\rho(x,y) = 2 + y$. Find the total mass of the wire.

Total mass = {{expr 5: 6pi + 18}}
+++
review: 2026-10-02 Curves as vector functions; 2026-10-05 Mass and average value

**(a)** Plug in a few values of $t$: $t = 0$ gives $(3, 0)$, $t = \\pi/2$ gives $(0, 3)$, and $t = \\pi$ gives $(-3, 0)$. That's the **upper** half of the circle: picture (ii).

**What to recognize in (b).** Mass of a wire $=$ adding up density along the curve, which is the scalar line integral $\\int_C \\rho\\, ds$, with $ds = \\lVert \\mathbf r'(t) \\rVert\\, dt$.

**Steps.**

1. $\\mathbf r'(t) = \\langle -3\\sin t,\\; 3\\cos t \\rangle$, so $\\lVert \\mathbf r'(t) \\rVert = \\sqrt{9\\sin^2 t + 9\\cos^2 t} = 3$.
2. Density along the wire: $\\rho(\\mathbf r(t)) = 2 + y(t) = 2 + 3\\sin t$.
3. Integrate:
$$\\int_0^\\pi (2 + 3\\sin t)\\cdot 3\\,dt = 3\\Big[2t - 3\\cos t\\Big]_0^\\pi = 3\\big[(2\\pi + 3) - (0 - 3)\\big] = 6\\pi + 18.$$

**Check.** On the upper half, $0 \\le y \\le 3$, so the density is between $2$ and $5$. The mass must be between $2 \\times$ length $= 2 \\cdot 3\\pi \\approx 18.8$ and $5 \\times$ length $= 15\\pi \\approx 47.1$. Our $6\\pi + 18 \\approx 36.8$ is in range. ✓

**Common mistakes.** Forgetting the factor $\\lVert \\mathbf r' \\rVert = 3$ (that gives $2\\pi + 6$). Leaving $y$ in the integral instead of replacing it with $3\\sin t$.

**Why not the other pictures in (a).**
- **(i)** is the right half, which is what $-\\tfrac\\pi2 \\le t \\le \\tfrac\\pi2$ would trace.
- **(iii)** is the lower half, but on $0 \\le t \\le \\pi$, $y = 3\\sin t \\ge 0$.
- **(iv)** is the full circle, but $t$ only runs to $\\pi$, half a turn.
:::

:::problem 8
Calculate the line integral of $\\mathbf F(x,y,z) = \\langle -y,\\; x,\\; z \\rangle$ along the curve $C$ parametrized by $\\mathbf r(t) = \\langle \\cos t,\\; \\sin t,\\; t \\rangle$ for $0 \\le t \\le \\pi$.

$\\int_C \\mathbf F \\cdot d\\mathbf r =$ {{expr 4: pi + pi^2/2}}
+++
review: 2026-10-07 Line integrals of vector fields

**What to recognize.** A vector line integral $\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\,dt$. Quick check first: is $\\mathbf F$ conservative? $P_y = -1$ but $Q_x = 1$, so no shortcut. Compute it directly.

**Steps.**

1. Substitute the curve into $\\mathbf F$: $\\mathbf F(\\mathbf r(t)) = \\langle -\\sin t,\\; \\cos t,\\; t \\rangle$.
2. Differentiate the curve: $\\mathbf r'(t) = \\langle -\\sin t,\\; \\cos t,\\; 1 \\rangle$.
3. Dot them: $\\sin^2 t + \\cos^2 t + t = 1 + t$.
4. Integrate:
$$\\int_0^\\pi (1 + t)\\,dt = \\Big[t + \\tfrac{t^2}{2}\\Big]_0^\\pi = \\pi + \\frac{\\pi^2}{2}.$$

**Why it's positive.** In the $xy$ part, $\\langle -y, x \\rangle$ swirls counterclockwise, the same way the helix turns. In the $z$ part, $z = t \\ge 0$ and the curve rises. Both push along the path (or at worst don't push against it).

**Common mistakes.** Multiplying by $\\lVert \\mathbf r' \\rVert$ (that's for $\\int f\\,ds$, not $\\int \\mathbf F \\cdot d\\mathbf r$). Trying the Fundamental Theorem on a field that isn't conservative.
:::

:::problem 9
Find the length of the curve $\\mathbf r(t) = \\langle 2t,\\; t^2,\\; \\ln t \\rangle$ for $1 \\le t \\le e$.

Length = {{expr 4: e^2}}
+++
review: 2026-10-02 Arc length; 2026-10-05 Arc length, again

**What to recognize.** Arc length is $L = \\int_a^b \\lVert \\mathbf r'(t) \\rVert\\,dt$. Exam arc-length problems are built so the square root simplifies, so look for a perfect square.

**Steps.**

1. $\\mathbf r'(t) = \\langle 2,\\; 2t,\\; 1/t \\rangle$.
2. $\\lVert \\mathbf r'(t) \\rVert^2 = 4 + 4t^2 + \\dfrac{1}{t^2}$.
3. Spot the perfect square: $\\left(2t + \\dfrac{1}{t}\\right)^2 = 4t^2 + 2\\cdot 2t \\cdot \\dfrac{1}{t} + \\dfrac{1}{t^2} = 4t^2 + 4 + \\dfrac{1}{t^2}$. ✓ So $\\lVert \\mathbf r' \\rVert = 2t + \\dfrac{1}{t}$ (positive for $t \\ge 1$).
4. Integrate:
$$L = \\int_1^e \\left(2t + \\frac{1}{t}\\right) dt = \\Big[t^2 + \\ln t\\Big]_1^e = (e^2 + 1) - (1 + 0) = e^2.$$

**Common mistake.** Trying to integrate $\\sqrt{4 + 4t^2 + 1/t^2}$ directly, as it is. If the root looks impossible, look for $(a + b)^2 = a^2 + 2ab + b^2$.
:::

:::problem 10
A particle moves along $\\mathbf r(t) = \\langle t^2,\\; t^3,\\; 2t \\rangle$.

Its speed at $t = 1$ is {{expr 2: sqrt(17)}}

Its acceleration at $t = 1$ is $\\mathbf a(1) = \\langle$ {{expr 1: 2}} , {{expr 1: 6}} , {{expr 1: 0}} $\\rangle$
+++
review: 2026-10-02 Velocity, speed, and acceleration

**What to recognize.** Velocity is $\\vec v = \\mathbf r'$, speed is the *length* $\\lVert \\vec v \\rVert$ (a number), and acceleration is $\\mathbf a = \\vec v' = \\mathbf r''$ (a vector).

**Steps.**

1. $\\vec v(t) = \\langle 2t,\\; 3t^2,\\; 2 \\rangle$, so $\\vec v(1) = \\langle 2, 3, 2 \\rangle$.
2. Speed: $\\lVert \\vec v(1) \\rVert = \\sqrt{4 + 9 + 4} = \\sqrt{17}$.
3. $\\mathbf a(t) = \\langle 2,\\; 6t,\\; 0 \\rangle$, so $\\mathbf a(1) = \\langle 2, 6, 0 \\rangle$.

**Common mistakes.** Giving the velocity vector when asked for speed. Plugging in $t = 1$ *before* differentiating.
:::

:::scratch
:::

:::problem 11
Consider these four regions in the plane. (1 point each)

- $R_1 = \\{x^2 + y^2 \\le 9\\}$
- $R_2 = \\{1 < x^2 + y^2 < 9\\}$
- $R_3 = \\{y > x^2\\}$
- $R_4 = \\{x^2 + y^2 < 4 \\text{ and } x \\ge 0\\}$

**(a)** Which region is not bounded? {{circle 1: $R_1$ | $R_2$ | *$R_3$ | $R_4$}}

**(b)** Which region is closed? {{circle 1: *$R_1$ | $R_2$ | $R_3$ | $R_4$}}

**(c)** Which region is not simply connected? {{circle 1: $R_1$ | *$R_2$ | $R_3$ | $R_4$}}
+++
review: 2026-09-28 When must extremes exist?; 2026-10-12 Is the condition enough?

**What to recognize.** These are definitions. Know them cold:

- **Bounded:** fits inside some disk.
- **Closed:** contains **all** of its boundary (look for $\\le$, not $<$, on every edge).
- **Open:** contains **none** of its boundary.
- **Simply connected:** in one piece with **no holes**.

Then go region by region:

| region | bounded? | boundary included | holes? |
|---|---|---|---|
| $R_1$ disk, $\\le 9$ | yes | all (closed) | none |
| $R_2$ ring, $<$ both sides | yes | none (open) | **yes**, the inner disk |
| $R_3$ above the parabola | **no** | none (open) | none |
| $R_4$ half-disk | yes | some: the flat edge $x = 0$, but not the arc or the corners $(0, \\pm 2)$ | none |

**(a)** $R_3$: $y$ can be as large as you like. **(b)** $R_1$: it's the only one containing all of its boundary. $R_4$ is neither open nor closed. **(c)** $R_2$: a rubber-band loop around the hole can't be pulled tight into a point without crossing the hole.

**Common mistake.** Thinking "not open" means "closed." $R_4$ is neither.

**Why not the other choices.**
- **(a)** $R_1$, $R_2$, and $R_4$ all fit inside the disk of radius 3, so they're bounded.
- **(b)** $R_2$ and $R_3$ use only strict inequalities, so they contain none of their boundary. $R_4$ is missing its arc.
- **(c)** $R_1$, $R_3$, and $R_4$ are each one piece with no holes.
:::

:::problem 12
Consider the three vector fields $E$, $F$, and $G$ shown below. (1 point each)

{{figure 0: fields-m2p1}}

**(a)** One of these is $\\langle -y,\\; x \\rangle$. Circle it: {{circle 1: E | *F | G}}

**(b)** Exactly one of them is conservative. Circle it: {{circle 1: *E | F | G}}

**(c)** Exactly one of these is a flowline of $E$. Circle it: {{circle 1: $\\langle t, 1 - t \\rangle$ | $\\langle \\cos t, \\sin t \\rangle$ | *$\\langle e^t, e^t \\rangle$ | $\\langle t, t^2 \\rangle$}}

**(d)** For the segment $L$ from $(0,0)$ to $(1,1)$, the integral $\\int_L G \\cdot d\\mathbf r$ is: {{circle 1: negative | zero | *positive}}
+++
review: 2026-10-07 What a vector field is; 2026-10-07 Flowlines; 2026-10-12 A necessary condition

**What to recognize.** To match a formula to a picture, plug in a couple of easy points and see which way the arrows should point. The fields are $E = \\langle y, x \\rangle$, $F = \\langle -y, x \\rangle$, and $G = \\langle 1, x \\rangle$.

**(a)** For $\\langle -y, x \\rangle$: at $(1, 0)$ the arrow is $\\langle 0, 1 \\rangle$ (up), and at $(0, 1)$ it's $\\langle -1, 0 \\rangle$ (left). That's a counterclockwise swirl around the origin: **F**.

**(b)** A swirl can't be conservative, because going around a loop gains something, so it's not $F$. Test the formulas with cross-partials: $E$: $P_y = 1 = Q_x$ ✓ (it's $\\nabla(xy)$). $G$: $P_y = 0 \\ne 1 = Q_x$ ✗. So **E**.

**(c)** A flowline follows the arrows: $\\mathbf r'(t) = E(\\mathbf r(t)) = \\langle y, x \\rangle$. Test each:

- $\\langle t, 1 - t \\rangle$: $\\mathbf r' = \\langle 1, -1 \\rangle$, but $E = \\langle 1 - t, t \\rangle$. ✗
- $\\langle \\cos t, \\sin t \\rangle$: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$, but $E = \\langle \\sin t, \\cos t \\rangle$. ✗
- $\\langle e^t, e^t \\rangle$: $\\mathbf r' = \\langle e^t, e^t \\rangle$ and $E = \\langle e^t, e^t \\rangle$. ✓
- $\\langle t, t^2 \\rangle$: $\\mathbf r' = \\langle 1, 2t \\rangle$, but $E = \\langle t^2, t \\rangle$. ✗

**(d)** Along $L$, use $\\mathbf r(t) = \\langle t, t \\rangle$, so $G \\cdot \\mathbf r' = \\langle 1, t \\rangle \\cdot \\langle 1, 1 \\rangle = 1 + t > 0$ everywhere. The integral is $\\tfrac{3}{2}$: **positive**. In the picture, $G$'s arrows point right and up, the same general way you're walking.

**Common mistake.** In (c), checking only that the curve passes through the right points. A flowline's *velocity* has to match the field.

**Why not the other choices.**
- **(a)** **E:** at $(0,1)$, $E = \\langle 1, 0 \\rangle$ points right, but $\\langle -y, x \\rangle$ points left there. **G:** $G = \\langle 1, x \\rangle$ always has $x$-component $1$, so it never points left.
- **(b)** **F** swirls around the origin, so a loop around it gains something, which a conservative field can't do. **G** fails the cross-partials test ($0 \\ne 1$).
- **(c)** The ✗ checks above show each other curve's velocity disagrees with $E$.
- **(d)** **negative or zero:** $G \\cdot \\mathbf r' = 1 + t$ is positive at every point of $L$, so the integral is positive.
:::
`;export{e as default};