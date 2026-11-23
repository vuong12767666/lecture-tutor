var e=`---
title: More on arc length; integrating functions on curves
date: 2026-10-05
stewart: 13.3, 16.2
source: OpenStax Calculus Volume 3, §3.3 Arc Length and Curvature and §6.2 Line Integrals
---

:::recap Last time
For a curve $\\mathbf r(t)$, $a \\le t \\le b$: the speed is $\\lVert \\mathbf r'(t) \\rVert$, and the [[arc length]] is $L = \\displaystyle\\int_a^b \\lVert \\mathbf r'(t) \\rVert\\, dt$.
:::

:::check
Warm-up: use $\\mathbf r(t) = \\langle 3t, 4t \\rangle$, $0 \\le t \\le 1$, to find the length of the segment from $(0,0)$ to $(3,4)$.
answer: 5
???
$\\lVert \\mathbf r'(t) \\rVert = \\lVert \\langle 3, 4 \\rangle \\rVert = 5$, so $L = \\int_0^1 5\\, dt = 5$, matching the distance formula.
:::

:::question Today
Arc length adds up tiny pieces of length $ds$. What if each piece carries a value, like the density of a wire, and you want the total along the curve?
:::

:::idea Arc length, again
Split the time interval into short steps of length $\\Delta t$. During one step the particle moves about (speed) $\\times$ (time) $= \\lVert \\mathbf r'(t) \\rVert\\, \\Delta t$. Adding those distances and letting $\\Delta t \\to 0$ gives the length. So the length element is
$$ds = \\lVert \\mathbf r'(t) \\rVert\\, dt.$$
>>> One step of length, with numbers, on $\\langle 3t, 4t \\rangle$
**What $ds$ means.** It's the length of a tiny piece of the curve, covered during a tiny time $dt$.

1. **Speed.** $\\mathbf r' = \\langle 3, 4 \\rangle$, so the speed is $\\sqrt{9 + 16} = 5$ at every moment.
2. **One step.** From $t = 0.2$ to $t = 0.3$, a time of $0.1$, the point moves from $(0.6, 0.8)$ to $(0.9, 1.2)$. The distance is $\\sqrt{0.3^2 + 0.4^2} = 0.5$, which is speed $\\times$ time $= 5 \\times 0.1$.
3. **All the steps.** From $t = 0$ to $t = 1$ there are ten such steps of $0.5$ each, for a total of $5$. That's $\\int_0^1 5\\,dt$.
<<<

**The answer doesn't depend on how you trace the curve.** The segment from $(0,0)$ to $(3,4)$ can also be traced as $\\langle 3t^2, 4t^2 \\rangle$, $0 \\le t \\le 1$. Now $\\lVert \\mathbf r' \\rVert = \\lVert \\langle 6t, 8t \\rangle \\rVert = 10t$, and $\\int_0^1 10t\\, dt = 5$, the same answer.

**Why.** Tracing the curve differently changes the speed and the time spent by matching factors. Precisely: say the new tracing is $\\mathbf r(\\varphi(u))$, where $t = \\varphi(u)$ is increasing, so the curve is still traced once in the same direction. By the chain rule its velocity is $\\mathbf r'(\\varphi(u))\\,\\varphi'(u)$, so its speed is $\\lVert \\mathbf r'(\\varphi(u)) \\rVert\\, \\varphi'(u)$. Substituting $t = \\varphi(u)$, $dt = \\varphi'(u)\\, du$ turns its length integral back into the original one:
$$\\int \\lVert \\mathbf r'(\\varphi(u)) \\rVert\\, \\varphi'(u)\\, du = \\int \\lVert \\mathbf r'(t) \\rVert\\, dt.$$
In the example, the original tracing is $\\langle 3t, 4t \\rangle$ with speed $5$, and the new one replaces $t$ with $t^2$. The new speed $10t$ is $5$ times $\\frac{d}{dt}t^2 = 2t$.
>>> The two tracings of the segment, side by side
**First tracing, $\\langle 3t, 4t \\rangle$.** Speed $5$ the whole time, for $1$ unit of time: length $5$.

**Second tracing, $\\langle 3t^2, 4t^2 \\rangle$.** It also starts at $(0, 0)$ (at $t = 0$) and ends at $(3, 4)$ (at $t = 1$).
1. **Velocity.** Each component's derivative: $3t^2$ gives $6t$, and $4t^2$ gives $8t$. So $\\mathbf r' = \\langle 6t, 8t \\rangle$.
2. **Speed.** $\\sqrt{36t^2 + 64t^2} = \\sqrt{100t^2} = 10t$. It starts slow ($0$ at $t = 0$) and ends fast ($10$ at $t = 1$).
3. **Length.** $\\int_0^1 10t\\,dt = \\big[5t^2\\big]_0^1 = 5$.

**Why they agree.** At $t = 0.5$, the second tracing is at $(0.75, 1)$, only a quarter of the way along, because $t^2 = 0.25$. It covers the first half slowly and the second half quickly. Slower over some stretches and faster over others, it still covers the same $5$ units of length.
<<<

**The arc length function.** $s(t) = \\displaystyle\\int_a^t \\lVert \\mathbf r'(u) \\rVert\\, du$ is the distance traveled from the start by time $t$. Its derivative is $\\dfrac{ds}{dt} = \\lVert \\mathbf r'(t) \\rVert$, the speed: distance grows at the rate of your speed.

**Perfect squares, one more time.** For $\\mathbf r(t) = \\langle 2t,\\; t^2,\\; \\tfrac13 t^3 \\rangle$:
$$\\lVert \\mathbf r' \\rVert^2 = 4 + 4t^2 + t^4 = (t^2 + 2)^2,$$
so from $t = 0$ to $3$ the length is $\\displaystyle\\int_0^3 (t^2 + 2)\\, dt = 9 + 6 = 15$.
>>> The perfect square, step by step
1. **Velocity.** $2t$ gives $2$; $t^2$ gives $2t$; $\\tfrac13 t^3$ gives $t^2$. So $\\mathbf r' = \\langle 2, 2t, t^2 \\rangle$.
2. **Square of the length.** $2^2 + (2t)^2 + (t^2)^2 = 4 + 4t^2 + t^4$.
3. **Spot the square.** $(t^2 + 2)^2 = t^4 + 2 \\cdot 2 \\cdot t^2 + 4 = t^4 + 4t^2 + 4$. Same thing. Check at $t = 1$: $4 + 4 + 1 = 9 = (1 + 2)^2$ ✓.
4. **Integrate.** $\\int_0^3 (t^2 + 2)\\,dt = \\big[\\tfrac{t^3}{3} + 2t\\big]_0^3 = 9 + 6 = 15$.
<<<
:::

:::check
Find the length of $\\mathbf r(t) = \\langle e^t,\\; e^{-t},\\; \\sqrt2\\, t \\rangle$ for $0 \\le t \\le 1$.
answer: e - 1/e
???
$\\mathbf r' = \\langle e^t,\\; -e^{-t},\\; \\sqrt2 \\rangle$, so $\\lVert \\mathbf r' \\rVert^2 = e^{2t} + e^{-2t} + 2 = (e^t + e^{-t})^2$. Then
$$L = \\int_0^1 (e^t + e^{-t})\\, dt = \\Big[e^t - e^{-t}\\Big]_0^1 = e - \\frac1e.$$
:::

:::idea Integrating a function along a curve
The [[scalar line integral]] of $f$ along $C$ adds up $f \\times$ (length of each tiny piece):
$$\\int_C f\\, ds = \\int_a^b f(\\mathbf r(t))\\, \\lVert \\mathbf r'(t) \\rVert\\, dt.$$

**Where the formula comes from.** Chop $C$ into short pieces of length $\\Delta s_i$ and pick a point $P_i$ on each. On a short piece $f$ barely changes, so the piece contributes about $f(P_i)\\, \\Delta s_i$, and $\\sum f(P_i)\\, \\Delta s_i$ approximates the total. Shrinking the pieces gives $\\int_C f\\, ds$. To compute it, switch to $t$: a piece traced during a time $\\Delta t$ has length $\\Delta s \\approx \\lVert \\mathbf r'(t) \\rVert\\, \\Delta t$ (Oct 2), which is why the speed appears in the formula.
>>> The sum of pieces, with numbers, on the quarter circle
Take $f = x + y^2$ on the quarter circle $\\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\tfrac{\\pi}{2}$ (the next example). Its length is $\\tfrac{\\pi}{2} \\approx 1.571$.

1. **Cut it into $4$ equal arcs.** Each has length $\\tfrac{\\pi}{8} \\approx 0.393$.
2. **Pick each arc's middle point.** The middles are at $t = \\tfrac{\\pi}{16}, \\tfrac{3\\pi}{16}, \\tfrac{5\\pi}{16}, \\tfrac{7\\pi}{16}$. For example, at $t = \\tfrac{\\pi}{16}$ the point is about $(0.981, 0.195)$, where $f \\approx 0.981 + 0.038 = 1.019$.
3. **Multiply and add.** Each arc gives $f(\\text{middle}) \\times 0.393$. The four together total about $1.7919$.
4. **Shrink the pieces.** With $20$ arcs, the total is about $1.7857$. The exact integral, worked out next, is $1 + \\tfrac{\\pi}{4} \\approx 1.7854$.

**Why the speed is in the formula.** Here the speed is $1$, so a time of $\\Delta t$ covers a length of $\\Delta t$. On a curve traced at speed $3$, the same time would cover a length of $3\\,\\Delta t$, and $f$ would count over three times as much curve.
<<<

**Recipe:** (1) parametrize $C$, (2) replace $x, y, z$ in $f$ by the components of $\\mathbf r(t)$, (3) multiply by the speed $\\lVert \\mathbf r'(t) \\rVert$, (4) integrate over the $t$-range.

**Meanings**, each from the sum $\\sum f(P_i)\\, \\Delta s_i$:
- $f = 1$: the sum adds up the lengths of the pieces, so it's the length of $C$.
- $f$ = density (mass per unit length): each piece has mass about $f(P_i)\\, \\Delta s_i$, so the total is the **mass** of a wire shaped like $C$.
- $f \\ge 0$ and $C$ in the $xy$-plane: take the vertical surface standing on $C$ whose height above each point $(x, y)$ of $C$ is $f(x, y)$. Over one piece it's nearly a rectangle with base $\\Delta s_i$ and height $f(P_i)$, so the total is that surface's area.

**Direction doesn't matter.** Tracing $C$ backward passes over the same pieces, with the same lengths and the same values of $f$, so the sum is the same. (That will **not** be true for the vector line integrals on Oct 7.)
>>> Backward gives the same number, checked
Trace the segment from $(0, 0)$ to $(1, 1)$ forward as $\\langle t, t \\rangle$ and backward as $\\langle 1 - t, 1 - t \\rangle$, both for $0 \\le t \\le 1$, with $f = x + y$.
- **Forward.** Speed $\\lVert \\langle 1, 1 \\rangle \\rVert = \\sqrt2$, and $f = 2t$. The integral is $\\int_0^1 2t\\sqrt2\\,dt = \\sqrt2$.
- **Backward.** Speed $\\lVert \\langle -1, -1 \\rangle \\rVert = \\sqrt2$ (a length is never negative), and $f = 2 - 2t$. The integral is $\\int_0^1 (2 - 2t)\\sqrt2\\,dt = \\sqrt2(2 - 1) = \\sqrt2$.

Same answer: the pieces are the same, only visited in the opposite order.
<<<
:::

:::example Along a quarter circle
$\\displaystyle\\int_C (x + y^2)\\, ds$, where $C$ is the quarter circle $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\tfrac\\pi2$.

**Speed.** $\\lVert \\mathbf r' \\rVert = \\lVert \\langle -\\sin t, \\cos t \\rangle \\rVert = 1$.

**Integral.**
$$\\int_0^{\\pi/2} (\\cos t + \\sin^2 t)\\, dt = \\Big[\\sin t\\Big]_0^{\\pi/2} + \\Big[\\tfrac t2 - \\tfrac{\\sin 2t}{4}\\Big]_0^{\\pi/2} = 1 + \\frac\\pi4.$$
>>> Each step of the recipe, with numbers
1. **Speed.** $\\sqrt{\\sin^2 t + \\cos^2 t} = \\sqrt1 = 1$. For example, at $t = 0$, $\\mathbf r' = \\langle 0, 1 \\rangle$, length $1$.
2. **Put the curve into $f$.** Replace $x$ by $\\cos t$ and $y$ by $\\sin t$: $f = \\cos t + \\sin^2 t$. At $t = 0$ (the point $(1, 0)$) that's $1 + 0 = 1$, and $f(1, 0) = 1 + 0^2 = 1$ ✓.
3. **Multiply by the speed.** Times $1$, so the integrand stays $\\cos t + \\sin^2 t$.
4. **First part.** $\\int_0^{\\pi/2} \\cos t\\,dt = \\sin\\tfrac{\\pi}{2} - \\sin 0 = 1$.
5. **Second part.** Use $\\sin^2 t = \\tfrac{1 - \\cos 2t}{2}$, which integrates to $\\tfrac{t}{2} - \\tfrac{\\sin 2t}{4}$. From $0$ to $\\tfrac{\\pi}{2}$: $\\tfrac{\\pi}{4} - \\tfrac{\\sin \\pi}{4} - 0 = \\tfrac{\\pi}{4}$.
6. **Add.** $1 + \\tfrac{\\pi}{4} \\approx 1.785$.
<<<
:::

:::example Along a helix
$\\displaystyle\\int_C z\\, ds$, where $C$ is $\\mathbf r(t) = \\langle \\cos t,\\; \\sin t,\\; t \\rangle$, $0 \\le t \\le 2\\pi$.

$\\lVert \\mathbf r' \\rVert = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt 2$, so
$$\\int_0^{2\\pi} t\\, \\sqrt2\\, dt = \\sqrt2 \\cdot \\frac{(2\\pi)^2}{2} = 2\\sqrt2\\, \\pi^2.$$
>>> Each step, with numbers
1. **Velocity.** $\\mathbf r' = \\langle -\\sin t, \\cos t, 1 \\rangle$. At $t = 0$ it's $\\langle 0, 1, 1 \\rangle$.
2. **Speed.** $\\sin^2 t + \\cos^2 t + 1 = 2$, so the speed is $\\sqrt2 \\approx 1.414$ at every $t$.
3. **Put the curve into $f = z$.** On the helix $z = t$, so $f = t$. At $t = \\pi$ the point is $(-1, 0, \\pi)$ and $f = \\pi$.
4. **Integrate.** $\\int_0^{2\\pi} \\sqrt2\\, t\\,dt = \\sqrt2 \\big[\\tfrac{t^2}{2}\\big]_0^{2\\pi} = \\sqrt2 \\cdot \\tfrac{4\\pi^2}{2} = 2\\sqrt2\\,\\pi^2 \\approx 27.9$.
<<<
:::

:::check
Find $\\displaystyle\\int_C (x + y)\\, ds$, where $C$ is the segment from $(0,0)$ to $(1,1)$.
answer: sqrt(2)
???
Use $\\mathbf r(t) = \\langle t, t \\rangle$, $0 \\le t \\le 1$, with $\\lVert \\mathbf r' \\rVert = \\sqrt2$:
$$\\int_0^1 (t + t)\\sqrt 2\\, dt = \\sqrt2 \\int_0^1 2t\\, dt = \\sqrt 2.$$
:::

:::check
If you reverse the direction of $C$, the value of $\\int_C f\\, ds$:
- [x] stays the same
- [ ] flips sign
  why: That's what happens to $\\int_C \\mathbf F \\cdot d\\mathbf r$ (Oct 7), not $\\int_C f\\, ds$. Here $ds$ is a length, which is always positive.
- [ ] doubles
  why: You add up the same pieces with the same values of $f$, just in the opposite order, so nothing doubles.
???
It stays the same. $ds$ is a length, which is always positive, so the direction you walk doesn't matter.
:::

:::idea Mass and average value
**Mass of a wire** with density $\\rho(x,y,z)$: $\\displaystyle m = \\int_C \\rho\\, ds$. Density is mass per unit length, so a piece of length $\\Delta s$ has mass about $\\rho\\, \\Delta s$, and adding the pieces gives the integral.

**Average value of $f$ along $C$:** $\\displaystyle \\frac{1}{L}\\int_C f\\, ds$, the total divided by the length. Why: the average is the constant value that would give the same total. If $f$ were a constant $\\bar f$, the total would be $\\int_C \\bar f\\, ds = \\bar f L$. Setting $\\bar f L = \\int_C f\\, ds$ and solving gives the formula, just like Calc I's $\\frac{1}{b - a}\\int_a^b f\\, dx$.

**Sanity check for any mass problem.** The mass must be between (smallest density) $\\times\\, L$ and (largest density) $\\times\\, L$. Why: at every point $\\rho_{\\min} \\le \\rho \\le \\rho_{\\max}$, so the integrals satisfy $\\int_C \\rho_{\\min}\\, ds \\le \\int_C \\rho\\, ds \\le \\int_C \\rho_{\\max}\\, ds$, which is $\\rho_{\\min} L \\le m \\le \\rho_{\\max} L$.
>>> The average and the sanity check, worked out on the helix
**Average height.** Use the helix $\\langle \\cos t, \\sin t, t \\rangle$, $0 \\le t \\le 2\\pi$, from the example above.
1. **The total.** $\\int_C z\\,ds = 2\\sqrt2\\,\\pi^2 \\approx 27.9$.
2. **The length.** Speed $\\sqrt2$ for a time of $2\\pi$: $L = 2\\sqrt2\\,\\pi \\approx 8.89$.
3. **Divide.** $\\tfrac{2\\sqrt2\\,\\pi^2}{2\\sqrt2\\,\\pi} = \\pi \\approx 3.14$.
4. **Why that makes sense.** The height runs evenly from $z = 0$ to $z = 2\\pi$ at the same speed throughout, so every height gets the same amount of curve. The average is the middle, $\\pi$.

**Sanity check.** If $z$ were a density, the smallest value is $0$ and the largest is $2\\pi$. So the total must be between $0 \\times 8.89 = 0$ and $2\\pi \\times 8.89 \\approx 55.8$. The answer $27.9$ is.
<<<
:::

:::check
A wire lies along the segment from $(0, 0)$ to $(2, 0)$, with density $\\rho = 1 + x$. What is its mass?
answer: 4
???
$\\mathbf r(t) = \\langle t, 0 \\rangle$, $0 \\le t \\le 2$, with $\\lVert \\mathbf r' \\rVert = 1$:
$$m = \\int_0^2 (1 + t)\\, dt = 2 + 2 = 4.$$
Sanity check: the density runs from $1$ to $3$ and $L = 2$, so the mass is between $2$ and $6$. ✓
:::

:::summary Summary
- $ds = \\lVert \\mathbf r'(t) \\rVert\\, dt$, and length doesn't depend on the parametrization.
- $\\displaystyle\\int_C f\\, ds = \\int_a^b f(\\mathbf r(t))\\, \\lVert \\mathbf r'(t) \\rVert\\, dt$ gives mass, length (when $f = 1$), and averages.
- Reversing direction **doesn't** change $\\int_C f\\, ds$.

**Common mistakes:**
- Forgetting the factor $\\lVert \\mathbf r'(t) \\rVert$.
- Leaving $x$, $y$, $z$ in the integrand instead of substituting $\\mathbf r(t)$.
- Not checking that the answer falls between (min density) $\\times\\, L$ and (max density) $\\times\\, L$.
:::
`;export{e as default};