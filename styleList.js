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
	alert('Headings refreshed!');
}

function applyStyle() {
	alert("Style applied");
}

function editStyle() {
	alert("Redirect to edit screen");
}

function deleteStyle() {
	alert("Style deleted");
}

function newCustomStyle() {
	alert("Redirect to new style screen")
}

function changeHeadingNumberFormat() {
	alert("Heading number changed");
}

function makeDefault() {
	alert("This subset is now your default");
}

function restoreDefault() {
	alert("Default styles restored");
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
					<i class="material-icons clickable apply-style">format_paint</i>\
					<i class="material-icons clickable edit-style">edit</i>\
					<i class="material-icons clickable delete-style">delete</i>\
				</div>\
			</div>';
		customStylesHTML += customStyleElement; 
	})
	document.querySelector("#custom-container .style-items").innerHTML = customStylesHTML;
}







