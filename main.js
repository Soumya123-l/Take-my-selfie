var SpeechRecongnition = window.webkitSpeechRecogntition;

var recognition = new SpeechRecogntition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recogntition.onresult = function run (event) {
console.log(event);

    var Content = event.results[0] [0].transript;
    console.log(Content);

    document.getElementById("tectbox").innerHTML = Content;
}