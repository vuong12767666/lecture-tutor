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
>>> Sketching $\\langle -y, x \\rangle$ point by point
**What to compute.** At each point $(x, y)$, the arrow is $\\langle -y, x \\rangle$: its first part is minus the point's $y$, its second part is the point's $x$.
- At $(1, 0)$: $\\langle 0, 1 \\rangle$, pointing up.
- At $(0, 1)$: $\\langle -1, 0 \\rangle$, pointing left.
- At $(-1, 0)$: $\\langle 0, -1 \\rangle$, pointing down.
- At $(0, -1)$: $\\langle 1, 0 \\rangle$, pointing right.

Going from $(1, 0)$ to $(0, 1)$ to $(-1, 0)$ to $(0, -1)$, the arrows point up, left, down, right: around the origin, counterclockwise. Farther out they're longer: at $(2, 0)$ the arrow is $\\langle 0, 2 \\rangle$, twice as long as at $(1, 0)$.
<<<

**Matching formulas to pictures (a common exam question).** Plug in easy points, such as on the axes: which way does the arrow point, and how long is it? Eliminating wrong pictures this way is usually faster than drawing the right one.
>>> Telling three fields apart with three questions
1. **Which way at $(1, 0)$?** $\\langle x, y \\rangle$ gives $\\langle 1, 0 \\rangle$ (right, away from the origin). $\\langle -y, x \\rangle$ gives $\\langle 0, 1 \\rangle$ (up). $\\langle 1, 0.5 \\rangle$ gives $\\langle 1, 0.5 \\rangle$.
2. **Longer farther out?** $\\langle x, y \\rangle$ at $(2, 0)$ is $\\langle 2, 0 \\rangle$, twice as long as at $(1, 0)$. $\\langle 1, 0.5 \\rangle$ is the same arrow at every point, so its length never changes.
3. **Circling?** $\\langle -y, x \\rangle$ at $(1, 2)$ is $\\langle -2, 1 \\rangle$. Its dot product with the line from the origin, $\\langle 1, 2 \\rangle$, is $-2 + 2 = 0$. So the arrow is perpendicular to that line, which is what makes the field go around the origin.
<<<
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
>>> The check, worked out, and the trap
**For $\\mathbf F = \\langle -y, x \\rangle$ and $\\mathbf r = \\langle \\cos t, \\sin t \\rangle$:**
1. **Velocity.** $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$.
2. **The field at the particle.** The particle is at $x = \\cos t$, $y = \\sin t$, so $\\mathbf F(\\mathbf r) = \\langle -\\sin t, \\cos t \\rangle$.
3. **Compare.** Equal for every $t$. ✓ For example, at $t = \\tfrac{\\pi}{2}$ the particle is at $(0, 1)$, its velocity is $\\langle -1, 0 \\rangle$, and the arrow there is $\\langle -1, 0 \\rangle$.

**For $\\mathbf F = \\langle x, y \\rangle$ and $\\mathbf r = \\langle e^t, 2e^t \\rangle$:** $\\mathbf r' = \\langle e^t, 2e^t \\rangle$, and the arrow at the particle is $\\langle e^t, 2e^t \\rangle$. ✓ At $t = 0$ the particle is at $(1, 2)$, moving with velocity $\\langle 1, 2 \\rangle$, straight away from the origin.

**The trap.** $\\langle \\cos 2t, \\sin 2t \\rangle$ traces the same circle, but its velocity is $\\langle -2\\sin 2t, 2\\cos 2t \\rangle$, while the arrow at the particle is $\\langle -\\sin 2t, \\cos 2t \\rangle$. The velocity is twice the arrow at every moment, so it isn't a flowline. The shape is right but the speed is wrong.
<<<

**Finding $\\mathbf r(t)$ from a point, a field, and a time.** A common exam question tells you a particle follows $\\mathbf F$ and is at the point $P$ at time $t_0$. It then asks either for an estimate of where the particle is at a nearby time, or for the exact formula $\\mathbf r(t)$ (next section).

