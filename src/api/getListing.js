function getListing() {

  // see https://github.com/github/fetch
  // return fetch(...).then((response) => {
  //   return response.json()
  // })


  // TODO: Remove code below
  // Dummy fetch promise
  return new Promise(function(resolve, reject){
    const mockJsonResponse = [
      {
        id: 1,
        title: "Mock Title 1"
      },
      {
        id: 2,
        title: "Mock Title 2 "
      },
      {
        id: 3,
        title: "Mock Title 3"
      },{
        id: 4,
        title: "Mock Title 4"
      }
    ]

    setTimeout(() => {
      resolve(mockJsonResponse)
    }, 1000)
  })
  // TODO: // Remove

}

export default getListing
