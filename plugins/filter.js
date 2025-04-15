(function () {
	/*
		To Keep The Chat Safe.
	*/
	//USED FROM GOOGLE WITHOUT PERMISON
	var badWordsEncoded = (
	//put encoded bad words here as an string
	"YWhvbGUN,YW51cw0=,YXNoMGxlDQ==,YXNoMGxlcw0=,YXNob2xlcw0=,YXNzDQ==,QXNzIE1vbmtleQ0=,QXNzZmFjZQ0=,YXNzaDBsZQ0=,YXNzaDBsZXoN,YXNzaG9sZQ0=,YXNzaG9sZXMN,YXNzaG9seg0=,YXNzd2lwZQ0=,YXp6aG9sZQ0=,YmFzc3RlcmRzDQ==,YmFzdGFyZA0=,YmFzdGFyZHMN,YmFzdGFyZHoN,YmFzdGVyZHMN,YmFzdGVyZHoN,QmlhdGNoDQ==,Yml0Y2gN,Yml0Y2hlcw0=,QmxvdyBKb2IN,Ym9mZmluZw0=,YnV0dGhvbGUN,YnV0dHdpcGUN,YzBjaw0=,YzBja3MN,YzBrDQ==,Q2FycGV0IE11bmNoZXIN,Y2F3aw0=,Y2F3a3MN,Q2xpdA0=,Y250cw0=,Y250eg0=,Y29jaw0=,Y29ja2hlYWQN,Y29jay1oZWFkDQ==,Y29ja3MN,Q29ja1N1Y2tlcg0=,Y29jay1zdWNrZXIN,Y3JhcA0=,Y3VtDQ==,Y3VudA0=,Y3VudHMN,Y3VudHoN,ZGljaw0=,ZGlsZDAN,ZGlsZDBzDQ==,ZGlsZG8N,ZGlsZG9zDQ==,ZGlsbGQwDQ==,ZGlsbGQwcw0=,ZG9taW5hdHJpY2tzDQ==,ZG9taW5hdHJpY3MN,ZG9taW5hdHJpeA0=,ZHlrZQ0=,ZW5lbWEN,ZiB1IGMgaw0=,ZiB1IGMgayBlIHIN,ZmFnDQ==,ZmFnMXQN,ZmFnZXQN,ZmFnZzF0DQ==,ZmFnZ2l0DQ==,ZmFnZ290DQ==,ZmFnaXQN,ZmFncw0=,ZmFneg0=,ZmFpZw0=,ZmFpZ3MN,ZmFydA0=,ZmxpcHBpbmcgdGhlIGJpcmQN,ZnVjaw0=,ZnVja2VyDQ==,ZnVja2luDQ==,ZnVja2luZw0=,ZnVja3MN,RnVkZ2UgUGFja2VyDQ==,ZnVrDQ==,RnVrYWgN,RnVrZW4N,ZnVrZXIN,RnVraW4N,RnVraw0=,RnVra2FoDQ==,RnVra2VuDQ==,RnVra2VyDQ==,RnVra2luDQ==,ZzAwaw0=,Z2F5DQ==,Z2F5Ym95DQ==,Z2F5Z2lybA0=,Z2F5cw0=,Z2F5eg0=,R29kLWRhbW5lZA0=,aDAwcg0=,aDBhcg0=,aDByZQ0=,aGVsbHMN,aG9hcg0=,aG9vcg0=,aG9vcmUN,amFja29mZg0=,amFwDQ==,amFwcw0=,amVyay1vZmYN,amlzaW0N,amlzcw0=,aml6bQ0=,aml6eg0=,a25vYg0=,a25vYnMN,a25vYnoN,a3VudA0=,a3VudHMN,a3VudHoN,TGVzYmlhbg0=,TGV6emlhbg0=,TGlwc2hpdHMN,TGlwc2hpdHoN,bWFzb2NoaXN0DQ==,bWFzb2tpc3QN,bWFzc3RlcmJhaXQN,bWFzc3RyYmFpdA0=,bWFzc3RyYmF0ZQ0=,bWFzdGVyYmFpdGVyDQ==,bWFzdGVyYmF0ZQ0=,bWFzdGVyYmF0ZXMN,TW90aGEgRnVja2VyDQ==,TW90aGEgRnVrZXIN,TW90aGEgRnVra2FoDQ==,TW90aGEgRnVra2VyDQ==,TW90aGVyIEZ1Y2tlcg0=,TW90aGVyIEZ1a2FoDQ==,TW90aGVyIEZ1a2VyDQ==,TW90aGVyIEZ1a2thaA0=,TW90aGVyIEZ1a2tlcg0=,bW90aGVyLWZ1Y2tlcg0=,TXV0aGEgRnVja2VyDQ==,TXV0aGEgRnVrYWgN,TXV0aGEgRnVrZXIN,TXV0aGEgRnVra2FoDQ==,TXV0aGEgRnVra2VyDQ==,bjFncg0=,bmFzdHQN,bmlnZ2VyOw0=,bmlndXI7DQ==,bmlpZ2VyOw0=,bmlpZ3I7DQ==,b3JhZmlzDQ==,b3JnYXNpbTsN,b3JnYXNtDQ==,b3JnYXN1bQ0=,b3JpZmFjZQ0=,b3JpZmljZQ0=,b3JpZmlzcw0=,cGFja2kN,cGFja2llDQ==,cGFja3kN,cGFraQ0=,cGFraWUN,cGFreQ0=,cGVja2VyDQ==,cGVlZW51cw0=,cGVlZW51c3NzDQ==,cGVlbnVzDQ==,cGVpbnVzDQ==,cGVuMXMN,cGVuYXMN,cGVuaXMN,cGVuaXMtYnJlYXRoDQ==,cGVudXMN,cGVudXVzDQ==,UGh1Yw0=,UGh1Y2sN,UGh1aw0=,UGh1a2VyDQ==,UGh1a2tlcg0=,cG9sYWMN,cG9sYWNrDQ==,cG9sYWsN,UG9vbmFuaQ0=,cHIxYw0=,cHIxY2sN,cHIxaw0=,cHVzc2UN,cHVzc2VlDQ==,cHVzc3kN,cHV1a2UN,cHV1a2VyDQ==,cXVlZXIN,cXVlZXJzDQ==,cXVlZXJ6DQ==,cXdlZXJzDQ==,cXdlZXJ6DQ==,cXdlaXIN,cmVja3R1bQ0=,cmVjdHVtDQ==,cmV0YXJkDQ==,c2FkaXN0DQ==,c2NhbmsN,c2NobG9uZw0=,c2NyZXdpbmcN,c2VtZW4N,c2V4DQ==,c2V4eQ0=,U2ghdA0=,c2gxdA0=,c2gxdGVyDQ==,c2gxdHMN,c2gxdHRlcg0=,c2gxdHoN,c2hpdA0=,c2hpdHMN,c2hpdHRlcg0=,U2hpdHR5DQ==,U2hpdHkN,c2hpdHoN,U2h5dA0=,U2h5dGUN,U2h5dHR5DQ==,U2h5dHkN,c2thbmNrDQ==,c2thbmsN,c2thbmtlZQ0=,c2thbmtleQ0=,c2thbmtzDQ==,U2thbmt5DQ==,c2x1dA0=,c2x1dHMN,U2x1dHR5DQ==,c2x1dHoN,c29uLW9mLWEtYml0Y2gN,dGl0DQ==,dHVyZA0=,dmExamluYQ0=,dmFnMW5hDQ==,dmFnaWluYQ0=,dmFnaW5hDQ==,dmFqMW5hDQ==,dmFqaW5hDQ==,dnVsbHZhDQ==,dnVsdmEN,dzBwDQ==,d2gwMHIN,d2gwcmUN,d2hvcmUN,eHJhdGVkDQ==,eHh4DQ==,YiErY2gN,Yml0Y2gN,Ymxvd2pvYg0=,Y2xpdA0=,YXJzY2hsb2NoDQ==,ZnVjaw0=,c2hpdA0=,YXNzDQ==,YXNzaG9sZQ0=,YiF0Y2gN,YjE3Y2gN,YjF0Y2gN,YmFzdGFyZA0=,YmkrY2gN,Ym9pb2xhcw0=,YnVjZXRhDQ==,YzBjaw0=,Y2F3aw0=,Y2hpbmsN,Y2lwYQ0=,Y2xpdHMN,Y29jaw0=,Y3VtDQ==,Y3VudA0=,ZGlsZG8N,ZGlyc2EN,ZWpha3VsYXRlDQ==,ZmF0YXNzDQ==,ZmN1aw0=,ZnVrDQ==,ZnV4MHIN,aG9lcg0=,aG9yZQ0=,amlzbQ0=,a2F3aw0=,bDNpdGNoDQ==,bDNpK2NoDQ==,bGVzYmlhbg0=,bWFzdHVyYmF0ZQ0=,bWFzdGVyYmF0Kg0=,bWFzdGVyYmF0Mw0=,bW90aGVyZnVja2VyDQ==,cy5vLmIuDQ==,bW9mbw0=,bmF6aQ0=,bmlnZ2EN,bmlnZ2VyDQ==,bnV0c2Fjaw0=,cGh1Y2sN,cGltcGlzDQ==,cHVzc2UN,cHVzc3kN,c2Nyb3R1bQ0=,c2ghdA0=,c2hlbWFsZQ0=,c2hpKw0=,c2ghKw0=,c2x1dA0=,c211dA0=,dGVldHMN,dGl0cw0=,Ym9vYnMN,YjAwYnMN,dGVleg0=,dGVzdGljYWwN,dGVzdGljbGUN,dGl0dA0=,dzAwc2UN,amFja29mZg0=,d2Fuaw0=,d2hvYXIN,d2hvcmUN,KmRhbW4N,KmR5a2UN,KmZ1Y2sqDQ==,KnNoaXQqDQ==,QCQkDQ==,YW1jaWsN,YW5kc2tvdGEN,YXJzZSoN,YXNzcmFtbWVyDQ==,YXlpcg0=,Ymk3Y2gN,Yml0Y2gqDQ==,Ym9sbG9jayoN,YnJlYXN0cw0=,YnV0dC1waXJhdGUN,Y2Ficm9uDQ==,Y2F6em8N,Y2hyYWEN,Y2h1ag0=,Q29jayoN,Y3VudCoN,ZDRtbg0=,ZGF5Z28N,ZGVnbw0=,ZGljayoN,ZGlrZSoN,ZHVwYQ0=,ZHppd2thDQ==,ZWphY2t1bGF0ZQ0=,RWtyZW0qDQ==,RWt0bw0=,ZW5jdWxlcg0=,ZmFlbg0=,ZmFnKg0=,ZmFuY3Vsbw0=,ZmFubnkN,ZmVjZXMN,ZmVnDQ==,RmVsY2hlcg0=,Zmlja2VuDQ==,Zml0dCoN,Rmxpa2tlcg0=,Zm9yZXNraW4N,Rm90emUN,RnUoKg0=,ZnVrKg0=,ZnV0a3JldHpuDQ==,Z2F5DQ==,Z29vaw0=,Z3VpZW5hDQ==,aDByDQ==,aDR4MHIN,aGVsbA0=,aGVsdmV0ZQ0=,aG9lcioN,aG9ua2V5DQ==,SHVldm9uDQ==,aHVpDQ==,aW5qdW4N,aml6eg0=,a2Fua2VyKg0=,a2lrZQ0=,a2xvb3R6YWsN,a3JhdXQN,a251bGxlDQ==,a3VrDQ==,a3Vrc3VnZXIN,S3VyYWMN,a3Vyd2EN,a3VzaSoN,a3lycGEqDQ==,bGVzYm8N,bWFtaG9vbg0=,bWFzdHVyYmF0Kg0=,bWVyZCoN,bWlidW4N,bW9ua2xlaWdoDQ==,bW91bGlld29wDQ==,bXVpZQ0=,bXVsa2t1DQ==,bXVzY2hpDQ==,bmF6aXMN,bmVwZXNhdXJpbw0=,bmlnZ2VyKg0=,b3Jvc3B1DQ==,cGFza2EqDQ==,cGVyc2UN,cGlja2EN,cGllcmRvbCoN,cGlsbHUqDQ==,cGltbWVsDQ==,cGlzcyoN,cGl6ZGEN,cG9vbnRzZWUN,cG9vcA0=,cG9ybg0=,cDBybg0=,cHIwbg0=,cHJldGVlbg0=,cHVsYQ0=,cHVsZQ0=,cHV0YQ0=,cHV0bw0=,cWFoYmVoDQ==,cXVlZWYqDQ==,cmF1dGVuYmVyZw0=,c2NoYWZmZXIN,c2NoZWlzcyoN,c2NobGFtcGUN,c2NobXVjaw0=,c2NyZXcN,c2ghdCoN,c2hhcm11dGEN,c2hhcm11dGUN,c2hpcGFsDQ==,c2hpeg0=,c2tyaWJ6DQ==,c2t1cnd5c3luDQ==,c3BoZW5jdGVyDQ==,c3BpYw0=,c3BpZXJkYWxhag0=,c3Bsb29nZQ0=,c3VrYQ0=,YjAwYioN,dGVzdGljbGUqDQ==,dGl0dCoN,dHdhdA0=,dml0dHUN,d2FuayoN,d2V0YmFjayoN,d2ljaHNlcg0=,d29wKg0=,eWVkDQ==,emFib3VyYWg="
	).replaceAll("\r","").replaceAll("\n","").replaceAll("\t","").split(",");
	var checkBadWords = function (txt) {
		var text = txt.split(" ").join("").toLowerCase(); //lowercase the word so like HeY becomes hey! To make It easier For Filtering List
		for (var i in badWordsEncoded) {
			if (text == atob(badWordsEncoded[i]).replaceAll("\r","").replaceAll("\n","").replaceAll("\t","").toLowerCase().split(" ").join("")) { //many pepole get confused with this function
				return true; //there is a bad word!
			}
		}
		return false; //this word is safe.
	}
	window.filterBadWords = function (text,censorthing) {
		//spaces are used as and seporator for words for us to read, just like this comment.
		var words = text.split(" ");
		if (censorthing) {
			var censorcharacter = censorthing;
		} else {
			var censorcharacter = "#";
		}
		var fixedtext = [];
		for (var i in words) {
			if (checkBadWords(words[i])) {
				var wordcencored = "";
				for (var unusedi in words[i]) {
					wordcencored += censorcharacter;
				}
				fixedtext.push(wordcencored);
			} else {
				fixedtext.push(words[i]);
			}
		}
		return fixedtext.join(" ");
	};
  
  var oldonclick = document.getElementById("Send").onclick;
  document.getElementById("Send").onclick = function () {
    document.getElementById("typedMessage").value = window.filterBadWords(document.getElementById("typedMessage").value);
    oldonclick();
  };
})()