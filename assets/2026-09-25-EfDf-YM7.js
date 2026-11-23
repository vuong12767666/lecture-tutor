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
>>> Two traps, with numbers
**Dividing loses a solution.** Suppose the algebra leads to $x^4 = x$.
- Dividing both sides by $x$ gives $x^3 = 1$, so $x = 1$. Check: $1^4 = 1$ ✓.
- But $x = 0$ also works: $0^4 = 0$ ✓. Dividing by $x$ secretly assumed $x \\ne 0$.
- The safe way: move everything to one side and factor, $x^4 - x = x(x^3 - 1) = 0$. A product is $0$ when either factor is $0$, so $x = 0$ or $x = 1$.

**A critical point with no derivative.** The cone $f = \\sqrt{x^2 + y^2}$ is smallest at the origin, where $f = 0$. Along the $x$-axis, $f(0.1, 0) = 0.1$ and $f(-0.1, 0) = 0.1$. The slope is $+1$ just to the right and $-1$ just to the left, so there's a sharp point and no single slope: $f_x$ doesn't exist there. It still counts as a critical point, and it's a min. Most exam problems use smooth functions, so you'll mostly solve $\\nabla f = \\mathbf 0$.
<<<
:::

:::example Finding critical points
Find the critical points of $f = x^3 + y^3 - 3xy$.

$f_x = 3x^2 - 3y = 0$ gives $y = x^2$.

$f_y = 3y^2 - 3x = 0$ gives $x = y^2$.
>>> Each partial derivative
1. **$f_x$.** Moving in the $x$ direction, $y$ doesn't change. $x^3$ gives $3x^2$; $y^3$ is one number, so it gives $0$; $-3xy$ is $-3y$ times $x$, so it gives $-3y$. Total: $3x^2 - 3y$.
2. **$f_y$.** Likewise, $3y^2 - 3x$.
3. **For example,** at $(2, 1)$: $f_x = 12 - 3 = 9$. Stepping from $(2, 1)$ to $(2.01, 1)$, $f$ goes from $3$ to about $3.0906$, a change of about $0.09 = 9 \\times 0.01$.
4. **Solve each for one variable.** $3x^2 - 3y = 0$ means $y = x^2$. $3y^2 - 3x = 0$ means $x = y^2$.
<<<

Substitute: $x = (x^2)^2 = x^4$, so $x(x^3 - 1) = 0$, which means $x = 0$ or $x = 1$. Then $y = x^2$ gives the points $(0, 0)$ and $(1, 1)$.
>>> Substituting, factoring, and checking
1. **Why substitute.** Both equations must hold at once. The first says $y = x^2$, so replace $y$ by $x^2$ in the second, $x = y^2$: that gives $x = (x^2)^2 = x^4$, an equation in $x$ alone.
2. **Factor, don't divide.** $x^4 - x = x(x^3 - 1) = 0$, so $x = 0$ or $x^3 = 1$. The only real number whose cube is $1$ is $x = 1$.
3. **Find $y$.** $y = x^2$: $x = 0$ gives $y = 0$, and $x = 1$ gives $y = 1$.
4. **Check.** At $(1, 1)$: $f_x = 3 - 3 = 0$ and $f_y = 3 - 3 = 0$ ✓. At $(0, 0)$: both are $0$ ✓.
<<<
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
>>> One line, with numbers
Take $f = x^3 + y^3 - 3xy$ at its critical point $(1, 1)$, and the direction $(h, k) = (1, 0)$, moving right.
1. **The function along the line.** $g(t) = f(1 + t, 1) = (1 + t)^3 + 1 - 3(1 + t)$.
2. **Values.** $g(0) = 1 + 1 - 3 = -1$. $g(0.1) = 1.331 + 1 - 3.3 = -0.969$. $g(-0.1) = 0.729 + 1 - 2.7 = -0.971$. Both neighbors are higher than $-1$.
3. **Derivatives.** $g'(t) = 3(1 + t)^2 - 3$, so $g'(0) = 0$. $g''(t) = 6(1 + t)$, so $g''(0) = 6 > 0$: a min along this line, as the values showed.
<<<

*Step 2: $g'(0) = 0$ in every direction.* By the chain rule, $g'(t) = f_x\\,h + f_y\\,k$ (with $f_x, f_y$ evaluated at $(a + th, b + tk)$). At a critical point $f_x = f_y = 0$, so $g'(0) = 0$.

*Step 3: compute $g''(0)$.* Differentiate $g'(t) = f_x h + f_y k$ with the chain rule again. Along the line, $f_x$ changes at rate $f_{xx} h + f_{xy} k$ and $f_y$ at rate $f_{yx} h + f_{yy} k$, so
$$g''(0) = (f_{xx}h + f_{xy}k)\\,h + (f_{yx}h + f_{yy}k)\\,k = f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2,$$
using $f_{xy} = f_{yx}$ (equal mixed partials).
>>> Checking the formula for $g''(0)$ on a diagonal line
Same $f = x^3 + y^3 - 3xy$ at $(1, 1)$, now in the direction $(h, k) = (1, 1)$.
1. **The second partials at $(1, 1)$.** $f_{xx} = 6x = 6$, $f_{yy} = 6y = 6$, $f_{xy} = -3$.
2. **The formula.** $f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2 = 6 + 2(-3) + 6 = 6$.
3. **Directly.** Along the line, $g(t) = f(1 + t, 1 + t) = 2(1 + t)^3 - 3(1 + t)^2$. Then $g'(t) = 6(1 + t)^2 - 6(1 + t)$ and $g''(t) = 12(1 + t) - 6$, so $g''(0) = 6$. ✓
<<<

