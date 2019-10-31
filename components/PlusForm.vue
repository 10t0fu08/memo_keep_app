<template>
  <!-- モーダル用レイヤー -->
  <div class="layer">
    <form class="memo_form">
      <div class="title_form_wrap">
        <input
          name="title"
          type="text"
          class="title_form"
          placeholder="タイトル"
          :value="$store.state.memo.title"
          @change="$store.commit('set_title')"
        />
      </div>
      <div class="memo_content_wrap">
        <textarea name="memo" placeholder="メモを入力..." class="memo_content"></textarea>
      </div>
      <div class="color_form_wrap">
        <input name="color" type="color" class="color_form" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"scoped>
.layer {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  .memo_form {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    .title_form {
      border: 1px solid #000000;
      width: 100%;
      height: 100%;
    }
  }
}
</style>