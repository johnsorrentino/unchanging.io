<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://unchanging.io">Unchaging</a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-warning" target="_blank" href="https://www.buymeacoffee.com/johnsorrentino">
                <span class="icon">☕</span>
                <strong>Buy me a coffee</strong>
              </a>
              <a class="button is-dark" target="_blank" href="https://github.com/johnsorrentino/unchanging.io">
                <span class="icon">❤️ </span>
                <strong>GitHub</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-brand a.navbar-item {
  font-size: 1.25em;
  font-weight: bold;
}
</style>