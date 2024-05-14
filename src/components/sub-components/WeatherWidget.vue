<template>
    <div id="he-plugin-simple"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0');
    document.body.appendChild(script);
  
    window.WIDGET = {
      "CONFIG": {
        "modules": "02",
        "background": "1",
        "tmpColor": "FFFFFF",
        "cityColor": "FFFFFF",
        "aqiColor": "FFFFFF",
        "tmpSize": "16",
        "citySize": "16",
        "aqiSize": "16",
        "weatherIconSize": "24",
        "alertIconSize": "18",
        "padding": "10px 10px 10px 10px",
        "shadow": "0",
        "language": "auto",
        "fixed": "false",
        "vertical": "top",
        "horizontal": "left",
        "key": "996cbc24381d4d5b8069a79941c32a73"
      }
    };
  });
  </script>