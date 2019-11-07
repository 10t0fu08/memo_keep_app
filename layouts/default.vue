<template>
  <div class="default_wrap">
    <Header />
    <!-- <Footer /> -->
    <nuxt />
  </div>
</template>
<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  created: function() {
    this.$store.commit("init_memo");
  }
};
</script>

<style lang="scss">
.default_wrap {
}
</style>
