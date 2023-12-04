let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (Math.random() >= 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

myPromise
  .then(function() {
    console.log('success');
  })
  .catch(function() {
    console.log('fail');
  })
  .finally(function() {
    console.log('complete')
  });













