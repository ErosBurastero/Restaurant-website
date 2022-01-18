<template>
 <div>
       <select v-model="listItems">
      <option value="A">Product A</option>
      <option value="B">Product B</option>
      <option value="C">Product C</option>
    </select>
 </div>
  
</template>

<script>
export default {
    data () {
        return{
            listItems: "A",
           
        }
    }

}
</script>

<style>

</style>