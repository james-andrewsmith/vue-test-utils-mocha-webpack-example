<template>
  <div id="app">
    <message-toggle />
    <list :items="['list item 1', 'listen item 2', 'list item 3']" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MessageToggle from 'components/MessageToggle.vue';
import List from 'components/List.vue';

export default Vue.extend({
	components: {
		MessageToggle,
		List
	}
});
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	color: #2c3e50;
}
</style>
