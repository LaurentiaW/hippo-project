;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    200(t, n, e) {
      let content = e(206)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, e(13).default)('6574eb14', content, !0, { sourceMap: !1 })
    },
    204(t, n, e) {
      'use strict'
      e.d(n, 'a', function() {
        return r
      })
      e(115)
      function r(t) {
        for (
          var n, e = t.split(' '), r = Math.floor(e.length / 2), o = [], l = 0;
          l < e.length;

        )
          o.push(e.slice(l, l + r)), (l += r)
        return (
          (n =
            o.length > 2
              ? o[o.length - 2].concat(o[o.length - 1]).join(' ')
              : o[o.length - 1].join(' ')),
          [o[0].join(' '), n]
        )
      }
    },
    205(t, n, e) {
      'use strict'
      const r = e(200)
      e.n(r).a
    },
    206(t, n, e) {
      ;(t.exports = e(12)(!1)).push([
        t.i,
        '.hero[data-v-0f7dda25]{margin-top:2.5rem;margin-bottom:2.5rem}.hero h4[data-v-0f7dda25]{text-transform:uppercase;color:var(--main-clr)}.hero h4 span[data-v-0f7dda25]{color:var(--comp-clr)}',
        ''
      ])
    },
    207(t, n, e) {
      'use strict'
      const r = e(204)
      const o = {
        props: {
          tagline: { type: String, default: 'Hippo Slurry Pumps stands for' },
          slogan: {
            type: String,
            default: 'CUSTOMISE TECHNOLOGY INCOMPARABLE QUALITY'
          }
        },
        method: {
          strSplit(t) {
            return Object(r.a)(t)
          }
        },
        computed: {
          splitTag() {
            return Object(r.a)(this.$props.tagline)
          },
          splitSlogan() {
            return Object(r.a)(this.$props.slogan)
          }
        }
      }
      const l = (e(205), e(3))
      const component = Object(l.a)(
        o,
        function() {
          const t = this
          const n = t.$createElement
          const e = t._self._c || n
          return e('div', { staticClass: 'hero container' }, [
            e(
              'h4',
              [
                t._t(t.tagline, [
                  t._v('\n      ' + t._s(t.splitTag[0]) + '\n    ')
                ]),
                t._v(' '),
                e('span', [t._v('\n      ' + t._s(t.splitTag[1]) + '\n    ')])
              ],
              2
            ),
            t._v(' '),
            e(
              'h3',
              [
                t._t(t.slogan, [
                  t._v('\n      ' + t._s(t.splitSlogan[0]) + '\n      '),
                  e('br'),
                  t._v('\n      ' + t._s(t.splitSlogan[1]) + '\n    ')
                ])
              ],
              2
            )
          ])
        },
        [],
        !1,
        null,
        '0f7dda25',
        null
      )
      n.a = component.exports
    },
    237(t, n, e) {
      'use strict'
      e.r(n)
      const r = { components: { AppHero: e(207).a } }
      const o = e(3)
      const component = Object(o.a)(
        r,
        function() {
          const t = this.$createElement
          const n = this._self._c || t
          return n('div', [n('AppHero'), this._v(' '), this._m(0)], 1)
        },
        [
          function() {
            const t = this.$createElement
            const n = this._self._c || t
            return n('main', [n('h1', [this._v('Pump Systems')])])
          }
        ],
        !1,
        null,
        '789bc056',
        null
      )
      n.default = component.exports
    }
  }
])
