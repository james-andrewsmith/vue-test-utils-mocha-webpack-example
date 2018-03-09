<template>
<<<<<<< HEAD
  <h1>{{localMsg}}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'message',
  props: {
    msg: {
      required: true,
      default: 'test',
      type: String
    }
  },
  computed: {
    localMsg() {
      return this.msg == null ? 'default message' : this.msg;
    }
  }
})
=======
  <h1> {{ msg || 'default message' }}</h1>
</template>

<script>
export default {
  name: 'message',
  props: [
    'msg'
  ]
}
>>>>>>> c1be59d12eb72c0acd9b74810919df39239cf3bc
</script>
