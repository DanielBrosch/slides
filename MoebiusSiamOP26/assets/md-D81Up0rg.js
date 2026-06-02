import{b as o,o as r,w as x,g as n,i as e,af as s,v as _,x as m,T as l}from"./modules/vue-DXfvL88u.js";import{I as c}from"./pageBar-BxMnZxWR.js";import{I as p,aj as d}from"./index-B6LMIw-B.js";import"./modules/shiki-Df-l60Rj.js";const y={__name:"slides.md__slidev_22",setup(u){const{$clicksContext:i,$frontmatter:t}=p();return i.setup(),(g,a)=>(r(),o(c,_(m(l(d)(l(t),21))),{default:x(()=>[a[0]||(a[0]=n("h1",null,"Summary",-1)),a[1]||(a[1]=n("p",null,"Nearly symmetric sum-of-squares?",-1)),a[2]||(a[2]=n("p",null,[s("We introduce a new symmetry reduction method based on "),n("strong",null,"sums-of-invariant-squares"),s(" and "),n("strong",null,"Möbius-transforms"),s(".")],-1)),a[3]||(a[3]=n("h2",null,"Preliminary results",-1)),a[4]||(a[4]=n("br",null,null,-1)),a[5]||(a[5]=n("p",null,[n("strong",null,"Ramsey Numbers:"),s(" (SDPs solved in under 5 seconds.)")],-1)),a[6]||(a[6]=n("ul",null,[n("li",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"R"),n("mo",{stretchy:"false"},"("),n("mn",null,"6"),n("mo",{separator:"true"},","),n("mn",null,"6"),n("mo",{stretchy:"false"},")"),n("mo",null,"≤"),n("mn",null,"155")]),n("annotation",{encoding:"application/x-tex"},"R(6,6) \\leq 155")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"6"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},"6"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"≤"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"155")])])]),s(" (Improved from 160 ("),n("strong",null,"Angeltveit, McKay"),s("). Unpublished bound by "),n("strong",null,"Jan Volec"),s(": 147.)")]),n("li",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"R"),n("mo",{stretchy:"false"},"("),n("mn",null,"6"),n("mo",{separator:"true"},","),n("mn",null,"7"),n("mo",{stretchy:"false"},")"),n("mo",null,"≤"),n("mn",null,"262")]),n("annotation",{encoding:"application/x-tex"},"R(6,7) \\leq 262")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"R"),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"6"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},"7"),n("span",{class:"mclose"},")"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"≤"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"262")])])]),s(" (Improved from 270 ("),n("strong",null,"Angeltveit, McKay"),s(").)")])],-1)),a[7]||(a[7]=n("br",null,null,-1)),a[8]||(a[8]=n("p",null,[n("strong",null,"Constant Weight Codes:")],-1)),a[9]||(a[9]=n("ul",null,[n("li",null,"Very strong bounds (often beating Lasserre-based bounds) without adding additional constraints."),n("li",null,"Working on additional constraints."),n("li",null,"So far no new bounds.")],-1)),e(` # Polynomial Optimization
and polynomial feasibility

A **polynomial optimization problem** is of the form 
<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
\\begin{align*}
P =\\inf\\enspace &f(x)\\\\
\\text{s.t.} \\enspace & h_i(x) = 0 \\quad \\text{for }i=1,\\ldots, m,\\\\
& g_i(x) \\geq 0 \\quad \\text{for } i=1,\\ldots, \\ell,
\\end{align*}
$$
</KaTexBlockWrapper>

where $f$, the $h_i$'s and $g_i$'s are *polynomials* in $\\R[x_1,\\ldots,x_n]$.

::v-click

Equivalently, we can optimize over **nonnegative polynomials**:
<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
\\begin{align*}
P = \\sup\\enspace &\\lambda\\\\
\\text{s.t.} \\enspace & f - \\lambda \\geq 0 \\text{ on }\\mathcal{K},
\\end{align*}
$$
</KaTexBlockWrapper>

where $\\mathcal{K} = \\{x\\in \\R^n\\mid h_i(x) = 0, \\enspace g_j(x)\\geq 0 \\quad \\text{for all }i,j \\}$. `),e(` 
# Polynomial Optimization
and polynomial feasibility

How to model functions nonnegative on $\\mathcal{K}=\\{x\\in \\R^n\\mid h_i(x) = 0, \\enspace g_j(x)\\geq 0 \\quad \\text{for all }i,j \\}$?

::v-click

A **sum-of-squares** is a polynomial of the form
<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
\\sigma(x) = \\sum_{i=1}^k f_i(x)^2 \\geq 0,
$$
</KaTexBlockWrapper>

which is *globally nonnegative*.

::v-click

Functions in the **quadratic module** of $\\mathcal{K}$ are of the form
<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
\\mathcal{Q}(g_1,\\ldots,g_\\ell; h_1,\\ldots,h_m) = \\left\\{\\sigma_0 + \\sum_{j=1}^\\ell g_j\\sigma_j + \\sum_{i=1}^mf_ih_i \\mid \\sigma_j \\text{ sum-of-squares}, \\enspace f_i\\in \\R[x]\\right\\}.
$$
</KaTexBlockWrapper>

 `),e(` 
# Polynomial Optimization
and polynomial feasibility

Sum-of-squares correspond to **positive semidefinite matrices**. Let $[x]$ be a *monomial basis* of $\\R[x]_{\\leq d}$. If $\\sigma$ is a sum-of-squares of degree $2d$, then
<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
\\begin{align*}
\\sigma = \\sum_{i=1}^k f_i^2 = \\sum_{i=1}^k (c_i^\\top [x])^2 = \\sum_{i=1}^k \\left\\langle c_ic_i^\\top, [x][x]^\\top\\right\\rangle=  \\left\\langle \\sum_{i=1}^k c_ic_i^\\top, [x][x]^\\top\\right\\rangle = \\langle M, [x][x]^\\top\\rangle,
\\end{align*}
$$
</KaTexBlockWrapper>

where $M\\succcurlyeq 0$ is a positive semidefinite matrix.

::v-click

We can optimize over the **truncated quadratic module**
$$\\small
\\mathcal{Q}_{\\color{red}d}(g_1,\\ldots,g_\\ell; h_1,\\ldots,h_m) = \\left\\{\\sigma_0 + \\sum_{j=1}^\\ell g_j\\sigma_j + \\sum_{i=1}^mf_ih_i \\mid \\sigma_j \\text{ SOS}, \\enspace f_i\\in \\R[x], \\text{\\color{red} each term has degree at most $2d$} \\right\\}
<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
by solving SDPs. This is the *moment-sum-of-squares-hierarchy* of Parrilo and Lasserre.
 `),e(` 
# Möbius Transforms
Exploiting $x_i(1-x_i)=0$

We follow the ideas of **Raymond, Saunderson, Singh, Thomas (2018)**. A similar idea was used by **Gvozdenović, Laurent, Vallentin (2008)**.
$$
</KaTexBlockWrapper>

\\begin{align*}
\\mathcal{R}_3 :=& \\R[G]\\cdot 1 \\oplus \\R[G] \\cdot x_{12} \\oplus \\R[G] \\cdot x_{12}x_{23} \\oplus \\R[G] \\cdot x_{12}x_{23}x_{13},\\\\
=& \\, \\mathrm{Span}\\{1, x_{ij}, x_{ij}x_{jk}, x_{ij}x_{jk}x_{ik} \\quad \\text{for }i,j,k\\in [n]\\}
\\end{align*}
$$

::v-click

Let's consider the submatrix coming from $[x]=\\{1, x_{12},x_{13},x_{23}, x_{12}x_{13}, x_{12}x_{23}, x_{13}x_{23}, x_{12}x_{13}x_{23}\\}$:

$$\\scriptsize
[x][x]^\\top=\\begin{pmatrix}
1 &
x_{12} &
x_{13} &
x_{23} &
x_{12}x_{13} &
x_{12}x_{23} &
x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{12} &
x_{12} &
x_{12}x_{13} &
x_{12}x_{23} &
x_{12}x_{13} &
x_{12}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{13} &
x_{12}x_{13} &
x_{13} &
x_{13}x_{23} &
x_{12}x_{13} &
x_{12}x_{13}x_{23} &
x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{23} &
x_{12}x_{23} &
x_{13}x_{23} &
x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{23} &
x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{12}x_{13} &
x_{12}x_{13} &
x_{12}x_{13} &
x_{12}x_{13}x_{23} &
x_{12}x_{13} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{12}x_{23} &
x_{12}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{13}x_{23} &
x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\\\
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23} &
x_{12}x_{13}x_{23}
\\end{pmatrix}
\\succcurlyeq 0
$$

::v-click

<p>

Apply a **Möbius transform** via the basis transformation $x_{ij}^0 \\rightarrow {\\color{red}(1-x_{ij})}$.

</p> `),e(` 
# Möbius Transforms
Exploiting $x_i(1-x_i)=0$

The same submatrix in the transformed basis $\\hat{[x]}$
$$\\small
\\begin{align*}
[x] &\\longrightarrow \\hat{[x]}\\\\
1 &\\longrightarrow {\\color{red}(1-x_{12})}{\\color{red}(1-x_{13})}{\\color{red}(1-x_{23})}\\\\
x_{12} &\\longrightarrow x_{12}{\\color{red}(1-x_{13})}{\\color{red}(1-x_{23})}\\\\
x_{13} &\\longrightarrow {\\color{red}(1-x_{12})}x_{13}{\\color{red}(1-x_{23})}\\\\
x_{23} &\\longrightarrow {\\color{red}(1-x_{12})}{\\color{red}(1-x_{13})}x_{23}\\\\
x_{12}x_{13} &\\longrightarrow x_{12}x_{13}{\\color{red}(1-x_{23})}\\\\
x_{12}x_{23} &\\longrightarrow x_{12}{\\color{red}(1-x_{13})}x_{23}\\\\
x_{13}x_{23} &\\longrightarrow {\\color{red}(1-x_{12})}x_{13}x_{23}\\\\
x_{12}x_{13}x_{23} &\\longrightarrow x_{12}x_{13}x_{23}
\\end{align*}
$$

is the **diagonal matrix** $\\hat{[x]} \\hat{[x]}\\phantom{}^\\top = \\mathrm{Diag}(\\hat{[x]})$.

<!-- $$\\tiny
\\begin{pmatrix}
{\\color{red}(1-x_{12})}{\\color{red}(1-x_{13})}{\\color{red}(1-x_{23})} &&&&&&&\\\\
 & x_{12}{\\color{red}(1-x_{13})}{\\color{red}(1-x_{23})} &&&&&&\\\\
 && {\\color{red}(1-x_{12})}x_{13}{\\color{red}(1-x_{23})} &&&&&\\\\
 &&& {\\color{red}(1-x_{12})}{\\color{red}(1-x_{13})}x_{23} &&&&\\\\
 &&&& x_{12}x_{13}{\\color{red}(1-x_{23})} &&&&\\\\
 &&&&& x_{12}{\\color{red}(1-x_{13})}x_{23} &&&\\\\
 &&&&&& {\\color{red}(1-x_{12})}x_{13}x_{23} &&\\\\
 &&&&&&&& x_{12}x_{13}x_{23}
\\end{pmatrix}
$$ `),e(` 

::v-click

::center{font-size=25pt}

 **Can we apply a Möbius-transform to $\\mathcal{R}^{S_{[d]^c}}_d$?**

:: `),e(` 

# Möbius Transforms
Exploiting $x_i(1-x_i)=0$


**Naive idea**: Apply the Möbius transform on all variables with indices contained in $[d]$:
::v-click

<KaTexBlockWrapper v-bind="{}" :ranges='[]'>

$$
x_{12}\\sum_{i>3}x_{1i} \\in \\mathcal{R}^{S_{[3]^c}}_3 \\longrightarrow x_{12}{\\color{red}(1-x_{13})(1-x_{23})}\\sum_{i>3}x_{1i} {\\color{red}\\notin} \\mathcal{R}^{S_{[3]^c}}_3.
$$
</KaTexBlockWrapper>


::center{style="color: red; font-size: 2rem"}

Not a basis transformation!

::

::v-click

<p>

**Better:** Split $\\mathcal{R}^{S_{[d]^c}}_d$ into (non-disjoint) subspaces, apply Möbius-transforms on variables contained in subsets $T\\subseteq [d]$.

</p>

::v-click

$$\\mathcal{R}^{S_{[d]^c}}_d \\subseteq \\bigoplus_{T\\subseteq [d]} \\mathcal{R}_{d, T}^{S_{[d]^c}} := \\bigoplus_{T\\subseteq [d]} \\bigoplus_{\\substack{m \\text{ monomial}\\\\ I(m)\\cap [d] \\subseteq T\\\\ |I(m)\\cup T|\\leq d\\\\\\text{up to isomorphism}}} \\R \\mathcal{R}_{S_{T^c}}(m)$$

::v-click

<p>

**Block-diagonalize** by ignoring products between different $T$'s, and **truncate** s.t. all squares end up in $\\mathcal{R}_d$

</p> `),e(` We can further split $\\mathcal{R}^{S_{[d]^c}}_d$ by which indices are used within of $[d]$:

We can apply a Möbius-transform on each $\\mathcal{R}_{d, T}^{S_{[d]^c}}$ on variables with indices fully contained in $T$! `)]),_:1,__:[0,1,2,3,4,5,6,7,8,9]},16))}};export{y as default};
