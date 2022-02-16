function myFunction(){

    var randomNumber1 = Math.random()
    randomNumber1 = Math.floor(randomNumber1*6)+1
    var randImge1 = "dice"+randomNumber1+".png";
    var randImgSrc1 = "images/"+randImge1;
    var setImg1 = document.querySelectorAll("img")[0];
    setImg1.setAttribute("src",randImgSrc1);

    var randomNumber2 = Math.random()
    randomNumber2 = Math.floor(randomNumber2*6)+1
    var randImge2 = "dice"+randomNumber2+".png";
    var randImgSrc2 = "images/"+randImge2;
    var setImg1 = document.querySelectorAll("img")[1];
    setImg1.setAttribute("src",randImgSrc2);
    // console.log(randomNumber)

    // Player 1 wins
    if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML = "🏁️ Player 1 Wins !"
    }
    else if(randomNumber2>randomNumber1)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins ! 🏁️"
    }
    else if(randomNumber1 == randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Draw "
    }
    
}