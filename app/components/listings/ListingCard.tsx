'use client';

import { useRouter } from "next/navigation";
import { Listing, Reservation } from "@prisma/client";

import { SafeUser } from "@/app/types";
import useCountries from "@/app/hooks/useCountries";

interface ListingCardProps {
    data: Listing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionID?: string;
    currentUser?: SafeUser | null;
    
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionID,
    currentUser
}) => {
    const router = useRouter();
    const { getByValue } = useCountries();

    

    return ( 
        <div>
            Listing Card
        </div>
     );
}
 
export default ListingCard;