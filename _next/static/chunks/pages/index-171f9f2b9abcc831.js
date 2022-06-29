(self.webpackChunk_N_E = self.webpackChunk_N_E || [
]).push([[405],
{
  8581: function (t, e, n) {
    (window.__NEXT_P = window.__NEXT_P || [
    ]).push(['/',
    function () {
      return n(6736)
    }
    ])
  },
  7913: function (t, e, n) {
    'use strict';
    n.d(e, {
      Z: function () {
        return i
      }
    });
    var a = n(5893),
    s = n(9008);
    function i(t) {
      var e = t.title,
      n = t.metaDesc,
      i = t.ogImage;
      return (0, a.jsxs) (s.default, {
        children: [
          (0, a.jsx) ('title', {
            children: e
          }),
          (0, a.jsx) ('link', {
            rel: 'icon',
            href: '/favicon.png',
            type: 'image/png'
          }),
          (0, a.jsx) ('meta', {
            name: 'description',
            content: n
          }),
          (0, a.jsx) ('meta', {
            property: 'og:title',
            content: e
          }),
          i ? (0, a.jsxs) (a.Fragment, {
            children: [
              (0, a.jsx) ('meta', {
                property: 'og:image',
                content: 'https://mysticuniverse.io/' + i
              }),
              (0, a.jsx) ('meta', {
                name: 'twitter:image',
                content: 'https://mysticuniverse.io/' + i
              })
            ]
          }) : (0, a.jsxs) (a.Fragment, {
            children: [
              (0, a.jsx) ('meta', {
                property: 'og:image',
                content: 'https://mysticsuniverse.io/home-og-image.png'
              }),
              (0, a.jsx) ('meta', {
                name: 'twitter:image',
                content: 'https://mysticsuniverse.io/home-og-image.png'
              })
            ]
          }),
          (0, a.jsx) ('meta', {
            name: 'twitter:card',
            content: 'summary_large_image'
          }),
          (0, a.jsx) ('meta', {
            name: 'twitter:description',
            content: n
          }),
          (0, a.jsx) ('meta', {
            name: 'twitter:title',
            content: e
          }),
          (0, a.jsx) ('meta', {
            name: 'twitter:site',
            content: '@MysticsNFT'
          }),
          (0, a.jsx) ('meta', {
            name: 'twitter:creator',
            content: '@MysticsNFT'
          })
        ]
      })
    }
  },
  6736: function (t, e, n) {
    'use strict';
    n.r(e),
    n.d(e, {
    default:
      function () {
        return o
      }
    });
    var a = n(5893),
    s = n(1664),
    i = n(7294);
    function r() {
      var t = (0, i.useState) (!1),
      e = t[0],
      n = t[1];
      return (0, i.useEffect) ((function () {
        n(!0)
      }), [
      ]),
      (0, a.jsxs) ('div', {
        className: 'px-8 min-h-screen max-w-[3200px]mx-auto relative flex items-center justify-center bg-primary',
        children: [
          (0, a.jsxs) ('div', {
            className: 'relative w-full h-full transition-opacity ease-in duration-1000 '.concat(e ? 'opacity-100' : 'opacity-0'),
            children: [
              (0, a.jsx) ('img', {
                src: '/front-page/front-page.gif',
                className: 'max-w-full h-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none max-h-screen mx-auto',
                alt: ''
              }),
              (0, a.jsx) ('img', {
                src: '/front-page/overtop-scaled.png',
                className: 'max-w-full h-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none max-h-screen mx-auto',
                alt: ''
              })
            ]
          }),
          (0, a.jsxs) ('div', {
            className: 'flex absolute bottom-0 right-0 items-center',
            children: [
              (0, a.jsxs) ('div', {
                className: 'text-center',
                children: [
                  (0, a.jsx) ('h2', {
                    className: 'font-cooper text-2xl text-white mb-1',
                    children: 'Magic Map'
                  }),
                  (0, a.jsx) (s.default, {
                    href: '/magic-map',
                    children: (0, a.jsx) ('a', {
                      className: 'font-bold text-primary bg-white px-3 py-2 rounded-lg',
                      children: 'Explore'
                    })
                  })
                ]
              }),
              (0, a.jsx) ('img', {
                src: '/front-page/scroll.gif',
                className: 'h-44'
              })
            ]
          })
        ]
      })
    }
    var c = n(7913);
    function o() {
      return (0, a.jsxs) ('div', {
        className: 'bg-primary h-full h-screen',
        children: [
          (0, a.jsx) (c.Z, {
            title: 'Mystics (✨◡✨)',
            metaDesc: 'a magical 5k cc0 animation project',
            ogImage: 'home-og-image.png'
          }),
          (0, a.jsx) (r, {
          })
        ]
      })
    }
  },
  9008: function (t, e, n) {
    t.exports = n(3121)
  }
},
function (t) {
  t.O(0, [
    774,
    888,
    179
  ], (function () {
    return e = 8581,
    t(t.s = e);
    var e
  }));
  var e = t.O();
  _N_E = e
}
]);
