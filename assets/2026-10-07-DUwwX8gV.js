var e=`---
title: Vector fields and integrating them along curves
date: 2026-10-07
stewart: 16.1, 16.2
source: OpenStax Calculus Volume 3, §6.1 Vector Fields and §6.2 Line Integrals
---

:::recap Last time
$\\displaystyle\\int_C f\\, ds = \\int_a^b f(\\mathbf r(t))\\, \\lVert \\mathbf r'(t) \\rVert\\, dt$ adds up a *number* $f$ along a curve, for mass, length, or averages. Direction doesn't matter.
:::

:::check
Warm-up: what is $\\displaystyle\\int_C 1\\, ds$ when $C$ is the circle of radius $2$?
answer: 4pi
???
$\\int_C 1\\, ds$ is the length of $C$, the circumference $2\\pi \\cdot 2 = 4\\pi$.
:::

:::question Today
What is a vector field? And how do you add up how much a field **pushes you along** a path?
:::

:::idea What a vector field is
A [[vector field]] attaches an arrow to every point:
$$\\mathbf F(x,y) = \\langle P(x,y),\\; Q(x,y) \\rangle \\qquad\\text{(in 3D, add } R(x,y,z)\\text{)}.$$
Examples: wind velocity on a weather map, the flow of water, the force of gravity. A [[gradient]] field $\\nabla f$ is a vector field too, with its arrows crossing the level curves of $f$ at right angles (Sep 18).

**Sketching.** Plug in a few points and draw $\\mathbf F$ there as an arrow starting at the point.
+++
**Matching formulas to pictures (a common exam question).** Plug in easy points, such as on the axes:
- At $(1, 0)$ and $(0, 1)$, which way should the arrow point?
- Do the arrows get longer far from the origin (like $\\langle x, y \\rangle$) or stay the same (a constant field)?
- Is there symmetry? For example, $\\langle -y, x \\rangle$ always points perpendicular to the line from the origin, so it circles.

Eliminating wrong pictures this way is usually faster than drawing the right one.
:::

:::figure field-gallery
Three fields to recognize: $\\langle x, y \\rangle$ points straight away from the origin, $\\langle -y, x \\rangle$ circles counterclockwise, and $\\langle 1, 0.5 \\rangle$ is the same arrow everywhere. (Arrows are drawn the same length to show direction only.)
:::

:::check
At the point $(1, 2)$, the field $\\mathbf F = \\langle x - y,\\; xy \\rangle$ is:
- [x] $\\langle -1, 2 \\rangle$
- [ ] $\\langle 1, 2 \\rangle$
  why: That's the point $(1,2)$ itself, not the arrow there. The first component is $x - y = -1$.
- [ ] $\\langle -1, 3 \\rangle$
  why: The second component is $xy = 2$, not $x + y = 3$.
- [ ] $\\langle 2, 1 \\rangle$
  why: Neither component matches: $x - y = -1$ and $xy = 2$.
???
$x - y = 1 - 2 = -1$ and $xy = 1 \\cdot 2 = 2$, so $\\mathbf F(1,2) = \\langle -1, 2 \\rangle$.
:::

:::idea Flowlines
A [[flowline]] (also called a streamline or integral curve) is a path that **follows the arrows**: at every moment its velocity equals the field there,
$$\\mathbf r'(t) = \\mathbf F(\\mathbf r(t)).$$
For example, $\\mathbf F = \\langle -y, x \\rangle$ at $(1, 0)$ is $\\langle 0, 1 \\rangle$, so a flowline passing through $(1, 0)$ is moving straight up at that moment, at speed $1$.

**Checking a proposed flowline:** compute $\\mathbf r'(t)$, compute $\\mathbf F(\\mathbf r(t))$, and check they're equal for **every** $t$.

**Finding $\\mathbf r(t)$ from a point, a field, and a time.** A common exam question tells you a particle follows $\\mathbf F$ and is at the point $P$ at time $t_0$. It then asks either for an estimate of where the particle is at a nearby time, or for the exact formula $\\mathbf r(t)$ (next section).

*Estimating.* For a small time step $h$,
$$\\mathbf r(t_0 + h) \\approx \\mathbf r(t_0) + h\\,\\mathbf r'(t_0) = P + h\\,\\mathbf F(P).$$
Why: $\\mathbf r'(t_0)$ is the limit of $\\dfrac{\\mathbf r(t_0 + h) - \\mathbf r(t_0)}{h}$, so for small $h$ the change in position is about $h\\,\\mathbf r'(t_0)$. That's the tangent line from Oct 2. On a flowline the velocity is the field, so $\\mathbf r'(t_0) = \\mathbf F(P)$, which you can compute from the point alone. Use a negative $h$ for an earlier time.

For example, $\\mathbf F = \\langle y,\\; x^2 + 1 \\rangle$, with the particle at $(2, 1)$ when $t = 3$. Then $\\mathbf F(2, 1) = \\langle 1, 5 \\rangle$, so
$$\\mathbf r(3.1) \\approx (2, 1) + 0.1\\,\\langle 1, 5 \\rangle = (2.1,\\; 1.5), \\qquad \\mathbf r(2.9) \\approx (2, 1) - 0.1\\,\\langle 1, 5 \\rangle = (1.9,\\; 0.5).$$
+++
**How good is the estimate?** For $\\mathbf F = \\langle y,\\; x^2 + 1 \\rangle$ starting at $(2, 1)$ at $t = 3$, a computer following the field in tiny steps finds the particle at about $(2.13,\\; 1.52)$ at $t = 3.1$. The one-step estimate $(2.1, 1.5)$ is close. It's a little off because the field changes as the particle moves, which a single step ignores. Smaller steps get closer: two steps of $0.05$, recomputing $\\mathbf F$ at each new point, give about $(2.11,\\; 1.51)$, and ten steps of $0.01$ give about $(2.12,\\; 1.52)$.

**Two examples.**
- For $\\mathbf F = \\langle -y, x \\rangle$, try $\\mathbf r = \\langle \\cos t, \\sin t \\rangle$: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle -\\sin t, \\cos t \\rangle$. ✓ The flowlines are circles.
- For $\\mathbf F = \\langle x, y \\rangle$, try $\\mathbf r = \\langle e^t, 2e^t \\rangle$: $\\mathbf r' = \\langle e^t, 2e^t \\rangle = \\mathbf F(\\mathbf r)$. ✓ The flowlines are rays heading outward, speeding up.

**A trap.** A curve can pass through the right points with the wrong *speed* or direction. Flowlines need the velocity itself to match, not just the shape.
:::

:::check
Which curve is a flowline of $\\mathbf F = \\langle 1,\\; 2x \\rangle$?
- [ ] $\\langle t,\\; 2t \\rangle$
  why: $\\mathbf r' = \\langle 1, 2 \\rangle$, but $\\mathbf F(\\mathbf r) = \\langle 1, 2t \\rangle$. They agree only at $t = 1$, not for every $t$.
- [x] $\\langle t,\\; t^2 \\rangle$
- [ ] $\\langle t^2,\\; t \\rangle$
  why: $\\mathbf r' = \\langle 2t, 1 \\rangle$, but $\\mathbf F(\\mathbf r) = \\langle 1, 2t^2 \\rangle$. The first components already disagree.
- [ ] $\\langle \\cos t,\\; \\sin t \\rangle$
  why: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$, but $\\mathbf F(\\mathbf r) = \\langle 1, 2\\cos t \\rangle$. The first components disagree.
???
For $\\langle t, t^2 \\rangle$: $\\mathbf r' = \\langle 1, 2t \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle 1, 2t \\rangle$. ✓

For $\\langle t, 2t \\rangle$: $\\mathbf r' = \\langle 1, 2 \\rangle$, but $\\mathbf F = \\langle 1, 2t \\rangle$, which only matches at $t = 1$.
:::

:::check
A particle follows a flowline of $\\mathbf F = \\langle xy,\\; x - y \\rangle$ and is at $(1, 3)$ when $t = 2$. Estimate where it is when $t = 2.1$.
- [x] $(1.3,\\; 2.8)$
- [ ] $(4,\\; 1)$
  why: That's $P + \\mathbf F(P)$, a step of a whole unit of time. The step is $h = 0.1$, so add $0.1\\,\\mathbf F(P)$.
- [ ] $(0.3,\\; -0.2)$
  why: That's only the change, $0.1\\,\\mathbf F(P)$. The new position is the starting point plus the change.
- [ ] $(0.8,\\; 3.3)$
  why: The components got swapped: $\\mathbf F(1, 3) = \\langle 3, -2 \\rangle$, not $\\langle -2, 3 \\rangle$.
???
$\\mathbf F(1, 3) = \\langle 1 \\cdot 3,\\; 1 - 3 \\rangle = \\langle 3, -2 \\rangle$, so
$$\\mathbf r(2.1) \\approx (1, 3) + 0.1\\,\\langle 3, -2 \\rangle = (1.3,\\; 2.8).$$
:::

:::idea Finding a flowline's exact formula
**Step 1: write $\\mathbf r'(t) = \\mathbf F(\\mathbf r(t))$ one coordinate at a time.** With $\\mathbf r(t) = \\langle x(t), y(t) \\rangle$ and $\\mathbf F = \\langle P, Q \\rangle$, the vector equation says two things at once:
$$x'(t) = P\\big(x(t), y(t)\\big), \\qquad y'(t) = Q\\big(x(t), y(t)\\big).$$
The left side of each is how fast one coordinate of the particle is changing. The right side is that part of the arrow at the particle's current position.

Take $\\mathbf F = \\langle x,\\; -2y \\rangle$. Here $P = x$ and $Q = -2y$, so a flowline must satisfy
$$x'(t) = x(t), \\qquad y'(t) = -2\\,y(t).$$
These aren't extra rules. They're just what $\\mathbf r' = \\mathbf F(\\mathbf r)$ says for this field. For instance, when the particle is at $(3, 1)$, the arrow there is $\\mathbf F(3, 1) = \\langle 3, -2 \\rangle$, so at that moment $x$ is increasing at rate $3$ (equal to $x$) and $y$ is decreasing at rate $2$ (twice $y$).

Both equations have the form $x' = kx$: the rate of change is $k$ times the current value, with $k = 1$ for $x$ and $k = -2$ for $y$. Each one involves only its own coordinate, so you can solve them one at a time.

**Step 2: the functions with $x' = kx$ are exactly $x = Ce^{kt}$.** Two parts:
- *These work.* By the chain rule, $\\dfrac{d}{dt}\\big(Ce^{kt}\\big) = k\\,Ce^{kt}$, which is $k$ times the function itself. That's $x' = kx$.
- *Nothing else works.* Suppose $x(t)$ is any function with $x' = kx$. Divide it by $e^{kt}$: let $u(t) = x(t)\\,e^{-kt}$. By the product rule,
$$u'(t) = x'(t)\\,e^{-kt} - k\\,x(t)\\,e^{-kt} = \\big(x'(t) - k\\,x(t)\\big)\\,e^{-kt} = 0,$$
because $x' - kx = 0$. A function whose derivative is $0$ at every time is constant (Calc I), so $u(t) = C$ for some number $C$, which means $x(t) = Ce^{kt}$.

**Step 3: fit the given point at the given time.** If $x = x_0$ when $t = t_0$, then $Ce^{kt_0} = x_0$, so $C = x_0\\,e^{-kt_0}$, and
$$x(t) = x_0\\, e^{k(t - t_0)}.$$
At $t = t_0$ the exponent is $0$ and $e^0 = 1$, so $x = x_0$, as required. Fitting at $t = 0$ instead of $t_0$ is the most common mistake.

**The whole example.** $\\mathbf F = \\langle x,\\; -2y \\rangle$, with the particle at $(3, 1)$ when $t = 2$:
- $x' = x$, so $k = 1$, and $x = 3$ at $t = 2$: $\\;x(t) = 3e^{t - 2}$.
- $y' = -2y$, so $k = -2$, and $y = 1$ at $t = 2$: $\\;y(t) = e^{-2(t - 2)}$.
$$\\mathbf r(t) = \\big\\langle 3e^{t - 2},\\; e^{-2(t - 2)} \\big\\rangle.$$
**Check.** $\\mathbf r(2) = (3, 1)$ ✓, and $\\mathbf r'(t) = \\langle 3e^{t-2},\\; -2e^{-2(t-2)} \\rangle = \\langle x,\\; -2y \\rangle$ ✓.
+++
**Where $e$ comes from, with numbers.** Take $x' = x$ with $x = 3$ at $t = 2$, and use the estimate from the last section over and over. One step of length $h$ gives $x(t + h) \\approx x(t) + h\\,x'(t) = x(t) + h\\,x(t) = (1 + h)\\,x(t)$, so each step multiplies $x$ by $1 + h$. Going from $t = 2$ to $t = 3$:

| steps | each step multiplies $x$ by | estimate of $x(3)$ |
|---|---|---|
| $10$ | $1.1$ | $3 \\times 1.1^{10} \\approx 7.78$ |
| $100$ | $1.01$ | $3 \\times 1.01^{100} \\approx 8.11$ |
| $1000$ | $1.001$ | $3 \\times 1.001^{1000} \\approx 8.15$ |

The estimates close in on $3e \\approx 8.155$, which is what $x(t) = 3e^{t - 2}$ gives at $t = 3$. That's because $(1 + \\tfrac1n)^n$ gets closer and closer to $e$ as $n$ grows. So $e$ shows up because the rate is proportional to the current value: each small step grows $x$ by the same fraction.

**When the components are mixed.** Step 1 doesn't always split. For $\\mathbf F = \\langle -y, x \\rangle$, it gives $x' = -y$ and $y' = x$: each equation involves the other coordinate, so you can't solve them one at a time. Use the known flowlines instead: circles traced counterclockwise at angular speed $1$, so $\\mathbf r(t) = \\langle R\\cos(t + c),\\; R\\sin(t + c) \\rangle$. If the particle is at $(0, 2)$ when $t = 1$, then $R = 2$ and $1 + c = \\tfrac\\pi2$, which gives $\\mathbf r(t) = \\langle -2\\sin(t - 1),\\; 2\\cos(t - 1) \\rangle$. Check: $\\mathbf r(1) = (0, 2)$ ✓, and $\\mathbf r' = \\langle -2\\cos(t - 1),\\; -2\\sin(t - 1) \\rangle = \\langle -y, x \\rangle$ ✓.
:::

:::check
A particle follows a flowline of $\\mathbf F = \\langle 2x,\\; y \\rangle$ and is at $(1, 3)$ when $t = 1$. Which is $\\mathbf r(t)$?
- [x] $\\big\\langle e^{2(t-1)},\\; 3e^{t-1} \\big\\rangle$
- [ ] $\\big\\langle e^{2t},\\; 3e^{t} \\big\\rangle$
  why: This is at $(1, 3)$ when $t = 0$, but the particle has to be there when $t = 1$. At $t = 1$ this gives $(e^2, 3e)$.
- [ ] $\\big\\langle e^{t-1},\\; 3e^{2(t-1)} \\big\\rangle$
  why: The rates are swapped. $x' = 2x$ needs $e^{2(t-1)}$ in the first component.
- [ ] $\\big\\langle 1 + 2(t - 1),\\; 3 + 3(t - 1) \\big\\rangle$
  why: That's the tangent-line estimate. Its velocity stays $\\langle 2, 3 \\rangle$, but $\\mathbf F(\\mathbf r(t)) = \\langle 2 + 4(t-1),\\; 3 + 3(t-1) \\rangle$ changes, so they only match at $t = 1$.
???
Write $\\mathbf r' = \\mathbf F(\\mathbf r)$ by coordinate: $x' = 2x$ ($k = 2$) and $y' = y$ ($k = 1$). With $x_0 e^{k(t - t_0)}$ and the point $(1, 3)$ at $t_0 = 1$: $x = e^{2(t-1)}$ and $y = 3e^{t-1}$.

Check: $\\mathbf r(1) = (1, 3)$ ✓, and $\\mathbf r' = \\langle 2e^{2(t-1)},\\; 3e^{t-1} \\rangle = \\langle 2x,\\; y \\rangle$ ✓.
:::

:::idea Line integrals of vector fields
To add up how much $\\mathbf F$ pushes **along** a path $C$, use the [[line integral]]
$$\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt.$$
If $\\mathbf F$ is a force, this is the **work** it does on an object moving along $C$.

**Why this formula.** In physics, a constant force $\\mathbf F$ acting over a straight-line displacement $\\mathbf d$ does work $\\mathbf F \\cdot \\mathbf d = \\lVert \\mathbf F \\rVert\\, \\lVert \\mathbf d \\rVert \\cos\\theta$: only the part of the force along the motion, $\\lVert \\mathbf F \\rVert \\cos\\theta$, counts, times the distance. On a curved path the force changes, so chop the time into short steps of length $\\Delta t$. During one step the object moves by $\\Delta\\mathbf r \\approx \\mathbf r'(t)\\, \\Delta t$, which is nearly straight, and $\\mathbf F$ is nearly constant. So that step's work is about
$$\\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, \\Delta t.$$
Adding up the steps and letting $\\Delta t \\to 0$ gives the integral.

**Recipe:** (1) parametrize $C$ in the right direction, (2) substitute to get $\\mathbf F(\\mathbf r(t))$, (3) dot it with $\\mathbf r'(t)$, which gives one function of $t$, (4) integrate.

**Sign.** Each step's work has the sign of $\\cos\\theta$, where $\\theta$ is the angle between $\\mathbf F$ and the motion: positive under $90°$, negative over $90°$, zero at exactly $90°$. So the integral is positive if $\\mathbf F$ mostly points along the motion, negative if mostly against it, and zero if it's always perpendicular.

**Direction matters now.** Tracing $C$ backward passes the same points with the same $\\mathbf F$, but the motion $\\mathbf r'$ points the opposite way at each one. Every step's work changes sign, so the integral does too. Compare $\\int_C f\\, ds$, which doesn't care.
+++
**The same integral with arc length.** Write $\\mathbf r' = \\lVert \\mathbf r' \\rVert\\, \\mathbf T$, where $\\mathbf T$ is the unit tangent, and $ds = \\lVert \\mathbf r' \\rVert\\, dt$. Then $\\mathbf F \\cdot \\mathbf r'\\, dt = (\\mathbf F \\cdot \\mathbf T)\\, ds$, so $\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_C (\\mathbf F \\cdot \\mathbf T)\\, ds$: the force along the path, times distance, added up.

**Other notation.** $\\int_C P\\, dx + Q\\, dy$ means the same thing, with $dx = x'(t)\\, dt$ and $dy = y'(t)\\, dt$. It's the dot product written out: $\\mathbf F \\cdot \\mathbf r'\\, dt = (P\\, x' + Q\\, y')\\, dt = P\\, dx + Q\\, dy$.
:::

:::figure work-along-curve
$\\mathbf F = \\langle -y, x \\rangle$ and the upper half circle traced counterclockwise. The arrows point along the path the whole way, so the work is positive.
:::

:::example Work along a half circle
$\\mathbf F = \\langle -y, x \\rangle$ along $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\pi$.

$\\mathbf F(\\mathbf r(t)) = \\langle -\\sin t, \\cos t \\rangle$ and $\\mathbf r'(t) = \\langle -\\sin t, \\cos t \\rangle$, so the dot product is $\\sin^2 t + \\cos^2 t = 1$.
$$\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_0^\\pi 1\\, dt = \\pi.$$
:::

:::example Along a segment
$\\mathbf F = \\langle x^2,\\; xy \\rangle$ along the segment from $(0,0)$ to $(1,2)$.

$\\mathbf r(t) = \\langle t, 2t \\rangle$, $0 \\le t \\le 1$, so $\\mathbf r' = \\langle 1, 2 \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle t^2, 2t^2 \\rangle$. The dot product is $t^2 + 4t^2 = 5t^2$.
$$\\int_0^1 5t^2\\, dt = \\frac53.$$
:::

:::check
Find $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r$ for $\\mathbf F = \\langle y, x \\rangle$ along $\\mathbf r(t) = \\langle t, t^2 \\rangle$, $0 \\le t \\le 1$.
answer: 1
???
$\\mathbf F(\\mathbf r) = \\langle t^2, t \\rangle$ and $\\mathbf r' = \\langle 1, 2t \\rangle$, so the dot product is $t^2 + 2t^2 = 3t^2$, and $\\int_0^1 3t^2\\, dt = 1$.
:::

:::check
$\\mathbf F = \\langle 1, 0 \\rangle$ (pushing right) and $C$ is the segment from $(2, 0)$ to $(0, 0)$. The sign of $\\int_C \\mathbf F \\cdot d\\mathbf r$ is:
- [x] negative
- [ ] zero
  why: Zero would need $\\mathbf F$ perpendicular to the motion. Here it points exactly *opposite* to it.
- [ ] positive
  why: Positive would need $\\mathbf F$ to point along the motion, but you move left while $\\mathbf F$ pushes right.
???
You move **left** while $\\mathbf F$ pushes **right**, so the field works against you. With $\\mathbf r = \\langle 2 - 2t, 0 \\rangle$, $\\mathbf F \\cdot \\mathbf r' = -2$, and the integral is $-2$.
:::

:::summary Summary
- A vector field puts an arrow at every point. Match formulas to pictures by plugging in easy points.
- Flowline: $\\mathbf r'(t) = \\mathbf F(\\mathbf r(t))$ for every $t$.
- $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt$ is work, and its sign depends on direction.

| | $\\int_C f\\, ds$ | $\\int_C \\mathbf F \\cdot d\\mathbf r$ |
|---|---|---|
| integrand | $f(\\mathbf r(t))\\,\\lVert \\mathbf r'(t) \\rVert$ | $\\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)$ |
| reverse $C$ | same value | sign flips |
| means | mass, length, total | work, flow along $C$ |

**Common mistakes:**
- Using $\\lVert \\mathbf r' \\rVert$ in a vector line integral, or forgetting it in a scalar one.
- Parametrizing in the wrong direction.
- Checking only that a flowline passes through the right points.
:::
`;export{e as default};