const inputArea = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const finalTextArea = document.querySelector(".final-text");

var index = elasticlunr(function () {
    this.addField('fullname');
    this.addField('email');
    this.addField('keywords');
    this.setRef('id');
});

// you can grab the data from frontend, but I'm too lazy to do that
var doc1 = {
    "id": 1,
    "fullname": "Ricky Ng-Adam",
    "email": "rngadam@coderbunker.com",
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
}

var doc2 = {
    "id": 2,
    "fullname": "Peter Bray",
    "email": "peter@foxandgeese.com",
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
}

index.addDoc(doc1);
index.addDoc(doc2);

searchBtn.addEventListener("click", searchIt);

function searchIt() {
    const searchStr = inputArea.value;
    const matchArr = index.search(searchStr);  // here's the result
    console.log(matchArr);
    finalTextArea.innerText = JSON.stringify(matchArr);  // too lazy to style the result ;P
}