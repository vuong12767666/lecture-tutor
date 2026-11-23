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
>>> Each parametrization, at actual values of $t$
**What a parametrization is.** It's a rule that turns each number $t$ into a point. Plugging in a few values of $t$ and plotting the points shows the curve.

**Segment from $P = (1, 2)$ to $Q = (4, 6)$.** $Q - P = \\langle 3, 4 \\rangle$, so $\\mathbf r(t) = \\langle 1 + 3t,\\; 2 + 4t \\rangle$.
- $t = 0$: $(1, 2)$, which is $P$.
- $t = 0.5$: $(2.5, 4)$, halfway between.
- $t = 1$: $(4, 6)$, which is $Q$.

**Circle of radius $2$ centered at $(1, -1)$.** $\\mathbf r(t) = \\langle 1 + 2\\cos t,\\; -1 + 2\\sin t \\rangle$.
- $t = 0$: $(3, -1)$, which is $2$ to the right of the center.
- $t = \\tfrac{\\pi}{2}$: $(1, 1)$, which is $2$ above the center.
- At every $t$: $(x - 1)^2 + (y + 1)^2 = 4\\cos^2 t + 4\\sin^2 t = 4$, so the distance to the center is always $2$.

**Helix with $a = 1$, $b = 2$.** $\\mathbf r(t) = \\langle \\cos t, \\sin t, 2t \\rangle$.
- $t = 0$: $(1, 0, 0)$.
- $t = \\tfrac{\\pi}{2}$: $(0, 1, \\pi)$, a quarter of the way around, and higher.
- $t = 2\\pi$: $(1, 0, 4\\pi)$, directly above the start, $4\\pi$ higher.
<<<

**One curve, many parametrizations.** The same curve can be traced by different rules. Exam answers usually accept any correct one, as long as it covers the curve the right number of times.
>>> Speed and direction of a parametrization, with numbers
- $\\langle \\cos t, \\sin t \\rangle$ reaches $(0, 1)$ at $t = \\tfrac{\\pi}{2}$ and finishes the circle at $t = 2\\pi$.
- $\\langle \\cos 2t, \\sin 2t \\rangle$ reaches $(0, 1)$ at $t = \\tfrac{\\pi}{4}$, since $2 \\cdot \\tfrac{\\pi}{4} = \\tfrac{\\pi}{2}$. It finishes the circle at $t = \\pi$. Same circle, twice as fast. If you let $t$ run to $2\\pi$, it goes around twice.
- $\\langle \\cos t, -\\sin t \\rangle$ at $t = \\tfrac{\\pi}{2}$ is at $(0, -1)$: starting from $(1, 0)$ it went down first, so it goes clockwise.

**Check your parametrization.** Plug $\\mathbf r(t)$ into every equation the curve must satisfy, and check that your $t$-range covers it exactly once. For example, $\\langle \\cos 2t, \\sin 2t \\rangle$ satisfies $x^2 + y^2 = 1$, but with $0 \\le t \\le 2\\pi$ it covers the circle twice.
<<<
:::

:::example Where a cylinder meets a plane
Parametrize the curve where the cylinder $x^2 + y^2 = 4$ meets the plane $z = x + 3$.

**Cylinder.** It's a circle of radius $2$ in $x$ and $y$: $x = 2\\cos t$, $y = 2\\sin t$, $0 \\le t \\le 2\\pi$.

**Plane.** $z = x + 3 = 2\\cos t + 3$.
$$\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; 2\\cos t + 3 \\rangle, \\qquad 0 \\le t \\le 2\\pi.$$
>>> Why each step works, with points
1. **Why the cylinder gives $x = 2\\cos t$, $y = 2\\sin t$.** The cylinder $x^2 + y^2 = 4$ is every point whose $x$ and $y$ lie on the circle of radius $2$; $z$ can be anything. The standard circle of radius $2$ is $\\langle 2\\cos t, 2\\sin t \\rangle$.
2. **Why we use the plane for $z$.** The curve's points must be on the plane too, so their height must be $z = x + 3$. Since $x = 2\\cos t$, that's $z = 2\\cos t + 3$.
3. **Points on the curve.**
   - $t = 0$: $(2, 0, 5)$. Cylinder: $4 + 0 = 4$ ✓. Plane: $5 = 2 + 3$ ✓.
   - $t = \\tfrac{\\pi}{2}$: $(0, 2, 3)$. Cylinder: $0 + 4 = 4$ ✓. Plane: $3 = 0 + 3$ ✓.
   - $t = \\pi$: $(-2, 0, 1)$. Cylinder ✓, plane: $1 = -2 + 3$ ✓.

