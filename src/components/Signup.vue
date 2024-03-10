<template>
  <div class="container">
    <div class="title">
      <h1>Sign Up</h1>
    </div>
    <div class="name">
      <input type="text" placeholder="Enter your name" v-bind="inputname" />
      <a>你的名字将作为唯一登录id</a>
    </div>
    <div class="pwd">
      <input type="text" placeholder="Enter your password" v-bind="inputpwd" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {};
  },
};
</script>


<style scoped>
.container{
    width:100%;
    height:100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
</style>
