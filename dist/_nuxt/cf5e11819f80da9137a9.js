;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    307(t, e, n) {
      let content = n(311)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('501f1a8e', content, !0, { sourceMap: !1 })
    },
    309(t, e, n) {
      'use strict'
      const r = n(51)
      const o = {
        props: {
          heading: {
            type: String,
            default: 'HIPPO SLURRY PUMP RANGE & PUMP SYSTEMS'
          }
        },
        data() {
          return { strSplit: r.a }
        },
        computed: {
          sectionHead() {
            return Object(r.a)(this.$props.heading)
          }
        }
      }
      const l = (n(310), n(2))
      const component = Object(l.a)(
        o,
        function() {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n('div', [
            n(
              'h2',
              [
                t._v('\n    ' + t._s(t.sectionHead[0]) + '\n    '),
                n('br'),
                t._v(' '),
                t._t('sec-head-pt', [
                  t._v('\n      ' + t._s(t.sectionHead[1]) + '\n    ')
                ])
              ],
              2
            )
          ])
        },
        [],
        !1,
        null,
        '36817b21',
        null
      )
      e.a = component.exports
    },
    310(t, e, n) {
      'use strict'
      const r = n(307)
      n.n(r).a
    },
    311(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        'div[data-v-36817b21]{margin-bottom:2rem}h2[data-v-36817b21]{border-left:4px solid var(--main-clr);padding-left:.5rem}',
        ''
      ])
    },
    320(t, e, n) {
      let content = n(341)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('658191dd', content, !0, { sourceMap: !1 })
    },
    340(t, e, n) {
      'use strict'
      const r = n(320)
      n.n(r).a
    },
    341(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        'textarea[data-v-0d2b1f54]{width:100%}.btn-wrapper[data-v-0d2b1f54]{height:3rem;margin:1rem 1rem 0}',
        ''
      ])
    },
    368(t, e, n) {
      'use strict'
      n.r(e)
      const r = n(107)
      const o = n(309)
      const l = {
        components: { AppHero: r.a, AppSectionHeading: o.a },
        head() {
          return {
            title: 'Contact ',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content:
                  'Complete this form to get in contact with The Hippo Slurry Pump Team'
              }
            ]
          }
        },
        data() {
          return {
            tagline: 'HOW CAN WE HELP YOU TODAY?',
            slogan: 'get in touch ',
            heading: 'THE CONTACT FORM',
            qtagline: 'HOW CAN WE HELP YOU TODAY?',
            qslogan: 'get in touch ',
            qheading: 'Request for a quote'
          }
        }
      }
      const c = (n(340), n(2))
      const component = Object(c.a)(
        l,
        function() {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n('div', [
            n(
              'div',
              [
                n('AppHero', {
                  attrs: { tagline: t.tagline, slogan: t.slogan }
                }),
                t._v(' '),
                n(
                  'main',
                  [
                    n('AppSectionHeading', { attrs: { heading: t.heading } }),
                    t._v(' '),
                    t._m(0),
                    t._v(' '),
                    t._m(1)
                  ],
                  1
                )
              ],
              1
            )
          ])
        },
        [
          function() {
            const t = this.$createElement
            const e = this._self._c || t
            return e('p', [
              this._v(
                '\n        Need to get in contact with anyone from our team? Complete the contact\n        form below or send us an email at\n        '
              ),
              e(
                'a',
                {
                  staticClass: 'emphasize',
                  attrs: { href: 'mailto:info@hipposlurrypumps.com' }
                },
                [this._v('info@hipposlurrypumps.com')]
              )
            ])
          },
          function() {
            const t = this
            const e = t.$createElement
            const n = t._self._c || e
            return n('div', { staticClass: 'content' }, [
              n(
                'form',
                {
                  attrs: {
                    name: 'contactus',
                    action: '/thanks',
                    method: 'post',
                    netlify: '',
                    'netlify-honeypot': 'bot-field'
                  }
                },
                [
                  n('input', {
                    attrs: {
                      type: 'hidden',
                      name: 'form-name',
                      value: 'contactus'
                    }
                  }),
                  t._v(' '),
                  n('div', [
                    n(
                      'label',
                      { staticClass: 'form-label', attrs: { for: 'name' } },
                      [t._v('\n              Name:\n            ')]
                    ),
                    t._v(' '),
                    n('input', {
                      staticClass: 'form-field',
                      attrs: {
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        tabindex: '1',
                        required: ''
                      }
                    })
                  ]),
                  t._v(' '),
                  n('div', [
                    n(
                      'label',
                      { staticClass: 'form-label', attrs: { for: 'email' } },
                      [t._v('\n              Email:\n            ')]
                    ),
                    t._v(' '),
                    n('input', {
                      staticClass: 'form-field',
                      attrs: {
                        id: 'email',
                        name: 'email',
                        tabindex: '2',
                        required: ''
                      }
                    })
                  ]),
                  t._v(' '),
                  n('div', [
                    n(
                      'label',
                      {
                        staticClass: 'form-label',
                        attrs: { for: 'message' }
                      },
                      [t._v('\n              Message:\n            ')]
                    ),
                    t._v(' '),
                    n('textarea', {
                      staticClass: 'form-field',
                      attrs: {
                        id: 'message',
                        name: 'message',
                        spellcheck: 'true',
                        rows: '10',
                        cols: '50',
                        tabindex: '3',
                        required: ''
                      }
                    })
                  ]),
                  t._v(' '),
                  n('div', { staticClass: 'btn-wrapper relative' }, [
                    n('input', {
                      staticClass: 'btn absolute-center',
                      attrs: {
                        type: 'submit',
                        value: 'Send message',
                        tabindex: '4'
                      }
                    })
                  ])
                ]
              )
            ])
          }
        ],
        !1,
        null,
        '0d2b1f54',
        null
      )
      e.default = component.exports
    }
  }
])
