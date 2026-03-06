window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.navbar');
  if(nav) nav.classList.toggle('scrolled',window.scrollY>30);
});
function toggleMenu(){
  const m=document.getElementById('mobileMenu');
  if(m) m.classList.toggle('open');
}
function handleSubmit(e){
  e.preventDefault();
  const btn=e.target.querySelector('.submit-btn');
  btn.textContent='Sending...';
  btn.disabled=true;
  setTimeout(()=>{
    e.target.reset();
    document.getElementById('successMsg').style.display='block';
    btn.textContent='Send Message';
    btn.disabled=false;
  },1000);
}
