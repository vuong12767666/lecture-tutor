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
Take a tiny square with corners $(x, y)$ and $(x + h, y + h)$, and go around it counterclockwise. Approximate $\\mathbf F$ on each side by its value at that side's middle.
- **Bottom** (going right, $dx = h$, $dy = 0$): about $P$ at the bottom $\\times\\, h$.
- **Top** (going left, $dx = -h$): about $-P$ at the top $\\times\\, h$.
- **Right side** (going up, $dy = h$): about $Q$ on the right $\\times\\, h$.
- **Left side** (going down, $dy = -h$): about $-Q$ on the left $\\times\\, h$.

Bottom plus top is $-(P_{\\text{top}} - P_{\\text{bottom}})\\,h \\approx -P_y\\,h \\cdot h$, because $P$ changes by about $P_y\\,h$ over a height $h$. Right plus left is $(Q_{\\text{right}} - Q_{\\text{left}})\\,h \\approx Q_x\\,h \\cdot h$. So the circulation around the tiny square is about $(Q_x - P_y)\\,h^2$: the swirl per unit area, times the square's area.

**With numbers.** For $\\mathbf F = \\langle -y, x \\rangle$ around the square $[0, 1] \\times [0, 1]$: bottom $\\int_0^1 0\\, dx = 0$; right $\\int_0^1 1\\, dy = 1$; top (from $x = 1$ to $0$ at $y = 1$) $\\int_1^0 -1\\, dx = 1$; left (at $x = 0$) $0$. Total $2$, which is $Q_x - P_y = 2$ times the area $1$ ✓.
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
**Step 2.** $Q_x = \\tfrac{\\partial}{\\partial x}(x + y^3) = 1$, since $y^3$ is a constant when only $x$ changes. $P_y = \\tfrac{\\partial}{\\partial y}(x^2 - y) = -1$, since $x^2$ is a constant when only $y$ changes. So $Q_x - P_y = 1 - (-1) = 2$.

**Where did $x^2$ and $y^3$ go?** $x^2\\, dx$ is the $dx$-part of a field whose $P$ depends only on $x$, so it can't swirl ($P_y = 0$). The same goes for $y^3\\, dy$. Around a closed curve such terms always add to $0$, which you can also see from the Fundamental Theorem (Oct 9): $x^2\\, dx$ is the change in $\\tfrac{x^3}{3}$, and a closed curve ends where it starts.

**Step 3.** $D$ is the disk of radius $2$, with area $4\\pi$. A constant integrand just multiplies the area: $2 \\cdot 4\\pi = 8\\pi$.

**Checking it the long way.** With $x = 2\\cos t$, $y = 2\\sin t$, $dx = -2\\sin t\\, dt$, $dy = 2\\cos t\\, dt$, the line integral is $\\int_0^{2\\pi}\\big[(4\\cos^2 t - 2\\sin t)(-2\\sin t) + (2\\cos t + 8\\sin^3 t)(2\\cos t)\\big]\\, dt$. Done numerically, it gives about $25.13$, and $8\\pi \\approx 25.13$ ✓.
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
**Why these choices work.** For $\\oint x\\, dy$: $P = 0$, $Q = x$, so $Q_x - P_y = 1 - 0 = 1$. For $-\\oint y\\, dx$: $P = -y$, $Q = 0$, so $Q_x - P_y = 0 - (-1) = 1$. The third is the average of the first two.

**The ellipse.** $dx = -a\\sin t\\, dt$ and $dy = b\\cos t\\, dt$. So
$$x\\, dy - y\\, dx = a\\cos t \\cdot b\\cos t\\, dt - b\\sin t \\cdot (-a\\sin t)\\, dt = ab(\\cos^2 t + \\sin^2 t)\\, dt = ab\\, dt.$$
Half of $\\int_0^{2\\pi} ab\\, dt = 2\\pi ab$ is $\\pi ab$. That matches Nov 2, where the same area came from stretching a disk.

**Why this is useful.** It finds an area by walking around the edge, without describing the inside. That's how a planimeter works: a device that measures the area of a shape on a map by tracing its outline.
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