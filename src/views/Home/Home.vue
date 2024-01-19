<template>
  <b-container class="h-100">
    <b-row>
      <b-col cols="12" class="mb-4 mt-5">
        <b-img
          style="image-rendering: pixelated"
          :src="require('../../assets/Hart.jpg')"
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
        ></b-img
      ></b-col>
      <b-col cols="12" class="mb-2"><h3>HARRIETTE RODRIGUEZ</h3></b-col>
      <b-col cols="12"><h5>WEB DEVELOPER</h5></b-col>
      <b-col cols="12"><h5>PROFESSIONAL MANGINGINOM🍻</h5></b-col>
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