The curve goes around the cylinder once, tilted: highest ($z = 5$) where $x = 2$, lowest ($z = 1$) where $x = -2$.
<<<

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
>>> The secant turning into the tangent, for $\\mathbf r(t) = \\langle t, t^2 \\rangle$ at $t = 1$
The point at $t = 1$ is $(1, 1)$. Component by component, $\\mathbf r'(t) = \\langle 1, 2t \\rangle$, so $\\mathbf r'(1) = \\langle 1, 2 \\rangle$.

**The secant arrows, getting shorter.**
- $h = 0.1$: $\\mathbf r(1.1) = (1.1, 1.21)$. The arrow from $(1, 1)$ is $\\langle 0.1, 0.21 \\rangle$. Divided by $0.1$: $\\langle 1, 2.1 \\rangle$.
- $h = 0.01$: $\\mathbf r(1.01) = (1.01, 1.0201)$. The arrow is $\\langle 0.01, 0.0201 \\rangle$. Divided by $0.01$: $\\langle 1, 2.01 \\rangle$.

As $h$ shrinks, these approach $\\langle 1, 2 \\rangle = \\mathbf r'(1)$. Each arrow joins two points of the curve, and the second point gets closer and closer, so the limit points along the curve: the tangent direction.
<<<

- **Unit tangent:** $\\mathbf T(t) = \\dfrac{\\mathbf r'(t)}{\\lVert \\mathbf r'(t) \\rVert}$, the same direction with length $1$.
- **Tangent line** at $t_0$: $\\mathbf r(t_0) + s\\,\\mathbf r'(t_0)$, which starts at the point and goes in the tangent direction.
>>> Unit tangent and tangent line, for $\\langle t, t^2 \\rangle$ at $t = 1$
1. **Length of $\\mathbf r'(1) = \\langle 1, 2 \\rangle$:** $\\sqrt{1 + 4} = \\sqrt 5 \\approx 2.236$.
2. **Unit tangent.** Divide each component by the length: $\\mathbf T = \\langle \\tfrac{1}{\\sqrt5}, \\tfrac{2}{\\sqrt5} \\rangle \\approx \\langle 0.447, 0.894 \\rangle$. Its length is $\\sqrt{0.2 + 0.8} = 1$, and it points the same way as $\\langle 1, 2 \\rangle$.
3. **Tangent line.** Start at the point $\\mathbf r(1) = (1, 1)$ and add multiples $s$ of the direction $\\langle 1, 2 \\rangle$: $\\langle 1 + s,\\; 1 + 2s \\rangle$. At $s = 0.1$ that's $(1.1, 1.2)$, while the curve at $t = 1.1$ is at $(1.1, 1.21)$. Close to the point, the line and the curve nearly agree.

**A useful fact.** If the curve stays at the same distance from the origin, then $\\mathbf r'(t)$ is perpendicular to $\\mathbf r(t)$. For example, on $\\langle \\cos t, \\sin t \\rangle$ at $t = \\tfrac{\\pi}{4}$: $\\mathbf r \\approx \\langle 0.707, 0.707 \\rangle$ and $\\mathbf r' \\approx \\langle -0.707, 0.707 \\rangle$, with dot product $-0.5 + 0.5 = 0$. The reason: $x^2 + y^2 + z^2$ doesn't change, so its derivative $2xx' + 2yy' + 2zz' = 2\\,\\mathbf r \\cdot \\mathbf r'$ is $0$.
<<<
:::

