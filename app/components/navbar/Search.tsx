'use client';

import { differenceInDays } from "date-fns";
import { useMemo } from "react";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";

import { useSearchParams } from "next/navigation";
import { BiSearch } from "react-icons/bi";

const Search = () => {
    const searchModal = useSearchModal();
    const params = useSearchParams();
    const { getByValue } = useCountries();

    const locationValue = params?.get('locationValue');
    const startDate = params?.get('startDate');
    const endDate = params?.get('endDate');
    const bikeCount = params?.get('bikeCount');
    const carCount = params?.get('carCount');

    const locationLabel = useMemo(() => {
        if (locationValue) {
            return getByValue(locationValue as string)?.label;
        }
        return 'Location';
    }, [getByValue, locationValue]);

    const durationlabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);
            let diff = differenceInDays(end, start);

            if (diff === 0) {
                diff = 1
            }
            return `${diff} Days`;
        }

        return 'Duration'
    }, [startDate, endDate]);

    const vehicleLabel = useMemo(() => {
        if (carCount && bikeCount) {
            return `${carCount} Car & ${bikeCount} Bike`;
        }
        return 'Vehicle';
    }, [carCount, bikeCount]);
    
    return ( 
        <div
        onClick={searchModal.onOpen}
        className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        "

        >
            <div
            className="
            flex
            flex-row
            items-center
            justify-between
            "
            >
                <div
                className="
                text-sm
                font-semibold
                px-6
                "
                >
                    {locationLabel}
                </div>
                <div
                className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-6
                border-x-[1px]
                flex-1
                text-center
                "
                >
                    {durationlabel}
                </div>
                <div
                className="
                text-sm
                pl-6
                pr-2
                text-grey-600
                flex
                flex-row
                items-center
                gap-3
                "
                >
                    <div className="hidden sm:block">{vehicleLabel}</div>
                    <div
                    className="
                    p-2
                    bg-orange-500
                    rounded-full
                    text-white
                    "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>


            </div>

        </div>
     );
}
 
export default Search;