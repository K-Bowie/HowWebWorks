function generateGif(result){
    let randomResult = result.data.length;
    if(randomResult){
        let randomIndex = Math.floor(Math.random() * randomResult);
        let $newResult = $('<div>');
        let $newGif = $('<img>', {src: result.data [randomIndex].images.original.url});
        $newResult.append($newGif);
        $('#theGiphyResult').append($newResult);
    }
}

$('form').on('submit', async function(event){
    event.preventDefault();
  
    let searchWord = $('#search').val();
    $('#search').val('');
  
    const response = await axios.get('http://api.giphy.com/v1/gifs/search',{
      params: { q: searchWord, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' }
    });
    generateGif(response.data);
});


//remove  the gif
$('button').on('click', function(){
    $('#theGiphyResult').empty();
});