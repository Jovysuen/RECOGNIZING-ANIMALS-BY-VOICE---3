https://teachablemachine.withgoogle.com/models/8m_SjP_Bk/

function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8m_SjP_Bk/model.json",modelLoaded)
}
function modelLoaded(){
    console.log("model Loaded successfully")
    classifier.classify(gotresult)
}
function gotresult(error,result){
    if (error) {
        console.log("error")
    }
    else{
        console.log(result)
        r=Math.floor(Math.random()*255)+1
        g=Math.floor(Math.random()*255)+1
        b=Math.floor(Math.random()*255)+1
        document.getElementById("sound").innerHTML=result[0].label
        document.getElementById("sound").style.color="rgb("+r+","+g+","+b+")"
        document.getElementById("soundaccuracy").innerHTML=(result[0].confidence*100).toFixed(2)+"%"
        document.getElementById("soundaccuracy").style.color="rgb("+r+","+g+","+b+")"
        img1=document.getElementById("image")
        if (result[0].label=="Cat") {
            img1.src="Cat.jpeg"
        }
        else if(result[0].label=="Cow"){
            img1.src="Cow.jpeg"
        }
        else if(result[0].label=="Dog"){
            img1.src="Dog.jpeg"
        }
        else if(result[0].label=="Lion"){
            img1.src="Lion.jpeg"
        } else{
            img1.src="Ear.png"
        }
    }
}