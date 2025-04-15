let msg = new SpeechSynthesisUtterance();
(function () {
  var oldonmessage = window.onmessage;

  window.onmessage = function (d) {
    try{
      const text = d.message;
      msg.text = d.username+": "+text;
		  window.speechSynthesis.cancel();
		  window.speechSynthesis.speak(msg);
    }catch(e){
      window.alert(e);
    }
    return oldonmessage(d);
  };
})();
