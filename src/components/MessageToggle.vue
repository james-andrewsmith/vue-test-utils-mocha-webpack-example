<template>
<!-- 
  <display-friendly-error v-if="loading_error" />
-->
  <div>
    <message :msg="msg"></message>
    <button id="toggle-message" @click="toggleMessage">
      Change message
    </button>
  </div>
</template>

<<<<<<< HEAD
<script lang="ts">
import Vue from 'vue'
import Message from 'components/Message.vue'
=======
<script>
import Message from './Message.vue'
>>>>>>> c1be59d12eb72c0acd9b74810919df39239cf3bc

const someOtherMethod = async () => {
  throw { message: 'James is average' };
  // return 1;
}

export default Vue.extend({
  name: 'message-toggle',
  data: () => ({
    msg: null,
    loading: false, 
    loading_error: null
  }),
  methods: {    
    toggleMessage () {
      this.msg = this.msg === 'message' ? 'toggled message' : 'message';
      console.log(this.msg);
      /*
      try 
      {      
        
          this.loading = true;
          this.loading_error = null;

          let value = await someOtherMethod();

      }
      catch (exp)
      {
          this.loading_error = exp;
      }
      finally
      {
          this.loading = false;
      }*/

    }
  },
  components: {
    Message
  }
})
</script>
