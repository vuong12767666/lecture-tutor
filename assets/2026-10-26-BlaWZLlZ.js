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
>>> Steps 1 to 3 with actual numbers
Take $f = xyz^2$ on $B = [0, 1] \\times [0, 2] \\times [0, 3]$ (the example below).

**Step 1.** Cut $B$ into $1 \\times 1 \\times 1$ cubes: one along $x$, two along $y$, three along $z$, so $1 \\cdot 2 \\cdot 3 = 6$ cubes, each with $\\Delta V = 1$.

**Step 2.** Use each cube's center. The centers have $x = 0.5$, $y$ equal to $0.5$ or $1.5$, and $z$ equal to $0.5$, $1.5$, or $2.5$. For example, the cube $[0,1] \\times [1,2] \\times [2,3]$ has center $(0.5, 1.5, 2.5)$ and value $0.5 \\cdot 1.5 \\cdot 2.5^2 = 4.6875$.

**Step 3.** Adding all six values times $\\Delta V = 1$: every term is $0.5 \\cdot y \\cdot z^2$, so the sum factors as
$$0.5 \\cdot (0.5 + 1.5) \\cdot (0.25 + 2.25 + 6.25) = 0.5 \\cdot 2 \\cdot 8.75 = 8.75,$$
already close to the exact value $9$ found below. Smaller cubes get closer.
<<<

**What it measures,** each read off the sum:
- **$f = 1$:** each small box adds its own volume, so the total is the **volume** of the solid.
- **$f$ = density** (mass per unit volume): each small box has mass about $f\\, \\Delta V$, so the total is the **mass**.
- **Average value:** $\\frac{1}{\\text{volume}} \\iiint f\\, dV$, the constant value that would give the same total.

There's no "volume under the graph" picture here: the graph of $f(x, y, z)$ would need four dimensions. Think of $f$ as an amount spread through the solid, such as a density, and of the integral as the total amount.

**Computing it on a box.** As with double integrals, use three single integrals, in any of the six orders, for example
$$\\iiint_B f\\, dV = \\int_a^b \\int_c^d \\int_p^q f(x, y, z)\\, dz\\, dy\\, dx.$$
Why: the sum adds the same small boxes however you group them. The inside integral adds one column of boxes along $z$, the middle one adds the columns into a slab along $y$, and the outside one adds the slabs along $x$.
>>> The grouping, on the six cubes
Using the six cube values from the Go deeper above:
- **Columns along $z$:** the column at $(0.5, 0.5)$ adds $0.5 \\cdot 0.5 \\cdot (0.25 + 2.25 + 6.25) = 2.1875$, and the column at $(0.5, 1.5)$ adds $0.5 \\cdot 1.5 \\cdot 8.75 = 6.5625$.
- **The slab along $y$** adds the two columns: $2.1875 + 6.5625 = 8.75$.
- **Slabs along $x$:** there's only one slab here, so the total is $8.75$.

Grouping by $x$ first or $y$ first would add the same six numbers in a different order and give the same $8.75$. As the cubes shrink, adding a column becomes the inside integral, adding columns into a slab becomes the middle one, and adding slabs becomes the outside one.
<<<

**Example.** $\\iiint_B xyz^2\\, dV$ over $B = [0, 1] \\times [0, 2] \\times [0, 3]$, working from the inside out:
- $\\int_0^3 xyz^2\\, dz = xy \\cdot 9 = 9xy$, holding $x$ and $y$ constant.
- $\\int_0^2 9xy\\, dy = 9x \\cdot 2 = 18x$, holding $x$ constant.
- $\\int_0^1 18x\\, dx = 9$.
>>> Each integral of the example, worked out
1. **Inside, in $z$:** $x$ and $y$ are constants, so $xy$ comes out: $xy\\int_0^3 z^2\\, dz = xy \\Big[\\tfrac{z^3}{3}\\Big]_0^3 = xy \\cdot \\tfrac{27}{3} = 9xy$.
2. **Middle, in $y$:** $9x$ is a constant, so $9x\\int_0^2 y\\, dy = 9x\\Big[\\tfrac{y^2}{2}\\Big]_0^2 = 9x \\cdot 2 = 18x$.
3. **Outside, in $x$:** $\\int_0^1 18x\\, dx = 18\\Big[\\tfrac{x^2}{2}\\Big]_0^1 = 9$.

**Why it split so neatly.** $xyz^2$ is (function of $x$) $\\times$ (function of $y$) $\\times$ (function of $z$), and every limit is a number. Each step pulled out everything that wasn't the current variable, so the answer is the product $\\Big(\\int_0^1 x\\, dx\\Big)\\Big(\\int_0^2 y\\, dy\\Big)\\Big(\\int_0^3 z^2\\, dz\\Big) = \\tfrac12 \\cdot 2 \\cdot 9 = 9$, the same shortcut as on Oct 16.
<<<
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

**Reading the limits from the inequalities, without drawing:** write the solid as inequalities, solve the ones involving $z$ for $z$ (those give the inside limits), and then treat what's left, which only involves $x$ and $y$, the way Oct 19 did: find where its edges meet, test a point, and write $a \\le x \\le b$, $g_1(x) \\le y \\le g_2(x)$. If the solid is given by a top and bottom only, the shadow is where top $\\ge$ bottom.

**This includes Oct 19's volume formula.** With $f = 1$, the inside integral is $u_2 - u_1$, the height of the column. So the volume is $\\iint_D (\\text{top} - \\text{bottom})\\, dA$, the same formula as before.

