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
**Step 1: why "no holes" matters.** Green's Theorem needs $P$ and $Q$ to be well-behaved at every point *inside* $C$, not just on it. If $R$ had a hole, a curve could go around the hole and enclose points where $\\mathbf F$ isn't defined. With no holes, whatever $C$ encloses is part of $R$.

**Step 2.** The integrand $Q_x - P_y$ is $0$ at every point inside, so adding it up gives $0$, whatever the shape of $D$.

**Step 3: from loops to paths.** Take two paths $C_1$ and $C_2$ from $A$ to $B$. Going out along $C_1$ and back along $C_2$ reversed is a closed loop, so
$$\\int_{C_1} \\mathbf F \\cdot d\\mathbf r - \\int_{C_2} \\mathbf F \\cdot d\\mathbf r = \\oint_{\\text{loop}} \\mathbf F \\cdot d\\mathbf r = 0.$$
So the two paths give the same value. (If the loop crosses itself, split it into simple loops, each of which gives $0$; if it runs clockwise, its value is the negative of $0$, still $0$.)

**The warm-up's field.** $\\mathbf F = \\langle 2xy, x^2 \\rangle$ is defined everywhere (no holes) and has $Q_x - P_y = 0$, so it's conservative. Indeed, $f = x^2 y$ has $f_x = 2xy$ and $f_y = x^2$.
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
**$P_y$, by the quotient rule.** $P = \\dfrac{-y}{x^2 + y^2}$:
$$P_y = \\frac{(-1)(x^2 + y^2) - (-y)(2y)}{(x^2 + y^2)^2} = \\frac{-x^2 - y^2 + 2y^2}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}.$$

**$Q_x$.** $Q = \\dfrac{x}{x^2 + y^2}$:
$$Q_x = \\frac{(1)(x^2 + y^2) - x(2x)}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}.$$
They're equal, so $Q_x - P_y = 0$ (away from the origin).

**Around the unit circle.** $x = \\cos t$, $y = \\sin t$, so $x^2 + y^2 = 1$, $dx = -\\sin t\\, dt$, $dy = \\cos t\\, dt$. The integrand is $(-\\sin t)(-\\sin t) + \\cos t \\cos t = 1$, and $\\int_0^{2\\pi} 1\\, dt = 2\\pi$.
<<<

**Green's Theorem with a hole.** For the region $D$ between an outer curve $C_1$ and an inner curve $C_2$,
$$\\oint_{C_1,\\ \\text{counterclockwise}} + \\oint_{C_2,\\ \\text{clockwise}} = \\iint_D (Q_x - P_y)\\, dA.$$
The boundary is traced so that $D$ is always on your left: the outer curve counterclockwise and the inner one clockwise.

**What it gives for this field.** If $C_1$ is any simple closed curve around the origin and $C_2$ is a small circle around the origin inside it, then $D$ (between them) has no bad points and $Q_x - P_y = 0$ on it. So
$$\\oint_{C_1} \\mathbf F \\cdot d\\mathbf r = \\oint_{C_2,\\ \\text{counterclockwise}} \\mathbf F \\cdot d\\mathbf r = 2\\pi.$$
Every counterclockwise loop around the origin gives $2\\pi$, and every loop that doesn't go around it gives $0$.
>>> Each step of the hole argument, worked out
**Why the inner curve goes clockwise.** Cut the ring-shaped region $D$ with two short slits from $C_2$ out to $C_1$, splitting it into two pieces with no holes. Apply ordinary Green's Theorem to each piece, counterclockwise around each. Each slit is traveled once in each direction, so the slits cancel. What's left is $C_1$ counterclockwise and $C_2$ clockwise (going counterclockwise around a piece means going the "backwards" way along the inner edge).

**Moving the inner curve to the other side.** Going clockwise around $C_2$ gives the negative of going counterclockwise. So the equation says $\\oint_{C_1} - \\oint_{C_2,\\ \\text{ccw}} = \\iint_D 0\\, dA = 0$, which means $\\oint_{C_1} = \\oint_{C_2,\\ \\text{ccw}}$.

**Choosing $C_2$.** Any small circle around the origin works, and this field gives $2\\pi$ around a circle of any radius $a$: with $x = a\\cos t$, $y = a\\sin t$, the $a^2$ in $x^2 + y^2$ cancels the $a^2$ from $x\\, dy - y\\, dx$, leaving $\\int_0^{2\\pi} 1\\, dt$.

