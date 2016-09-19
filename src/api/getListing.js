function getListing() {

  // see https://github.com/github/fetch
  // return fetch(...).then((response) => {
  //   return response.json()
  // })

  // 'http://172.16.0.116:9200/kd/listing/_search?_source=title,detail,thumbnail'

  return fetch('http://localhost:5000/kd',
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
          console.log('json', json);
          const listing = json.hits.hits.map((item) => {
            const url = item._source.thumbnail.replace('/t/', '/m/')
            console.log(item._id);
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

}

export default getListing
