<template>
  <div class="root-lede" :class="{fullscreen, playing}">
    <div class="root-lede__preview">
      <div class="root-lede__preview-content">
        <div class="root-lede__preview-media-wrapper">
          <div
            class="root-lede__preview-media-wrapper-doodle"
            v-rellax="{speed: ['sm', 'xs'].includes($size) ? 0.5 : 3, center: true, percentage: 0.5}"
          ></div>
          <div class="root-lede__preview-media" ref="previewMedia"
            :class="{'iris-loaded': mounted}"
          >
            <div class="root-lede__preview-image"
              ref="previewImage"
              :style="{ backgroundImage: `url(${slides[currentSlideIndex]})` }"
            ></div>
            <div class="root-lede__preview-video" ref="previewVideo">
              <v-btn class="close root-lede__close-reel" icon @click.prevent="closeReel">
                <v-icon size="30" color="white">$close</v-icon>
              </v-btn>
              <video
                class="root-lede__video"
                preload="true"
                style="width: 100%; height: auto;"
                ref="videoElem"
                controls
                :class="{fullscreen, playing}"
              >
                <source type="video/mp4" src="https://player.vimeo.com/external/646664652.m3u8?s=3ef0be8be36a8a48d8744d7df3434739a739379f&amp;oauth2_token_id=1544629081">
                <source type="video/mp4" src="https://player.vimeo.com/external/646664652.hd.mp4?s=316a6bab06d8b9ea48e50aaa38c7c9be5b67be27&amp;profile_id=175&amp;oauth_token_id=1544629081">
                <source type="video/mp4" src="https://player.vimeo.com/external/646664652.hd.mp4?s=316a6bab06d8b9ea48e50aaa38c7c9be5b67be27&amp;profile_id=174&amp;oauth_token_id=1544629081">
                <source type="video/mp4" src="https://player.vimeo.com/external/646664652.sd.mp4?s=a32441c7102bbadf3c8d11a1225f7ac76ae609f4&amp;profile_id=165&amp;oauth_token_id=1544629081">
                <source type="video/mp4" src="https://player.vimeo.com/external/646664652.sd.mp4?s=a32441c7102bbadf3c8d11a1225f7ac76ae609f4&amp;profile_id=164&amp;oauth_token_id=1544629081">
              </video>
            </div>
          </div>
        </div>
        <div ref="playBtn">
          <HomePageLedePlay @input="playReel"/>
        </div>
      </div>
    </div>
    <div class="root-lede__content" ref="content">
      <v-responsive
        :aspect-ratio="aspectRatio"
      >
        <div class="root-lede__text-wrapper">
          <div class="root-lede__text">
            <div class="root-lede__header">Let’s <span class="root-lede__header__create">Create<span class="root-lede__header__create-doodle"></span></span> Together
              <div class="root-lede__header__underline" v-rellax="{speed: -1}"></div>
            </div>
            <div class="root-lede__intro">
              We're changing the way stories are told by connecting creators to projects, gear, educational resources, and a global community of ambitious people that want to make cool stuff. 
            </div>
            <div class="root-lede__cta">
              <v-btn class="root-lede__cta-btn" @click="signUp" v-if="!currentUser"> Sign Up</v-btn>
            </div>
          </div>
        </div>
      </v-responsive>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Power1 } from 'gsap/dist/gsap';
import HomePageLedePlay from "@/components/RootPage/HomePageLedePlay";

