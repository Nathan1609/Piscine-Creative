(function(){var h=document.querySelector('header');function s(){h.classList.toggle('sc',scrollY>40)}addEventListener('scroll',s,{passive:true});s();
if(!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');setTimeout(function(){t.style.transitionDelay='0ms'},1300);io.unobserve(t)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('section:not(.hero) h2,.lead,.card,.steps li,.gal figure,details,.split>*,.infos,#f,.btn[href="#contact"]:not(nav .btn)').forEach(function(el){var sib=Array.prototype.indexOf.call(el.parentNode.children,el);el.classList.add('rv');el.style.transitionDelay=Math.min(sib,5)*90+'ms';io.observe(el)});
})();
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();var d=new FormData(this);
var body='Nom : '+d.get('nom')+'\nTéléphone : '+(d.get('tel')||'-')+'\nE-mail : '+d.get('mail')+'\n\n'+d.get('msg');
location.href='mailto:piscinecreative@gmail.com?subject='+encodeURIComponent('Demande de devis – '+d.get('nom'))+'&body='+encodeURIComponent(body);
});
