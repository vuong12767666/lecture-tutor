var e=`---
title: Green's Theorem and conservative fields in 2D; flux in 2D
date: 2026-11-11
stewart: 16.4, 16.5
source: OpenStax Calculus Volume 3, §6.4 Green's Theorem
---

:::recap Last time
- **Green's Theorem:** $\\displaystyle\\oint_C P\\, dx + Q\\, dy = \\iint_D (Q_x - P_y)\\, dA$ for a counterclockwise simple closed curve $C$ around $D$.
- $Q_x - P_y$ is the circulation per unit area: how much $\\mathbf F$ swirls around each point.
:::

:::check
Warm-up: for $\\mathbf F = \\langle 2xy,\\ x^2 \\rangle$, what is $Q_x - P_y$?
answer: 0
???
$Q = x^2$, so $Q_x = 2x$. $P = 2xy$, so $P_y = 2x$. The difference is $0$. (This $\\mathbf F$ is $\\nabla(x^2 y)$, a gradient field.)
:::

:::question Today
On Oct 14, matching cross-partials ($Q_x = P_y$) on a region with no holes meant a field was conservative. Green's Theorem explains why. What changes when the region has a hole? And how do you measure how much fluid flows *across* a curve instead of along it?
:::

:::idea Why the cross-partials test works
Suppose $Q_x = P_y$ everywhere on a [[simply connected]] region $R$ (one with no holes), with continuous partial derivatives. Take any simple closed curve $C$ in $R$, counterclockwise.
1. **The inside of $C$ is in $R$.** Since $R$ has no holes, everything $C$ encloses belongs to $R$, so $P$ and $Q$ are fine there.
2. **Green's Theorem applies:** $\\oint_C P\\, dx + Q\\, dy = \\iint_D (Q_x - P_y)\\, dA = \\iint_D 0\\, dA = 0$.
3. **Zero around every loop means [[path independent|path independence]],** which (Oct 14) means $\\mathbf F$ is [[conservative]].
>>> Each step, worked out
**Step 1: why "no holes" matters.** Green's Theorem adds up $Q_x - P_y$ over every point *inside* the loop, so it needs $\\mathbf F$ to make sense at every one of those points. If the region had a hole (a point where $\\mathbf F$ isn't defined, like where it divides by zero), a loop could go around the hole, and the inside would include a point where $\\mathbf F$ breaks. With no holes, whatever the loop encloses is part of the region.

**Step 2.** $Q_x - P_y$ is $0$ at every point inside, so adding it up over the inside gives $0$, whatever shape the inside has.

**Step 3: from loops to paths.** Take two different paths $C_1$ and $C_2$ from point $A$ to point $B$. Go out along $C_1$, then come back along $C_2$ backwards: that's a closed loop, so its total is $0$. The loop's total is (along $C_1$) minus (along $C_2$), because walking a path backwards flips the sign. So (along $C_1$) $=$ (along $C_2$): every path from $A$ to $B$ gives the same value. That's what "path independent" means, and it's the same as being conservative (Oct 14).

**The warm-up's field.** $\\mathbf F = \\langle 2xy, x^2 \\rangle$ is defined everywhere and has $Q_x - P_y = 0$, so it's conservative. Indeed $f = x^2 y$ has $f_x = 2xy$ and $f_y = x^2$.

**For example,** for $\\mathbf F = \\langle 2xy, x^2 \\rangle$, going from $(0, 0)$ to $(1, 1)$ straight along $y = x$, or along the $x$-axis and then straight up, both give $f(1, 1) - f(0, 0) = 1 - 0 = 1$ with $f = x^2 y$.
<<<
:::

:::check
$\\mathbf F = \\langle 2xy,\\ x^2 + 3 \\rangle$. What is $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around the circle $x^2 + y^2 = 25$, counterclockwise?
- [x] $0$
- [ ] $25\\pi$
  why: That's the circle's area, which would matter only if $Q_x - P_y$ were $1$. Here $Q_x - P_y = 2x - 2x = 0$.
- [ ] $50\\pi$
  why: That would need $Q_x - P_y = 2$, like $\\langle -y, x \\rangle$. This field has $Q_x - P_y = 0$.
- [ ] It can't be found without parametrizing the circle.
  why: Green's Theorem turns it into $\\iint_D (Q_x - P_y)\\, dA$, and that integrand is $0$, so no parametrization is needed.
???
$Q_x = 2x$ and $P_y = 2x$, so $Q_x - P_y = 0$ everywhere, and $\\mathbf F$ is defined everywhere. Green's Theorem gives $\\iint_D 0\\, dA = 0$. ($\\mathbf F = \\nabla(x^2 y + 3y)$.)
:::

:::idea Regions with holes
The field
$$\\mathbf F = \\left\\langle \\frac{-y}{x^2 + y^2},\\ \\frac{x}{x^2 + y^2} \\right\\rangle$$
has $Q_x - P_y = 0$ wherever it's defined, which is everywhere except the origin. But around the unit circle,
$$\\oint_C \\mathbf F \\cdot d\\mathbf r = 2\\pi \\ne 0.$$
**No contradiction:** Green's Theorem needs $\\mathbf F$ to be defined at every point inside $C$, and the origin is inside the unit circle. The cross-partials test needs a region with no holes, and the plane without the origin has a hole.
>>> Each computation, worked out
**$P_y$, by the quotient rule.** $P = \\dfrac{-y}{x^2 + y^2}$. With only $y$ changing, the top $-y$ changes at rate $-1$ and the bottom $x^2 + y^2$ at rate $2y$. The quotient rule ((rate of top) $\\times$ bottom $-$ top $\\times$ (rate of bottom), over bottom squared) gives
$$P_y = \\frac{(-1)(x^2 + y^2) - (-y)(2y)}{(x^2 + y^2)^2} = \\frac{-x^2 - y^2 + 2y^2}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}.$$

**$Q_x$.** $Q = \\dfrac{x}{x^2 + y^2}$, with only $x$ changing: top rate $1$, bottom rate $2x$:
$$Q_x = \\frac{(1)(x^2 + y^2) - x(2x)}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}.$$
They're the same, so $Q_x - P_y = 0$ everywhere except the origin (where the field isn't defined). Check at $(1, 2)$: both are $\\tfrac{4 - 1}{25} = \\tfrac{3}{25}$ ✓.

**Around the unit circle.** Walk it with $x = \\cos t$, $y = \\sin t$. On it, $x^2 + y^2 = 1$, so the field is just $\\langle -\\sin t, \\cos t \\rangle$. The steps are $dx = -\\sin t\\, dt$ and $dy = \\cos t\\, dt$. The integrand is $(-\\sin t)(-\\sin t) + \\cos t\\cos t = 1$, so the total is $\\int_0^{2\\pi} 1\\, dt = 2\\pi$, not $0$.
<<<

**Green's Theorem with a hole.** For the region $D$ between an outer curve $C_1$ and an inner curve $C_2$,
$$\\oint_{C_1,\\ \\text{counterclockwise}} + \\oint_{C_2,\\ \\text{clockwise}} = \\iint_D (Q_x - P_y)\\, dA.$$
The boundary is traced so that $D$ is always on your left: the outer curve counterclockwise and the inner one clockwise.

**What it gives for this field.** If $C_1$ is any simple closed curve around the origin and $C_2$ is a small circle around the origin inside it, then $D$ (between them) has no bad points and $Q_x - P_y = 0$ on it. So
$$\\oint_{C_1} \\mathbf F \\cdot d\\mathbf r = \\oint_{C_2,\\ \\text{counterclockwise}} \\mathbf F \\cdot d\\mathbf r = 2\\pi.$$
Every counterclockwise loop around the origin gives $2\\pi$, and every loop that doesn't go around it gives $0$.
>>> Each step of the hole argument, worked out
**Why the inner curve goes clockwise.** The region between the two curves is a ring with a hole. Cut it with two short straight cuts from the inner curve to the outer one, splitting it into two pieces with no holes. Use ordinary Green's Theorem on each piece, going counterclockwise around each. Each cut is walked once in each direction (once by each piece), so the cuts cancel. What's left is the outer curve walked counterclockwise and the inner curve walked clockwise (going counterclockwise around a piece means going "backwards" along its inner edge).

**Moving the inner curve to the other side.** Walking the inner curve clockwise gives the negative of walking it counterclockwise. So Green's Theorem says (outer, counterclockwise) $-$ (inner, counterclockwise) $= \\iint 0\\, dA = 0$. That means (outer) $=$ (inner): any two counterclockwise loops around the origin give the same total.

**The inner curve can be any small circle.** For a circle of radius $a$ around the origin, with $x = a\\cos t$, $y = a\\sin t$: the field divides by $x^2 + y^2 = a^2$, and the steps $x\\, dy - y\\, dx$ bring in $a^2\\, dt$. The $a^2$'s cancel, leaving $\\int_0^{2\\pi} 1\\, dt = 2\\pi$. So every circle around the origin gives $2\\pi$, and so does every other counterclockwise loop around it.

**Loops that don't go around the origin.** Then the origin isn't inside, ordinary Green's Theorem applies, and the total is $\\iint 0\\, dA = 0$. For example, the circle of radius $1$ centered at $(3, 0)$ gives $0$.
<<<
:::

:::check
For $\\mathbf F = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2} \\right\\rangle$, what is $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around the ellipse $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$, counterclockwise?
- [x] $2\\pi$
- [ ] $0$
  why: That would follow from Green's Theorem only if the origin weren't inside. It is, and $\\mathbf F$ is undefined there.
- [ ] $12\\pi$
  why: The ellipse's area ($6\\pi$) doesn't matter here: $Q_x - P_y = 0$ between the ellipse and a small circle, so the answer is the small circle's $2\\pi$.
- [ ] It depends on the shape, so it needs a parametrization.
  why: The hole argument shows every counterclockwise simple loop around the origin gives the same value, $2\\pi$.
???
The ellipse goes once around the origin, counterclockwise. Between it and a small circle around the origin, $Q_x - P_y = 0$, so the ellipse gives the same value as the circle: $2\\pi$.
:::

:::idea Flux across a curve
The line integral $\\oint_C \\mathbf F \\cdot d\\mathbf r$ measures flow **along** $C$. The [[flux]] measures flow **across** $C$:
$$\\text{flux} = \\oint_C \\mathbf F \\cdot \\mathbf n\\, ds,$$
where $\\mathbf n$ is the outward unit normal. If $\\mathbf F$ is the velocity of a fluid in the plane, this is the rate at which fluid leaves the region inside $C$ (negative if more comes in).

**How to compute it.** For a counterclockwise curve $\\mathbf r(t) = \\langle x(t), y(t) \\rangle$, the outward normal times $ds$ is $\\langle y'(t),\\ -x'(t) \\rangle\\, dt$, so
$$\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\oint_C P\\, dy - Q\\, dx.$$
>>> Why $\\langle y', -x' \\rangle\\, dt$ is the outward normal times $ds$
**What's needed.** Flux adds up the part of $\\mathbf F$ pointing straight out of the curve, times the length of each small piece of curve. So you need an arrow pointing straight out ($\\mathbf n$) and the length of each small step ($ds$).

**Perpendicular to the curve.** The direction you're walking is $\\langle x', y' \\rangle$. The arrow $\\langle y', -x' \\rangle$ has dot product $y'x' - x'y' = 0$ with it, so it's perpendicular to the curve.

**Outward, not inward.** $\\langle y', -x' \\rangle$ is your walking direction turned $90^\\circ$ to the right. Going counterclockwise, the region is on your left, so your right is outside. Example: on the unit circle at $t = 0$ you're at $(1, 0)$, walking up, $\\langle x', y' \\rangle = \\langle 0, 1 \\rangle$; turned to the right that's $\\langle 1, 0 \\rangle$, pointing out ✓.

**Times $ds$.** $\\langle y', -x' \\rangle$ has the same length as $\\langle x', y' \\rangle$, your speed $|\\mathbf r'|$. The unit normal is $\\tfrac{\\langle y', -x' \\rangle}{|\\mathbf r'|}$, and the length of a small step is $ds = |\\mathbf r'|\\, dt$. Multiplying, the $|\\mathbf r'|$'s cancel: $\\mathbf n\\, ds = \\langle y', -x' \\rangle\\, dt$. No square roots needed.

**Then the formula.** $\\mathbf F \\cdot \\mathbf n\\, ds = (P y' - Q x')\\, dt = P\\, dy - Q\\, dx$.
<<<

**Two fields on the unit circle.**
- $\\mathbf F = \\langle x, y \\rangle$ points straight out. On the circle, $\\mathbf F = \\mathbf n$, so $\\mathbf F \\cdot \\mathbf n = 1$ and the flux is the circumference, $2\\pi$.
- $\\mathbf F = \\langle -y, x \\rangle$ swirls around. It's tangent to the circle, so $\\mathbf F \\cdot \\mathbf n = 0$ and the flux is $0$: fluid goes around but never crosses.
>>> Both fields with the formula
**$\\langle x, y \\rangle$ on the unit circle.** With $x = \\cos t$, $y = \\sin t$: $P = \\cos t$, $Q = \\sin t$, $dy = \\cos t\\, dt$, $dx = -\\sin t\\, dt$. So $P\\, dy - Q\\, dx = \\cos^2 t\\, dt + \\sin^2 t\\, dt = dt$, and the flux is $\\int_0^{2\\pi} dt = 2\\pi$. At every point the field points straight out with length $1$, so it carries $1$ unit out per unit of edge, and the edge is $2\\pi$ long.

**$\\langle -y, x \\rangle$ on the unit circle.** $P = -\\sin t$, $Q = \\cos t$. So $P\\, dy - Q\\, dx = -\\sin t\\cos t\\, dt + \\cos t\\sin t\\, dt = 0$. Flux $0$: this field runs along the circle, never across it.

**The two are opposites.** $\\langle x, y \\rangle$ points across the circle: flux $2\\pi$, but push along the circle $0$. $\\langle -y, x \\rangle$ points along it: push along $2\\pi$, but flux $0$.

**For example,** at $t = 0$ you're at $(1, 0)$: $\\langle x, y \\rangle = \\langle 1, 0 \\rangle$ points straight out of the circle, while $\\langle -y, x \\rangle = \\langle 0, 1 \\rangle$ points straight up, along the circle.
<<<
:::

:::check
What is the outward flux of $\\mathbf F = \\langle x, 0 \\rangle$ across the unit circle?
answer: pi
???
With $x = \\cos t$, $y = \\sin t$: $P = \\cos t$, $Q = 0$, and $dy = \\cos t\\, dt$. So $\\oint P\\, dy - Q\\, dx = \\int_0^{2\\pi}\\cos^2 t\\, dt = \\pi$.
:::

:::idea Green's Theorem for flux
$$\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\iint_D \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y}\\right) dA.$$
The flux out through the boundary equals the total of $P_x + Q_y$ inside. $P_x + Q_y$ measures how much fluid is being created (or spreading out) at each point, per unit area. Nov 13 names it the divergence.

**Why:** the flux is $\\oint_C P\\, dy - Q\\, dx = \\oint_C (-Q)\\, dx + P\\, dy$. That's an ordinary line integral of the field $\\langle -Q, P \\rangle$, so Green's Theorem applies to it:
$$\\oint_C (-Q)\\, dx + P\\, dy = \\iint_D \\left(\\frac{\\partial P}{\\partial x} - \\frac{\\partial(-Q)}{\\partial y}\\right) dA = \\iint_D (P_x + Q_y)\\, dA.$$

**Example.** $\\mathbf F = \\langle x^2, y \\rangle$ across the boundary of the unit square $0 \\le x \\le 1$, $0 \\le y \\le 1$: $P_x + Q_y = 2x + 1$, so the flux is $\\int_0^1\\int_0^1 (2x + 1)\\, dy\\, dx = 1 + 1 = 2$.
>>> The square, side by side
**Each side directly.** On each side, the outward arrow is one of the four directions, and the flux through that side is (the part of $\\mathbf F$ pointing out) $\\times$ (the side's length, $1$). $\\mathbf F = \\langle x^2, y \\rangle$.
- **Right side** ($x = 1$, outward is right, $\\langle 1, 0 \\rangle$): the part pointing right is $x^2 = 1$. Flux $1$.
- **Left side** ($x = 0$, outward is left, $\\langle -1, 0 \\rangle$): the part pointing left is $-x^2 = 0$. Flux $0$.
- **Top** ($y = 1$, outward is up): the part pointing up is $y = 1$. Flux $1$.
- **Bottom** ($y = 0$, outward is down): the part pointing down is $-y = 0$. Flux $0$.

Total: $2$, matching the double integral ✓.

**The double integral.** The spreading-out rate is $P_x + Q_y = 2x + 1$. Inside, in $y$: $2x + 1$ has no $y$, so it's a number, times the length $1$: $2x + 1$. Outside: $\\int_0^1 (2x + 1)\\, dx = 1 + 1 = 2$.

**What the numbers mean.** $2x + 1$ is positive everywhere in the square, so the flow is spreading out at every point inside; all of that extra has to leave through the edges, so the net flux out is positive.
<<<
:::

:::check
What is the outward flux of $\\mathbf F = \\langle x, y \\rangle$ across the circle $x^2 + y^2 = 9$?
answer: 18pi
???
$P_x + Q_y = 1 + 1 = 2$, so the flux is $\\iint_D 2\\, dA = 2 \\cdot 9\\pi = 18\\pi$. Directly: on the circle $\\mathbf F \\cdot \\mathbf n = 3$ and the circumference is $6\\pi$, so $3 \\cdot 6\\pi = 18\\pi$ ✓.
:::

:::summary Summary
- **Cross-partials, explained:** $Q_x = P_y$ on a region with no holes gives $\\oint = \\iint 0 = 0$ around every loop, so $\\mathbf F$ is conservative.
- **Holes:** with the region between two curves, trace the outer one counterclockwise and the inner one clockwise. For $\\left\\langle \\tfrac{-y}{x^2 + y^2}, \\tfrac{x}{x^2 + y^2} \\right\\rangle$, every counterclockwise loop around the origin gives $2\\pi$.
- **Flux across $C$:** $\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\oint_C P\\, dy - Q\\, dx$ (counterclockwise), and by Green's Theorem it equals $\\iint_D (P_x + Q_y)\\, dA$.

**Common mistakes:**
- Using Green's Theorem when the field is undefined somewhere inside $C$.
- Mixing up circulation ($Q_x - P_y$) with flux ($P_x + Q_y$).
- Getting the sign of $P\\, dy - Q\\, dx$ backwards.
:::
`;export{e as default};