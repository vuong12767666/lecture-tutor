var e=`---
title: Limit laws, continuity, and partial derivatives
date: 2026-09-11
stewart: 14.2, 14.3
source: OpenStax Calculus Volume 3, §4.2 Limits and Continuity and §4.3 Partial Derivatives
---

:::recap Last time
- A limit at $(a, b)$ must be the same along every path into $(a, b)$.
- Two paths with different values: no limit. A squeeze $|f - L| \\le g \\to 0$: the limit is $L$.
- At the origin, polar coordinates ($x = r\\cos\\theta$, $y = r\\sin\\theta$) often settle it.
:::

:::check
Warm-up: does $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{y^2}{x^2 + y^2}$ exist?
- [ ] Yes, it's $1$
  why: Along the $y$-axis it's $1$, but along the $x$-axis it's $\\tfrac{0}{x^2} = 0$.
- [ ] Yes, it's $0$
  why: Along the $x$-axis it's $0$, but along the $y$-axis it's $\\tfrac{y^2}{y^2} = 1$.
- [x] No
???
The two axes give $0$ and $1$. Different paths, different values: no limit.
:::

:::question Today
Which functions can you just plug into? And how do you measure how fast a function of two variables changes?
:::

:::idea Continuity
$f$ is **continuous** at $(a, b)$ when
$$\\lim_{(x,y) \\to (a,b)} f(x, y) = f(a, b).$$
That asks three things: $f(a, b)$ exists, the limit exists, and they're equal.

**Which functions are continuous.** Polynomials, $\\sin$, $\\cos$, $e^x$ are continuous everywhere. Sums, products, and compositions of continuous functions are continuous. A quotient is continuous wherever its denominator isn't $0$. $\\sqrt{\\ }$ and $\\ln$ are continuous wherever their inside is allowed (Sep 2).

**Why sums and products work (the limit laws).** If $f \\to L$ and $g \\to M$, then $f + g \\to L + M$ and $fg \\to LM$, just as in Calc I. So if each piece can be plugged into, so can the combination.
>>> Continuity checked at a point, two ways
**A function defined in pieces that is continuous.** Let $f = \\dfrac{x^2 y}{x^2 + y^2}$, with $f(0, 0) = 0$.
1. **$f(0, 0)$ exists:** it's $0$, by definition.
2. **The limit exists:** $\\left|\\dfrac{x^2 y}{x^2 + y^2}\\right| \\le |y| \\to 0$, since $\\dfrac{x^2}{x^2 + y^2} \\le 1$ (Sep 9). For example, $f(0.1, 0.1) = \\tfrac{0.001}{0.02} = 0.05 \\le 0.1$.
3. **They're equal:** both are $0$. So $f$ is continuous at the origin.

**One that isn't.** Let $g = \\dfrac{xy}{x^2 + y^2}$, with $g(0, 0) = 0$. The value $g(0, 0)$ exists, but the limit doesn't (it's $0$ along the $x$-axis and $\\tfrac12$ along $y = x$). So $g$ is not continuous at the origin, whatever value you give it there.
<<<

**Where is a formula continuous?** List the points where it breaks: dividing by $0$, a negative number under a square root, a number $\\le 0$ inside a log. It's continuous everywhere else in its domain.
>>> Finding where $\\dfrac{\\ln(x - y)}{x^2 + y^2 - 1}$ is continuous
1. **The log** needs $x - y > 0$: points below the line $y = x$.
2. **The fraction** can't divide by $0$: $x^2 + y^2 \\ne 1$, so points on the unit circle are out.
3. **Answer.** Continuous at every point with $x > y$ that isn't on the unit circle.
4. **Testing points.** $(2, 0)$: $\\ln 2 \\div 3 \\approx 0.231$, fine. $(1, 0)$: the denominator is $1 + 0 - 1 = 0$, so it breaks. $(0, 1)$: $\\ln(-1)$ doesn't exist.
<<<
:::

:::check
Find $\\displaystyle\\lim_{(x,y) \\to (2,1)} \\left(x^2 y + e^{x - 2y}\\right)$.
answer: 5
???
It's a sum of a polynomial and a composition of $e^{(\\cdot)}$ with a polynomial, so it's continuous everywhere: plug in. $4 \\cdot 1 + e^{2 - 2} = 4 + e^0 = 4 + 1 = 5$.
:::

:::idea Partial derivatives
The [[partial derivative]] $f_x$ is how fast $f$ changes when only $x$ changes:
$$f_x(a, b) = \\lim_{h \\to 0} \\frac{f(a + h, b) - f(a, b)}{h}.$$
The second coordinate stays $b$ the whole time. So to compute $f_x$, differentiate in $x$ while $y$ acts like a number. $f_y$ is the same with the roles swapped.

**What it means on the graph.** Slice the surface $z = f(x, y)$ with the plane $y = b$. That leaves a curve $z = f(x, b)$, and $f_x(a, b)$ is its slope at $x = a$.
>>> The limit and the shortcut, side by side, for $f = x^2 y^3$ at $(1, 2)$
**$f_x$.** Only $x$ changes, so $y$ stays $2$, and along that slice $f = 8x^2$.
- The shortcut: with $y$ acting like a number, $\\frac{\\partial}{\\partial x}(x^2 y^3) = 2xy^3$. At $(1, 2)$: $2 \\cdot 1 \\cdot 8 = 16$.
- The limit with $h = 0.01$: $f(1.01, 2) = 1.0201 \\times 8 = 8.1608$, and $f(1, 2) = 8$, so $\\tfrac{8.1608 - 8}{0.01} = 16.08$. Close to $16$.

**$f_y$.** Now $x$ stays $1$, and $f = y^3$ along that slice.
- The shortcut: $\\frac{\\partial}{\\partial y}(x^2 y^3) = 3x^2 y^2$. At $(1, 2)$: $12$.
- The limit with $h = 0.01$: $f(1, 2.01) = 2.01^3 \\approx 8.1206$, so $\\tfrac{8.1206 - 8}{0.01} \\approx 12.06$. Close to $12$.
<<<
:::

:::example Computing partial derivatives
Find $f_x$ and $f_y$ for $f = x^3 y^2 + \\sin(xy)$.

$$f_x = 3x^2 y^2 + y\\cos(xy), \\qquad f_y = 2x^3 y + x\\cos(xy).$$
>>> Each term, and why
**$f_x$, with $y$ acting like a number.**
1. $x^3 y^2$: the $y^2$ is a number multiplying $x^3$, so the derivative is $3x^2 \\cdot y^2$.
2. $\\sin(xy)$: chain rule. The outside gives $\\cos(xy)$, and the inside $xy$ has $x$-derivative $y$ (for example, $5x$ has derivative $5$). So it's $y\\cos(xy)$.

**$f_y$, with $x$ acting like a number.**
1. $x^3 y^2$: $x^3$ is the number now, so the derivative is $x^3 \\cdot 2y$.
2. $\\sin(xy)$: the inside $xy$ has $y$-derivative $x$, so it's $x\\cos(xy)$.

**Check at $(1, 0)$.** $f_y = 0 + 1 \\cdot \\cos 0 = 1$. Directly, $f(1, 0) = 0$ and $f(1, 0.01) = 0.0001 + \\sin(0.01) \\approx 0.0101$, so $\\tfrac{0.0101 - 0}{0.01} \\approx 1.01$. ✓
<<<
:::

:::check
Find $f_y$ for $f = x^2 e^{y}$.
answer: x^2 exp(y)
???
With $x$ acting like a number, $x^2$ is a constant factor, and $e^y$ has derivative $e^y$. So $f_y = x^2 e^y$.
:::

:::idea Second partial derivatives
Differentiating again gives four second partials: $f_{xx}$, $f_{yy}$, and two mixed ones, $f_{xy}$ (first $x$, then $y$) and $f_{yx}$ (first $y$, then $x$).

**[[mixed partials|Clairaut's Theorem]]:** if the second partials are continuous, the mixed ones are equal, $f_{xy} = f_{yx}$. That's a free check on your work: compute both and compare.
>>> All four, for $f = x^3 y^2 + \\sin(xy)$
Start from $f_x = 3x^2 y^2 + y\\cos(xy)$ and $f_y = 2x^3 y + x\\cos(xy)$.
1. **$f_{xx}$:** differentiate $f_x$ in $x$. $3x^2y^2$ gives $6xy^2$. $y\\cos(xy)$: $y$ is a number, and $\\cos(xy)$ gives $-y\\sin(xy)$. Total: $6xy^2 - y^2\\sin(xy)$.
2. **$f_{yy}$:** differentiate $f_y$ in $y$: $2x^3 - x^2\\sin(xy)$.
3. **$f_{xy}$:** differentiate $f_x$ in $y$. $3x^2y^2$ gives $6x^2y$. $y\\cos(xy)$ has $y$ in both factors, so use the product rule: $1 \\cdot \\cos(xy) + y \\cdot (-x\\sin(xy))$. Total: $6x^2y + \\cos(xy) - xy\\sin(xy)$.
4. **$f_{yx}$:** differentiate $f_y$ in $x$. $2x^3y$ gives $6x^2y$. $x\\cos(xy)$, product rule in $x$: $\\cos(xy) - xy\\sin(xy)$. Total: the same as $f_{xy}$ ✓.
5. **At a point.** At $(1, 0)$: $f_{xy} = 0 + 1 - 0 = 1$.
<<<
:::

:::check
Find $f_{xy}$ for $f = x^4 y^3$.
answer: 12 x^3 y^2
???
$f_x = 4x^3 y^3$, then differentiate in $y$: $f_{xy} = 4x^3 \\cdot 3y^2 = 12x^3y^2$. Check the other order: $f_y = 3x^4y^2$, and $f_{yx} = 12x^3y^2$ ✓.
:::

:::idea Partial derivatives don't guarantee continuity
In Calc I, having a derivative at a point forces continuity there. In two variables, having both partial derivatives does **not**. The partials only look along two lines, the two directions parallel to the axes, and a function can misbehave along other paths.
>>> The standard example, $f = \\dfrac{xy}{x^2 + y^2}$ with $f(0, 0) = 0$
1. **$f_x(0, 0)$.** Along the $x$-axis, $f(h, 0) = \\tfrac{0}{h^2} = 0$ for every $h \\ne 0$. So $\\tfrac{f(h, 0) - f(0, 0)}{h} = 0$, and $f_x(0, 0) = 0$.
2. **$f_y(0, 0)$.** Along the $y$-axis, $f(0, h) = 0$ too, so $f_y(0, 0) = 0$.
3. **Not continuous.** Along $y = x$, $f = \\tfrac12$ at every point, for example $f(0.001, 0.001) = 0.5$. So the limit at the origin doesn't exist (Sep 9).

Both partials exist, yet $f$ isn't continuous. (A stronger condition, partials that are themselves continuous near the point, does guarantee it. That comes with tangent planes on Sep 14.)
<<<
:::

:::check
True or false: if $f_x(0, 0)$ and $f_y(0, 0)$ both exist, then $f$ is continuous at $(0, 0)$.
- [ ] True
  why: $\\tfrac{xy}{x^2 + y^2}$ (with value $0$ at the origin) has $f_x(0, 0) = f_y(0, 0) = 0$, but it's $\\tfrac12$ all along $y = x$, so it isn't continuous there.
- [x] False
???
False. The partials only check the two axis directions. $\\tfrac{xy}{x^2 + y^2}$ is $0$ on both axes (so both partials are $0$) but $\\tfrac12$ along $y = x$, so it isn't continuous at the origin.
:::

:::summary Summary
- Continuous at $(a, b)$: the limit equals $f(a, b)$. Polynomials, $e^x$, $\\sin$, $\\cos$, and their sums, products, and compositions are continuous; quotients wherever the bottom isn't $0$.
- $f_x$: differentiate in $x$ with $y$ acting like a number; it's the slope of the slice $y = b$. $f_y$: the other way around.
- Second partials: $f_{xx}$, $f_{yy}$, $f_{xy}$, $f_{yx}$. Clairaut: $f_{xy} = f_{yx}$ when they're continuous.
- Both partials existing doesn't make $f$ continuous.

**Common mistakes:**
- Forgetting the inside's derivative in the chain rule, like the $y$ in $\\frac{\\partial}{\\partial x}\\sin(xy) = y\\cos(xy)$.
- Skipping the product rule when both factors contain the variable, like $y\\cos(xy)$ differentiated in $y$.
- Plugging in a point before taking the second derivative.
:::
`;export{e as default};