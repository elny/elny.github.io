/**
 * downloading progress cached 测试
 */
window.applicationCache.onchecking =  function() {
    alert('onchecking')
}

window.applicationCache.onnoupdate = function () {
    alert('noupdate')
}

window.applicationCache.ondownloading = function () {
    alert('download')
}


window.applicationCache.oncached = function() {
    alert('oncached');
}

window.applicationCache.onupdateready = function() {
    alert('ready');
}

// window.applicationCache.ondownloading = function() {
//     console.log('download')
//     alert('download')
// }

// window.applicationCache.onprogress =  function() {
//     console.log('progress');
//     alert('progress')
// }



// setTimeout(function() {
//     window.applicationCache.update();
// }, 3000);

// function onNoUpdate() {
// alert('noupdate ~~~');
// }

// window.applicationCache.onnoupdate = onNoUpdate;

window.applicationCache.onobsolete = function() {
    alert('onobsolete now');
}

window.applicationCache.onerror = function() {
    alert('onerror now');
}
  