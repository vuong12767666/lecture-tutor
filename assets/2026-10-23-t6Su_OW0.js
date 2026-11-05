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
>>> Why the limits change from ray to ray, on the example's disk
**What a ray is.** A ray is a half-line that starts at the origin and goes out at one angle $\\theta$. Every point on it has the same angle; only the distance $r$ from the origin changes. With $dr$ inside, the integral adds up the region one ray at a time, so the inside limits say where each ray enters and leaves the region.

**Two rays through the example's disk.** The disk is $(x - 1)^2 + y^2 \\le 1$ (center $(1, 0)$, radius $1$), and its edge is $r = 2\\cos\\theta$.
- **The ray at $\\theta = 0$** goes along the positive $x$-axis. It leaves the disk at $r = 2\\cos 0 = 2$, the point $(2, 0)$.
- **The ray at $\\theta = \\tfrac\\pi3$** ($60^\\circ$) leaves at $r = 2\\cos\\tfrac\\pi3 = 2 \\cdot \\tfrac12 = 1$. The point at distance $1$ and angle $60^\\circ$ is $\\big(\\cos\\tfrac\\pi3, \\sin\\tfrac\\pi3\\big) = \\big(\\tfrac12, \\tfrac{\\sqrt3}{2}\\big)$. Check it's on the disk's edge: $\\big(\\tfrac12 - 1\\big)^2 + \\tfrac34 = \\tfrac14 + \\tfrac34 = 1$ ✓.

The first ray is inside the disk for $2$ units and the second for only $1$, so the upper limit can't be one fixed number: it has to be a formula in $\\theta$, here $2\\cos\\theta$. The $\\theta$-limits are different: they only say which rays to use (the first and last rays that hit the disk), and those are fixed numbers.
<<<

**Reading the limits:**
1. Write each edge in polar: substitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$, then solve for $r$.
2. Draw a ray from the origin through $D$. Where it enters is the lower $r$-limit, and where it leaves is the upper one.
3. The $\\theta$-limits are the angles of the first and last rays that hit $D$.

**Reading the limits from the inequality, without drawing:**
1. Substitute $x = r\\cos\\theta$ and $y = r\\sin\\theta$ into the inequality that describes $D$.
2. Solve it for $r$. The result, like $g_1(\\theta) \\le r \\le g_2(\\theta)$, gives the inside limits.
3. The $\\theta$-limits are the angles where that range of $r$ isn't empty (for example, where $g_2(\\theta) \\ge 0$).

**Example.** The disk $(x - 1)^2 + y^2 \\le 1$, which touches the origin.
1. **The edge.** Expanding $(x - 1)^2 + y^2 = 1$ gives $x^2 + y^2 = 2x$, which in polar is $r^2 = 2r\\cos\\theta$. So the edge is $r = 2\\cos\\theta$.
>>> Converting the edge to polar, step by step
**Why convert.** In polar coordinates, the edge should read "$r = $ (formula in $\\theta$)", which says how far out each ray goes before it reaches the edge.

1. **Multiply out the square.** $(x - 1)^2 = (x - 1)(x - 1) = x^2 - 2x + 1$. So the edge is $x^2 - 2x + 1 + y^2 = 1$.
2. **Simplify.** Subtract $1$ from both sides: $x^2 - 2x + y^2 = 0$. Add $2x$ to both sides: $x^2 + y^2 = 2x$.
3. **Switch to $r$ and $\\theta$.** $x^2 + y^2$ is the squared distance from the origin, $r^2$; and $x = r\\cos\\theta$. So $r^2 = 2r\\cos\\theta$.
4. **Solve for $r$ without losing anything.** Move everything to one side: $r^2 - 2r\\cos\\theta = 0$. Pull out the common factor $r$: $r(r - 2\\cos\\theta) = 0$. A product is $0$ only when a factor is $0$, so $r = 0$ (just the origin) or $r = 2\\cos\\theta$. The curve $r = 2\\cos\\theta$ already includes the origin (when $\\cos\\theta = 0$, at $\\theta = \\pm\\tfrac\\pi2$), so the whole edge is $r = 2\\cos\\theta$.

