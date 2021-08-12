"use strict";
(self.webpackChunk_tabnine_jupyterlab =
  self.webpackChunk_tabnine_jupyterlab || []).push([
  [487],
  {
    487: (e, t, o) => {
      o.r(t), o.d(t, { default: () => u });
      var n,
        c,
        s,
        r = o(641),
        i = o(751),
        a = o(525);
      class l extends a.DataConnector {
        constructor(e) {
          super(), (this._connectors = e);
        }
        fetch(e) {
          return Promise.all(this._connectors.map((t) => t.fetch(e))).then(
            (e) => {
              const t = e.filter((e) => !!e);
              return n.mergeReplies(t);
            }
          );
        }
      }
      !(function (e) {
        e.mergeReplies = function (e) {
          const t = e.filter((e) => e.matches.length > 0);
          if (0 === t.length) return e[0];
          if (1 === t.length) return t[0];
          const o = new Set();
          return (
            t.forEach((e) => {
              e.matches.forEach((e) => o.add(e));
            }),
            Object.assign(Object.assign({}, t[0]), { matches: [...o] })
          );
        };
      })(n || (n = {}));
      class d extends a.DataConnector {
        constructor(e) {
          super(), (this._editor = e.editor);
        }
        fetch(e) {
          return this._editor
            ? new Promise((e) => {
                e(c.completionHint(this._editor));
              })
            : Promise.reject("No editor");
        }
      }
      !(function (e) {
        e.completionHint = function (e) {
          const t = e.getCursorPosition(),
            o = e.getTokenForPosition(t),
            n = [{ value: o.value + "Dima", offset: o.offset, type: "hint" }]
              .filter((e) => e.type)
              .map((e) => e.value),
            c = Array.from(new Set(n));
          return {
            start: o.offset,
            end: o.offset + o.value.length,
            matches: c,
            metadata: {},
          };
        };
      })(c || (c = {})),
        (function (e) {
          (e.invoke = "completer:invoke"),
            (e.invokeNotebook = "completer:invoke-notebook"),
            (e.select = "completer:select"),
            (e.selectNotebook = "completer:select-notebook");
        })(s || (s = {}));
      const u = {
        id: "completer",
        autoStart: !0,
        requires: [r.ICompletionManager, i.INotebookTracker],
        activate: async (e, t, o) => {
          console.log("JupyterLab custom completer extension is activated!"),
            o.widgetAdded.connect((e, o) => {
              var n, c;
              let s =
                null !==
                  (c =
                    null === (n = o.content.activeCell) || void 0 === n
                      ? void 0
                      : n.editor) && void 0 !== c
                  ? c
                  : null;
              const i = { session: o.sessionContext.session, editor: s },
                a = new l([]),
                u = t.register({ connector: a, editor: s, parent: o }),
                m = () => {
                  var e, t;
                  (s =
                    null !==
                      (t =
                        null === (e = o.content.activeCell) || void 0 === e
                          ? void 0
                          : e.editor) && void 0 !== t
                      ? t
                      : null),
                    (i.session = o.sessionContext.session),
                    (i.editor = s),
                    (u.editor = s);
                  const n = new r.KernelConnector(i),
                    c = new r.ContextConnector(i),
                    a = new d(i);
                  u.connector = new l([n, c, a]);
                };
              o.content.activeCellChanged.connect(m),
                o.sessionContext.sessionChanged.connect(m);
            }),
            e.commands.addCommand(s.invokeNotebook, {
              execute: () => {
                var t;
                const n = o.currentWidget;
                if (
                  n &&
                  "code" ===
                    (null === (t = n.content.activeCell) || void 0 === t
                      ? void 0
                      : t.model.type)
                )
                  return e.commands.execute(s.invoke, { id: n.id });
              },
            }),
            e.commands.addCommand(s.selectNotebook, {
              execute: () => {
                const t = o.currentWidget && o.currentWidget.id;
                if (t) return e.commands.execute(s.select, { id: t });
              },
            }),
            e.commands.addKeyBinding({
              command: s.selectNotebook,
              keys: ["Enter"],
              selector: ".jp-Notebook .jp-mod-completer-active",
            });
        },
      };
    },
  },
]);
