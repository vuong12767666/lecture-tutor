var e=`---
title: Final Practice Test 1
exam: Final
minutes: 60
---

:::problem 1
Let $P = (1, 0, 2)$, $Q = (2, 1, 0)$, and $R = (0, 2, 1)$.

**(a)** The plane through $P$, $Q$, and $R$:

{{plane 2: 1, 1, 1, 3}}

**(b)** The area of triangle $PQR$ is {{expr 2: 3 sqrt(3)/2}}
+++
review: 2026-08-31 A plane through three points; 2026-08-31 The length is an area

**First, what the cross product gives you.** The cross product of two arrows is a third arrow perpendicular to both. If both arrows lie in a plane, the cross product sticks straight out of it: it's a normal vector. Its length is the area of the parallelogram the two arrows make. For example, $\\langle 1, 0, 0 \\rangle \\times \\langle 0, 1, 0 \\rangle = \\langle 0, 0, 1 \\rangle$, perpendicular to both, with length $1$, the area of the unit square.

**The goal.** One cross product of two sides answers both parts: it's the plane's normal, and half its length is the triangle's area.

**Step 1: two sides of the triangle.** *Why sides:* the cross product needs arrows that lie in the plane. $\\overrightarrow{PQ} = \\langle 2 - 1, 1 - 0, 0 - 2 \\rangle = \\langle 1, 1, -2 \\rangle$ and $\\overrightarrow{PR} = \\langle 0 - 1, 2 - 0, 1 - 2 \\rangle = \\langle -1, 2, -1 \\rangle$.

**Step 2: the cross product.** *Why the cover-a-column method:* it gives each component as one cross-multiplication. $\\mathbf i$: $1 \\cdot (-1) - (-2) \\cdot 2 = 3$. $\\mathbf j$: $-(1 \\cdot (-1) - (-2)(-1)) = -(-1 - 2) = 3$. $\\mathbf k$: $1 \\cdot 2 - 1 \\cdot (-1) = 3$. So $\\mathbf n = \\langle 3, 3, 3 \\rangle$. Check: $\\langle 3, 3, 3 \\rangle \\cdot \\langle 1, 1, -2 \\rangle = 0$ ✓.

**Step 3 (a): the plane.** *Why any of the three points works:* they're all on the plane. Using $P$: $3(x - 1) + 3(y - 0) + 3(z - 2) = 0$, which is $3x + 3y + 3z = 9$, or $x + y + z = 3$. Check $Q$: $2 + 1 + 0 = 3$ ✓. $R$: $0 + 2 + 1 = 3$ ✓.

**Step 4 (b): the area.** *Why half:* the triangle is half of the parallelogram. $|\\langle 3, 3, 3 \\rangle| = \\sqrt{27} = 3\\sqrt3$, so the area is $\\tfrac{3\\sqrt3}{2} \\approx 2.60$.

**Common mistake.** Forgetting the minus sign on the $\\mathbf j$ component. That gives $\\langle 3, -3, 3 \\rangle$, whose dot product with $\\overrightarrow{PQ}$ is $3 - 3 - 6 = -6 \\ne 0$, so the check catches it.
:::

:::problem 2
Find each limit, or circle "does not exist".

**(a)** $\\displaystyle\\lim_{(x,y)\\to(0,0)} \\frac{3x^2 y}{x^2 + y^2}$: {{circle 1: *$0$ | $3$ | does not exist}}

**(b)** $\\displaystyle\\lim_{(x,y)\\to(0,0)} \\frac{x^2 - 2y^2}{x^2 + y^2}$: {{circle 1: $0$ | $1$ | $-2$ | *does not exist}}

**(c)** $\\displaystyle\\lim_{(x,y)\\to(1,1)} \\frac{x^2 - y^2}{x - y} =$ {{expr 2: 2}}
+++
review: 2026-09-09 Paths: showing a limit doesn't exist; 2026-09-09 Squeezing: proving a limit exists; 2026-09-11 Continuity

**First, how to decide a limit in two variables.** The limit has to be the same no matter which path you take into the point. Two paths with different values mean it doesn't exist. To prove it does exist, trap the function between $0$ and something that goes to $0$. For example, $\\tfrac{xy}{x^2 + y^2}$ is $0$ on the $x$-axis but $\\tfrac12$ on the line $y = x$, so it has no limit at the origin.

**The goal.** For each part, plug in if you can. If plugging in gives $\\tfrac00$, try paths to disprove the limit, or squeeze, factor, or cancel to find it.

**(a)** *Why squeeze:* plugging in gives $\\tfrac00$, and the axes both give $0$, but agreeing paths prove nothing. Write it as $3y \\cdot \\tfrac{x^2}{x^2 + y^2}$. The fraction is between $0$ and $1$, because $x^2 \\le x^2 + y^2$. So $\\left|\\tfrac{3x^2y}{x^2 + y^2}\\right| \\le 3|y|$, which goes to $0$. The limit is $0$. For example, at $(0.01, 0.01)$ the value is $0.015$, at most $3 \\times 0.01$.

**(b)** *Why try the axes:* they're the easiest paths. Along the $x$-axis ($y = 0$): $\\tfrac{x^2}{x^2} = 1$. Along the $y$-axis ($x = 0$): $\\tfrac{-2y^2}{y^2} = -2$. Two paths, two values: the limit **doesn't exist**.

**(c)** *Why factor:* plugging in gives $\\tfrac00$, but the top factors as $(x - y)(x + y)$. Away from the line $y = x$, the $x - y$ cancels, leaving $x + y$, which is continuous. Plug in: $1 + 1 = 2$.

**Why not the other choices.**
- **(a)** $3$: the squeeze traps the values between $-3|y|$ and $3|y|$, which both go to $0$, not $3$. Does not exist: the squeeze works along every path at once, so the limit does exist.
- **(b)** $0$, $1$, $-2$: the function is $1$ along the $x$-axis and $-2$ along the $y$-axis, so no single number works. ($1$ and $-2$ are each right along one axis only.)
:::

:::problem 3
Let $f(x, y) = xy^2 - x^2$.

**(a)** The tangent plane to $z = f(x, y)$ at $(2, 1, -2)$:

{{plane 3: 3, -4, 1, 0}}

**(b)** Use the linear approximation at $(2, 1)$ to estimate $f(2.1,\\ 0.9) \\approx$ {{expr 2: -2.7}}
+++
review: 2026-09-14 Tangent planes to graphs; 2026-09-14 Linear approximation

**First, what the tangent plane is.** It's the flat plane through a point of the graph that tilts the same way the graph does there. Its slope in the $x$ direction is $f_x$ and in the $y$ direction is $f_y$. Near the point it's close to the graph, so its height estimates $f$. For example, for $z = x^2$ at $x = 1$, the tangent line $z = 1 + 2(x - 1)$ gives $1.2$ at $x = 1.1$, close to $1.21$.

**The goal.** The plane is $z = f(2, 1) + f_x(2, 1)(x - 2) + f_y(2, 1)(y - 1)$, and the estimate uses that plane at $(2.1, 0.9)$.

**Step 1: check the point.** $f(2, 1) = 2 \\cdot 1 - 4 = -2$ ✓, so $(2, 1, -2)$ is on the graph.

**Step 2: the slopes at $(2, 1)$.** *Why each one:* $f_x$ treats $y$ as one number, so $xy^2$ gives $y^2$ and $-x^2$ gives $-2x$: $f_x = y^2 - 2x = 1 - 4 = -3$. For $f_y$, $x$ is the number: $f_y = 2xy = 4$.

**Step 3 (a): the plane.** $z = -2 - 3(x - 2) + 4(y - 1) = -2 - 3x + 6 + 4y - 4 = -3x + 4y$. Moving everything to the left: $3x - 4y + z = 0$. Check the point: $6 - 4 - 2 = 0$ ✓.

**Step 4 (b): the estimate.** *Why the steps have these signs:* $\\Delta x = 2.1 - 2 = 0.1$ and $\\Delta y = 0.9 - 1 = -0.1$. So $f \\approx -2 + (-3)(0.1) + 4(-0.1) = -2 - 0.3 - 0.4 = -2.7$.

**Check.** Exactly, $f(2.1, 0.9) = 2.1 \\times 0.81 - 4.41 = 1.701 - 4.41 = -2.709$, close to $-2.7$ ✓.
:::

:::problem 4
Let $z = x e^{y}$, where $x = t^2$ and $y = 3t - 3$. Find $\\dfrac{dz}{dt}$ at $t = 1$.

$\\dfrac{dz}{dt}\\Big|_{t=1} =$ {{expr 3: 5}}
+++
review: 2026-09-16 The chain rule along a path

**First, what the chain rule does here.** $z$ depends on $x$ and $y$, and both of those change with $t$. A small change in $t$ reaches $z$ two ways, through $x$ and through $y$. Each way contributes (rate of $z$ with that variable) $\\times$ (rate of that variable with $t$), and the two add. For example, if $z$ rises $3$ per unit of $x$ and $x$ rises $2$ per unit of $t$, that route alone gives $6$.

**The goal.** $\\tfrac{dz}{dt} = z_x\\,\\tfrac{dx}{dt} + z_y\\,\\tfrac{dy}{dt}$, evaluated at the point where the particle is when $t = 1$.

**Step 1: where you are at $t = 1$.** *Why first:* the partials are evaluated at that point, not at $t$. $x = 1$ and $y = 3 - 3 = 0$.

**Step 2: the four pieces.** $z_x = e^y = 1$, $z_y = x e^y = 1$, $\\tfrac{dx}{dt} = 2t = 2$, $\\tfrac{dy}{dt} = 3$.

**Step 3: add the routes.** $1 \\cdot 2 + 1 \\cdot 3 = 5$.

**Check by substituting first.** $z = t^2 e^{3t - 3}$, so $\\tfrac{dz}{dt} = 2t\\,e^{3t - 3} + 3t^2 e^{3t - 3}$. At $t = 1$: $2 + 3 = 5$ ✓.
:::

:::scratch
:::

:::problem 5
Let $f(x, y) = x^2 y + y^3$.

**(a)** The rate of change of $f$ at $(1, 2)$ in the direction toward $(4, 6)$ is {{expr 2: 64/5}}

**(b)** The maximum rate of change of $f$ at $(1, 2)$ is {{expr 2: sqrt(185)}}
+++
review: 2026-09-18 Directional derivatives; 2026-09-18 The gradient

**First, what a directional derivative is.** It's how fast $f$ changes as you walk from a point in one direction, per unit of distance walked. It equals the gradient $\\nabla f = \\langle f_x, f_y \\rangle$ dotted with a direction of length $1$. The gradient itself points in the direction of fastest increase, and its length is that fastest rate. For example, if $\\nabla f = \\langle 3, 4 \\rangle$, the fastest rate is $\\sqrt{9 + 16} = 5$.

**The goal.** Find $\\nabla f(1, 2)$. For (a), dot it with the unit vector toward $(4, 6)$. For (b), take its length.

**Step 1: the gradient.** *Why each partial:* $f_x$ treats $y$ as one number, so $f_x = 2xy$; $f_y = x^2 + 3y^2$. At $(1, 2)$: $\\nabla f = \\langle 4, 1 + 12 \\rangle = \\langle 4, 13 \\rangle$.

**Step 2: the direction.** *Why end minus start:* "toward $(4, 6)$ from $(1, 2)$" is the arrow $\\langle 3, 4 \\rangle$, not the point itself. Its length is $5$, so $\\mathbf u = \\langle \\tfrac35, \\tfrac45 \\rangle$.

**Step 3 (a): dot product.** $\\langle 4, 13 \\rangle \\cdot \\langle \\tfrac35, \\tfrac45 \\rangle = \\tfrac{12}{5} + \\tfrac{52}{5} = \\tfrac{64}{5} = 12.8$.

**Step 4 (b): the length.** $|\\nabla f| = \\sqrt{16 + 169} = \\sqrt{185} \\approx 13.6$. *Why this is the most:* $\\nabla f \\cdot \\mathbf u = |\\nabla f|\\cos\\theta$, which is largest when $\\cos\\theta = 1$. Check: $12.8 \\le 13.6$ ✓.
:::

:::problem 6
Let $f(x, y) = x^3 - 3x + y^2 - 4y$.

**(a)** All critical points of $f$: {{point 2: (1, 2); (-1, 2)}}

**(b)** The critical point $(1, 2)$ is a: {{circle 1: *local min | local max | saddle point}}

**(c)** The critical point $(-1, 2)$ is a: {{circle 1: local min | local max | *saddle point}}

**(d)** The value of $f$ at its local minimum is {{expr 1: -6}}
+++
review: 2026-09-25 Critical points; 2026-09-25 The second derivative test

**First, what critical points and the test are.** A critical point is where both partial derivatives are $0$: the surface is level there in every direction. It can be a low point, a high point, or a saddle. The number $D = f_{xx}f_{yy} - f_{xy}^2$ decides: $D > 0$ with $f_{xx} > 0$ is a min, $D > 0$ with $f_{xx} < 0$ a max, $D < 0$ a saddle. For example, $x^2 + y^2$ at $(0, 0)$ has $D = 2 \\cdot 2 - 0 = 4 > 0$ and $f_{xx} = 2 > 0$: a min.

**The goal.** Solve $f_x = 0$ and $f_y = 0$ together, then compute $D$ at each solution.

**Step 1 (a): critical points.** $f_x = 3x^2 - 3 = 0$ gives $x^2 = 1$, so $x = 1$ or $x = -1$. $f_y = 2y - 4 = 0$ gives $y = 2$. *Why both $x$ values:* each one pairs with $y = 2$. The points are $(1, 2)$ and $(-1, 2)$.

**Step 2: second partials.** $f_{xx} = 6x$, $f_{yy} = 2$, $f_{xy} = 0$. So $D = 6x \\cdot 2 - 0 = 12x$.

**Step 3 (b) and (c): classify.** At $(1, 2)$: $D = 12 > 0$ and $f_{xx} = 6 > 0$, a local min. At $(-1, 2)$: $D = -12 < 0$, a saddle.

**Step 4 (d): the value.** $f(1, 2) = 1 - 3 + 4 - 8 = -6$. Check a neighbor: $f(1.1, 2) = 1.331 - 3.3 + 4 - 8 = -5.969$, above $-6$ ✓.

**Why not the other choices.**
- **(b)** Local max needs $f_{xx} < 0$, but $f_{xx} = 6$. Saddle needs $D < 0$, but $D = 12$.
- **(c)** Local min or max needs $D > 0$, but $D = -12$. With numbers: $f(-1, 2) = -1 + 3 + 4 - 8 = -2$. Stepping in $x$, $f(-1.1, 2) = -1.331 + 3.3 + 4 - 8 = -2.031$, below $-2$. Stepping in $y$, $f(-1, 2.1) = -1 + 3 + 4.41 - 8.4 = -1.99$, above $-2$. Lower in one direction and higher in another: a saddle, not a min or max.
:::

:::problem 7
Find the maximum of $f(x, y) = x + y$ on the ellipse $x^2 + 4y^2 = 20$.

**(a)** The maximum value is {{expr 2: 5}}

**(b)** It occurs at the point {{point 2: (4, 1)}}
+++
review: 2026-09-30 The method; 2026-09-30 Why the gradients line up

**First, what Lagrange multipliers do.** When you're restricted to a curve $g = c$, the largest value of $f$ on it happens where $\\nabla f$ is parallel to $\\nabla g$: $\\nabla f = \\lambda \\nabla g$. At such a point, moving along the curve doesn't change $f$ at first. For example, for $f = x + 2y$ on the circle $x^2 + y^2 = 5$, the max is at $(1, 2)$, where $\\nabla f = \\langle 1, 2 \\rangle$ is half of $\\nabla g = \\langle 2, 4 \\rangle$.

**The goal.** Solve $\\nabla f = \\lambda \\nabla g$ together with $x^2 + 4y^2 = 20$, then compare $f$ at the solutions.

**Step 1: the equations.** $\\nabla f = \\langle 1, 1 \\rangle$ and $\\nabla g = \\langle 2x, 8y \\rangle$, so $1 = 2\\lambda x$ and $1 = 8\\lambda y$.

**Step 2: relate $x$ and $y$.** *Why dividing is safe:* neither $x$ nor $y$ can be $0$, since that would make one equation say $1 = 0$. Dividing the first by the second: $1 = \\tfrac{2x}{8y}$, so $x = 4y$.

**Step 3: the constraint.** $(4y)^2 + 4y^2 = 20y^2 = 20$, so $y = \\pm 1$ and $x = \\pm 4$: the points $(4, 1)$ and $(-4, -1)$.

**Step 4: compare.** $f(4, 1) = 5$ and $f(-4, -1) = -5$. *Why comparing settles it:* the ellipse is closed and bounded, so $f$ has a max on it, and the max must be one of these points. The max is $5$ at $(4, 1)$. Spot check: $(\\sqrt{20}, 0) \\approx (4.47, 0)$ is on the ellipse with $f \\approx 4.47 < 5$ ✓.
:::

:::problem 8
Let $\\mathbf F = \\langle 2xy + 1,\\; x^2 + 2y \\rangle$.

**(a)** A potential function for $\\mathbf F$: $f(x, y) =$ {{expr-c 2: x^2 y + x + y^2}}

**(b)** $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r$ along any path $C$ from $(0, 0)$ to $(2, 1)$ is {{expr 2: 7}}
+++
review: 2026-10-12 Finding the potential function; 2026-10-09 The Fundamental Theorem for Line Integrals

**First, what a potential function buys you.** If $\\mathbf F = \\nabla f$, the line integral along any path is just $f(\\text{end}) - f(\\text{start})$, so you never parametrize. Such an $f$ exists here because the cross-partials match ($P_y = 2x = Q_x$) on the whole plane, which has no holes. For example, $\\nabla(x^2 y) = \\langle 2xy, x^2 \\rangle$, so from $(0, 0)$ to $(1, 3)$ its integral is $3 - 0 = 3$.

**The goal.** Build $f$ one variable at a time, then use $f(2, 1) - f(0, 0)$.

**Step 1: check it's conservative.** $P = 2xy + 1$ gives $P_y = 2x$. $Q = x^2 + 2y$ gives $Q_x = 2x$. They match everywhere ✓.

**Step 2: integrate $P$ in $x$.** *Why a function of $y$ is left over:* anything with only $y$ in it has $x$-derivative $0$. $f = x^2 y + x + h(y)$.

**Step 3: match $Q$.** $f_y = x^2 + h'(y)$ must equal $x^2 + 2y$, so $h'(y) = 2y$ and $h = y^2$. So (a) $f = x^2 y + x + y^2$. Check: $f_x = 2xy + 1$ ✓, $f_y = x^2 + 2y$ ✓.

**Step 4 (b): endpoints.** $f(2, 1) = 4 + 2 + 1 = 7$ and $f(0, 0) = 0$, so the integral is $7$.
:::

:::scratch
:::

:::problem 9
Consider $\\displaystyle\\int_0^1 \\int_x^1 e^{y^2}\\, dy\\, dx$.

**(a)** The same integral with the order switched is: {{circle 1: *$\\int_0^1\\int_0^y e^{y^2}\\,dx\\,dy$ | $\\int_0^1\\int_y^1 e^{y^2}\\,dx\\,dy$ | $\\int_0^1\\int_0^1 e^{y^2}\\,dx\\,dy$ | $\\int_0^1\\int_x^1 e^{y^2}\\,dx\\,dy$}}

**(b)** Its value is {{expr 3: (e - 1)/2}}
+++
review: 2026-10-19 Switching the order; 2026-10-19 Regions bounded by curves

**First, why switch the order.** $e^{y^2}$ has no antiderivative you can write down, so the inside integral in $y$ is stuck. Switching makes the inside integral in $x$, where $e^{y^2}$ is just a number. The region stays the same; only the order of slicing changes. For example, the triangle $0 \\le x \\le 1$, $x \\le y \\le 1$ contains $(0.2, 0.5)$, since $0.2 \\le 0.5 \\le 1$.

**The goal.** Describe the region with $y$ on the outside, then integrate.

**Step 1: the region from the inequalities.** $0 \\le x \\le 1$ and $x \\le y \\le 1$. Combined: $0 \\le x \\le y \\le 1$. That's the triangle with corners $(0, 0)$, $(0, 1)$, $(1, 1)$.

**Step 2 (a): switch.** *Why these limits:* with $y$ outside, $y$ runs over all its values, $0$ to $1$. For each $y$, the inequality $0 \\le x \\le y$ says $x$ runs from $0$ to $y$. So $\\int_0^1 \\int_0^y e^{y^2}\\, dx\\, dy$. Check with a point: $(0.2, 0.5)$ has $0 \\le 0.2 \\le 0.5$ ✓.

**Step 3: inside integral.** $e^{y^2}$ doesn't change as $x$ moves, so $\\int_0^y e^{y^2}\\, dx = y\\, e^{y^2}$.

**Step 4 (b): outside integral.** *Why substitution:* the $y$ in front is half the derivative of $y^2$. With $u = y^2$, $du = 2y\\,dy$: $\\int_0^1 y e^{y^2}\\, dy = \\tfrac12 \\int_0^1 e^u\\, du = \\tfrac{e - 1}{2} \\approx 0.859$.

**Why not the other choices.**
- $\\int_0^1 \\int_y^1$: that's $y \\le x \\le 1$, the other triangle (it contains $(0.5, 0.2)$, which isn't in our region).
- $\\int_0^1 \\int_0^1$: that's the whole square, twice the area of the triangle.
- $\\int_0^1 \\int_x^1 \\ldots dx\\,dy$: with $dx$ on the inside, the inside limits are values of $x$, so they can depend only on $y$, the outside variable. A limit written in terms of $x$ doesn't make sense there.
:::

:::problem 10
Find the volume of the solid inside the sphere $x^2 + y^2 + z^2 = 9$ and above the cone $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$.

Volume $=$ {{expr 4: 9pi}}
+++
review: 2026-10-28 Spherical coordinates; 2026-10-28 Which coordinates to use

**First, why spherical coordinates.** A point is described by its distance $\\rho$ from the origin, its angle $\\varphi$ down from the positive $z$-axis, and its angle $\\theta$ around the $z$-axis. A sphere centered at the origin is $\\rho = $ a number, and a cone with its tip at the origin is $\\varphi = $ a number, so this solid's limits become numbers. The small volume piece is $\\rho^2 \\sin\\varphi \\, d\\rho\\, d\\varphi\\, d\\theta$. For example, the point $(0, 0, 3)$ has $\\rho = 3$ and $\\varphi = 0$.

**The goal.** Find the limits for $\\rho$, $\\varphi$, $\\theta$, then integrate $\\rho^2\\sin\\varphi$.

**Step 1: the sphere.** $x^2 + y^2 + z^2 = \\rho^2 = 9$, so $0 \\le \\rho \\le 3$.

**Step 2: the cone.** *Why it's $\\varphi = \\tfrac\\pi3$:* in spherical coordinates, $\\sqrt{x^2 + y^2} = \\rho\\sin\\varphi$ and $z = \\rho\\cos\\varphi$. The cone says $\\rho\\cos\\varphi = \\tfrac{\\rho\\sin\\varphi}{\\sqrt3}$, so $\\tan\\varphi = \\sqrt3$ and $\\varphi = \\tfrac\\pi3$. For example, $(\\sqrt3, 0, 1)$ is on it: $\\sqrt{3/3} = 1$ ✓, at $60°$ from straight up. Above the cone means closer to straight up: $0 \\le \\varphi \\le \\tfrac\\pi3$. All the way around: $0 \\le \\theta \\le 2\\pi$.

**Step 3: integrate.** *Why the integral splits:* each limit is a number, so it's a product of three one-variable integrals.
$$\\int_0^{2\\pi} d\\theta \\cdot \\int_0^{\\pi/3} \\sin\\varphi\\, d\\varphi \\cdot \\int_0^3 \\rho^2\\, d\\rho = 2\\pi \\cdot \\left(1 - \\cos\\tfrac\\pi3\\right) \\cdot 9 = 2\\pi \\cdot \\tfrac12 \\cdot 9 = 9\\pi.$$

**Check.** The whole ball has volume $\\tfrac43\\pi \\cdot 27 = 36\\pi$, and $9\\pi$ is a quarter of it, a sensible size for a cone opening $60°$ in every direction from straight up.
:::

:::problem 11
Let $C$ be the boundary of the square $0 \\le x \\le 1$, $0 \\le y \\le 1$, traced counterclockwise. Use Green's Theorem to find
$$\\oint_C xy\\, dx + (x^2 + y)\\, dy.$$

Value $=$ {{expr 4: 1/2}}
+++
review: 2026-11-09 Green's Theorem; 2026-11-09 Using it: hard line integral, easy double integral

**First, what Green's Theorem says.** Around a closed curve traced counterclockwise, $\\oint_C P\\, dx + Q\\, dy = \\iint_D (Q_x - P_y)\\, dA$, where $D$ is the region inside. So one double integral replaces four line integrals, one per side of the square. For example, $\\oint (-y\\,dx + x\\,dy)$ around the unit square is $\\iint 2\\, dA = 2$.

**The goal.** Find $P$ and $Q$, compute $Q_x - P_y$, and integrate it over the square.

**Step 1: $P$ and $Q$.** $P = xy$ (what multiplies $dx$) and $Q = x^2 + y$ (what multiplies $dy$).

**Step 2: $Q_x - P_y$.** $Q_x = 2x$ (the $y$ doesn't change as $x$ moves). $P_y = x$. So $Q_x - P_y = 2x - x = x$.

**Step 3: integrate.** $\\int_0^1 \\int_0^1 x\\, dx\\, dy = \\int_0^1 \\tfrac12\\, dy = \\tfrac12$.

**Check with the four sides.** Bottom ($y = 0$, going right): $P = 0$ and $dy = 0$, so $0$. Right ($x = 1$, going up): $\\int_0^1 (1 + y)\\, dy = \\tfrac32$. Top ($y = 1$, going left): $\\int_1^0 x\\, dx = -\\tfrac12$. Left ($x = 0$, going down): $\\int_1^0 y\\, dy = -\\tfrac12$. Total: $0 + \\tfrac32 - \\tfrac12 - \\tfrac12 = \\tfrac12$ ✓.
:::

:::problem 12
Let $\\mathbf F = \\langle x^2, y^2, z^2 \\rangle$ and let $S$ be the surface of the cube $0 \\le x, y, z \\le 1$, with outward normal.

**(a)** $\\operatorname{div} \\mathbf F =$ {{expr 1: 2x + 2y + 2z}}

**(b)** The outward flux $\\displaystyle\\iint_S \\mathbf F \\cdot d\\mathbf S$ is {{expr 4: 3}}
+++
review: 2026-11-16 The Divergence Theorem; 2026-11-13 Divergence

**First, what the Divergence Theorem says.** The flux out of a closed surface equals the integral of the divergence over the solid inside: $\\iint_S \\mathbf F \\cdot d\\mathbf S = \\iiint_E \\operatorname{div}\\mathbf F\\, dV$. The divergence measures how much the field spreads out at each point. For example, $\\langle x, y, z \\rangle$ has divergence $1 + 1 + 1 = 3$ everywhere, so its flux out of any closed surface is $3$ times the volume inside.

**The goal.** Compute $\\operatorname{div}\\mathbf F$, then integrate it over the cube instead of computing six face integrals.

**Step 1 (a): divergence.** *Why add these three:* divergence is $P_x + Q_y + R_z$. $\\tfrac{\\partial}{\\partial x}x^2 = 2x$, $\\tfrac{\\partial}{\\partial y}y^2 = 2y$, $\\tfrac{\\partial}{\\partial z}z^2 = 2z$. So $\\operatorname{div}\\mathbf F = 2x + 2y + 2z$.

**Step 2 (b): integrate over the cube.** *Why split it:* each term depends on one variable, and the cube has volume $1$. $\\iiint 2x\\, dV = 2 \\cdot \\tfrac12 = 1$, and likewise for $2y$ and $2z$. Total: $3$.

**Check with two faces.** On the face $x = 1$ (outward normal $\\langle 1, 0, 0 \\rangle$), $\\mathbf F \\cdot \\mathbf n = x^2 = 1$, so its flux is $1 \\times \\text{area } 1 = 1$. On the face $x = 0$ (normal $\\langle -1, 0, 0 \\rangle$), $\\mathbf F \\cdot \\mathbf n = -x^2 = 0$. The $x$-faces give $1$, and by symmetry the $y$- and $z$-faces give $1$ each: $3$ ✓.
:::
`;export{e as default};