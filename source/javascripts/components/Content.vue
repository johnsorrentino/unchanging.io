<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h2>Installation</h2>

        <ul>
          <li>Ruby 2.6.6</li>
          <li>Middleman 4.3.8</li>
          <li>Webpack 4.44.1</li>
          <li>Vue.js 2.6.11</li>
          <li>Bulma 0.9.0</li>
        </ul>

        <pre><code>bundle install</code></pre>
        <pre><code>yarn install</code></pre>

        <h2>Running the Application</h2>

        <pre><code>bundle exec middleman server</code></pre>

        <h2>Building the Application</h2>

        <pre><code>bundle exec middleman build</code></pre>

        <h2>Configuration</h2>

        <p>We've configured some helpers to <code>start</code> and <code>build</code> our webpack modules.</p>

        <pre><code>// webpack.config.js
"scripts": {
  "start": "./node_modules/webpack/bin/webpack.js --watch -d",
  "build": "./node_modules/webpack/bin/webpack.js --bail"
},</code></pre>

        <p>To intergate webpack an Middleman external pipeline is used. Middleman will automatically run the <code>start</code> and <code>build</code> commands for us. The built modules will be output in <code>.tmp/dist</code>.</p>

        <pre><code>activate :external_pipeline,
name: :webpack,
command: build? ? 'yarn run build' : 'yarn run start',
source: ".tmp/dist",
latency: 1</code></pre>
      </div>
    </div>
  </section>
</template>