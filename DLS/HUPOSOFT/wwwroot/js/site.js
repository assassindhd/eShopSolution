// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function js_selectOnchange(value, txtName) {
	//console.log('value', value);
	//console.log('Destination', txtName);
	var result = '';
	for (var i = 0; i < value.selectedOptions.length; i++) {
		result += value.selectedOptions[i].value + '#';
	};
	console.log('result', result);
	var txt = document.getElementById(txtName);
	//let txt = $('#' + txtName);
	txt.value = result;
};


function js_radio_handleClick(myRadio, TextBoxResult) {
	//alert('TextBox Result: ' + TextBoxResult);
	var txt = document.getElementById(TextBoxResult);
	//let txt = $('#' + txtName);
	txt.value = myRadio.value;
};