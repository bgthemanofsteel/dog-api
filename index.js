function getDogImage(num){
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        // .then(responseJson => console.log(responseJson))
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong.  Try again later!'));
}

function displayResults(responseJson){
    console.log(responseJson);
    let myDogArr = responseJson.message;
    let myHTML = "";
    myDogArr.forEach(function(item){
        myHTML += `<img src="${item}"></img>`;
    }); 
    console.log(myHTML);
    $('.results-img').replaceWith(
       myHTML
      )
    $('.results').removeClass('hidden');
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        formReset();
        let value = $('input').val();
        getDogImage(value);
    });
}

function formReset() {
    document.getElementById("form").reset();
  }

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});