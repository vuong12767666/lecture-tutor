var e=`---
title: The Divergence Theorem in 2D
date: 2026-11-13
stewart: 16.5, 16.6, 16.7, 16.8, 16.9
source: OpenStax Calculus Volume 3, §6.4 Green's Theorem and §6.5 Divergence and Curl
---

:::recap Last time
Green's Theorem in two forms, for a counterclockwise curve $C$ around $D$:
- **Circulation** (flow along $C$): $\\displaystyle\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_D (Q_x - P_y)\\, dA$.
- **[[flux|Flux]]** (flow across $C$): $\\displaystyle\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\iint_D (P_x + Q_y)\\, dA$.
:::

:::check
Warm-up: for $\\mathbf F = \\langle x^2, y \\rangle$, what is $P_x + Q_y$ at the point $(1, 2)$?
answer: 3
???
$P_x = 2x = 2$ at $x = 1$, and $Q_y = 1$. So $P_x + Q_y = 3$.
:::

:::question Today
The two integrands in Green's Theorem, $P_x + Q_y$ and $Q_x - P_y$, describe what a field does at each point. What do they mean on their own, how do they work in 3D, and what do they tell you about whether a field is conservative?
:::

:::idea Divergence
The [[divergence]] of $\\mathbf F = \\langle P, Q, R \\rangle$ is the number
$$\\operatorname{div}\\mathbf F = \\nabla \\cdot \\mathbf F = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}.$$
In 2D, leave out the $R_z$ term.

**What it means.** If $\\mathbf F$ is the velocity of a fluid, $\\operatorname{div}\\mathbf F$ at a point is the rate at which fluid flows **out** of a tiny region around that point, per unit area (or volume).
- **Positive:** more leaves than enters, as if there were a source there (a faucet).
- **Negative:** more enters than leaves (a drain).
- **Zero:** what flows in flows out.
>>> Why $P_x + Q_y$ is the outflow per unit area
**What's being measured.** Imagine $\\mathbf F$ as the velocity of a liquid. Around a point, draw a tiny square and ask: how much liquid leaves through its four sides per second, minus how much comes in?

**Side by side.** Take the square with corners $(x, y)$ and $(x + h, y + h)$.
- **Right side** (outward is right): liquid leaves at about $P_{\\text{right}} \\times h$ (the rightward speed times the side's length).
- **Left side** (outward is left): about $-P_{\\text{left}} \\times h$ (rightward flow there comes *in*).
- **Top** (outward is up): about $Q_{\\text{top}} \\times h$.
- **Bottom** (outward is down): about $-Q_{\\text{bottom}} \\times h$.

**Group them.** Right plus left: $(P_{\\text{right}} - P_{\\text{left}})\\,h$. Across a width $h$, $P$ changes by about $P_x \\times h$, so this is about $P_x\\,h^2$. Top plus bottom: about $Q_y\\,h^2$. Total: $(P_x + Q_y)\\,h^2$, which is $P_x + Q_y$ times the square's area. So $P_x + Q_y$ is how much leaves per unit of area: the divergence.

**With numbers.** For $\\mathbf F = \\langle x, y \\rangle$ and the square $[1, 1.1] \\times [2, 2.1]$ ($h = 0.1$): right $1.1 \\times 0.1 = 0.11$, left $-1 \\times 0.1 = -0.1$, top $2.1 \\times 0.1 = 0.21$, bottom $-2 \\times 0.1 = -0.2$. Total $0.02$. And $(P_x + Q_y) \\times \\text{area} = (1 + 1) \\times 0.01 = 0.02$ ✓.
<<<

**Examples.**
- $\\langle x, y \\rangle$: divergence $1 + 1 = 2$. It points away from the origin and gets stronger farther out, so fluid spreads out everywhere.
- $\\langle -y, x \\rangle$: divergence $0 + 0 = 0$. It just goes around in circles.
- $\\langle x^2, y \\rangle$: divergence $2x + 1$, which changes from point to point.
:::

:::check
What is the divergence of $\\mathbf F = \\langle xy,\\ yz,\\ zx \\rangle$?
- [x] $x + y + z$
- [ ] $xy + yz + zx$
  why: That adds the components themselves. The divergence adds their partial derivatives: $P_x$, $Q_y$, and $R_z$.
- [ ] $\\langle y, z, x \\rangle$
  why: The divergence is a number at each point, not a vector: add the three partial derivatives.
- [ ] $0$
  why: $P_x = y$, $Q_y = z$, $R_z = x$, and those don't cancel.
???
$P = xy$ gives $P_x = y$. $Q = yz$ gives $Q_y = z$. $R = zx$ gives $R_z = x$. The sum is $x + y + z$.
:::

:::idea Curl
The [[curl]] of $\\mathbf F = \\langle P, Q, R \\rangle$ is the vector
$$\\operatorname{curl}\\mathbf F = \\nabla \\times \\mathbf F = \\left\\langle \\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z},\\ \\ \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x},\\ \\ \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right\\rangle.$$

**What it means.** Put a tiny paddle wheel in the fluid. The curl points along the axis the wheel spins around fastest (counterclockwise when you look from the tip of the curl down at the wheel), and its length measures how fast.

**2D fields are a special case.** For $\\mathbf F = \\langle P(x, y),\\ Q(x, y),\\ 0 \\rangle$, the first two components are $0$ and the curl is $\\langle 0, 0, Q_x - P_y \\rangle$. Its $z$-component is exactly the circulation per unit area from Green's Theorem.
>>> Computing the curl, step by step
**A pattern to remember it.** The curl follows the same pattern as the cross product, $\\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1 \\rangle$, with the first arrow replaced by "how fast with $x$, $y$, $z$" and the second by $\\langle P, Q, R \\rangle$. So "$a_2 b_3$" means "how fast $R$ changes with $y$", written $R_y$.

**Example: $\\mathbf F = \\langle -y, x, 0 \\rangle$.** Here $P = -y$, $Q = x$, $R = 0$.
- first: $R_y - Q_z = 0 - 0 = 0$ ($R$ is $0$, and $Q = x$ has no $z$),
- second: $P_z - R_x = 0 - 0 = 0$,
- third: $Q_x - P_y = 1 - (-1) = 2$.

So $\\operatorname{curl}\\mathbf F = \\langle 0, 0, 2 \\rangle$: the liquid spins around the vertical direction, counterclockwise when seen from above, at the same rate everywhere.

**Why each component is a swirl in one flat direction.** The third component $Q_x - P_y$ uses only $P$ and $Q$, the parts of $\\mathbf F$ in the floor's directions: it's the swirl in the $xy$-plane, as on Nov 9. The first, $R_y - Q_z$, is the same thing for the $yz$-plane (a wall), and the second for the $zx$-plane (the other wall). The curl collects all three.
<<<
:::

:::check
What is the curl of $\\mathbf F = \\langle yz,\\ xz,\\ xy \\rangle$?
- [x] $\\langle 0, 0, 0 \\rangle$
- [ ] $\\langle x, y, z \\rangle$
  why: Each component is a difference of two equal terms: for example, $R_y - Q_z = x - x = 0$.
- [ ] $\\langle 2x, 2y, 2z \\rangle$
  why: That adds the two terms instead of subtracting them.
- [ ] $x + y + z$
  why: The curl is a vector, and here every component is $0$.
???
$R_y - Q_z = x - x = 0$, $P_z - R_x = y - y = 0$, $Q_x - P_y = z - z = 0$. This field is $\\nabla(xyz)$, a gradient, and the next part shows why gradients always have zero curl.
:::

:::idea Two identities, and what they say about conservative fields
**1. The curl of a gradient is zero:** $\\operatorname{curl}(\\nabla f) = \\mathbf 0$.

**2. The divergence of a curl is zero:** $\\operatorname{div}(\\operatorname{curl}\\mathbf F) = 0$.

**What identity 1 gives you: a test in 3D.** A conservative field is a gradient, so its curl is $\\mathbf 0$. If the curl isn't $\\mathbf 0$, the field isn't conservative. The reverse also holds on a region with no holes: if $\\operatorname{curl}\\mathbf F = \\mathbf 0$ there, $\\mathbf F$ is conservative. This is the 3D version of Oct 14's cross-partials test (all three pairs match).
>>> Why both identities hold
**Identity 1: a gradient has no curl.** For $\\nabla f = \\langle f_x, f_y, f_z \\rangle$, the first component of the curl is (how fast $f_z$ changes with $y$) $-$ (how fast $f_y$ changes with $z$) $= f_{zy} - f_{yz}$. Taking two partial derivatives in either order gives the same result (Clairaut's Theorem, for smooth $f$), so this is $0$. Example with $f = x^2yz^3$: $f_z = 3x^2yz^2$, whose $y$-rate is $3x^2z^2$; $f_y = x^2z^3$, whose $z$-rate is $3x^2z^2$. Same ✓. The other two components cancel the same way.

**Identity 2: a curl has no divergence.** The divergence of $\\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle$ is
$$(R_{yx} - Q_{zx}) + (P_{zy} - R_{xy}) + (Q_{xz} - P_{yz}).$$
Each second partial shows up twice with opposite signs ($R_{yx}$ and $-R_{xy}$, $Q_{xz}$ and $-Q_{zx}$, $P_{zy}$ and $-P_{yz}$), and since the order doesn't matter, they cancel in pairs: total $0$.

**The 3D test is Oct 14's test.** "$\\operatorname{curl}\\mathbf F = \\mathbf 0$" says $R_y = Q_z$, $P_z = R_x$, and $Q_x = P_y$: exactly the three cross-partial pairs.
<<<
:::

:::check
Is $\\mathbf F = \\langle 2x,\\ 3z,\\ 3y \\rangle$ conservative?
- [x] Yes: its curl is $\\mathbf 0$ and it's defined everywhere.
- [ ] No: its divergence isn't $0$.
  why: Divergence doesn't decide whether a field is conservative; curl does. ($\\nabla(x^2)$ has divergence $2$ and is conservative.)
- [ ] No: $\\mathbf F$ mixes $y$ and $z$ between components.
  why: Mixing is fine. What matters is whether the cross-partials match: $R_y = 3 = Q_z$.
- [ ] It can't be decided without a line integral.
  why: The curl test decides it: on a region with no holes, zero curl means conservative.
???
$R_y - Q_z = 3 - 3 = 0$, $P_z - R_x = 0 - 0 = 0$, $Q_x - P_y = 0 - 0 = 0$, and $\\mathbf F$ is defined everywhere. So it's conservative, with potential $f = x^2 + 3yz$ ($f_x = 2x$, $f_y = 3z$, $f_z = 3y$ ✓).
:::

:::idea The Divergence Theorem in 2D
With the new names, Green's Theorem says:
$$\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\iint_D \\operatorname{div}\\mathbf F\\; dA, \\qquad \\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_D (\\operatorname{curl}\\mathbf F) \\cdot \\mathbf k\\; dA.$$
The first is the **Divergence Theorem in the plane**: the flux out through the boundary is the total of all the sources inside. The second is the circulation form. On Nov 16, the first one moves up to solids in space.

**Example.** The outward flux of $\\mathbf F = \\langle x^3, y^3 \\rangle$ across the unit circle.
1. $\\operatorname{div}\\mathbf F = 3x^2 + 3y^2 = 3r^2$.
2. $\\displaystyle\\iint_D 3r^2\\, dA = \\int_0^{2\\pi}\\int_0^1 3r^2 \\cdot r\\, dr\\, d\\theta = 2\\pi \\cdot \\frac34 = \\frac{3\\pi}{2}.$
>>> Each step, with a check done the long way
**Step 1.** $P = x^3$ changes with $x$ at rate $3x^2$; $Q = y^3$ changes with $y$ at rate $3y^2$. So the divergence is $3x^2 + 3y^2 = 3r^2$, where $r$ is the distance from the origin.

**Step 2.** The unit disk is $0 \\le r \\le 1$, all the way around, and a small polar piece has area $r\\, dr\\, d\\theta$. Inside: $\\int_0^1 3r^2 \\cdot r\\, dr = \\tfrac34$. Around: multiply by $2\\pi$: $\\tfrac{3\\pi}{2}$.

**The long way, on the edge.** Walk the circle with $x = \\cos t$, $y = \\sin t$. The flux formula $P\\, dy - Q\\, dx$ gives $\\cos^3 t \\cdot \\cos t\\, dt - \\sin^3 t \\cdot (-\\sin t)\\, dt = (\\cos^4 t + \\sin^4 t)\\, dt$. Each of $\\int_0^{2\\pi}\\cos^4 t\\, dt$ and $\\int_0^{2\\pi}\\sin^4 t\\, dt$ is $\\tfrac{3\\pi}{4}$, so the total is $\\tfrac{3\\pi}{2}$ ✓. The double integral avoided those fourth powers.

**Why it's positive.** $3r^2$ is $0$ or more everywhere, so the flow spreads out (or does nothing) at every point inside; on balance, liquid can only leave.
<<<
:::

:::check
Use the Divergence Theorem to find the outward flux of $\\mathbf F = \\langle x + y^2,\\ y - x^2 \\rangle$ across the circle $x^2 + y^2 = 4$.
answer: 8pi
???
$\\operatorname{div}\\mathbf F = \\tfrac{\\partial}{\\partial x}(x + y^2) + \\tfrac{\\partial}{\\partial y}(y - x^2) = 1 + 1 = 2$. So the flux is $\\iint_D 2\\, dA = 2 \\cdot 4\\pi = 8\\pi$. The $y^2$ and $-x^2$ terms don't change the flux at all.
:::

:::summary Summary
- **Divergence** $\\nabla \\cdot \\mathbf F = P_x + Q_y + R_z$: outflow per unit area or volume (sources and drains).
- **Curl** $\\nabla \\times \\mathbf F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle$: the axis and strength of rotation. For a 2D field it's $\\langle 0, 0, Q_x - P_y \\rangle$.
- $\\operatorname{curl}(\\nabla f) = \\mathbf 0$ and $\\operatorname{div}(\\operatorname{curl}\\mathbf F) = 0$. Zero curl on a region with no holes means conservative.
- **Divergence Theorem in 2D:** $\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds = \\iint_D \\operatorname{div}\\mathbf F\\, dA$.

**Common mistakes:**
- Treating the divergence as a vector or the curl as a number.
- Sign mistakes in the middle component of the curl ($P_z - R_x$, not $R_x - P_z$).
- Using divergence to decide whether a field is conservative.
:::
`;export{e as default};