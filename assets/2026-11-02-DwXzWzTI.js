var e=`---
title: Changing coordinates II
date: 2026-11-02
stewart: 15.9
source: OpenStax Calculus Volume 3, §5.7 Change of Variables in Multiple Integrals
---

:::recap Last time
- A transformation $x = x(u, v)$, $y = y(u, v)$ carries a region $S$ to a region $D$.
- $\\displaystyle\\iint_D f\\, dA = \\iint_S f\\,\\Big|\\frac{\\partial(x, y)}{\\partial(u, v)}\\Big|\\, du\\, dv$, where the [[jacobian|Jacobian]] $x_u y_v - x_v y_u$ measures how much small areas stretch.
- Shortcut: $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = 1 \\Big/ \\dfrac{\\partial(u, v)}{\\partial(x, y)}$.
:::

:::check
Warm-up: what is the Jacobian $\\dfrac{\\partial(x, y)}{\\partial(u, v)}$ of $x = 2u$, $y = 3v$?
answer: 6
???
$x_u = 2$, $x_v = 0$, $y_u = 0$, $y_v = 3$, so $x_u y_v - x_v y_u = 6 - 0 = 6$. A $1 \\times 1$ square becomes a $2 \\times 3$ rectangle, which has area $6$.
:::

:::question Today
Last time the edges were straight lines. How do you choose $u$ and $v$ when the edges are curves like $xy = 1$, or when the region is an ellipse? And how does the same idea work for triple integrals?
:::

:::idea Curved edges: let the edges choose $u$ and $v$
**The recipe.** Write each pair of opposite edges as "some expression $=$ number". Make one expression $u$ and the other $v$. Then the region becomes a rectangle in $u$ and $v$.

**Example.** Find the area of the region $D$ in the first quadrant between the curves $xy = 1$ and $xy = 3$ and the lines $y = x$ and $y = 3x$.
1. **Choose $u$ and $v$.** Two edges are $xy = 1$ and $xy = 3$, so let $u = xy$. The other two are $y = x$ and $y = 3x$, which say $\\tfrac yx = 1$ and $\\tfrac yx = 3$, so let $v = \\tfrac yx$.
2. **The new region:** $1 \\le u \\le 3$ and $1 \\le v \\le 3$.
3. **The Jacobian, with the shortcut:** $\\dfrac{\\partial(u, v)}{\\partial(x, y)} = \\dfrac{2y}{x} = 2v$, so $\\left|\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right| = \\dfrac{1}{2v}$.
4. **Integrate:** $\\displaystyle\\text{Area} = \\int_1^3\\int_1^3 \\frac{1}{2v}\\, du\\, dv = 2 \\cdot \\frac{\\ln 3}{2} = \\ln 3 \\approx 1.10$.
>>> Each step of the example, worked out
**Step 1: rewriting the line edges.** $y = x$ and $y = 3x$ are lines through the origin. Divide both sides by $x$ (allowed, since $x > 0$ in the first quadrant): $\\tfrac yx = 1$ and $\\tfrac yx = 3$. So $\\tfrac yx$ is the combination that stays the same along each line: it's the slope from the origin to the point. For example, $(2, 2)$ and $(5, 5)$ both have $\\tfrac yx = 1$.

**Step 2: the new region, from the rules.** $D$ is between $xy = 1$ and $xy = 3$: $1 \\le xy \\le 3$, which is $1 \\le u \\le 3$. It's between the lines: $x \\le y \\le 3x$. Divide each part by $x$ (a positive number, so the "$\\le$" signs stay the same): $1 \\le \\tfrac yx \\le 3$, which is $1 \\le v \\le 3$. Check a point: $(1, 2)$ has $xy = 2$ and $\\tfrac yx = 2$, both between $1$ and $3$, so it's in $D$.

**Step 3: the Jacobian, with the shortcut.** $u = xy$: $u_x = y$ (with $y$ fixed, $xy$ changes at rate $y$) and $u_y = x$. $v = \\tfrac yx$: $v_y = \\tfrac1x$, and $v_x = -\\tfrac{y}{x^2}$ (the derivative of $\\tfrac1x$ is $-\\tfrac1{x^2}$). So
$$\\frac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = y \\cdot \\frac1x - x \\cdot \\left(-\\frac{y}{x^2}\\right) = \\frac yx + \\frac yx = \\frac{2y}{x}.$$
The integral will be in $u$ and $v$, so write this with them: $\\tfrac{2y}{x} = 2 \\cdot \\tfrac yx = 2v$. Flip it: $\\tfrac{1}{2v}$. (It's positive, so its absolute value is the same.) At the point $(1, 2)$, for example, $v = 2$, so a small $u, v$ square there stands for a piece of area $\\tfrac14$ as big.

**Step 4: the integral.** Inside, in $u$: $\\tfrac{1}{2v}$ doesn't involve $u$, so it's a number: $\\int_1^3 \\tfrac{1}{2v}\\, du = \\tfrac{1}{2v} \\times 2 = \\tfrac1v$. Outside: $\\int_1^3 \\tfrac1v\\, dv = \\ln 3 - \\ln 1 = \\ln 3$.

**Checks.** Solving for $x$ and $y$ directly ($uv = y^2$ and $\\tfrac uv = x^2$, so $y = \\sqrt{uv}$, $x = \\sqrt{u/v}$) and computing $x_u y_v - x_v y_u$ also gives $\\tfrac{1}{2v}$. Adding up the area of $D$ on a computer gives about $1.0986$, and $\\ln 3 \\approx 1.0986$ ✓.
<<<
:::

:::figure hyperbola-region-uv
The region $D$ between $xy = 1$, $xy = 3$, $y = x$, and $y = 3x$. With $u = xy$ and $v = \\tfrac yx$ it becomes the square $1 \\le u \\le 3$, $1 \\le v \\le 3$. The dashed curves are $u = 2$ (the curve $xy = 2$) and $v = 2$ (the line $y = 2x$); they cut $D$ into the images of four smaller squares.
:::

:::check
Over the same region $D$ ($1 \\le xy \\le 3$, $x \\le y \\le 3x$), compute $\\displaystyle\\iint_D xy\\, dA$.
answer: 2 ln(3)
???
The integrand $xy$ is $u$, and $|J| = \\tfrac{1}{2v}$:
$$\\int_1^3\\int_1^3 u \\cdot \\frac{1}{2v}\\, du\\, dv = \\left(\\int_1^3 u\\, du\\right)\\left(\\int_1^3 \\frac{1}{2v}\\, dv\\right) = 4 \\cdot \\frac{\\ln 3}{2} = 2\\ln 3.$$
($\\int_1^3 u\\, du = \\tfrac{9 - 1}{2} = 4$.)
:::

:::idea Ellipses: stretch a disk
An ellipse $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} \\le 1$ is a disk stretched by $a$ in the $x$-direction and $b$ in the $y$-direction. So use
$$x = au, \\qquad y = bv.$$
Then the ellipse becomes the unit disk $u^2 + v^2 \\le 1$, and the Jacobian is $ab$.

**Area of an ellipse.** $\\displaystyle\\iint_E 1\\, dA = \\iint_{u^2 + v^2 \\le 1} ab\\, du\\, dv = ab \\cdot \\pi$, since the unit disk has area $\\pi$. For a circle ($a = b = r$) that's $\\pi r^2$ ✓.

**Example.** $\\displaystyle\\iint_E x^2\\, dA$ over the ellipse $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} \\le 1$.
1. $x = 2u$, $y = 3v$, so the region is the unit disk and $|J| = 6$.
2. The integrand is $x^2 = 4u^2$.
3. $\\displaystyle\\iint_{u^2 + v^2 \\le 1} 4u^2 \\cdot 6\\, du\\, dv = 24\\iint_{u^2 + v^2 \\le 1} u^2\\, du\\, dv = 24 \\cdot \\frac\\pi4 = 6\\pi.$
>>> Each step, worked out
**Why the ellipse becomes the unit disk.** An ellipse is a circle stretched by different amounts in two directions. Undo the stretching: put $x = au$ and $y = bv$ into the ellipse's rule, and $\\tfrac{(au)^2}{a^2} + \\tfrac{(bv)^2}{b^2} = u^2 + v^2 \\le 1$. The $a^2$ and $b^2$ cancel, which is why these are the right stretches. For example, with $a = 2$, $b = 3$: the ellipse's rightmost point $(2, 0)$ has $u = 1$, $v = 0$, on the unit circle.

**The Jacobian.** $x_u = a$, $x_v = 0$, $y_u = 0$, $y_v = b$, so $x_u y_v - x_v y_u = ab$. In words: a $1 \\times 1$ square of the $u, v$ labels becomes an $a \\times b$ rectangle, so areas are multiplied by $ab$.

**In the example:** $a = 2$ (since $a^2 = 4$) and $b = 3$ (since $b^2 = 9$), so the factor is $6$, and $x^2 = (2u)^2 = 4u^2$.

**The last integral, in polar.** On the unit disk, use polar coordinates for $u$ and $v$: $u = r\\cos\\theta$, and a small piece has area $r\\, dr\\, d\\theta$:
$$\\iint_{u^2 + v^2 \\le 1} u^2\\, du\\, dv = \\int_0^{2\\pi}\\int_0^1 r^2\\cos^2\\theta \\cdot r\\, dr\\, d\\theta = \\Big(\\int_0^{2\\pi}\\cos^2\\theta\\, d\\theta\\Big)\\Big(\\int_0^1 r^3\\, dr\\Big) = \\pi \\cdot \\tfrac14 = \\tfrac\\pi4.$$
($\\int_0^{2\\pi}\\cos^2\\theta\\, d\\theta = \\int_0^{2\\pi}\\tfrac{1 + \\cos 2\\theta}{2}\\, d\\theta = \\pi$, since the $\\cos 2\\theta$ part averages out to $0$ over full turns.) So the answer is $24 \\cdot \\tfrac\\pi4 = 6\\pi$.

**Two changes in a row.** The ellipse went to a disk (stretching, factor $6$), and the disk went to a rectangle in $r, \\theta$ (polar, factor $r$). Each change of labels brings its own factor.
<<<
:::

:::check
What is the area of the ellipse $\\dfrac{x^2}{25} + \\dfrac{y^2}{4} \\le 1$?
answer: 10pi
???
$a = 5$ and $b = 2$, so the area is $\\pi ab = 10\\pi$. With $x = 5u$, $y = 2v$, the ellipse becomes the unit disk (area $\\pi$), and every piece of area is multiplied by $|J| = 10$.
:::

:::idea Three variables
For $x = x(u, v, w)$, $y = y(u, v, w)$, $z = z(u, v, w)$, the Jacobian is the determinant of the $3 \\times 3$ table of partial derivatives:
$$\\frac{\\partial(x, y, z)}{\\partial(u, v, w)} = \\begin{vmatrix} x_u & x_v & x_w \\\\ y_u & y_v & y_w \\\\ z_u & z_v & z_w \\end{vmatrix},$$
and
$$\\iiint_E f\\, dV = \\iiint_S f\\,\\left|\\frac{\\partial(x, y, z)}{\\partial(u, v, w)}\\right| du\\, dv\\, dw.$$

**Why.** The same reasoning as in 2D, one dimension up. A small box $\\Delta u \\times \\Delta v \\times \\Delta w$ goes to a slanted box (a parallelepiped) with edges $\\langle x_u, y_u, z_u\\rangle\\Delta u$, $\\langle x_v, y_v, z_v\\rangle\\Delta v$, and $\\langle x_w, y_w, z_w\\rangle\\Delta w$, and a parallelepiped's volume is the absolute value of the determinant of its three edge vectors.
>>> Why the determinant is the volume
**What has to be found.** In 3D, a small box $\\Delta u \\times \\Delta v \\times \\Delta w$ of the new labels becomes a slanted box (a parallelepiped) with three edge arrows, and the question is its volume.

**A slanted box's volume.** Call the edges $\\mathbf a$, $\\mathbf b$, $\\mathbf c$. Its base is the parallelogram on $\\mathbf b$ and $\\mathbf c$, with area $|\\mathbf b \\times \\mathbf c|$ (the cross product's length). Its height is how far $\\mathbf a$ reaches straight up from that base, which is the part of $\\mathbf a$ in the direction of $\\mathbf b \\times \\mathbf c$ (perpendicular to the base): $\\tfrac{|\\mathbf a \\cdot (\\mathbf b \\times \\mathbf c)|}{|\\mathbf b \\times \\mathbf c|}$. Base times height: $|\\mathbf a \\cdot (\\mathbf b \\times \\mathbf c)|$.

**That's the determinant.** Writing out $\\mathbf a \\cdot (\\mathbf b \\times \\mathbf c)$ in components gives exactly the $3 \\times 3$ determinant with $\\mathbf a$, $\\mathbf b$, $\\mathbf c$ as its rows.

**A check.** Edges $\\langle 2, 0, 0 \\rangle$, $\\langle 0, 3, 0 \\rangle$, $\\langle 0, 0, 4 \\rangle$ make an ordinary $2 \\times 3 \\times 4$ box, volume $24$. Their determinant has $2$, $3$, $4$ on the diagonal and zeros elsewhere, so it's $2 \\cdot 3 \\cdot 4 = 24$ ✓.
<<<

**Example: the volume of an ellipsoid.** $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} + \\dfrac{z^2}{c^2} \\le 1$. With $x = au$, $y = bv$, $z = cw$, it becomes the unit ball, and the Jacobian is $abc$ (the table has $a$, $b$, $c$ on the diagonal and zeros elsewhere). So the volume is $abc$ times the unit ball's volume: $\\tfrac43\\pi abc$.

**Example: where $\\rho^2\\sin\\varphi$ comes from.** For spherical coordinates, $x = \\rho\\sin\\varphi\\cos\\theta$, $y = \\rho\\sin\\varphi\\sin\\theta$, $z = \\rho\\cos\\varphi$, the determinant works out to $\\rho^2\\sin\\varphi$, the factor from Oct 28.
>>> The spherical determinant, step by step
**What's being checked.** That the volume factor for spherical coordinates, found on Oct 28 from a piece's three edges, also comes out of the determinant.

**The table.** Each entry is how fast one of $x$, $y$, $z$ changes when only one of $\\rho$, $\\varphi$, $\\theta$ changes. Rows are $x$, $y$, $z$; columns are $\\rho$, $\\varphi$, $\\theta$:
$$\\begin{vmatrix} \\sin\\varphi\\cos\\theta & \\rho\\cos\\varphi\\cos\\theta & -\\rho\\sin\\varphi\\sin\\theta \\\\ \\sin\\varphi\\sin\\theta & \\rho\\cos\\varphi\\sin\\theta & \\rho\\sin\\varphi\\cos\\theta \\\\ \\cos\\varphi & -\\rho\\sin\\varphi & 0 \\end{vmatrix}$$
For example, the top-middle entry: changing only $\\varphi$ in $x = \\rho\\sin\\varphi\\cos\\theta$, the $\\sin\\varphi$ becomes $\\cos\\varphi$ and the rest stays: $\\rho\\cos\\varphi\\cos\\theta$.

**Expand along the bottom row** (it has a $0$, which saves work). For the bottom row the signs are $+$, $-$, $+$. Each entry is multiplied by the $2 \\times 2$ determinant left after crossing out that entry's row and column (for a $2 \\times 2$: $\\begin{vmatrix} p & q \\\\ s & t \\end{vmatrix} = pt - qs$).
- *$\\cos\\varphi$, sign $+$:* the leftover is $\\rho\\cos\\varphi\\cos\\theta \\cdot \\rho\\sin\\varphi\\cos\\theta - (-\\rho\\sin\\varphi\\sin\\theta)(\\rho\\cos\\varphi\\sin\\theta) = \\rho^2\\sin\\varphi\\cos\\varphi(\\cos^2\\theta + \\sin^2\\theta) = \\rho^2\\sin\\varphi\\cos\\varphi$.
- *$-\\rho\\sin\\varphi$, sign $-$:* the leftover is $\\sin\\varphi\\cos\\theta \\cdot \\rho\\sin\\varphi\\cos\\theta - (-\\rho\\sin\\varphi\\sin\\theta)(\\sin\\varphi\\sin\\theta) = \\rho\\sin^2\\varphi$.
- *$0$:* contributes nothing.

**Add them:**
$$\\cos\\varphi \\cdot \\rho^2\\sin\\varphi\\cos\\varphi - (-\\rho\\sin\\varphi) \\cdot \\rho\\sin^2\\varphi = \\rho^2\\sin\\varphi\\cos^2\\varphi + \\rho^2\\sin^3\\varphi = \\rho^2\\sin\\varphi(\\cos^2\\varphi + \\sin^2\\varphi) = \\rho^2\\sin\\varphi.$$
It's positive for $0 < \\varphi < \\pi$, so its absolute value is itself. Same as the three-edges answer on Oct 28 ✓.
<<<
:::

:::check
What is the volume of the ellipsoid $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} + z^2 \\le 1$?
answer: 8pi
???
$a = 2$, $b = 3$, $c = 1$, so the volume is $\\tfrac43\\pi \\cdot 2 \\cdot 3 \\cdot 1 = 8\\pi$. With $x = 2u$, $y = 3v$, $z = w$, it's the unit ball (volume $\\tfrac43\\pi$) with every piece of volume multiplied by $|J| = 6$.
:::

:::summary Summary
- **Choosing $u$ and $v$:** write opposite edges as "expression $=$ number" and make those expressions the new coordinates. Then substitute into the inequalities to get a rectangle.
- **Ellipses:** $x = au$, $y = bv$ turns $\\tfrac{x^2}{a^2} + \\tfrac{y^2}{b^2} \\le 1$ into the unit disk, with $|J| = ab$. Area $\\pi ab$.
- **Three variables:** the Jacobian is a $3 \\times 3$ determinant, the volume factor of a small slanted box. Ellipsoid volume $\\tfrac43\\pi abc$; spherical gives $\\rho^2\\sin\\varphi$.

**Common mistakes:**
- Leaving the Jacobian in terms of $x$ and $y$ (like $\\tfrac{2y}{x}$) instead of rewriting it with $u$ and $v$.
- Forgetting to flip when using the shortcut.
- Dividing an inequality by something that could be negative without flipping it.
:::
`;export{e as default};