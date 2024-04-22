//Instances of the URL class

//hostname property

let jQueryURL = new URL("https://api.jquery.com/text/#text");
console.log(jQueryURL.hostname); //api.jquery.com

//search property

let url = new URL("https://www.bestbuy.com/site/electronics/top-deals/pcmcat1563299784494.c?id=pcmcat1563299784494");
console.log(url.search); //?id=pcmcat1563299784494

//protocol property

let eslintURL = new URL("https://eslint.org/");
console.log(eslintURL.protocol); //https:

//href property

let mozillaURL = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL");
console.log(mozillaURL.href); // https://developer.mozilla.org/en-US/docs/Web/API/URL

//hash property

let jQueryURL2 = new URL("https://api.jquery.com/remove/#remove-selector");
console.log(jQueryURL2.hash); //#remove-selector

