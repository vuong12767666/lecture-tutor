var e=`---
title: Vectors and the dot product
date: 2026-08-26
stewart: 12.2, 12.3
source: OpenStax Calculus Volume 3, §2.1 Vectors in the Plane, §2.2 Vectors in Three Dimensions, and §2.3 The Dot Product
---

:::recap Last time
Points in space are $(x, y, z)$, and the distance between two points is $\\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$. Spheres are every point at a fixed distance from a center.
:::

:::check
Warm-up: how far is the point $(2, 3, 6)$ from the origin?
answer: 7
???
$\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.
:::

:::question Today
How do you describe something with both a size and a direction, like a move from one point to another or a force? And how can you find the angle between two of them from their numbers alone, without drawing anything?
:::

:::idea Vectors
A [[vector]] is a size together with a direction. It's drawn as an arrow, but it isn't tied to where the arrow starts: two arrows with the same length and direction are the same vector.

**Component form.** In space a vector is written $\\mathbf v = \\langle a, b, c \\rangle$: it moves you $a$ in $x$, $b$ in $y$, and $c$ in $z$.

**The vector from $P$ to $Q$** is $\\overrightarrow{PQ} = Q - P$, subtracting coordinate by coordinate. **Why:** to get from $P = (x_1, y_1, z_1)$ to $Q = (x_2, y_2, z_2)$ you have to change $x$ by $x_2 - x_1$, and the same for $y$ and $z$. Those changes are the components. Subtracting the other way, $P - Q$, gives the move back from $Q$ to $P$.

**Length (magnitude).** $|\\mathbf v| = \\sqrt{a^2 + b^2 + c^2}$. **Why:** draw $\\mathbf v$ starting at the origin. Its tip is at $(a, b, c)$, so its length is the distance from $(0, 0, 0)$ to $(a, b, c)$, which is this formula.
+++
**The standard unit vectors.** $\\mathbf i = \\langle 1, 0, 0 \\rangle$, $\\mathbf j = \\langle 0, 1, 0 \\rangle$, and $\\mathbf k = \\langle 0, 0, 1 \\rangle$ point along the axes. Any vector can be written with them: $\\langle 2, -1, 3 \\rangle = 2\\mathbf i - \\mathbf j + 3\\mathbf k$. Both notations mean the same thing.

**The zero vector** $\\mathbf 0 = \\langle 0, 0, 0 \\rangle$ has length $0$ and no direction.

**Same vector, different starting points.** From $P = (1, 2, 3)$ to $Q = (3, -1, 9)$ is $\\langle 2, -3, 6 \\rangle$. From $(0, 0, 0)$ to $(2, -3, 6)$ is also $\\langle 2, -3, 6 \\rangle$. Both arrows have the same length, $\\sqrt{4 + 9 + 36} = 7$, which matches $|PQ| = 7$ from last time.
:::

:::check
What is the vector from $P = (4, 0, -1)$ to $Q = (1, 2, 3)$?
- [x] $\\langle -3, 2, 4 \\rangle$
- [ ] $\\langle 3, -2, -4 \\rangle$
  why: That's $P - Q$, the move from $Q$ back to $P$. The vector from $P$ to $Q$ is $Q - P$.
- [ ] $\\langle 5, 2, 2 \\rangle$
  why: That adds the coordinates. A move from $P$ to $Q$ is the difference $Q - P$.
- [ ] $\\langle -3, 2, 2 \\rangle$
  why: The $z$-component is $3 - (-1) = 4$. Subtracting a negative adds.
???
$Q - P = \\langle 1 - 4,\\ 2 - 0,\\ 3 - (-1) \\rangle = \\langle -3, 2, 4 \\rangle$. Check: starting at $P = (4, 0, -1)$ and moving by $\\langle -3, 2, 4 \\rangle$ lands at $(1, 2, 3) = Q$. ✓
:::

:::idea Adding and scaling vectors
**Adding:** $\\langle a_1, b_1, c_1 \\rangle + \\langle a_2, b_2, c_2 \\rangle = \\langle a_1 + a_2,\\ b_1 + b_2,\\ c_1 + c_2 \\rangle$. **Why:** doing the move $\\mathbf u$ and then the move $\\mathbf v$ changes $x$ by $a_1$ and then by $a_2$, for a total of $a_1 + a_2$, and the same for $y$ and $z$. As arrows, put the tail of $\\mathbf v$ at the tip of $\\mathbf u$. The sum goes from the tail of $\\mathbf u$ to the tip of $\\mathbf v$.

**Scaling:** for a number $c$ and $\\mathbf v = \\langle v_1, v_2, v_3 \\rangle$, $c\\mathbf v = \\langle cv_1, cv_2, cv_3 \\rangle$ multiplies every component by $c$. It multiplies the length by $|c|$:
$$|c\\mathbf v| = \\sqrt{c^2v_1^2 + c^2v_2^2 + c^2v_3^2} = \\sqrt{c^2}\\,\\sqrt{v_1^2 + v_2^2 + v_3^2} = |c|\\,|\\mathbf v|.$$
(Note $\\sqrt{c^2} = |c|$, not $c$: scaling by $-2$ still doubles the length.)
If $c > 0$ the direction stays the same, and if $c < 0$ it flips around.

**Unit vectors.** A unit vector has length $1$. To get the unit vector in the direction of $\\mathbf v \\ne \\mathbf 0$, divide by its length:
$$\\mathbf u = \\frac{\\mathbf v}{|\\mathbf v|}.$$
**Why its length is $1$:** that's scaling by $c = \\tfrac{1}{|\\mathbf v|} > 0$, so the direction is unchanged and the length becomes $\\tfrac{1}{|\\mathbf v|} \\cdot |\\mathbf v| = 1$.
+++
**Parallel vectors.** Two nonzero vectors are parallel when one is a number times the other. $\\langle 2, -4, 6 \\rangle = -2\\,\\langle -1, 2, -3 \\rangle$, so they're parallel (pointing opposite ways, since $-2 < 0$). $\\langle 1, 2, 3 \\rangle$ and $\\langle 2, 4, 5 \\rangle$ are not: going from $1$ to $2$ needs the number $2$, but $3 \\cdot 2 = 6 \\ne 5$.

**A unit vector, checked.** $\\mathbf v = \\langle 2, -3, 6 \\rangle$ has length $7$, so $\\mathbf u = \\langle \\tfrac27, -\\tfrac37, \\tfrac67 \\rangle$. Its length squared is $\\tfrac{4 + 9 + 36}{49} = 1$. ✓

**Subtracting.** $\\mathbf u - \\mathbf v = \\mathbf u + (-1)\\mathbf v$. As arrows drawn from the same point, $\\mathbf u - \\mathbf v$ goes from the tip of $\\mathbf v$ to the tip of $\\mathbf u$, because $\\mathbf v + (\\mathbf u - \\mathbf v) = \\mathbf u$. This is the third side of the triangle used in the angle formula below.
:::

:::check
What is the length of $3\\,\\langle 1, -2, 2 \\rangle$?
answer: 9
???
$|\\langle 1, -2, 2 \\rangle| = \\sqrt{1 + 4 + 4} = 3$, and scaling by $3$ multiplies the length by $3$, so the answer is $9$. Directly: $\\langle 3, -6, 6 \\rangle$ has length $\\sqrt{9 + 36 + 36} = \\sqrt{81} = 9$. ✓
:::

:::idea The dot product
The [[dot product]] of two vectors multiplies matching components and adds:
$$\\langle a_1, b_1, c_1 \\rangle \\cdot \\langle a_2, b_2, c_2 \\rangle = a_1a_2 + b_1b_2 + c_1c_2.$$
The answer is a **number**, not a vector.

For example, $\\langle 1, 2, 3 \\rangle \\cdot \\langle 4, -5, 6 \\rangle = 4 - 10 + 18 = 12$.

**Rules it follows, and why.** Each one holds because it holds for each matching pair of components, and the dot product just adds those up:
- $\\mathbf u \\cdot \\mathbf v = \\mathbf v \\cdot \\mathbf u$, because $a_1a_2 = a_2a_1$.
- $\\mathbf u \\cdot (\\mathbf v + \\mathbf w) = \\mathbf u \\cdot \\mathbf v + \\mathbf u \\cdot \\mathbf w$, because $a_1(a_2 + a_3) = a_1a_2 + a_1a_3$.
- $(c\\mathbf u) \\cdot \\mathbf v = c\\,(\\mathbf u \\cdot \\mathbf v)$, because $(ca_1)a_2 = c(a_1a_2)$.
- $\\mathbf v \\cdot \\mathbf v = |\\mathbf v|^2$, because $\\mathbf v \\cdot \\mathbf v = a^2 + b^2 + c^2$, which is the length squared.

The last rule connects the dot product to lengths, and that connection is what leads to angles next.
+++
**Expanding like algebra.** Because of these rules, dot products of sums expand the way products of numbers do. For example,
$$(\\mathbf u - \\mathbf v) \\cdot (\\mathbf u - \\mathbf v) = \\mathbf u \\cdot \\mathbf u - 2\\,\\mathbf u \\cdot \\mathbf v + \\mathbf v \\cdot \\mathbf v,$$
just like $(a - b)^2 = a^2 - 2ab + b^2$. The middle term uses $\\mathbf u \\cdot \\mathbf v = \\mathbf v \\cdot \\mathbf u$ to combine two terms into one.

**What doesn't carry over.** You can't "divide" by a vector, and $\\mathbf u \\cdot \\mathbf v = \\mathbf u \\cdot \\mathbf w$ does **not** mean $\\mathbf v = \\mathbf w$. For example, $\\mathbf i \\cdot \\mathbf j = 0 = \\mathbf i \\cdot \\mathbf k$, but $\\mathbf j \\ne \\mathbf k$.
:::

:::check
What is $\\langle 2, -1, 3 \\rangle \\cdot \\langle 4, 5, -1 \\rangle$?
answer: 0
???
$2 \\cdot 4 + (-1) \\cdot 5 + 3 \\cdot (-1) = 8 - 5 - 3 = 0$. A dot product of $0$ means something special, as the next part shows.
:::

:::idea The angle between two vectors
For nonzero vectors $\\mathbf u$ and $\\mathbf v$ with angle $\\theta$ between them ($0 \\le \\theta \\le \\pi$),
$$\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v| \\cos\\theta, \\qquad\\text{so}\\qquad \\cos\\theta = \\frac{\\mathbf u \\cdot \\mathbf v}{|\\mathbf u|\\,|\\mathbf v|}.$$

**Why, step by step.**

*Step 1: make a triangle.* Draw $\\mathbf u$ and $\\mathbf v$ from the same point. The third side goes from the tip of $\\mathbf v$ to the tip of $\\mathbf u$, which is the vector $\\mathbf u - \\mathbf v$. The angle between the sides $\\mathbf u$ and $\\mathbf v$ is $\\theta$.

*Step 2: the law of cosines* says that for any triangle,
$$|\\mathbf u - \\mathbf v|^2 = |\\mathbf u|^2 + |\\mathbf v|^2 - 2\\,|\\mathbf u|\\,|\\mathbf v| \\cos\\theta.$$

*Step 3: expand the left side with dot products.* Using $\\mathbf w \\cdot \\mathbf w = |\\mathbf w|^2$ and the expansion from Go deeper above,
$$|\\mathbf u - \\mathbf v|^2 = (\\mathbf u - \\mathbf v) \\cdot (\\mathbf u - \\mathbf v) = |\\mathbf u|^2 - 2\\,\\mathbf u \\cdot \\mathbf v + |\\mathbf v|^2.$$

*Step 4: compare.* Both lines equal $|\\mathbf u - \\mathbf v|^2$. Cancel $|\\mathbf u|^2 + |\\mathbf v|^2$ from both, then divide by $-2$:
$$\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v| \\cos\\theta.$$

**What the sign tells you.** $|\\mathbf u|\\,|\\mathbf v|$ is positive, so $\\mathbf u \\cdot \\mathbf v$ has the same sign as $\\cos\\theta$:
- $\\mathbf u \\cdot \\mathbf v > 0$: $\\theta < \\tfrac\\pi2$, an **acute** angle.
- $\\mathbf u \\cdot \\mathbf v = 0$: $\\theta = \\tfrac\\pi2$, the vectors are perpendicular, also called [[orthogonal]].
- $\\mathbf u \\cdot \\mathbf v < 0$: $\\theta > \\tfrac\\pi2$, an **obtuse** angle.
+++
**A number check of Step 3.** Take $\\mathbf u = \\langle 1, 2, 2 \\rangle$ and $\\mathbf v = \\langle 2, 0, 1 \\rangle$. Then $\\mathbf u - \\mathbf v = \\langle -1, 2, 1 \\rangle$, so $|\\mathbf u - \\mathbf v|^2 = 1 + 4 + 1 = 6$. The right side: $|\\mathbf u|^2 + |\\mathbf v|^2 - 2\\,\\mathbf u \\cdot \\mathbf v = 9 + 5 - 2(2 + 0 + 2) = 14 - 8 = 6$. ✓

**A check you can see.** $\\mathbf u = \\langle 1, 1, 0 \\rangle$ is the diagonal of a square in the $xy$-plane, and $\\mathbf v = \\langle 1, 0, 0 \\rangle$ is its bottom edge, so the angle should be $45^\\circ$. The formula gives $\\cos\\theta = \\tfrac{1}{\\sqrt2 \\cdot 1} = \\tfrac{1}{\\sqrt2}$, and $\\theta = \\tfrac\\pi4 = 45^\\circ$. ✓

**Why $\\theta$ is between $0$ and $\\pi$.** Two arrows from the same point make two angles that add to $2\\pi$. The formula always gives the smaller one, between $0$ and $\\pi$, because that's the range of $\\arccos$.
:::

:::theorem Dot product and angle
For nonzero vectors $\\mathbf u$ and $\\mathbf v$ at angle $\\theta$:
- $\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta$.
- $\\mathbf u$ and $\\mathbf v$ are orthogonal exactly when $\\mathbf u \\cdot \\mathbf v = 0$.

**Why:** the law of cosines on the triangle with sides $\\mathbf u$, $\\mathbf v$, and $\\mathbf u - \\mathbf v$, with $|\\mathbf u - \\mathbf v|^2$ expanded as a dot product, leaves exactly $\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta$. Since $|\\mathbf u|\\,|\\mathbf v| \\ne 0$, the dot product is $0$ exactly when $\\cos\\theta = 0$, which is when $\\theta = \\tfrac\\pi2$.
:::

:::example The angle in the equilateral triangle
Last time, $A = (1, 0, 0)$, $B = (0, 1, 0)$, and $C = (0, 0, 1)$ made a triangle with all sides $\\sqrt2$, so every angle should be $60^\\circ$. Check the angle at $A$.

The sides from $A$ are $\\overrightarrow{AB} = B - A = \\langle -1, 1, 0 \\rangle$ and $\\overrightarrow{AC} = C - A = \\langle -1, 0, 1 \\rangle$.

$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1 + 0 + 0 = 1$, and both lengths are $\\sqrt2$.

$$\\cos\\theta = \\frac{1}{\\sqrt2 \\cdot \\sqrt2} = \\frac12, \\qquad \\theta = \\frac\\pi3 = 60^\\circ. \\checkmark$$

**Use the vectors that start at the corner.** Using $\\overrightarrow{BA}$ instead of $\\overrightarrow{AB}$ flips one vector, which flips the sign of the dot product and gives the outside angle $120^\\circ$.
:::

:::check
Is the angle between $\\mathbf u = \\langle 2, 1, -2 \\rangle$ and $\\mathbf v = \\langle 1, 1, 4 \\rangle$ acute, right, or obtuse?
- [ ] acute
  why: Acute needs a positive dot product, but $\\mathbf u \\cdot \\mathbf v = 2 + 1 - 8 = -5$.
- [ ] right
  why: Right needs $\\mathbf u \\cdot \\mathbf v = 0$, and here it's $-5$.
- [x] obtuse
???
$\\mathbf u \\cdot \\mathbf v = 2 + 1 - 8 = -5 < 0$, so $\\cos\\theta < 0$ and the angle is **obtuse**. You don't need the lengths to answer this, only the sign.
:::

:::check
What is $\\cos\\theta$ for the angle between $\\langle 1, 2, 2 \\rangle$ and $\\langle 2, 2, 1 \\rangle$?
answer: 8/9
???
The dot product is $2 + 4 + 2 = 8$, and each vector has length $\\sqrt{1 + 4 + 4} = 3$. So $\\cos\\theta = \\tfrac{8}{3 \\cdot 3} = \\tfrac89$, an acute angle of about $27^\\circ$.
:::

:::summary Summary
1. A vector $\\langle a, b, c \\rangle$ is a move: $a$ in $x$, $b$ in $y$, $c$ in $z$. From $P$ to $Q$ it's $Q - P$.
2. Length $|\\mathbf v| = \\sqrt{a^2 + b^2 + c^2}$. Scaling by $c$ multiplies length by $|c|$. Unit vector: $\\mathbf v / |\\mathbf v|$.
3. Dot product: multiply matching components and add. $\\mathbf v \\cdot \\mathbf v = |\\mathbf v|^2$.
4. $\\mathbf u \\cdot \\mathbf v = |\\mathbf u|\\,|\\mathbf v|\\cos\\theta$, from the law of cosines. Its sign tells acute, right ($= 0$, orthogonal), or obtuse.

**Common mistakes:**
- Computing $P - Q$ when you want the vector from $P$ to $Q$.
- Thinking the dot product is a vector. It's a number.
- Forgetting to divide by both lengths when finding $\\cos\\theta$.
- Measuring an angle of a triangle with one vector pointing into the corner instead of out of it.
:::
`;export{e as default};