**Loops that don't go around the origin.** Then the inside of the loop doesn't contain the origin, so ordinary Green's Theorem applies and gives $0$. For example, the circle of radius $1$ centered at $(3, 0)$ gives $0$.
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
**Perpendicular to the curve.** The tangent is $\\langle x', y' \\rangle$, and $\\langle y', -x' \\rangle \\cdot \\langle x', y' \\rangle = y'x' - x'y' = 0$, so it's perpendicular.

**Outward, not inward.** $\\langle y', -x' \\rangle$ is the tangent turned $90^\\circ$ clockwise, to the right of the direction of travel. Going counterclockwise, the region is on your left, so your right is outside. On the unit circle at $t = 0$: the point is $(1, 0)$ and the tangent is $\\langle 0, 1 \\rangle$, so $\\langle y', -x' \\rangle = \\langle 1, 0 \\rangle$, pointing out ✓.

**Times $ds$.** $\\langle y', -x' \\rangle$ has the same length as the tangent, $|\\mathbf r'(t)|$, and $ds = |\\mathbf r'(t)|\\, dt$. So $\\mathbf n\\, ds = \\tfrac{\\langle y', -x' \\rangle}{|\\mathbf r'|} \\cdot |\\mathbf r'|\\, dt = \\langle y', -x' \\rangle\\, dt$: the lengths cancel, and no square roots are needed.

**Then the formula.** $\\mathbf F \\cdot \\mathbf n\\, ds = P y'\\, dt - Q x'\\, dt = P\\, dy - Q\\, dx$.
<<<

**Two fields on the unit circle.**
- $\\mathbf F = \\langle x, y \\rangle$ points straight out. On the circle, $\\mathbf F = \\mathbf n$, so $\\mathbf F \\cdot \\mathbf n = 1$ and the flux is the circumference, $2\\pi$.
- $\\mathbf F = \\langle -y, x \\rangle$ swirls around. It's tangent to the circle, so $\\mathbf F \\cdot \\mathbf n = 0$ and the flux is $0$: fluid goes around but never crosses.
>>> Both fields with the formula
**$\\langle x, y \\rangle$:** $P = \\cos t$, $Q = \\sin t$, $dy = \\cos t\\, dt$, $dx = -\\sin t\\, dt$. So $P\\, dy - Q\\, dx = \\cos^2 t\\, dt + \\sin^2 t\\, dt = dt$, and the flux is $\\int_0^{2\\pi} dt = 2\\pi$.

**$\\langle -y, x \\rangle$:** $P = -\\sin t$, $Q = \\cos t$. So $P\\, dy - Q\\, dx = -\\sin t\\cos t\\, dt + \\cos t\\sin t\\, dt = 0$. Flux $0$.

These two fields are opposites in a useful way: the first has circulation $0$ around the circle (it points across, not along) and flux $2\\pi$; the second has circulation $2\\pi$ and flux $0$.
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
**Each side directly**, with its outward normal:
- **Right side** ($x = 1$, $\\mathbf n = \\langle 1, 0 \\rangle$): $\\mathbf F \\cdot \\mathbf n = x^2 = 1$. Length $1$, so flux $1$.
- **Left side** ($x = 0$, $\\mathbf n = \\langle -1, 0 \\rangle$): $\\mathbf F \\cdot \\mathbf n = -x^2 = 0$. Flux $0$.
- **Top** ($y = 1$, $\\mathbf n = \\langle 0, 1 \\rangle$): $\\mathbf F \\cdot \\mathbf n = y = 1$. Flux $1$.
- **Bottom** ($y = 0$, $\\mathbf n = \\langle 0, -1 \\rangle$): $\\mathbf F \\cdot \\mathbf n = -y = 0$. Flux $0$.

Total $2$, matching the double integral ✓.

**The double integral.** $\\int_0^1 (2x + 1)\\, dy = 2x + 1$ (no $y$ in it), and $\\int_0^1 (2x + 1)\\, dx = 1 + 1 = 2$.

**What the numbers mean.** $P_x + Q_y = 2x + 1$ is positive everywhere in the square, so fluid is being added everywhere inside, and all of it has to leave through the edges: net flux out is positive.
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