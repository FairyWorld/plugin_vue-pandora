;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61],
  {
    862: function(e, t, p) {
      'use strict'
      p.r(t)
      p(195), p(62)
      var a = {
          data: function() {
            return {
              inputVal: '',
              isShowInput: !0,
              table: {
                data: [
                  { id: 1, code: 1, name: '物料名称1', spec: '物料规格1', unitName: '吨' },
                  { id: 2, code: 2, name: '物料名称2', spec: '物料规格2', unitName: '吨' },
                  { id: 3, code: 3, name: '物料名称3', spec: '物料规格3', unitName: '吨' },
                  { id: 4, code: 4, name: '物料名称4', spec: '物料规格4', unitName: '吨' },
                  { id: 5, code: 5, name: '物料名称5', spec: '物料规格5', unitName: '吨' },
                  { id: 6, code: 6, name: '物料名称6', spec: '物料规格6', unitName: '吨' },
                  { id: 7, code: 7, name: '物料名称7', spec: '物料规格7', unitName: '吨' },
                  { id: 8, code: 8, name: '物料名称8', spec: '物料规格8', unitName: '吨' },
                  { id: 9, code: 9, name: '物料名称9', spec: '物料规格9', unitName: '吨' }
                ],
                columns: [
                  { label: '物料编号', width: '100px', prop: 'code' },
                  { label: '物料名称', width: '149px', prop: 'name' },
                  { label: '规格', width: '149px', prop: 'spec' },
                  { label: '单位', width: '110px', prop: 'unitName' },
                  { label: '物料编号1', width: '149px', prop: 'code' },
                  { label: '物料名称1', width: '149px', prop: 'name' },
                  { label: '规格1', width: '149px', prop: 'spec' },
                  { label: '单位1', width: '110px', prop: 'unitName' },
                  { label: '物料编号11', width: '149px', prop: 'code' },
                  { label: '物料名称11', width: '149px', prop: 'name' },
                  { label: '规格11', width: '149px', prop: 'spec' },
                  { label: '单位11', width: '110px', prop: 'unitName' },
                  { label: '物料编号111', width: '149px', prop: 'code' },
                  { label: '物料名称111', width: '149px', prop: 'name' },
                  { label: '规格111', width: '149px', prop: 'spec' },
                  { label: '单位111', width: '110px', prop: 'unitName' }
                ]
              }
            }
          },
          methods: {
            radioChange: function(e) {
              console.log('选中', e),
                (this.isShowInput = !0),
                (this.inputVal = ''
                  .concat(e.name)
                  .concat(e.code)
                  .concat(e.unitName))
            },
            clickInput: function() {
              console.log('input--focus'),
                this.inputVal || (this.inputVal = '回显后台返回的值：物料名称3')
            },
            blurInput: function() {
              console.log('input失焦'), (this.isShowInput = !1)
            }
          }
        },
        n = p(58),
        i = Object(n.a)(
          a,
          function() {
            var e = this,
              t = e.$createElement,
              p = e._self._c || t
            return p(
              'v-layout-page',
              [
                p(
                  'v-layout-page-item',
                  [
                    p('v-select-table', {
                      ref: 'selectTable',
                      attrs: {
                        table: e.table,
                        columns: e.table.columns,
                        'max-height': 400,
                        keywords: { label: 'name', value: 'id' },
                        'is-show-input': e.isShowInput,
                        inputAttr: { placeholder: '请回显后台返回的值' }
                      },
                      on: {
                        'input-blur': e.blurInput,
                        'input-focus': e.clickInput,
                        radioChange: e.radioChange
                      },
                      model: {
                        value: e.inputVal,
                        callback: function(t) {
                          e.inputVal = t
                        },
                        expression: 'inputVal'
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
      t.default = i.exports
    }
  }
])
