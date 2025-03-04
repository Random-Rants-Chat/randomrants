var stylesLegacy = document.createElement("style");
stylesLegacy.innerHTML = `
.inputText1 {
		resize:none; font-size:20px; width:30%; height:5%; border:none; background-color:#e0e0e0; color:#696969;
	}
	.sep1 {
	  border-top: 3px dashed #6b6b60;
	  height:20px;
	  margin-top:20px;
	}
	.roundborder {
		border-radius:10px;
	}
	.profile {
		background-color:#7e806e;
		border-radius:32px;
		border-style:solid;
		border-color:#474747;
		border-width:1px;
	}
	#screenCaptureDiv {
		position:fixed;
		top:0;
		right:0;
		image-rendering:pixelated;
		background: grey;
		border-style: solid;
		border-width: #868e96;
		border-color: #4c6ef5;
	}
	.fullscreenView {
		width:100%;
		height:100%;
	}
	.defaultView {
		width:400px;
		height:290px;
	}
  body {
    background-color:#42423a; cursor:defalut;
  }
`;
document.body.appendChild(stylesLegacy);
document.body.style.backgroundColor = "#42423a";
document.getElementById("messages").style.backgroundColor = "#e0e0e0";
document.getElementById("messages").style.color = "#696969";