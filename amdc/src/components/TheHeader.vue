
<template>
  <div class="TheHeader">
    <div class="Top1stLine">
      <TopMessage />
      <WelcomeUser />
    </div>
    <div class="Top2ndLine">
      <CompanyLogo />
      <TopNav />
    </div>
  </div>

</template>

<script setup>

import TopMessage from './Molecules/TopMessage.vue'
import WelcomeUser from './Molecules/WelcomeUser.vue'
import CompanyLogo from './Molecules/CompanyLogo.vue'
import TopNav from './Molecules/TopNav.vue'

</script>


<style lang="scss" scoped>
.TheHeader {
  display: 100%;
  max-width: none;
  border: 5px solid rgb(119, 0, 255);
}

.Top1stLine {
  height: 60px;
  border: 3px solid rgb(217, 255, 0);

    /* grid-template-columns: none; */
}

.Top2ndLine {
  height: 60px;
  border: 1px solid rgb(0, 204, 255);
    /* grid-template-columns: none; */
}

/*
.TheHeader {
  border: 5px solid red;
  grid-template-columns: none;
  h1 {
    font-size: 16px;
    float: center;
    font-weight: bold;
  }
  span {
    display: flex;
    font-size: 24px;
    line-height: 24px;
    margin-right: 8px;
    font-weight: bold;
    position: relative;
    left: 20px;
    float: left;
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
