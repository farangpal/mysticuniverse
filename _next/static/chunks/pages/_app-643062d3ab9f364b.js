(self.webpackChunk_N_E = self.webpackChunk_N_E || [
]).push([[888],
{
  1780: function (e, t, r) {
    (window.__NEXT_P = window.__NEXT_P || [
    ]).push(['/_app',
    function () {
      return r(2386)
    }
    ])
  },
  1551: function (e, t, r) {
    'use strict';
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n
    }
    function a(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var r = null == e ? null : 'undefined' !== typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != r) {
          var n,
          a,
          o = [
          ],
          i = !0,
          l = !1;
          try {
            for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
          } catch (c) {
            l = !0,
            a = c
          } finally {
            try {
              i || null == r.return || r.return()
            } finally {
              if (l) throw a
            }
          }
          return o
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ('string' === typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, - 1);
        'Object' === r && e.constructor && (r = e.constructor.name);
        if ('Map' === r || 'Set' === r) return Array.from(r);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }()
    }
    t.default = void 0;
    var o,
    i = (o = r(7294)) && o.__esModule ? o : {
    default:
      o
    },
    l = r(1003),
    c = r(880),
    s = r(9246);
    var u = {
    };
    function f(e, t, r, n) {
      if (e && l.isLocalURL(t)) {
        e.prefetch(t, r, n).catch((function (e) {
          0
        }));
        var a = n && 'undefined' !== typeof n.locale ? n.locale : e && e.locale;
        u[t + '%' + r + (a ? '%' + a : '')] = !0
      }
    }
    var d = function (e) {
      var t,
      r = !1 !== e.prefetch,
      n = c.useRouter(),
      o = i.default.useMemo((function () {
        var t = a(l.resolveHref(n, e.href, !0), 2),
        r = t[0],
        o = t[1];
        return {
          href: r,
          as: e.as ? l.resolveHref(n, e.as) : o || r
        }
      }), [
        n,
        e.href,
        e.as
      ]),
      d = o.href,
      h = o.as,
      p = e.children,
      m = e.replace,
      v = e.shallow,
      x = e.scroll,
      w = e.locale;
      'string' === typeof p && (p = i.default.createElement('a', null, p));
      var g = (t = i.default.Children.only(p)) && 'object' === typeof t && t.ref,
      y = a(s.useIntersection({
        rootMargin: '200px'
      }), 2),
      b = y[0],
      j = y[1],
      N = i.default.useCallback((function (e) {
        b(e),
        g && ('function' === typeof g ? g(e) : 'object' === typeof g && (g.current = e))
      }), [
        g,
        b
      ]);
      i.default.useEffect((function () {
        var e = j && r && l.isLocalURL(d),
        t = 'undefined' !== typeof w ? w : n && n.locale,
        a = u[d + '%' + h + (t ? '%' + t : '')];
        e && !a && f(n, d, h, {
          locale: t
        })
      }), [
        h,
        d,
        j,
        w,
        r,
        n
      ]);
      var C = {
        ref: N,
        onClick: function (e) {
          t.props && 'function' === typeof t.props.onClick && t.props.onClick(e),
          e.defaultPrevented || function (e, t, r, n, a, o, i, c) {
            ('A' !== e.currentTarget.nodeName.toUpperCase() || !function (e) {
              var t = e.currentTarget.target;
              return t && '_self' !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
            }(e) && l.isLocalURL(r)) && (e.preventDefault(), t[a ? 'replace' : 'push'](r, n, {
              shallow: o,
              locale: c,
              scroll: i
            }))
          }(e, n, d, h, m, v, x, w)
        },
        onMouseEnter: function (e) {
          t.props && 'function' === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
          l.isLocalURL(d) && f(n, d, h, {
            priority: !0
          })
        }
      };
      if (e.passHref || 'a' === t.type && !('href' in t.props)) {
        var k = 'undefined' !== typeof w ? w : n && n.locale,
        M = n && n.isLocaleDomain && l.getDomainLocale(h, k, n && n.locales, n && n.domainLocales);
        C.href = M || l.addBasePath(l.addLocale(h, k, n && n.defaultLocale))
      }
      return i.default.cloneElement(t, C)
    };
    t.default = d
  },
  9246: function (e, t, r) {
    'use strict';
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n
    }
    function a(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var r = null == e ? null : 'undefined' !== typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != r) {
          var n,
          a,
          o = [
          ],
          i = !0,
          l = !1;
          try {
            for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
          } catch (c) {
            l = !0,
            a = c
          } finally {
            try {
              i || null == r.return || r.return()
            } finally {
              if (l) throw a
            }
          }
          return o
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ('string' === typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, - 1);
        'Object' === r && e.constructor && (r = e.constructor.name);
        if ('Map' === r || 'Set' === r) return Array.from(r);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t)
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }()
    }
    Object.defineProperty(t, '__esModule', {
      value: !0
    }),
    t.useIntersection = function (e) {
      var t = e.rootRef,
      r = e.rootMargin,
      n = e.disabled || !l,
      u = o.useRef(),
      f = a(o.useState(!1), 2),
      d = f[0],
      h = f[1],
      p = a(o.useState(t ? t.current : null), 2),
      m = p[0],
      v = p[1],
      x = o.useCallback((function (e) {
        u.current && (u.current(), u.current = void 0),
        n || d || e && e.tagName && (u.current = function (e, t, r) {
          var n = function (e) {
            var t,
            r = {
              root: e.root || null,
              margin: e.rootMargin || ''
            },
            n = s.find((function (e) {
              return e.root === r.root && e.margin === r.margin
            }));
            n ? t = c.get(n) : (t = c.get(r), s.push(r));
            if (t) return t;
            var a = new Map,
            o = new IntersectionObserver((function (e) {
              e.forEach((function (e) {
                var t = a.get(e.target),
                r = e.isIntersecting || e.intersectionRatio > 0;
                t && r && t(r)
              }))
            }), e);
            return c.set(r, t = {
              id: r,
              observer: o,
              elements: a
            }),
            t
          }(r),
          a = n.id,
          o = n.observer,
          i = n.elements;
          return i.set(e, t),
          o.observe(e),
          function () {
            if (i.delete(e), o.unobserve(e), 0 === i.size) {
              o.disconnect(),
              c.delete(a);
              var t = s.findIndex((function (e) {
                return e.root === a.root && e.margin === a.margin
              }));
              t > - 1 && s.splice(t, 1)
            }
          }
        }(e, (function (e) {
          return e && h(e)
        }), {
          root: m,
          rootMargin: r
        }))
      }), [
        n,
        m,
        r,
        d
      ]);
      return o.useEffect((function () {
        if (!l && !d) {
          var e = i.requestIdleCallback((function () {
            return h(!0)
          }));
          return function () {
            return i.cancelIdleCallback(e)
          }
        }
      }), [
        d
      ]),
      o.useEffect((function () {
        t && v(t.current)
      }), [
        t
      ]),
      [
        x,
        d
      ]
    };
    var o = r(7294),
    i = r(4686),
    l = 'undefined' !== typeof IntersectionObserver;
    var c = new Map,
    s = [
    ]
  },
  2386: function (e, t, r) {
    'use strict';
    r.r(t),
    r.d(t, {
    default:
      function () {
        return M
      }
    });
    var n = r(5893),
    a = (r(6774), r(4051)),
    o = r.n(a),
    i = r(7294),
    l = r(1163),
    c = r(1664),
    s = (0, i.createContext) ();
    function u(e) {
      var t = e.children,
      r = (0, i.useState) (!0),
      a = r[0],
      o = r[1];
      return (0, n.jsx) (s.Provider, {
        value: [
          a,
          o
        ],
        children: t
      })
    }
    function f() {
      return (0, i.useContext) (s)
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n
    }
    function h(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var r = null == e ? null : 'undefined' !== typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != r) {
          var n,
          a,
          o = [
          ],
          i = !0,
          l = !1;
          try {
            for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
          } catch (c) {
            l = !0,
            a = c
          } finally {
            try {
              i || null == r.return || r.return()
            } finally {
              if (l) throw a
            }
          }
          return o
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ('string' === typeof e) return d(e, t);
        var r = Object.prototype.toString.call(e).slice(8, - 1);
        'Object' === r && e.constructor && (r = e.constructor.name);
        if ('Map' === r || 'Set' === r) return Array.from(r);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }()
    }
    function p(e) {
      var t = e.links,
      r = e.path;
      return (0, n.jsx) ('nav', {
        className: 'w-full flex flex-col justify-center items-center md:flex-row space-x-2 space-y-3 md:space-y-0',
        children: t.map((function (e, t) {
          return (0, n.jsx) (m, {
            link: e,
            path: r
          }, t)
        }))
      })
    }
    var m = function (e) {
      var t = e.link,
      r = e.path,
      a = h(f(), 2),
      o = (a[0], a[1]);
      return t.disabled ? (0, n.jsx) ('p', {
        className: 'opacity-40 cursor-not-allowed px-2 py-1 rounded-lg tracking-wide text-white transition-all duration-200 hover:bg-white/10 '.concat(t.href == r ? 'bg-white/10' : 'bg-transparent'),
        children: t.text
      }) : (0, n.jsx) (c.default, {
        href: t.href,
        children: (0, n.jsx) ('a', {
          onClick: function () {
            return o(!0)
          },
          className: 'px-4 py-1 rounded tracking-wide transition-all duration-200 hover:text-white hover:bg-white/20 '.concat(t.href == r ? 'text-white bg-white/10' : 'text-white/80 bg-transparent'),
          children: t.text
        })
      })
    };
    function v(e) {
      var t = e.links,
      r = e.drawerOpen,
      a = e.path;
      return (0, n.jsx) ('div', {
        className: 'relative',
        children: (0, n.jsxs) ('div', {
          'aria-hidden': !r,
          className: 'z-10 pt-32 text-white bg-primary backdrop-blur-md top-0 w-screen transition-all h-screen fixed '.concat(r ? 'left-0' : 'left-full'),
          children: [
            (0, n.jsx) (p, {
              links: t,
              path: a
            }),
            (0, n.jsxs) ('div', {
              className: 'flex flex-1 space-x-8 justify-center mt-12',
              children: [
                (0, n.jsx) ('a', {
                  href: 'https://twitter.com/MysticsNFT',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'mb-2 md:mb-0 text-white/80 transition-all duration-200 hover:text-white',
                  children: (0, n.jsxs) ('svg', {
                    role: 'img',
                    className: 'h-8 w-8',
                    fill: 'currentColor',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      (0, n.jsx) ('title', {
                        children: 'Twitter'
                      }),
                      (0, n.jsx) ('path', {
                        d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
                      })
                    ]
                  })
                }),
                (0, n.jsx) ('p', {
                  className: 'text-white/40',
                  children: (0, n.jsxs) ('svg', {
                    role: 'img',
                    className: 'h-8 w-8',
                    fill: 'currentColor',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      (0, n.jsx) ('title', {
                        children: 'Discord'
                      }),
                      (0, n.jsx) ('path', {
                        d: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'
                      })
                    ]
                  })
                }),
                (0, n.jsx) ('p', {
                  className: 'text-white/40',
                  children: (0, n.jsxs) ('svg', {
                    role: 'img',
                    className: 'h-8 w-8',
                    fill: 'currentColor',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      (0, n.jsx) ('title', {
                        children: 'OpenSea'
                      }),
                      (0, n.jsx) ('path', {
                        d: 'M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z'
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      })
    }
    function x() {
      var e = (0, i.useState) (!1),
      t = e[0],
      r = e[1],
      a = [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Magic map',
          href: '/magic-map'
        },
        {
          text: 'Team',
          href: '/team'
        },
        {
          text: 'Mint',
          href: '/mint',
        }
      ],
      o = (0, l.useRouter) ();
      (0, i.useEffect) ((function () {
        r(!1)
      }), [
        o.asPath
      ]),
      (0, i.useEffect) ((function () {
        t ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
      }), [
        t
      ]);
      var s = (0, i.useState) (0),
      u = (s[0], s[1]);
      return (0, i.useEffect) ((function () {
        var e = function () {
          u(window.scrollY)
        };
        return e(),
        window.addEventListener('scroll', e),
        function () {
          window.removeEventListener('scroll', e)
        }
      }), [
      ]),
      (0, n.jsxs) ('div', {
        className: 'z-50 absolute top-0 left-0 right-0 transition-all bg-transparent border-b border-white/0',
        children: [
          (0, n.jsxs) ('div', {
            className: 'flex justify-between items-center py-4 px-4 md:px-8 transition-all',
            children: [
              (0, n.jsx) ('div', {
                className: 'flex-1',
                children: (0, n.jsx) (c.default, {
                  href: '/',
                  children: (0, n.jsx) ('a', {
                    'aria-label': 'Go to homepage',
                    className: 'z-40 transition-all duration-200 hover:opacity-60',
                    children: (0, n.jsx) ('img', {
                      src: '/text-logo.png',
                      className: 'h-12'
                    })
                  })
                })
              }),
              (0, n.jsx) ('div', {
                className: 'hidden lg:block',
                children: !t && (0, n.jsx) (p, {
                  links: a,
                  path: o.asPath.split('?') [0]
                })
              }),
              (0, n.jsxs) ('div', {
                className: 'hidden lg:flex flex-1 space-x-6 justify-end',
                children: [
                  (0, n.jsx) ('a', {
                    href: 'https://twitter.com/MysticsNFT',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'mb-2 md:mb-0 text-white/80 transition-all duration-200 hover:text-white',
                    children: (0, n.jsxs) ('svg', {
                      role: 'img',
                      className: 'h-7 w-7',
                      fill: 'currentColor',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        (0, n.jsx) ('title', {
                          children: 'Twitter'
                        }),
                        (0, n.jsx) ('path', {
                          d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
                        })
                      ]
                    })
                  }),
                  (0, n.jsx) ('p', {
                    className: 'text-white/40 transition-all duration-200 hover:cursor-not-allowed',
                    children: (0, n.jsxs) ('svg', {
                      role: 'img',
                      className: 'h-7 w-7',
                      fill: 'currentColor',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        (0, n.jsx) ('title', {
                          children: 'Discord'
                        }),
                        (0, n.jsx) ('path', {
                          d: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z'
                        })
                      ]
                    })
                  }),
                  (0, n.jsx) ('p', {
                    className: 'text-white/40 transition-all duration-200 hover:cursor-not-allowed',
                    children: (0, n.jsxs) ('svg', {
                      role: 'img',
                      className: 'h-7 w-7',
                      fill: 'currentColor',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        (0, n.jsx) ('title', {
                          children: 'OpenSea'
                        }),
                        (0, n.jsx) ('path', {
                          d: 'M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z'
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, n.jsx) ('div', {
                className: 'z-40 text-white '.concat(t ? 'lg:block' : 'lg:hidden'),
                children: t ? (0, n.jsx) ('button', {
                  'aria-label': 'Close mobile menu',
                  onClick: function () {
                    return r(!1)
                  },
                  children: (0, n.jsx) ('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: 'h-6 w-6',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    strokeWidth: 2,
                    children: (0, n.jsx) ('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      d: 'M6 18L18 6M6 6l12 12'
                    })
                  })
                }) : (0, n.jsx) ('button', {
                  'aria-label': 'Open mobile menu',
                  onClick: function () {
                    return r(!0)
                  },
                  className: 'lg:hidden',
                  children: (0, n.jsx) ('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: 'h-6 w-6',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    stroke: 'currentColor',
                    strokeWidth: 2,
                    children: (0, n.jsx) ('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      d: 'M4 6h16M4 12h16m-7 6h7'
                    })
                  })
                })
              })
            ]
          }),
          (0, n.jsx) (v, {
            links: a,
            drawerOpen: t,
            path: o.asPath.split('?') [0]
          })
        ]
      })
    }
    function w() {
      var e = (0, i.useState) (!1),
      t = e[0],
      r = e[1],
      a = (0, i.useState) (!1),
      o = a[0],
      l = a[1];
      return (0, i.useEffect) ((function () {
        t ? document.getElementById('audio').play() : document.getElementById('audio').pause()
      }), [
        t
      ]),
      (0, n.jsxs) ('div', {
        className: 'fixed flex space-x-6 items-center bottom-1 left-1 sm:bottom-12 sm:left-12 z-10',
        children: [
          (0, n.jsx) ('img', {
            src: '/headset.png',
            className: 'hidden sm:block h-24'
          }),
          (0, n.jsxs) ('div', {
            className: 'hidden sm:flex text-white',
            children: [
              (0, n.jsx) ('button', {
                onClick: function () {
                  return r(!0)
                },
                children: (0, n.jsx) ('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-10 w-10 transition-all duration-200 hover:text-white '.concat(t ? 'animate-pulse text-white' : 'text-white/50'),
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: (0, n.jsx) ('path', {
                    fillRule: 'evenodd',
                    d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z',
                    clipRule: 'evenodd'
                  })
                })
              }),
              (0, n.jsx) ('button', {
                onClick: function () {
                  return r(!1)
                },
                children: (0, n.jsx) ('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-10 w-10 transition-all duration-200 hover:text-white '.concat(t ? 'text-white/50' : 'text-white'),
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  children: (0, n.jsx) ('path', {
                    fillRule: 'evenodd',
                    d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z',
                    clipRule: 'evenodd'
                  })
                })
              })
            ]
          }),
          (0, n.jsxs) ('div', {
            className: 'p-2 sm:hidden flex items-center space-x-4 border-2 transition-all duration-200 '.concat(o ? 'bg-primary rounded-lg border-white' : 'border-transparent'),
            children: [
              (0, n.jsx) ('button', {
                onClick: function () {
                  return l(!o)
                },
                children: (0, n.jsx) ('img', {
                  src: '/headset.png',
                  className: 'h-10 sm:hidden'
                })
              }),
              (0, n.jsxs) ('div', {
                className: 'sm:hidden flex items-center '.concat(o ? 'opacity-100' : 'opacity-0 pointer-events-none'),
                children: [
                  (0, n.jsx) ('button', {
                    onClick: function () {
                      return r(!0)
                    },
                    children: (0, n.jsx) ('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      className: 'h-10 w-10 transition-all duration-200 hover:text-white '.concat(t ? 'animate-pulse text-white' : 'text-white/50'),
                      viewBox: '0 0 20 20',
                      fill: 'currentColor',
                      children: (0, n.jsx) ('path', {
                        fillRule: 'evenodd',
                        d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z',
                        clipRule: 'evenodd'
                      })
                    })
                  }),
                  (0, n.jsx) ('button', {
                    onClick: function () {
                      return r(!1)
                    },
                    children: (0, n.jsx) ('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      className: 'h-10 w-10 transition-all duration-200 hover:text-white '.concat(t ? 'text-white/50' : 'text-white'),
                      viewBox: '0 0 20 20',
                      fill: 'currentColor',
                      children: (0, n.jsx) ('path', {
                        fillRule: 'evenodd',
                        d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z',
                        clipRule: 'evenodd'
                      })
                    })
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs) ('audio', {
            id: 'audio',
            children: [
              (0, n.jsx) ('source', {
                src: '/music.mp3',
                type: 'audio/mpeg',
                loop: !0
              }),
              'Your browser does not support the audio element.'
            ]
          })
        ]
      })
    }
    function g(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n
    }
    function y(e, t, r, n, a, o, i) {
      try {
        var l = e[o](i),
        c = l.value
      } catch (s) {
        return void r(s)
      }
      l.done ? t(c) : Promise.resolve(c).then(n, a)
    }
    function b(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e
      }(e) || function (e, t) {
        var r = null == e ? null : 'undefined' !== typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != r) {
          var n,
          a,
          o = [
          ],
          i = !0,
          l = !1;
          try {
            for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
          } catch (c) {
            l = !0,
            a = c
          } finally {
            try {
              i || null == r.return || r.return()
            } finally {
              if (l) throw a
            }
          }
          return o
        }
      }(e, t) || function (e, t) {
        if (!e) return;
        if ('string' === typeof e) return g(e, t);
        var r = Object.prototype.toString.call(e).slice(8, - 1);
        'Object' === r && e.constructor && (r = e.constructor.name);
        if ('Map' === r || 'Set' === r) return Array.from(r);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, t)
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }()
    }
    function j(e) {
      var t = e.children,
      r = b(f(), 2),
      a = r[0],
      c = r[1],
      s = (0, l.useRouter) ().asPath,
      u = function () {
        var e,
        t = (e = o().mark((function e() {
          return o().wrap((function (e) {
            for (; ; ) switch (e.prev = e.next) {
              case 0:
                return console.log('setting'),
                c(!0),
                e.next = 4,
                new Promise((function (e) {
                  return setTimeout(e, 600)
                }));
              case 4:
                c(!1);
              case 5:
              case 'end':
                return e.stop()
            }
          }), e)
        })), function () {
          var t = this,
          r = arguments;
          return new Promise((function (n, a) {
            var o = e.apply(t, r);
            function i(e) {
              y(o, n, a, i, l, 'next', e)
            }
            function l(e) {
              y(o, n, a, i, l, 'throw', e)
            }
            i(void 0)
          }))
        });
        return function () {
          return t.apply(this, arguments)
        }
      }();
      return (0, i.useEffect) ((function () {
        u()
      }), [
        s
      ]),
      (0, n.jsxs) ('div', {
        className: 'min-h-screen h-full relative flex flex-col bg-primary',
        children: [
          (0, n.jsx) (x, {
          }),
          (0, n.jsx) ('main', {
            className: 'flex-1',
            children: t
          }),
          (0, n.jsx) (w, {
          }),
          (0, n.jsx) (N, {
            overlayVisible: a
          })
        ]
      })
    }
    var N = function (e) {
      var t = e.overlayVisible;
      return (0, n.jsx) ('div', {
        className: 'flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 bg-primary z-10 h-screen '.concat(t ? ' opacity-100' : 'transition duration-700 opacity-0 pointer-events-none'),
        children: (0, n.jsx) ('img', {
          src: '/favicon.png',
          className: 'h-24'
        })
      })
    };
    function C(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r,
      e
    }
    function k(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {
        },
        n = Object.keys(r);
        'function' === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        })))),
        n.forEach((function (t) {
          C(e, t, r[t])
        }))
      }
      return e
    }
    var M = function (e) {
      var t = e.Component,
      r = e.pageProps;
      return (0, n.jsx) (u, {
        children: (0, n.jsx) (j, {
          children: (0, n.jsx) (t, k({
          }, r))
        })
      })
    }
  },
  6774: function () {
  },
  1664: function (e, t, r) {
    e.exports = r(1551)
  },
  1163: function (e, t, r) {
    e.exports = r(880)
  }
},
function (e) {
  var t = function (t) {
    return e(e.s = t)
  };
  e.O(0, [
    774,
    179
  ], (function () {
    return t(1780),
    t(880)
  }));
  var r = e.O();
  _N_E = r
}
]);
