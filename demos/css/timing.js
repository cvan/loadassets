window.onload = setTimeout(function () {
  var timing = window.performance.timing;
  var pageLoadTime = timing.loadEventEnd - timing.navigationStart;
  var dns = timing.domainLookupEnd - timing.domainLookupStart;
  var connection = timing.connectEnd - timing.connectStart;
  var requestTime = timing.responseEnd - timing.requestStart;
  var fetchTime = timing.responseEnd - timing.fetchStart;
  // console.log(
  //   'User-perceived page loading time: ' + pageLoadTime + ' ms \n' +
  //   'Connection time: ' + connection + ' ms \n' +
  //   'DNS Time: ' + dns + ' ms \n' +
  //   'Request Time: ' + requestTime + ' ms \n' +
  //   'Fetch Time: ' + fetchTime + ' ms \n');
});

// function cssloaded(time) {
//   console.log('CSS loading time: ' + time.toFixed(4) + ' ms');
//   clearInterval(ti);
//   if (window.top !== window) {
//     // If `iframe`d, `postMessage` the result to the parent window.
//     window.top.postMessage({
//       type: 'cssloaded',
//       data: ti
//     }, '*');
//   }
// }
