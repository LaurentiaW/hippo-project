;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    307(t, e, r) {
      let content = r(311)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(12).default)('501f1a8e', content, !0, { sourceMap: !1 })
    },
    309(t, e, r) {
      'use strict'
      const n = r(51)
      const o = {
        props: {
          heading: {
            type: String,
            default: 'HIPPO SLURRY PUMP RANGE & PUMP SYSTEMS'
          }
        },
        data() {
          return { strSplit: n.a }
        },
        computed: {
          sectionHead() {
            return Object(n.a)(this.$props.heading)
          }
        }
      }
      const c = (r(310), r(2))
      const component = Object(c.a)(
        o,
        function() {
          const t = this
          const e = t.$createElement
          const r = t._self._c || e
          return r('div', [
            r(
              'h2',
              [
                t._v('\n    ' + t._s(t.sectionHead[0]) + '\n    '),
                r('br'),
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
    310(t, e, r) {
      'use strict'
      const n = r(307)
      r.n(n).a
    },
    311(t, e, r) {
      ;(t.exports = r(11)(!1)).push([
        t.i,
        'div[data-v-36817b21]{margin-bottom:2rem}h2[data-v-36817b21]{border-left:4px solid var(--main-clr);padding-left:.5rem}',
        ''
      ])
    },
    326(t, e, r) {
      let content = r(345)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(12).default)('04ae8646', content, !0, { sourceMap: !1 })
    },
    327(t, e, r) {
      let content = r(347)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(12).default)('164ab1a8', content, !0, { sourceMap: !1 })
    },
    328(t, e, r) {
      let content = r(349)
      typeof content === 'string' && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(12).default)('4c9e8af0', content, !0, { sourceMap: !1 })
    },
    344(t, e, r) {
      'use strict'
      const n = r(326)
      r.n(n).a
    },
    345(t, e, r) {
      ;(t.exports = r(11)(!1)).push([
        t.i,
        'figure.framed[data-v-1f860f31]{padding:0;height:152px;position:relative}figure.framed img.portrait[data-v-1f860f31]{height:130px;width:auto}figure.framed img.landscape[data-v-1f860f31]{width:130px}.truncate[data-v-1f860f31]{width:90%;margin:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media screen and (min-width:360px){.truncate[data-v-1f860f31]{width:35vw}}@media screen and (min-width:768px){.truncate[data-v-1f860f31]{width:20vw}}ul[data-v-1f860f31],ul li[data-v-1f860f31]{margin:0}',
        ''
      ])
    },
    346(t, e, r) {
      'use strict'
      const n = r(327)
      r.n(n).a
    },
    347(t, e, r) {
      ;(t.exports = r(11)(!1)).push([
        t.i,
        'main[data-v-67825c2f]{position:relative}.award[data-v-67825c2f]{width:95vw;max-width:700px;background-color:var(--white);z-index:10000;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;padding:30px}@media screen and (min-width:450px){.award[data-v-67825c2f]{width:85vw}}.award i.icon[data-v-67825c2f]{position:absolute;top:1rem;right:1rem}.award figure[data-v-67825c2f]{margin-top:2rem}.award figure img[data-v-67825c2f]{max-width:300px;display:block;margin-left:auto;margin-right:auto}.award figure img.portrait[data-v-67825c2f]{max-height:60vh;width:auto}',
        ''
      ])
    },
    348(t, e, r) {
      'use strict'
      const n = r(328)
      r.n(n).a
    },
    349(t, e, r) {
      ;(t.exports = r(11)(!1)).push([
        t.i,
        '@media screen and (min-width:360px){section .grid[data-v-012dfc00]{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem}}@media screen and (min-width:768px){section .grid[data-v-012dfc00]{grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}}',
        ''
      ])
    },
    364(t, e, r) {
      'use strict'
      r.r(e)
      const n = r(107)
      const o = r(309)
      const c = {
        name: 'AwardPreview',
        props: { award: Object },
        data() {
          return {
            isPortrait: !1,
            portrait: 'portrait',
            landscape: 'landscape'
          }
        },
        mounted() {
          const t = this
          this.$nextTick(function() {
            t.checkLoaded()
          })
        },
        methods: {
          checkLoaded() {
            const t = this
            this.$refs.certificate.complete
              ? this.checkImageOrientation()
              : this.$refs.certificate.addEventListener('load', function() {
                  t.checkImageOrientation()
                })
          },
          checkImageOrientation() {
            this.$refs.certificate.naturalHeight >
              this.$refs.certificate.naturalWidth && (this.isPortrait = !0)
          },
          onAwardSelect() {
            this.$emit('awardSelect', this.award, this.isPortrait)
          }
        }
      }
      const d = (r(344), r(2))
      const l = Object(d.a)(
        c,
        function() {
          const t = this
          const e = t.$createElement
          const r = t._self._c || e
          return r(
            'div',
            { staticClass: 'award', on: { click: t.onAwardSelect } },
            [
              r('figure', { staticClass: 'framed' }, [
                r('img', {
                  ref: 'certificate',
                  staticClass: 'absolute-center',
                  class: t.isPortrait ? t.portrait : t.landscape,
                  attrs: {
                    src: t.award.content.img,
                    alt: t.award.content.title
                  }
                })
              ]),
              t._v(' '),
              r('ul', { staticClass: 'center' }, [
                r('li', [
                  r('h4', { staticClass: 'truncate upper' }, [
                    t._v(t._s(t.award.content.title))
                  ])
                ]),
                t._v(' '),
                r('li', { staticClass: 'truncate' }, [
                  t._v(t._s(t.award.content.institution))
                ]),
                t._v(' '),
                r('li', { staticClass: 'truncate' }, [
                  t._v(t._s(t.award.content.date.slice(0, 10)))
                ])
              ])
            ]
          )
        },
        [],
        !1,
        null,
        '1f860f31',
        null
      ).exports
      const f = {
        name: 'Award',
        components: { CloseIcon: r(163).a },
        props: {
          show: { type: Boolean, default: !1 },
          isPortrait: { type: Boolean, default: !1 },
          award: Object
        },
        data() {
          return { portrait: 'portrait', landscape: 'landscape' }
        }
      }
      const w =
        (r(346),
        Object(d.a)(
          f,
          function() {
            const t = this
            const e = t.$createElement
            const r = t._self._c || e
            return t.award
              ? r('div', { staticClass: 'award-wrapper' }, [
                  t.show
                    ? r('div', {
                        staticClass: 'modal-backdrop',
                        on: {
                          click(e) {
                            return t.$emit('close')
                          }
                        }
                      })
                    : t._e(),
                  t._v(' '),
                  t.show
                    ? r('div', { staticClass: 'award' }, [
                        r('div', [
                          r(
                            'i',
                            {
                              staticClass: 'icon icon-close',
                              on: {
                                click(e) {
                                  return t.$emit('close')
                                }
                              }
                            },
                            [
                              r('CloseIcon', {
                                attrs: { name: 'comp-close' }
                              })
                            ],
                            1
                          ),
                          t._v(' '),
                          r('figure', { staticClass: 'framed' }, [
                            r('img', {
                              class: [
                                !0 === t.isPortrait ? t.portrait : t.landscape
                              ],
                              attrs: {
                                src: t.award.content.img,
                                alt: t.award.content.title
                              }
                            })
                          ]),
                          t._v(' '),
                          r('ul', { staticClass: 'center' }, [
                            r('li', [t._v(t._s(t.award.content.place))]),
                            t._v(' '),
                            r('li', [
                              r('h4', { staticClass: 'upper' }, [
                                t._v(t._s(t.award.content.title))
                              ])
                            ]),
                            t._v(' '),
                            r('li', [t._v(t._s(t.award.content.institution))]),
                            t._v(' '),
                            r('li', [
                              t._v(t._s(t.award.content.date.slice(0, 10)))
                            ])
                          ])
                        ])
                      ])
                    : t._e()
                ])
              : t._e()
          },
          [],
          !1,
          null,
          '67825c2f',
          null
        ).exports)
      const h = {
        components: {
          AppHero: n.a,
          AppSectionHeading: o.a,
          AwardPreview: l,
          Award: w
        },
        head() {
          return {
            title: 'Awards',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content:
                  'The Hippo Slurry Pump Range and Pumping Systems have been awarded on multiple occassions - here is some of the awards awarded '
              }
            ]
          }
        },
        data() {
          return {
            tagline: 'An Award Winning Solution',
            slogan: 'The Hippo Trophy Room',
            heading: 'our awards',
            displayAward: !1,
            selectedAward: null,
            selectedAwardIsPortrait: !1
          }
        },
        computed: {
          awardEntries() {
            return this.awards.filter(function(t) {
              return t.content.component === 'award'
            })
          }
        },
        asyncData(t) {
          const e = t.query._storyblok || t.isDev ? 'draft' : 'published'
          return t.app.$storyapi
            .get('cdn/stories', { version: e, starts_with: 'about/awards/' })
            .then(function(t) {
              return { blok: t.data.stories, awards: t.data.stories }
            })
        },
        mounted() {
          const t = this
          this.$storybridge.on(['input', 'published', 'change'], function(e) {
            e.action === 'input'
              ? e.story.id === t.story.id && (t.story.content = e.story.content)
              : window.location.reload()
          })
        },
        methods: {
          onAwardSelect(t, e) {
            ;(this.selectedAward = t),
              (this.displayAward = !0),
              (this.selectedAwardIsPortrait = e)
          }
        }
      }
      const v =
        (r(348),
        Object(d.a)(
          h,
          function() {
            const t = this
            const e = t.$createElement
            const r = t._self._c || e
            return r(
              'div',
              { staticClass: 'awards-overview' },
              [
                r('AppHero', {
                  attrs: { tagline: t.tagline, slogan: t.slogan }
                }),
                t._v(' '),
                r('main', [
                  r(
                    'section',
                    [
                      r('AppSectionHeading', {
                        attrs: { heading: t.heading }
                      }),
                      t._v(' '),
                      t.awards
                        ? r(
                            'div',
                            { staticClass: 'grid' },
                            t._l(t.awardEntries, function(e) {
                              return r('AwardPreview', {
                                directives: [
                                  {
                                    name: 'editable',
                                    rawName: 'v-editable',
                                    value: t.blok,
                                    expression: 'blok'
                                  }
                                ],
                                key: e.id,
                                attrs: { award: e },
                                on: { awardSelect: t.onAwardSelect }
                              })
                            }),
                            1
                          )
                        : t._e(),
                      t._v(' '),
                      r('Award', {
                        attrs: {
                          award: t.selectedAward,
                          'is-portrait': t.selectedAwardIsPortrait,
                          show: t.displayAward
                        },
                        on: {
                          close(e) {
                            t.displayAward = !1
                          }
                        }
                      })
                    ],
                    1
                  )
                ])
              ],
              1
            )
          },
          [],
          !1,
          null,
          '012dfc00',
          null
        ))
      e.default = v.exports
    }
  }
])
