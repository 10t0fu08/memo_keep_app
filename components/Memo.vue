<template>
  <div class="memo_wrap">
    <p class="memo_title"></p>
    <ul v-for="memo in $store.state.memo" class="memo_group">
      <h1>{{memo.title}}</h1>
      <li>{{memo.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang=scss"">
h1 {
  font-size: 100px;
}
</style>