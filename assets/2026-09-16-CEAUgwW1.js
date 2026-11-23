var e=`---
title: Chain rule
date: 2026-09-16
stewart: 14.5
source: OpenStax Calculus Volume 3, §4.5 The Chain Rule
---

:::recap Last time
- Near $(a, b)$, the change in $f$ is about $f_x\\,\\Delta x + f_y\\,\\Delta y$: the linear approximation.
- In words: ($x$-slope) $\\times$ ($x$-step) plus ($y$-slope) $\\times$ ($y$-step).
:::

:::check
Warm-up from Calc I: what is $\\dfrac{d}{dt}(3t + 1)^2$ at $t = 1$?
answer: 24
???
The chain rule: the outside gives $2(3t + 1)$, times the inside's derivative $3$. At $t = 1$: $2 \\cdot 4 \\cdot 3 = 24$.
:::

:::question Today
If $z$ depends on $x$ and $y$, and both of those change with time, how fast does $z$ change? And how do you differentiate when a variable is only defined by an equation?
:::

:::idea The chain rule along a path
If $z = f(x, y)$ and both $x$ and $y$ depend on $t$, then
$$\\frac{dz}{dt} = f_x\\,\\frac{dx}{dt} + f_y\\,\\frac{dy}{dt}.$$

**Why.** In a short time $\\Delta t$, $x$ changes by about $\\frac{dx}{dt}\\,\\Delta t$ and $y$ by about $\\frac{dy}{dt}\\,\\Delta t$. The linear approximation says $z$ then changes by about $f_x\\,\\Delta x + f_y\\,\\Delta y = \\left(f_x\\,\\frac{dx}{dt} + f_y\\,\\frac{dy}{dt}\\right)\\Delta t$. Divide by $\\Delta t$ and let it shrink to $0$. The two terms are the two ways a change in $t$ reaches $z$: through $x$, and through $y$.
>>> The formula, checked three ways, for $z = xy^2$, $x = t^2$, $y = t + 1$ at $t = 1$
1. **Where you are.** At $t = 1$: $x = 1$, $y = 2$, and $z = 1 \\cdot 4 = 4$.
2. **The four pieces.** $z_x = y^2 = 4$, $z_y = 2xy = 4$, $\\frac{dx}{dt} = 2t = 2$, $\\frac{dy}{dt} = 1$.
3. **The chain rule.** $4 \\cdot 2 + 4 \\cdot 1 = 12$. The route through $x$ contributes $8$, the route through $y$ contributes $4$.
4. **Check by substituting first.** $z = t^2(t + 1)^2$, so $\\frac{dz}{dt} = 2t(t + 1)^2 + t^2 \\cdot 2(t + 1)$. At $t = 1$: $8 + 4 = 12$ ✓.
5. **Check with numbers.** At $t = 1.01$: $x = 1.0201$, $y = 2.01$, so $z \\approx 4.1213$. The change is about $0.1213$ over $0.01$, a rate of about $12.1$ ✓.
<<<
:::

:::example Temperature along a circle
The temperature at $(x, y)$ is $T = x^2 + xy$. A particle moves along $x = \\cos t$, $y = \\sin t$. How fast is the temperature it feels changing at $t = 0$?

At $t = 0$ the particle is at $(1, 0)$. There $T_x = 2x + y = 2$ and $T_y = x = 1$. Also $\\frac{dx}{dt} = -\\sin t = 0$ and $\\frac{dy}{dt} = \\cos t = 1$. So
$$\\frac{dT}{dt} = 2 \\cdot 0 + 1 \\cdot 1 = 1.$$
>>> Each step, and what the zero means
1. **Plug in the time first, to get the place.** $x = \\cos 0 = 1$, $y = \\sin 0 = 0$.
2. **$T_x$ and $T_y$ as formulas, then at $(1, 0)$.** $T_x = 2x + y = 2$. $T_y = x = 1$.
3. **The velocity.** $\\frac{dx}{dt} = -\\sin 0 = 0$, $\\frac{dy}{dt} = \\cos 0 = 1$. At that moment the particle moves straight up.
4. **Why the $x$ route gives $0$.** The temperature does change with $x$ ($T_x = 2$), but at that moment $x$ isn't changing. Only the $y$ route counts: $1 \\times 1 = 1$.
5. **Check by substituting.** $T = \\cos^2 t + \\cos t\\sin t$. Its derivative is $-2\\cos t\\sin t + \\cos^2 t - \\sin^2 t$, which is $0 + 1 - 0 = 1$ at $t = 0$ ✓.
<<<
:::

:::check
Let $z = x^2 + y^2$ with $x = t$ and $y = 2t$. What is $\\dfrac{dz}{dt}$ at $t = 1$?
answer: 10
???
At $t = 1$: $x = 1$, $y = 2$. $z_x = 2x = 2$, $z_y = 2y = 4$, $\\frac{dx}{dt} = 1$, $\\frac{dy}{dt} = 2$. So $\\frac{dz}{dt} = 2 \\cdot 1 + 4 \\cdot 2 = 10$. Check: $z = t^2 + 4t^2 = 5t^2$, and $10t = 10$ at $t = 1$ ✓.
:::

:::idea Implicit differentiation
An equation $F(x, y) = 0$, like $x^2 + y^2 = 25$, can define $y$ as a function of $x$ near a point without being solved for $y$. Its slope is
$$\\frac{dy}{dx} = -\\frac{F_x}{F_y} \\qquad (F_y \\ne 0).$$

**Why.** Along the curve, $F(x, y(x)) = 0$ for every $x$, so its derivative is $0$. By the chain rule (with $x$ playing the role of $t$, and $\\frac{dx}{dx} = 1$): $F_x \\cdot 1 + F_y \\cdot \\frac{dy}{dx} = 0$. Solve for $\\frac{dy}{dx}$.
>>> The circle $x^2 + y^2 = 25$ at $(3, 4)$, two ways
1. **Write it as $F = 0$.** $F = x^2 + y^2 - 25$. At $(3, 4)$: $9 + 16 - 25 = 0$ ✓.
2. **Partials.** $F_x = 2x = 6$ and $F_y = 2y = 8$.
3. **Formula.** $\\frac{dy}{dx} = -\\frac{6}{8} = -\\frac34$.
4. **Check by solving.** Near $(3, 4)$, the top half of the circle is $y = \\sqrt{25 - x^2}$. Its derivative is $\\frac{-x}{\\sqrt{25 - x^2}} = -\\frac34$ at $x = 3$ ✓.
5. **Check with numbers.** At $x = 3.01$: $y = \\sqrt{25 - 9.0601} \\approx 3.99248$. The change in $y$ is about $-0.0075$ over $0.01$, a slope of about $-0.75$ ✓.

**Why the minus sign.** Moving along the curve keeps $F$ at $0$. If $F$ goes up when $x$ grows ($F_x > 0$), then $y$ has to move in the direction that brings $F$ back down.
<<<
:::

:::check
For the curve $x^3 + y^3 = 9$, what is $\\dfrac{dy}{dx}$ at the point $(1, 2)$?
answer: -1/4
???
$F = x^3 + y^3 - 9$, with $F_x = 3x^2 = 3$ and $F_y = 3y^2 = 12$ at $(1, 2)$. So $\\frac{dy}{dx} = -\\frac{3}{12} = -\\frac14$.
:::

:::idea Implicit partial derivatives
An equation $F(x, y, z) = 0$ can define $z$ as a function of $x$ and $y$ near a point. Then
$$\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\qquad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z} \\qquad (F_z \\ne 0).$$

**Why.** For $\\frac{\\partial z}{\\partial x}$, hold $y$ fixed, so $y$ doesn't change. Differentiating $F(x, y, z(x, y)) = 0$ in $x$: $F_x \\cdot 1 + F_y \\cdot 0 + F_z \\cdot \\frac{\\partial z}{\\partial x} = 0$. Solve. For $\\frac{\\partial z}{\\partial y}$, hold $x$ fixed instead.
>>> The ellipsoid $x^2 + 2y^2 + 3z^2 = 6$ at $(1, 1, 1)$
1. **Write it as $F = 0$.** $F = x^2 + 2y^2 + 3z^2 - 6$. At $(1, 1, 1)$: $1 + 2 + 3 - 6 = 0$ ✓.
2. **Partials at the point.** $F_x = 2x = 2$, $F_y = 4y = 4$, $F_z = 6z = 6$.
3. **The formulas.** $\\frac{\\partial z}{\\partial x} = -\\frac26 = -\\frac13$ and $\\frac{\\partial z}{\\partial y} = -\\frac46 = -\\frac23$.
4. **Check by solving.** The top half is $z = \\sqrt{\\frac{6 - x^2 - 2y^2}{3}}$. At $(1.01, 1)$: $z = \\sqrt{\\frac{6 - 1.0201 - 2}{3}} \\approx 0.99664$. The change is about $-0.0034$ over $0.01$, a slope of about $-0.34$, close to $-\\tfrac13 \\approx -0.333$ ✓.
5. **A connection to Sep 21.** The tangent plane there is $x + 2y + 3z = 6$, or $z = 2 - \\frac13 x - \\frac23 y$. Its slopes are $-\\frac13$ and $-\\frac23$, the same numbers.
<<<
:::

:::check
The equation $xyz + z^3 = 2$ defines $z$ as a function of $x$ and $y$ near $(1, 1, 1)$. What is $\\dfrac{\\partial z}{\\partial x}$ there?
answer: -1/4
???
$F = xyz + z^3 - 2$. At $(1, 1, 1)$: $F_x = yz = 1$ and $F_z = xy + 3z^2 = 4$. So $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} = -\\frac14$.
:::

:::summary Summary
- Chain rule along a path: $\\frac{dz}{dt} = f_x\\,\\frac{dx}{dt} + f_y\\,\\frac{dy}{dt}$, one term for each route from $t$ to $z$. Find the point first, then evaluate.
- Implicit curve $F(x, y) = 0$: $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$.
- Implicit surface $F(x, y, z) = 0$: $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$ and $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$.
- Sep 18 extends the chain rule to two parameters and turns it into the gradient.

**Common mistakes:**
- Evaluating the partials at $t$ instead of at the point $(x(t), y(t))$.
- Dropping the minus sign in $-\\frac{F_x}{F_z}$.
- Leaving terms out of $F$: for $x^2 + y^2 + z^2 = 3xyz$, move everything to one side, so $F = x^2 + y^2 + z^2 - 3xyz$ includes the $-3xyz$.
:::
`;export{e as default};