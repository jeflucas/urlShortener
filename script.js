function shortUrl(){

    var id = "o_4qjue1o0cr";
    var url = "https://api-ssl.bitly.com/v4/shorten";
    
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200)
        console.log(request.responseText);
    };
    
    request.send();
}

shortUrl()

// https://github.com/LaraSabatini/link-shortener

// https://github.com/Amansingh1202/link-shortener ver mais tarde
// https://github.com/andy3278/URLshorten