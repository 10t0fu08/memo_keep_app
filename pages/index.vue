<template>
  <div>
    <Memo v-show="$store.state.memo_flag" />
    <NotMemo v-show="!$store.state.memo_flag" />
    <!-- <Alert /> -->
  </div>
</template>

<script>
import Memo from "~/components/Memo.vue";
import Alert from "~/components/Alert.vue";
import NotMemo from "~/components/NotMemo.vue";

export default {
  components: {
    Memo,
    Alert,
    NotMemo
  },
  data: function() {
    return {
      memo: this.$store.state.memo
    };
  },
  watch: {
    memo: function() {
      // console.log("run!");

      if (this.$store.state.memo.length === 0) {
        this.$store.state.memo_flag = false;
      } else if (this.$store.state.memo.length !== 0) {
        this.$store.state.memo_flag = true;
      }
      // console.log(this.$store.state.memo_check);
      // console.log(this.$store.state.memo.length);
    }
  },
  created: function() {
    this.$store.commit("memo_check");
  }
};
</script>

<style>
</style>
