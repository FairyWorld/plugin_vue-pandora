;(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    883: function(e, t, n) {
      'use strict'
      n.r(t)
      var l = {
          name: 'VTreeSelectDemo',
          data: function() {
            return {
              defaultValue: [],
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
        i = n(58),
        a = Object(i.a)(
          l,
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
                        placeholder: '请选择tree多选结构',
                        width: '50%',
                        defaultValue: this.defaultValue,
                        treeProps: this.treeProps,
                        multiple: ''
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
