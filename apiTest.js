/**
 * 测试点 update 方法
 * checking 事件
 * noupdate 事件
 */

// /**
//  * 测试 update 方法
//  *
//  */
function onChecking(text) {
  alert('checking !~~~~' + text);
}
window.applicationCache.onchecking = function() {
  onChecking('no time')
}

/**
 * 测试 swapCache
 */

// function onUpdateReady() {
//   console.log(window.applicationCache.status)
//   if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
//     console.log('swapCache');
//     window.applicationCache.swapCache();
//     setTimeout(function() {
//       var img = document.createElement("img");
//       img.src = "cat.jpeg";
//       document.body.appendChild(img);
//     }, 6000)
//   }
// }
// window.applicationCache.addEventListener('updateready', onUpdateReady);

// if(window.applicationCache.status === window.applicationCache.UPDATEREADY) {
//   onUpdateReady();
// }


setTimeout(function() {
  window.applicationCache.update();
}, 3000);

/**
 * no update
 */
function onNoUpdate() {
  alert('noupdate ~~~');
}

window.applicationCache.onnoupdate = onNoUpdate;

window.applicationCache.onobsolete = function() {
  console.log('onobsolete now');
}

window.applicationCache.onerror = function() {
  console.log('onerror now');
}
