'use client';

import { formatISO } from "date-fns";
import queryString from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";

import Modal from "./Modal";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Heading from "../Heading";

import useSearchModal from "@/app/hooks/useSearchModal";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import Button from "../Button";

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}


const SearchModal = () => {
    const router = useRouter();
    const params = useSearchParams();
    const searchModal = useSearchModal();

    const [location, setLocation] = useState<CountrySelectValue>()
    const [step, setStep] = useState(STEPS.LOCATION);
    const [carCount, setCarCount] = useState(0);
    const [bikeCount, setBikeCount] = useState(0);
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false,
    }), [location]);

    const onBack = useCallback(() => {
        setStep((value) => value - 1);
    }, []);

    const onNext = useCallback(() => {
        setStep((value) => value + 1);
    }, []);

    const onSubmit = useCallback(async() => {
        if (step !== STEPS.INFO) {
            return onNext();
        }

        let currentQuery = {};

        if (params) {
            currentQuery = queryString.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            locationValue: location?.value,
            carCount,
            bikeCount
        };

        if (dateRange.startDate) {
            updatedQuery.startDate = formatISO(dateRange.startDate);
        }

        if (dateRange.endDate) {
            updatedQuery.endDate = formatISO(dateRange.endDate);
        }

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        setStep(STEPS.LOCATION);
        searchModal.onClose();

        router.push(url);
    }, 
    [
        step,
        searchModal,
        location,
        router,
        bikeCount,
        carCount,
        dateRange,
        onNext,
        params
    ]);

    const actionlabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return 'Search';
        }
        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.LOCATION) {
            return undefined;
        }
        return 'Back';
    },[step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
            title="Where do you wanna go?"
            subtitle="Find the perfect parking spot!"
            />
            <CountrySelect
            value={location}
            onChange={(value) => 
                setLocation(value as CountrySelectValue)
            }
            />
            <hr />
            <Map center={location?.latlng}/>
        </div>
    )

    if (step === STEPS.DATE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                title="When do you plan to go?"
                subtitle="Drive Safe!"
                />
                <Calendar 
                value={dateRange}
                onChange={(value) => setDateRange(value.selection)}
                />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                title="More information"
                subtitle=""
                />
                <Counter
                title="Bike"
                subtitle="Number of bikes:"
                value={bikeCount}
                onChange={(value) => setBikeCount(value)}
                />
                <Counter
                title="Car"
                subtitle="Number of cars:"
                value={carCount}
                onChange={(value) => setCarCount(value)}
                />
            </div>
        )
    }
    
    return ( 
        <Modal
        isOpen={searchModal.isOpen}
        onClose={searchModal.onClose}
        onSubmit={onSubmit}
        title="Filters"
        actionLabel={actionlabel}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
        body={bodyContent}
        />
     );

}
 
export default SearchModal;