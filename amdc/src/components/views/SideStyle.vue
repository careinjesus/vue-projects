<template>
    <div class="side-bar">
      <button>Home</button>
      <button>Contact</button>
      <button @click="showServices=true">Services</button>
      <ServicesStyle v-if="showServices" @close="showServices=false" />
    </div>
  </template>
 
  <script>
    import ServicesStyle from "./ServicesStyle.vue"    
     
    export default {
        name: 'SideStyle',


        components: {
          ServicesStyle,
        },


        data() {
          return {
            showServices: false  
          }
        },
    }
  </script>
 
  <style scoped>
  .side-bar {
    display: flex;
    flex-direction: column;
    position: fixed;
    background-size: 100px;
    justify-content: space-between;
    top: 50px;
    bottom: 600px;
    left: 0;
    width: 80px;
  }


  .side-bar button {
    background-color: rgb(0, 229, 255);
    color: black;
    font-size: 15px;
    display: inline-block;
    border-block-color: black;
    border-radius: 15px;
    height: 30px;
    width: 70px;
    margin-top: 10px;;
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
 
  </style>