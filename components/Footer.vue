<template>
  <div class="footer">
    <p class="footer_text">Developer | Toya Kasai</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.footer {
  width: 100%;
  height: 24px;
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  background-color: #fafafa;
  .footer_text {
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
  }
}
</style>