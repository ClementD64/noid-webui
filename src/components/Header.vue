<template>
  <header class="container p-sticky p-2 d-flex" style="top: 0; z-index: 10;">
    <div class="columns" style="width:100%;">
      <Controls
        :paused="paused"
        @play="$emit('play')"
        @previous="$emit('previous')"
        @next="$emit('next')"
      />
      <NowPlaying :title="title" :cover="cover"/>
      <Progress :duration="duration" :currentTime="currentTime"/>
    </div>
  </header>
</template>

<script>
import Controls from './Controls.vue';
import Progress from './Progress.vue';
import NowPlaying from './NowPlaying.vue';

export default {
  emits: ['previous', 'play', 'next'],
  components: {
    Controls,
    Progress,
    NowPlaying,
  },

  props: {
    paused: Boolean,
    title: String,
    cover: String,
    duration: Number,
    currentTime: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
header {
  background-color: $secondary-color;
}
</style>
