import EmptyState from "../components/EmptyState";
import ClientOnly from '../components/ClientOnly';

import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
    const listings = await getFavoritesListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No favourites found"
                subtitle="Looks like you have no favorite parking spots. "
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <FavoritesClient
            listings={listings}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage;