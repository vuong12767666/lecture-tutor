var e=`---
title: Surfaces in R3
date: 2026-11-04
stewart: 16.6
source: OpenStax Calculus Volume 3, §6.6 Surface Integrals (parametric surfaces)
---

:::recap Last time
- On Oct 2, a curve in space was a [[vector function]] $\\mathbf r(t)$ with one parameter, and $\\mathbf r'(t)$ was tangent to it.
- On Oct 28 and Nov 2, cylindrical and spherical coordinates turned cylinders and spheres into "coordinate $=$ number".
:::

:::check
Warm-up: where is the curve $\\mathbf r(t) = \\langle \\cos t, \\sin t, t \\rangle$ at $t = \\tfrac\\pi2$?
- [x] $\\big(0, 1, \\tfrac\\pi2\\big)$
- [ ] $\\big(1, 0, \\tfrac\\pi2\\big)$
  why: $\\cos\\tfrac\\pi2 = 0$ and $\\sin\\tfrac\\pi2 = 1$, so the first two coordinates are $0$ and $1$, in that order.
- [ ] $(0, 1, 1)$
  why: The third coordinate is $t$ itself, which is $\\tfrac\\pi2$, not $1$.
- [ ] $\\big(\\tfrac\\pi2, 0, 1\\big)$
  why: Plug $t$ into each component in order: $\\cos t$, then $\\sin t$, then $t$.
???
$\\mathbf r\\big(\\tfrac\\pi2\\big) = \\big\\langle \\cos\\tfrac\\pi2,\\ \\sin\\tfrac\\pi2,\\ \\tfrac\\pi2 \\big\\rangle = \\big\\langle 0, 1, \\tfrac\\pi2 \\big\\rangle$. It's on the helix, a quarter turn up.
:::

:::question Today
A curve needs one parameter. How do you describe a surface, like a sphere, a cylinder, or the graph of $z = f(x, y)$, with a formula? And how do you find a vector perpendicular to it, for its tangent plane?
:::

:::idea Parametric surfaces
A [[parametric surface]] uses **two** parameters:
$$\\mathbf r(u, v) = \\langle x(u, v),\\ y(u, v),\\ z(u, v) \\rangle, \\qquad (u, v) \\text{ in a region } D.$$
Each point $(u, v)$ of $D$ gives one point in space, and together they make the surface.

**Grid curves.** Holding $v$ fixed and letting $u$ vary traces a curve on the surface; so does holding $u$ fixed. These curves make a grid on the surface, like lines of latitude and longitude on a globe.

**The surfaces to know:**
- **A graph** $z = f(x, y)$: $\\mathbf r(x, y) = \\langle x,\\ y,\\ f(x, y) \\rangle$, with $x$ and $y$ as the parameters.
- **A cylinder** $x^2 + y^2 = a^2$: $\\mathbf r(\\theta, z) = \\langle a\\cos\\theta,\\ a\\sin\\theta,\\ z \\rangle$.
- **A sphere** $x^2 + y^2 + z^2 = a^2$: $\\mathbf r(\\varphi, \\theta) = \\langle a\\sin\\varphi\\cos\\theta,\\ a\\sin\\varphi\\sin\\theta,\\ a\\cos\\varphi \\rangle$, with $0 \\le \\varphi \\le \\pi$, $0 \\le \\theta \\le 2\\pi$.
- **A cone** $z = \\sqrt{x^2 + y^2}$: $\\mathbf r(r, \\theta) = \\langle r\\cos\\theta,\\ r\\sin\\theta,\\ r \\rangle$.
- **A plane** through the point $P$ containing the directions $\\mathbf a$ and $\\mathbf b$: $\\mathbf r(u, v) = P + u\\,\\mathbf a + v\\,\\mathbf b$.
>>> Where these come from, and how to check one
**The method.** Pick coordinates in which the surface is "one coordinate $=$ number" (or "one coordinate $=$ formula in the others"). Fix that coordinate, and use the other two as the parameters.
- **Cylinder:** in cylindrical coordinates it's $r = a$. The free coordinates are $\\theta$ and $z$, so $x = a\\cos\\theta$, $y = a\\sin\\theta$, $z = z$.
- **Sphere:** in spherical coordinates it's $\\rho = a$. The free ones are $\\varphi$ and $\\theta$, which go into the formulas from Oct 28 with $\\rho = a$.
- **Graph:** $z$ is a formula in $x$ and $y$, so $x$ and $y$ are free.
- **Cone:** in cylindrical coordinates it's $z = r$. The free ones are $r$ and $\\theta$.

**Checking.** Plug the parametrization into the surface's equation; it should hold for every $(u, v)$.
- Cylinder: $x^2 + y^2 = a^2\\cos^2\\theta + a^2\\sin^2\\theta = a^2$ ✓.
- Sphere: $x^2 + y^2 = a^2\\sin^2\\varphi$ (as for the cylinder, with radius $a\\sin\\varphi$), and adding $z^2 = a^2\\cos^2\\varphi$ gives $a^2$ ✓.
- Cone: $\\sqrt{x^2 + y^2} = \\sqrt{r^2} = r = z$ ✓ (with $r \\ge 0$).

**The ranges matter.** $0 \\le \\theta \\le 2\\pi$ goes around once. On the sphere, $0 \\le \\varphi \\le \\pi$ goes from the north pole to the south pole once. A smaller range gives part of the surface: $0 \\le \\varphi \\le \\tfrac\\pi2$ is the upper hemisphere.
<<<
:::

:::check
Which parametrizes the cylinder $x^2 + z^2 = 9$, whose axis is the $y$-axis?
- [x] $\\langle 3\\cos u,\\ v,\\ 3\\sin u \\rangle$
- [ ] $\\langle 3\\cos u,\\ 3\\sin u,\\ v \\rangle$
  why: That gives $x^2 + y^2 = 9$, a cylinder around the $z$-axis. Here the circle is in $x$ and $z$, and $y$ is the free one.
- [ ] $\\langle 9\\cos u,\\ v,\\ 9\\sin u \\rangle$
  why: The radius is $\\sqrt9 = 3$. With $9$, $x^2 + z^2 = 81$.
- [ ] $\\langle \\cos u,\\ v,\\ \\sin u \\rangle$
  why: That's a cylinder of radius $1$: $x^2 + z^2 = 1$.
???
The equation says $x$ and $z$ lie on a circle of radius $3$ while $y$ is free. So $x = 3\\cos u$, $z = 3\\sin u$, $y = v$. Check: $x^2 + z^2 = 9\\cos^2 u + 9\\sin^2 u = 9$ ✓.
:::

:::idea From a parametrization back to an equation
Given $\\mathbf r(u, v)$, you can find what surface it is by **eliminating the parameters**: combine $x$, $y$, and $z$ until $u$ and $v$ cancel out.

**Example.** $\\mathbf r(u, v) = \\langle u\\cos v,\\ u\\sin v,\\ u^2 \\rangle$, with $u \\ge 0$.
1. $x^2 + y^2 = u^2\\cos^2 v + u^2\\sin^2 v = u^2$.
2. $z = u^2$ too.
3. So $z = x^2 + y^2$: a paraboloid opening upward.
>>> Each step, and how to spot the combination
**Step 1: why $x^2 + y^2$.** When $\\cos$ and $\\sin$ of the same parameter appear, squaring and adding makes $\\cos^2 + \\sin^2 = 1$ and removes that parameter. Here $x = u\\cos v$ and $y = u\\sin v$, so $x^2 + y^2 = u^2(\\cos^2 v + \\sin^2 v) = u^2$, and $v$ is gone.

**Step 2.** $z = u^2$ is already in terms of $u$ alone.

**Step 3: remove $u$.** Both $x^2 + y^2$ and $z$ equal $u^2$, so they equal each other: $z = x^2 + y^2$.

**What the grid curves are.** Fixing $u = 1$ gives $\\langle \\cos v, \\sin v, 1 \\rangle$, the circle of radius $1$ at height $1$. Fixing $v = 0$ gives $\\langle u, 0, u^2 \\rangle$, the parabola $z = x^2$ in the $xz$-plane. So the surface is circles stacked up, getting wider as $z$ grows: a bowl. In fact this is just the paraboloid written in cylindrical coordinates, with $u$ as $r$ and $v$ as $\\theta$.

**For planes:** if $x$, $y$, $z$ are all of the form "number $+$ number$\\cdot u$ $+$ number$\\cdot v$", solve two of them for $u$ and $v$ and substitute into the third.
<<<
:::

:::check
What surface is $\\mathbf r(u, v) = \\langle u,\\ v,\\ 6 - 2u - 3v \\rangle$?
- [x] the plane $2x + 3y + z = 6$
- [ ] the plane $x + y + z = 6$
  why: $x = u$ and $y = v$, so $z = 6 - 2x - 3y$, which rearranges to $2x + 3y + z = 6$.
- [ ] a paraboloid
  why: Every component is a number plus multiples of $u$ and $v$, with no squares. That always gives a plane.
- [ ] a line
  why: Two free parameters make a surface. A line has only one.
???
$x = u$ and $y = v$, so $z = 6 - 2u - 3v = 6 - 2x - 3y$, which is $2x + 3y + z = 6$. It's the graph of $f(x, y) = 6 - 2x - 3y$.
:::

:::idea Tangent vectors and the normal vector
At a point $\\mathbf r(u_0, v_0)$ of the surface:
- $\\mathbf r_u = \\langle x_u, y_u, z_u \\rangle$ is tangent to the grid curve where $v = v_0$ (only $u$ changes).
- $\\mathbf r_v = \\langle x_v, y_v, z_v \\rangle$ is tangent to the grid curve where $u = u_0$.
- $\\mathbf n = \\mathbf r_u \\times \\mathbf r_v$ is perpendicular to both, so it's **normal** to the surface.

The **tangent plane** is the plane through $\\mathbf r(u_0, v_0)$ with normal vector $\\mathbf n$. The surface is **smooth** where $\\mathbf r_u \\times \\mathbf r_v \\ne \\mathbf 0$.
>>> Why $\\mathbf r_u$ is tangent and the cross product is normal
**$\\mathbf r_u$ is tangent.** Fix $v = v_0$. Then $\\mathbf r(u, v_0)$ is an ordinary curve with parameter $u$, lying on the surface. On Oct 2, the derivative of a curve is tangent to it, and the derivative of this curve with respect to $u$ is exactly the partial derivative $\\mathbf r_u$. The same goes for $\\mathbf r_v$ with $u$ fixed.

**The cross product is normal.** Two tangent directions that aren't parallel span the whole tangent plane. The cross product $\\mathbf r_u \\times \\mathbf r_v$ is perpendicular to both (Aug 31), so it's perpendicular to every direction in the tangent plane. That's what "normal to the surface" means.

**When it fails.** If $\\mathbf r_u \\times \\mathbf r_v = \\mathbf 0$, the two tangent vectors are parallel (or one is $\\mathbf 0$), and there's no single tangent plane there. For example, at the tip of a cone the surface has a sharp point.
<<<

**Example.** Find the tangent plane to $\\mathbf r(u, v) = \\langle u + v,\\ 3u^2,\\ u - v \\rangle$ at the point $(2, 3, 0)$.
1. **Which $(u, v)$?** $u + v = 2$ and $u - v = 0$ give $u = v = 1$, and then $3u^2 = 3$ ✓.
2. **Tangent vectors:** $\\mathbf r_u = \\langle 1,\\ 6u,\\ 1 \\rangle = \\langle 1, 6, 1 \\rangle$ and $\\mathbf r_v = \\langle 1, 0, -1 \\rangle$.
3. **Normal:** $\\mathbf r_u \\times \\mathbf r_v = \\langle -6,\\ 2,\\ -6 \\rangle$.
4. **Plane:** $-6(x - 2) + 2(y - 3) - 6(z - 0) = 0$, which simplifies to $3x - y + 3z = 3$.
>>> Each step of the example, worked out
**Step 1.** The point $(2, 3, 0)$ has to be $\\mathbf r(u, v)$ for some $u$ and $v$. Match components: $u + v = 2$ and $u - v = 0$. Adding gives $2u = 2$, so $u = 1$, and then $v = 1$. Check the middle component: $3u^2 = 3$, matching $y = 3$ ✓.

**Step 2.** Differentiate each component. For $\\mathbf r_u$, hold $v$ constant: $\\tfrac{\\partial}{\\partial u}(u + v) = 1$, $\\tfrac{\\partial}{\\partial u}(3u^2) = 6u$, $\\tfrac{\\partial}{\\partial u}(u - v) = 1$. At $u = 1$: $\\langle 1, 6, 1 \\rangle$. For $\\mathbf r_v$, hold $u$ constant: $1$, $0$, $-1$.

**Step 3: the cross product, component by component.** For $\\langle a_1, a_2, a_3 \\rangle \\times \\langle b_1, b_2, b_3 \\rangle = \\langle a_2b_3 - a_3b_2,\\ a_3b_1 - a_1b_3,\\ a_1b_2 - a_2b_1 \\rangle$:
- first: $6 \\cdot (-1) - 1 \\cdot 0 = -6$,
- second: $1 \\cdot 1 - 1 \\cdot (-1) = 2$,
- third: $1 \\cdot 0 - 6 \\cdot 1 = -6$.

Check that it's perpendicular to both: $\\langle -6, 2, -6 \\rangle \\cdot \\langle 1, 6, 1 \\rangle = -6 + 12 - 6 = 0$ ✓ and $\\langle -6, 2, -6 \\rangle \\cdot \\langle 1, 0, -1 \\rangle = -6 + 0 + 6 = 0$ ✓.

**Step 4.** A plane through $(x_0, y_0, z_0)$ with normal $\\langle a, b, c \\rangle$ is $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$. Expanding: $-6x + 12 + 2y - 6 - 6z = 0$, so $-6x + 2y - 6z = -6$. Divide by $-2$: $3x - y + 3z = 3$. Check the point: $6 - 3 + 0 = 3$ ✓.
<<<
:::

:::check
For a graph written as $\\mathbf r(x, y) = \\langle x,\\ y,\\ f(x, y) \\rangle$, what is $\\mathbf r_x \\times \\mathbf r_y$?
- [x] $\\langle -f_x,\\ -f_y,\\ 1 \\rangle$
- [ ] $\\langle f_x,\\ f_y,\\ 1 \\rangle$
  why: Compute it: $\\langle 1, 0, f_x \\rangle \\times \\langle 0, 1, f_y \\rangle = \\langle 0 \\cdot f_y - f_x \\cdot 1,\\ f_x \\cdot 0 - 1 \\cdot f_y,\\ 1 \\cdot 1 - 0 \\cdot 0 \\rangle$. The first two components get minus signs.
- [ ] $\\langle f_x,\\ f_y,\\ -1 \\rangle$
  why: That's the negative of the cross product. It's also normal, but it points down, and the cross product in this order points up (its $z$-component is $1$).
- [ ] $\\langle 0,\\ 0,\\ 1 \\rangle$
  why: That would mean every graph is horizontal. The tilt of the graph shows up in $f_x$ and $f_y$.
???
$\\mathbf r_x = \\langle 1, 0, f_x \\rangle$ and $\\mathbf r_y = \\langle 0, 1, f_y \\rangle$, and their cross product is $\\langle -f_x, -f_y, 1 \\rangle$. This matches the normal $\\langle f_x, f_y, -1 \\rangle$ from Sep 21's tangent planes, times $-1$.
:::

:::summary Summary
- A **parametric surface** is $\\mathbf r(u, v)$ with two parameters. Graph: $\\langle x, y, f(x, y) \\rangle$. Cylinder: $\\langle a\\cos\\theta, a\\sin\\theta, z \\rangle$. Sphere: $\\langle a\\sin\\varphi\\cos\\theta, a\\sin\\varphi\\sin\\theta, a\\cos\\varphi \\rangle$. Cone: $\\langle r\\cos\\theta, r\\sin\\theta, r \\rangle$.
- To parametrize, fix the coordinate that's constant on the surface and use the other two. To identify, eliminate the parameters.
- $\\mathbf r_u$ and $\\mathbf r_v$ are tangent; $\\mathbf n = \\mathbf r_u \\times \\mathbf r_v$ is normal and gives the tangent plane.

**Common mistakes:**
- Putting the free variable in the wrong slot (like a cylinder around the wrong axis).
- Forgetting to find which $(u, v)$ gives the point before plugging in.
- Sign errors in the middle component of the cross product.
:::
`;export{e as default};