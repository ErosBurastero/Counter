<template>
  <div class="d-flex justify-center flex-wrap my-16">
    <h3 class="black--text d-flex justify-center">History</h3>

    <div class="container d-flex justify-center flex-wrap">
      <p
        class="black--text ml-2"
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
        {{ number }}
      </p>
    </div>
    <input  
      class="my-10"
      placeholder="Search by index"
      type="number"
      v-model="value"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>

<style>
.container {
  width: 450px;
  border: solid black 3px;
}

.bold{
    font-weight: 900;
}
</style>
