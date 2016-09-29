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
	acknowledge("Style applied");
}

function editStyle() {
	acknowledge("Redirect to edit screen");
}

function deleteStyle() {
	acknowledge("Style deleted");
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
	let names = Object.keys(customStyles).sort();
	var customStylesHTML = '';
	names.forEach((styleName) => {
		let customStyleElement  = '\
			<div class="style-item"> \
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
	let spinner = document.querySelector('#custom-spinner-container');
	spinner.className += " hidden";
}

function acknowledge(message) {
	var snackbarMessage = document.querySelector('#snackbar-message');
	snackbarMessage.textContent = message;
	var snackbar = document.querySelector('#snackbar');
	snackbar.className = snackbar.className.replace("snackbar-hidden","")
	setTimeout(function() {
		snackbarMessage.textContent = "";
		snackbar.className += " snackbar-hidden";
	}, 2000)
}

function showProgress() {
	var loader = document.querySelector('#loader-container');
	loader.className = loader.className.replace("hidden","")
}

function hideProgress() {
	var loader = document.querySelector('#loader-container');
	loader.className += " hidden";
}





