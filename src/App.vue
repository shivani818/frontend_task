<template>
  <Navbar/>
  <Section_list/>
  <Offer/>
  <Product_list/>
  <Feature_list/>
  <NewProduct/>
  <BestSell/>
  <Categories/>
  <Sale/>
  <Footer/>
  
</template>

<script>

import Navbar from './components/Navbar.vue';
import Section_list from './components/Sections_list.vue';
import Offer from './components/Offer.vue';
import Product_list from './components/Product_list.vue';
import Feature_list from './components/Feature_list.vue';
import BestSell from './components/BestSell.vue';
import NewProduct from './components/Newproduct.vue';
import Categories from './components/Categories.vue';
import Sale from './components/sale.vue';
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components:{
    Navbar,
    Section_list,
    Offer,
    Product_list,
    Feature_list,
    BestSell,
    NewProduct,
    Categories,
    Sale,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
