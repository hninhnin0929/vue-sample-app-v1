<template>
    <div class="hello">
      {{ msg }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'NextTick',
    data() {
      return {
          msg: 'One'
      }
    },
    mounted() {
        this.msg = 'Two';
  
        // this.$nextTick(() => {
        //     this.msg = 'Three';
        // }); 

        setTimeout(() => {
            this.msg = 'Three';
        }, 0);
    }
  }
  </script>
  