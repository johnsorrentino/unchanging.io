<template>
  <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <Aside></Aside>
          </div>
          <div class="column is-9">
            <Content></Content>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Aside from "./Aside.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
import Hero from "./Hero.vue";
import Navbar from "./Navbar.vue";

export default {
  data() {
    return {
      message: "Middleman is Running",
    };
  },
  components: { Aside, Content, Footer, Hero, Navbar },
};
</script>