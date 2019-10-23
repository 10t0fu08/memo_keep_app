<template>
  <header class="header">
    <button class="hum_menu" />
    <p class="title">memo keep app</p>
    <form class="serch_form">
      <button class="serch_icon" />
      <input type="text" class="serch_input" placeholder="検索" />
      <button class="close_icon" />
    </form>
    <button class="plus_icon">メモを追加</button>
    <p class="login_name">葛西透也</p>
  </header>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
$bg-color: #fdfdfd;

.header {
  background-color: #fdfdfd;
  height: 64px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  display: flex;
  // justify-content: space-between;
  padding: 8px;
  position: fixed;
  width: 100%;
  .hum_menu {
    height: 48px;
    width: 48px;
    background-color: darken($bg-color, 5%);
  }
  .title {
    color: #5f5f5f;
    font-size: 24px;
    line-height: 48px;
    font-weight: bold;
    margin: 0;
    margin-left: 12px;
    // padding-right: 48px;
  }
  .serch_form {
    width: 50%;
    height: 48px;
    padding: 0 10px 0 10px;
    // background-color: darken($bg-color, 5%);
    background-color: $bg-color;
    border-radius: 0.5em;
    display: flex;
    justify-content: space-between;
    margin-left: 120px;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    .serch_icon {
      height: 48px;
      width: 48px;
      // background-color: darken($bg-color, 5%);
      background-color: $bg-color;
    }
    .serch_input {
      width: 100%;
      font-weight: bold;
      &::placeholder {
        font-weight: normal;
      }
    }
    .close_icon {
      height: 48px;
      width: 48px;
      // background-color: darken($bg-color, 5%);
      background-color: $bg-color;
      margin-right: 0;
    }
  }
  .plus_icon {
    height: 48px;
    width: 120px;
    background: linear-gradient(to right, #7fbfff, #7fffff);
    border-radius: 25px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    margin-left: 48px;
    font-weight: bold;
    font-size: 12px;
    color: #fdfdfd;
  }
  .login_name {
    display: block;
    margin-left: auto;
    line-height: 48px;
    font-weight: bold;
    padding-right: 24px;
  }
}
</style>
