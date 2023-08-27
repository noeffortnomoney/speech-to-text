click_to_record.addEventListener('click', function(){
    var speech = true;
    window.SpeechRecognition = window.SpeechRecogniton || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', (e) =>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        convert_text.innerHTML = transcript;
    })

    if (speech == true){
        recognition.start();
    }

})