<template>
  <div class="memo_wrap">
    <div
      v-for="memo in $store.state.memo"
      :key="memo.id"
      class="memo_group"
      :style="{backgroundColor:memo.color}"
    >
      <div class="memo_header">
        <input :value="memo.title" class="memo_title" />
        <button class="edit_button">編集</button>
      </div>
      <div class="memo_main">
        <textarea :value="memo.content" class="memo_content"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.memo_wrap {
  // header分下げる
  margin-top: 64px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .memo_group {
    list-style: none;
    height: 25vh;
    width: 18%;
    min-width: 240px;
    border-radius: 0.5em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 8px;
    margin-top: 16px;
    box-sizing: border-box;
    .memo_header {
      display: flex;
      width: 100%;
      padding: 3px 6px;
      .memo_title {
        // インライン解除
        display: block;
        font-size: 20px;
        font-weight: bold;
        width: 100%;
      }
      .edit_button {
        width: 60px;
        height: 24px;
        background: #fafafa;
        border-radius: 12px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        font-size: 12px;
        font-weight: bold;
      }
    }
    .memo_main {
      padding: 3px 6px;
      .memo_content {
        // インライン解除
        display: block;
        width: 100%;
        height: 80%;
        resize: none;
        overflow: visible;
      }
    }
  }
}
</style>