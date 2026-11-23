var e=`---
title: Limits in several variables
date: 2026-09-09
stewart: 14.2
source: OpenStax Calculus Volume 3, §4.2 Limits and Continuity
---

:::recap Last time
- $\\lim_{(x,y) \\to (a,b)} f(x, y) = L$ means $f$ gets close to $L$ for **every** way of approaching $(a, b)$.
- For continuous formulas (no dividing by $0$), the limit is just $f(a, b)$: plug in.
- Two paths into $(a, b)$ with different values mean the limit doesn't exist.
:::

:::check
Warm-up: find $\\displaystyle\\lim_{(x,y) \\to (1,3)} \\frac{xy + 2}{x + 1}$.
answer: 5/2
???
The denominator at $(1, 3)$ is $2$, not $0$, so plug in: $\\dfrac{3 + 2}{1 + 1} = \\dfrac52$.
:::

:::question Today
When plugging in gives $\\tfrac00$, how do you prove a limit doesn't exist, and how do you prove it does?
:::

:::idea What the limit means
In one variable, $x$ approaches $a$ from just two sides. In the plane, $(x, y)$ can approach $(a, b)$ from every direction and along every curve. The limit is $L$ when the **distance** from $(x, y)$ to $(a, b)$ shrinking to $0$ forces $|f(x, y) - L|$ to shrink to $0$, no matter which way you come in.
>>> The definition, with numbers, for $f = x + 2y$ at $(1, 1)$
Here $L = f(1, 1) = 3$.
1. **Points at distance $0.01$, from different directions.** $(1.01, 1)$ gives $f = 3.01$. $(1, 1.01)$ gives $3.02$. $(0.99, 1)$ gives $2.99$.
2. **How far from $3$.** Moving by $\\Delta x$ and $\\Delta y$ changes $f$ by $\\Delta x + 2\\Delta y$. With both of those at most $0.01$ in size, the change is at most $0.03$.
3. **Closer points.** At distance $0.001$, the change is at most $0.003$. Shrinking the distance shrinks $|f - 3|$, in every direction at once. That's what $\\lim = 3$ means.
<<<
:::

:::check
If $\\lim_{(x,y) \\to (0,0)} f(x, y) = 4$, what must happen along the path $y = x^2$ as $x \\to 0$?
- [x] $f$ approaches $4$ along it too
- [ ] $f$ could approach anything along a curved path
  why: The limit is a promise about every way of approaching, curved paths included. Every path must lead to $4$.
- [ ] Nothing, because $y = x^2$ isn't a straight line
  why: Straight or curved, every path into $(0, 0)$ has to give the limit.
???
The limit being $4$ means every way of approaching the origin leads to $4$, so the path $y = x^2$ does too.
:::

:::idea Paths: showing a limit doesn't exist
If two paths into $(a, b)$ give different values, there's no single $L$, so the limit **doesn't exist**. Good paths to try at $(0, 0)$: the two axes, then all lines $y = mx$ at once, then curves like $x = y^2$.
>>> All lines at once, for $\\dfrac{xy}{x^2 + y^2}$
1. **Substitute $y = mx$,** the line through the origin with slope $m$: $\\dfrac{x \\cdot mx}{x^2 + m^2x^2} = \\dfrac{m x^2}{(1 + m^2)x^2} = \\dfrac{m}{1 + m^2}$.
2. **The $x$'s cancel,** so on each line the function has the same value at every point (except the origin). For example, on $y = 2x$ it's $\\tfrac25$ at $(0.1, 0.2)$ and at $(0.001, 0.002)$.
3. **Different lines, different values.** $m = 0$ (the $x$-axis): $0$. $m = 1$: $\\tfrac12$. $m = 2$: $\\tfrac25$. $m = -1$: $-\\tfrac12$.
4. **So no limit.** However close you get to the origin, there are points giving $0$ and points giving $\\tfrac12$.
<<<
:::

:::check
Along the line $y = 3x$, what value does $\\dfrac{xy}{x^2 + y^2}$ approach as $(x, y) \\to (0, 0)$?
answer: 3/10
???
With $m = 3$: $\\dfrac{m}{1 + m^2} = \\dfrac{3}{10}$. Directly: $\\dfrac{3x^2}{x^2 + 9x^2} = \\dfrac{3}{10}$.
:::

:::example Every line agrees, but the limit still doesn't exist
Does $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{xy^2}{x^2 + y^4}$ exist?

**Lines.** On $y = mx$: $\\dfrac{x \\cdot m^2x^2}{x^2 + m^4x^4} = \\dfrac{m^2 x}{1 + m^4x^2}$, which goes to $0$ as $x \\to 0$. On the $y$-axis ($x = 0$) it's $0$ too. Every line gives $0$.

**A parabola.** On $x = y^2$: $\\dfrac{y^2 \\cdot y^2}{y^4 + y^4} = \\dfrac12$.

$0 \\ne \\tfrac12$, so the limit **doesn't exist**.
>>> Why the parabola, and the numbers
1. **Why try $x = y^2$.** The bottom has $x^2$ and $y^4$. Setting $x = y^2$ makes them the same size, $y^4$ each, so neither one wins as you approach the origin. That's the path most likely to give something new.
2. **Along $y = x$, with numbers.** At $(0.01, 0.01)$: top $= 0.01 \\times 0.0001 = 10^{-6}$, bottom $= 10^{-4} + 10^{-8} \\approx 10^{-4}$. The value is about $0.01$, and closer points give values closer to $0$.
3. **Along $x = y^2$, with numbers.** At $(0.01, 0.1)$: top $= 0.01 \\times 0.01 = 10^{-4}$, bottom $= 10^{-4} + 10^{-4} = 2 \\times 10^{-4}$. The value is $0.5$, and it stays $0.5$ as you get closer.
4. **The lesson.** Checking lines, even all of them, can't prove a limit exists. Only a squeeze (next) can.
<<<
:::

:::check
Does $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{x^2}{x^2 + y^2}$ exist?
- [ ] Yes, it's $1$
  why: Along the $x$-axis it's $\\tfrac{x^2}{x^2} = 1$, but along the $y$-axis it's $\\tfrac{0}{y^2} = 0$.
- [ ] Yes, it's $0$
  why: Along the $y$-axis it's $0$, but along the $x$-axis it's $1$.
- [x] No
???
Along the $x$-axis ($y = 0$) the value is $1$. Along the $y$-axis ($x = 0$) it's $0$. Two paths, two values: no limit.
:::

:::idea Squeezing: proving a limit exists
To prove $\\lim f = L$, trap the distance from $L$: find a simpler $g$ with
$$|f(x, y) - L| \\le g(x, y) \\quad\\text{and}\\quad g \\to 0.$$
Then $|f - L|$ is caught between $0$ and something going to $0$, so it goes to $0$ too, on every path at once.

**The inequalities that do it.** Near $(0, 0)$, each square is at most the sum of both: $x^2 \\le x^2 + y^2$ and $y^2 \\le x^2 + y^2$. So fractions like $\\dfrac{y^2}{x^2 + y^2}$ are between $0$ and $1$.
>>> A squeeze, step by step, for $\\dfrac{xy^2}{x^2 + y^2}$
1. **Split off a piece that's at most $1$.** $\\dfrac{xy^2}{x^2 + y^2} = x \\cdot \\dfrac{y^2}{x^2 + y^2}$.
2. **Bound it.** $y^2 \\le x^2 + y^2$, so the fraction $\\dfrac{y^2}{x^2 + y^2}$ is between $0$ and $1$. So $\\left|\\dfrac{xy^2}{x^2 + y^2}\\right| \\le |x|$.
3. **The bound goes to $0$.** As $(x, y) \\to (0, 0)$, $|x| \\to 0$.
4. **Conclude.** The function is trapped between $-|x|$ and $|x|$, both going to $0$, so its limit is $0$.
5. **With numbers.** At $(0.01, 0.01)$: $\\dfrac{0.01 \\times 0.0001}{0.0002} = 0.005$, and $|x| = 0.01$, so $0.005 \\le 0.01$ ✓. At $(0.01, 0.1)$: about $0.0099$, still at most $0.01$.

**Compare the example above.** There the bottom was $x^2 + y^4$, and no such bound works: on $x = y^2$ the value stays $\\tfrac12$.
<<<
:::

:::check
Which bound proves $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{2x^2 y}{x^2 + y^2} = 0$?
- [x] $\\left|\\dfrac{2x^2 y}{x^2 + y^2}\\right| \\le 2|y|$
- [ ] $\\left|\\dfrac{2x^2 y}{x^2 + y^2}\\right| \\le 2$
  why: That's true near the origin, but $2$ doesn't go to $0$, so it can't squeeze the function to $0$.
- [ ] The values along the two axes are both $0$
  why: Agreeing paths never prove a limit exists. A bound that goes to $0$ does.
???
Write it as $2y \\cdot \\dfrac{x^2}{x^2 + y^2}$. The fraction is between $0$ and $1$ because $x^2 \\le x^2 + y^2$, so the absolute value is at most $2|y|$, which goes to $0$.
:::

:::idea Polar coordinates at the origin
At $(0, 0)$, switching to polar coordinates often makes the squeeze easy. Put $x = r\\cos\\theta$, $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$, and "approaching the origin" means $r \\to 0$, whatever $\\theta$ does.
- If $f$ becomes $r$ (or $r^2$, ...) times something bounded, the limit is $0$.
- If $f$ becomes a function of $\\theta$ alone that isn't constant, the limit doesn't exist.
>>> Two examples in polar form
**$\\dfrac{x^3}{x^2 + y^2}$.** Substitute: $\\dfrac{r^3\\cos^3\\theta}{r^2} = r\\cos^3\\theta$. Since $|\\cos^3\\theta| \\le 1$, $|f| \\le r$, which goes to $0$. So the limit is $0$. With numbers: at $r = 0.1$, $\\theta = 0$ (the point $(0.1, 0)$), $f = 0.1$; at $r = 0.01$, at most $0.01$.

**$\\dfrac{xy}{x^2 + y^2}$.** Substitute: $\\dfrac{r^2\\cos\\theta\\sin\\theta}{r^2} = \\cos\\theta\\sin\\theta$. The $r$ is gone: the value depends only on the direction $\\theta$. At $\\theta = 0$ it's $0$; at $\\theta = \\tfrac{\\pi}{4}$ it's $\\tfrac12$. Not constant, so no limit, matching the lines above.
<<<
:::

:::check
Find $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{x^2 y^2}{x^2 + y^2}$.
answer: 0
???
In polar form: $\\dfrac{r^4\\cos^2\\theta\\sin^2\\theta}{r^2} = r^2\\cos^2\\theta\\sin^2\\theta$, which is at most $r^2 \\to 0$. So the limit is $0$. (Squeeze version: $\\dfrac{x^2y^2}{x^2 + y^2} \\le y^2$, since $\\dfrac{x^2}{x^2 + y^2} \\le 1$.)
:::

:::check
Find $\\displaystyle\\lim_{(x,y) \\to (0,0)} \\frac{x^4 - y^4}{x^2 + y^2}$.
answer: 0
???
Factor the top: $x^4 - y^4 = (x^2 - y^2)(x^2 + y^2)$. Away from the origin the $x^2 + y^2$ cancels, leaving $x^2 - y^2$, which is continuous. Plug in: $0 - 0 = 0$.
:::

:::summary Summary
- The limit at $(a, b)$ has to be the same along every path, straight or curved.
- **Doesn't exist:** find two paths with different values. Try the axes, then $y = mx$, then curves like $x = y^2$.
- **Exists:** squeeze, $|f - L| \\le g \\to 0$, using $x^2 \\le x^2 + y^2$. At the origin, polar coordinates often show $f = r \\times (\\text{bounded})$.
- Factoring and cancelling can turn $\\tfrac00$ into something you can plug into.

**Common mistakes:**
- Concluding a limit exists because several paths agree (even every line).
- Forgetting that a polar form depending only on $\\theta$ means the limit doesn't exist.
:::
`;export{e as default};