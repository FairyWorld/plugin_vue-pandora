;(window.webpackJsonp = window.webpackJsonp || []).push([
  [79],
  {
    882: function(e, t, n) {
      'use strict'
      n.r(t)
      var i = {
          name: 'VTreeSelectDemo',
          data: function() {
            return {
              defaultValue: { id: '1', label: '一级 1菈妮' },
              treeProps: { value: 'id', children: 'children', label: 'name' },
              treeList: [
                {
                  id: '1',
                  name: '一级 1菈妮',
                  children: [
                    { id: '1-1', name: '二级 1-1', children: [{ id: '1-1-1', name: '三级 1-1-1' }] }
                  ]
                },
                {
                  name: '一级 2',
                  id: '2',
                  children: [
                    {
                      id: '2-1',
                      name: '二级 2-1',
                      children: [{ id: '2-1-1', name: '三级 2-1-1' }]
                    },
                    {
                      id: '2-2',
                      name: '二级 2-2',
                      children: [{ id: '2-2-1', name: '三级 2-2-1鸡腿' }]
                    }
                  ]
                }
              ]
            }
          },
          methods: {
            selectDrop: function(e) {
              console.log('选中----\x3e', e)
            }
          }
        },
        l = n(58),
        a = Object(l.a)(
          i,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              'div',
              [
                t(
                  'v-layout-page-item',
                  [
                    t('v-tree-select', {
                      attrs: {
                        options: this.treeList,
                        placeholder: '请选择tree结构',
                        width: '50%',
                        defaultData: this.defaultValue,
                        treeProps: this.treeProps
                      },
                      on: { handleNodeClick: this.selectDrop }
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
      t.default = a.exports
    }
  }
])
