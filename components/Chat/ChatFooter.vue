<template>
  <div class="chat-footer">
    <v-btn v-if="!currentUser" outlined @click="$root.$emit(`authModal/open`)">
      Log in
    </v-btn>

    <div v-else-if="chat.locked">
      Chat is temporarily locked
    </div>

    <div v-else-if="currentUser.blocked && currentUser.blocked">
      You are blocked
    </div>

    <div v-else class="chat-footer__actions">
      <v-textarea
        @keydown.enter="sendMessage"
        auto-grow
        rows="1"
        class="chat-footer__actions-input"
        placeholder="Say something"
        v-model="message"
        maxlength="200"
      ></v-textarea>
      <div class="chat-footer__actions-bottom">
        <div>
          <v-menu left offset-x content-class="chat-footer__actions-emoji">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon>
                <v-icon>
                  $emoji
                </v-icon>
              </v-btn>
            </template>
            <div>
              <VEmojiPicker @select="selectEmoji" />
            </div>
          </v-menu>
        </div>
        <div>
          <span>{{ message.length }}/200</span>
          <v-btn icon @click="sendMessage">
            <v-icon>$send</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stripMessage } from "@/utils";
import cookies from "vue-cookies";

export default {
  props: { chat: Object },
  data() {
    return { message: "" };
  },
  methods: {
    selectEmoji({ data }) {
      this.message += data;
    },
    sendMessage(event) {
      if (!event.shiftKey && this.message.replace(/(\s|\n)+/g, "").length) {
        event.preventDefault();
        const data = {
          body: stripMessage(this.message),
          token: cookies.get("authToken")
          
        };
        console.info('sendMessage data', data);
        console.info('sendMessage this.chat.id', this.chat.id);

        this.$cable.perform({
          channel: "ChatChannel",
          chat_id: this.chat.id,
          action: "send_message",
          data
        });

        this.message = "";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.chat-footer {
  box-shadow: 0px 0px 5px rgb(0 0 0 / 15%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  min-height: 80px;
  position: relative;

  &__actions {
    width: 100%;
    margin-bottom: -5px;

    &-emoji {
    }

    &-input {
      padding: 0;
      &::v-deep {
        .v-text-field__details {
          display: none;
        }
      }
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
