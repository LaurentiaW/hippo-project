;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    307(t, e, n) {
      let content = n(311)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('501f1a8e', content, !0, { sourceMap: !1 })
    },
    308(t, e, n) {
      let content = n(313)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('36980f98', content, !0, { sourceMap: !1 })
    },
    309(t, e, n) {
      'use strict'
      const o = n(51)
      const r = {
        props: {
          heading: {
            type: String,
            default: 'HIPPO SLURRY PUMP RANGE & PUMP SYSTEMS'
          }
        },
        data() {
          return { strSplit: o.a }
        },
        computed: {
          sectionHead() {
            return Object(o.a)(this.$props.heading)
          }
        }
      }
      const d = (n(310), n(2))
      const component = Object(d.a)(
        r,
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
      const o = n(307)
      n.n(o).a
    },
    311(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        'div[data-v-36817b21]{margin-bottom:2rem}h2[data-v-36817b21]{border-left:4px solid var(--main-clr);padding-left:.5rem}',
        ''
      ])
    },
    312(t, e, n) {
      'use strict'
      const o = n(308)
      n.n(o).a
    },
    313(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        'div[data-v-61d36c3a]{margin-top:3rem;margin-bottom:3rem}h6[data-v-61d36c3a]{color:var(--main-clr);font-weight:700;margin-bottom:.5rem}h3[data-v-61d36c3a]{font-size:16px}',
        ''
      ])
    },
    314(t, e, n) {
      'use strict'
      const o = {}
      const r = (n(312), n(2))
      const component = Object(r.a)(
        o,
        function() {
          const t = this.$createElement
          const e = this._self._c || t
          return e('div', { staticClass: 'container' }, [
            e(
              'h6',
              [
                this._t('cta', [
                  this._v("\n      Let's solve problems together\n    ")
                ])
              ],
              2
            ),
            this._v(' '),
            e(
              'h3',
              [
                this._t('link', [
                  e(
                    'a',
                    { attrs: { href: 'mailto:info@hipposlurrypumps.com' } },
                    [this._v('\n        info@hipposlurrypumps.com\n      ')]
                  ),
                  this._v(' '),
                  e('a', { attrs: { href: 'tel:+27(0)126668203' } }, [
                    this._v('\n        +27(0)12 666 8203\n      ')
                  ])
                ])
              ],
              2
            )
          ])
        },
        [],
        !1,
        null,
        '61d36c3a',
        null
      )
      e.a = component.exports
    },
    329(t, e, n) {
      'use strict'
      n.d(e, 'a', function() {
        return o
      })
      n(82), n(110)
      function o(t) {
        return t
          .toLowerCase()
          .split('-')
          .map(function(t) {
            return t.replace(t[0], t[0].toUpperCase())
          })
          .join(' ')
      }
    },
    331(t, e, n) {
      let content = n(353)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('329d61e8', content, !0, { sourceMap: !1 })
    },
    352(t, e, n) {
      'use strict'
      const o = n(331)
      n.n(o).a
    },
    353(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        '.product-grid[data-v-456581cd]{padding-left:.5rem}@media (min-width:768px){.product-grid[data-v-456581cd]{display:grid;grid-gap:1rem;grid-template-columns:1fr 3fr;grid-template-areas:"diagram intro" "diagram system-components" " .      additional-content"}}.product-grid .side[data-v-456581cd]{grid-area:diagram}.product-grid .side img[data-v-456581cd]{max-height:80vh;display:block;width:auto;margin-left:auto;margin-right:auto}@media (min-width:768px){.product-grid .side img[data-v-456581cd]{max-height:none;width:100%}}.product-grid .intro[data-v-456581cd]{grid-area:intro}.product-grid .system-components[data-v-456581cd]{grid-area:system-components}.product-grid .additional-content[data-v-456581cd]{grid-area:additional-content}.product-grid figure[data-v-456581cd]{margin-bottom:2rem}.product-grid .pump-curves img[data-v-456581cd]{height:auto;width:95%}.product-grid .flex[data-v-456581cd]{display:flex;justify-content:space-between}',
        ''
      ])
    },
    371(t, e, n) {
      'use strict'
      n.r(e)
      const o = n(329)
      const r = n(107)
      const d = n(309)
      const m = n(314)
      const c = {
        head() {
          return {
            title: 'The ' + this.id,
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: this.pumpSystem.objective
              }
            ]
          }
        },
        components: {
          AppHero: r.a,
          AppSectionHeading: d.a,
          AppCallToAction: m.a
        },
        data() {
          return {
            titleCase: o.a,
            dutyTitle: 'Duty',
            pumpData: 'Pump Data',
            controlPanel: 'Control Panel',
            pumpSystem: {
              title: 'High Head Series Submersible Pumping System',
              tagline: 'High Head Series',
              slogan: 'The Problem Solver',
              id: 'high-head-series-submersible-pumping-system',
              objective:
                'To pump liquid containing solids at a high head using several submersible pumps in series',
              summary: 'Mine dewatering, in particular shaft bottom dewatering',
              duty: {
                img:
                  'https://hazletonpumps.co.za/wp-content/uploads/2017/08/medium-4p-50hz.jpg',
                text:
                  'Maximum head and volume is determined by the access area available to lower the submersible pump down to shaft bottom. Standard volumes up to 200l/s with the stage head(HS) of 200m can be achieved'
              },
              components: [
                {
                  id: '1',
                  item:
                    'Hippo Submersible Slurry Pumps - as many as required to achieve the volumes required'
                },
                {
                  id: '2',
                  item:
                    'Interstage Inlet can be provided between stages to accommodate the pumping of liquid at any level provided that non-return valves ()are installed'
                }
              ],
              options: '',
              'pump-data': '',
              'control-panel': '',
              limitations: [
                'The weight - determined by the capacity of lifting equipment',
                'The area available to lower the pumps',
                'Total power available'
              ]
            }
          }
        },
        computed: {
          id() {
            return Object(o.a)(this.$route.params.id)
          }
        }
      }
      const l = (n(352), n(2))
      const component = Object(l.a)(
        c,
        function() {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return n(
            'div',
            [
              n('AppHero', {
                attrs: {
                  tagline: t.pumpSystem.tagline,
                  slogan: t.pumpSystem.slogan
                }
              }),
              t._v(' '),
              n(
                'main',
                [
                  n('AppSectionHeading', {
                    attrs: { heading: t.pumpSystem.title }
                  }),
                  t._v(' '),
                  n('div', { staticClass: 'product-grid' }, [
                    n('div', { staticClass: 'intro' }, [
                      n('p', [t._v(t._s(t.pumpSystem.objective))])
                    ]),
                    t._v(' '),
                    n('figure', { staticClass: 'side' }, [
                      n('img', {
                        attrs: {
                          src: t.pumpSystem.img,
                          alt: 'diagram of the ' + t.pumpSystem.title
                        }
                      })
                    ]),
                    t._v(' '),
                    t.pumpSystem.components
                      ? n('div', { staticClass: 'system-components section' }, [
                          n('h4', [
                            t._v('Components of ' + t._s(t.pumpSystem.title))
                          ]),
                          t._v(' '),
                          n('p', [
                            t._v(
                              'The ' + t._s(t.pumpSystem.title) + ' consist of:'
                            )
                          ]),
                          t._v(' '),
                          n(
                            'ul',
                            t._l(t.pumpSystem.components, function(component) {
                              return n('li', { key: component.id }, [
                                t._v(
                                  '\n            ' +
                                    t._s(component.id) +
                                    ': ' +
                                    t._s(component.item) +
                                    '\n          '
                                )
                              ])
                            }),
                            0
                          )
                        ])
                      : t._e(),
                    t._v(' '),
                    n('div', { staticClass: 'additional-content' }, [
                      t.pumpSystem.limitations
                        ? n('div', { staticClass: 'limitations section' }, [
                            n('h4', [
                              t._v('Limitations of ' + t._s(t.pumpSystem.title))
                            ]),
                            t._v(' '),
                            n(
                              'ul',
                              t._l(t.pumpSystem.limitations, function(e, i) {
                                return n('li', { key: i }, [
                                  t._v(
                                    '\n              ' +
                                      t._s(e) +
                                      '\n            '
                                  )
                                ])
                              }),
                              0
                            )
                          ])
                        : t._e(),
                      t._v(' '),
                      t.pumpSystem.duty
                        ? n(
                            'div',
                            { staticClass: 'duty section' },
                            [
                              n('AppSectionHeading', {
                                attrs: {
                                  heading:
                                    t.dutyTitle +
                                    ' of the ' +
                                    t.pumpSystem.title
                                }
                              }),
                              t._v(' '),
                              n('img', {
                                attrs: {
                                  src: t.pumpSystem.duty.img,
                                  alt:
                                    'Duties achieved by the ' +
                                    t.pumpSystem.title +
                                    "'"
                                }
                              }),
                              t._v(
                                '\n          ' +
                                  t._s(t.pumpSystem.duty.text) +
                                  '\n        '
                              )
                            ],
                            1
                          )
                        : t._e(),
                      t._v(' '),
                      t.pumpSystem.pumpData
                        ? n(
                            'div',
                            { staticClass: 'pump-data section' },
                            [
                              n('AppSectionHeading', {
                                attrs: { heading: t.pumpData }
                              }),
                              t._v(' '),
                              n('img', {
                                attrs: {
                                  src: t.pumpSystem.pumpData.img,
                                  alt: 'Pump Data of the ' + t.pumpSystem.title
                                }
                              })
                            ],
                            1
                          )
                        : t._e(),
                      t._v(' '),
                      t.pumpSystem.controlPanel
                        ? n(
                            'div',
                            { staticClass: 'control-panel section' },
                            [
                              n('AppSectionHeading', {
                                attrs: { heading: t.controlPanel }
                              }),
                              t._v(' '),
                              n('img', {
                                attrs: {
                                  src: t.pumpSystem.controlPanel.img,
                                  alt:
                                    'Control Panel of the ' + t.pumpSystem.title
                                }
                              }),
                              t._v(' '),
                              n(
                                'ul',
                                t._l(t.pumpSystem.controlPanel.items, function(
                                  e,
                                  i
                                ) {
                                  return n('li', { key: i }, [
                                    n('h4', [
                                      t._v(t._s(i + 1) + '. ' + t._s(e.title))
                                    ]),
                                    t._v(' '),
                                    n('p', [t._v(t._s(e.description))])
                                  ])
                                }),
                                0
                              )
                            ],
                            1
                          )
                        : t._e()
                    ])
                  ])
                ],
                1
              ),
              t._v(' '),
              n('AppCallToAction')
            ],
            1
          )
        },
        [],
        !1,
        null,
        '456581cd',
        null
      )
      e.default = component.exports
    }
  }
])
