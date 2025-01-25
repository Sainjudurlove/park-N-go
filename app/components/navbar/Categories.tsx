'use client';

import Container from "../Container";
import { MdElectricBike, MdElectricCar } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { FaCar, FaMotorcycle } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSquareParking } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";

export const categories = [
    {
        label: 'Public',
        icon: FaSquareParking,
        description: 'This is a public parking spot!'
    },
    {
        label: 'Private',
        icon: GiHomeGarage,
        description: 'This is a private parking spot!'
    },
    {
        label: 'Bike',
        icon: FaMotorcycle,
        description: 'Parking Spaces for Bikes!'
    },    
    {
        label: 'Electric Bike',
        icon: MdElectricBike,
        description: 'Parking spaces with charging facilities for Electric Bikes!'
    },
    {
        label: 'Car',
        icon: FaCar,
        description: 'Parking spaces for Cars!'
    },
    {
        label: 'Electric Car',
        icon: MdElectricCar,
        description: 'Parking spaces with charging facilities for Electric Cars!'
    },


]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return ( 
        <Container>
            <div
            className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            "
            >
                {categories.map((item) => (
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    icon={item.icon}
                    />
                ))}
            </div>
        </Container>
        );
}
 
export default Categories;