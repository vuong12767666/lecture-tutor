var e=`---
title: Surface integrals of vector fields and the divergence theorem in 3D
date: 2026-11-16
stewart: 16.7, 16.9
source: OpenStax Calculus Volume 3, §6.6 Surface Integrals and §6.8 The Divergence Theorem
---

:::recap Last time
- [[surface integral|Surface integrals]] (Nov 6): $\\iint_S f\\, dS = \\iint_D f\\,|\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$, and $\\mathbf r_u \\times \\mathbf r_v$ is normal to the surface (Nov 4).
- [[divergence|Divergence]] (Nov 13): $\\nabla \\cdot \\mathbf F = P_x + Q_y + R_z$, the outflow per unit volume. In 2D, the flux out of a curve equals the total divergence inside.
:::

:::check
Warm-up: what is the divergence of $\\mathbf F = \\langle x, y, z \\rangle$?
answer: 3
???
$P_x + Q_y + R_z = 1 + 1 + 1 = 3$. The field points straight away from the origin and spreads out at the same rate everywhere.
:::

:::question Today
How much fluid flows through a surface, like a balloon's skin or a curved window? And is there a 3D version of "flux out of the boundary equals total divergence inside"?
:::

:::idea Flux through a surface
To measure flow **through** a surface $S$, first choose which side is "out": a unit normal $\\mathbf n$ on $S$ that changes smoothly. For a closed surface (one that encloses a solid, like a sphere), the usual choice is the **outward** normal. Then the [[flux]] is
$$\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iint_D \\mathbf F\\big(\\mathbf r(u, v)\\big) \\cdot (\\mathbf r_u \\times \\mathbf r_v)\\; du\\, dv,$$
as long as $\\mathbf r_u \\times \\mathbf r_v$ points the chosen way (if it points the other way, use its negative).

**What it measures.** If $\\mathbf F$ is a fluid's velocity, the flux is the volume of fluid crossing $S$ per unit time, counted positive in the direction of $\\mathbf n$.

**For a graph** $z = f(x, y)$ with the **upward** normal, $\\mathbf r_x \\times \\mathbf r_y = \\langle -f_x, -f_y, 1 \\rangle$, so the flux is $\\iint_D \\mathbf F \\cdot \\langle -f_x, -f_y, 1 \\rangle\\, dA$.
>>> Why $\\mathbf F \\cdot \\mathbf n\\, dS$ becomes $\\mathbf F \\cdot (\\mathbf r_u \\times \\mathbf r_v)\\, du\\, dv$
**What's being added up.** For each small patch of the surface: the part of $\\mathbf F$ pointing straight through the patch ($\\mathbf F \\cdot \\mathbf n$, where $\\mathbf n$ is an arrow of length $1$ sticking straight out), times the patch's area ($dS$). That's how much flows through the patch per second.

**Why only the straight-through part counts.** Split $\\mathbf F$ into a part along the surface and a part perpendicular to it. The part along the surface moves liquid sideways, staying on the same side of the surface, so it carries nothing through. Only the perpendicular part carries liquid from one side to the other, and its size is $\\mathbf F \\cdot \\mathbf n$. (For example, if $\\mathbf F = \\langle 0, 0, 3 \\rangle$ and the patch faces straight up, $\\mathbf n = \\langle 0, 0, 1 \\rangle$ and $\\mathbf F \\cdot \\mathbf n = 3$; if the patch faces sideways, $\\mathbf n = \\langle 1, 0, 0 \\rangle$ and $\\mathbf F \\cdot \\mathbf n = 0$.)

**The pieces.** The arrow sticking out is $\\mathbf r_u \\times \\mathbf r_v$ (Nov 4), so the length-$1$ version is $\\mathbf n = \\dfrac{\\mathbf r_u \\times \\mathbf r_v}{|\\mathbf r_u \\times \\mathbf r_v|}$. The patch's area is $dS = |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$ (Nov 6).

**Multiply them.** $\\mathbf n\\, dS = \\dfrac{\\mathbf r_u \\times \\mathbf r_v}{|\\mathbf r_u \\times \\mathbf r_v|} \\times |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv = (\\mathbf r_u \\times \\mathbf r_v)\\, du\\, dv$. The lengths cancel, so no square roots are needed.

**Checking the direction.** Plug in one point and see which way $\\mathbf r_u \\times \\mathbf r_v$ points. For a graph, its $z$-component is $1$, so it points up.
<<<

**Example: outward through a sphere.** $\\mathbf F = \\langle x, y, z \\rangle$ through the sphere of radius $a$.
1. On Nov 6, $\\mathbf r_\\varphi \\times \\mathbf r_\\theta = a\\sin\\varphi\\;\\mathbf r$, which points outward (it's a positive multiple of the position vector).
2. $\\mathbf F$ at the point $\\mathbf r$ is $\\mathbf r$ itself, so $\\mathbf F \\cdot (\\mathbf r_\\varphi \\times \\mathbf r_\\theta) = a\\sin\\varphi\\,(\\mathbf r \\cdot \\mathbf r) = a\\sin\\varphi \\cdot a^2 = a^3\\sin\\varphi$.
3. $\\displaystyle\\int_0^{2\\pi}\\int_0^\\pi a^3\\sin\\varphi\\, d\\varphi\\, d\\theta = a^3 \\cdot 2 \\cdot 2\\pi = 4\\pi a^3.$
>>> Each step of the sphere, worked out
**Step 1: which way the arrow points.** On Nov 6, $\\mathbf r_\\varphi \\times \\mathbf r_\\theta = a\\sin\\varphi \\times (\\text{the point } \\mathbf r)$. Since $a\\sin\\varphi$ is $0$ or more, this arrow points the same way as the arrow from the center to the point: outward ✓.

**Step 2: $\\mathbf F$ on the sphere.** $\\mathbf F(x, y, z) = \\langle x, y, z \\rangle$ is the arrow from the center to the point itself. So $\\mathbf F \\cdot (\\mathbf r_\\varphi \\times \\mathbf r_\\theta) = a\\sin\\varphi \\times (\\mathbf r \\cdot \\mathbf r)$. A vector dotted with itself is its length squared, and every point of the sphere is at distance $a$, so $\\mathbf r \\cdot \\mathbf r = a^2$. The integrand is $a^3\\sin\\varphi$.

**Step 3: the integral.** $\\int_0^\\pi \\sin\\varphi\\, d\\varphi = 2$ and $\\int_0^{2\\pi} d\\theta = 2\\pi$, so the flux is $a^3 \\cdot 2 \\cdot 2\\pi = 4\\pi a^3$.

**A shortcut check.** On the sphere, $\\mathbf F$ points straight out with length $a$, so $\\mathbf F \\cdot \\mathbf n = a$ at every point. Flux $=$ $a \\times$ (area) $= a \\times 4\\pi a^2 = 4\\pi a^3$ ✓.
<<<

**Example: up through a paraboloid.** $\\mathbf F = \\langle x, y, z \\rangle$ through $z = 1 - x^2 - y^2$, $z \\ge 0$, with the upward normal.
1. $f_x = -2x$ and $f_y = -2y$, so $\\langle -f_x, -f_y, 1 \\rangle = \\langle 2x, 2y, 1 \\rangle$.
2. On the surface, $\\mathbf F \\cdot \\langle 2x, 2y, 1 \\rangle = 2x^2 + 2y^2 + z = 2x^2 + 2y^2 + (1 - x^2 - y^2) = x^2 + y^2 + 1$.
3. Over the unit disk: $\\displaystyle\\int_0^{2\\pi}\\int_0^1 (r^2 + 1)\\, r\\, dr\\, d\\theta = 2\\pi\\left(\\frac14 + \\frac12\\right) = \\frac{3\\pi}{2}.$
>>> Each step of the paraboloid, worked out
**Step 1: the arrow sticking out.** For a graph $z = f(x, y)$, the arrow is $\\langle -f_x, -f_y, 1 \\rangle$ (Nov 4). Here $f = 1 - x^2 - y^2$, so $f_x = -2x$ and $f_y = -2y$, and the arrow is $\\langle 2x, 2y, 1 \\rangle$. Its last component is $1 > 0$, so it points up ✓. At the top point $(0, 0, 1)$ it's $\\langle 0, 0, 1 \\rangle$, straight up, as you'd expect at the top of a dome.

**Step 2: put the surface's height in.** The integral runs over the shadow in $x$ and $y$, so every $z$ must be replaced by its value on the surface, $1 - x^2 - y^2$. Then $\\mathbf F \\cdot \\langle 2x, 2y, 1 \\rangle = 2x^2 + 2y^2 + z = 2x^2 + 2y^2 + (1 - x^2 - y^2) = x^2 + y^2 + 1$.

**Step 3: the shadow, from the rule.** $z \\ge 0$ on the surface means $1 - x^2 - y^2 \\ge 0$, so $x^2 + y^2 \\le 1$: the unit disk. In polar, the integrand is $r^2 + 1$, times $r$ for the piece's size. Inside: $\\int_0^1 (r^3 + r)\\, dr = \\tfrac14 + \\tfrac12 = \\tfrac34$. Around: $2\\pi \\times \\tfrac34 = \\tfrac{3\\pi}{2}$.
<<<
:::

:::check
What is the outward flux of $\\mathbf F = \\langle x, y, z \\rangle$ through the sphere $x^2 + y^2 + z^2 = 4$?
answer: 32pi
???
Here $a = 2$, so the flux is $4\\pi a^3 = 32\\pi$. Directly: $\\mathbf F \\cdot \\mathbf n = 2$ on the sphere, and its area is $4\\pi \\cdot 4 = 16\\pi$, so $2 \\cdot 16\\pi = 32\\pi$.
:::

:::idea The Divergence Theorem
Let $E$ be a solid whose boundary is the closed surface $S$, with the outward normal. If $\\mathbf F$ has continuous partial derivatives on $E$, then
$$\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iiint_E \\operatorname{div}\\mathbf F\\; dV.$$
The flux out through the skin equals the total of the sources inside. It's Nov 13's 2D theorem, one dimension up.

**Why, in two steps.**
1. **A tiny box.** The flux out of a box $\\Delta x \\times \\Delta y \\times \\Delta z$ is about $(P_x + Q_y + R_z)\\,\\Delta V$.
2. **Fill $E$ with tiny boxes and add.** Each inside face is shared by two boxes, with opposite outward normals, so its flux counts once as out and once as in, and cancels. Only the faces on $S$ are left.
>>> Each step, worked out
**Step 1: one tiny box.** Take a box $\\Delta x$ by $\\Delta y$ by $\\Delta z$ and look at its six faces in pairs.
- **The two faces facing left and right** (each of area $\\Delta y\\,\\Delta z$): flow leaves through the right face at about $P_{\\text{right}} \\times \\Delta y\\,\\Delta z$ and comes in through the left face at about $P_{\\text{left}} \\times \\Delta y\\,\\Delta z$. Net: $(P_{\\text{right}} - P_{\\text{left}})\\,\\Delta y\\,\\Delta z$. Across a width $\\Delta x$, $P$ changes by about $P_x\\,\\Delta x$, so the net is about $P_x\\,\\Delta x\\,\\Delta y\\,\\Delta z = P_x\\,\\Delta V$.
- **The faces facing front and back** give about $Q_y\\,\\Delta V$, and **the faces facing up and down** about $R_z\\,\\Delta V$, the same way.

Total out of the tiny box: $(P_x + Q_y + R_z)\\,\\Delta V = \\operatorname{div}\\mathbf F\\,\\Delta V$. (This is the 3D version of the tiny square on Nov 13.)

**Step 2: fill the solid with tiny boxes and add.** Two neighboring boxes share a face. Whatever flows out of one box through that face flows into the other, so it counts once as "out" and once as "in", and the two cancel. After adding all the boxes, the only faces that don't cancel are the ones with no neighbor: the faces on the outer surface. So (total out of all the boxes) $=$ (total out through the outer surface), and the left side is a sum that becomes $\\iiint_E \\operatorname{div}\\mathbf F\\, dV$.
<<<

**Check it on the sphere.** For $\\mathbf F = \\langle x, y, z \\rangle$, $\\operatorname{div}\\mathbf F = 3$, so $\\iiint_E 3\\, dV = 3 \\cdot \\tfrac43\\pi a^3 = 4\\pi a^3$, the same as the surface integral above ✓.

**Example.** The outward flux of $\\mathbf F = \\langle x^3, y^3, z^3 \\rangle$ through the unit sphere.
1. $\\operatorname{div}\\mathbf F = 3x^2 + 3y^2 + 3z^2 = 3\\rho^2$.
2. $\\displaystyle\\iiint_E 3\\rho^2\\, dV = \\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 3\\rho^2 \\cdot \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = 3 \\cdot \\frac15 \\cdot 2 \\cdot 2\\pi = \\frac{12\\pi}{5}.$
>>> Each step of the example, worked out
**Step 1.** $P = x^3$ changes with $x$ at rate $3x^2$, $Q = y^3$ with $y$ at rate $3y^2$, $R = z^3$ with $z$ at rate $3z^2$. So $\\operatorname{div}\\mathbf F = 3x^2 + 3y^2 + 3z^2 = 3\\rho^2$, where $\\rho$ is the distance from the origin (Oct 28).

**Step 2.** The unit ball is $0 \\le \\rho \\le 1$, all directions: $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$. A small piece has volume $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$, so the integrand is $3\\rho^2 \\cdot \\rho^2\\sin\\varphi = 3\\rho^4\\sin\\varphi$. That's (only $\\rho$) $\\times$ (only $\\varphi$) with number limits, so it splits: $\\int_0^1 3\\rho^4\\, d\\rho = \\tfrac35$, $\\int_0^\\pi\\sin\\varphi\\, d\\varphi = 2$, $\\int_0^{2\\pi} d\\theta = 2\\pi$. Product: $\\tfrac35 \\cdot 2 \\cdot 2\\pi = \\tfrac{12\\pi}{5}$.

**Why the theorem helped.** Directly on the sphere, you'd need $\\mathbf F \\cdot (\\mathbf r_\\varphi \\times \\mathbf r_\\theta)$, full of cubes of sines and cosines. The divergence turned it into a simple power of $\\rho$.
<<<
:::

:::check
What is the outward flux of $\\mathbf F = \\langle x,\\ 2y,\\ 3z \\rangle$ through the surface of the unit cube $0 \\le x, y, z \\le 1$?
answer: 6
???
$\\operatorname{div}\\mathbf F = 1 + 2 + 3 = 6$, so the flux is $\\iiint_E 6\\, dV = 6 \\times (\\text{volume } 1) = 6$. Doing the six faces one by one also gives $1 + 2 + 3 = 6$: only the faces at $x = 1$, $y = 1$, $z = 1$ have nonzero flux.
:::

:::idea Surfaces that aren't closed: close them off
The Divergence Theorem needs a closed surface. For an open one, add a simple "lid" to close it, use the theorem on the closed surface, and subtract the lid's flux.

**Example.** The paraboloid $z = 1 - x^2 - y^2$, $z \\ge 0$, upward, with $\\mathbf F = \\langle x, y, z \\rangle$ (computed directly above as $\\tfrac{3\\pi}{2}$).
1. **The lid:** the unit disk at $z = 0$. Together with the paraboloid it encloses the solid $E$ under the paraboloid. On the lid, outward means down: $\\mathbf n = \\langle 0, 0, -1 \\rangle$.
2. **Lid flux:** $\\mathbf F \\cdot \\mathbf n = -z = 0$ on $z = 0$, so the lid's flux is $0$.
3. **Total flux:** $\\iiint_E 3\\, dV = 3 \\times \\text{volume}(E) = 3 \\cdot \\tfrac\\pi2 = \\tfrac{3\\pi}{2}$.
4. **Paraboloid flux** $=$ total $-$ lid $= \\tfrac{3\\pi}{2} - 0 = \\tfrac{3\\pi}{2}$ ✓, the same as the direct calculation.
>>> Each step of closing it off, worked out
**Step 1: why "outward" is "upward" on the dome.** For the solid under the paraboloid, the paraboloid is its top, and the outward direction on a top is up. That's the direction the problem asked for, so no sign change is needed.

**Step 2: the lid.** Every point of the lid is on the floor, $z = 0$. Outward from the solid there means down, $\\langle 0, 0, -1 \\rangle$, and the part of $\\mathbf F$ pointing down is $\\mathbf F \\cdot \\langle 0, 0, -1 \\rangle = -z = 0$. The flow slides along the lid without crossing it.

**Step 3: the volume of the solid.** In cylindrical coordinates, each column at distance $r$ runs from $z = 0$ up to $z = 1 - r^2$, over the unit disk: $\\int_0^{2\\pi}\\int_0^1 (1 - r^2)\\, r\\, dr\\, d\\theta = 2\\pi\\left(\\tfrac12 - \\tfrac14\\right) = \\tfrac\\pi2$. The divergence is $3$ everywhere, so the total out of the closed surface is $3 \\times \\tfrac\\pi2 = \\tfrac{3\\pi}{2}$.

**Step 4: subtract the lid.** The closed surface is dome plus lid, so (dome) $+$ (lid) $=$ total, and (dome) $=$ total $-$ (lid) $= \\tfrac{3\\pi}{2} - 0 = \\tfrac{3\\pi}{2}$, the same as the direct calculation ✓.
<<<
:::

:::check
If $\\operatorname{div}\\mathbf F = 0$ everywhere, what is the outward flux of $\\mathbf F$ through any closed surface?
- [x] $0$
- [ ] It depends on the surface.
  why: The Divergence Theorem turns it into $\\iiint_E 0\\, dV$, which is $0$ for every solid $E$.
- [ ] It equals the surface's area.
  why: That would be the flux when $\\mathbf F \\cdot \\mathbf n = 1$ everywhere, which has nothing to do with the divergence being $0$.
- [ ] It's undefined.
  why: The flux is defined for any field with continuous partial derivatives; here it's simply $0$.
???
$\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iiint_E 0\\, dV = 0$. With no sources or drains inside, whatever flows in has to flow out.
:::

:::summary Summary
- **Flux through a surface:** $\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iint_D \\mathbf F(\\mathbf r) \\cdot (\\mathbf r_u \\times \\mathbf r_v)\\, du\\, dv$, with $\\mathbf r_u \\times \\mathbf r_v$ pointing the chosen way. Graph, upward: $\\mathbf F \\cdot \\langle -f_x, -f_y, 1 \\rangle\\, dA$.
- **[[divergence theorem|Divergence Theorem]]:** $\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iiint_E \\operatorname{div}\\mathbf F\\, dV$ for a closed surface with the outward normal. Tiny boxes, with shared faces canceling.
- For an open surface, add a lid, use the theorem, and subtract the lid's flux.

**Common mistakes:**
- Using the wrong direction of $\\mathbf r_u \\times \\mathbf r_v$ (check one point).
- Leaving $z$ in the integrand instead of substituting the surface's formula.
- Using the Divergence Theorem on a surface that isn't closed.
:::
`;export{e as default};