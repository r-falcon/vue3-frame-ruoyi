<template>
  <div class="app-container">
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
    <div class="box">这是测试文字</div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 18px;

  &:nth-of-type(2n) {
    background: red;
    color: #fff;
  }

  &:nth-of-type(2n-1) {
    background: blue;
  }
}
</style>
