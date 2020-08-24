<template>
  <div>
    <Header></Header>
    <Hero></Hero>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Content from "./Content.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Hero from "./Hero.vue";

export default {
  data() {
    return {
      message: "Middleman is Running",
    };
  },
  components: { Content, Footer, Header, Hero },
};
</script>