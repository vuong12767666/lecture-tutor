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
**The pieces.** The unit normal is the normal vector divided by its length: $\\mathbf n = \\dfrac{\\mathbf r_u \\times \\mathbf r_v}{|\\mathbf r_u \\times \\mathbf r_v|}$. The area of a small patch is $dS = |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$ (Nov 6).

**Multiply them.** $\\mathbf n\\, dS = \\dfrac{\\mathbf r_u \\times \\mathbf r_v}{|\\mathbf r_u \\times \\mathbf r_v|} \\cdot |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv = (\\mathbf r_u \\times \\mathbf r_v)\\, du\\, dv$. The lengths cancel, so no square roots are needed, just like the $\\langle y', -x' \\rangle\\, dt$ for curves on Nov 11.

**Why $\\mathbf F \\cdot \\mathbf n$.** Only the part of $\\mathbf F$ perpendicular to the surface carries fluid through it; the part along the surface just slides across. $\\mathbf F \\cdot \\mathbf n$ is that perpendicular part (a scalar projection), and multiplying by the patch's area gives the volume crossing per unit time.

**Checking the direction.** Plug in one point and see where $\\mathbf r_u \\times \\mathbf r_v$ points. For a graph, its $z$-component is $1 > 0$, so it points up.
<<<

**Example: outward through a sphere.** $\\mathbf F = \\langle x, y, z \\rangle$ through the sphere of radius $a$.
1. On Nov 6, $\\mathbf r_\\varphi \\times \\mathbf r_\\theta = a\\sin\\varphi\\;\\mathbf r$, which points outward (it's a positive multiple of the position vector).
2. $\\mathbf F$ at the point $\\mathbf r$ is $\\mathbf r$ itself, so $\\mathbf F \\cdot (\\mathbf r_\\varphi \\times \\mathbf r_\\theta) = a\\sin\\varphi\\,(\\mathbf r \\cdot \\mathbf r) = a\\sin\\varphi \\cdot a^2 = a^3\\sin\\varphi$.
3. $\\displaystyle\\int_0^{2\\pi}\\int_0^\\pi a^3\\sin\\varphi\\, d\\varphi\\, d\\theta = a^3 \\cdot 2 \\cdot 2\\pi = 4\\pi a^3.$
>>> Each step of the sphere, worked out
**Step 1.** Nov 6 computed $\\mathbf r_\\varphi \\times \\mathbf r_\\theta = a\\sin\\varphi\\,\\langle a\\sin\\varphi\\cos\\theta,\\ a\\sin\\varphi\\sin\\theta,\\ a\\cos\\varphi \\rangle = a\\sin\\varphi\\;\\mathbf r$. Since $a\\sin\\varphi \\ge 0$, it points the same way as $\\mathbf r$, which is from the center out to the surface: outward ✓.

**Step 2.** $\\mathbf F(x, y, z) = \\langle x, y, z \\rangle$, and on the sphere $\\langle x, y, z \\rangle = \\mathbf r(\\varphi, \\theta)$. A vector dotted with itself is its length squared, and every point of the sphere is at distance $a$, so $\\mathbf r \\cdot \\mathbf r = a^2$.

**Step 3.** $\\int_0^\\pi \\sin\\varphi\\, d\\varphi = 2$ and $\\int_0^{2\\pi} d\\theta = 2\\pi$.

**A shortcut check.** On the sphere, $\\mathbf F$ points straight out with length $a$, so $\\mathbf F \\cdot \\mathbf n = a$ everywhere. Flux $= a \\times (\\text{area}) = a \\cdot 4\\pi a^2 = 4\\pi a^3$ ✓.
<<<

**Example: up through a paraboloid.** $\\mathbf F = \\langle x, y, z \\rangle$ through $z = 1 - x^2 - y^2$, $z \\ge 0$, with the upward normal.
1. $f_x = -2x$ and $f_y = -2y$, so $\\langle -f_x, -f_y, 1 \\rangle = \\langle 2x, 2y, 1 \\rangle$.
2. On the surface, $\\mathbf F \\cdot \\langle 2x, 2y, 1 \\rangle = 2x^2 + 2y^2 + z = 2x^2 + 2y^2 + (1 - x^2 - y^2) = x^2 + y^2 + 1$.
3. Over the unit disk: $\\displaystyle\\int_0^{2\\pi}\\int_0^1 (r^2 + 1)\\, r\\, dr\\, d\\theta = 2\\pi\\left(\\frac14 + \\frac12\\right) = \\frac{3\\pi}{2}.$
>>> Each step of the paraboloid, worked out
**Step 1.** $f = 1 - x^2 - y^2$, so $f_x = -2x$ and $f_y = -2y$. Then $-f_x = 2x$ and $-f_y = 2y$. The $z$-component $1$ means it points up ✓.

**Step 2: substitute before integrating.** The flux integral is over the shadow $D$ in $x$ and $y$, so $z$ has to be replaced by its value on the surface, $1 - x^2 - y^2$. Leaving $z$ in would mix up points on the surface with points elsewhere.

**Step 3: the shadow, from the inequality.** $z \\ge 0$ means $1 - x^2 - y^2 \\ge 0$, so $x^2 + y^2 \\le 1$: the unit disk. In polar, the integrand is $r^2 + 1$, times $r$ from $dA$. The inside integral is $\\int_0^1 (r^3 + r)\\, dr = \\tfrac14 + \\tfrac12 = \\tfrac34$, and the outside multiplies by $2\\pi$: $\\tfrac{3\\pi}{2}$.
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
**Step 1: the tiny box.** Pair up opposite faces, as with the tiny square on Nov 13.
- **The two faces perpendicular to $x$** (area $\\Delta y\\,\\Delta z$ each, normals $\\pm\\langle 1, 0, 0 \\rangle$): they give about $(P_{\\text{front}} - P_{\\text{back}})\\,\\Delta y\\,\\Delta z$. $P$ changes by about $P_x\\,\\Delta x$ between them, so that's $P_x\\,\\Delta x\\,\\Delta y\\,\\Delta z$.
- **The faces perpendicular to $y$** give about $Q_y\\,\\Delta V$, and **those perpendicular to $z$** about $R_z\\,\\Delta V$.

Total: $(P_x + Q_y + R_z)\\,\\Delta V = \\operatorname{div}\\mathbf F\\,\\Delta V$.

**Step 2: cancellation.** Two neighboring boxes share a face. For the box on one side, that face's outward normal points into the other box; for the other box, it points back. So whatever flows out of one box through that face flows into the other, and the two contributions add to $0$. After adding up all the boxes, the only faces that don't cancel are the ones with no neighbor: the faces on the outer surface $S$. So (sum of all the boxes' flux) $=$ (flux through $S$), and the left side is a Riemann sum for $\\iiint_E \\operatorname{div}\\mathbf F\\, dV$.
<<<

**Check it on the sphere.** For $\\mathbf F = \\langle x, y, z \\rangle$, $\\operatorname{div}\\mathbf F = 3$, so $\\iiint_E 3\\, dV = 3 \\cdot \\tfrac43\\pi a^3 = 4\\pi a^3$, the same as the surface integral above ✓.

**Example.** The outward flux of $\\mathbf F = \\langle x^3, y^3, z^3 \\rangle$ through the unit sphere.
1. $\\operatorname{div}\\mathbf F = 3x^2 + 3y^2 + 3z^2 = 3\\rho^2$.
2. $\\displaystyle\\iiint_E 3\\rho^2\\, dV = \\int_0^{2\\pi}\\int_0^\\pi\\int_0^1 3\\rho^2 \\cdot \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta = 3 \\cdot \\frac15 \\cdot 2 \\cdot 2\\pi = \\frac{12\\pi}{5}.$
>>> Each step of the example, worked out
**Step 1.** $P_x = 3x^2$, $Q_y = 3y^2$, $R_z = 3z^2$. In spherical coordinates $x^2 + y^2 + z^2 = \\rho^2$ (Oct 28).

**Step 2.** The unit ball is $0 \\le \\rho \\le 1$, $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$, and $dV = \\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$. The integrand $3\\rho^4\\sin\\varphi$ is a product, so split it: $\\int_0^1 3\\rho^4\\, d\\rho = \\tfrac35$, $\\int_0^\\pi \\sin\\varphi\\, d\\varphi = 2$, $\\int_0^{2\\pi} d\\theta = 2\\pi$. Product: $\\tfrac35 \\cdot 2 \\cdot 2\\pi = \\tfrac{12\\pi}{5}$.

**Why the theorem helped.** The surface integral would need $\\mathbf F \\cdot (\\mathbf r_\\varphi \\times \\mathbf r_\\theta)$ with cubes of sines and cosines. The divergence turned it into a simple power of $\\rho$.
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
>>> Each step, worked out
**Step 1: why "outward" is "upward" on the paraboloid.** For the solid under the paraboloid, the paraboloid is its top, and the outward normal on a top points up. That's the orientation the problem asked for, so no sign change is needed.

**Step 2.** On the lid every point has $z = 0$, and $\\mathbf F \\cdot \\langle 0, 0, -1 \\rangle = -z = 0$. The field slides along the lid without crossing it.

**Step 3: the volume of $E$.** In cylindrical coordinates, $E$ is $0 \\le z \\le 1 - r^2$ over the unit disk: $\\int_0^{2\\pi}\\int_0^1 (1 - r^2)\\, r\\, dr\\, d\\theta = 2\\pi\\left(\\tfrac12 - \\tfrac14\\right) = \\tfrac\\pi2$.

**Step 4.** The closed surface is paraboloid plus lid, so (paraboloid flux) $+$ (lid flux) $=$ total, and (paraboloid flux) $=$ total $-$ (lid flux).
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