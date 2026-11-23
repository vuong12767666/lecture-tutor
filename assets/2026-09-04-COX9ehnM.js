var e=`---
title: Level sets in 3D, quadric surfaces, intro to limits
date: 2026-09-04
stewart: 14.1, 12.6, 14.2
source: OpenStax Calculus Volume 3, §4.1 Functions of Several Variables, §2.6 Quadric Surfaces, and §4.2 Limits and Continuity
---

:::recap Last time
- A function $f(x, y)$ has a domain (the inputs it can use) and a range (its outputs).
- Its graph $z = f(x, y)$ is a surface, and slicing it at a fixed $x$, $y$, or $z$ shows its shape.
- A [[level curve]] is $f(x, y) = c$; a contour map draws several of them.
:::

:::check
Warm-up: what is the slice of $z = x^2 + y^2$ by the plane $y = 0$?
- [x] The parabola $z = x^2$
- [ ] A circle
  why: Circles come from fixing $z$. Fixing $y = 0$ leaves $z = x^2 + 0$, a parabola.
- [ ] The line $z = x$
  why: Putting $y = 0$ gives $z = x^2$, which curves; it isn't a line.
???
Put $y = 0$ into the equation: $z = x^2 + 0^2 = x^2$, a parabola opening up.
:::

:::question Today
What does a function of three variables look like when you can't draw its graph? How do you recognize the common curved surfaces from their equations? And what does a limit mean when you can approach a point from every direction?
:::

:::idea Level surfaces
A function of three variables $f(x, y, z)$ takes a point in space and gives a number. Its graph would need four dimensions, so instead you look at its **level surfaces**: every point where $f(x, y, z) = c$, for one number $c$. They play the role that level curves play for $f(x, y)$.
>>> Level surfaces, worked out
**$f = x^2 + y^2 + z^2$.** This is the squared distance to the origin.
- $c = 4$: $x^2 + y^2 + z^2 = 4$, the sphere of radius $2$. For example, $(0, 0, 2)$ and $(1, 1, \\sqrt2)$ are on it.
- $c = 9$: the sphere of radius $3$.
- $c = 0$: only the point $(0, 0, 0)$. $c = -1$: no points, since squares add to at least $0$.

So the level surfaces are spheres, one inside the next.

**$f = x^2 + y^2 - z$.** Level $c$ means $z = x^2 + y^2 - c$: the paraboloid $z = x^2 + y^2$, moved down by $c$. For example, the level $c = 1$ passes through $(0, 0, -1)$, since $0 + 0 - (-1) = 1$.
<<<
:::

:::check
What is the level surface $x + 2y + 3z = 6$ of $f = x + 2y + 3z$?
- [x] A plane with normal $\\langle 1, 2, 3 \\rangle$
- [ ] A sphere
  why: A sphere needs squared terms. This equation has none.
- [ ] A line
  why: One equation in three variables leaves two free, so it's a surface (Aug 24). It's the plane with normal $\\langle 1, 2, 3 \\rangle$ (Aug 28).
???
An equation $ax + by + cz = d$ is a plane with normal $\\langle a, b, c \\rangle$ (Aug 28). Every level surface of $f$ is a plane with that same normal: they're parallel.
:::

:::idea Quadric surfaces
A [[quadric surface]] is the graph of an equation with $x^2$, $y^2$, $z^2$ (and possibly plain $x$, $y$, $z$). There are six main kinds. Read each from its slices, and from three features of its equation: **which variables are squared**, **the signs**, and **what it equals**.

- **Ellipsoid**, for example $x^2 + y^2 + \\tfrac{z^2}{4} = 1$: every slice is an ellipse or circle, and the surface is closed and bounded.
- **Elliptic paraboloid**, for example $z = x^2 + y^2$: circles or ellipses in the horizontal slices, parabolas in the vertical ones.
- **Hyperbolic paraboloid**, for example $z = y^2 - x^2$: hyperbolas in the horizontal slices, and vertical slices that are parabolas opening in opposite directions.
- **Cone**, for example $z^2 = x^2 + y^2$: circles in the horizontal slices, shrinking to a single point at $z = 0$.
- **Hyperboloid of one sheet**, for example $x^2 + y^2 - z^2 = 1$: a circle at every height, one connected piece.
- **Hyperboloid of two sheets**, for example $z^2 - x^2 - y^2 = 1$: no points at all for $-1 < z < 1$, so two separate pieces.

**The quick test.** One variable not squared: a paraboloid (same signs on the squares: elliptic; opposite signs: hyperbolic). All three squared and $= 0$: a cone. All three squared and $= 1$: count the minus signs. None is an ellipsoid, one is a hyperboloid of one sheet, two is a hyperboloid of two sheets. The variable that's different (not squared, or with the odd sign) is the axis.
>>> Why the slices give these shapes
**Ellipsoid $x^2 + y^2 + \\tfrac{z^2}{4} = 1$.** At height $z = 1$: $x^2 + y^2 = \\tfrac34$, a circle. At $z = 2$: just the point $(0, 0, 2)$. At $z = 3$: $x^2 + y^2 = -\\tfrac54$, nothing. So it stops at $z = \\pm 2$: bounded.

**Hyperbolic paraboloid $z = y^2 - x^2$.** The slice $x = 0$ is $z = y^2$, opening up. The slice $y = 0$ is $z = -x^2$, opening down. At the origin it goes up in one direction and down in the other: a saddle.

**Cone $z^2 = x^2 + y^2$.** At $z = 2$: a circle of radius $2$. At $z = 0$: only $(0, 0, 0)$. The radius grows exactly as fast as the height, so the sides are straight.

**One sheet vs two.** For $x^2 + y^2 - z^2 = 1$, the slice at height $z$ is $x^2 + y^2 = 1 + z^2$, which is at least $1$: a circle at every height, one connected piece. For $z^2 - x^2 - y^2 = 1$, the slice is $x^2 + y^2 = z^2 - 1$. At $z = 0.5$ that's $-0.75$: no points. Nothing exists between $z = -1$ and $z = 1$, so there are two separate pieces.
<<<
:::

:::check
What is the surface $x^2 + 4y^2 + z^2 = 4$?
- [x] An ellipsoid
- [ ] A hyperboloid of one sheet
  why: That needs one minus sign. Here all three squares are added.
- [ ] An elliptic paraboloid
  why: A paraboloid has one variable not squared. Here all three are squared.
- [ ] A cone
  why: A cone's equation equals $0$ when everything is on one side, like $x^2 + y^2 - z^2 = 0$. Here the squares add to $4$.
???
All three variables squared, all added, equal to a positive number: an ellipsoid. Dividing by $4$: $\\tfrac{x^2}{4} + y^2 + \\tfrac{z^2}{4} = 1$, reaching $x = \\pm 2$, $y = \\pm 1$, $z = \\pm 2$.
:::

:::example A hyperboloid around a different axis
Identify $x^2 - y^2 + z^2 = 1$.

All three are squared, it equals $1$, and there's one minus sign, on $y$. So it's a **hyperboloid of one sheet**, with the $y$-axis as its axis.

**Slices.** Fix $y = c$: $x^2 + z^2 = 1 + c^2$, a circle of radius $\\sqrt{1 + c^2}$ around the $y$-axis. There's a circle for every $y$, smallest ($1$) at $y = 0$.
>>> Each step, with slices
1. **Count the features.** Squared: $x$, $y$, $z$. Equals: $1$. Minus signs: one. That's a hyperboloid of one sheet.
2. **Find the axis.** The odd one out is $y$, the variable with the minus sign. So the circles lie in slices with $y$ fixed, stacked along the $y$-axis.
3. **Slices with numbers.** At $y = 0$: $x^2 + z^2 = 1$, radius $1$. At $y = 2$: $x^2 + z^2 = 5$, radius $\\sqrt5 \\approx 2.24$. At $y = -2$: the same. So it narrows to radius $1$ in the middle and widens both ways.
4. **A slice the other way.** Fix $z = 0$: $x^2 - y^2 = 1$, a hyperbola. That's where the name comes from.
<<<
:::

:::check
How many separate pieces does the surface $x^2 - y^2 - z^2 = 1$ have?
answer: 2
???
Two minus signs, equal to $1$: a hyperboloid of two sheets along the $x$-axis. Slicing at $x = c$ gives $y^2 + z^2 = c^2 - 1$, which has no points when $-1 < c < 1$. So nothing exists between $x = -1$ and $x = 1$, and the surface has two pieces.
:::

:::example Completing the square first
Identify $4x^2 + y^2 + z^2 - 8x = 0$.

**Group and complete the square in $x$.** $4x^2 - 8x = 4(x^2 - 2x) = 4\\big((x - 1)^2 - 1\\big) = 4(x - 1)^2 - 4$. So the equation is $4(x - 1)^2 - 4 + y^2 + z^2 = 0$, or
$$4(x - 1)^2 + y^2 + z^2 = 4.$$

**Read it.** All squared, all added, equal to $4$: an **ellipsoid**, centered at $(1, 0, 0)$.
>>> Each step, and the shape's size
1. **Factor out the $4$ first.** $4x^2 - 8x = 4(x^2 - 2x)$, so the square can be completed inside the parentheses.
2. **Complete the square.** Half of $-2$ is $-1$, and $(x - 1)^2 = x^2 - 2x + 1$. So $x^2 - 2x = (x - 1)^2 - 1$, and $4(x^2 - 2x) = 4(x - 1)^2 - 4$.
3. **Move the $-4$.** $4(x - 1)^2 + y^2 + z^2 = 4$.
4. **Divide by $4$.** $(x - 1)^2 + \\tfrac{y^2}{4} + \\tfrac{z^2}{4} = 1$. So it reaches $1$ unit from the center in $x$ (from $x = 0$ to $x = 2$) and $2$ units in $y$ and $z$.
5. **Check a point.** $(2, 0, 0)$ in the original: $16 + 0 + 0 - 16 = 0$ ✓. And $(1, 2, 0)$: $4 + 4 + 0 - 8 = 0$ ✓.
<<<
:::

:::check
Which surface is $y = x^2 + z^2$?
- [x] An elliptic paraboloid opening along the positive $y$-axis
- [ ] An elliptic paraboloid opening up the $z$-axis
  why: The variable that isn't squared is $y$, so the paraboloid opens along the $y$-axis. Slices with $y$ fixed are circles $x^2 + z^2 = y$.
- [ ] A cone
  why: A cone squares all three variables. Here $y$ isn't squared.
- [ ] A hyperbolic paraboloid
  why: That needs opposite signs on the two squares. Here $x^2$ and $z^2$ are both added.
???
One variable ($y$) not squared, and the other two squares have the same sign: an elliptic paraboloid with the $y$-axis as its axis. $y$ can't be negative, so it opens toward positive $y$.
:::

:::idea A first look at limits
$\\lim_{(x,y) \\to (a,b)} f(x, y) = L$ means $f(x, y)$ gets as close to $L$ as you like for every point $(x, y)$ close enough to $(a, b)$, not counting $(a, b)$ itself. In the plane, points can approach $(a, b)$ from every direction, along any path, and they all have to lead to the same $L$.

**When you can plug in.** For formulas built from polynomials, roots, $e^x$, $\\sin$, and so on, the limit is the value $f(a, b)$, as long as $f(a, b)$ makes sense (no dividing by $0$). Such functions are **continuous** there.

**Showing a limit doesn't exist.** Find two paths into $(a, b)$ that lead to different values. Then no single $L$ works.
>>> Two paths, with numbers, for $\\dfrac{xy}{x^2 + y^2}$ at $(0, 0)$
Plugging in gives $\\tfrac00$, which isn't a number, so try paths.
1. **Along the $x$-axis** ($y = 0$): $f = \\tfrac{0}{x^2} = 0$ for every $x \\ne 0$. For example, $f(0.01, 0) = 0$.
2. **Along the line $y = x$:** $f = \\tfrac{x \\cdot x}{x^2 + x^2} = \\tfrac{x^2}{2x^2} = \\tfrac12$ for every $x \\ne 0$. For example, $f(0.01, 0.01) = \\tfrac{0.0001}{0.0002} = 0.5$.
3. **So no limit.** Points as close as $(0.001, 0)$ and $(0.001, 0.001)$ give $0$ and $0.5$. However close you get to the origin, there are points with value $0$ and points with value $0.5$, so $f$ doesn't settle on one number.

**When you can plug in, with numbers.** $\\lim_{(x,y) \\to (3,1)} \\frac{x^2 - y}{x + 2y} = \\frac{9 - 1}{3 + 2} = \\frac85$. The denominator is $5$, not $0$, so plugging in is allowed. Nearby, $f(3.01, 1) \\approx 1.609$, close to $1.6$.
<<<

The full story, including how to prove a limit *does* exist when plugging in gives $\\tfrac00$, is on Sep 9.
:::

:::check
Find $\\displaystyle\\lim_{(x,y) \\to (1,2)} \\frac{3x - y^2}{x + 1}$.
answer: -1/2
???
The denominator at $(1, 2)$ is $2$, not $0$, so plug in: $\\dfrac{3 - 4}{1 + 1} = -\\dfrac12$.
:::

:::check
Does $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{2xy}{x^2 + y^2}$ exist?
- [ ] Yes, it's $0$
  why: Along the $x$-axis it's $0$, but along $y = x$ it's $\\tfrac{2x^2}{2x^2} = 1$. Different paths, different values.
- [ ] Yes, it's $1$
  why: Along $y = x$ it's $1$, but along the $x$-axis it's $0$.
- [x] No
???
Along the $x$-axis ($y = 0$) the function is $0$. Along $y = x$ it's $\\tfrac{2x^2}{2x^2} = 1$. Two paths into the origin give two different values, so the limit doesn't exist.
:::

:::summary Summary
- $f(x, y, z)$ is pictured by its level surfaces $f = c$.
- Quadric surfaces: one variable not squared means a paraboloid (elliptic or hyperbolic by the signs); all squared and $= 0$, a cone; all squared and $= 1$, count minus signs (none: ellipsoid, one: one sheet, two: two sheets). The odd variable is the axis. Complete the square first if there are plain $x$, $y$, $z$ terms.
- A limit at $(a, b)$ has to be the same along every path. Continuous formulas: plug in. Two paths with different values: the limit doesn't exist.

**Common mistakes:**
- Calling $z^2 = x^2 + y^2$ a hyperboloid. Equal to $0$ means a cone.
- Assuming a paraboloid opens up the $z$-axis when a different variable is the one not squared.
- Concluding a limit exists because two paths agree. Agreement on two paths proves nothing (Sep 9).
:::
`;export{e as default};