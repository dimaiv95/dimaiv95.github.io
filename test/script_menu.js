 $(document).ready(function(){
	 
     var t = null;
	 
	 $("#menu-menyu-magazina").click(function(e){
		 
		 //e.preventDefault()
		 
		 var link = window.location,
			 href = $(this).children("li").children("a").prop("href"),
			 submenu = $(this).find(".sub-menu");

			 t = link + " " + href;
		 
		 if(link == href){
			 submenu.slideDown(200);
		 }
		
		 //e.preventDefault();
		 /*var submenu = $(this).find(".sub-menu");
		 if(submenu.is(":hidden")){
			submenu.slideDown(200); 
		 }
		 else{
			submenu.slideUp(400);  
		 }
		 console.log(submenu);*/
		/* $(this).find(".sub-menu").toggle(function(){
			 $(this).show();
		 },function(){
			 $(this).hide();
		 });*/
	 });
	 console.log(t);
});
