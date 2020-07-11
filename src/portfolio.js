
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Vidit Gupta",
  title: "Hi all, I'm Vidit",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Java / Kotlin / Nodejs / React Native and Data Science projects."),
  resumeLink: "https://drive.google.com/file/d/1hpoph1HrxGqL9ldrm5CXjrMJHflYa8f1/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/vidit135g",
  linkedin: "https://www.linkedin.com/in/vidit-gupta-a8833ab8/",
  gmail: "vidit135g@gmail.com",
  twitter: "https://twitter.com/J4iGupta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Full stack Software Developer",
  skills: [
    emoji("⚡ Develop interactive and minimal User interface for web and mobile apps."),
    emoji("⚡ Experience in Data Science and Machine Learning."),
    emoji("⚡ Integration of third party services such as Firebase.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    }, {
      skillName: "Pinterest",
      fontAwesomeClassname: "fab fa-pinterest"
    }, {
      skillName: "Reddit",
      fontAwesomeClassname: "fab fa-reddit"
    }, {
      skillName: "Gaming",
      fontAwesomeClassname: "fab fa-steam"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",  
      company: "The Absolute Company",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "June 2018 – October 2019",
      desc: "Android app development.",
    },
    {
      role: "Designer",   
      company: "The Absolute Company",
      companylogo: require("./assets/images/design.png"),
      date: "June 2018 – May 2019",
    },
    {
      role: "Software Developer Associate",  
      company: "TCS",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2018 – Sep 2018",
       },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "vidit135g", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE CREATED AND HOSTED ON GITHUB.",
  projects: [
    {
      image: require("./assets/images/notes.png"),
      link: "https://github.com/vidit135g/Notes-Central"
    }, {
      image: require("./assets/images/focus.png"),
      link: "https://github.com/vidit135g/Focus"
    },
    {
      image: require("./assets/images/rep.png"),
      link: "https://github.com/vidit135g/Replify-Messenger"
    },
    , {
      image: require("./assets/images/todo.png"),
      link: "https://github.com/vidit135g/ToDo_Central"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Academics excellence award.",
      subtitle: "Stood first in my under graduation.",
      image: require("./assets/images/school.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1dc6GBWARP5F9r4EZCb7EQrOhHbUUqqQF/view?usp=sharing" },
           ]
    },
    {
      title: "IBM Data Science Certification",
      subtitle: "Completed the IBM Data Science Certification course from Coursera.",
      image: require("./assets/images/ibm.png"),
      footerLink: [{ name: "View Certificate", url: "https://coursera.org/share/a13b7833062dba6bae7e3eed57c18ac6" }]
    },

    {
      title: "Google Play.",
      subtitle: "Published multiple android apps.",
      image: require("./assets/images/play.png"),
      footerLink: [
        { name: "Google Play", url: "https://play.google.com/store/apps/developer?id=Vidit+Gupta&hl=en" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@vidit135g/the-magical-paint-3d-2e41cfee8ec1",
      title: "Paint3D Overview",
      description: "Learn some basic yet cool stuff that you can do using Paint 3D."
    },
    {
      url: "https://medium.com/@vidit135g/how-to-create-rounded-bottomsheet-dialog-menu-in-android-c30d6fb5fe00",
      title: "BottomSheetDialog Fragment in Android.",
      description: "Learn how to implement the rounded bottom sheet dialog fragment to make your app look more intuitive."
    }
  ]
};




const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8896289274",
  email_address: "vidit135g@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "J4iGupta"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, contactInfo , twitterDetails};
