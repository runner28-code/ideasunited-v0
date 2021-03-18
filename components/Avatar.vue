  <div class="avatar" :style="styles" v-bind="$attrs">
    {{ initals }}
  </div>
</template>

<script>
import { getHash } from "@/utils";

export default {
  props: {
    name: String,
    id: String
  },
