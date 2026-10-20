var e=`---
title: Introduction to space curves
date: 2026-10-02
stewart: 13.1, 13.2, 13.3, 13.4
source: OpenStax Calculus Volume 3, §3.1 Vector-Valued Functions and Space Curves, §3.2 Calculus of Vector-Valued Functions, §3.3 Arc Length and Curvature, and §3.4 Motion in Space
---

:::recap Last time
That finished optimization. Now the course turns to **curves**: in Calc II you described plane curves with $x = f(t)$ and $y = g(t)$. Today the same idea works in 3D, written as a single vector.
:::

:::check
Warm-up: as $t$ goes from $0$ to $2\\pi$, the curve $\\langle \\cos t, \\sin t \\rangle$ traces:
- [x] the unit circle, counterclockwise
- [ ] the unit circle, clockwise
  why: It goes from $(1,0)$ at $t = 0$ to $(0,1)$ at $t = \\tfrac\\pi2$. That's a counterclockwise turn.
- [ ] a line segment
  why: Every point has $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$, so it stays on a circle, not a line.
- [ ] a parabola
  why: Every point has $x^2 + y^2 = 1$, so it's a circle. A parabola isn't closed.
???
At $t = 0$ it's at $(1, 0)$, at $t = \\pi/2$ at $(0, 1)$, and $\\cos^2 t + \\sin^2 t = 1$: the unit circle, going counterclockwise.
:::

:::question Today
How do you describe a curve in space with one parameter? And what do its derivatives tell you about motion along it?
:::

:::idea Curves as vector functions
A [[vector function]] $\\mathbf r(t) = \\langle x(t),\\, y(t),\\, z(t) \\rangle$ gives a point for each $t$. As $t$ runs, the point traces a curve, like the path of a moving particle.

**Standard parametrizations to know:**
- **Line** through $P$ in direction $\\mathbf v$: $\\mathbf r(t) = P + t\\mathbf v$. Every point on the line is $P$ plus some multiple of $\\mathbf v$, and $t$ is that multiple.
- **Segment** from $P$ to $Q$: $\\mathbf r(t) = P + t(Q - P)$ for $0 \\le t \\le 1$. At $t = 0$ it's at $P$, at $t = 1$ it's at $P + (Q - P) = Q$, and in between it moves straight along $Q - P$.
- **Circle** of radius $a$ centered at $(h, k)$: $\\langle h + a\\cos t,\\; k + a\\sin t \\rangle$ for $0 \\le t \\le 2\\pi$. Every point has $(x - h)^2 + (y - k)^2 = a^2(\\cos^2 t + \\sin^2 t) = a^2$, so it's at distance $a$ from the center.
- **Helix:** $\\langle a\\cos t,\\; a\\sin t,\\; bt \\rangle$. The first two coordinates go around a circle of radius $a$ while $z = bt$ rises at a steady rate.
- **Where two surfaces meet:** parametrize the simpler one (often a cylinder, using $\\cos$ and $\\sin$), then solve the other equation for the last coordinate. Each point is on the first surface because of how you parametrized it, and on the second because you solved its equation.
+++
**One curve, many parametrizations.** $\\langle \\cos t, \\sin t \\rangle$ for $0 \\le t \\le 2\\pi$ and $\\langle \\cos 2t, \\sin 2t \\rangle$ for $0 \\le t \\le \\pi$ trace the same circle, the second one twice as fast. $\\langle \\cos t, -\\sin t \\rangle$ traces it clockwise. Exam answers that ask you to parametrize a curve usually accept any correct one, as long as it covers the curve the right number of times.

**Check your parametrization.** Plug $\\mathbf r(t)$ into every equation the curve must satisfy, and check your $t$-range covers it exactly once.
:::

:::example Where a cylinder meets a plane
Parametrize the curve where the cylinder $x^2 + y^2 = 4$ meets the plane $z = x + 3$.

**Cylinder.** It's a circle of radius $2$ in $x$ and $y$: $x = 2\\cos t$, $y = 2\\sin t$, $0 \\le t \\le 2\\pi$.

**Plane.** $z = x + 3 = 2\\cos t + 3$.
$$\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; 2\\cos t + 3 \\rangle, \\qquad 0 \\le t \\le 2\\pi.$$

**Check.** $x^2 + y^2 = 4\\cos^2 t + 4\\sin^2 t = 4$ ✓ and $z - x = 3$ ✓.
:::

:::check
Which parametrizes the segment from $(1, 0, 2)$ to $(3, 4, 2)$?
- [x] $\\langle 1 + 2t,\\; 4t,\\; 2 \\rangle$, $0 \\le t \\le 1$
- [ ] $\\langle 1 + 3t,\\; 4t,\\; 2 \\rangle$, $0 \\le t \\le 1$
  why: At $t = 1$ it's at $(4, 4, 2)$, overshooting $(3, 4, 2)$. The $x$-step should be $3 - 1 = 2$.
- [ ] $\\langle 3 + 2t,\\; 4 + 4t,\\; 2 \\rangle$, $0 \\le t \\le 1$
  why: It starts at $(3, 4, 2)$, which is the endpoint, and goes to $(5, 8, 2)$. It should start at $P = (1, 0, 2)$.
- [ ] $\\langle 1 + 2t,\\; 4t,\\; 2t \\rangle$, $0 \\le t \\le 1$
  why: At $t = 0$ it's at $(1, 0, 0)$, not $(1, 0, 2)$. Both endpoints have $z = 2$, so $z$ should stay $2$.
???
$P + t(Q - P)$ with $Q - P = \\langle 2, 4, 0 \\rangle$ gives $\\langle 1 + 2t,\\; 4t,\\; 2 \\rangle$. Check the ends: $t = 0$ gives $(1, 0, 2)$ ✓ and $t = 1$ gives $(3, 4, 2)$ ✓.
:::

:::idea Derivatives and tangent vectors
Differentiate a vector function **component by component**: $\\mathbf r'(t) = \\langle x'(t),\\, y'(t),\\, z'(t) \\rangle$.

**Why component by component.** The derivative is defined just as in Calc I:
$$\\mathbf r'(t) = \\lim_{h\\to0} \\frac{\\mathbf r(t + h) - \\mathbf r(t)}{h} = \\lim_{h\\to0} \\left\\langle \\frac{x(t+h) - x(t)}{h},\\; \\frac{y(t+h) - y(t)}{h},\\; \\frac{z(t+h) - z(t)}{h} \\right\\rangle.$$
Subtracting two vectors and dividing by $h$ both happen one component at a time, and a vector approaches a limit exactly when each of its components does. Each component's limit is an ordinary derivative.

**Why it's tangent.** The top, $\\mathbf r(t + h) - \\mathbf r(t)$, is the arrow from the point at time $t$ to a nearby point on the curve: a secant. Dividing by $h > 0$ keeps its direction. As $h \\to 0$, the nearby point slides toward $\\mathbf r(t)$, and the secant's direction becomes the tangent direction. So $\\mathbf r'(t)$ is a **tangent vector**, pointing along the curve in the direction of motion (as long as $\\mathbf r'(t) \\neq \\mathbf 0$).

- **Unit tangent:** $\\mathbf T(t) = \\dfrac{\\mathbf r'(t)}{\\lVert \\mathbf r'(t) \\rVert}$, the same direction with length $1$.
- **Tangent line** at $t_0$: $\\mathbf r(t_0) + s\\,\\mathbf r'(t_0)$, which starts at the point and goes in the tangent direction.
+++
**A useful fact.** If $\\lVert \\mathbf r(t) \\rVert$ is constant (the curve stays on a sphere or circle around the origin), then $\\mathbf r'(t) \\perp \\mathbf r(t)$. Why: $\\mathbf r \\cdot \\mathbf r = x^2 + y^2 + z^2$ is constant, so its derivative $2xx' + 2yy' + 2zz' = 2\\,\\mathbf r \\cdot \\mathbf r'$ is $0$. On a circle, the velocity is always perpendicular to the radius.
:::

:::figure velocity-ellipse
An ellipse $\\mathbf r(t) = \\langle 1.6\\cos t, 0.9\\sin t \\rangle$ with tangent vectors $\\mathbf r'(t)$ (drawn at half length). Each one points along the curve in the counterclockwise direction of motion.
:::

:::example Unit tangent and tangent line
For $\\mathbf r(t) = \\langle t, t^2, t^3 \\rangle$ at $t = 1$:

$\\mathbf r'(t) = \\langle 1, 2t, 3t^2 \\rangle$, so $\\mathbf r'(1) = \\langle 1, 2, 3 \\rangle$, with length $\\sqrt{14}$.

**Unit tangent:** $\\mathbf T(1) = \\dfrac{1}{\\sqrt{14}}\\langle 1, 2, 3 \\rangle$.

**Tangent line:** $\\langle 1, 1, 1 \\rangle + s\\langle 1, 2, 3 \\rangle$.
:::

:::check
For $\\mathbf r(t) = \\langle 3t,\\; 4\\sin t,\\; e^{2t} \\rangle$, what is $\\lVert \\mathbf r'(0) \\rVert$?
answer: sqrt(29)
???
$\\mathbf r'(t) = \\langle 3,\\; 4\\cos t,\\; 2e^{2t} \\rangle$, so $\\mathbf r'(0) = \\langle 3, 4, 2 \\rangle$ and $\\lVert \\mathbf r'(0) \\rVert = \\sqrt{9 + 16 + 4} = \\sqrt{29}$.
:::

:::idea Arc length
The length of a curve from $t = a$ to $t = b$ is
$$L = \\int_a^b \\lVert \\mathbf r'(t) \\rVert\\, dt = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2}\\; dt.$$

**Why.** Chop the time interval into short steps of length $\\Delta t$. During one step, each coordinate changes by about its rate times the time: $\\Delta x \\approx x'(t)\\,\\Delta t$, $\\Delta y \\approx y'(t)\\,\\Delta t$, $\\Delta z \\approx z'(t)\\,\\Delta t$. Over such a short step the curve is nearly straight, so by the distance formula (Pythagoras in 3D) that piece has length about
$$\\sqrt{(\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2} \\approx \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2}\\;\\Delta t = \\lVert \\mathbf r'(t) \\rVert\\, \\Delta t.$$
Adding up the pieces and letting $\\Delta t \\to 0$ turns the sum into the integral. In words: $\\lVert \\mathbf r'(t) \\rVert$ is the speed, and the length is speed times time, added up.
+++
**A check with numbers.** For one turn of the helix in the example below, connect the points at $t = 0, \\tfrac{2\\pi}{10}, \\tfrac{4\\pi}{10}, \\dots, 2\\pi$ with $10$ straight segments: their total length is about $13.866$. With $100$ segments, it's about $14.048$. The integral gives $2\\pi\\sqrt5 \\approx 14.050$. The straight pieces get closer to the curve as they get shorter, which is exactly the limit above.

**Exam tip: perfect squares.** Arc-length problems are designed so the square root simplifies. If the expression under the square root can be rewritten as $a^2 + 2ab + b^2$, then the square root is just $a + b$. For example, $\\lVert \\mathbf r' \\rVert^2 = 4t^2 + 4 + \\frac{1}{t^2} = \\left(2t + \\frac1t\\right)^2$.

**Length doesn't depend on the parametrization.** Tracing the same curve faster makes $\\lVert \\mathbf r' \\rVert$ bigger but the time interval shorter by the same factor, so the integral comes out the same (as long as you trace it once).
:::

:::example A helix
Length of one turn of $\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; t \\rangle$, $0 \\le t \\le 2\\pi$.

$\\mathbf r'(t) = \\langle -2\\sin t,\\; 2\\cos t,\\; 1 \\rangle$, so $\\lVert \\mathbf r'(t) \\rVert = \\sqrt{4\\sin^2 t + 4\\cos^2 t + 1} = \\sqrt 5$.
$$L = \\int_0^{2\\pi} \\sqrt5\\, dt = 2\\pi\\sqrt5.$$
:::

:::check
Find the length of $\\mathbf r(t) = \\langle 3\\cos t,\\; 3\\sin t,\\; 4t \\rangle$ for $0 \\le t \\le 2\\pi$.
answer: 10pi
???
$\\lVert \\mathbf r'(t) \\rVert = \\sqrt{9\\sin^2 t + 9\\cos^2 t + 16} = \\sqrt{25} = 5$, so $L = 5 \\cdot 2\\pi = 10\\pi$.
:::

:::idea Velocity, speed, and acceleration
For a particle at position $\\mathbf r(t)$:
- **velocity** $\\mathbf v(t) = \\mathbf r'(t)$, a vector
- **[[speed]]** $\\lVert \\mathbf v(t) \\rVert$, a number
- **acceleration** $\\mathbf a(t) = \\mathbf v'(t) = \\mathbf r''(t)$, a vector

**Why $\\lVert \\mathbf v \\rVert$ is the speed.** $\\lVert \\mathbf r(t + h) - \\mathbf r(t) \\rVert$ is the straight-line distance covered between times $t$ and $t + h$. Dividing by $h$ gives the average speed over that short time, and as $h \\to 0$ it becomes $\\lVert \\mathbf r'(t) \\rVert$.

**Why constant speed doesn't mean zero acceleration.** If the speed is constant, then $\\mathbf v \\cdot \\mathbf v = \\lVert \\mathbf v \\rVert^2$ is constant, so its derivative is $0$. Differentiating $v_1^2 + v_2^2 + v_3^2$ term by term gives
$$\\frac{d}{dt}(\\mathbf v \\cdot \\mathbf v) = 2v_1 v_1' + 2v_2 v_2' + 2v_3 v_3' = 2\\,\\mathbf v \\cdot \\mathbf a = 0.$$
So at constant speed the acceleration is **perpendicular** to the velocity. It doesn't speed the particle up or slow it down; it only changes its direction. It's zero only when the direction never changes.
+++
**A circle.** Acceleration measures any change in velocity, including a change in *direction*. For example, $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$ has speed $\\lVert \\mathbf r'(t) \\rVert = 1$ at every time, but $\\mathbf a(t) = \\langle -\\cos t, -\\sin t \\rangle = -\\mathbf r(t)$, a vector of length $1$ pointing from the particle straight to the center. The example below shows the same thing on a helix.
:::

:::example Steady speed, turning
$\\mathbf r(t) = \\langle \\cos 2t,\\; \\sin 2t,\\; 3t \\rangle$, a helix.

$\\mathbf v = \\langle -2\\sin 2t,\\; 2\\cos 2t,\\; 3 \\rangle$, so the speed is $\\sqrt{4 + 9} = \\sqrt{13}$, constant.

$\\mathbf a = \\langle -4\\cos 2t,\\; -4\\sin 2t,\\; 0 \\rangle$. That's not zero: it points horizontally toward the helix's axis, turning the particle.

**Check that $\\mathbf a \\perp \\mathbf v$**, as constant speed requires: $\\mathbf v \\cdot \\mathbf a = 8\\sin 2t\\cos 2t - 8\\cos 2t\\sin 2t + 0 = 0$. ✓
:::

:::check
A particle moves along $\\mathbf r(t) = \\langle t^2,\\; 2t,\\; \\ln t \\rangle$. What is its speed at $t = 1$?
answer: 3
???
$\\mathbf v(t) = \\langle 2t,\\; 2,\\; 1/t \\rangle$, so $\\mathbf v(1) = \\langle 2, 2, 1 \\rangle$ and the speed is $\\sqrt{4 + 4 + 1} = 3$.
:::

:::check
A particle moves with constant speed. Must its acceleration be zero?
- [ ] Yes
  why: Acceleration measures any change in velocity, including direction. On a circle at steady speed, it points toward the center.
- [x] No, it can be changing direction
???
No. Constant speed only means $\\lVert \\mathbf v \\rVert$ doesn't change. If the direction of $\\mathbf v$ changes, as on a circle or helix, then $\\mathbf a \\neq \\mathbf 0$.
:::

:::summary Summary
- Parametrize: lines $P + t\\mathbf v$, segments $P + t(Q-P)$, circles with $\\cos$ and $\\sin$, intersections by parametrizing one surface.
- $\\mathbf r'(t)$ is tangent to the curve, $\\mathbf T = \\mathbf r'/\\lVert \\mathbf r' \\rVert$, and the tangent line is $\\mathbf r(t_0) + s\\,\\mathbf r'(t_0)$.
- Arc length is $\\int \\lVert \\mathbf r' \\rVert\\, dt$. Look for perfect squares.
- Velocity $\\mathbf r'$, speed $\\lVert \\mathbf r' \\rVert$, acceleration $\\mathbf r''$.

**Common mistakes:**
- A $t$-range that covers half the curve, or covers it twice.
- Giving the velocity vector when asked for speed.
- Mixing up $\\mathbf r'(t_0)$ (direction) and $\\mathbf r(t_0)$ (point) in the tangent line.
:::
`;export{e as default};