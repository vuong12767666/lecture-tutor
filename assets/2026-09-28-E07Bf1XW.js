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
+++
**Continuity is needed too.** On the closed, bounded disk $x^2 + y^2 \\le 1$, let $f = \\dfrac{1}{x^2 + y^2}$ except $f(0, 0) = 0$. Near the origin $f$ is as large as you like ($f = 100$ at distance $0.1$, $f = 10{,}000$ at distance $0.01$), so it has no max. The theorem doesn't apply because $f$ isn't continuous at the origin.
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

**Why the corners.** On one straight edge, $f$ becomes a function of one variable on a closed interval. Calc I says its extremes are at critical points or at the interval's **endpoints**, and an edge's endpoints are the region's corners.

**Why no second derivative test.** That test only describes $f$ *near* one point. The question here is which candidate is biggest over all of $R$, and comparing values answers it directly.
+++
**Circular boundaries.** On a circle, either substitute (as in the first example below) or parametrize $x = r\\cos t$, $y = r\\sin t$. Or use Lagrange multipliers (Sep 30).
:::

:::example A disk
Find the absolute max and min of $f = x^2 + y^2 - 2x$ on the disk $x^2 + y^2 \\le 4$.

**Inside.** $\\nabla f = \\langle 2x - 2,\\; 2y \\rangle = \\mathbf 0$ at $(1, 0)$, which is inside the disk, with $f(1, 0) = -1$.

**Boundary.** On $x^2 + y^2 = 4$, substitute: $f = 4 - 2x$ with $-2 \\le x \\le 2$. That's largest at $x = -2$, giving $(-2, 0)$ with $f = 8$, and smallest at $x = 2$, giving $(2, 0)$ with $f = 0$.

**Compare** $-1$, $8$, $0$: the absolute max is $8$ at $(-2, 0)$ and the absolute min is $-1$ at $(1, 0)$.
:::

:::example A triangle
Find the absolute max and min of $f = x + y - xy$ on the triangle with corners $(0,0)$, $(2,0)$, $(0,2)$.

**Inside.** $\\nabla f = \\langle 1 - y,\\; 1 - x \\rangle = \\mathbf 0$ at $(1, 1)$. But $1 + 1 = 2$ puts it on the slanted edge, not inside, so there are no interior critical points.

**Edges.**
- $y = 0$, $0 \\le x \\le 2$: $f = x$, from $0$ to $2$.
- $x = 0$, $0 \\le y \\le 2$: $f = y$, from $0$ to $2$.
- $y = 2 - x$, $0 \\le x \\le 2$: $f = 2 - x(2 - x) = (x - 1)^2 + 1$, from $1$ (at $x = 1$) up to $2$ (at the ends).

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