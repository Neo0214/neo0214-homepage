<template>
<div>
  <div>
    <img class="background" :src="backgroundGif" />
  </div>
  <div class="container">
    <input class="inputbox" placeholder="enter VIP code"/>
  </div>
</div>
    
</template>

<script>
import Jump from "@/components/sub-components/jump.vue";
export default {
  data() {
    return {
      backgroundGif: require("@/assets/gifs/universe.gif"),
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index:1;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index:-1;
}
.inputbox{
  position: absolute;
  text-align: center;
  opacity: 70%;
  width:200px;
  height:33px;
  margin: 3px;
  top:20%;
}
</style>