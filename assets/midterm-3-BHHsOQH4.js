var e=`---
title: Midterm 3 review
exam: Midterm 3
source: OpenStax Calculus Volume 3, §5.1–5.7 and §6.4–6.8
---

:::question The big question
Midterm 3 (Tue, Nov 17) covers four units: double integrals, triple integrals and changing coordinates, surfaces, and the big theorems (Green's and the Divergence Theorem). For any problem on it: which unit is it from, how do you set it up, and which mistakes cost the most points?
:::

:::idea The map of the exam
| Unit | Stewart | Lectures | You'll be asked to… |
|---|---|---|---|
| 1. Double integrals | §15.1–15.4 | Oct 16 – Oct 23 | set up limits over curved regions, switch the order, use polar, find mass and center of mass |
| 2. Triple integrals and coordinates | §15.6–15.9 | Oct 26 – Nov 2 | set up triple integrals, use cylindrical and spherical coordinates, change variables with a Jacobian |
| 3. Surfaces | §16.6–16.7 | Nov 4 – Nov 6 | parametrize surfaces, find normals and tangent planes, compute surface area and surface integrals |
| 4. Green's and the Divergence Theorem | §16.4–16.9 | Nov 9 – Nov 16 | use Green's Theorem, handle holes, compute flux, divergence, and curl, use the Divergence Theorem |

**The thread through all of it is "add up small pieces."** Every integral on this exam is a sum of (value) $\\times$ (size of a small piece). The only things that change are the shape of the pieces and the factor that measures their size: $dA$, $r\\, dr\\, d\\theta$, $\\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$, $|J|\\, du\\, dv$, or $|\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$.
+++
**How to use the map on a problem, step by step, with one example.** Take "find $\\iiint_E z\\, dV$ where $E$ is inside $x^2 + y^2 + z^2 \\le 4$ and above $z = \\sqrt{x^2 + y^2}$."
1. **What is being added up, and over what?** Here it's $z$ over a solid (a 3D region), so it's unit 2. In general: a flat region is unit 1, a solid is unit 2, a curved surface is unit 3, and a closed curve or closed surface (or the words "flux", "circulation", "divergence", "curl") usually means unit 4.
2. **What's the size factor?** Every integral adds (value) $\\times$ (size of a small piece), and each kind of coordinates has its own piece size. A sphere and a cone point to spherical coordinates, whose pieces have volume $\\rho^2\\sin\\varphi\\,\\Delta\\rho\\,\\Delta\\varphi\\,\\Delta\\theta$. Write the factor down first: it's the piece most often forgotten. (Polar and cylindrical: $r$. New $u, v$ coordinates: $|J|$. A surface: $|\\mathbf r_u \\times \\mathbf r_v|$.)
3. **What are the limits?** Write the region's rules and turn each into a rule about one coordinate. Inside the sphere: distance at most $2$, so $\\rho \\le 2$. Above the cone: angle from straight up at most $45^\\circ$, so $\\varphi \\le \\tfrac\\pi4$. All the way around: $0 \\le \\theta \\le 2\\pi$.
4. **Is there a shortcut?** A unit 4 theorem can turn a boundary integral into an inside one (or the reverse). Here there's no boundary integral, so no.
:::

:::check
"Find the outward flux of $\\mathbf F$ through the boundary of the cube $0 \\le x, y, z \\le 1$." Which tool fits best?
- [ ] A double integral in polar coordinates
  why: Nothing here is round, and the question is about flow through a closed surface, not an area or a flat region.
- [ ] Six separate surface integrals, one per face
  why: That works, but it's six computations. The surface is closed, so the Divergence Theorem does it in one.
- [x] The Divergence Theorem: $\\iiint_E \\operatorname{div}\\mathbf F\\, dV$
- [ ] Green's Theorem
  why: Green's Theorem is for closed curves in the plane. A cube's surface is a closed surface in space.
???
Flux out of a closed surface is exactly what the Divergence Theorem handles: compute $\\operatorname{div}\\mathbf F$ and integrate it over the cube.
:::

:::idea Unit 1: double integrals
([Oct 16](#/lecture/2026-10-16), [Oct 19](#/lecture/2026-10-19), [Oct 23](#/lecture/2026-10-23))

**Setting up limits, without a picture:**
1. Find where the edges meet (set the formulas equal). Those give the outside limits.
2. Test one point in between to see which edge is on top (or on the left).
3. Write $a \\le x \\le b$, bottom $\\le y \\le$ top. Outside limits are numbers; inside limits may use the outside variable only.

**Switching the order:** write the limits as inequalities, find the new outside variable's smallest and largest values, then fix it and take the **largest** lower bound and **smallest** upper bound on the other variable. Split where the deciding bound changes. Never just swap the integral signs.

**Polar:** $x = r\\cos\\theta$, $y = r\\sin\\theta$, $dA = r\\, dr\\, d\\theta$. Substitute into the region's inequality and solve for $r$.

**Mass and center of mass:** $m = \\iint_D \\rho\\, dA$, $\\bar x = \\tfrac1m\\iint_D x\\rho\\, dA$, $\\bar y = \\tfrac1m\\iint_D y\\rho\\, dA$. Use symmetry to skip integrals.
+++
**Each step of setting up limits, explained with one region**, the region between $y = x^2$ and $y = x$.
- *Why the crossing points give the outside limits:* the curves cross where $x^2 = x$, at $x = 0$ and $x = 1$. The region is closed off at those two points, so it starts at $x = 0$ and ends at $x = 1$. Between them the curves don't cross, so the same one stays on top the whole way.
- *Why one test point is enough:* at $x = 0.5$, the line gives $0.5$ and the parabola $0.25$, so the line is on top. For the parabola to get above the line somewhere between $0$ and $1$, the two would have to cross there first, and they don't.
- *Why the largest lower limit wins when switching:* every rule has to hold at once. If the rules say $x \\ge 0$ and $x \\ge y - 1$, then at $y = 1.5$ they say $x \\ge 0$ and $x \\ge 0.5$. An $x$ like $0.2$ passes the first but fails the second, so the rule that actually stops $x$ is the larger one, $0.5$. For upper limits it's the smaller one.
- *Why $r$ in $dA$:* in polar, a small piece is about $\\Delta r$ long in one direction and $r\\,\\Delta\\theta$ in the other (part of a circle of radius $r$; at $r = 2$ an angle of $0.1$ covers $0.2$). So its area is $r\\,\\Delta r\\,\\Delta\\theta$: pieces farther from the origin are bigger.
:::

:::check
Find the area between $y = x^2$ and $y = 2x$.
answer: 4/3
???
**Meet:** $x^2 = 2x$ gives $x(x - 2) = 0$, so $x = 0$ or $x = 2$. **Top:** at $x = 1$, $2x = 2 > 1 = x^2$, so $y = 2x$ is on top. **Area:** $\\int_0^2 (2x - x^2)\\, dx = 4 - \\tfrac83 = \\tfrac43$.
:::

:::check
Switch the order: $\\displaystyle\\int_0^1\\int_{2x}^{2} f(x, y)\\, dy\\, dx = \\;?$
- [x] $\\displaystyle\\int_0^2\\int_0^{y/2} f\\, dx\\, dy$
- [ ] $\\displaystyle\\int_0^2\\int_{y/2}^{1} f\\, dx\\, dy$
  why: $2x \\le y$ means $x \\le \\tfrac y2$, so $\\tfrac y2$ is an upper bound on $x$, not a lower one.
- [ ] $\\displaystyle\\int_{2x}^2\\int_0^1 f\\, dx\\, dy$
  why: Just swapping the integral signs leaves $x$ in the outside limits.
- [ ] $\\displaystyle\\int_0^1\\int_0^{y/2} f\\, dx\\, dy$
  why: $y$ runs from $0$ (at $x = 0$) up to $2$, not just to $1$.
???
**Inequalities:** $0 \\le x \\le 1$, $2x \\le y \\le 2$. **Range of $y$:** $y \\ge 2x \\ge 0$ and $y \\le 2$, so $0 \\le y \\le 2$. **Bounds on $x$:** $x \\ge 0$, $x \\le 1$, and $x \\le \\tfrac y2$. Since $y \\le 2$, $\\tfrac y2 \\le 1$ is the smaller upper bound. So $0 \\le x \\le \\tfrac y2$.
:::

:::idea Unit 2: triple integrals and coordinates
([Oct 26](#/lecture/2026-10-26), [Oct 28](#/lecture/2026-10-28), [Oct 30](#/lecture/2026-10-30), [Nov 2](#/lecture/2026-11-02))

**Between two surfaces:** $\\iiint_E f\\, dV = \\iint_D \\Big[\\int_{\\text{bottom}}^{\\text{top}} f\\, dz\\Big] dA$. The shadow $D$ is where bottom $\\le$ top.

**Which coordinates?**

| The solid involves | Use | $dV$ |
|---|---|---|
| planes, boxes | $x, y, z$ | $dz\\, dy\\, dx$ |
| cylinders, paraboloids, round shadows | cylindrical | $r\\, dz\\, dr\\, d\\theta$ |
| spheres, cones | spherical | $\\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$ |
| edges like $x + y = c$, $xy = c$, ellipses | your own $u$, $v$ | $\\left\\lvert\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right\\rvert du\\, dv$ |

**Change of variables:** choose $u$ and $v$ so the edges become "$u = $ number" and "$v = $ number". The [[jacobian|Jacobian]] is $x_u y_v - x_v y_u$; shortcut: $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = 1 \\Big/ \\dfrac{\\partial(u, v)}{\\partial(x, y)}$.
+++
**Each step of a triple integral setup, explained with one solid**, the solid in the first octant under $2x + y + z = 4$.
1. *Rewrite the rules about $z$ as "$z$ from ___ to ___".* Those are where each vertical column starts and stops. $z \\ge 0$ and $z \\le 4 - 2x - y$: each column runs from the floor up to the plane. Above $(0.5, 1)$, it's $2$ tall.
2. *The shadow is where a column has room:* its top must be at or above its bottom, $4 - 2x - y \\ge 0$. Above $(2, 1)$, the top would be at $-1$, so there's no column there.
3. *Set up the shadow as in unit 1:* $0 \\le x \\le 2$, $0 \\le y \\le 4 - 2x$.

**Why each size factor.** A cylindrical piece is a polar piece of the floor ($r\\,\\Delta r\\,\\Delta\\theta$) raised to a height $\\Delta z$. A spherical piece has three edges: $\\Delta\\rho$ (straight out), $\\rho\\,\\Delta\\varphi$ (along a circle of radius $\\rho$ through the poles), and $\\rho\\sin\\varphi\\,\\Delta\\theta$ (around a horizontal circle, whose radius is the distance from the $z$-axis, $\\rho\\sin\\varphi$). A $u, v$ piece is a small parallelogram of area $|x_u y_v - x_v y_u|\\,\\Delta u\\,\\Delta v$.

**Converting a cone or sphere.** $x^2 + y^2 + z^2$ is the squared distance from the origin, $\\rho^2$, so a sphere is $\\rho = $ number. A cone like $z = \\sqrt{x^2 + y^2}$ says height $=$ distance from the axis; the point $(1, 0, 1)$ is $1$ across and $1$ up, at $45^\\circ$ from straight up, so the cone is $\\varphi = \\tfrac\\pi4$. For $z = \\sqrt{\\tfrac{x^2 + y^2}{3}}$, the point $(\\sqrt3, 0, 1)$ is $\\sqrt3$ across and $1$ up, at $60^\\circ$ from straight up: $\\varphi = \\tfrac\\pi3$.
:::

:::check
Compute $\\displaystyle\\iiint_E (x^2 + y^2)\\, dV$, where $E$ is the solid cylinder $x^2 + y^2 \\le 1$, $0 \\le z \\le 2$.
answer: pi
???
In cylindrical coordinates, $x^2 + y^2 = r^2$ and $dV = r\\, dz\\, dr\\, d\\theta$: $\\int_0^{2\\pi}\\int_0^1\\int_0^2 r^3\\, dz\\, dr\\, d\\theta = 2\\pi \\cdot \\tfrac14 \\cdot 2 = \\pi$.
:::

:::check
With $u = x + y$ and $v = x - 2y$, what is $\\left\\lvert\\dfrac{\\partial(x, y)}{\\partial(u, v)}\\right\\rvert$?
- [x] $\\tfrac13$
- [ ] $3$
  why: That's $\\left\\lvert\\tfrac{\\partial(u, v)}{\\partial(x, y)}\\right\\rvert$. The one in the formula is its reciprocal.
- [ ] $-\\tfrac13$
  why: The Jacobian itself is $-\\tfrac13$, but the formula uses its absolute value: areas can't be negative.
- [ ] $1$
  why: Only transformations that keep areas the same have $|J| = 1$. Compute it: $u_x v_y - u_y v_x = 1 \\cdot (-2) - 1 \\cdot 1 = -3$.
???
$\\dfrac{\\partial(u, v)}{\\partial(x, y)} = u_x v_y - u_y v_x = (1)(-2) - (1)(1) = -3$. Flip it: $\\dfrac{\\partial(x, y)}{\\partial(u, v)} = -\\tfrac13$, with absolute value $\\tfrac13$.
:::

:::idea Unit 3: surfaces
([Nov 4](#/lecture/2026-11-04), [Nov 6](#/lecture/2026-11-06))

**Parametrizations to know:**
- Graph: $\\langle x, y, f(x, y) \\rangle$, with $\\mathbf r_x \\times \\mathbf r_y = \\langle -f_x, -f_y, 1 \\rangle$.
- Cylinder of radius $a$: $\\langle a\\cos\\theta, a\\sin\\theta, z \\rangle$, with $|\\mathbf r_\\theta \\times \\mathbf r_z| = a$.
- Sphere of radius $a$: $\\langle a\\sin\\varphi\\cos\\theta, a\\sin\\varphi\\sin\\theta, a\\cos\\varphi \\rangle$, with $|\\mathbf r_\\varphi \\times \\mathbf r_\\theta| = a^2\\sin\\varphi$.
- Cone: $\\langle r\\cos\\theta, r\\sin\\theta, r \\rangle$.

**Normal and tangent plane:** $\\mathbf n = \\mathbf r_u \\times \\mathbf r_v$ at the right $(u, v)$.

**Area and [[surface integral|surface integrals]]:** $\\iint_S f\\, dS = \\iint_D f(\\mathbf r(u, v))\\,|\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$. For a graph, $dS = \\sqrt{1 + f_x^2 + f_y^2}\\, dA$.

**Flux through a surface:** $\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iint_D \\mathbf F(\\mathbf r) \\cdot (\\mathbf r_u \\times \\mathbf r_v)\\, du\\, dv$, with $\\mathbf r_u \\times \\mathbf r_v$ pointing the chosen way.
+++
**Each step of a surface integral, explained with one surface**, the cylinder $x^2 + y^2 = 4$, $0 \\le z \\le 3$.
1. *Parametrize:* every point is at distance $2$ from the $z$-axis, so fix $r = 2$ and let the angle $\\theta$ and the height $z$ be the two parameters: $\\mathbf r(\\theta, z) = \\langle 2\\cos\\theta, 2\\sin\\theta, z \\rangle$. The other conditions become the limits: $0 \\le z \\le 3$ and $0 \\le \\theta \\le 2\\pi$.
2. *Find $\\mathbf r_\\theta \\times \\mathbf r_z$:* $\\mathbf r_\\theta$ points around the cylinder and $\\mathbf r_z$ points straight up; their cross product $\\langle 2\\cos\\theta, 2\\sin\\theta, 0 \\rangle$ sticks straight out. Its length, $2$, is how much area each small $\\Delta\\theta \\times \\Delta z$ patch has per unit (moving $\\Delta\\theta$ around a circle of radius $2$ covers $2\\,\\Delta\\theta$).
3. *Substitute:* replace $x$, $y$, $z$ in the function with the parametrization's formulas before integrating; for example, $x^2 + y^2$ becomes $4$ on this cylinder.
4. *For flux, check the direction:* at $\\theta = 0$ the arrow is $\\langle 2, 0, 0 \\rangle$, at the point $(2, 0, z)$: pointing away from the axis, outward. If the problem wanted inward, flip the sign.
:::

:::check
Find the area of the part of the plane $z = 3 - x - y$ in the first octant ($x, y, z \\ge 0$).
answer: 9 sqrt(3)/2
???
**Area factor:** $f_x = -1$, $f_y = -1$, so $\\sqrt{1 + 1 + 1} = \\sqrt3$. **Shadow:** $x, y \\ge 0$ and $z \\ge 0$, which is $x + y \\le 3$: a triangle with legs $3$, area $\\tfrac92$. **Area:** $\\sqrt3 \\cdot \\tfrac92 = \\tfrac{9\\sqrt3}{2} \\approx 7.79$.
:::

:::check
For the cylinder $\\mathbf r(\\theta, z) = \\langle \\cos\\theta, \\sin\\theta, z \\rangle$, what is $\\mathbf r_\\theta \\times \\mathbf r_z$?
- [x] $\\langle \\cos\\theta,\\ \\sin\\theta,\\ 0 \\rangle$
- [ ] $\\langle -\\sin\\theta,\\ \\cos\\theta,\\ 0 \\rangle$
  why: That's $\\mathbf r_\\theta$ itself, a tangent vector (around the cylinder), not the normal.
- [ ] $\\langle 0, 0, 1 \\rangle$
  why: That's $\\mathbf r_z$, the tangent vector going straight up.
- [ ] $\\langle -\\cos\\theta,\\ -\\sin\\theta,\\ 0 \\rangle$
  why: That's the inward normal, which is $\\mathbf r_z \\times \\mathbf r_\\theta$, the other order.
???
$\\mathbf r_\\theta = \\langle -\\sin\\theta, \\cos\\theta, 0 \\rangle$ and $\\mathbf r_z = \\langle 0, 0, 1 \\rangle$. Their cross product is $\\langle \\cos\\theta \\cdot 1 - 0,\\ 0 - (-\\sin\\theta)(1),\\ 0 \\rangle = \\langle \\cos\\theta, \\sin\\theta, 0 \\rangle$: it points straight out from the axis, with length $1$.
:::

:::idea Unit 4: which theorem?
([Nov 9](#/lecture/2026-11-09), [Nov 11](#/lecture/2026-11-11), [Nov 13](#/lecture/2026-11-13), [Nov 16](#/lecture/2026-11-16))

| You're asked for | Over | Use |
|---|---|---|
| $\\oint_C \\mathbf F \\cdot d\\mathbf r$ (circulation, work) | a closed curve in the plane | Green: $\\iint_D (Q_x - P_y)\\, dA$ |
| $\\oint_C \\mathbf F \\cdot \\mathbf n\\, ds$ (flux across) | a closed curve in the plane | Green for flux: $\\iint_D (P_x + Q_y)\\, dA$ |
| $\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS$ (flux through) | a closed surface | [[divergence theorem|Divergence Theorem]]: $\\iiint_E \\operatorname{div}\\mathbf F\\, dV$ |
| is $\\mathbf F$ conservative? | a region with no holes | $\\operatorname{curl}\\mathbf F = \\mathbf 0$ (cross-partials match) |

**Before using a theorem, check:** the curve or surface is **closed**, it's oriented the right way (counterclockwise curve; outward normal), and $\\mathbf F$ has no trouble points (like division by $0$) inside.

**Holes:** for $\\left\\langle \\tfrac{-y}{x^2 + y^2}, \\tfrac{x}{x^2 + y^2} \\right\\rangle$, $Q_x - P_y = 0$ but every counterclockwise loop around the origin gives $2\\pi$.

**[[divergence|Divergence]]** $P_x + Q_y + R_z$ is outflow per unit volume. **[[curl|Curl]]** $\\langle R_y - Q_z, P_z - R_x, Q_x - P_y \\rangle$ is rotation.
+++
**Each check, explained.**
- *Closed:* the theorems trade a boundary for the inside it surrounds. An open curve (like a half circle) or open surface (like a dome) doesn't surround anything, so first close it off by adding a segment or a lid, use the theorem, and subtract what you added.
- *Direction:* Green's Theorem assumes you walk with the region on your left (counterclockwise). Walking the other way flips the sign of every piece, so the answer's sign flips. The Divergence Theorem assumes the arrows point out of the solid.
- *Trouble points:* the theorems add up $Q_x - P_y$ or the divergence at every point inside, so $\\mathbf F$ has to make sense at every one of those points. The swirl field $\\left\\langle \\tfrac{-y}{x^2 + y^2}, \\tfrac{x}{x^2 + y^2} \\right\\rangle$ divides by $0$ at the origin, so for a loop around the origin, cut out a small circle around it and use the version with a hole.
- *Why zero curl means conservative only with no holes:* the reason uses Green's Theorem on the inside of each loop, which needs every point inside to be part of the region. Around a hole that fails, and the swirl field shows it: zero curl, but $2\\pi$ around the origin.
:::

:::check
Compute $\\displaystyle\\oint_C (3y + \\sin x)\\, dx + (5x + y^2)\\, dy$ around the unit circle, counterclockwise.
answer: 2pi
???
Green's Theorem: $Q_x - P_y = 5 - 3 = 2$, so the integral is $2 \\times (\\text{area of the unit disk}) = 2\\pi$. The $\\sin x\\, dx$ and $y^2\\, dy$ terms contribute nothing.
:::

:::check
What is the outward flux of $\\mathbf F = \\langle x, y, z \\rangle$ through the surface of the unit cube $0 \\le x, y, z \\le 1$?
- [x] $3$
- [ ] $1$
  why: That's the cube's volume. The Divergence Theorem multiplies it by $\\operatorname{div}\\mathbf F = 3$.
- [ ] $0$
  why: That needs zero divergence. Here $\\operatorname{div}\\mathbf F = 1 + 1 + 1 = 3$: the field spreads out everywhere.
- [ ] $6$
  why: That counts each of the six faces as $1$, but on the three faces at $x = 0$, $y = 0$, $z = 0$ the flux is $0$.
???
$\\operatorname{div}\\mathbf F = 3$, so the flux is $\\iiint_E 3\\, dV = 3 \\cdot 1 = 3$. Face by face: the faces at $x = 1$, $y = 1$, $z = 1$ each have $\\mathbf F \\cdot \\mathbf n = 1$ and area $1$, and the other three have $\\mathbf F \\cdot \\mathbf n = 0$.
:::

:::summary Cheat sheet
**Unit 1.** Meet, test a point, write inequalities. Switch: range of the new outside variable, then largest lower and smallest upper bounds. Polar $dA = r\\, dr\\, d\\theta$. $m = \\iint \\rho\\, dA$, $\\bar x = \\tfrac1m\\iint x\\rho\\, dA$.

**Unit 2.** Column: $z$ from bottom to top over the shadow. Cylindrical $r\\, dz\\, dr\\, d\\theta$. Spherical $\\rho^2\\sin\\varphi\\, d\\rho\\, d\\varphi\\, d\\theta$. $|J| = |x_u y_v - x_v y_u|$, or $1/\\left|\\tfrac{\\partial(u,v)}{\\partial(x,y)}\\right|$.

**Unit 3.** $dS = |\\mathbf r_u \\times \\mathbf r_v|\\, du\\, dv$; graph $\\sqrt{1 + f_x^2 + f_y^2}\\, dA$; sphere $a^2\\sin\\varphi$; cylinder $a$. Flux $\\mathbf F \\cdot (\\mathbf r_u \\times \\mathbf r_v)\\, du\\, dv$.

**Unit 4.** Green: $\\oint P\\,dx + Q\\,dy = \\iint (Q_x - P_y)\\, dA$. Flux in 2D: $\\oint P\\,dy - Q\\,dx = \\iint (P_x + Q_y)\\, dA$. Divergence Theorem: $\\iint_S \\mathbf F \\cdot \\mathbf n\\, dS = \\iiint_E \\operatorname{div}\\mathbf F\\, dV$.

**Mistakes that cost the most points:**
- Forgetting the size factor: $r$, $\\rho^2\\sin\\varphi$, $|J|$, or $|\\mathbf r_u \\times \\mathbf r_v|$.
- Swapping the integral signs instead of redoing the limits.
- Using $\\tfrac{\\partial(u, v)}{\\partial(x, y)}$ without flipping it.
- Leaving $z$ (or $x$, $y$) in a surface integral instead of substituting the parametrization.
- Using Green's or the Divergence Theorem on something that isn't closed, or with a trouble point inside.
- Mixing up circulation ($Q_x - P_y$) and flux ($P_x + Q_y$).

**Practice under exam conditions:** [Practice Test 1](#/practice/midterm-3-practice-1) · [Practice Test 2](#/practice/midterm-3-practice-2)
:::
`;export{e as default};