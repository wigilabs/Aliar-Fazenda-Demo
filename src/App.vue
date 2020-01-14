<template>
 <div id="app">
    <section class="wrapper fade-out" :class="{ out: wrapperOut }">
      <img alt="Vue logo" src="./assets/logo.svg" class="logo">
    </section>
    <section class="content fade-in" :class="{ in: contentIn }">
       <md-card class="material-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Producción</div>
          <div class="md-subhead">Tractores</div>
        </md-card-header-text>
      </md-card-header>
             <md-card-media-actions>
        <md-card-actions>
            <md-card-media md-big>
  <img src="./assets/Unn7.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
              <p class="title">{{ trucks.parked.value }}</p>
            <p class="subtitle is-6">Aparcados</p>
            <md-card-media md-big>
  <img src="./assets/Unn11.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
      <p class="title">{{ trucks.used.value }}</p>
            <p class="subtitle is-6">En campo</p>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>
        <!--campo-->
         <md-card class="material-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-subhead">Campo</div>
        </md-card-header-text>
      </md-card-header>
             <md-card-media-actions>
        <md-card-actions>
            <md-card-media md-big>
  <img src="./assets/g1.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
              <p class="title">{{ fields.sowing.value }}</p>
            <p class="subtitle is-6">Hectáreas</p>
             <p class="subtitle is-6">Siembra</p>
            <md-card-media md-big>
  <img src="./assets/g2.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
      <p class="title">{{ fields.harvest.value }}</p>
                <p class="title is-6">toneladas</p>
            <p class="subtitle is-6">Cosecha</p>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>
    <!-- Crianza -->
              <md-card class="material-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Crianza</div>
          <div class="md-subhead">Cerdos</div>
        </md-card-header-text>
      </md-card-header>
             <md-card-media-actions>
        <md-card-actions>
            <md-card-media md-big>
  <img src="./assets/i1.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
              <p class="title">{{ pork.farm.value }}</p>
            <p class="subtitle is-6">Granja</p>
            <md-card-media md-big>
  <img src="./assets/i2.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
      <p class="title">{{ pork.processed.value }}</p>
                <p class="title is-6">Procesados</p>
            
              <md-card-media md-big>
  <img src="./assets/i3.svg" style="height: 100%; opacity: .5;">
        </md-card-media>
      <p class="title">{{ pork.packed.value }}</p>
                <p class="title is-6">Empacados</p>
          
        </md-card-actions>
      </md-card-media-actions>
    </md-card>
    <!-- Ventas -->
                      <md-card class="material-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Puntos de venta</div>
        </md-card-header-text>
      </md-card-header>
   <div class="box">
        <div class="row">
          <div class="column">
            <!-- <p class="title is-6">$ 1.200.134 M</p> -->
            <p class="title is-4">$ {{sales.a.value}} M</p>
            <p class="subtitle is-6">Antioquia</p>
          </div>
          <div class="column">
            <!-- <p class="title is-6">$ 2.340.237 M</p> -->
            <p class="title is-4">$  {{sales.b.value}} M</p>
            <p class="subtitle is-6">Santander</p>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <!-- <p class="title is-6">$ 3.720.405 M</p> -->
            <p class="title is-4">$  {{sales.c.value}} M</p>
            <p class="subtitle is-6">Cundinamarca</p>
          </div>
          <div class="column">
            <!-- <p class="title is-6">$ 708.345 M</p> -->
            <p class="title is-4">$  {{sales.d.value}} M</p>
            <p class="subtitle is-6">Casanare</p>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <!-- <p class="title is-6">$ 1.308.065 M</p> -->
            <p class="title is-4">$ {{total}} M</p>
            <p class="subtitle is-6">Total</p>
          </div>
        </div>
      </div>
    </md-card>
    <!-- Footer -->
    <footer class="footer">
      <div class="content has-text-centered">
        <!--<p>
          <a href="https://wigilabs.com/">WigiLabs</a> ♡ <a href="https://newrelic.com/">New Relic</a>
        </p>-->
      </div>
    </footer>

    </section>
  </div>
</template>

<script>
    import Clock from './Clock/Clock'
    import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// DARK THEME import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(VueMaterial)
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
      fields: {
        sowing:  {value: 12, min: 0, max:20, default:12},
        harvest: {value: 15.5, min:15, max:50, default:15.5},
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
    Clock.counter(this.trucks.parked, 3000, -1)
    Clock.counter(this.trucks.used, 5000, 1)
    let total = Clock.computed(this.sales.a,this.sales.b,this.sales.c,this.sales.d)
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
    max-width 98%
    margin 2%
.md-button .md-card-media img 
    width: 40px;
    float:left;
  .logo
    width: 72px;
    margin: 24px auto 0;
    display: table;
   .md-card {
       margin:0%;
       margin-right:5.6%;
   }
   p 
       color:#194F38;
       font-weight:800;
       font-size:15px;
       * {
           color:#194F38; 
       }
</style>
