<template>
  <div class="home">
    Home
    <p ref="paragraph">
      Name: {{ name }}
      Age: {{ age }}
    </p>
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    // const paragraph = ref(null);

    const name = ref('mario');
    const age = ref(30);

    const handleClick = () => {
      name.value = 'luigi';
    }

    return {
      name,
      age,
      handleClick,
    };
  },
}
</script>
