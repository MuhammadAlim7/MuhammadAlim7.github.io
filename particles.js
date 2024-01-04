window.addEventListener("DOMContentLoaded", (event) => {
  // kode pernadom warna ini ngab
  function getRandomColor(count) {
    // Tetapkan nilai saturasi dan kecerahan yang diinginkan
    const targetSaturation = 90;
    const targetBrightness = 60;

    const colors = [];
    for (let i = 0; i < count; i++) {
      // Generate komponen warna secara acak
      const hue = Math.floor(Math.random() * 360);
      const saturation = targetSaturation;
      const lightness = targetBrightness;

      // Ubah warna menjadi format hex
      const color = hslToHex(hue, saturation, lightness);
      colors.push(color);
    }

    return colors;
  }
  //ini converter hsl to hex nya
  function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hueToRgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }

    const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 45,
        density: { enable: true, value_area: 2500 },
      },
      color: { value: getRandomColor(30) },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 0.9,
          opacity_min: 1,
          sync: false,
        },
      },
      size: {
        value: 50,
        random: true,
        anim: { enable: false, speed: 40, size_min: 20, sync: false },
      },
      line_linked: {
        enable: 0,
        distance: 150,
        color: "#3B82F6",
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: true, rotateX: 100, rotateY: 100 },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "bubble" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 155,
          size: 60,
          duration: 2,
          opacity: 0.9,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: false,
  });
});
