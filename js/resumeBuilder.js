
///////////// Personal Information ///////////////////////////
    var P_Information = {
        "name": "abeer abdelhamed",
        "role": "Graphic Designer",

        "contacts": {
            "mobile": "01129457361",
            "email": "abeer.abdelhamed@yahoo.com",
            "github": "@abeer_younes",
            "location" : "Egypt"   
        },

        "welcomeMessage": "I'm abeer abdelhamed, I lives in Egypt, work as graphic design and web development, My favourite hobbits is play sports, photography and drawing",
        "skills": ["HTML5", "CSS3","JQuery", "Bootstrap", "Maya","photoshop","aftereffect","Premiere"],
        "biopic": "images/abeer.jpg"
    };

    ////////// appear information in html classes /////////////////////
        P_Information.display = function () {
            var formattedName = HTMLheaderName.replace("%data%", P_Information.name);
            var formattedRole = HTMLheaderRole.replace("%data%", P_Information.role);
            var formattedImage = HTMLbioPic.replace("%data%", P_Information.biopic);
            var formattedMessage = HTMLwelcomeMsg.replace("%data%", P_Information.welcomeMessage);
            $("#header").prepend(formattedImage);
            $("#header").prepend(formattedMessage);
            $("#header").prepend(formattedRole);
            $("#header").prepend(formattedName);

            if(P_Information.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var skill = 0; skill < P_Information.skills.length; skill++) {
            var formattedSkills = HTMLskills.replace("%data%", P_Information.skills[skill]);
            $("#header").append(formattedSkills);
        }
        }
            var formattedMobile = HTMLmobile.replace("%data%", P_Information.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", P_Information.contacts.email);
            var formattedGithub = HTMLgithub.replace("%data%", P_Information.contacts.github);
            var formattedLocation = HTMLlocation.replace("%data%", P_Information.contacts.location);
            $("#top_contacts").append(formattedMobile,formattedEmail, formattedGithub, formattedLocation);
            $("#footer_contacts").append(formattedMobile,formattedEmail, formattedGithub, formattedLocation);
        };
    //////////////// End of appear /////////////////////////////
/////////////////////// End of P-Information ////////////////////////////

///////// Education I learn on it or online course ////////////////////
    var My_education = {
        "schools": [{
            "name": "Fresh Graduated",
            "location": "Benha University , Egypt",
            "degree": "Good",
            "majors": ["Software engineering"],
            "dates": "2012-2016",
            "url": "http://www.fci.bu.edu.eg/fci/en/"
        }],

        "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2/2017-8/2017",
            "url": "https://www.udacity.com/nanodegree"
        }]
    };

    //////// appear information //////////////
        My_education.display = function() {
            for (var school=0; school< My_education.schools.length ; school++) {
                $("#education").append(HTMLschoolStart);
                var formattedName = HTMLschoolName.replace("%data%", My_education.schools[school].name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", My_education.schools[school].degree);
                var formattedDates = HTMLschoolDates.replace("%data%", My_education.schools[school].dates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", My_education.schools[school].location);
                var formattedMajor = HTMLschoolMajor.replace("%data%", My_education.schools[school].majors);
                $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
            }

            if (My_education.onlineCourses.length !== 0) {
                $("#education").append();
            }
            for (var course =0; course< My_education.onlineCourses.length ; course++) {
                $("#education").append(HTMLschoolStart);
                var formattedTitle = HTMLonlineTitle.replace("%data%", My_education.onlineCourses[course].title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", My_education.onlineCourses[course].school);
                var formattedDate = HTMLonlineDates.replace("%data%", My_education.onlineCourses[course].dates);
                var formattedURL = HTMLonlineURL.replace("%data%", My_education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDate, formattedURL);
            }
        };
   ///////////////// End of appear /////////
/////////// End of Education ////////////////////


/////// Projects I work about it on coledge or online ///////////////
    var My_projects = {
        "projects": [{
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "it is my protfolio page",
            "images": ["images/protfolio.PNG"]
        }, {
            "title": "online_library",
            "dates": "2016",
            "description": "to buy books online",
            "images": ["images/library.PNG"]
        },] 
    };

    ///////////////// appear information //////////////////////
        My_projects.display = function() {
            for (var item=0; item< My_projects.projects.length; item++) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle.replace("%data%", My_projects.projects[item].title);
                var formattedDates = HTMLprojectDates.replace("%data%", My_projects.projects[item].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", My_projects.projects[item].description);
                $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
                for (var image =0; image < My_projects.projects[item].images.length ; image++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", My_projects.projects[item].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        };
   ////////// End of appear ////////////
///////////// End of Projects ////////////


//// work I made it and love work about it /////////////////
   var My_work = {
    "jobs": [{
        "employer": "Graphic Designer",
        "title": " Graphic Designer ",
        "dates": "2017",
        "location": "Egypt",
        "description": "Creative design to explain an idea"
    }]
   };

    ///////////////////// appear information ////////////////
        My_work.display = function() {
            for (var i = 0; i < My_work.jobs.length; i++) {
                $("#work_experience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace("%data%", My_work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", My_work.jobs[i].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace("%data%", My_work.jobs[i].dates);
                $(".work-entry:last").append(formattedDates);

                var formattedLocation = HTMLworkLocation.replace("%data%", My_work.jobs[i].location);
                $(".work-entry:last").append(formattedLocation);

                var formattedDescription = HTMLworkDescription.replace("%data%", My_work.jobs[i].description);
                $(".work-entry:last").append(formattedDescription);
            }
        };
   /////////////// Ena appear ///////////
////////// End of Work ////////////////////


P_Information.display();
My_education.display();
My_projects.display();
My_work.display();


///////// I take this part of code from githup ///////////////
$(document).click(function(loc) { 
	var x = event.pageX;
	var y = event.pageY;
	
	logClicks(x, y);
});

function inName(name) {
	first = name.split(" ")[0];
	last = name.split(" ")[1];
	
	first = first.charAt(0).toUpperCase() + first.slice(1);
	last = last.toUpperCase();
	
	return last + " " + first;
}

function locationizer(work_obj) {
	var locations = [];
	for (var job in work_obj.jobs) {
		locations.push(work_obj.jobs[job].location);
	}
	
	return locations;
}
$("#mapPart").append(googleMap);


