<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

<!-- 20241127 before rounter
<template>
1
  <TheHeader />
2
  <component :is = "activeBody" ref = "bodyName" />
3
  {{bodyName}}
 4
  <TheFooter />
5
</template>


<script setup> -  "setup" needed to avoid export default
import { provide, ref, onMounted } from 'vue';

import TheHeader from './components/TheHeader.vue'

import HomeBody from './components/HomeBody.vue'
import TheService from './components/TheService.vue'
import TheFooter from './components/TheFooter.vue'

let bodyName = ref('HomeBody.vue') - Gloval variable for the mainbody identification
provide('bodyName', bodyName)
onMounted() {
  console.log('bodyName.value')
};



</script>


<style lang="scss" scoped>

/*
header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e70c0c;
  margin-top: 60px;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-column-start: 1;
  grid-column-end: 3;

  padding-bottom: 24px;
  border-bottom: solid 1px var(--color-border);

  .span {
    display: flex;
  }
  a {
    font-size: 16px;
    line-height: 24px;
    margin-right: 8px;
    font-weight: bolder;
  }
  .icon {
    width: 16px;
    height: 16px;
    fill: var(--color-input-mute);
    margin-right: 5px;
    cursor: pointer;
  }
}
  */
</style>
-->
