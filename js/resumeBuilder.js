var nome = "Ilario Vigliocco";
var role = "Web Developper";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName);
$("#header").append(formattedRole);