:::figure velocity-ellipse
An ellipse $\\mathbf r(t) = \\langle 1.6\\cos t, 0.9\\sin t \\rangle$ with tangent vectors $\\mathbf r'(t)$ (drawn at half length). Each one points along the curve in the counterclockwise direction of motion.
:::

:::example Unit tangent and tangent line
For $\\mathbf r(t) = \\langle t, t^2, t^3 \\rangle$ at $t = 1$:

$\\mathbf r'(t) = \\langle 1, 2t, 3t^2 \\rangle$, so $\\mathbf r'(1) = \\langle 1, 2, 3 \\rangle$, with length $\\sqrt{14}$.
>>> Each component's derivative, and the length
1. **Differentiate each component on its own.** $t$ gives $1$; $t^2$ gives $2t$; $t^3$ gives $3t^2$.
2. **Plug in $t = 1$.** $\\langle 1, 2 \\cdot 1, 3 \\cdot 1^2 \\rangle = \\langle 1, 2, 3 \\rangle$.
3. **Length.** Square each component, add, take the square root: $\\sqrt{1 + 4 + 9} = \\sqrt{14} \\approx 3.742$.
<<<

**Unit tangent:** $\\mathbf T(1) = \\dfrac{1}{\\sqrt{14}}\\langle 1, 2, 3 \\rangle$.

**Tangent line:** $\\langle 1, 1, 1 \\rangle + s\\langle 1, 2, 3 \\rangle$.
>>> Where the unit tangent and the line come from
1. **Unit tangent.** Dividing $\\langle 1, 2, 3 \\rangle$ by its length $\\sqrt{14}$ keeps the direction and makes the length $1$: $\\langle 0.267, 0.535, 0.802 \\rangle$, and $0.267^2 + 0.535^2 + 0.802^2 \\approx 1$.
2. **The starting point of the line** is the curve's point at $t = 1$: $\\mathbf r(1) = \\langle 1, 1^2, 1^3 \\rangle = \\langle 1, 1, 1 \\rangle$.
3. **The direction** is $\\mathbf r'(1) = \\langle 1, 2, 3 \\rangle$.
4. **Check that it hugs the curve.** At $s = 0.1$ the line is at $(1.1, 1.2, 1.3)$. The curve at $t = 1.1$ is at $(1.1, 1.21, 1.331)$, very close.
<<<
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
>>> One short piece, then many, for the helix $\\langle 2\\cos t, 2\\sin t, t \\rangle$
**One piece, from $t = 0$ to $t = 0.1$.** The actual changes are $\\Delta x = 2\\cos 0.1 - 2 \\approx -0.0100$, $\\Delta y = 2\\sin 0.1 \\approx 0.1997$, and $\\Delta z = 0.1$.
- The straight piece's length: $\\sqrt{0.0100^2 + 0.1997^2 + 0.1^2} \\approx 0.22355$.
- The formula's estimate: $\\mathbf r'(0) = \\langle 0, 2, 1 \\rangle$ has length $\\sqrt5$, times $\\Delta t = 0.1$, gives $0.22361$.
- They agree to about $0.0001$.

**All the pieces.** For one turn ($0 \\le t \\le 2\\pi$), connect $10$ points with straight segments: total about $13.866$. With $100$ segments: about $14.048$. The integral gives $2\\pi\\sqrt5 \\approx 14.050$. Shorter pieces follow the curve more closely, and their total approaches the integral.
<<<

