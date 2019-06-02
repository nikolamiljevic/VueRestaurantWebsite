<template>
<div>
  <comp-header/>
    <div>
      <comp-featured/>
      <comp-menu/>
    </div>
  <comp-footer/>
</div>
</template>

<script>

import compHeader from './components/Header-footer/Header.vue';
import compFooter from './components/Header-footer/Footer.vue';
import compFeatured from './components/Featured/Index.vue';
import compMenu from './components/Menu/Index.vue';

export default{
  components:{
    compHeader,
    compFooter,
    compFeatured,
    compMenu
  }
}
</script>

<style>
@import './assets/style.css';
</style>
