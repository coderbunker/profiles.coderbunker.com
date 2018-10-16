const inputArea = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const finalTextArea = document.querySelector(".final-text");

var index = elasticlunr(function () {
    this.addField('title');
    this.addField('body');
    this.setRef('id');
});

// you can grab the data from frontend, but I'm too lazy to do that
var doc1 = {
    "id": 1,
    "title": "Oracle released its latest database Oracle 12g",
    "body": "Yesterday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
}

var doc2 = {
    "id": 2,
    "title": "Oracle released its profit report of 2015",
    "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
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