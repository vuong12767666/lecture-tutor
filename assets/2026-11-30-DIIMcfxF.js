var e=`---
title: Stokes' Theorem, including the definition of the curl
date: 2026-11-30
stewart: 16.8, 16.5
source: OpenStax Calculus Volume 3, §6.5 Divergence and Curl and §6.7 Stokes' Theorem
---

:::recap Last time
- The [[curl]] of $\\mathbf F = \\langle P, Q, R \\rangle$ is $\\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle$ (Nov 13).
- Green's Theorem: around a counterclockwise loop $C$ in the plane, $\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_D (Q_x - P_y)\\, dA$ (Nov 9).
- Flux through a surface adds up $\\mathbf F \\cdot \\mathbf n\\, dS$ (Nov 16).
:::

:::check
Warm-up: what is the third component of the curl of $\\mathbf F = \\langle -y,\\ x,\\ 0 \\rangle$?
answer: 2
???
The third component is $Q_x - P_y = 1 - (-1) = 2$. The whole curl is $\\langle 0, 0, 2 \\rangle$.
:::

:::question Today
What does the curl measure, exactly? And how does Green's Theorem work for a loop that isn't flat, around a surface that curves through space?
:::

:::idea Curl as circulation per unit area
Take a point $P$, a direction $\\mathbf n$ of length $1$, and a small loop around $P$ in the plane perpendicular to $\\mathbf n$, traced counterclockwise as seen from the tip of $\\mathbf n$. Then
$$(\\operatorname{curl}\\mathbf F)(P) \\cdot \\mathbf n \\approx \\frac{1}{\\text{area inside the loop}}\\oint_{\\text{loop}} \\mathbf F \\cdot d\\mathbf r,$$
and the approximation becomes exact as the loop shrinks. So $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n$ is the **circulation per unit area** around the direction $\\mathbf n$. This is the meaning behind the formula.

**Which direction gives the most.** $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n = |\\operatorname{curl}\\mathbf F|\\cos\\theta$ is largest when $\\mathbf n$ points along the curl. So the curl points along the direction with the most circulation around it, and its length is that circulation per unit area.
>>> Two small circles, with numbers, for $\\mathbf F = \\langle -y, x, 0 \\rangle$
The curl is $\\langle 0, 0, 2 \\rangle$. Use circles of radius $r$ centered at the origin.

**Circle in the $xy$-plane** ($\\mathbf n = \\langle 0, 0, 1 \\rangle$, straight up). Trace it as $\\langle r\\cos t, r\\sin t, 0 \\rangle$, counterclockwise from above.
1. The field on it: $\\mathbf F = \\langle -r\\sin t, r\\cos t, 0 \\rangle$.
2. The direction of motion: $\\mathbf r' = \\langle -r\\sin t, r\\cos t, 0 \\rangle$.
3. Dot product: $r^2\\sin^2 t + r^2\\cos^2 t = r^2$. The loop integral is $r^2 \\times 2\\pi$.
4. Divide by the area $\\pi r^2$: $\\tfrac{2\\pi r^2}{\\pi r^2} = 2$, which is $\\operatorname{curl}\\mathbf F \\cdot \\langle 0, 0, 1 \\rangle = 2$ ✓.

**Circle in the $yz$-plane** ($\\mathbf n = \\langle 1, 0, 0 \\rangle$). Trace it as $\\langle 0, r\\cos t, r\\sin t \\rangle$.
1. The field on it: $x = 0$ and $y = r\\cos t$, so $\\mathbf F = \\langle -r\\cos t, 0, 0 \\rangle$.
2. The direction of motion: $\\langle 0, -r\\sin t, r\\cos t \\rangle$, which has no $x$ part.
3. Dot product: $0$. The circulation is $0$, matching $\\operatorname{curl}\\mathbf F \\cdot \\langle 1, 0, 0 \\rangle = 0$ ✓.

So this field circulates around the vertical direction, and not at all around the $x$ direction.
<<<
:::

:::check
For $\\mathbf F$ with $\\operatorname{curl}\\mathbf F = \\langle 3, 0, 4 \\rangle$ at a point, what is the largest circulation per unit area around any direction there?
answer: 5
???
It's the length of the curl, reached when $\\mathbf n$ points along it: $\\sqrt{9 + 0 + 16} = 5$.
:::

:::idea Stokes' Theorem
Let $S$ be a surface with a chosen unit normal $\\mathbf n$, and let $C$ be its boundary curve, traced in the matching direction. Then
$$\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_S \\operatorname{curl}\\mathbf F \\cdot \\mathbf n\\, dS.$$
The circulation around the edge equals the flux of the curl through the surface.

**The matching direction (orientation).** Point your right thumb along $\\mathbf n$; your fingers curl the way to trace $C$. Equivalently: walk along $C$ with your head pointing along $\\mathbf n$, and the surface stays on your left.

**Green's Theorem is the flat case.** If $S$ is a region in the $xy$-plane with $\\mathbf n = \\langle 0, 0, 1 \\rangle$, then $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n = Q_x - P_y$ and $C$ is counterclockwise: exactly Green's Theorem.
>>> The orientation rule, with numbers
**The upper half of the unit sphere, with the outward (upward) normal.** At the top, $\\mathbf n = \\langle 0, 0, 1 \\rangle$. The edge is the unit circle in the $xy$-plane.
- Thumb up, fingers curl counterclockwise as seen from above. So $C$ goes $(1, 0, 0) \\to (0, 1, 0) \\to (-1, 0, 0) \\to (0, -1, 0)$.
- Check with walking: at $(1, 0, 0)$, walking toward $(0, 1, 0)$ with your head up, your left is toward the origin's side, where the hemisphere rises. The surface is on your left ✓.

**The same hemisphere with the inward normal** would need the edge traced clockwise. Flipping the normal flips the loop's direction, and both sides of the theorem change sign together.
<<<

**Why it's true.** Cut $S$ into tiny patches. Around each patch, the loop integral is about $(\\operatorname{curl}\\mathbf F \\cdot \\mathbf n) \\times (\\text{area})$, by the circulation meaning above. Add all the patch loops. Every inside edge is shared by two patches and traced in opposite directions, so those parts cancel, leaving only the outer edge $C$. That's Oct 12's tiny-squares argument, done on a curved surface.
>>> The cancelling, with numbers
Take the flat square $0 \\le x \\le 2$, $0 \\le y \\le 1$ cut into two unit squares, with $\\mathbf F = \\langle -y, x, 0 \\rangle$ (curl $\\langle 0, 0, 2 \\rangle$).
1. **Each unit square** has circulation $2 \\times 1 = 2$ (curl times area).
2. **The shared edge** $x = 1$ is walked up by the left square (adding $Q \\times 1 = 1$) and down by the right square (adding $-1$). They cancel.
3. **The big rectangle's edge directly:** bottom $0$, right side ($x = 2$, up) $2$, top ($y = 1$, going left a distance $2$) $2$, left side $0$. Total $4 = 2 + 2$ ✓.

On a curved surface the patches are bent, but the shared edges still cancel the same way.
<<<
:::

:::theorem Stokes' Theorem
If $S$ is a piecewise smooth oriented surface whose boundary is a simple closed curve $C$ traced in the matching direction, and $\\mathbf F$ has continuous partial derivatives near $S$, then
$$\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_S \\operatorname{curl}\\mathbf F \\cdot d\\mathbf S.$$

**Why:** cut $S$ into small patches. Each patch's loop integral is about $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n$ times its area. Adding them, the inside edges cancel in pairs (each is traced once in each direction), leaving the boundary $C$. As the patches shrink, the approximations become exact.
:::

:::example Both sides on a hemisphere
Check Stokes' Theorem for $\\mathbf F = \\langle -y,\\ x,\\ z \\rangle$ on the upper half of the unit sphere, with the outward normal.

**The edge.** The unit circle $\\langle \\cos t, \\sin t, 0 \\rangle$, counterclockwise from above. There $\\mathbf F = \\langle -\\sin t, \\cos t, 0 \\rangle$ and $\\mathbf r' = \\langle -\\sin t, \\cos t, 0 \\rangle$, so the integrand is $1$ and $\\oint_C \\mathbf F \\cdot d\\mathbf r = 2\\pi$.

**The surface.** $\\operatorname{curl}\\mathbf F = \\langle 0, 0, 2 \\rangle$. On the sphere, the outward normal at the point with angle $\\varphi$ from the top has $z$-part $\\cos\\varphi$, and $dS = \\sin\\varphi\\, d\\varphi\\, d\\theta$ (Nov 6). So
$$\\iint_S \\operatorname{curl}\\mathbf F \\cdot \\mathbf n\\, dS = \\int_0^{2\\pi}\\int_0^{\\pi/2} 2\\cos\\varphi\\sin\\varphi\\, d\\varphi\\, d\\theta = 2 \\cdot \\tfrac12 \\cdot 2\\pi = 2\\pi. \\;✓$$
>>> Each step, and why they agree
1. **The curl.** $P = -y$, $Q = x$, $R = z$. First: $R_y - Q_z = 0 - 0 = 0$. Second: $P_z - R_x = 0 - 0 = 0$. Third: $Q_x - P_y = 1 + 1 = 2$. The $z$ in $R$ doesn't matter, because $R = z$ only changes with $z$, and the curl uses $R_x$ and $R_y$.
2. **The normal on the sphere.** On the unit sphere, the outward normal at a point is the point itself, $\\langle \\sin\\varphi\\cos\\theta, \\sin\\varphi\\sin\\theta, \\cos\\varphi \\rangle$. Its $z$-part is $\\cos\\varphi$: $1$ at the top ($\\varphi = 0$), $0$ at the edge ($\\varphi = \\tfrac{\\pi}{2}$). For example, at $\\varphi = \\tfrac{\\pi}{3}$ the normal's $z$-part is $0.5$, so there the curl $\\langle 0, 0, 2 \\rangle$ contributes $2 \\times 0.5 = 1$ per unit area.
3. **The integral.** $\\int_0^{\\pi/2} \\cos\\varphi\\sin\\varphi\\, d\\varphi = \\tfrac12$ (substitute $u = \\sin\\varphi$). Times $2$ and times $2\\pi$: $2\\pi$.
4. **Why both are $2\\pi$.** The flat unit disk has the same edge, and the flux of $\\langle 0, 0, 2 \\rangle$ up through it is $2 \\times \\pi = 2\\pi$ too. Next lecture uses this: any surface with the same edge gives the same answer.
<<<
:::

:::check
Use Stokes' Theorem: for $\\mathbf F = \\langle z,\\ x,\\ y \\rangle$, find $\\oint_C \\mathbf F \\cdot d\\mathbf r$ where $C$ is the circle $x^2 + y^2 = 4$ in the $xy$-plane, counterclockwise as seen from above.
answer: 4pi
???
$\\operatorname{curl}\\mathbf F = \\langle R_y - Q_z, P_z - R_x, Q_x - P_y \\rangle = \\langle 1 - 0, 1 - 0, 1 - 0 \\rangle = \\langle 1, 1, 1 \\rangle$. Take $S$ to be the flat disk inside $C$, with $\\mathbf n = \\langle 0, 0, 1 \\rangle$ (matching counterclockwise from above). Then $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n = 1$, and the flux is the disk's area, $4\\pi$.
:::

:::summary Summary
- $\\operatorname{curl}\\mathbf F \\cdot \\mathbf n$ is the circulation per unit area around the direction $\\mathbf n$. The curl points along the direction with the most circulation.
- Stokes' Theorem: $\\oint_C \\mathbf F \\cdot d\\mathbf r = \\iint_S \\operatorname{curl}\\mathbf F \\cdot \\mathbf n\\, dS$, with $C$ traced so that your right thumb along $\\mathbf n$ curls your fingers along $C$.
- Green's Theorem is the flat case, with $\\mathbf n = \\langle 0, 0, 1 \\rangle$.

**Common mistakes:**
- Tracing $C$ the wrong way for the chosen normal, which flips the sign.
- Taking the flux of $\\mathbf F$ instead of the flux of $\\operatorname{curl}\\mathbf F$.
:::
`;export{e as default};