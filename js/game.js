// Dit zijn mijn voorwerpen
var inventory = {
	knife: 		false,
	key: 		false,
	shoes: 		false,
	card: 		false,
	bag: 		false,
	carkeys: 	false,
	housekeys: 	false,
	garagekeys: false
};

function pickup(item) {
	inventory[item] = true;

		var element = document.getElementById(item);
		element.parentNode.removeChild(element);
		console.log(inventory);
}

function createItem(item, image)
{
	var items = document.getElementById('items');
    var btn = document.createElement("button");
    btn.innerHTML = "Pak " + item;
    btn.setAttribute("id", item);
    btn.setAttribute("onClick", "javascript:pickup('"+ item +"')");
    btn.setAttribute("style", "background: url('img/"+ image +"')");
    items.appendChild(btn);
}



/* Dit is level 1. 
 - Opties 1   : "value", Vanaf hier kun je alleen naar de Gang
 - voorwerpen :En je moet de knife hebben om je los te snijden
 */
function Level1() {
	console.log("inventory");

	// Verander titel 
    var titel = document.getElementById('level_title');
    titel.innerHTML = 'Kelder';

	//Verander tekst op button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang';

	// knife oppakken
	if(inventory.knife == true){
		console.log("Je hebt je los gesneden klik om door te gaan naar de volgende locatie.");
		opt0.setAttribute("onClick", "javascript:Level2()");
	}else{
		createItem("knife", "knife.jpg");
	}


	//knoppen die niet gebruikt worden
	var opt1 = document.getElementById('option1');
	opt1.style.display ='none';

	var opt2 = document.getElementById('option2');
	opt2.style.display ='none';

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';
	
}

/*Dit is level 2: 
- 3 opties		:Woonkamer, Keuken en Gang verdieping 2 
- voor werpen	: hier moet je shoes hebben 
*/
function Level2() {
	console.log(inventory);


	// Verander titel
	var titel = document.getElementById('level_title');
	titel.innerHTML= 'Gang';

	//Verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Kelder';
	opt0.setAttribute("onClick", "javascript:Level1();");
	
	

	//Verander tekst bij 2de button en javascript
	var opt1 = document.getElementById('option1');
	opt1.style.display = 'block';
	opt1.innerHTML = 'Woonkamer';
	opt1.setAttribute("onClick", "javascript:Level3();");	

	//Verander tekst bij 3de button en javascript
	var opt2 = document.getElementById('option2');
	opt2.style.display = 'block';
	opt2.innerHTML = 'Keuken';
	opt2.setAttribute("onClick", "javascript:Level4();");	

	//Verander tekst bij 3de button en javascript
	var opt3 = document.getElementById('option3');
	opt3.style.display= 'block';
	opt3.innerHTML = 'Gang 2de verdiepeing';
	opt3.setAttribute("onClick", "javascript:Level5();");

	//niet bruikbare knoppen
	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';
	

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';


}
/* 	dit is level 3:
	Opties        : keuken, gang.
	voorwerpen    : hier moet je keys hebben om teogagn te krijgen van de slaapkamers 
 */  
function Level3() {
	console.log(inventory);

	// Verander titel
	var titel = document.getElementById('level_title');
	titel.innerHTML= 'Woonkamer';

	//Verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Keuken';
	opt0.setAttribute("onClick", "javascript:Level4();");

	//Verander tekst bij 2de button en javascript
	var opt1 = document.getElementById('option1');
	opt1.style.display='block';
	opt1.innerHTML = 'Gang';
	opt1.setAttribute("onClick", "javascript:Level2();");	

	//Verander tekst bij 3de button en javascript
	var opt2 = document.getElementById('option2');
	opt2.style.display='none';
	
	//niet bruikbare knoppen
	var opt3 = document.getElementById('option3');
	opt3.style.display='none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';

	
	
}
/*	dit is level 4:
	opties        :gang , woonkamer
	voorwerpen    : geen voorwerpen nodig 
*/
function Level4() {
	console.log(inventory);

	// Verander titel
	var titel = document.getElementById('level_title');
	titel.innerHTML = 'Keuken';

	//Verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang';
	opt0.setAttribute("onClick", "javascript:Level2();");

	//Verander tekst bij 2de button en javascript
	var opt1 = document.getElementById('option1');
	opt1.style.display='block';
	opt1.innerHTML = 'Woonkamer';
	opt1.setAttribute("onClick", "javascript:Level3();");	

	//Verander tekst bij 3de button en javascript
	var opt2 = document.getElementById('option2');
	opt2.style.display='none';
		
	//niet bruikbare knoppen 
	var opt3 = document.getElementById('option3');
	opt3.style.display='none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';

		
}
/*	dit is level 5:
	opties        :gang, slaapkamer 1,2 en 3, kantoor, opslagruimte
	voorwerpen    : geen voorwerpen
 */
