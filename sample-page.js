function doresize() {
    var codingspace = document.getElementById('coding-space');
    var positionInfo = codingspace.getBoundingClientRect();
    var height = positionInfo.height;
    var width1 = positionInfo.width;
    var workspace = document.getElementById('work-space');
    var positionInfo = workspace.getBoundingClientRect();
    var height = positionInfo.height;
    var width2 = positionInfo.width;
    var statementspace = document.getElementById('statement-space');
    var positionInfo = statementspace.getBoundingClientRect();
    var height = positionInfo.height;
    var width3 = positionInfo.width;
    var datext = document.getElementById('TEXT');
    let x = " NO";
    if (width1+width3 > width2) {
        x = " YES";
        codingspace.style.height = "50%";
        statementspace.style.height = "50%";
    } else {
        codingspace.style.height = "100%";
        statementspace.style.height = "100%";
    }
    datext.textContent = width1.toString()+' '+width2.toString()+' '+width3.toString()+x;
}
doresize();
window.onresize = doresize;