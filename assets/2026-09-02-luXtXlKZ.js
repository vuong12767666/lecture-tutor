var e=`---
title: Functions of several variables
date: 2026-09-02
stewart: 14.1
source: OpenStax Calculus Volume 3, §4.1 Functions of Several Variables
---

:::recap Last time
That finished vectors, lines, and planes. Now the course turns to **functions with more than one input**. On Aug 24, an equation in $x$, $y$, $z$ described a set of points in space. A function $z = f(x, y)$ is one of those equations, and its set of points is a surface.
:::

:::check
Warm-up: for $f(x, y) = x^2 + 3y$, what is $f(2, 1)$?
answer: 7
???
Put $x = 2$ and $y = 1$ into the formula: $2^2 + 3 \\cdot 1 = 4 + 3 = 7$.
:::

:::question Today
What does a function of two variables take in and give out? And how can you picture one without a 3D drawing?
:::

:::idea Domain and range
A **function of two variables** $f(x, y)$ takes a pair of numbers $(x, y)$ and gives back one number.
- Its **domain** is every input $(x, y)$ the formula can use: a region of the $xy$-plane.
- Its **range** is every output it can produce: a set of numbers.

**Finding the domain.** Unless you're told otherwise, the domain is every point where the formula makes sense. The usual limits are: a square root needs a number $\\ge 0$ inside, a logarithm needs a number $> 0$ inside, and a fraction can't divide by $0$.
>>> Testing points against a domain
**$f = \\ln(x - y)$** needs $x - y > 0$, so the domain is every point with $x > y$.
- $(3, 1)$: $3 - 1 = 2 > 0$, so it's in the domain, and $f(3, 1) = \\ln 2 \\approx 0.693$.
- $(1, 3)$: $1 - 3 = -2$, and $\\ln(-2)$ doesn't exist. Not in the domain.
- $(2, 2)$: $\\ln 0$ doesn't exist either. The line $y = x$ itself is left out.

The domain is the half of the plane below the line $y = x$.

**$g = \\sqrt{y - x^2}$** needs $y - x^2 \\ge 0$, so $y \\ge x^2$: on or above the parabola $y = x^2$.
- $(1, 2)$: $2 - 1 = 1 \\ge 0$ ✓, and $g(1, 2) = 1$.
- $(2, 1)$: $1 - 4 = -3$, no square root. Not in the domain.
- $(1, 1)$: $1 - 1 = 0$, and $\\sqrt0 = 0$ is fine. The parabola itself is included.
<<<
:::

:::check
What is the domain of $f(x, y) = \\dfrac{1}{x - y}$?
- [x] Every point except those on the line $y = x$
- [ ] Every point with $x > y$
  why: Negative denominators are fine for a fraction: $f(1, 3) = \\tfrac{1}{-2}$. Only a denominator of $0$ is a problem.
- [ ] Every point
  why: On the line $y = x$, for example at $(2, 2)$, the formula would divide by $0$.
???
The only problem is dividing by $0$, which happens when $x - y = 0$, the line $y = x$. Every other point works.
:::

:::example Domain and range of a hemisphere
Find the domain and range of $g(x, y) = \\sqrt{9 - x^2 - y^2}$.

**Domain.** The square root needs $9 - x^2 - y^2 \\ge 0$, so $x^2 + y^2 \\le 9$: the disk of radius $3$ centered at the origin, edge included.

**Range.** Inside the root, $9 - x^2 - y^2$ is largest, $9$, at the origin and smallest, $0$, on the edge. So $g$ runs from $\\sqrt0 = 0$ up to $\\sqrt9 = 3$: the range is $[0, 3]$.
>>> Each step, with points
1. **Domain as a distance.** $x^2 + y^2$ is the squared distance from $(x, y)$ to the origin (Aug 24). So $x^2 + y^2 \\le 9$ means "distance at most $3$." For example, $(1, 2)$ has $1 + 4 = 5 \\le 9$: inside. $(3, 1)$ has $9 + 1 = 10 > 9$: outside, and $g(3, 1)$ would need $\\sqrt{-1}$.
2. **The edge is included.** $(3, 0)$ has $9 - 9 - 0 = 0$, and $\\sqrt0 = 0$ is a number.
3. **The largest output.** At $(0, 0)$: $g = \\sqrt9 = 3$. Anywhere else, $x^2 + y^2 > 0$ makes the inside smaller than $9$.
4. **The smallest output.** On the edge, $g = 0$. A square root is never negative, so nothing is smaller.
5. **Everything in between happens.** For example, $g = 2$ at $(1, 2)$, since $\\sqrt{9 - 1 - 4} = \\sqrt4 = 2$. Moving from the center to the edge, $g$ slides through every value from $3$ to $0$.

**The picture.** $z = \\sqrt{9 - x^2 - y^2}$ means $x^2 + y^2 + z^2 = 9$ with $z \\ge 0$: the top half of the sphere of radius $3$.
<<<
:::

:::check
What is the range of $h(x, y) = 1 + x^2 + y^2$?
- [x] $[1, \\infty)$
- [ ] $[0, \\infty)$
  why: $x^2 + y^2 \\ge 0$, so $h \\ge 1$. The value $0$ never happens.
- [ ] $[1, 2]$
  why: $h$ has no largest value: $h(10, 0) = 101$.
- [ ] Every number
  why: $h$ can't be less than $1$, since $x^2 + y^2$ is never negative.
???
$x^2 + y^2$ takes every value from $0$ (at the origin) upward, so $h$ takes every value from $1$ upward: $[1, \\infty)$.
:::

:::idea Graphs and slices
The **graph** of $f$ is the surface $z = f(x, y)$: above each point $(x, y)$ of the domain, go up to height $f(x, y)$.

**Slices make a surface readable.** Fix one variable and see what curve is left:
- Fix $x$ (a vertical slice): $z$ becomes a function of $y$ alone.
- Fix $y$: $z$ becomes a function of $x$ alone.
- Fix $z$ (a horizontal slice): the points at that height form a curve in the $xy$-plane.

These slices are called **traces**.
>>> Slicing $z = x^2 + y^2$
1. **Fix $x = 0$.** Then $z = y^2$: a parabola opening up. For example, $(0, 2, 4)$ is on it.
2. **Fix $y = 1$.** Then $z = x^2 + 1$: the same parabola, lifted up by $1$. For example, $(0, 1, 1)$ and $(2, 1, 5)$ are on it.
3. **Fix $z = 4$.** Then $x^2 + y^2 = 4$: a circle of radius $2$. At height $z = 9$ it's a circle of radius $3$.
4. **Put them together.** Parabolas in the vertical slices, circles in the horizontal ones, growing as you go up. This surface is called a paraboloid: it's lowest at the origin and rises faster and faster in every direction.
<<<
:::

:::check
What curve is the slice of $z = x^2 + y^2$ at height $z = 9$?
- [x] A circle of radius $3$
- [ ] A circle of radius $9$
  why: $x^2 + y^2 = 9$ means the radius squared is $9$, so the radius is $3$.
- [ ] A parabola
  why: Parabolas come from fixing $x$ or $y$. Fixing $z$ gives $x^2 + y^2 = 9$, a circle.
???
$x^2 + y^2 = 9$ is the circle of radius $\\sqrt9 = 3$.
:::

:::idea Level curves and contour maps
A [[level curve]] of $f$ is every point $(x, y)$ where $f(x, y) = c$, for one number $c$. A **contour map** draws several level curves in the $xy$-plane, each labeled with its $c$. It's the horizontal slices of the graph, all flattened onto one picture.

**Reading a contour map.** Moving along a level curve, $f$ stays the same. Moving from one level curve to the next, $f$ changes by the gap between their labels. Where neighboring curves are **close together**, $f$ changes a lot over a short distance: the graph is steep there.
>>> The level curves of $f = x^2 + y^2$, with numbers
$f = c$ means $x^2 + y^2 = c$, a circle of radius $\\sqrt c$.
- $c = 1$: radius $1$.
- $c = 2$: radius $\\sqrt2 \\approx 1.414$.
- $c = 3$: radius $\\sqrt3 \\approx 1.732$.
- $c = 4$: radius $2$.

**Why they get closer.** Each step in $c$ is $1$, but the gaps between circles shrink: $0.414$, then $0.318$, then $0.268$. Farther out, $f$ goes up by $1$ over a shorter distance, so the surface is steeper there. For example, along the $x$-axis the slope of $x^2$ is $2x$: it's $1$ at $x = 0.5$ and $3.6$ at $x = 1.8$.
<<<
:::

:::figure level-curves-paraboloid
Level curves of $f = x^2 + y^2$ for $c = 1, 2, 3, 4$: circles of radius $1$, $\\sqrt2$, $\\sqrt3$, $2$. Each step up in $c$ is the same, but the circles get closer together farther out, where the surface is steeper.
:::

:::example Level curves of the hemisphere
Find the level curves of $g(x, y) = \\sqrt{9 - x^2 - y^2}$ for $c = 0, 1, 2, 3$.

Set $\\sqrt{9 - x^2 - y^2} = c$ and square both sides: $9 - x^2 - y^2 = c^2$, so
$$x^2 + y^2 = 9 - c^2.$$
- $c = 0$: radius $3$, the edge of the domain.
- $c = 1$: radius $\\sqrt8 \\approx 2.83$.
- $c = 2$: radius $\\sqrt5 \\approx 2.24$.
- $c = 3$: radius $0$, just the point $(0, 0)$, the top.
>>> Each step, and what the map shows
1. **Why square both sides.** To get rid of the root. Squaring is safe here because both sides are $\\ge 0$: $c$ is an output of a square root, so it's never negative.
2. **Solve for $x^2 + y^2$.** $9 - x^2 - y^2 = c^2$ becomes $x^2 + y^2 = 9 - c^2$.
3. **Check a point.** $c = 2$ gives radius $\\sqrt5$. The point $(1, 2)$ has $1 + 4 = 5$, so it's on that circle, and indeed $g(1, 2) = 2$.
4. **Values of $c$ that don't happen.** $c = 4$ would need $x^2 + y^2 = 9 - 16 = -7$: no points. That matches the range $[0, 3]$.
5. **What the map shows.** The circles get closer together near the edge (gaps $0.17$, then $0.59$, then $2.24$ going inward). So the hemisphere is steepest near its edge and flattest at the top.
<<<
:::

:::check
What does the level curve $x^2 + 4y^2 = 4$ of $f = x^2 + 4y^2$ look like?
- [x] An ellipse through $(\\pm 2, 0)$ and $(0, \\pm 1)$
- [ ] A circle of radius $2$
  why: $(0, 2)$ gives $0 + 16 = 16 \\ne 4$, so it isn't on the curve. The curve only reaches $y = \\pm 1$.
- [ ] A circle of radius $4$
  why: $(4, 0)$ gives $16 \\ne 4$. The curve meets the $x$-axis at $x = \\pm 2$.
- [ ] Two lines
  why: $x^2 + 4y^2$ is a sum of squares, so the curve is closed and round, not straight.
???
On the $x$-axis ($y = 0$): $x^2 = 4$, so $x = \\pm 2$. On the $y$-axis ($x = 0$): $4y^2 = 4$, so $y = \\pm 1$. It's an ellipse, twice as wide as it is tall.
:::

:::summary Summary
- $f(x, y)$ takes a point and gives a number. Domain: every point where the formula makes sense (no negative under a square root, no non-positive inside a log, no dividing by $0$). Range: every output.
- The graph $z = f(x, y)$ is a surface. Slices with $x$, $y$, or $z$ fixed show its shape.
- A level curve is $f(x, y) = c$. A contour map draws several; close curves mean steep.

**Common mistakes:**
- Leaving out the edge of the domain when a square root of $0$ is allowed (or including it for a log, where $\\ln 0$ isn't).
- Reading $x^2 + y^2 = 9$ as radius $9$ instead of $3$.
- Forgetting that a square root's output is never negative when finding the range.
:::
`;export{e as default};