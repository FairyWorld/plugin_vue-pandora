<template>
  <v-layout-page>
    <v-layout-page-item>
      <el-radio-group v-model="descColumn" size="small">
        <el-radio-button :label="1">一行展示</el-radio-button>
        <el-radio-button :label="2">一行展示2项</el-radio-button>
        <el-radio-button :label="3">一行展示3项</el-radio-button>
        <el-radio-button :label="4">一行展示4项</el-radio-button>
      </el-radio-group>

      <v-detail :descData="descData" :descColumn="descColumn" />
    </v-layout-page-item>
  </v-layout-page>
</template>
<script>
export default {
  name: "VDetailDemo",
  data() {
    return {
      descColumn: 1,
      descData: [
        {
          label: "盘点单编号",
          fieldName: "stocktakePlanNo",
          value: "",
        },
        {
          label: "盘点单状态",
          fieldName: "stocktakeJobStatusLabel",
          value: "",
        },
        {
          label: "盘点负责人",
          fieldName: "planStocktakeUserName",
          value: "",
        },
        {
          label: "计划盘点日期",
          fieldName: "planStocktakeDate",
          value: "",
        },
        {
          label: "车间",
          fieldName: "workshopLabel",
          value: "",
        },
        {
          label: "仓库",
          fieldName: "warehouseName",
          value: "",
        },
        {
          label: "盘点所有物料",
          fieldName: "originTypeListLabel",
          value: "",
        },
        {
          label: "备注",
          fieldName: "createRemark",
          value: "",
          span: 4,
        },
      ],
    };
  },
  created() {
    const dataList = {
      id: "1498904492217241602",
      stocktakePlanNo: "PD-YX-20220302002",
      workshopId: 301,
      workshopLabel: "压型车间",
      planStocktakeDate: "2022-03-03",
      warehouseId: 1,
      warehouseName: "压型电极仓",
      stocktakeJobStatus: 4,
      stocktakeJobStatusLabel: "待盘点录入",
      stocktakeType: 2,
      stocktakeTypeLabel: "临时盘点",
      originTypeList: "[1, 3]",
      originTypeListLabel: "在制品,合格品",
      planStocktakeUserName: "张三",
      planStocktakeUserId: 0,
      createRemark: "测试",
    };
    this.descData.map((item) => {
      item.value = dataList[item.fieldName];
    });
  },
};
</script>
