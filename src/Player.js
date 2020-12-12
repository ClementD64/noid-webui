export default class Player {
  tracks = [];

  currentIndex = null;

  audio = new Audio();

  constructor() {
    this.on('ended', this.next.bind(this));
  }

  setTracks(tracks) {
    this.tracks = tracks;
  }

  play(id) {
    this.playIndex(this.tracks.findIndex((v) => v.id === id));
  }

  playIndex(index, play = true) {
    this.currentIndex = index;

    this.audio.src = this.file;
    this.audio.autoplay = play;
    this.audio.load();
  }

  pause() {
    this.audio.pause();
  }

  resume() {
    if (this.currentIndex === null) return;
    this.audio.play();
  }

  reStart() {
    this.audio.currentTime = 0;
  }

  next() {
    if (this.currentIndex + 1 >= this.tracks.length) {
      this.playIndex(0, false);
      this.audio.dispatchEvent(new Event('pause'));
    } else {
      this.playIndex(this.currentIndex + 1);
    }
  }

  previous() {
    if (this.currentIndex - 1 === -1) {
      this.audio.currentTime = 0;
      this.pause();
    } else {
      this.playIndex(this.currentIndex - 1);
    }
  }

  on(event, callback) {
    this.audio.addEventListener(event, callback);
  }

  get paused() {
    return this.audio.paused;
  }

  get current() {
    return this.tracks[this.currentIndex];
  }

  get length() {
    return this.tracks.length;
  }

  get title() {
    return this.current?.title;
  }

  get file() {
    return this.current?.file;
  }

  get cover() {
    return this.current?.cover;
  }

  get currentTime() {
    return Math.floor(this.audio.currentTime);
  }

  get duration() {
    return Math.floor(this.audio.duration);
  }
}
