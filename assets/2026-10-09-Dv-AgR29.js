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
Parametrize each piece on its own.

**Reversing direction.** Writing $-C$ for $C$ traced backward:
$$\\int_{-C} \\mathbf F \\cdot d\\mathbf r = -\\int_C \\mathbf F \\cdot d\\mathbf r.$$
+++
**Example in $P\\,dx + Q\\,dy$ notation.** Compute $\\int_C y\\, dx + x^2\\, dy$, where $C$ goes from $(0,0)$ to $(1,0)$, then up to $(1,1)$.

- $C_1$: $\\mathbf r = \\langle t, 0 \\rangle$, so $y = 0$ and $dy = 0$. Both terms vanish: $0$.
- $C_2$: $\\mathbf r = \\langle 1, t \\rangle$, so $dx = 0$ and $dy = dt$. That leaves $\\int_0^1 1^2\\, dt = 1$.

The total is $0 + 1 = 1$. On a horizontal piece $dy = 0$, and on a vertical piece $dx = 0$, which makes these quick.
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
That's exactly the integrand of the line integral! So by the ordinary Fundamental Theorem of Calculus,
$$\\int_C \\nabla f \\cdot d\\mathbf r = \\int_a^b \\frac{d}{dt} f(\\mathbf r(t))\\, dt = f(\\mathbf r(b)) - f(\\mathbf r(a)).$$
+++
**The physics.** Gravity is the gradient of a function, so it's [[conservative]]. The work gravity does depends only on where you start and end, not the route: hiking up a switchback trail or straight up a cliff, gravity does the same work. The potential energy is $-f$, and work equals the drop in potential energy.

**What you need.** $\\mathbf F$ must be $\\nabla f$ on a region containing the whole path, and $f$ must be differentiable there. Next lecture (Oct 12) covers how to tell whether a given $\\mathbf F$ is a gradient.
:::

:::theorem Fundamental Theorem for Line Integrals
If $C$ is a smooth (or piecewise smooth) curve from $A$ to $B$ and $f$ is differentiable with $\\nabla f$ continuous on $C$, then
$$\\int_C \\nabla f \\cdot d\\mathbf r = f(B) - f(A).$$
:::

:::example Using the shortcut
$\\mathbf F = \\langle 2xy,\\; x^2 + 3y^2 \\rangle$ is $\\nabla f$ for $f = x^2 y + y^3$ (check: $f_x = 2xy$ ✓ and $f_y = x^2 + 3y^2$ ✓). Along **any** path from $(0, 1)$ to $(2, 1)$:
$$\\int_C \\mathbf F \\cdot d\\mathbf r = f(2, 1) - f(0, 1) = (4 + 1) - (0 + 1) = 4.$$
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
+++
**Example: proving a field isn't conservative.** $\\mathbf F = \\langle y, 0 \\rangle$ from $(0,0)$ to $(1,1)$.

- Along $y = x$, with $\\mathbf r = \\langle t, t \\rangle$: $\\mathbf F \\cdot \\mathbf r' = t$, so the integral is $\\tfrac12$.
- Along the $x$-axis to $(1,0)$, then up: on the first leg $y = 0$, so $\\mathbf F = \\mathbf 0$, and on the second leg $dx = 0$. The integral is $0$.

$\\tfrac12 \\neq 0$, so $\\mathbf F$ is not path independent, and therefore not conservative. (Oct 12 gives a much faster test.)
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