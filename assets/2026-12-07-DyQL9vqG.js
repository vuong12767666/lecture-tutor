var e=`---
title: Electrostatics and Gauss's Law
date: 2026-12-07
stewart: 16.9
source: OpenStax Calculus Volume 3, §6.8 The Divergence Theorem (the application to electrostatic fields)
---

:::recap Last time
- The [[divergence-theorem|Divergence Theorem]]: for a closed surface $S$ bounding a solid $E$, with $\\mathbf n$ pointing outward, $\\iint_S \\mathbf F \\cdot d\\mathbf S = \\iiint_E \\nabla\\cdot\\mathbf F\\, dV$ (Nov 16).
- If $\\nabla\\cdot\\mathbf F = 0$ throughout $E$, the flux out of $S$ is $0$.
- Dec 4: the inverse-square field $\\langle x, y, z \\rangle / \\rho^3$ has zero curl on space minus the origin, and potential $-1/\\rho$.
:::

:::check
Warm-up: what is $\\nabla\\cdot\\langle x, y, z \\rangle$?
answer: 3
???
$P_x + Q_y + R_z = 1 + 1 + 1 = 3$. The field $\\langle x, y, z \\rangle$ points straight out from the origin and spreads out everywhere. Today's field is the same direction, but weakened by the factor $1/\\rho^3$.
:::

:::question Today
The electric field of a point charge has the same flux through a tiny sphere and a huge lumpy surface around it. Why? And how does that become Gauss's Law, which gives the flux through any closed surface from the charge inside?
:::

:::idea The field of a point charge, and its divergence
A stationary point charge of $q$ coulombs at the origin makes the electric field
$$\\mathbf E = \\frac{q}{4\\pi\\varepsilon_0}\\, \\frac{\\langle x, y, z \\rangle}{\\rho^3}, \\qquad \\rho = \\sqrt{x^2 + y^2 + z^2},$$
where $\\varepsilon_0 \\approx 8.854 \\times 10^{-12}$ is a constant of nature. Its direction is $\\langle x, y, z \\rangle / \\rho$, straight away from the charge (toward it if $q < 0$), and its length is $\\dfrac{q}{4\\pi\\varepsilon_0 \\rho^2}$. That length shrinking with the square of the distance is the **inverse-square law**.

Write $\\mathbf F_r = \\langle x, y, z \\rangle / \\rho^3$ for the field with the constants removed. **Away from the origin, $\\nabla\\cdot\\mathbf F_r = 0$.**

1. **One term.** $\\dfrac{\\partial}{\\partial x}\\dfrac{x}{\\rho^3} = \\dfrac{1}{\\rho^3} + x\\cdot\\left(-3\\rho^{-4}\\right)\\dfrac{x}{\\rho} = \\dfrac{\\rho^2 - 3x^2}{\\rho^5}$.
2. **The other two.** Likewise $\\dfrac{\\rho^2 - 3y^2}{\\rho^5}$ and $\\dfrac{\\rho^2 - 3z^2}{\\rho^5}$.
3. **Add.** $\\dfrac{3\\rho^2 - 3(x^2 + y^2 + z^2)}{\\rho^5} = \\dfrac{3\\rho^2 - 3\\rho^2}{\\rho^5} = 0$.

**Why it matters:** by the Divergence Theorem, zero divergence means the net flux out of any small box or ball that doesn't contain the charge is $0$: as much field flows in through its surface as flows out. Only a surface around the charge itself can have net flux out.
>>> The three terms, with numbers
Take the point $(1, 2, 2)$, where $\\rho = \\sqrt{1 + 4 + 4} = 3$, so $\\rho^2 = 9$ and $\\rho^5 = 243$.

1. **The $x$ term.** $\\dfrac{\\rho^2 - 3x^2}{\\rho^5} = \\dfrac{9 - 3(1)}{243} = \\dfrac{6}{243}$.
2. **The $y$ term.** $\\dfrac{9 - 3(4)}{243} = \\dfrac{-3}{243}$.
3. **The $z$ term.** $\\dfrac{9 - 3(4)}{243} = \\dfrac{-3}{243}$.
4. **Sum.** $\\dfrac{6 - 3 - 3}{243} = 0$ ✓.

The $x$ term is positive and the other two are negative, and they cancel exactly. This happens at every point: the three tops add to $3\\rho^2 - 3(x^2 + y^2 + z^2)$, and $x^2 + y^2 + z^2$ is $\\rho^2$, so the sum is always $3\\rho^2 - 3\\rho^2 = 0$. Here: $3(9) - 3(1 + 4 + 4) = 27 - 27 = 0$.
<<<
>>> What the inverse-square law says, with numbers
Take $q = 10^{-9}$ coulombs. The length of $\\mathbf E$ at distance $\\rho$ is $\\dfrac{10^{-9}}{4\\pi\\varepsilon_0\\rho^2}$.

1. **At $\\rho = 1$:** about $8.99$.
2. **At $\\rho = 2$:** the distance is doubled, so the length is divided by $2^2 = 4$: about $2.25$.
3. **At $\\rho = 3$:** the length is divided by $3^2 = 9$ compared with $\\rho = 1$: about $1.00$.

Doubling the distance cuts the field to a quarter.
<<<
:::

:::check
A point charge makes a field of length $20$ at distance $1$. What is its length at distance $5$?
answer: 0.8
???
The length is divided by $5^2 = 25$: $20 / 25 = 0.8$.
:::

:::idea The flux through a sphere around the charge
Put a sphere of radius $a$ centered at the charge, with $\\mathbf n$ pointing outward. Then the flux of $\\mathbf F_r$ is $4\\pi$, **whatever $a$ is.**

1. **The normal.** At the point $(x, y, z)$ on the sphere, $\\mathbf n = \\langle x, y, z \\rangle / a$.
2. **The dot product.** $\\mathbf F_r \\cdot \\mathbf n = \\dfrac{\\langle x, y, z \\rangle}{a^3}\\cdot\\dfrac{\\langle x, y, z \\rangle}{a} = \\dfrac{x^2 + y^2 + z^2}{a^4} = \\dfrac{a^2}{a^4} = \\dfrac{1}{a^2}$. It is the same at every point of the sphere.
3. **Flux.** A number that is the same everywhere times the area: $\\dfrac{1}{a^2}\\cdot 4\\pi a^2 = 4\\pi$.

So for the actual field, $\\iint_S \\mathbf E \\cdot d\\mathbf S = \\dfrac{q}{4\\pi\\varepsilon_0}\\cdot 4\\pi = \\dfrac{q}{\\varepsilon_0}$.

**Why it doesn't depend on $a$:** a bigger sphere has more area, in proportion to $a^2$, and the field gets weaker in proportion to $1/a^2$. The two cancel exactly. This cancellation needs the field's length to fall like $1/\\rho^2$. If it fell like $1/\\rho^3$ instead, the flux would be $\\dfrac{1}{a^3}\\cdot 4\\pi a^2 = \\dfrac{4\\pi}{a}$, which changes with $a$ (for example $4\\pi$ at $a = 1$ and $2\\pi$ at $a = 2$).
>>> Two radii, with numbers
**A sphere with $a = 1$.**
1. $\\mathbf n = \\langle x, y, z \\rangle$ itself (its length is $1$). At the point $(1, 0, 0)$: $\\mathbf F_r = \\langle 1, 0, 0 \\rangle$, so $\\mathbf F_r \\cdot \\mathbf n = 1 = 1/a^2$ ✓.
2. Area $4\\pi(1)^2 = 4\\pi$. Flux $1 \\times 4\\pi = 4\\pi$.

**A sphere with $a = 2$.**
1. At the point $(2, 0, 0)$: $\\rho = 2$, $\\mathbf F_r = \\langle 2, 0, 0 \\rangle / 8 = \\langle 0.25, 0, 0 \\rangle$, and $\\mathbf n = \\langle 1, 0, 0 \\rangle$. So $\\mathbf F_r \\cdot \\mathbf n = 0.25 = 1/a^2$ ✓.
2. Area $4\\pi(2)^2 = 16\\pi$. Flux $0.25 \\times 16\\pi = 4\\pi$.

Four times the area and a quarter of the field strength: the same flux.
<<<
:::

:::check
A sphere of radius $3$ is centered at the origin, where a charge of $q$ coulombs sits. What is $\\iint_S \\mathbf F_r \\cdot d\\mathbf S$, with $\\mathbf F_r = \\langle x, y, z \\rangle / \\rho^3$ and outward normals?
answer: 4pi
???
$\\mathbf F_r \\cdot \\mathbf n = 1/a^2 = 1/9$ everywhere on the sphere, and the area is $4\\pi(9) = 36\\pi$. The flux is $\\tfrac19 \\cdot 36\\pi = 4\\pi$, the same as for any radius.
:::

:::idea Any closed surface: the origin inside or outside
Let $S$ be any closed surface (not just a sphere) with outward normals, and $\\mathbf F_r = \\langle x, y, z \\rangle / \\rho^3$.

- **The origin is outside $S$.** The solid inside $S$ lies in the region where $\\mathbf F_r$ is defined, and its divergence is $0$. By the Divergence Theorem, the flux is $\\iiint 0\\, dV = 0$.
- **The origin is inside $S$.** The Divergence Theorem can't be used directly, because $\\mathbf F_r$ isn't defined at the origin. Cut out a small sphere $S_a$ around the origin, so that $S_a$ lies inside $S$. Between $S_a$ and $S$, the solid $E$ lies where $\\mathbf F_r$ is defined with divergence $0$. So the total flux out of $E$ is $0$. That total is the flux outward through $S$ minus the flux outward through $S_a$ (the normal on $S_a$ points into $E$, which is the opposite way), so these two are equal. Therefore the flux through $S$ equals the flux through $S_a$, which is $4\\pi$.

**So the flux through $S$ is $4\\pi$ if $S$ encloses the origin, $0$ if it doesn't.** It doesn't depend on the shape of $S$ at all.

**Why:** the divergence is $0$ everywhere between $S_a$ and $S$, so whatever flows out through $S_a$ must also flow out through $S$.
>>> Cutting out the small sphere, step by step
Take $S$ = the cube $-1 \\le x, y, z \\le 1$, which encloses the origin, and cut out the sphere $S_a$ of radius $a = 0.5$ around the origin.

1. **Why cut anything out.** The Divergence Theorem needs the field defined at every point of the solid. The solid inside the cube contains the origin, where $\\mathbf F_r = \\langle x, y, z \\rangle / \\rho^3$ has $\\rho = 0$ on the bottom. So we can't use the theorem on the whole cube.
2. **The solid $E$ that's left.** $E$ is the points inside the cube but outside the small sphere, for example $(0.8, 0, 0)$ (distance $0.8 > 0.5$ from the origin, and inside the cube). The origin is not in $E$, so $\\mathbf F_r$ is defined everywhere in $E$, with divergence $0$.
3. **$E$ has two boundary pieces.** Its outside surface is the cube $S$. Its inside surface is the small sphere $S_a$. "Outward from $E$" on the cube means away from the origin. On the small sphere it means *toward* the origin, because the rest of $E$ is outside the sphere. At the point $(0.5, 0, 0)$, outward from $E$ is $\\langle -1, 0, 0 \\rangle$.
4. **Divergence Theorem on $E$.** Total outward flux of $E$ = $\\iiint_E 0\\, dV = 0$.
5. **Split the total.** On the small sphere with the normal pointing toward the origin, $\\mathbf F_r \\cdot \\mathbf n = -1/a^2$. At $(0.5, 0, 0)$: $\\mathbf F_r = \\langle 4, 0, 0 \\rangle$ and $\\mathbf n = \\langle -1, 0, 0 \\rangle$, so $\\mathbf F_r \\cdot \\mathbf n = -4$. Times the area $4\\pi(0.25) = \\pi$, the small sphere contributes $-4\\pi$. So (flux out of the cube) $+ (-4\\pi) = 0$.
6. **Solve.** Flux out of the cube $= 4\\pi$. The small sphere's radius didn't matter: any $a$ that fits inside the cube gives $-4\\pi$ from the small sphere.
<<<
>>> A cube, with numbers
Let $S$ be the cube $-1 \\le x, y, z \\le 1$, which encloses the origin. The answer should be $4\\pi \\approx 12.566$.

1. **By symmetry.** The six faces are the same up to rotating the axes, so each gives the same flux. We need $4\\pi / 6 = 2\\pi/3 \\approx 2.0944$ from each.
2. **The face $x = 1$.** Here $\\mathbf n = \\langle 1, 0, 0 \\rangle$ and $\\mathbf F_r \\cdot \\mathbf n = \\dfrac{1}{(1 + y^2 + z^2)^{3/2}}$. At the center of the face, $(1, 0, 0)$: $1$. At a corner, $(1, 1, 1)$: $\\dfrac{1}{3^{3/2}} \\approx 0.19$.
3. **The flux through the face.** The face has area $4$, and the integrand falls from $1$ at the center to $0.19$ at the corners, so the average is somewhere between. Adding it up exactly gives $\\iint \\dfrac{dy\\, dz}{(1 + y^2 + z^2)^{3/2}} = 2.0944$ (found by integrating on a computer), which equals $2\\pi/3$ ✓. That is an average of about $0.52$ over the area $4$.
4. **Six faces.** $6 \\times 2.0944 = 12.566 = 4\\pi$ ✓.

A cube is not a sphere, but the flux is the same $4\\pi$.
<<<
>>> A surface that misses the origin, with numbers
Let $S$ be the sphere of radius $1$ centered at $(3, 0, 0)$. The origin is $3$ away from the center, so it is outside $S$ (the sphere only reaches out to $x = 2$ on the left).

1. **On the near side,** the point $(2, 0, 0)$ has $\\mathbf n = \\langle -1, 0, 0 \\rangle$ and $\\mathbf F_r = \\langle 2, 0, 0 \\rangle / 8 = \\langle 0.25, 0, 0 \\rangle$, so $\\mathbf F_r \\cdot \\mathbf n = -0.25$ (the field flows in).
2. **On the far side,** the point $(4, 0, 0)$ has $\\mathbf n = \\langle 1, 0, 0 \\rangle$ and $\\mathbf F_r = \\langle 4, 0, 0 \\rangle / 64 = \\langle 0.0625, 0, 0 \\rangle$, so $\\mathbf F_r \\cdot \\mathbf n = 0.0625$ (the field flows out).
3. **Net.** The field flows in through the third of the sphere nearest the origin and out through the other two thirds (the dividing line is at $x = 8/3$, where the field just grazes the sphere). The inflow is stronger but covers less area, and the outflow is weaker but covers more. Adding up over the whole sphere gives exactly $0$, as zero divergence predicts.
<<<
:::

:::check
$S$ is the sphere of radius $1$ centered at $(0, 0, 4)$, and $\\mathbf F_r = \\langle x, y, z \\rangle / \\rho^3$. What is the outward flux through $S$?
answer: 0
???
The sphere reaches only from $z = 3$ to $z = 5$, so the origin is outside it. The field has zero divergence inside, so the flux is $0$.
:::

:::idea Gauss's Law
For several point charges, the field is the sum of the individual fields, and the flux is linear, so the fluxes add. A charge outside $S$ contributes $0$, and a charge inside contributes its $q/\\varepsilon_0$. So:

**Gauss's Law.** For any closed surface $S$ with outward normals, $$\\iint_S \\mathbf E \\cdot d\\mathbf S = \\frac{Q_{\\text{inside}}}{\\varepsilon_0},$$ where $Q_{\\text{inside}}$ is the total charge inside $S$.

The same law holds for charge spread through a solid (the sum becomes an integral of the charge density). The shape of $S$ and where inside the charges sit don't matter.

**Using it for the field:** if the charge has the same pattern in every direction around a point, the field points outward by the same amount in every direction. So on a sphere of radius $r$ around it, $\\mathbf E\\cdot\\mathbf n$ is one number and the flux is $E \\cdot 4\\pi r^2 = q/\\varepsilon_0$, which gives $E = \\dfrac{q}{4\\pi\\varepsilon_0 r^2}$, the inverse-square law again.
>>> Adding up the charges inside, with numbers
Charges: $3 \\times 10^{-9}$ C at $(1, 0, 0)$, $-1 \\times 10^{-9}$ C at $(0, 2, 0)$, and $2 \\times 10^{-9}$ C at $(0, 0, 5)$.

**$S$ = the sphere of radius $3$ centered at the origin.**
1. **Which are inside?** A charge is inside if its distance from the origin is less than $3$. The distances are $1$, $2$, and $5$. So the first two are inside, and the third is outside.
2. **Total inside.** $3 \\times 10^{-9} - 1 \\times 10^{-9} = 2 \\times 10^{-9}$ C. (The charge at distance $5$ doesn't count, even though it makes a field everywhere on $S$: its flux in and out cancels, as with the sphere that missed the origin.)
3. **Flux.** $\\dfrac{2 \\times 10^{-9}}{8.854 \\times 10^{-12}} \\approx 225.9$.

**$S$ = the sphere of radius $6$ centered at the origin.** All three distances ($1$, $2$, $5$) are less than $6$, so the total inside is $3 - 1 + 2 = 4 \\times 10^{-9}$ C, and the flux is $\\dfrac{4 \\times 10^{-9}}{8.854 \\times 10^{-12}} \\approx 451.8$.
<<<
>>> Finding $E$ from the flux, with numbers
Take $q = 10^{-9}$ C at the origin, and a sphere of radius $r = 2$.

1. **The flux is known.** Gauss's Law gives $\\dfrac{q}{\\varepsilon_0} = \\dfrac{10^{-9}}{8.854 \\times 10^{-12}} \\approx 112.9$.
2. **The area is known.** $4\\pi r^2 = 16\\pi \\approx 50.27$.
3. **The field strength is one number everywhere on the sphere** (same direction pattern in all directions), so flux = strength × area. Strength $= 112.9 / 50.27 \\approx 2.25$ ✓, which matches the value we found from the inverse-square law at $\\rho = 2$.
<<<
:::

:::check
Charges of $2 \\times 10^{-9}$ C and $5 \\times 10^{-9}$ C are inside a closed surface $S$, and a charge of $-4 \\times 10^{-9}$ C is outside it. Using $\\varepsilon_0 = 8.854 \\times 10^{-12}$, the flux through $S$ is $Q/\\varepsilon_0$ for which $Q$ (in units of $10^{-9}$ C)?
answer: 7
???
Only the charges inside count: $2 + 5 = 7$. The outside charge contributes no net flux.
:::

:::idea Gauss's Law as a statement about divergence
Let $\\rho_c(x, y, z)$ be the charge density (charge per unit volume). Take any small solid $E$ with boundary $S$. Gauss's Law says $\\iint_S \\mathbf E\\cdot d\\mathbf S = \\dfrac{1}{\\varepsilon_0}\\iiint_E \\rho_c\\, dV$. The Divergence Theorem says the left side is $\\iiint_E \\nabla\\cdot\\mathbf E\\, dV$. So $$\\iiint_E \\left(\\nabla\\cdot\\mathbf E - \\frac{\\rho_c}{\\varepsilon_0}\\right) dV = 0$$ for every solid $E$. Shrink $E$ to a point: the thing inside must be $0$ there, so $$\\nabla\\cdot\\mathbf E = \\frac{\\rho_c}{\\varepsilon_0}.$$

This is the same law in **differential form**: the divergence of $\\mathbf E$ at a point is the charge density there divided by $\\varepsilon_0$. Where there is no charge the divergence is $0$, as we found away from the point charge. The charge itself is where the divergence is nonzero. Dec 9 uses this as one of Maxwell's equations.
>>> Why the inside must be $0$ at every point, with numbers
Call the inside $g = \\nabla\\cdot\\mathbf E - \\rho_c/\\varepsilon_0$, a continuous function. We know $\\iiint_E g\\, dV = 0$ for **every** solid $E$. Suppose $g$ were not $0$ at some point, and see what goes wrong.

1. **Suppose $g$ is positive somewhere.** For example, suppose $g = x - 0.2$, which is $0.3$ at the point $(0.5, 0, 0)$.
2. **Then it is positive nearby.** $g$ is continuous, so near $(0.5, 0, 0)$ it stays close to $0.3$. In the ball of radius $0.1$ around that point, $x$ is between $0.4$ and $0.6$, so $g$ is between $0.2$ and $0.4$, positive everywhere in the ball.
3. **So its integral over that ball is positive.** It is about $0.3 \\times$ the volume $\\tfrac43\\pi(0.1)^3 \\approx 0.00126$, which is not $0$.
4. **That contradicts "$0$ for every solid."** The ball is one of the solids, and its integral isn't $0$. So $g$ can't be positive anywhere. The same argument with negative values shows it can't be negative anywhere. So $g = 0$ at every point, which is $\\nabla\\cdot\\mathbf E = \\rho_c/\\varepsilon_0$.
<<<
>>> The two forms on a ball of charge, with numbers
Suppose a ball of radius $1$ has uniform charge density $\\rho_c = 3\\varepsilon_0$ and a field $\\mathbf E = \\langle x, y, z \\rangle$ inside it.

1. **Differential form.** $\\nabla\\cdot\\mathbf E = 1 + 1 + 1 = 3$, and $\\dfrac{\\rho_c}{\\varepsilon_0} = 3$ ✓.
2. **Integral form on a sphere of radius $0.5$ inside the ball.** The field on it is $\\langle x, y, z \\rangle$ with length $0.5$, pointing outward, so $\\mathbf E\\cdot\\mathbf n = 0.5$ everywhere. The area is $4\\pi(0.25) = \\pi$. The flux is $0.5\\pi \\approx 1.571$.
3. **Charge inside it.** $\\dfrac{1}{\\varepsilon_0}\\iiint \\rho_c\\, dV = 3 \\times \\text{volume} = 3 \\times \\dfrac{4}{3}\\pi(0.5)^3 = 0.5\\pi \\approx 1.571$ ✓.

Both forms give $0.5\\pi$.
<<<
:::

:::check
In a region with no charge, what does Gauss's Law in differential form say about $\\nabla\\cdot\\mathbf E$?
- [x] It is $0$.
  why: No charge density means $\\rho_c = 0$, so $\\nabla\\cdot\\mathbf E = 0/\\varepsilon_0 = 0$.
- [ ] It is $\\varepsilon_0$.
  why: $\\varepsilon_0$ is a constant that divides the charge density. With no charge, the divergence is $0$, not $\\varepsilon_0$.
???
$\\nabla\\cdot\\mathbf E = \\rho_c/\\varepsilon_0$, and $\\rho_c = 0$ where there's no charge. The point charge field has zero divergence everywhere except at the charge.
:::

:::summary Summary
- A point charge $q$ at the origin makes $\\mathbf E = \\dfrac{q}{4\\pi\\varepsilon_0}\\dfrac{\\langle x, y, z \\rangle}{\\rho^3}$, whose length falls like $1/\\rho^2$. Away from the origin its divergence is $0$.
- The flux of $\\langle x, y, z \\rangle / \\rho^3$ through a sphere around the origin is $4\\pi$ for every radius: the area grows like $a^2$ and the field shrinks like $1/a^2$.
- For any closed surface, the flux is $4\\pi$ if it encloses the origin and $0$ if not (Divergence Theorem, cutting out a small sphere).
- **Gauss's Law:** $\\iint_S \\mathbf E\\cdot d\\mathbf S = Q_{\\text{inside}}/\\varepsilon_0$, and with the Divergence Theorem, $\\nabla\\cdot\\mathbf E = \\rho_c/\\varepsilon_0$.

**Common mistakes:**
- Counting charges outside $S$ in $Q_{\\text{inside}}$. They make a field on $S$, but their net flux is $0$.
- Using the Divergence Theorem on a surface that encloses the charge without cutting out the origin: the field isn't defined there.
- Forgetting the $4\\pi$: the flux of $\\mathbf E$ is $q/\\varepsilon_0$, and the flux of $\\mathbf F_r$ alone is $4\\pi$.
:::
`;export{e as default};