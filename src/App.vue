<template>
  <div class="container">
    <div class="main-content">
      <div class="top-bar-div">
        <ul class="top-bar">
          <li>
            <Bar content="Home" startColor="#06c5ff" endColor="#0972ff"></Bar>
          </li>
          <li>
            <Bar content="Blogs" startColor="#0972ff" endColor="#5a72ff"></Bar>
          </li>
          <li>
            <Bar
              content="Projects"
              startColor="#5a72ff"
              endColor="#af38ea"
            ></Bar>
          </li>
          <li>
            <Bar content="Labs" startColor="#af38ea" endColor="#de44bd"></Bar>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Bar from "./components/sub-components/Bar.vue";
export default {
  components: { Bar },
  name: "App",
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background-color: rgb(12, 12, 12);
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.main-content {
  height: 100%;
  width: 45%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
}
.top-bar {
  height: 50px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.top-bar-div{
  height: 50px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
li {
  display: flex;
}
ul {
  padding: 0;
}
</style>

<style>
p {
  color: white;
}
h1 {
  color: white;
}
</style>
