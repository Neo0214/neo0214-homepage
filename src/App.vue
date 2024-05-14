<template>
  <div class="container">
    <div class="main-content">
      <div class="top-bar">
        <ul class="nav">
          <li class="slide1"></li>
          <li class="slide2"></li>
          <li id="bar-1"><router-link id="link-1" to="/Home" @mouseover="moveSlide2($event)"
              @mouseleave="resetSlide2($event)" @click="handleClick($event)">HOME</router-link></li>
          <li id="bar-2"><router-link id="link-2" to="/Blogs" @mouseover="moveSlide2($event)"
              @mouseleave="resetSlide2($event)" @click="handleClick($event)">BLOG</router-link></li>
          <li id="bar-3"><router-link id="link-3" to="/Labs" @mouseover="moveSlide2($event)"
              @mouseleave="resetSlide2($event)" @click="handleClick($event)">LABS</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      jump_distance: 0,
      slide1_at: 1,
      slide2_at: 1
    };
  },
  mounted() {
    const ele_1 = document.querySelector('.slide1');
    const ele_2 = document.querySelector('.slide2');
    const rect = document.getElementById('bar-1').offsetLeft; // 获取元素的位置
    const next_rect = document.getElementById('bar-2').offsetLeft;
    this.jump_distance = next_rect - rect;
    const offset = this.jump_distance;
    ele_1.style.transform = `translateX(${-offset}px)`;
    ele_2.style.transform = `translateX(${-offset}px)`;
  },
  methods: {
    getJumpTimes(id1, id2) {
      const number1 = id1;
      const number2 = parseInt(id2.charAt(id2.length - 1));
      if (number1 === number2)
        return 0;
      return number2 - number1;
    },
    moveSlide2(event) {
      const element = document.querySelector('.slide2');
      const curElement = event.target;
      const jump_times = this.getJumpTimes(2, curElement.id);
      const offset = jump_times * this.jump_distance;
      element.style.transform = `translateX(${offset}px)`;
      element.style.opacity = 1;
    },
    resetSlide2(event) {
      const element = document.querySelector('.slide2');
      const offset = this.jump_distance - this.jump_distance;
      element.style.transform = `translateX(${-offset}px)`;
      element.style.opacity = 0;
    },
    handleClick(event) {
      const element = document.querySelector('.slide1');
      const curElement = event.target;
      const jump_times = this.getJumpTimes(2, curElement.id);
      const offset = jump_times * this.jump_distance;
      element.style.transform = `translateX(${offset}px)`;
      this.slide1_at = parseInt(curElement.id.charAt(curElement.id.length - 1));
      this.slide2_at = parseInt(curElement.id.charAt(curElement.id.length - 1));
      console.log(this.slide1_at);
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background-image: url("./assets/pics/bg.avif");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

}

.main-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.top-bar {
  display: flex;
  justify-content: center;
  width: 100%;
}

.nav {
  width: 61%;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 10em;
  list-style: none;
  background: #f5f5f5;
  box-shadow: 10px 20px 20px #00000033;
  padding: 10px;
}

.slide1,
.slide2 {
  position: fixed;

  display: inline-block;
  padding: 10px 0px;
  height: 50px;
  width: 120px;
  border-radius: 10em;

  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
}

.slide1 {
  background-color: rgb(170, 190, 255);
  z-index: 2;
}

.slide2 {
  opacity: 0;
  background-color: rgba(170, 190, 255, 0.5);
  z-index: 1;
  box-shadow: 0 0 20px #ffffffaa inset;
}

li {
  position: relative;
  padding: 10px 0px;
  font: 500 24px "Courier New";
  border: none;
  outline: none;
  color: rgb(70, 100, 180);
  display: inline-block;
  text-align: center;
  z-index: 3;
}

a {
  text-decoration: none;
  color: rgb(70, 100, 180);
  font: 500 24px "Courier New";
  display: inline-block;
  text-align: center;
}
</style>

<style>
p {
  color: white;
}

h1 {
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
