<template>
  <div class="column col-xs-6 col-sm-4 col-lg-3 col-xl-2 col-1">
    <div class="card" @click="$emit('play')">
      <div class="card-image noid-cover">
        <img :src="img">
      </div>
      <div class="card-header">
        <div class="card-title h5 noid-title">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['play'],
  props: {
    title: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.card {
  border: none;
  background: $secondary-color;
  margin: 5%;
}
</style>
