var e=`---
title: Cross product
date: 2026-08-31
stewart: 12.4
source: OpenStax Calculus Volume 3, §2.4 The Cross Product
---

:::recap Last time
- A plane through $(x_0, y_0, z_0)$ with [[normal vector]] $\\langle a, b, c \\rangle$ is $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$.
- So to write a plane you need a vector perpendicular to it. If all you have is three points on the plane, where does that vector come from?
:::

:::check
Warm-up: which vector is perpendicular to both $\\langle 1, 0, 0 \\rangle$ and $\\langle 0, 1, 0 \\rangle$?
- [x] $\\langle 0, 0, 1 \\rangle$
- [ ] $\\langle 1, 1, 0 \\rangle$
  why: Its dot product with $\\langle 1, 0, 0 \\rangle$ is $1$, not $0$.
- [ ] $\\langle 0, 1, 1 \\rangle$
  why: Its dot product with $\\langle 0, 1, 0 \\rangle$ is $1$, not $0$.
???
$\\langle 0, 0, 1 \\rangle \\cdot \\langle 1, 0, 0 \\rangle = 0$ and $\\langle 0, 0, 1 \\rangle \\cdot \\langle 0, 1, 0 \\rangle = 0$. The $z$-axis is perpendicular to the $xy$-plane.
:::

:::question Today
Given two vectors in space, how do you build a third one perpendicular to both? And what does its length measure?
:::

:::idea The cross product
For $\\mathbf u = \\langle u_1, u_2, u_3 \\rangle$ and $\\mathbf v = \\langle v_1, v_2, v_3 \\rangle$, the [[cross product]] is the **vector**
$$\\mathbf u \\times \\mathbf v = \\langle u_2 v_3 - u_3 v_2,\\;\\; u_3 v_1 - u_1 v_3,\\;\\; u_1 v_2 - u_2 v_1 \\rangle.$$
It's only defined for vectors in 3D, and unlike the dot product, the answer is a vector.

**The determinant way to remember it.** Write the unit vectors $\\mathbf i, \\mathbf j, \\mathbf k$ on top, $\\mathbf u$ in the middle row, and $\\mathbf v$ in the bottom row:
$$\\mathbf u \\times \\mathbf v = \\begin{vmatrix} \\mathbf i & \\mathbf j & \\mathbf k \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}$$
$$\\begin{aligned} &= \\mathbf i\\,(u_2 v_3 - u_3 v_2) \\\\ &\\quad - \\mathbf j\\,(u_1 v_3 - u_3 v_1) \\\\ &\\quad + \\mathbf k\\,(u_1 v_2 - u_2 v_1). \\end{aligned}$$
For each unit vector, cover its column and cross-multiply the four numbers left. The middle term gets a minus sign.
>>> Computing $\\langle 1, 2, 3 \\rangle \\times \\langle 4, 5, 6 \\rangle$ step by step
Here $u_1 = 1$, $u_2 = 2$, $u_3 = 3$ and $v_1 = 4$, $v_2 = 5$, $v_3 = 6$.
1. **$\\mathbf i$ part.** Cover the first column. The numbers left are $2, 3$ in the top row and $5, 6$ in the bottom row. Cross-multiply, top-left times bottom-right minus top-right times bottom-left: $2 \\cdot 6 - 3 \\cdot 5 = 12 - 15 = -3$.
2. **$\\mathbf j$ part.** Cover the second column. Left are $1, 3$ on top and $4, 6$ below: $1 \\cdot 6 - 3 \\cdot 4 = -6$. The minus sign in front makes it $+6$.
3. **$\\mathbf k$ part.** Cover the third column. Left are $1, 2$ on top and $4, 5$ below: $1 \\cdot 5 - 2 \\cdot 4 = -3$.
4. **Answer.** $\\langle -3, 6, -3 \\rangle$.
5. **Check it's perpendicular to both.** With $\\langle 1, 2, 3 \\rangle$: $-3 + 12 - 9 = 0$ ✓. With $\\langle 4, 5, 6 \\rangle$: $-12 + 30 - 18 = 0$ ✓.

**Why the middle minus matters.** Forgetting it gives $\\langle -3, -6, -3 \\rangle$, whose dot product with $\\langle 1, 2, 3 \\rangle$ is $-3 - 12 - 9 = -24$: not perpendicular. The perpendicular check catches the slip.
<<<
:::

:::check
What is the first component of $\\langle 2, -1, 3 \\rangle \\times \\langle 1, 4, -2 \\rangle$?
answer: -10
???
Cover the first column and cross-multiply what's left: $(-1)(-2) - 3 \\cdot 4 = 2 - 12 = -10$. The whole cross product is $\\langle -10, 7, 9 \\rangle$. Check: $\\langle -10, 7, 9 \\rangle \\cdot \\langle 2, -1, 3 \\rangle = -20 - 7 + 27 = 0$ ✓.
:::

:::idea Perpendicular, and which way it points
**$\\mathbf u \\times \\mathbf v$ is perpendicular to both $\\mathbf u$ and $\\mathbf v$.** That's what the formula was built to do.

**Order matters: $\\mathbf v \\times \\mathbf u = -(\\mathbf u \\times \\mathbf v)$.** Both are perpendicular to $\\mathbf u$ and $\\mathbf v$, but they point in opposite directions. The **right-hand rule** says which one is $\\mathbf u \\times \\mathbf v$: curl the fingers of your right hand from $\\mathbf u$ toward $\\mathbf v$, and your thumb points along $\\mathbf u \\times \\mathbf v$. For example, $\\mathbf i \\times \\mathbf j = \\mathbf k$, $\\mathbf j \\times \\mathbf k = \\mathbf i$, and $\\mathbf k \\times \\mathbf i = \\mathbf j$.

**Parallel vectors give $\\mathbf 0$.** In particular, $\\mathbf u \\times \\mathbf u = \\mathbf 0$.
>>> Each fact, checked with numbers
**Swapping the order.** For example, $\\langle 4, 5, 6 \\rangle \\times \\langle 1, 2, 3 \\rangle$: the $\\mathbf i$ part is $5 \\cdot 3 - 6 \\cdot 2 = 3$, the $\\mathbf j$ part is $-(4 \\cdot 3 - 6 \\cdot 1) = -6$, and the $\\mathbf k$ part is $4 \\cdot 2 - 5 \\cdot 1 = 3$. That's $\\langle 3, -6, 3 \\rangle$, exactly the negative of $\\langle -3, 6, -3 \\rangle$. Each component is a difference like $u_2 v_3 - u_3 v_2$, and swapping $\\mathbf u$ and $\\mathbf v$ swaps the two terms, which flips the sign.

**$\\mathbf i \\times \\mathbf j$.** With $\\mathbf u = \\langle 1, 0, 0 \\rangle$ and $\\mathbf v = \\langle 0, 1, 0 \\rangle$: $\\mathbf i$ part $0 \\cdot 0 - 0 \\cdot 1 = 0$, $\\mathbf j$ part $-(1 \\cdot 0 - 0 \\cdot 0) = 0$, $\\mathbf k$ part $1 \\cdot 1 - 0 \\cdot 0 = 1$. So $\\mathbf i \\times \\mathbf j = \\langle 0, 0, 1 \\rangle = \\mathbf k$, as the right-hand rule says.

**Parallel vectors.** $\\langle 1, 2, 3 \\rangle \\times \\langle 2, 4, 6 \\rangle$: $\\mathbf i$ part $2 \\cdot 6 - 3 \\cdot 4 = 0$, $\\mathbf j$ part $-(1 \\cdot 6 - 3 \\cdot 2) = 0$, $\\mathbf k$ part $1 \\cdot 4 - 2 \\cdot 2 = 0$. The zero vector.
<<<
:::

:::theorem Cross product is perpendicular
For any vectors $\\mathbf u$ and $\\mathbf v$ in 3D, $(\\mathbf u \\times \\mathbf v) \\cdot \\mathbf u = 0$ and $(\\mathbf u \\times \\mathbf v) \\cdot \\mathbf v = 0$.

**Why:** write out the dot product with $\\mathbf u$:
$$u_1(u_2 v_3 - u_3 v_2) + u_2(u_3 v_1 - u_1 v_3) + u_3(u_1 v_2 - u_2 v_1).$$
Multiplied out, that's six terms: $u_1u_2v_3 - u_1u_3v_2 + u_2u_3v_1 - u_1u_2v_3 + u_1u_3v_2 - u_2u_3v_1$. Each term appears once with $+$ and once with $-$, so they all cancel to $0$. The same happens with $\\mathbf v$.
:::

:::check
What is $\\mathbf j \\times \\mathbf i$?
- [x] $-\\mathbf k$
- [ ] $\\mathbf k$
  why: That's $\\mathbf i \\times \\mathbf j$. Swapping the order flips the sign.
- [ ] $\\mathbf 0$
  why: Only parallel vectors give $\\mathbf 0$, and $\\mathbf i$ and $\\mathbf j$ are perpendicular.
???
$\\mathbf j \\times \\mathbf i = -(\\mathbf i \\times \\mathbf j) = -\\mathbf k$. With the formula: $\\langle 0, 1, 0 \\rangle \\times \\langle 1, 0, 0 \\rangle$ has $\\mathbf k$ part $0 \\cdot 0 - 1 \\cdot 1 = -1$.
:::

:::idea The length is an area
$$|\\mathbf u \\times \\mathbf v| = |\\mathbf u|\\,|\\mathbf v|\\sin\\theta,$$
where $\\theta$ is the angle between $\\mathbf u$ and $\\mathbf v$. That's the **area of the parallelogram** with sides $\\mathbf u$ and $\\mathbf v$, and half of it is the area of the triangle with those sides.

**Why it's the area.** A parallelogram's area is base times height. Take $\\mathbf u$ as the base, length $|\\mathbf u|$. The height is how far the tip of $\\mathbf v$ is from the line through $\\mathbf u$, which is $|\\mathbf v|\\sin\\theta$ (the side opposite $\\theta$ in a right triangle with hypotenuse $|\\mathbf v|$).

**Why the length is $|\\mathbf u|\\,|\\mathbf v|\\sin\\theta$.** Multiplying out the components shows $|\\mathbf u \\times \\mathbf v|^2 = |\\mathbf u|^2|\\mathbf v|^2 - (\\mathbf u \\cdot \\mathbf v)^2$. Since $\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta$, this is $|\\mathbf u|^2|\\mathbf v|^2(1 - \\cos^2\\theta) = |\\mathbf u|^2|\\mathbf v|^2\\sin^2\\theta$.
>>> Both formulas checked on $\\langle 1, 2, 3 \\rangle$ and $\\langle 4, 5, 6 \\rangle$
1. **The cross product's length.** $\\langle -3, 6, -3 \\rangle$ has length squared $9 + 36 + 9 = 54$.
2. **The other side.** $|\\mathbf u|^2 = 1 + 4 + 9 = 14$, $|\\mathbf v|^2 = 16 + 25 + 36 = 77$, and $\\mathbf u \\cdot \\mathbf v = 4 + 10 + 18 = 32$. So $14 \\times 77 - 32^2 = 1078 - 1024 = 54$ ✓.
3. **With the angle.** $\\cos\\theta = \\frac{32}{\\sqrt{14}\\sqrt{77}} \\approx 0.9746$, so $\\sin\\theta = \\sqrt{1 - 0.9746^2} \\approx 0.2240$. Then $|\\mathbf u|\\,|\\mathbf v|\\sin\\theta \\approx 3.742 \\times 8.775 \\times 0.2240 \\approx 7.35$, and $\\sqrt{54} \\approx 7.35$ ✓.

**What the small number means.** The angle is only about $13°$, so the two vectors nearly point the same way, and the parallelogram they make is thin: area about $7.35$, much less than $|\\mathbf u|\\,|\\mathbf v| \\approx 32.8$.
<<<
:::

:::example Area of a triangle in space
Find the area of the triangle with corners $P = (1, 0, 0)$, $Q = (0, 2, 0)$, and $R = (0, 0, 3)$.

**Two sides from $P$.** $\\overrightarrow{PQ} = \\langle -1, 2, 0 \\rangle$ and $\\overrightarrow{PR} = \\langle -1, 0, 3 \\rangle$.

**Cross product.** $\\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle 6, 3, 2 \\rangle$, with length $\\sqrt{36 + 9 + 4} = 7$.

**Area.** The parallelogram has area $7$, so the triangle has area $\\tfrac72$.
>>> Each step, with the arithmetic shown
1. **Why sides, not points.** The cross product needs two sides of the triangle as arrows. Taking both from $P$ is the simplest choice: $Q - P = \\langle 0 - 1, 2 - 0, 0 - 0 \\rangle$ and $R - P = \\langle 0 - 1, 0 - 0, 3 - 0 \\rangle$. Crossing the points themselves, $\\langle 1, 0, 0 \\rangle \\times \\langle 0, 2, 0 \\rangle = \\langle 0, 0, 2 \\rangle$, measures a different triangle, the one with a corner at the origin.
2. **$\\mathbf i$ part.** The rows are $-1, 2, 0$ and $-1, 0, 3$. Cover the first column: left are $2, 0$ on top and $0, 3$ below, so $2 \\cdot 3 - 0 \\cdot 0 = 6$.
3. **$\\mathbf j$ part.** Cover the second column: $(-1)(3) - 0 \\cdot (-1) = -3$, and the minus sign makes it $3$.
4. **$\\mathbf k$ part.** Cover the third column: $(-1)(0) - 2 \\cdot (-1) = 2$.
5. **Check.** $\\langle 6, 3, 2 \\rangle \\cdot \\langle -1, 2, 0 \\rangle = -6 + 6 = 0$ and $\\langle 6, 3, 2 \\rangle \\cdot \\langle -1, 0, 3 \\rangle = -6 + 6 = 0$ ✓.
6. **Why half.** The diagonal from $Q$ to $R$ cuts the parallelogram into two copies of the triangle, so the triangle is half: $\\tfrac72 = 3.5$.
7. **Any two sides work.** $\\overrightarrow{PQ} \\times \\overrightarrow{QR}$, with $\\overrightarrow{QR} = \\langle 0, -2, 3 \\rangle$, is also $\\langle 6, 3, 2 \\rangle$.
<<<
:::

:::check
What is the area of the parallelogram with sides $\\langle 1, 1, 0 \\rangle$ and $\\langle 0, 1, 1 \\rangle$?
answer: sqrt(3)
???
$\\langle 1, 1, 0 \\rangle \\times \\langle 0, 1, 1 \\rangle = \\langle 1 \\cdot 1 - 0 \\cdot 1,\\; -(1 \\cdot 1 - 0 \\cdot 0),\\; 1 \\cdot 1 - 1 \\cdot 0 \\rangle = \\langle 1, -1, 1 \\rangle$, with length $\\sqrt3$.
:::

:::idea A plane through three points
Three points $P$, $Q$, $R$ that aren't on one line fix a plane. The arrows $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$ both lie in it, so their cross product is perpendicular to the plane: it's a normal vector.
$$\\mathbf n = \\overrightarrow{PQ} \\times \\overrightarrow{PR}.$$
Then write the plane with that normal and any of the three points (Aug 28).
>>> Why the cross product of two arrows in the plane is a normal
A normal vector has to be perpendicular to every arrow that lies in the plane. $\\overrightarrow{PQ} \\times \\overrightarrow{PR}$ is perpendicular to $\\overrightarrow{PQ}$ and to $\\overrightarrow{PR}$. Every other arrow in the plane is a combination of those two: for example, $\\overrightarrow{QR} = \\overrightarrow{PR} - \\overrightarrow{PQ}$. Dot products split over sums, so $\\mathbf n \\cdot \\overrightarrow{QR} = \\mathbf n \\cdot \\overrightarrow{PR} - \\mathbf n \\cdot \\overrightarrow{PQ} = 0 - 0 = 0$.

**Why the points can't be on one line.** Then $\\overrightarrow{PQ}$ and $\\overrightarrow{PR}$ are parallel, and their cross product is $\\mathbf 0$, which can't be a normal. For example, $(0, 0, 0)$, $(1, 1, 1)$, $(2, 2, 2)$ give $\\langle 1, 1, 1 \\rangle \\times \\langle 2, 2, 2 \\rangle = \\langle 0, 0, 0 \\rangle$. Infinitely many planes contain that line.
<<<
:::

:::example The plane through three points
Find the plane through $P = (1, 1, -2)$, $Q = (0, 2, 1)$, and $R = (-1, -1, 0)$. (Points from OpenStax.)

**Two arrows.** $\\overrightarrow{PQ} = \\langle -1, 1, 3 \\rangle$ and $\\overrightarrow{PR} = \\langle -2, -2, 2 \\rangle$.

**Normal.** $\\mathbf n = \\overrightarrow{PQ} \\times \\overrightarrow{PR} = \\langle 8, -4, 4 \\rangle$.

**Plane.** Using $P$: $8(x - 1) - 4(y - 1) + 4(z + 2) = 0$, which is $8x - 4y + 4z = -4$, or $2x - y + z = -1$ after dividing by $4$.
>>> Each step, and checking all three points
1. **The arrows.** $Q - P = \\langle 0 - 1, 2 - 1, 1 + 2 \\rangle = \\langle -1, 1, 3 \\rangle$. $R - P = \\langle -1 - 1, -1 - 1, 0 + 2 \\rangle = \\langle -2, -2, 2 \\rangle$.
2. **$\\mathbf i$ part.** $1 \\cdot 2 - 3 \\cdot (-2) = 2 + 6 = 8$.
3. **$\\mathbf j$ part.** $(-1)(2) - 3 \\cdot (-2) = -2 + 6 = 4$, and the minus sign makes it $-4$.
4. **$\\mathbf k$ part.** $(-1)(-2) - 1 \\cdot (-2) = 2 + 2 = 4$.
5. **Simplify.** $8x - 8 - 4y + 4 + 4z + 8 = 0$ gives $8x - 4y + 4z = -4$. Dividing by $4$: $2x - y + z = -1$. Dividing doesn't change which points fit.
6. **Check all three points.** $P$: $2 - 1 - 2 = -1$ ✓. $Q$: $0 - 2 + 1 = -1$ ✓. $R$: $-2 + 1 + 0 = -1$ ✓.
<<<
:::

:::check
Which plane passes through $(0, 0, 0)$, $(1, 0, 0)$, and $(0, 1, 1)$?
- [x] $y - z = 0$
- [ ] $x + y + z = 0$
  why: $(1, 0, 0)$ gives $1 \\ne 0$, so it isn't on this plane.
- [ ] $y + z = 0$
  why: $(0, 1, 1)$ gives $2 \\ne 0$. The normal should be $\\langle 1, 0, 0 \\rangle \\times \\langle 0, 1, 1 \\rangle = \\langle 0, -1, 1 \\rangle$.
- [ ] $x = 0$
  why: $(1, 0, 0)$ has $x = 1$, so it isn't on this plane.
???
$\\langle 1, 0, 0 \\rangle \\times \\langle 0, 1, 1 \\rangle = \\langle 0 \\cdot 1 - 0 \\cdot 1,\\; -(1 \\cdot 1 - 0 \\cdot 0),\\; 1 \\cdot 1 - 0 \\cdot 0 \\rangle = \\langle 0, -1, 1 \\rangle$. Through the origin: $-y + z = 0$, which is $y - z = 0$. Check: all three points give $0$ ✓.
:::

:::idea The triple product and volume
The **triple product** $\\mathbf u \\cdot (\\mathbf v \\times \\mathbf w)$ is a number. Its absolute value is the **volume** of the slanted box (parallelepiped) with edges $\\mathbf u$, $\\mathbf v$, $\\mathbf w$ from one corner. It's $0$ exactly when the three vectors lie in one plane.

**Why it's the volume.** The volume of a slanted box is (area of the base) $\\times$ (height). The base is the parallelogram with sides $\\mathbf v$ and $\\mathbf w$, with area $|\\mathbf v \\times \\mathbf w|$. The height is how far $\\mathbf u$ reaches straight out of that base, which is the scalar projection of $\\mathbf u$ onto the normal $\\mathbf v \\times \\mathbf w$: $\\frac{|\\mathbf u \\cdot (\\mathbf v \\times \\mathbf w)|}{|\\mathbf v \\times \\mathbf w|}$. Multiplying, the $|\\mathbf v \\times \\mathbf w|$'s cancel.
>>> The box, with numbers, for $\\mathbf u = \\langle 1, 1, 0 \\rangle$, $\\mathbf v = \\langle 0, 1, 1 \\rangle$, $\\mathbf w = \\langle 1, 0, 1 \\rangle$
1. **Base normal.** $\\mathbf v \\times \\mathbf w = \\langle 1 \\cdot 1 - 1 \\cdot 0,\\; -(0 \\cdot 1 - 1 \\cdot 1),\\; 0 \\cdot 0 - 1 \\cdot 1 \\rangle = \\langle 1, 1, -1 \\rangle$.
2. **Base area.** $|\\langle 1, 1, -1 \\rangle| = \\sqrt3 \\approx 1.732$.
3. **Height.** $\\mathbf u \\cdot \\langle 1, 1, -1 \\rangle = 1 + 1 + 0 = 2$, so the height is $\\frac{2}{\\sqrt3} \\approx 1.155$.
4. **Volume.** $\\sqrt3 \\times \\frac{2}{\\sqrt3} = 2$, which is just $\\mathbf u \\cdot (\\mathbf v \\times \\mathbf w) = 2$.

**When it's $0$.** If $\\mathbf u$ lies in the same plane as $\\mathbf v$ and $\\mathbf w$, it doesn't reach out of the base at all: the height is $0$, so the volume is $0$. For example, $\\mathbf u = \\mathbf v + \\mathbf w = \\langle 1, 1, 2 \\rangle$ gives $\\langle 1, 1, 2 \\rangle \\cdot \\langle 1, 1, -1 \\rangle = 1 + 1 - 2 = 0$.
<<<
:::

:::check
Do $\\langle 1, 2, 3 \\rangle$, $\\langle 4, 5, 6 \\rangle$, and $\\langle 7, 8, 9 \\rangle$ lie in one plane?
- [x] Yes
- [ ] No
  why: $\\langle 4, 5, 6 \\rangle \\times \\langle 7, 8, 9 \\rangle = \\langle -3, 6, -3 \\rangle$, and its dot product with $\\langle 1, 2, 3 \\rangle$ is $-3 + 12 - 9 = 0$. A triple product of $0$ means they're in one plane.
???
$\\langle 4, 5, 6 \\rangle \\times \\langle 7, 8, 9 \\rangle = \\langle 5 \\cdot 9 - 6 \\cdot 8,\\; -(4 \\cdot 9 - 6 \\cdot 7),\\; 4 \\cdot 8 - 5 \\cdot 7 \\rangle = \\langle -3, 6, -3 \\rangle$. Then $\\langle 1, 2, 3 \\rangle \\cdot \\langle -3, 6, -3 \\rangle = 0$, so the box is flat: yes. (Indeed, $\\langle 7, 8, 9 \\rangle = 2\\,\\langle 4, 5, 6 \\rangle - \\langle 1, 2, 3 \\rangle$.)
:::

:::summary Summary
- $\\mathbf u \\times \\mathbf v$ is a vector perpendicular to both. Compute it with the determinant, and remember the minus sign on $\\mathbf j$.
- Order matters: $\\mathbf v \\times \\mathbf u = -(\\mathbf u \\times \\mathbf v)$. The right-hand rule gives the direction, with $\\mathbf i \\times \\mathbf j = \\mathbf k$.
- $|\\mathbf u \\times \\mathbf v| = |\\mathbf u|\\,|\\mathbf v|\\sin\\theta$ is the parallelogram's area; half is the triangle's.
- Plane through three points: normal $\\overrightarrow{PQ} \\times \\overrightarrow{PR}$, then $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$.
- $|\\mathbf u \\cdot (\\mathbf v \\times \\mathbf w)|$ is the volume of the slanted box; $0$ means the three vectors are in one plane.

**Common mistakes:**
- Forgetting the minus sign on the middle ($\\mathbf j$) component.
- Crossing the corner points themselves instead of the triangle's sides.
- Forgetting to halve the parallelogram's area for a triangle.
- Skipping the check that the cross product is perpendicular to both vectors.
:::
`;export{e as default};