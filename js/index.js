const inputArea = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const finalTextArea = document.querySelector(".final-text");

var index = elasticlunr(function () {
    this.addField('fullname');
    this.addField('email');
    this.addField('keywords');
    this.addField('slideUrl');
    this.addField('profileUrl');
    this.setRef('objectId');
});

let membersArray = [
    {
        "fullname": "Ricky Ng-Adam",
        "altnames": [
            "伍思力",
            " Ricky",
            " rngadam"
        ],
        "altemails": "rngadam@gmail.com",
        "email": "rngadam@coderbunker.com",
        "github": "rngadam",
        "linkedin": "https://www.linkedin.com/in/rngadam/",
        "wechat": "rngadam",
        "status": "Founder, Partner, Associate, Member, Villager, Speaker",
        "rate": "RMB 700 /hour",
        "availability": "20 to 40 hours a week",
        "portfolio": "http://www.coderbunker.com",
        "keywords": [
            "@coderbunker.com",
            "Coderbunker rngadam",
            "Specialties",
            "Javascript",
            "software development",
            "experience",
            "testing Architecture",
            "PostgreSQL",
            "design",
            "R&D",
            "engineering team recruitment",
            "building",
            "shell",
            "React",
            "Python",
            "C/C++",
            "deployment",
            "REST",
            "Websockets",
            "GraphQL",
            "API servers",
            "Linux",
            "Ansible",
            "MVC",
            "Go"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1992957c98_7_61",
        "objectId": "g1992957c98_7_61",
        "profileUrl": "https://drive.google.com/uc?id=1wN9kEJULLNqrofTcmtJ2BsIrzI3AWjGj"
    },
    {
        "fullname": "Peter Bray",
        "email": "peter@foxandgeese.com",
        "github": "https://github.com/bluepeter",
        "linkedin": "https://www.linkedin.com/in/bluepeter/",
        "wechat": "petebray",
        "status": "Freelancer",
        "notes": "Remote and on-prem consulting, short-term & long-term",
        "rate": "RMB700/hour + expenses",
        "keywords": [
            "Product Management",
            "Software Architecture",
            "peter@foxandgeese.com",
            "Products",
            "China",
            "gifting",
            "loyalty",
            "project management",
            "product",
            "stars",
            "plan",
            "apps",
            "payment",
            "marketing automation",
            "Starbucks",
            "alignment",
            "WeChat",
            "microservices",
            "team management",
            "Grew SBUX iOS",
            "Android",
            "planning",
            "Specialties",
            "non-SQL",
            "initiatives",
            "cloud strategy",
            "AWS",
            "serverless",
            "CD",
            "CI"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g3e1fd9e088_0_0",
        "objectId": "g3e1fd9e088_0_0",
        "profileUrl": "https://drive.google.com/uc?id=1z8dlUGiFBzhLIx__e2_kprshOXtz-BWh"
    },
    {
        "fullname": "Frederic Bazin",
        "altnames": [
            "Fred"
        ],
        "email": "frederic.bazin@coderbunker.com",
        "linkedin": "https://cn.linkedin.com/in/frederic-bazin",
        "rate": "RMB700/hour",
        "status": "Partner, Associate, Member, Villager, Speaker, Freelancer",
        "github": "lenzai",
        "keywords": [
            "Data Munging Architecture",
            "@coderbunker.com",
            "Specialties",
            "bots",
            "design",
            "Refactoring",
            "R&D",
            "product management",
            "experience",
            "software development",
            "SCRUM",
            "code reviews"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g39128f82d0_0_0",
        "objectId": "g39128f82d0_0_0",
        "profileUrl": "https://drive.google.com/uc?id=1rmpjrGCo1yW65CpdKBmdx01LIiEqi7EQ"
    },
    {
        "fullname": "Romain ASNAR",
        "altnames": [
            "Romsi"
        ],
        "email": "romain.asnar@coderbunker.com",
        "altemails": "romain.asnar@gmail.com",
        "github": "romsi",
        "linkedin": "https://www.linkedin.com/in/asnarromain/",
        "wechat": "romsi94",
        "status": "Partner, Member, Speaker, Freelancer",
        "notes": "Apple addict",
        "rate": "RMB700/hour",
        "keywords": [
            "Fastlane",
            "leading",
            "Coderbunker Singapore iOS",
            "Architecture",
            "coaching",
            "programmer",
            "XP",
            "design",
            "iOS development Team",
            "Specialties",
            "Danger",
            "Bitrise",
            "Scrum Master iOS"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g3aa5f52a14_1_0",
        "objectId": "g3aa5f52a14_1_0",
        "profileUrl": "https://drive.google.com/uc?id=1dSL6-igdsUuKHfT5X2wNVbzXDjJB-hdP"
    },
    {
        "fullname": "Stéphane Vernède",
        "altnames": [
            "Stephane"
        ],
        "email": "stephane.vernede@enwise.io",
        "linkedin": "https://www.linkedin.com/in/stéphane-vernède-63ab1827/",
        "rate": "RMB700/hour",
        "status": "Member, Associate, Freelancer, Entrepreneur",
        "keywords": [
            "@enwise.io",
            "IoT",
            "energy efficiency",
            "platform",
            "energy",
            "Physical Review",
            "operation",
            "building",
            "operation analysis",
            "equipements",
            "Remote management",
            "Development",
            "digesters",
            "series",
            "Work",
            "field",
            "review Physics",
            "green energy",
            "waste Statistics"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1992957c98_4_37",
        "objectId": "g1992957c98_4_37",
        "profileUrl": "https://drive.google.com/uc?id=1CLg3-K0o-lNeGIwpw1qTbZvRtp0aVIqj"
    },
    {
        "fullname": "Julien Choulet",
        "email": "jchoulet@blue-reef-ltd.com",
        "linkedin": "https://cn.linkedin.com/in/julien-choulet-［徐亮］-9461b9",
        "rate": "RMB700/hour",
        "status": "Associate",
        "keywords": [
            "Julien Choulet Pragmatic Builder",
            "MeteorJS",
            "@blue-reef-ltd.com",
            "Specialties",
            "methodologies",
            "web products",
            "mobile",
            "application development",
            "Implementation",
            "Design",
            "Agile",
            "Lightning",
            "Projects",
            "teams",
            "Architecture"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1992957c98_4_27",
        "objectId": "g1992957c98_4_27",
        "profileUrl": "https://drive.google.com/uc?id=1NZLlWEI-aVq_fdimxnLjhRiOEq61bfYS"
    },
    {
        "fullname": "Abhishek Kumar",
        "email": "bettiah@gmail.com",
        "github": "bettiah",
        "wechat": "bettiah",
        "rate": "700 RMB",
        "status": "Member",
        "keywords": [
            "Specialties",
            "experience",
            "development",
            "Finance",
            "Network",
            "frameworks",
            "languages",
            "Telecom",
            "levels",
            "Frontend",
            "Backend",
            "App",
            "expertise",
            "OS",
            "rollout Drop",
            "project",
            "complexity",
            "design",
            "prototyping"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1a81ec406e_0_7",
        "objectId": "g1a81ec406e_0_7",
        "profileUrl": "https://drive.google.com/uc?id=1qr3M1-eRKrH24-qZMvxGdjFJBMnPKVN_"
    },
    {
        "fullname": "Bartlomiej Grasza",
        "email": "bartgras@protonmail.com",
        "status": "Member",
        "keywords": [
            "Specialties",
            "bartgras",
            "@protonmail.com",
            "NoSQL",
            "Backend development",
            "API",
            "micro services",
            "systems",
            "Semantic Web",
            "AMQP",
            "Python",
            "SQL",
            "Certified Scrum Product Owner",
            "Scrum experience",
            "Tech",
            "databases",
            "Machine learning"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1d32c57380_2_0",
        "objectId": "g1d32c57380_2_0",
        "profileUrl": "https://drive.google.com/uc?id=1WpOTcopqak9R55COd5Tj8JWl2su0UvVu"
    },
    {
        "fullname": "Alan Stafford",
        "email": "Aitudou@gmail.com",
        "rate": "700 RMB/hour",
        "keywords": [
            "Aitudou@gmail.com Specialties",
            "architecture",
            "backend development",
            "solutions",
            "API",
            "micro services",
            "development",
            "Cardboard",
            "AR",
            "Unity",
            "systems",
            "HTC Vive",
            "Java",
            "C# VR"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1cf624de81_0_0",
        "objectId": "g1cf624de81_0_0",
        "profileUrl": "https://drive.google.com/uc?id=1ae3CdJm7vlu066zTZB_T_z1YRsKOK9f4"
    },
    {
        "fullname": "Alex Michaud",
        "email": "alex.michaud@gmail.com",
        "linkedin": "https://www.linkedin.com/in/alexmichaud123/",
        "status": "Member",
        "rate": "400/hour",
        "keywords": [
            "michaud@gmail.com",
            "Specialties",
            "stack developer",
            "software development",
            "experience",
            "Mapping",
            "geocoding",
            "Database",
            "BackboneJS",
            "Backend: nodejs",
            "Frontend: Javascript",
            "KnockoutJS",
            "Angular",
            "LeafletJS",
            "Postgresql",
            "MySQL Websockets",
            "mapbox",
            "google maps",
            "amap",
            "Linux CSS"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1d6a07363c_6_0",
        "objectId": "g1d6a07363c_6_0",
        "profileUrl": "https://drive.google.com/uc?id=1Z7dBeIYIJ8FMTUNvI_ommKJ8lY0BBYlM"
    },
    {
        "fullname": "Stephane Truong",
        "email": "steph@actionabledata.net",
        "linkedin": "https://www.linkedin.com/in/alexmichaud123",
        "keywords": [
            "insights",
            "data",
            "UC Berkeley",
            "Aliyun",
            "Machine learning",
            "analysis",
            "MSc",
            "data processing",
            "Deep Learning Data Visualization",
            "scale",
            "social media data",
            "Cloud computing",
            "experimentation",
            "MSc EPFL Specialties: Machine learning",
            "app analytics",
            "sound recognition",
            "AWS",
            "Azure",
            "dashboards",
            "project",
            "English",
            "French",
            "Chinese",
            "PMP"
        ],
        "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g2855aea372_4_6",
        "objectId": "g2855aea372_4_6",
        "profileUrl": "https://drive.google.com/uc?id=18f_VTjMBJq28ZfQBwMpztonFq9Tnoho0"
    }
];

// POTENTIAL TOOL FOR JSON DATA FROM ELSEWHERE
// $.getJSON("js/coderbunkerusers.json", function(data) {
//     console.log(data);
//     membersArray = data;
// })

for(let i = 0; i < membersArray.length; i++) {
    console.log(JSON.stringify(membersArray[i]));
    index.addDoc(membersArray[i]);
}

console.log(index)

searchBtn.addEventListener("click", searchIt);
inputArea.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        searchIt();
    }
});

function searchIt() {
    $('.searchResult').remove();
    let htmlText = '';
    let individualUser = {
        'name': '',
        'profile': '',
    };
    let allUsersArray = [];

    const searchStr = inputArea.value;
    const matchArr = index.search(searchStr);  // here's the result
    console.log(matchArr);
    for ( let g = 0; g < matchArr.length; g++) {
        individualUser.name = matchArr[g].doc.fullname
        individualUser.profile = matchArr[g].doc.profileUrl
        allUsersArray.push(individualUser);
        individualUser = {};
    }

    for ( var key in allUsersArray ) {
            htmlText += '<div class="searchResult">';
            htmlText += '<p class="profileName"> ' + allUsersArray[key].name + '</p>';
            // htmlText += '<p class="profileLink"> Profile: ' + allUsersArray[key].profile + '</p>';
            htmlText += '<img class="profileImg" src="' + allUsersArray[key].profile + '">';
            htmlText += '</div>';
        
    }

        $(".search-results-area").append(htmlText);   
}