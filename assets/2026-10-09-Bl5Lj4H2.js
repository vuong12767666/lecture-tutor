var e=`---
title: More on integrating vector fields along curves; Fundamental Theorem of Line Integrals
date: 2026-10-09
stewart: 16.2, 16.3
source: OpenStax Calculus Volume 3, §6.2 Line Integrals and §6.3 Conservative Vector Fields
---

:::recap Last time
$\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_a^b \\mathbf F(\\mathbf r(t)) \\cdot \\mathbf r'(t)\\, dt$: the work done by $\\mathbf F$ along $C$. Its sign depends on the direction of $C$.
:::

:::check
Warm-up: find $\\displaystyle\\int_C \\mathbf F \\cdot d\\mathbf r$ for the constant field $\\mathbf F = \\langle 1, 1 \\rangle$ along the segment from $(0,0)$ to $(2,3)$.
answer: 5
???
$\\mathbf r(t) = \\langle 2t, 3t \\rangle$, $0 \\le t \\le 1$, so $\\mathbf r' = \\langle 2, 3 \\rangle$ and $\\mathbf F \\cdot \\mathbf r' = 5$. The integral is $\\int_0^1 5\\, dt = 5$.
:::

:::question Today
Is there a shortcut, like the Fundamental Theorem of Calculus, that skips parametrizing the path?
:::

:::idea Pieces and directions
**Paths made of pieces.** If $C$ is $C_1$ followed by $C_2$, then
$$\\int_C \\mathbf F \\cdot d\\mathbf r = \\int_{C_1} \\mathbf F \\cdot d\\mathbf r + \\int_{C_2} \\mathbf F \\cdot d\\mathbf r.$$
This holds because the integral adds up $\\mathbf F \\cdot d\\mathbf r$ over every small step of the path, and you can add the steps on $C_1$ first and the steps on $C_2$ second. Parametrize each piece on its own.
>>> Two pieces, worked out: $\\int_C y\\,dx + x^2\\,dy$ from $(0,0)$ to $(1,0)$ to $(1,1)$
**What the notation means.** $y\\,dx + x^2\\,dy$ is $\\mathbf F \\cdot d\\mathbf r$ for $\\mathbf F = \\langle y, x^2 \\rangle$, written out: $dx$ is the step in $x$, and $dy$ is the step in $y$.

1. **First piece, $C_1$: $(0, 0)$ to $(1, 0)$.** Use $\\mathbf r = \\langle t, 0 \\rangle$, $0 \\le t \\le 1$. Every point has $y = 0$, so the $y\\,dx$ term is $0$. The point only moves right, so $dy = 0$ and the $x^2\\,dy$ term is $0$. Total: $0$.
2. **Second piece, $C_2$: $(1, 0)$ to $(1, 1)$.** Use $\\mathbf r = \\langle 1, t \\rangle$, $0 \\le t \\le 1$. The point only moves up, so $dx = 0$. And $x = 1$, $dy = dt$, so the $x^2\\,dy$ term is $1^2\\,dt$. Total: $\\int_0^1 1\\,dt = 1$.
3. **Add.** $0 + 1 = 1$.

On a horizontal piece $dy = 0$, and on a vertical piece $dx = 0$, which makes pieces like these quick.
<<<

**Reversing direction.** Writing $-C$ for $C$ traced backward:
$$\\int_{-C} \\mathbf F \\cdot d\\mathbf r = -\\int_C \\mathbf F \\cdot d\\mathbf r.$$
Why: walking backward, you pass through the same points, so $\\mathbf F$ is the same at each one. But at each point your step $d\\mathbf r$ points the opposite way, so every $\\mathbf F \\cdot d\\mathbf r$ is the negative of what it was.
>>> The same path backward, with numbers
Walk the path above backward: from $(1, 1)$ down to $(1, 0)$, then left to $(0, 0)$.
1. **Down from $(1, 1)$ to $(1, 0)$.** Use $\\mathbf r = \\langle 1, 1 - t \\rangle$. Now $dy = -dt$: $y$ goes down. The $x^2\\,dy$ term is $1 \\cdot (-dt)$, so this piece gives $\\int_0^1 (-1)\\,dt = -1$.
2. **Left from $(1, 0)$ to $(0, 0)$.** Still $y = 0$ and $dy = 0$, so this piece gives $0$.
3. **Total:** $-1$, the negative of $1$.

At the point $(1, 0.5)$, the field $\\langle y, x^2 \\rangle$ is $\\langle 0.5, 1 \\rangle$ both times. Walking up, the step is $\\langle 0, 1 \\rangle\\,dt$ and $\\mathbf F \\cdot d\\mathbf r = 1\\,dt$. Walking down, the step is $\\langle 0, -1 \\rangle\\,dt$ and $\\mathbf F \\cdot d\\mathbf r = -1\\,dt$.
<<<
:::

:::check
If $\\int_C \\mathbf F \\cdot d\\mathbf r = 7$, what is $\\int_{-C} \\mathbf F \\cdot d\\mathbf r$?
- [x] $-7$
- [ ] $7$
  why: That's $\\int_C$. Walking the path backward reverses $\\mathbf r'$, which flips the sign of every $\\mathbf F \\cdot \\mathbf r'$.
- [ ] $0$
  why: $0$ comes from a *closed* loop of a *conservative* field. $-C$ isn't a closed loop, and nothing says $\\mathbf F$ is conservative.
- [ ] $\\tfrac17$
  why: Reversing direction negates the integral. It doesn't take a reciprocal.
???
Reversing the direction flips the sign: $-7$.
:::

:::idea The Fundamental Theorem for Line Integrals
Suppose $\\mathbf F$ is a gradient, $\\mathbf F = \\nabla f$. Along any path $\\mathbf r(t)$, the chain rule says
$$\\frac{d}{dt} f(\\mathbf r(t)) = \\nabla f(\\mathbf r(t)) \\cdot \\mathbf r'(t).$$
>>> The chain rule here, with numbers
**What the left side means.** As the particle moves along $\\mathbf r(t)$, the value of $f$ at the particle changes. $\\frac{d}{dt} f(\\mathbf r(t))$ is how fast that value changes.

Take $f = x^2 y + y^3$ and the path $\\mathbf r = \\langle 2t, 1 \\rangle$ (moving right along $y = 1$).
1. **Left side directly.** On the path, $f = (2t)^2 \\cdot 1 + 1 = 4t^2 + 1$. Its derivative is $8t$. At $t = 0.5$: $4$.
2. **Right side.** $\\nabla f = \\langle 2xy, x^2 + 3y^2 \\rangle$. At $t = 0.5$ the particle is at $(1, 1)$, so $\\nabla f = \\langle 2, 4 \\rangle$. The velocity is $\\mathbf r' = \\langle 2, 0 \\rangle$. The dot product is $4 + 0 = 4$.
3. **They agree.** In words: $f$ changes by ($x$-rate of $f$) times ($x$-speed) plus ($y$-rate of $f$) times ($y$-speed), which is $2 \\times 2 + 4 \\times 0 = 4$.
<<<
That's exactly the integrand of the line integral! So by the ordinary Fundamental Theorem of Calculus,
$$\\int_C \\nabla f \\cdot d\\mathbf r = \\int_a^b \\frac{d}{dt} f(\\mathbf r(t))\\, dt = f(\\mathbf r(b)) - f(\\mathbf r(a)).$$
>>> Why this is the ordinary Fundamental Theorem, with numbers
**The ordinary Fundamental Theorem of Calculus** says: integrating a derivative gives the total change, $\\int_a^b g'(t)\\,dt = g(b) - g(a)$.

**Here** $g(t) = f(\\mathbf r(t))$, the value of $f$ at the particle. Its derivative is the integrand of the line integral (the chain rule, just above). So the line integral is the total change in $f$ from start to end.

**With the path $\\mathbf r = \\langle 2t, 1 \\rangle$, $0 \\le t \\le 1$, and $f = x^2 y + y^3$:**
- Directly: the integrand is $8t$ (from the Go deeper above), and $\\int_0^1 8t\\,dt = 4$.
- By the shortcut: the path goes from $(0, 1)$ to $(2, 1)$, and $f(2, 1) - f(0, 1) = 5 - 1 = 4$.

**A physics example.** Near Earth's surface, gravity on a 1 kg mass is $\\mathbf F = \\langle 0, 0, -9.8 \\rangle$ newtons, which is $\\nabla(-9.8z)$. Rising from height $0$ to $10$ m, gravity does work $-9.8 \\cdot 10 - 0 = -98$ joules along **any** path: straight up, circling $5$ times while rising, or dipping below the start first.

**What you need.** $\\mathbf F$ must be $\\nabla f$ on a region containing the whole path. Next lecture (Oct 12) covers how to tell whether a given $\\mathbf F$ is a gradient.
<<<
:::

:::theorem Fundamental Theorem for Line Integrals
If $C$ is a smooth (or piecewise smooth) curve from $A$ to $B$ and $f$ is differentiable with $\\nabla f$ continuous on $C$, then
$$\\int_C \\nabla f \\cdot d\\mathbf r = f(B) - f(A).$$

**Why:** along the curve, the chain rule says $\\nabla f(\\mathbf r(t)) \\cdot \\mathbf r'(t)$ is exactly $\\dfrac{d}{dt} f(\\mathbf r(t))$. So the line integral is the integral of a derivative, and the ordinary Fundamental Theorem of Calculus turns it into $f(\\mathbf r(b)) - f(\\mathbf r(a)) = f(B) - f(A)$. (Derived step by step just above.)
:::

:::example Using the shortcut
$\\mathbf F = \\langle 2xy,\\; x^2 + 3y^2 \\rangle$ is $\\nabla f$ for $f = x^2 y + y^3$ (check: $f_x = 2xy$ ✓ and $f_y = x^2 + 3y^2$ ✓). Along **any** path from $(0, 1)$ to $(2, 1)$:
$$\\int_C \\mathbf F \\cdot d\\mathbf r = f(2, 1) - f(0, 1) = (4 + 1) - (0 + 1) = 4.$$
>>> Each step, and a check along two paths
1. **Check that $f$ works.** $f_x$: in $x^2 y$, $y$ doesn't change as $x$ moves, so the derivative is $2xy$; $y^3$ has no $x$, so it gives $0$. $f_y$: $x^2 y$ gives $x^2$, and $y^3$ gives $3y^2$. Together, $\\nabla f = \\langle 2xy, x^2 + 3y^2 \\rangle = \\mathbf F$.
2. **End value.** $f(2, 1) = 2^2 \\cdot 1 + 1^3 = 5$.
3. **Start value.** $f(0, 1) = 0 + 1 = 1$.
4. **Subtract, end minus start.** $5 - 1 = 4$.

**Checking two paths directly.**
- Straight along $y = 1$, $\\mathbf r = \\langle 2t, 1 \\rangle$: $\\mathbf F = \\langle 4t, 4t^2 + 3 \\rangle$, dotted with $\\langle 2, 0 \\rangle$, gives $8t$. $\\int_0^1 8t\\,dt = 4$.
- Up and over, $\\mathbf r = \\langle 2t, 1 + \\sin \\pi t \\rangle$ (rising to $y = 2$ in the middle): a computer gives $4.000$ as well.
<<<
:::

:::check
For $f = x e^y$, find $\\displaystyle\\int_C \\nabla f \\cdot d\\mathbf r$ along any path from $(0, 0)$ to $(2, \\ln 3)$.
answer: 6
???
$f(2, \\ln 3) - f(0, 0) = 2 e^{\\ln 3} - 0 = 2 \\cdot 3 = 6$.
:::

:::check
$f(A) = 3$ and $f(B) = 10$. What is $\\int_C \\nabla f \\cdot d\\mathbf r$ for a path from $B$ to $A$?
- [x] $-7$
- [ ] $7$
  why: That's the path from $A$ to $B$. From $B$ to $A$ it's $f(A) - f(B)$.
- [ ] $13$
  why: The theorem *subtracts* endpoint values, $f(\\text{end}) - f(\\text{start})$. It never adds them.
- [ ] It depends on the path
  why: For a gradient field, only the endpoints matter. That's the whole point of the Fundamental Theorem.
???
The path goes **from $B$ to $A$**, so it's $f(\\text{end}) - f(\\text{start}) = f(A) - f(B) = 3 - 10 = -7$. For a gradient field, the path doesn't matter.
:::

:::idea Path independence
The theorem has two big consequences for a gradient field $\\mathbf F = \\nabla f$:

1. **[[path independent|Path independence]]:** $\\int_C \\mathbf F \\cdot d\\mathbf r$ depends only on the endpoints, not on the route.
2. **Closed loops give zero:** if $C$ starts and ends at the same point, $\\oint_C \\mathbf F \\cdot d\\mathbf r = f(A) - f(A) = 0$.

**Vocabulary.** A field that is a gradient is called **conservative**, and the $f$ is a [[potential function]].

**Using it backward.** If two paths with the same endpoints give **different** values, or a closed loop gives a **nonzero** value, then $\\mathbf F$ is **not** conservative.
>>> Both consequences and the backward use, with numbers
**Path independence.** For $f = x^2 y + y^3$, every path from $(0, 1)$ to $(2, 1)$ gives $4$, as checked in the example above.

**A closed loop gives $0$.** Go from $(0, 1)$ to $(2, 1)$ along $y = 1$ (gives $4$), then back along the up-and-over path walked backward (gives $-4$). The loop total is $4 - 4 = 0$, which is $f(0, 1) - f(0, 1)$.

**Using it backward, for $\\mathbf F = \\langle y, 0 \\rangle$ from $(0, 0)$ to $(1, 1)$.**
1. **Along $y = x$.** $\\mathbf r = \\langle t, t \\rangle$, so $\\mathbf F = \\langle t, 0 \\rangle$ and $\\mathbf r' = \\langle 1, 1 \\rangle$. The dot product is $t$, and $\\int_0^1 t\\,dt = \\tfrac12$.
2. **Along the $x$-axis to $(1, 0)$, then up.** On the first leg $y = 0$, so $\\mathbf F = \\langle 0, 0 \\rangle$: nothing. On the second leg the point moves only up, and $\\mathbf F = \\langle y, 0 \\rangle$ only points sideways, so the dot product is $0$. Total: $0$.
3. **Conclude.** $\\tfrac12 \\ne 0$: same endpoints, different answers. A gradient field would give the same answer on both, so $\\mathbf F$ is not conservative. (Oct 12 gives a much faster test.)
<<<
:::

:::check
$\\oint_C \\mathbf F \\cdot d\\mathbf r = 3$ for some closed curve $C$. Could $\\mathbf F$ be conservative?
- [ ] Yes
  why: A conservative field gives exactly $0$ around every closed curve, so a loop giving $3$ rules it out.
- [x] No
???
No. A conservative field gives $0$ around **every** closed curve. One nonzero loop proves it isn't conservative.
:::

:::summary Summary
- Split paths into pieces and add, and reversing direction flips the sign.
- **Fundamental Theorem:** $\\int_C \\nabla f \\cdot d\\mathbf r = f(B) - f(A)$, so the path doesn't matter.
- Conservative means $\\mathbf F = \\nabla f$: path independent, and $0$ around closed loops.
- Two paths giving different answers, or a nonzero loop, means **not** conservative.

**Common mistakes:**
- Using $f(\\text{start}) - f(\\text{end})$, which has the sign backward.
- Using the shortcut on a field that isn't a gradient.
- Forgetting that a closed loop of a conservative field is exactly $0$.
:::
`;export{e as default};