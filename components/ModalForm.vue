<template>
  <b-modal id="modal-prevent-closing" ref="modal" title="メモを追加">
    <form ref="form">
      <b-form-group class="b-form-group">
        <b-form-input class="b-form-input" placeholder="タイトル"></b-form-input>
        <b-form-textarea
          class="b-form-textarea"
          id="textarea-auto-height"
          placeholder="メモを入力..."
          rows="4"
          max-rows="4"
        ></b-form-textarea>
        <input type="color" value="#eeeeee" class="color_form" />
      </b-form-group>
    </form>
  </b-modal>
</template>
<script>
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