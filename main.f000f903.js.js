/*! For license information please see main.f000f903.js.LICENSE.txt */
(() => {
  var e = {
    11414: (e, t, n) => {
      "use strict";
      n.d(t, { Z5: () => i, lD: () => a });
      let r;
      async function a(e, t) {
        if (r) throw new Error("[ApsStorageKey] Already set");
        if ("ruffle" === e) {
          const e = t.swfLocation.slice(0, -".swf".length),
            n = new URL(`${e}.html`),
            a = new URL(`/ruffle${n.pathname}`, "https://files.crazygames.com/");
          r = encodeURIComponent(a.pathname);
        } else if ("iframe" === e) {
          const e = t;
          e.url && (r = encodeURIComponent(new URL(e.url).pathname));
        }
      }
      function i() {
        return r;
      }
    },
    8226: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(47313),
        a = n(85541),
        i = n(46417);
      const o = r.memo((e) =>
        (0, i.jsx)(a.Z, {
          ...e,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z",
          }),
        })
      );
    },
    75993: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(47313),
        a = n(85541),
        i = n(46417);
      const o = r.memo((e) =>
        (0, i.jsxs)(a.Z, {
          ...e,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M10 15.0657V8.93426C10 8.53491 10.4451 8.29671 10.7773 8.51823L15.376 11.584C15.6728 11.7819 15.6728 12.2181 15.376 12.416L10.7774 15.4818C10.4451 15.7033 10 15.4651 10 15.0657Z",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.5 15.0657V8.93426C9.5 8.13556 10.3901 7.65917 11.0547 8.10221L15.6533 11.1679C16.247 11.5638 16.247 12.4362 15.6533 12.8321L11.0547 15.8978C10.3901 16.3408 9.5 15.8644 9.5 15.0657ZM10 8.93426V15.0657C10 15.4651 10.4451 15.7033 10.7774 15.4818L15.376 12.416C15.6728 12.2181 15.6728 11.7819 15.376 11.584L10.7773 8.51823C10.4451 8.29671 10 8.53491 10 8.93426Z",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
            }),
          ],
        })
      );
    },
    91815: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(47313),
        a = n(85541),
        i = n(46417);
      const o = r.memo((e) =>
        (0, i.jsx)(a.Z, {
          ...e,
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.1051 3.90453C10.1051 2.84042 10.9755 2 12.0215 2H12.1183C13.7773 2 15.1446 3.33088 15.1446 5V9H18.9711C21.2014 9 22.6959 11.3321 21.6755 13.3463L18.1295 20.3463C17.6137 21.3646 16.5645 22 15.4251 22H11.3546C11.1082 22 10.8627 21.9702 10.6236 21.9112L6.93101 21H5.02628C3.36726 21 2 19.6691 2 18V12C2 10.3309 3.36726 9 5.02628 9H7.19669L9.66081 5.35177C9.95107 4.92203 10.1051 4.41848 10.1051 3.90453ZM6.05257 11H5.02628C4.44713 11 4 11.46 4 12V18C4 18.54 4.44713 19 5.02628 19H6.05257V11ZM8.05257 19.2168V11.3061L11.3182 6.47121C11.8129 5.73871 12.0857 4.88122 12.1041 4H12.1183C12.6974 4 13.1446 4.45998 13.1446 5V9H12.1183C11.566 9 11.1183 9.44772 11.1183 10C11.1183 10.5523 11.566 11 12.1183 11H18.9711C19.7534 11 20.2183 11.7971 19.8914 12.4425L16.3454 19.4425C16.1747 19.7794 15.8207 20 15.4251 20H11.3546C11.2696 20 11.185 19.9897 11.1027 19.9694L8.05257 19.2168Z",
          }),
        })
      );
    },
    94891: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var r = n(18088),
        a = n(7136);
      const i = [
        "en_US", "nl_NL", "es_ES", "fr_FR", "it_IT", "de_DE", "id_ID",
        "pt_BR", "sv_SE", "ru_RU", "fi_FI", "nb_NO", "pl_PL", "ro_RO",
        "uk_UA", "da_DK", "cs_CZ", "el_GR", "hu_HU", "tr_TR", "ar_SA",
        "vi_VN", "th_TH"
      ];
      class o {
        static async getTranslations(e) {
          switch (e) {
            case "en_US":
              return (await n.e(6876).then(n.t.bind(n, 66876, 23))).default.messages;
            case "nl_NL":
              return (await n.e(1325).then(n.t.bind(n, 41325, 23))).default.messages;
            case "es_ES":
              return (await n.e(5385).then(n.t.bind(n, 75385, 23))).default.messages;
            default:
              throw new Error(`[Translations] Unmapped locale translations: ${e}`);
          }
        }
        static async Initialize(e) {
          const t = await this.getSupportedLocale(e);
          (this.locale = t),
            await this.initializeTranslations(t),
            console.info(`[Translations] initialized locale "${t}"`);
        }
        static getReactIntlLocale() {
          if (null === this.locale) throw new Error("Locale is not initialized yet");
          return (0, r.xz)(this.locale);
        }
        static getLocale() {
          return this.locale;
        }
        static getTranslationMap() {
          if (null === this.translations) throw new Error("Translations are not initialized yet");
          return this.translations;
        }
        static async guessLocale() {
          const e = (t) => {
            if (0 === t.length)
              return console.info("[Translations] None of the preferred locales are supported"), r.ZW;
            const n = this.browserLocaleToCzyLocale(t[0]);
            return i.includes(n) ? n : e(t.slice(1));
          };
          return e(Array.from(navigator.languages));
        }
        static browserLocaleToCzyLocale(e) {
          return e.replace("-", "_");
        }
        static czyLocaleToBrowserLocale(e) {
          return e.replace("_", "-");
        }
        static async getSupportedLocale(e) {
          if (e) {
            if (i.includes(e)) return e;
            console.warn(`[Translations] specified locale is not supported: ${e}`);
          }
          return await this.guessLocale();
        }
        static async initializeTranslations(e) {
          const t = await this.getTranslations(e),
            n = this.czyLocaleToBrowserLocale(e);
          a.ag.loadLocaleData({ [n]: { plurals: () => "other" } }),
            a.ag.load(n, t),
            a.ag.activate(n),
            (this.translations = t);
        }
      }
      (o.translations = null), (o.locale = null);
      const s = o;
    },
    73914: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => r });
      const r = n(47313).createContext({
        requestFullscreen: () => {
          throw new Error("[FullscreenContext] missing context");
        },
        disableFullscreen: () => {
          throw new Error("[FullscreenContext] missing context");
        },
        setFullScreenError: () => {
          throw new Error("[FullscreenContext] missing context");
        },
        isFullscreen: !1,
        fullscreenError: void 0,
      });
    },
    25831: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      n(47313);
      var r = n(73914),
        a = n(46417);
      const i = function (e) {
        return (t) =>
          (0, a.jsx)(r.s.Consumer, {
            children: (n) => {
              let {
                requestFullscreen: r,
                isFullscreen: i,
                disableFullscreen: o,
                fullscreenError: s,
                setFullScreenError: l,
              } = n;
              return (0, a.jsx)(e, {
                ...t,
                requestFullscreen: r,
                disableFullscreen: o,
                isFullscreen: i,
                fullscreenError: s,
                setFullScreenError: l,
              });
            },
          });
      };
    },
    86857: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => c });
      n(47313);
      var r = n(77626),
        a = n(42379),
        i = n(71917);
      const o = (0, a.ZP)("div")(() => ({
          fontSize: "0.6em",
          width: "100%",
          padding: "3px",
          backgroundColor: "#ffffff20",
          color: "#ffffff75",
          lineHeight: 1.2,
          textAlign: "center",
          [`@media (min-height: ${i.ot.maxMobileLandscapeHeight}px)`]: {
            fontSize: "0.7em",
            padding: "7px 5px",
          },
        })),
        s = (0, a.ZP)("a")((e) => {
          let {
            theme: { palette: t },
          } = e;
          return {
            color: t.secondary.main,
            textDecoration: "none",
            "&:hover": { color: t.secondary.dark },
          };
        });
      var l = n(46417);
      const c = () =>
        (0, l.jsx)(o, {
          children: (0, l.jsx)(r.Z, {
            id: "loader.gdprNotice",
            values: {
              privacyLink: (0, l.jsx)(s, {
                rel: "noopener noreferrer",
                href: "https://www.crazygames.com/privacy-policy",
                target: "_blank",
                children: (0, l.jsx)(r.Z, { id: "common.privacy" }),
              }),
              termsLink: (0, l.jsx)(s, {
                rel: "noopener noreferrer",
                href: "https://www.crazygames.com/terms-and-conditions",
                target: "_blank",
                children: (0, l.jsx)(r.Z, { id: "loader.gdprTerms" }),
              }),
            },
          }),
        });
    },
    72071: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => s, r: () => o });
      var r = n(96607),
        a = n(47313),
        i = n(46417);
      const o = a.createContext({
          gameLoadStatus: "NOT_STARTED",
          onPreroll: () => {},
          onPostPreroll: () => {},
          onLoadFinished: () => {},
        }),
        s = (e) => {
          let { children: t } = e;
          const [n, s] = (0, a.useState)("NOT_STARTED");
          (0, a.useEffect)(() => {
            function e(e) {
              "check-loading-state" === e.data &&
                ("GAME_LOADED" === n
                  ? r.Z.gameLoadingStateResponse(!0)
                  : r.Z.gameLoadingStateResponse(!1));
            }
            return (
              window.addEventListener("message", e),
              () => {
                window.removeEventListener("message", e);
              }
            );
          }, [n]);
          const l = {
            gameLoadStatus: n,
            onPreroll: () => {
              "POST_PREROLL" !== n && "GAME_LOADED" !== n && s("PREROLL");
            },
            onLoadFinished: () => {
              r.Z.gameFinishedLoading(), s("GAME_LOADED");
            },
            onPostPreroll: () => {
              "GAME_LOADED" !== n && s("POST_PREROLL");
            },
          };
          return (0, i.jsx)(o.Provider, { value: l, children: t });
        };
    },
    71534: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i });
      n(47313);
      var r = n(72071),
        a = n(46417);
      function i(e) {
        return (t) =>
          (0, a.jsx)(r.r.Consumer, {
            children: (n) => {
              let {
                gameLoadStatus: r,
                onLoadFinished: i,
                onPostPreroll: o,
                onPreroll: s,
              } = n;
              return (0, a.jsx)(e, {
                ...t,
                onLoadFinished: i,
                onPostPreroll: o,
                onPreroll: s,
                gameLoadStatus: r,
              });
            },
          });
      }
    },
    46745: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => u });
      var r = n(47313),
        a = n(79924),
        i = n(46604),
        o = n(57484),
        s = n(46417);
      const l = r.forwardRef((e, t) => {
        let {
          videoStyle: n,
          addBlurredEffect: a,
          videoSizes: l,
          minWidth: c,
          autoplay: d = !0,
        } = e;
        const u = i.Z.buildVideoSrc(l, c),
          [p, h] = r.useState(!1);
        return (0, s.jsxs)("div", {
          style: {
            width: "100%",
            height: "100%",
            position: a ? "fixed" : void 0,
            top: a ? 0 : void 0,
          },
          children: [
            a && p && (0, s.jsx)(o.CW, {}),
            (0, s.jsx)("video", {
              autoPlay: d,
              loop: !0,
              muted: !0,
              style: { ...n, opacity: p ? 1 : 0 },
              className: "video",
              ref: t,
              onCanPlay: () => h(!0),
              children: (0, s.jsx)("source", { src: u, type: "video/mp4" }),
            }),
          ],
        });
      });
      var c = n(35311),
        d = n(87308);
      const u = r.forwardRef((e, t) => {
        const n = r.useContext(c.Z),
          {
            thumbnail: i,
            video: o,
            autoplay: u,
            minVideoWidth: p,
            addBlurredEffect: h,
          } = e,
          { orientation: f } = n,
          m = "LANDSCAPE" === f && (0, d.uo)(),
          g = p || window.innerWidth / 2;
        return o && o.sizes && o.sizes.length > 0
          ? (0, s.jsx)(l, {
              videoSizes: o.sizes,
              minWidth: g,
              addBlurredEffect: h,
              videoStyle: {
                height: "100%",
                width: "100%",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
                position: "relative",
                zIndex: 1,
                objectFit: "cover",
              },
              autoplay: u,
              ref: t,
            })
          : (0, s.jsx)(a.Z, {
              src: i,
              minWidth: g,
              addBlurredEffect: h,
              addParamWidth: !0,
              imgStyle: {
                height: "100%",
                width: "100%",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
                position: "relative",
                zIndex: 1,
                objectFit: m ? "contain" : "cover",
              },
            });
      });
    },
    58684: (e, t, n) => {
      "use strict";
      n.d(t, {
        CA: () => d,
        FK: () => u,
        IB: () => h,
        O2: () => p,
        hz: () => s,
        iO: () => c,
        r6: () => l,
        u_: () => o,
      });
      var r = n(42379),
        a = n(17551),
        i = n(32606);
      const o = (0, r.ZP)("div", {
          shouldForwardProp: (e) => "hideBackdrop" !== e,
        })((e) => {
          let { hideBackdrop: t } = e;
          return {
            position: "fixed",
            inset: 0,
            ...(!t && {
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(12, 13, 20, 0.8)",
            }),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            fontWeight: 900,
          };
        }),
        s = (0, r.ZP)("div")(() => ({
          backgroundColor: i.D.white[100],
          borderRadius: 10,
          width: 400,
          position: "relative",
          padding: "10px 20px 30px",
          textAlign: "center",
        })),
        l = (0, r.ZP)("h2")(() => ({
          color: i.D.black[70],
          fontWeight: 900,
          fontSize: "24px",
        })),
        c = (0, r.ZP)("p")(() => ({
          color: i.D.white[10],
          fontWeight: 400,
        })),
        d = (0, r.ZP)("div")(() => ({
          position: "absolute",
          width: "34px",
          height: "34px",
          right: "-10px",
          top: "-10px",
          backgroundColor: i.D.brand[100],
          border: `4px solid ${i.D.white[100]}`,
          borderRadius: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          svg: { width: 20 },
          "&:hover": { background: i.D.brand[80], cursor: "pointer" },
        })),
        u = (0, r.ZP)("div")({
          position: "absolute",
          width: "30px",
          height: "30px",
          right: "8px",
          top: "8px",
          borderRadius: "28px",
          color: i.D.white[10],
          "&:hover": { cursor: "pointer", color: i.D.white[20] },
          "&:active": {
            backgroundColor: i.D.black[70],
            color: i.D.white[40],
          },
        }),
        p = (0, r.ZP)("div")(() => ({
          display: "inline-flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "14px 20px",
          gap: "5px",
          width: "100%",
          height: "50px",
          background: i.D.brand[100],
          borderRadius: "30px",
          flex: "none",
          order: 2,
          flexGrow: 0,
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          fontWeight: 800,
          userSelect: "none",
          "&:hover": { background: i.D.brand[80], cursor: "pointer" },
          "&:active": { background: (0, a.Fq)(i.D.brand[80], 0.7) },
        })),
        h = (0, r.ZP)("div")(() => ({
          transition: "all 250ms ease 0s",
          border: "none",
          cursor: "pointer",
          display: "flex",
          WebkitBoxPack: "center",
          justifyContent: "center",
          WebkitBoxAlign: "center",
          alignItems: "center",
          fontFamily: "Nunito",
          fontWeight: 800,
          fontSize: "16px",
          boxSizing: "border-box",
          padding: "8px 16px",
          background: "transparent",
          color: i.D.brand[100],
          height: "50px",
          width: "100%",
          marginTop: "4px",
          borderRadius: "30px",
          userSelect: "none",
          "&:hover": { color: i.D.brand[80], cursor: "pointer" },
          "&:active": { color: (0, a.Fq)(i.D.brand[80], 0.7) },
        }));
    },
    16782: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => o });
      var r = n(8226),
        a = (n(47313), n(58684)),
        i = n(46417);
      const o = (e) => {
        let { onClick: t } = e;
        return (0, i.jsx)(a.CA, { onClick: t, children: (0, i.jsx)(r.Z, {}) });
      };
    },
    73985: (e, t, n) => {
      "use strict";
      n.d(t, { Gs: () => o, I1: () => s, rU: () => i });
      var r = n(90831);
      let a = !1;
      function i(e) {
        a = e;
      }
      function o() {
        return a;
      }
      function s(e) {
        const { gameId: t } = (0, r.NI)();
        if (["22131", "21143"].includes(t)) return e;
        const { username: n, profilePictureUrl: a } = e;
        return { username: n, profilePictureUrl: a };
      }
    },
    61627: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => c, N: () => l });
      var r = n(96607),
        a = n(47313),
        i = n(73985),
        o = n(50853),
        s = n(46417);
      const l = a.createContext({
          userId: void 0,
          userData: void 0,
          hasUserLoaded: !1,
          isUserExpected: !1,
          isFavouriteGame: !1,
          signInModalEnabled: !1,
          addToFavourite: () => {},
          removeFromFavourite: () => {},
          setSignInModalEnabled: () => {},
        }),
        c = (e) => {
          let { children: t } = e;
          const [n, c] = a.useState(void 0),
            [d, u] = a.useState(void 0),
            [p, h] = a.useState(!1),
            [f, m] = a.useState(!1),
            [g, v] = a.useState(null),
            [b, y] = a.useState(!1),
            [w, S] = a.useState(),
            [k, x] = a.useState(!1),
            C = a.useCallback((e) => {
              if ("sdk" === e.data.messageTarget) return;
              const { type: t, data: n } = e.data;
              switch (t) {
                case "userLoggedIn":
                  if ((n.userId && c(n.userId), n.userData && u(n.userData), n.userId && n.userData))
                    try {
                      const e = (0, o.Q)(),
                        t = {
                          id: n.userId,
                          username: n.userData.username,
                          profilePictureUrl: n.userData.profilePictureUrl,
                        };
                      e.postMessageToSdk("userLoggedIn", { user: (0, i.I1)(t) });
                    } catch (r) {}
                  else console.error("[PortalUserContext] userLoggedIn is missing required fields");
                  break;
                case "userExpected":
                  m(!0);
                  break;
                case "init":
                case "init-js-sdk":
                  S(void 0), y(!0);
                  break;
                case "userPortalInfoSync":
                  n.userId ? (c(n.userId), (0, i.rU)(!0)) : (c(void 0), (0, i.rU)(!1)),
                    n.userData && u(n.userData),
                    x(!!n.wasUserLoggedIn),
                    h(!0),
                    void 0 !== n.isFavouriteGame && v(!!n.isFavouriteGame);
                  break;
                default:
                  return;
              }
            }, []);
          a.useEffect(() => (window.addEventListener("message", C), () => window.removeEventListener("message", C)), [C]),
            a.useEffect(() => {
              if (b && p && "no-send" !== w && "sent" !== w)
                if (n)
                  if (d) {
                    const e = (0, o.Q)(),
                      t = { id: n, username: d.username, profilePictureUrl: d.profilePictureUrl };
                    e.postMessageToSdk("initialUserSet", { user: (0, i.I1)(t) }), S("sent");
                  } else S("wait-userdata");
                else {
                  (0, o.Q)().postMessageToSdk("initialUserSet", { user: void 0 }), S("no-send");
                }
            }, [b, p, w, n, d]);
          a.useEffect(() => {
            r.Z.requestUserPortalInfoSync();
          }, []);
          const E = {
            userId: n,
            userData: d,
            hasUserLoaded: p,
            isUserExpected: f,
            isFavouriteGame: g,
            signInModalEnabled: k,
            setSignInModalEnabled: x,
            addToFavourite: () => {
              n ? (v(!0), r.Z.requestToFavouriteGame()) : r.Z.openGamesDrawer();
            },
            removeFromFavourite: () => {
              n ? (v(!1), r.Z.requestToUnFavouriteGame()) : r.Z.openGamesDrawer();
            },
          };
          return (0, s.jsx)(l.Provider, { value: E, children: t });
        };
    },
  };
})();