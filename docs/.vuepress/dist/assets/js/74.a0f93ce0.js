;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    876: function(t, e, a) {
      'use strict'
      a.r(e)
      a(77)
      var n = {
          data: function() {
            return {
              table: {
                data: [],
                columns: [
                  { label: '物料编号', width: '100px', prop: 'code' },
                  { label: '物料名称', width: '149px', prop: 'name' },
                  { label: '规格', width: '149px', prop: 'spec' },
                  { label: '单位', width: '110px', prop: 'unitName' }
                ]
              }
            }
          },
          created: function() {
            this.initData()
          },
          methods: {
            initData: function() {
              for (var t = 0; t < 1e4; t++)
                this.table.data.push({
                  id: t,
                  code: t,
                  name: '物料名称' + t,
                  spec:
                    '物料名称物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名称' +
                    t,
                  unitName: '吨'
                })
            },
            radioChange: function(t) {
              console.log('传给后台的值', t)
            }
          }
        },
        l = a(58),
        i = Object(l.a)(
          n,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'v-layout-page',
              [
                e(
                  'v-layout-page-item',
                  [
                    e('v-select-table', {
                      attrs: {
                        table: this.table,
                        columns: this.table.columns,
                        'use-virtual': '',
                        keywords: { label: 'name', value: 'id' }
                      },
                      on: { radioChange: this.radioChange }
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
      e.default = i.exports
    }
  }
])
