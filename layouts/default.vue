  <v-app
    v-if="currentProject"
    class="evp-app"
    :class="{ authorized: currentUser, not_authorized: !currentUser }"
  >
    <client-only>
      <div class="account-menu-toggle">
        <v-btn @click.stop="accountMenuClick" icon>
          <v-icon size="38">{{ "$account_menu" }}</v-icon>
          <transition name="fade">
            <div
              v-if="newOpps.length"
              class="opp-count"
