const inputArea = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const finalTextArea = document.querySelector(".final-text");


let membersArray = [];
let request = new XMLHttpRequest();
let APIEndPoint = "";

request.onload = () => {
    respObj = JSON.parse(request.responseText);
    APIEndPoint = respObj[0].APIAddress;
    $.get( APIEndPoint, function( userJsonData ) {
        membersArray = userJsonData;
        for(let i = 0; i < membersArray.length; i++) {
            index.addDoc(membersArray[i]);
        }
    });
};

request.open('GET', 'config.json', true);
request.send();

var index = elasticlunr(function () {
    this.addField('fullname');
    this.addField('email');
    this.addField('keywords');
    this.addField('slideUrl');
    this.addField('profileUrl');
    this.addField('status');
    this.setRef('objectId');
});

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
    for ( let g = 0; g < matchArr.length; g++) {
        individualUser.name = matchArr[g].doc.fullname
        individualUser.profile = matchArr[g].doc.profileUrl
        allUsersArray.push(individualUser);
        individualUser = {};
    }

    if (allUsersArray.length == 0) {
        htmlText += '<div class="searchResult">';
        htmlText += '<p class="profileName"> Sorry, no users match this search term. </p>';
        htmlText += '</div>';
    } else {
        for ( var key in allUsersArray ) {
                htmlText += '<div class="searchResult">';
                htmlText += '<p class="profileName"> ' + allUsersArray[key].name + '</p>';
                // htmlText += '<p class="profileLink"> Profile: ' + allUsersArray[key].profile + '</p>';
                htmlText += '<img class="profileImg" src="' + allUsersArray[key].profile + '">';
                htmlText += '</div>';
            
        }
    }

        $(".search-results-area").append(htmlText);   
}