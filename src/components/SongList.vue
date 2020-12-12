<template>
  <main class="container">
    <div class="columns col-gapless" v-if="songs.length > 0">
      <Cards
        v-for="song in songs"
        :key="song.id"
        :title="song.title"
        :img="song.cover"
        @play="$emit('play', song.id)"
      />
    </div>
    <div v-else class="loading loading-lg noid-loading"></div>
  </main>
</template>

<script>
import Cards from './Cards.vue';

export default {
  emits: ['play'],
  components: {
    Cards,
  },

  props: {
    songs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.noid-loading {
  height: 30vh;
}
</style>
