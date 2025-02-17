;(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    893: function(t, e, l) {
      'use strict'
      l.r(e)
      var a = l(58),
        i = Object(a.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              l = t._self._c || e
            return l('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              l('h1', { attrs: { id: 'querycondition-api-高级查询' } }, [
                l(
                  'a',
                  { staticClass: 'header-anchor', attrs: { href: '#querycondition-api-高级查询' } },
                  [t._v('#')]
                ),
                t._v(' QueryCondition API 高级查询')
              ]),
              t._v(' '),
              l('blockquote', [
                l('p', [t._v('简介：可以让多种查询条件在输入值后置顶并且按钮显示在右侧')])
              ]),
              t._v(' '),
              l('p', [t._v('查询条件组件\n'), l('strong', [t._v('代码示例：')])]),
              t._v(' '),
              l('div', { staticClass: 'language-html extra-class' }, [
                l('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                  l('code', [
                    l('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      l('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        l('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                        t._v('v-query-condition')
                      ]),
                      t._v(' '),
                      l('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v(':opts')]),
                      l('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        l('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        l('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('conditionParams'),
                        l('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v(' '),
                      l('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                        t._v('@submit')
                      ]),
                      l('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        l('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        l('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('conditionEnter'),
                        l('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v(' '),
                      l('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('/>')])
                    ]),
                    t._v('\n')
                  ])
                ])
              ]),
              l('h2', { attrs: { id: '基础属性-attributes' } }, [
                l('a', { staticClass: 'header-anchor', attrs: { href: '#基础属性-attributes' } }, [
                  t._v('#')
                ]),
                t._v(' 基础属性（Attributes）')
              ]),
              t._v(' '),
              l('table', [
                l('thead', [
                  l('tr', [
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('参数')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('说明')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('类型')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('默认值')])
                  ])
                ]),
                t._v(' '),
                l('tbody', [
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('opts')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('接收筛选器组件配置')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('无')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('loading')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('查询按钮 loading 状态，请求数据时需要体现')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('false')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('reset')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('是否显示“重置”按钮')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('true')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('boolEnter')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('是否敲回车查询')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('true')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelWidth')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelWidth 宽度')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('String')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v("'120px'")])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isPackupTxt')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('收起文案')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('String')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v("'收起'")])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isExpansionTxt')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('展开文案')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('String')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v("'展开'")])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isShowOpen')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('是否显示收起和展开(若查询条件少于 4 个自动隐藏)')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('true')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isExpansion')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('是否默认展开')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('false')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('btnCheckBind')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('查询按钮配置')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v("{type: 'primary', size: 'small',btnTitle: '查询'}")
                    ])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('btnResetBind')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('重置按钮配置')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v("{ size: 'small',btnTitle: '重置'}")
                    ])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isFooter')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('不显示按钮')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('true')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('footerBtn')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('按钮插槽')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('slot')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('configChangedReset')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('更新opts是否重置（默认重置）')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('false')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isShowWidthSize')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('是否开启动态设置每行显示数')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('false')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('widthSize')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('每行显示多少项，最小值2最大值8')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Number')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('4')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('maxVisibleRows')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('收起时设置默认展示行数')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Number')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('1')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('isDropDownSelectMore')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('是否以下拉方式展示更多条件')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('false')])
                  ])
                ])
              ]),
              t._v(' '),
              l('h2', { attrs: { id: '下拉-更多条件-配置属性-attributes' } }, [
                l(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#下拉-更多条件-配置属性-attributes' }
                  },
                  [t._v('#')]
                ),
                t._v(' 下拉 更多条件 配置属性（Attributes）')
              ]),
              t._v(' '),
              l('table', [
                l('thead', [
                  l('tr', [
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('参数')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('说明')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('类型')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('默认值')])
                  ])
                ]),
                t._v(' '),
                l('tbody', [
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('popoverAttrs')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('el-popover配置及中文文案')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('具体看源码')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('moreCheckList')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('数据源')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Array')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----label')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('标题')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----comp')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('组件名称，可直接指定全局注册的组件')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string,component')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----prop')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('接收字段（即后台接收字段）')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----bind')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('组件配置参数（Attributes）')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----slotName')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('自定义输入框插槽')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----span')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('控件占用的列宽，默认占用 1 列，最大值 4 (独占一行)')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('number')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('1')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----defaultVal')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('默认值')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-----list')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('el-select 组件options 数据')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Array')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ])
                ])
              ]),
              t._v(' '),
              l('h2', { attrs: { id: 'opts-配置参数-opts-attributes' } }, [
                l(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#opts-配置参数-opts-attributes' }
                  },
                  [t._v('#')]
                ),
                t._v(' opts 配置参数（opts Attributes）')
              ]),
              t._v(' '),
              l('table', [
                l('thead', [
                  l('tr', [
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('参数')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('说明')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('类型')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('默认值')])
                  ])
                ]),
                t._v(' '),
                l('tbody', [
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('label')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('表单字段说明标题')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('className')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('自定义 class')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelRender')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('自定义 label（render 函数 jsx 方式编写）')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('function')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('slotName')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v(
                        '自定义输入框插槽(作用域插槽解构接收{param或者scope}返回当前所有表单初始值)'
                      )
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('comp')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('组件名称，可直接指定全局注册的组件')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string,component')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('defaultVal')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('默认值')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('span')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('控件占用的列宽，默认占用 1 列，最多 4 列 (独占一行)')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('number')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('1')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('changeEvent')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v(
                        '默认事件为@input，可指定其他事件（下拉选择和日期需要指定“change 事件”）'
                      )
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('string')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v("'input'")])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('bind')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('继承第三方组件Attributes;'),
                      l('code', [t._v('function')]),
                      t._v('时返回值'),
                      l('code', [t._v('form')])
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object，function')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('event')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('配置组件事件，与写组件时@change 等同理')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('object')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('child')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('子组件列表，类似 select 组件存在 options 子组件的则需要用到')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Array')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('-')])
                  ])
                ])
              ]),
              t._v(' '),
              l('h2', { attrs: { id: '事件-events' } }, [
                l('a', { staticClass: 'header-anchor', attrs: { href: '#事件-events' } }, [
                  t._v('#')
                ]),
                t._v(' 事件（events）')
              ]),
              t._v(' '),
              l('table', [
                l('thead', [
                  l('tr', [
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('事件名')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('说明')]),
                    t._v(' '),
                    l('th', { staticStyle: { 'text-align': 'left' } }, [t._v('回调参数')])
                  ])
                ]),
                t._v(' '),
                l('tbody', [
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('change')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('筛选器数据发生变化时触发')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('Function(form: {[propName: dataIndex]: any})')
                    ])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('submit')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('点击筛选器查询按钮时触发')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('Function(form: {[propName: dataIndex]: any})')
                    ])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('reset')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('点击筛选器重置按钮时触发')
                    ]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('Function(form: {[propName: dataIndex]: any})')
                    ])
                  ]),
                  t._v(' '),
                  l('tr', [
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('getCheckList')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('下拉动态添加条件')]),
                    t._v(' '),
                    l('td', { staticStyle: { 'text-align': 'left' } }, [t._v('返回选中的条件项')])
                  ])
                ])
              ])
            ])
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
