;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    307(e, t, r) {
      let content = r(311)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(12).default)('501f1a8e', content, !0, { sourceMap: !1 })
    },
    308(e, t, r) {
      let content = r(313)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(12).default)('36980f98', content, !0, { sourceMap: !1 })
    },
    309(e, t, r) {
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
      const l = (r(310), r(2))
      const component = Object(l.a)(
        o,
        function() {
          const e = this
          const t = e.$createElement
          const r = e._self._c || t
          return r('div', [
            r(
              'h2',
              [
                e._v('\n    ' + e._s(e.sectionHead[0]) + '\n    '),
                r('br'),
                e._v(' '),
                e._t('sec-head-pt', [
                  e._v('\n      ' + e._s(e.sectionHead[1]) + '\n    ')
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
      t.a = component.exports
    },
    310(e, t, r) {
      'use strict'
      const n = r(307)
      r.n(n).a
    },
    311(e, t, r) {
      ;(e.exports = r(11)(!1)).push([
        e.i,
        'div[data-v-36817b21]{margin-bottom:2rem}h2[data-v-36817b21]{border-left:4px solid var(--main-clr);padding-left:.5rem}',
        ''
      ])
    },
    312(e, t, r) {
      'use strict'
      const n = r(308)
      r.n(n).a
    },
    313(e, t, r) {
      ;(e.exports = r(11)(!1)).push([
        e.i,
        'div[data-v-61d36c3a]{margin-top:3rem;margin-bottom:3rem}h6[data-v-61d36c3a]{color:var(--main-clr);font-weight:700;margin-bottom:.5rem}h3[data-v-61d36c3a]{font-size:16px}',
        ''
      ])
    },
    314(e, t, r) {
      'use strict'
      const n = {}
      const o = (r(312), r(2))
      const component = Object(o.a)(
        n,
        function() {
          const e = this.$createElement
          const t = this._self._c || e
          return t('div', { staticClass: 'container' }, [
            t(
              'h6',
              [
                this._t('cta', [
                  this._v("\n      Let's solve problems together\n    ")
                ])
              ],
              2
            ),
            this._v(' '),
            t(
              'h3',
              [
                this._t('link', [
                  t(
                    'a',
                    { attrs: { href: 'mailto:info@hipposlurrypumps.com' } },
                    [this._v('\n        info@hipposlurrypumps.com\n      ')]
                  ),
                  this._v(' '),
                  t('a', { attrs: { href: 'tel:+27(0)126668203' } }, [
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
      t.a = component.exports
    },
    316(e, t, r) {
      let content = r(324)
      typeof content === 'string' && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(12).default)('11ea2e40', content, !0, { sourceMap: !1 })
    },
    321(e, t, r) {
      'use strict'
      r(322)('link', function(e) {
        return function(t) {
          return e(this, 'a', 'href', t)
        }
      })
    },
    322(e, t, r) {
      const n = r(7)
      const o = r(13)
      const l = r(24)
      const c = /"/g
      const d = function(e, t, r, n) {
        const o = String(l(e))
        let d = '<' + t
        return (
          r !== '' &&
            (d += ' ' + r + '="' + String(n).replace(c, '&quot;') + '"'),
          d + '>' + o + '</' + t + '>'
        )
      }
      e.exports = function(e, t) {
        const r = {}
        ;(r[e] = t(d)),
          n(
            n.P +
              n.F *
                o(function() {
                  const t = ''[e]('"')
                  return t !== t.toLowerCase() || t.split('"').length > 3
                }),
            'String',
            r
          )
      }
    },
    323(e, t, r) {
      'use strict'
      const n = r(316)
      r.n(n).a
    },
    324(e, t, r) {
      ;(e.exports = r(11)(!1)).push([
        e.i,
        '.card[data-v-efcd91a6]{display:flex;align-items:center;background-color:var(--card-bg);height:150px;padding:.5rem}.card img[data-v-efcd91a6]{height:90%;margin:auto 1rem auto 0;width:auto}.card h4[data-v-efcd91a6]{text-transform:uppercase}',
        ''
      ])
    },
    337(e, t, r) {
      'use strict'
      r(321), r(108), r(109), r(52)
      const n = r(51)
      const o = {
        props: {
          img: { type: String, default: '/img/awards/placeholder.png' },
          title: { type: String, default: 'product - Title' },
          id: { type: String, default: 'product-name' }
        },
        data() {
          return { strSplit: n.a, link: this.$route.name }
        },
        computed: {
          sectionHead() {
            return Object(n.a)(this.$props.title)
          },
          productLink() {
            return this.link.includes('Range')
              ? '/pump-range/'
              : '/pump-systems/'
          }
        }
      }
      const l = (r(323), r(2))
      const component = Object(l.a)(
        o,
        function() {
          const e = this
          const t = e.$createElement
          const r = e._self._c || t
          return r('nuxt-link', { attrs: { to: e.productLink + e.id } }, [
            r('div', { staticClass: 'card' }, [
              r('img', {
                staticClass: 'framed',
                attrs: { src: e.img, alt: e.title }
              }),
              e._v(' '),
              e.title
                ? r('div', { staticClass: 'title-wrapper' }, [
                    r('h4', [
                      e._v('\n        ' + e._s(e.sectionHead[0]) + '\n      ')
                    ]),
                    e._v(' '),
                    r('h4', [
                      e._v('\n        ' + e._s(e.sectionHead[1]) + '\n      ')
                    ])
                  ])
                : e._e()
            ])
          ])
        },
        [],
        !1,
        null,
        'efcd91a6',
        null
      )
      t.a = component.exports
    },
    366(e, t, r) {
      'use strict'
      r.r(t)
      const n = r(107)
      const o = r(309)
      const l = r(337)
      const c = r(314)
      const d = {
        components: {
          AppHero: n.a,
          AppSectionHeading: o.a,
          ProductPreview: l.a,
          AppCallToAction: c.a
        },
        head() {
          return {
            title: 'Pumping Systems',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content:
                  'The Hippo Pump Range engineerd as part of innovative pumping systems to solve complex problems'
              }
            ]
          }
        },
        data() {
          return {
            tagline: 'SLURRY PUMPING SYSTEMS',
            slogan: 'INNOVATIVE ENGINEERING SOLUTIONS',
            heading: 'PUMPING SYSTEMS',
            pumpSystems: [
              {
                title: 'High Head Series Submersible Pumping System',
                id: 'high-head-series-submersible-pumping-system',
                objective:
                  'To pump liquid containing solids at a high head using several submersible pumps in series',
                summary:
                  'Mine dewatering, in particular shaft bottom dewatering',
                duty:
                  'Maximum head and volume is determined by the access area available to lower the submersible pump down to shaft bottom. Standard volumes up to 200l/s with the stage head(HS) of 200m can be achieved',
                components:
                  'id: 1, item: Hippo Submersible Slurry Pumps - as many as required to achieve the volumes required,\nid: 2, item: Interstage Inlet can be provided between stages to accommodate the pumping of liquid at any level provided that non-return valves ()are installed   ',
                options: '',
                'pump-data': '',
                'control-panel': '',
                Limitations:
                  'The weight - determined by the capacity of lifting equipment\nThe area available to lower the pumps\nTotal power available\t  '
              },
              {
                title: 'Flameproof Submersible Slurry Pump System',
                id: 'flameproof-submersible-slurry-pump-pump-system',
                objective:
                  'Overcoming the transport obstacles of pumping liquids out of confined underground flameproof areas',
                summary:
                  'The Hippo Flameproof system consists of a robust heavy-duty submersible pump, protected with flameproof switchgear and mounted on either a rugged skid or a trolley.  Making it mobile and easily transportable to where it is required to quickly and efficiently remove excess liquids containing solids in underground mining areas ',
                duty: '',
                components:
                  '{id:1, item: Hippo Flameproof Submersible Slurry Pump, description: The pump has the capability to run dry indefinitely and the pump doesn\'t rely on the liquid being pumped as a coolant and manufactured to IEC 60097/1:2005 specification from materials that are capable of operating in acidic conditions}, {id: 2, item: Suitable transport device, description: For easy transport to where the Hippo Flameproof Submersible Slurry Pump System is required it is conveniently mounted on either \n["In most cases, a tractor/crane is available to move the pumps around in the haulage and the tractor/crane is used to move the Hippo Flameproof Submersible Slurry Pump System mounted on a skid to the flooded area", "When the flooded area is too small for the tractor/crane to enter the Hippo Flameproof Submersible Slurry Pump System mounted on a trolley can be moved by hand to where it is required"]},{id:3, item: Flameproof Electrical Switchgear and Control Panel, description: Another feature of the Hippo Flameproof Submersible Slurry Pump System is the switchgear that has been developed to protect the electrical winding from burning out should a mechanical problem occur}\n',
                options:
                  'Flameproof Trolley Pump System, Flameproof Skid Pump System',
                'pump-data': '',
                'control-panel':
                  '{title: "Motor Protection Relay", description: "Electronic motor protection relay includes thermal overload, earth insulation, earth leakage and short-circuit protection, frequency and power factor measurement" }, {title: "Pump Over Temperature Relay", description: "Thermistor fitted to the electric motor winding measures the temperature if the motor winding"}, {title: "Bearing Over Temperature Relay ", description: "PT100 temperature sensor fitted in proximity to the angular contact bearings "}, {title: "Seal Fault Relays",  description: "Two relays, installed in the motor chamber and the lower mechanical seal chamber monitor the conductivity of the oil"}, {title: "Shaft Vibration Sensor Relay", description: "Fit to the submersible pump shaft in the lower seal chamber" }, {title: "Motor Enclosure Vacuum Sensor Relay", description: "Installed in the electric motor winding enclosure"}',
                Limitations: ''
              }
            ]
          }
        }
      }
      const m = r(2)
      const component = Object(m.a)(
        d,
        function() {
          const e = this
          const t = e.$createElement
          const r = e._self._c || t
          return r(
            'div',
            [
              r('AppHero', {
                attrs: { tagline: e.tagline, slogan: e.slogan }
              }),
              e._v(' '),
              r('main', [
                r(
                  'section',
                  [
                    r('AppSectionHeading', { attrs: { heading: e.heading } }),
                    e._v(' '),
                    r(
                      'div',
                      { staticClass: 'grid' },
                      e._l(e.pumpSystems, function(e) {
                        return r('ProductPreview', {
                          key: e.id,
                          attrs: { id: e.id, title: e.title, img: e.img }
                        })
                      }),
                      1
                    )
                  ],
                  1
                )
              ]),
              e._v(' '),
              r('AppCallToAction')
            ],
            1
          )
        },
        [],
        !1,
        null,
        '2ebfc281',
        null
      )
      t.default = component.exports
    }
  }
])
