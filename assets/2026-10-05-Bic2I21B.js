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

**The answer doesn't depend on how you trace the curve.** The segment from $(0,0)$ to $(3,4)$ can also be traced as $\\langle 3t^2, 4t^2 \\rangle$, $0 \\le t \\le 1$. Now $\\lVert \\mathbf r' \\rVert = \\lVert \\langle 6t, 8t \\rangle \\rVert = 10t$, and $\\int_0^1 10t\\, dt = 5$, the same answer.
+++
**The arc length function.** $s(t) = \\displaystyle\\int_a^t \\lVert \\mathbf r'(u) \\rVert\\, du$ is the distance traveled from the start by time $t$. Its derivative is $\\dfrac{ds}{dt} = \\lVert \\mathbf r'(t) \\rVert$, the speed. That's just "distance changes at the rate of your speed."

**Perfect squares, one more time.** For $\\mathbf r(t) = \\langle 2t,\\; t^2,\\; \\tfrac13 t^3 \\rangle$:
$$\\lVert \\mathbf r' \\rVert^2 = 4 + 4t^2 + t^4 = (t^2 + 2)^2,$$
so from $t = 0$ to $3$ the length is $\\displaystyle\\int_0^3 (t^2 + 2)\\, dt = 9 + 6 = 15$.
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

**Recipe:** (1) parametrize $C$, (2) replace $x, y, z$ in $f$ by the components of $\\mathbf r(t)$, (3) multiply by the speed $\\lVert \\mathbf r'(t) \\rVert$, (4) integrate over the $t$-range.

**Meanings:**
- $f = 1$: the length of $C$.
- $f$ = density: the **mass** of a wire shaped like $C$.
- $f \\ge 0$ and $C$ in the $xy$-plane: the area of the vertical surface standing on $C$ whose height above each point $(x, y)$ of $C$ is $f(x, y)$.
+++
**Where the formula comes from.** Chop $C$ into pieces of length $\\Delta s_i$ and pick a point $P_i$ on each. Then $\\sum f(P_i)\\, \\Delta s_i$ approximates the total, and in the limit you get $\\int_C f\\, ds$. Changing to $t$: a piece traced in time $\\Delta t$ has length $\\Delta s \\approx \\lVert \\mathbf r'(t) \\rVert\\, \\Delta t$, which is why the speed shows up.

**Direction doesn't matter.** Tracing $C$ backward doesn't change any piece's length or the value of $f$ on it, so $\\int_C f\\, ds$ is the same either way. (That will **not** be true for the vector line integrals on Oct 7.)
:::

:::example Along a quarter circle
$\\displaystyle\\int_C (x + y^2)\\, ds$, where $C$ is the quarter circle $\\mathbf r(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le \\tfrac\\pi2$.

**Speed.** $\\lVert \\mathbf r' \\rVert = \\lVert \\langle -\\sin t, \\cos t \\rangle \\rVert = 1$.

**Integral.**
$$\\int_0^{\\pi/2} (\\cos t + \\sin^2 t)\\, dt = \\Big[\\sin t\\Big]_0^{\\pi/2} + \\Big[\\tfrac t2 - \\tfrac{\\sin 2t}{4}\\Big]_0^{\\pi/2} = 1 + \\frac\\pi4.$$
:::

:::example Along a helix
$\\displaystyle\\int_C z\\, ds$, where $C$ is $\\mathbf r(t) = \\langle \\cos t,\\; \\sin t,\\; t \\rangle$, $0 \\le t \\le 2\\pi$.

$\\lVert \\mathbf r' \\rVert = \\sqrt{\\sin^2 t + \\cos^2 t + 1} = \\sqrt 2$, so
$$\\int_0^{2\\pi} t\\, \\sqrt2\\, dt = \\sqrt2 \\cdot \\frac{(2\\pi)^2}{2} = 2\\sqrt2\\, \\pi^2.$$
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
**Mass of a wire** with density $\\rho(x,y,z)$: $\\displaystyle m = \\int_C \\rho\\, ds$.

**Average value of $f$ along $C$:** $\\displaystyle \\frac{1}{L}\\int_C f\\, ds$, the total divided by the length.

**Sanity check for any mass problem.** The mass must be between (smallest density) $\\times\\, L$ and (largest density) $\\times\\, L$.
+++
**Example: average height on a helix.** On the helix above, $\\int_C z\\, ds = 2\\sqrt2\\,\\pi^2$ and $L = \\int_0^{2\\pi} \\sqrt2\\, dt = 2\\sqrt2\\,\\pi$. So the average height is $\\dfrac{2\\sqrt2\\,\\pi^2}{2\\sqrt2\\,\\pi} = \\pi$. That makes sense: the helix rises steadily from $z = 0$ to $z = 2\\pi$ at constant speed, so it spends equal length at every height, and the average is the midpoint, $\\pi$.
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