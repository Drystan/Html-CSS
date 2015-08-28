var name = "Ilario Vigliocco";
var role = "Web Developer and Quality Assurance";
var cell = "+(39)331.531.6993";
var address = "Via Francese 10/E Verolengo (TO)";
var contact = "ilariovigliocco@gmail.com";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
	name : "Ilario Vigliocco",
	role : "Web Developper",
	contactInfo : "Email: ilariovigliocco@gmail.com" 
};

var setAddress = HTMLaddress.replace("%data%", address);
$("#footerContacts").append(setAddress);
var setMail = HTMLemail.replace("%data%", contact);
$("#footerContacts").prepend(setMail);
var setCell = HTMLmobile.replace("%data%", cell);
$("#footerContacts").append(setCell);

