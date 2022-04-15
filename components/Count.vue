<template>
  <div>
      <div class="black--text d-flex justify-center counter">{{ counter }}</div>
      <div class="d-flex justify-center">
      <button @click="subtractToCounter(parseInt(value))" >-</button>
      <input  class="ml-4" type="number" v-model="value" />
      <button @click="addToCounter(parseInt(value))" class="ml-4">+</button>
      </div>
      <div class="d-flex justify-center my-5">
          <button @click="addRandomNumber" class="boton black white--text">ADD A RANDOM NUMBER</button>
      </div>
      
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

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
        ...mapMutations(["addToCounter", "subtractToCounter"]),
        ...mapActions(["addRandomNumber"])
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
    border-radius: 10px;
}

.counter{
    font-size: 80px;
}

.boton{
    border: solid black 2px;
    padding: 3px;
    font-size: 20px;
    border-radius: 30px;
}



</style>