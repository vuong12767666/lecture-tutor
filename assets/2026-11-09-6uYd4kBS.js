var e=`---
title: Green's Theorem
date: 2026-11-09
stewart: 16.4
source: OpenStax Calculus Volume 3, §6.4 Green's Theorem
---

:::recap Last time
- On Oct 7, the [[line integral|line integral of a vector field]] $\\mathbf F = \\langle P, Q \\rangle$ along a curve $C$ was $\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_C P\\, dx + Q\\, dy$: the work done by $\\mathbf F$ along $C$.
- On Oct 9 and 14, a [[conservative]] field had $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$ around every [[closed curve]].
:::

:::check
Warm-up: compute $\\displaystyle\\oint_C -y\\, dx + x\\, dy$ around the unit circle, counterclockwise, using $x = \\cos t$, $y = \\sin t$, $0 \\le t \\le 2\\pi$.
answer: 2pi
???
$dx = -\\sin t\\, dt$ and $dy = \\cos t\\, dt$, so the integrand is $(-\\sin t)(-\\sin t) + \\cos t \\cos t = \\sin^2 t + \\cos^2 t = 1$. The integral is $\\int_0^{2\\pi} 1\\, dt = 2\\pi$.
:::

:::question Today
The warm-up came out to $2\\pi$, which is twice the area of the unit disk. Is that a coincidence? How is a line integral around a closed curve related to what happens inside the curve?
:::

:::idea Green's Theorem
Let $C$ be a simple closed curve (it doesn't cross itself) going **counterclockwise**, and let $D$ be the region inside it. If $P$ and $Q$ have continuous partial derivatives on $D$ and $C$, then
$$\\oint_C P\\, dx + Q\\, dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA.$$
Counterclockwise is called the **positive orientation**: walking along $C$ that way, the region $D$ is on your left.

**What it says.** The left side adds up how much $\\mathbf F$ pushes you along the boundary. The right side adds up $Q_x - P_y$ over the inside, and $Q_x - P_y$ measures how much $\\mathbf F$ swirls around each point. Green's Theorem says the total push around the edge equals the total swirl inside.

**The warm-up, checked.** For $P = -y$ and $Q = x$: $Q_x - P_y = 1 - (-1) = 2$, so the right side is $2 \\times (\\text{area of the unit disk}) = 2\\pi$. Not a coincidence.
>>> Why $Q_x - P_y$ measures swirl
**What "push along a path" means.** For a field $\\mathbf F = \\langle P, Q \\rangle$, walking a short step $\\Delta x$ to the right picks up about $P \\times \\Delta x$ (the part of $\\mathbf F$ pointing right, times the distance). Walking up a step $\\Delta y$ picks up about $Q \\times \\Delta y$. Walking left or down picks up the negative.

**Around a tiny square.** Take a square with corners $(x, y)$ and $(x + h, y + h)$, walked counterclockwise: right along the bottom, up the right side, left along the top, down the left side. Use $\\mathbf F$'s value at the middle of each side.
- **Bottom** (right, distance $h$): $P_{\\text{bottom}} \\times h$.
- **Top** (left, distance $h$): $-P_{\\text{top}} \\times h$.
- **Right side** (up): $Q_{\\text{right}} \\times h$.
- **Left side** (down): $-Q_{\\text{left}} \\times h$.

**Group them.** Bottom plus top is $-(P_{\\text{top}} - P_{\\text{bottom}})\\,h$. Going up a height $h$, $P$ changes by about $P_y \\times h$ ($P_y$ is how fast $P$ changes when only $y$ changes, with $x$ kept at one number), so this is about $-P_y\\,h^2$. Right plus left is $(Q_{\\text{right}} - Q_{\\text{left}})\\,h \\approx Q_x\\,h^2$. Total: $(Q_x - P_y)\\,h^2$, which is $Q_x - P_y$ times the square's area. So $Q_x - P_y$ is the push around a tiny loop, per unit of area: how much the field swirls there.

**With numbers.** For $\\mathbf F = \\langle -y, x \\rangle$ around the square $[0, 1] \\times [0, 1]$:
- bottom ($y = 0$, so $P = 0$): $0$;
- right side ($x = 1$, so $Q = 1$, going up $1$): $1$;
- top ($y = 1$, so $P = -1$, going left $1$): $(-1) \\times (-1) = 1$;
- left side ($x = 0$, so $Q = 0$): $0$.

Total $2$. And $Q_x - P_y = 1 - (-1) = 2$, times the area $1$, is $2$ ✓.
<<<
:::

:::theorem Green's Theorem
For a positively oriented, piecewise smooth, simple closed curve $C$ bounding a region $D$, and $P$, $Q$ with continuous partial derivatives on an open region containing $D$:
$$\\oint_C P\\, dx + Q\\, dy = \\iint_D (Q_x - P_y)\\, dA.$$

**Why:** cut $D$ into tiny squares. Around each one, the circulation is about $(Q_x - P_y)\\,\\Delta A$ (shown in the Go deeper above), so adding them gives the double integral. In the sum of circulations, every inside edge is shared by two squares and is traveled once in each direction, so those pieces cancel. Only the edges on the outer boundary are left, and they add up to $\\oint_C$.
:::

:::check
Use Green's Theorem to compute $\\displaystyle\\oint_C xy\\, dx + x^2\\, dy$, where $C$ is the boundary of the square $0 \\le x \\le 1$, $0 \\le y \\le 1$, counterclockwise.
answer: 1/2
???
$P = xy$ and $Q = x^2$, so $Q_x - P_y = 2x - x = x$. Then
$$\\iint_D x\\, dA = \\int_0^1\\int_0^1 x\\, dy\\, dx = \\int_0^1 x\\, dx = \\frac12.$$
:::

:::idea Using it: hard line integral, easy double integral
**Example.** Compute $\\displaystyle\\oint_C (x^2 - y)\\, dx + (x + y^3)\\, dy$, where $C$ is the circle $x^2 + y^2 = 4$, counterclockwise.
1. **Identify $P$ and $Q$:** $P = x^2 - y$ and $Q = x + y^3$.
2. **The integrand inside:** $Q_x - P_y = 1 - (-1) = 2$.
3. **Green's Theorem:** $\\displaystyle\\oint_C = \\iint_D 2\\, dA = 2 \\cdot \\pi \\cdot 2^2 = 8\\pi$.
>>> Each step, and why the hard parts disappeared
**Step 2.** $Q_x$ is how fast $Q = x + y^3$ changes when only $x$ changes: the $x$ part changes at rate $1$, and $y^3$ doesn't change at all (it has no $x$), so $Q_x = 1$. $P_y$ is how fast $P = x^2 - y$ changes when only $y$ changes: $x^2$ doesn't change, and $-y$ changes at rate $-1$, so $P_y = -1$. So $Q_x - P_y = 1 - (-1) = 2$.

**Where did $x^2$ and $y^3$ go?** The term $x^2\\, dx$ only pushes left and right, by an amount that depends only on where you are left-to-right. Going around a closed loop, every bit of push going right is undone by the matching push coming back left at the same $x$, so it adds to $0$. Another way to see it: $x^2\\, dx$ is the change in $\\tfrac{x^3}{3}$, and a closed loop ends where it starts, so the total change is $0$. The same goes for $y^3\\, dy$.

**Step 3.** The region inside the circle $x^2 + y^2 = 4$ is the disk of radius $2$, with area $\\pi \\cdot 2^2 = 4\\pi$. The function being added up is the constant $2$, so the total is $2 \\times 4\\pi = 8\\pi$.

**Checking it the long way.** Walk the circle with $x = 2\\cos t$, $y = 2\\sin t$, so $dx = -2\\sin t\\, dt$ and $dy = 2\\cos t\\, dt$. The line integral becomes $\\int_0^{2\\pi}\\big[(4\\cos^2 t - 2\\sin t)(-2\\sin t) + (2\\cos t + 8\\sin^3 t)(2\\cos t)\\big]\\, dt$. A computer gives about $25.13$, and $8\\pi \\approx 25.13$ ✓.
<<<

**When to use Green's Theorem:**
- The curve is **closed** and goes counterclockwise (if it's clockwise, the answer is the negative).
- $Q_x - P_y$ is simpler than the line integral, often a constant or something easy in polar.
- $P$ and $Q$ have no trouble points (like division by zero) inside $C$. The next lecture deals with those.
:::

:::check
$C$ is the circle $x^2 + y^2 = 9$ traced **clockwise**. What is $\\displaystyle\\oint_C -y\\, dx + x\\, dy$?
- [x] $-18\\pi$
- [ ] $18\\pi$
  why: That's the counterclockwise answer. Going around the other way flips the sign of every piece of the line integral.
- [ ] $9\\pi$
  why: $Q_x - P_y = 2$, not $1$, so the double integral is twice the area: $2 \\cdot 9\\pi$.
- [ ] $0$
  why: That would need $Q_x - P_y = 0$. Here it's $2$, so the field swirls and the circulation isn't $0$.
???
Counterclockwise, Green's Theorem gives $\\iint_D 2\\, dA = 2 \\cdot 9\\pi = 18\\pi$. Clockwise is the reverse direction, so the answer is $-18\\pi$.
:::

:::idea Area from a line integral
Pick $P$ and $Q$ with $Q_x - P_y = 1$. Then Green's Theorem says $\\oint_C P\\, dx + Q\\, dy = \\iint_D 1\\, dA$, the area of $D$. Three common choices:
$$A = \\oint_C x\\, dy = -\\oint_C y\\, dx = \\frac12\\oint_C x\\, dy - y\\, dx.$$

**Example: the area of an ellipse.** $C$: $x = a\\cos t$, $y = b\\sin t$, $0 \\le t \\le 2\\pi$ (counterclockwise).
$$A = \\frac12\\int_0^{2\\pi}\\big(a\\cos t \\cdot b\\cos t - b\\sin t \\cdot (-a\\sin t)\\big)\\, dt = \\frac12\\int_0^{2\\pi} ab\\, dt = \\pi ab.$$
>>> Each step, worked out
**Why these three choices give the area.** Green's Theorem says $\\oint P\\, dx + Q\\, dy = \\iint (Q_x - P_y)\\, dA$. If $Q_x - P_y = 1$, the right side is $\\iint 1\\, dA$, the area.
- $\\oint x\\, dy$: here $P = 0$, $Q = x$, so $Q_x - P_y = 1 - 0 = 1$ ✓.
- $-\\oint y\\, dx$: here $P = -y$, $Q = 0$, so $Q_x - P_y = 0 - (-1) = 1$ ✓.
- The third is the average of the first two, so it works too.

**The ellipse.** Walk it with $x = a\\cos t$, $y = b\\sin t$. Then $dx = -a\\sin t\\, dt$ and $dy = b\\cos t\\, dt$, so
$$x\\, dy - y\\, dx = a\\cos t \\cdot b\\cos t\\, dt - b\\sin t \\cdot (-a\\sin t)\\, dt = ab(\\cos^2 t + \\sin^2 t)\\, dt = ab\\, dt.$$
Half of $\\int_0^{2\\pi} ab\\, dt = 2\\pi ab$ is $\\pi ab$. For a circle ($a = b = r$) that's $\\pi r^2$ ✓, and it matches Nov 2, where the same area came from stretching a disk.

**Why this is useful.** It finds an area by walking only around the edge, without describing the inside. That's how a planimeter works: a device that measures the area of a shape on a map by tracing its outline.
<<<
:::

:::check
Use $A = \\tfrac12\\oint_C x\\, dy - y\\, dx$ to find the area inside the ellipse $x = 3\\cos t$, $y = 2\\sin t$, $0 \\le t \\le 2\\pi$.
answer: 6pi
???
With $a = 3$ and $b = 2$, $x\\, dy - y\\, dx = 6\\, dt$, so $A = \\tfrac12 \\cdot 6 \\cdot 2\\pi = 6\\pi$.
:::

:::summary Summary
- **Green's Theorem:** $\\displaystyle\\oint_C P\\, dx + Q\\, dy = \\iint_D (Q_x - P_y)\\, dA$ for a counterclockwise simple closed curve $C$ around $D$.
- $Q_x - P_y$ is the circulation per unit area. Around tiny squares, inside edges cancel, leaving the outer boundary.
- Use it when the curve is closed and $Q_x - P_y$ is simpler. Clockwise flips the sign.
- **Area:** $A = \\oint_C x\\, dy = -\\oint_C y\\, dx = \\tfrac12\\oint_C x\\, dy - y\\, dx$.

**Common mistakes:**
- Computing $P_x$ or $Q_y$ instead of $Q_x - P_y$, or subtracting in the wrong order.
- Using Green's Theorem on a curve that isn't closed.
- Forgetting the sign change for a clockwise curve.
:::
`;export{e as default};