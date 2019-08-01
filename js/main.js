/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------



function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function readResponseAsBlob(response) {
  return response.blob();
}

function readResponseAsText(response) {
  return response.text();
}

function showImage(responseAsBlob) {
  const container = document.getElementById('img-container');
  const imgElem = document.createElement('img');
  container.appendChild(imgElem);
  const imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
}

function showText(responseAsText) {
  const message = document.getElementById('message');
  message.textContent = responseAsText;
}

function logSize(response) {
  const url = response.url;
  const size = response.headers.get('content-length');
  console.log(`${url} is ${size} bytes`);
}


// Fetch JSON ----------

function fetchJSON(p) {
  fetch(p)
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(logResult)
    .catch(logError);
}



// Fetch Image ----------

function fetchImage() {
  fetch('examples/fetching.jpg')
    .then(validateResponse)
    .then(readResponseAsBlob)
    .then(showImage)
    .catch(logError);
}


// Fetch text ----------

function fetchText() {
  fetch('examples/words.txt')
    .then(validateResponse)
    .then(readResponseAsText)
    .then(showText)
    .catch(logError);
}


// HEAD request ----------

function headRequest() {
  fetch('examples/words.txt', {
    method: 'HEAD'
  })
    .then(validateResponse)
    .then(logSize)
    .catch(logError);
}



// POST request ----------

/* NOTE: Never send unencrypted user credentials in production! */
function postRequest() {
  const formData = new FormData(document.getElementById('msg-form'));
  const messageHeaders = new Headers({
    'Content-Type': 'application/json',
    // 'Content-Length': 'kittens' // Content-Length can't be modified!
    'X-Custom': 'hello world',
    // 'Y-Custom': 'this will not work' // Y-Custom is not accepted by our echo server!
  })
  fetch('http://localhost:5000/', {
    method: 'POST',
    // body: formData,
    body: JSON.stringify({ lab: 'fetch', status: 'fun' }),
    headers: messageHeaders
  })
    .then(validateResponse)
    .then(readResponseAsText)
    .then(showText)
    .catch(logError);
}

/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
  }

  var dbPromise = idb.open('couches-n-things', 5, function(upgradeDb) {
    switch (upgradeDb.oldVersion) {
      case 0:
        // a placeholder case so that the switch block will
        // execute when the database is first created
        // (oldVersion is 0)
      case 1:
        console.log('Creating the products object store');
        upgradeDb.createObjectStore('news', {keyPath: 'id'});
    }
  });

  function addProducts(items) {
    dbPromise.then(function(db) {
      var tx = db.transaction('news', 'readwrite');
      var store = tx.objectStore('news');
      return Promise.all(items.map(function(item) {

          console.log('Adding article: ', item);
          return store.put(item);
        })
      ).catch(function(e) {
        tx.abort();
        console.log(e);
      }).then(function() {
        console.log('All items added successfully!');
      });
    });
  }

  


