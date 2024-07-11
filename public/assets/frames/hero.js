const t = {
  version: 2,
  stage: null,
  background: 16777215,
  width: 2035,
  height: 1920,
  framerate: 60,
  totalFrames: 72,
  assets: {hero_atlas_1: "images/hero_atlas_1.json"},
  lib: {},
  shapes: {},
  textures: {},
  spritesheets: [],
  getTexture: function (e) {
    if (t.textures[e]) return t.textures[e];
    const s = t.spritesheets.find((t => !!t.textures[e]));
    return s ? s.textures[e] : null;
  },
  setup: function (e) {
    const s = e.MovieClip, n = e.Container, c = e.Sprite;
    t.lib.bonus_2 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("bonus_2")).t(-32, -64);
        this.ac(e);
      }
    }, t.lib.bonus_3 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("bonus_3")).t(-44, -88);
        this.ac(e);
      }
    }, t.lib.bonus_1 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("bonus_1")).t(-44, -88);
        this.ac(e);
      }
    }, t.lib.heart = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("heart"));
        this.ac(e);
      }
    }, t.lib.logo = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("doodle_logo"));
        this.ac(e);
      }
    }, t.lib.shape66 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("nose")).t(-27, -7);
        this.ac(e);
      }
    }, t.lib.shape55 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("eyeL")).t(-39, -39);
        this.ac(e);
      }
    }, t.lib.shape44 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("eyeR")).t(-35, -40);
        this.ac(e);
      }
    }, t.lib.shape33 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("browR")).t(-12, -4);
        this.ac(e);
      }
    }, t.lib.shape22 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("browL")).t(-14, -5);
        this.ac(e);
      }
    }, t.lib.shape77 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("osn")).t(-137, -127);
        this.ac(e);
      }
    }, t.lib.earL_2 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("earL_2")).t(-128.2, -33.65);
        this.ac(e);
      }
    }, t.lib.elf_uho2 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("elf_uho")).t(-32.05, -39.5);
        this.ac(e);
      }
    }, t.lib.shape11 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("earR")).t(-26, -45);
        this.ac(e);
      }
    }, t.lib.shape00 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("earL")).t(-127, -45);
        this.ac(e);
      }
    }, t.lib.elf_eyeclosep = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("elf_eyeClose")).t(-37.5, -6);
        this.ac(e);
      }
    }, t.lib.elf = class extends s {
      constructor() {
        super(0, 72, !0, 0);
        const e = new t.lib.elf_eyeclosep, s = new t.lib.elf_eyeclosep, n = new t.lib.shape00, c = new t.lib.shape11,
          o = new t.lib.elf_uho2, r = new t.lib.earL_2, u = (new t.lib.shape77).t(-5.25, -126), a = new t.lib.shape22,
          l = new t.lib.shape33, Y = new t.lib.shape44, D = new t.lib.shape55, i = new t.lib.shape66;
        this.at(e, 0, 72, "0X70.75Y-137V0WD5EquadInOut;PY-101.75 5V1 6WD6Ecustom;PY-103.55 12V0WD25Ecustom;PY-137").at(s, 0, 72, "0X-76.9Y-137V0WD5EquadInOut;PY-101.75 5V1 6WD6Ecustom;PY-103.55 12V0WD25Ecustom;PY-137").at(n, 0, 72, "0X-139.45Y-138.55A1B1C0D0R0V1WD7Ecustom;PX-128.15Y-143.1A1B1C.204D-.235 8X-126.25Y-144.1C0D0R-.309V0WD13Ecustom;PX-108.1Y-152.75A1B1R-.794 21WD20Ecustom;PX-117.65Y-146.55A1.017B.984C.415D-.442 41V1 42X-119.431Y-145.958A1.015B.985C.383D-.408R0 43X-121.09Y-145.369A1.014B.986C.351D-.374 44X-122.68Y-144.772A1.013B.987C.32D-.341 45X-124.322Y-144.193A1.012B.989C.289D-.308 46X-125.824Y-143.548A1.01B.99C.26D-.277 47X-127.399Y-143.037A1.009B.991C.231D-.246 48X-128.782Y-142.444A1.008B.992C.204D-.218 49X-130.122Y-141.986A1.007B.993C.179D-.191 50X-131.305Y-141.516A1.006B.994C.156D-.166 51X-132.452Y-141.149A1.005B.995C.134D-.143 52X-133.517Y-140.712C.114D-.122 53X-134.476Y-140.42A1.004B.996C.096D-.103 54X-135.318Y-140.037A1.003B.997C.08D-.085 55X-136.106Y-139.785C.065D-.07 56X-136.777Y-139.534A1.002B.998C.052D-.056 57X-137.38Y-139.247C.041D-.044 58X-137.85Y-139.089A1.001B.999C.031D-.033 59X-138.338Y-138.972C.023D-.024 60X-138.726Y-138.806C.016D-.017 61X-139.052Y-138.703A1B1C.01D-.011 62X-139.214Y-138.572C.005D-.006 63X-139.392Y-138.563C0D0R-.002 64X-139.45Y-138.55R0").at(c, 0, 72, "0X135.45Y-137.9A1B1C0D0R0V1WD8Ecustom;PX117.8Y-143.1A1B1R.306 8V0WD13Ecustom;PX103.95Y-152.7A1B1R.785 21WD20Ecustom;PX115.5Y-141.85A1.001B1C-.446D.408 41V1 42X117.075Y-141.606C-.411D.377R0 43X118.585Y-141.283A1C-.377D.346 44X120.153Y-140.996C-.343D.315 45X121.596Y-140.7C-.31D.285 46X122.971Y-140.387C-.279D.255 47X124.386Y-140.146C-.248D.228 48X125.652Y-139.831C-.22D.201 49X126.888Y-139.655C-.193D.176 50X127.99Y-139.378C-.167D.153 51X129.023Y-139.223C-.144D.132 52X129.954Y-139.009C-.123D.113 53X130.837Y-138.856C-.103D.095 54X131.622Y-138.637C-.086D.079 55X132.312Y-138.525C-.07D.064 56X132.993Y-138.329C-.056D.052 57X133.516Y-138.27C-.044D.04 58X133.962Y-138.162C-.033D.031 59X134.383Y-138.062C-.024D.022 60X134.707Y-137.987C-.017D.015 61X134.973Y-137.948C-.011D.01 62X135.23Y-137.892C-.006D.005 63X135.353Y-137.835C0D0R.002 64X135.45Y-137.9R0").at(o, 0, 41, "0X106.25Y-153R.846V0 8X121.95Y-140.45R.315V1WD13E100classic;PX108.45Y-153A1B1R.846 21WD19Ecustom;PX117.2Y-139.25A1.002B1C-.503D.445").at(r, 0, 41, "0X-138.25Y-140.25R0V0 8X-126.75Y-148.75R-.336V1WD13E100classic;PX-108.8Y-154.8A1B1R-.785 21WD19Ecustom;PX-116.65Y-149.75A1.015B.985C.451D-.475").at(u).at(a, 0, 72, "0X-81.45Y-191.85WD7EquadInOut;PY-145.1 8WD34EquadInOut;PY-191.85").at(l, 0, 72, "0X72.65Y-191.85WD7EquadInOut;PY-145.1 8WD34EquadInOut;PY-191.85").at(Y, 0, 72, "0X74.65Y-126B1V1WD4Ecustom;PY-103.05B.543 5Y-90.75B1V0 6WD5Ecustom;PY-92 12Y-103.05B.543V1WD25Ecustom;PY-126B1").at(D, 0, 72, "0X-82.2Y-124.7B1V1WD4Ecustom;PY-102.35B.543 5Y-89.45B1V0 6WD5Ecustom;PY-90.7 12Y-102.35B.543V1WD25Ecustom;PY-124.7B1").at(i, 0, 72, "0X-4.05Y-86.5WD5EquadInOut;PY-51.25 6WD31EquadInOut;PY-86.5");
      }
    }, t.lib.platform_1 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("platform_1")).t(-57);
        this.ac(e);
      }
    }, t.lib.platform_2 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("platform_2")).t(-57);
        this.ac(e);
      }
    }, t.lib.platf2_02 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("platf02")).t(-100, -46);
        this.ac(e);
      }
    }, t.lib.platf2_01 = class extends n {
      constructor() {
        super();
        const e = new c(t.getTexture("platf01")).t(-108.5, -46);
        this.ac(e);
      }
    }, t.lib.platform_3 = class extends s {
      constructor() {
        super(0, 40, !0, 0);
        const e = new t.lib.platf2_01, s = new t.lib.platf2_02;
        this.at(e, 0, 37, "0X-106Y46A1B1R0WD8Ecustom;PX-106.05Y105.7A1B1R.271 8WD6Ecustom;PX-111.85Y295.05A1B1R.65 14WD9PX-133.2Y593.3A1B1R1.006 23WD6PX-147.3Y777A1B1R1.249 29WD7PX-163.65Y991.35A1B1R1.531L0").at(s, 0, 34, "0X114.5Y46A1B1R0WD5Ecustom;PX116.7Y74.45A1B1R-.255 5WD6Ecustom;PX122.95Y301.7A1B1R-.836 11WD9PX130Y586.6A1B1R-1.042 20WD6PX139.7Y760.55A1B1R-1.403 26WD7PX151Y963.35A.999B.999R-1.825L0");
      }
    };
    t.lib.hero = class extends s {
      constructor() {
        super(0, 72, !0, 60);
        const e = (new t.lib.platform_3).t(240.95, 128.25), s = (new t.lib.platform_2).t(257.5, 434.1, 3.796, 3.538),
          n = (new t.lib.platform_1).t(242.8, 278.2, 3.538, 3.538), c = (new t.lib.elf).t(180.45, 754.15, .469, .469),
          o = (new t.lib.logo).t(535.7, 128.1), r = (new t.lib.heart).t(818.35, 604.15, 3.261, 3.26),
          u = (new t.lib.bonus_1).t(372.1, 763.1, 1.705, 1.705), a = (new t.lib.bonus_3).t(735.5, 771.1, 1.705, 1.705),
          l = (new t.lib.bonus_2).t(553.5, 758.8, 2.344, 2.344);
        this.at(e).at(s).at(n).at(c).at(o).at(r).at(u).at(a).at(l);
      }
    };
    t.stage = t.lib.hero;
  }
};
module.exports = t;
