;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    365(e, t, n) {
      'use strict'
      n.r(t)
      const o = {
        head() {
          return {
            title: 'Thank You - Form received',
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: 'Your contact form has been received - thank you!'
              }
            ]
          }
        },
        components: { AppHero: n(107).a }
      }
      const r = n(2)
      const component = Object(r.a)(
        o,
        function() {
          const e = this.$createElement
          const t = this._self._c || e
          return t(
            'div',
            [
              t('AppHero', {
                attrs: { tagline: this.tagline, slogan: this.slogan }
              }),
              this._v(' '),
              this._m(0)
            ],
            1
          )
        },
        [
          function() {
            const e = this.$createElement
            const t = this._self._c || e
            return t('main', [
              t('h1', [this._v('Thanks!')]),
              this._v(' '),
              t('p', [
                this._v(
                  "\n      We've received your messages and our time will be in contact with you\n      shortly!\n    "
                )
              ])
            ])
          }
        ],
        !1,
        null,
        '2ebdc6a0',
        null
      )
      t.default = component.exports
    }
  }
])
