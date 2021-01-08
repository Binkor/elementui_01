<template>
    <div>
      <h1>Layout布局</h1>
      <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple" style="border:1px red solid">占用6</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="border:1px red solid">6</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="border:1px red solid">6</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" style="border:1px red solid">6</div></el-col>
      </el-row>
      <h1>偏移</h1>
      <el-row>
          <el-col :span="12" :offset="4"><div class="grid-content bg-purple" style="border:1px blue solid">占用12</div></el-col>
          <el-col :span="12" :offset="4" :push="3"><div class="grid-content bg-purple" style="border:1px blue solid">占用12</div></el-col>
          <el-col :span="6" ><div class="grid-content bg-purple" style="border:1px red solid">占用12</div></el-col>
      </el-row>
    </div>
</template>
<script>
export default {
    name:"Layout"
}
</script>
<style scoped>

</style>