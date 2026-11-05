var e=`---
title: Introduction
date: 2026-08-24
stewart: 12.1
source: OpenStax Calculus Volume 3, §2.2 Vectors in Three Dimensions
---

:::recap Where you're starting
In Calc I and II every point was a pair $(x, y)$ in the plane, and the distance between two points came from the Pythagorean theorem. Calc III adds one more coordinate, $z$, so everything happens in space.
:::

:::check
Warm-up: what is the distance between $(1, 2)$ and $(4, 6)$ in the plane?
answer: 5
???
The points differ by $3$ in $x$ and $4$ in $y$, so the distance is $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.
:::

:::question Today
How do you name a point in space, measure the distance between two points, and tell what shape an equation like $z = 3$ or $x^2 + y^2 + z^2 = 9$ describes?
:::

:::idea Three axes
Space gets three number lines that meet at the **origin** $(0, 0, 0)$, each perpendicular to the other two: the $x$-axis, the $y$-axis, and the $z$-axis.

**Naming a point.** The point $(a, b, c)$ is where you end up if you start at the origin, move $a$ along the $x$-axis, then $b$ in the $y$-direction, then $c$ in the $z$-direction. Moving in one direction doesn't change the other two coordinates, because the axes are perpendicular. That's why three numbers are enough, and why the order you move in doesn't matter.

**Right-handed axes.** The axes are always drawn so that if you curl the fingers of your right hand from the positive $x$-axis toward the positive $y$-axis, your thumb points along the positive $z$-axis. Swapping two axes gives the mirror image, which is a different coordinate system, so everyone agrees on this one.

**Coordinate planes.** Each pair of axes spans a plane:
- the $xy$-plane is every point with $z = 0$,
- the $yz$-plane is every point with $x = 0$,
- the $xz$-plane is every point with $y = 0$.

The three planes cut space into eight [[octant|octants]], one for each choice of sign of $x$, $y$, and $z$ ($2 \\cdot 2 \\cdot 2 = 8$). The **first octant** is the one where all three coordinates are positive.
+++
**Dropping a point to a plane.** The point directly below (or above) $(a, b, c)$ in the $xy$-plane is $(a, b, 0)$: you keep $x$ and $y$ and set $z = 0$. Its height above that plane is $|c|$. In the same way, $(0, b, c)$ is in the $yz$-plane, at distance $|a|$ from $(a, b, c)$.

**Why the right-hand rule will matter.** On Aug 31 the cross product gives a vector perpendicular to two others, and there are two opposite choices. The right-hand rule is how the formula picks one, so a left-handed drawing would give answers with the wrong sign.
:::

:::check
Which point lies in the $xz$-plane?
- [x] $(3, 0, -2)$
- [ ] $(0, 3, -2)$
  why: Its $x$-coordinate is $0$, so it's in the $yz$-plane. The $xz$-plane needs $y = 0$, and here $y = 3$.
- [ ] $(3, -2, 0)$
  why: Its $z$-coordinate is $0$, so it's in the $xy$-plane. Here $y = -2 \\ne 0$.
- [ ] $(3, 1, 2)$
  why: No coordinate is $0$, so it's in none of the coordinate planes.
???
The $xz$-plane is every point with $y = 0$. Only $(3, 0, -2)$ has $y = 0$.
:::

:::idea An equation describes a set of points
An equation in $x$, $y$, and $z$ describes **every point whose coordinates make it true**. To picture it, ask which coordinates are fixed and which are free.

**$z = 3$ is a plane, not a line.** In the plane, $y = 3$ is a line, because only $x$ is free. In space, $z = 3$ says nothing about $x$ or $y$, so both are free: $(0, 0, 3)$, $(5, -2, 3)$, and $(100, 7, 3)$ all satisfy it. Every point at height $3$ is included, which is a horizontal plane parallel to the $xy$-plane.

**Same equation, new shape.** An equation that doesn't mention $z$ allows every $z$. So in space:
- $y = x$ is the line $y = x$ in the $xy$-plane, copied at every height: a vertical plane through the $z$-axis.
- $x^2 + y^2 = 1$ is the unit circle copied at every height: a **cylinder** around the $z$-axis.

**Two equations at once** usually cut a surface down to a curve. $z = 3$ and $y = 1$ together leave only $x$ free: the line through $(0, 1, 3)$ parallel to the $x$-axis.
+++
**Counting free coordinates.** Each independent equation usually removes one free coordinate. (There are exceptions: $x^2 + y^2 + z^2 = 0$ is one equation but only the point $(0, 0, 0)$.) Three coordinates minus one equation leaves two free: a surface. Minus two equations leaves one: a curve. Three equations, like $x = 1$, $y = 2$, $z = 3$, leave none: a single point.

**"Independent" matters.** $z = 3$ and $2z = 6$ are the same condition, so together they still describe a plane, not a line.

**Example.** $x = 1$ and $y = 2$ leave only $z$ free: every point $(1, 2, z)$. That's the vertical line through $(1, 2, 0)$.
:::

:::check
In space, what does the equation $y = 2$ describe?
- [x] a plane parallel to the $xz$-plane
- [ ] a line
  why: In space, $x$ and $z$ are both free, so it's a whole plane. It's only a line in the $xy$-plane.
- [ ] a plane parallel to the $xy$-plane
  why: Planes parallel to the $xy$-plane are "$z =$ constant". Here $y$ is the fixed coordinate.
- [ ] a single point
  why: A point needs all three coordinates fixed. Here only $y$ is.
???
$y = 2$ fixes $y$ and leaves $x$ and $z$ free, so it's the plane of all points $(x, 2, z)$. The $xz$-plane is $y = 0$, so this is that plane moved over by $2$.
:::

:::idea Distance in space
The distance between $P = (x_1, y_1, z_1)$ and $Q = (x_2, y_2, z_2)$ is
$$|PQ| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}.$$

**Why: the Pythagorean theorem, used twice.** Go from $P$ to $Q$ in two moves through the corner $R = (x_2, y_2, z_1)$.

*Move 1, from $P$ to $R$.* Both points have the same height $z_1$, so this move stays in one horizontal plane, and the 2D distance formula applies:
$$|PR|^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2.$$

*Move 2, from $R$ to $Q$.* Only $z$ changes, so this move is straight up or down, with length $|z_2 - z_1|$.

*Put them together.* Move 1 is horizontal and Move 2 is vertical, so they meet at a right angle at $R$. $PRQ$ is a right triangle with hypotenuse $PQ$:
$$|PQ|^2 = |PR|^2 + |RQ|^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2.$$
Taking the square root gives the formula.
+++
**The midpoint** of $PQ$ is $M = \\left(\\tfrac{x_1 + x_2}{2},\\ \\tfrac{y_1 + y_2}{2},\\ \\tfrac{z_1 + z_2}{2}\\right)$. **Why:** each coordinate of $M$ is halfway between the coordinates of $P$ and $Q$, so every difference from $P$ to $M$ is half the difference from $P$ to $Q$. Halving all three differences halves the square root, so $|PM| = \\tfrac12 |PQ|$, and the same holds for $|MQ|$.

**A number check.** For $P = (1, 2, 3)$ and $Q = (3, -1, 9)$, the differences are $2$, $-3$, and $6$, so $|PQ| = \\sqrt{4 + 9 + 36} = 7$. The midpoint is $M = (2, \\tfrac12, 6)$, and $|PM| = \\sqrt{1 + \\tfrac94 + 9} = \\sqrt{12.25} = 3.5$, which is half of $7$. ✓

**The order doesn't matter.** $(x_1 - x_2)^2 = (x_2 - x_1)^2$, so the distance from $Q$ to $P$ is the same as from $P$ to $Q$.
:::

:::example Is this triangle equilateral?
Take $A = (1, 0, 0)$, $B = (0, 1, 0)$, and $C = (0, 0, 1)$, one point on each axis.

$|AB| = \\sqrt{(0-1)^2 + (1-0)^2 + 0^2} = \\sqrt2$.

$|BC| = \\sqrt{0^2 + (0-1)^2 + (1-0)^2} = \\sqrt2$.

$|AC| = \\sqrt{(0-1)^2 + 0^2 + (1-0)^2} = \\sqrt2$.

All three sides are $\\sqrt2$, so the triangle is **equilateral**. (On Aug 26, the dot product will confirm each angle is $60^\\circ$.)
:::

:::check
What is the distance between $(2, -1, 4)$ and $(5, 3, 4)$?
answer: 5
???
The differences are $3$, $4$, and $0$, so the distance is $\\sqrt{9 + 16 + 0} = 5$. Both points are at height $4$, so this is really a 2D problem in the plane $z = 4$.
:::

:::idea Spheres
The [[sphere]] with center $(h, k, l)$ and radius $r$ is every point at distance $r$ from the center. Squaring the distance formula gives its equation:
$$(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2.$$
**Why squaring is safe:** both sides of "distance $= r$" are $\\ge 0$, and for numbers $\\ge 0$, $a = b$ exactly when $a^2 = b^2$. So squaring neither adds nor loses points.

**Finding the center and radius by completing the square.** An expanded equation like $x^2 + y^2 + z^2 - 4x + 6y - 2z = 2$ hides the center. Rewrite each variable's terms as a perfect square:
$$x^2 - 4x = (x - 2)^2 - 4,$$
because $(x - 2)^2 = x^2 - 4x + 4$ has an extra $4$ that has to be taken back off. In general, $x^2 + bx = \\left(x + \\tfrac b2\\right)^2 - \\tfrac{b^2}{4}$.

**What the right side can tell you.** After completing the square you get $(x - h)^2 + (y - k)^2 + (z - l)^2 = N$:
- $N > 0$: a sphere of radius $\\sqrt N$.
- $N = 0$: only the point $(h, k, l)$, since a sum of squares is $0$ only when each square is $0$.
- $N < 0$: no points at all, since a sum of squares can't be negative.
+++
**Where a sphere meets a coordinate plane.** Set that coordinate to $0$. For the sphere $(x - 2)^2 + (y + 3)^2 + (z - 1)^2 = 16$ from the example below, $z = 0$ gives
$$(x - 2)^2 + (y + 3)^2 = 16 - 1 = 15,$$
a circle of radius $\\sqrt{15}$ in the $xy$-plane. **Why it's a circle:** the center is at height $1$, so it's distance $1$ from the plane, and each point where the sphere meets the plane makes a right triangle with legs $1$ and the circle's radius, and hypotenuse $4$. So the circle's radius is $\\sqrt{4^2 - 1^2} = \\sqrt{15}$. If the center were farther from the plane than the radius, they wouldn't meet.
:::

:::example Completing the square
Find the center and radius of $x^2 + y^2 + z^2 - 4x + 6y - 2z = 2$.

Complete the square in each variable:
$$x^2 - 4x = (x - 2)^2 - 4, \\qquad y^2 + 6y = (y + 3)^2 - 9, \\qquad z^2 - 2z = (z - 1)^2 - 1.$$

Substitute:
$$(x - 2)^2 - 4 + (y + 3)^2 - 9 + (z - 1)^2 - 1 = 2,$$
so $(x - 2)^2 + (y + 3)^2 + (z - 1)^2 = 16$.

**Center** $(2, -3, 1)$ and **radius** $4$. Note the signs: $(y + 3)^2$ means $k = -3$.

**Check.** The point $(6, -3, 1)$ is $4$ units from the center in the $x$-direction, so it should be on the sphere: $36 + 9 + 1 - 24 - 18 - 2 = 2$. ✓
:::

:::check
What is the radius of the sphere $x^2 + y^2 + z^2 + 2x - 8z = 8$?
answer: 5
???
$x^2 + 2x = (x + 1)^2 - 1$ and $z^2 - 8z = (z - 4)^2 - 16$, so
$$(x + 1)^2 + y^2 + (z - 4)^2 = 8 + 1 + 16 = 25.$$
The radius is $\\sqrt{25} = 5$, with center $(-1, 0, 4)$.
:::

:::idea Regions from inequalities
Inequalities describe solid regions instead of surfaces, using the same rule: every point whose coordinates make them true.

- $z \\ge 0$: every point on or above the $xy$-plane (the upper half of space).
- $x^2 + y^2 + z^2 \\le 9$: every point at distance at most $3$ from the origin, the **solid ball** of radius $3$. **Why:** $x^2 + y^2 + z^2$ is the squared distance to the origin, so "$\\le 9$" means "distance $\\le 3$".
- $1 \\le x^2 + y^2 + z^2 \\le 4$: distance between $1$ and $2$ from the origin, a hollow **shell** between two spheres.
- $x^2 + y^2 \\le 4$ with $0 \\le z \\le 5$: within distance $2$ of the $z$-axis and between heights $0$ and $5$, a **solid cylinder** (a can).

When several conditions are listed, a point must satisfy **all** of them.
+++
**Distance to an axis.** $x^2 + y^2$ is the squared distance from $(x, y, z)$ to the $z$-axis, because the closest point on the $z$-axis is $(0, 0, z)$, at the same height, and the distance to it is $\\sqrt{x^2 + y^2 + 0^2}$. That's why $x^2 + y^2 \\le 4$ is a solid cylinder and not a ball: it limits the distance to an axis, not to a point.

**Strict or not.** $x^2 + y^2 + z^2 < 9$ is the ball **without** its surface, and $\\le 9$ includes it. On a picture, the difference is whether the boundary sphere belongs to the region.
:::

:::check
Which describes the solid upper half of the ball of radius $3$ centered at the origin?
- [x] $x^2 + y^2 + z^2 \\le 9$ and $z \\ge 0$
- [ ] $x^2 + y^2 \\le 9$ and $z \\ge 0$
  why: That limits only the distance to the $z$-axis, so $z$ can be as large as you like: it's a solid cylinder going up forever.
- [ ] $x^2 + y^2 + z^2 \\le 3$ and $z \\ge 0$
  why: The right side is the radius squared. $\\le 3$ gives radius $\\sqrt3$, not $3$.
- [ ] $x^2 + y^2 + z^2 = 9$ and $z \\ge 0$
  why: The equals sign gives only the surface: the upper half of the sphere, not the solid inside it.
???
"Within distance $3$ of the origin" is $x^2 + y^2 + z^2 \\le 9$, and "upper half" adds $z \\ge 0$.
:::

:::summary Summary
1. A point in space is $(x, y, z)$, on right-handed axes. Coordinate planes are $z = 0$, $x = 0$, and $y = 0$.
2. An equation describes every point that satisfies it. A coordinate the equation doesn't mention is free, so $z = 3$ is a plane and $x^2 + y^2 = 1$ is a cylinder.
3. Distance: $\\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$, from the Pythagorean theorem used twice.
4. Sphere: $(x - h)^2 + (y - k)^2 + (z - l)^2 = r^2$. Complete the square to find the center and radius.
5. Inequalities describe solids: balls, shells, cylinders, half-spaces.

**Common mistakes:**
- Calling $z = 3$ a line. In space it's a plane.
- Getting the center's sign wrong: $(y + 3)^2$ means $k = -3$.
- Reading $r^2$ as the radius: $= 16$ means radius $4$.
- Forgetting to add the completed-square constants to the right side too.
:::
`;export{e as default};