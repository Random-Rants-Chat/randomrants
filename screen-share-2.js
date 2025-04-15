/*(function () {
  try {
    var wrtc = window.wrtc;
    var Peer = window.Peer;
    var io = window.SocketIoClient;
    async function startCapturev2() {
      let captureStream = null;

      try {
        captureStream = await navigator.mediaDevices.getDisplayMedia({
          video: {
            cursor: "always",
          },
          audio: {
            echoCancellation: false,
            noiseSuppression: false,
            sampleRate: 44100,
          }
        });
      } catch (err) {
        throw Error(err);
      }
      return captureStream;
    }

    var socket = io("wss://randomrants-rtc.glitch.me",{
      reconnectionDelayMax: 10000,
    });
    
    var sessionId;
    socket.on("connect", function () {
      sessionId = socket.id;
    });
  } catch (e) {
    window.alert(e);
  }
})();
*/