var e=`---
title: Conservative vector fields in R3; Topology 101
date: 2026-12-04
stewart: 16.8
source: OpenStax Calculus Volume 3, §6.3 Conservative Vector Fields (with §6.7 Stokes' Theorem)
---

:::recap Last time
- For $\\mathbf F$ with continuous partial derivatives on a region with no holes, four statements say the same thing: $\\mathbf F = \\nabla f$, path independence, $0$ around every closed loop, and $\\operatorname{curl}\\mathbf F = \\mathbf 0$ (Dec 2).
- Zero curl gives zero around every loop by [[stokes-theorem|Stokes' Theorem]], but only when every loop is the edge of a surface inside the region.
- Oct 14: in the plane, the swirl field passes the cross-partials test and still isn't conservative, because its region has a hole.
:::

:::check
Warm-up: $\\mathbf F = \\langle y,\\ x,\\ 2z \\rangle$ is defined on all of space. What is $\\operatorname{curl}\\mathbf F$?
- [x] $\\langle 0, 0, 0 \\rangle$
- [ ] $\\langle 0, 0, 2 \\rangle$
  why: That is the curl of $\\langle -y, x, 0 \\rangle$. Here $Q_x - P_y = 1 - 1 = 0$.
- [ ] $\\langle 1, 1, 2 \\rangle$
  why: The curl uses differences of partial derivatives such as $R_y - Q_z$, not the components of $\\mathbf F$ itself.
???
$R_y - Q_z = 0 - 0$, $P_z - R_x = 0 - 0$, $Q_x - P_y = 1 - 1 = 0$. Since space has no holes, $\\mathbf F$ is conservative: $f = xy + z^2$.
:::

:::question Today
In space, when does zero curl really mean conservative? What counts as a "hole" in a region of space, and is a missing point as bad as a missing line?
:::

:::idea Topology 101: open, connected, simply connected
Three words describe a region $D$ in space.

- **Open:** every point of $D$ has a small ball around it that is still inside $D$. The boundary is not part of $D$.
- **Connected:** any two points of $D$ can be joined by a path that stays inside $D$.
- **Simply connected:** $D$ is connected, and every closed loop inside $D$ can be shrunk to a single point without leaving $D$.

A **simple closed curve** is a loop that ends where it started and never crosses itself. Every theorem about conservative fields assumes the region is open and connected, and the cross-partials test needs it to be simply connected too.

**Why simply connected is the right condition.** Stokes' Theorem turns a loop integral into a surface integral, so it needs a surface inside $D$ whose edge is the loop. If the loop can be shrunk to a point inside $D$, the shrinking gives one: every in-between loop stays inside $D$, and together they sweep out a surface whose edge is the original loop. That is the only place "no holes" is used.
>>> Open, with numbers
Take $D$ = the points with $x^2 + y^2 + z^2 < 4$ (the inside of a ball of radius $2$).

1. **Pick a point.** For example $(1, 1, 0)$ has $x^2 + y^2 + z^2 = 2 < 4$, so it is in $D$.
2. **Find a small ball around it.** Its distance from the edge of the big ball is $2 - \\sqrt2 \\approx 0.59$. A ball of radius $0.5$ around $(1, 1, 0)$ stays inside $D$.
3. **A point on the edge.** $(2, 0, 0)$ has $x^2 + y^2 + z^2 = 4$, which is not less than $4$. It isn't in $D$. Every ball around it, however small, contains points like $(2.01, 0, 0)$ that are outside, so $D$ would not be open if it included $(2, 0, 0)$.
<<<
>>> Shrinking a loop, with numbers
In the open ball above, take the circle $\\langle \\cos t, \\sin t, 0 \\rangle$, which has radius $1$. Shrink it with $\\langle s\\cos t, s\\sin t, 0 \\rangle$, letting $s$ go from $1$ down to $0$.

1. **At $s = 1$:** the original circle.
2. **At $s = 0.5$:** a circle of radius $0.5$, for example through $(0.5, 0, 0)$ and $(0, 0.5, 0)$.
3. **At $s = 0$:** every point is $(0, 0, 0)$, a single point.
4. **Stays inside:** the farthest any point gets from the center is $s \\le 1 < 2$, so the loop never leaves $D$ while shrinking.
5. **The surface it sweeps out:** all the circles for $s$ from $1$ to $0$ together fill the flat disk $x^2 + y^2 \\le 1$, $z = 0$. That disk is inside $D$ and its edge is the original circle, so it is the surface Stokes' Theorem can use.

Now try the same shrinking in space with the whole $z$-axis removed. At $s = 0$ the loop would be the point $(0, 0, 0)$, which is on the axis and not in the region. So this shrinking leaves the region at the last moment (the next ideas show that no other way works either).
<<<
:::

:::check
Which of these regions are simply connected? Choose all that apply.
- [x] All of space
  why: Any loop shrinks to a point by pulling it in, and nothing is missing.
- [x] The inside of a ball
  why: Any loop inside can be pulled in, as in the shrinking example.
- [ ] Space with the entire $z$-axis removed
  why: A circle around the axis can't shrink to a point without crossing the axis.
- [ ] The inside of a solid donut (a torus)
  why: A loop that runs once around the donut's hole can't shrink to a point inside the donut.
???
The ball and all of space have nothing a loop can be wrapped around. A removed line and the hole of a donut can both have a loop wrapped around them.
:::

:::idea In space, a missing point is not a hole, but a missing line is
In the plane, removing one point makes a hole: a circle around it can't shrink. In space there is room to go around. Look at all of space except the origin:

- Lift the circle $\\langle \\cos t, \\sin t, 0 \\rangle$ up to height $h$, with $h$ going from $0$ to $1$.
- Then shrink it at height $1$, with $\\langle s\\cos t, s\\sin t, 1 \\rangle$ and $s$ going from $1$ to $0$.

Every point on the way is at distance at least $1$ from the origin, so the loop never touches the missing point. So **space minus a point is simply connected.** The same works for any loop and any missing point.

**Space minus a line is not.** A circle of radius $1$ around the $z$-axis has to pass through the axis to shrink to a point, whichever way you move it. A loop can wrap around a line, and a line removed from space acts like the hole in the plane.

So: removing a **point**, or a ball, leaves a simply connected region. Removing a **line** does not.
>>> The lift-then-shrink path, with numbers
Take the point on the loop at $t = 0$, which starts at $(1, 0, 0)$. Follow it.

1. **Lifting:** at height $h = 0.5$ it is at $(1, 0, 0.5)$, and its distance from the origin is $\\sqrt{1 + 0.25} \\approx 1.12$. At $h = 1$ it is at $(1, 0, 1)$, at distance $\\sqrt2 \\approx 1.41$. The distance grows, so it never reaches $0$.
2. **Shrinking at height $1$:** at $s = 0.5$ the point is $(0.5, 0, 1)$, at distance $\\sqrt{1.25} \\approx 1.12$. At $s = 0$ it is $(0, 0, 1)$, at distance $1$.
3. **Smallest distance on the whole way:** in step 1 the squared distance is $1 + h^2 \\ge 1$. In step 2 it is $s^2 + 1 \\ge 1$. So the loop is never closer than $1$ to the origin.

**With the $z$-axis removed instead,** lifting doesn't help. The lifted circle $\\langle \\cos t, \\sin t, h \\rangle$ still goes around the axis: its points $(1, 0, h)$, $(0, 1, h)$, $(-1, 0, h)$, $(0, -1, h)$ are on four sides of the axis point $(0, 0, h)$. Shrinking it at that height pulls every point to $(0, 0, h)$, which is on the axis and not in the region. The next idea shows that every other way fails too.
<<<
:::

:::check
Space with the single point $(2, 3, 5)$ removed. Is it simply connected?
- [x] Yes
  why: Any loop can be moved around the missing point, as with the origin.
- [ ] No
  why: That is true in the plane, where a loop can't get past a missing point. In space there is room to go around it.
???
Moving a loop up and over the missing point never touches it, so every loop can still be shrunk. Only a missing line (or something that fills a line) gets in the way.
:::

:::idea Zero curl in space, with a hole that is a line
Take $\\mathbf G = \\left\\langle \\dfrac{-y}{x^2 + y^2},\\ \\dfrac{x}{x^2 + y^2},\\ 0 \\right\\rangle$, the swirl field of Oct 14 with a third component $0$. It is defined except where $x^2 + y^2 = 0$, which is the whole $z$-axis.

1. **Zero curl.** The first two components of the curl are $R_y - Q_z = 0 - 0 = 0$ and $P_z - R_x = 0 - 0 = 0$. The third is $Q_x - P_y$, which is $\\dfrac{y^2 - x^2}{(x^2 + y^2)^2} - \\dfrac{y^2 - x^2}{(x^2 + y^2)^2} = 0$. So $\\operatorname{curl}\\mathbf G = \\mathbf 0$ everywhere it is defined.
2. **A loop around the axis.** Take the unit circle $\\langle \\cos t, \\sin t, 0 \\rangle$. On it $\\mathbf G = \\langle -\\sin t, \\cos t, 0 \\rangle$, which equals $\\mathbf r'$, so $\\mathbf G \\cdot \\mathbf r' = 1$ and the integral is $\\int_0^{2\\pi} 1\\, dt = 2\\pi \\ne 0$.
3. **Conclusion.** The curl is zero, yet one loop gives $2\\pi$, so $\\mathbf G$ is **not conservative**.

**Why Stokes' Theorem doesn't contradict this.** The flat disk bounded by the circle is crossed by the $z$-axis at the origin, where $\\mathbf G$ doesn't exist. A hemisphere over the circle is crossed at $(0, 0, 1)$. Every surface with this edge crosses the axis, so none of them lies inside the region.
>>> The curl, step by step, with a number
Check the third component at the point $(1, 0, 0)$, using $P = \\dfrac{-y}{x^2 + y^2}$ and $Q = \\dfrac{x}{x^2 + y^2}$.

1. **$P_y$.** $P$ depends on $y$ through the top and the bottom, so $P_y = \\dfrac{-(x^2 + y^2) + 2y^2}{(x^2 + y^2)^2} = \\dfrac{y^2 - x^2}{(x^2 + y^2)^2}$. At $(1, 0, 0)$: $\\dfrac{0 - 1}{1} = -1$.
2. **$Q_x$.** $Q_x = \\dfrac{(x^2 + y^2) - 2x^2}{(x^2 + y^2)^2} = \\dfrac{y^2 - x^2}{(x^2 + y^2)^2}$. At $(1, 0, 0)$: $-1$.
3. **Difference.** $Q_x - P_y = -1 - (-1) = 0$ ✓. The same formula holds at every point, because $P_y$ and $Q_x$ are the same expression.
<<<
>>> The loop integral, step by step, with numbers
The circle is $\\mathbf r(t) = \\langle \\cos t, \\sin t, 0 \\rangle$ for $0 \\le t \\le 2\\pi$.

1. **$\\mathbf G$ on the circle.** On the circle $x = \\cos t$ and $y = \\sin t$, so $x^2 + y^2 = \\cos^2 t + \\sin^2 t = 1$. The bottom of each fraction is $1$, so $\\mathbf G = \\langle -\\sin t, \\cos t, 0 \\rangle$. At $t = 0$, the point $(1, 0, 0)$: $\\mathbf G = \\langle 0, 1, 0 \\rangle$.
2. **$\\mathbf r'$.** Differentiate each component: $\\mathbf r' = \\langle -\\sin t, \\cos t, 0 \\rangle$. At $t = 0$: $\\langle 0, 1, 0 \\rangle$, the same as $\\mathbf G$. The field points exactly along the direction we travel.
3. **The dot product.** $\\mathbf G \\cdot \\mathbf r' = \\sin^2 t + \\cos^2 t + 0 = 1$. At $t = \\pi/2$, the point $(0, 1, 0)$: $\\mathbf G = \\langle -1, 0, 0 \\rangle$, $\\mathbf r' = \\langle -1, 0, 0 \\rangle$, and the dot product is $1$ ✓.
4. **Integrate.** $\\int_0^{2\\pi} 1\\, dt = 2\\pi$.
5. **Why this proves "not conservative."** A conservative field gives $0$ around every closed loop. This loop gives $2\\pi$, so $\\mathbf G$ can't be conservative, even though its curl is $\\mathbf 0$.
<<<
>>> Why the circulation is always a multiple of $2\\pi$
Let $\\theta$ be the angle around the $z$-axis, measured from the positive $x$-direction (where $x > 0$, $\\theta = \\arctan(y/x)$). Off the axis, $\\theta_x = \\dfrac{-y}{x^2 + y^2}$ and $\\theta_y = \\dfrac{x}{x^2 + y^2}$, so $\\mathbf G = \\nabla\\theta$ near every point. For example at $(1, 0, 0)$: $\\theta_x = 0$ and $\\theta_y = 1$, matching $\\mathbf G = \\langle 0, 1, 0 \\rangle$ ✓.

So the integral of $\\mathbf G$ along a path is the **change in the angle $\\theta$**. A loop that goes once counterclockwise around the axis changes the angle by $2\\pi$, and a loop that doesn't go around it brings the angle back to where it began, a change of $0$. A potential function would have to give back the same value after one trip around, but $\\theta$ increases by $2\\pi$, so no single-valued $f$ exists.
<<<
:::

:::check
For the same $\\mathbf G$, find $\\oint_C \\mathbf G \\cdot d\\mathbf r$ around the circle of radius $3$ centered at $(0, 0, 5)$ in the plane $z = 5$, counterclockwise as seen from above.
answer: 2pi
???
This circle goes once around the $z$-axis. The angle $\\theta$ increases by $2\\pi$, whatever the radius and the height. (Directly: $\\mathbf r = \\langle 3\\cos t, 3\\sin t, 5 \\rangle$, $\\mathbf G = \\tfrac13\\langle -\\sin t, \\cos t, 0 \\rangle$, $\\mathbf r' = 3\\langle -\\sin t, \\cos t, 0 \\rangle$, so the integrand is $1$.)
:::

:::check
Same $\\mathbf G$, but now $C$ is the circle of radius $1$ in the plane $z = 0$ centered at $(3, 0, 0)$, counterclockwise as seen from above. What is $\\oint_C \\mathbf G \\cdot d\\mathbf r$?
- [x] $0$
  why: This circle doesn't go around the $z$-axis: it stays in $2 \\le x \\le 4$. The angle $\\theta$ goes up and then back down, with no net change.
- [ ] $2\\pi$
  why: $2\\pi$ is for loops that go around the axis. This one stays on one side of it.
???
The disk this circle bounds has $x$ between $2$ and $4$, so it never touches the $z$-axis and lies inside the region. Zero curl with Stokes' Theorem gives $0$.
:::

:::idea A hole doesn't always break conservativeness
Zero curl on a region with a hole doesn't tell you the field is *not* conservative. It tells you the test can't decide.

Take $\\mathbf H = \\left\\langle \\dfrac{x}{x^2 + y^2},\\ \\dfrac{y}{x^2 + y^2},\\ 0 \\right\\rangle$ on the same region (space without the $z$-axis).

1. **Curl.** $Q_x - P_y = \\dfrac{-2xy}{(x^2 + y^2)^2} - \\dfrac{-2xy}{(x^2 + y^2)^2} = 0$, and the other two components are $0$.
2. **A loop around the axis.** On the unit circle, $\\mathbf H = \\langle \\cos t, \\sin t, 0 \\rangle$ and $\\mathbf r' = \\langle -\\sin t, \\cos t, 0 \\rangle$, so $\\mathbf H \\cdot \\mathbf r' = 0$ and the integral is $0$.
3. **A potential.** $f = \\ln\\sqrt{x^2 + y^2}$ has $f_x = \\dfrac{x}{x^2 + y^2}$ and $f_y = \\dfrac{y}{x^2 + y^2}$, so $\\nabla f = \\mathbf H$ ✓. The field is conservative on this region, even though the region has a hole.

So with a hole you can't conclude either way from zero curl. You have to look at loops around the hole, or find a potential.
>>> Checking $\\mathbf H$ with a number
Go from $(1, 0, 0)$ to $(3, 4, 7)$ along a path that avoids the $z$-axis, for example the straight segment $\\langle 1 + 2t, 4t, 7t \\rangle$ (at $t = 0.5$ it is at $(2, 2, 3.5)$, away from the axis).

1. **Potential difference.** $f(3, 4, 7) = \\ln\\sqrt{9 + 16} = \\ln 5$ and $f(1, 0, 0) = \\ln 1 = 0$, so the integral should be $\\ln 5 \\approx 1.609$.
2. **Directly.** Along the segment, $x^2 + y^2 = (1 + 2t)^2 + 16t^2 = 1 + 4t + 20t^2$, and $\\mathbf H \\cdot \\mathbf r' = \\dfrac{2(1 + 2t) + 4(4t)}{1 + 4t + 20t^2} = \\dfrac{2 + 20t}{1 + 4t + 20t^2}$. The top is half the derivative of the bottom ($\\tfrac12(4 + 40t) = 2 + 20t$), so the integral is $\\tfrac12\\ln(1 + 4t + 20t^2)$ from $0$ to $1$, which is $\\tfrac12 \\ln 25 = \\ln 5$ ✓.
<<<
:::

:::check
$\\mathbf F$ has zero curl on space minus the $z$-axis. You compute $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$ around one circle that goes around the axis. Can you conclude $\\mathbf F$ is conservative?
- [ ] Yes, one loop giving $0$ is enough in any region
  why: Conservative means every closed loop gives $0$, and one loop is only one of them.
- [x] Yes, but only because of the zero curl and the hole being a line
  why: Zero curl makes every loop that doesn't go around the axis give $0$ (Stokes' Theorem). Every loop that goes around the axis once gives the same value as your circle, which is $0$. So all loops give $0$.
???
Conservative means **every** closed loop gives $0$. Here the zero curl handles every loop that doesn't go around the axis. A loop that goes around it once gives the same value as the circle you checked, $0$, and a loop that goes around twice gives twice that, still $0$. Without the zero curl, a single circle would prove nothing.
:::

:::idea The method for a field on a region of space
For $\\mathbf F = \\langle P, Q, R \\rangle$ on a region $D$:

1. **Curl.** Compute $\\operatorname{curl}\\mathbf F$. If it is not $\\mathbf 0$ at even one point of $D$, $\\mathbf F$ is **not conservative**: a small loop around that point has nonzero circulation (Dec 2).
2. **If the curl is $\\mathbf 0$ everywhere in $D$, look at $D$.** If $D$ is open and simply connected (all of space, a ball, space minus a point), $\\mathbf F$ is **conservative**. Find $f$ and use $\\int_C \\mathbf F \\cdot d\\mathbf r = f(\\text{end}) - f(\\text{start})$.
3. **If $D$ is space with one line removed,** the test can't decide. Integrate around one loop that goes once around the missing line. A nonzero value means **not conservative**. Zero, or a potential that works on all of $D$, means **conservative**.

**Why step 2 works:** on a simply connected region every loop can be shrunk, so it is the edge of a surface inside $D$. Stokes' Theorem then gives $0$ for every loop, which gives path independence and a potential.
>>> The three steps on $\\mathbf G$ and $\\mathbf H$
Run the method on the two fields above. Both live on space minus the $z$-axis.

1. **Curl.** Both curls came out $\\mathbf 0$ at every point where the fields are defined, so step 1 doesn't rule either one out.
2. **The region.** Space minus the $z$-axis is not simply connected: the unit circle around the axis can't be shrunk. So step 2 doesn't apply, and we go to step 3.
3. **One loop around the axis.** For both, use the unit circle $\\langle \\cos t, \\sin t, 0 \\rangle$, which goes once around the axis.
   - $\\mathbf G$ gave $2\\pi$, which isn't $0$, so $\\mathbf G$ is **not conservative**. For example, at the point $(0, 1, 0)$ (where $t = \\pi/2$), $\\mathbf G = \\langle -1, 0, 0 \\rangle$ and $\\mathbf r' = \\langle -1, 0, 0 \\rangle$: the field points along the loop, so the dot product is $1$, and it is $1$ all the way around.
   - $\\mathbf H$ gave $0$, and we also found the potential $\\ln\\sqrt{x^2 + y^2}$, defined at every point off the axis. So $\\mathbf H$ is **conservative**. For example, at the same point $(0, 1, 0)$, $\\mathbf H = \\langle 0, 1, 0 \\rangle$ and $\\mathbf r' = \\langle -1, 0, 0 \\rangle$: the field points straight out from the axis, across the loop, so the dot product is $0$, and it is $0$ all the way around.

Same region and the same zero curl, opposite answers. The loop around the missing line is what decides.
<<<
:::

:::check
$\\mathbf F = \\langle 0,\\ xz,\\ 0 \\rangle$ is defined on all of space. Its curl is $\\langle -x, 0, z \\rangle$, which is $\\mathbf 0$ at every point with $x = 0$ and $z = 0$ (the whole $y$-axis). Is $\\mathbf F$ conservative?
- [ ] Yes, because the curl is $\\mathbf 0$ on the $y$-axis and space is simply connected
  why: Step 2 needs the curl to be $\\mathbf 0$ at **every** point of the region, not just on one line.
- [x] No, because the curl is not $\\mathbf 0$ at some points, such as $(1, 0, 0)$
  why: At $(1, 0, 0)$ the curl is $\\langle -1, 0, 0 \\rangle$. One point with nonzero curl is enough to rule it out.
???
$\\operatorname{curl}\\mathbf F = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle 0 - x,\\ 0 - 0,\\ z - 0 \\rangle = \\langle -x, 0, z \\rangle$. At $(1, 0, 0)$ that is $\\langle -1, 0, 0 \\rangle \\ne \\mathbf 0$, so by step 1, $\\mathbf F$ is not conservative.
:::

:::idea Using the method: the inverse-square field
$\\mathbf F = \\dfrac{\\langle x, y, z \\rangle}{(x^2 + y^2 + z^2)^{3/2}}$ is defined everywhere except the origin, where the bottom is $0$. It is the shape of gravity and of the electric field of a point charge (Dec 7). Write $\\rho = \\sqrt{x^2 + y^2 + z^2}$ for the distance from the origin, so $\\mathbf F = \\langle x, y, z \\rangle / \\rho^3$.

1. **Curl.** $P = x\\rho^{-3}$, and $\\rho_y = y/\\rho$, so $P_y = -3xy\\rho^{-5}$. Also $Q = y\\rho^{-3}$ gives $Q_x = -3xy\\rho^{-5}$. So $P_y = Q_x$. By the same pattern $P_z = -3xz\\rho^{-5} = R_x$ and $Q_z = -3yz\\rho^{-5} = R_y$. The curl is $\\mathbf 0$.
2. **The region.** Space minus the origin is simply connected (shown above: a missing point is not a hole). So by step 2 of the method, $\\mathbf F$ is **conservative**.
3. **A potential.** $f = -1/\\rho$ has $f_x = \\dfrac{x}{\\rho^3}$, and the same for $y$ and $z$, so $\\nabla f = \\mathbf F$ ✓.
4. **An integral.** From $(1, 0, 0)$ to $(0, 0, 2)$ along any path that misses the origin: $f(0, 0, 2) - f(1, 0, 0) = -\\tfrac12 - (-1) = \\tfrac12$.
>>> The curl step, with a number
At $(1, 2, 2)$: $\\rho = \\sqrt{1 + 4 + 4} = 3$, so $\\rho^5 = 243$.

1. **$P = x\\rho^{-3}$.** By the product rule, $P_y = x \\cdot (-3)\\rho^{-4}\\rho_y$. With $\\rho_y = y/\\rho = 2/3$: $P_y = 1 \\cdot (-3)(1/81)(2/3) = -6/243 = -0.0247$.
2. **$Q = y\\rho^{-3}$.** $Q_x = y \\cdot (-3)\\rho^{-4}\\rho_x$. With $\\rho_x = x/\\rho = 1/3$: $Q_x = 2 \\cdot (-3)(1/81)(1/3) = -6/243 = -0.0247$.
3. **Equal.** $P_y = Q_x$, so this component of the curl is $0$ ✓. The other two components work the same way, with $y$ and $z$ or $x$ and $z$ in the roles of $x$ and $y$.
<<<
>>> The potential and the integral, with numbers
1. **Why $f_x = x/\\rho^3$.** $f = -\\rho^{-1}$. By the chain rule, $f_x = \\rho^{-2}\\rho_x$, and $\\rho_x = x/\\rho$, so $f_x = \\dfrac{1}{\\rho^2}\\cdot\\dfrac{x}{\\rho} = \\dfrac{x}{\\rho^3}$, which is $P$. At $(1, 2, 2)$, where $\\rho = 3$: $f_x = 1/27$ and $P = 1/27$ ✓.
2. **The two ends.** At $(0, 0, 2)$, $\\rho = 2$, so $f = -\\tfrac12$. At $(1, 0, 0)$, $\\rho = 1$, so $f = -1$.
3. **End minus start.** $-\\tfrac12 - (-1) = \\tfrac12$.
4. **Checking on a path.** The straight segment $\\langle 1 - t, 0, 2t \\rangle$, $0 \\le t \\le 1$, never passes through the origin (its $x$ and $z$ are never both $0$). Integrating $\\mathbf F \\cdot \\mathbf r'$ along it gives $\\tfrac12$ ✓. The detour $(1, 0, 0) \\to (1, 0, 2) \\to (0, 0, 2)$ also gives $\\tfrac12$ ✓, as path independence says.
<<<
:::

:::check
Is $\\mathbf F = \\left\\langle \\dfrac{-y}{x^2 + y^2}, \\dfrac{x}{x^2 + y^2}, 0 \\right\\rangle$ conservative on the region "space minus the origin"?
- [ ] Yes, because space minus the origin is simply connected
  why: That is true of the region, but this field is not defined on the whole region: it is undefined all along the $z$-axis.
- [x] The question doesn't make sense: the field isn't defined on all of that region.
  why: The bottom $x^2 + y^2$ is $0$ at every point of the $z$-axis, such as $(0, 0, 3)$, not just at the origin.
???
$\\mathbf F$ is undefined at $(0, 0, 3)$, so "space minus the origin" is the wrong region for it. Its region is space minus the entire $z$-axis, which is not simply connected, and there the field is not conservative.
:::

:::idea Find a potential in space, then use it
When the curl is $\\mathbf 0$ on a simply connected region, build $f$ from $P$, then $Q$, then $R$ (Dec 2), and evaluate it at the ends.

For example, $\\mathbf F = \\langle 2xy + z,\\ x^2,\\ x \\rangle$ on all of space.

1. **Curl.** $P_y = 2x = Q_x$, $P_z = 1 = R_x$, and $Q_z = 0 = R_y$. Zero curl, on all of space.
2. **Integrate $P$ in $x$.** $f = x^2 y + xz + g(y, z)$.
3. **Match $Q$.** $f_y = x^2 + g_y$ should be $x^2$, so $g_y = 0$ and $g$ depends only on $z$.
4. **Match $R$.** $f_z = x + g'(z)$ should be $x$, so $g' = 0$. Take $f = x^2 y + xz$.
5. **Integral.** From $(0, 0, 0)$ to $(1, 2, 3)$, any path: $f(1, 2, 3) - f(0, 0, 0) = 2 + 3 - 0 = 5$.
>>> Why matching $R$ leaves only a constant, with numbers
After step 3, $f = x^2 y + xz + g(z)$. Here $g(z)$ might be, say, $z^2$ or $\\sin z$, we don't know yet, so check what each choice would do to $f_z$.

1. **If $g = z^2$.** $f_z = x + 2z$. But $R = x$, and $x + 2z \\ne x$ (at $(1, 2, 3)$: $7 \\ne 1$). So $g = z^2$ is not allowed.
2. **If $g = 5$.** $f_z = x + 0 = x = R$ ✓. A constant works, and it only shifts $f$ by $5$ everywhere, which cancels in $f(\\text{end}) - f(\\text{start})$.
3. **So $g'(z) = 0$.** That is what "match $R$" says: whatever $g$ adds to $f_z$ must be $0$.

**Checking the answer on one path.** Straight from $(0, 0, 0)$ to $(1, 2, 3)$: $\\mathbf r = \\langle t, 2t, 3t \\rangle$, $\\mathbf F = \\langle 4t^2 + 3t, t^2, t \\rangle$, $\\mathbf r' = \\langle 1, 2, 3 \\rangle$, so $\\mathbf F \\cdot \\mathbf r' = 4t^2 + 3t + 2t^2 + 3t = 6t^2 + 6t$ and $\\int_0^1 (6t^2 + 6t)\\, dt = 2 + 3 = 5$ ✓.
<<<
:::

:::check
Find $\\int_C \\langle 2xy + z,\\ x^2,\\ x \\rangle \\cdot d\\mathbf r$ along any path from $(1, 0, 0)$ to $(1, 1, 2)$.
answer: 3
???
The field is conservative with $f = x^2 y + xz$ on all of space. $f(1, 1, 2) = 1 + 2 = 3$ and $f(1, 0, 0) = 0 + 0 = 0$, so the integral is $3 - 0 = 3$.
:::

:::summary Summary
- A region is **open** (a small ball around every point fits inside), **connected** (paths join any two points), and **simply connected** (every loop shrinks to a point inside it, which means every loop is the edge of a surface inside it).
- In space, a missing **point** is not a hole: loops can go around it. A missing **line** is a hole: loops can wrap around it.
- Zero curl on a simply connected region means conservative. With a line removed the test can't decide: the swirl field gives $2\\pi$ around the axis and isn't conservative, while $\\langle x, y, 0 \\rangle / (x^2 + y^2)$ gives $0$ and has the potential $\\ln\\sqrt{x^2 + y^2}$.
- The inverse-square field $\\langle x, y, z \\rangle / \\rho^3$ has zero curl on space minus the origin, which is simply connected, so it is conservative, with potential $-1/\\rho$. This is the field of Dec 7.

**Common mistakes:**
- Calling a region "no holes" because it looks solid: removing a whole line, as in $x^2 + y^2$ in a denominator, makes a hole.
- Using the plane's rule "a missing point is a hole" in space.
- Concluding "conservative" from zero curl without checking where the field is defined, or "not conservative" without finding a loop that gives something other than $0$.
:::
`;export{e as default};