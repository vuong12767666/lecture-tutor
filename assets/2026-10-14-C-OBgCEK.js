var e=`---
title: Conservative vector fields II
date: 2026-10-14
stewart: 16.3
source: OpenStax Calculus Volume 3, §6.3 Conservative Vector Fields
---

:::recap Last time
- [[cross-partials|Cross-partials test]]: $P_y = Q_x$ is necessary for $\\mathbf F$ to be conservative, and on a [[simply connected]] region it's also sufficient.
- Find a [[potential function]] one variable at a time.
- Holes matter: $\\langle -y, x \\rangle / (x^2 + y^2)$ passes the test but isn't conservative.
:::

:::check
Warm-up: find a potential function for $\\mathbf F = \\langle 2x,\\; 2y \\rangle$.
answer-up-to-constant: x^2 + y^2
???
$f = x^2 + y^2$, since $\\nabla f = \\langle 2x, 2y \\rangle$. Any $x^2 + y^2 + C$ also works.
:::

:::question Today
How does the test work in 3D? How do path independence, closed loops, and the cross-partials test fit together? And what's the fastest way to do any line integral?
:::

:::idea Conservative fields in 3D
For $\\mathbf F = \\langle P, Q, R \\rangle$ on a simply connected region in $\\mathbb R^3$ (no holes that a loop can wrap around), $\\mathbf F$ is conservative exactly when **all three** cross-partial pairs match:
$$P_y = Q_x, \\qquad P_z = R_x, \\qquad Q_z = R_y.$$
Then find $f$ the same way as in 2D, one variable at a time. Each new "constant" depends on one fewer variable.

**Why all three pairs must match.** If $\\mathbf F = \\nabla f$, then $P = f_x$, $Q = f_y$, and $R = f_z$. Each pair of variables gives a pair of equal mixed partials:
$$P_y = f_{xy} = f_{yx} = Q_x, \\qquad P_z = f_{xz} = f_{zx} = R_x, \\qquad Q_z = f_{yz} = f_{zy} = R_y.$$
Checking only one pair isn't enough. $\\langle z, 0, 0 \\rangle$ has $P_y = 0 = Q_x$, but $P_z = 1 \\neq 0 = R_x$. Around the square $(0,0,0) \\to (1,0,0) \\to (1,0,1) \\to (0,0,1) \\to (0,0,0)$ in the $xz$-plane, its integral is $-1$ (only the top edge contributes: $z = 1$ while $x$ goes from $1$ to $0$), so it isn't conservative.
>>> The one-pair check and the square, for $\\langle z, 0, 0 \\rangle$
**The three pairs.** $P = z$, $Q = 0$, $R = 0$.
- $P_y$ vs $Q_x$: $P = z$ doesn't change when only $y$ changes: $(0, 0, 1)$ and $(0, 5, 1)$ both give $P = 1$. So $P_y = 0$, and $Q_x = 0$. They match.
- $P_z$ vs $R_x$: moving from $(0, 0, 0)$ to $(0, 0, 1)$, $P$ goes from $0$ to $1$, so $P_z = 1$. But $R$ is $0$ everywhere, so $R_x = 0$. They differ.
- $Q_z = 0 = R_y$. They match.

**The square in the $xz$-plane**, where every point has $y = 0$. On each edge, only the part of $\\mathbf F$ pointing along the edge counts.
1. **$(0,0,0) \\to (1,0,0)$, moving in $+x$.** The $x$ part is $P = z = 0$ here. Adds $0$.
2. **$(1,0,0) \\to (1,0,1)$, moving in $+z$.** The $z$ part is $R = 0$. Adds $0$.
3. **$(1,0,1) \\to (0,0,1)$, moving in $-x$.** Here $z = 1$, so $P = 1$, pointing in $+x$, against the motion. Adds $-1 \\times 1 = -1$.
4. **$(0,0,1) \\to (0,0,0)$, moving in $-z$.** $R = 0$. Adds $0$.

**Total:** $-1$. A conservative field gives $0$ around every loop, so this one isn't conservative. Checking only $P_y = Q_x$ would have missed it.
<<<

**Why matching all three is enough** (on a region with no holes): it's the 3D version of Oct 12's tiny-square argument, with tiny squares facing every direction. That argument is Stokes' Theorem (Nov 30).

**Why each new "constant" depends on the other variables.** When you integrate $P$ with respect to $x$, anything without an $x$ in it has $x$-derivative $0$. So the "constant" can be any function $g(y, z)$. Matching $Q$ pins down how $g$ depends on $y$, leaving an unknown $h(z)$, and matching $R$ pins down $h$.
>>> Building $f$ one variable at a time, for $\\langle yz,\\; xz + 2y,\\; xy + 1 \\rangle$
1. **Test.** $P_y = z = Q_x$, $P_z = y = R_x$, and $Q_z = x = R_y$. All three match, and the field has a value at every point of $\\mathbb R^3$, so there are no holes.
2. **Integrate $P = yz$ in $x$.** While $x$ moves, $y$ and $z$ don't change, so $yz$ is one number. For example, at $y = 2$, $z = 3$, $P = 6$, which integrates to $6x$. In general, $f = xyz + g(y, z)$.
3. **Why $g(y, z)$.** A term like $y^2$ or $z$ has no $x$ in it. It has the same value at $(0, 2, 3)$ and $(9, 2, 3)$, so its $x$-derivative is $0$, and integrating $P$ can't see it.
4. **Match $Q$.** The $y$-derivative of $xyz + g$ is $xz + g_y$. Set it equal to $Q = xz + 2y$: $g_y = 2y$, so $g = y^2 + h(z)$.
5. **Match $R$.** The $z$-derivative of $xyz + y^2 + h(z)$ is $xy + h'(z)$. Set it equal to $R = xy + 1$: $h'(z) = 1$, so $h = z$.
6. **Answer and check.** $f = xyz + y^2 + z$. At $(1, 2, 3)$: $\\nabla f = \\langle yz,\\; xz + 2y,\\; xy + 1 \\rangle = \\langle 6, 7, 3 \\rangle$, and $\\mathbf F(1, 2, 3) = \\langle 6, 3 + 4, 2 + 1 \\rangle = \\langle 6, 7, 3 \\rangle$. ✓
<<<

**Preview.** The three differences $R_y - Q_z$, $P_z - R_x$, $Q_x - P_y$ form a vector called the **curl** of $\\mathbf F$ (§16.5, later in the course). "All three match" is the same as "curl $= \\mathbf 0$."
:::

:::check
Find a potential function for $\\mathbf F = \\langle 2x + yz,\\; xz,\\; xy + 3z^2 \\rangle$.
answer-up-to-constant: x^2 + xyz + z^3
???
Integrate $P$ in $x$: $f = x^2 + xyz + g(y,z)$. Match $Q$: $xz + g_y = xz$, so $g_y = 0$ and $g = h(z)$. Match $R$: $xy + h'(z) = xy + 3z^2$, so $h = z^3$.
$$f = x^2 + xyz + z^3.$$
Check: $\\nabla f = \\langle 2x + yz,\\; xz,\\; xy + 3z^2 \\rangle$. ✓
:::

:::idea Four ways to say conservative
On an open, connected region $D$, these three statements are **equivalent** (each one implies the others):

1. $\\mathbf F = \\nabla f$ for some $f$ on $D$.
2. $\\int_C \\mathbf F \\cdot d\\mathbf r$ is [[path independent]] in $D$.
3. $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$ for every closed curve $C$ in $D$.

A fourth statement, **4. the cross-partials match**, follows from 1 whenever $\\mathbf F$ has continuous partial derivatives (because mixed partials of $f$ are equal). But it only implies 1 when $D$ is **simply connected**.
>>> Why 4 needs no holes, with the swirl field
The swirl field $\\left\\langle \\frac{-y}{x^2+y^2}, \\frac{x}{x^2+y^2} \\right\\rangle$ lives on the plane minus the origin, which has a hole at $(0, 0)$.
- **Statement 4 holds.** Both cross-partials equal $\\frac{y^2 - x^2}{(x^2+y^2)^2}$. For example, at $(1, 2)$ both are $\\frac{3}{25}$.
- **Statement 3 fails.** Around the unit circle the integral is $2\\pi$, not $0$ (Oct 12).

So 4 can be true while 3, and with it 1 and 2, are false. The reason: matching cross-partials only make each *tiny* loop give $0$. To get a big loop from tiny loops, the tiny squares must fill the inside of the big loop. Inside the unit circle there is the point $(0, 0)$, where the field has no value, so the squares can't fill it.
<<<

**Why each link holds:**
- **1 gives 2.** The Fundamental Theorem (Oct 9) says every path from $A$ to $B$ gives $f(B) - f(A)$, so the route doesn't matter.
- **2 and 3 are the same.** Two paths $C_1$ and $C_2$ from $A$ to $B$ make a closed loop: out along $C_1$, back along $-C_2$. The loop integral is $\\int_{C_1} - \\int_{C_2}$, so "every loop gives $0$" says exactly "every two paths agree."
- **2 gives 1.** Define $f(x, y)$ as the integral of $\\mathbf F$ from a fixed starting point to $(x, y)$. Path independence makes that a single number, and its partials are $f_x = P$ and $f_y = Q$ (Oct 12, "Is the condition enough?").
- **1 gives 4.** $P_y = f_{xy} = f_{yx} = Q_x$, by equal mixed partials.
- **4 gives 1 only without holes.** Matching cross-partials make every *tiny* loop give $0$. A big loop can be built from tiny ones only if no hole is in the way (Oct 12).
>>> Each link, with numbers, for $\\mathbf F = \\langle 2xy, x^2 \\rangle = \\nabla(x^2 y)$
Take $A = (0, 0)$ and $B = (1, 1)$.

**1 gives 2.** Every path from $A$ to $B$ gives $f(B) - f(A) = 1 - 0 = 1$. Two paths, worked out:
- Along $y = x$, with $\\mathbf r = \\langle t, t \\rangle$: $\\mathbf F = \\langle 2t^2, t^2 \\rangle$ and $\\mathbf r' = \\langle 1, 1 \\rangle$. The dot product is $3t^2$, and $\\int_0^1 3t^2\\,dt = 1$.
- Along $y = x^2$, with $\\mathbf r = \\langle t, t^2 \\rangle$: $\\mathbf F = \\langle 2t^3, t^2 \\rangle$ and $\\mathbf r' = \\langle 1, 2t \\rangle$. The dot product is $2t^3 + 2t^3 = 4t^3$, and $\\int_0^1 4t^3\\,dt = 1$.

**2 and 3 are the same.** Go out along $y = x^2$ (gives $1$) and come back along $y = x$ walked backward (gives $-1$). That's a closed loop, and its integral is $1 - 1 = 0$. In general the loop gives (first path) $-$ (second path), so the loop is $0$ exactly when the two paths agree.

**2 gives 1.** Define $f$ at a point as the integral from $(0, 0)$ to that point. For example, at $(1, 1)$ that's $1$, which matches $x^2 y = 1$.

**1 gives 4.** $P_y = 2x$ and $Q_x = 2x$. At $(3, 1)$ both are $6$.
<<<
:::

:::check
On the plane minus the origin, which statement does **not** guarantee that $\\mathbf F$ is conservative?
- [x] $P_y = Q_x$ everywhere in the region
- [ ] Every closed-loop integral in the region is $0$
  why: This one does guarantee it. Zero around every loop is equivalent to conservative on any open, connected region, with or without holes.
- [ ] $\\mathbf F = \\nabla f$ for some $f$ defined on the region
  why: This one does guarantee it, because it's the definition of conservative.
- [ ] Line integrals in the region are path independent
  why: This one does guarantee it. Path independence is equivalent to conservative on any open, connected region.
???
The cross-partials test needs a simply connected region, and the plane minus the origin has a hole. The swirl field is a counterexample. The other three statements are each equivalent to being conservative on any open, connected region.
:::

:::idea Deciding: conservative or not?
On an exam, a field comes as a formula, a picture, or some integral values. Here's what to do with each, and why each step is valid.

**Given a formula.**
1. Compute the cross-partials: $P_y$ and $Q_x$ (in 3D, also $P_z$ vs $R_x$ and $Q_z$ vs $R_y$).
2. If any pair differs anywhere in the region, it's **not conservative**. Why: a conservative field has $P = f_x$ and $Q = f_y$, so $P_y = f_{xy} = f_{yx} = Q_x$ at *every* point. One mismatch rules it out.
3. If every pair matches, look at where $\\mathbf F$ is defined. If it's defined everywhere (built from polynomials, $e^x$, $\\sin$, $\\cos$), or on a region with no holes, it's **conservative**. Why: with no holes, matching cross-partials make every closed loop give $0$ (Oct 12). To be sure, find $f$ and check that $\\nabla f = \\mathbf F$.
4. If every pair matches but $\\mathbf F$ is undefined somewhere, such as at the origin when you divide by $x^2 + y^2$, the test can't decide. Compute the integral around a loop circling that point. If it isn't $0$, it's **not conservative** (the swirl field gives $2\\pi$). If you can find one $f$ that works on the whole region, it's **conservative**.
>>> The four steps, walked through on actual fields
**Step 3 case: $\\langle 2xy + 1,\\; x^2 \\rangle$.**
1. $P_y = 2x$ (the $1$ has no $y$, so it gives $0$) and $Q_x = 2x$.
2. They match at every point, for example both are $2$ at $(1, 5)$.
3. It's built from polynomials, so it has a value everywhere: no holes. Conservative. To be sure: $f = x^2 y + x$ has $f_x = 2xy + 1$ and $f_y = x^2$. ✓

**Step 2 case: $\\langle xy,\\; x^2 \\rangle$.**
1. $P_y = x$ and $Q_x = 2x$.
2. At $(1, 0)$: $P_y = 1$ but $Q_x = 2$. One point where they differ is enough. Not conservative. (They agree only on the line $x = 0$.)

**Step 4 case: the swirl field $\\left\\langle \\frac{-y}{x^2+y^2}, \\frac{x}{x^2+y^2} \\right\\rangle$.**
1. Both cross-partials are $\\frac{y^2 - x^2}{(x^2+y^2)^2}$. They match.
2. At $(0, 0)$ it divides by $0$, so it's undefined there: the region has a hole, and the test can't decide.
3. Loop around the hole: the unit circle gives $2\\pi \\ne 0$. Not conservative.

**3D: $\\langle yz,\\; xz,\\; xy + 2z \\rangle$.** $P_y = z = Q_x$, $P_z = y = R_x$, $Q_z = x = R_y$, and it's defined everywhere. Conservative, with $f = xyz + z^2$. Check at $(1, 1, 1)$: $\\nabla f = \\langle 1, 1, 3 \\rangle = \\mathbf F(1, 1, 1)$. ✓
<<<

**Given a picture.**
- **Read off the formula, then use the steps above.** Check easy points such as $(1, 0)$ and $(0, 1)$ to see which formula matches (Oct 7).
- **Or find a loop the field pushes you around.** Suppose that around some closed loop, the arrows point the way you're going on some stretches and are perpendicular to your motion on the rest, never against it. Then every step's work $\\mathbf F \\cdot d\\mathbf r$ is $\\ge 0$, and some are $> 0$, so the loop integral is positive. A conservative field gives $0$ around every loop, so this one isn't conservative.
>>> The loop argument, on $\\langle y, 0 \\rangle$ from the figure
Use the square with corners $(\\pm 1, \\pm 1)$, walked clockwise. Each arrow $\\langle y, 0 \\rangle$ points left or right, with length $|y|$.
1. **Top edge, $(-1, 1)$ to $(1, 1)$, moving right.** Here $y = 1$, so each arrow is $\\langle 1, 0 \\rangle$, pointing right, the same way you move. Adds $1 \\times 2 = 2$.
2. **Right edge, $(1, 1)$ to $(1, -1)$, moving down.** The arrows are horizontal and you move vertically, so the part pointing along your motion is $0$. Adds $0$.
3. **Bottom edge, $(1, -1)$ to $(-1, -1)$, moving left.** Here $y = -1$, so each arrow is $\\langle -1, 0 \\rangle$, pointing left, the same way you move. Adds $1 \\times 2 = 2$.
4. **Left edge, moving up.** Horizontal arrows, vertical motion. Adds $0$.

**Total:** $4 > 0$. Every edge added $0$ or more and two added more, so the total can't be $0$. The formula agrees: $P_y = 1$ but $Q_x = 0$.
<<<

A picture can prove a field is *not* conservative, but it can't prove one *is*: you can't check every loop by eye. When a question says "exactly one is conservative," rule out the others.

**Given integral values.** If two paths with the same start and end give different values, or a closed loop gives anything other than $0$, it's **not conservative**. Why: a conservative field gives $f(B) - f(A)$ for every path from $A$ to $B$ (Oct 9). But values that agree for a few paths prove nothing, because "conservative" means *every* path agrees.
>>> Why two agreeing paths prove nothing, with numbers
Take $\\mathbf F = \\langle 0, x \\rangle$, which is not conservative ($P_y = 0$ but $Q_x = 1$). Go from $(0, 0)$ to $(1, 1)$. Only the $y$ part, $Q = x$, counts, and only while moving up or down.
- **Straight line** $\\mathbf r = \\langle t, t \\rangle$: the dot product is $0 \\cdot 1 + t \\cdot 1 = t$, and $\\int_0^1 t\\,dt = \\tfrac12$.
- **Right to $(\\tfrac12, 0)$, up to $(\\tfrac12, 1)$, right to $(1, 1)$:** the right moves add $0$. The up move has $x = \\tfrac12$ for a distance of $1$, adding $\\tfrac12$. Total $\\tfrac12$.
- **Right to $(1, 0)$, then up to $(1, 1)$:** the up move has $x = 1$ for a distance of $1$. Total $1$.

The first two paths agree ($\\tfrac12$ and $\\tfrac12$), but the third gives $1$. If you had only seen the first two, you might have guessed "conservative" and been wrong. One disagreement, like $\\tfrac12$ vs $1$, does prove "not conservative."
<<<
:::

:::figure conservative-picture
Left: $\\langle y, 0 \\rangle$ and a clockwise loop. Along the top edge you move right and the arrows point right. Along the bottom edge you move left and the arrows point left. On the two sides the arrows are horizontal while you move vertically, so they do no work there. The loop integral is positive, so $\\langle y, 0 \\rangle$ is **not** conservative, even though every arrow points straight left or right. Right: $\\langle x, y \\rangle$ and a circle. The arrows point straight out, perpendicular to the circle everywhere, so they do no work around it. That fits $\\langle x, y \\rangle = \\nabla\\big(\\tfrac{x^2 + y^2}{2}\\big)$, which is conservative.
:::

:::check
Is $\\mathbf F = \\langle e^y,\\; x e^y + 2y \\rangle$ conservative on the whole plane?
- [x] Yes
- [ ] No, because $P_y \\neq Q_x$
  why: $P_y = e^y$ and $Q_x = e^y$. They match.
- [ ] Can't tell without computing a loop integral
  why: A loop is only needed when the field is undefined somewhere. This one is defined everywhere, so the plane has no holes, and matching cross-partials settle it.
???
$P_y = e^y = Q_x$, and $\\mathbf F$ is defined on the whole plane, which has no holes. So it's conservative. A potential is $f = x e^y + y^2$: $f_x = e^y$ ✓ and $f_y = x e^y + 2y$ ✓.
:::

:::check
In a picture of $\\mathbf F$, every arrow to the right of the $y$-axis points straight up, and every arrow to the left of it points straight down. You go once counterclockwise around a square centered at the origin. What does that tell you?
- [x] The loop integral is positive, so $\\mathbf F$ is not conservative
- [ ] The loop integral is $0$, so $\\mathbf F$ is conservative
  why: On the right edge you move up and the arrows point up. On the left edge you move down and the arrows point down. Both push you along, and the top and bottom edges do no work (vertical arrows, horizontal motion). So it's positive. Also, $0$ around one loop wouldn't prove conservative; it has to be $0$ around every loop.
- [ ] The loop integral is negative, so $\\mathbf F$ is not conservative
  why: The arrows point the way you're going on both vertical edges, so the work there is positive.
- [ ] You can't tell from a picture
  why: A picture can't prove a field *is* conservative, but one loop with a nonzero integral proves it *isn't*.
???
The field pushes you along on both vertical edges and does no work on the horizontal ones, so the loop integral is positive. A conservative field would give $0$, so it isn't conservative. (A formula with this picture is $\\langle 0, x \\rangle$: $P_y = 0$ but $Q_x = 1$. Around the square $-1 \\le x, y \\le 1$, the loop integral is $4$.)
:::

:::check
Along one path from $(0, 0)$ to $(1, 1)$, $\\int \\mathbf F \\cdot d\\mathbf r = 2$. Along a different path between the same points, it's also $2$. What can you conclude?
- [ ] $\\mathbf F$ is conservative
  why: Conservative means *every* pair of paths agrees. Two agreeing paths don't rule out a third that disagrees.
- [ ] $\\mathbf F$ is not conservative
  why: Nothing here disagrees. Two paths giving the same value is exactly what a conservative field would do.
- [x] Nothing yet
???
Nothing yet. Agreement on two paths is consistent with being conservative but doesn't prove it. A *disagreement* would prove it isn't. To decide, use the formula test.
:::

:::idea Closed loops
For a closed curve, $\\oint_C$ means the curve ends where it starts.

- If $\\mathbf F$ is conservative on a region containing $C$: $\\oint_C \\mathbf F \\cdot d\\mathbf r = 0$, with no computation, because the curve ends where it starts and $f(A) - f(A) = 0$.
- If you find one closed loop with a **nonzero** integral, then $\\mathbf F$ is **not** conservative, since a conservative field would have given $0$.
- For the swirl field, the integral around a loop counts how many times the loop **winds around the hole**: $2\\pi$ for once counterclockwise, and $0$ for a loop that doesn't go around the origin.

**Why the swirl field counts windings.** Near any point (away from the origin), the swirl field is the gradient of the polar angle $\\theta$. Check: where $x > 0$, $\\theta = \\arctan(y/x)$, and differentiating gives $\\theta_x = \\dfrac{-y}{x^2 + y^2}$ and $\\theta_y = \\dfrac{x}{x^2 + y^2}$. (Elsewhere $\\theta$ is given by other formulas that differ from this one by a constant, so the partials are the same.) So along any stretch of path, the integral is the change in $\\theta$ along it (the Fundamental Theorem, Oct 9). Follow $\\theta$ continuously around the loop. If the loop doesn't go around the origin, $\\theta$ ends up back where it started, so the total is $0$. Each counterclockwise trip around the origin increases $\\theta$ by $2\\pi$.
>>> Following $\\theta$ around two loops, with numbers
**The unit circle (goes around the origin).** Start at $(1, 0)$, where $\\theta = 0$. Walking counterclockwise, $\\theta$ is $\\tfrac{\\pi}{2}$ at $(0, 1)$, $\\pi$ at $(-1, 0)$, $\\tfrac{3\\pi}{2}$ at $(0, -1)$, and $2\\pi$ back at $(1, 0)$. Total change: $2\\pi$, which is the loop integral.

**The circle of radius $1$ centered at $(5, 0)$ (doesn't go around the origin).** Start at $(6, 0)$, where $\\theta = 0$. At the top, $(5, 1)$, $\\theta = \\arctan\\tfrac15 \\approx 0.197$. At $(4, 0)$, $\\theta = 0$ again. At $(5, -1)$, $\\theta \\approx -0.197$. Back at $(6, 0)$, $\\theta = 0$. It goes up a little and comes back down, so the total change is $0$, and so is the loop integral.

**Then why isn't the swirl field conservative?** A conservative field needs one $f$ that works on the whole region. If one did, the unit circle would give $f(1, 0) - f(1, 0) = 0$, not $2\\pi$. The angle can't be that $f$: following it once around brings you back to $(1, 0)$ with $\\theta = 2\\pi$ instead of $0$.
<<<
:::

:::check
Find $\\displaystyle\\oint_C \\nabla\\!\\left(x^3 y + e^y\\right) \\cdot d\\mathbf r$, where $C$ is the unit circle.
answer: 0
???
It's a gradient field, and $x^3 y + e^y$ is defined everywhere, so around any closed curve the integral is $f(A) - f(A) = 0$.
:::

:::idea A strategy for any line integral
For $\\int_C \\mathbf F \\cdot d\\mathbf r$, work down this list:

1. **Is $C$ closed and $\\mathbf F$ conservative** (cross-partials match, no holes)? Then the answer is $0$, since $f(A) - f(A) = 0$.
2. **Is $\\mathbf F$ conservative?** Find $f$ and compute $f(B) - f(A)$. The path's shape doesn't matter (Fundamental Theorem, Oct 9).
3. **Otherwise**, parametrize and compute $\\int \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt$.
4. **Almost conservative?** Split $\\mathbf F$ into a gradient part plus a simple leftover. Use the shortcut on the first part and compute only the leftover directly.

**Why splitting works.** The dot product distributes, $(\\mathbf F_1 + \\mathbf F_2) \\cdot \\mathbf r' = \\mathbf F_1 \\cdot \\mathbf r' + \\mathbf F_2 \\cdot \\mathbf r'$, and integrals of sums are sums of integrals. So $\\int_C (\\mathbf F_1 + \\mathbf F_2) \\cdot d\\mathbf r = \\int_C \\mathbf F_1 \\cdot d\\mathbf r + \\int_C \\mathbf F_2 \\cdot d\\mathbf r$, and each part can be done its own way.
>>> Step 4, worked out for $\\langle 2xy,\\; x^2 + x \\rangle$ along $\\mathbf r(t) = \\langle t, t^2 \\rangle$
1. **Steps 1 and 2 first.** The path isn't closed (it starts at $(0, 0)$ and ends at $(1, 1)$), and the test fails: $P_y = 2x$ but $Q_x = 2x + 1$. At $(1, 1)$ that's $2$ vs $3$. So it isn't conservative.
2. **Find the gradient part.** Integrating $P = 2xy$ in $x$ gives $x^2 y$, and $\\nabla(x^2 y) = \\langle 2xy, x^2 \\rangle$. That matches $\\mathbf F$ except for the extra $x$ in the second part.
3. **Find the leftover.** Subtract: $\\langle 2xy, x^2 + x \\rangle - \\langle 2xy, x^2 \\rangle = \\langle 0, x \\rangle$.
4. **The gradient part, by the shortcut.** The path runs from $\\mathbf r(0) = (0, 0)$ to $\\mathbf r(1) = (1, 1)$, so it gives $f(1, 1) - f(0, 0) = 1 - 0 = 1$.
5. **The leftover, directly.** On the path $x = t$ and $\\mathbf r' = \\langle 1, 2t \\rangle$, so $\\langle 0, t \\rangle \\cdot \\langle 1, 2t \\rangle = 2t^2$, and $\\int_0^1 2t^2\\,dt = \\tfrac23$.
6. **Add.** $1 + \\tfrac23 = \\tfrac53$.

**Check by computing the whole thing directly.** $\\mathbf F(\\mathbf r) = \\langle 2t^3, t^2 + t \\rangle$, and its dot product with $\\langle 1, 2t \\rangle$ is $2t^3 + 2t^3 + 2t^2 = 4t^3 + 2t^2$. Then $\\int_0^1 (4t^3 + 2t^2)\\,dt = 1 + \\tfrac23 = \\tfrac53$. ✓
<<<
:::

:::check
Find $\\displaystyle\\int_C \\langle y,\\; x + 1 \\rangle \\cdot d\\mathbf r$ along any path from $(0, 0)$ to $(2, 3)$.
answer: 9
???
$P_y = 1 = Q_x$ on all of $\\mathbb R^2$, so it's conservative with $f = xy + y$. The answer is $f(2,3) - f(0,0) = (6 + 3) - 0 = 9$.
:::

:::summary Summary
- In 3D, conservative on a simply connected region means $P_y = Q_x$, $P_z = R_x$, and $Q_z = R_y$.
- Gradient, path independent, and zero around every loop are equivalent. Cross-partials join them only when there are no holes.
- Strategy: closed and conservative gives $0$; conservative gives $f(B) - f(A)$; otherwise parametrize, or split off a gradient part.

**Common mistakes:**
- Checking only one of the three cross-partial pairs in 3D.
- Calling a field conservative on a region with a hole just because the partials match.
- Parametrizing a long path when the field is conservative.
:::
`;export{e as default};