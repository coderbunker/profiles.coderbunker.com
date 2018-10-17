const inputArea = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const finalTextArea = document.querySelector(".final-text");

var index = elasticlunr(function () {
    this.addField('fullname');
    this.addField('email');
    this.addField('keywords');
    this.addField('slideUrl');
    this.addField('profileUrl');
    this.setRef('id');
});

// you can grab the data from frontend, but I'm too lazy to do that
var doc1 = {
    "id": 1,
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
        "China",
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
        "MVC"
    ],
    "slideUrl": "https://docs.google.com/presentation/d/1LvvSUc4VEU9hSSgi1x8PJWA_lBZ5ne7Few76U6CCFXI/edit#slide=id.g1992957c98_7_61",
    "objectId": "g1992957c98_7_61",
    "profileUrl": "https://drive.google.com/uc?id=1wN9kEJULLNqrofTcmtJ2BsIrzI3AWjGj"
}

var doc2 = {
    "id": 2,
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
}

index.addDoc(doc1);
index.addDoc(doc2);

searchBtn.addEventListener("click", searchIt);

function searchIt() {
    let individualUserArray = [];
    let allUsersArray = [];

    const searchStr = inputArea.value;
    const matchArr = index.search(searchStr);  // here's the result
    console.log(matchArr);
        for ( let g = 0; g < matchArr.length; g++) {
            individualUserArray.push( { Name: matchArr[g].doc.fullname } )
            individualUserArray.push( { Profile: matchArr[g].doc.profileUrl } )
            allUsersArray.push(individualUserArray);
            individualUserArray = [];
        }
    console.log(allUsersArray);
    finalTextArea.innerText = JSON.stringify(allUsersArray);  // too lazy to style the result ;P
}