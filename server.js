const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const STOCK_FILE = path.join(DATA_DIR, 'stock.json');
const HIST_FILE  = path.join(DATA_DIR, 'history.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const INIT = [
  {id:1,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"2PzS210",qty:12},
  {id:2,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"2PzS250",qty:12},
  {id:3,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"5PzS400",qty:0},
  {id:4,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"5PzS625",qty:100},
  {id:5,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"4PzS500",qty:32},
  {id:6,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"5PzS575",qty:48},
  {id:7,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"3PzS240",qty:24},
  {id:8,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"3PzS375",qty:12},
  {id:9,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"6PzS480",qty:24},
  {id:10,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"5PzS700",qty:48},
  {id:11,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"6PzS750",qty:24},
  {id:12,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"5PzS775",qty:24},
  {id:13,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"7PzS630",qty:48},
  {id:14,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"8PzS640",qty:24},
  {id:15,brand:"IN GC YUASA",group:"IN GC YUASA PzS",model:"4PzS620",qty:40},
  {id:16,brand:"IN GC YUASA",group:"IN GC YUASA PzB",model:"7PzB385",qty:20},
  {id:17,brand:"IN GC YUASA",group:"IN GC YUASA PzB",model:"7PzB525",qty:0},
  {id:18,brand:"IN GC YUASA",group:"IN GC YUASA PzB",model:"5PzB500",qty:73},
  {id:19,brand:"IN GC YUASA",group:"IN GC YUASA PzB",model:"6PzB450",qty:24},
  {id:20,brand:"AOKLY",group:"AOKLY PzS",model:"7PzS560",qty:24},
  {id:21,brand:"AOKLY",group:"AOKLY PzS",model:"4PzS560",qty:16},
  {id:22,brand:"AOKLY",group:"AOKLY PzS",model:"4PzS500",qty:0},
  {id:23,brand:"AOKLY",group:"AOKLY PzB",model:"5PzB500",qty:24},
  {id:24,brand:"AOKLY",group:"AOKLY PzB",model:"10PzB550",qty:24},
  {id:25,brand:"AOKLY",group:"AOKLY PzB",model:"5PzB450",qty:48},
  {id:26,brand:"AOKLY",group:"AOKLY PzB",model:"10PzB650",qty:0},
  {id:27,brand:"LEOCH AGM",group:"LEOCH AGM",model:"6v265Amp",qty:99},
  {id:28,brand:"LEOCH AGM",group:"LEOCH AGM",model:"8v165Amp",qty:33},
  {id:29,brand:"LEOCH AGM",group:"LEOCH AGM",model:"12v100Amp",qty:26},
  {id:30,brand:"LEOCH AGM",group:"LEOCH AGM",model:"12v120Amp",qty:30},
  {id:31,brand:"LEOCH AGM",group:"LEOCH AGM",model:"12v76Amp",qty:20},
  {id:32,brand:"LEOCH AGM",group:"LEOCH AGM",model:"12v55Amp",qty:19},
  {id:33,brand:"LEOCH AGM",group:"LEOCH AGM",model:"12v63Amp",qty:40},
  {id:34,brand:"LEOCH AGM",group:"LEOCH AGM",model:"8v188Amp",qty:120},
  {id:35,brand:"LEOCH AGM",group:"LEOCH AGM",model:"DT6v435Amp",qty:8},
  {id:36,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"24v200Amp",qty:1},
  {id:37,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"24v280Amp",qty:1},
  {id:38,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"48v360Amp",qty:1},
  {id:39,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"48v400Amp",qty:0},
  {id:40,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"48v460Amp",qty:1},
  {id:41,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"48v500Amp",qty:3},
  {id:42,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"48v560Amp",qty:0},
  {id:43,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"80v205Amp",qty:1},
  {id:44,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"80v280Amp",qty:1},
  {id:45,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"80v420Amp",qty:2},
  {id:46,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"80v460Amp",qty:1},
  {id:47,brand:"LEOCH LI-ION",group:"LEOCH Li-Ion",model:"MKS48v150Amp",qty:3},
  {id:48,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"2000A 24v50Amp",qty:1},
  {id:49,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"25.6v80Amp",qty:1},
  {id:50,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"48v100Amp",qty:6},
  {id:51,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"48v140Amp",qty:5},
  {id:52,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"80v50Amp",qty:0},
  {id:53,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"80v80Amp",qty:1},
  {id:54,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"80v120Amp",qty:3},
  {id:55,brand:"zaryadka",group:"LEOCH Li-Ion Zaryadka",model:"3000A 48v50Amp",qty:3},
  {id:56,brand:"zaryadka",group:"Kislotali Zaryadka",model:"24v50Amp (1)",qty:2},
  {id:57,brand:"zaryadka",group:"Kislotali Zaryadka",model:"24v50Amp (2)",qty:1},
  {id:58,brand:"zaryadka",group:"Kislotali Zaryadka",model:"24v60Amp",qty:1},
  {id:59,brand:"zaryadka",group:"Kislotali Zaryadka",model:"48v60Amp",qty:5},
  {id:60,brand:"zaryadka",group:"Kislotali Zaryadka",model:"48v80Amp",qty:4},
  {id:61,brand:"zaryadka",group:"Kislotali Zaryadka",model:"48v100Amp",qty:2},
  {id:62,brand:"zaryadka",group:"Kislotali Zaryadka",model:"80v100Amp",qty:1},
  {id:63,brand:"zaryadka",group:"Kislotali Zaryadka",model:"80v80Amp",qty:1},
  {id:64,brand:"zaryadka",group:"Kislotali Zaryadka",model:"2000A 48v30Amp",qty:20},
];

