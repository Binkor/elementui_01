<template>
    <div>
        <!-- <input type="button" value="我是按钮"> -->
   <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary" round size="mini">主要按钮</el-button>
    <el-button type="success" plain >成功按钮</el-button>
    <el-button type="info" icon="el-icon-check" circle>信息按钮</el-button>
    <el-button type="warning" disabled>警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
  <br>
  <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left" >上一页</el-button>
    <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
  <el-button type="primary" :loading="true">加载中</el-button>
  <el-button icon="el-icon-s-promotion" >hhh</el-button>
    </div>
</template>
<script>
export default {
    name: "button.vue"
}
</script>
<style scoped>

</style>