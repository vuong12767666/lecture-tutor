var e=`---
title: Triple integrals
date: 2026-10-26
stewart: 15.6
source: OpenStax Calculus Volume 3, §5.4 Triple Integrals
---

:::recap Last time
- A double integral adds up $f \\cdot \\Delta A$ over a flat region. As an iterated integral, the inside limits come from slices (vertical, horizontal, or rays) and the outside limits are numbers.
- Mass $m = \\iint_D \\rho\\, dA$, and the center of mass is where the moments cancel: $\\bar x = \\frac1m \\iint_D x\\rho\\, dA$.
:::

:::check
Warm-up: a plate covers $0 \\le x \\le 2$, $0 \\le y \\le 1$ with density $\\rho = xy$. What is its mass?
answer: 1
???
$m = \\int_0^2 \\int_0^1 xy\\, dy\\, dx = \\Big(\\int_0^2 x\\, dx\\Big)\\Big(\\int_0^1 y\\, dy\\Big) = 2 \\cdot \\tfrac12 = 1$.
:::

:::question Today
How do you add up something spread through a solid in space, like the mass of a solid whose density changes from point to point? And how do you set up the limits when the solid has slanted or curved sides?
:::

:::idea Adding up over a solid
Take a box $B = [a, b] \\times [c, d] \\times [p, q]$ and a function $f(x, y, z)$ on it.
1. **Cut $B$ into small boxes,** each with volume $\\Delta V = \\Delta x\\, \\Delta y\\, \\Delta z$.
2. **Pick a sample point** in each small box, and multiply the value of $f$ there by $\\Delta V$.
3. **Add them up.** The limit as the boxes shrink is the [[triple integral]]:
$$\\iiint_B f\\, dV = \\lim \\sum f(x^*, y^*, z^*)\\, \\Delta V.$$

**What it measures,** each read off the sum:
- **$f = 1$:** each small box adds its own volume, so the total is the **volume** of the solid.
- **$f$ = density** (mass per unit volume): each small box has mass about $f\\, \\Delta V$, so the total is the **mass**.
- **Average value:** $\\frac{1}{\\text{volume}} \\iiint f\\, dV$, the constant value that would give the same total.

There's no "volume under the graph" picture here: the graph of $f(x, y, z)$ would need four dimensions. Think of $f$ as an amount spread through the solid, such as a density, and of the integral as the total amount.

**Computing it on a box.** As with double integrals, use three single integrals, in any of the six orders, for example
$$\\iiint_B f\\, dV = \\int_a^b \\int_c^d \\int_p^q f(x, y, z)\\, dz\\, dy\\, dx.$$
Why: the sum adds the same small boxes however you group them. The inside integral adds one column of boxes along $z$, the middle one adds the columns into a slab along $y$, and the outside one adds the slabs along $x$.

**Example.** $\\iiint_B xyz^2\\, dV$ over $B = [0, 1] \\times [0, 2] \\times [0, 3]$, working from the inside out:
- $\\int_0^3 xyz^2\\, dz = xy \\cdot 9 = 9xy$, holding $x$ and $y$ constant.
- $\\int_0^2 9xy\\, dy = 9x \\cdot 2 = 18x$, holding $x$ constant.
- $\\int_0^1 18x\\, dx = 9$.
+++
**A sum with numbers.** Cut the same box into $1 \\times 1 \\times 1$ cubes (one along $x$, two along $y$, three along $z$) and use each cube's center. The centers have $x = 0.5$, $y \\in \\{0.5, 1.5\\}$, and $z \\in \\{0.5, 1.5, 2.5\\}$, so the sum is
$$0.5 \\cdot (0.5 + 1.5) \\cdot (0.25 + 2.25 + 6.25) \\cdot 1 = 8.75,$$
already close to the exact $9$.

**Products split here too.** Since $xyz^2$ is a product of a function of $x$, one of $y$, and one of $z$, the integral is $\\Big(\\int_0^1 x\\, dx\\Big)\\Big(\\int_0^2 y\\, dy\\Big)\\Big(\\int_0^3 z^2\\, dz\\Big) = \\tfrac12 \\cdot 2 \\cdot 9 = 9$, for the same reason as on Oct 16.
:::

:::check
Compute $\\displaystyle\\iiint_B (x + y + z)\\, dV$ over the cube $B = [0, 1] \\times [0, 1] \\times [0, 1]$.
answer: 3/2
???
Split the sum into three integrals. $\\iiint_B x\\, dV = \\Big(\\int_0^1 x\\, dx\\Big) \\cdot 1 \\cdot 1 = \\tfrac12$, and the same for $y$ and $z$. The total is $\\tfrac32$. (Check: the average of $x + y + z$ over the cube should be $0.5 + 0.5 + 0.5 = 1.5$, and the cube's volume is $1$.)
:::

:::idea Solids between two surfaces
Most solids aren't boxes. Suppose a solid $E$ sits above a region $D$ of the $xy$-plane, called its **shadow**, between a bottom surface $z = u_1(x, y)$ and a top surface $z = u_2(x, y)$. Then
$$\\iiint_E f\\, dV = \\iint_D \\left[ \\int_{u_1(x, y)}^{u_2(x, y)} f(x, y, z)\\, dz \\right] dA.$$

**Why.** Group the small boxes into vertical columns. The column above a point $(x, y)$ of the shadow contains just the boxes between the bottom surface and the top one, so the inside integral runs over $z$ from $u_1(x, y)$ to $u_2(x, y)$. What's left is a double integral over the shadow $D$, which you set up exactly as on Oct 19, or in polar as on Oct 23.

**Reading the limits:**
1. **Top and bottom.** Which surfaces bound the solid above and below? Solve each one for $z$.
2. **The shadow $D$.** Look straight down at the solid. Its outline is usually where the top and bottom surfaces meet (set them equal), or a given wall.
3. **Describe $D$** with slices or polar coordinates, as before.

**This includes Oct 19's volume formula.** With $f = 1$, the inside integral is $u_2 - u_1$, the height of the column. So the volume is $\\iint_D (\\text{top} - \\text{bottom})\\, dA$, the same formula as before.

**Example.** The tetrahedron in the first octant under the plane $x + 2y + z = 4$.
1. **Top** $z = 4 - x - 2y$, **bottom** $z = 0$.
2. **Shadow.** The top meets the bottom where $4 - x - 2y = 0$, which is the line $x + 2y = 4$. With $x, y \\ge 0$, the shadow is the triangle with corners $(0, 0)$, $(4, 0)$, and $(0, 2)$.
3. **$D$ with vertical slices:** $0 \\le x \\le 4$ and $0 \\le y \\le \\tfrac{4 - x}{2}$.
$$\\text{Volume} = \\int_0^4 \\int_0^{(4-x)/2} \\int_0^{4 - x - 2y} 1\\, dz\\, dy\\, dx.$$
The inside integral is $4 - x - 2y$, the column's height, and the rest is exactly Oct 19's computation, giving $\\tfrac{16}{3}$.
+++
**The tetrahedron's average height.** Integrate $f = z$ from the inside out:
- $\\int_0^{4 - x - 2y} z\\, dz = \\tfrac12 (4 - x - 2y)^2$.
- $\\int_0^{(4-x)/2} \\tfrac12 (4 - x - 2y)^2\\, dy = \\tfrac{(4 - x)^3}{12}$. (Substitute $w = 4 - x - 2y$, so $dy = -\\tfrac12\\, dw$, and $w$ runs from $4 - x$ down to $0$.)
- $\\int_0^4 \\tfrac{(4 - x)^3}{12}\\, dx = \\tfrac{4^4}{48} = \\tfrac{16}{3}$.

So the average height is $\\dfrac{16/3}{\\text{volume}} = \\dfrac{16/3}{16/3} = 1$. That matches a known fact: a tetrahedron balances at the average of its four corners, and their heights are $0, 0, 0, 4$, which average to $1$.
:::

:::figure tetrahedron-column
The tetrahedron under $x + 2y + z = 4$, with its shadow $D$ shaded on the $xy$-plane. Above the point $(0.8, 1)$ of the shadow, the column runs from the bottom $z = 0$ up to the slanted top, $z = 4 - 0.8 - 2(1) = 1.2$. The inside integral adds up one such column.
:::

:::theorem Triple integrals over a solid between two surfaces
If $f$ is continuous on $E = \\{(x, y) \\text{ in } D,\\; u_1(x, y) \\le z \\le u_2(x, y)\\}$, where $D$ is a region of the $xy$-plane, then
$$\\iiint_E f\\, dV = \\iint_D \\left[ \\int_{u_1(x, y)}^{u_2(x, y)} f\\, dz \\right] dA.$$

**Why:** put $E$ in a box and set $f = 0$ outside $E$. On the box, the triple integral can be done column by column along $z$. The column above $(x, y)$ is $0$ except between the two surfaces, so its integral is $\\int_{u_1}^{u_2} f\\, dz$, and the columns above points outside $D$ add nothing.
:::

:::check
Find the volume of the solid between the plane $z = 0$ and the paraboloid $z = 4 - x^2 - y^2$.
answer: 8pi
???
**Top** $z = 4 - x^2 - y^2$, **bottom** $z = 0$. They meet where $x^2 + y^2 = 4$, so the shadow is the disk of radius $2$. In polar, the height is $4 - r^2$:
$$\\int_0^{2\\pi} \\int_0^2 (4 - r^2)\\, r\\, dr\\, d\\theta = 2\\pi \\Big[2r^2 - \\tfrac{r^4}{4}\\Big]_0^2 = 2\\pi (8 - 4) = 8\\pi.$$
:::

:::idea Other orders, other shadows
The innermost variable is the direction of the columns, and the shadow lies in the plane of the other two variables. Any of the six orders works if you describe the solid that way.

**Example.** The same tetrahedron with $y$ innermost. The columns now run in the $y$-direction, from $y = 0$ to the slanted face. Solving $x + 2y + z = 4$ for $y$ gives $y = \\tfrac{4 - x - z}{2}$. The shadow is on the $xz$-plane: the triangle $x + z \\le 4$ with $x, z \\ge 0$, which is $0 \\le x \\le 4$, $0 \\le z \\le 4 - x$.
$$\\int_0^4 \\int_0^{4 - x} \\int_0^{(4 - x - z)/2} 1\\, dy\\, dz\\, dx = \\frac{16}{3}.$$
Same small boxes, grouped along $y$ first, so the same volume.

**A rule for every order.** The innermost limits may use both outer variables. The middle limits may use only the outermost variable. The outermost limits are numbers. Why: the middle and outer integrals together describe the shadow, a flat region, exactly as on Oct 19.
+++
**The $y$-first computation, step by step.**
- $\\int_0^{(4 - x - z)/2} 1\\, dy = \\tfrac{4 - x - z}{2}$.
- $\\int_0^{4 - x} \\tfrac{4 - x - z}{2}\\, dz = \\tfrac{(4 - x)^2}{4}$.
- $\\int_0^4 \\tfrac{(4 - x)^2}{4}\\, dx = \\tfrac14 \\cdot \\tfrac{64}{3} = \\tfrac{16}{3}$. ✓

**When another order helps.** Use it when the solid is bounded front-to-back or left-to-right by simple surfaces, or when the integrand is much easier to integrate in another variable first.
:::

:::check
Rewrite $\\displaystyle\\int_0^1 \\int_0^{1-x} \\int_0^{1-x-y} f\\, dz\\, dy\\, dx$ with $y$ innermost, in the order $dy\\, dz\\, dx$.
- [x] $\\displaystyle\\int_0^1 \\int_0^{1-x} \\int_0^{1-x-z} f\\, dy\\, dz\\, dx$
- [ ] $\\displaystyle\\int_0^1 \\int_0^{1-x} \\int_0^{1-x-y} f\\, dy\\, dz\\, dx$
  why: The inside limit can't contain $y$ when $y$ is the variable being integrated. Solve $x + y + z = 1$ for $y$ instead: $y = 1 - x - z$.
- [ ] $\\displaystyle\\int_0^1 \\int_0^{1} \\int_0^{1-x-z} f\\, dy\\, dz\\, dx$
  why: The middle limits describe the shadow on the $xz$-plane, the triangle $x + z \\le 1$, so $z$ only runs up to $1 - x$.
- [ ] $\\displaystyle\\int_0^1 \\int_0^{1-z} \\int_0^{1-x-z} f\\, dy\\, dz\\, dx$
  why: The middle variable's limits may use only the outermost variable, $x$. This upper limit, $1 - z$, contains $z$ itself.
???
The limits describe the tetrahedron $x, y, z \\ge 0$, $x + y + z \\le 1$. With $y$ innermost, $y$ runs from $0$ to the slanted face $y = 1 - x - z$, above the shadow on the $xz$-plane: the triangle $0 \\le x \\le 1$, $0 \\le z \\le 1 - x$.
:::

:::summary Summary
- $\\iiint_E f\\, dV$ adds up $f \\cdot \\Delta V$ over a solid: volume when $f = 1$, mass when $f$ is a density.
- **Between two surfaces:** $\\displaystyle\\iiint_E f\\, dV = \\iint_D \\Big[\\int_{\\text{bottom}}^{\\text{top}} f\\, dz\\Big] dA$, where $D$ is the solid's shadow on the $xy$-plane. Find the shadow where the top and bottom meet, then set up $D$ as before (polar if it's round).
- Any of the six orders works. The innermost limits may use both outer variables, the middle limits only the outermost, and the outermost are numbers.

**Common mistakes:**
- Using the shadow's limits for $z$, instead of the bottom and top surfaces.
- Middle limits that contain the middle variable itself.
- Forgetting $r$ when the shadow is done in polar.
:::
`;export{e as default};