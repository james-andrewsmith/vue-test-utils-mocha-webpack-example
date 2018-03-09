<template>
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
</script>
