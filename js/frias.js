// JavaScript Document

/*For working search box, but no SQL supported for this website yet*/
	function checkFormGN() {
	var searchForm = document.formsearch;
	var hasValue=0;
	
	for(i=0;i<(searchForm.elements.length);i++){
		if((searchForm.elements[i].type == "select-one") && (searchForm.elements[i].options[searchForm.elements[i].selectedIndex].value!="")){
			hasValue=1;
		}else if((searchForm.elements[i].type == "text") && (searchForm.elements[i].value!="")){
			hasValue=1;
		}
	}
	
	if(hasValue!=1){
		alert("Please enter a search query.");
		searchForm.termtextkeywordsearch.focus();
		} else { searchForm.submit(); }
	}
	
	function checkFieldGN(formName, field, defaultStr) {
		if (eval('document.'+formName+'.'+field+'.value=="'+defaultStr+'"')) {
			eval('document.'+formName+'.'+field+'.value=""');
		}
	}
	
/*For slider animation*/
var ul;
var li_items; 
var li_number;
var image_number = 0;
var slider_width = 0;
var image_width;
var current = 0;
function init(){	
	ul = document.getElementById('image_slider');
	li_items = ul.children;
	li_number = li_items.length;
	for (i = 0; i < li_number; i++){
			image_width = li_items[i].childNodes[0].clientWidth;
			slider_width += image_width;
			image_number++;
	}
	
	ul.style.width = parseInt(slider_width) + 'px';
	slider(ul);
}

function slider(){		
		animate({
			delay:25,
			duration: 3000,
			delta:function(p){return Math.max(0, -1 + 2 * p)},
			step:function(delta){
					ul.style.left = '-' + parseInt(current * image_width + delta * image_width) + 'px';
				},
			callback:function(){
				current++;
				if(current < li_number-1){
					slider();
				}
				else{
					var left = (li_number - 1) * image_width;					
					setTimeout(function(){goBack(left)},2000); 				
					setTimeout(slider, 4000);
				}
			}
		});
}
function goBack(left_limits){
	current = 0;	
	setInterval(function(){
		if(left_limits >= 0){
			ul.style.left = '-' + parseInt(left_limits) + 'px';
			left_limits -= image_width / 10;
		}	
	}, 30);
}
function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration
		if(progress > 1){
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1){
			clearInterval(id);
			opts.callback();
		}
	}, opts.dalay || 17);
}
window.onload = init;
