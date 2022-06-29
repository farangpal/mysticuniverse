(self.webpackChunk_N_E = self.webpackChunk_N_E || [
]).push([[10],
{
  265: function (e, t, n) {
    (window.__NEXT_P = window.__NEXT_P || [
    ]).push(['/pier',
    function () {
      return n(2794)
    }
    ])
  },
  7913: function (e, t, n) {
    'use strict';
    n.d(t, {
      Z: function () {
        return r
      }
    });
    var s = n(5893),
    i = n(9008);
    function r(e) {
      var t = e.title,
      n = e.metaDesc,
      r = e.ogImage;
      return (0, s.jsxs) (i.default, {
        children: [
          (0, s.jsx) ('title', {
            children: t
          }),
          (0, s.jsx) ('link', {
            rel: 'icon',
            href: '/favicon.png',
            type: 'image/png'
          }),
          (0, s.jsx) ('meta', {
            name: 'description',
            content: n
          }),
          (0, s.jsx) ('meta', {
            property: 'og:title',
            content: t
          }),
          r ? (0, s.jsxs) (s.Fragment, {
            children: [
              (0, s.jsx) ('meta', {
                property: 'og:image',
                content: 'https://mysticsuniverse.io/' + r
              }),
              (0, s.jsx) ('meta', {
                name: 'twitter:image',
                content: 'https://mysticsuniverse.io/' + r
              })
            ]
          }) : (0, s.jsxs) (s.Fragment, {
            children: [
              (0, s.jsx) ('meta', {
                property: 'og:image',
                content: 'https://mysticsuniverse.io/home-og-image.png'
              }),
              (0, s.jsx) ('meta', {
                name: 'twitter:image',
                content: 'https://mysticsuniverse.io/home-og-image.png'
              })
            ]
          }),
          (0, s.jsx) ('meta', {
            name: 'twitter:card',
            content: 'summary_large_image'
          }),
          (0, s.jsx) ('meta', {
            name: 'twitter:description',
            content: n
          }),
          (0, s.jsx) ('meta', {
            name: 'twitter:title',
            content: t
          }),
          (0, s.jsx) ('meta', {
            name: 'twitter:site',
            content: '@MysticsNFT'
          }),
          (0, s.jsx) ('meta', {
            name: 'twitter:creator',
            content: '@MysticsNFT'
          })
        ]
      })
    }
  },
  2794: function (e, t, n) {
    'use strict';
    n.r(t),
    n.d(t, {
    default:
      function () {
        return h
      }
    });
    var s = n(5893),
    i = (n(1664), n(7913));
    function r() {
      return (0, s.jsxs) ('div', {
        className: 'relative',
        children: [
          (0, s.jsx) ('img', {
            src: '/pier/pier-combined.jpg',
            className: 'hidden md:block pointer-events-none w-full',
            alt: ''
          }),
          (0, s.jsx) ('img', {
            src: '/pier/pier-hero.jpeg',
            className: 'md:hidden pointer-events-none w-full',
            alt: ''
          }),
          (0, s.jsx) ('img', {
            src: '/pier/the-pier-text.png',
            className: 'md:hidden pointer-events-none w-full max-w-[300px] mt-12 -mb-12 pl-4',
            alt: ''
          })
        ]
      })
    }
    function o() {
      return (0, s.jsxs) ('div', {
        className: 'max-w-screen-2xl mx-auto flex items-center justify-evenly flex-col md:flex-row md:space-x-12 py-24 md:py-44 px-4 md:px-8',
        children: [
          (0, s.jsxs) ('div', {
            className: 'w-full md:w-2/4 text-white md:text-lg',
            children: [
              (0, s.jsxs) ('p', {
                className: 'mb-6',
                children: [
                  (0, s.jsx) ('span', {
                    className: 'font-bold tracking-wide',
                    children: 'Our first days in Web3 began with a spark.'
                  }),
                  ' An endless flow of trends always gave us new waves to ride, and as a result, sleep to catch up on, and new things to learn.'
                ]
              }),
              (0, s.jsxs) ('p', {
                className: 'mb-6',
                children: [
                  'With the waves growing further apart, the waters become calm. The foundation for the space has been laid. ',
                  (0, s.jsx) ('span', {
                    className: 'brush bg-white/10 py-2 px-2 rounded-lg',
                    children: 'Now it\'s time to build something real.'
                  })
                ]
              }),
              (0, s.jsx) ('p', {
                className: 'mb-6',
                children: 'At The Pier, we are executing a range of elite art & gaming project concepts, all built on the foundation of Web3 innovation.'
              }),
              (0, s.jsx) ('p', {
                children: 'Each holder within the ecosystem receives access to future drops, along with access to exclusive community channels within the Discord - to connect and vibe with those also passionate about Web3 culture!'
              })
            ]
          }),
          (0, s.jsx) ('img', {
            src: '/pier/pier.gif',
            loading: 'lazy',
            className: 'w-full md:w-1/4 max-w-[500px]'
          })
        ]
      })
    }
    var a = n(6066);
    n(1548),
    n(3873);
    function c(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
      e
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {
        },
        s = Object.keys(n);
        'function' === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        })))),
        s.forEach((function (t) {
          c(e, t, n[t])
        }))
      }
      return e
    }
    function m() {
      var e = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        nextArrow: (0, s.jsx) (d, {
        }),
        prevArrow: (0, s.jsx) (u, {
        })
      };
      return (0, s.jsxs) ('div', {
        className: 'max-w-screen-md mx-auto pb-24',
        children: [
          (0, s.jsx) ('h2', {
            className: 'font-bold tracking-wide text-center text-4xl text-white',
            children: 'Who\'s Inside?'
          }),
          (0, s.jsx) (a.Z, l({
          }, e, {
            children: [
              'doods',
              'kara',
              'mph',
              'cyberkongz',
              'dark-echelon',
              'godjira',
              'few',
              'llama',
              'mvhq',
              'origins',
              'nanopass',
              'nt'
            ].map((function (e) {
              return (0, s.jsx) ('div', {
                className: 'sm:px-20 flex items-center justify-center w-full h-full',
                children: (0, s.jsx) ('img', {
                  src: '/whos-inside/' + e + '-logo-min.png',
                  loading: 'lazy',
                  className: 'px-14 md:px-0 mx-auto md:h-96',
                  alt: e + ' logo'
                })
              }, e)
            }))
          }))
        ]
      })
    }
    function d(e) {
      var t = e.onClick;
      return (0, s.jsx) ('div', {
        className: 'z-10 text-white absolute right-0 px-1 md:px-3 py-4 h-full top-0 flex items-center cursor-pointer '.concat(t ? 'block' : 'hidden'),
        onClick: t,
        children: (0, s.jsx) ('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          className: 'h-10 w-10 md:h-16 md:w-16',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
          strokeWidth: 2,
          children: (0, s.jsx) ('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M9 5l7 7-7 7'
          })
        })
      })
    }
    function u(e) {
      var t = e.onClick;
      return (0, s.jsx) ('div', {
        className: 'z-10 text-white absolute left-0 px-1 md:px-3 py-4 h-full top-0 flex items-center cursor-pointer '.concat(t ? 'block' : 'hidden'),
        onClick: t,
        children: (0, s.jsx) ('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          className: 'h-10 w-10 md:h-16 md:w-16',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
          strokeWidth: 2,
          children: (0, s.jsx) ('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M15 19l-7-7 7-7'
          })
        })
      })
    }
    function h() {
      return (0, s.jsxs) (s.Fragment, {
        children: [
          (0, s.jsx) (i.Z, {
            title: 'The Pier - Mystics (✨◡✨)',
            metaDesc: 'At The Pier, we are executing a range of elite art & gaming project concepts, all built on the foundation of Wev3 innovation.',
            ogImage: 'pier-og-image.png'
          }),
          (0, s.jsxs) ('div', {
            children: [
              (0, s.jsx) (r, {
              }),
              (0, s.jsx) (o, {
              }),
              (0, s.jsx) (m, {
              })
            ]
          })
        ]
      })
    }
  }
},
function (e) {
  e.O(0, [
    189,
    774,
    888,
    179
  ], (function () {
    return t = 265,
    e(e.s = t);
    var t
  }));
  var t = e.O();
  _N_E = t
}
]);
