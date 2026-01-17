const ADMIN_PIN = '2001';

function checkAdmin(){
  const ok = sessionStorage.getItem('admin_auth');
  if(!ok){
    const pin = prompt('Введите PIN администратора');
    if(pin === ADMIN_PIN){
      sessionStorage.setItem('admin_auth','1');
    } else {
      alert('Доступ запрещён');
      location.href = '../index.html';
    }
  }
}
