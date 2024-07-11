const t = {
  version: 2,
  stage: null,
  background: 16777215,
  width: 1920,
  height: 981,
  framerate: 30,
  totalFrames: 1,
  assets: {biome: "images/biome.shapes.txt"},
  lib: {},
  shapes: {},
  textures: {},
  spritesheets: [],
  getTexture: function (n) {
    if (t.textures[n]) return t.textures[n];
    const e = t.spritesheets.find((t => !!t.textures[n]));
    return e ? e.textures[n] : null;
  },
  setup: function (n) {
    const e = n.MovieClip, i = n.Container, s = n.Graphics;
    t.lib.Point = class extends i {
      constructor() {
        super();
        const n = (new s).d(t.shapes.biome[0]);
        this.ac(n);
      }
    }, t.lib.PointsLayer = class extends i {
      constructor() {
        super();
        const n = (new t.lib.Point).t(316.6, 415.55);
        this[n.name = "point_1"] = n;
        const e = (new t.lib.Point).t(81.55, 283.35);
        this[e.name = "point_3"] = e;
        const i = (new t.lib.Point).t(-71.35, 231.1);
        this[i.name = "point_4"] = i;
        const s = (new t.lib.Point).t(-137.5, 132.6);
        this[s.name = "point_5"] = s;
        const o = (new t.lib.Point).t(54.25, -186.25);
        this[o.name = "point_9"] = o;
        const c = (new t.lib.Point).t(254.75, 321.45);
        this[c.name = "point_2"] = c;
        const a = (new t.lib.Point).t(-58.2, 6.65);
        this[a.name = "point_6"] = a;
        const r = (new t.lib.Point).t(38.3, -54.45);
        this[r.name = "point_7"] = r;
        const l = (new t.lib.Point).t(129.05, -103.6);
        this[l.name = "point_8"] = l;
        const b = (new t.lib.Point).t(-9.8, -239.6);
        this[b.name = "point_10"] = b;
        const h = (new t.lib.Point).t(-27.85, -327.35);
        this[h.name = "point_11"] = h;
        const p = (new t.lib.Point).t(141.45, -382.7);
        this[p.name = "point_12"] = p;
        const u = (new t.lib.Point).t(286.45, -443.6);
        this[u.name = "point_13"] = u, this.ac(n, e, i, s, o, c, a, r, l, b, h, p, u);
      }
    }, t.lib.MainScene = class extends i {
      constructor() {
        super();
        const n = (new t.lib.PointsLayer).t(-115.55, -455.8);
        this.ac(n);
      }
    };
    t.lib.biome = class extends e {
      constructor() {
        super(0, 1, !0, 30);
        const n = (new t.lib.MainScene).t(960, 978);
        this.ac(n);
      }
    };
    t.stage = t.lib.biome;
  }
};
module.exports = t;
