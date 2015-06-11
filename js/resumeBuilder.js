$('#main').append(internationalizeButton);

  function inName(name){
  	name = name.trim().split(" ");
  	name[1] = name[1].toUpperCase();
  	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  	return name[0] + " " + name[1]; 
  }

  

  var bio = {
    "name": "Kan Guo",
    "role": "Software Engineer",
    "welcomeMessage": "Skilled Software engineer with a solid knowledge in object-oriented programming, "
                        +"algorithm, data structure and distributed computing and industry experience in web "
                        +"application development, along with exceptional analytical, design and problem-solving"
                        +" capabilities. Seeking a role that capitalizes on my existing capabilities and allows "
                         +"me to develop new skills and potential.",
    "contacts": {
        "mobile": "(352)-665-0814",
        "email": "gkan89814@gmail.com",
        "github": "cangoal",
        "twitter": "@iCangoal",
        "location": "Ocala, FL"
    },
    "skills": [
        "Java",
        "C#",
        "JavaScript",
        "Python",
        "C/C++",
        "Matlab",
        "Oracle",
        "SQL Server",
        "Linux",
        "OS X",
        "CSS",
        "HTML",
        "XML",
        "jQuery",
        "AJAX",
        "BootStrap",
        "LINQ",
        "Entity Framework",
        ".NET MVC",
        "WCF",
        "Web API",
        "Windows Workflow",
        "IIS Server",
        "Eclipse",
        "Visual Studio",
        "Fiddler",
        "Wireshark",
        "TIBCO",
        "OnBase",
        "InputAccel",
        "TFS",
        "TeamPulse"
    ],
    "bioPic": "images/fry.jpg"
}

bio.display = function(){
	// display name and role
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	

	// display contact info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	//var formattedBlog = HTMLblog.replace("%data%", bio.contacts.mobile);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedLocation);

	// display bio pic and welcome message
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$('#header').append(formattedBioPic);
	$('#header').append(formattedMessage);



	// display skills
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();



var education = {
    "schools": [
        {
            "name": "University of Florida",
            "location": "Gainesville, FL",
            "degree": "Masters of Science",
            "majors": [
                "Computer Engineering"
            ],
            "dates": "August 2011 to May 2013",
            "url": "www.ufl.edu"
        },
        {
            "name": "University of Science and Technology",
            "location": "Beijing, China",
            "degree": "Bachelor of Engineering",
            "majors": [
                "Automation"
            ],
            "dates": "September 2007 to June 2011",
            "url": "www.ustb.edu.cn"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com"
        }
    ]
}

education.display = function(){
	// display school info
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$('.education-entry:last').append(formattedSchoolName);
		$('.education-entry:last').append(formattedSchoolDegree);
		$('.education-entry:last').append(formattedSchoolDates);
		$('.education-entry:last').append(formattedSchoolLocation);
		$('.education-entry:last').append(formattedSchoolMajor);
	}

	// display course info
	if(education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;

			$(".education-entry:last").append(formattedOnlineTitleAndSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

education.display();

var work = {
    "jobs": [
        {
            "employer": "R+L Carriers",
            "title": ".NET Developer",
            "location": "Ocala",
            "dates": "July 2013 - Present",
            "description": "About 2 years of experience in web application development from back-end to front-end; working on enterprise web applications in every phase of Software Development Life Cycle, from business requirement gathering to project delivery; excellent design and integration problem solving skills; adaptability to work in a team and independently."
        },
        {
            "employer": "Beijing Benz Automative Corporation",
            "title": "Project Management Intern",
            "location": "Beijing, China",
            "dates": "March 2011 - June 2011",
            "description": "Assisted Senior Project Manager to track and manage auto-manufacture projects; Coordinated with other related departments to ensure on-time and smooth progress of projects."
        }
    ]
}

work.display = function(){
	// display job info
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmpoyerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmpoyerTitle);	

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

var projects = {
    "projects": [
        {
            "title": "Driver Qualifications",
            "dates": "May 2014",
            "description": "A tool used to manage drivers",
            "images": []
        },
        {
            "title": "AREP",
            "dates": "August 2013",
            "description": "A tool to solve exception payments",
            "images": []
        }
    ]
}


projects.dispay = function(){
	for(project in projects.projects){
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectDates.replace("%data%", projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
}

projects.dispay();

$("#mapDiv").append(googleMap);