*Step 4: find the sign for all directions at once.* Write $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$, so $D = AC - B^2$. When $A \\neq 0$, completing the square gives
$$g''(0) = A h^2 + 2Bhk + Ck^2 = A\\left(h + \\tfrac{B}{A}k\\right)^2 + \\frac{D}{A}\\,k^2.$$
- **$D > 0$:** both terms have the same sign as $A$, and they're both $0$ only when $h = k = 0$. So $g''(0)$ has the sign of $f_{xx}$ in **every** direction: a min along every line if $f_{xx} > 0$, a max if $f_{xx} < 0$. ($D > 0$ forces $A \\ne 0$, since $A = 0$ would make $D = -B^2 \\le 0$.)
- **$D < 0$:** in the direction $k = 0$, $g''(0) = Ah^2$ has the sign of $A$. In the direction $h = -\\tfrac{B}{A}k$, the first term is $0$ and $g''(0) = \\tfrac{D}{A}k^2$ has the **opposite** sign. Curving up in one direction and down in another means a saddle. (If $A = 0$, then $D = -B^2 < 0$ means $B \\ne 0$, and $2Bhk + Ck^2$ still takes both signs.)

So $D$ is exactly the number that tells you whether the second derivative along a line has one sign in every direction. (With continuous second partials, the same sign in every direction is enough to guarantee a true local min or max.)
>>> Step 4 with numbers, and what $D = 0$ looks like
**$D < 0$: $f = x^2 + 3xy + y^2$ at the origin.** $A = 2$, $B = 3$, $C = 2$, so $D = 4 - 9 = -5$.
1. **Direction $(1, 0)$:** $g''(0) = 2 \\cdot 1 + 0 + 0 = 2 > 0$. Curving up.
2. **Direction $h = -\\tfrac{B}{A}k = -\\tfrac32 k$,** for example $(-3, 2)$: $g''(0) = 2(9) + 2(3)(-3)(2) + 2(4) = 18 - 36 + 8 = -10 < 0$. Curving down. It matches $\\tfrac{D}{A}k^2 = \\tfrac{-5}{2} \\cdot 4 = -10$.
3. Up in one direction, down in another: a saddle.

**$D > 0$: $f = 2x^2 - xy + y^2$ at the origin.** $A = 4$, $B = -1$, $C = 2$, $D = 7$. Try three directions: $(1, 0)$ gives $4$; $(0, 1)$ gives $2$; $(1, 4)$ gives $4 - 8 + 32 = 28$. All positive, as $D > 0$ and $A > 0$ promise.

**$D = 0$: the test can't decide.** $x^4 + y^4$, $-x^4 - y^4$, and $x^4 - y^4$ all have every second partial equal to $0$ at the origin, so $D = 0$. But the first is a min ($f(0.1, 0) = 0.0001 > 0$), the second a max, and the third a saddle ($f(0, 0.1) = -0.0001$ while $f(0.1, 0) = 0.0001$). You'd need another argument.
<<<
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
>>> Each second partial, then each point, with nearby values
1. **$f_{xx}$:** differentiate $f_x = 3x^2 - 3y$ in $x$. The $-3y$ doesn't change as $x$ moves, so $f_{xx} = 6x$.
2. **$f_{yy}$:** differentiate $f_y = 3y^2 - 3x$ in $y$: $6y$.
3. **$f_{xy}$:** differentiate $f_x = 3x^2 - 3y$ in $y$. The $3x^2$ doesn't change as $y$ moves, so $f_{xy} = -3$.
4. **Plug in only now.** Take the derivatives as formulas first, then evaluate. Plugging $(1, 1)$ into $f_x$ first would give the number $0$, whose derivative tells you nothing.

**At $(0, 0)$:** $D = (6 \\cdot 0)(6 \\cdot 0) - (-3)^2 = -9 < 0$. Nearby: $f(0.1, 0) = 0.001 > 0$ but $f(0.1, 0.1) = 0.002 - 0.03 = -0.028 < 0$. Higher in one direction and lower in another: a saddle.

**At $(1, 1)$:** $D = 36 - 9 = 27 > 0$ and $f_{xx} = 6 > 0$. Nearby: $f(1.1, 1) = -0.969$ and $f(1, 0.9) = -0.971$, both above $f(1, 1) = -1$: a min.
<<<
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
>>> The four steps on $f = x^4 + y^4 - 4xy + 1$
1. **Critical points.** $f_x = 4x^3 - 4y = 0$ gives $y = x^3$. $f_y = 4y^3 - 4x = 0$ gives $x = y^3$. Substituting the first into the second: $x = (x^3)^3 = x^9$. Factor instead of dividing: $x(x^8 - 1) = 0$, so $x = 0$ or $x^8 = 1$, which means $x = 1$ or $x = -1$. Then $y = x^3$ gives $(0, 0)$, $(1, 1)$, and $(-1, -1)$.
2. **Second partials as formulas.** $f_{xx} = 12x^2$, $f_{yy} = 12y^2$, and $f_{xy} = -4$ (from $-4xy$).
3. **Evaluate.** At $(0, 0)$: $D = 0 \\cdot 0 - 16 = -16 < 0$. At $(1, 1)$ and at $(-1, -1)$: $D = 12 \\cdot 12 - 16 = 128 > 0$, with $f_{xx} = 12 > 0$.
4. **Classify.** $(0, 0)$ is a saddle. $(1, 1)$ and $(-1, -1)$ are local mins, with $f = 1 + 1 - 4 + 1 = -1$ at each. A nearby check: $f(1.1, 1) \\approx -0.936$, above $-1$.
<<<
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
Two: $(1,1)$ and $(-1,-1)$, both with $f = -1$. The third critical point $(0,0)$ is a saddle. (See the Go deeper under "Putting it together".)
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