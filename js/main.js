const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () =>{
	selectElement('header').classList.toggle('active');
});

$(document).ready(function(){
   $(".clicked").click(function(){
       $(".search-box").toggle();
       $("input[type='text']").focus();
   });
});