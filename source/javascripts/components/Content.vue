<template>
  <div class="content">
    <h2>Getting Started</h2>

    <h3 id="installation">Installation</h3>

    <p>Unchanging requires Ruby 2.6.6, Bundler, and Yarn.</p>

    <pre><code>bundle install</code></pre>
    <pre><code>yarn install</code></pre>

    <h3 id="middleman-server">Middleman Server</h3>

    <p>Running the Middleman server command will start the web-server and the webpack server. The middleman-livereload gem will automatically refresh the browser on save.</p>

    <pre><code>bundle exec middleman server</code></pre>

    <h3 id="customization">Customization</h3>

    <p>The source folder holds both the Middleman rendered assets and the Vue components rendered by webpack. Unchanging is setup for a single webpack entry point, but can be reconfigured for multiple entry points for more complex applications.</p>

    <h2>Deploying</h2>

    <h3 id="middleman-build">Middleman Build</h3>

    <pre><code>bundle exec middleman build</code></pre>

    <h2>Configuration</h2>

    <p>
      We've configured some helpers to
      <code>start</code> and
      <code>build</code> our webpack modules.
    </p>

    <pre><code>// webpack.config.js
"scripts": {
  "start": "./node_modules/webpack/bin/webpack.js --watch -d",
  "build": "./node_modules/webpack/bin/webpack.js --bail"
},</code></pre>

    <p>
      To intergate webpack an Middleman external pipeline is used. Middleman will automatically run the
      <code>start</code> and
      <code>build</code> commands for us. The built modules will be output in
      <code>.tmp/dist</code>.
    </p>

    <pre><code>activate :external_pipeline,
name: :webpack,
command: build? ? 'yarn run build' : 'yarn run start',
source: ".tmp/dist",
latency: 1</code></pre>
  </div>
</template>