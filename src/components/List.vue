<template>

  <ul class="t">
    <li v-for="(item, i) in localItems" :key="i">
      {{ item }}
    </li>
  </ul>
  
</template>

<script lang="ljs">
export default {
  name: 'list',
  props: {
    'items': {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localItems: this['items']
    }
  },
  methods: {
    test() {
      return 1;
    }
  }
}
</script>
