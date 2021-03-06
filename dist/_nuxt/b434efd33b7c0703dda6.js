;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
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
      const c = (n(310), n(2))
      const component = Object(c.a)(
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
    312(t, e, n) {
      'use strict'
      const r = n(308)
      n.n(r).a
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
      const r = {}
      const o = (n(312), n(2))
      const component = Object(o.a)(
        r,
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
        return r
      })
      n(82), n(110)
      function r(t) {
        return t
          .toLowerCase()
          .split('-')
          .map(function(t) {
            return t.replace(t[0], t[0].toUpperCase())
          })
          .join(' ')
      }
    },
    330(t, e, n) {
      let content = n(351)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('d42fc166', content, !0, { sourceMap: !1 })
    },
    350(t, e, n) {
      'use strict'
      const r = n(330)
      n.n(r).a
    },
    351(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        '.product-grid[data-v-42016b90]{padding-left:.5rem}@media (min-width:768px){.product-grid[data-v-42016b90]{display:grid;grid-gap:1rem;grid-template-columns:1fr 3fr;grid-template-areas:"diagram intro" "diagram design-features" " .      additional-content"}}.product-grid .side[data-v-42016b90]{grid-area:diagram}.product-grid .side img[data-v-42016b90]{max-height:80vh;display:block;width:auto;margin-left:auto;margin-right:auto}@media (min-width:768px){.product-grid .side img[data-v-42016b90]{max-height:none;width:100%}}.product-grid .intro[data-v-42016b90]{grid-area:intro}.product-grid .design-features[data-v-42016b90]{grid-area:design-features}.product-grid .additional-content[data-v-42016b90]{grid-area:additional-content}.product-grid figure[data-v-42016b90]{margin-bottom:2rem}.product-grid .pump-curves img[data-v-42016b90]{height:auto;width:95%}.product-grid .flex[data-v-42016b90]{display:flex;justify-content:space-between}.product-grid .application figure img[data-v-42016b90]{height:50vh;width:auto;display:block;margin-right:auto;margin-left:auto}',
        ''
      ])
    },
    369(t, e, n) {
      'use strict'
      n.r(e)
      const r = n(329)
      const o = n(107)
      const c = n(309)
      const d = n(314)
      const l = {
        head() {
          return {
            title: 'The ' + this.id,
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: this.pump.description
              }
            ]
          }
        },
        components: {
          AppHero: o.a,
          AppSectionHeading: c.a,
          AppCallToAction: d.a
        },
        data() {
          return {
            titleCase: r.a,
            headings: {
              pumpCurves: 'Pump Curves',
              alternativeAgitator: 'Alternative Agitator',
              pumpData: 'Pump Data'
            }
          }
        },
        asyncData(t) {
          const e = t.query._storyblok || t.isDev ? 'draft' : 'published'
          return t.app.$storyapi
            .get('cdn/stories/pump-range/' + t.params.id, { version: e })
            .then(function(t) {
              return (
                console.log(t.data),
                { blok: t.data.story.content, pump: t.data.story.content }
              )
            })
        },
        computed: {
          id() {
            return Object(r.a)(this.$route.params.id)
          }
        },
        mounted() {
          const t = this
          this.$storybridge.on(['input', 'published', 'change'], function(e) {
            e.action == 'input'
              ? e.story.id === t.story.id && (t.story.content = e.story.content)
              : window.location.reload()
          })
        }
      }
      const m = (n(350), n(2))
      const component = Object(m.a)(
        l,
        function() {
          const t = this
          const e = t.$createElement
          const n = t._self._c || e
          return t.pump
            ? n(
                'div',
                {
                  directives: [
                    {
                      name: 'editable',
                      rawName: 'v-editable',
                      value: t.blok,
                      expression: 'blok'
                    }
                  ]
                },
                [
                  n('AppHero', {
                    attrs: {
                      tagline: t.pump.hero[0].tagline,
                      slogan: t.pump.hero[0].slogan
                    }
                  }),
                  t._v(' '),
                  n(
                    'main',
                    [
                      n('AppSectionHeading', {
                        attrs: { heading: t.pump.title }
                      }),
                      t._v(' '),
                      n('div', { staticClass: 'product-grid' }, [
                        n('div', { staticClass: 'intro' }, [
                          n('h4', [t._v('Type: ' + t._s(t.pump.type))]),
                          t._v(' '),
                          n('p', [t._v(t._s(t.pump.description))])
                        ]),
                        t._v(' '),
                        n('figure', { staticClass: 'side' }, [
                          n('img', {
                            attrs: {
                              src: t.pump.img,
                              alt: 'diagram of the ' + t.pump.title
                            }
                          })
                        ]),
                        t._v(' '),
                        t.pump.design_features
                          ? n(
                              'div',
                              { staticClass: 'design-features section' },
                              [
                                n('h4', [t._v('Design Features')]),
                                t._v(' '),
                                n(
                                  'ul',
                                  t._l(t.pump.design_features, function(e) {
                                    return n('li', { key: e.key }, [
                                      t._v(
                                        '\n            ' +
                                          t._s(e.key) +
                                          ': ' +
                                          t._s(e.feature) +
                                          '\n          '
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          : t._e(),
                        t._v(' '),
                        n('div', { staticClass: 'additional-content' }, [
                          t.pump.benefits
                            ? n('div', { staticClass: 'benefits section' }, [
                                n('h4', [t._v('Benefits')]),
                                t._v(' '),
                                n(
                                  'ul',
                                  t._l(t.pump.benefits, function(e, i) {
                                    return n('li', { key: i }, [
                                      t._v(
                                        '\n              ' +
                                          t._s(i + 1) +
                                          '. ' +
                                          t._s(e.text) +
                                          '\n            '
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ])
                            : t._e(),
                          t._v(' '),
                          t.pump.application.length > 0
                            ? n(
                                'section',
                                { staticClass: 'application section' },
                                [
                                  n('h4', [t._v('Application')]),
                                  t._v(' '),
                                  n(
                                    'div',
                                    { staticClass: 'flex' },
                                    t._l(t.pump.application, function(img, i) {
                                      return n(
                                        'figure',
                                        { key: i, staticClass: 'framed' },
                                        [
                                          n('img', {
                                            attrs: {
                                              src: img.image,
                                              alt:
                                                'an image of a ' +
                                                t.title +
                                                ' in operation ' +
                                                img.image_title
                                            }
                                          }),
                                          t._v(' '),
                                          n(
                                            'figcaption',
                                            { staticClass: 'center' },
                                            [t._v(t._s(img.image_title))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            : t._e(),
                          t._v(' '),
                          t.pump.alternative_agitator
                            ? n(
                                'section',
                                { staticClass: 'section' },
                                [
                                  n('AppSectionHeading', {
                                    attrs: {
                                      heading: t.headings.alternativeAgitator
                                    }
                                  }),
                                  t._v(' '),
                                  n(
                                    'div',
                                    { staticClass: 'flex' },
                                    t._l(t.pump.alternative_agitator, function(
                                      img,
                                      i
                                    ) {
                                      return n(
                                        'figure',
                                        { key: i, staticClass: 'framed' },
                                        [
                                          n('img', {
                                            attrs: {
                                              src: img.img,
                                              alt: img.title
                                            }
                                          }),
                                          t._v(' '),
                                          n(
                                            'figcaption',
                                            { staticClass: 'center' },
                                            [t._v(t._s(img.title))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : t._e(),
                          t._v(' '),
                          n(
                            'section',
                            { staticClass: 'pump-data' },
                            [
                              n('AppSectionHeading', {
                                attrs: { heading: t.headings.pumpData }
                              })
                            ],
                            1
                          ),
                          t._v(' '),
                          n(
                            'section',
                            { staticClass: 'pump-curves' },
                            [
                              n('AppSectionHeading', {
                                attrs: { heading: t.headings.pumpCurves }
                              }),
                              t._v(' '),
                              n(
                                'div',
                                { staticClass: 'flex' },
                                t._l(t.pump.pump_curves, function(img, i) {
                                  return n(
                                    'figure',
                                    { key: i, staticClass: 'framed' },
                                    [
                                      n('img', {
                                        attrs: {
                                          src: img.pump_curve,
                                          alt: img.title
                                        }
                                      }),
                                      t._v(' '),
                                      n(
                                        'figcaption',
                                        { staticClass: 'center' },
                                        [t._v(t._s(img.title))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ],
                            1
                          )
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
            : t._e()
        },
        [],
        !1,
        null,
        '42016b90',
        null
      )
      e.default = component.exports
    }
  }
])
