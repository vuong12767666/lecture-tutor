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

**The thread through all of it is the [[gradient]].** It points uphill (unit 1), it's perpendicular to level curves and surfaces (tangent planes), and a field that *is* a gradient makes line integrals easy (unit 3).
+++
**How one question can use all three units.** A contour-map question might ask you to find the direction of $\\nabla f$ at a point (unit 1), count the critical points (unit 1), and evaluate $\\int_C \\nabla f \\cdot d\\mathbf r$ along a drawn curve (unit 3, by the Fundamental Theorem: just $f(\\text{end}) - f(\\text{start})$). Seeing which unit each part belongs to tells you which tool to reach for.
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
**Worked example.** For $f = x^2 y$ at $(1, 2)$, toward the point $(4, 6)$:
$\\nabla f = \\langle 2xy, x^2 \\rangle = \\langle 4, 1 \\rangle$, the direction is $\\langle 3, 4 \\rangle$ with length $5$, so $D_{\\mathbf u} f = \\tfrac{4\\cdot3 + 1\\cdot4}{5} = \\tfrac{16}{5}$. The maximum rate there is $\\lVert \\langle 4, 1 \\rangle \\rVert = \\sqrt{17}$.

**The most common lost point:** forgetting to divide the direction by its length. With $\\langle 3, 4 \\rangle$ instead of $\\tfrac15\\langle 3, 4 \\rangle$ you'd get $16$, five times too big.
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
**Why three methods?** The second derivative test only looks at tiny neighborhoods, so it finds *local* behavior. An absolute max on a region can sit on the edge, where $\\nabla f$ isn't zero, which is why the region method checks the boundary. A constrained max on a curve usually has $\\nabla f \\ne \\mathbf 0$ too. What's true there instead is that the level curve of $f$ just touches the constraint, so $\\nabla f$ lines up with $\\nabla g$.

**The boundary step can use Lagrange.** On a disk $x^2 + y^2 \\le r^2$, the boundary is the circle $x^2 + y^2 = r^2$, so Lagrange (or $x = r\\cos t$, $y = r\\sin t$) finds its extremes.
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
**Exam tips.**
- Arc-length problems are built so the square root simplifies. Look for a perfect square like $\\left(2t + \\tfrac1t\\right)^2$.
- Check that your $t$-range traces the curve **once**: $0 \\le t \\le \\pi$ only covers half a circle.
- "Speed" wants a number, $\\lVert \\mathbf v \\rVert$. "Velocity" wants a vector.
- Plug your parametrization back into every equation the curve must satisfy.
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
**Why the conservative check comes first.** If it passes, the answer needs no parametrizing at all, and the path's shape doesn't matter. That's the fastest route on an exam. If it fails, you know you must parametrize, and the shape of $C$ matters.

**Holes.** $\\langle -y, x \\rangle / (x^2 + y^2)$ passes the cross-partials test but isn't conservative around the origin. Its integral around a circle centered at the origin is $2\\pi$. Matching cross-partials only prove conservative on a region with no holes.
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