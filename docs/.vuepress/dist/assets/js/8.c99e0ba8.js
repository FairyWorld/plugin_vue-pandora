;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    266: function(t, a, s) {
      'use strict'
      s.r(a)
      var n = s(17),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              s('h1', { attrs: { id: 'api' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#api' } }, [t._v('#')]),
                t._v(' API')
              ]),
              t._v(' '),
              s('h2', { attrs: { id: 'form' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#form' } }, [t._v('#')]),
                t._v(' Form')
              ]),
              t._v(' '),
              s('p', [
                t._v('主要包括 '),
                s('code', [t._v('FormOption')]),
                t._v(','),
                s('code', [t._v('FormItemOpt')]),
                t._v(','),
                s('code', [t._v('FormItemCompOpt')]),
                t._v(' 三个主要属性')
              ]),
              t._v(' '),
              s('ol', [
                s('li', [t._v('FormOption 构建整体 Form 的属性')]),
                t._v(' '),
                s('li', [t._v('FormItemOpt 构建一个 FormItem 的属性')]),
                t._v(' '),
                s('li', [t._v('FormItemCompOpt 构建一个 FormItem 内部组件的属性')])
              ]),
              t._v(' '),
              s('h3', { attrs: { id: 'formoption-说明' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#formoption-说明' } }, [
                  t._v('#')
                ]),
                t._v(' FormOption 说明')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('inline')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('行内表单模式')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelPosition')]),
                    t._v(' '),
                    s('td', [t._v('string(left,right )')]),
                    t._v(' '),
                    s('td', [t._v('表单 label 标签的位置')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelWidth')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('表单 label 标签的宽度')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('btnPos')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('按钮位置 默认 right')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('items')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('FormItemOpt')])]),
                    t._v(' '),
                    s('td', [t._v('数组对象')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('btns')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('FormItemOpt')])]),
                    t._v(' '),
                    s('td', [t._v('数组对象')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    t._v('\n '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('private')]),
                    t._v(' formObj'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' FormOption '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n   inline'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   labelPosition'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'right'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   labelWidth'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'100'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   btnPos'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'right'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   items'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   btns'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n')
                  ])
                ])
              ]),
              s('h3', { attrs: { id: 'formitemopt-说明' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#formitemopt-说明' } }, [
                  t._v('#')
                ]),
                t._v(' FormItemOpt 说明')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('label')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('label 名称')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('type')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('ItemType')])]),
                    t._v(' '),
                    s('td', [t._v('item 类型')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('required?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否必填项')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('wrap?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否换行')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('show?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否显示')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('comOpt')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('FormItemCompOpt')])]),
                    t._v(' '),
                    s('td', [t._v('对象')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    t._v(' ItemType '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'select'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'text'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'date'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'button'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'radio'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'checkbox'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'autoComplete'")
                    ]),
                    t._v('\n\nitems'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('\n  '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    label'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'任务名称'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'text'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    comOpt'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n      id'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'taskName'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      width'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('210')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      disabled'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      show'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      placeholder'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    t._v('\n    '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n  '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n')
                  ])
                ])
              ]),
              s('h3', { attrs: { id: 'formitemcompopt-说明' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#formitemcompopt-说明' } }, [
                  t._v('#')
                ]),
                t._v(' FormItemCompOpt 说明')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('id')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('id')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('value')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('any')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('type')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('类型')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('width?')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('number')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isAll?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否全选')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('disabled?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否禁用')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('placeholder?')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('占位符')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('format')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('设置日期显示格式')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('clearable')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否显示清除按钮')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('data')]),
                    t._v(' '),
                    s('td', [t._v('any[]')]),
                    t._v(' '),
                    s('td', [t._v('数据')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('className?')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('iconclassname')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('click?')]),
                    t._v(' '),
                    s('td', [t._v('Function')]),
                    t._v(' '),
                    s('td', [t._v('click 事件回调')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('change?')]),
                    t._v(' '),
                    s('td', [t._v('Function')]),
                    t._v(' '),
                    s('td', [t._v('change 事件回调')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    t._v('    comOpt'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n      id'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'queryUpdateTime'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      clearable'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'datetimerange'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      disabled'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      width'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'210'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      pickOptions'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              s('h2', { attrs: { id: 'table' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#table' } }, [t._v('#')]),
                t._v(' Table')
              ]),
              t._v(' '),
              s('h3', { attrs: { id: 'tableoption' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#tableoption' } }, [
                  t._v('#')
                ]),
                t._v(' TableOption')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('stripe')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否隔行变色')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isHeader')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否显示表头')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('selection')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否显示多选')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('column')]),
                    t._v(' '),
                    s('td', [t._v('object[]')]),
                    t._v(' '),
                    s('td', [t._v('表格表头数据')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('data')]),
                    t._v(' '),
                    s('td', [t._v('object[]')]),
                    t._v(' '),
                    s('td', [t._v('表格数据')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('rowClick')]),
                    t._v(' '),
                    s('td', [t._v('(row: object, column: object, event: any) => void')]),
                    t._v(' '),
                    s('td', [t._v('行点击事件')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('pagination')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否分页')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('pageOpt')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('IPageOpt')])]),
                    t._v(' '),
                    s('td', [t._v('分页参数')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('private')]),
                    t._v(' tableOpt'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n   stripe'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   isHeader'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   selection'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   column'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'序号'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'index'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' fixed'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'left'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' width'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('50')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'任务名称'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'taskName'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' fixed'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'left'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'创建时间'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'createTime'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'更新时间'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'updateTime'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'任务内容'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'taskContent'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'任务结果'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'jobResult'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n       name'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'操作'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n       value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n       align'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'center'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n       fixed'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'right'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n       width'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('150')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n       operations'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n           label'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'详情'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'icon'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           iconName'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'el-icon-eleme    '")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                      t._v('handlerClick')
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('row'),
                      s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')])
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n             '),
                    s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('console')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('row'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n           label'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'编辑'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                      t._v('handlerClick')
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('row'),
                      s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')])
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n             '),
                    s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('console')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('row'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n           label'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'删除'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [
                      t._v('disCallBack')
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('row'),
                      s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')])
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                      t._v('handlerClick')
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('row'),
                      s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')])
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n           label'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'查看'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'icon'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           iconName'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'el-icon-edit'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [
                      t._v('disCallBack')
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('row'),
                      s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')])
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [
                      t._v('handlerClick')
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('row'),
                      s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                      t._v(' '),
                      s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('any')])
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n             '),
                    s('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('console')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    s('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('row'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n           '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n         '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n       '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n     '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n   '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   data'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   '),
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 是否分页')
                    ]),
                    t._v('\n   pagination'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    t._v('\n   '),
                    s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 分页参数')
                    ]),
                    t._v('\n   pageOpt'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n     currentPage'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     total'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     pageSizes'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('20')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('30')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('40')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('50')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n     pageSize'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('10')]),
                    t._v('\n   '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
                  ])
                ])
              ]),
              s('h3', { attrs: { id: 'ipageopt' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#ipageopt' } }, [t._v('#')]),
                t._v(' IPageOpt')
              ]),
              t._v(' '),
              s('p', [t._v('分页配置属性')]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('height')]),
                    t._v(' '),
                    s('td', [t._v('number')]),
                    t._v(' '),
                    s('td', [t._v('分页高度')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('currentPage')]),
                    t._v(' '),
                    s('td', [t._v('number')]),
                    t._v(' '),
                    s('td', [t._v('当前页')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('total')]),
                    t._v(' '),
                    s('td', [t._v('number')]),
                    t._v(' '),
                    s('td', [t._v('总数')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('pageSizes')]),
                    t._v(' '),
                    s('td', [t._v('number[]')]),
                    t._v(' '),
                    s('td', [t._v('每页显示条数选择数组')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('pageSize')]),
                    t._v(' '),
                    s('td', [t._v('number')]),
                    t._v(' '),
                    s('td', [t._v('当前显示每页条数')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('layout')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td')
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
      a.default = e.exports
    }
  }
])