
//Bio
var bio = {
		"name" : "Gregory Bien-Aime",
		"role" : "Front End Web Developer",
		"contacts" : {
			"email" : "gregory.bienaime@yahoo.com",
			"github" : "https://github.com/gregory-bien-aime/",
			"linkedin" : "https://www.linkedin.com/in/gregory-bien-aime-13839213",
			"mobile" : "404-641-1157",
			"location" : "Atlanta, Georgia"
		},
		"bioPic" : "images/Me.jpg",
		"welcome" : "Welcome to my Interactive Resume!",
		"skills" : ["Basic: JavaScript, Express, Node.js, Terminal - Bash, JQuery, Json, SQL, Ruby on Rails, WordPress, DOM, Gulp, Bower, JSlint, Mingle, Slack, Remedy, Software Testing Experienced: HTML, Bootstrap, CSS, Git, GitHub, Brackets, Sublime Text"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//Header Info
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

/*var formattedOnline = HTMLonline.replace("%data%", bio.contacts.online).replace("#", bio.contacts.online);
$("#topContacts").append(formattedOnline);
$("#footerContacts").append(formattedOnline);*/


var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
$("#topContacts").append(formattedLinkedin);
$("#footerContacts").append(formattedLinkedin);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLoc);
$("#footerContacts").append(formattedLoc);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcomeMsg);




//Skills
function displaySkills() {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {		
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};
displaySkills();

var work = {
	"jobs" : [
	{
	  "employer" : "CareerBuilder",
	  "title"    : "Front End Developer",
      "dates"    : "Feb 2016 - Current",
      "location" : "Norcross, GA",
      "description": "Assisted the TN Job board department with developing client websites for Allegis in an Agile Scrum environment. Participated in scrum sprints & estimations. White boarded & built basic JavaScript programs using logic (If statements, conditionals). Developed a portfolio site using HTML, CSS, Bootstrap, Express, JavaScript & JSON. Manipulated the DOM upon user interaction with the use of watchers and event listeners. Used Bootstrap to make applications responsive. Built a TO-DO-LIST application. Built an interactive resume. Built a Yelp type site. Utilized MVC principals to ensure a clean architecture and a lean code base. Built a basic database using MongoDB. Built a basic PHP & MySQL website. Implemented custom scripts using various APIs. Automated business procedures through server-side JavaScript. Learned lean Oz Principles & the Agile Scrum process. Used GIT & GitHub for version control. Compressed and automated the code build using Grunt/Gulp. Used Night Watch to test all applications automatically. Responsible for checking cross browser compatibility and hence worked on different browsers like safari, Internet explorer, Firefox and Google chrome. Used Mingle and Favro.com to manage Agile scrum cards, plan new features and document work"

    },
    {
      "employer" : "Mckesson Pharmacy - Randstad",
      "title"    : "POS Support",
      "dates"    : "July 2015 - December 2015",
      "location" : "Atlanta",
      "description": "Provided technical support to external users using MySQL to sync databases layers with POS hardware"
    },
    {
      "employer" : "AirWatch by VMWARE",
      "title"    : "Database Refresh project - Temporary",
      "dates"    : "May 2013 - May 2014",
      "location" : "Atlanta",
      "description": "Assisted with the preparing Excel data to the database using MS SQL server. Used MySQL to query databases, update various tables and pull data. Performed the Air-Watch to VMware domain changes on all computers. Created new database tables as needed. Assisted with the database refresh using full export for table level and full database defragmentation, resulting improved performance and effective space management. Generated reports from the database using MySQL. Involved in creating and managing users. Involved in assigning roles and privileges to different users"
    },
    {
      "employer" : "Manheim Auctions –TPI Staffing",
      "title"    : "Oracle Financials ERP Helpdesk Analyst",
      "dates"    : "January 2012 - February 2013",
      "location" : "Atlanta",
      "description" : "Provided Oracle Financials go-live support in a Windows 7 environment and performed software testing in an Agile environment" 
    },
    {
      "employer" : "Georgia Department of Transportation - Comforce",
      "title"    : "Helpdesk/ Software Support/Tester",
      "dates"    : "May 2011 - January 2012",
      "location" : "Atlanta",
      "description": "Provided outstanding customer support for the Traffic Management Center & Hero departments in a Windows XP/7 environment. Worked with the software developers to test & support G.DOT’s propriety software"
    },
    {
      "employer" : "Manhattan Associates - Veredus Corp",
      "title"    : "Production Support /Junior Software Tester",
      "dates"    : "June 2010 - March 2011",
      "location" : "Atlanta",
      "description": "Provided technical & production support for C-level executives, VIP guests, senior staff, Executive Assistants, oversea workers and all other employees (1200+)"
    },
    {
      "employer" : "Amdocs (AT&T) - Genesis Networks",
      "title"    : "Desktop Support / Salesforce",
      "dates"    : "August 2008 - March 2009",
      "location" : "Atlanta",
      "description": "Provided high quality customer service along with helpdesk phone support for high level executives, sales reps and guests"
    },
    {
      "employer" : "Georgia Institute of Technology",
      "title"    : "Production Support Specialist ",
      "dates"    : "September 2007 - June 2008",
      "location" : "Atlanta",
      "description": "Provided user training and support for computers in the Mechanical Engineering department (800+ users). This included installing, configuring, importing, troubleshooting, and maintaining Windows, Macintosh, and Linux desktop computer hardware, software, printers, servers, scanners, docking stations,  audio visual equipment, video conferencing equipment, and networking. Added or upgraded and configured printers and related equipment in a corporate environment. Supported Department Chairs, Professors, and Executive Assistants"
    },
	  
   ]
};
 

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);		 
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);		 
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);		
	}
};
displayWork();


