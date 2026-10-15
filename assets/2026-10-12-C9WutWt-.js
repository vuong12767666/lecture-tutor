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

**Intuition.** $P_y$ measures how the horizontal push changes as you move up. $Q_x$ measures how the vertical push changes as you move right. If they don't match, the field has a **twist**, meaning it tends to spin you around. Walk around a small loop and the field helps you more on one side than it pushes back on the other side, so you come out ahead. A gradient field can't do that, because going around a loop brings you back to the same height.
+++
**Where the twist number comes from.** Walk counterclockwise around a tiny square with corner $(x,y)$ and side $h$, adding up $\\mathbf{F}\\cdot d\\mathbf{r}$ on each side:

- bottom (moving right): about $P(x,y)\\,h$
- right side (moving up): about $Q(x+h,y)\\,h$
- top (moving left): about $-P(x,y+h)\\,h$
- left side (moving down): about $-Q(x,y)\\,h$

Add them and group:
$$h\\big[Q(x+h,y) - Q(x,y)\\big] - h\\big[P(x,y+h) - P(x,y)\\big] \\approx (Q_x - P_y)\\,h^2.$$

So $Q_x - P_y$ is the **circulation per unit area**: how much the field pushes you around a tiny loop. For a gradient field, any closed loop gives $f(\\text{start}) - f(\\text{start}) = 0$, so $Q_x - P_y$ has to be $0$.

This same quantity comes back later as the 2D *curl*, and it's the heart of Green's Theorem (Nov 9).
:::

:::theorem Cross-partials test (necessary)
If $\\mathbf{F} = \\langle P, Q \\rangle$ is conservative and $P, Q$ have continuous first partial derivatives, then
$$P_y = Q_x.$$
In 3D, for $\\mathbf{F} = \\langle P, Q, R \\rangle$: $\\;P_y = Q_x,\\; P_z = R_x,\\; Q_z = R_y.$
+++
**Why three equations in 3D?** If $\\mathbf{F} = \\nabla f = \\langle f_x, f_y, f_z \\rangle$, each pair of variables gives a pair of mixed partials that must agree: $f_{xy} = f_{yx}$, $f_{xz} = f_{zx}$, $f_{yz} = f_{zy}$. That's one equation for each of the three coordinate planes, meaning no twist when viewed from any direction.

**How to use it.** This theorem only ever proves a field is **not** conservative: if any pair differs, you're done. If they all match, you need the next theorem to conclude anything.
:::

:::figure rotation-vs-gradient
Left: $\\langle -y, x \\rangle$ has $P_y = -1$ but $Q_x = 1$. You can see it swirl around the origin. Right: $\\langle x, -y \\rangle = \\nabla\\big(\\tfrac{x^2 - y^2}{2}\\big)$ has $P_y = 0 = Q_x$. No twist.
:::

:::check
Which one has a twist (swirls, so $P_y \\neq Q_x$)?
- [ ] $\\langle y, x \\rangle$
  why: $P_y = 1$ and $Q_x = 1$ match, so there's no twist. In fact it's $\\nabla(xy)$.
- [x] $\\langle -y, x \\rangle$
???
$\\langle -y, x \\rangle$: $P_y = -1$ but $Q_x = 1$.

$\\langle y, x \\rangle$ has $P_y = 1 = Q_x$, so no twist. It's $\\nabla(xy)$.
:::

:::example Spotting a non-conservative field
Is $\\mathbf{F} = \\langle x^2 y,\\; y + 5 \\rangle$ conservative?

$P = x^2 y$, so $P_y = x^2$.

$Q = y + 5$, so $Q_x = 0$.

These differ (except on the line $x = 0$), so $\\mathbf{F}$ is **not** conservative. Done. No line integrals needed.

*As a check, OpenStax integrates this field from $(0,0)$ to $(1,1)$ along $y = x$ and along $y = x^2$ and gets $\\tfrac{23}{4}$ and $\\tfrac{57}{10}$: different paths, different answers.*
+++
**Why "except on $x = 0$" doesn't save it.** The test needs $P_y = Q_x$ *throughout* the region. Agreeing on one line isn't enough: a small loop anywhere off that line already gives a nonzero integral.

