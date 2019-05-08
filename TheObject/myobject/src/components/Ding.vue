<template>
  <div class="Ding">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        name: "Ding",
      components: {Footer, Header}
    }
</script>

<style scoped>
  .Ding{
    width: 100%;
    height:100%;
    background: rgb(245,245,245);
    margin-top: 1.9rem;
  }
</style>
