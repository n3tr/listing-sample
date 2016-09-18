
import fetchableListing from './fetchableListing'
import Listing from '../components/Listing'
import getListing from '../api/getListing'

const ListingAExp = fetchableListing(Listing, getListing)
export default ListingAExp
