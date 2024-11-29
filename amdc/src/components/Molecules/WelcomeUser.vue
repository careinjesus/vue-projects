
<!-- User Login or Welcome display-->

<template>



  <span class="WelcomeUser">


        Welcome {{ username }}

    </span>

</template>

<script setup>
import { ref } from 'vue'

const username = ref('Daniel')
</script>

<style lang="scss" scoped>
.WelcomeUser {
   border: 1px solid red;
   float: right;
  /*
  width: 100%;
  min-width: 100%;
  display: flex;

  font-size: 16px;
  justify-content: space-between;
*/
}
</style>