**The path check in detail.** Along $y = x$, use $\\mathbf{r}(t) = \\langle t, t \\rangle$, so $\\mathbf{F} = \\langle t^3, t + 5 \\rangle$ and $\\mathbf{r}' = \\langle 1, 1 \\rangle$:
$$\\int_0^1 (t^3 + t + 5)\\,dt = \\tfrac14 + \\tfrac12 + 5 = \\tfrac{23}{4}.$$
Along $y = x^2$, use $\\mathbf{r}(t) = \\langle t, t^2 \\rangle$, so $\\mathbf{F} = \\langle t^4, t^2 + 5 \\rangle$ and $\\mathbf{r}' = \\langle 1, 2t \\rangle$:
$$\\int_0^1 (t^4 + 2t^3 + 10t)\\,dt = \\tfrac15 + \\tfrac12 + 5 = \\tfrac{57}{10}.$$
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
+++
**Why holes are the only obstacle.** Think about the tiny squares from the first part. A big loop can be filled in with tiny squares: their inside edges cancel (each is walked once in each direction), leaving just the big loop. If $Q_x - P_y = 0$ everywhere inside, every tiny square contributes $0$, so the big loop gives $0$.

That argument needs the **whole inside** of the loop to be in the domain. If the loop surrounds a hole, you can't fill it in, and the argument breaks. That's exactly what "simply connected" rules out.

This "fill the loop with tiny squares" argument is Green's Theorem, which you'll see on Nov 9.
:::

:::theorem Cross-partials test (sufficient)
Let $D$ be an open, simply connected region (connected, with no holes). If $P, Q$ have continuous first partials on $D$ and $P_y = Q_x$ throughout $D$, then $\\mathbf{F}$ is conservative on $D$.

The 3D version is the same with all three equations.
:::

:::check
Which of these regions are simply connected?
- [x] The whole plane
  why: It's simply connected: there are no holes, so any loop drawn in it can be pulled tight into a single point, like a rubber band.
- [x] A disk
  why: It's simply connected: a disk is one piece with no holes.
- [ ] The plane minus the origin
  why: Not simply connected: a rubber-band loop around the origin can't be pulled tight into a point without crossing the missing point.
- [ ] A ring (annulus)
  why: Not simply connected: the inner disk is a hole, and a loop around it can't be pulled tight without crossing the hole.
???
**The whole plane and the disk** are. The other two each have a hole, so a loop around the hole can't be pulled tight into a point.
:::

:::idea Finding the potential function
Once you know $\\mathbf{F}$ is conservative, build $f$ one variable at a time.

1. Integrate $P$ with respect to $x$. The "constant" of integration can depend on $y$: write $f = g(x,y) + h(y)$.
2. Differentiate that with respect to $y$ and set it equal to $Q$.
3. Solve for $h'(y)$. It must not have any $x$ in it. If it does, either you made a mistake or $\\mathbf F$ isn't conservative.
4. Integrate to get $h(y)$, and assemble $f$.
5. Check: $\\nabla f$ should give back $\\mathbf{F}$.
+++
**Why the "constant" is a function of $y$.** When you take $\\partial/\\partial x$, anything that only involves $y$ disappears, just like a constant. So integrating with respect to $x$ can only recover $f$ up to some unknown function of $y$. Step 2 uses $Q$ to pin it down.

**What happens if the field isn't conservative?** Try $\\mathbf{F} = \\langle y, x^2 \\rangle$. Step 1: $f = xy + h(y)$. Step 2: $f_y = x + h'(y)$, which should equal $x^2$. So $h'(y) = x^2 - x$. But $h$ is supposed to depend only on $y$, and this has $x$ in it: a contradiction. That's the method telling you no potential function exists (and indeed $P_y = 1 \\neq 2x = Q_x$).
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

**Step 1.** $f = \\int (e^x \\cos y + 2x)\\,dx = e^x \\cos y + x^2 + h(y)$.

**Step 2.** $f_y = -e^x \\sin y + h'(y)$. Set equal to $Q$: $-e^x \\sin y + h'(y) = -e^x \\sin y + 3y^2$.

**Step 3.** $h'(y) = 3y^2$. No $x$ in it, which is good.

**Step 4.** $h(y) = y^3$, so
$$f(x,y) = e^x \\cos y + x^2 + y^3.$$

**Step 5.** $\\nabla f = \\langle e^x \\cos y + 2x,\\; -e^x \\sin y + 3y^2 \\rangle = \\mathbf{F}$. ✓
:::

