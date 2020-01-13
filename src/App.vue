<template>
  <div id="app">
    <section class="wrapper fade-out" :class="{ out: wrapperOut }">
      <img alt="Vue logo" src="./assets/logo.svg" class="logo">
    </section>
    <section class="content fade-in" :class="{ in: contentIn }">
      todo el contenido
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      hello: 'world!',
      wrapperOut: false,
      contentIn: false,
    }
  },

  created() {
    setTimeout(() => {this.wrapperOut = true}, 1500)
    setTimeout(() => {this.contentIn = true}, 2000)
  }
};
</script>

<style lang="stylus">
  // reset
  body
    margin 0

  // general
  body
    background #F8FCF8
  .fade-out
    transition opacity .5s ease-in-out
    opacity 1
  .out
    opacity 0
  .fade-in
    transition opacity .5s ease-in-out
    opacity 0
  .in
    opacity 1

  // wrapper
  .wrapper
    height 100vh
    display flex
    .logo
      margin auto

  // content
  .content
    position absolute
    top 0
    width 100%
</style>
