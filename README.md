# vue-pandora

[![Build Status](https://travis-ci.org/yelingfeng/vue-pandora.svg?branch=master)](https://travis-ci.org/yelingfeng/vue-pandora)
![gitub](https://img.shields.io/github/package-json/v/yelingfeng/vue-pandora)
![npm](https://img.shields.io/npm/v/vue-pandora)

A component library of custom secondary encapsulation about element-ui

## WARNING

请更新最新v1.2版本 ,v1.1之前npm删除了

## Install

```node

  yarn add vue-pandora

```

## Usage

```ts
import VuePandora from 'vue-pandora'

vue.use(VuePandora)
```

```vue
<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <h1>Vue-pandora</h1>
        <VForm :option="formObj" ref="form"></VForm>
        <VTable :option="tableOpt" :height="tableHeight"></VTable>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Ref } from 'vue-property-decorator'
import { VForm } from 'vue-pandora'
import axios from 'axios'
@Component({})
export default class App extends Vue {
  @Ref() readonly form!: VForm
  private formObj: any = {
    inline: true,
    labelPosition: 'right',
    labelWidth: '100',
    btnPos: 'right',
    items: [
      {
        label: '任务名称',
        type: 'text',
        comOpt: {
          id: 'taskName',
          width: 210,
          disabled: false,
          show: true,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '任务内容',
        type: 'text',
        comOpt: {
          id: 'taskContent',
          width: 210,
          disabled: false,
          show: false,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '目标',
        type: 'text',
        comOpt: {
          id: 'targetIpInfo',
          width: 210,
          disabled: false,
          show: true,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '创建日期',
        type: 'date',
        comOpt: {
          id: 'queryCreateTime',
          clearable: false,
          value: '',
          type: 'datetimerange',
          disabled: false,
          width: '210',
          pickOptions: {}
        }
      },
      {
        label: '更新日期',
        type: 'date',
        comOpt: {
          id: 'queryUpdateTime',
          clearable: false,
          value: '',
          type: 'datetimerange',
          disabled: false,
          width: '210',
          pickOptions: {}
        }
      },
      {
        label: '任务状态',
        type: 'select',
        comOpt: {
          id: 'taskStatusId',
          value: '0',
          width: 210,
          disabled: false,
          data: [
            { name: '全部', value: '0' },
            { name: '未提交', value: '1' },
            { name: '已提交', value: '2' },
            { name: '查询中', value: '3' },
            { name: '已完成', value: '4' }
          ]
        }
      },
      {
        label: '文件状态',
        type: 'select',
        wrap: true,
        comOpt: {
          id: 'fileStatusId',
          value: '0',
          width: 210,
          disabled: false,
          show: true,
          data: [
            { name: '全部', value: '0' },
            { name: '未下载', value: '1' },
            { name: '已下载', value: '2' }
          ]
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'query',
          value: '查询',
          width: 210,
          disabled: false,
          click: this.querySearchAction
        }
      },
      {
        comOpt: {
          id: 'query',
          value: '新建',
          width: 210,
          disabled: false,
          click: this.addSearchAction
        }
      }
    ]
  }
  private tableOpt: any = {
    stripe: true,
    column: [
      { name: '序号', value: 'index', fixed: 'left', width: 50, align: 'center' },
      { name: '任务名称', value: 'taskName', fixed: 'left', align: 'center' },
      { name: '创建时间', value: 'createTime', align: 'center' },
      { name: '更新时间', value: 'updateTime', align: 'center' },
      { name: '任务状态', value: 'taskStatusName', align: 'center' },
      { name: '任务内容', value: 'taskContent', align: 'center' },
      { name: '任务结果', value: 'jobResult', align: 'center' },
      {
        name: '操作',
        value: '',
        align: 'center',
        fixed: 'right',
        width: 150,
        operations: [
          {
            label: '详情',
            type: 'label',
            disCallBack() {
              return false
            },
            handlerClick: (row: any) => {
              console.log(row)
            }
          },
          {
            label: '编辑',
            type: 'label',
            handlerClick: (row: any) => {
              console.log(row)
            }
          },
          {
            label: '删除',
            type: 'label',
            disCallBack(row: any) {},
            handlerClick: (row: any) => {}
          }
        ]
      }
    ],
    data: [],
    // 是否分页
    pagination: true,
    // 分页参数
    pageOpt: {
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 10
    }
  }
  tableHeight = 400

  querySearchAction() {
    const searchValue = this.form.getValue()
    this.$message.info(searchValue)
  }
  addSearchAction() {
    this.$message.info('add action')
  }

  mounted() {
    axios.get('/api/tablelist').then(resp => {
      const list = resp.data.data.list as Array<object>
      this.tableOpt.data = list
    })
  }
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
```
