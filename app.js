const CDN = "https://cdn.jsdelivr.net/gh/workinwithai-create/PreEight@main/public/samples";
const FILES = [
  ["kick", `${CDN}/drums/kick.mp3`], ["snare", `${CDN}/drums/snare.mp3`], ["hat", `${CDN}/drums/hihat.mp3`], ["crash", `${CDN}/drums/crash.mp3`],
  ["pC3", `${CDN}/piano/C3.mp3`], ["pC4", `${CDN}/piano/C4.mp3`], ["pA3", `${CDN}/piano/A3.mp3`],
  ["bE1", `${CDN}/bass/E1.mp3`], ["bA1", `${CDN}/bass/A1.mp3`], ["bC2", `${CDN}/bass/C2.mp3`],
  ["gE2", `${CDN}/guitar/E2.mp3`], ["gA2", `${CDN}/guitar/A2.mp3`], ["gE3", `${CDN}/guitar/E3.mp3`],
  ["tC4", `${CDN}/trumpet/C4.mp3`], ["vA3", `${CDN}/violin/A3.mp3`]
];
const BANKS = {
  piano: [["pC3", 48], ["pA3", 57], ["pC4", 60]],
  bass: [["bE1", 28], ["bA1", 33], ["bC2", 36]],
  guitar: [["gE2", 40], ["gA2", 45], ["gE3", 52]]
};
function bar(symbol, piano, bass, guitar, lead, color) {
  return { symbol, piano, bass, guitar, lead, color: !!color };
}
const G = bar("G", [55, 59, 62], 43, 55);
const Em = bar("Em", [52, 55, 59], 40, 52);
const C = bar("C", [48, 52, 55], 36, 48);
const D = bar("D", [50, 54, 57], 38, 50);
const Am = bar("Am", [57, 60, 64], 33, 57);
const F = bar("F", [53, 57, 60], 41, 53);
const Bm = bar("Bm", [47, 50, 54], 35, 47);
const A = bar("A", [57, 61, 64], 33, 57);
const E = bar("E", [52, 56, 59], 40, 52, 56, true);
const grooves = [
  {
    id: "sunday", name: "Sunday Radio", bpm: 94, key: "G major",
    home: [G, Em, C, D], ret: [G, Em, C, G],
    moves: [
      { id: "minor-four", name: "Minor four", outside: "Eb", blurb: "Bar 6 is Cm. The four chord goes minor for one bar, then home can land.", bars: [G, bar("Cm", [48, 51, 55], 36, 48, 63, true), G, D] },
      { id: "flat-six", name: "Flat six", outside: "Eb", blurb: "Eb then F. Two borrowed colors, then the dominant still points at G.", bars: [bar("Eb", [51, 55, 58], 39, 51, 58, true), bar("F", [53, 57, 60], 41, 53, 65, true), G, D] },
      { id: "five-of-five", name: "Five of five", outside: "C#", blurb: "A major is the dominant of D. The five chord finally means something.", bars: [G, bar("A", [57, 61, 64], 33, 57, 61, true), D, D] },
      { id: "parallel", name: "Parallel room", outside: "Bb", blurb: "Three bars of G minor, then D pulls back to major.", bars: [bar("Gm", [55, 58, 62], 43, 55, 58, true), bar("Eb", [51, 55, 58], 39, 51, 63, true), bar("Cm", [48, 51, 55], 36, 48, 63, true), D] },
      { id: "neapolitan", name: "Neapolitan", outside: "Ab", blurb: "Ab is the flat two. It leans into D, and D leans into G.", bars: [bar("Ab", [56, 60, 63], 32, 56, 56, true), D, G, D] },
      { id: "flat-seven", name: "Flat seven", outside: "F", blurb: "F natural walks down into Em. The loop stops being wallpaper.", bars: [G, bar("F", [53, 57, 60], 41, 53, 65, true), Em, D] }
    ]
  },
  {
    id: "alley", name: "Alley Minor", bpm: 104, key: "A minor",
    home: [Am, F, C, G], ret: [Am, F, E, Am],
    moves: [
      { id: "harmonic", name: "Harmonic door", outside: "G#", blurb: "E major raises the seventh. The loop that lived on G can finally cadence.", bars: [Am, F, E, E] },
      { id: "picardy", name: "Picardy", outside: "C#", blurb: "A major arrives inside the four, and the return ends bright.", bars: [Am, F, C, bar("A", [57, 61, 64], 33, 57, 61, true)], ret: [Am, F, E, bar("A", [57, 61, 64], 33, 57, 61, true)] },
      { id: "dorian", name: "Dorian door", outside: "F#", blurb: "D major is the hopeful four. One bright bar, then the minor cadence.", bars: [Am, bar("D", [50, 54, 57], 38, 50, 54, true), F, E] },
      { id: "flat-two", name: "Flat two", outside: "Bb", blurb: "Bb is the Neapolitan. It falls to E, and E falls to Am.", bars: [bar("Bb", [58, 62, 65], 34, 58, 58, true), E, Am, E] },
      { id: "leading", name: "Leading slip", outside: "G#", blurb: "G# diminished leans into Am, then E closes the door.", bars: [Am, bar("G#o", [56, 59, 62], 32, 56, 56, true), Am, E] },
      { id: "parallel", name: "Parallel room", outside: "C#", blurb: "Two bars borrowed from A major, then the dominant stays to carry you home.", bars: [bar("A", [57, 61, 64], 33, 57, 61, true), bar("D", [50, 54, 57], 38, 50, 54, true), E, E] }
    ]
  },
  {
    id: "porch", name: "Gold Porch", bpm: 86, key: "D major",
    home: [D, Bm, G, A], ret: [D, Bm, G, D],
    moves: [
      { id: "minor-four", name: "Minor four", outside: "Bb", blurb: "Gm for one bar. The four chord sighs, then D can sit down.", bars: [D, bar("Gm", [55, 58, 62], 43, 55, 58, true), D, A] },
      { id: "flat-six", name: "Flat six", outside: "Bb", blurb: "Bb to C. Both sit outside D major, and A still points home.", bars: [bar("Bb", [58, 62, 65], 34, 58, 58, true), bar("C", [48, 52, 55], 36, 48, 60, true), D, A] },
      { id: "five-of-five", name: "Five of five", outside: "G#", blurb: "E major aims at A. The five of the five makes the chorus want to end.", bars: [D, bar("E", [52, 56, 59], 40, 52, 56, true), A, A] },
      { id: "parallel", name: "Parallel room", outside: "Bb", blurb: "D minor for three bars. A major is the door back.", bars: [bar("Dm", [50, 53, 57], 38, 50, 53, true), bar("Bb", [58, 62, 65], 34, 58, 58, true), bar("Gm", [55, 58, 62], 43, 55, 58, true), A] },
      { id: "neapolitan", name: "Neapolitan", outside: "Eb", blurb: "Eb is the flat two of D. It resolves through A.", bars: [bar("Eb", [51, 55, 58], 39, 51, 63, true), A, D, A] },
      { id: "flat-seven", name: "Flat seven", outside: "C", blurb: "C natural drops into Bm. The porch loop finally has a slope.", bars: [D, bar("C", [48, 52, 55], 36, 48, 60, true), Bm, A] }
    ]
  }
];
const state = { groove: grooves[0], move: grooves[0].moves[0], playing: false, active: -1 };
let ctx, bus, buffers = {}, timer = null, token = 0;
function currentMove() { return state.groove.moves.find((m) => m.id === state.move.id) || state.groove.moves[0]; }
function retOf() { const m = currentMove(); return m.ret || state.groove.ret; }
function form() { return [...state.groove.home, ...currentMove().bars, ...retOf()]; }
function nearest(bank, midi) {
  return bank.reduce((best, row) => Math.abs(row[1] - midi) < Math.abs(best[1] - midi) ? row : best);
}
async function seat() {
  if (ctx) return;
  ctx = new AudioContext();
  bus = ctx.createGain();
  bus.gain.value = 0.85;
  bus.connect(ctx.destination);
  let n = 0;
  for (const [key, url] of FILES) {
    n += 1;
    document.getElementById("status").textContent = `Seating live chairs ${n}/${FILES.length}`;
    try {
      const res = await fetch(url);
      buffers[key] = await ctx.decodeAudioData(await res.arrayBuffer());
    } catch (err) { console.warn(key, err); }
  }
  document.getElementById("status").textContent = "Chairs seated \u00b7 live FluidR3 piano, nylon, upright, kit, trumpet, violin";
}
function tone(name, when, rate, gain, dur) {
  const buffer = buffers[name];
  if (!buffer || !ctx) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.playbackRate.value = rate;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0008, gain), when + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  src.connect(g); g.connect(bus);
  src.start(when); src.stop(when + dur + 0.02);
}
function note(bank, midi, when, gain, dur) {
  if (bank === "trumpet") return tone("tC4", when, 2 ** ((midi - 60) / 12), gain, dur);
  if (bank === "violin") return tone("vA3", when, 2 ** ((midi - 57) / 12), gain, dur);
  const row = nearest(BANKS[bank], midi);
  tone(row[0], when, 2 ** ((midi - row[1]) / 12), gain, dur);
}
function schedule(chord, t0, step, last) {
  for (let s = 0; s < 16; s++) {
    const when = t0 + s * step;
    if (s % 2 === 0) tone("hat", when, 1, chord.color ? 0.05 : 0.065, 0.08);
    if (s === 0 || s === 10) tone("kick", when, 1, s === 0 ? 0.7 : 0.42, 0.26);
    if (s === 4 || s === 12) tone("snare", when, 1, chord.color ? 0.3 : 0.4, 0.2);
    if (s === 0) {
      chord.piano.forEach((midi, i) => note("piano", midi, when, (chord.color ? 0.2 : 0.15) * (i === 1 ? 0.85 : 1), 1.2));
      note("bass", chord.bass, when, 0.5, 0.46);
      if (chord.lead != null) {
        note("trumpet", chord.lead, when, 0.3, 0.62);
        note("violin", chord.lead, when, 0.14, 1.55);
      }
      if (last) tone("crash", when, 1, 0.24, 1.2);
    }
    if (s === 8) {
      note("bass", chord.bass + 7, when, 0.28, 0.3);
      note("guitar", chord.guitar, when, chord.color ? 0.08 : 0.14, 0.34);
    }
    if ((s === 2 || s === 6 || s === 14) && !chord.color) note("guitar", chord.guitar, when, 0.09, 0.22);
    if (chord.lead != null && (s === 6 || s === 11)) note("trumpet", chord.lead, when, 0.2, 0.36);
  }
}
function stop() {
  token += 1;
  state.playing = false;
  state.active = -1;
  if (timer) clearTimeout(timer);
  timer = null;
  paint();
}
async function play(mode, only) {
  await seat();
  if (ctx.state === "suspended") await ctx.resume();
  stop();
  const mine = token;
  state.playing = true;
  const step = 60 / state.groove.bpm / 4;
  const move = currentMove();
  const bars = mode === "home" ? state.groove.home : mode === "move" ? [...move.bars, ...retOf()] : mode === "bar" ? [form()[only]] : form();
  const origin = mode === "move" ? 4 : mode === "bar" ? only : 0;
  let index = 0;
  const tick = () => {
    if (token !== mine) return;
    if (index >= bars.length) {
      if (mode === "home") index = 0;
      else { stop(); return; }
    }
    const absolute = mode === "home" ? index % 4 : origin + index;
    state.active = absolute;
    paint();
    schedule(bars[index], ctx.currentTime + 0.04, step, (mode === "full" || mode === "move") && absolute === 11);
    index += 1;
    timer = setTimeout(tick, step * 16 * 1000);
  };
  tick();
}
function punch() {
  const g = state.groove, m = currentMove(), bars = form();
  const lines = (a, b) => bars.slice(a, b).map((c, i) => `  ${a + i + 1}. ${c.symbol}${c.color ? "  \u2190 outside" : ""}`).join("\n");
  return `BorrowFour punch list
${g.name} \u00b7 ${g.bpm} BPM \u00b7 ${g.key} \u00b7 ${m.name}
Outside tone: ${m.outside}

The problem: the loop never leaves the key, so it cannot finish.
The move: ${m.blurb}

Home (bars 1-4)
${lines(0, 4)}

Borrow (bars 5-8) \u2014 ${m.name}
${lines(4, 8)}

Return (bars 9-12) \u2014 ends on the tonic
${lines(8, 12)}

Live chairs only. Drop the MIDI on a new track.
Distinct from BreathFour, PreEight, ModEight, HookGrid, ThinFour.`;
}
function vlq(n) {
  const bytes = [n & 0x7f];
  let rest = n >> 7;
  while (rest > 0) { bytes.unshift((rest & 0x7f) | 0x80); rest >>= 7; }
  return bytes;
}
function midiBytes() {
  const events = [];
  const us = Math.round(60000000 / state.groove.bpm);
  events.push({ tick: 0, order: 0, data: [0xff, 0x51, 0x03, (us >> 16) & 255, (us >> 8) & 255, us & 255] });
  form().forEach((chord, i) => {
    const t = i * 1920;
    chord.piano.forEach((midi) => {
      events.push({ tick: t, order: 2, data: [0x90, midi, chord.color ? 92 : 78] });
      events.push({ tick: t + 1440, order: 1, data: [0x80, midi, 0] });
    });
    events.push({ tick: t, order: 2, data: [0x91, chord.bass, 90] });
    events.push({ tick: t + 960, order: 1, data: [0x81, chord.bass, 0] });
    if (chord.lead != null) {
      events.push({ tick: t, order: 2, data: [0x93, chord.lead, 100] });
      events.push({ tick: t + 960, order: 1, data: [0x83, chord.lead, 0] });
    }
  });
  events.sort((a, b) => a.tick - b.tick || a.order - b.order);
  const out = [];
  let last = 0;
  for (const e of events) { out.push(...vlq(e.tick - last), ...e.data); last = e.tick; }
  out.push(0x00, 0xff, 0x2f, 0x00);
  const head = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0x01, 0xe0];
  const tr = [0x4d, 0x54, 0x72, 0x6b, (out.length >> 24) & 255, (out.length >> 16) & 255, (out.length >> 8) & 255, out.length & 255, ...out];
  return new Uint8Array([...head, ...tr]);
}
function paint() {
  const g = state.groove, m = currentMove();
  document.getElementById("grooves").innerHTML = `<p class="quiet">Pocket</p>` + grooves.map((row) =>
    `<button class="choice${row.id === g.id ? " on" : ""}" data-g="${row.id}"><b>${row.name}</b><span>${row.bpm} BPM \u00b7 ${row.key}</span></button>`
  ).join("");
  document.getElementById("moves").innerHTML = `<p class="quiet">Outside tone \u00b7 ${m.outside}</p>` + g.moves.map((row) =>
    `<button class="choice${row.id === m.id ? " on" : ""}" data-m="${row.id}"><b>${row.name}</b><span>${row.blurb}</span></button>`
  ).join("");
  const lanes = [["Home", g.home, 0], ["Borrow", m.bars, 4], ["Return", retOf(), 8]];
  document.getElementById("bars").innerHTML = lanes.map(([name, bars, offset]) =>
    `<div class="lane"><div class="lane-name">${name}</div><div class="bars">${bars.map((c, i) => {
      const index = offset + i;
      return `<button class="bar${c.color ? " color" : ""}${state.active === index ? " hot" : ""}" data-bar="${index}"><div class="n">${index + 1}</div><div class="c">${c.symbol}</div></button>`;
    }).join("")}</div></div>`
  ).join("") + `<p class="quiet">Home ends on the turnaround. Return ends on the tonic. Brass bars are the borrowed color. Keys: A home, B full twelve, 8 borrow plus return, space stops.</p>`;
  document.getElementById("punch").textContent = punch();
  document.querySelectorAll("[data-g]").forEach((el) => el.onclick = () => {
    stop();
    state.groove = grooves.find((row) => row.id === el.dataset.g);
    state.move = state.groove.moves.find((row) => row.id === state.move.id) || state.groove.moves[0];
    paint();
  });
  document.querySelectorAll("[data-m]").forEach((el) => el.onclick = () => {
    stop();
    state.move = state.groove.moves.find((row) => row.id === el.dataset.m);
    paint();
  });
  document.querySelectorAll("[data-bar]").forEach((el) => el.onclick = () => play("bar", Number(el.dataset.bar)));
}
document.getElementById("playA").onclick = () => play("home");
document.getElementById("playB").onclick = () => play("full");
document.getElementById("play8").onclick = () => play("move");
document.getElementById("stop").onclick = stop;
document.getElementById("copy").onclick = () => navigator.clipboard.writeText(punch()).then(() => {
  document.getElementById("status").textContent = "Punch list copied.";
});
document.getElementById("midi").onclick = () => {
  const bytes = midiBytes();
  const url = URL.createObjectURL(new Blob([bytes], { type: "audio/midi" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `BorrowFour-${state.groove.id}-${currentMove().id}.mid`;
  a.click();
  URL.revokeObjectURL(url);
};
window.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") play("home");
  if (event.key === "b" || event.key === "B") play("full");
  if (event.key === "8") play("move");
  if (event.key === " ") { event.preventDefault(); stop(); }
});
paint();
