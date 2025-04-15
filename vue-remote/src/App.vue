<template>
  <div class="flex-col mt-10 flex justify-center items-center">
    <div>Hello Vue</div>
    <Counter />
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>
