function getDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(response => displayResults(responseJson))
        .catch(error => alert('Something went wrong.  Try again later!'));
}

function displayResults(){
    console.log(responseJson.message);
    $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img">`)
    $('.results').removeClass('hidden')
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      $('input').keyup(function(){
          let value = $(this).val();
      })
      .keyup();
      getDogImage();
    });

}
  
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});