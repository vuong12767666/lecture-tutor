var e=`---
title: More on Stokes' Theorem and understanding the curl; review of conservative fields
date: 2026-12-02
stewart: 16.8, 16.5
source: OpenStax Calculus Volume 3, §6.7 Stokes' Theorem and §6.3 Conservative Vector Fields
---

:::recap Last time
- [[stokes theorem|Stokes' Theorem]]: $\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_S \\operatorname{curl}\\mathbf F \\cdot \\mathbf n\\, dS$, with $C$ traced so that your right thumb along $\\mathbf n$ curls your fingers along $C$.
- $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n$ is the circulation per unit area around the direction $\\mathbf n$.
:::

:::check
Warm-up: for a flat region in the $xy$-plane with $\\mathbf n = \\langle 0, 0, 1 \\rangle$, which way is its edge traced in Stokes' Theorem?
- [x] Counterclockwise, as seen from above
- [ ] Clockwise, as seen from above
  why: With your right thumb pointing up, your fingers curl counterclockwise as seen from above.
???
Thumb along $\\mathbf n = \\langle 0, 0, 1 \\rangle$ (up), fingers curl counterclockwise as seen from above. That's why Green's Theorem uses counterclockwise loops.
:::

:::question Today
How does Stokes' Theorem make hard integrals easy, in either direction? What does a zero curl tell you? And how does that connect to conservative fields?
:::

:::idea Swapping to an easier surface
Stokes' Theorem says the flux of $\\operatorname{curl}\\mathbf F$ through $S$ depends only on the edge $C$. So **any two surfaces with the same edge and matching orientation give the same flux of the curl.** When one surface is hard, use an easier one with the same edge, or skip surfaces and compute the loop integral.
>>> A hard surface integral, done through its edge
Find the flux of $\\operatorname{curl}\\mathbf F$ up through the hemisphere $z = \\sqrt{4 - x^2 - y^2}$, for $\\mathbf F = \\langle -y,\\ x,\\ e^{xyz} \\rangle$.

1. **Why not compute it directly.** The curl has terms like $xz\\,e^{xyz}$, and integrating those over a sphere is messy.
2. **The edge.** Where $z = 0$: the circle $x^2 + y^2 = 4$. The upward normal matches counterclockwise from above: $\\langle 2\\cos t, 2\\sin t, 0 \\rangle$, $0 \\le t \\le 2\\pi$.
3. **The field on the edge.** $z = 0$ makes $e^{xyz} = e^0 = 1$, so $\\mathbf F = \\langle -2\\sin t, 2\\cos t, 1 \\rangle$.
4. **The direction of motion.** $\\mathbf r' = \\langle -2\\sin t, 2\\cos t, 0 \\rangle$. Its $z$ part is $0$, so the messy third component doesn't matter.
5. **Dot product and integral.** $4\\sin^2 t + 4\\cos^2 t + 0 = 4$, and $\\int_0^{2\\pi} 4\\, dt = 8\\pi$.

**The same answer through the flat disk.** On $z = 0$, the curl's $z$ part is $Q_x - P_y = 1 + 1 = 2$ (the $e^{xyz}$ term doesn't enter it). Flux up through the disk of radius $2$: $2 \\times 4\\pi = 8\\pi$ ✓.
<<<
:::

:::check
$S_1$ is the upper half of the unit sphere and $S_2$ is the paraboloid $z = 1 - x^2 - y^2$, $z \\ge 0$, both with upward normals. If the flux of $\\operatorname{curl}\\mathbf F$ through $S_1$ is $7$, what is it through $S_2$?
answer: 7
???
Both surfaces have the same edge, the unit circle in the $xy$-plane, traced the same way. Stokes' Theorem says both fluxes equal the loop integral around that circle, so both are $7$.
:::

:::idea Using Stokes' Theorem for a line integral
Going the other way: a loop integral around a closed curve made of several pieces can be replaced by the flux of the curl through any surface the curve bounds. A flat surface is usually easiest.
>>> A triangle in space, both ways
Let $C$ be the triangle $(1, 0, 0) \\to (0, 1, 0) \\to (0, 0, 1) \\to (1, 0, 0)$, and $\\mathbf F = \\langle z, x, y \\rangle$.

**With Stokes' Theorem.**
1. **The curl.** $\\langle R_y - Q_z, P_z - R_x, Q_x - P_y \\rangle = \\langle 1, 1, 1 \\rangle$.
2. **The surface.** The flat triangle, in the plane $x + y + z = 1$. Its normal is along $\\langle 1, 1, 1 \\rangle$. Seen from above, the corners go $(1, 0) \\to (0, 1) \\to (0, 0)$: counterclockwise, so the matching normal points up, $\\mathbf n = \\tfrac{1}{\\sqrt3}\\langle 1, 1, 1 \\rangle$.
3. **Curl dotted with the normal.** $\\tfrac{1 + 1 + 1}{\\sqrt3} = \\sqrt3$, the same at every point.
4. **The triangle's area.** Two sides from $(1, 0, 0)$ are $\\langle -1, 1, 0 \\rangle$ and $\\langle -1, 0, 1 \\rangle$, with cross product $\\langle 1, 1, 1 \\rangle$ of length $\\sqrt3$. Half of that: $\\tfrac{\\sqrt3}{2}$ (Aug 31).
5. **Flux.** $\\sqrt3 \\times \\tfrac{\\sqrt3}{2} = \\tfrac32$.

**Directly, side by side.** On $(1, 0, 0) \\to (0, 1, 0)$: $\\mathbf r = \\langle 1 - t, t, 0 \\rangle$, $\\mathbf F = \\langle 0, 1 - t, t \\rangle$, $\\mathbf r' = \\langle -1, 1, 0 \\rangle$, so the integrand is $1 - t$, giving $\\tfrac12$. The other two sides work the same way and give $\\tfrac12$ each. Total $\\tfrac32$ ✓.
<<<
:::

:::check
For $\\mathbf F = \\langle -y,\\ x,\\ 0 \\rangle$, find $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around the square $0 \\le x \\le 3$, $0 \\le y \\le 3$ in the plane $z = 5$, counterclockwise as seen from above.
answer: 18
???
$\\operatorname{curl}\\mathbf F = \\langle 0, 0, 2 \\rangle$. Use the flat square itself with $\\mathbf n = \\langle 0, 0, 1 \\rangle$: the curl dotted with $\\mathbf n$ is $2$ everywhere, and the area is $9$, so the integral is $18$. The height $z = 5$ doesn't matter.
:::

:::idea What a zero curl tells you
If $\\operatorname{curl}\\mathbf F = \\mathbf 0$ everywhere on a surface $S$, then Stokes' Theorem gives $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$ around its edge. So:

**In a region with no holes, zero curl means every closed loop gives $0$**, because every loop is the edge of some surface inside the region. And zero around every loop means path independence, which means conservative (Oct 14's four equivalent statements, now in 3D).

**A nonzero curl somewhere** means some small loop there has nonzero circulation, so the field isn't conservative.
>>> Both directions, with numbers
**Zero curl: $\\mathbf F = \\langle yz, xz, xy \\rangle$.** Its curl is $\\langle x - x, y - y, z - z \\rangle = \\mathbf 0$ (Nov 13). It's $\\nabla(xyz)$. Around the triangle from the last part: on $(1, 0, 0) \\to (0, 1, 0)$, $z = 0$, so $\\mathbf F = \\langle 0, 0, (1 - t)t \\rangle$, and $\\mathbf r' = \\langle -1, 1, 0 \\rangle$ has no $z$ part: $0$. The other two sides also give $0$ by the same pattern, so the loop gives $0$, as zero curl predicts.

**Nonzero curl: $\\mathbf F = \\langle z, x, y \\rangle$.** Its curl is $\\langle 1, 1, 1 \\rangle$, and the same triangle gave $\\tfrac32 \\ne 0$. So it isn't conservative.
<<<
:::

:::check
$\\operatorname{curl}\\mathbf F = \\mathbf 0$ everywhere in space. What is $\\oint_C \\mathbf F \\cdot d\\mathbf r$ around any closed curve $C$?
answer: 0
???
Space has no holes, so any closed curve is the edge of some surface. Stokes' Theorem then gives $\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_S \\mathbf 0 \\cdot \\mathbf n\\, dS = 0$.
:::

:::idea Review: conservative fields in 3D
For $\\mathbf F$ with continuous partial derivatives on a region $D$ in space with no holes, these all say the same thing:
1. $\\mathbf F = \\nabla f$ for some potential function $f$.
2. $\\int_C \\mathbf F \\cdot d\\mathbf r$ is path independent, and equals $f(\\text{end}) - f(\\text{start})$.
3. $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$ around every closed curve.
4. $\\operatorname{curl}\\mathbf F = \\mathbf 0$.

1 gives 4 because the curl of a gradient is $\\mathbf 0$ (Nov 13). 4 gives 3 by Stokes' Theorem (the last part). 3 and 2 are the same (Oct 14). 2 gives 1 by building $f$ as the integral from a fixed point (Oct 12).
>>> Using the four statements on one field
Take $\\mathbf F = \\langle 2x,\\ 3z,\\ 3y \\rangle$.
1. **Statement 4.** $\\operatorname{curl}\\mathbf F = \\langle 3 - 3, 0 - 0, 0 - 0 \\rangle = \\mathbf 0$, and $\\mathbf F$ is defined everywhere.
2. **Statement 1.** Integrate $P = 2x$ in $x$: $f = x^2 + g(y, z)$. Match $Q$: $g_y = 3z$, so $g = 3yz + h(z)$. Match $R$: $3y + h'(z) = 3y$, so $h = 0$. So $f = x^2 + 3yz$.
3. **Statement 2.** From $(0, 0, 0)$ to $(1, 2, 3)$, any path gives $f(1, 2, 3) - f(0, 0, 0) = 1 + 18 = 19$.
4. **Check with a straight path.** $\\mathbf r = \\langle t, 2t, 3t \\rangle$: $\\mathbf F = \\langle 2t, 9t, 6t \\rangle$ and $\\mathbf r' = \\langle 1, 2, 3 \\rangle$, so the integrand is $2t + 18t + 18t = 38t$, and $\\int_0^1 38t\\, dt = 19$ ✓.
<<<
:::

:::check
Find $\\int_C \\langle 2x,\\ 3z,\\ 3y \\rangle \\cdot d\\mathbf r$ along any path from $(1, 0, 0)$ to $(2, 1, 1)$.
answer: 6
???
The curl is $\\mathbf 0$ on all of space, so the field is conservative with $f = x^2 + 3yz$. The integral is $f(2, 1, 1) - f(1, 0, 0) = (4 + 3) - (1 + 0) = 6$.
:::

:::summary Summary
- Same edge, same orientation: same flux of the curl. Swap a hard surface for an easy one, or compute the edge's loop integral.
- A loop integral around a closed curve can be replaced by the flux of the curl through a flat surface it bounds.
- Zero curl on a region with no holes means every loop gives $0$: conservative. The four statements (gradient, path independent, zero around loops, zero curl) are equivalent there.

**Common mistakes:**
- Choosing an easier surface with a different edge, or the opposite orientation.
- Concluding conservative from zero curl on a region with a hole (Dec 4).
:::
`;export{e as default};