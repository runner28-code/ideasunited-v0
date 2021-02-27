  <div class="chat">
    <ChatHeader :chat="chat" :status="status" />
    <ChatBody :chat="chat" />
    <ChatFooter :chat="chat" />
  </div>
</template>

<script>
export default {
  props: {
    chat: Object
  },
  data() {
