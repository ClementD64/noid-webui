<template>
  <div class="column col-sm-4 col-2 noid-control">
    <button class="btn btn-control" @click="$emit('previous')">
      <i class="material-icons">skip_previous</i>
    </button>

    <button class="btn btn-control" @click="$emit('play')">
      <i class="material-icons">{{ playIcon }}</i>
    </button>

    <button class="btn btn-control" @click="$emit('next')">
      <i class="material-icons">skip_next</i>
    </button>
  </div>
</template>

<script>
export default {
  emits: ['previous', 'play', 'next'],
  props: {
    paused: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    playIcon() {
      return this.paused ? 'play_arrow' : 'pause';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.btn-control {
  background: transparent;
  border-color: transparent;
  color: $dark-color;
  &:focus,
  &:hover,
  &:active,
  &.active {
    background: $tertiary-color;
  }
}

.noid-control {
  display: flex;
  justify-content: center;
}
</style>
