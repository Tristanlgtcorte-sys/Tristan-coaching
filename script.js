
// Basic small JS for menu toggle and Formspree example
document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if(menu){
  menu.addEventListener('click', ()=> {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Formspree optional submit via fetch - user needs to set FORM_ENDPOINT in README or dashboard
document.getElementById('submitFormFetch').addEventListener('click', async () => {
  const endpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // replace with your Formspree ID
  const form = document.getElementById('contactForm');
  const data = new FormData(form);
  try{
    const res = await fetch(endpoint, {method:'POST',body:data,headers:{'Accept':'application/json'}});
    if(res.ok) alert('Message envoyé — vérifie ton e-mail. (Formspree)');
    else alert('Erreur envoi — vérifie la configuration Formspree.');
  }catch(e){
    alert('Impossible de contacter Formspree (remplace YOUR_FORM_ID dans script).');
  }
});
