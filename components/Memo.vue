<template>
  <div class="memo_wrap">
    <div
      v-for="(memo, index) in $store.state.memo"
      :key="index"
      class="memo_group"
      :style="{backgroundColor:memo.color}"
      v-show="!$store.state.search"
    >
      <div class="memo_header">
        <input :value="memo.title" class="memo_title" :readonly="!memo.edit" />
        <button
          class="edit_button"
          @click="$store.commit('edit_change',index);"
          v-show="!memo.edit"
        >編集</button>
        <button
          class="edit_button"
          @click="$store.commit('edit_change',index);"
          v-show="memo.edit"
        >完了</button>
      </div>
      <div class="memo_main">
        <textarea :value="memo.content" class="memo_content" rows="4" :readonly="!memo.edit"></textarea>
      </div>
      <div class="memo_footer">
        <button class="del_button" v-show="memo.edit" @click="$store.commit('del_memo',index)">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>

    <!-- 検索結果 -->
    <div
      v-for="(memo, index) in $store.state.search_memo"
      :key="index"
      class="memo_group"
      :style="{backgroundColor:memo.color}"
      v-show="$store.state.search"
    >
      <div class="memo_header">
        <input :value="memo.title" class="memo_title" readonly />
      </div>
      <div class="memo_main">
        <textarea class="memo_content" :value="memo.content" rows="4" readonly></textarea>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.memo_wrap {
  // header分下げる
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 24px;
  .memo_group {
    list-style: none;
    height: 164px;
    width: 18%;
    min-width: 240px;
    border-radius: 0.25em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 8px;
    margin-top: 16px;
    box-sizing: border-box;
    position: relative;
    @media screen and(max-width:527px) {
      margin: 16px auto 0 auto;
    }
    .memo_header {
      display: flex;
      width: 100%;
      padding: 3px 6px;
      justify-content: space-between;
      .memo_title {
        // インライン解除
        display: block;
        font-size: 16px;
        font-weight: bold;
        width: 80%;
        margin-left: 0;
      }
      .edit_button {
        width: 60px;
        height: 24px;
        background: #fafafa;
        border-radius: 0.25em;
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
        font-size: 14px;
      }
    }
    .memo_footer {
      width: 100%;
      padding: 3px 6px;
      height: 32px;
      .del_button {
        display: block;
        margin-left: auto;
      }
    }
  }
}
</style>