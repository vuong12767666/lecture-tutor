var e=`---
title: Polar coordinates and applications of double integrals
date: 2026-10-23
stewart: 15.3, 15.4
source: OpenStax Calculus Volume 3, §5.3 Double Integrals in Polar Coordinates and §5.6 Calculating Centers of Mass and Moments of Inertia
---

:::recap Last time
- [[polar coordinates|Polar coordinates]]: $x = r\\cos\\theta$, $y = r\\sin\\theta$, so $x^2 + y^2 = r^2$.
- $dA = r\\, dr\\, d\\theta$, because a small polar piece has sides $\\Delta r$ and $r\\, \\Delta\\theta$.
- Disks, rings, and sectors centered at the origin have constant limits in $r$ and $\\theta$.
:::

:::check
Warm-up: use polar coordinates to find the area of the disk $x^2 + y^2 \\le 9$.
answer: 9pi
???
The disk is $0 \\le r \\le 3$, $0 \\le \\theta \\le 2\\pi$, so the area is $\\int_0^{2\\pi} \\int_0^3 r\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac92 = 9\\pi$, matching $\\pi \\cdot 3^2$.
:::

:::question Today
What about regions bounded by circles that aren't centered at the origin, or by other polar curves? And what else can a double integral tell you about a flat plate, such as its total mass and the point where it balances?
:::

:::idea Polar regions with curved edges
Suppose each ray from the origin at angle $\\theta$, for $\\alpha \\le \\theta \\le \\beta$, crosses the region $D$ in one segment, entering at $r = g_1(\\theta)$ and leaving at $r = g_2(\\theta)$. Then
$$\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_{g_1(\\theta)}^{g_2(\\theta)} f(r\\cos\\theta,\\, r\\sin\\theta)\\; r\\, dr\\, d\\theta.$$

**Why the $r$-limits can depend on $\\theta$.** It's Oct 19's argument with rays in place of vertical lines. Group the small polar pieces into thin wedges, one for each angle. The wedge at angle $\\theta$ contains only the pieces inside $D$, which are the ones with $r$ between $g_1(\\theta)$ and $g_2(\\theta)$. So the inside integral over $r$ runs over that segment, and its limits depend on $\\theta$. The outside limits only say which rays hit $D$ at all, so they're numbers.

**Reading the limits:**
1. Write each edge in polar: substitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$, then solve for $r$.
2. Draw a ray from the origin through $D$. Where it enters is the lower $r$-limit, and where it leaves is the upper one.
3. The $\\theta$-limits are the angles of the first and last rays that hit $D$.

**Example.** The disk $(x - 1)^2 + y^2 \\le 1$, which touches the origin.
1. **The edge.** Expanding $(x - 1)^2 + y^2 = 1$ gives $x^2 + y^2 = 2x$, which in polar is $r^2 = 2r\\cos\\theta$. So the edge is $r = 2\\cos\\theta$.
2. **Rays.** Every ray starts at the origin, $r = 0$, which is on the disk's edge, and leaves the disk at $r = 2\\cos\\theta$.
3. **Angles.** The disk lies where $x \\ge 0$, so the rays that hit it run from $\\theta = -\\tfrac\\pi2$ to $\\tfrac\\pi2$. Those are exactly the angles where $2\\cos\\theta \\ge 0$.

The area is
$$\\int_{-\\pi/2}^{\\pi/2} \\int_0^{2\\cos\\theta} r\\, dr\\, d\\theta = \\int_{-\\pi/2}^{\\pi/2} 2\\cos^2\\theta\\, d\\theta = \\int_{-\\pi/2}^{\\pi/2} (1 + \\cos 2\\theta)\\, d\\theta = \\pi,$$
which is right for a disk of radius $1$.
+++
**Why dividing by $r$ was safe.** $r^2 = 2r\\cos\\theta$ means $r(r - 2\\cos\\theta) = 0$, so $r = 0$ or $r = 2\\cos\\theta$. The first is just the origin, and the curve $r = 2\\cos\\theta$ already passes through the origin (at $\\theta = \\pm\\tfrac\\pi2$). So nothing is lost.

**A check with numbers.** Over the same disk,
$$\\iint_D x\\, dA = \\int_{-\\pi/2}^{\\pi/2} \\int_0^{2\\cos\\theta} (r\\cos\\theta)\\, r\\, dr\\, d\\theta = \\int_{-\\pi/2}^{\\pi/2} \\cos\\theta \\cdot \\frac{(2\\cos\\theta)^3}{3}\\, d\\theta = \\frac83 \\int_{-\\pi/2}^{\\pi/2} \\cos^4\\theta\\, d\\theta = \\frac83 \\cdot \\frac{3\\pi}{8} = \\pi.$$
The disk is centered at $(1, 0)$, so the average of $x$ over it is $1$, and $\\iint_D x\\, dA$ should be $1 \\times (\\text{area}) = \\pi$. ✓

**When to use polar.** When the edges are circles through or around the origin, or rays from it, and when the integrand contains $x^2 + y^2$, which becomes $r^2$.
:::

:::figure polar-circle-region
The disk $(x - 1)^2 + y^2 \\le 1$, whose edge is $r = 2\\cos\\theta$. The ray at angle $\\theta = 0.6$ starts at the origin and leaves the disk at $r = 2\\cos 0.6 \\approx 1.65$.
:::

:::theorem Double integrals over polar regions
If $f$ is continuous on $D = \\{\\alpha \\le \\theta \\le \\beta,\\; g_1(\\theta) \\le r \\le g_2(\\theta)\\}$, with $0 \\le g_1 \\le g_2$ and $0 \\le \\beta - \\alpha \\le 2\\pi$, then
$$\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_{g_1(\\theta)}^{g_2(\\theta)} f(r\\cos\\theta,\\, r\\sin\\theta)\\; r\\, dr\\, d\\theta.$$

**Why:** each small polar piece has area about $r\\, \\Delta r\\, \\Delta\\theta$ (Oct 19). Adding up the pieces wedge by wedge, the wedge at angle $\\theta$ holds only the pieces with $g_1(\\theta) \\le r \\le g_2(\\theta)$, so the inside integral runs over exactly those $r$.
:::

:::check
The disk $x^2 + (y - 1)^2 \\le 1$ has edge $r = 2\\sin\\theta$. Which integral gives its area?
- [x] $\\displaystyle\\int_0^{\\pi} \\int_0^{2\\sin\\theta} r\\, dr\\, d\\theta$
- [ ] $\\displaystyle\\int_0^{2\\pi} \\int_0^{2\\sin\\theta} r\\, dr\\, d\\theta$
  why: For $\\pi < \\theta < 2\\pi$, $\\sin\\theta < 0$, so those rays point below the $x$-axis and miss the disk, which lies above it. The angles run from $0$ to $\\pi$.
- [ ] $\\displaystyle\\int_{-\\pi/2}^{\\pi/2} \\int_0^{2\\sin\\theta} r\\, dr\\, d\\theta$
  why: That angle range fits a disk to the right of the $y$-axis, like $r = 2\\cos\\theta$. This disk is above the $x$-axis.
- [ ] $\\displaystyle\\int_0^{\\pi} \\int_0^{2\\sin\\theta} dr\\, d\\theta$
  why: It's missing the factor $r$ from $dA = r\\, dr\\, d\\theta$.
???
The edge $x^2 + (y - 1)^2 = 1$ expands to $x^2 + y^2 = 2y$, so $r^2 = 2r\\sin\\theta$ and $r = 2\\sin\\theta$. The disk lies above the $x$-axis, so $\\theta$ runs from $0$ to $\\pi$, and each ray goes from the origin out to $r = 2\\sin\\theta$. The area is $\\int_0^\\pi 2\\sin^2\\theta\\, d\\theta = \\pi$.
:::

:::idea Switching an x, y integral to polar
1. Sketch the region from the given limits.
2. Describe the same region with $r$ and $\\theta$.
3. Replace $x$ by $r\\cos\\theta$, $y$ by $r\\sin\\theta$, and $dy\\, dx$ (or $dx\\, dy$) by $r\\, dr\\, d\\theta$.

**Example.** $\\displaystyle\\int_0^1 \\int_0^{\\sqrt{1 - x^2}} e^{x^2 + y^2}\\, dy\\, dx$.
- In $x$ and $y$ it's stuck: $\\int e^{y^2}\\, dy$ has no formula built from the usual functions (Oct 19).
- **The region.** $0 \\le x \\le 1$ and $0 \\le y \\le \\sqrt{1 - x^2}$: above the $x$-axis, to the right of the $y$-axis, and inside the circle $x^2 + y^2 = 1$. That's the quarter disk in the first quadrant: $0 \\le r \\le 1$, $0 \\le \\theta \\le \\tfrac\\pi2$.
- **In polar:**
$$\\int_0^{\\pi/2} \\int_0^1 e^{r^2}\\, r\\, dr\\, d\\theta = \\frac\\pi2 \\Big[\\tfrac12 e^{r^2}\\Big]_0^1 = \\frac\\pi2 \\cdot \\frac{e - 1}{2} = \\frac{\\pi(e - 1)}{4}.$$

**Why polar made it possible.** The factor $r$ from $dA = r\\, dr\\, d\\theta$ is exactly what the substitution $u = r^2$, $du = 2r\\, dr$ needs. Without it, $\\int e^{r^2}\\, dr$ would be just as stuck as before.
+++
**A famous use: the bell curve's integral.** Let $I = \\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx$. No antiderivative of $e^{-x^2}$ is built from the usual functions, so one variable alone can't find $I$. But
$$I^2 = \\Big(\\int_{-\\infty}^{\\infty} e^{-x^2}\\, dx\\Big)\\Big(\\int_{-\\infty}^{\\infty} e^{-y^2}\\, dy\\Big) = \\iint_{\\text{plane}} e^{-(x^2 + y^2)}\\, dA,$$
by the product shortcut (Oct 16), taken over larger and larger regions that fill the plane. In polar,
$$\\int_0^{2\\pi} \\int_0^{\\infty} e^{-r^2}\\, r\\, dr\\, d\\theta = 2\\pi \\cdot \\frac12 = \\pi,$$
so $I = \\sqrt\\pi \\approx 1.7725$. This number is why $\\sqrt\\pi$ appears in the formula for the normal distribution in statistics.
:::

:::check
Switch to polar and compute $\\displaystyle\\int_{-2}^{2} \\int_0^{\\sqrt{4 - x^2}} (x^2 + y^2)\\, dy\\, dx$.
answer: 4pi
???
The limits say $-2 \\le x \\le 2$ and $0 \\le y \\le \\sqrt{4 - x^2}$: the upper half of the disk of radius $2$, which is $0 \\le r \\le 2$, $0 \\le \\theta \\le \\pi$. Then $x^2 + y^2 = r^2$, and
$$\\int_0^{\\pi} \\int_0^2 r^2 \\cdot r\\, dr\\, d\\theta = \\pi \\cdot \\Big[\\tfrac{r^4}{4}\\Big]_0^2 = 4\\pi.$$
:::

:::idea Mass and center of mass
Think of $D$ as a thin flat plate whose **density** $\\rho(x, y)$ is its mass per unit area at each point.

**Mass:** $m = \\iint_D \\rho\\, dA$. A small piece of area $\\Delta A$ has mass about $\\rho\\, \\Delta A$, and the integral adds up the pieces.

**[[center of mass|Center of mass]]:** the point $(\\bar x, \\bar y)$ where the plate balances on a pin:
$$\\bar x = \\frac{1}{m}\\iint_D x\\, \\rho\\, dA, \\qquad \\bar y = \\frac{1}{m}\\iint_D y\\, \\rho\\, dA.$$

**Why these formulas.** Start with point masses $m_1, m_2, \\dots$ at positions $x_1, x_2, \\dots$ on a straight rod resting on a pivot at $\\bar x$. In physics, a mass $m_i$ at signed distance $x_i - \\bar x$ from the pivot tips the rod with a turning effect (its **moment**) of $m_i(x_i - \\bar x)$. The rod balances when the moments cancel:
$$\\sum m_i (x_i - \\bar x) = 0 \\quad\\Longrightarrow\\quad \\bar x = \\frac{\\sum m_i x_i}{\\sum m_i}.$$
For a plate, treat each small piece as a point mass $\\rho\\, \\Delta A$ at $(x, y)$. The sums become integrals: $\\sum m_i x_i$ becomes $\\iint_D x\\rho\\, dA$, and $\\sum m_i$ becomes the mass $m$. Balancing in the $y$-direction works the same way with $y$.

**Uniform density.** If $\\rho$ is a constant, it cancels from the top and bottom, so $(\\bar x, \\bar y)$ is just the average of $x$ and the average of $y$ over $D$. That point is called the **centroid**, and it depends only on the shape.

**Symmetry.** If $D$ and $\\rho$ are both symmetric across a line, the center of mass lies on that line. The pieces pair up across the line with equal masses at opposite signed distances, so their moments cancel.

**Example.** The half disk $x^2 + y^2 \\le 4$, $y \\ge 0$, with uniform density $\\rho = 1$.
- **Mass:** the area, $\\tfrac12 \\pi \\cdot 2^2 = 2\\pi$.
- $\\bar x = 0$ by symmetry across the $y$-axis.
- **$\\bar y$:** in polar, $\\displaystyle\\iint_D y\\, dA = \\int_0^\\pi \\int_0^2 (r\\sin\\theta)\\, r\\, dr\\, d\\theta = \\Big(\\int_0^\\pi \\sin\\theta\\, d\\theta\\Big)\\Big(\\int_0^2 r^2\\, dr\\Big) = 2 \\cdot \\frac83 = \\frac{16}{3}$, so $\\bar y = \\dfrac{16/3}{2\\pi} = \\dfrac{8}{3\\pi} \\approx 0.85$.

**Check.** $\\bar y$ is between $0$ and $2$, and below $1$, half the height. That fits: the half disk is wider near the bottom, so more of its area is low.
+++
**A heavier top.** Give the same half disk density $\\rho = y$, so it gets heavier going up. Then $m = \\iint_D y\\, dA = \\tfrac{16}{3}$, and
$$\\iint_D y \\cdot y\\, dA = \\Big(\\int_0^\\pi \\sin^2\\theta\\, d\\theta\\Big)\\Big(\\int_0^2 r^3\\, dr\\Big) = \\frac\\pi2 \\cdot 4 = 2\\pi, \\qquad \\bar y = \\frac{2\\pi}{16/3} = \\frac{3\\pi}{8} \\approx 1.18.$$
That's higher than $0.85$, as it should be when the top is heavier. Still $\\bar x = 0$, since $\\rho = y$ is symmetric across the $y$-axis too.
:::

:::figure half-disk-center
The half disk $x^2 + y^2 \\le 4$, $y \\ge 0$, with uniform density. It balances at $\\big(0, \\tfrac{8}{3\\pi}\\big) \\approx (0, 0.85)$: on the $y$-axis by symmetry, and below half the height because more of the area is near the bottom.
:::

:::check
A plate covers the rectangle $0 \\le x \\le 4$, $0 \\le y \\le 2$ with density $\\rho = x$. Where is its center of mass?
- [x] $\\big(\\tfrac83,\\; 1\\big)$
- [ ] $(2,\\; 1)$
  why: That's the center for uniform density. With $\\rho = x$ the right side is heavier, so the balance point moves right of $x = 2$.
- [ ] $\\big(\\tfrac83,\\; \\tfrac43\\big)$
  why: The density doesn't depend on $y$, so the top and bottom halves match, and $\\bar y$ stays in the middle, at $1$.
- [ ] $\\big(\\tfrac{128}{3},\\; 16\\big)$
  why: Those are the moments $\\iint x\\rho\\, dA$ and $\\iint y\\rho\\, dA$. Divide each by the mass $m = 16$.
???
$m = \\int_0^4 \\int_0^2 x\\, dy\\, dx = 2 \\cdot 8 = 16$. Then $\\iint x \\cdot x\\, dA = 2 \\cdot \\tfrac{64}{3} = \\tfrac{128}{3}$, so $\\bar x = \\tfrac{128/3}{16} = \\tfrac83$. And $\\iint y \\cdot x\\, dA = \\Big(\\int_0^4 x\\, dx\\Big)\\Big(\\int_0^2 y\\, dy\\Big) = 8 \\cdot 2 = 16$, so $\\bar y = \\tfrac{16}{16} = 1$.
:::

:::summary Summary
- **Polar regions:** $\\displaystyle\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_{g_1(\\theta)}^{g_2(\\theta)} f(r\\cos\\theta, r\\sin\\theta)\\, r\\, dr\\, d\\theta$. Each ray enters at $g_1(\\theta)$ and leaves at $g_2(\\theta)$, and the $\\theta$-limits are the rays that hit $D$.
- A circle through the origin, like $(x - 1)^2 + y^2 = 1$, is $r = 2\\cos\\theta$ for $-\\tfrac\\pi2 \\le \\theta \\le \\tfrac\\pi2$.
- **Switching to polar:** sketch the region, describe it with $r$ and $\\theta$, and replace $dy\\, dx$ by $r\\, dr\\, d\\theta$.
- **Mass** $m = \\iint_D \\rho\\, dA$. **Center of mass** $\\bar x = \\frac1m \\iint_D x\\rho\\, dA$, $\\bar y = \\frac1m \\iint_D y\\rho\\, dA$: the moments cancel there. Use symmetry to skip integrals.

**Common mistakes:**
- Letting $\\theta$ run all the way around when the region lies on one side of the origin.
- Forgetting the $r$ in $r\\, dr\\, d\\theta$.
- Reporting the moment $\\iint x\\rho\\, dA$ without dividing by the mass.
:::
`;export{e as default};