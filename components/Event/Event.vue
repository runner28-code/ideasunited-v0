<template>
  <div
    class="event"
    :class="{
      show_event: currentPage.events.length,
      with_events: currentPage.events.length > 1,
      with_chat: currentPage.chats.length,
      chat_is_text: currentPage.chats.length
        ? currentPage.chats[0].chat_type == 'text'
        : false,
      chat_is_zoom: currentPage.chats.length
        ? currentPage.chats[0].chat_type == 'zoom'
        : false
    }"
  >
    <div
      :class="{ with_chat: currentPage.chats[0] }"
      class="event__video"
      v-if="currentPage.events.length"
    >
      <div class="event__video-container" v-if="activeEvent">
        <div class="event__video-player">
          <EventPlayer
            v-if="
              !activeEvent.require_auth ||
                (activeEvent.require_auth && currentUser)
            "
            :event="activeEvent"
            :class="{ 'sticky-video': activeEvent.sticky_video && scrollPosition > 300 }"
          />
          <div v-else class="event__auth-form">
            <AuthForm />
          </div>
        </div>
        <div class="event__video-info" v-show="!activeEvent.hidden_from_timeline">
          <Title class="event__video-title">{{ activeEvent.title }}</Title>

          <div class="event__video-timestamp" v-if="activeEvent.start_at">
            <timeago
              :auto-update="60"
              :datetime="activeEvent.start_at"
            ></timeago>
          </div>
          <div
            v-if="activeEvent.description"
            class="event__video-description"
            v-html="activeEvent.description"
          ></div>
        </div>
      </div>
      <div
        v-else
        class="event__placeholder"
        :style="{
          backgroundImage: `url(${activeTheme.event_background.large.url})`
        }"
      ></div>
      <!-- <Spinner v-else /> -->
    </div>
    <div
      :class="{ visible: showMobileChat }"
      class="event__chat"
      v-if="currentPage.chats.length"
    >
      <Chat
        v-if="currentPage.chats[0].chat_type == 'text'"
        :chat="currentPage.chats[0]"
      />

      <ZoomChat
        v-if="currentPage.chats[0].chat_type == 'zoom'"
        :chat="currentPage.chats[0]"
      />
    </div>
    <client-only>
      <Timeline v-if="currentPage.events.length" v-model="activeEvent" />
    </client-only>
    <div
      v-if="currentPage.chats.length"
      class="show-chat"
      @click="showMobileChat = !showMobileChat"
    >
      <span v-if="!showMobileChat">
        Show Chat
        <v-icon>$menu_down</v-icon>
      </span>
      <span v-else>
        Hide Chat
        <v-icon>$menu_up</v-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeEvent: null,
      showMobileChat: false,
      scrollPosition: null
    };
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.top.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped lang="scss">
.show-chat {
  padding: 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  cursor: pointer;
  display: none;

  span {
    display: flex;
    align-items: center;
  }
}

.event {
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;

  &__placeholder {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: contain;
    background-position: center;
  }

  &__auth-form {
    background: #e5e5e5;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 12px;
    font-weight: bold;
    padding: 24px 40px;
  }

  &.show-event {
    margin-bottom: -45px;
  }

  &.with_chat &__video-player {
  }

  &.chat_is_text &__video {
    &.with_chat {
      width: calc(100% - 300px);
    }

    &-player {
