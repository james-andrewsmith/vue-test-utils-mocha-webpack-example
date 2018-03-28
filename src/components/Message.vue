<template>
  <h1>{{localMsg}}</h1>
</template>

<script lang="ts">
import Vue from 'vue';
import MessageBase from './MessageBase.vue';

export default Vue.extend({
	name: 'message',
	extends: MessageBase,
	props: {
		msg: {
			required: true,
			default: 'default message',
			type: String
		}
	},
	data() {
		return {
			james: '123'
		};
	},
	computed: {
		localMsg() {
			return this.msg123 == null ? 'default message' : this.msg;
		}
	}
});
</script>
