;(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    857: function(e, l, t) {
      'use strict'
      t.r(l)
      var a = {
          data: function() {
            return {
              selectVlaue: null,
              stepList: [
                { label: '开始' },
                { label: 'POSUI' },
                { label: '11' },
                { label: 'GX123' },
                { label: '烘干破碎' },
                { label: '车间仓库' },
                { label: 'ui3333' },
                { label: 'hhh333' }
              ]
            }
          },
          methods: {
            selectChange: function(e) {
              console.log('selectChange', e, this.selectVlaue)
            }
          }
        },
        n = t(58),
        s = Object(n.a)(
          a,
          function() {
            var e = this,
              l = e.$createElement,
              t = e._self._c || l
            return t(
              'v-layout-page',
              [
                t(
                  'v-layout-page-item',
                  [
                    t('v-select', {
                      attrs: {
                        placeholder: '请选择工序',
                        multiple: '',
                        optionSource: e.stepList,
                        valueKey: 'label'
                      },
                      on: { change: e.selectChange },
                      model: {
                        value: e.selectVlaue,
                        callback: function(l) {
                          e.selectVlaue = l
                        },
                        expression: 'selectVlaue'
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
      l.default = s.exports
    }
  }
])
