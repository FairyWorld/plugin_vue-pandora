;(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    783: function(e) {
      e.exports = JSON.parse(
        '{"success":true,"code":200,"msg":"成功","data":{"pageSize":6,"pages":5,"total":27,"pageNum":1,"sortNum":null,"records":[{"id":3,"materialName":"UHP450*2250（450*2250 UHP)"},{"id":5,"materialName":"二培UHP450*2250（450*2250 UHP)"},{"id":6,"materialName":"石墨UHP450*2250-6（450*2550 UHP)"},{"id":7,"materialName":"石墨UHP450*2250-7（450*2550 UHP)"},{"id":8,"materialName":"石墨UHP450*2250-8（450*2550 UHP)"},{"id":9,"materialName":"石墨UHP450*2250-9（450*2550 UHP)"}]}}'
      )
    },
    784: function(e) {
      e.exports = JSON.parse(
        '{"success":true,"code":200,"msg":"成功","data":{"pageSize":6,"pages":5,"total":27,"pageNum":2,"sortNum":null,"records":[{"id":10,"materialName":"石墨UHP450*2250-10（450*2550 UHP)"},{"id":11,"materialName":"石墨UHP450*2250-11（450*2550 UHP)"},{"id":12,"materialName":"石墨UHP450*2250-12（450*2550 UHP)"},{"id":13,"materialName":"石墨UHP450*2250-13（450*2550 UHP)"},{"id":14,"materialName":"石墨UHP450*2250-14（450*2550 UHP)"},{"id":15,"materialName":"石墨UHP450*2250-15（450*2550 UHP)"}]}}'
      )
    },
    858: function(e, a, t) {
      'use strict'
      t.r(a)
      var r = t(61),
        i = t(102),
        l = t(783),
        n = t(784),
        s = {
          name: 'VSelectDemo',
          data: function() {
            return {
              materialId: null,
              materialIdArr: [],
              setSelectPage: { pageSize: 6, currentPage: 1, pagerCount: 7, total: 0 }
            }
          },
          created: function() {
            this.selectMaterialList(1)
          },
          methods: {
            pageChange: function(e) {
              ;(this.setSelectPage.currentPage = e),
                this.selectMaterialList(this.setSelectPage.currentPage)
            },
            selectMaterialList: function(e) {
              var a = this
              return Object(i.a)(
                Object(r.a)().mark(function t() {
                  var i
                  return Object(r.a)().wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (1 !== e) {
                            t.next = 6
                            break
                          }
                          return (t.next = 3), l
                        case 3:
                          ;(i = t.sent), (t.next = 9)
                          break
                        case 6:
                          return (t.next = 8), n
                        case 8:
                          i = t.sent
                        case 9:
                          i.success &&
                            ((a.materialIdArr = i.data.records),
                            (a.setSelectPage.total = i.data.total))
                        case 10:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )()
            },
            selectChange: function(e) {
              console.log('selectChange', e, this.materialId)
            }
          }
        },
        c = t(58),
        o = Object(c.a)(
          s,
          function() {
            var e = this,
              a = e.$createElement,
              t = e._self._c || a
            return t(
              'v-layout-page',
              [
                t(
                  'v-layout-page-item',
                  [
                    t('v-select', {
                      attrs: {
                        optionSource: e.materialIdArr,
                        labelKey: 'materialName',
                        valueKey: 'id',
                        multiple: '',
                        isShowPagination: '',
                        placeholder: '请选择（多选分页）',
                        paginationOption: e.setSelectPage
                      },
                      on: { 'current-change': e.pageChange, change: e.selectChange },
                      model: {
                        value: e.materialId,
                        callback: function(a) {
                          e.materialId = a
                        },
                        expression: 'materialId'
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
      a.default = o.exports
    }
  }
])
