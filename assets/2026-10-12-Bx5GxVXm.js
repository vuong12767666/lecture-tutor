var e=`---
title: Conservative vector fields I
date: 2026-10-12
stewart: 16.3
source: OpenStax Calculus Volume 3, §6.3 Conservative Vector Fields
---

:::recap Last time
A [[vector field]] $\\mathbf{F}$ is [[conservative]] if it is the [[gradient]] of some function: $\\mathbf{F} = \\nabla f$. That $f$ is called a [[potential function]].

For conservative fields, [[line-integral|line integrals]] are easy. If $C$ is any path from $A$ to $B$, the [[ftli|Fundamental Theorem for Line Integrals]] says

$$\\int_C \\nabla f \\cdot d\\mathbf{r} = f(B) - f(A).$$

Only the endpoints matter, not the path: the integral is [[path independent]].
:::

:::check
Warm-up: $\\mathbf{F} = \\nabla f$ with $f = x^2 y$. What is $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ along any path from $(0,0)$ to $(2,1)$?
answer: 4
???
$f(2,1) - f(0,0) = 4 - 0 = 4$. No need to know the path.
:::

:::question Today
Given a vector field $\\mathbf{F}$, how can you tell whether it is conservative? And if it is, how do you find $f$?
:::

:::idea A necessary condition
Suppose $\\mathbf{F} = \\langle P, Q \\rangle$ really is $\\nabla f$. Then $P = f_x$ and $Q = f_y$. Differentiate each one with respect to the *other* variable:

$$P_y = f_{xy} \\qquad Q_x = f_{yx}$$

[[mixed partials|Mixed partials]] are equal (when they are continuous), so $P_y = Q_x$.
>>> Why $P_y = Q_x$ for a gradient, worked out for $f = x^2 y$
**What the symbols mean.** $P_y$ is how fast $P$ changes when you move in the $y$ direction. Moving in the $y$ direction means $x$ does not change: the points $(3, 1)$, $(3, 1.1)$, $(3, 1.2)$ all have $x = 3$. Likewise $Q_x$ is how fast $Q$ changes when you move in the $x$ direction, with $y$ the same.

1. **Find $P$ and $Q$.** For $f = x^2 y$, $P = f_x = 2xy$ and $Q = f_y = x^2$. So $\\mathbf F = \\langle 2xy, x^2 \\rangle$.
2. **Find $P_y$.** In $2xy$, the $2x$ does not change as $y$ moves, so it acts like a number: $P_y = 2x$. With numbers: $P(3, 1) = 6$ and $P(3, 1.1) = 6.6$, a change of $0.6$ over a step of $0.1$, which is a rate of $6 = 2 \\cdot 3$.
3. **Find $Q_x$.** $Q = x^2$, so $Q_x = 2x$. With numbers: $Q(3, 1) = 9$ and $Q(3.1, 1) = 9.61$, a change of $0.61$ over $0.1$, a rate of about $6$.
4. **Compare.** Both are $2x$. At $(3, 1)$, both are $6$.

**Why they always match for a gradient.** $P_y$ means: take $f$, differentiate in $x$, then in $y$. $Q_x$ means: take $f$, differentiate in $y$, then in $x$. Both differentiate $f$ once in each variable, only in a different order. Clairaut's Theorem says the order doesn't change the answer when those derivatives are continuous. Here: $f_x = 2xy$ then $f_{xy} = 2x$, and $f_y = x^2$ then $f_{yx} = 2x$.
<<<

**Why this condition makes sense.** The number $Q_x - P_y$ measures how much $\\mathbf F$ circulates around a point: for a small counterclockwise square of side $h$, $\\oint \\mathbf F \\cdot d\\mathbf r \\approx (Q_x - P_y)\\,h^2$. A gradient field gives $0$ around every closed loop, so for it $Q_x - P_y$ must be $0$. For example, $\\langle -y, x \\rangle$ has $Q_x - P_y = 1 - (-1) = 2$, and its integral around the unit square is exactly $2$, so it can't be a gradient.
>>> The unit square for $\\langle -y, x \\rangle$, side by side
**What the loop integral adds up.** Walking along a path, $\\mathbf F \\cdot d\\mathbf r$ is the part of $\\mathbf F$ pointing the way you walk, times the distance walked. On a side going right, only $P$ (the $x$ part) points that way. On a side going up, only $Q$ (the $y$ part) does.

Walk counterclockwise around the square with corners $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$. Here $P = -y$ and $Q = x$.

1. **Bottom, $(0,0)$ to $(1,0)$, walking right.** Every point has $y = 0$, so $P = 0$. This side adds $0 \\times 1 = 0$.
2. **Right side, $(1,0)$ to $(1,1)$, walking up.** Every point has $x = 1$, so $Q = 1$. This side adds $1 \\times 1 = 1$.
3. **Top, $(1,1)$ to $(0,1)$, walking left.** Every point has $y = 1$, so $P = -1$: the field points left, the same way you walk. Walking left counts $P$ with a minus sign, so this side adds $-(-1) \\times 1 = 1$.
4. **Left side, $(0,1)$ to $(0,0)$, walking down.** Every point has $x = 0$, so $Q = 0$. This side adds $0$.

**Total:** $0 + 1 + 1 + 0 = 2$, which is $(Q_x - P_y) \\cdot h^2 = 2 \\cdot 1^2$.

**The same four sides for any field and any small square** with corner $(x, y)$ and side $h$: bottom $\\approx P(x,y)\\,h$, right $\\approx Q(x+h,y)\\,h$, top $\\approx -P(x,y+h)\\,h$, left $\\approx -Q(x,y)\\,h$. Grouping them:
$$h\\big[Q(x+h,y) - Q(x,y)\\big] - h\\big[P(x,y+h) - P(x,y)\\big] \\approx (Q_x - P_y)\\,h^2,$$
because $Q(x+h,y) - Q(x,y) \\approx Q_x\\,h$ and $P(x,y+h) - P(x,y) \\approx P_y\\,h$.

**Why a gradient gives 0 around a loop.** For a gradient, the integral is $f(\\text{end}) - f(\\text{start})$. A loop ends where it started, so this is $0$. For example, with $f = x^2 y$ around the unit square, it is $f(0,0) - f(0,0) = 0$. So for a gradient every tiny square gives $0$, and $Q_x - P_y$ must be $0$.

This same quantity comes back later as the 2D *curl*, and it's the heart of Green's Theorem (Nov 9).
<<<
:::

:::theorem Cross-partials test (necessary)
If $\\mathbf{F} = \\langle P, Q \\rangle$ is conservative and $P, Q$ have continuous first partial derivatives, then
$$P_y = Q_x.$$
In 3D, for $\\mathbf{F} = \\langle P, Q, R \\rangle$: $\\;P_y = Q_x,\\; P_z = R_x,\\; Q_z = R_y.$

**Why:** if $\\mathbf F = \\nabla f$, then $P = f_x$ and $Q = f_y$, so $P_y = f_{xy}$ and $Q_x = f_{yx}$. Continuous second partials make the mixed partials equal (Clairaut's Theorem, §14.3), so $P_y = Q_x$.
+++
**Why three equations in 3D?** If $\\mathbf{F} = \\nabla f = \\langle f_x, f_y, f_z \\rangle$, each pair of variables gives a pair of mixed partials that must agree: $f_{xy} = f_{yx}$, $f_{xz} = f_{zx}$, $f_{yz} = f_{zy}$. There are three pairs of variables ($x$ and $y$, $x$ and $z$, $y$ and $z$), so there are three equations.

**For example,** $f = xyz$ gives $\\mathbf F = \\langle yz, xz, xy \\rangle$. Then $P_y = z = Q_x$, $P_z = y = R_x$, and $Q_z = x = R_y$. All three match.

**How to use it.** This theorem only ever proves a field is **not** conservative: if any pair differs, you're done. For example, $\\langle y, x, x \\rangle$ has $P_y = 1 = Q_x$, but $P_z = 0$ while $R_x = 1$. That one mismatch is enough to say it is not conservative. If they all match, you need the next theorem to conclude anything.
:::

:::figure rotation-vs-gradient
Left: $\\langle -y, x \\rangle$ has $P_y = -1$ but $Q_x = 1$, so $Q_x - P_y = 2$; its arrows go counterclockwise around the origin. Right: $\\langle x, -y \\rangle = \\nabla\\big(\\tfrac{x^2 - y^2}{2}\\big)$ has $P_y = 0 = Q_x$, so $Q_x - P_y = 0$.
:::

:::check
Which one has $Q_x - P_y \\neq 0$, so it can't be a gradient?
- [ ] $\\langle y, x \\rangle$
  why: $P_y = 1$ and $Q_x = 1$, so $Q_x - P_y = 0$. In fact it's $\\nabla(xy)$.
- [x] $\\langle -y, x \\rangle$
???
$\\langle -y, x \\rangle$: $P_y = -1$ but $Q_x = 1$.

$\\langle y, x \\rangle$ has $P_y = 1 = Q_x$, so $Q_x - P_y = 0$. It's $\\nabla(xy)$.
:::

:::example Spotting a non-conservative field
Is $\\mathbf{F} = \\langle x^2 y,\\; y + 5 \\rangle$ conservative?

$P = x^2 y$, so $P_y = x^2$.

$Q = y + 5$, so $Q_x = 0$.

These differ (except on the line $x = 0$), so $\\mathbf{F}$ is **not** conservative. Done. No line integrals needed.
>>> Each partial derivative, with numbers
1. **$P_y = x^2$.** Moving in the $y$ direction means $x$ does not change. Take $x = 1$: the points $(1, 0)$, $(1, 1)$, $(1, 2)$ give $P = 1^2 \\cdot y = 0, 1, 2$. $P$ goes up by $1$ for each $1$ in $y$, so $P_y = 1 = 1^2$. At $x = 3$, $P = 9y$ goes up by $9$ each time, so $P_y = 9 = 3^2$.
2. **$Q_x = 0$.** $Q = y + 5$ has no $x$ in it. Moving in the $x$ direction, $(0, 2)$, $(1, 2)$, $(2, 2)$ all give $Q = 7$. $Q$ never changes, so $Q_x = 0$.
3. **They differ.** At $(1, 1)$: $P_y = 1$ and $Q_x = 0$. The test needs them equal at every point, so one point where they differ already rules out conservative.

**Why "except on $x = 0$" doesn't save it.** On the line $x = 0$, $P_y = 0 = Q_x$. But a small square around $(1, 1)$ has loop integral about $(Q_x - P_y)\\,h^2 = (0 - 1)\\,h^2 = -h^2$, which is not $0$. A conservative field gives $0$ around every loop, so this field isn't conservative.
<<<

*As a check, OpenStax integrates this field from $(0,0)$ to $(1,1)$ along $y = x$ and along $y = x^2$ and gets $\\tfrac{23}{4}$ and $\\tfrac{57}{10}$: different paths, different answers.*
>>> The two path integrals, step by step
To integrate along a path, describe the path by a moving point $\\mathbf r(t)$, then add up $\\mathbf F \\cdot \\mathbf r'(t)$: the part of $\\mathbf F$ pointing the way the point moves, times its speed.

**Along $y = x$.**
1. **Describe the path.** $\\mathbf r(t) = \\langle t, t \\rangle$ for $0 \\le t \\le 1$. At $t = 0$ it's $(0,0)$ and at $t = 1$ it's $(1,1)$.
2. **The field on the path.** Put $x = t$, $y = t$ into $\\langle x^2 y, y + 5 \\rangle$: $\\mathbf F = \\langle t^3, t + 5 \\rangle$.
3. **The direction of motion.** $\\mathbf r'(t) = \\langle 1, 1 \\rangle$.
4. **Dot product.** $\\mathbf F \\cdot \\mathbf r' = t^3 \\cdot 1 + (t + 5) \\cdot 1 = t^3 + t + 5$.
5. **Integrate.** $\\int_0^1 (t^3 + t + 5)\\,dt = \\tfrac14 + \\tfrac12 + 5 = \\tfrac{23}{4} = 5.75$.

**Along $y = x^2$.**
1. **Describe the path.** $\\mathbf r(t) = \\langle t, t^2 \\rangle$ for $0 \\le t \\le 1$, which also runs from $(0,0)$ to $(1,1)$.
2. **The field on the path.** Put $x = t$, $y = t^2$: $\\mathbf F = \\langle t^2 \\cdot t^2, t^2 + 5 \\rangle = \\langle t^4, t^2 + 5 \\rangle$.
3. **The direction of motion.** $\\mathbf r'(t) = \\langle 1, 2t \\rangle$.
4. **Dot product.** $t^4 + (t^2 + 5)(2t) = t^4 + 2t^3 + 10t$.
5. **Integrate.** $\\int_0^1 (t^4 + 2t^3 + 10t)\\,dt = \\tfrac15 + \\tfrac12 + 5 = \\tfrac{57}{10} = 5.7$.

Same start, same end, but $5.75 \\ne 5.7$. A conservative field would give the same number on both paths.
<<<
:::

:::check
Is $\\mathbf{F} = \\langle 3x^2 y,\\; x^3 + 1 \\rangle$ conservative?
- [x] Yes
- [ ] No
  why: $P_y = 3x^2$ and $Q_x = 3x^2$ match everywhere, and $\\mathbb{R}^2$ has no holes, so the field is conservative.
???
$P_y = 3x^2$ and $Q_x = 3x^2$. They match, and $P, Q$ are polynomials defined on all of $\\mathbb{R}^2$, so **yes** (by the theorem in the next part). A potential is $f = x^3 y + y$.
:::

:::idea Is the condition enough?
Matching cross-partials is *necessary*. When is it also *sufficient*? It depends on the shape of the domain. If the domain is [[simply connected]] (no holes), matching partials guarantee a potential function exists.

**Why no holes is enough.** Take any closed loop and fill the region inside it with a grid of tiny squares of side $h$. Walk each square counterclockwise and add up the results. Every inside edge belongs to two neighboring squares and is walked once in each direction, so those two pieces cancel. What's left is exactly the big loop:
$$\\oint_{\\text{big loop}} \\mathbf F \\cdot d\\mathbf r = \\sum_{\\text{squares}} \\oint_{\\text{square}} \\mathbf F \\cdot d\\mathbf r.$$
>>> The cancelling, with two squares and numbers
Use $\\mathbf F = \\langle -y, x \\rangle$ and the rectangle from $(0,0)$ to $(2,1)$, cut into two unit squares. On each side, add $P \\times$ length walking right, $-P \\times$ length walking left, $Q \\times$ length walking up, and $-Q \\times$ length walking down.

1. **Left square, $0 \\le x \\le 1$.** Bottom $0$, right side ($x = 1$, up) $1$, top ($y = 1$, left) $1$, left side $0$. Total $2$.
2. **Right square, $1 \\le x \\le 2$.** Bottom $0$, right side ($x = 2$, up) $2$, top ($y = 1$, left) $1$, left side ($x = 1$, down) $-1$. Total $2$.
3. **The shared edge** is the line $x = 1$. The left square walks it up and gets $+1$. The right square walks it down and gets $-1$. These cancel.
4. **The big rectangle directly.** Bottom $0$, right side ($x = 2$, up, length $1$) $2$, top ($y = 1$, left, length $2$) $-(-1) \\times 2 = 2$, left side $0$. Total $4$.

And $2 + 2 = 4$: adding the small squares gives exactly the big loop, because the shared edge drops out.
<<<

Each square gives $(Q_x - P_y)\\,h^2$ plus an error much smaller than $h^2$. If $Q_x - P_y = 0$, only the errors are left. There are about $(\\text{area})/h^2$ squares, so the errors add up to (area) times a number that shrinks to $0$ as $h \\to 0$. So the big loop gives exactly $0$.
>>> Why the leftover errors add up to 0
**What "an error much smaller than $h^2$" means.** For a smooth field, each square's loop integral differs from $(Q_x - P_y)\\,h^2$ by at most a fixed number times $h^3$. If $Q_x - P_y = 0$, each square gives at most about $h^3$.

**Count the squares.** A region of area $1$ needs $1 / h^2$ squares of side $h$.

**Multiply.** The total of all the leftovers is at most about $\\tfrac{1}{h^2} \\times h^3 = h$.
- With $h = 0.1$: $100$ squares, each at most about $0.001$, total at most about $0.1$.
- With $h = 0.01$: $10{,}000$ squares, each at most about $0.000001$, total at most about $0.01$.

The big loop's integral is the same number no matter how small you cut the squares. It is smaller than $0.1$, smaller than $0.01$, and smaller than every bound like this. The only number that small is $0$.
<<<

**Why a hole breaks it.** The squares have to cover the whole inside of the loop, and $\\mathbf F$ has to be defined on every one of them. If the loop goes around a hole where $\\mathbf F$ isn't defined, those squares don't exist, and the argument fails. That's exactly what "simply connected" rules out.
>>> A hole, with numbers
Take the swirl field $\\left\\langle \\frac{-y}{x^2+y^2}, \\frac{x}{x^2+y^2} \\right\\rangle$ (studied at the end of this lecture) and the unit circle around the origin. Filling the inside of that circle with squares, one square contains the point $(0, 0)$. There, $x^2 + y^2 = 0$, so $\\mathbf F$ would need dividing by $0$: it has no value at that point. That square's loop integral can't be written as $(Q_x - P_y)\\,h^2$, so the argument has a missing piece exactly at the hole.

A loop that does **not** go around the origin, such as the circle of radius $1$ centered at $(5, 0)$, has no such square: every point inside it has $x^2 + y^2 \\ge 16$. There the argument works and the loop gives $0$.
<<<

**Squares along a curved loop** don't fit its edge exactly, so this is the idea of the proof rather than all of it. The full version is Green's Theorem, which you'll see on Nov 9.
:::

:::theorem Cross-partials test (sufficient)
Let $D$ be an open, simply connected region (connected, with no holes). If $P, Q$ have continuous first partials on $D$ and $P_y = Q_x$ throughout $D$, then $\\mathbf{F}$ is conservative on $D$.

The 3D version is the same with all three equations.

**Why:** with $P_y = Q_x$, every tiny square has loop integral $0$ (up to errors that vanish as $h \\to 0$). With no holes, any closed loop can be filled with tiny squares whose inside edges cancel, so every closed loop gives $0$ ("Is the condition enough?" above). Then $f(x, y) = \\int \\mathbf F \\cdot d\\mathbf r$ from a fixed starting point to $(x, y)$ is the same along every path, and its partials are $f_x = P$ and $f_y = Q$ (Go deeper).
+++
**From "every loop gives 0" to a potential function.** Pick a starting point $(x_0, y_0)$ and define
$$f(x, y) = \\int \\mathbf F \\cdot d\\mathbf r \\quad\\text{along any path from } (x_0, y_0) \\text{ to } (x, y).$$
Every loop giving $0$ means every path gives the same value: two paths with the same ends, one walked backward, form a loop. So $f$ has one value at each point.

**For example,** take $\\mathbf F = \\langle 2xy, x^2 \\rangle$ and start at $(0, 0)$. To get $f(1, 2)$, walk right from $(0,0)$ to $(1,0)$, then up to $(1,2)$.
- Walking right along $y = 0$: $P = 2x \\cdot 0 = 0$, so this part adds $0$.
- Walking up along $x = 1$ for a distance of $2$: $Q = 1^2 = 1$, so this part adds $1 \\times 2 = 2$.

So $f(1, 2) = 2$, which matches $x^2 y = 1 \\cdot 2$.

**Why $f_x = P$.** To reach $(x + h, y)$, go to $(x, y)$ first, then straight right a distance $h$. The two values of $f$ differ only by that last piece, where $\\mathbf r = \\langle x + t, y \\rangle$ and $\\mathbf r' = \\langle 1, 0 \\rangle$:
$$f(x + h, y) - f(x, y) = \\int_0^h P(x + t, y)\\, dt \\approx P(x, y)\\, h.$$
Dividing by $h$ and letting $h \\to 0$ gives $f_x = P$. With the numbers above: $f(1.1, 2) = 1.21 \\cdot 2 = 2.42$, so $\\frac{2.42 - 2}{0.1} = 4.2$, close to $P(1, 2) = 2 \\cdot 1 \\cdot 2 = 4$. Going straight up instead gives $f_y = Q$. So $\\nabla f = \\mathbf F$.
:::

:::check
Which of these regions are simply connected?
- [x] The whole plane
  why: It's simply connected: there are no holes, so any closed loop in it can be shrunk continuously to a single point without leaving the plane.
- [x] A disk
  why: It's simply connected: a disk is one piece with no holes.
- [ ] The plane minus the origin
  why: Not simply connected: a loop around the origin can't be shrunk to a point without passing through the origin, which isn't in the region.
- [ ] A ring (annulus)
  why: Not simply connected: a loop around the inner disk can't be shrunk to a point without passing through the inner disk, which isn't in the region.
???
**The whole plane and the disk** are. The other two each have a hole, so a loop around the hole can't be shrunk to a point without leaving the region.
:::

:::idea Finding the potential function
Once you know $\\mathbf{F}$ is conservative, build $f$ one variable at a time.

1. Integrate $P$ with respect to $x$. The "constant" of integration can depend on $y$: write $f = g(x,y) + h(y)$.
>>> Why the "constant" can be a function of $y$
**What $f_x$ ignores.** $f_x$ is how fast $f$ changes as $x$ moves, with $y$ the same. A term with only $y$ in it, such as $y^3$, has the same value at $(0, 2)$, $(1, 2)$, and $(5, 2)$: it is $8$ at all three. So it doesn't change as $x$ moves, and its $x$-derivative is $0$.

**For example,** $x^2 y + x$ and $x^2 y + x + y^3$ both have $x$-derivative $2xy + 1$. Knowing only $P = 2xy + 1$, you can't tell them apart. So integrating $P$ in $x$ gives $x^2 y + x$ plus some unknown $h(y)$, and step 2 uses $Q$ to find out what $h(y)$ is.
<<<
2. Differentiate that with respect to $y$ and set it equal to $Q$.
3. Solve for $h'(y)$. It must not have any $x$ in it. If it does, either you made a mistake or $\\mathbf F$ isn't conservative.
>>> What an $x$ in $h'(y)$ looks like, for $\\mathbf F = \\langle y, x^2 \\rangle$
1. **Step 1.** Integrate $P = y$ in $x$. The $y$ acts like a number while $x$ moves, so $f = xy + h(y)$.
2. **Step 2.** Differentiate in $y$: $f_y = x + h'(y)$. Set it equal to $Q = x^2$: $x + h'(y) = x^2$.
3. **Step 3.** $h'(y) = x^2 - x$.

**Why that's impossible.** $h$ is a function of $y$ alone, so at $y = 1$, $h'(1)$ is one number. But $x^2 - x$ is $0$ at the point $(0, 1)$ and $2$ at the point $(2, 1)$. The same $y = 1$ would need two different values. No $h(y)$ can do that, so there is no potential function. The cross-partials agree: $P_y = 1$ but $Q_x = 2x$.
<<<
4. Integrate to get $h(y)$, and assemble $f$.
5. Check: $\\nabla f$ should give back $\\mathbf{F}$.
:::

:::check
Find a potential function for $\\mathbf{F} = \\langle 2xy + 1,\\; x^2 \\rangle$.
answer-up-to-constant: x^2 y + x
???
Integrate $P$ in $x$: $f = x^2 y + x + h(y)$. Then $f_y = x^2 + h'(y) = x^2$, so $h' = 0$. A potential is $f = x^2 y + x$.
:::

:::example Finding f, start to finish
$\\mathbf{F} = \\langle e^x \\cos y + 2x,\\; -e^x \\sin y + 3y^2 \\rangle$.

**Test.** $P_y = -e^x \\sin y$ and $Q_x = -e^x \\sin y$. They match on all of $\\mathbb{R}^2$, so $\\mathbf{F}$ is conservative.
>>> The two partial derivatives, term by term
1. **$P_y$.** $P = e^x \\cos y + 2x$. Moving in the $y$ direction, $e^x$ doesn't change, so it acts like a number in front of $\\cos y$. The derivative of $\\cos y$ is $-\\sin y$, giving $-e^x \\sin y$. The term $2x$ has no $y$, so its $y$-derivative is $0$. Total: $P_y = -e^x \\sin y$.
2. **$Q_x$.** $Q = -e^x \\sin y + 3y^2$. Moving in the $x$ direction, $-\\sin y$ doesn't change, and the derivative of $e^x$ is $e^x$, giving $-e^x \\sin y$. The term $3y^2$ has no $x$, so it gives $0$. Total: $Q_x = -e^x \\sin y$.
3. **Check at a point.** At $(0, \\tfrac{\\pi}{2})$, both are $-e^0 \\sin\\tfrac{\\pi}{2} = -1$.

**Why "all of $\\mathbb R^2$" matters.** $e^x$, $\\sin y$, $\\cos y$, and polynomials have a value at every point, so the domain has no holes. Matching partials on a domain with no holes guarantees a potential function.
<<<

**Step 1.** $f = \\int (e^x \\cos y + 2x)\\,dx = e^x \\cos y + x^2 + h(y)$.
>>> Integrating in $x$ when there's a $y$ in it
While integrating in $x$, $y$ doesn't change, so $\\cos y$ is one number. For example, at $y = 0$ the integrand is $e^x \\cdot 1 + 2x$, and at $y = \\pi$ it is $e^x \\cdot (-1) + 2x$.

1. **$\\int e^x \\cos y\\,dx$.** A number times $e^x$ integrates to that number times $e^x$, so this is $e^x \\cos y$. Check: the $x$-derivative of $e^x \\cos y$ is $e^x \\cos y$. ✓
2. **$\\int 2x\\,dx = x^2$.**
3. **The unknown part.** Anything with only $y$ in it has $x$-derivative $0$, so add $h(y)$, to be found in Step 2.
<<<

**Step 2.** $f_y = -e^x \\sin y + h'(y)$. Set equal to $Q$: $-e^x \\sin y + h'(y) = -e^x \\sin y + 3y^2$.

**Step 3.** $h'(y) = 3y^2$. No $x$ in it, which is good.
>>> Why we set $f_y$ equal to $Q$
**The goal.** We want $\\nabla f = \\mathbf F$, which means two things: $f_x = P$ and $f_y = Q$. Step 1 made sure $f_x = P$, whatever $h(y)$ is. Step 2 picks $h(y)$ so that $f_y = Q$ too.

1. **Differentiate $f = e^x \\cos y + x^2 + h(y)$ in $y$.** $e^x \\cos y$ gives $-e^x \\sin y$; $x^2$ has no $y$, so it gives $0$; $h(y)$ gives $h'(y)$.
2. **Set equal to $Q$.** $-e^x \\sin y + h'(y) = -e^x \\sin y + 3y^2$.
3. **Cancel.** Both sides have $-e^x \\sin y$, so subtract it: $h'(y) = 3y^2$.

**Why "no $x$" is good.** $h$ depends only on $y$, so $h'(y)$ can't contain $x$. Here it doesn't: at $y = 1$, $h'(1) = 3$ at every point $(0, 1)$, $(2, 1)$, $(5, 1)$. So a matching $h$ exists.
<<<

**Step 4.** $h(y) = y^3$, so
$$f(x,y) = e^x \\cos y + x^2 + y^3.$$

**Step 5.** $\\nabla f = \\langle e^x \\cos y + 2x,\\; -e^x \\sin y + 3y^2 \\rangle = \\mathbf{F}$. ✓
>>> The final check, at a point
**Why check.** A sign slip in any step gives a wrong $f$, and differentiating it back catches that.

$f_x = e^x \\cos y + 2x$ and $f_y = -e^x \\sin y + 3y^2$, the two parts of $\\mathbf F$. With numbers at $(0, 0)$: $f_x = 1 \\cdot 1 + 0 = 1$ and $P(0, 0) = 1$; $f_y = -1 \\cdot 0 + 0 = 0$ and $Q(0, 0) = 0$. ✓
<<<
:::

:::example Now the payoff
Compute $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ for the same $\\mathbf{F}$, where $C$ is *any* path from $(0,0)$ to $(1, \\pi)$.

By the Fundamental Theorem for Line Integrals:
$$f(1,\\pi) - f(0,0) = \\big(e\\cos\\pi + 1 + \\pi^3\\big) - \\big(1 + 0 + 0\\big) = \\pi^3 - e.$$
>>> Each value of $f$, and why only the endpoints matter
**Plug in the end point $(1, \\pi)$** into $f = e^x \\cos y + x^2 + y^3$: $e^1 \\cos \\pi = -e$ (since $\\cos \\pi = -1$), $1^2 = 1$, and $\\pi^3$. So $f(1, \\pi) = -e + 1 + \\pi^3$.

**Plug in the start point $(0, 0)$:** $e^0 \\cos 0 = 1$, $0^2 = 0$, $0^3 = 0$. So $f(0, 0) = 1$.

**Subtract.** $(-e + 1 + \\pi^3) - 1 = \\pi^3 - e \\approx 31.006 - 2.718 = 28.288$.

**Why only the endpoints matter.** Over a tiny step $d\\mathbf r = \\langle dx, dy \\rangle$, $f$ changes by about $f_x\\,dx + f_y\\,dy = \\mathbf F \\cdot d\\mathbf r$. For example, stepping from $(0, 0)$ to $(0.1, 0)$: $f$ goes from $1$ to $e^{0.1} + 0.01 \\approx 1.1152$, a change of $0.1152$. And $\\mathbf F \\cdot d\\mathbf r$ at the midpoint $(0.05, 0)$ is $(e^{0.05} + 0.1) \\times 0.1 \\approx 0.1151$. Adding these changes along the whole path gives the total change in $f$: end value minus start value.
<<<

No parametrizing, and the path doesn't even need to be specified.
>>> What you saved
Doing it directly along the straight line $\\mathbf{r}(t) = \\langle t, \\pi t \\rangle$ means integrating
$$\\int_0^1 \\Big[e^t \\cos(\\pi t) + 2t + \\pi\\big({-e^t}\\sin(\\pi t) + 3\\pi^2 t^2\\big)\\Big]\\,dt.$$
That comes from putting $x = t$, $y = \\pi t$ into $\\mathbf F$ and dotting with $\\mathbf r' = \\langle 1, \\pi \\rangle$. The $e^t\\cos(\\pi t)$ and $e^t\\sin(\\pi t)$ terms each need integration by parts twice. The answer is the same, $\\pi^3 - e \\approx 28.29$, but with far more work and more chances for mistakes.
<<<
:::

:::check
Find $\\int_C \\langle 2xy,\\; x^2 \\rangle \\cdot d\\mathbf{r}$ along any path from $(0,0)$ to $(1,2)$.
answer: 2
???
$P_y = 2x = Q_x$, so it's conservative, with $f = x^2 y$. The integral is $f(1,2) - f(0,0) = 2 - 0 = 2$.
:::

:::example The same idea in 3D
$\\mathbf{F} = \\langle 2xy,\\; x^2 + 2yz^3,\\; 3y^2 z^2 + 2z \\rangle$. (Example from OpenStax.)

**Check it first.** $P_y = 2x = Q_x$, $P_z = 0 = R_x$, and $Q_z = 6yz^2 = R_y$. All three match on all of $\\mathbb{R}^3$, so a potential function is guaranteed.

Integrate $P$ in $x$: $f = x^2 y + g(y,z)$.
>>> Why the unknown part is $g(y, z)$ this time
In 3D, a term with no $x$ in it can still have both $y$ and $z$. For example, $y^2 z^3$ is $8$ at $(0, 2, 1)$ and at $(7, 2, 1)$: changing $x$ doesn't change it. So its $x$-derivative is $0$, and integrating $P = 2xy$ in $x$ gives $x^2 y$ plus an unknown $g(y, z)$.
<<<

Match $Q$: $x^2 + g_y = x^2 + 2yz^3$, so $g = y^2 z^3 + h(z)$.
>>> Matching $Q$, step by step
1. **Differentiate $f = x^2 y + g(y, z)$ in $y$.** $x^2 y$ gives $x^2$, and $g$ gives $g_y$.
2. **Set equal to $Q$.** $x^2 + g_y = x^2 + 2yz^3$, so $g_y = 2yz^3$.
3. **Integrate in $y$.** $z$ doesn't change while $y$ moves, so $z^3$ is one number. For example, at $z = 2$, $g_y = 16y$, which integrates to $8y^2 = y^2 \\cdot 2^3$. In general, $g = y^2 z^3 + h(z)$.
4. **Why $h(z)$.** A term with only $z$ has $y$-derivative $0$, so it can't be seen from $Q$. The third component, $R$, will find it.
<<<

Match $R$: $3y^2 z^2 + h'(z) = 3y^2 z^2 + 2z$, so $h = z^2$.
>>> Matching $R$, and checking the answer
1. **Differentiate $f = x^2 y + y^2 z^3 + h(z)$ in $z$.** $x^2 y$ has no $z$, so it gives $0$. $y^2 z^3$ gives $3y^2 z^2$. $h(z)$ gives $h'(z)$.
2. **Set equal to $R$.** $3y^2 z^2 + h'(z) = 3y^2 z^2 + 2z$, so $h'(z) = 2z$ and $h = z^2$.
3. **Check at $(1, 1, 1)$.** $\\nabla f = \\langle 2xy,\\; x^2 + 2yz^3,\\; 3y^2 z^2 + 2z \\rangle = \\langle 2, 3, 5 \\rangle$, and $\\mathbf F(1, 1, 1) = \\langle 2, 1 + 2, 3 + 2 \\rangle = \\langle 2, 3, 5 \\rangle$. ✓

**The pattern.** Each step, the unknown part depends on one fewer variable: first $g(y,z)$, then $h(z)$, then a true constant. You use one component of $\\mathbf{F}$ per variable to find it.
<<<

$$f = x^2 y + y^2 z^3 + z^2.$$
:::

:::check
Guess a potential function for $\\mathbf{F} = \\langle yz,\\; xz,\\; xy \\rangle$.
answer-up-to-constant: xyz
???
$f = xyz$. Check: $f_x = yz$, $f_y = xz$, $f_z = xy$. ✓
:::

:::idea Why holes matter
Here is a field that passes the cross-partials test but is **not** conservative:
$$\\mathbf{F} = \\left\\langle \\frac{-y}{x^2+y^2},\\; \\frac{x}{x^2+y^2} \\right\\rangle.$$

**Test.** Both $P_y$ and $Q_x$ come out to $\\dfrac{y^2 - x^2}{(x^2+y^2)^2}$. They match.
>>> Both partial derivatives, with the quotient rule
The quotient rule: the derivative of $\\frac{u}{v}$ is $\\frac{u'v - uv'}{v^2}$.

1. **$P_y$.** $P = \\frac{-y}{x^2 + y^2}$. Differentiating in $y$: $u = -y$, $u' = -1$, $v = x^2 + y^2$, $v' = 2y$. So
$$P_y = \\frac{-(x^2 + y^2) - (-y)(2y)}{(x^2+y^2)^2} = \\frac{-x^2 - y^2 + 2y^2}{(x^2+y^2)^2} = \\frac{y^2 - x^2}{(x^2+y^2)^2}.$$
2. **$Q_x$.** $Q = \\frac{x}{x^2 + y^2}$. Differentiating in $x$: $u = x$, $u' = 1$, $v' = 2x$. So
$$Q_x = \\frac{(x^2 + y^2) - x(2x)}{(x^2+y^2)^2} = \\frac{y^2 - x^2}{(x^2+y^2)^2}.$$
3. **Check at $(1, 2)$.** Both are $\\frac{4 - 1}{5^2} = \\frac{3}{25} = 0.12$.
<<<

**But** go once around the unit circle $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le 2\\pi$. On the circle, $\\mathbf{F} = \\langle -\\sin t, \\cos t \\rangle = \\mathbf{r}'(t)$, so $\\mathbf{F} \\cdot \\mathbf{r}' = 1$ and
$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_0^{2\\pi} 1\\,dt = 2\\pi \\neq 0.$$
A conservative field gives $0$ around every [[closed curve]], so this one isn't conservative.
>>> The loop integral, step by step
1. **The field on the circle.** On the unit circle, $x = \\cos t$ and $y = \\sin t$, so $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$. The fractions divide by $1$, leaving $\\mathbf F = \\langle -\\sin t, \\cos t \\rangle$.
2. **The direction of motion.** $\\mathbf r'(t) = \\langle -\\sin t, \\cos t \\rangle$, the same vector.
3. **Dot product.** $(-\\sin t)(-\\sin t) + (\\cos t)(\\cos t) = \\sin^2 t + \\cos^2 t = 1$.
4. **With numbers.** At $t = \\tfrac{\\pi}{2}$ the point is $(0, 1)$. There $\\mathbf F = \\langle -1, 0 \\rangle$ and $\\mathbf r' = \\langle -1, 0 \\rangle$, so the dot product is $1$.
5. **Integrate.** Adding $1$ for every bit of $t$ from $0$ to $2\\pi$ gives $2\\pi \\approx 6.28$, not $0$.
<<<

**What went wrong?** The field isn't defined at the origin, so its domain has a hole and the sufficient test doesn't apply.

**Why there's no potential function.** Near any point, this field *is* a gradient: it's the gradient of the polar angle $\\theta$. But following $\\theta$ continuously once around the origin, it increases by $2\\pi$, so at the starting point it would need to equal both $\\theta_0$ and $\\theta_0 + 2\\pi$. No single function $f$ can do that on the whole plane minus the origin, so there's no potential function there, and the loop integral comes out to $2\\pi$ instead of $0$.
>>> The angle $\\theta$, and why it can't come back to the same value
**Checking that $\\mathbf F = \\nabla\\theta$.** In the right half-plane ($x > 0$), $\\theta = \\arctan(y/x)$. Then
$$\\theta_x = \\frac{1}{1 + y^2/x^2}\\cdot\\left(-\\frac{y}{x^2}\\right) = \\frac{-y}{x^2+y^2}, \\qquad \\theta_y = \\frac{1}{1 + y^2/x^2}\\cdot\\frac{1}{x} = \\frac{x}{x^2+y^2}.$$
That's exactly $\\langle P, Q \\rangle$. For example, at $(1, 1)$: $\\theta_x = -\\tfrac12 = P(1,1)$ and $\\theta_y = \\tfrac12 = Q(1,1)$.

**Following $\\theta$ around the circle.** Start at $(1, 0)$ with $\\theta = 0$, and walk counterclockwise. At $(0, 1)$, $\\theta = \\tfrac{\\pi}{2}$. At $(-1, 0)$, $\\theta = \\pi$. At $(0, -1)$, $\\theta = \\tfrac{3\\pi}{2}$. Back at $(1, 0)$, it has grown to $2\\pi$. A potential function would need one value at $(1, 0)$, but following it around gives both $0$ and $2\\pi$. The difference, $2\\pi$, is exactly the loop integral.

**Which loops give what.** A closed loop that doesn't go around the origin gives $0$, since $\\theta$ comes back to the value it started with. A loop that goes around the origin once counterclockwise gives $2\\pi$, and $n$ times gives $2\\pi n$. The integral counts how many times you go around the hole.
<<<
:::

:::figure swirl
The swirl field $\\langle -y, x \\rangle / (x^2+y^2)$ with the unit circle. The field always pushes along the circle, so going around it you gain $2\\pi$ instead of $0$.
:::

:::check
A field $\\mathbf{F}$ satisfies $P_y = Q_x$ everywhere except at the origin, where it is undefined. Can you conclude that $\\mathbf{F}$ is conservative on $\\mathbb{R}^2$ minus the origin?
- [ ] Yes
  why: Matching cross-partials only prove conservative on a region with no holes. The swirl field matches them here and still isn't conservative.
- [x] No
???
**No.** That domain has a hole, so it isn't simply connected, and the sufficient test doesn't apply. The swirl field above is exactly this situation. (On a smaller region with no hole, such as the right half-plane $x > 0$, you *could* conclude it.)
:::

:::check
For the swirl field, what is $\\oint_C \\mathbf{F}\\cdot d\\mathbf{r}$ counterclockwise around (a) the circle of radius 3 centered at the origin, and (b) the circle of radius 1 centered at $(5, 0)$?
- [ ] (a) $6\\pi$, (b) $0$
  why: The radius doesn't matter. On a circle of radius $r$, $\\mathbf F \\cdot \\mathbf r' = 1$ still, so one trip around gives $2\\pi$, not $2\\pi r$.
- [x] (a) $2\\pi$, (b) $0$
- [ ] (a) $2\\pi$, (b) $2\\pi$
  why: The circle centered at $(5, 0)$ doesn't go around the origin, so it doesn't get the extra $2\\pi$. It gives $0$.
- [ ] (a) $0$, (b) $0$
  why: The radius-3 circle *does* go around the hole, where the field isn't conservative, so it gives $2\\pi$.
???
(a) $2\\pi$. It goes around the hole once, and the radius doesn't matter.

(b) $0$. That circle doesn't go around the origin, and on a region without the hole the field is conservative.
:::

:::check
Is $\\mathbf{F} = \\langle y,\\; x^2 \\rangle$ conservative?
- [ ] Yes
  why: $P_y = 1$ but $Q_x = 2x$. They agree only on the line $x = \\tfrac12$, not everywhere, so the test fails.
- [x] No
???
$P_y = 1$ but $Q_x = 2x$. These aren't equal everywhere, so **no**.
:::

:::summary Summary
**Workflow for $\\int_C \\mathbf{F}\\cdot d\\mathbf{r}$:**

1. Compute the [[cross-partials]] ($P_y$ vs $Q_x$; in 3D all three pairs).
2. If they **differ**: not conservative. Parametrize and integrate directly.
3. If they **match and the domain has no holes**: conservative. Find $f$ by integrating one variable at a time, then use $f(B) - f(A)$.
4. If they match but the domain **has a hole**: be careful. Test a loop around the hole.

**Common mistakes:**
- Treating $h(y)$ as a plain constant. It can depend on the other variables.
- Using the test on a domain with a hole.
- Forgetting to check $\\nabla f = \\mathbf{F}$ at the end.
:::
`;export{e as default};