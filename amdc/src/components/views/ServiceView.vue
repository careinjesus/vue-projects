<template>
  <StaticTemplate>
    <template #heading>Our Service</template>
    <template #default>
      Services Provided by WMADCC
    </template>
  </StaticTemplate>
</template>

<script setup>
import StaticTemplate from '../StaticTemplate.vue'
</script>

<!--
<template>
  <div class="TheService">

   -- refreshPage; --
    <div>
      <div class="Services-header">Services Provided by WMADCC</div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

let bodyName = inject('bodyName', 'TheService.vue')
/*
export default {
  name: 'ServicesStyle',
}
  */
/*
const refreshPage = () => {
  location.reload() // Reloads the current page
} */
</script>

<style scoped>
.TheService {
  .services-header {
    display: flex;
    margin-top: 100px;
    margin-left: 200px;
    text-align: center;
    color: darkblue;
    font-size: 30px;
    line-height: 20px;
  }
}
</style>
-->
