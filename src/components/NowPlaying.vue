<template>
  <div class="column col-sm-2 col-4 noid-now-playing">
    <div class="cover">
      <div class="noid-cover">
        <img v-if="cover" :src="cover">
      </div>
    </div>
    <span class="title hide-sm noid-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    cover: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.noid-now-playing {
  display: flex;
}

.cover {
  height: $control-size;
  width: $control-size;
}

.title {
  margin: auto $unit-3;
}

@media (max-width: $size-sm) {
  .noid-now-playing {
    order: 3;
  }
}
</style>
