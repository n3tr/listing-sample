function getListing() {

  // see https://github.com/github/fetch
  // return fetch(...).then((response) => {
  //   return response.json()
  // })

  return fetch('http://172.16.0.116:9200/kd/listing/_search?_source=title,detail,thumbnail',
          {
            method: 'POST',
            headers: {
              'Origin': 'chrome-extension://lhjgkmllcaadmopgmanpapmpjgmfcfig'
            },
            body: JSON.stringify(
            {
              "query": {
                  "bool": {
                      "should": [
                         {"match": {
                            "detail": "ชายหาด"
                         }},
                         {"match": {
                            "title": "ชายหาด"
                         }}
                      ]
                  }
              },
            "highlight" : {
                "fields" : {
                    "detail" : {"type" : "plain"}
                }
            }
          })
        })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          const listing = json.hits.hits.map((item) => {
            const url = item._source.thumbnail.replace('/t/', '/m/')
            console.log('url:', url);
            return {
              'id': item._id,
              'title': item._source.title,
              'detail': item._source.detail,
              'thumbnail': 'https://i2.24x7th.com/df/0/' + url,
              'highlight': item.highlight.detail[0],
            }
          })
          return listing
        })
        .catch((err) => {
          console.log('err', err)
        })


  // TODO: Remove code below
  // Dummy fetch promise
  // return new Promise(function(resolve, reject){
  //   const mockJsonResponse = [
  //     {
  //       id: 1,
  //       title: "Mock Title 1"
  //     },
  //     {
  //       id: 2,
  //       title: "Mock Title 2 "
  //     },
  //     {
  //       id: 3,
  //       title: "Mock Title 3"
  //     },{
  //       id: 4,
  //       title: "Mock Title 4"
  //     }
  //   ]
  //
  //   setTimeout(() => {
  //     resolve(mockJsonResponse)
  //   }, 1000)
  // })
  // TODO: // Remove

}

export default getListing
