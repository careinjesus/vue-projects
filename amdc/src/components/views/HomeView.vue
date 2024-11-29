

<template>
 <StaticTemplate>
  <main>
    <div class="centerbackground-image">
      <div class="centertext-overlay">
        <h2>Day Program and Social Club For Seniors</h2>
        <p>We Provide Comfortable and Peaceful Environment</p>
        <p>- Social Interaction</p>
        <p>- Nutritious Meals</p>
        <p>- Recreation and Activities</p>
        <p>- Caring Staff</p>
      </div>
    </div>
  </main>
</StaticTemplate>

</template>

<script setup>
import StaticTemplate from '../StaticTemplate.vue'

</script>

<style>

/*
@import '../../assets/base.css';
aside {
  border-right: 1px solid var(--color-border);
  padding: 16px 32px;
}
main {
  padding: 16px 32px;
}
*/

.centerbackground-image {
    background-image: url('../../assets/CenterPic.jpg');
    background-size: cover;
    background-position: center;
    /* min-height: 250px; */
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
  }

  .centertext-overlay {
    text-align: left;
    color: white;
    font-size: 25px;
    line-height: 30px;
  }

</style>




<!--
<template>
  <div class="HomeBody">
    <div class="centerbackground-image">
      <div class="centertext-overlay">
        <h2>Day Program and Social Club For Seniors</h2>
        <p>We Provide Comfortable and Peaceful Environment</p>
        <p>- Social Interaction</p>
        <p>- Nutritious Meals</p>
        <p>- Recreation and Activities</p>
        <p>- Caring Staff</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
let bodyName = inject('bodyName', 'HomeBody.vue')

</script>

<style scoped>
.HomeBody {
  .centerbackground-image {
    background-image: url('../assets/CenterPic.jpg');
    background-size: cover;
    background-position: center;
    /* min-height: 250px; */
    display: flex;
    padding-top: 50px;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
  }

  .centertext-overlay {
    text-align: left;
    color: white;
    font-size: 25px;
    line-height: 30px;
  }
}
</style>
-->