function Level5() {
	console.log(inventory);

	//verander titel
	var titel = document.getElementById('level_title');	
	titel.innerHTML = 'Gang 2de verdieping';

	//verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang';
	opt0.setAttribute("onClick", "javascript:Level2()");

	//verander tekst bij 2e button en javascript
	var opt1 = document.getElementById('option1');
	opt1.style.display='block';
	opt1.innerHTML = 'Slaapkamer 1';
	opt1.setAttribute("onClick", "javascript:Level6()");

	// verander tekst bij 3e button en javascript
	var opt2 = document.getElementById('option2');
	opt2.style.display='block';
	opt2.innerHTML = 'Slaapkamer 2';
	opt2.setAttribute("onClick", "javascript:Level7()");

	//verander tekst bij 3e button en javascript
	var opt3 = document.getElementById('option3');
	opt3.style.display='block';
	opt3.innerHTML = 'Slaapkamer 3';
	opt3.setAttribute("onClick", "javascript:Level8()");

	//verander tekst bij 4e button en javascript
	var opt4 = document.getElementById('option4');
	opt4.style.display = 'block';
	opt4.innerHTML = 'Kantoor';
	opt4.setAttribute("onClick", "javascript:Level9()");

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'block';
	opt5.innerHTML = 'Opslagruimte';
	opt5.setAttribute("onClick", "javascript:Level10()");

}
/*	dit is level 5:
	Opties        : gang 2de verdieping
	voorwerpen	  : geen voorwerpen 
*/
function Level6() {
	console.log(inventory);

	//verander naam van de titel
	var titel = document.getElementById('level_title');
	titel.innerHTML = 'Slaapkamer 1';

	//verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang 2de verdieping';
	opt0.setAttribute("onClick", "javascript:Level5()");

	//niet bruikbare knoppen
	var opt1 = document.getElementById('option1');
	opt1.style.display = 'none';

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none';

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';
}
/*	dit is level 7:
	Opties        : Gang 2de verdieping
	voorwerpen	  : hier moet je een card hebben zodat je toegang krijgt van het kantoor en de oplsagruimte.
*/
function Level7() {
	console.log(inventory);

	//verander naam van de titel
	var titel = document.getElementById('level_title');
	titel.innerHTML = 'Slaapkamer 2';

	//verander tekst 1st button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang 2de verdieping';
	opt0.setAttribute("onClick", "javascript:Level5()");

	//niet bruikbare knoppen
	var opt1 = document.getElementById('option1');
	opt1.style.display = 'none';

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none';

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';


}
/*	dit is level 8	:
	Opties          : Gang 2de verdieping
	voorwerpen		: geen voorwerpen
 */
function Level8() {
	console.log(inventory);

//verander de naam van de titel
var titel = document.getElementById('level_title');
titel.innerHTML = 'Slaapkamer 3';

//verander tekst bij 1ste button en javascript
var opt0 = document.getElementById('option0');
opt0.innerHTML = 'Gang 2de verdieping';
opt0.setAttribute("onClick", "javascript:Level5()");

//niet bruikbare knoppen
var opt1 = document.getElementById('option1');
opt1.style.display = 'none';

var opt2 = document.getElementById('option2');
opt2.style.display = 'none';

var opt3 = document.getElementById('option3');
opt3.style.display = 'none';

var opt4 = document.getElementById('option4');
opt4.style.display = 'none';

var opt5 = document.getElementById('option5');
opt5.style.display = 'none';

}
/*	dit is level 9	:
	Opties"         : Gang 2de verdieping
	voorwerpen		: hier heb je de sleutels nodig van de garage zodat je toegang krijgt van de garage.
 */ 
function Level9() {
	console.log(inventory);

	//titel naam veranderen
	var titel = document.getElementById('level_title');
	titel.innerHTML = 'Kantoor';

	//verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang 2de verdieping';
	opt0.setAttribute("onClick", "javascript:Level5()");

	//niet bruikbare knoppen
	var opt1 = document.getElementById('option1');
	opt1.style.display = 'none';

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none';

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';


}
/*	dit is level 10	:
	opties          : Gang 2de verdieping
	voorwerpen      : hier moet je je carkeys, housekeys en bag hebben zodat je al je spullen hebt voor je weg gaat
 */
function Level10() {
	console.log(inventory);

	//titel naam veranderen
	var titel = document.getElementById('level_title');
	titel.innerHTML = 'Opslagruimte';

	//verander tekst bij 1ste button en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang 2de verdieping';
	opt0.setAttribute("onClick", "javascript:Level5()");

	//niet bruikbare knoppen
	var opt1 = document.getElementById('option1');
	opt1.style.display = 'none';

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none';

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';
	
}
/*	dit is level 11	:
	opties          : Gang
	voorwerpen		: geen voorwerpen
 */
function Level11() {
	console.log(inventory);

	//verander tekst van de titel
	var titel = document.getElementById('level_title');
	titel.innerHTML = 'Garage';

	//verander tekst bij 1ste knop en javascript
	var opt0 = document.getElementById('option0');
	opt0.innerHTML = 'Gang';
	opt0.setAttribute("onClick", "javascript:Level2()");

	//niet bruikbare knoppen
	var opt1 = document.getElementById('option1');
	opt1.style.display = 'none';

	var opt2 = document.getElementById('option2');
	opt2.style.display = 'none';

	var opt3 = document.getElementById('option3');
	opt3.style.display = 'none';

	var opt4 = document.getElementById('option4');
	opt4.style.display = 'none';

	var opt5 = document.getElementById('option5');
	opt5.style.display = 'none';

}





