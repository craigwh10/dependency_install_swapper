export const eslintplugin = `
<article> <div class="_6d9832ac pr4-ns pl0-ns ph1-m pr3-m pr2  markdown" id="readme"><div align="center">
  <a href="https://eslint.org/" rel="nofollow">
    <img height="150" src="https://camo.githubusercontent.com/6282884242879a55451da9977fb10603ceff6dbff9490c2e5921ff2b6f0567aa/68747470733a2f2f65736c696e742e6f72672f6173736574732f696d616765732f6c6f676f2f65736c696e742d6c6f676f2d636f6c6f722e737667" data-canonical-src="https://eslint.org/assets/images/logo/eslint-logo-color.svg" style="max-width: 100%;">
  </a>
  <a href="https://facebook.github.io/jest/" rel="nofollow">
    <img width="150" height="150" hspace="25" src="https://camo.githubusercontent.com/f2c80b28082b1568bf6ae3e4b999dcf6916e4f7ef611aa48efed85198ebe53a9/68747470733a2f2f6a6573746a732e696f2f696d672f6a6573742e706e67" data-canonical-src="https://jestjs.io/img/jest.png" style="max-width: 100%;">
  </a>
  <h1><a id="user-content-eslint-plugin-jest" class="anchor" aria-hidden="true" href="#eslint-plugin-jest"><span aria-hidden="true" class="octicon octicon-link"></span></a>eslint-plugin-jest</h1>
  <p>ESLint plugin for Jest</p>
</div>
<p><a href="https://github.com/jest-community/eslint-plugin-jest/actions"><img src="https://github.com/jest-community/eslint-plugin-jest/actions/workflows/nodejs.yml/badge.svg?branch=main" alt="Actions Status" style="max-width: 100%;"></a></p>
<h2><a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><span aria-hidden="true" class="octicon octicon-link"></span></a>Installation</h2>
<div class="highlight highlight-source-shell"><pre>yarn add --dev eslint eslint-plugin-jest</pre></div>
<p><strong>Note:</strong> If you installed ESLint globally then you must also install
<code>eslint-plugin-jest</code> globally.</p>
<h2><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><span aria-hidden="true" class="octicon octicon-link"></span></a>Usage</h2>
<p>Add <code>jest</code> to the plugins section of your <code>.eslintrc</code> configuration file. You
can omit the <code>eslint-plugin-</code> prefix:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"plugins"</span>: [<span class="pl-s"><span class="pl-pds">"</span>jest<span class="pl-pds">"</span></span>]
}</pre></div>
<p>Then configure the rules you want to use under the rules section.</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"rules"</span>: {
    <span class="pl-ent">"jest/no-disabled-tests"</span>: <span class="pl-s"><span class="pl-pds">"</span>warn<span class="pl-pds">"</span></span>,
    <span class="pl-ent">"jest/no-focused-tests"</span>: <span class="pl-s"><span class="pl-pds">"</span>error<span class="pl-pds">"</span></span>,
    <span class="pl-ent">"jest/no-identical-title"</span>: <span class="pl-s"><span class="pl-pds">"</span>error<span class="pl-pds">"</span></span>,
    <span class="pl-ent">"jest/prefer-to-have-length"</span>: <span class="pl-s"><span class="pl-pds">"</span>warn<span class="pl-pds">"</span></span>,
    <span class="pl-ent">"jest/valid-expect"</span>: <span class="pl-s"><span class="pl-pds">"</span>error<span class="pl-pds">"</span></span>
  }
}</pre></div>
<p>You can also tell ESLint about the environment variables provided by Jest by
doing:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"env"</span>: {
    <span class="pl-ent">"jest/globals"</span>: <span class="pl-c1">true</span>
  }
}</pre></div>
<p>This is included in all configs shared by this plugin, so can be omitted if
extending them.</p>
<h4><a id="user-content-aliased-jest-globals" class="anchor" aria-hidden="true" href="#aliased-jest-globals"><span aria-hidden="true" class="octicon octicon-link"></span></a>Aliased Jest globals</h4>
<p>You can tell this plugin about any global Jests you have aliased using the
<code>globalAliases</code> setting:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"settings"</span>: {
    <span class="pl-ent">"jest"</span>: {
      <span class="pl-ent">"globalAliases"</span>: {
        <span class="pl-ent">"describe"</span>: [<span class="pl-s"><span class="pl-pds">"</span>context<span class="pl-pds">"</span></span>],
        <span class="pl-ent">"fdescribe"</span>: [<span class="pl-s"><span class="pl-pds">"</span>fcontext<span class="pl-pds">"</span></span>],
        <span class="pl-ent">"xdescribe"</span>: [<span class="pl-s"><span class="pl-pds">"</span>xcontext<span class="pl-pds">"</span></span>]
      }
    }
  }
}</pre></div>
<h3><a id="user-content-running-rules-only-on-test-related-files" class="anchor" aria-hidden="true" href="#running-rules-only-on-test-related-files"><span aria-hidden="true" class="octicon octicon-link"></span></a>Running rules only on test-related files</h3>
<p>The rules provided by this plugin assume that the files they are checking are
test-related. This means it's generally not suitable to include them in your
top-level configuration as that applies to all files being linted which can
include source files.</p>
<p>You can use
<a href="https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work" rel="nofollow">overrides</a>
to have ESLint apply additional rules to specific files:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"extends"</span>: [<span class="pl-s"><span class="pl-pds">"</span>eslint:recommended<span class="pl-pds">"</span></span>],
  <span class="pl-ent">"overrides"</span>: [
    {
      <span class="pl-ent">"files"</span>: [<span class="pl-s"><span class="pl-pds">"</span>test/**<span class="pl-pds">"</span></span>],
      <span class="pl-ent">"plugins"</span>: [<span class="pl-s"><span class="pl-pds">"</span>jest<span class="pl-pds">"</span></span>],
      <span class="pl-ent">"extends"</span>: [<span class="pl-s"><span class="pl-pds">"</span>plugin:jest/recommended<span class="pl-pds">"</span></span>],
      <span class="pl-ent">"rules"</span>: { <span class="pl-ent">"jest/prefer-expect-assertions"</span>: <span class="pl-s"><span class="pl-pds">"</span>off<span class="pl-pds">"</span></span> }
    }
  ],
  <span class="pl-ent">"rules"</span>: {
    <span class="pl-ent">"indent"</span>: [<span class="pl-s"><span class="pl-pds">"</span>error<span class="pl-pds">"</span></span>, <span class="pl-c1">2</span>]
  }
}</pre></div>
<h3><a id="user-content-jest-version-setting" class="anchor" aria-hidden="true" href="#jest-version-setting"><span aria-hidden="true" class="octicon octicon-link"></span></a>Jest <code>version</code> setting</h3>
<p>The behaviour of some rules (specifically <a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-deprecated-functions.md"><code>no-deprecated-functions</code></a>) change
depending on the version of Jest being used.</p>
<p>By default, this plugin will attempt to determine to locate Jest using
<code>require.resolve</code>, meaning it will start looking in the closest <code>node_modules</code>
folder to the file being linted and work its way up.</p>
<p>Since we cache the automatically determined version, if you're linting
sub-folders that have different versions of Jest, you may find that the wrong
version of Jest is considered when linting. You can work around this by
providing the Jest version explicitly in nested ESLint configs:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"settings"</span>: {
    <span class="pl-ent">"jest"</span>: {
      <span class="pl-ent">"version"</span>: <span class="pl-c1">27</span>
    }
  }
}</pre></div>
<p>To avoid hard-coding a number, you can also fetch it from the installed version
of Jest if you use a JavaScript config file such as <code>.eslintrc.js</code>:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">module</span><span class="pl-kos">.</span><span class="pl-c1">exports</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span>
  <span class="pl-c1">settings</span>: <span class="pl-kos">{</span>
    <span class="pl-c1">jest</span>: <span class="pl-kos">{</span>
      <span class="pl-c1">version</span>: <span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'jest/package.json'</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">version</span><span class="pl-kos">,</span>
    <span class="pl-kos">}</span><span class="pl-kos">,</span>
  <span class="pl-kos">}</span><span class="pl-kos">,</span>
<span class="pl-kos">}</span><span class="pl-kos">;</span></pre></div>
<h2><a id="user-content-shareable-configurations" class="anchor" aria-hidden="true" href="#shareable-configurations"><span aria-hidden="true" class="octicon octicon-link"></span></a>Shareable configurations</h2>
<h3><a id="user-content-recommended" class="anchor" aria-hidden="true" href="#recommended"><span aria-hidden="true" class="octicon octicon-link"></span></a>Recommended</h3>
<p>This plugin exports a recommended configuration that enforces good testing
practices.</p>
<p>To enable this configuration use the <code>extends</code> property in your <code>.eslintrc</code>
config file:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"extends"</span>: [<span class="pl-s"><span class="pl-pds">"</span>plugin:jest/recommended<span class="pl-pds">"</span></span>]
}</pre></div>
<h3><a id="user-content-style" class="anchor" aria-hidden="true" href="#style"><span aria-hidden="true" class="octicon octicon-link"></span></a>Style</h3>
<p>This plugin also exports a configuration named <code>style</code>, which adds some
stylistic rules, such as <code>prefer-to-be-null</code>, which enforces usage of <code>toBeNull</code>
over <code>toBe(null)</code>.</p>
<p>To enable this configuration use the <code>extends</code> property in your <code>.eslintrc</code>
config file:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"extends"</span>: [<span class="pl-s"><span class="pl-pds">"</span>plugin:jest/style<span class="pl-pds">"</span></span>]
}</pre></div>
<p>See
<a href="https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files" rel="nofollow">ESLint documentation</a>
for more information about extending configuration files.</p>
<h3><a id="user-content-all" class="anchor" aria-hidden="true" href="#all"><span aria-hidden="true" class="octicon octicon-link"></span></a>All</h3>
<p>If you want to enable all rules instead of only some you can do so by adding the
<code>all</code> configuration to your <code>.eslintrc</code> config file:</p>
<div class="highlight highlight-source-json"><pre>{
  <span class="pl-ent">"extends"</span>: [<span class="pl-s"><span class="pl-pds">"</span>plugin:jest/all<span class="pl-pds">"</span></span>]
}</pre></div>
<p>While the <code>recommended</code> and <code>style</code> configurations only change in major versions
the <code>all</code> configuration may change in any release and is thus unsuited for
installations requiring long-term consistency.</p>
<h2><a id="user-content-rules" class="anchor" aria-hidden="true" href="#rules"><span aria-hidden="true" class="octicon octicon-link"></span></a>Rules</h2>

<p><g-emoji class="g-emoji" alias="briefcase" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bc.png">💼</g-emoji>
<a href="https://github.com/jest-community/eslint-plugin-jest/blob/main/README.md#shareable-configurations">Configurations</a>
enabled in.<br>
<g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji> <a href="https://github.com/jest-community/eslint-plugin-jest/blob/main/README.md#shareable-configurations">Configurations</a>
set to warn in.<br>
<g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji> Set in the <code>recommended</code>
<a href="https://github.com/jest-community/eslint-plugin-jest/blob/main/README.md#shareable-configurations">configuration</a>.<br>
<g-emoji class="g-emoji" alias="art" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png">🎨</g-emoji> Set in the <code>style</code> <a href="https://github.com/jest-community/eslint-plugin-jest/blob/main/README.md#shareable-configurations">configuration</a>.<br>
<g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji> Automatically fixable by the
<a href="https://eslint.org/docs/user-guide/command-line-interface#--fix" rel="nofollow"><code>--fix</code> CLI option</a>.<br>
<g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji> Manually fixable by <a href="https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions" rel="nofollow">editor suggestions</a>.<br>
<g-emoji class="g-emoji" alias="x" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png">❌</g-emoji> Deprecated.</p>
<table>
<thead>
<tr>
<th align="left">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
<th align="left">Description</th>
<th align="left"><g-emoji class="g-emoji" alias="briefcase" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bc.png">💼</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="x" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png">❌</g-emoji></th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/consistent-test-it.md">consistent-test-it</a></td>
<td align="left">Enforce <code>test</code> and <code>it</code> usage conventions</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/expect-expect.md">expect-expect</a></td>
<td align="left">Enforce assertion to be made in a test body</td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/max-expects.md">max-expects</a></td>
<td align="left">Enforces a maximum number assertion calls in a test body</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/max-nested-describe.md">max-nested-describe</a></td>
<td align="left">Enforces a maximum depth to nested describe calls</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-alias-methods.md">no-alias-methods</a></td>
<td align="left">Disallow alias methods</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"><g-emoji class="g-emoji" alias="art" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png">🎨</g-emoji></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-commented-out-tests.md">no-commented-out-tests</a></td>
<td align="left">Disallow commented out tests</td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-conditional-expect.md">no-conditional-expect</a></td>
<td align="left">Disallow calling <code>expect</code> conditionally</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-conditional-in-test.md">no-conditional-in-test</a></td>
<td align="left">Disallow conditional logic in tests</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-deprecated-functions.md">no-deprecated-functions</a></td>
<td align="left">Disallow use of deprecated functions</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-disabled-tests.md">no-disabled-tests</a></td>
<td align="left">Disallow disabled tests</td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-done-callback.md">no-done-callback</a></td>
<td align="left">Disallow using a callback in asynchronous tests and hooks</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-duplicate-hooks.md">no-duplicate-hooks</a></td>
<td align="left">Disallow duplicate setup and teardown hooks</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-export.md">no-export</a></td>
<td align="left">Disallow using <code>exports</code> in files containing tests</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-focused-tests.md">no-focused-tests</a></td>
<td align="left">Disallow focused tests</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-hooks.md">no-hooks</a></td>
<td align="left">Disallow setup and teardown hooks</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-identical-title.md">no-identical-title</a></td>
<td align="left">Disallow identical titles</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-if.md">no-if</a></td>
<td align="left">Disallow conditional logic</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="x" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png">❌</g-emoji></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-interpolation-in-snapshots.md">no-interpolation-in-snapshots</a></td>
<td align="left">Disallow string interpolation inside snapshots</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-jasmine-globals.md">no-jasmine-globals</a></td>
<td align="left">Disallow Jasmine globals</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-large-snapshots.md">no-large-snapshots</a></td>
<td align="left">Disallow large snapshots</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-mocks-import.md">no-mocks-import</a></td>
<td align="left">Disallow manually importing from <code>__mocks__</code>
</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-restricted-jest-methods.md">no-restricted-jest-methods</a></td>
<td align="left">Disallow specific <code>jest.</code> methods</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-restricted-matchers.md">no-restricted-matchers</a></td>
<td align="left">Disallow specific matchers &amp; modifiers</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-standalone-expect.md">no-standalone-expect</a></td>
<td align="left">Disallow using <code>expect</code> outside of <code>it</code> or <code>test</code> blocks</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-prefixes.md">no-test-prefixes</a></td>
<td align="left">Require using <code>.only</code> and <code>.skip</code> over <code>f</code> and <code>x</code>
</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-return-statement.md">no-test-return-statement</a></td>
<td align="left">Disallow explicitly returning from tests</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-untyped-mock-factory.md">no-untyped-mock-factory</a></td>
<td align="left">Disallow using <code>jest.mock()</code> factories without an explicit type parameter</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-called-with.md">prefer-called-with</a></td>
<td align="left">Suggest using <code>toBeCalledWith()</code> or <code>toHaveBeenCalledWith()</code>
</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-comparison-matcher.md">prefer-comparison-matcher</a></td>
<td align="left">Suggest using the built-in comparison matchers</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-each.md">prefer-each</a></td>
<td align="left">Prefer using <code>.each</code> rather than manual loops</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-equality-matcher.md">prefer-equality-matcher</a></td>
<td align="left">Suggest using the built-in equality matchers</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-assertions.md">prefer-expect-assertions</a></td>
<td align="left">Suggest using <code>expect.assertions()</code> OR <code>expect.hasAssertions()</code>
</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-expect-resolves.md">prefer-expect-resolves</a></td>
<td align="left">Prefer <code>await expect(...).resolves</code> over <code>expect(await ...)</code> syntax</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-hooks-in-order.md">prefer-hooks-in-order</a></td>
<td align="left">Prefer having hooks in a consistent order</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-hooks-on-top.md">prefer-hooks-on-top</a></td>
<td align="left">Suggest having hooks before any test cases</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-lowercase-title.md">prefer-lowercase-title</a></td>
<td align="left">Enforce lowercase test names</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-mock-promise-shorthand.md">prefer-mock-promise-shorthand</a></td>
<td align="left">Prefer mock resolved/rejected shorthands for promises</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-snapshot-hint.md">prefer-snapshot-hint</a></td>
<td align="left">Prefer including a hint with external snapshots</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-spy-on.md">prefer-spy-on</a></td>
<td align="left">Suggest using <code>jest.spyOn()</code>
</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-strict-equal.md">prefer-strict-equal</a></td>
<td align="left">Suggest using <code>toStrictEqual()</code>
</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-be.md">prefer-to-be</a></td>
<td align="left">Suggest using <code>toBe()</code> for primitive literals</td>
<td align="left"><g-emoji class="g-emoji" alias="art" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png">🎨</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-contain.md">prefer-to-contain</a></td>
<td align="left">Suggest using <code>toContain()</code>
</td>
<td align="left"><g-emoji class="g-emoji" alias="art" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png">🎨</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-have-length.md">prefer-to-have-length</a></td>
<td align="left">Suggest using <code>toHaveLength()</code>
</td>
<td align="left"><g-emoji class="g-emoji" alias="art" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png">🎨</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-todo.md">prefer-todo</a></td>
<td align="left">Suggest using <code>test.todo</code>
</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/require-hook.md">require-hook</a></td>
<td align="left">Require setup and teardown code to be within a hook</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/require-to-throw-message.md">require-to-throw-message</a></td>
<td align="left">Require a message for <code>toThrow()</code>
</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/require-top-level-describe.md">require-top-level-describe</a></td>
<td align="left">Require test cases and hooks to be inside a <code>describe</code> block</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-describe-callback.md">valid-describe-callback</a></td>
<td align="left">Enforce valid <code>describe()</code> callback</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect.md">valid-expect</a></td>
<td align="left">Enforce valid <code>expect()</code> usage</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-expect-in-promise.md">valid-expect-in-promise</a></td>
<td align="left">Require promises that have expectations in their chain to be valid</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/valid-title.md">valid-title</a></td>
<td align="left">Enforce valid titles</td>
<td align="left"><g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji></td>
<td align="left"></td>
<td align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></td>
<td align="left"></td>
<td align="left"></td>
</tr>
</tbody>
</table>
<h3><a id="user-content-requires-type-checking" class="anchor" aria-hidden="true" href="#requires-type-checking"><span aria-hidden="true" class="octicon octicon-link"></span></a>Requires Type Checking</h3>
<table>
<thead>
<tr>
<th align="left">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
<th align="left">Description</th>
<th align="left"><g-emoji class="g-emoji" alias="briefcase" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bc.png">💼</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="warning" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a0.png">⚠️</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="wrench" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f527.png">🔧</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji></th>
<th align="left"><g-emoji class="g-emoji" alias="x" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/274c.png">❌</g-emoji></th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><a href="https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/unbound-method.md">unbound-method</a></td>
<td align="left">Enforce unbound methods are called with their expected scope</td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
<td align="left"></td>
</tr>
</tbody>
</table>

<p>In order to use the rules powered by TypeScript type-checking, you must be using
<code>@typescript-eslint/parser</code> &amp; adjust your eslint config as outlined
<a href="https://typescript-eslint.io/linting/typed-linting" rel="nofollow">here</a>.</p>
<p>Note that unlike the type-checking rules in <code>@typescript-eslint/eslint-plugin</code>,
the rules here will fallback to doing nothing if type information is not
available, meaning it's safe to include them in shared configs that could be
used on JavaScript and TypeScript projects.</p>
<p>Also note that <code>unbound-method</code> depends on <code>@typescript-eslint/eslint-plugin</code>,
as it extends the original <code>unbound-method</code> rule from that plugin.</p>
<h2><a id="user-content-credit" class="anchor" aria-hidden="true" href="#credit"><span aria-hidden="true" class="octicon octicon-link"></span></a>Credit</h2>
<ul>
<li><a href="https://github.com/lo1tuma/eslint-plugin-mocha">eslint-plugin-mocha</a></li>
<li><a href="https://github.com/tlvince/eslint-plugin-jasmine">eslint-plugin-jasmine</a></li>
</ul>
<h2><a id="user-content-related-projects" class="anchor" aria-hidden="true" href="#related-projects"><span aria-hidden="true" class="octicon octicon-link"></span></a>Related Projects</h2>
<h3><a id="user-content-eslint-plugin-jest-extended" class="anchor" aria-hidden="true" href="#eslint-plugin-jest-extended"><span aria-hidden="true" class="octicon octicon-link"></span></a>eslint-plugin-jest-extended</h3>
<p>This is a sister plugin to <code>eslint-plugin-jest</code> that provides support for the
matchers provided by
<a href="https://github.com/jest-community/jest-extended"><code>jest-extended</code></a>.</p>
<p><a href="https://github.com/jest-community/eslint-plugin-jest-extended">https://github.com/jest-community/eslint-plugin-jest-extended</a></p>
<h3><a id="user-content-eslint-plugin-jest-formatting" class="anchor" aria-hidden="true" href="#eslint-plugin-jest-formatting"><span aria-hidden="true" class="octicon octicon-link"></span></a>eslint-plugin-jest-formatting</h3>
<p>This project aims to provide formatting rules (auto-fixable where possible) to
ensure consistency and readability in jest test suites.</p>
<p><a href="https://github.com/dangreenisrael/eslint-plugin-jest-formatting">https://github.com/dangreenisrael/eslint-plugin-jest-formatting</a></p>
<h3><a id="user-content-eslint-plugin-istanbul" class="anchor" aria-hidden="true" href="#eslint-plugin-istanbul"><span aria-hidden="true" class="octicon octicon-link"></span></a>eslint-plugin-istanbul</h3>
<p>A set of rules to enforce good practices for Istanbul, one of the code coverage
tools used by Jest.</p>
<p><a href="https://github.com/istanbuljs/eslint-plugin-istanbul">https://github.com/istanbuljs/eslint-plugin-istanbul</a></p>
</div></article>
`
