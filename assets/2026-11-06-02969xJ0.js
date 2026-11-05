var e=`---
title: Area and integration on surfaces
date: 2026-11-06
stewart: 16.6, 16.7
source: OpenStax Calculus Volume 3, §6.6 Surface Integrals
---

:::recap Last time
- A [[parametric surface]] is $\\mathbf r(u, v)$, with $(u, v)$ in a region $D$.
- $\\mathbf r_u$ and $\\mathbf r_v$ are tangent to the surface, and $\\mathbf r_u \\times \\mathbf r_v$ is normal to it.
- On Oct 30, a small rectangle in the $uv$-plane became a small parallelogram, and the [[jacobian|Jacobian]] measured its area.
:::

:::check
Warm-up: what is the length of $\\langle 1, 2, 2 \\rangle \\times \\langle 0, 0, 1 \\rangle$?
answer: sqrt(5)
???
$\\langle 1, 2, 2 \\rangle \\times \\langle 0, 0, 1 \\rangle = \\langle 2 \\cdot 1 - 2 \\cdot 0,\\ 2 \\cdot 0 - 1 \\cdot 1,\\ 1 \\cdot 0 - 2 \\cdot 0 \\rangle = \\langle 2, -1, 0 \\rangle$, with length $\\sqrt{4 + 1 + 0} = \\sqrt5$. That's the area of the parallelogram with those two sides.
:::

:::question Today
How do you find the area of a curved surface, like part of a sphere or a paraboloid? And how do you add up a quantity spread over a surface, like the mass of a thin curved sheet?
:::

:::idea Surface area
The area of the surface $\\mathbf r(u, v)$, $(u, v)$ in $D$, is
$$A = \\iint_D |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv.$$

**Why, in three steps.**
1. **Cut $D$ into small rectangles** $\\Delta u \\times \\Delta v$. Each one becomes a small curved patch of the surface.
2. **Each patch is nearly a parallelogram** with sides $\\mathbf r_u\\,\\Delta u$ and $\\mathbf r_v\\,\\Delta v$ (the same linear approximation as for the Jacobian on Oct 30, now in 3D).
3. **A parallelogram's area is the length of the cross product of its sides:** $|\\mathbf r_u\\,\\Delta u \\times \\mathbf r_v\\,\\Delta v| = |\\mathbf r_u \\times \\mathbf r_v|\\,\\Delta u\\,\\Delta v$. Adding the patches and letting them shrink gives the integral.
>>> Each of the three steps, worked out
**Step 1: cut the surface into patches.** Cut the $(u, v)$ region into small rectangles. Each one is carried by $\\mathbf r$ to a small curved patch of the surface. Together the patches cover the surface, so its area is the sum of their areas.

**Step 2: each patch is nearly a parallelogram.** Going from $(u, v)$ to $(u + \\Delta u, v)$ moves along the surface by about $\\mathbf r_u\\,\\Delta u$ (rate of change times the small change, in each coordinate). Changing $v$ moves by about $\\mathbf r_v\\,\\Delta v$. So the patch's two sides are about these two arrows, and the patch is about the parallelogram they make.

**Step 3: a parallelogram's area is the length of the cross product of its sides** (Aug 31). Numbers can be pulled out of a cross product, so $|\\mathbf r_u\\,\\Delta u \\times \\mathbf r_v\\,\\Delta v| = |\\mathbf r_u \\times \\mathbf r_v|\\,\\Delta u\\,\\Delta v$. Adding these over all the patches, with smaller and smaller rectangles, gives $\\iint_D |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$.

**An example.** For the flat plane $\\mathbf r(u, v) = \\langle u, v, 0 \\rangle$ (the floor), $\\mathbf r_u = \\langle 1, 0, 0 \\rangle$ and $\\mathbf r_v = \\langle 0, 1, 0 \\rangle$, whose cross product $\\langle 0, 0, 1 \\rangle$ has length $1$: each patch has the same area as its $(u, v)$ rectangle, as it should.

**The same idea as the Jacobian.** On Oct 30 the patch lay flat, and its area factor was $|x_u y_v - x_v y_u|$. Now the patch can tilt in space, so all three components of the cross product count.
<<<

**For a graph** $z = f(x, y)$: last time, $\\mathbf r_x \\times \\mathbf r_y = \\langle -f_x, -f_y, 1 \\rangle$, so
$$A = \\iint_D \\sqrt{1 + f_x^2 + f_y^2}\\; dA.$$

**Example: a sphere of radius $a$.** With $\\mathbf r(\\varphi, \\theta) = \\langle a\\sin\\varphi\\cos\\theta,\\ a\\sin\\varphi\\sin\\theta,\\ a\\cos\\varphi \\rangle$, the length $|\\mathbf r_\\varphi \\times \\mathbf r_\\theta|$ works out to $a^2\\sin\\varphi$, so
$$A = \\int_0^{2\\pi}\\int_0^\\pi a^2\\sin\\varphi\\, d\\varphi\\, d\\theta = a^2 \\cdot 2 \\cdot 2\\pi = 4\\pi a^2,$$
the formula from geometry.
>>> Each step of the sphere, worked out
**The two arrows along the sphere.** $\\mathbf r(\\varphi, \\theta) = \\langle a\\sin\\varphi\\cos\\theta,\\ a\\sin\\varphi\\sin\\theta,\\ a\\cos\\varphi \\rangle$.
- $\\mathbf r_\\varphi$ (only $\\varphi$ changes, $\\sin \\to \\cos$ and $\\cos \\to -\\sin$): $\\langle a\\cos\\varphi\\cos\\theta,\\ a\\cos\\varphi\\sin\\theta,\\ -a\\sin\\varphi \\rangle$. This points along a north-south circle.
- $\\mathbf r_\\theta$ (only $\\theta$ changes): $\\langle -a\\sin\\varphi\\sin\\theta,\\ a\\sin\\varphi\\cos\\theta,\\ 0 \\rangle$. This points along an east-west circle.

**The cross product, one component at a time.**
- first: $a\\cos\\varphi\\sin\\theta \\cdot 0 - (-a\\sin\\varphi)(a\\sin\\varphi\\cos\\theta) = a^2\\sin^2\\varphi\\cos\\theta$,
- second: $(-a\\sin\\varphi)(-a\\sin\\varphi\\sin\\theta) - a\\cos\\varphi\\cos\\theta \\cdot 0 = a^2\\sin^2\\varphi\\sin\\theta$,
- third: $a\\cos\\varphi\\cos\\theta \\cdot a\\sin\\varphi\\cos\\theta - a\\cos\\varphi\\sin\\theta \\cdot (-a\\sin\\varphi\\sin\\theta) = a^2\\sin\\varphi\\cos\\varphi$.

That's $a\\sin\\varphi$ times $\\langle a\\sin\\varphi\\cos\\theta, a\\sin\\varphi\\sin\\theta, a\\cos\\varphi \\rangle$, which is $a\\sin\\varphi$ times the point itself. So it points straight out from the center, as an arrow sticking out of a sphere should.

**Its length.** The point itself is at distance $a$ from the center, and $a\\sin\\varphi \\ge 0$ for $0 \\le \\varphi \\le \\pi$, so the length is $a\\sin\\varphi \\times a = a^2\\sin\\varphi$.

**The integral.** $\\int_0^\\pi \\sin\\varphi\\, d\\varphi = \\Big[-\\cos\\varphi\\Big]_0^\\pi = 1 - (-1) = 2$, and $\\int_0^{2\\pi} d\\theta = 2\\pi$. Area: $a^2 \\cdot 2 \\cdot 2\\pi = 4\\pi a^2$, the sphere's area from geometry ✓.

**Compare with Oct 28.** A small piece of the *ball* had volume $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$. A small patch of the *sphere* is that piece's outer face, with area $a^2\\sin\\varphi\\,\\Delta\\varphi\\,\\Delta\\theta$: the same factor with $\\rho = a$ and no thickness.
<<<

**Example: a paraboloid.** The part of $z = x^2 + y^2$ below $z = 1$.
1. Here $f_x = 2x$ and $f_y = 2y$, so $\\sqrt{1 + f_x^2 + f_y^2} = \\sqrt{1 + 4x^2 + 4y^2} = \\sqrt{1 + 4r^2}$.
2. Below $z = 1$ means $x^2 + y^2 \\le 1$, the unit disk: $0 \\le r \\le 1$, $0 \\le \\theta \\le 2\\pi$.
3. $\\displaystyle A = \\int_0^{2\\pi}\\int_0^1 \\sqrt{1 + 4r^2}\\; r\\, dr\\, d\\theta = \\frac{\\pi}{6}\\big(5\\sqrt5 - 1\\big) \\approx 5.33.$
>>> Each step of the paraboloid, worked out
**Step 1: the slopes.** $f(x, y) = x^2 + y^2$. Its slope in the $x$ direction is $f_x = 2x$ and in the $y$ direction $f_y = 2y$. So $f_x^2 + f_y^2 = 4x^2 + 4y^2 = 4r^2$, where $r$ is the distance from the $z$-axis.

**What the stretch factor means.** $\\sqrt{1 + f_x^2 + f_y^2}$ is how many times bigger a small patch of the surface is than its shadow on the floor. At the bottom ($r = 0$) it's $1$: the bowl is flat there. At $r = 1$ it's $\\sqrt5 \\approx 2.24$: the bowl is steep there, so a patch is more than twice its shadow.

**Step 2: the shadow, from the rule.** The surface is $z = x^2 + y^2$, and "below $z = 1$" means $x^2 + y^2 \\le 1$: the unit disk. In polar: $0 \\le r \\le 1$, all the way around.

**Step 3: the integral.** In polar, a small piece of the floor has area $r\\, dr\\, d\\theta$, so the integrand is $\\sqrt{1 + 4r^2}\\, r$. For the inside integral, let $w = 1 + 4r^2$; then $\\tfrac{dw}{dr} = 8r$, so $r\\, dr = \\tfrac18\\, dw$; $r = 0$ gives $w = 1$ and $r = 1$ gives $w = 5$:
$$\\int_0^1 \\sqrt{1 + 4r^2}\\; r\\, dr = \\frac18\\int_1^5 w^{1/2}\\, dw = \\frac18 \\cdot \\frac23\\Big[w^{3/2}\\Big]_1^5 = \\frac{1}{12}\\big(5\\sqrt5 - 1\\big).$$
Around: multiply by $2\\pi$: $\\tfrac\\pi6\\big(5\\sqrt5 - 1\\big) \\approx 5.33$.

**Is it reasonable?** The flat disk under it has area $\\pi \\approx 3.14$. The bowl covers the same disk but tilts more and more toward its edge, so its area should be bigger: $5.33 > 3.14$ ✓.
<<<
:::

:::check
Find the area of the part of the plane $z = 2x + 2y$ above the square $0 \\le x \\le 1$, $0 \\le y \\le 1$.
answer: 3
???
$f_x = 2$ and $f_y = 2$, so $\\sqrt{1 + f_x^2 + f_y^2} = \\sqrt{1 + 4 + 4} = 3$. The area is $\\iint_D 3\\, dA = 3 \\cdot (\\text{area of the square}) = 3$. The tilted plane has $3$ times the area of its shadow.
:::

:::idea Integrals over a surface
To add up a function $f(x, y, z)$ over a surface $S$, weight each patch by its area:
$$\\iint_S f\\, dS = \\iint_D f\\big(\\mathbf r(u, v)\\big)\\, |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv.$$
Here $dS = |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$ is the area of a small patch, called the **surface area element**.

**What it measures,** as with every integral so far:
- $f = 1$ gives the surface area.
- $f$ = density (mass per unit area) of a thin curved sheet gives its **mass**.
- $\\dfrac{1}{\\text{area}}\\iint_S f\\, dS$ is the **average** of $f$ over the surface.

**Example.** $\\iint_S z\\, dS$ over the upper hemisphere $x^2 + y^2 + z^2 = a^2$, $z \\ge 0$.
1. **Parametrize:** the sphere's $\\mathbf r(\\varphi, \\theta)$ with $0 \\le \\varphi \\le \\tfrac\\pi2$ (upper half), $0 \\le \\theta \\le 2\\pi$.
2. **$f$ on the surface:** $z = a\\cos\\varphi$. **Patch area:** $dS = a^2\\sin\\varphi\\, d\\varphi\\, d\\theta$.
3. $\\displaystyle\\iint_S z\\, dS = \\int_0^{2\\pi}\\int_0^{\\pi/2} a\\cos\\varphi \\cdot a^2\\sin\\varphi\\, d\\varphi\\, d\\theta = \\pi a^3.$
>>> Each step of the hemisphere, worked out
**What's being added up.** Each small patch of the hemisphere contributes (its height $z$) $\\times$ (its area). Dividing the total by the hemisphere's area would give the average height of its surface.

**Step 1: the range.** The upper half is $z \\ge 0$. On the sphere $z = a\\cos\\varphi$, so that's $\\cos\\varphi \\ge 0$, which is $0 \\le \\varphi \\le \\tfrac\\pi2$ (from straight up to level with the floor). $\\theta$ goes all the way around.

**Step 2: the pieces.** The height on the sphere is $a\\cos\\varphi$ (the third coordinate of $\\mathbf r$). The patch area is $a^2\\sin\\varphi\\,\\Delta\\varphi\\,\\Delta\\theta$, from the sphere example above. So the integrand is $a\\cos\\varphi \\cdot a^2\\sin\\varphi = a^3\\cos\\varphi\\sin\\varphi$.

**Step 3: the integral.** For the $\\varphi$ part, let $w = \\sin\\varphi$; then $dw = \\cos\\varphi\\, d\\varphi$, and $\\varphi$ from $0$ to $\\tfrac\\pi2$ gives $w$ from $0$ to $1$: $\\int_0^{\\pi/2}\\cos\\varphi\\sin\\varphi\\, d\\varphi = \\int_0^1 w\\, dw = \\tfrac12$. Total: $a^3 \\cdot \\tfrac12 \\cdot 2\\pi = \\pi a^3$.

**Is it reasonable?** The hemisphere's area is $2\\pi a^2$, so the average height of its surface is $\\tfrac{\\pi a^3}{2\\pi a^2} = \\tfrac a2$, between the rim (height $0$) and the top (height $a$) ✓. It's exactly halfway because of a fact Archimedes found: horizontal bands of a sphere with the same height have the same area, so the sphere's surface is spread evenly over the heights from $0$ to $a$.
<<<

**Example: a cylinder.** $\\iint_S z\\, dS$ over the side of the cylinder $x^2 + y^2 = 4$, $0 \\le z \\le 3$.
1. $\\mathbf r(\\theta, z) = \\langle 2\\cos\\theta,\\ 2\\sin\\theta,\\ z \\rangle$, $0 \\le \\theta \\le 2\\pi$, $0 \\le z \\le 3$.
2. $|\\mathbf r_\\theta \\times \\mathbf r_z| = 2$.
3. $\\displaystyle\\int_0^{2\\pi}\\int_0^3 z \\cdot 2\\, dz\\, d\\theta = 2\\pi \\cdot 9 = 18\\pi.$
>>> Each step of the cylinder, worked out
**Step 1: the parametrization.** The side of the cylinder is every point at distance $2$ from the $z$-axis, with height from $0$ to $3$: $\\mathbf r(\\theta, z) = \\langle 2\\cos\\theta, 2\\sin\\theta, z \\rangle$.

**Step 2: the patch area.** $\\mathbf r_\\theta = \\langle -2\\sin\\theta, 2\\cos\\theta, 0 \\rangle$ (around the cylinder) and $\\mathbf r_z = \\langle 0, 0, 1 \\rangle$ (straight up). Their cross product is $\\langle 2\\cos\\theta \\cdot 1 - 0,\\ 0 - (-2\\sin\\theta) \\cdot 1,\\ 0 \\rangle = \\langle 2\\cos\\theta, 2\\sin\\theta, 0 \\rangle$, which points straight out from the axis and has length $\\sqrt{4\\cos^2\\theta + 4\\sin^2\\theta} = 2$.

**Why $2$ makes sense.** Change $\\theta$ by $\\Delta\\theta$ and you move $2\\,\\Delta\\theta$ around the circle (arc length is radius times angle). Change $z$ by $\\Delta z$ and you move $\\Delta z$ up. The patch is a $2\\,\\Delta\\theta$ by $\\Delta z$ rectangle (the cylinder's side can be unrolled flat), so its area is $2\\,\\Delta\\theta\\,\\Delta z$.

**Step 3: the integral.** Up the side: $\\int_0^3 z \\cdot 2\\, dz = \\Big[z^2\\Big]_0^3 = 9$. Around: multiply by $2\\pi$: $18\\pi$.

**Is it reasonable?** The side's area is (circumference $2\\pi \\cdot 2$) $\\times$ (height $3$) $= 12\\pi$, so the average height is $\\tfrac{18\\pi}{12\\pi} = 1.5$: exactly halfway up, as it should be for straight sides.
<<<
:::

:::check
What is $\\displaystyle\\iint_S 1\\, dS$, where $S$ is the side of the cylinder $x^2 + y^2 = 4$, $0 \\le z \\le 3$?
answer: 12pi
???
With $dS = 2\\, d\\theta\\, dz$: $\\int_0^{2\\pi}\\int_0^3 2\\, dz\\, d\\theta = 2 \\cdot 3 \\cdot 2\\pi = 12\\pi$. That's the side's area: circumference $4\\pi$ times height $3$.
:::

:::summary Summary
- **Surface area:** $A = \\iint_D |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$, because each patch is nearly a parallelogram with sides $\\mathbf r_u\\Delta u$ and $\\mathbf r_v\\Delta v$.
- **Graph:** $dS = \\sqrt{1 + f_x^2 + f_y^2}\\, dA$. **Sphere of radius $a$:** $dS = a^2\\sin\\varphi\\, d\\varphi\\, d\\theta$. **Cylinder of radius $a$:** $dS = a\\, d\\theta\\, dz$.
- **[[surface integral|Surface integral]]:** $\\iint_S f\\, dS = \\iint_D f(\\mathbf r(u, v))\\,|\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$: area, mass, or average.

**Common mistakes:**
- Forgetting $|\\mathbf r_u \\times \\mathbf r_v|$ (the surface version of forgetting $r$ in polar).
- Leaving $f$ in terms of $x$, $y$, $z$ instead of substituting the parametrization.
- Using the whole sphere's $\\varphi$-range for a hemisphere.
:::
`;export{e as default};