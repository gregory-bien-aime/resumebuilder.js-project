var name = "Greg Bien-Aime";
var formattedName;
var formattedRole;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var mobile = "404-641-1157";
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/*var bio = {
  "name" : "Gregory Bien-Aime",
  "role": "Front End Web Developer",
  "contacts": {
  "mobile": "404-641-1157",
  "email": "gregory.bienaime@yahoo.com",
  "github": "https://github.com/gregory-bien-aime/NodeExpress.git",
  "location": "Atlanta"
},
"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
"skills": [
"awesomeness", "HTML", "CSS", "scrum", "Javascript"],
],
"biopic": "images/Me.jpg"
}

var education = {
  "schools":  [
  	{
  	  "name": "Devry University",
  	  "city": "Alpharetta, GA",
  	  "degree": "Bachelors",
  	  "majors": ["BIS"],
  	}

  ],
var work = {
  "jobs": [
  	{
	  "employer": "CareerBuilder",
	  "title": "Front End Developer",
      "dates": 
      "description": 
    },
    {
      "employer": "Mckesson Pharmacy Systems",
      "title": "Front End Web Developer",
      "dates":
      "description":
    },
    {
      "employer": "AirWatch by VMWARE",
      "title": "Front End Web Developer",
      "dates":
      "description":
    },
    {
      "employer": "Manheim Auctions - COX",
      "title": "Oracle Financials Analyst",
      "dates": 
      "description":
    },
    {
      "employer": "State Road & Toll Authority - SOG",
      "employer": "Ryder Systems",
      "employer": "Manhattan Associates",
      "employer": "Georgia Tech",
      "dates":
    }	
    ],
/*






/*
This is empty on purpose! Your code to build the resume will go here.
 */