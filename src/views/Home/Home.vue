<template>
  <b-container class="h-100">
    <b-row>
      <b-col cols="12" class="mb-4 mt-5">
        <b-img
          style="image-rendering: pixelated"
          :src="require('../../assets/hart123.jpg')"
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
        ></b-img
      ></b-col>
      <b-col cols="12" class="mb-2"><h5>HARRIETTE RODRIGUEZ</h5></b-col>
      <b-col cols="12"><h5>WEB DEVELOPER</h5></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mainProps: { width: 250, height: 250 },
    };
  },
};
</script>
