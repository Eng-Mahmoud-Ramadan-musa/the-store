<template>
  <div class="home">
    <hello-world />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data: function () {
    return {
      myData: [],
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
