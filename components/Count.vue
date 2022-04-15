<template>
  <div>
      <div class="black--text d-flex justify-center counter">{{ counter }}</div>
      <div class="d-flex justify-center">
      <button @click="subtractToCounter(parseInt(value))" >-</button>
      <input class="ml-4" type="number" v-model="value" />
      <button @click="addToCounter(parseInt(value))" class="ml-4">+</button>
      </div>
      
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return{
            value: 1,
        }
    },

    computed: {
        ...mapState(["counter"])
    },

    methods: {
        ...mapMutations(["addToCounter", "subtractToCounter"])
    }

}
</script>

<style>

button{
    color: black;
    font-size: 30px;
}

input{
    padding: 8px;
    border: solid 1px black;
}

.counter{
    font-size: 80px;
}

</style>