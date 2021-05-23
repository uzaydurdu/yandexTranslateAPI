function Translate(word,language){
    this.apikey = "trnsl.1.1.20200416T215624Z.7e210a8c13a3e8f6.21655ce889fbfca018b9cac26f99e096e03077f0";
    this.word = word;
    this.language = language;

    //XHR Object

    this.xhr = new XMLHttpRequest();
}
Translate.prototype.translateWord = function(callback){
    //Ajax İşlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () =>{
        
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);
        }
        else{
            //hata
            callback("Bir hata oluştu.",null);
        }

    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;


}