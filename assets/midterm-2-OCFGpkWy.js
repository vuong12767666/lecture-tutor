var e=`---
title: Midterm 2 review
exam: Midterm 2
source: OpenStax Calculus Volume 3, §3.1–3.4, §4.6–4.8, and §6.1–6.3
---

:::question The big question
Midterm 2 (Tue, Oct 20) covers three units. For any problem on it: which unit is it from, which method does it want, and which mistakes cost the most points?
:::

:::idea The map of the exam
| Unit | Stewart | Lectures | You'll be asked to… |
|---|---|---|---|
| 1. Gradient and optimization | §14.6–14.8 | Sep 18 – Sep 30 | find directional derivatives and tangent planes, classify critical points, find absolute extremes, use Lagrange multipliers |
| 2. Curves | §13.1–13.4 (early parts) | Oct 2 – Oct 5 | parametrize curves, find tangent lines, arc length, velocity, speed, and acceleration |
| 3. Line integrals | §16.1–16.3 | Oct 5 – Oct 14 | compute $\\int_C f\\,ds$ and $\\int_C \\mathbf F \\cdot d\\mathbf r$, read vector-field pictures, check flowlines, test for conservative, find potentials |

**The thread through all of it is the [[gradient]].** It points in the direction $f$ increases fastest (unit 1), it's perpendicular to level curves and surfaces (tangent planes), and a field that *is* a gradient makes line integrals easy (unit 3).
+++
**How to use the map on a problem, step by step, with one example.** Take $f(x, y) = x^2 + y^2$ and the curve $C$: $\\mathbf r(t) = \\langle t, t^2 \\rangle$, $0 \\le t \\le 1$, which goes from $(0, 0)$ to $(1, 1)$. Suppose a question asks three things about them.
1. **"In which direction does $f$ increase fastest at $(1, 1)$?"** *Why it's unit 1:* "increase fastest" is about how $f$ changes, which is the gradient. $\\nabla f = \\langle 2x, 2y \\rangle = \\langle 2, 2 \\rangle$ at $(1, 1)$.
2. **"What is the velocity along $C$ at $t = 1$?"** *Why it's unit 2:* it asks about the motion along a curve, not about adding anything up. $\\mathbf r'(t) = \\langle 1, 2t \\rangle$, so $\\mathbf r'(1) = \\langle 1, 2 \\rangle$.
3. **"Find $\\int_C \\nabla f \\cdot d\\mathbf r$."** *Why it's unit 3:* an integral along a curve is a line integral. *Why it's short:* the field is a gradient, so the Fundamental Theorem gives $f(\\text{end}) - f(\\text{start}) = f(1, 1) - f(0, 0) = 2 - 0 = 2$.
4. **Check the shortcut the long way.** On $C$, $\\nabla f = \\langle 2t, 2t^2 \\rangle$ and $\\mathbf r' = \\langle 1, 2t \\rangle$. The dot product is $2t + 4t^3$, and $\\int_0^1 (2t + 4t^3)\\, dt = 1 + 1 = 2$ ✓.

**The words that point to each unit:** "rate", "steepest", "tangent plane", "max", "min" mean unit 1. "Parametrize", "tangent line", "length", "speed" mean unit 2. "Along $C$", "work", "mass of a wire", "conservative", "potential" mean unit 3.
:::

:::check
"Find the mass of a wire shaped like a curve $C$ with density $\\rho$." Which unit is that?
- [ ] Unit 1: gradient and optimization
  why: Nothing is being maximized and no gradient is involved. You're adding up density along a curve.
- [ ] Unit 2 only: curves
  why: You do parametrize the curve (unit 2), but the mass itself is an integral along the curve, which is unit 3.
- [x] Unit 3: a line integral $\\int_C \\rho\\, ds$
???
Mass is $\\int_C \\rho\\, ds = \\int_a^b \\rho(\\mathbf r(t))\\,\\lVert \\mathbf r'(t) \\rVert\\, dt$, a line integral of a function (unit 3). It uses unit 2 skills along the way: parametrizing and $\\lVert \\mathbf r' \\rVert$.
:::

:::idea Unit 1: the gradient
**Formulas.** ([Sep 18 lecture](#/lecture/2026-09-18), [Sep 21 lecture](#/lecture/2026-09-21))

- $\\nabla f = \\langle f_x, f_y \\rangle$ (add $f_z$ in 3D).
- [[directional derivative|Directional derivative]]: $D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u$, with $\\mathbf u$ a **unit** vector.
- Fastest increase: in the direction of $\\nabla f$, at rate $\\lVert \\nabla f \\rVert$. Fastest decrease: $-\\nabla f$. No change: perpendicular to $\\nabla f$.
- $\\nabla f$ is perpendicular to level curves, and $\\nabla F$ is perpendicular to level surfaces.
- [[tangent plane|Tangent plane]] to $F(x,y,z) = k$ at $P$: $\\nabla F(P) \\cdot \\langle x - x_0,\\, y - y_0,\\, z - z_0 \\rangle = 0$.

**Which formula does the question want?**

| The question says… | Use |
|---|---|
| "rate of change in the direction of…" | $D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u$ (make $\\mathbf u$ a unit vector) |
| "maximum rate of change" or "steepest" | $\\lVert \\nabla f \\rVert$, in the direction of $\\nabla f$ |
| "direction of no change" | any vector perpendicular to $\\nabla f$ |
| "tangent plane" or "normal line" | $\\nabla F(P)$ is the normal vector |
+++
**Why each formula works, with one example:** $f = x^2 y$ at the point $(1, 2)$, where $\\nabla f = \\langle 2xy, x^2 \\rangle = \\langle 4, 1 \\rangle$.
- *Why $D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u$:* a small step of length $h$ in the direction $\\mathbf u = \\langle a, b \\rangle$ changes $x$ by $ha$ and $y$ by $hb$. Then $f$ changes by about $f_x \\cdot ha + f_y \\cdot hb$, and dividing by $h$ gives the rate $f_x a + f_y b = \\nabla f \\cdot \\mathbf u$. For example, toward the point $(4, 6)$ the direction is $\\langle 3, 4 \\rangle$, with length $5$, so $\\mathbf u = \\langle 0.6, 0.8 \\rangle$ and the rate is $4(0.6) + 1(0.8) = 3.2$. Check: a step of $h = 0.01$ goes to $(1.006, 2.008)$, where $f \\approx 2.03217$. That is $0.03217$ more than $f(1, 2) = 2$, a rate of about $3.2$ per unit of distance ✓.
- *Why $\\mathbf u$ must be a unit vector:* the rate is "change in $f$ per unit of distance". With $\\langle 3, 4 \\rangle$ instead of $\\langle 0.6, 0.8 \\rangle$, each step is $5$ times longer, and you get $16$, five times too big. This is the most common lost point.
- *Why the largest rate is $\\lVert \\nabla f \\rVert$:* $\\nabla f \\cdot \\mathbf u = \\lVert \\nabla f \\rVert \\cos\\theta$, where $\\theta$ is the angle between $\\mathbf u$ and $\\nabla f$ (the length of $\\mathbf u$ is $1$). $\\cos\\theta$ is at most $1$, when $\\mathbf u$ points along $\\nabla f$. So the largest rate is $\\lVert \\langle 4, 1 \\rangle \\rVert = \\sqrt{17} \\approx 4.12$. At $\\theta = 180°$ the rate is $-\\sqrt{17}$, the fastest decrease.
- *Why perpendicular means no change:* at $\\theta = 90°$, $\\cos\\theta = 0$. For example, $\\mathbf u = \\tfrac{1}{\\sqrt{17}}\\langle 1, -4 \\rangle$ gives $\\tfrac{4 - 4}{\\sqrt{17}} = 0$.
- *Why $\\nabla f$ is perpendicular to level curves:* along a level curve $f$ doesn't change, so its direction must be one of the no-change directions. The level curve through $(1, 2)$ is $x^2 y = 2$, or $y = 2/x^2$. Its slope there is $-4/x^3 = -4$, so it heads in the direction $\\langle 1, -4 \\rangle$, exactly the no-change direction above ✓.
- *Why $\\nabla F(P)$ is the tangent plane's normal:* the same reason in 3D. For example, the sphere $x^2 + y^2 + z^2 = 9$ at $(1, 2, 2)$ has $\\nabla F = \\langle 2, 4, 4 \\rangle$. The plane is $2(x - 1) + 4(y - 2) + 4(z - 2) = 0$, which is $x + 2y + 2z = 9$. Check: $1 + 4 + 4 = 9$ ✓.
:::

:::check
Find the rate of change of $f = xy$ at $(2, 3)$ in the direction of $\\langle 3, 4 \\rangle$.
answer: 17/5
???
$\\nabla f = \\langle y, x \\rangle = \\langle 3, 2 \\rangle$ and $\\mathbf u = \\tfrac15\\langle 3, 4 \\rangle$, so $D_{\\mathbf u} f = \\tfrac{9 + 8}{5} = \\tfrac{17}{5}$.
:::

:::check
At a point $P$, $\\nabla f(P) = \\langle 2, -1 \\rangle$. In which direction does $f$ decrease fastest?
- [x] $\\langle -2, 1 \\rangle$
- [ ] $\\langle 2, -1 \\rangle$
  why: That's $\\nabla f$ itself, the direction of fastest **increase**.
- [ ] $\\langle 1, 2 \\rangle$
  why: $\\langle 1, 2 \\rangle \\cdot \\langle 2, -1 \\rangle = 0$: it's perpendicular to $\\nabla f$, so $f$ doesn't change that way.
- [ ] $\\langle -1, -2 \\rangle$
  why: Also perpendicular to $\\nabla f$ (dot product $-2 + 2 = 0$), so $f$ doesn't change that way either.
???
Fastest decrease is opposite the gradient: $-\\nabla f = \\langle -2, 1 \\rangle$.
:::

:::idea Unit 1: optimization, which method?
([Sep 25](#/lecture/2026-09-25), [Sep 28](#/lecture/2026-09-28), [Sep 30](#/lecture/2026-09-30))

| The question asks for… | Method |
|---|---|
| local max, local min, or saddle | Solve $\\nabla f = \\mathbf 0$ for [[critical point|critical points]], then use $D = f_{xx} f_{yy} - f_{xy}^2$ |
| absolute max/min on a closed, bounded **region** | (1) critical points inside, (2) the boundary, edge by edge, with corners, (3) compare all values |
| max/min on a **curve** $g(x,y) = c$ | [[lagrange multipliers|Lagrange]]: $\\nabla f = \\lambda \\nabla g$ and $g = c$, then compare $f$ at every solution |

**Second derivative test:** $D > 0$ and $f_{xx} > 0$ is a local min. $D > 0$ and $f_{xx} < 0$ is a local max. $D < 0$ is a saddle. $D = 0$ means the test can't tell.
+++
**Why three methods, all on one example:** $f = x^2 + y^2 - 2x$ on the disk $x^2 + y^2 \\le 4$.
1. **Critical points.** *Why set $\\nabla f = \\mathbf 0$:* at a local max or min inside, $f$ doesn't change to first order in any direction. $\\nabla f = \\langle 2x - 2, 2y \\rangle = \\mathbf 0$ gives $(1, 0)$, with $f(1, 0) = -1$.
2. **Second derivative test.** $f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$, so $D = 4 > 0$ and $f_{xx} > 0$: a local min. *What that means in numbers:* stepping $0.1$ away in either direction gives a bigger value, $f(1.1, 0) = -0.99$ and $f(1, 0.1) = -0.99$, both more than $-1$. *Why it can't find the absolute max:* it only describes points next to $(1, 0)$.
3. **The boundary.** *Why it's needed:* the largest value is on the edge. On the circle $x^2 + y^2 = 4$, $f = 4 - 2x$, with $x$ from $-2$ to $2$. That is largest, $8$, at $(-2, 0)$, and smallest, $0$, at $(2, 0)$. At $(-2, 0)$, $\\nabla f = \\langle -6, 0 \\rangle$, not $\\mathbf 0$, so step 1 could never have found it.
4. **Compare.** The candidates are $-1$, $8$, and $0$. Absolute max $8$ at $(-2, 0)$, absolute min $-1$ at $(1, 0)$.

**The same boundary with Lagrange.** With $g = x^2 + y^2$, solve $\\nabla f = \\lambda \\nabla g$: $2x - 2 = 2\\lambda x$ and $2y = 2\\lambda y$. *Why not divide the second equation by $y$:* $y$ could be $0$. Dividing gives $\\lambda = 1$, and then the first equation says $-2 = 0$, so you'd find no points at all. Instead, $2y = 2\\lambda y$ means $y = 0$ or $\\lambda = 1$. Here $y = 0$ is the case that works, giving $x = \\pm 2$: the same two points as step 3. At $(-2, 0)$, $\\nabla f = \\langle -6, 0 \\rangle$ and $\\nabla g = \\langle -4, 0 \\rangle$, parallel with $\\lambda = 1.5$ ✓.
:::

:::check
You need the absolute max of $f$ on the closed disk $x^2 + y^2 \\le 4$. Which method?
- [x] Critical points inside, then the boundary circle, then compare
- [ ] The second derivative test
  why: It only classifies critical points locally. It can't find a max sitting on the boundary, and you don't need it when you're comparing values.
- [ ] Lagrange multipliers only
  why: Lagrange handles the boundary circle, but it misses a max at an interior critical point. You need both parts.
- [ ] A directional derivative
  why: That's a rate of change in one direction, not a way to find a max.
???
A closed, bounded region means the three-step method: interior critical points, the boundary (Lagrange or a parametrization works there), then compare all the values.
:::

:::check
Classify the critical point $(0, 0)$ of $f = x^2 - 4xy + y^2$.
- [ ] local min
  why: $f_{xx} = 2 > 0$, but that only matters when $D > 0$. Here $D = 4 - 16 = -12 < 0$. Along $y = x$, $f = -2x^2 < 0$, so it's not a min.
- [ ] local max
  why: Along the $x$-axis, $f = x^2 > 0$ near the origin, so it's not a max.
- [x] saddle point
- [ ] the test can't tell
  why: The test only fails when $D = 0$. Here $D = -12$.
???
$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = -4$, so $D = 2 \\cdot 2 - 16 = -12 < 0$: a saddle.
:::

:::idea Unit 2: curves
([Oct 2 lecture](#/lecture/2026-10-02), [Oct 5 lecture](#/lecture/2026-10-05)) Words to know: [[vector function]], [[arc length]], [[speed]].

| You need… | Formula |
|---|---|
| segment from $P$ to $Q$ | $\\mathbf r(t) = P + t(Q - P)$, $\\;0 \\le t \\le 1$ |
| circle of radius $a$, center $(h, k)$ | $\\langle h + a\\cos t,\\; k + a\\sin t \\rangle$, $\\;0 \\le t \\le 2\\pi$ |
| where two surfaces meet | parametrize one (usually a cylinder, with $\\cos$ and $\\sin$), solve the other for the last coordinate |
| tangent line at $t_0$ | $\\mathbf r(t_0) + s\\,\\mathbf r'(t_0)$ |
| arc length | $L = \\int_a^b \\lVert \\mathbf r'(t) \\rVert\\, dt$ |
| velocity, speed, acceleration | $\\mathbf v = \\mathbf r'$ (vector), speed $\\lVert \\mathbf r' \\rVert$ (number), $\\mathbf a = \\mathbf r''$ (vector) |
+++
**Why each formula works, with numbers.**
- *Why $P + t(Q - P)$ is the segment:* at $t = 0$ it is $P$, at $t = 1$ it is $P + (Q - P) = Q$, and in between it moves along the arrow from $P$ to $Q$. For example, from $P = (1, 0, 2)$ to $Q = (3, 4, 2)$: $\\mathbf r(t) = \\langle 1 + 2t,\\ 4t,\\ 2 \\rangle$, and $t = 0.5$ gives the midpoint $(2, 2, 2)$.
- *Why $\\langle h + a\\cos t, k + a\\sin t \\rangle$ is the circle:* its distance from the center $(h, k)$ is $\\sqrt{a^2\\cos^2 t + a^2\\sin^2 t} = a$ for every $t$. For example, radius $3$ around $(1, 2)$: $t = 0$ gives $(4, 2)$, which is $3$ to the right of the center.
- *Why $\\mathbf r'(t_0)$ points along the curve:* $\\mathbf r'(t_0)$ is the limit of (change in position) $\\div$ (change in $t$). For $\\mathbf r(t) = \\langle t, t^2, t^3 \\rangle$ at $t_0 = 1$: $\\mathbf r(1.01) - \\mathbf r(1) = \\langle 0.01, 0.0201, 0.0303 \\rangle$, and dividing by $0.01$ gives about $\\langle 1, 2.01, 3.03 \\rangle$, close to $\\mathbf r'(1) = \\langle 1, 2, 3 \\rangle$. So the tangent line is $\\langle 1 + s,\\ 1 + 2s,\\ 1 + 3s \\rangle$.
- *Why length is $\\int \\lVert \\mathbf r' \\rVert\\, dt$:* in a short time $\\Delta t$ you move about $\\lVert \\mathbf r' \\rVert\\,\\Delta t$, (speed) $\\times$ (time). Adding those up gives the integral. For example, the helix in the check below has speed $3$ the whole time, so in time $2\\pi$ it goes $3 \\times 2\\pi = 6\\pi$.
- *Why the $t$-range must trace the curve once:* $\\langle \\cos t, \\sin t \\rangle$ for $0 \\le t \\le \\pi$ ends at $(-1, 0)$, only the top half. Its length is $\\pi$, not the full circle's $2\\pi$.
- *Why speed and velocity are different answers:* velocity $\\mathbf r'$ is an arrow with a direction, and speed is its length, a single number. For $\\langle \\cos t, \\sin t \\rangle$ at $t = 0$, the velocity is $\\langle 0, 1 \\rangle$ and the speed is $1$.
- *Arc-length problems are built so the square root simplifies.* Look for a perfect square, for example $4 + 4t^2 + \\tfrac{1}{t^2} = \\left(2t + \\tfrac1t\\right)^2$.
:::

:::check
Find the length of $\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; \\sqrt5\\, t \\rangle$ for $0 \\le t \\le 2\\pi$.
answer: 6pi
???
$\\lVert \\mathbf r'(t) \\rVert = \\sqrt{4\\sin^2 t + 4\\cos^2 t + 5} = \\sqrt9 = 3$, so $L = 3 \\cdot 2\\pi = 6\\pi$.
:::

:::check
What is the velocity of $\\mathbf r(t) = \\langle t^2,\\; \\sin t,\\; e^t \\rangle$ at $t = 0$?
- [x] $\\langle 0, 1, 1 \\rangle$
- [ ] $\\langle 0, 0, 1 \\rangle$
  why: That's the position $\\mathbf r(0)$, not the velocity $\\mathbf r'(0)$.
- [ ] $\\langle 2, 1, 1 \\rangle$
  why: The derivative of $t^2$ is $2t$, which is $0$ at $t = 0$, not $2$.
- [ ] $\\sqrt2$
  why: That's the **speed** $\\lVert \\mathbf r'(0) \\rVert$, a number. Velocity is a vector.
???
$\\mathbf r'(t) = \\langle 2t,\\; \\cos t,\\; e^t \\rangle$, so $\\mathbf r'(0) = \\langle 0, 1, 1 \\rangle$.
:::

:::idea Unit 3: line integrals, which one?
([Oct 5](#/lecture/2026-10-05), [Oct 7](#/lecture/2026-10-07), [Oct 9](#/lecture/2026-10-09), [Oct 12](#/lecture/2026-10-12), [Oct 14](#/lecture/2026-10-14)) There are two kinds: the [[scalar line integral|line integral of a function]] and the [[line integral|line integral of a vector field]].

| | $\\int_C f\\, ds$ | $\\int_C \\mathbf F \\cdot d\\mathbf r$ |
|---|---|---|
| you integrate | $f(\\mathbf r(t))\\,\\lVert \\mathbf r'(t) \\rVert$ | $\\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)$ |
| reversing $C$ | same value | sign flips |
| means | mass, length, total of $f$ | work, how much $\\mathbf F$ pushes along $C$ |

**Steps for any $\\int_C \\mathbf F \\cdot d\\mathbf r$:**

1. Is $\\mathbf F$ [[conservative]]? Check the [[cross-partials]] ($P_y = Q_x$, and in 3D also $P_z = R_x$, $Q_z = R_y$) and that the region is [[simply connected]] (no holes).
2. If $C$ is closed and $\\mathbf F$ is conservative, the answer is $0$.
3. If $\\mathbf F$ is conservative, find a [[potential function]] $f$ and use the [[ftli|Fundamental Theorem]]: $f(\\text{end}) - f(\\text{start})$.
4. Otherwise, parametrize $C$ and compute $\\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt$.

**Pictures:** a [[flowline]] satisfies $\\mathbf r'(t) = \\mathbf F(\\mathbf r(t))$. $\\int_C \\mathbf F \\cdot d\\mathbf r$ is positive when the arrows mostly point the way you're walking.
+++
**Why each step works, with one example:** $\\mathbf F = \\langle 2x + y,\\ x + 2y \\rangle$, from $(0, 0)$ to $(1, 2)$.
1. **Why the cross-partials test:** if $\\mathbf F = \\nabla f$, then $P = f_x$ and $Q = f_y$, so $P_y = f_{xy}$ and $Q_x = f_{yx}$, and those two are always equal. So unequal cross-partials rule out a potential. Here $P_y = 1$ and $Q_x = 1$, and the field is defined on the whole plane, which has no holes. So $\\mathbf F$ is conservative.
2. **Why a closed loop gives $0$:** with a potential, the integral is $f(\\text{end}) - f(\\text{start})$. On a closed loop the end is the start, so the difference is $0$.
3. **Why and how to find $f$:** $f$ turns the integral into one subtraction. Integrate $P$ in $x$: $f = x^2 + xy + g(y)$, where $g(y)$ is whatever depends on $y$ alone. Then $f_y = x + g'(y)$ must equal $Q = x + 2y$, so $g'(y) = 2y$ and $g = y^2$. So $f = x^2 + xy + y^2$, and the answer is $f(1, 2) - f(0, 0) = 1 + 2 + 4 = 7$.
4. **Why parametrize when the test fails:** with no potential, the value depends on the path, so you have to follow it. For example, $\\langle -y, x \\rangle$ has $P_y = -1$ and $Q_x = 1$, so the test fails. Around the unit circle counterclockwise it gives $2\\pi$, not $0$ (the check below).

**Why the two kinds behave differently when you reverse $C$:** in $\\int_C f\\, ds$, $ds = \\lVert \\mathbf r' \\rVert\\, dt$ is a length, which is never negative. In $\\int_C \\mathbf F\\cdot d\\mathbf r$, reversing the direction flips $\\mathbf r'$, so the sign flips. For example, $\\int_C 1\\, ds$ around the unit circle is its length, $2\\pi$, in either direction. But $\\oint \\langle -y, x \\rangle\\cdot d\\mathbf r$ is $2\\pi$ counterclockwise and $-2\\pi$ clockwise.

**Why holes matter:** $\\langle -y, x \\rangle / (x^2 + y^2)$ has matching cross-partials but isn't defined at the origin. Its integral around the unit circle is $2\\pi$, so it isn't conservative. Matching cross-partials prove "conservative" only on a region with no holes.
:::

:::check
Find $\\displaystyle\\int_C \\langle 2x + y,\\; x + 2y \\rangle \\cdot d\\mathbf r$ along any path from $(0, 0)$ to $(1, 2)$.
answer: 7
???
$P_y = 1 = Q_x$ on all of $\\mathbb R^2$, so the field is conservative, with $f = x^2 + xy + y^2$. Then $f(1, 2) - f(0, 0) = 1 + 2 + 4 = 7$.
:::

:::check
For $\\mathbf F = \\langle -y, x \\rangle$ and $C$ the unit circle traced counterclockwise, $\\oint_C \\mathbf F \\cdot d\\mathbf r$ is:
- [ ] $0$
  why: $0$ would need a conservative field, but $P_y = -1 \\ne 1 = Q_x$. This field swirls around the origin.
- [x] $2\\pi$
- [ ] $\\pi$
  why: That's half a turn. The full circle gives $\\int_0^{2\\pi} 1\\, dt = 2\\pi$.
- [ ] $-2\\pi$
  why: That's the answer for the circle traced **clockwise**. Here the field and the path both go counterclockwise.
???
On $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$: $\\mathbf F \\cdot \\mathbf r' = \\langle -\\sin t, \\cos t \\rangle \\cdot \\langle -\\sin t, \\cos t \\rangle = 1$, so the integral is $\\int_0^{2\\pi} 1\\, dt = 2\\pi$.
:::

:::summary Cheat sheet
**Unit 1.** $D_{\\mathbf u} f = \\nabla f \\cdot \\mathbf u$ (unit $\\mathbf u$). Max rate is $\\lVert \\nabla f \\rVert$. Tangent plane normal is $\\nabla F(P)$. $D = f_{xx}f_{yy} - f_{xy}^2$. Region: inside + boundary + compare. Curve: $\\nabla f = \\lambda \\nabla g$.

**Unit 2.** Segment $P + t(Q - P)$. Tangent line $\\mathbf r(t_0) + s\\,\\mathbf r'(t_0)$. $L = \\int \\lVert \\mathbf r' \\rVert\\, dt$. Speed is $\\lVert \\mathbf r' \\rVert$. $\\mathbf a = \\mathbf r''$.

**Unit 3.** $\\int_C f\\,ds = \\int f(\\mathbf r)\\lVert \\mathbf r' \\rVert\\, dt$. $\\int_C \\mathbf F \\cdot d\\mathbf r = \\int \\mathbf F(\\mathbf r) \\cdot \\mathbf r'\\, dt$. Conservative (cross-partials match, no holes) means $f(\\text{end}) - f(\\text{start})$, and $0$ around closed loops.

**Mistakes that cost the most points:**
- Not making $\\mathbf u$ a unit vector.
- Using the second derivative test for an absolute max, or forgetting the boundary.
- Dividing by a variable that could be $0$ in Lagrange equations.
- Giving velocity when asked for speed, or a $t$-range that covers only half the curve.
- Forgetting $\\lVert \\mathbf r' \\rVert$ in $\\int f\\, ds$, or using it in $\\int \\mathbf F \\cdot d\\mathbf r$.
- Calling a field conservative on a region with a hole.

**Practice under exam conditions:** [Practice Test 1](#/practice/midterm-2-practice-1) · [Practice Test 2](#/practice/midterm-2-practice-2) · [Practice Test 3](#/practice/midterm-2-practice-3)
:::
`;export{e as default};