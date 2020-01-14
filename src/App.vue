<template>
 <div id="app">
    <section class="wrapper fade-out" :class="{ out: wrapperOut }">
      <img alt="Vue logo" src="./assets/logo.svg" class="logo">
    </section>
    <section class="content fade-in" :class="{ in: contentIn }">
      <img class="logo" src="./assets/logo.png">

    <!-- Produccion -->
    <div class="section">

      <p class="title">Producción</p>

      <p class="title is-5">Tractores</p>
      <div class="box">
        <div class="row">
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/tractor.png" style="height: 100%; opacity: .5;">
            </figure>
            <p class="title">{{ trucks.parked.value }}</p>
            <p class="subtitle is-6">Aparcados</p>
          </div>
          <div class="column">
            <figure class="image is-64x64" style="opacity: .5;">
              <img src="./assets/tractor2.png">
            </figure>
            <p class="title">{{ trucks.used.value }}</p>
            <p class="subtitle is-6">En campo</p>
          </div>
        </div>
      </div>

      <p class="title is-5">Campo</p>
      <div class="box">
        <div class="row">
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/siembra.png" style="opacity: .5;">
            </figure>
            <p class="title">12</p>
            <p class="title is-6">hectáreas</p>
            <p class="subtitle is-6">Siembra</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cosecha.png" style="opacity: .5;">
            </figure>
            <p class="title">15.5</p>
            <p class="title is-6">toneladas</p>
            <p class="subtitle is-6">Cosecha</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Crianza -->
    <div class="section">

      <p class="title">Crianza</p>

      <p class="title is-5">Cerdos</p>
      <div class="box">

        <div class="row">
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cerdo.png">
            </figure>
            <p class="title is-5">1200</p>
            <p class="subtitle is-7">Granja</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cerdo2.png">
            </figure>
            <p class="title is-5">750</p>
            <p class="subtitle is-7">Procesados</p>
          </div>
          <div class="column">
            <figure class="image is-64x64">
              <img src="./assets/cerdo3.png">
            </figure>
            <p class="title is-5">12500</p>
            <p class="subtitle is-7">Empacados</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Ventas -->
    <div class="section">
      <p class="title">Puntos de Venta</p>
      <div class="box">
        <div class="row">
          <div class="column">
            <!-- <p class="title is-6">$ 1.200.134 M</p> -->
            <p class="title is-4">$ 1.200 M</p>
            <p class="subtitle is-6">Antioquia</p>
          </div>
          <div class="column">
            <!-- <p class="title is-6">$ 2.340.237 M</p> -->
            <p class="title is-4">$ 2.340 M</p>
            <p class="subtitle is-6">Santander</p>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <!-- <p class="title is-6">$ 3.720.405 M</p> -->
            <p class="title is-4">$ 3.720 M</p>
            <p class="subtitle is-6">Cundinamarca</p>
          </div>
          <div class="column">
            <!-- <p class="title is-6">$ 708.345 M</p> -->
            <p class="title is-4">$ 708 M</p>
            <p class="subtitle is-6">Casanare</p>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <!-- <p class="title is-6">$ 1.308.065 M</p> -->
            <p class="title is-4">$ 7,968 M</p>
            <p class="subtitle is-6">Total</p>
          </div>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <a href="https://wigilabs.com/">WigiLabs</a> ♡ <a href="https://newrelic.com/">New Relic</a>
        </p>
      </div>
    </footer>

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
           trucks: {
        parked: { value: 20,  min: 0, default:20 },
        used:   { value: 120, max: 140, default:120 },
      },
      field: {
        sowing:  {value: 12},
        harvest: {value: 15.5},
      },
      pork: {
        farm:      {value: 1200},
        processed: {value: 750},
        packed:    {value: 12500},
      },
      sales: {
        a: {value: 1200 },
        b: {value: 2340 },
        c: {value: 3720 },
        d: {value: 708 },
      }
    };
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
    //main page and content
#app
    max-width 700px
    margin auto

  .logo
    width: 72px;
    margin: 24px auto 0;
    display: table;

  .row
    display flex
    .column
      text-align center
      .image
        margin auto
</style>