function loadStock() {
  if (fs.existsSync(STOCK_FILE)) {
    try {
      const saved = JSON.parse(fs.readFileSync(STOCK_FILE, 'utf8'));
      const merged = INIT.map(p => { const s = saved.find(x => x.id === p.id); return s ? {...p, qty: s.qty} : {...p}; });
      saved.forEach(s => { if (!INIT.find(x => x.id === s.id)) merged.push({...s}); });
      return merged;
    } catch(e) {}
  }
  return INIT.map(p => ({...p}));
}
function saveStock(stock) { fs.writeFileSync(STOCK_FILE, JSON.stringify(stock)); }
function loadHist() { if (fs.existsSync(HIST_FILE)) { try { return JSON.parse(fs.readFileSync(HIST_FILE, 'utf8')); } catch(e) {} } return []; }
function saveHist(h) { fs.writeFileSync(HIST_FILE, JSON.stringify(h.slice(0, 300))); }
function ts() { return new Date().toLocaleString('uz-UZ', {timeZone:'Asia/Tashkent',hour12:false,month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}); }

app.get('/api/stock', (req, res) => res.json(loadStock()));

app.post('/api/stock/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { delta, user } = req.body;
  const stock = loadStock();
  const item = stock.find(p => p.id === id);
  if (!item) return res.status(404).json({ error: 'Topilmadi' });
  const oldQty = item.qty;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty !== oldQty) {
    saveStock(stock);
    const hist = loadHist();
    hist.unshift({ id, model: item.model, group: item.group, delta, oldQty, newQty: item.qty, user: user || "Noma'lum", time: ts() });
    saveHist(hist);
  }
  res.json(item);
});

app.post('/api/stock', (req, res) => {
  const { brand, group, model, qty, user } = req.body;
  if (!brand || !group || !model) return res.status(400).json({ error: 'brand, group, model majburiy' });
  const stock = loadStock();
  const newId = Math.max(0, ...stock.map(p => p.id)) + 1;
  const newProd = { id: newId, brand, group, model, qty: qty || 0 };
  stock.push(newProd);
  saveStock(stock);
  const hist = loadHist();
  hist.unshift({ id: newId, model, group, delta: qty||0, oldQty: 0, newQty: qty||0, user: user||"Noma'lum", time: ts()+' [YANGI]' });
  saveHist(hist);
  res.json(newProd);
});

app.delete('/api/stock/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = (req.body && req.body.user) || "Noma'lum";
  let stock = loadStock();
  const item = stock.find(p => p.id === id);
  if (!item) return res.status(404).json({ error: 'Topilmadi' });
  stock = stock.filter(p => p.id !== id);
  saveStock(stock);
  const hist = loadHist();
  hist.unshift({ id, model: item.model, group: item.group, delta: -item.qty, oldQty: item.qty, newQty: 0, user, time: ts()+" [O'CHIRILDI]" });
  saveHist(hist);
  res.json({ ok: true });
});

app.get('/api/history', (req, res) => res.json(loadHist().slice(0, 100)));

app.listen(PORT, () => console.log('Server: http://localhost:' + PORT));
