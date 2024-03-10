<template>
  <div class="bar">
    <div
      style="
        height: 40px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
      "
    >
      <a class="text" v-text="content" :href=link></a>
    </div>
    <div
      style="height: 10px; width: 100%; display: flex; justify-content: center"
    >
      <div class="color-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: ["content","startColor","endColor"],
  data() {
    return {
      link:`/${this.content}`,
    };
  },
};
</script>

<style scoped>
.bar {
  height: 100%;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 20px;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text:visited{
  text-decoration: none;
  color:white;
}
.text:hover{
  font-size: 25px;
  text-decoration: none;
  color:white;
}
.color-bar {
  height: 10px;
  width: 80%;
  background:linear-gradient(to right,v-bind('startColor'),v-bind('endColor'));
}
</style>