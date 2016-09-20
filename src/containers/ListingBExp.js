
import fetchableListing from './fetchableListing'
import Listing from '../components/Listing'
import getListing from '../api/getListing'

const ListingAExp = fetchableListing(Listing, getListing.bind(null, "kd_x1"))
export default ListingAExp
