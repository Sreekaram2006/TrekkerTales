function speakContent() {
    var content = document.getElementById('content').innerText; //Now it should work.
    var speech = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(speech);
}