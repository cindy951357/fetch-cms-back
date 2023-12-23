<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Ref and Reactive</h2>
    <h3>Ref</h3>
    <p>Name: {{ ninjaOne.name }}</p>
    <p>Age: {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Click me!</button>

    <h3>Reactive</h3>
    <p>Name: {{ ninjaTwo.name }}</p>
    <p>Age: {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive, } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const ninjaOne = ref({name: 'mario', age: 30});
    const ninjaTwo = reactive({ name: 'luigi', age: 35})


    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 50;
    }

    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
    };
  },
}
</script>