**Check.** At $\\theta = 0$: $r = 2$, the point $(2, 0)$, the disk's rightmost point ✓.
<<<
2. **Rays.** Every ray starts at the origin, $r = 0$, which is on the disk's edge, and leaves the disk at $r = 2\\cos\\theta$.
3. **Angles.** The disk lies where $x \\ge 0$, so the rays that hit it run from $\\theta = -\\tfrac\\pi2$ to $\\tfrac\\pi2$. Those are exactly the angles where $2\\cos\\theta \\ge 0$.
>>> Steps 2 and 3 from the inequality, without drawing
**Step 2: how far each ray goes.** The inside of the disk is $(x - 1)^2 + y^2 \\le 1$. By the same steps as for the edge, that's $x^2 + y^2 \\le 2x$, so $r^2 \\le 2r\\cos\\theta$. For points other than the origin, $r > 0$, so divide both sides by $r$ (dividing by a positive number keeps "$\\le$"): $r \\le 2\\cos\\theta$. With $r \\ge 0$ (distances aren't negative), each ray is in the disk for $0 \\le r \\le 2\\cos\\theta$. That's why every ray starts at $r = 0$: the disk touches the origin.

**Step 3: which rays hit the disk.** The range $0 \\le r \\le 2\\cos\\theta$ contains points other than the origin only when $2\\cos\\theta > 0$, which happens for angles between $-\\tfrac\\pi2$ and $\\tfrac\\pi2$ (rays pointing right of the $y$-axis). For example:
- $\\theta = 0$: $0 \\le r \\le 2$, a long piece.
- $\\theta = \\tfrac\\pi2$ (straight up): $0 \\le r \\le 0$, only the origin. That ray just touches the disk.
- $\\theta = \\pi$ (pointing left): $2\\cos\\pi = -2$, and no distance $r \\ge 0$ is at most $-2$. That ray misses the disk.

So the $\\theta$-limits are $-\\tfrac\\pi2$ to $\\tfrac\\pi2$.
<<<

The area is
$$\\int_{-\\pi/2}^{\\pi/2} \\int_0^{2\\cos\\theta} r\\, dr\\, d\\theta = \\int_{-\\pi/2}^{\\pi/2} 2\\cos^2\\theta\\, d\\theta = \\int_{-\\pi/2}^{\\pi/2} (1 + \\cos 2\\theta)\\, d\\theta = \\pi,$$
which is right for a disk of radius $1$.
>>> Each step of the area integral, worked out
**Why this integral is the area.** With $f = 1$, each small polar piece contributes its own area $r\\,\\Delta r\\,\\Delta\\theta$, so the total is the area of the disk.

1. **Inside, along one ray.** $\\int_0^{2\\cos\\theta} r\\, dr = \\Big[\\tfrac{r^2}{2}\\Big]_0^{2\\cos\\theta} = \\tfrac{(2\\cos\\theta)^2}{2} = \\tfrac{4\\cos^2\\theta}{2} = 2\\cos^2\\theta$.
2. **Rewrite $\\cos^2\\theta$.** There's no simple antiderivative for $\\cos^2\\theta$ as written, but the double-angle formula $\\cos 2\\theta = 2\\cos^2\\theta - 1$ (check at $\\theta = 0$: $1 = 2 - 1$ ✓) can be rearranged to $2\\cos^2\\theta = 1 + \\cos 2\\theta$, which is easy to integrate.
3. **Outside, adding the rays.** An antiderivative of $1 + \\cos 2\\theta$ is $\\theta + \\tfrac12\\sin 2\\theta$ (its derivative is $1 + \\cos 2\\theta$). At $\\tfrac\\pi2$: $\\tfrac\\pi2 + \\tfrac12\\sin\\pi = \\tfrac\\pi2$. At $-\\tfrac\\pi2$: $-\\tfrac\\pi2 + \\tfrac12\\sin(-\\pi) = -\\tfrac\\pi2$. Subtract: $\\pi$.
4. **Check.** The disk has radius $1$, so its area is $\\pi \\cdot 1^2 = \\pi$ ✓.
<<<

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
1. Find the region from the given limits: sketch it, or write the limits as inequalities.
2. Describe the same region with $r$ and $\\theta$. Without a picture: combine the inequalities into ones about $x^2 + y^2$ (which becomes $r^2$) and about the signs of $x$ and $y$ (which give the $\\theta$-range).
3. Replace $x$ by $r\\cos\\theta$, $y$ by $r\\sin\\theta$, and $dy\\, dx$ (or $dx\\, dy$) by $r\\, dr\\, d\\theta$.

