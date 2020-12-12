<template>
  <div>
    <Header
      :paused="paused"
      :title="player.title"
      :cover="player.cover"
      :currentTime="currentTime"
      :duration="duration"
      @play="changeState"
      @next="next"
      @previous="previous"
    />
    <SongList :songs="songs" @play="change"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import SongList from './components/SongList.vue';
import Player from './Player';
import loader from './loader';

export default {
  data() {
    return {
      songs: [],
      player: new Player(),

      currentTime: 0,
      duration: 0,
      paused: true,
    };
  },

  async created() {
    this.player.on('durationchange', this.durationchange.bind(this));
    this.player.on('timeupdate', this.timeupdate.bind(this));
    this.player.on('pause', this.stateChange.bind(this));
    this.player.on('play', this.stateChange.bind(this));

    this.songs = await loader();
    this.player.setTracks(this.songs);
  },

  components: {
    Header,
    SongList,
  },

  methods: {
    change(id) {
      this.player.play(id);
    },

    durationchange() {
      this.duration = this.player.duration;
    },

    timeupdate() {
      this.currentTime = this.player.currentTime;
    },

    stateChange() {
      this.paused = this.player.paused;
    },

    changeState() {
      if (this.player.paused) {
        this.player.resume();
      } else {
        this.player.pause();
      }
    },

    next() {
      this.player.next();
    },

    previous() {
      if (this.player.currentTime > 5) {
        this.player.reStart();
      } else {
        this.player.previous();
      }
    },
  },
};
</script>

<style lang="scss">
@import "assets/variables";
@import "assets/spectre";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

.noid-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.noid-cover {
  padding-top: 100% !important;
  position: relative !important;
  overflow: hidden;
}

.noid-cover > img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
