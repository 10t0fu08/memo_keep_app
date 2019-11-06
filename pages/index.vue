<template>
  <div>
    <Memo />
    <Alert />
  </div>
</template>

<script>
import Memo from "~/components/Memo.vue";
import Alert from "~/components/Alert.vue";

export default {
  components: {
    Memo,
    Alert
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>
