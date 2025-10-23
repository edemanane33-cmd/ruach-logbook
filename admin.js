// Admin script: export + clear (hidden table)
import { database } from './firebase.js';
import { ref, get, remove } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'Ruach2020';

const loginBtn = document.getElementById('login-btn');
const passInput = document.getElementById('admin-pass');
const controls = document.getElementById('controls');

loginBtn.addEventListener('click', async ()=>{
  const p = passInput.value || '';
  if(p === ADMIN_PASSWORD){
    // show controls
    controls.style.display = 'block';
    passInput.value = '';
    loginBtn.disabled = true;
  }else{
    alert('Incorrect password.');
  }
});

document.getElementById('export-btn').addEventListener('click', async ()=>{
  try{
    const snap = await get(ref(database, 'attendance'));
    const data = snap.val() || {};
    const rows = [['Name','Contact','Category','Feedback','Date','Time']];
    Object.values(data).forEach(item => {
      rows.push([item.name||'', item.contact||'', item.category||'', item.feedback||'', item.date||'', item.time||'']);
    });
    const csv = rows.map(r=>r.map(c=>`"${String(c).replaceAll('"','""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance_'+ new Date().toISOString().slice(0,10) +'.csv';
    a.click();
    URL.revokeObjectURL(url);
  }catch(err){
    console.error(err);
    alert('Export failed: '+err);
  }
});

document.getElementById('clear-btn').addEventListener('click', async ()=>{
  if(!confirm('Are you sure you want to permanently delete all records?')) return;
  try{
    await remove(ref(database, 'attendance'));
    alert('All records deleted.');
  }catch(err){
    console.error(err);
    alert('Failed to clear: '+err);
  }
});
