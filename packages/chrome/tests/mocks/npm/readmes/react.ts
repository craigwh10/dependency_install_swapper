export const react = `
<article> <div class="_6d9832ac pr4-ns pl0-ns ph1-m pr3-m pr2  markdown" id="readme"><h1>
<a id="user-content-react" class="anchor" href="#react" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>react</code>
</h1>
<p>React is a JavaScript library for creating user interfaces.</p>
<p>The <code>react</code> package contains only the functionality necessary to define React components. It is typically used together with a React renderer like <code>react-dom</code> for the web, or <code>react-native</code> for the native environments.</p>
<p><strong>Note:</strong> by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the <a href="https://reactjs.org/docs/optimizing-performance.html#use-the-production-build" rel="nofollow">production build</a> when deploying your application.</p>
<h2>
<a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Usage</h2>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-kos">{</span> <span class="pl-s1">useState</span> <span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'react'</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span> <span class="pl-s1">createRoot</span> <span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'react-dom/client'</span><span class="pl-kos">;</span>

<span class="pl-k">function</span> <span class="pl-v">Counter</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">const</span> <span class="pl-kos">[</span><span class="pl-s1">count</span><span class="pl-kos">,</span> <span class="pl-s1">setCount</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-en">useState</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
  <span class="pl-k">return</span> <span class="pl-kos">(</span>
    <span class="pl-c1">&lt;</span><span class="pl-c1">&gt;</span>
      <span class="pl-c1">&lt;</span><span class="pl-ent">h1</span><span class="pl-c1">&gt;</span><span class="pl-kos">{</span><span class="pl-s1">count</span><span class="pl-kos">}</span><span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">h1</span><span class="pl-c1">&gt;</span>
      <span class="pl-c1">&lt;</span><span class="pl-ent">button</span> <span class="pl-c1">onClick</span><span class="pl-c1">=</span><span class="pl-kos">{</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">setCount</span><span class="pl-kos">(</span><span class="pl-s1">count</span> <span class="pl-c1">+</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">}</span><span class="pl-c1">&gt;</span>
        Increment
      <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">button</span><span class="pl-c1">&gt;</span>
    <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-c1">&gt;</span>
  <span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-kos">}</span>

<span class="pl-k">const</span> <span class="pl-s1">root</span> <span class="pl-c1">=</span> <span class="pl-en">createRoot</span><span class="pl-kos">(</span><span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">'root'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-s1">root</span><span class="pl-kos">.</span><span class="pl-en">render</span><span class="pl-kos">(</span><span class="pl-c1">&lt;</span><span class="pl-ent">App</span> <span class="pl-c1">/</span><span class="pl-c1">&gt;</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<h2>
<a id="user-content-documentation" class="anchor" href="#documentation" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Documentation</h2>
<p>See <a href="https://reactjs.org/" rel="nofollow">https://reactjs.org/</a></p>
<h2>
<a id="user-content-api" class="anchor" href="#api" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API</h2>
<p>See <a href="https://reactjs.org/docs/react-api.html" rel="nofollow">https://reactjs.org/docs/react-api.html</a></p>
</div></article>
`