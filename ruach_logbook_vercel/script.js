// Registration script
import { database } from './firebase.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const form = document.getElementById('reg-form');
const status = document.getElementById('status');
const clearBtn = document.getElementById('clear-btn');

function isoNow(){ return new Date().toISOString(); }

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const category = document.getElementById('category').value;
  const feedback = document.getElementById('feedback').value.trim();
  const date = new Date().toISOString().slice(0,10);

  if(!name){ status.textContent = 'Please enter a name.'; return; }
  document.getElementById('submit-btn').disabled = true;
  status.textContent = 'Saving...';

  const entry = { name, contact, category, feedback, date, time: isoNow() };
  try{
    await push(ref(database, 'attendance'), entry);
    status.textContent = '✅ Registered — redirecting...';
    form.reset();
    setTimeout(()=> window.location.href = 'thankyou.html', 800);
  }catch(err){
    console.error(err);
    status.textContent = 'Failed to save. See console.';
  }finally{
    document.getElementById('submit-btn').disabled = false;
  }
});

clearBtn.addEventListener('click', ()=> form.reset());
