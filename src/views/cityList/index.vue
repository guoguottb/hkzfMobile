<template>
  <div>
    <navBar :title="title"></navBar>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
export default {
  data() {
    return {
      title: "城市列表",
    };
  },
  components: {
    navBar,
  },
};
</script>

<style>
</style>