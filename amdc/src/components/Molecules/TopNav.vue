
<template>
  <span class="TopNav">

    <router-link :to="{ name: 'home' }" >home</router-link>
    <RouterLink :to="{ name: 'value' }">value</RouterLink>
    <router-link :to="{ name: 'service' }" >service</router-link>


<!--
<router-link :to="{ name: 'home' }">Home</router-link>
            <routerlink to="OurValue">Our Value</routerlink>
            <router-link to="ServiceView">Our Service</router-link>
            <a @click="navigateToPrivacy">Programmatic to privacy</a>

      <a href="#"> home</a>
      <a href="#"> our value</a>
      <a href="#"> our services</a>
      <a href="#"> nursing</a>
      <a href="#"> social service</a>
      <a href="#"> activities</a>
      <a href="#"> transportation</a>
      <a href="#"> meals</a>
-->
  </span>
</template>


<script>

import { useRouter } from 'vue-router';


/*
import TheButton  from '../atoms/TheButton.vue'
import '../../router/index.js';
import { ref, onBeforeMount } from 'vue';
import IconLeftArrow from '../icons/IconLeftArrow.vue'
import IconRightArrow from '../icons/IconRightArrow.vue'
import { useSidebarStore } from '../../stores/sidebar';
import { usePostsStore } from '../../stores/posts';
*/

const router = useRouter();

/*
const navigateToPrivacy = (event) => {
    event.preventDefault();
    console.log("Run a side effect");
    router.push("privacy");
}

onBeforeMount(() => {
    sidebarStore.loadSidebarFromLocalStorage();
});
*/
/*
export default {}
*/
</script>



<style lang="scss" scoped>
/* for universal selector - applies to every elements in the website */
/*
* {
  box-sizing: border-box;
  border: 1px solid rgb(98, 0, 255);
}
*/

.TopNav {
  font-size: 16px;

  /*
  width: 100%;
  min-width: 100%;
  display: flex;
  border: 3px solid red;

  background-color: burlywood;
  justify-content: space-between;

  grid-template-columns: none;

  a {
    font-size: 20px;
    line-height: 24px;
    margin-right: 8px;
    font-weight: bolder;
    align-items: left; - No effect
  }
  a:hover {
    font-size: 24px;
    background-color: #ddd;
    color: black;
  }
*/
/*
    align-items: center;
    text-align: center;
    position: relative;
    left: 50px;
*/

}
</style>
