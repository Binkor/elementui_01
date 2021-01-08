<template>
    <div>
     <h1>Container</h1>
  <el-container>
    <el-header><div style="border:1px red solid">header</div></el-header>
  <el-container>
      <el-aside width="400px" height="100px">
        <el-menu :default-openeds="['1','3']">
        <el-submenu index="1">
          <template slot="title">分组一</template>
        </el-submenu>
      </el-menu>
      </el-aside>
    <el-main><div style="border:1px green solid">main</div></el-main>
  </el-container>
    <el-footer height="50px"><div style="border:1px black solid">footer</div></el-footer>
  </el-container>
  <h1>radio</h1>
  <el-radio v-model="radio" @change="aa" name="sex" label="1">man</el-radio>
  <el-radio v-model="radio" @change="aa" name="sex" label="2">woman</el-radio>
  <el-radio border disabled>non</el-radio>
 <br><br>
  <el-radio-group v-model="radio1" fill="pink" text-color="red" size="mini">
    <el-radio-button :label="3">备选项</el-radio-button>
    <el-radio-button :label="6">备选项</el-radio-button>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
  <h1>checkbox</h1>
  <el-checkbox v-model="checked" @change=bb true-label="apple">apple</el-checkbox>
  <el-checkbox v-model="checked" @change=bb true-label="banana">banana</el-checkbox>
  <el-checkbox v-model="checked" true-label="peach">peach</el-checkbox>
  <br>
   <el-checkbox-group v-model="checkList" :max="3">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
  <h1>input</h1>
  <el-input type="textarea" size="medium" rows="5" v-model="input" placeholder="请输入内容"></el-input>
  <el-input :maxlength="3" v-model="input" show-word-limit clearable autofocus="false" @clear=cc></el-input>
  <el-input type="password" prefix-icon="el-icon-lock" suffix-icon="el-icon-unlock" show-password v-model="password" placeholder="请输入密码"></el-input>
  <el-input v-model="user" ref="inputs"></el-input>
  <el-button @click="focusinput">focus</el-button>
  <el-button @click="blurinput">blur</el-button>
  <el-input placeholder="请输入内容" v-model="input1">
    <template slot="prepend">Http://</template>
  </el-input>

   <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
   <h1>Select 选择器</h1>
   <el-select v-model="fruit" placeholder="请选择">
     <el-option value="apple">apple</el-option>
     <el-option value="banana">banana</el-option>
   </el-select>
   <el-select v-model="bu" multiple clearable>
     <el-option v-for="option in options" :label="option.name" :value="option.id" :key="option.id"></el-option>
   </el-select>
    </div>

</template>
<script>
export default {
     name:"Container",
     data(){
       return{
         radio:'1',
         radio1:3,
         checked:true,
         checkList: ['选中且禁用','复选框 A'],
         input: '',
         password:'',
         user:"oo",
         input1:'',
         num:'1',
         fruit:'',
         bu:'',
         options:[
           {id:'1',name:"小米"},
           {id:'2',name:"华为"},
         ],

       }
     },
     methods:{
       aa(){
         alert();
       },
       bb(){
         alert();
     },
     cc(){
       alert("yes or no");
     },
     focusinput(){
       this.$refs.inputs.focus();
     },
     blurinput(){
       this.$refs.inputs.blur();
     },
     handleChange(value){
       console.log(value);
     }
    }
}
</script>
<style scoped>

</style>