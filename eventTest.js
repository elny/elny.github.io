/**
 * downloading progress cached 测试
 */
window.applicationCache.onchecking =  function() {
    alert('onchecking')
}

window.applicationCache.onnoupdate = function () {
    alert('noupdate')
}


var progress = true;
window.applicationCache.onprogress = function () {  
    if (progress) {
        alert(event.loaded + '-' + event.total);
        progress = false;
    }
}

window.applicationCache.ondownloading = function () {
    alert('download')
}


window.applicationCache.oncached = function() {
    alert('oncached');
}



window.applicationCache.onobsolete = function() {
    alert('onobsolete now');
}

window.applicationCache.onerror = function() {
    alert('onerror now');
}
  