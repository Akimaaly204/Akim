let state = {
  products: [],
  projects: [],
  leads: []
};

async function loadData() {
  state.products = await fetch('../data/products.json').then(r=>r.json());
  state.projects = await fetch('../data/projects.json').then(r=>r.json());
  state.leads = await fetch('../data/leads.json').then(r=>r.json());

  document.getElementById('productsCount').innerText = state.products.length;
  document.getElementById('objectsCount').innerText = state.projects.length;
  document.getElementById('leadsCount').innerText = state.leads.length;
}

function login() {
  document.getElementById('loginScreen').classList.remove('active');
  document.getElementById('appScreen').classList.add('active');

  notifyTelegram('🔐 Вход в Akim Control Center');
  loadData();
}

function openTab(id) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function increasePrices(k) {
  state.products.forEach(p => p.price *= k);
  saveToGitHub('products.json', state.products);
}

function notifyTelegram(text) {
  console.log('Telegram:', text);
  // сюда Bot API
}

function saveToGitHub(file, data) {
  console.log('Commit:', file, data);
  // GitHub API commit
}