*Estimating.* For a small time step $h$,
$$\\mathbf r(t_0 + h) \\approx \\mathbf r(t_0) + h\\,\\mathbf r'(t_0) = P + h\\,\\mathbf F(P).$$
Why: $\\mathbf r'(t_0)$ is the limit of $\\dfrac{\\mathbf r(t_0 + h) - \\mathbf r(t_0)}{h}$, so for small $h$ the change in position is about $h\\,\\mathbf r'(t_0)$. That's the tangent line from Oct 2. On a flowline the velocity is the field, so $\\mathbf r'(t_0) = \\mathbf F(P)$, which you can compute from the point alone. Use a negative $h$ for an earlier time.

For example, $\\mathbf F = \\langle y,\\; x^2 + 1 \\rangle$, with the particle at $(2, 1)$ when $t = 3$. Then $\\mathbf F(2, 1) = \\langle 1, 5 \\rangle$, so
$$\\mathbf r(3.1) \\approx (2, 1) + 0.1\\,\\langle 1, 5 \\rangle = (2.1,\\; 1.5), \\qquad \\mathbf r(2.9) \\approx (2, 1) - 0.1\\,\\langle 1, 5 \\rangle = (1.9,\\; 0.5).$$
>>> The estimate, step by step, and how good it is
1. **The arrow at the particle.** At $(2, 1)$: $\\mathbf F = \\langle y, x^2 + 1 \\rangle = \\langle 1, 4 + 1 \\rangle = \\langle 1, 5 \\rangle$. On a flowline this is the velocity: right now the particle moves $1$ unit right and $5$ units up per unit of time.
2. **Over a time of $0.1$** it moves about $0.1 \\times \\langle 1, 5 \\rangle = \\langle 0.1, 0.5 \\rangle$.
3. **Add to the starting point.** $(2 + 0.1,\\; 1 + 0.5) = (2.1, 1.5)$.
4. **Earlier time.** For $t = 2.9$, the time step is $-0.1$, so subtract: $(1.9, 0.5)$.

**How good is it?** A computer following the field in tiny steps finds the particle at about $(2.13, 1.52)$ at $t = 3.1$. The estimate is a little off because the arrow changes as the particle moves, and a single step uses only the first arrow. Two steps of $0.05$, recomputing the arrow at each new point, give about $(2.11, 1.51)$. Ten steps of $0.01$ give about $(2.12, 1.52)$.
<<<
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
>>> Both parts of step 2, with numbers
**These work.** Take $x = 3e^{t}$ ($C = 3$, $k = 1$). At $t = 0$: $x = 3$ and $x' = 3e^0 = 3$, so $x' = 1 \\cdot x$ ✓. At $t = 1$: $x = 3e \\approx 8.155$ and $x' = 3e \\approx 8.155$ ✓. The rate always equals the current value.

**Nothing else works.** Suppose some $x(t)$ has $x' = 2x$ and $x(0) = 5$. Then $u = x\\,e^{-2t}$ has derivative $0$, so $u$ never changes. At $t = 0$, $u = 5 \\cdot 1 = 5$. So $u$ is $5$ at every time, which means $x\\,e^{-2t} = 5$, or $x = 5e^{2t}$. There was no other choice.

**Where $e$ comes from.** Take $x' = x$ with $x = 3$ at $t = 2$, and use the estimate from the last section over and over. One step of length $h$ gives $x(t + h) \\approx x(t) + h\\,x(t) = (1 + h)\\,x(t)$, so each step multiplies $x$ by $1 + h$. Going from $t = 2$ to $t = 3$:

| steps | each step multiplies $x$ by | estimate of $x(3)$ |
|---|---|---|
| $10$ | $1.1$ | $3 \\times 1.1^{10} \\approx 7.78$ |
| $100$ | $1.01$ | $3 \\times 1.01^{100} \\approx 8.11$ |
| $1000$ | $1.001$ | $3 \\times 1.001^{1000} \\approx 8.15$ |

