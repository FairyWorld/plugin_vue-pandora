<template>
  <v-layout-page>
    <v-layout-page-item>
      <v-detail
        :listTypeInfo="listTypeInfo"
        :dataList="dataList"
        :descData="descData"
      />
    </v-layout-page-item>
  </v-layout-page>
</template>
<script>
import data from "./data.json";
export default {
  name: "VDetailDemo",
  data() {
    return {
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
          label: "字典回显",
          fieldName: "stocktakeJobStatus",
          value: "",
          filters: {
            list: "stockTakeTypeList",
            key: "id",
            label: "label",
          },
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
      listTypeInfo: {
        stockTakeTypeList: [
          {
            label: "在制品",
            id: 1,
          },
          {
            label: "待检品",
            id: 2,
          },
          {
            label: "合格品",
            id: 3,
          },
          {
            label: "报废品",
            id: 4,
          },
        ], // 盘点类型
      },
      dataList: {},
    };
  },
  created() {
    this.getTakeRecordHead();
  },
  methods: {
    // 头部信息
    async getTakeRecordHead() {
      const res = await data;
      // console.log('头部信息', res)
      if (res.success) {
        this.dataList = res.data;
        // 回显基础信息
        this.descData.map((item) => {
          item.value = res.data[item.fieldName];
        });
      }
    },
  },
};
</script>
