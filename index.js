function getDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random/50')
        .then(response => response.json())
        .then(response => displayResults(responseJson))
        .catch(error => alert('Something went wrong.  Try again later!'));
}

function displayResults(){

}