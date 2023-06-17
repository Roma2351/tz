<template>
    <button class="custom-button" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name:"CustomButton",
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style>
 
  </style>
  