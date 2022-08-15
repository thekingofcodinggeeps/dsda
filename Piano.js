function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+' Detected Cat - '
        document.getElementById("result_label").innerHTML ="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_count").innerHTML ="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('animal_image');

        if (results[0].label == "Barking") {
          img.src = 'https://c.tenor.com/6xwjsmMIAIoAAAAM/happy-happy-dog.gif';
          dog = dog+1;
        } else if (results[0].label == "Meowing") {
          img.src = 'https://c.tenor.com/k-tV1c5bCCkAAAAM/cat-smile-happy-cat.gif';
          cat = cat + 1;
        } else{
          img.src = 'https://149674310.v2.pressablecdn.com/wp-content/uploads/2016/11/29kristof-master768.gif';
        }

    }
}