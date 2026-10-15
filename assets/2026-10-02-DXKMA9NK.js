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
- **Line** through $P$ in direction $\\mathbf v$: $\\mathbf r(t) = P + t\\mathbf v$.
- **Segment** from $P$ to $Q$: $\\mathbf r(t) = P + t(Q - P)$ for $0 \\le t \\le 1$.
- **Circle** of radius $a$ centered at $(h, k)$: $\\langle h + a\\cos t,\\; k + a\\sin t \\rangle$ for $0 \\le t \\le 2\\pi$.
- **Helix:** $\\langle a\\cos t,\\; a\\sin t,\\; bt \\rangle$, a circle that rises as it turns.
- **Where two surfaces meet:** parametrize the simpler one (often a cylinder, using $\\cos$ and $\\sin$), then solve the other equation for the last coordinate.
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

**Meaning.** $\\mathbf r'(t)$ is a **tangent vector**: it points along the curve in the direction of motion.

- **Unit tangent:** $\\mathbf T(t) = \\dfrac{\\mathbf r'(t)}{\\lVert \\mathbf r'(t) \\rVert}$.
- **Tangent line** at $t_0$: $\\mathbf r(t_0) + s\\,\\mathbf r'(t_0)$.
+++
**Why it's tangent.** $\\mathbf r'(t) = \\lim_{h\\to0} \\dfrac{\\mathbf r(t + h) - \\mathbf r(t)}{h}$. The top is the arrow from one point on the curve to a nearby one, a secant. Dividing by $h$ and shrinking $h$ turns the secant into the tangent direction.

**A useful fact.** If $\\lVert \\mathbf r(t) \\rVert$ is constant (the curve stays on a sphere or circle around the origin), then $\\mathbf r'(t) \\perp \\mathbf r(t)$. Differentiate $\\mathbf r \\cdot \\mathbf r = \\text{constant}$ to get $2\\,\\mathbf r \\cdot \\mathbf r' = 0$. On a circle, the velocity is always perpendicular to the radius.
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

**Intuition.** $\\lVert \\mathbf r'(t) \\rVert$ is the speed, and distance $=$ speed $\\times$ time, added up.
+++
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
+++
**Constant speed doesn't mean zero acceleration.** Acceleration measures any change in velocity, including a change in *direction*. A car driving around a circle at a steady $30$ mph is accelerating toward the center the whole time. The example below shows this.
:::

:::example Steady speed, turning
$\\mathbf r(t) = \\langle \\cos 2t,\\; \\sin 2t,\\; 3t \\rangle$, a helix.

$\\mathbf v = \\langle -2\\sin 2t,\\; 2\\cos 2t,\\; 3 \\rangle$, so the speed is $\\sqrt{4 + 9} = \\sqrt{13}$, constant.

$\\mathbf a = \\langle -4\\cos 2t,\\; -4\\sin 2t,\\; 0 \\rangle$. That's not zero: it points horizontally toward the helix's axis, turning the particle.
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