**Example.** $\\displaystyle\\int_0^1 \\int_0^{\\sqrt{1 - x^2}} e^{x^2 + y^2}\\, dy\\, dx$.
- In $x$ and $y$ it's stuck: $\\int e^{y^2}\\, dy$ has no formula built from the usual functions (Oct 19).
- **The region.** $0 \\le x \\le 1$ and $0 \\le y \\le \\sqrt{1 - x^2}$: above the $x$-axis, to the right of the $y$-axis, and inside the circle $x^2 + y^2 = 1$. That's the quarter disk in the first quadrant: $0 \\le r \\le 1$, $0 \\le \\theta \\le \\tfrac\\pi2$.
>>> Turning the limits into $r$ and $\\theta$, from the inequalities
**What has to happen.** The same region has to be described by rules about $r$ (distance from the origin) and $\\theta$ (angle) instead of $x$ and $y$.

1. **Write out the rules.** The limits say $0 \\le x \\le 1$ and $0 \\le y \\le \\sqrt{1 - x^2}$.
2. **Get rid of the square root.** Both $y$ and $\\sqrt{1 - x^2}$ are $0$ or more, and for numbers $0$ or more, squaring keeps the bigger one bigger (for example $0.6 \\le 0.8$ and $0.36 \\le 0.64$). So $y \\le \\sqrt{1 - x^2}$ is the same as $y^2 \\le 1 - x^2$, which is $x^2 + y^2 \\le 1$. In polar, that's $r^2 \\le 1$: distance at most $1$, so $r \\le 1$.
3. **The signs.** $x \\ge 0$ and $y \\ge 0$ mean the point is right of the $y$-axis and above the $x$-axis. Those are the angles from $0$ (the positive $x$-axis) to $\\tfrac\\pi2$ (the positive $y$-axis).
4. **Nothing left over.** The rule $x \\le 1$ doesn't add anything: if $x^2 + y^2 \\le 1$, then $x^2 \\le 1$, so $x \\le 1$ automatically.

**Check one point.** $(0.6, 0.6)$: in the original rules, $0.6 \\le \\sqrt{1 - 0.36} = 0.8$ ✓. In polar: its distance is $\\sqrt{0.36 + 0.36} \\approx 0.85$, which is at most $1$ ✓, and its angle is $45^\\circ = \\tfrac\\pi4$, between $0$ and $\\tfrac\\pi2$ ✓.
<<<
- **In polar:**
$$\\int_0^{\\pi/2} \\int_0^1 e^{r^2}\\, r\\, dr\\, d\\theta = \\frac\\pi2 \\Big[\\tfrac12 e^{r^2}\\Big]_0^1 = \\frac\\pi2 \\cdot \\frac{e - 1}{2} = \\frac{\\pi(e - 1)}{4}.$$
>>> Each step of the polar integral, worked out
1. **The function.** $e^{x^2 + y^2}$: the exponent $x^2 + y^2$ is the squared distance from the origin, $r^2$. So the function is $e^{r^2}$.
2. **The size of a small piece.** In polar, a piece has area $r\\,\\Delta r\\,\\Delta\\theta$ (its curved side, part of a circle of radius $r$, is $r\\,\\Delta\\theta$ long). So the integrand gets an extra $r$: $e^{r^2}\\, r$.
3. **Inside, along one ray, by substitution.** Let $u = r^2$. Then $\\tfrac{du}{dr} = 2r$, so $r\\, dr = \\tfrac12\\, du$. When $r = 0$, $u = 0$; when $r = 1$, $u = 1$. So $\\int_0^1 e^{r^2}\\, r\\, dr = \\int_0^1 \\tfrac12 e^u\\, du = \\tfrac12(e - 1)$. The $r$ from step 2 is exactly what made this substitution possible.
4. **Outside, adding the rays.** Every ray gives the same $\\tfrac12(e - 1)$, so adding over angles from $0$ to $\\tfrac\\pi2$ multiplies by $\\tfrac\\pi2$: $\\tfrac\\pi2 \\cdot \\tfrac{e - 1}{2} = \\tfrac{\\pi(e - 1)}{4} \\approx 1.3495$.

**A check with numbers.** Adding up the original $x, y$ integral on a computer, one vertical line at a time, also gives about $1.3495$ ✓.
<<<

**Why polar made it possible.** The factor $r$ from $dA = r\\, dr\\, d\\theta$ is exactly what the substitution $u = r^2$, $du = 2r\\, dr$ needs. Without it, $\\int e^{r^2}\\, dr$ would be just as stuck as before.
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
>>> The balance condition, step by step with numbers
**What the center of mass is.** It's the balance point: where you could put a pencil tip under a flat object (or a pivot under a rod) and it wouldn't tip.

