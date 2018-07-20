/**
 * 测试 
 * cached 事件
 * error 事件
 * absolute 事件
 * 
 * 404 清除缓存事件
 * 
 * 执行逻辑
 * 1. 监听 cached 事件、obsolete 事件和 error 事件
 * 2. 设置 manifest 500 （刷新 两次
 * 3. 设置 manifest 404 （刷新 3 次
 * 4. 设置 manifest 正常 （刷新 2 次
 * 
 * 正常的表现为 500 触发 error 
 * 首次 404 触发 obsolete 
 * 非首次 触发 error
 * manifest 设置正常后,触发 cached
 * ⚠️ 以上行为以 已有 manifest 缓存为前期
 */

window.applicationCache.oncached = function () {
    alert('cached');
}

window.applicationCache.onobsolete = function () {
    alert('obsolete')
}

window.applicationCache.onerror = function () {
    alert('error')
}