The estimates close in on $3e \\approx 8.155$, which is what $x(t) = 3e^{t - 2}$ gives at $t = 3$. That's because $(1 + \\tfrac1n)^n$ gets closer and closer to $e$ as $n$ grows.
<<<

**Step 3: fit the given point at the given time.** If $x = x_0$ when $t = t_0$, then $Ce^{kt_0} = x_0$, so $C = x_0\\,e^{-kt_0}$, and
$$x(t) = x_0\\, e^{k(t - t_0)}.$$
At $t = t_0$ the exponent is $0$ and $e^0 = 1$, so $x = x_0$, as required. Fitting at $t = 0$ instead of $t_0$ is the most common mistake.
>>> Fitting the point, and the common mistake, with numbers
We need $x = 3$ when $t = 2$, with $k = 1$.
1. **Solve for $C$.** $Ce^{1 \\cdot 2} = 3$, so $C = 3e^{-2} \\approx 0.406$.
2. **Put it back.** $x = 3e^{-2}\\,e^{t} = 3e^{t - 2}$.
3. **Check.** At $t = 2$: $3e^0 = 3$ ✓.

**The mistake.** Writing $x = 3e^{t}$ makes $x = 3$ at $t = 0$, not at $t = 2$. At $t = 2$ it gives $3e^2 \\approx 22.2$, so the particle would be in the wrong place at the given time.
<<<

**The whole example.** $\\mathbf F = \\langle x,\\; -2y \\rangle$, with the particle at $(3, 1)$ when $t = 2$:
- $x' = x$, so $k = 1$, and $x = 3$ at $t = 2$: $\\;x(t) = 3e^{t - 2}$.
- $y' = -2y$, so $k = -2$, and $y = 1$ at $t = 2$: $\\;y(t) = e^{-2(t - 2)}$.
$$\\mathbf r(t) = \\big\\langle 3e^{t - 2},\\; e^{-2(t - 2)} \\big\\rangle.$$
**Check.** $\\mathbf r(2) = (3, 1)$ ✓, and $\\mathbf r'(t) = \\langle 3e^{t-2},\\; -2e^{-2(t-2)} \\rangle = \\langle x,\\; -2y \\rangle$ ✓.
>>> When the components are mixed
Step 1 doesn't always split. For $\\mathbf F = \\langle -y, x \\rangle$, it gives $x' = -y$ and $y' = x$: each equation involves the other coordinate, so you can't solve them one at a time. Use the known flowlines instead: circles traced counterclockwise at angular speed $1$, so $\\mathbf r(t) = \\langle R\\cos(t + c),\\; R\\sin(t + c) \\rangle$. If the particle is at $(0, 2)$ when $t = 1$, then $R = 2$ and $1 + c = \\tfrac\\pi2$, which gives $\\mathbf r(t) = \\langle -2\\sin(t - 1),\\; 2\\cos(t - 1) \\rangle$. Check: $\\mathbf r(1) = (0, 2)$ ✓, and $\\mathbf r' = \\langle -2\\cos(t - 1),\\; -2\\sin(t - 1) \\rangle = \\langle -y, x \\rangle$ ✓.
<<<
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
>>> Work with numbers: one straight push, then one step of a curve
**A constant force over a straight move.** Take $\\mathbf F = \\langle 3, 0 \\rangle$ and $\\mathbf d = \\langle 2, 2 \\rangle$.
- Dot product: $3 \\cdot 2 + 0 \\cdot 2 = 6$.
- The same with lengths and angle: $\\lVert \\mathbf F \\rVert = 3$, $\\lVert \\mathbf d \\rVert = \\sqrt8 \\approx 2.83$, and the angle between them is $45°$, with $\\cos 45° \\approx 0.707$. So $3 \\times 2.83 \\times 0.707 \\approx 6$.
- Only the part of the force along the move counts: $3 \\times 0.707 \\approx 2.12$ along the move, times the distance $2.83$, is $6$.