**Two weights on a rod.** Put a weight of $1$ at position $x = 0$ and a weight of $3$ at $x = 4$. Where does the rod balance?
- Each weight tips the rod by (its weight) $\\times$ (its signed distance from the pivot): negative on the left, positive on the right. This is called its **moment**.
- With the pivot at $3$: the weight at $0$ is $3$ to the left, so it tips by $1 \\times (0 - 3) = -3$. The weight at $4$ is $1$ to the right, so it tips by $3 \\times (4 - 3) = 3$. They add to $0$: balanced ✓.
- The pivot is closer to the heavier weight, as you'd expect.

**The formula, from "moments add to $0$".** With the pivot at $\\bar x$: $\\sum m_i(x_i - \\bar x) = 0$. Multiply out: $\\sum m_i x_i - \\bar x\\sum m_i = 0$ (the $\\bar x$ is the same in every term, so it comes out). So $\\bar x = \\dfrac{\\sum m_i x_i}{\\sum m_i}$: the weighted average of the positions. Check: $\\tfrac{1 \\cdot 0 + 3 \\cdot 4}{1 + 3} = \\tfrac{12}{4} = 3$ ✓.

**From weights to a plate.** Cut the plate into small pieces. A piece at $(x, y)$ with area $\\Delta A$ and density $\\rho$ (mass per unit area) has mass about $\\rho\\,\\Delta A$. Treat each piece as one of the weights: $\\sum m_i x_i$ becomes $\\sum x\\rho\\,\\Delta A$, and $\\sum m_i$ becomes $\\sum \\rho\\,\\Delta A$. With smaller and smaller pieces those sums become the integrals $\\iint_D x\\rho\\, dA$ and $\\iint_D \\rho\\, dA$ (the mass).
<<<

**Uniform density.** If $\\rho$ is a constant, it cancels from the top and bottom, so $(\\bar x, \\bar y)$ is just the average of $x$ and the average of $y$ over $D$. That point is called the **centroid**, and it depends only on the shape.

**Symmetry.** If $D$ and $\\rho$ are both symmetric across a line, the center of mass lies on that line. The pieces pair up across the line with equal masses at opposite signed distances, so their moments cancel.
>>> Why symmetry gives $\\bar x = 0$, piece by piece
**The situation.** Say the plate and its density are symmetric across the $y$-axis: whenever $(x, y)$ is part of the plate, so is its mirror image $(-x, y)$, with the same density. The half disk is like this.

**Pair up the pieces.** Match each small piece at $(x, y)$ with its mirror piece at $(-x, y)$. For example, a piece at $(1.2, 0.5)$ is matched with one at $(-1.2, 0.5)$.
- They have the same area and the same density, so the same mass.
- In $\\iint_D x\\rho\\, dA$, they contribute $1.2 \\times (\\text{mass})$ and $-1.2 \\times (\\text{mass})$, which add to $0$.

Every piece has a partner like this, so the whole total $\\iint_D x\\rho\\, dA$ is $0$, and $\\bar x = \\tfrac{0}{m} = 0$. In words: the plate tips left exactly as much as it tips right, so it balances on the $y$-axis.
<<<

**Example.** The half disk $x^2 + y^2 \\le 4$, $y \\ge 0$, with uniform density $\\rho = 1$.
- **Mass:** the area, $\\tfrac12 \\pi \\cdot 2^2 = 2\\pi$.
- $\\bar x = 0$ by symmetry across the $y$-axis.
- **$\\bar y$:** in polar, $\\displaystyle\\iint_D y\\, dA = \\int_0^\\pi \\int_0^2 (r\\sin\\theta)\\, r\\, dr\\, d\\theta = \\Big(\\int_0^\\pi \\sin\\theta\\, d\\theta\\Big)\\Big(\\int_0^2 r^2\\, dr\\Big) = 2 \\cdot \\frac83 = \\frac{16}{3}$, so $\\bar y = \\dfrac{16/3}{2\\pi} = \\dfrac{8}{3\\pi} \\approx 0.85$.
>>> Each step of the half disk, worked out
1. **Mass.** With density $\\rho = 1$, every small piece's mass equals its area, so the mass is the area. A full disk of radius $2$ has area $\\pi \\cdot 2^2 = 4\\pi$, and this is half of it: $2\\pi$.
2. **$\\bar x = 0$.** The half disk and its density are both symmetric across the $y$-axis, so the left and right halves balance, as in the Go deeper above.
3. **Limits, from the rules.** $x^2 + y^2 \\le 4$ says distance at most $2$: $0 \\le r \\le 2$. $y \\ge 0$ says the upper half: angles from $0$ (pointing right) to $\\pi$ (pointing left), because those rays all point upward or sideways.
4. **The function.** $y = r\\sin\\theta$ (the height of the point at distance $r$ and angle $\\theta$), times the $r$ for the size of a polar piece: $r^2\\sin\\theta$.
5. **Split into two single integrals.** The limits are numbers, and $r^2\\sin\\theta$ is (only $r$) $\\times$ (only $\\theta$), so the double integral is the product: $\\int_0^\\pi \\sin\\theta\\, d\\theta = \\Big[-\\cos\\theta\\Big]_0^\\pi = -(-1) - (-1) = 2$, and $\\int_0^2 r^2\\, dr = \\tfrac83$. Product: $\\tfrac{16}{3}$.
6. **Divide by the mass.** $\\bar y = \\dfrac{16/3}{2\\pi} = \\dfrac{16}{6\\pi} = \\dfrac{8}{3\\pi} \\approx 0.849$.

