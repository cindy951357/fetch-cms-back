<template>
  <div class="home">
    <h1>Home</h1>
    <hr>
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
  <hr>
  <div>
    <h1>Computed</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref,
  reactive,
  computed,
} from 'vue';

export default {
  name: 'HomeViewCopy',
  setup() {
    const search = ref('');
    const names = ref(['cindy', 'nicole', 'jennifer', 'vivienne', 'cyndi', 'join', 'jay']);

    const matchingNames = computed(() => {
      return names.value.filter((name => name.includes(search.value)))
    })

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
      names,
      search,
      matchingNames
    };
  },
}
</script>
