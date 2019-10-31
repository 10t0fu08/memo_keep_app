<template>
  <b-container>
    <b-row class="justify-content-md-center header">
      <b-col col lg="3">
        <button class="hum_menu" />
        <p class="title">memo keep app</p>
      </b-col>
      <b-col col lg="6" md="auto">
        <form class="serch_form">
          <button class="serch_icon" />
          <input type="search" class="serch_input" placeholder="search" />
          <button class="close_icon" />
        </form>
      </b-col>
      <b-col col lg="3">
        <button class="plus_icon">メモを追加</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$bg-color: #fdfdfd;
.container {
  width: 100%;
  height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  .row {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 64px;
    margin: 0;
    box-sizing: border-box;
    .col {
      height: 100%;
      box-sizing: border-box;
      display: flex;
      .hum_menu {
        width: 40px;
        height: 40px;
        background-color: #eee;
      }
      .title {
        margin: 0;
        line-height: 40px;
        font-size: 22px;
        font-weight: bold;
        margin-left: 8px;
      }
    }
    .serch_form {
      width: 90%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      border-radius: 0.5em;
      display: flex;
      padding: 4px;
      margin: auto;
      .serch_icon {
        width: 32px;
        height: 32px;
        background-color: #eee;
      }
      .serch_input {
        height: 32px;
        width: 100%;
      }
      .close_icon {
        width: 32px;
        height: 32px;
        background-color: #eee;
      }
    }
    .plus_icon {
      width: 112px;
      height: 40px;
      background-color: #00b900;
      border-radius: 25px;
      font-size: 14px;
      font-weight: bold;
      color: #fafafa;
      margin: auto;
    }
  }
}
</style>
