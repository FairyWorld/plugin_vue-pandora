<template>
  <div id="app">
    <el-row :gutter="24">
      <el-col :span="4">
        <el-menu router default-active="/form" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Demo</span>
            </template>
            <el-menu-item-group>
              <template slot="title">基础例子</template>
              <el-menu-item index="/default">default</el-menu-item>
              <el-menu-item index="/demo">demo</el-menu-item>
              <el-menu-item index="/tableDemo">tableDemo</el-menu-item>
              <el-menu-item index="/tooltipDemo">tooltipDemo</el-menu-item>
              <el-menu-item index="/multiSort">multiSort</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="表单验证">
              <el-menu-item index="/form">form</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="高级查询">
              <el-menu-item index="/queryCondition">queryCondition</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="formList测试">
              <el-menu-item index="/formlist">formlist</el-menu-item>
              <el-menu-item index="/hooks">hooksDemo</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="GIS地图">
              <el-menu-item index="/gisMap">gisMapDemo</el-menu-item>
              <el-menu-item index="/gisMapGL">gisMapGLDemo</el-menu-item>
              <el-menu-item index="/hooks">hooksDemo</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <h1>Vue-pandora</h1>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Ref } from 'vue-property-decorator'
@Component({})
export default class App extends Vue {
  mounted() {}
}
</script>

<style lang="less">
#app,
#app > div {
  width: 100%;
  height: 100%;
  min-width: 900px;
}
</style>
