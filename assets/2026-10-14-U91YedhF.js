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

**Why matching all three is enough** (on a region with no holes): it's the 3D version of Oct 12's tiny-square argument, with tiny squares facing every direction. That argument is Stokes' Theorem (Nov 30).

**Why each new "constant" depends on the other variables.** When you integrate $P$ with respect to $x$, anything without an $x$ in it has $x$-derivative $0$. So the "constant" can be any function $g(y, z)$. Matching $Q$ pins down how $g$ depends on $y$, leaving an unknown $h(z)$, and matching $R$ pins down $h$.
+++
**Example.** $\\mathbf F = \\langle yz,\\; xz + 2y,\\; xy + 1 \\rangle$.

**Test.** $P_y = z = Q_x$, $P_z = y = R_x$, and $Q_z = x = R_y$. ✓ All three match, and the domain is all of $\\mathbb R^3$.

**Build $f$.** Integrate $P$ in $x$: $f = xyz + g(y,z)$. Match $Q$: $xz + g_y = xz + 2y$, so $g = y^2 + h(z)$. Match $R$: $xy + h'(z) = xy + 1$, so $h = z$.
$$f = xyz + y^2 + z.$$

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

**Why each link holds:**
- **1 gives 2.** The Fundamental Theorem (Oct 9) says every path from $A$ to $B$ gives $f(B) - f(A)$, so the route doesn't matter.
- **2 and 3 are the same.** Two paths $C_1$ and $C_2$ from $A$ to $B$ make a closed loop: out along $C_1$, back along $-C_2$. The loop integral is $\\int_{C_1} - \\int_{C_2}$, so "every loop gives $0$" says exactly "every two paths agree."
- **2 gives 1.** Define $f(x, y)$ as the integral of $\\mathbf F$ from a fixed starting point to $(x, y)$. Path independence makes that a single number, and its partials are $f_x = P$ and $f_y = Q$ (Oct 12, "Is the condition enough?").
- **1 gives 4.** $P_y = f_{xy} = f_{yx} = Q_x$, by equal mixed partials.
- **4 gives 1 only without holes.** Matching cross-partials make every *tiny* loop give $0$. A big loop can be built from tiny ones only if no hole is in the way (Oct 12).
+++
**Why 4 needs no holes.** The swirl field $\\langle -y, x \\rangle/(x^2+y^2)$ on the plane minus the origin satisfies 4 but gives $2\\pi$ around the unit circle, so 3 fails. The cross-partials only control tiny loops, and a loop around a hole can't be built from tiny loops inside the region.
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

**Given a picture.**
- **Read off the formula, then use the steps above.** Check easy points such as $(1, 0)$ and $(0, 1)$ to see which formula matches (Oct 7).
- **Or find a loop the field pushes you around.** Suppose that around some closed loop, the arrows point the way you're going on some stretches and are perpendicular to your motion on the rest, never against it. Then every step's work $\\mathbf F \\cdot d\\mathbf r$ is $\\ge 0$, and some are $> 0$, so the loop integral is positive. A conservative field gives $0$ around every loop, so this one isn't conservative.

A picture can prove a field is *not* conservative, but it can't prove one *is*: you can't check every loop by eye. When a question says "exactly one is conservative," rule out the others.

**Given integral values.** If two paths with the same start and end give different values, or a closed loop gives anything other than $0$, it's **not conservative**. Why: a conservative field gives $f(B) - f(A)$ for every path from $A$ to $B$ (Oct 9). But values that agree for a few paths prove nothing, because "conservative" means *every* path agrees.
+++
**One worked example for each outcome.**
- $\\langle 2xy + 1,\\; x^2 \\rangle$: $P_y = 2x = Q_x$, defined everywhere, so conservative, with $f = x^2 y + x$.
- $\\langle xy,\\; x^2 \\rangle$: $P_y = x$ but $Q_x = 2x$. They agree only on the line $x = 0$, so it's not conservative.
- $\\langle -y, x \\rangle / (x^2 + y^2)$: the cross-partials match, but it's undefined at the origin, and the unit circle gives $2\\pi$. Not conservative.
- $\\langle yz,\\; xz,\\; xy + 2z \\rangle$: $P_y = z = Q_x$, $P_z = y = R_x$, $Q_z = x = R_y$, defined everywhere, so conservative, with $f = xyz + z^2$.
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
+++
**Then why isn't the swirl field conservative?** It's a gradient near every point, but no single $f$ works on the whole region: if one did, the integral around the unit circle would be $f(A) - f(A) = 0$, not $2\\pi$. The angle shows what goes wrong. Following $\\theta$ once around the origin brings you back to the same point with $\\theta$ larger by $2\\pi$, so $\\theta$ can't be one continuous function on the whole plane minus the origin.
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
+++
**Example of step 4.** $\\mathbf F = \\langle 2xy,\\; x^2 + x \\rangle$ along $\\mathbf r(t) = \\langle t, t^2 \\rangle$, $0 \\le t \\le 1$.

The test fails ($P_y = 2x$ but $Q_x = 2x + 1$), so split it: $\\mathbf F = \\nabla(x^2 y) + \\langle 0, x \\rangle$.

- Gradient part: $x^2 y$ from $(0,0)$ to $(1,1)$ gives $1 - 0 = 1$.
- Leftover $\\langle 0, x \\rangle$: $\\int_C x\\, dy = \\int_0^1 t \\cdot 2t\\, dt = \\tfrac23$.

Total: $1 + \\tfrac23 = \\tfrac53$. (Computing directly: $\\mathbf F(\\mathbf r) \\cdot \\mathbf r' = 2t^3 + (t^2 + t)(2t) = 4t^3 + 2t^2$, and $\\int_0^1 = 1 + \\tfrac23$. ✓)
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