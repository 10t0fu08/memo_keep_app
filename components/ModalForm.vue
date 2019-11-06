<template>
  <b-modal id="modal-prevent-closing" ref="modal" title="メモを追加">
    <form ref="form">
      <b-form-group class="b-form-group">
        <b-form-input class="b-form-input" placeholder="タイトル" @input="set_title"></b-form-input>
        <b-form-textarea
          class="b-form-textarea"
          id="textarea-auto-height"
          placeholder="メモを入力..."
          rows="4"
          max-rows="4"
          @input="set_content"
        ></b-form-textarea>
        <div class="color_form_group">
          <select
            class="color_form"
            name="color"
            @input="set_color"
            :style="{backgroundColor:$store.state.color}"
          >
            <option value="null">背景色を選択してください</option>
            <option value="Red">赤色</option>
            <option value="Yellow">黄色</option>
            <option value="Green">緑色</option>
            <option value="Pink">桃色</option>
            <option value="Purple">紫色</option>
            <option value="Blue">青色</option>
          </select>
        </div>
      </b-form-group>
    </form>
    <template v-slot:modal-footer="{ cancel, ok }">
      <b-button size="sm" variant="light" @click="cancel(); cancel_form()">キャンセル</b-button>
      <b-button size="sm" variant="success" @click="ok(); add_memo()">追加</b-button>
    </template>
  </b-modal>
</template>
<script>
export default {
  data: function() {
    return {
      options: this.$store.state.options
    };
  },
  methods: {
    set_title: function() {
      this.$store.commit("set_title");
    },
    set_content: function() {
      this.$store.commit("set_content");
    },
    set_color: function() {
      this.$store.commit("set_color");
    },
    cancel_form: function() {
      this.$store.commit("cancel_form");
    },
    add_memo: function() {
      this.$store.commit("add_memo");
    }
  }
};
</script>
<style lang="scss" scoped>
.b-form-group {
  .b-form-input {
    border: none;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .b-form-textarea {
    border: none;
    font-size: 12px;
    resize: none;
    margin-bottom: 4px;
  }
  .color_form_group {
    // padding: 6px 12px;
    .color_form {
      border: none;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      font-weight: bold;
      width: 100%;
      height: 28px;
      font-size: 12px;
      box-sizing: border-box;
      padding: 6px 12px;
    }
  }
}
</style>