<template>
  <div class="TheFooter">
    <div class="Bottom-bar">
      <div class="addr-text">
        <p>6501 Poplar Ave</p>
        <p>Tacoma Park, MD 20912</p>
        <p>(301) 892-2717</p>
      </div>

      <div class="copyright-text">
        <p>Copy Right reserved</p>
        <p>for WMADCC</p>
      </div>
    </div>
  </div>
</template>

<script>
/*
export default {
  name: 'BottomStyle',
} */
</script>

<style lang="scss" scoped>
.TheFooter {
  .Bottom-bar {
    display: flex;
    flex-direction: row;
    background-size: cover;
    margin-left: 100px;
    justify-content: space-between;
  }

  .addr-text {
    color: darkblue;
    width: 300px;
    line-height: 20px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    display: inline-block;
  }
  .copyright-text {
    color: darkblue;
    width: 150px;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    display: inline-block;
  }
}
</style>
