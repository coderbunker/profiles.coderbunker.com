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

    const searchStr = inputArea.value;
    const matchArr = index.search(searchStr);

    const allUsersArray = matchArr.map( match => {
        return {
          name: match.doc.fullname,
          profile: match.doc.profileUrl,
          github: match.doc.github,
          linkedin: match.doc.linkedin,
          wechat: match.doc.wechat,
          rate: match.doc.rate
        }
      })
      console.log(allUsersArray)

    if (allUsersArray.length == 0) {
        htmlText += '<div class="searchResult">';
        htmlText += '<p class="profileName"> Sorry, no users match this search term. </p>';
        htmlText += '</div>';
    } else {
        for ( var key in allUsersArray ) {
                htmlText += '<div class="searchResult">';
                    htmlText += '<p class="profileName"> ' + allUsersArray[key].name + '</p>';
                    htmlText += '<img class="profileImg" src="' + allUsersArray[key].profile + '">';
                    if (allUsersArray[key].github) {
                        htmlText += '<p class="profileGitHub"> <a href="https://github.com/' + allUsersArray[key].github + '"> GitHub </a> </p>';
                    }
                    if (allUsersArray[key].linkedin) {
                        htmlText += '<p class="profileLinkedIn"> <a href="' + allUsersArray[key].linkedin + '"> LinkedIn </a> </p>';
                    }
                    if (allUsersArray[key].wechat) {
                        htmlText += '<p class="profileWechat"> WeChat ID: ' + allUsersArray[key].wechat + '</p>';
                    }
                    if (allUsersArray[key].rate) {
                        htmlText += '<p class="profileRate"> Rate: ' + allUsersArray[key].rate + '</p>';
                    }
                htmlText += '</div>';
        }
    }

        $(".search-results-area").append(htmlText);   
}