**Is it reasonable?** The half disk goes from height $0$ to height $2$, but it's $4$ wide at the bottom and narrows to a point at the top, so more of its area is low. The balance height should be below the middle height $1$, and $0.85$ is ✓.
<<<

**Check.** $\\bar y$ is between $0$ and $2$, and below $1$, half the height. That fits: the half disk is wider near the bottom, so more of its area is low.
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

:::check
Give the same half disk ($x^2 + y^2 \\le 4$, $y \\ge 0$) the density $\\rho = y$, so it gets heavier going up. What is $\\bar y$?
answer: 3pi/8
???
1. **Mass:** $m = \\iint_D y\\, dA = \\tfrac{16}{3}$, the same integral as $\\iint_D y\\, dA$ in the example.
2. **Moment:** $\\iint_D y \\cdot \\rho\\, dA = \\iint_D y^2\\, dA$. In polar, $y^2 = r^2\\sin^2\\theta$, times $r$: $\\Big(\\int_0^\\pi \\sin^2\\theta\\, d\\theta\\Big)\\Big(\\int_0^2 r^3\\, dr\\Big) = \\tfrac\\pi2 \\cdot 4 = 2\\pi$. (Use $\\sin^2\\theta = \\tfrac{1 - \\cos 2\\theta}{2}$, whose integral from $0$ to $\\pi$ is $\\tfrac\\pi2$.)
3. **Divide:** $\\bar y = \\tfrac{2\\pi}{16/3} = \\tfrac{6\\pi}{16} = \\tfrac{3\\pi}{8} \\approx 1.18$.

That's higher than $0.85$, as it should be when the top is heavier. $\\bar x$ is still $0$, since $\\rho = y$ is the same at $(x, y)$ and $(-x, y)$.
:::

:::summary Summary
- **Polar regions:** $\\displaystyle\\iint_D f\\, dA = \\int_\\alpha^\\beta \\int_{g_1(\\theta)}^{g_2(\\theta)} f(r\\cos\\theta, r\\sin\\theta)\\, r\\, dr\\, d\\theta$. Each ray enters at $g_1(\\theta)$ and leaves at $g_2(\\theta)$, and the $\\theta$-limits are the rays that hit $D$.
- A circle through the origin, like $(x - 1)^2 + y^2 = 1$, is $r = 2\\cos\\theta$ for $-\\tfrac\\pi2 \\le \\theta \\le \\tfrac\\pi2$.
- **Polar limits without a picture:** substitute $x = r\\cos\\theta$, $y = r\\sin\\theta$ into the region's inequality and solve for $r$; the $\\theta$-range is where that $r$-range isn't empty.
- **Switching to polar:** find the region (sketch, or combine the inequalities into ones about $x^2 + y^2$ and the signs of $x$ and $y$), describe it with $r$ and $\\theta$, and replace $dy\\, dx$ by $r\\, dr\\, d\\theta$.
- **Mass** $m = \\iint_D \\rho\\, dA$. **Center of mass** $\\bar x = \\frac1m \\iint_D x\\rho\\, dA$, $\\bar y = \\frac1m \\iint_D y\\rho\\, dA$: the moments cancel there. Use symmetry to skip integrals.

**Common mistakes:**
- Letting $\\theta$ run all the way around when the region lies on one side of the origin.
- Forgetting the $r$ in $r\\, dr\\, d\\theta$.
- Reporting the moment $\\iint x\\rho\\, dA$ without dividing by the mass.
:::
`;export{e as default};