export default {
  components: { HomePageLedePlay },
  data () {
    const slides = [
      require("@/assets/images/root/slides/1.jpg"),
      require("@/assets/images/root/slides/2.jpg"),
      require("@/assets/images/root/slides/3.jpg"),
    ];
    return {
      playing: false,
      fullscreen: false,
      irisAsset: require("@/assets/images/lede_iris.svg"),
      mounted: false,
      irisEnding: {
        duration: 0.5,
        size: 200,
      },
      slides,
      currentSlideIndex: 0,
    }
  },
  mounted() {
    this.preloadVideo();
    this.fullscreenExitEvents();
    this.mounted = true;
    
    const timeline = new TimelineLite();
    timeline.set(this.$refs.previewMedia, {
      maskImage: `url(${this.irisAsset})`
    });
    setTimeout(() => {
      this.slideChange();
    }, 3000);
  },
  methods: {
    signUp() {
      this.$root.$emit("authModal/open/register");
    },
    preloadVideo() {
      const { videoElem } = this.$refs;
      videoElem.play();
      this.$nextTick(() => {
        videoElem.pause()
      });
    },
    fullscreenExitEvents() {
      document.onfullscreenchange = () => {
        if (!document.fullscreenElement) {
          this.onFullscreenExit();
        }
      };
      document.onwebkitfullscreenchange = () => {
        if (!document.webkitFullscreenElement) {
          this.onFullscreenExit();
        }
      };
      document.onmozfullscreenchange = () => {
        if (!document.mozFullScreenElement) {
          this.onFullscreenExit();
        }
      };
      document.onmsfullscreenchange = () => {
        if (!document.msFullscreenElement) {
          this.onFullscreenExit();
        }
      };
    },
    closeReel() {
      const { previewMedia, playBtn, previewImage, previewVideo, videoElem } = this.$refs;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });      
      const fixedStart = previewMedia.getBoundingClientRect();
      setTimeout(() => videoElem.pause(), 500);
      this.updateIrisEndingFactor();
      const timeline = new TimelineLite({
        onComplete: () => { this.playing = false },
      });
      timeline
        .set(previewMedia, {
          position: "fixed",
          top: 0,
          left: 0,
          y: fixedStart.top,
          x: fixedStart.left,
          width: fixedStart.width,
          paddingBottom: 0,
          height: fixedStart.height,
          marginTop: 0,
          maskImage: `url(${this.irisAsset})`,
          maskSize: this.irisEnding.size + "% " + this.irisEnding.size + "%",
        })
        .set(previewVideo, {
          clearProps: "pointerEvents",
        })
        .add("start")
        .to(previewMedia, {
          maskSize: "100% 100%",
          duration: this.irisEnding.duration,
          ease: Power1.easeIn,
        })
        .add("irisrestored")
        .to(previewMedia, {
          y: document.documentElement.clientWidth * .0556 + 100,
          x: document.documentElement.clientWidth * 0.5,
          width: document.documentElement.clientWidth * this.$size == 'xl' ? 0.38 : 0.41667,
          height: document.documentElement.clientWidth * 0.3472,
          ease: Power1.easeOut,
          duration: 0.5,
        }, "irisrestored")
        .to(previewImage, {
          duration: 0.5,
          opacity: 1,
        }, "irisrestored")
        .to(playBtn, {
          duration: 0.5,
          opacity: 1,
        }, "irisrestored")
        .add("sizerestored")
        .set(playBtn, {
        })
        .set(previewImage, {
          clearProps: "opacity"
        })
        .set(previewMedia, {
          clearProps: "all",
        })
        .set(previewMedia, {
          maskImage: `url(${this.irisAsset})`,
        }); 
    },
    playReel() {
      this.playing = true;
      if(['sm', 'xs'].includes(this.$size)) {
        // play video
        const { videoElem } = this.$refs;
        videoElem.play();
        // enter full screen
        this.fullscreen = true;
        this.fullscreenToggle();
      } else {
        const { previewMedia, playBtn, previewImage, previewVideo, videoElem } = this.$refs;
        videoElem.play();
        const fixedStart = previewMedia.getBoundingClientRect();
        const timeline = new TimelineLite();
        this.updateIrisEndingFactor();
        timeline
          .set(previewMedia, {
            position: "fixed",
            top: 0,
            left: 0,
            y: fixedStart.top,
            x: fixedStart.left,
            width: fixedStart.width,
            paddingBottom: 0,
            height: fixedStart.height,
            marginTop: 0,
            maskSize: "100% 100%",
          })
          .set(previewVideo, {
            pointerEvents: "all",
          })
          .add("start")
          .to(previewMedia, {
            y: 0,
            x: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            ease: Power1.easeIn,
            duration: 0.5,
          })
          .to(playBtn, {
            duration: 0.5,
            opacity: 0,
          }, "start")
          .to(previewImage, {
            duration: 0.5,
            opacity: 0,
          }, "start")
          .add("fullwindow")
          .set(previewMedia, {
            width: "100%",
            height: "100%",
            maskSize: "100% 100%"
          }, "fullwindow")
          .to(previewMedia, {
            maskSize: this.irisEnding.size + "% " + this.irisEnding.size + "%",
            duration: this.irisEnding.duration,
          }, "fullwindow")
          .set(previewMedia, {
            maskImage: 'none',
          });
      }
    },
    updateIrisEndingFactor() {
      const windowAspectRatio = window.innerWidth / window.innerHeight;
      const irisEndingFactor = windowAspectRatio > 1.2 ?
        windowAspectRatio / 1.2 :
        1.2 / windowAspectRatio;
      this.irisEnding = {
        duration: 0.5 * irisEndingFactor,
        size: 200 * irisEndingFactor,
      }
    },
    fullscreenToggle() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        // If there's currently an element fullscreen, exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }

        const { videoElem } = this.$refs;
        videoElem.pause();

      } else {
        // Otherwise, enter fullscreen
        const { videoElem } = this.$refs;

        console.info('enterFullScreen videoElem', videoElem);
        if (videoElem.requestFullscreen) {
          videoElem.requestFullscreen();
        } else if (videoElem.mozRequestFullScreen) {
          videoElem.mozRequestFullScreen();
        } else if (videoElem.webkitRequestFullscreen) {
          videoElem.webkitRequestFullscreen();
        } else if (videoElem.webkitEnterFullscreen) {
          videoElem.webkitEnterFullscreen();
        } else if (videoElem.msRequestFullscreen) {
          videoElem.msRequestFullscreen();
        }
      }
    },
    onFullscreenExit() {
      this.fullscreen = false;
      this.$refs.videoElem.pause();
    },
    slideChange() {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      setTimeout(() => {
        this.slideChange();
      }, 3000);
    }
  },
  computed: {
    aspectRatio() {
      if(['sm', 'xs'].includes(this.$size)) return undefined;
      if(this.$size == 'xl') return (2560 / 1247);
      return (1440 / 810);
    }
  }
}
</script>

