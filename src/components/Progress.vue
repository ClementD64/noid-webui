<template>
  <div class="column col-6 noid-progress">
    <span class="time">{{ toDuration(currentTime) }}</span>

    <div class="bar bar-slider">
      <div class="bar-item" role="progressbar" :style="{width: barWidth}">
        <button class="bar-slider-btn btn" role="slider"></button>
      </div>
    </div>

    <span class="time">{{ toDuration(duration) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    currentTime: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },

  computed: {
    barWidth() {
      return `${((this.currentTime / this.duration) * 100)}%`;
    },
  },

  methods: {
    toDuration(duration) {
      const min = Math.floor(duration / 60).toString().padStart(2, '0');
      const sec = (duration % 60).toString().padStart(2, '0');
      return `${min}:${sec}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.noid-progress {
  display: flex;
}

.bar {
  margin: auto 0;
}

.time {
  margin: auto $unit-3;
}
</style>