**Exam tip: perfect squares.** Arc-length problems are designed so the square root simplifies. If the expression under the square root can be rewritten as $a^2 + 2ab + b^2$, then the square root is just $a + b$.
>>> A perfect square, worked out, for $\\langle t^2, 2t, \\ln t \\rangle$ from $t = 1$ to $t = e$
1. **Velocity.** $\\mathbf r' = \\langle 2t, 2, \\tfrac1t \\rangle$.
2. **Square of the length.** $(2t)^2 + 2^2 + \\left(\\tfrac1t\\right)^2 = 4t^2 + 4 + \\tfrac{1}{t^2}$.
3. **Spot the square.** With $a = 2t$ and $b = \\tfrac1t$: $a^2 = 4t^2$, $b^2 = \\tfrac{1}{t^2}$, and $2ab = 2 \\cdot 2t \\cdot \\tfrac1t = 4$. So $4t^2 + 4 + \\tfrac{1}{t^2} = \\left(2t + \\tfrac1t\\right)^2$. Check at $t = 1$: $4 + 4 + 1 = 9 = 3^2$ ✓.
4. **Square root.** $\\lVert \\mathbf r' \\rVert = 2t + \\tfrac1t$ (it's positive for $t > 0$).
5. **Integrate.** $\\int_1^e \\left(2t + \\tfrac1t\\right) dt = \\big[t^2 + \\ln t\\big]_1^e = (e^2 + 1) - (1 + 0) = e^2 \\approx 7.389$.

**Length doesn't depend on the parametrization.** Tracing the helix $\\langle 2\\cos 2t, 2\\sin 2t, 2t \\rangle$ for $0 \\le t \\le \\pi$ covers the same turn twice as fast. Its speed is $2\\sqrt5$ for a time of $\\pi$, so the length is $2\\sqrt5 \\cdot \\pi$, the same $2\\pi\\sqrt5$.
<<<
:::

:::example A helix
Length of one turn of $\\mathbf r(t) = \\langle 2\\cos t,\\; 2\\sin t,\\; t \\rangle$, $0 \\le t \\le 2\\pi$.

$\\mathbf r'(t) = \\langle -2\\sin t,\\; 2\\cos t,\\; 1 \\rangle$, so $\\lVert \\mathbf r'(t) \\rVert = \\sqrt{4\\sin^2 t + 4\\cos^2 t + 1} = \\sqrt 5$.
>>> Why the speed comes out the same at every $t$
1. **Differentiate each component.** $2\\cos t$ gives $-2\\sin t$; $2\\sin t$ gives $2\\cos t$; $t$ gives $1$.
2. **Square and add.** $4\\sin^2 t + 4\\cos^2 t + 1 = 4(\\sin^2 t + \\cos^2 t) + 1 = 4 \\cdot 1 + 1 = 5$.
3. **For example,** at $t = 0$: $\\mathbf r' = \\langle 0, 2, 1 \\rangle$, length $\\sqrt{0 + 4 + 1} = \\sqrt5$. At $t = \\tfrac{\\pi}{2}$: $\\langle -2, 0, 1 \\rangle$, length $\\sqrt{4 + 0 + 1} = \\sqrt5$. The speed doesn't change.
<<<
$$L = \\int_0^{2\\pi} \\sqrt5\\, dt = 2\\pi\\sqrt5.$$
>>> Integrating a speed that doesn't change
When the speed is the same number at every moment, distance is speed times time. The speed is $\\sqrt5 \\approx 2.236$ and the time runs from $0$ to $2\\pi \\approx 6.283$, so the length is $\\sqrt5 \\cdot 2\\pi \\approx 14.05$. That's what $\\int_0^{2\\pi} \\sqrt5\\,dt$ computes.
<<<
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
>>> Speed from distance over time, for $\\langle \\cos t, \\sin t \\rangle$
From $t = 0$ to $t = 0.1$, the point moves from $(1, 0)$ to $(\\cos 0.1, \\sin 0.1) \\approx (0.9950, 0.0998)$. The straight-line distance is $\\sqrt{0.0050^2 + 0.0998^2} \\approx 0.09996$. Dividing by the time $0.1$ gives an average speed of about $0.9996$.

The formula: $\\mathbf r' = \\langle -\\sin t, \\cos t \\rangle$, so $\\lVert \\mathbf r'(0) \\rVert = \\sqrt{0 + 1} = 1$. A shorter time step gets even closer to $1$.
<<<

