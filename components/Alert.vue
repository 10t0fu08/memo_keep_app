<template>
  <div class="alert_wrap" name="transit">
    <b-alert class="alert" show variant="dark" v-show="$store.state.alert">
      <i class="far fa-trash-alt"></i>メモが削除されました
    </b-alert>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.alert_wrap {
  position: absolute;
  bottom: 24px;
  left: 0;
  .alert {
    font-weight: bold;
    font-size: 12px;
    color: #666;
    border-radius: 0;
    margin: 0;
    padding: 12px 24px;
    .fa-trash-alt {
      margin-right: 4px;
    }
  }
}
</style>