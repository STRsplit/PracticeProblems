
const fetch = async (url) => {
  return new Promise(reject, resolve){
    http.get(url, (response) => {
      let body = '';
      response.on('data', (data)=> {
        body += JSON.parse(chunk);
      })
      response.on('end', () => {
        resolve(body);
      }
    }).on('error', (err) => {
      reject(err)
    })
  }
}

const ayncFetch = (req, res) => {
  try {
    let promisedData = await fetch(url)
    promisedData.then(data => {
      res.statusCode(200);
      res.write(data);
      res.end()
    })
  } catch(e){
    res.statusCode(500);
    res.write(e);
    res.end();
  }
}

const fetch = (url, callback) => {
  return http({
    url: url,
    path: '',
    method: 'GET'
  }, (response) => {
    let ourData = '';
    response.on(err, (err) => {
      console.log(err)
      callback(err, null);
    })
    response.on(data, (data) => {
      let ourData = '';
      ourData += JSON.parse(chunk);
    })
    response.on(end, () => {
      callback(null, ourData)
    })
  })
}

const ourFetch = (req, res) => {
  fetch(url, (err, data) => {
    if(err){
      res.statusCode(500);
      res.write(err);
      res.end();
    } else {
      res.statusCode(200);
      res.write(data);
      res.end();
    }
  })
}
