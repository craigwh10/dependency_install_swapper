export const prosemirror = `
<article> <div class="_6d9832ac pr4-ns pl0-ns ph1-m pr3-m pr2  markdown" id="readme"><h1>
<a id="user-content-aditor" class="anchor" href="#aditor" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><a href="https://yachelee.github.io/Aditor" rel="nofollow">Aditor</a>
</h1>
<blockquote>
<p>A React component made by ProseMirror</p>
</blockquote>
<p><a href="https://www.npmjs.com/package/aditor" rel="nofollow"><img src="https://camo.githubusercontent.com/9a924058a9f5a00be8b424deee72d952a77768982b50b6bc09a0e0e97d18abef/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f416469746f722e737667" alt="NPM" data-canonical-src="https://img.shields.io/npm/v/Aditor.svg" style="max-width:100%;"></a> <a href="https://standardjs.com" rel="nofollow"><img src="https://camo.githubusercontent.com/bde227e3207c7143032c0feb73889ffbda8eb1ef234b820b915ccaf74f9c66d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d7374616e646172642d627269676874677265656e2e737667" alt="JavaScript Style Guide" data-canonical-src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" style="max-width:100%;"></a></p>
<h2>
<a id="user-content-install" class="anchor" href="#install" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Install</h2>
<div class="highlight highlight-source-shell"><pre>npm install --save aditor
</pre></div>
<h2>
<a id="user-content-demo" class="anchor" href="#demo" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Demo</h2>
<p><a href="https://yachelee.github.io/Aditor" rel="nofollow"><strong>Live Demo</strong></a></p>
<h2>
<a id="user-content-features" class="anchor" href="#features" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Features</h2>
<p>JSON input, JSON output</p>
<h2>
<a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Usage</h2>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-v">React</span> <span class="pl-k">from</span> <span class="pl-s">'react'</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-v">Aditor</span> <span class="pl-k">from</span> <span class="pl-s">'aditor'</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-s">'aditor/dist/index.css'</span><span class="pl-kos">;</span>

<span class="pl-k">const</span> <span class="pl-v">App</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span>
  <span class="pl-k">const</span> <span class="pl-kos">[</span><span class="pl-s1">value</span><span class="pl-kos">,</span> <span class="pl-s1">setValue</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-v">React</span><span class="pl-kos">.</span><span class="pl-en">useState</span><span class="pl-kos">(</span><span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">1</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Heading1"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">2</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Heading2"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">3</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Heading3"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">4</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Heading4"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">5</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Heading5"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">6</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Heading6"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Normal Text"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"strong"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Bold"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"em"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Italic"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"u"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Underline"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"del"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"StrikeThrough"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"textColor"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"color"</span>:<span class="pl-s">"#f44e3b"</span><span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Red"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"paragraph"</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"link"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"href"</span>:<span class="pl-s">"https://www.google.com.tw"</span><span class="pl-kos">,</span><span class="pl-s">"title"</span>:<span class="pl-c1">null</span><span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"Link"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"heading"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"level"</span>:<span class="pl-c1">1</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-s">"content"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"text"</span><span class="pl-kos">,</span><span class="pl-s">"marks"</span>:<span class="pl-kos">[</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"link"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"href"</span>:<span class="pl-s">"https://www.google.com.tw"</span><span class="pl-kos">,</span><span class="pl-s">"title"</span>:<span class="pl-c1">null</span><span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"strong"</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"em"</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"u"</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"del"</span><span class="pl-kos">}</span><span class="pl-kos">,</span><span class="pl-kos">{</span><span class="pl-s">"type"</span>:<span class="pl-s">"textColor"</span><span class="pl-kos">,</span><span class="pl-s">"attrs"</span>:<span class="pl-kos">{</span><span class="pl-s">"color"</span>:<span class="pl-s">"#f44e3b"</span><span class="pl-kos">}</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span><span class="pl-s">"text"</span>:<span class="pl-s">"All combined"</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

  <span class="pl-k">return</span> <span class="pl-kos">(</span>
    <span class="pl-c1">&lt;</span><span class="pl-ent">div</span> <span class="pl-c1">className</span><span class="pl-c1">=</span><span class="pl-s">"App"</span><span class="pl-c1">&gt;</span>
      <span class="pl-c1">&lt;</span><span class="pl-ent">Aditor</span> <span class="pl-c1">defaultValue</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">value</span><span class="pl-kos">}</span> <span class="pl-c1">onChange</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-s1">value</span><span class="pl-c1">=&gt;</span><span class="pl-kos">{</span>
        <span class="pl-s1">setValue</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
      <span class="pl-kos">}</span><span class="pl-kos">}</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span>
      <span class="pl-kos">{</span><span class="pl-c1">JSON</span><span class="pl-kos">.</span><span class="pl-en">stringify</span><span class="pl-kos">(</span><span class="pl-s1">value</span><span class="pl-kos">)</span><span class="pl-kos">}</span>
    <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">div</span><span class="pl-c1">&gt;</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-k">export</span> <span class="pl-k">default</span> <span class="pl-v">App</span></pre></div>
<h2>
<a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>License</h2>
<p>MIT © <a href="https://github.com/"></a></p>
</div></article>
`
