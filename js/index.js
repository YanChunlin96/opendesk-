function headerHeight() {
    var ifm= document.getElementById("iframepage");
    var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
    if(ifm != null && subWeb != null) {
        ifm.height = subWeb.body.scrollHeight;
    }
}
function footerHeight() {
    var ifm2= document.getElementById("iframepage2");
    var subWeb2 = document.frames ? document.frames["iframepage2"].document : ifm2.contentDocument;
    if(ifm2 != null && subWeb2 != null) {
        ifm2.height = subWeb2.body.scrollHeight;
    }
}