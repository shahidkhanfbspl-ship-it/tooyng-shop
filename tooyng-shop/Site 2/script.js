const bagButtons=document.querySelectorAll('.product-img button');let count=0;bagButtons.forEach(b=>b.addEventListener('click',()=>{b.textContent=b.textContent==='♡'?'♥':'♡';}));
