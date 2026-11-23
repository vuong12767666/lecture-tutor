var e=`---
title: Dot product applications and equations for planes
date: 2026-08-28
stewart: 12.3, 12.5
source: OpenStax Calculus Volume 3, §2.3 The Dot Product and §2.5 Equations of Lines and Planes in Space
---

:::recap Last time
- The [[dot product]] multiplies matching components and adds: $\\langle a_1, b_1, c_1 \\rangle \\cdot \\langle a_2, b_2, c_2 \\rangle = a_1a_2 + b_1b_2 + c_1c_2$.
- It also equals $|\\mathbf u|\\,|\\mathbf v|\\cos\\theta$, where $\\theta$ is the angle between the vectors.
- Two nonzero vectors are [[orthogonal]] (perpendicular) exactly when their dot product is $0$.
:::

:::check
Warm-up: are $\\langle 2, -1, 3 \\rangle$ and $\\langle 1, 5, 1 \\rangle$ perpendicular?
- [x] Yes
- [ ] No
  why: The dot product is $2 - 5 + 3 = 0$, and a dot product of $0$ means perpendicular.
???
$2 \\cdot 1 + (-1) \\cdot 5 + 3 \\cdot 1 = 2 - 5 + 3 = 0$, so they're perpendicular.
:::

:::question Today
How much of one vector points along another? And how does "perpendicular means dot product $0$" give the equations of planes, and tell you where a line meets one?
:::

:::idea Projections
The **scalar projection** of $\\mathbf v$ onto $\\mathbf u$ is how much of $\\mathbf v$ points in the direction of $\\mathbf u$:
$$\\operatorname{comp}_{\\mathbf u}\\mathbf v = \\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|}.$$
The **vector projection** is that amount, as a vector pointing along $\\mathbf u$:
$$\\operatorname{proj}_{\\mathbf u}\\mathbf v = \\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|^2}\\,\\mathbf u.$$

**Why the scalar projection is $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|}$.** Draw $\\mathbf u$ and $\\mathbf v$ from the same point, and drop a perpendicular from the tip of $\\mathbf v$ onto the line through $\\mathbf u$. That makes a right triangle with hypotenuse $\\mathbf v$. The side along $\\mathbf u$ has length $|\\mathbf v|\\cos\\theta$. Since $\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta$, dividing by $|\\mathbf u|$ gives $|\\mathbf v|\\cos\\theta = \\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|}$.
>>> The triangle, with numbers, for $\\mathbf v = \\langle 6, -4 \\rangle$ and $\\mathbf u = \\langle 3, 1 \\rangle$
1. **The pieces.** $\\mathbf u \\cdot \\mathbf v = 18 - 4 = 14$. $|\\mathbf u| = \\sqrt{9 + 1} = \\sqrt{10} \\approx 3.162$. $|\\mathbf v| = \\sqrt{36 + 16} = \\sqrt{52} \\approx 7.211$.
2. **The angle.** $\\cos\\theta = \\frac{14}{\\sqrt{10}\\,\\sqrt{52}} \\approx 0.614$.
3. **The side along $\\mathbf u$.** $|\\mathbf v|\\cos\\theta \\approx 7.211 \\times 0.614 \\approx 4.427$.
4. **The formula.** $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|} = \\frac{14}{\\sqrt{10}} \\approx 4.427$. The same number, without finding the angle.

**What "how much points along $\\mathbf u$" means here.** If you split $\\mathbf v$ into a part along $\\mathbf u$ and a part perpendicular to $\\mathbf u$, the part along $\\mathbf u$ has length about $4.427$.
<<<

**Why the vector projection has $|\\mathbf u|^2$.** To turn the length into a vector pointing along $\\mathbf u$, multiply it by the unit vector $\\frac{\\mathbf u}{|\\mathbf u|}$: $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|} \\cdot \\frac{\\mathbf u}{|\\mathbf u|} = \\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|^2}\\,\\mathbf u$.

**A negative scalar projection** means the angle is more than $90°$, so $\\mathbf v$ points partly *against* $\\mathbf u$, and the vector projection points opposite to $\\mathbf u$.
>>> The vector projection, and a negative case, with numbers
**For $\\mathbf v = \\langle 6, -4 \\rangle$ and $\\mathbf u = \\langle 3, 1 \\rangle$:**
1. **The multiplier.** $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|^2} = \\frac{14}{10} = 1.4$.
2. **The vector.** $1.4 \\, \\langle 3, 1 \\rangle = \\langle 4.2, 1.4 \\rangle$. It points the same way as $\\mathbf u$.
3. **Its length.** $\\sqrt{4.2^2 + 1.4^2} = \\sqrt{19.6} \\approx 4.427$, the scalar projection from before ✓.

**A negative case.** Project $\\mathbf w = \\langle -2, 1 \\rangle$ onto $\\mathbf u = \\langle 3, 1 \\rangle$. The dot product is $-6 + 1 = -5$, so the scalar projection is $\\frac{-5}{\\sqrt{10}} \\approx -1.58$. The vector projection is $\\frac{-5}{10}\\langle 3, 1 \\rangle = \\langle -1.5, -0.5 \\rangle$, which points opposite to $\\mathbf u$. That matches: $\\mathbf w$ points mostly left, and $\\mathbf u$ points mostly right.
<<<
:::

:::check
What is the scalar projection of $\\mathbf v = \\langle 1, 2, 2 \\rangle$ onto $\\mathbf u = \\langle 2, 1, 2 \\rangle$?
answer: 8/3
???
$\\mathbf u \\cdot \\mathbf v = 2 + 2 + 4 = 8$ and $|\\mathbf u| = \\sqrt{4 + 1 + 4} = 3$, so $\\operatorname{comp}_{\\mathbf u}\\mathbf v = \\tfrac83$.
:::

:::example Splitting a vector into two perpendicular parts
Write $\\mathbf v = \\langle 6, -4 \\rangle$ as a part along $\\mathbf u = \\langle 3, 1 \\rangle$ plus a part perpendicular to $\\mathbf u$. (Example from OpenStax.)

**Along $\\mathbf u$.** $\\mathbf p = \\operatorname{proj}_{\\mathbf u}\\mathbf v = \\frac{14}{10}\\langle 3, 1 \\rangle = \\langle 4.2, 1.4 \\rangle$.

**The rest.** $\\mathbf q = \\mathbf v - \\mathbf p = \\langle 6 - 4.2,\\; -4 - 1.4 \\rangle = \\langle 1.8, -5.4 \\rangle$.

**Check.** $\\mathbf p + \\mathbf q = \\mathbf v$, and $\\mathbf p \\cdot \\mathbf q = 7.56 - 7.56 = 0$, so the two parts are perpendicular. ✓
>>> Why $\\mathbf v - \\mathbf p$ is perpendicular to $\\mathbf u$
**The goal.** We want $\\mathbf v = (\\text{part along } \\mathbf u) + (\\text{part perpendicular to } \\mathbf u)$. The projection is the part along $\\mathbf u$, so whatever is left over must be the perpendicular part.

1. **Leftover.** $\\mathbf q = \\mathbf v - \\mathbf p = \\langle 1.8, -5.4 \\rangle$.
2. **Perpendicular to $\\mathbf u$?** $\\mathbf q \\cdot \\mathbf u = 1.8 \\cdot 3 + (-5.4) \\cdot 1 = 5.4 - 5.4 = 0$ ✓.
3. **Why it always works.** $\\mathbf q \\cdot \\mathbf u = \\mathbf v \\cdot \\mathbf u - \\mathbf p \\cdot \\mathbf u$. Here $\\mathbf v \\cdot \\mathbf u = 14$, and $\\mathbf p \\cdot \\mathbf u = 1.4\\,(\\mathbf u \\cdot \\mathbf u) = 1.4 \\times 10 = 14$. They cancel, and the multiplier $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|^2}$ is exactly the number that makes them cancel for any $\\mathbf v$.
4. **Pythagoras.** $|\\mathbf p|^2 + |\\mathbf q|^2 = 19.6 + 32.4 = 52 = |\\mathbf v|^2$, as a right triangle should have.
<<<
:::

:::check
For $\\mathbf v = \\langle 5, -1 \\rangle$ and $\\mathbf u = \\langle 4, 2 \\rangle$, what is the multiplier $\\dfrac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|^2}$ in $\\operatorname{proj}_{\\mathbf u}\\mathbf v$?
answer: 9/10
???
$\\mathbf u \\cdot \\mathbf v = 20 - 2 = 18$ and $|\\mathbf u|^2 = 16 + 4 = 20$, so the multiplier is $\\tfrac{18}{20} = \\tfrac{9}{10}$, and $\\operatorname{proj}_{\\mathbf u}\\mathbf v = \\langle 3.6, 1.8 \\rangle$.
:::

:::idea Work
When a constant force $\\mathbf F$ moves an object in a straight line from $P$ to $Q$, the **work** it does is
$$W = \\mathbf F \\cdot \\overrightarrow{PQ} = |\\mathbf F|\\,|\\overrightarrow{PQ}|\\cos\\theta.$$

**Why.** Only the part of the force pointing along the motion moves the object forward. That part is the scalar projection of $\\mathbf F$ onto the motion, $\\frac{\\mathbf F \\cdot \\overrightarrow{PQ}}{|\\overrightarrow{PQ}|}$. Work is that force times the distance moved, $|\\overrightarrow{PQ}|$, and the two $|\\overrightarrow{PQ}|$'s cancel, leaving $\\mathbf F \\cdot \\overrightarrow{PQ}$.
>>> The cancelling, with numbers
Take $\\mathbf F = \\langle 5, -3, 1 \\rangle$ newtons, moving an object from $(1, 1, 1)$ to $(9, 4, 7)$ in meters (the next example).
1. **The move.** $\\overrightarrow{PQ} = \\langle 8, 3, 6 \\rangle$, with length $\\sqrt{64 + 9 + 36} = \\sqrt{109} \\approx 10.44$ m.
2. **The force along the move.** $\\frac{\\mathbf F \\cdot \\overrightarrow{PQ}}{|\\overrightarrow{PQ}|} = \\frac{40 - 9 + 6}{10.44} = \\frac{37}{10.44} \\approx 3.544$ N.
3. **Times the distance.** $3.544 \\times 10.44 \\approx 37$ joules.
4. **Directly.** $\\mathbf F \\cdot \\overrightarrow{PQ} = 37$. The same, in one step.

**The sideways part does no work.** The rest of $\\mathbf F$ is perpendicular to the motion, and a perpendicular force has dot product $0$ with the move.
<<<
:::

:::example Work along a straight move
A force $\\mathbf F = \\langle 5, -3, 1 \\rangle$ N moves an object from $(1, 1, 1)$ to $(9, 4, 7)$, in meters. How much work does it do? (Example from OpenStax.)

$\\overrightarrow{PQ} = \\langle 9 - 1, 4 - 1, 7 - 1 \\rangle = \\langle 8, 3, 6 \\rangle$, so
$$W = \\langle 5, -3, 1 \\rangle \\cdot \\langle 8, 3, 6 \\rangle = 40 - 9 + 6 = 37 \\text{ J}.$$
>>> Each step, and what the negative term means
1. **The move, end minus start.** $\\langle 9 - 1, 4 - 1, 7 - 1 \\rangle = \\langle 8, 3, 6 \\rangle$.
2. **Multiply matching parts.** $x$: $5 \\times 8 = 40$. $y$: $-3 \\times 3 = -9$. $z$: $1 \\times 6 = 6$.
3. **Add.** $40 - 9 + 6 = 37$ J.

**Check** with the angle: $|\\mathbf F| = \\sqrt{35} \\approx 5.92$ and $|\\overrightarrow{PQ}| \\approx 10.44$, so $\\cos\\theta = \\frac{37}{5.92 \\times 10.44} \\approx 0.599$, an angle of about $53°$, under $90°$, so positive work.

**The $-9$.** In the $y$ direction the force pushes toward negative $y$ ($-3$), while the object moves toward positive $y$ ($+3$). That part of the force works against the motion, so it subtracts.
<<<
:::

:::check
A force of $30$ lb pulls a cart $10$ ft across level ground, at an angle of $60°$ above the ground. How much work does it do, in ft·lb?
answer: 150
???
$W = |\\mathbf F|\\,|\\overrightarrow{PQ}|\\cos\\theta = 30 \\cdot 10 \\cdot \\cos 60° = 300 \\cdot \\tfrac12 = 150$ ft·lb. Only half of the force's size points along the ground.
:::

:::idea Equations of a plane
A plane is fixed by one point $P = (x_0, y_0, z_0)$ on it and a [[normal vector]] $\\mathbf n = \\langle a, b, c \\rangle$ perpendicular to it. A point $Q = (x, y, z)$ is on the plane exactly when the arrow $\\overrightarrow{PQ}$ lies in the plane, which means it's perpendicular to $\\mathbf n$:
$$\\mathbf n \\cdot \\overrightarrow{PQ} = 0, \\qquad\\text{that is,}\\qquad a(x - x_0) + b(y - y_0) + c(z - z_0) = 0.$$
Multiplying out gives the form $ax + by + cz = d$, with $d = ax_0 + by_0 + cz_0$.
>>> Testing points against a plane, with numbers
Take $P = (1, 2, 3)$ and $\\mathbf n = \\langle 2, -1, 4 \\rangle$. The plane is $2(x - 1) - (y - 2) + 4(z - 3) = 0$.
- **The point $(6, 0, 0)$.** The arrow from $P$ is $\\langle 5, -2, -3 \\rangle$. Its dot product with $\\mathbf n$ is $10 + 2 - 12 = 0$: perpendicular, so the point is on the plane.
- **The point $(1, 2, 4)$.** The arrow from $P$ is $\\langle 0, 0, 1 \\rangle$, straight up. Its dot product with $\\mathbf n$ is $4 \\ne 0$, so this point is off the plane.

**Multiplying out.** $2x - 2 - y + 2 + 4z - 12 = 0$, so $2x - y + 4z = 12$. Check with $(6, 0, 0)$: $12 - 0 + 0 = 12$ ✓. And with $(1, 2, 4)$: $2 - 2 + 16 = 16 \\ne 12$.
<<<

**Reading the normal off an equation.** In $ax + by + cz = d$, the coefficients $\\langle a, b, c \\rangle$ are a normal vector. For example, $3x - y + 2z = 7$ has normal $\\langle 3, -1, 2 \\rangle$. The number $d$ only says which of the parallel planes with that normal it is.
>>> Why the coefficients are the normal, with numbers
**Pick any point on $3x - y + 2z = 7$**, for example $(1, 0, 2)$: $3 - 0 + 4 = 7$ ✓. Then $3x - y + 2z = 7$ can be rewritten around that point as $3(x - 1) - (y - 0) + 2(z - 2) = 0$, since multiplying out gives $3x - y + 2z - 7 = 0$.

That is exactly the form $\\mathbf n \\cdot \\overrightarrow{PQ} = 0$ with $\\mathbf n = \\langle 3, -1, 2 \\rangle$.

**What $d$ does.** $3x - y + 2z = 7$ and $3x - y + 2z = 10$ have the same normal, so they're parallel. The point $(0, 0, 3.5)$ is on the first and $(0, 0, 5)$ is on the second: they're at different heights along the $z$-axis.
<<<
:::

:::example A plane from a point and a normal
Find the plane through $(4, -1, 2)$ with normal vector $\\langle 1, 3, -2 \\rangle$.

$$1(x - 4) + 3(y + 1) - 2(z - 2) = 0, \\qquad\\text{so}\\qquad x + 3y - 2z = -3.$$

**Check.** $(4, -1, 2)$: $4 - 3 - 4 = -3$ ✓.
>>> Each step, with the signs
1. **Plug in the point.** $x_0 = 4$, $y_0 = -1$, $z_0 = 2$. Note $y - y_0 = y - (-1) = y + 1$.
2. **Plug in the normal.** $a = 1$, $b = 3$, $c = -2$: $1(x - 4) + 3(y + 1) - 2(z - 2) = 0$.
3. **Multiply out.** $x - 4 + 3y + 3 - 2z + 4 = 0$, so $x + 3y - 2z + 3 = 0$, or $x + 3y - 2z = -3$.
4. **Check another point.** Moving from $(4, -1, 2)$ along a direction perpendicular to $\\mathbf n$, such as $\\langle 3, -1, 0 \\rangle$ (dot product $3 - 3 + 0 = 0$), gives $(7, -2, 2)$: $7 - 6 - 4 = -3$ ✓.
<<<
:::

:::check
Which vector is normal to the plane $3x - y + 2z = 7$?
- [x] $\\langle 3, -1, 2 \\rangle$
- [ ] $\\langle 3, 1, 2 \\rangle$
  why: The coefficient of $y$ is $-1$, so the middle part is $-1$.
- [ ] $\\langle 3, -1, 7 \\rangle$
  why: The $7$ is the constant $d$, not a coefficient. The normal is the coefficients of $x$, $y$, $z$: $\\langle 3, -1, 2 \\rangle$.
- [ ] $\\langle 1, 3, 2 \\rangle$
  why: Its dot product with $\\langle 3, -1, 2 \\rangle$ is $3 - 3 + 4 = 4 \\ne 0$, and it isn't a multiple of it, so it isn't perpendicular to the plane.
???
The normal is the coefficients of $x$, $y$, $z$: $\\langle 3, -1, 2 \\rangle$.
:::

:::idea How two planes meet
Two planes are **parallel** when their normals are parallel, and **perpendicular** when their normals are perpendicular. Otherwise they meet at an angle $\\theta$ with
$$\\cos\\theta = \\frac{|\\mathbf n_1 \\cdot \\mathbf n_2|}{|\\mathbf n_1|\\,|\\mathbf n_2|}.$$

**Why the normals tell you.** Look straight along the line where the planes meet. Each plane then looks like a line through one point, and each normal is at $90°$ to its plane. Turning both planes by $90°$ turns them into their normals, and turning both by the same amount doesn't change the angle between them. The absolute value picks the angle that's $90°$ or less, since $\\mathbf n$ and $-\\mathbf n$ are both normals.
>>> The three cases, with numbers (examples from OpenStax)
1. **$x + 2y - z = 8$ and $2x + 4y - 2z = 10$.** Normals $\\langle 1, 2, -1 \\rangle$ and $\\langle 2, 4, -2 \\rangle$. The second is $2$ times the first, so the planes are parallel.
2. **$2x - 3y + 2z = 3$ and $6x + 2y - 3z = 1$.** Normals $\\langle 2, -3, 2 \\rangle$ and $\\langle 6, 2, -3 \\rangle$. Dot product: $12 - 6 - 6 = 0$, so the planes are perpendicular.
3. **$x + y + z = 4$ and $x - 3y + 5z = 1$.** Normals $\\langle 1, 1, 1 \\rangle$ and $\\langle 1, -3, 5 \\rangle$. Dot product $1 - 3 + 5 = 3$. Lengths $\\sqrt3$ and $\\sqrt{35}$. So $\\cos\\theta = \\frac{3}{\\sqrt{105}} \\approx 0.293$, and $\\theta \\approx 73°$.

**Why the absolute value.** Flipping the second normal to $\\langle -1, 3, -5 \\rangle$ gives a dot product of $-3$ and an angle of about $107°$. That's the other angle between the same two planes; the absolute value picks $73°$.
<<<
:::

:::check
How do the planes $x - y + z = 1$ and $2x + y - z = 5$ meet?
- [ ] They're parallel
  why: Parallel needs one normal to be a multiple of the other. $\\langle 2, 1, -1 \\rangle$ isn't a multiple of $\\langle 1, -1, 1 \\rangle$.
- [x] They're perpendicular
- [ ] At some other angle
  why: The normals' dot product is $2 - 1 - 1 = 0$, so the angle is exactly $90°$.
???
The normals are $\\langle 1, -1, 1 \\rangle$ and $\\langle 2, 1, -1 \\rangle$, with dot product $2 - 1 - 1 = 0$. Perpendicular normals mean perpendicular planes.
:::

:::idea Lines, and where a line meets a plane
A **line** through the point $P = (x_0, y_0, z_0)$ in the direction $\\mathbf d = \\langle a, b, c \\rangle$ is every point
$$\\mathbf r(t) = \\langle x_0 + at,\\; y_0 + bt,\\; z_0 + ct \\rangle, \\qquad t \\text{ any number}.$$
Each value of $t$ gives one point: start at $P$ and add $t$ copies of $\\mathbf d$.

**Where it meets a plane.** Put $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$ into the plane's equation. That leaves one equation in $t$. Solve it, and put that $t$ back into $\\mathbf r(t)$ to get the point.
>>> A line meeting a plane, step by step
Take the line through $(2, 0, 1)$ in the direction $\\langle 1, 1, -1 \\rangle$, and the plane $x + 2y + z = 9$.
1. **Points on the line.** $\\mathbf r(t) = \\langle 2 + t,\\; t,\\; 1 - t \\rangle$. For example, $t = 0$ gives $(2, 0, 1)$ and $t = 1$ gives $(3, 1, 0)$.
2. **Put them into the plane.** $(2 + t) + 2(t) + (1 - t) = 9$.
3. **Solve for $t$.** The left side is $3 + 2t$, so $3 + 2t = 9$ and $t = 3$.
4. **The point.** $\\mathbf r(3) = (5, 3, -2)$.
5. **Check.** $5 + 2 \\cdot 3 + (-2) = 9$ ✓, so the point is on the plane, and it's on the line because it came from $\\mathbf r(t)$.
<<<

**When the line never meets the plane.** If the direction $\\mathbf d$ is perpendicular to the plane's normal, $\\mathbf d \\cdot \\mathbf n = 0$, the line runs parallel to the plane. Then either it lies in the plane (if $P$ is on the plane) or it never meets it.
>>> A parallel line, with numbers
Same line, $\\mathbf r(t) = \\langle 2 + t, t, 1 - t \\rangle$, and the plane $x - y = 4$, with normal $\\langle 1, -1, 0 \\rangle$.
1. **Direction against normal.** $\\langle 1, 1, -1 \\rangle \\cdot \\langle 1, -1, 0 \\rangle = 1 - 1 + 0 = 0$. So the line runs parallel to the plane.
2. **Substituting shows it.** $(2 + t) - t = 4$ becomes $2 = 4$. The $t$'s cancel, and no $t$ makes it true: the line never meets the plane.
3. **The other case.** For the plane $x - y = 2$, the same substitution gives $2 = 2$, true for every $t$: every point of the line is on the plane, so the line lies in it. Check: $(2, 0, 1)$ gives $2 - 0 = 2$ ✓.
<<<
:::

:::check
At what value of $t$ does the line $\\mathbf r(t) = \\langle 1 + t,\\; 2t,\\; 3 - t \\rangle$ meet the plane $x + y + z = 10$?
answer: 3
???
$(1 + t) + 2t + (3 - t) = 4 + 2t = 10$, so $t = 3$. The point is $\\mathbf r(3) = (4, 6, 0)$, and $4 + 6 + 0 = 10$ ✓.
:::

:::idea Distance from a point to a plane
The distance from $P$ to the plane is the length of the shortest path from $P$ to it, which goes straight along the normal. So: pick any point $Q$ on the plane, and take the scalar projection of $\\overrightarrow{QP}$ onto $\\mathbf n$, without its sign:
$$\\text{distance} = \\frac{|\\overrightarrow{QP} \\cdot \\mathbf n|}{|\\mathbf n|}.$$
>>> Why the shortest path is along the normal, with numbers
Take $P = (3, 1, 2)$ and the plane $x - 2y + z = 5$, with $\\mathbf n = \\langle 1, -2, 1 \\rangle$ (example from OpenStax).
1. **A point on the plane.** Set $y = z = 0$: then $x = 5$, so $Q = (5, 0, 0)$.
2. **The arrow.** $\\overrightarrow{QP} = \\langle -2, 1, 2 \\rangle$, with length $3$. That's the distance to $Q$, but $Q$ isn't the closest point.
3. **Project onto the normal.** $\\overrightarrow{QP} \\cdot \\mathbf n = -2 - 2 + 2 = -2$ and $|\\mathbf n| = \\sqrt6$. So the distance is $\\frac{2}{\\sqrt6} \\approx 0.816$.
4. **The closest point.** The dot product $-2$ is negative, so $P$ is on the side of the plane that $\\mathbf n$ points away from. Moving from $P$ in the direction of $\\mathbf n$, by $\\tfrac{2}{6} = \\tfrac13$ of $\\mathbf n$, reaches the plane: $R = P + \\tfrac13\\langle 1, -2, 1 \\rangle = \\left(\\tfrac{10}{3}, \\tfrac13, \\tfrac73\\right)$. Check it's on the plane: $\\tfrac{10}{3} - \\tfrac23 + \\tfrac73 = 5$ ✓. And $|\\overrightarrow{RP}| = \\tfrac13\\sqrt6 \\approx 0.816$ ✓.

**Why every other point is farther.** The arrow from $Q$ to $P$ splits into a part inside the plane ($Q$ to $R$) and a part along the normal ($R$ to $P$), at a right angle. By Pythagoras, $|QP|^2 = |QR|^2 + |RP|^2$, so $|QP|$ is at least $|RP|$. Here $9 = 8\\tfrac13 + \\tfrac23$.
<<<
:::

:::theorem Distance from a point to a plane
The distance from $P = (x_0, y_0, z_0)$ to the plane $ax + by + cz = d$ is
$$\\frac{|a x_0 + b y_0 + c z_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}.$$

**Why:** for any point $Q = (x_1, y_1, z_1)$ on the plane, $\\overrightarrow{QP} \\cdot \\mathbf n = a(x_0 - x_1) + b(y_0 - y_1) + c(z_0 - z_1)$. Since $Q$ is on the plane, $a x_1 + b y_1 + c z_1 = d$, so this is $a x_0 + b y_0 + c z_0 - d$. Dividing its size by $|\\mathbf n| = \\sqrt{a^2 + b^2 + c^2}$ gives the formula. With the numbers above: $\\frac{|3 - 2 + 2 - 5|}{\\sqrt6} = \\frac{2}{\\sqrt6}$.
:::

:::check
What is the distance from $(5, -1, 0)$ to the plane $4x + 2y - z = 3$?
answer: 15/sqrt(21)
???
$\\dfrac{|4 \\cdot 5 + 2 \\cdot (-1) - 0 - 3|}{\\sqrt{16 + 4 + 1}} = \\dfrac{|20 - 2 - 3|}{\\sqrt{21}} = \\dfrac{15}{\\sqrt{21}} \\approx 3.27$.
:::

:::summary Summary
- Scalar projection $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|}$: how much of $\\mathbf v$ points along $\\mathbf u$. Vector projection $\\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|^2}\\mathbf u$.
- Work by a constant force along a straight move: $W = \\mathbf F \\cdot \\overrightarrow{PQ}$.
- Plane through $(x_0, y_0, z_0)$ with normal $\\langle a, b, c \\rangle$: $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$. In $ax + by + cz = d$, the normal is $\\langle a, b, c \\rangle$.
- Planes are parallel or perpendicular when their normals are. The angle between them comes from the normals.
- Line through $(x_0, y_0, z_0)$ in direction $\\langle a, b, c \\rangle$: $\\langle x_0 + at, y_0 + bt, z_0 + ct \\rangle$. To meet a plane, substitute and solve for $t$. If $\\mathbf d \\cdot \\mathbf n = 0$, the line is parallel to the plane.
- Distance from a point to a plane: $\\frac{|ax_0 + by_0 + cz_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}$.

**Common mistakes:**
- Dividing by $|\\mathbf u|$ instead of $|\\mathbf u|^2$ in the vector projection.
- Including the constant $d$ in the normal vector.
- Sign slips in $y - y_0$ when $y_0$ is negative.
:::
`;export{e as default};