var e=`---
title: Applications of partial derivatives
date: 2026-09-14
stewart: 14.3, 14.4
source: OpenStax Calculus Volume 3, §4.3 Partial Derivatives and §4.4 Tangent Planes and Linear Approximations
---

:::recap Last time
- The [[partial derivative]] $f_x$ is how fast $f$ changes when only $x$ changes: differentiate in $x$ while $y$ acts like a number.
- It's the slope of the graph's slice at a fixed $y$. $f_y$ is the slope of the slice at a fixed $x$.
:::

:::check
Warm-up: for $f = x^2 y + y^3$, what is $f_x(1, 2)$?
answer: 4
???
With $y$ acting like a number, $f_x = 2xy$ (the $y^3$ has no $x$, so it gives $0$). At $(1, 2)$: $2 \\cdot 1 \\cdot 2 = 4$.
:::

:::question Today
What do partial derivatives tell you on a contour map? And how do you find the flat plane that best fits a curved graph, and use it to estimate values?
:::

:::idea Partial derivatives as rates
$f_x$ is a rate: the change in $f$ per unit of $x$, with $y$ held where it is. Its units are ($f$'s units) per ($x$'s units).

**Reading the sign from a contour map.** To see the sign of $f_x$ at a point, move right (the $+x$ direction) from it and watch the labels. Labels going up: $f_x > 0$. Going down: $f_x < 0$. Staying on one level curve: $f_x = 0$. For $f_y$, move up instead.

**Estimating the size.** Divide the change in label by the distance moved: $f_x \\approx \\frac{\\Delta f}{\\Delta x}$.
>>> Reading the map below, with numbers
The figure shows $f = x^2 + y^2$, with circles for $f = 1, 2, 3, 4$.
1. **At $(1, 0)$, moving right.** The labels go from $1$ (at $x = 1$) to $2$ (at $x \\approx 1.414$): up, so $f_x > 0$. Exactly, $f_x = 2x = 2$.
2. **At $(0, 1)$, moving right.** You start along the circle $f = 1$, whose top is flat there, so the label doesn't change at first: $f_x = 0$. Exactly, $f_x = 2 \\cdot 0 = 0$.
3. **At $(-1, 0)$, moving right.** You move toward the center, where the labels go down: $f_x < 0$. Exactly, $f_x = -2$.
4. **Estimating a size.** From the circle $f = 2$ (at $x \\approx 1.414$) to $f = 3$ (at $x \\approx 1.732$) along the $x$-axis: $\\frac{3 - 2}{1.732 - 1.414} = \\frac{1}{0.318} \\approx 3.1$. Halfway between, at $x \\approx 1.57$, the exact $f_x = 2x \\approx 3.15$.

**Units, with numbers.** If $T(x, y)$ is a temperature in °C and $x$ is in meters, then $T_x = 3$ means about $3$°C warmer for each meter moved east, at least for small moves.
<<<
:::

:::figure level-curves-paraboloid
Level curves of $f = x^2 + y^2$ for $c = 1, 2, 3, 4$. Moving right from $(1, 0)$ crosses into higher labels ($f_x > 0$). Moving right from $(-1, 0)$ crosses into lower ones ($f_x < 0$).
:::

:::check
On the contour map of $f = x^2 + y^2$, what is the sign of $f_y$ at the point $(0, -1)$?
- [x] Negative
- [ ] Positive
  why: Moving up from $(0, -1)$ heads toward the center, where the labels are smaller. Exactly, $f_y = 2y = -2$.
- [ ] Zero
  why: $f_y = 0$ would need the level curve through the point to be flat in the $y$ direction. At $(0, -1)$, moving up crosses into smaller circles.
???
To read $f_y$, move up. From $(0, -1)$, up is toward the origin, where $f$ is smaller, so $f_y < 0$. Exactly, $f_y = 2y = -2$.
:::

:::idea Tangent planes to graphs
The [[tangent plane]] to the graph $z = f(x, y)$ at the point $(a, b, f(a, b))$ is
$$z = f(a, b) + f_x(a, b)\\,(x - a) + f_y(a, b)\\,(y - b).$$

**Why this plane.** It passes through the point (put $x = a$, $y = b$ and get $z = f(a, b)$). Its slope in the $x$ direction is $f_x(a, b)$, the same as the graph's slice at $y = b$. Its slope in the $y$ direction is $f_y(a, b)$, the same as the slice at $x = a$. A plane is fixed by a point and its slopes in two directions, so this is the one plane that tilts exactly like the graph at that point.
>>> The plane matched against the graph, for $f = x^2 y$ at $(2, 1)$
1. **The point.** $f(2, 1) = 4 \\cdot 1 = 4$, so the point is $(2, 1, 4)$.
2. **The slopes.** $f_x = 2xy = 4$ and $f_y = x^2 = 4$ at $(2, 1)$.
3. **The plane.** $z = 4 + 4(x - 2) + 4(y - 1)$.
4. **The slice $y = 1$.** On the graph, $z = x^2$, whose slope at $x = 2$ is $2x = 4$. On the plane, $z = 4 + 4(x - 2)$, slope $4$. They match.
5. **The slice $x = 2$.** On the graph, $z = 4y$, slope $4$. On the plane, $z = 4 + 4(y - 1)$, slope $4$. They match.
6. **Near the point.** At $(2.1, 1)$: the graph gives $4.41$ and the plane gives $4.4$. At $(3, 1)$, farther away: the graph gives $9$ and the plane $8$. The plane fits well only close to the point.
<<<
:::

:::example A tangent plane, start to finish
Find the tangent plane to $z = x e^{y}$ at $(1, 0, 1)$.

**Point.** $f(1, 0) = 1 \\cdot e^0 = 1$ ✓.

**Slopes.** $f_x = e^{y} = 1$ and $f_y = x e^{y} = 1$ at $(1, 0)$.

**Plane.** $z = 1 + 1(x - 1) + 1(y - 0)$, which simplifies to $z = x + y$.
>>> Each step, and a check
1. **Check the point is on the graph.** $1 \\cdot e^0 = 1$, matching the given $z = 1$. If it didn't match, the point wouldn't be on the surface.
2. **$f_x$.** $e^y$ is a number while $x$ moves, so $\\frac{\\partial}{\\partial x}(x e^y) = e^y$. At $y = 0$: $1$.
3. **$f_y$.** $x$ is a number while $y$ moves, and $e^y$ has derivative $e^y$: $x e^y$. At $(1, 0)$: $1$.
4. **Simplify.** $1 + x - 1 + y = x + y$.
5. **Check near the point.** At $(1.1, 0.1)$: the graph gives $1.1 \\times e^{0.1} \\approx 1.2157$, and the plane gives $1.2$. Close.
<<<
:::

:::check
Which is the tangent plane to $z = x^2 + y^2$ at $(1, 1, 2)$?
- [x] $z = 2 + 2(x - 1) + 2(y - 1)$
- [ ] $z = 2 + 2x + 2y$
  why: The slopes multiply $(x - 1)$ and $(y - 1)$, the distances from the point. This plane gives $z = 6$ at $(1, 1)$, not $2$.
- [ ] $z = 2 + (x - 1) + (y - 1)$
  why: The slopes are $f_x = 2x = 2$ and $f_y = 2y = 2$ at $(1, 1)$, not $1$.
- [ ] $2(x - 1) + 2(y - 1) + 2(z - 2) = 0$
  why: For a graph, the normal is $\\langle f_x, f_y, -1 \\rangle = \\langle 2, 2, -1 \\rangle$, so the $z$ term has coefficient $-1$, not $2$.
???
$f(1, 1) = 2$, $f_x = 2x = 2$, $f_y = 2y = 2$. So $z = 2 + 2(x - 1) + 2(y - 1)$, which simplifies to $z = 2x + 2y - 2$.
:::

:::idea Linear approximation
Near $(a, b)$, the tangent plane is close to the graph, so it gives quick estimates, the [[linear approximation]]:
$$f(x, y) \\approx f(a, b) + f_x(a, b)\\,\\Delta x + f_y(a, b)\\,\\Delta y, \\qquad \\Delta x = x - a,\\; \\Delta y = y - b.$$
In words: the change in $f$ is about ($x$-slope) $\\times$ ($x$-step) plus ($y$-slope) $\\times$ ($y$-step). Written with small changes, $df = f_x\\,dx + f_y\\,dy$ is called the **differential**.
>>> An estimate, step by step: $\\sqrt{3.1^2 + 3.9^2}$
Use $f = \\sqrt{x^2 + y^2}$ near $(3, 4)$, where $f = 5$ is easy.
1. **Slopes.** $f_x = \\frac{x}{\\sqrt{x^2 + y^2}} = \\frac35 = 0.6$ and $f_y = \\frac{y}{\\sqrt{x^2 + y^2}} = \\frac45 = 0.8$ at $(3, 4)$.
2. **Steps.** $\\Delta x = 3.1 - 3 = 0.1$ and $\\Delta y = 3.9 - 4 = -0.1$. Watch the sign: $y$ went down.
3. **Estimate.** $5 + 0.6(0.1) + 0.8(-0.1) = 5 + 0.06 - 0.08 = 4.98$.
4. **Check.** Exactly, $\\sqrt{9.61 + 15.21} = \\sqrt{24.82} \\approx 4.982$. The estimate is off by about $0.002$.
<<<
:::

:::check
Use the linear approximation of $f = x^2 y$ at $(2, 1)$ to estimate $f(2.1, 0.9)$.
answer: 4
???
$f(2, 1) = 4$, $f_x = 2xy = 4$, $f_y = x^2 = 4$, $\\Delta x = 0.1$, $\\Delta y = -0.1$. So $f \\approx 4 + 4(0.1) + 4(-0.1) = 4$. (Exactly, $4.41 \\times 0.9 = 3.969$.)
:::

:::idea Differentiability
$f$ is **differentiable** at $(a, b)$ when the tangent plane is a good fit there: the error $f - L$ shrinks faster than the distance to $(a, b)$. That's the two-variable version of "has a derivative."
- If $f_x$ and $f_y$ exist **and are continuous** near $(a, b)$, then $f$ is differentiable there.
- If $f$ is differentiable at $(a, b)$, then $f$ is continuous there.
- Just having $f_x$ and $f_y$ at the point is not enough (Sep 11).
>>> The error shrinking, with numbers, for $f = x^2 y$ at $(2, 1)$
The plane is $L = 4 + 4(x - 2) + 4(y - 1)$.
1. **Distance $0.141$.** At $(2.1, 1.1)$: $f = 4.41 \\times 1.1 = 4.851$ and $L = 4.8$. The error is $0.051$, which is about $0.36$ times the distance.
2. **Distance $0.0141$.** At $(2.01, 1.01)$: $f = 4.0401 \\times 1.01 \\approx 4.0805$ and $L = 4.08$. The error is about $0.0005$, about $0.035$ times the distance.
3. **So the error shrinks faster than the distance**: ten times closer made the error about a hundred times smaller. That's differentiable.

**Where it fails.** For $\\frac{xy}{x^2 + y^2}$ (with value $0$ at the origin), $f_x(0, 0) = f_y(0, 0) = 0$, so the "plane" would be $z = 0$. But along $y = x$ the function is $\\tfrac12$ at every point, so the error stays $\\tfrac12$ however close you get. No tangent plane fits: not differentiable.
<<<
:::

:::check
True or false: if $f_x$ and $f_y$ are continuous near $(a, b)$, then $f$ is continuous at $(a, b)$.
- [x] True
- [ ] False
  why: Continuous partials near the point make $f$ differentiable there, and differentiable functions are continuous. (Partials that exist only at the point aren't enough.)
???
True. Continuous partials near $(a, b)$ make $f$ differentiable at $(a, b)$, and a differentiable function is continuous.
:::

:::summary Summary
- $f_x$ is a rate in the $x$ direction. On a contour map: move right and watch the labels for $f_x$, move up for $f_y$.
- Tangent plane to $z = f(x, y)$ at $(a, b)$: $z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$.
- Linear approximation: $f \\approx f(a, b) + f_x\\,\\Delta x + f_y\\,\\Delta y$ near $(a, b)$.
- Continuous partials $\\Rightarrow$ differentiable $\\Rightarrow$ continuous. Partials alone aren't enough.

**Common mistakes:**
- Using $x$ and $y$ instead of $x - a$ and $y - b$ in the tangent plane.
- Sign slips in $\\Delta y$ when the new point has a smaller $y$.
- Evaluating the partials at the new point instead of at $(a, b)$.
:::
`;export{e as default};