//Projects
var projects = {
"projects": [
	{
	  "title": "Node-Express Portfolio",
	  "titleURL": "https://github.com/gregory-bien-aime/NodeExpress",  
	  "images": ["images/nodeexpress.png"],
	  "dates": "2016",
	  "description": "Node-Express project in progress"
	},
	{
	  "title": "Front End Resume Project",
	  "titleUrl": "https://github.com/gregory-bien-aime/resumebuilder.js-project",
	  "images": ["images/resumejs.png"],
	  "dates": "2016",
	  "description": "Interactive Resume" 
	},
	{
	  "title": "ToDoList",
	  "titleUrl": "https://github.com/gregory-bien-aime/toDoList",
	  "images": ["images/todolist.png"],
	  "dates": "2016",
	  "description": "TO DO LIST" 
   }
  ]
};
//New updated code to match the rest

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);		
		var formattedTitle = (HTMLprojectTitle.replace("%data%", projects.projects[project].title)).replace("#",projects.projects[project].titleURL);
		$(".project-entry:last").append(formattedTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		 if (projects.projects[project].images.length>0) {
		 	for (image in projects.projects[project].images) {
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedProjectImage);		
	}
   }
  }
};
displayProjects();
/*projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	    var formattedTitle = (HTMLprojectTitle.replace("%data%", projects.projects[project].title)).replace("#",projects.projects[project].titleURL);
		$(".project-entry:last").append(formattedTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		 if (projects.projects[project].images.length>0) {
		 	for (image in projects.projects[project].images) {
		 var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		 $(".project-entry:last").append(formattedProjectImage);
		 	}
		 }
	}
}
projects.display();*/

//Education
var education = {
		"schools": [
	    {
	    	"name" 		: "Devry University",
	    	"location" 	: "Alpharetta, GA",
	    	"dates" 	: "2003 - 2006",
	    	"major" 	: "Business Information Systems",
	    	"degree" 	: "Bachelors",
	    	"url" 		: "http://www.devry.edu/"
	    },
	  ],
	"onlineCourses" : [
		   {
			"school"   : "Udacity - Front End Web Developer",
			"title"    : "The Web Developer Bootcamp",
			"date"    : "2016",
			"url"	   : "https://www.udemy.com/the-web-developer-bootcamp/learn/v4/content"
		   },	   
		  ]
		};
function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);		 
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);	 
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);		 
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);		 
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);		 
		var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedURL);
	}	
	
	$("#education").append(HTMLonlineClasses);
	for (school in education.onlineCourses) {
		$("#education").append(HTMLschoolStart); 
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedSchoolTitle);	
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
};
displayEducation();

$("#mapDiv").append(googleMap);

//other misc sections

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

function inName() {
    var name1 = bio.name.trim().split(" ");
    name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
    name1[1] = name1[1].toUpperCase();
    return name1[0] + " " + name1[1];
}


