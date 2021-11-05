<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper_item"><span>昵称</span><el-input /></div>
    <div class="conditions-wrapper_item"><span>时间</span><el-input /></div>
    <div class="conditions-wrapper_item"><span>职位</span><el-input /></div>
    <div class="conditions-wrapper_item"><span>年限</span><el-input /></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conditions-wrapper{
    display: flex;
    align-items: center;
    width: 100%;
    &_item {
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
           width: 70px;
           margin-left: 20px;
        }
    }
}
</style>
