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
    const paragraph = ref(null);

    let name = 'mario';
    let age = 30;

    const handleClick = () => {
      console.log('Paragraph:', paragraph);
    }

    return {
      name,
      age,
      handleClick,
      paragraph
    };
  },
}
</script>