**One short step of a curve.** Move along $\\mathbf r = \\langle \\cos t, \\sin t \\rangle$ from $t = 0$ to $t = 0.1$, with $\\mathbf F = \\langle -y, x \\rangle$.
- The move: from $(1, 0)$ to $(0.995, 0.0998)$, so $\\Delta\\mathbf r \\approx \\langle -0.005, 0.0998 \\rangle$.
- The force at the start: $\\mathbf F(1, 0) = \\langle 0, 1 \\rangle$.
- The step's work: $\\langle 0, 1 \\rangle \\cdot \\langle -0.005, 0.0998 \\rangle \\approx 0.0998$.
- The formula: $\\mathbf F \\cdot \\mathbf r'(0)\\,\\Delta t = \\langle 0, 1 \\rangle \\cdot \\langle 0, 1 \\rangle \\times 0.1 = 0.1$. Nearly the same.
<<<

**Recipe:** (1) parametrize $C$ in the right direction, (2) substitute to get $\\mathbf F(\\mathbf r(t))$, (3) dot it with $\\mathbf r'(t)$, which gives one function of $t$, (4) integrate.

**Sign.** Each step's work has the sign of $\\cos\\theta$, where $\\theta$ is the angle between $\\mathbf F$ and the motion: positive under $90°$, negative over $90°$, zero at exactly $90°$. So the integral is positive if $\\mathbf F$ mostly points along the motion, negative if mostly against it, and zero if it's always perpendicular.
>>> The sign of one step, with numbers
For example, take $\\mathbf F = \\langle 1, 0 \\rangle$, pointing right, and move one unit in different directions.
- **Moving right**, $\\langle 1, 0 \\rangle$: the dot product is $1$. The field pushes along the motion: positive.
- **Moving up**, $\\langle 0, 1 \\rangle$: the dot product is $0$. The field pushes sideways and does no work.
- **Moving left**, $\\langle -1, 0 \\rangle$: the dot product is $-1$. The field pushes against the motion: negative.
- **Moving up and right**, $\\langle 1, 1 \\rangle$: the dot product is $1$. The angle is $45°$, under $90°$: positive.
<<<

**Direction matters now.** Tracing $C$ backward passes the same points with the same $\\mathbf F$, but the motion $\\mathbf r'$ points the opposite way at each one. Every step's work changes sign, so the integral does too. Compare $\\int_C f\\, ds$, which doesn't care.
>>> Backward, with numbers, and two other ways to write it
**The half circle backward.** Forward, $\\langle \\cos t, \\sin t \\rangle$ for $0 \\le t \\le \\pi$ gives $\\pi$ (example below). Backward, $\\mathbf r = \\langle -\\cos t, \\sin t \\rangle$ for $0 \\le t \\le \\pi$ starts at $(-1, 0)$ and ends at $(1, 0)$, going clockwise over the top.
- Velocity: $\\mathbf r' = \\langle \\sin t, \\cos t \\rangle$.
- The arrow at the particle: $\\langle -y, x \\rangle = \\langle -\\sin t, -\\cos t \\rangle$.
- Dot product: $-\\sin^2 t - \\cos^2 t = -1$, so the integral is $-\\pi$.

At the top, $(0, 1)$, the arrow is $\\langle -1, 0 \\rangle$ both times. Forward you move left with it (work $+$); backward you move right against it (work $-$).

**With arc length.** $\\mathbf F \\cdot \\mathbf r'\\,dt = (\\mathbf F \\cdot \\mathbf T)\\,ds$, where $\\mathbf T$ is the unit tangent: the part of the force along the path, times distance. On the forward half circle, $\\mathbf F \\cdot \\mathbf T = 1$ and the length is $\\pi$, so the integral is $1 \\times \\pi$.

