var e=`---
title: Local min and max
date: 2026-09-25
stewart: 14.7
source: OpenStax Calculus Volume 3, §4.7 Maxima/Minima Problems
---

:::recap Last time
A [[critical point]] is where $\\nabla f = \\mathbf 0$ (or a partial derivative doesn't exist). Local maxima and minima can only happen there, but some critical points are saddles.
:::

:::check
Warm-up: $f = x^2 - y^2$ has a critical point at $(0, 0)$. What kind is it?
- [ ] local max
  why: Along the $x$-axis, $f = x^2 > 0 = f(0,0)$ at nearby points, so $(0,0)$ isn't the highest nearby.
- [ ] local min
  why: Along the $y$-axis, $f = -y^2 < 0 = f(0,0)$ at nearby points, so $(0,0)$ isn't the lowest nearby.
- [x] neither: a saddle point
???
Along the $x$-axis $f = x^2$ goes **up**, and along the $y$-axis $f = -y^2$ goes **down**. So $(0,0)$ is neither a max nor a min: a saddle.
:::

:::question Today
Once you've found a critical point, how can you tell whether it's a local max, a local min, or a saddle, without graphing?
:::

:::idea Critical points
A function has a **local max** at $(a,b)$ if $f(a,b) \\ge f(x,y)$ for all nearby points (local min: $\\le$). A **saddle point** is a critical point that's neither.

**Why extremes happen only at critical points** (shown on Sep 21): at a local max or min inside the domain, moving in any direction can't increase (or can't decrease) $f$, so every directional derivative $\\nabla f \\cdot \\mathbf u$ must be $0$, and that forces $\\nabla f = \\mathbf 0$.

**Finding critical points** means solving $f_x = 0$ and $f_y = 0$ *together*. This is usually the hardest algebra in the problem. A good habit is to solve one equation for one variable, substitute into the other, and don't divide by something that could be zero.
+++
**Critical points where a derivative doesn't exist.** The cone $f = \\sqrt{x^2 + y^2}$ has its minimum at the origin, where it comes to a sharp point and the partial derivatives don't exist. It's still a critical point, and it's a min. Most exam problems use smooth functions, though, so you'll mostly be solving $\\nabla f = \\mathbf 0$.

**Watch for lost solutions.** If you get $x^4 = x$, don't divide by $x$. Write $x(x^3 - 1) = 0$, so $x = 0$ or $x = 1$. Dividing would lose $x = 0$.
:::

:::example Finding critical points
Find the critical points of $f = x^3 + y^3 - 3xy$.

$f_x = 3x^2 - 3y = 0$ gives $y = x^2$.

$f_y = 3y^2 - 3x = 0$ gives $x = y^2$.

Substitute: $x = (x^2)^2 = x^4$, so $x(x^3 - 1) = 0$, which means $x = 0$ or $x = 1$. Then $y = x^2$ gives the points $(0, 0)$ and $(1, 1)$.
:::

:::check
What is the value of $f = x^2 + y^2 - 2y$ at its critical point?
answer: -1
???
$\\nabla f = \\langle 2x,\\; 2y - 2 \\rangle = \\mathbf 0$ gives $(0, 1)$, and $f(0, 1) = 0 + 1 - 2 = -1$.
:::

:::idea The second derivative test
At a critical point $(a, b)$, compute the **discriminant**
$$D = f_{xx} f_{yy} - \\left(f_{xy}\\right)^2.$$

**Why $D$ decides it, step by step.**

*Step 1: look along every line through the point.* Pick any direction $(h, k)$ and look at $f$ along the line through $(a, b)$ in that direction:
$$g(t) = f(a + th,\\; b + tk).$$
$g$ is an ordinary one-variable function, so Calc I applies: if $g'(0) = 0$ and $g''(0) > 0$, $g$ has a min at $t = 0$, and if $g''(0) < 0$, a max.

*Step 2: $g'(0) = 0$ in every direction.* By the chain rule, $g'(t) = f_x\\,h + f_y\\,k$ (with $f_x, f_y$ evaluated at $(a + th, b + tk)$). At a critical point $f_x = f_y = 0$, so $g'(0) = 0$.

*Step 3: compute $g''(0)$.* Differentiate $g'(t) = f_x h + f_y k$ with the chain rule again. Along the line, $f_x$ changes at rate $f_{xx} h + f_{xy} k$ and $f_y$ at rate $f_{yx} h + f_{yy} k$, so
$$g''(0) = (f_{xx}h + f_{xy}k)\\,h + (f_{yx}h + f_{yy}k)\\,k = f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2,$$
using $f_{xy} = f_{yx}$ (equal mixed partials).

*Step 4: find the sign for all directions at once.* Write $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$, so $D = AC - B^2$. When $A \\neq 0$, completing the square gives
$$g''(0) = A h^2 + 2Bhk + Ck^2 = A\\left(h + \\tfrac{B}{A}k\\right)^2 + \\frac{D}{A}\\,k^2.$$
- **$D > 0$:** both terms have the same sign as $A$, and they're both $0$ only when $h = k = 0$. So $g''(0)$ has the sign of $f_{xx}$ in **every** direction: a min along every line if $f_{xx} > 0$, a max if $f_{xx} < 0$. ($D > 0$ forces $A \\ne 0$, since $A = 0$ would make $D = -B^2 \\le 0$.)
- **$D < 0$:** in the direction $k = 0$, $g''(0) = Ah^2$ has the sign of $A$. In the direction $h = -\\tfrac{B}{A}k$, the first term is $0$ and $g''(0) = \\tfrac{D}{A}k^2$ has the **opposite** sign. Curving up in one direction and down in another means a saddle. (If $A = 0$, then $D = -B^2 < 0$ means $B \\ne 0$, and $2Bhk + Ck^2$ still takes both signs.)

So $D$ is exactly the number that tells you whether the second derivative along a line has one sign in every direction. (With continuous second partials, the same sign in every direction is enough to guarantee a true local min or max.)
+++
**A numerical check of Step 4.** For $f = x^2 + 3xy + y^2$ at the origin: $A = 2$, $B = 3$, $C = 2$, so $D = 4 - 9 = -5$. In the direction $(1, 0)$: $g''(0) = 2 > 0$. In the direction $h = -\\tfrac{B}{A}k = -\\tfrac32 k$, for example $(-3, 2)$: $g''(0) = 2(9) + 2(3)(-3)(2) + 2(4) = 18 - 36 + 8 = -10 < 0$, matching $\\tfrac{D}{A}k^2 = \\tfrac{-5}{2}\\cdot 4 = -10$. Opposite signs, so a saddle.

**When $D = 0$, anything can happen.** Then $g''(0) = 0$ in some direction, and the second derivative can't decide. $x^4 + y^4$ (min), $-x^4 - y^4$ (max), and $x^4 - y^4$ (saddle) all have $D = 0$ at the origin. You'd need another argument.
:::

:::theorem Second derivative test
At a critical point with continuous second partial derivatives:
- $D > 0$ and $f_{xx} > 0$: **local min**.
- $D > 0$ and $f_{xx} < 0$: **local max**.
- $D < 0$: **saddle point**.
- $D = 0$: the test gives **no conclusion**.

**Why:** derived above. Along a line in direction $(h, k)$, the second derivative is $f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2$. When $D > 0$ it has the sign of $f_{xx}$ in every direction, and when $D < 0$ it has both signs. When $D = 0$ it is $0$ in some direction, so it can't decide.
:::

:::figure critical-points-cubic
Level curves of $f = x^3 + y^3 - 3xy$. Around the minimum at $(1,1)$ the level curves form closed loops, one inside another, with labels getting smaller toward the middle. At the saddle $(0,0)$, the curve labeled $0$ crosses itself, making an X shape.
:::

:::example Classifying the points
For $f = x^3 + y^3 - 3xy$: $f_{xx} = 6x$, $f_{yy} = 6y$, and $f_{xy} = -3$.

At $(0,0)$: $D = 0\\cdot 0 - 9 = -9 < 0$, a **saddle**.

At $(1,1)$: $D = 6\\cdot 6 - 9 = 27 > 0$ and $f_{xx} = 6 > 0$, a **local min** with $f(1,1) = -1$.
:::

:::check
Classify the critical point $(0,0)$ of $f = x^2 + 3xy + y^2$.
- [ ] local min
  why: Tempting, since $f_{xx} > 0$, but $f_{xx}$ only matters when $D > 0$. Here $D = -5$. Along $y = -x$, $f = x^2 - 3x^2 + x^2 = -x^2 < 0$, so it's not a min.
- [ ] local max
  why: Along the $x$-axis, $f = x^2 > 0$ near the origin, so it's not a max.
- [x] saddle point
- [ ] the test can't tell
  why: The test only fails when $D = 0$. Here $D = 4 - 9 = -5$, which clearly says saddle.
???
$f_{xx} = 2$, $f_{yy} = 2$, and $f_{xy} = 3$, so $D = 4 - 9 = -5 < 0$: a **saddle**. Check with steps of $0.1$: along the $x$-axis, $f(0.1, 0) = 0.01 > 0$, but along $y = -x$, $f(0.1, -0.1) = 0.01 - 0.03 + 0.01 = -0.01 < 0$. Values above and below $f(0,0) = 0$ sit right next to the origin, so it's a saddle.
:::

:::check
For $f = 2x^2 - xy + y^2$, what is $D$ at its critical point $(0, 0)$?
answer: 7
???
$f_{xx} = 4$, $f_{yy} = 2$, and $f_{xy} = -1$, so $D = 4\\cdot 2 - (-1)^2 = 7 > 0$. With $f_{xx} > 0$, it's a local min.
:::

:::idea Putting it together
**The whole procedure:**

1. Solve $f_x = 0$, $f_y = 0$ for all critical points.
2. Compute $f_{xx}$, $f_{yy}$, and $f_{xy}$ as formulas.
3. At each critical point, evaluate $D$ and (if needed) $f_{xx}$.
4. Classify, and give $f$'s value if asked.
+++
**A full example.** $f = x^4 + y^4 - 4xy + 1$.

1. $f_x = 4x^3 - 4y = 0$ gives $y = x^3$, and $f_y = 4y^3 - 4x = 0$ gives $x = y^3$. So $x = x^9$, which means $x(x^8 - 1) = 0$ and $x \\in \\{0, 1, -1\\}$. The points are $(0,0)$, $(1,1)$, and $(-1,-1)$.
2. $f_{xx} = 12x^2$, $f_{yy} = 12y^2$, and $f_{xy} = -4$.
3. At $(0,0)$: $D = 0 - 16 < 0$, a saddle. At $(\\pm1, \\pm1)$: $D = 144 - 16 = 128 > 0$ and $f_{xx} = 12 > 0$, so both are local mins, with $f = 1 + 1 - 4 + 1 = -1$.
:::

:::check
How many local minima does $f = x^4 + y^4 - 4xy + 1$ have?
- [ ] 0
  why: $(1,1)$ and $(-1,-1)$ both have $D = 128 > 0$ and $f_{xx} = 12 > 0$, so they're local minima.
- [ ] 1
  why: There are two symmetric minima, $(1,1)$ and $(-1,-1)$, not just one.
- [x] 2
- [ ] 3
  why: The third critical point, $(0,0)$, has $D = -16 < 0$, so it's a saddle, not a minimum.
???
Two: $(1,1)$ and $(-1,-1)$, both with $f = -1$. The third critical point $(0,0)$ is a saddle. (See "Go deeper" above.)
:::

:::summary Summary
1. Solve $\\nabla f = \\mathbf 0$ for **all** critical points.
2. $D = f_{xx} f_{yy} - f_{xy}^2$ at each one.
3. $D > 0$: min if $f_{xx} > 0$, max if $f_{xx} < 0$. $D < 0$: saddle. $D = 0$: no conclusion.

**Common mistakes:**
- Forgetting to square $f_{xy}$.
- Dividing by a variable and losing a critical point.
- Calling $D = 0$ a saddle.
- Plugging the critical point in too early, before taking the second derivatives.
:::
`;export{e as default};