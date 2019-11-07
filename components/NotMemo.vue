<template>
  <div class="not_memo_wrap">
    <div class="img_wrap">
      <img src="../assets/img/notmemo_img.png" class="img_icon" />
      <p class="text">メモが追加されると表示されます</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.not_memo_wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  .img_wrap {
    width: 240px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.25;
    .img_icon {
      display: block;
      width: 80%;
      margin: auto;
    }
    .text {
      margin-top: 24px;
      font-weight: bold;
    }
  }
}
</style>