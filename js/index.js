const inputArea = document.getElementById("search");
const searchBtn = document.querySelector(".search-btn");
const finalTextArea = document.querySelector(".final-text");

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


function objectLength(object) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

    let request = new XMLHttpRequest();
    request.open('GET', '/js/coderbunkerusers.json' , true);
    request.onload = function() {
        userJsonData = JSON.parse(request.responseText);
        var usersNum = objectLength(userJsonData);
        for(let i = 0; i < usersNum; i++) {
            index.addDoc(userJsonData[i]);
            }
    };
    request.send();

function searchIt() {
    let htmlText = '';

    const searchStr = inputArea.value;
    const matchArr = index.search(searchStr, {});
    const allUsersArray = matchArr.map( match => {
        return {
          name: match.doc.fullname,
          profile: match.doc.profileUrl
        }
      })

    if (allUsersArray === undefined || allUsersArray.length == 0) {
        htmlText += '<div class="searchResult">';
        htmlText += '<p class="profileName"> Sorry, no users match this search term. </p>';
        htmlText += '</div>';
    } else {
        for ( var key in allUsersArray ) {
                htmlText += '<div class="searchResult">';
                htmlText += '<p class="profileName"> ' + allUsersArray[key].name + '</p>';
                htmlText += '<img class="profileImg" src="' + allUsersArray[key].profile + '">';
                htmlText += '</div>';
            
        }
    }

        $(".search-results-area").html(htmlText);   
}
