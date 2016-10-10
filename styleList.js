window.addEventListener("load", init);

function init() {
	fillUserStylesAndPreferences();
	bindStyleList();
}

function bindStyleList() {
	document.querySelector('#refresh-headings').addEventListener('click', refreshHeadings);
	document.querySelectorAll('.apply-style').forEach(el => el.addEventListener('click', applyStyle));
	document.querySelectorAll('.edit-style').forEach(el => el.addEventListener('click', editStyle));
	document.querySelectorAll('.delete-style').forEach(el => el.addEventListener('click', deleteStyle));
	document.querySelector('#new-custom-style').addEventListener('click', newCustomStyle);
	document.querySelector('#heading-number').addEventListener('change', changeHeadingNumberFormat);
	document.querySelector('#make-default').addEventListener('click', makeDefault);
	document.querySelector('#restore-default').addEventListener('click', restoreDefault);
}

function fillUserStyles() {
	
}

function refreshHeadings() {
	showProgress();
	setTimeout(function() {
		acknowledge("Headings' styles refreshed");
		hideProgress();
	},2000)
}

function applyStyle() {
	showProgress();
	setTimeout(function() {
		acknowledge("Style applied");
		hideProgress();
	},2000)
}

function editStyle(e) {
	showProgress();
	var styleName = e.target.parentElement.previousSibling.previousSibling.textContent;
	var isCustom = e.target.parentElement.parentElement.dataset.custom;
	styleListFadeOut().then(function() {
	return document.querySelector("#parent-container").innerHTML="<div id='editor-container'>Hello World!</div>";})
	.then(function(){return document.querySelector("#editor-container").style.opacity = 1})
	.then(function() {hideProgress()});
}

function styleListFadeOut() {
	return new Promise(function(resolve,reject) {
		var container = document.querySelector("#styles");
		var bottomBar = document.querySelector("#bottom");
		container.style.opacity = 0;
		bottomBar.style.height = 0;
		
		container.addEventListener('transitionend',function(){resolve()});
	})
}

function deleteStyle(e) {
	showProgress();
	var styleName = e.target.parentElement.previousSibling.previousSibling.textContent;
	var styleItem = e.target.parentElement.parentElement;
	deleteStyleAnimation(styleItem).then(hideProgress());
	acknowledge(styleName + " deleted");
}

function deleteStyleAnimation(styleItem) {
	return new Promise(function(resolve,reject) {
		styleItem.classList.add('deleting');
		styleItem.style.position = 'relative';
		styleItem.style.left = '105%';
		styleItem.style["max-height"] = 0;
		styleItem.style.margin = 0;
		setTimeout(function() {styleItem.parentElement.removeChild(styleItem)},300);
		resolve();
	});
}

function newCustomStyle() {
	acknowledge("Redirect to new style screen")
}

function changeHeadingNumberFormat() {
	acknowledge("Heading number changed");
}

function makeDefault() {
	acknowledge("This subset is now your default");
}

function restoreDefault() {
	acknowledge("Default styles restored");
}

function fillUserStylesAndPreferences() {
	var preferences = {
		headingNumber: "none",
		customStyles: {
			Custom: {},
			"Citação 3":{},
		}
	};
	
	updateHeadingNumber(preferences.headingNumber);
	fillCustomStyles(preferences.customStyles);
}

function updateHeadingNumber(headingNumber) {
	document.querySelector("#heading-number [value=" + headingNumber + "]").selected = true;
}

function fillCustomStyles(customStyles) {
	var names = Object.keys(customStyles).sort();
	var customStylesHTML = '';
	names.forEach((styleName) => {
		var customStyleElement  = '\
			<div class="style-item" data-custom="true"> \
				<span>' + styleName + '</span> \
				<div class="style-actions"> \
					<i class="material-icons apply-style">format_paint</i>\
					<i class="material-icons edit-style">edit</i>\
					<i class="material-icons delete-style">delete</i>\
				</div>\
			</div>';
		customStylesHTML += customStyleElement; 
	})
	hideCustomSpinner();
	document.querySelector("#custom-container .style-items").innerHTML = customStylesHTML;
}

function hideCustomSpinner() {
	var spinner = document.querySelector('#custom-spinner-container');
	spinner.classList.add("hidden");
}

function acknowledge(message) {
	var snackbarMessage = document.querySelector('#snackbar-message');
	snackbarMessage.textContent = message;
	var snackbar = document.querySelector('#snackbar');
	snackbar.classList.remove("snackbar-hidden");
	setTimeout(function() {
		snackbarMessage.textContent = "";
		snackbar.classList.add("snackbar-hidden");
	}, 2000)
}

function showProgress() {
	var loader = document.querySelector('#loader-container');
	loader.classList.remove("hidden");
}

function hideProgress() {
	var loader = document.querySelector('#loader-container');
	loader.classList.add("hidden");
}








function loadEditor() {
	
}





