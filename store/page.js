/* eslint-disable */

const store = {
  namespaced: true,
  state: () => ({ current: null }),
  mutations: {
    set(state, current) {
      state.current = current;
    },
    updateChat(state, chat) {
      state.current.chats[chat.id] = chat;
    },
    publishEvent(state, id) {
      const collection = state.current?.events;
      const payload = { posted: true };
      updateCollection({ collection, id, payload });
    },
    unpublishEvent(state, id) {
      const collection = state.current?.events;
      const payload = { posted: false };
      updateCollection({ collection, id, payload });
    },
    hideEvent(state, id) {
      const payload = { hidden_from_timeline: true };
      updateCollection({ collection, id, payload });
    },
    publishContentBlock(state, { sectionId, blockId }) {
      const collection = state.current.content_sections[sectionId].blocks;
      const payload = { posted: true };
      updateCollection({ collection, id: blockId, payload });
    },
    unpublishContentBlock(state, { sectionId, blockId }) {
      const collection = state.current.content_sections[sectionId].blocks;
      const payload = { posted: false };
      updateCollection({ collection, id: blockId, payload });
    }
  },
  actions: {
    async fetch({ commit }, { url }) {
      const { data } = await this.$api.Page.get({
        url
      });

      commit("set", data);

      return data;
    }
  },
  getters: {
    current(state) {
      return state.current;
    }
  }
};

const updateCollection = ({ collection, id, payload }) => {
  if (!collection) return;
  const item = collection.find(t => t.id == id);
  if (item) {
    Object.assign(item, payload);
  }
