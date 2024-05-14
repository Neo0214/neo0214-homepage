<template>
  <div class="container">
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.btn {
  background-color: #04aa6d; /* Green */
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(255, 255, 255, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
h1 {
  text-align: left;
  width: 100%;
}
p {
  text-align: left;
  width: 100%;
}

</style>