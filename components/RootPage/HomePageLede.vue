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
