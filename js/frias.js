// JavaScript Document
function validateSearch(){
	var kwtext = document.formsearch.termtextkeywordsearch.value;
        document.formsearch.termtextkeywordsearch.value =kwtext.replace(/\'/g,'');
}

jQuery('#searchsubmit').click(function(){
	return validateSearch();
});

if ((!($.browser.mozilla)) && (navigator.appName!="Netscape")) {
	jQuery('#termtextkeywordsearch').keypress(function(e){
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			return validateSearch();
		}
	});
}

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