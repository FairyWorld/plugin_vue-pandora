;(window.webpackJsonp = window.webpackJsonp || []).push([
  [75],
  {
    877: function(t, e, a) {
      'use strict'
      a.r(e)
      a(77)
      var l = {
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
              for (var t = 0; t < 10; t++)
                this.table.data.push({
                  id: t + 1,
                  code: t + 1,
                  name: '物料名称'.concat(t),
                  spec: '物料名称1' + t,
                  unitName: '吨'
                })
            },
            radioChange: function(t) {
              console.log('传给后台的值', t)
            },
            clear: function() {
              this.$refs.selectTable.clear()
            }
          }
        },
        i = a(58),
        n = Object(i.a)(
          l,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'v-layout-page',
              [
                e(
                  'v-layout-page-item',
                  { staticStyle: { display: 'flex', 'flex-direction': 'row' } },
                  [
                    e('v-select-table', {
                      ref: 'selectTable',
                      staticStyle: { width: '50%' },
                      attrs: {
                        table: this.table,
                        columns: this.table.columns,
                        'max-height': 540,
                        keywords: { label: 'name', value: 'id' },
                        rowClickRadio: !1
                      },
                      on: { radioChange: this.radioChange }
                    }),
                    this._v(' '),
                    e(
                      'el-button',
                      {
                        staticStyle: { 'margin-left': '15px' },
                        attrs: { type: 'primary' },
                        on: { click: this.clear }
                      },
                      [this._v('清空选中')]
                    )
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
      e.default = n.exports
    }
  }
])
