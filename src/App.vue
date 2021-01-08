<template>
  <router-view></router-view>
</template>

<script>
import { HelloWorld } from "./components";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
