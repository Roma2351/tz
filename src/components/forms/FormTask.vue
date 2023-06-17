<template>
    <div>
      <label>запишите задачу</label>
      <custom-input v-model="inputValue"></custom-input> 
      <button @click="addTask">добавить задачу</button>
    </div>
  </template>
  
  <script>
//   import CustomInput from './CustomInput.vue';
import CustomInput from '../input/CustomInput.vue';
  
  export default {
    components: {
      CustomInput,
    },
    data() {
      return {
        inputValue: '',
      };
    },
    methods:{
        addTask(){
            this.$emit('addTask',this.inputValue)
            this.inputValue = ''
        }
    }
  };
  </script>
  