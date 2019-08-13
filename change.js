function change(){
    //location.href="chrome-extension://lffhledacghkjjlmolabafboieadckeh/home.html";
    window.open('chrome-extension://lffhledacghkjjlmolabafboieadckeh/home.html', '_blank');
}

//window.addEventListener("load", initialize);

document.getElementById("extern").addEventListener("click",change);