;(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    816: function(e) {
      e.exports = JSON.parse(
        '{"success":true,"code":200,"msg":"成功","data":{"id":"1498904492217241602","stocktakePlanNo":"PD-YX-20220302002","workshopId":301,"workshopLabel":"压型车间","planStocktakeDate":"2022-03-03","warehouseId":1,"warehouseName":"压型电极仓","stocktakeJobStatus":4,"stocktakeJobStatusLabel":"待盘点录入","stocktakeType":2,"stocktakeTypeLabel":"临时盘点","originTypeList":[1,3],"originTypeListLabel":"在制品,合格品","planStocktakeUserName":"","planStocktakeUserId":0,"createRemark":"测试"}}'
      )
    },
    835: function(e, a, t) {
      'use strict'
      t.r(a)
      var l = t(61),
        s = t(102),
        o = (t(100), t(816)),
        i = {
          name: 'VDetailDemo',
          data: function() {
            return {
              descData: [
                { label: '盘点单编号', fieldName: 'stocktakePlanNo', value: '' },
                { label: '盘点单状态', fieldName: 'stocktakeJobStatusLabel', value: '' },
                { label: '盘点负责人', fieldName: 'planStocktakeUserName', value: '' },
                { label: '计划盘点日期', fieldName: 'planStocktakeDate', value: '' },
                {
                  label: '字典回显',
                  fieldName: 'stocktakeJobStatus',
                  value: '',
                  filters: { list: 'stockTakeTypeList', key: 'id', label: 'label' }
                },
                { label: '车间', fieldName: 'workshopLabel', value: '' },
                { label: '仓库', fieldName: 'warehouseName', value: '' },
                { label: '盘点所有物料', fieldName: 'originTypeListLabel', value: '' },
                { label: '备注', fieldName: 'createRemark', value: '', span: 4 }
              ],
              listTypeInfo: {
                stockTakeTypeList: [
                  { label: '在制品', id: 1 },
                  { label: '待检品', id: 2 },
                  { label: '合格品', id: 3 },
                  { label: '报废品', id: 4 }
                ]
              },
              dataList: {}
            }
          },
          created: function() {
            this.getTakeRecordHead()
          },
          methods: {
            getTakeRecordHead: function() {
              var e = this
              return Object(s.a)(
                Object(l.a)().mark(function a() {
                  var t
                  return Object(l.a)().wrap(function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), o
                        case 2:
                          ;(t = a.sent).success &&
                            ((e.dataList = t.data),
                            e.descData.map(function(e) {
                              e.value = t.data[e.fieldName]
                            }))
                        case 4:
                        case 'end':
                          return a.stop()
                      }
                  }, a)
                })
              )()
            }
          }
        },
        c = t(58),
        n = Object(c.a)(
          i,
          function() {
            var e = this.$createElement,
              a = this._self._c || e
            return a(
              'v-layout-page',
              [
                a(
                  'v-layout-page-item',
                  [
                    a('v-detail', {
                      attrs: {
                        listTypeInfo: this.listTypeInfo,
                        dataList: this.dataList,
                        descData: this.descData
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = n.exports
    }
  }
])
