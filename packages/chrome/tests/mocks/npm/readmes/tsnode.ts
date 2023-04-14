export const tsnode = `
<article> <div class="_6d9832ac pr4-ns pl0-ns ph1-m pr3-m pr2  markdown" id="readme">
<h1>
<a id="" class="anchor" href="#" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><a href="https://typestrong.org/ts-node" rel="nofollow"><img src="https://raw.githubusercontent.com/TypeStrong/ts-node/HEAD/logo.svg?sanitize=true" alt="TypeScript Node" style="max-width:100%;"></a>
</h1>
<p><a href="https://npmjs.org/package/ts-node" rel="nofollow"><img src="https://camo.githubusercontent.com/424bcf6d623e9b34b4e477411bb9fd95e128f31d1f0783288d76861837a3be1c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f74732d6e6f64652e7376673f7374796c653d666c6174" alt="NPM version" data-canonical-src="https://img.shields.io/npm/v/ts-node.svg?style=flat" style="max-width:100%;"></a>
<a href="https://npmjs.org/package/ts-node" rel="nofollow"><img src="https://camo.githubusercontent.com/b30e0a9dc4d4b22c48ce6112684cdc1a9b2f36ef320576bdcc50985537d0c2f0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f74732d6e6f64652e7376673f7374796c653d666c6174" alt="NPM downloads" data-canonical-src="https://img.shields.io/npm/dm/ts-node.svg?style=flat" style="max-width:100%;"></a>
<a href="https://github.com/TypeStrong/ts-node/actions?query=workflow%3A%22Continuous+Integration%22"><img src="https://camo.githubusercontent.com/5115e3f8d6fd35001b9ccdc1cca4cc4dee6a1466e8d805f569554d93e8398746/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f776f726b666c6f772f7374617475732f547970655374726f6e672f74732d6e6f64652f436f6e74696e756f7573253230496e746567726174696f6e" alt="Build status" data-canonical-src="https://img.shields.io/github/workflow/status/TypeStrong/ts-node/Continuous%20Integration" style="max-width:100%;"></a>
<a href="https://codecov.io/gh/TypeStrong/ts-node" rel="nofollow"><img src="https://camo.githubusercontent.com/db08809c478836f0e8dddce8af8fa8a26496b41d55b49f54a48dc872689fb8f4/68747470733a2f2f636f6465636f762e696f2f67682f547970655374726f6e672f74732d6e6f64652f6272616e63682f6d61696e2f67726170682f62616467652e737667" alt="Test coverage" data-canonical-src="https://codecov.io/gh/TypeStrong/ts-node/branch/main/graph/badge.svg" style="max-width:100%;"></a></p>
<blockquote>
<p>TypeScript execution and REPL for node.js, with source map and native ESM support.</p>
</blockquote>
<p>The latest documentation can also be found on our website: <a href="https://typestrong.org/ts-node" rel="nofollow">https://typestrong.org/ts-node</a></p>
<h1>
<a id="user-content-table-of-contents" class="anchor" href="#table-of-contents" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Table of Contents</h1>
<ul>
<li>
<a href="#overview">Overview</a>
<ul>
<li><a href="#features">Features</a></li>
</ul>
</li>
<li><a href="#installation">Installation</a></li>
<li>
<a href="#usage">Usage</a>
<ul>
<li><a href="#command-line">Command Line</a></li>
<li><a href="#shebang">Shebang</a></li>
<li><a href="#node-flags-and-other-tools">node flags and other tools</a></li>
<li><a href="#programmatic">Programmatic</a></li>
</ul>
</li>
<li>
<a href="#configuration">Configuration</a>
<ul>
<li><a href="#cli-flags">CLI flags</a></li>
<li>
<a href="#via-tsconfigjson-recommended">Via tsconfig.json (recommended)</a>
<ul>
<li><a href="#tsconfigbases">@tsconfig/bases</a></li>
<li><a href="#default-config">Default config</a></li>
</ul>
</li>
<li><a href="#node-flags"><code>node</code> flags</a></li>
</ul>
</li>
<li>
<a href="#options">Options</a>
<ul>
<li>
<a href="#cli-options">CLI Options</a>
<ul>
<li><a href="#help">help</a></li>
<li><a href="#version">version</a></li>
<li><a href="#eval">eval</a></li>
<li><a href="#print">print</a></li>
<li><a href="#interactive">interactive</a></li>
<li><a href="#esm">esm</a></li>
</ul>
</li>
<li>
<a href="#tsconfig-options">TSConfig Options</a>
<ul>
<li><a href="#project">project</a></li>
<li><a href="#skipproject">skipProject</a></li>
<li><a href="#cwdmode">cwdMode</a></li>
<li><a href="#compileroptions">compilerOptions</a></li>
<li><a href="#showconfig">showConfig</a></li>
</ul>
</li>
<li>
<a href="#typechecking">Typechecking</a>
<ul>
<li><a href="#transpileonly">transpileOnly</a></li>
<li><a href="#typecheck">typeCheck</a></li>
<li><a href="#compilerhost">compilerHost</a></li>
<li><a href="#files">files</a></li>
<li><a href="#ignorediagnostics">ignoreDiagnostics</a></li>
</ul>
</li>
<li>
<a href="#transpilation-options">Transpilation Options</a>
<ul>
<li><a href="#ignore">ignore</a></li>
<li><a href="#skipignore">skipIgnore</a></li>
<li><a href="#compiler">compiler</a></li>
<li><a href="#swc">swc</a></li>
<li><a href="#transpiler">transpiler</a></li>
<li><a href="#prefertsexts">preferTsExts</a></li>
</ul>
</li>
<li>
<a href="#diagnostic-options">Diagnostic Options</a>
<ul>
<li><a href="#logerror">logError</a></li>
<li><a href="#pretty">pretty</a></li>
<li><a href="#ts_node_debug">TS_NODE_DEBUG</a></li>
</ul>
</li>
<li>
<a href="#advanced-options">Advanced Options</a>
<ul>
<li><a href="#require">require</a></li>
<li><a href="#cwd">cwd</a></li>
<li><a href="#emit">emit</a></li>
<li><a href="#scope">scope</a></li>
<li><a href="#scopedir">scopeDir</a></li>
<li><a href="#moduletypes">moduleTypes</a></li>
<li><a href="#ts_node_history">TS_NODE_HISTORY</a></li>
<li><a href="#noexperimentalreplawait">noExperimentalReplAwait</a></li>
<li><a href="#experimentalresolver">experimentalResolver</a></li>
<li><a href="#experimentalspecifierresolution">experimentalSpecifierResolution</a></li>
</ul>
</li>
<li><a href="#api-options">API Options</a></li>
</ul>
</li>
<li><a href="#swc-1">SWC</a></li>
<li>
<a href="#commonjs-vs-native-ecmascript-modules">CommonJS vs native ECMAScript modules</a>
<ul>
<li><a href="#commonjs">CommonJS</a></li>
<li><a href="#native-ecmascript-modules">Native ECMAScript modules</a></li>
</ul>
</li>
<li>
<a href="#troubleshooting">Troubleshooting</a>
<ul>
<li><a href="#configuration-1">Configuration</a></li>
<li>
<a href="#common-errors">Common errors</a>
<ul>
<li><a href="#tserror"><code>TSError</code></a></li>
<li>
<a href="#syntaxerror"><code>SyntaxError</code></a>
<ul>
<li><a href="#unsupported-javascript-syntax">Unsupported JavaScript syntax</a></li>
</ul>
</li>
<li><a href="#err_require_esm"><code>ERR_REQUIRE_ESM</code></a></li>
<li><a href="#err_unknown_file_extension"><code>ERR_UNKNOWN_FILE_EXTENSION</code></a></li>
</ul>
</li>
<li><a href="#missing-types">Missing Types</a></li>
<li><a href="#npx-yarn-dlx-and-node_modules">npx, yarn dlx, and node_modules</a></li>
</ul>
</li>
<li>
<a href="#performance">Performance</a>
<ul>
<li><a href="#skip-typechecking">Skip typechecking</a></li>
<li><a href="#with-typechecking">With typechecking</a></li>
</ul>
</li>
<li>
<a href="#advanced">Advanced</a>
<ul>
<li><a href="#how-it-works">How it works</a></li>
<li>
<a href="#ignored-files">Ignored files</a>
<ul>
<li><a href="#file-extensions">File extensions</a></li>
<li><a href="#skipping-node_modules">Skipping <code>node_modules</code></a></li>
<li><a href="#skipping-pre-compiled-typescript">Skipping pre-compiled TypeScript</a></li>
<li><a href="#scope-by-directory">Scope by directory</a></li>
<li><a href="#ignore-by-regexp">Ignore by regexp</a></li>
</ul>
</li>
<li>
<a href="#paths-and-baseurl">paths and baseUrl
</a>
<ul>
<li><a href="#why-is-this-not-built-in-to-ts-node">Why is this not built-in to ts-node?</a></li>
</ul>
</li>
<li><a href="#third-party-compilers">Third-party compilers</a></li>
<li>
<a href="#transpilers">Transpilers</a>
<ul>
<li><a href="#third-party-plugins">Third-party plugins</a></li>
<li><a href="#write-your-own-plugin">Write your own plugin</a></li>
</ul>
</li>
<li>
<a href="#module-type-overrides">Module type overrides</a>
<ul>
<li><a href="#caveats">Caveats</a></li>
</ul>
</li>
<li><a href="#api">API</a></li>
</ul>
</li>
<li>
<a href="#recipes">Recipes</a>
<ul>
<li><a href="#watching-and-restarting">Watching and restarting</a></li>
<li>
<a href="#ava">AVA</a>
<ul>
<li><a href="#commonjs-1">CommonJS</a></li>
<li><a href="#native-ecmascript-modules-1">Native ECMAScript modules</a></li>
</ul>
</li>
<li><a href="#gulp">Gulp</a></li>
<li><a href="#intellij-and-webstorm">IntelliJ and Webstorm</a></li>
<li>
<a href="#mocha">Mocha</a>
<ul>
<li><a href="#mocha-7-and-newer">Mocha 7 and newer</a></li>
<li><a href="#mocha-6">Mocha &lt;=6</a></li>
</ul>
</li>
<li><a href="#tape">Tape</a></li>
<li><a href="#visual-studio-code">Visual Studio Code</a></li>
<li><a href="#other">Other</a></li>
</ul>
</li>
<li><a href="#license">License</a></li>
</ul>
<h1>
<a id="user-content-overview" class="anchor" href="#overview" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Overview</h1>
<p>ts-node is a TypeScript execution engine and REPL for Node.js.</p>
<p>It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling.
This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js
tools and libraries.</p>
<h2>
<a id="user-content-features" class="anchor" href="#features" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Features</h2>
<ul>
<li>Automatic sourcemaps in stack traces</li>
<li>Automatic <code>tsconfig.json</code> parsing</li>
<li>Automatic defaults to match your node version</li>
<li>Typechecking (optional)</li>
<li>REPL</li>
<li>Write standalone scripts</li>
<li>Native ESM loader</li>
<li>Use third-party transpilers</li>
<li>Use custom transformers</li>
<li>Integrate with test runners, debuggers, and CLI tools</li>
<li>Compatible with pre-compilation for production</li>
</ul>
<p><a href="https://github.com/TypeStrong/ts-node/blob/HEAD/website/static/img/screenshot.png" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/TypeStrong/ts-node/HEAD/website/static/img/screenshot.png" alt="TypeScript REPL" style="max-width:100%;"></a></p>
<h1>
<a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Installation</h1>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> Locally in your project.</span>
npm install -D typescript
npm install -D ts-node

<span class="pl-c"><span class="pl-c">#</span> Or globally with TypeScript.</span>
npm install -g typescript
npm install -g ts-node

<span class="pl-c"><span class="pl-c">#</span> Depending on configuration, you may also need these</span>
npm install -D tslib @types/node</pre></div>
<p><strong>Tip:</strong> Installing modules locally allows you to control and share the versions through <code>package.json</code>. ts-node will always resolve the compiler from <code>cwd</code> before checking relative to its own installation.</p>
<h1>
<a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Usage</h1>
<h2>
<a id="user-content-command-line" class="anchor" href="#command-line" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Command Line</h2>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> Execute a script as 'node' + 'tsc'.</span>
ts-node script.ts

<span class="pl-c"><span class="pl-c">#</span> Starts a TypeScript REPL.</span>
ts-node

<span class="pl-c"><span class="pl-c">#</span> Execute code with TypeScript.</span>
ts-node -e <span class="pl-s"><span class="pl-pds">'</span>console.log("Hello, world!")<span class="pl-pds">'</span></span>

<span class="pl-c"><span class="pl-c">#</span> Execute, and print, code with TypeScript.</span>
ts-node -p -e <span class="pl-s"><span class="pl-pds">'</span>"Hello, world!"<span class="pl-pds">'</span></span>

<span class="pl-c"><span class="pl-c">#</span> Pipe scripts to execute with TypeScript.</span>
<span class="pl-c1">echo</span> <span class="pl-s"><span class="pl-pds">'</span>console.log("Hello, world!")<span class="pl-pds">'</span></span> <span class="pl-k">|</span> ts-node

<span class="pl-c"><span class="pl-c">#</span> Equivalent to ts-node --transpileOnly</span>
ts-node-transpile-only script.ts

<span class="pl-c"><span class="pl-c">#</span> Equivalent to ts-node --cwdMode</span>
ts-node-cwd script.ts

<span class="pl-c"><span class="pl-c">#</span> Equivalent to ts-node --esm</span>
ts-node-esm script.ts</pre></div>
<h2>
<a id="user-content-shebang" class="anchor" href="#shebang" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Shebang</h2>
<p>To write scripts with maximum portability, <a href="#via-tsconfigjson-recommended">specify options in your <code>tsconfig.json</code></a> and omit them from the shebang.</p>
<div class="highlight highlight-source-ts"><pre>#!/usr/bin/env ts-node

<span class="pl-c">// ts-node options are read from tsconfig.json</span>

<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s">"Hello, world!"</span><span class="pl-kos">)</span></pre></div>
<p>Including options within the shebang requires the <a href="https://manpages.debian.org/bullseye/coreutils/env.1.en.html#S" rel="nofollow"><code>env -S</code> flag</a>, which is available on recent versions of <code>env</code>. (<a href="https://github.com/TypeStrong/ts-node/pull/1448#issuecomment-913895766">compatibility</a>)</p>
<div class="highlight highlight-source-ts"><pre>#!/usr/bin/env -S ts-node --files
<span class="pl-c">// This shebang works on Mac and Linux with newer versions of env</span>
<span class="pl-c">// Technically, Mac allows omitting '-S', but Linux requires it</span></pre></div>
<p>To test your version of <code>env</code> for compatibility with <code>-S</code>:</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> Note that these unusual quotes are necessary</span>
/usr/bin/env --debug <span class="pl-s"><span class="pl-pds">'</span>-S echo foo bar<span class="pl-pds">'</span></span></pre></div>
<h2>
<a id="user-content-node-flags-and-other-tools" class="anchor" href="#node-flags-and-other-tools" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>node flags and other tools</h2>
<p>You can register ts-node without using our CLI: <code>node -r ts-node/register</code> and <code>node --loader ts-node/esm</code></p>
<p>In many cases, setting <a href="https://nodejs.org/api/cli.html#cli_node_options_options" rel="nofollow"><code>NODE_OPTIONS</code></a> will enable <code>ts-node</code> within other node tools, child processes, and worker threads.  This can be combined with other node flags.</p>
<div class="highlight highlight-source-shell"><pre>NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>-r ts-node/register --no-warnings<span class="pl-pds">"</span></span> node ./index.ts</pre></div>
<p>Or, if you require native ESM support:</p>
<div class="highlight highlight-source-shell"><pre>NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>--loader ts-node/esm<span class="pl-pds">"</span></span></pre></div>
<p>This tells any node processes which receive this environment variable to install <code>ts-node</code>'s hooks before executing other code.</p>
<p>If you are invoking node directly, you can avoid the environment variable and pass those flags to node.</p>
<div class="highlight highlight-source-shell"><pre>node --loader ts-node/esm --inspect ./index.ts</pre></div>
<h2>
<a id="user-content-programmatic" class="anchor" href="#programmatic" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Programmatic</h2>
<p>You can require ts-node and register the loader for future requires by using <code>require('ts-node').register({ /* options */ })</code>.</p>
<p>Check out our <a href="#api">API</a> for more features.</p>
<h1>
<a id="user-content-configuration" class="anchor" href="#configuration" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Configuration</h1>
<p>ts-node supports a variety of options which can be specified via <code>tsconfig.json</code>, as CLI flags, as environment variables, or programmatically.</p>
<p>For a complete list, see <a href="#options">Options</a>.</p>
<h2>
<a id="user-content-cli-flags" class="anchor" href="#cli-flags" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>CLI flags</h2>
<p>ts-node CLI flags must come <em>before</em> the entrypoint script. For example:</p>
<div class="highlight highlight-source-shell"><pre>$ ts-node --project tsconfig-dev.json say-hello.ts Ronald
Hello, Ronald<span class="pl-k">!</span></pre></div>
<h2>
<a id="user-content-via-tsconfigjson-recommended" class="anchor" href="#via-tsconfigjson-recommended" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Via tsconfig.json (recommended)</h2>
<p>ts-node automatically finds and loads <code>tsconfig.json</code>.  Most ts-node options can be specified in a <code>"ts-node"</code> object using their programmatic, camelCase names. We recommend this because it works even when you cannot pass CLI flags, such as <code>node --require ts-node/register</code> and when using shebangs.</p>
<p>Use <code>--skipProject</code> to skip loading the <code>tsconfig.json</code>.  Use <code>--project</code> to explicitly specify the path to a <code>tsconfig.json</code>.</p>
<p>When searching, it is resolved using <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html" rel="nofollow">the same search behavior as <code>tsc</code></a>. By default, this search is performed relative to the entrypoint script. In <code>--cwdMode</code> or if no entrypoint is specified -- for example when using the REPL -- the search is performed relative to <code>--cwd</code> / <code>process.cwd()</code>.</p>
<p>You can use this sample configuration as a starting point:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-c">// This is an alias to <span class="pl-k">@tsconfig</span>/node16: https://github.com/tsconfig/bases</span>
  <span class="pl-s">"extends"</span>: <span class="pl-s">"ts-node/node16/tsconfig.json"</span><span class="pl-kos">,</span>

  <span class="pl-c">// Most ts-node options can be specified here using their programmatic names.</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-c">// It is faster to skip typechecking.</span>
    <span class="pl-c">// Remove if you want ts-node to do typechecking.</span>
    <span class="pl-s">"transpileOnly"</span>: <span class="pl-c1">true</span><span class="pl-kos">,</span>

    <span class="pl-s">"files"</span>: <span class="pl-c1">true</span><span class="pl-kos">,</span>

    <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
      <span class="pl-c">// compilerOptions specified here will override those declared below,</span>
      <span class="pl-c">// but *only* in ts-node.  Useful if you want ts-node and tsc to use</span>
      <span class="pl-c">// different options with a single tsconfig.json.</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-c">// typescript options here</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<p>Our bundled <a href="https://unpkg.com/browse/ts-node@latest/tsconfig.schema.json" rel="nofollow">JSON schema</a> lists all compatible options.</p>
<h3>
<a id="user-content-tsconfigbases" class="anchor" href="#tsconfigbases" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>@tsconfig/bases</h3>
<p><a href="https://github.com/tsconfig/bases">@tsconfig/bases</a> maintains recommended configurations for several node versions.
As a convenience, these are bundled with ts-node.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"extends"</span>: <span class="pl-s">"ts-node/node16/tsconfig.json"</span><span class="pl-kos">,</span>

  <span class="pl-c">// Or install directly with 'npm i -D @tsconfig/node16'</span>
  <span class="pl-s">"extends"</span>: <span class="pl-s">"@tsconfig/node16/tsconfig.json"</span><span class="pl-kos">,</span>
<span class="pl-kos">}</span></pre></div>
<h3>
<a id="user-content-default-config" class="anchor" href="#default-config" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Default config</h3>
<p>If no <code>tsconfig.json</code> is loaded from disk, ts-node will use the newest recommended defaults from
<a href="https://github.com/tsconfig/bases/">@tsconfig/bases</a> compatible with your <code>node</code> and <code>typescript</code> versions.
With the latest <code>node</code> and <code>typescript</code>, this is <a href="https://github.com/tsconfig/bases/blob/master/bases/node16.json"><code>@tsconfig/node16</code></a>.</p>
<p>Older versions of <code>typescript</code> are incompatible with <code>@tsconfig/node16</code>.  In those cases we will use an older default configuration.</p>
<p>When in doubt, <code>ts-node --showConfig</code> will log the configuration being used, and <code>ts-node -vv</code> will log <code>node</code> and <code>typescript</code> versions.</p>
<h2>
<a id="user-content-node-flags" class="anchor" href="#node-flags" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>node</code> flags</h2>
<p><a href="https://nodejs.org/api/cli.html" rel="nofollow"><code>node</code> flags</a> must be passed directly to <code>node</code>; they cannot be passed to the ts-node binary nor can they be specified in <code>tsconfig.json</code></p>
<p>We recommend using the <a href="https://nodejs.org/api/cli.html#cli_node_options_options" rel="nofollow"><code>NODE_OPTIONS</code></a> environment variable to pass options to <code>node</code>.</p>
<div class="highlight highlight-source-shell"><pre>NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">'</span>--trace-deprecation --abort-on-uncaught-exception<span class="pl-pds">'</span></span> ts-node ./index.ts</pre></div>
<p>Alternatively, you can invoke <code>node</code> directly and install ts-node via <code>--require</code>/<code>-r</code></p>
<div class="highlight highlight-source-shell"><pre>node --trace-deprecation --abort-on-uncaught-exception -r ts-node/register ./index.ts</pre></div>
<h1>
<a id="user-content-options" class="anchor" href="#options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Options</h1>
<p>All command-line flags support both <code>--camelCase</code> and <code>--hyphen-case</code>.</p>
<p>Most options can be declared in your tsconfig.json: <a href="#via-tsconfigjson-recommended">Configuration via tsconfig.json</a></p>
<p><code>ts-node</code> supports <code>--print</code> (<code>-p</code>), <code>--eval</code> (<code>-e</code>), <code>--require</code> (<code>-r</code>) and <code>--interactive</code> (<code>-i</code>) similar to the <a href="https://nodejs.org/api/cli.html" rel="nofollow">node.js CLI</a>.</p>
<p><code>ts-node</code> supports <code>--project</code> and <code>--showConfig</code> similar to the <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options" rel="nofollow">tsc CLI</a>.</p>
<p><em>Environment variables, where available, are in <code>ALL_CAPS</code></em></p>
<h2>
<a id="user-content-cli-options" class="anchor" href="#cli-options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>CLI Options</h2>
<h3>
<a id="user-content-help" class="anchor" href="#help" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>help</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --help</pre></div>
<p>Prints the help text</p>
<h3>
<a id="user-content-version" class="anchor" href="#version" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>version</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -v
ts-node -vvv</pre></div>
<p>Prints the version. <code>-vv</code> includes node and typescript compiler versions.  <code>-vvv</code> includes absolute paths to ts-node and
typescript installations.</p>
<h3>
<a id="user-content-eval" class="anchor" href="#eval" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>eval</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -e <span class="pl-k">&lt;</span>typescript code<span class="pl-k">&gt;</span>
<span class="pl-c"><span class="pl-c">#</span> Example</span>
ts-node -e <span class="pl-s"><span class="pl-pds">'</span>console.log("Hello world!")<span class="pl-pds">'</span></span></pre></div>
<p>Evaluate code</p>
<h3>
<a id="user-content-print" class="anchor" href="#print" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>print</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -p -e <span class="pl-k">&lt;</span>typescript code<span class="pl-k">&gt;</span>
<span class="pl-c"><span class="pl-c">#</span> Example</span>
ts-node -p -e <span class="pl-s"><span class="pl-pds">'</span>"Hello world!"<span class="pl-pds">'</span></span></pre></div>
<p>Print result of <code>--eval</code></p>
<h3>
<a id="user-content-interactive" class="anchor" href="#interactive" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>interactive</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -i</pre></div>
<p>Opens the REPL even if stdin does not appear to be a terminal</p>
<h3>
<a id="user-content-esm" class="anchor" href="#esm" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>esm</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --esm
ts-node-esm</pre></div>
<p>Bootstrap with the ESM loader, enabling full ESM support</p>
<h2>
<a id="user-content-tsconfig-options" class="anchor" href="#tsconfig-options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>TSConfig Options</h2>
<h3>
<a id="user-content-project" class="anchor" href="#project" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>project</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -P <span class="pl-k">&lt;</span>path/to/tsconfig<span class="pl-k">&gt;</span>
ts-node --project <span class="pl-k">&lt;</span>path/to/tsconfig<span class="pl-k">&gt;</span></pre></div>
<p>Path to tsconfig file.</p>
<p><em>Note the uppercase <code>-P</code>. This is different from <code>tsc</code>'s <code>-p/--project</code> option.</em></p>
<p><em>Environment:</em> <code>TS_NODE_PROJECT</code></p>
<h3>
<a id="user-content-skipproject" class="anchor" href="#skipproject" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>skipProject</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --skipProject</pre></div>
<p>Skip project config resolution and loading</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_SKIP_PROJECT</code></p>
<h3>
<a id="user-content-cwdmode" class="anchor" href="#cwdmode" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>cwdMode</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -c
ts-node --cwdMode
ts-node-cwd</pre></div>
<p>Resolve config relative to the current directory instead of the directory of the entrypoint script</p>
<h3>
<a id="user-content-compileroptions" class="anchor" href="#compileroptions" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>compilerOptions</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -O <span class="pl-k">&lt;</span>json compilerOptions<span class="pl-k">&gt;</span>
ts-node --compilerOptions <span class="pl-k">&lt;</span>json compilerOptions<span class="pl-k">&gt;</span></pre></div>
<p>JSON object to merge with compiler options</p>
<p><em>Environment:</em> <code>TS_NODE_COMPILER_OPTIONS</code></p>
<h3>
<a id="user-content-showconfig" class="anchor" href="#showconfig" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>showConfig</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --showConfig</pre></div>
<p>Print resolved <code>tsconfig.json</code>, including <code>ts-node</code> options, and exit</p>
<h2>
<a id="user-content-typechecking" class="anchor" href="#typechecking" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Typechecking</h2>
<h3>
<a id="user-content-transpileonly" class="anchor" href="#transpileonly" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>transpileOnly</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -T
ts-node --transpileOnly</pre></div>
<p>Use TypeScript's faster <code>transpileModule</code></p>
<p><em>Default:</em> <code>false</code><br>
<em>Environment:</em> <code>TS_NODE_TRANSPILE_ONLY</code></p>
<h3>
<a id="user-content-typecheck" class="anchor" href="#typecheck" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>typeCheck</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --typeCheck</pre></div>
<p>Opposite of <code>--transpileOnly</code></p>
<p><em>Default:</em> <code>true</code><br>
<em>Environment:</em> <code>TS_NODE_TYPE_CHECK</code></p>
<h3>
<a id="user-content-compilerhost" class="anchor" href="#compilerhost" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>compilerHost</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -H
ts-node --compilerHost</pre></div>
<p>Use TypeScript's compiler host API</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_COMPILER_HOST</code></p>
<h3>
<a id="user-content-files" class="anchor" href="#files" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>files</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --files</pre></div>
<p>Load <code>files</code>, <code>include</code> and <code>exclude</code> from <code>tsconfig.json</code> on startup.  This may
avoid certain typechecking failures.  See <a href="#missing-types">Missing types</a> for details.</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_FILES</code></p>
<h3>
<a id="user-content-ignorediagnostics" class="anchor" href="#ignorediagnostics" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>ignoreDiagnostics</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -D <span class="pl-k">&lt;</span>code,code<span class="pl-k">&gt;</span>
ts-node --ignoreDiagnostics <span class="pl-k">&lt;</span>code,code<span class="pl-k">&gt;</span></pre></div>
<p>Ignore TypeScript warnings by diagnostic code</p>
<p><em>Environment:</em> <code>TS_NODE_IGNORE_DIAGNOSTICS</code></p>
<h2>
<a id="user-content-transpilation-options" class="anchor" href="#transpilation-options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Transpilation Options</h2>
<h3>
<a id="user-content-ignore" class="anchor" href="#ignore" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>ignore</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -I <span class="pl-k">&lt;</span>regexp matching ignored files<span class="pl-k">&gt;</span>
ts-node --ignore <span class="pl-k">&lt;</span>regexp matching ignored files<span class="pl-k">&gt;</span></pre></div>
<p>Override the path patterns to skip compilation</p>
<p><em>Default:</em> <code>/node_modules/</code> <br>
<em>Environment:</em> <code>TS_NODE_IGNORE</code></p>
<h3>
<a id="user-content-skipignore" class="anchor" href="#skipignore" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>skipIgnore</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --skipIgnore</pre></div>
<p>Skip ignore checks</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_SKIP_IGNORE</code></p>
<h3>
<a id="user-content-compiler" class="anchor" href="#compiler" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>compiler</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -C <span class="pl-k">&lt;</span>name<span class="pl-k">&gt;</span>
ts-node --compiler <span class="pl-k">&lt;</span>name<span class="pl-k">&gt;</span></pre></div>
<p>Specify a custom TypeScript compiler</p>
<p><em>Default:</em> <code>typescript</code> <br>
<em>Environment:</em> <code>TS_NODE_COMPILER</code></p>
<h3>
<a id="user-content-swc" class="anchor" href="#swc" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>swc</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --swc</pre></div>
<p>Transpile with <a href="#swc">swc</a>.  Implies <code>--transpileOnly</code></p>
<p><em>Default:</em> <code>false</code></p>
<h3>
<a id="user-content-transpiler" class="anchor" href="#transpiler" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>transpiler</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --transpiler <span class="pl-k">&lt;</span>name<span class="pl-k">&gt;</span>
<span class="pl-c"><span class="pl-c">#</span> Example</span>
ts-node --transpiler ts-node/transpilers/swc</pre></div>
<p>Use a third-party, non-typechecking transpiler</p>
<h3>
<a id="user-content-prefertsexts" class="anchor" href="#prefertsexts" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>preferTsExts</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --preferTsExts</pre></div>
<p>Re-order file extensions so that TypeScript imports are preferred</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_PREFER_TS_EXTS</code></p>
<h2>
<a id="user-content-diagnostic-options" class="anchor" href="#diagnostic-options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Diagnostic Options</h2>
<h3>
<a id="user-content-logerror" class="anchor" href="#logerror" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>logError</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --logError</pre></div>
<p>Logs TypeScript errors to stderr instead of throwing exceptions</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_LOG_ERROR</code></p>
<h3>
<a id="user-content-pretty" class="anchor" href="#pretty" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>pretty</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --pretty</pre></div>
<p>Use pretty diagnostic formatter</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_PRETTY</code></p>
<h3>
<a id="user-content-ts_node_debug" class="anchor" href="#ts_node_debug" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>TS_NODE_DEBUG</h3>
<div class="highlight highlight-source-shell"><pre>TS_NODE_DEBUG=true ts-node</pre></div>
<p>Enable debug logging</p>
<h2>
<a id="user-content-advanced-options" class="anchor" href="#advanced-options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Advanced Options</h2>
<h3>
<a id="user-content-require" class="anchor" href="#require" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>require</h3>
<div class="highlight highlight-source-shell"><pre>ts-node -r <span class="pl-k">&lt;</span>module name or path<span class="pl-k">&gt;</span>
ts-node --require <span class="pl-k">&lt;</span>module name or path<span class="pl-k">&gt;</span></pre></div>
<p>Require a node module before execution</p>
<h3>
<a id="user-content-cwd" class="anchor" href="#cwd" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>cwd</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --cwd <span class="pl-k">&lt;</span>path/to/directory<span class="pl-k">&gt;</span></pre></div>
<p>Behave as if invoked in this working directory</p>
<p><em>Default:</em> <code>process.cwd()</code><br>
<em>Environment:</em> <code>TS_NODE_CWD</code></p>
<h3>
<a id="user-content-emit" class="anchor" href="#emit" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>emit</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --emit</pre></div>
<p>Emit output files into <code>.ts-node</code> directory. Requires <code>--compilerHost</code></p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_EMIT</code></p>
<h3>
<a id="user-content-scope" class="anchor" href="#scope" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>scope</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --scope</pre></div>
<p>Scope compiler to files within <code>scopeDir</code>.  Anything outside this directory is ignored.</p>
<p><em>Default:</em> <code>false</code> <br>
<em>Environment:</em> <code>TS_NODE_SCOPE</code></p>
<h3>
<a id="user-content-scopedir" class="anchor" href="#scopedir" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>scopeDir</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --scopeDir <span class="pl-k">&lt;</span>path/to/directory<span class="pl-k">&gt;</span></pre></div>
<p>Directory within which compiler is limited when <code>scope</code> is enabled.</p>
<p><em>Default:</em> First of: <code>tsconfig.json</code> "rootDir" if specified, directory containing <code>tsconfig.json</code>, or cwd if no <code>tsconfig.json</code> is loaded.<br>
<em>Environment:</em> <code>TS_NODE_SCOPE_DIR</code></p>
<h3>
<a id="user-content-moduletypes" class="anchor" href="#moduletypes" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>moduleTypes</h3>
<p>Override the module type of certain files, ignoring the <code>package.json</code> <code>"type"</code> field.  See <a href="#module-type-overrides">Module type overrides</a> for details.</p>
<p><em>Default:</em> obeys <code>package.json</code> <code>"type"</code> and <code>tsconfig.json</code> <code>"module"</code> <br>
<em>Can only be specified via <code>tsconfig.json</code> or API.</em></p>
<h3>
<a id="user-content-ts_node_history" class="anchor" href="#ts_node_history" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>TS_NODE_HISTORY</h3>
<div class="highlight highlight-source-shell"><pre>TS_NODE_HISTORY=<span class="pl-k">&lt;</span>path/to/history/file<span class="pl-k">&gt;</span> ts-node</pre></div>
<p>Path to history file for REPL</p>
<p><em>Default:</em> <code>~/.ts_node_repl_history</code></p>
<h3>
<a id="user-content-noexperimentalreplawait" class="anchor" href="#noexperimentalreplawait" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>noExperimentalReplAwait</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --noExperimentalReplAwait</pre></div>
<p>Disable top-level await in REPL.  Equivalent to node's <a href="https://nodejs.org/api/cli.html#cli_no_experimental_repl_await" rel="nofollow"><code>--no-experimental-repl-await</code></a></p>
<p><em>Default:</em> Enabled if TypeScript version is 3.8 or higher and target is ES2018 or higher.<br>
<em>Environment:</em> <code>TS_NODE_EXPERIMENTAL_REPL_AWAIT</code> set <code>false</code> to disable</p>
<h3>
<a id="user-content-experimentalresolver" class="anchor" href="#experimentalresolver" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>experimentalResolver</h3>
<p>Enable experimental hooks that re-map imports and require calls to support:</p>
<ul>
<li>remapping extensions, e.g. so that <code>import "./foo.js"</code> will execute <code>foo.ts</code>. Currently the following extensions will be mapped:
<ul>
<li>
<code>.js</code> to <code>.ts</code>, <code>.tsx</code>, or <code>.jsx</code>
</li>
<li>
<code>.cjs</code> to <code>.cts</code>
</li>
<li>
<code>.mjs</code> to <code>.mts</code>
</li>
<li>
<code>.jsx</code> to <code>.tsx</code>
</li>
</ul>
</li>
<li>including file extensions in CommonJS, for consistency with ESM where this is often mandatory</li>
</ul>
<p>In the future, this hook will also support:</p>
<ul>
<li>
<code>baseUrl</code>, <code>paths</code>
</li>
<li><code>rootDirs</code></li>
<li>
<code>outDir</code> to <code>rootDir</code> mappings for composite projects and monorepos</li>
</ul>
<p>For details, see <a href="https://github.com/TypeStrong/ts-node/issues/1514">#1514</a>.</p>
<p><em>Default:</em> <code>false</code>, but will likely be enabled by default in a future version<br>
<em>Can only be specified via <code>tsconfig.json</code> or API.</em></p>
<h3>
<a id="user-content-experimentalspecifierresolution" class="anchor" href="#experimentalspecifierresolution" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>experimentalSpecifierResolution</h3>
<div class="highlight highlight-source-shell"><pre>ts-node --experimentalSpecifierResolution node</pre></div>
<p>Like node's <a href="https://nodejs.org/dist/latest-v18.x/docs/api/esm.html#customizing-esm-specifier-resolution-algorithm" rel="nofollow"><code>--experimental-specifier-resolution</code></a>, but can also be set in your <code>tsconfig.json</code> for convenience.
Requires <a href="#esm"><code>esm</code></a> to be enabled.</p>
<p><em>Default:</em> <code>explicit</code><br></p>
<h2>
<a id="user-content-api-options" class="anchor" href="#api-options" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API Options</h2>
<p>The API includes <a href="https://typestrong.org/ts-node/api/interfaces/RegisterOptions.html" rel="nofollow">additional options</a> not shown here.</p>
<h1>
<a id="user-content-swc-1" class="anchor" href="#swc-1" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>SWC</h1>
<p>SWC support is built-in via the <code>--swc</code> flag or <code>"swc": true</code> tsconfig option.</p>
<p><a href="https://swc.rs" rel="nofollow">SWC</a> is a TypeScript-compatible transpiler implemented in Rust.  This makes it an order of magnitude faster than vanilla <code>transpileOnly</code>.</p>
<p>To use it, first install <code>@swc/core</code> or <code>@swc/wasm</code>.  If using <code>importHelpers</code>, also install <code>@swc/helpers</code>.  If <code>target</code> is less than "es2015" and using <code>async</code>/<code>await</code> or generator functions, also install <code>regenerator-runtime</code>.</p>
<div class="highlight highlight-source-shell"><pre>npm i -D @swc/core @swc/helpers regenerator-runtime</pre></div>
<p>Then add the following to your <code>tsconfig.json</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"swc"</span>: <span class="pl-c1">true</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<blockquote>
<p>SWC uses <code>@swc/helpers</code> instead of <code>tslib</code>.  If you have enabled <code>importHelpers</code>, you must also install <code>@swc/helpers</code>.</p>
</blockquote>
<h1>
<a id="user-content-commonjs-vs-native-ecmascript-modules" class="anchor" href="#commonjs-vs-native-ecmascript-modules" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>CommonJS vs native ECMAScript modules</h1>
<p>TypeScript is almost always written using modern <code>import</code> syntax, but it is also transformed before being executed by the underlying runtime.  You can choose to either transform to CommonJS or to preserve the native <code>import</code> syntax, using node's native ESM support.  Configuration is different for each.</p>
<p>Here is a brief comparison of the two.</p>
<table>
<thead>
<tr>
<th>CommonJS</th>
<th>Native ECMAScript modules</th>
</tr>
</thead>
<tbody>
<tr>
<td>Write native <code>import</code> syntax</td>
<td>Write native <code>import</code> syntax</td>
</tr>
<tr>
<td>Transforms <code>import</code> into <code>require()</code>
</td>
<td>Does not transform <code>import</code>
</td>
</tr>
<tr>
<td>Node executes scripts using the classic <a href="https://nodejs.org/dist/latest-v16.x/docs/api/modules.html" rel="nofollow">CommonJS loader</a>
</td>
<td>Node executes scripts using the new <a href="https://nodejs.org/dist/latest-v16.x/docs/api/esm.html" rel="nofollow">ESM loader</a>
</td>
</tr>
<tr>
<td>Use any of:<br><code>ts-node</code><br><code>node -r ts-node/register</code><br><code>NODE_OPTIONS="ts-node/register" node</code><br><code>require('ts-node').register({/* options */})</code>
</td>
<td>Use any of:<br><code>ts-node --esm</code><br><code>ts-node-esm</code><br>Set <code>"esm": true</code> in <code>tsconfig.json</code><br><code>node --loader ts-node/esm</code><br><code>NODE_OPTIONS="--loader ts-node/esm" node</code>
</td>
</tr>
</tbody>
</table>
<h2>
<a id="user-content-commonjs" class="anchor" href="#commonjs" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>CommonJS</h2>
<p>Transforming to CommonJS is typically simpler and more widely supported because it is older.  You must remove <a href="https://nodejs.org/api/packages.html#packages_type" rel="nofollow"><code>"type": "module"</code></a> from <code>package.json</code> and set <a href="https://www.typescriptlang.org/tsconfig/#module" rel="nofollow"><code>"module": "CommonJS"</code></a> in <code>tsconfig.json</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-c">// This can be omitted; commonjs is the default</span>
  <span class="pl-s">"type"</span>: <span class="pl-s">"commonjs"</span>
<span class="pl-kos">}</span></pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"module"</span>: <span class="pl-s">"CommonJS"</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<p>If you must keep <code>"module": "ESNext"</code> for <code>tsc</code>, webpack, or another build tool, you can set an override for ts-node.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"module"</span>: <span class="pl-s">"ESNext"</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
      <span class="pl-s">"module"</span>: <span class="pl-s">"CommonJS"</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h2>
<a id="user-content-native-ecmascript-modules" class="anchor" href="#native-ecmascript-modules" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Native ECMAScript modules</h2>
<p><a href="https://nodejs.org/api/esm.html#esm_experimental_loaders" rel="nofollow">Node's ESM loader hooks</a> are <a href="https://nodejs.org/api/documentation.html#documentation_stability_index" rel="nofollow"><strong>experimental</strong></a> and subject to change. ts-node's ESM support is as stable as possible, but it relies on APIs which node can <em>and will</em> break in new versions of node.  Thus it is not recommended for production.</p>
<p>For complete usage, limitations, and to provide feedback, see <a href="https://github.com/TypeStrong/ts-node/issues/1007">#1007</a>.</p>
<p>You must set <a href="https://nodejs.org/api/packages.html#packages_type" rel="nofollow"><code>"type": "module"</code></a> in <code>package.json</code> and <a href="https://www.typescriptlang.org/tsconfig/#module" rel="nofollow"><code>"module": "ESNext"</code></a> in <code>tsconfig.json</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"type"</span>: <span class="pl-s">"module"</span>
<span class="pl-kos">}</span></pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"module"</span>: <span class="pl-s">"ESNext"</span> <span class="pl-c">// or ES2015, ES2020</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-c">// Tell ts-node CLI to install the --loader automatically, explained below</span>
    <span class="pl-s">"esm"</span>: <span class="pl-c1">true</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<p>You must also ensure node is passed <code>--loader</code>.  The ts-node CLI will do this automatically with our <code>esm</code> option.</p>
<blockquote>
<p>Note: <code>--esm</code> must spawn a child process to pass it <code>--loader</code>.  This may change if node adds the ability to install loader hooks
into the current process.</p>
</blockquote>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> pass the flag</span>
ts-node --esm
<span class="pl-c"><span class="pl-c">#</span> Use the convenience binary</span>
ts-node-esm
<span class="pl-c"><span class="pl-c">#</span> or add '"esm": true' to your tsconfig.json to make it automatic</span>
ts-node</pre></div>
<p>If you are not using our CLI, pass the loader flag to node.</p>
<div class="highlight highlight-source-shell"><pre>node --loader ts-node/esm ./index.ts
<span class="pl-c"><span class="pl-c">#</span> Or via environment variable</span>
NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>--loader ts-node/esm<span class="pl-pds">"</span></span> node ./index.ts</pre></div>
<h1>
<a id="user-content-troubleshooting" class="anchor" href="#troubleshooting" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Troubleshooting</h1>
<h2>
<a id="user-content-configuration-1" class="anchor" href="#configuration-1" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Configuration</h2>
<p>ts-node uses sensible default configurations to reduce boilerplate while still respecting <code>tsconfig.json</code> if you
have one.  If you are unsure which configuration is used, you can log it with <code>ts-node --showConfig</code>.  This is similar to
<code>tsc --showConfig</code> but includes <code>"ts-node"</code> options as well.</p>
<p>ts-node also respects your locally-installed <code>typescript</code> version, but global installations fallback to the globally-installed
<code>typescript</code>.  If you are unsure which versions are used, <code>ts-node -vv</code> will log them.</p>
<div class="highlight highlight-source-shell"><pre>$ ts-node -vv
ts-node v10.0.0
node v16.1.0
compiler v4.2.2

$ ts-node --showConfig
{
  <span class="pl-s"><span class="pl-pds">"</span>compilerOptions<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>target<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>es6<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>lib<span class="pl-pds">"</span></span>: [
      <span class="pl-s"><span class="pl-pds">"</span>es6<span class="pl-pds">"</span></span>,
      <span class="pl-s"><span class="pl-pds">"</span>dom<span class="pl-pds">"</span></span>
    ],
    <span class="pl-s"><span class="pl-pds">"</span>rootDir<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>./src<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>outDir<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>./.ts-node<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>module<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>commonjs<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>moduleResolution<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>node<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>strict<span class="pl-pds">"</span></span>: true,
    <span class="pl-s"><span class="pl-pds">"</span>declaration<span class="pl-pds">"</span></span>: false,
    <span class="pl-s"><span class="pl-pds">"</span>sourceMap<span class="pl-pds">"</span></span>: true,
    <span class="pl-s"><span class="pl-pds">"</span>inlineSources<span class="pl-pds">"</span></span>: true,
    <span class="pl-s"><span class="pl-pds">"</span>types<span class="pl-pds">"</span></span>: [
      <span class="pl-s"><span class="pl-pds">"</span>node<span class="pl-pds">"</span></span>
    ],
    <span class="pl-s"><span class="pl-pds">"</span>stripInternal<span class="pl-pds">"</span></span>: true,
    <span class="pl-s"><span class="pl-pds">"</span>incremental<span class="pl-pds">"</span></span>: true,
    <span class="pl-s"><span class="pl-pds">"</span>skipLibCheck<span class="pl-pds">"</span></span>: true,
    <span class="pl-s"><span class="pl-pds">"</span>importsNotUsedAsValues<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>error<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>inlineSourceMap<span class="pl-pds">"</span></span>: false,
    <span class="pl-s"><span class="pl-pds">"</span>noEmit<span class="pl-pds">"</span></span>: <span class="pl-c1">false</span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>ts-node<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>cwd<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/d/project<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>projectSearchDir<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/d/project<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>require<span class="pl-pds">"</span></span>: [],
    <span class="pl-s"><span class="pl-pds">"</span>project<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/d/project/tsconfig.json<span class="pl-pds">"</span></span>
  }
}</pre></div>
<h2>
<a id="user-content-common-errors" class="anchor" href="#common-errors" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Common errors</h2>
<p>It is important to differentiate between errors from ts-node, errors from the TypeScript compiler, and errors from <code>node</code>.  It is also important to understand when errors are caused by a type error in your code, a bug in your code, or a flaw in your configuration.</p>
<h3>
<a id="user-content-tserror" class="anchor" href="#tserror" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>TSError</code>
</h3>
<p>Type errors from the compiler are thrown as a <code>TSError</code>.  These are the same as errors you get from <code>tsc</code>.</p>
<h3>
<a id="user-content-syntaxerror" class="anchor" href="#syntaxerror" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>SyntaxError</code>
</h3>
<p>Any error that is not a <code>TSError</code> is from node.js (e.g. <code>SyntaxError</code>), and cannot be fixed by TypeScript or ts-node. These are bugs in your code or configuration.</p>
<h4>
<a id="user-content-unsupported-javascript-syntax" class="anchor" href="#unsupported-javascript-syntax" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Unsupported JavaScript syntax</h4>
<p>Your version of <code>node</code> may not support all JavaScript syntax supported by TypeScript.  The compiler must transform this syntax via "downleveling," which is controlled by
the <a href="https://www.typescriptlang.org/tsconfig#target" rel="nofollow">tsconfig <code>"target"</code> option</a>.  Otherwise your code will compile fine, but node will throw a <code>SyntaxError</code>.</p>
<p>For example, <code>node</code> 12 does not understand the <code>?.</code> optional chaining operator.  If you use <code>"target": "esnext"</code>, then the following TypeScript syntax:</p>
<div class="highlight highlight-source-ts"><pre><span class="pl-k">const</span> <span class="pl-s1">bar</span>: <span class="pl-smi">string</span> <span class="pl-c1">|</span> <span class="pl-c1">undefined</span> <span class="pl-c1">=</span> <span class="pl-s1">foo</span><span class="pl-kos">?.</span><span class="pl-c1">bar</span><span class="pl-kos">;</span></pre></div>
<p>will compile into this JavaScript:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">const</span> <span class="pl-s1">a</span> <span class="pl-c1">=</span> <span class="pl-s1">foo</span><span class="pl-kos">?.</span><span class="pl-c1">bar</span><span class="pl-kos">;</span></pre></div>
<p>When you try to run this code, node 12 will throw a <code>SyntaxError</code>.  To fix this, you must switch to <code>"target": "es2019"</code> or lower so TypeScript transforms <code>?.</code> into something <code>node</code> can understand.</p>
<h3>
<a id="user-content-err_require_esm" class="anchor" href="#err_require_esm" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>ERR_REQUIRE_ESM</code>
</h3>
<p>This error is thrown by node when a module is <code>require()</code>d, but node believes it should execute as native ESM.  This can happen for a few reasons:</p>
<ul>
<li>You have installed an ESM dependency but your own code compiles to CommonJS.
<ul>
<li>Solution: configure your project to compile and execute as native ESM. <a href="#native-ecmascript-modules">Docs</a>
</li>
<li>Solution: downgrade the dependency to an older, CommonJS version.</li>
</ul>
</li>
<li>You have moved your project to ESM but still have a config file, such as <code>webpack.config.ts</code>, which must be executed as CommonJS 
<ul>
<li>Solution: if supported by the relevant tool, rename your config file to <code>.cts</code>
</li>
<li>Solution: Configure a module type override. <a href="#module-type-overrides">Docs</a>
</li>
</ul>
</li>
<li>You have a mix of CommonJS and native ESM in your project
<ul>
<li>Solution: double-check all package.json "type" and tsconfig.json "module" configuration <a href="#commonjs-vs-native-ecmascript-modules">Docs</a>
</li>
<li>Solution: consider simplifying by making your project entirely CommonJS or entirely native ESM</li>
</ul>
</li>
</ul>
<h3>
<a id="user-content-err_unknown_file_extension" class="anchor" href="#err_unknown_file_extension" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>ERR_UNKNOWN_FILE_EXTENSION</code>
</h3>
<p>This error is thrown by node when a module has an unrecognized file extension, or no extension at all, and is being executed as native ESM.  This can happen for a few reasons:</p>
<ul>
<li>You are using a tool which has an extensionless binary, such as <code>mocha</code>.
<ul>
<li>CommonJS supports extensionless files but native ESM does not.</li>
<li>Solution: upgrade to ts-node &gt;=<a href="https://github.com/TypeStrong/ts-node/releases/tag/v10.6.0">v10.6.0</a>, which implements a workaround.</li>
</ul>
</li>
<li>Our ESM loader is not installed.
<ul>
<li>Solution: Use <code>ts-node-esm</code>, <code>ts-node --esm</code>, or add <code>"ts-node": {"esm": true}</code> to your tsconfig.json.  <a href="#native-ecmascript-modules">Docs</a>
</li>
</ul>
</li>
<li>You have moved your project to ESM but still have a config file, such as <code>webpack.config.ts</code>, which must be executed as CommonJS 
<ul>
<li>Solution: if supported by the relevant tool, rename your config file to <code>.cts</code>
</li>
<li>Solution: Configure a module type override. <a href="#module-type-overrides">Docs</a>
</li>
</ul>
</li>
</ul>
<h2>
<a id="user-content-missing-types" class="anchor" href="#missing-types" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Missing Types</h2>
<p>ts-node does <em>not</em> eagerly load <code>files</code>, <code>include</code> or <code>exclude</code> by default. This is because a large majority of projects do not use all of the files in a project directory (e.g. <code>Gulpfile.ts</code>, runtime vs tests) and parsing every file for types slows startup time. Instead, ts-node starts with the script file (e.g. <code>ts-node index.ts</code>) and TypeScript resolves dependencies based on imports and references.</p>
<p>Occasionally, this optimization leads to missing types. Fortunately, there are other ways to include them in typechecking.</p>
<p>For global definitions, you can use the <code>typeRoots</code> compiler option.  This requires that your type definitions be structured as type packages (not loose TypeScript definition files). More details on how this works can be found in the <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types" rel="nofollow">TypeScript Handbook</a>.</p>
<p>Example <code>tsconfig.json</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"typeRoots"</span> : <span class="pl-kos">[</span><span class="pl-s">"./node_modules/@types"</span><span class="pl-kos">,</span> <span class="pl-s">"./typings"</span><span class="pl-kos">]</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<p>Example project structure:</p>
<pre lang="text"><code>&lt;project_root&gt;/
-- tsconfig.json
-- typings/
  -- &lt;module_name&gt;/
    -- index.d.ts
</code></pre>
<p>Example module declaration file:</p>
<div class="highlight highlight-source-ts"><pre><span class="pl-k">declare</span> module <span class="pl-s">'&lt;module_name&gt;'</span> <span class="pl-kos">{</span>
    <span class="pl-c">// module definitions go here</span>
<span class="pl-kos">}</span></pre></div>
<p>For module definitions, you can use <a href="https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping" rel="nofollow"><code>paths</code></a>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"baseUrl"</span>: <span class="pl-s">"."</span><span class="pl-kos">,</span>
    <span class="pl-s">"paths"</span>: <span class="pl-kos">{</span>
      <span class="pl-s">"custom-module-type"</span>: <span class="pl-kos">[</span><span class="pl-s">"types/custom-module-type"</span><span class="pl-kos">]</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<p>Another option is <a href="https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html" rel="nofollow">triple-slash directives</a>. This may be helpful if you prefer not to change your <code>compilerOptions</code> or structure your type definitions for <code>typeRoots</code>. Below is an example of a triple-slash directive as a relative path within your project:</p>
<div class="highlight highlight-source-ts"><pre><span class="pl-c">/// &lt;reference path="./types/lib_greeter" /&gt;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-smi">Greeter</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">"lib_greeter"</span>
<span class="pl-k">const</span> <span class="pl-s1">g</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-smi">Greeter</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-s1">g</span><span class="pl-kos">.</span><span class="pl-en">sayHello</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>
<p>If none of the above work, and you <em>must</em> use <code>files</code>, <code>include</code>, or <code>exclude</code>, enable our <a href="#files"><code>files</code></a> option.</p>
<h2>
<a id="user-content-npx-yarn-dlx-and-node_modules" class="anchor" href="#npx-yarn-dlx-and-node_modules" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>npx, yarn dlx, and node_modules</h2>
<p>When executing TypeScript with <code>npx</code> or <code>yarn dlx</code>, the code resides within a temporary <code>node_modules</code> directory.</p>
<p>The contents of <code>node_modules</code> are ignored by default.  If execution fails, enable <a href="#skipignore"><code>skipIgnore</code></a>.</p>

<h1>
<a id="user-content-performance" class="anchor" href="#performance" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Performance</h1>
<p>These tricks will make ts-node faster.</p>
<h2>
<a id="user-content-skip-typechecking" class="anchor" href="#skip-typechecking" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Skip typechecking</h2>
<p>It is often better to typecheck as part of your tests or linting.  You can run <code>tsc --noEmit</code> to do this.  In these cases, ts-node can skip typechecking, making it much faster.</p>
<p>To skip typechecking in ts-node, do one of the following:</p>
<ul>
<li>Enable <a href="#swc">swc</a>
<ul>
<li>This is by far the fastest option</li>
</ul>
</li>
<li>Enable <a href="#transpileonly"><code>transpileOnly</code></a> to skip typechecking without swc</li>
</ul>
<h2>
<a id="user-content-with-typechecking" class="anchor" href="#with-typechecking" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>With typechecking</h2>
<p>If you absolutely must typecheck in ts-node:</p>
<ul>
<li>Avoid dynamic <code>require()</code> which may trigger repeated typechecking; prefer <code>import</code>
</li>
<li>Try with and without <code>--files</code>; one may be faster depending on your project</li>
<li>Check <code>tsc --showConfig</code>; make sure all executed files are included</li>
<li>Enable <a href="https://www.typescriptlang.org/tsconfig#skipLibCheck" rel="nofollow"><code>skipLibCheck</code></a>
</li>
<li>Set a <a href="https://www.typescriptlang.org/tsconfig#types" rel="nofollow"><code>types</code></a> array to avoid loading unnecessary <code>@types</code>
</li>
</ul>
<h1>
<a id="user-content-advanced" class="anchor" href="#advanced" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Advanced</h1>
<h2>
<a id="user-content-how-it-works" class="anchor" href="#how-it-works" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>How it works</h2>
<p>ts-node works by registering hooks for <code>.ts</code>, <code>.tsx</code>, <code>.js</code>, and/or <code>.jsx</code> extensions.</p>
<p>Vanilla <code>node</code> loads <code>.js</code> by reading code from disk and executing it.  Our hook runs in the middle, transforming code from TypeScript to JavaScript and passing the result to <code>node</code> for execution.  This transformation will respect your <code>tsconfig.json</code> as if you had compiled via <code>tsc</code>.</p>
<p>We also register a few other hooks to apply sourcemaps to stack traces and remap from <code>.js</code> imports to <code>.ts</code>.</p>
<h2>
<a id="user-content-ignored-files" class="anchor" href="#ignored-files" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Ignored files</h2>
<p>ts-node transforms certain files and ignores others.  We refer to this mechanism as "scoping."  There are various
options to configure scoping, so that ts-node transforms only the files in your project.</p>
<blockquote>
<p><strong>Warning:</strong></p>
<p>An ignored file can still be executed by node.js.  Ignoring a file means we do not transform it from TypeScript into JavaScript, but it does not prevent execution.</p>
<p>If a file requires transformation but is ignored, node may either fail to resolve it or attempt to execute it as vanilla JavaScript.  This may cause syntax errors or other failures, because node does not understand TypeScript type syntax nor bleeding-edge ECMAScript features.</p>
</blockquote>
<h3>
<a id="user-content-file-extensions" class="anchor" href="#file-extensions" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>File extensions</h3>
<p><code>.js</code> and <code>.jsx</code> are only transformed when <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options" rel="nofollow"><code>allowJs</code></a> is enabled.</p>
<p><code>.tsx</code> and <code>.jsx</code> are only transformed when <a href="https://www.typescriptlang.org/docs/handbook/jsx.html" rel="nofollow"><code>jsx</code></a> is enabled.</p>
<blockquote>
<p><strong>Warning:</strong></p>
<p>When ts-node is used with <code>allowJs</code>, <em>all</em> non-ignored JavaScript files are transformed by ts-node.</p>
</blockquote>
<h3>
<a id="user-content-skipping-node_modules" class="anchor" href="#skipping-node_modules" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Skipping <code>node_modules</code>
</h3>
<p>By default, ts-node avoids compiling files in <code>/node_modules/</code> for three reasons:</p>
<ol>
<li>Modules should always be published in a format node.js can consume</li>
<li>Transpiling the entire dependency tree will make your project slower</li>
<li>Differing behaviours between TypeScript and node.js (e.g. ES2015 modules) can result in a project that works until you decide to support a feature natively from node.js</li>
</ol>
<p>If you need to import uncompiled TypeScript in <code>node_modules</code>, use <a href="#skipignore"><code>--skipIgnore</code></a> or <a href="#skipignore"><code>TS_NODE_SKIP_IGNORE</code></a> to bypass this restriction.</p>
<h3>
<a id="user-content-skipping-pre-compiled-typescript" class="anchor" href="#skipping-pre-compiled-typescript" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Skipping pre-compiled TypeScript</h3>
<p>If a compiled JavaScript file with the same name as a TypeScript file already exists, the TypeScript file will be ignored.  ts-node will import the pre-compiled JavaScript.</p>
<p>To force ts-node to import the TypeScript source, not the precompiled JavaScript, use <a href="#prefertsexts"><code>--preferTsExts</code></a>.</p>
<h3>
<a id="user-content-scope-by-directory" class="anchor" href="#scope-by-directory" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Scope by directory</h3>
<p>Our <a href="#scope"><code>scope</code></a> and <a href="#scopedir"><code>scopeDir</code></a> options will limit transformation to files
within a directory.</p>
<h3>
<a id="user-content-ignore-by-regexp" class="anchor" href="#ignore-by-regexp" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Ignore by regexp</h3>
<p>Our <a href="#ignore"><code>ignore</code></a> option will ignore files matching one or more regular expressions.</p>
<h2>
<a id="user-content-paths-and-baseurl" class="anchor" href="#paths-and-baseurl" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>paths and baseUrl
</h2>
<p>You can use ts-node together with <a href="https://www.npmjs.com/package/tsconfig-paths" rel="nofollow">tsconfig-paths</a> to load modules according to the <code>paths</code> section in <code>tsconfig.json</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-c">// Do not forget to 'npm i -D tsconfig-paths'</span>
    <span class="pl-s">"require"</span>: <span class="pl-kos">[</span><span class="pl-s">"tsconfig-paths/register"</span><span class="pl-kos">]</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h3>
<a id="user-content-why-is-this-not-built-in-to-ts-node" class="anchor" href="#why-is-this-not-built-in-to-ts-node" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Why is this not built-in to ts-node?</h3>
<p>The official TypeScript Handbook explains the intended purpose for <code>"paths"</code> in <a href="https://www.typescriptlang.org/docs/handbook/module-resolution.html#additional-module-resolution-flags" rel="nofollow">"Additional module resolution flags"</a>.</p>
<blockquote>
<p>The TypeScript compiler has a set of additional flags to <em>inform</em> the compiler of transformations that are expected to happen to the sources to generate the final output.</p>
<p>It is important to note that the compiler will not perform any of these transformations; it just uses these pieces of information to guide the process of resolving a module import to its definition file.</p>
</blockquote>
<p>This means <code>"paths"</code> are intended to describe mappings that the build tool or runtime <em>already</em> performs, not to tell the build tool or
runtime how to resolve modules.  In other words, they intend us to write our imports in a way <code>node</code> already understands.  For this reason, ts-node does not modify <code>node</code>'s module resolution behavior to implement <code>"paths"</code> mappings.</p>
<h2>
<a id="user-content-third-party-compilers" class="anchor" href="#third-party-compilers" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Third-party compilers</h2>
<p>Some projects require a patched typescript compiler which adds additional features.  For example, <a href="https://github.com/cevek/ttypescript/tree/master/packages/ttypescript"><code>ttypescript</code></a> and <a href="https://github.com/nonara/ts-patch#readme"><code>ts-patch</code></a>
add the ability to configure custom transformers.  These are drop-in replacements for the vanilla <code>typescript</code> module and
implement the same API.</p>
<p>For example, to use <code>ttypescript</code> and <code>ts-transformer-keys</code>, add this to your <code>tsconfig.json</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-c">// This can be omitted when using ts-patch</span>
    <span class="pl-s">"compiler"</span>: <span class="pl-s">"ttypescript"</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-c">// plugin configuration is the same for both ts-patch and ttypescript</span>
    <span class="pl-s">"plugins"</span>: <span class="pl-kos">[</span>
      <span class="pl-kos">{</span> <span class="pl-s">"transform"</span>: <span class="pl-s">"ts-transformer-keys/transformer"</span> <span class="pl-kos">}</span>
    <span class="pl-kos">]</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h2>
<a id="user-content-transpilers" class="anchor" href="#transpilers" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Transpilers</h2>
<p>ts-node supports third-party transpilers as plugins.  Transpilers such as swc can transform TypeScript into JavaScript
much faster than the TypeScript compiler.  You will still benefit from ts-node's automatic <code>tsconfig.json</code> discovery,
sourcemap support, and global ts-node CLI. Plugins automatically derive an appropriate configuration from your existing
<code>tsconfig.json</code> which simplifies project boilerplate.</p>
<blockquote>
<p><strong>What is the difference between a compiler and a transpiler?</strong></p>
<p>For our purposes, a compiler implements TypeScript's API and can perform typechecking.
A third-party transpiler does not.  Both transform TypeScript into JavaScript.</p>
</blockquote>
<h3>
<a id="user-content-third-party-plugins" class="anchor" href="#third-party-plugins" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Third-party plugins</h3>
<p>The <code>transpiler</code> option allows using third-party transpiler plugins with ts-node.  <code>transpiler</code> must be given the
name of a module which can be <code>require()</code>d.  The built-in <code>swc</code> plugin is exposed as <code>ts-node/transpilers/swc</code>.</p>
<p>For example, to use a hypothetical "@cspotcode/fast-ts-compiler", first install it into your project: <code>npm install @cspotcode/fast-ts-compiler</code></p>
<p>Then add the following to your tsconfig:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"transpileOnly"</span>: <span class="pl-c1">true</span><span class="pl-kos">,</span>
    <span class="pl-s">"transpiler"</span>: <span class="pl-s">"@cspotcode/fast-ts-compiler"</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h3>
<a id="user-content-write-your-own-plugin" class="anchor" href="#write-your-own-plugin" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Write your own plugin</h3>
<p>To write your own transpiler plugin, check our <a href="https://typestrong.org/ts-node/api/interfaces/TranspilerModule.html" rel="nofollow">API docs</a>.</p>
<p>Plugins are <code>require()</code>d by ts-node, so they can be a local script or a node module published to npm.  The module must
export a <code>create</code> function described by our
<a href="https://typestrong.org/ts-node/api/interfaces/TranspilerModule.html" rel="nofollow"><code>TranspilerModule</code></a> interface.  <code>create</code> is
invoked by ts-node at startup to create one or more transpiler instances.  The instances are used to transform
TypeScript into JavaScript.</p>
<p>For a working example, check out out our bundled swc plugin: <a href="https://github.com/TypeStrong/ts-node/blob/main/src/transpilers/swc.ts">https://github.com/TypeStrong/ts-node/blob/main/src/transpilers/swc.ts</a></p>
<h2>
<a id="user-content-module-type-overrides" class="anchor" href="#module-type-overrides" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Module type overrides</h2>
<blockquote>
<p>Wherever possible, it is recommended to use TypeScript's <a href="https://www.typescriptlang.org/docs/handbook/esm-node.html" rel="nofollow"><code>NodeNext</code> or <code>Node16</code> mode</a> instead of the options described
in this section.  Setting <code>"module": "NodeNext"</code> and using the <code>.cts</code> file extension should work well for most projects.</p>
</blockquote>
<p>When deciding how a file should be compiled and executed -- as either CommonJS or native ECMAScript module -- ts-node matches
<code>node</code> and <code>tsc</code> behavior.  This means TypeScript files are transformed according to your <code>tsconfig.json</code> <code>"module"</code>
option and executed according to node's rules for the <code>package.json</code> <code>"type"</code> field.  Set <code>"module": "NodeNext"</code> and everything should work.</p>
<p>In rare cases, you may need to override this behavior for some files.  For example, some tools read a <code>name-of-tool.config.ts</code>
and require that file to execute as CommonJS.  If you have <code>package.json</code> configured with <code>"type": "module"</code> and <code>tsconfig.json</code> with
<code>"module": "esnext"</code>, the config is native ECMAScript by default and will raise an error.  You will need to force the config and
any supporting scripts to execute as CommonJS.</p>
<p>In these situations, our <code>moduleTypes</code> option can override certain files to be
CommonJS or ESM.  Similar overriding is possible by using <code>.mts</code>, <code>.cts</code>, <code>.cjs</code> and <code>.mjs</code> file extensions.
<code>moduleTypes</code> achieves the same effect for <code>.ts</code> and <code>.js</code> files, and <em>also</em> overrides your <code>tsconfig.json</code> <code>"module"</code>
config appropriately.</p>
<p>The following example tells ts-node to execute a webpack config as CommonJS:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ts-node"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"transpileOnly"</span>: <span class="pl-c1">true</span><span class="pl-kos">,</span>
    <span class="pl-s">"moduleTypes"</span>: <span class="pl-kos">{</span>
      <span class="pl-s">"webpack.config.ts"</span>: <span class="pl-s">"cjs"</span><span class="pl-kos">,</span>
      <span class="pl-c">// Globs are also supported with the same behavior as tsconfig "include"</span>
      <span class="pl-s">"webpack-config-scripts/**/*"</span>: <span class="pl-s">"cjs"</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-s">"compilerOptions"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"module"</span>: <span class="pl-s">"es2020"</span><span class="pl-kos">,</span>
    <span class="pl-s">"target"</span>: <span class="pl-s">"es2020"</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<p>Each key is a glob pattern with the same syntax as tsconfig's <code>"include"</code> array.
When multiple patterns match the same file, the last pattern takes precedence.</p>
<ul>
<li>
<code>cjs</code> overrides matches files to compile and execute as CommonJS.</li>
<li>
<code>esm</code> overrides matches files to compile and execute as native ECMAScript modules.</li>
<li>
<code>package</code> resets either of the above to default behavior, which obeys <code>package.json</code> <code>"type"</code> and <code>tsconfig.json</code> <code>"module"</code> options.</li>
</ul>
<h3>
<a id="user-content-caveats" class="anchor" href="#caveats" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Caveats</h3>
<p>Files with an overridden module type are transformed with the same limitations as <a href="https://www.typescriptlang.org/tsconfig#isolatedModules" rel="nofollow"><code>isolatedModules</code></a>.  This will only affect rare cases such as using <code>const enum</code>s with <a href="https://www.typescriptlang.org/tsconfig#preserveConstEnums" rel="nofollow"><code>preserveConstEnums</code></a> disabled.</p>
<p>This feature is meant to facilitate scenarios where normal <code>compilerOptions</code> and <code>package.json</code> configuration is not possible.  For example, a <code>webpack.config.ts</code> cannot be given its own <code>package.json</code> to override <code>"type"</code>.  Wherever possible you should favor using traditional <code>package.json</code> and <code>tsconfig.json</code> configurations.</p>
<h2>
<a id="user-content-api" class="anchor" href="#api" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>API</h2>
<p>ts-node's complete API is documented here: <a href="https://typestrong.org/ts-node/api/" rel="nofollow">API Docs</a></p>
<p>Here are a few highlights of what you can accomplish:</p>
<ul>
<li>
<a href="https://typestrong.org/ts-node/api/index.html#create" rel="nofollow"><code>create()</code></a> creates ts-node's compiler service without
registering any hooks.</li>
<li>
<a href="https://typestrong.org/ts-node/api/index.html#createRepl" rel="nofollow"><code>createRepl()</code></a> creates an instance of our REPL service, so
you can create your own TypeScript-powered REPLs.</li>
<li>
<a href="https://typestrong.org/ts-node/api/index.html#createEsmHooks" rel="nofollow"><code>createEsmHooks()</code></a> creates our ESM loader hooks,
suitable for composing with other loaders or augmenting with additional features.</li>
</ul>
<h1>
<a id="user-content-recipes" class="anchor" href="#recipes" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Recipes</h1>
<h2>
<a id="user-content-watching-and-restarting" class="anchor" href="#watching-and-restarting" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Watching and restarting</h2>
<p>ts-node focuses on adding first-class TypeScript support to node.  Watching files and code reloads are out of scope for the project.</p>
<p>If you want to restart the <code>ts-node</code> process on file change, existing node.js tools such as <a href="https://github.com/remy/nodemon">nodemon</a>, <a href="https://github.com/Qard/onchange">onchange</a> and <a href="https://github.com/fgnass/node-dev">node-dev</a> work.</p>
<p>There's also <a href="https://github.com/whitecolor/ts-node-dev"><code>ts-node-dev</code></a>, a modified version of <a href="https://github.com/fgnass/node-dev"><code>node-dev</code></a> using <code>ts-node</code> for compilation that will restart the process on file change. Note that <code>ts-node-dev</code> is incompatible with our native ESM loader.</p>
<h2>
<a id="user-content-ava" class="anchor" href="#ava" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>AVA</h2>
<p>Assuming you are configuring AVA via your <code>package.json</code>, add one of the following configurations.</p>
<h3>
<a id="user-content-commonjs-1" class="anchor" href="#commonjs-1" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>CommonJS</h3>
<p>Use this configuration if your <code>package.json</code> does not have <code>"type": "module"</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ava"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"extensions"</span>: <span class="pl-kos">[</span>
      <span class="pl-s">"ts"</span>
    <span class="pl-kos">]</span><span class="pl-kos">,</span>
    <span class="pl-s">"require"</span>: <span class="pl-kos">[</span>
      <span class="pl-s">"ts-node/register"</span>
    <span class="pl-kos">]</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h3>
<a id="user-content-native-ecmascript-modules-1" class="anchor" href="#native-ecmascript-modules-1" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Native ECMAScript modules</h3>
<p>This configuration is necessary if your <code>package.json</code> has <code>"type": "module"</code>.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-s">"ava"</span>: <span class="pl-kos">{</span>
    <span class="pl-s">"extensions"</span>: <span class="pl-kos">{</span>
      <span class="pl-s">"ts"</span>: <span class="pl-s">"module"</span>
    <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-s">"nonSemVerExperiments"</span>: <span class="pl-kos">{</span>
      <span class="pl-s">"configurableModuleFormat"</span>: <span class="pl-c1">true</span>
    <span class="pl-kos">}</span><span class="pl-kos">,</span>
    <span class="pl-s">"nodeArguments"</span>: <span class="pl-kos">[</span>
      <span class="pl-s">"--loader=ts-node/esm"</span>
    <span class="pl-kos">]</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span></pre></div>
<h2>
<a id="user-content-gulp" class="anchor" href="#gulp" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Gulp</h2>
<p>ts-node support is built-in to gulp.</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> Create a 'gulpfile.ts' and run 'gulp'.</span>
gulp</pre></div>
<p>See also: <a href="https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#transpilation" rel="nofollow">https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#transpilation</a></p>
<h2>
<a id="user-content-intellij-and-webstorm" class="anchor" href="#intellij-and-webstorm" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>IntelliJ and Webstorm</h2>
<p>Create a new Node.js configuration and add <code>-r ts-node/register</code> to "Node parameters."</p>
<p><strong>Note:</strong> If you are using the <code>--project &lt;tsconfig.json&gt;</code> command line argument as per the <a href="#configuration">Configuration Options</a>, and want to apply this same behavior when launching in IntelliJ, specify under "Environment Variables": <code>TS_NODE_PROJECT=&lt;tsconfig.json&gt;</code>.</p>
<h2>
<a id="user-content-mocha" class="anchor" href="#mocha" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mocha</h2>
<h3>
<a id="user-content-mocha-7-and-newer" class="anchor" href="#mocha-7-and-newer" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mocha 7 and newer</h3>
<div class="highlight highlight-source-shell"><pre>mocha --require ts-node/register --extensions ts,tsx --watch --watch-files src <span class="pl-s"><span class="pl-pds">'</span>tests/**/*.{ts,tsx}<span class="pl-pds">'</span></span> [...args]</pre></div>
<p>Or specify options via your mocha config file.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
  <span class="pl-c">// Specify "require" for CommonJS</span>
  <span class="pl-s">"require"</span>: <span class="pl-s">"ts-node/register"</span><span class="pl-kos">,</span>
  <span class="pl-c">// Specify "loader" for native ESM</span>
  <span class="pl-s">"loader"</span>: <span class="pl-s">"ts-node/esm"</span><span class="pl-kos">,</span>
  <span class="pl-s">"extensions"</span>: <span class="pl-kos">[</span><span class="pl-s">"ts"</span><span class="pl-kos">,</span> <span class="pl-s">"tsx"</span><span class="pl-kos">]</span><span class="pl-kos">,</span>
  <span class="pl-s">"spec"</span>: <span class="pl-kos">[</span>
    <span class="pl-s">"tests/**/*.spec.*"</span>
  <span class="pl-kos">]</span><span class="pl-kos">,</span>
  <span class="pl-s">"watch-files"</span>: <span class="pl-kos">[</span>
    <span class="pl-s">"src"</span>
  <span class="pl-kos">]</span>
<span class="pl-kos">}</span></pre></div>
<p>See also: <a href="https://mochajs.org/#configuring-mocha-nodejs" rel="nofollow">https://mochajs.org/#configuring-mocha-nodejs</a></p>
<h3>
<a id="user-content-mocha-6" class="anchor" href="#mocha-6" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mocha &lt;=6</h3>
<div class="highlight highlight-source-shell"><pre>mocha --require ts-node/register --watch-extensions ts,tsx <span class="pl-s"><span class="pl-pds">"</span>test/**/*.{ts,tsx}<span class="pl-pds">"</span></span> [...args]</pre></div>
<p><strong>Note:</strong> <code>--watch-extensions</code> is only used in <code>--watch</code> mode.</p>
<h2>
<a id="user-content-tape" class="anchor" href="#tape" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Tape</h2>
<div class="highlight highlight-source-shell"><pre>ts-node node_modules/tape/bin/tape [...args]</pre></div>
<h2>
<a id="user-content-visual-studio-code" class="anchor" href="#visual-studio-code" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Visual Studio Code</h2>
<p>Create a new Node.js debug configuration, add <code>-r ts-node/register</code> to node args and move the <code>program</code> to the <code>args</code> list (so VS Code doesn't look for <code>outFiles</code>).</p>
<div class="highlight highlight-source-js"><pre><span class="pl-kos">{</span>
    <span class="pl-s">"configurations"</span>: <span class="pl-kos">[</span><span class="pl-kos">{</span>
        <span class="pl-s">"type"</span>: <span class="pl-s">"node"</span><span class="pl-kos">,</span>
        <span class="pl-s">"request"</span>: <span class="pl-s">"launch"</span><span class="pl-kos">,</span>
        <span class="pl-s">"name"</span>: <span class="pl-s">"Launch Program"</span><span class="pl-kos">,</span>
        <span class="pl-s">"runtimeArgs"</span>: <span class="pl-kos">[</span>
            <span class="pl-s">"-r"</span><span class="pl-kos">,</span>
            <span class="pl-s">"ts-node/register"</span>
        <span class="pl-kos">]</span><span class="pl-kos">,</span>
        <span class="pl-s">"args"</span>: <span class="pl-kos">[</span>
            <span class="pl-s">"workspaceFolder/src/index.ts"</span>
        <span class="pl-kos">]</span>
    <span class="pl-kos">}</span><span class="pl-kos">]</span><span class="pl-kos">,</span>
<span class="pl-kos">}</span></pre></div>
<p><strong>Note:</strong> If you are using the <code>--project &lt;tsconfig.json&gt;</code> command line argument as per the <a href="#configuration">Configuration Options</a>, and want to apply this same behavior when launching in VS Code, add an "env" key into the launch configuration: <code>"env": { "TS_NODE_PROJECT": "&lt;tsconfig.json&gt;" }</code>.</p>
<h2>
<a id="user-content-other" class="anchor" href="#other" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Other</h2>
<p>In many cases, setting <a href="https://nodejs.org/api/cli.html#cli_node_options_options" rel="nofollow"><code>NODE_OPTIONS</code></a> will enable <code>ts-node</code> within other node tools, child processes, and worker threads.</p>
<div class="highlight highlight-source-shell"><pre>NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>-r ts-node/register<span class="pl-pds">"</span></span></pre></div>
<p>Or, if you require native ESM support:</p>
<div class="highlight highlight-source-shell"><pre>NODE_OPTIONS=<span class="pl-s"><span class="pl-pds">"</span>--loader ts-node/esm<span class="pl-pds">"</span></span></pre></div>
<p>This tells any node processes which receive this environment variable to install <code>ts-node</code>'s hooks before executing other code.</p>
<h1>
<a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>License</h1>
<p>ts-node is licensed under the MIT license.  <a href="https://github.com/TypeStrong/ts-node/blob/main/LICENSE">MIT</a></p>
<p>ts-node includes source code from Node.js which is licensed under the MIT license.  <a href="https://raw.githubusercontent.com/nodejs/node/master/LICENSE" rel="nofollow">Node.js license information</a></p>
<p>ts-node includes source code from the TypeScript compiler which is licensed under the Apache License 2.0.  <a href="https://github.com/microsoft/TypeScript/blob/master/LICENSE.txt">TypeScript license information</a></p>
</div></article>
`