<style lang="scss" scoped>
.root-lede {
  background-size: 100%;
  background-position: bottom;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2MDAwIiB2aWV3Qm94PSIwIDAgMTQ0MCA2MDAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0gMzg1LjY2OCA1OTI2Ljg5MSBDIDQ1NS4yNjggNTkxMi4yMDkgNTIyLjY2IDU4ODUuODkzIDU5Mi4wNjggNTg2OS45MzIgQyA2OTAuOTM2IDU4NDcuMTggNzkzLjg5NiA1ODQ1LjgwNiA4OTIuNjA4IDU4NjkuNDAxIEMgOTg4LjUzNiA1ODkyLjI3NSAxMDg4IDU5NDguMDY0IDExODIuNzkgNTk3Ni40MDggQyAxMjY2Ljg1IDYwMDEuNTU0IDEzNTguNjMgNjAxMS45MDkgMTQ0MCA1OTgwLjQ5IEwgMTQ0MCAwIEwgMCAwIEwgMCA1ODg3LjMwOCBDIDEyMi45NTkgNTk0MC4xNzggMjU2LjMzNiA1OTUzLjg2NyAzODUuNjY4IDU5MjYuODkxIFoiIGZpbGw9IiNFMTJEMUIiLz4KPC9zdmc+");
  margin-bottom: 50px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 17%;
  }
  
  &__header {
    color: white;
    font-size: 42px;
    text-transform: uppercase;
    line-height: 1.067;
    letter-spacing: .07em;
    font-weight: 900;
    margin-bottom: 0.698em;
    position: relative;
    @media screen and (max-width: 960px) {
      font-size: 32px;
    }
    &__create {
      position: relative;
    }
  }

  &__content {
    pointer-events: none;
  }

  &__text-wrapper {
    width: 100%;
    height: 100%;
    padding: 30px 120px calc(10.4167% + 30px);
    display: flex;
    align-items: center;
    pointer-events: none;
    @media screen and (max-width: 960px) {
      padding: 30px;
    }
    @media screen and (min-width: 1905px) {
      padding: 30px 240px calc(10.4167% + 30px);
    }
  }

  &__text {
    width: 40%;
    pointer-events: all;
    z-index: 2;
    @media screen and (max-width: 960px) {
      width: auto;
    }
  }

  &__intro {
    color: white;
    font-size: 20px;
    margin-bottom: 1.5em;
    max-width: 830px;
  }

  &::v-deep .root-lede__cta-btn {
    text-transform: none;
    font-weight: 700;
    letter-spacing: -0.02em;
    font-size: 22px;
    color: #E12D1B;
    min-width: 190px !important;
    height: 55px !important;
  }

  &__preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    @media screen and (max-width: 960px) {
      position: relative;
    }

    &-content {
      width: 100%;
      @media screen and (max-width: 960px) {
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 30px;
      }
    }

    &-image,
    &-video {
      position: absolute;
      width: 100%;
