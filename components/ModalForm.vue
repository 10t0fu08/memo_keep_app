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
        <!-- <input type="color" value="#eeeeee" class="color_form" @input="set_color" /> -->
        <input type="radio" name="color" value="Red" @click="set_color" />Red
        <input type="radio" name="color" value="Yellow" @click="set_color" />Yellow
        <input type="radio" name="color" value="Green" @click="set_color" />Green
      </b-form-group>
    </form>
    <template v-slot:modal-footer="{ cancel, ok}">
      <!-- <b>Custom Footer</b> -->
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="danger" @click="cancel(); cancel_form()">キャンセル</b-button>
      <b-button size="sm" variant="success" 　@click="ok(); add_memo()">追加</b-button>
    </template>
  </b-modal>
</template>
<script>
export default {
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
  }
  .color_form {
    padding: 6px 10px;
    width: 100%;
    height: 30px;
  }
}
</style>