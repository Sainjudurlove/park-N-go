'use client';

import { SafeListing, SafeUser } from "../types";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import Container from "../components/Container";

interface FavoritesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
    return ( 
        <Container>
            <Heading
            title="Favorites"
            subtitle="List of spots you have favorited!"
            />
            <div
            className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-col-4
            xl:grid-col-5
            2xl:grid-col-6
            gap-8
            "
            >
                {listings.map((listing) => (
                    <ListingCard
                    currentUser={currentUser}
                    key={listing.id}
                    data={listing}
                    />
                ))}
            </div>
        </Container>
     );
}
 
export default FavoritesClient;