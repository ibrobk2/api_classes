let jokes = {
    url: "https://official-joke-api.appspot.com/random_joke",
    getData: function(){
        fetch(this.url)
            .then((response)=>response.json())
            .then((data)=>this.displayData(data))
    },
    displayData: function(data){
        document.getElementById('joke').innerHTML = data.setup;
        document.getElementById('ans').innerHTML = data.punchline;
        // console.log(data.setup);
    }


}


function quotes(){
    jokes.getData();
}


// jokes.getData;