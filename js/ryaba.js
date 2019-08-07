const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL,handleData);
}

function handleData(data) {
  
  const var1 = $("input[name=var1]")[0].value;
  const var2 = $("input[name=var2]")[0].value;
  const var3 = $("input[name=var3]")[0].value;
  const var4 = $("input[name=var4]")[0].value;
  const var5 = $("input[name=var5]")[0].value;
  const var6 = $("input[name=var6]")[0].value;
  const speach = $("input[name=speach]")[0].value;
  console.log(var1);
  
  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = '';
  data.text.forEach(item => {
      text += item;
      // text += '<BR>';
  });
  text = text.replace(/{var1}/g,var1);
  text = text.replace(/{var2}/g,var2);
  text = text.replace(/{var3}/g,var3);
  text = text.replace(/{var4}/g,var4);
  text = text.replace(/{var5}/g,var5);
  text = text.replace(/{var6}/g,var6);
  text = text.replace(/{speach}/g,speach);
  console.log(text);
  $("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