**Why constant speed doesn't mean zero acceleration.** If the speed is constant, then $\\mathbf v \\cdot \\mathbf v = \\lVert \\mathbf v \\rVert^2$ is constant, so its derivative is $0$. Differentiating $v_1^2 + v_2^2 + v_3^2$ term by term gives
$$\\frac{d}{dt}(\\mathbf v \\cdot \\mathbf v) = 2v_1 v_1' + 2v_2 v_2' + 2v_3 v_3' = 2\\,\\mathbf v \\cdot \\mathbf a = 0.$$
So at constant speed the acceleration is **perpendicular** to the velocity. It doesn't speed the particle up or slow it down; it only changes its direction. It's zero only when the direction never changes.
>>> Constant speed, turning, on the circle $\\langle \\cos t, \\sin t \\rangle$
Acceleration measures any change in velocity, including a change in *direction*.
1. **Velocity.** $\\mathbf v = \\langle -\\sin t, \\cos t \\rangle$. At $t = 0$ it's $\\langle 0, 1 \\rangle$ (straight up). At $t = \\tfrac{\\pi}{2}$ it's $\\langle -1, 0 \\rangle$ (straight left).
2. **Speed.** Both have length $1$. At every $t$, $\\sin^2 t + \\cos^2 t = 1$, so the speed never changes.
3. **But the velocity does change:** from $\\langle 0, 1 \\rangle$ to $\\langle -1, 0 \\rangle$. A changing velocity means a nonzero acceleration.
4. **Acceleration.** $\\mathbf a = \\langle -\\cos t, -\\sin t \\rangle$. At $t = 0$ the particle is at $(1, 0)$ and $\\mathbf a = \\langle -1, 0 \\rangle$, pointing straight at the center $(0, 0)$.
5. **Perpendicular.** At $t = 0$: $\\mathbf v \\cdot \\mathbf a = 0 \\cdot (-1) + 1 \\cdot 0 = 0$. The acceleration only turns the particle; it doesn't speed it up or slow it down.
<<<
:::

:::example Steady speed, turning
$\\mathbf r(t) = \\langle \\cos 2t,\\; \\sin 2t,\\; 3t \\rangle$, a helix.

$\\mathbf v = \\langle -2\\sin 2t,\\; 2\\cos 2t,\\; 3 \\rangle$, so the speed is $\\sqrt{4 + 9} = \\sqrt{13}$, constant.
>>> The velocity and the speed, step by step
1. **The chain rule on $\\cos 2t$.** The derivative of $\\cos u$ is $-\\sin u$, times the derivative of the inside $u = 2t$, which is $2$. So $\\cos 2t$ gives $-2\\sin 2t$. Likewise $\\sin 2t$ gives $2\\cos 2t$, and $3t$ gives $3$.
2. **Speed.** $(-2\\sin 2t)^2 + (2\\cos 2t)^2 + 3^2 = 4(\\sin^2 2t + \\cos^2 2t) + 9 = 4 + 9 = 13$, so the speed is $\\sqrt{13} \\approx 3.606$.
3. **With numbers.** At $t = 0$: $\\mathbf v = \\langle 0, 2, 3 \\rangle$, length $\\sqrt{13}$. At $t = \\tfrac{\\pi}{4}$: $\\mathbf v = \\langle -2, 0, 3 \\rangle$, length $\\sqrt{13}$.
<<<

$\\mathbf a = \\langle -4\\cos 2t,\\; -4\\sin 2t,\\; 0 \\rangle$. That's not zero: it points horizontally toward the helix's axis, turning the particle.
>>> Where the acceleration points, at $t = 0$
1. **Differentiate $\\mathbf v$ again.** $-2\\sin 2t$ gives $-4\\cos 2t$; $2\\cos 2t$ gives $-4\\sin 2t$; $3$ gives $0$.
2. **At $t = 0$** the particle is at $\\mathbf r(0) = (1, 0, 0)$, and $\\mathbf a = \\langle -4, 0, 0 \\rangle$.
3. **Which way that is.** The helix winds around the $z$-axis, the points $(0, 0, z)$. From $(1, 0, 0)$, the direction $\\langle -4, 0, 0 \\rangle$ points straight at $(0, 0, 0)$ on that axis. Its $z$ part is $0$, so it's horizontal.
<<<

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