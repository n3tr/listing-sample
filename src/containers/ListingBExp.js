
import fetchableListing from './fetchableListing'
import Listing from '../components/Listing'

function fetchFunction() {
  // Do real request
  // return fetch('...').then( (response) => response.json )

  // TODO: Remove
  return new Promise(function(resolve, reject){
    const json = [
      {
        id: 10,
        title: 'YOLO 1'
      },
      {
        id: 11,
        title: 'YOLO 2'
      },
      {
        id: 12,
        title: 'YOLO 3'
      },
      {
        id: 12,
        title: 'YOLO 4'
      }
    ]

    setTimeout(function(){
      resolve(json)
    }, 2000)
  })
}

const ListingBExp = fetchableListing(Listing, fetchFunction)
export default ListingBExp
