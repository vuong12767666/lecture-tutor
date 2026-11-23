var e=`---
title: Absolute min and max
date: 2026-09-28
stewart: 14.7
source: OpenStax Calculus Volume 3, §4.7 Maxima/Minima Problems
---

:::recap Last time
Local extremes happen at [[critical point|critical points]] ($\\nabla f = \\mathbf 0$). The second derivative test with $D = f_{xx} f_{yy} - f_{xy}^2$ classifies them.
:::

:::check
Warm-up from Calc I: what is the absolute max of $g(x) = x^2$ on $[-1, 2]$?
answer: 4
???
Check the critical point and both endpoints: $g(0) = 0$, $g(-1) = 1$, $g(2) = 4$. The largest is $4$, at the endpoint $x = 2$. The answer was on the **edge**, not at the critical point.
:::

:::question Today
On a whole region, where is $f$ biggest and smallest? And how do you make sure you don't miss an answer sitting on the edge?
:::

:::idea When must extremes exist?
**Extreme Value Theorem.** If $f$ is continuous on a region that is **closed** and **bounded**, then $f$ has an absolute max and an absolute min there.

- **Closed:** the region includes all of its boundary (think $\\le$, not $<$).
- **Bounded:** it fits inside some disk.

**Why each condition is needed.** Take $f = x$:

- On the **open** disk $x^2 + y^2 < 1$, $f$ takes the values $0.9$, $0.99$, $0.999$, and so on, but never $1$, because the boundary point $(1, 0)$ isn't included. Every value is beaten by a bigger one, so there's no max.
- On the **unbounded** half-plane $x \\ge 0$, $f$ grows forever, so there's no max.
- On the **closed, bounded** disk $x^2 + y^2 \\le 1$, the max is $1$ at $(1, 0)$, as the theorem promises.

Proving that the two conditions are *enough* takes a real analysis course (it depends on the real numbers having no gaps), so this course takes that part as given.
>>> Each failure, with numbers
**Not closed.** On the open disk $x^2 + y^2 < 1$, try to find the largest value of $f = x$.
- $(0.9, 0)$ is in the disk, with $f = 0.9$. But $(0.99, 0)$ is too, with $f = 0.99$.
- For any point $(a, 0)$ with $a < 1$, the point halfway to $1$, $\\left(\\tfrac{a + 1}{2}, 0\\right)$, is still inside and has a bigger $f$.
- The only candidate that nothing beats is $(1, 0)$, and it's on the boundary, which the open disk leaves out. So there's no max.

**Not bounded.** On $x \\ge 0$, the points $(10, 0)$, $(100, 0)$, $(1000, 0)$ give $f = 10, 100, 1000$. There's no largest.

**Closed and bounded.** On $x^2 + y^2 \\le 1$, the point $(1, 0)$ is included, and every point has $x \\le 1$. So the max is $1$.

**Continuity is needed too.** On the closed, bounded disk $x^2 + y^2 \\le 1$, let $f = \\frac{1}{x^2 + y^2}$, except $f(0, 0) = 0$. At distance $0.1$ from the origin, $f = 100$; at distance $0.01$, $f = 10{,}000$. It has no max, and the theorem doesn't apply because $f$ jumps at the origin.
<<<
:::

:::check
On which region is $f = x + y$ guaranteed to have an absolute max?
- [x] The square $0 \\le x \\le 1$, $0 \\le y \\le 1$
- [ ] The open disk $x^2 + y^2 < 1$
  why: Not closed. $f$ gets closer and closer to $\\sqrt2$ near the edge, but the edge isn't included, so $f$ never reaches a max.
- [ ] The half-plane $x \\ge 0$
  why: Not bounded. $f = x + y$ grows without limit as $x$ (or $y$) grows.
- [ ] The line $y = x$
  why: Not bounded. On the line, $f = 2x$, which has no max.
???
Only the square is both closed (it includes its edges) and bounded. The open disk is missing its boundary, and the half-plane and the line are unbounded.
:::

:::idea The three-step method
To find the absolute max and min of $f$ on a closed, bounded region $R$:

1. **Inside:** find the critical points in the interior of $R$, and evaluate $f$ there.
2. **Boundary:** find the largest and smallest values of $f$ on the boundary. Turn each edge into a one-variable problem by substituting or parametrizing, and include the corners or endpoints.
3. **Compare:** the biggest value from steps 1 and 2 is the absolute max, and the smallest is the absolute min.

**Why this can't miss the answer.** The Extreme Value Theorem says the absolute max is at some point $P$ of $R$. $P$ is either inside $R$ or on its boundary:
- **Inside.** Every point near $P$ is also in $R$, and $f(P)$ beats all of them, so $P$ is a local max. Local maxes inside a region happen only at critical points (Sep 21), so $P$ is on step 1's list.
- **On the boundary.** $f(P)$ beats every other boundary point, so $P$ is where step 2 finds the boundary's largest value.

Either way $P$ is on the list of candidates. Since $f(P)$ beats every point of $R$, it's the biggest candidate, which is what step 3 picks. The same reasoning works for the min.
>>> The method's logic on the disk example, with numbers
Take $f = x^2 + y^2 - 2x$ on $x^2 + y^2 \\le 4$ (the next example).
1. **Inside.** The only critical point is $(1, 0)$, with $f = -1$. Any interior min must be here, since a min with room on every side has $\\nabla f = \\mathbf 0$.
2. **Boundary.** The largest value on the circle is $8$ at $(-2, 0)$, and the smallest is $0$ at $(2, 0)$.
3. **Compare.** The list is $-1$, $8$, $0$. The theorem says $f$ has a max and a min somewhere on the disk, and each must be on this list. So the max is $8$ and the min is $-1$.

**Spot checks.** Random points of the disk land between: $f(0, 0) = 0$, $f(0, 1.5) = 2.25$, $f(-1, 1) = 4$.
<<<

**Why the corners.** On one straight edge, $f$ becomes a function of one variable on a closed interval. Calc I says its extremes are at critical points or at the interval's **endpoints**, and an edge's endpoints are the region's corners.

**Why no second derivative test.** That test only describes $f$ *near* one point. The question here is which candidate is biggest over all of $R$, and comparing values answers it directly.
>>> Corners and the second derivative test, with numbers
**A corner can be the answer.** For $f = x^2 + y^2$ on the rectangle $-1 \\le x \\le 1$, $-2 \\le y \\le 2$, take the edge $x = 1$. There $f = 1 + y^2$ for $-2 \\le y \\le 2$, a one-variable function. Its derivative $2y$ is $0$ at $y = 0$ (value $1$). Its endpoints $y = \\pm 2$ give $5$. The largest, $5$, is at the endpoints, which are the corners $(1, \\pm 2)$.

**The second derivative test isn't needed.** In the disk example, $(1, 0)$ is a local min by the test ($D = 4 > 0$, $f_{xx} = 2 > 0$). But that only says nothing *nearby* is lower. Comparing $-1$ with the boundary values $0$ and $8$ is what shows it's the lowest on the whole disk.

**Circular boundaries.** On a circle, either substitute (as in the next example) or parametrize $x = r\\cos t$, $y = r\\sin t$. Or use Lagrange multipliers (Sep 30).
<<<
:::

:::example A disk
Find the absolute max and min of $f = x^2 + y^2 - 2x$ on the disk $x^2 + y^2 \\le 4$.

**Inside.** $\\nabla f = \\langle 2x - 2,\\; 2y \\rangle = \\mathbf 0$ at $(1, 0)$, which is inside the disk, with $f(1, 0) = -1$.
>>> Finding the critical point, and checking it's inside
1. **$f_x$:** $y^2$ doesn't change as $x$ moves, so $f_x = 2x - 2$. **$f_y$:** $x^2 - 2x$ doesn't change as $y$ moves, so $f_y = 2y$.
2. **Solve.** $2x - 2 = 0$ gives $x = 1$; $2y = 0$ gives $y = 0$.
3. **Inside?** $1^2 + 0^2 = 1 \\le 4$, so yes.
4. **Value.** $f(1, 0) = 1 + 0 - 2 = -1$.
<<<

**Boundary.** On $x^2 + y^2 = 4$, substitute: $f = 4 - 2x$ with $-2 \\le x \\le 2$. That's largest at $x = -2$, giving $(-2, 0)$ with $f = 8$, and smallest at $x = 2$, giving $(2, 0)$ with $f = 0$.
>>> Why substituting works on the circle
1. **On the circle, $x^2 + y^2$ is $4$.** So $f = (x^2 + y^2) - 2x$ becomes $4 - 2x$. For example, at $(0, 2)$: $f = 0 + 4 - 0 = 4$, and $4 - 2 \\cdot 0 = 4$ ✓.
2. **Which $x$ values occur.** On the circle of radius $2$, $x$ runs from $-2$ (left end) to $2$ (right end).
3. **Largest and smallest.** $4 - 2x$ goes down as $x$ goes up. So it's largest at $x = -2$: $4 + 4 = 8$, at the point $(-2, 0)$. It's smallest at $x = 2$: $4 - 4 = 0$, at $(2, 0)$.
<<<

**Compare** $-1$, $8$, $0$: the absolute max is $8$ at $(-2, 0)$ and the absolute min is $-1$ at $(1, 0)$.
:::

:::example A triangle
Find the absolute max and min of $f = x + y - xy$ on the triangle with corners $(0,0)$, $(2,0)$, $(0,2)$.

**Inside.** $\\nabla f = \\langle 1 - y,\\; 1 - x \\rangle = \\mathbf 0$ at $(1, 1)$. But $1 + 1 = 2$ puts it on the slanted edge, not inside, so there are no interior critical points.
>>> Why $(1, 1)$ isn't inside
**The triangle as inequalities.** Its points have $x \\ge 0$, $y \\ge 0$, and $x + y \\le 2$ (the slanted edge is the line $x + y = 2$). Inside means all three are strict: $x > 0$, $y > 0$, $x + y < 2$.

For example, $(0.5, 0.5)$ has $0.5 + 0.5 = 1 < 2$: inside. But $(1, 1)$ has $1 + 1 = 2$, exactly on the slanted edge. It gets checked with that edge instead, where it shows up at $x = 1$ with $f = 1$.
<<<

**Edges.**
- $y = 0$, $0 \\le x \\le 2$: $f = x$, from $0$ to $2$.
- $x = 0$, $0 \\le y \\le 2$: $f = y$, from $0$ to $2$.
- $y = 2 - x$, $0 \\le x \\le 2$: $f = 2 - x(2 - x) = (x - 1)^2 + 1$, from $1$ (at $x = 1$) up to $2$ (at the ends).
>>> The slanted edge, step by step
1. **Substitute $y = 2 - x$.** $f = x + (2 - x) - x(2 - x) = 2 - 2x + x^2$.
2. **Complete the square.** $x^2 - 2x + 2 = (x^2 - 2x + 1) + 1 = (x - 1)^2 + 1$.
3. **Smallest.** $(x - 1)^2 \\ge 0$, so $f \\ge 1$, with $f = 1$ at $x = 1$, the point $(1, 1)$.
4. **Largest.** At the ends, $x = 0$ gives $(0, 2)$ with $f = 2$, and $x = 2$ gives $(2, 0)$ with $f = 2$.
5. **Check a point.** At $x = 0.5$, $y = 1.5$: $f = 0.5 + 1.5 - 0.75 = 1.25$, and $(0.5 - 1)^2 + 1 = 1.25$ ✓.
<<<

**Compare.** The absolute max is $2$, at $(2, 0)$ and $(0, 2)$. The absolute min is $0$, at $(0, 0)$.
:::

:::check
What is the absolute max of $f = x^2 + y^2$ on the rectangle $-1 \\le x \\le 1$, $-2 \\le y \\le 2$?
answer: 5
???
Inside, the only critical point is $(0,0)$ with $f = 0$. On the boundary, $f$ is largest at the corners $(\\pm 1, \\pm 2)$, with $f = 1 + 4 = 5$. So the max is $5$ (and the min is $0$).
:::

:::check
On the disk $x^2 + y^2 \\le 1$, where is the absolute min of $f = x + y$?
- [x] On the boundary circle
- [ ] At an interior critical point
  why: $\\nabla f = \\langle 1, 1 \\rangle$ is never $\\mathbf 0$, so there are no critical points at all.
- [ ] It doesn't exist
  why: The disk is closed and bounded and $f$ is continuous, so the Extreme Value Theorem guarantees a min.
???
$\\nabla f = \\langle 1, 1 \\rangle$ is never zero, so there are no critical points inside. The disk is closed and bounded, so a min exists, and it must be on the boundary. It's at $\\left(-\\tfrac{1}{\\sqrt 2}, -\\tfrac{1}{\\sqrt 2}\\right)$, with $f = -\\sqrt 2$.
:::

:::summary Summary
- Closed + bounded + continuous means an absolute max and min exist.
- **Method:** (1) critical points inside, (2) the boundary, edge by edge, including corners, (3) compare all the values.
- No second derivative test needed for absolute extremes.

**Common mistakes:**
- Forgetting the boundary, or the corners of a polygon.
- Counting a critical point that lies outside the region (or on its edge, as in the triangle).
- Using the second derivative test instead of comparing values.
:::
`;export{e as default};