<template>

<div @[event].s="showAlert">pedo</div>
    
</template>

<script>
export default {

    data () {

      return {
        event: "click"
      }
    },

    methods: {
        showAlert() {
          alert("me tocaste")
        }

    }
}

  


</script>

<style>



</style>