:::example Now the payoff
Compute $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ for the same $\\mathbf{F}$, where $C$ is *any* path from $(0,0)$ to $(1, \\pi)$.

By the Fundamental Theorem for Line Integrals:
$$f(1,\\pi) - f(0,0) = \\big(e\\cos\\pi + 1 + \\pi^3\\big) - \\big(1 + 0 + 0\\big) = \\pi^3 - e.$$

No parametrizing, and the path doesn't even need to be specified.
+++
**What you saved.** Doing it directly along the straight line $\\mathbf{r}(t) = \\langle t, \\pi t \\rangle$ means integrating
$$\\int_0^1 \\Big[e^t \\cos(\\pi t) + 2t + \\pi\\big({-e^t}\\sin(\\pi t) + 3\\pi^2 t^2\\big)\\Big]\\,dt,$$
which needs integration by parts twice for the $e^t\\cos(\\pi t)$ and $e^t\\sin(\\pi t)$ terms. Same answer, $\\pi^3 - e \\approx 28.29$, with far more work and more chances for mistakes.
:::

:::check
Find $\\int_C \\langle 2xy,\\; x^2 \\rangle \\cdot d\\mathbf{r}$ along any path from $(0,0)$ to $(1,2)$.
answer: 2
???
$P_y = 2x = Q_x$, so it's conservative, with $f = x^2 y$. The integral is $f(1,2) - f(0,0) = 2 - 0 = 2$.
:::

:::example The same idea in 3D
$\\mathbf{F} = \\langle 2xy,\\; x^2 + 2yz^3,\\; 3y^2 z^2 + 2z \\rangle$. (Example from OpenStax.)

Integrate $P$ in $x$: $f = x^2 y + g(y,z)$.

Match $Q$: $x^2 + g_y = x^2 + 2yz^3$, so $g = y^2 z^3 + h(z)$.

Match $R$: $3y^2 z^2 + h'(z) = 3y^2 z^2 + 2z$, so $h = z^2$.

$$f = x^2 y + y^2 z^3 + z^2.$$
+++
**The pattern.** Each step, the unknown "constant" depends on one fewer variable: first $g(y,z)$, then $h(z)$, then a true constant. You use one component of $\\mathbf{F}$ per variable to pin it down.

**Check it first.** Before integrating, the 3D test: $P_y = 2x = Q_x$, $P_z = 0 = R_x$, and $Q_z = 6yz^2 = R_y$. All three match on all of $\\mathbb{R}^3$, so a potential function is guaranteed.
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

**But** go once around the unit circle $\\mathbf{r}(t) = \\langle \\cos t, \\sin t \\rangle$, $0 \\le t \\le 2\\pi$. On the circle, $\\mathbf{F} = \\langle -\\sin t, \\cos t \\rangle = \\mathbf{r}'(t)$, so $\\mathbf{F} \\cdot \\mathbf{r}' = 1$ and
$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_0^{2\\pi} 1\\,dt = 2\\pi \\neq 0.$$
A conservative field gives $0$ around every [[closed curve]], so this one isn't conservative.

**What went wrong?** The field isn't defined at the origin, so its domain has a hole and the sufficient test doesn't apply.

**Intuition.** Near any point, this field *is* a gradient: it's the gradient of the polar angle $\\theta$. But going once around the origin, $\\theta$ increases by $2\\pi$ and doesn't come back to where it started. It's like a spiral staircase: every step goes up, yet you return to the same spot on the floor plan. No single height function works all the way around.
+++
**Checking that it's the gradient of $\\theta$.** In the right half-plane, $\\theta = \\arctan(y/x)$. Then
$$\\theta_x = \\frac{1}{1 + y^2/x^2}\\cdot\\left(-\\frac{y}{x^2}\\right) = \\frac{-y}{x^2+y^2}, \\qquad \\theta_y = \\frac{1}{1 + y^2/x^2}\\cdot\\frac{1}{x} = \\frac{x}{x^2+y^2}.$$
That's exactly $\\langle P, Q \\rangle$. So on the right half-plane, which has no hole, $\\mathbf{F}$ **is** conservative with potential $\\arctan(y/x)$.

**Which loops give what.** A closed loop that doesn't go around the origin gives $0$, since you can pull it tight into a point without crossing the hole. A loop that goes around the origin once counterclockwise gives $2\\pi$, and $n$ times gives $2\\pi n$. The integral counts how many times you wind around the hole.
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