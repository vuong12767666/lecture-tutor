var e=`---
title: Maxwell's equations
date: 2026-12-09
source: OpenStax Calculus Volume 3, §6.7 Stokes' Theorem (Faraday's law) and §6.8 The Divergence Theorem (the application to electrostatic fields)
---

:::recap Last time
- [[gauss-law|Gauss's Law]]: the flux of the electric field $\\mathbf E$ out of any closed surface is $Q_{\\text{inside}}/\\varepsilon_0$, and with the Divergence Theorem, $\\nabla\\cdot\\mathbf E = \\rho_c/\\varepsilon_0$ (Dec 7).
- The [[divergence-theorem|Divergence Theorem]] turns the flux out of a closed surface into the integral of the divergence inside (Nov 16).
- [[stokes-theorem|Stokes' Theorem]] turns a loop integral into the flux of the curl through any surface with that loop as its edge (Nov 30).
:::

:::check
Warm-up: what is $\\operatorname{curl}\\langle -y,\\ x,\\ 0 \\rangle$?
- [x] $\\langle 0, 0, 2 \\rangle$
- [ ] $\\langle 0, 0, 0 \\rangle$
  why: That is the curl of $\\langle y, x, 0 \\rangle$. Here $Q_x - P_y = 1 - (-1) = 2$.
- [ ] $\\langle -1, 1, 0 \\rangle$
  why: The curl is built from differences of partial derivatives, not from the components themselves.
???
$R_y - Q_z = 0 - 0 = 0$, $P_z - R_x = 0 - 0 = 0$, and $Q_x - P_y = 1 - (-1) = 2$. The field circles counterclockwise around the $z$-axis, and the curl points up along the axis.
:::

:::question Today
All of electricity and magnetism comes down to four equations, each a divergence or a curl of the electric field $\\mathbf E$ or the magnetic field $\\mathbf B$. What do they say, and how do the Divergence Theorem and Stokes' Theorem turn each one into a statement about fluxes and loops?
:::

:::idea The four equations at a glance
Two vector fields fill space: the **electric field** $\\mathbf E$ and the **magnetic field** $\\mathbf B$. Both can change with time $t$. The charge density $\\rho_c$ (charge per unit volume) and the current density $\\mathbf J$ (current per unit area, pointing the way the charge flows) say where the charges are and how they move.

Each law is written two ways: a **differential form** (a divergence or curl at each point) and an **integral form** (a flux or loop integral).

**Row 1, Gauss's Law.**
$$\\nabla\\cdot\\mathbf E = \\frac{\\rho_c}{\\varepsilon_0}$$
$$\\iint_S \\mathbf E\\cdot d\\mathbf S = \\frac{Q_{\\text{inside}}}{\\varepsilon_0}$$

**Row 2, no magnetic charge.**
$$\\nabla\\cdot\\mathbf B = 0$$
$$\\iint_S \\mathbf B\\cdot d\\mathbf S = 0$$

**Row 3, Faraday's law.**
$$\\nabla\\times\\mathbf E = -\\frac{\\partial\\mathbf B}{\\partial t}$$
$$\\oint_C \\mathbf E\\cdot d\\mathbf r = -\\frac{d}{dt}\\iint_D \\mathbf B\\cdot d\\mathbf S$$

**Row 4, the Ampère–Maxwell law.**
$$\\nabla\\times\\mathbf B = \\mu_0\\mathbf J + \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf E}{\\partial t}$$
$$\\oint_C \\mathbf B\\cdot d\\mathbf r = \\mu_0 I + \\mu_0\\varepsilon_0\\frac{d}{dt}\\iint_D \\mathbf E\\cdot d\\mathbf S$$

In rows 1 and 2, $S$ is a closed surface with outward normals. In rows 3 and 4, $C$ is a loop and $D$ is a surface whose edge is $C$, oriented by the right-hand rule. $I$ is the current through $D$. $\\varepsilon_0 \\approx 8.854 \\times 10^{-12}$ and $\\mu_0 = 4\\pi \\times 10^{-7}$ are constants of nature.

**How to read them:** the two **divergence** equations become **closed-surface fluxes** by the Divergence Theorem. The two **curl** equations become **loop integrals** by Stokes' Theorem.
>>> Reading row 2, with numbers
Row 2 says $\\nabla\\cdot\\mathbf B = 0$ at every point. To turn that into the integral form, take any closed surface $S$ around a solid $E$.

1. **Divergence Theorem.** $\\iint_S \\mathbf B\\cdot d\\mathbf S = \\iiint_E \\nabla\\cdot\\mathbf B\\, dV$.
2. **Put in the law.** The divergence is $0$ at every point of $E$, so the right side is $\\iiint_E 0\\, dV = 0$.
3. **Result.** $\\iint_S \\mathbf B\\cdot d\\mathbf S = 0$, which is the integral form in row 2.

For example, if $S$ is the unit cube $0 \\le x, y, z \\le 1$, then whatever $\\mathbf B$ is (as long as it obeys row 2), the flux out of the six faces adds up to exactly $0$. The next idea checks this on an actual field.
<<<
>>> Reading row 3, with numbers
Row 3's differential form is about the curl, and its integral form is about a loop $C$ with a surface $D$ whose edge is $C$.

1. **Stokes' Theorem.** $\\oint_C \\mathbf E\\cdot d\\mathbf r = \\iint_D (\\nabla\\times\\mathbf E)\\cdot d\\mathbf S$.
2. **Put in the law.** $\\nabla\\times\\mathbf E = -\\partial\\mathbf B/\\partial t$, so the right side is $\\iint_D -\\dfrac{\\partial\\mathbf B}{\\partial t}\\cdot d\\mathbf S$.
3. **Move the time derivative outside.** When $D$ doesn't move, differentiating the flux in time is the same as integrating the time derivative: $\\iint_D -\\dfrac{\\partial\\mathbf B}{\\partial t}\\cdot d\\mathbf S = -\\dfrac{d}{dt}\\iint_D \\mathbf B\\cdot d\\mathbf S$.

For example, if $\\mathbf B = \\langle 0, 0, t \\rangle$ and $D$ is the unit disk in the $xy$-plane with normal $\\langle 0, 0, 1 \\rangle$, then the flux is $t \\cdot \\pi$, and its rate of change is $\\pi$. So the loop integral of $\\mathbf E$ around the unit circle is $-\\pi$. Idea 3 works this example out in full.
<<<
:::

:::check
Which theorem turns $\\nabla\\times\\mathbf B = \\mu_0\\mathbf J + \\mu_0\\varepsilon_0\\,\\partial\\mathbf E/\\partial t$ into a statement about $\\oint_C \\mathbf B\\cdot d\\mathbf r$?
- [x] Stokes' Theorem
  why: It turns the flux of a curl through a surface into a loop integral around the surface's edge.
- [ ] The Divergence Theorem
  why: That one is for divergences and closed surfaces (rows 1 and 2), not curls and loops.
???
Rows 3 and 4 are curl equations, and Stokes' Theorem connects a curl to a loop integral: $\\oint_C \\mathbf B\\cdot d\\mathbf r = \\iint_D (\\nabla\\times\\mathbf B)\\cdot d\\mathbf S$.
:::

:::idea Row 2: no magnetic charge
Row 1 says electric field lines start at positive charges and end at negative ones. Row 2 says magnetic field has no such starting points: $\\nabla\\cdot\\mathbf B = 0$ everywhere. There is no "magnetic charge", so the flux of $\\mathbf B$ out of every closed surface is $0$. As much magnetic field enters any closed surface as leaves it.

**Using it as a test.** A field can be a magnetic field only if its divergence is $0$ at every point.

For example, $\\mathbf B = \\langle x,\\ y,\\ -2z \\rangle$ has $\\nabla\\cdot\\mathbf B = 1 + 1 - 2 = 0$, so it passes. But $\\langle x, y, z \\rangle$ has divergence $3$, so it can't be a magnetic field.
>>> The flux out of a cube, face by face
Check row 2 on $\\mathbf B = \\langle x, y, -2z \\rangle$ and the cube $0 \\le x, y, z \\le 1$. Each face has area $1$.

1. **Face $x = 1$.** Outward normal $\\langle 1, 0, 0 \\rangle$, so $\\mathbf B\\cdot\\mathbf n = x = 1$ at every point of the face. Flux $1 \\times 1 = 1$.
2. **Face $x = 0$.** Outward normal $\\langle -1, 0, 0 \\rangle$, so $\\mathbf B\\cdot\\mathbf n = -x = 0$ on this face. Flux $0$.
3. **Faces $y = 1$ and $y = 0$.** The same way, flux $1$ and $0$.
4. **Face $z = 1$.** Outward normal $\\langle 0, 0, 1 \\rangle$, so $\\mathbf B\\cdot\\mathbf n = -2z = -2$. Flux $-2$: the field flows **in** through the top.
5. **Face $z = 0$.** Outward normal $\\langle 0, 0, -1 \\rangle$, so $\\mathbf B\\cdot\\mathbf n = 2z = 0$. Flux $0$.
6. **Total.** $1 + 0 + 1 + 0 - 2 + 0 = 0$ ✓. The field leaves through two sides and enters through the top, by exactly the same amount.
<<<
:::

:::check
Which of these could be a magnetic field?
- [ ] $\\langle x^2,\\ y,\\ z \\rangle$
  why: Its divergence is $2x + 1 + 1 = 2x + 2$, which is $2$ at the point $(0, 0, 0)$, not $0$.
- [x] $\\langle y,\\ z,\\ x \\rangle$
  why: Its divergence is $0 + 0 + 0 = 0$ at every point, because each component doesn't involve the variable it is differentiated by.
- [ ] $\\langle 3x,\\ 0,\\ 0 \\rangle$
  why: Its divergence is $3$ everywhere.
???
Row 2 needs $\\nabla\\cdot\\mathbf B = 0$ everywhere. For $\\langle y, z, x \\rangle$: $\\partial y/\\partial x = 0$, $\\partial z/\\partial y = 0$, $\\partial x/\\partial z = 0$.
:::

:::idea Row 3: Faraday's law
**A changing magnetic field makes a circling electric field.** In integral form: the loop integral of $\\mathbf E$ around $C$ is minus the rate of change of the magnetic flux through a surface bounded by $C$. That loop integral is what drives current around a wire loop, which is how generators and transformers work.

**An example.** Let $\\mathbf B = \\langle 0, 0, t \\rangle$: the same at every point, pointing up, and growing as time goes on. Take $C$ = the circle of radius $a$ in the $xy$-plane, counterclockwise seen from above, and $D$ = the flat disk inside it with normal $\\langle 0, 0, 1 \\rangle$ (the right-hand rule for counterclockwise).

1. **Magnetic flux.** $\\mathbf B\\cdot\\mathbf n = t$ at every point of the disk, so the flux is $t \\cdot \\pi a^2$.
2. **Its rate of change.** $\\dfrac{d}{dt}(\\pi a^2 t) = \\pi a^2$.
3. **Faraday.** $\\oint_C \\mathbf E\\cdot d\\mathbf r = -\\pi a^2$.
4. **A field that does this.** $\\mathbf E = \\left\\langle \\tfrac{y}{2},\\ -\\tfrac{x}{2},\\ 0 \\right\\rangle$. Its curl is $\\langle 0, 0, -1 \\rangle$, which equals $-\\partial\\mathbf B/\\partial t = -\\langle 0, 0, 1 \\rangle$ ✓.

**The minus sign** says which way $\\mathbf E$ circles. Point your right thumb along the growing $\\mathbf B$ (up). Your fingers curl counterclockwise seen from above, and $\\mathbf E$ circles the **opposite** way, clockwise.

**When $\\mathbf B$ doesn't change,** $\\nabla\\times\\mathbf E = \\mathbf 0$. On a simply connected region that makes $\\mathbf E$ conservative (Dec 4). That is the electrostatics of Dec 7.
>>> The flux and its rate, with numbers
Take radius $a = 2$.

1. **Flux at $t = 3$.** $\\mathbf B = \\langle 0, 0, 3 \\rangle$ and $\\mathbf n = \\langle 0, 0, 1 \\rangle$, so $\\mathbf B\\cdot\\mathbf n = 3$ at every point of the disk. The disk's area is $\\pi(2)^2 = 4\\pi$. Flux $= 3 \\times 4\\pi = 12\\pi$.
2. **Flux at $t = 4$.** $\\mathbf B\\cdot\\mathbf n = 4$, so the flux is $4 \\times 4\\pi = 16\\pi$.
3. **Rate.** The flux went up by $16\\pi - 12\\pi = 4\\pi$ in one unit of time, and it grows at that same rate at every moment, because the flux $4\\pi t$ is a straight line in $t$. So $\\dfrac{d}{dt}(\\text{flux}) = 4\\pi = \\pi a^2$ ✓.
4. **Faraday.** $\\oint_C \\mathbf E\\cdot d\\mathbf r = -4\\pi$.
<<<
>>> Checking $\\mathbf E$ on the loop, step by step
$\\mathbf E = \\langle y/2,\\ -x/2,\\ 0 \\rangle$, and the circle of radius $a$ is $\\mathbf r(t) = \\langle a\\cos t, a\\sin t, 0 \\rangle$, $0 \\le t \\le 2\\pi$ (here $t$ is just the loop's parameter, not time).

1. **$\\mathbf E$ on the circle.** Put $x = a\\cos t$ and $y = a\\sin t$ in: $\\mathbf E = \\left\\langle \\tfrac{a}{2}\\sin t,\\ -\\tfrac{a}{2}\\cos t,\\ 0 \\right\\rangle$.
2. **$\\mathbf r'$.** $\\langle -a\\sin t,\\ a\\cos t,\\ 0 \\rangle$.
3. **Dot product.** $-\\tfrac{a^2}{2}\\sin^2 t - \\tfrac{a^2}{2}\\cos^2 t = -\\tfrac{a^2}{2}$, the same at every point of the loop.
4. **Integrate.** $-\\tfrac{a^2}{2} \\times 2\\pi = -\\pi a^2$ ✓, matching Faraday.
5. **Which way it circles.** At the point $(a, 0, 0)$, $\\mathbf E = \\langle 0, -a/2, 0 \\rangle$, pointing in the $-y$ direction. Going clockwise seen from above, at $(a, 0, 0)$ you move in the $-y$ direction. So $\\mathbf E$ circles clockwise, as the minus sign said.
<<<
>>> The curl of $\\mathbf E$, step by step
$P = y/2$, $Q = -x/2$, $R = 0$.

1. **First component.** $R_y - Q_z$. $R = 0$ gives $R_y = 0$, and $Q = -x/2$ has no $z$ in it, so $Q_z = 0$. Result $0$.
2. **Second component.** $P_z - R_x$. $P = y/2$ has no $z$, and $R = 0$. Result $0$.
3. **Third component.** $Q_x - P_y = -\\tfrac12 - \\tfrac12 = -1$.
4. **Compare.** $\\nabla\\times\\mathbf E = \\langle 0, 0, -1 \\rangle$. And $\\partial\\mathbf B/\\partial t$ differentiates each component of $\\langle 0, 0, t \\rangle$ in $t$: $\\langle 0, 0, 1 \\rangle$. So $-\\partial\\mathbf B/\\partial t = \\langle 0, 0, -1 \\rangle$ ✓.
<<<
:::

:::check
$\\mathbf B = \\langle 0, 0, 5t \\rangle$. What is $\\oint_C \\mathbf E\\cdot d\\mathbf r$ around the circle of radius $3$ in the $xy$-plane, counterclockwise seen from above?
answer: -45pi
???
The flux through the disk is $5t \\cdot \\pi(3)^2 = 45\\pi t$, which changes at the rate $45\\pi$. Faraday's law gives $\\oint_C \\mathbf E\\cdot d\\mathbf r = -45\\pi$.
:::

:::check
A magnetic field is $\\mathbf B = \\langle tx,\\ ty,\\ -2tz \\rangle$. What is $\\nabla\\times\\mathbf E$?
- [x] $\\langle -x,\\ -y,\\ 2z \\rangle$
  why: $\\partial\\mathbf B/\\partial t = \\langle x, y, -2z \\rangle$, and Faraday puts a minus sign in front.
- [ ] $\\langle x,\\ y,\\ -2z \\rangle$
  why: That is $+\\partial\\mathbf B/\\partial t$. Faraday's law has a minus sign: $\\nabla\\times\\mathbf E = -\\partial\\mathbf B/\\partial t$.
- [ ] $\\langle 0, 0, 0 \\rangle$
  why: The curl of $\\mathbf E$ is zero only when $\\mathbf B$ doesn't change with time. Here every component has a $t$ in it.
???
Differentiate each component in $t$, keeping the point $(x, y, z)$ where it is: $\\partial\\mathbf B/\\partial t = \\langle x, y, -2z \\rangle$. For example, at the point $(1, 2, 3)$ that is $\\langle 1, 2, -6 \\rangle$. Then $\\nabla\\times\\mathbf E = -\\langle x, y, -2z \\rangle = \\langle -x, -y, 2z \\rangle$. (OpenStax's answer to this exercise leaves out the minus sign.) This $\\mathbf B$ also obeys row 2: $\\nabla\\cdot\\mathbf B = t + t - 2t = 0$.
:::

:::idea Row 4: currents make circling magnetic fields
**Ampère's law** (the first term of row 4): an electric current makes a magnetic field that circles around it. For a loop $C$, $\\oint_C \\mathbf B\\cdot d\\mathbf r = \\mu_0 I$, where $I$ is the current passing through a surface bounded by $C$.

**A straight wire.** A current $I$ flows up the $z$-axis. Its magnetic field is
$$\\mathbf B = \\frac{\\mu_0 I}{2\\pi}\\left\\langle \\frac{-y}{x^2 + y^2},\\ \\frac{x}{x^2 + y^2},\\ 0 \\right\\rangle,$$
which is $\\dfrac{\\mu_0 I}{2\\pi}$ times the swirl field $\\mathbf G$ of Dec 4.

1. **Around the wire.** On Dec 4, $\\mathbf G$ gave $2\\pi$ around any circle that goes once around the $z$-axis. So $\\oint_C \\mathbf B\\cdot d\\mathbf r = \\dfrac{\\mu_0 I}{2\\pi} \\cdot 2\\pi = \\mu_0 I$ ✓, whatever the circle's radius.
2. **Off the wire.** $\\nabla\\times\\mathbf G = \\mathbf 0$ wherever it is defined, so $\\nabla\\times\\mathbf B = \\mathbf 0 = \\mu_0\\mathbf J$ there. That's right, because there is no current off the wire: $\\mathbf J = \\mathbf 0$.
3. **The hole.** All the current is on the $z$-axis, which is exactly the missing line that made $\\mathbf G$ non-conservative on Dec 4. A loop around the wire picks up $\\mu_0 I$. A loop that doesn't go around it picks up $0$.

**Maxwell's extra term.** Ampère's law alone fails when charge piles up somewhere, as on the plates of a charging capacitor. Maxwell added $\\mu_0\\varepsilon_0\\,\\dfrac{d}{dt}\\iint_D \\mathbf E\\cdot d\\mathbf S$: a changing electric field acts like a current in row 4.
>>> The wire's field, with numbers
Take $I = 10$ amperes and the circle of radius $0.1$ meters around the wire.

1. **Length of $\\mathbf B$ on the circle.** At the point $(0.1, 0, 0)$: $\\mathbf B = \\dfrac{\\mu_0 \\cdot 10}{2\\pi}\\left\\langle 0,\\ \\dfrac{0.1}{0.01},\\ 0 \\right\\rangle = \\dfrac{4\\pi \\times 10^{-7} \\cdot 10}{2\\pi} \\cdot \\langle 0, 10, 0 \\rangle = \\langle 0,\\ 2 \\times 10^{-5},\\ 0 \\rangle$. Its length is $2 \\times 10^{-5}$.
2. **Direction.** At $(0.1, 0, 0)$ it points in the $+y$ direction, which is the counterclockwise direction seen from above there. At every point of the circle it points along the circle, with the same length.
3. **Loop integral.** Length times circumference: $2 \\times 10^{-5} \\times 2\\pi(0.1) = 4\\pi \\times 10^{-6}$.
4. **Compare.** $\\mu_0 I = 4\\pi \\times 10^{-7} \\times 10 = 4\\pi \\times 10^{-6}$ ✓.
<<<
>>> Why the extra term is needed, with numbers
A wire carries $I = 2$ amperes into one plate of a capacitor. No current crosses the gap between the plates, so charge builds up on the plate at $2$ coulombs per second. Take a circle $C$ around the wire.

1. **Surface 1: the flat disk inside $C$.** The wire passes through it, so the current through it is $2$. Ampère's law says $\\oint_C \\mathbf B\\cdot d\\mathbf r = \\mu_0 \\cdot 2$.
2. **Surface 2: a bag with the same edge $C$** that bulges out and passes through the gap between the plates. No wire passes through the bag, so the current through it is $0$. Ampère's law alone would say $\\oint_C \\mathbf B\\cdot d\\mathbf r = 0$.
3. **The contradiction.** By Stokes' Theorem, the loop integral equals the flux of the curl through **any** surface with edge $C$ (as on Dec 2). Ampère's law alone gives $\\mu_0 \\cdot 2$ through one surface and $0$ through the other.
4. **The fix.** The plate's charge $Q$ makes an electric field between the plates, and that field goes through the bag. The disk and the bag together form a closed surface around the plate, so by Gauss's Law their total electric flux is $Q/\\varepsilon_0$. Outside the plates the field is nearly $0$, so almost all of that flux goes through the bag. $Q$ grows by $2$ each second, so this flux grows at the rate $2/\\varepsilon_0$.
5. **Maxwell's term on the bag.** $\\mu_0\\varepsilon_0 \\cdot \\dfrac{2}{\\varepsilon_0} = \\mu_0 \\cdot 2$ ✓. The bag now gives the same $\\mu_0 \\cdot 2$ as the disk.
<<<
:::

:::check
A wire along the $z$-axis carries a current of $3$ amperes upward. What is $\\oint_C \\mathbf B\\cdot d\\mathbf r$ around the circle of radius $5$ centered at $(0, 0, 0)$ in the $xy$-plane, counterclockwise seen from above?
- [x] $3\\mu_0$
  why: The circle goes once around the wire, so the loop integral is $\\mu_0 I$ with $I = 3$.
- [ ] $15\\mu_0$
  why: The radius doesn't enter. A bigger circle is longer, but the field on it is weaker by the same factor.
- [ ] $\\dfrac{3\\mu_0}{10\\pi}$
  why: That is the length of $\\mathbf B$ on the circle, $\\dfrac{\\mu_0 I}{2\\pi r}$ with $r = 5$. The loop integral multiplies it by the circumference $10\\pi$.
???
The circle goes once around the wire, so Ampère's law gives $\\mu_0 I = 3\\mu_0$. The radius doesn't matter: as on Dec 4, a bigger circle has a longer path but a weaker field ($1/r$), and the two cancel.
:::

:::check
Same wire. Now $C$ is the circle of radius $1$ centered at $(4, 0, 0)$ in the $xy$-plane. What is $\\oint_C \\mathbf B\\cdot d\\mathbf r$?
- [x] $0$
  why: This circle stays where $3 \\le x \\le 5$, so the wire doesn't pass through the disk inside it. No current goes through, so $I = 0$.
- [ ] $3\\mu_0$
  why: That is for a loop around the wire. This one doesn't go around it.
???
The disk inside $C$ has $x$ between $3$ and $5$, so the $z$-axis doesn't cross it and $I = 0$. This is the same as the Dec 4 check where $\\mathbf G$ gave $0$ around a circle off to the side.
:::

:::idea All four together: light
In empty space there are no charges and no currents: $\\rho_c = 0$ and $\\mathbf J = \\mathbf 0$. The equations become
$$\\nabla\\cdot\\mathbf E = 0, \\qquad \\nabla\\cdot\\mathbf B = 0,$$
$$\\nabla\\times\\mathbf E = -\\frac{\\partial\\mathbf B}{\\partial t},$$
$$\\nabla\\times\\mathbf B = \\mu_0\\varepsilon_0\\frac{\\partial\\mathbf E}{\\partial t}.$$
A changing $\\mathbf B$ makes a circling $\\mathbf E$ (row 3), and a changing $\\mathbf E$ makes a circling $\\mathbf B$ (row 4). Each keeps the other going, with nothing else needed.

**A wave that solves all four.** With a number $c > 0$, take
$$\\mathbf E = \\langle 0,\\ \\sin(x - ct),\\ 0 \\rangle,$$
$$\\mathbf B = \\left\\langle 0,\\ 0,\\ \\tfrac1c\\sin(x - ct) \\right\\rangle.$$
Both are waves moving in the $+x$ direction at speed $c$. Rows 1, 2 and 3 hold for any $c$. Row 4 holds only when $c^2 = \\dfrac{1}{\\mu_0\\varepsilon_0}$, which gives
$$c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} \\approx 3.00 \\times 10^8$$
meters per second, the measured speed of light. This is how Maxwell found that light is an electric and magnetic wave.
>>> Checking all four rows, step by step
Write $s = \\sin(x - ct)$ and $k = \\cos(x - ct)$. Differentiating $s$ in $x$ gives $k$, and differentiating $s$ in $t$ gives $-ck$ (chain rule: the inside $x - ct$ has $t$-derivative $-c$).

1. **Row 1.** $\\mathbf E = \\langle 0, s, 0 \\rangle$, and $s$ has no $y$ in it, so $\\nabla\\cdot\\mathbf E = 0 + 0 + 0 = 0$ ✓.
2. **Row 2.** $\\mathbf B = \\langle 0, 0, s/c \\rangle$, and $s$ has no $z$ in it, so $\\nabla\\cdot\\mathbf B = 0$ ✓.
3. **Row 3.** $\\nabla\\times\\mathbf E = \\langle R_y - Q_z,\\ P_z - R_x,\\ Q_x - P_y \\rangle = \\langle 0 - 0,\\ 0 - 0,\\ k - 0 \\rangle = \\langle 0, 0, k \\rangle$. And $-\\dfrac{\\partial\\mathbf B}{\\partial t} = -\\left\\langle 0, 0, \\dfrac{-ck}{c} \\right\\rangle = \\langle 0, 0, k \\rangle$ ✓.
4. **Row 4, left side.** $\\mathbf B$ has only $R = s/c$, so $\\nabla\\times\\mathbf B = \\langle R_y,\\ -R_x,\\ 0 \\rangle = \\left\\langle 0,\\ -\\dfrac{k}{c},\\ 0 \\right\\rangle$.
5. **Row 4, right side.** $\\mu_0\\varepsilon_0\\dfrac{\\partial\\mathbf E}{\\partial t} = \\mu_0\\varepsilon_0\\langle 0, -ck, 0 \\rangle$.
6. **When they match.** The middle components need $-\\dfrac{k}{c} = -\\mu_0\\varepsilon_0 c\\, k$, so $\\dfrac1c = \\mu_0\\varepsilon_0 c$, which is $c^2 = \\dfrac{1}{\\mu_0\\varepsilon_0}$.

For example, at the point $x = 0$ and time $t = 0$: $k = \\cos 0 = 1$, so row 3 says both sides are $\\langle 0, 0, 1 \\rangle$ ✓.
<<<
>>> The speed, with numbers
1. **Multiply the constants.** $\\mu_0\\varepsilon_0 = (4\\pi \\times 10^{-7})(8.854 \\times 10^{-12}) \\approx 1.1127 \\times 10^{-17}$.
2. **Square root.** $\\sqrt{1.1127 \\times 10^{-17}} \\approx 3.336 \\times 10^{-9}$.
3. **One over it.** $1 / (3.336 \\times 10^{-9}) \\approx 2.998 \\times 10^8$ meters per second.

The two constants come from experiments with charges and currents (row 1 and row 4), and they predict the speed of light.
<<<
:::

:::check
For the wave $\\mathbf E = \\langle 0, \\sin(x - ct), 0 \\rangle$, what is $\\nabla\\times\\mathbf E$ at the point $x = 0$, $y = 0$, $z = 0$ at time $t = 0$?
- [x] $\\langle 0, 0, 1 \\rangle$
  why: $\\nabla\\times\\mathbf E = \\langle 0, 0, \\cos(x - ct) \\rangle$, and $\\cos 0 = 1$.
- [ ] $\\langle 0, 0, 0 \\rangle$
  why: The $y$-component $\\sin(x - ct)$ changes with $x$, so $Q_x$ is not $0$.
- [ ] $\\langle 1, 0, 0 \\rangle$
  why: The curl of a field pointing in $y$ that changes with $x$ points in $z$: the third component is $Q_x - P_y$.
???
$Q = \\sin(x - ct)$, so $Q_x = \\cos(x - ct)$, and every other partial derivative is $0$. At $x = 0$, $t = 0$: $\\langle 0, 0, \\cos 0 \\rangle = \\langle 0, 0, 1 \\rangle$.
:::

:::summary Summary
- **Maxwell's equations:** $\\nabla\\cdot\\mathbf E = \\rho_c/\\varepsilon_0$, $\\nabla\\cdot\\mathbf B = 0$, $\\nabla\\times\\mathbf E = -\\partial\\mathbf B/\\partial t$, $\\nabla\\times\\mathbf B = \\mu_0\\mathbf J + \\mu_0\\varepsilon_0\\,\\partial\\mathbf E/\\partial t$.
- The Divergence Theorem turns the two divergence equations into closed-surface fluxes. Stokes' Theorem turns the two curl equations into loop integrals.
- **No magnetic charge:** the flux of $\\mathbf B$ out of any closed surface is $0$, so a field with nonzero divergence somewhere can't be a magnetic field.
- **Faraday:** a changing magnetic flux through a loop makes $\\oint \\mathbf E\\cdot d\\mathbf r = -\\frac{d}{dt}(\\text{flux})$. The minus sign makes $\\mathbf E$ circle opposite to the right-hand direction of the growing $\\mathbf B$.
- **Ampère–Maxwell:** a current $I$ through a loop makes $\\oint \\mathbf B\\cdot d\\mathbf r = \\mu_0 I$. The wire's field is the swirl field of Dec 4. A changing electric field counts like a current.
- In empty space the equations have wave solutions moving at $1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3 \\times 10^8$ m/s, the speed of light.

**Common mistakes:**
- Dropping the minus sign in Faraday's law.
- Using the Divergence Theorem on the curl equations, or Stokes' Theorem on the divergence equations.
- Counting current that doesn't pass through the surface bounded by the loop.
:::
`;export{e as default};