**Example.** The tetrahedron in the first octant under the plane $x + 2y + z = 4$.
1. **Top** $z = 4 - x - 2y$, **bottom** $z = 0$.
2. **Shadow.** The top meets the bottom where $4 - x - 2y = 0$, which is the line $x + 2y = 4$. With $x, y \\ge 0$, the shadow is the triangle with corners $(0, 0)$, $(4, 0)$, and $(0, 2)$.
3. **$D$ with vertical slices:** $0 \\le x \\le 4$ and $0 \\le y \\le \\tfrac{4 - x}{2}$.
$$\\text{Volume} = \\int_0^4 \\int_0^{(4-x)/2} \\int_0^{4 - x - 2y} 1\\, dz\\, dy\\, dx.$$
The inside integral is $4 - x - 2y$, the column's height, and the rest is exactly Oct 19's computation, giving $\\tfrac{16}{3}$.
>>> Each step of the tetrahedron, from the inequalities
1. **The solid as inequalities.** "First octant" is $x \\ge 0$, $y \\ge 0$, $z \\ge 0$. "Under the plane" is $x + 2y + z \\le 4$.
2. **Solve the ones with $z$ for $z$.** $z \\ge 0$ is the bottom. $x + 2y + z \\le 4$ becomes $z \\le 4 - x - 2y$ (subtract $x + 2y$ from both sides): the top. So the inside limits are $0 \\le z \\le 4 - x - 2y$.
3. **The shadow is where the column has room:** bottom $\\le$ top, so $0 \\le 4 - x - 2y$, which is $x + 2y \\le 4$. Together with $x \\ge 0$ and $y \\ge 0$, that's the shadow.
4. **Describe the shadow (Oct 19's method).** Solve $x + 2y \\le 4$ for $y$: $y \\le \\tfrac{4 - x}{2}$. With $y \\ge 0$: $0 \\le y \\le \\tfrac{4 - x}{2}$, which needs $\\tfrac{4 - x}{2} \\ge 0$, so $x \\le 4$. With $x \\ge 0$: $0 \\le x \\le 4$.
5. **Integrate.** $\\int_0^{4 - x - 2y} 1\\, dz = 4 - x - 2y$, the height of the column above $(x, y)$. The remaining double integral, $\\int_0^4 \\int_0^{(4 - x)/2} (4 - x - 2y)\\, dy\\, dx$, was worked out step by step on Oct 19: $\\tfrac{16}{3}$.
<<<
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
>>> Each step of the $y$-first setup and integral
**The limits, from the inequalities.** The solid is $x, y, z \\ge 0$ and $x + 2y + z \\le 4$.
1. **Solve the ones with $y$ for $y$:** $y \\ge 0$, and $2y \\le 4 - x - z$, so $y \\le \\tfrac{4 - x - z}{2}$. Those are the inside limits.
2. **The shadow (now on the $xz$-plane)** is where the column has room: $0 \\le \\tfrac{4 - x - z}{2}$, so $x + z \\le 4$, along with $x \\ge 0$ and $z \\ge 0$.
3. **Describe it:** solve $x + z \\le 4$ for $z$: $0 \\le z \\le 4 - x$, which needs $x \\le 4$. So $0 \\le x \\le 4$.

**The integral.**
- **Inside:** $\\int_0^{(4 - x - z)/2} 1\\, dy = \\tfrac{4 - x - z}{2}$.
- **Middle:** $\\int_0^{4 - x} \\tfrac{4 - x - z}{2}\\, dz = \\tfrac12\\Big[(4 - x)z - \\tfrac{z^2}{2}\\Big]_0^{4 - x} = \\tfrac12\\Big((4 - x)^2 - \\tfrac{(4 - x)^2}{2}\\Big) = \\tfrac{(4 - x)^2}{4}$.
- **Outside:** $\\int_0^4 \\tfrac{(4 - x)^2}{4}\\, dx = \\tfrac{16}{3}$, the same last step as on Oct 19. ✓
<<<

**A rule for every order.** The innermost limits may use both outer variables. The middle limits may use only the outermost variable. The outermost limits are numbers. Why: the middle and outer integrals together describe the shadow, a flat region, exactly as on Oct 19.
>>> Why each level may use only the variables outside it
**Outermost: numbers.** After all three integrals, the answer must be a single number. If the outermost limits had a variable in them, that variable would be left over in the answer.

**Middle: only the outermost variable.** The middle and outer integrals together describe the shadow, a flat region in two variables. As on Oct 19, a flat region's inside limits can depend on its outside variable, and nothing else is available: the innermost variable has already been integrated away.

**Innermost: both outer variables.** A column sits above one point of the shadow, so where it starts and stops depends on both coordinates of that point. In the tetrahedron with $y$ innermost, the column above $(x, z)$ ends at $y = \\tfrac{4 - x - z}{2}$, which uses both.

**When another order helps.** Use it when the solid is bounded front-to-back or left-to-right by simple surfaces, or when the integrand is much easier to integrate in another variable first.
<<<
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
- **Limits without a picture:** write the solid as inequalities, solve the ones with the innermost variable for it, and the shadow is where bottom $\\le$ top. Then set up the shadow as on Oct 19.
- Any of the six orders works. The innermost limits may use both outer variables, the middle limits only the outermost, and the outermost are numbers.

**Common mistakes:**
- Using the shadow's limits for $z$, instead of the bottom and top surfaces.
- Middle limits that contain the middle variable itself.
- Forgetting $r$ when the shadow is done in polar.
:::
`;export{e as default};