**As $P\\,dx + Q\\,dy$.** This is the dot product written out, with $dx = x'(t)\\,dt$ and $dy = y'(t)\\,dt$. For example, along $x = t$, $y = 2t$ with $\\mathbf F = \\langle x^2, xy \\rangle$: $dx = dt$, $dy = 2\\,dt$, so $P\\,dx + Q\\,dy = t^2\\,dt + 2t^2 \\cdot 2\\,dt = 5t^2\\,dt$, the same integrand as the segment example below.
<<<
:::

:::figure work-along-curve
$\\mathbf F = \\langle -y, x \\rangle$ and the upper half circle traced counterclockwise. The arrows point along the path the whole way, so the work is positive.
:::

:::example Work along a half circle
$\\mathbf F = \\langle -y, x \\rangle$ along $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\pi$.

$\\mathbf F(\\mathbf r(t)) = \\langle -\\sin t, \\cos t \\rangle$ and $\\mathbf r'(t) = \\langle -\\sin t, \\cos t \\rangle$, so the dot product is $\\sin^2 t + \\cos^2 t = 1$.
$$\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_0^\\pi 1\\, dt = \\pi.$$
>>> Each step of the recipe, with numbers
1. **The field on the path.** Replace $x$ by $\\cos t$ and $y$ by $\\sin t$ in $\\langle -y, x \\rangle$: $\\langle -\\sin t, \\cos t \\rangle$.
2. **The velocity.** Each component's derivative: $\\cos t$ gives $-\\sin t$, and $\\sin t$ gives $\\cos t$.
3. **Dot product.** $(-\\sin t)(-\\sin t) + (\\cos t)(\\cos t) = \\sin^2 t + \\cos^2 t = 1$.
4. **At one point.** At $t = \\tfrac{\\pi}{2}$, the point $(0, 1)$: the arrow is $\\langle -1, 0 \\rangle$ and the velocity is $\\langle -1, 0 \\rangle$, so the dot product is $1$. The field points exactly along the motion.
5. **Integrate.** $1$ for every bit of $t$ from $0$ to $\\pi$ adds up to $\\pi \\approx 3.14$.
<<<
:::

:::example Along a segment
$\\mathbf F = \\langle x^2,\\; xy \\rangle$ along the segment from $(0,0)$ to $(1,2)$.

$\\mathbf r(t) = \\langle t, 2t \\rangle$, $0 \\le t \\le 1$, so $\\mathbf r' = \\langle 1, 2 \\rangle$ and $\\mathbf F(\\mathbf r) = \\langle t^2, 2t^2 \\rangle$. The dot product is $t^2 + 4t^2 = 5t^2$.
$$\\int_0^1 5t^2\\, dt = \\frac53.$$
>>> Each step, with numbers
1. **Parametrize.** The segment from $P = (0, 0)$ to $Q = (1, 2)$ is $P + t(Q - P) = \\langle t, 2t \\rangle$. At $t = 0$ it's $(0, 0)$ and at $t = 1$ it's $(1, 2)$, so it goes the right way.
2. **The field on the path.** $x^2 = t^2$ and $xy = t \\cdot 2t = 2t^2$.
3. **Dot product.** $\\langle t^2, 2t^2 \\rangle \\cdot \\langle 1, 2 \\rangle = t^2 + 4t^2 = 5t^2$.
4. **At one point.** At $t = 0.5$, the point $(0.5, 1)$: the arrow is $\\langle 0.25, 0.5 \\rangle$, and its dot product with $\\langle 1, 2 \\rangle$ is $0.25 + 1 = 1.25 = 5 \\times 0.25$ ✓.
5. **Integrate.** $\\int_0^1 5t^2\\,dt = \\big[\\tfrac{5t^3}{3}\\big]_0^1 = \\tfrac53 \\approx 1.67$.
<<<
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