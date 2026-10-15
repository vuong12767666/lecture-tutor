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

**Intuition.** $D > 0$ means the surface curves the *same way* in every direction: a bowl or a dome. Then $f_{xx}$ tells you which: positive (curving up) is a bowl, so a min; negative is a dome, so a max. $D < 0$ means it curves up in some directions and down in others: a saddle.
+++
**Where $D$ comes from.** Near a critical point, $f$ looks like a quadratic: $f \\approx f(a,b) + \\tfrac12\\big(A h^2 + 2B hk + C k^2\\big)$ with $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$, and $h, k$ the small steps. Completing the square (when $A \\neq 0$):
$$A h^2 + 2Bhk + Ck^2 = A\\left(h + \\frac{B}{A}k\\right)^2 + \\frac{AC - B^2}{A}k^2.$$
If $D = AC - B^2 > 0$, both terms have the sign of $A$, so the quadratic is always positive (min) or always negative (max). If $D < 0$, the two terms have opposite signs, so some directions go up and others down: a saddle.

**When $D = 0$, anything can happen.** $x^4 + y^4$ (min), $-x^4 - y^4$ (max), and $x^4 - y^4$ (saddle) all have $D = 0$ at the origin. You'd need another argument.
:::

:::theorem Second derivative test
At a critical point with continuous second partial derivatives:
- $D > 0$ and $f_{xx} > 0$: **local min**.
- $D > 0$ and $f_{xx} < 0$: **local max**.
- $D < 0$: **saddle point**.
- $D = 0$: the test gives **no conclusion**.
:::

:::figure critical-points-cubic
Level curves of $f = x^3 + y^3 - 3xy$. Around the minimum at $(1,1)$ the level curves form rings inside rings, like a target, with labels getting smaller toward the middle. At the saddle $(0,0)$, the curve labeled $0$ crosses itself, making an X shape.
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
$f_{xx} = 2$, $f_{yy} = 2$, and $f_{xy} = 3$, so $D = 4 - 9 = -5 < 0$: a **saddle**. The $x^2$ and $y^2$ terms make it look like a bowl, but the $3xy$ term is big enough to make it a saddle.
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