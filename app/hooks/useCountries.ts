/*import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}));

const countries = [
    { label: 'Thamel', value: 'thamel', lat: 27.7156, lng: 85.3123 },
    { label: 'Boudhanath', value: 'boudhanath', lat: 27.7215, lng: 85.3620 },
    { label: 'Patan', value: 'patan', lat: 27.6761, lng: 85.3142 },
    { label: 'Bhaktapur', value: 'bhaktapur', lat: 27.6710, lng: 85.4298 },
    { label: 'Durbar Marg', value: 'durbar-marg', lat: 27.7134, lng: 85.3190 },
    { label: 'Baneshwor', value: 'baneshwor', lat: 27.6925, lng: 85.3420 },
    { label: 'Koteshwor', value: 'koteshwor', lat: 27.6857, lng: 85.3497 },
];
*/

const countries = [
    { label: 'Naxal', value: 'naxal', lat: 27.7190, lng: 85.3260, region: 'Northern Kathmandu' },
    { label: 'Lazimpat', value: 'lazimpat', lat: 27.7223, lng: 85.3240, region: 'Northern Kathmandu' },
    { label: 'Maharajgunj', value: 'maharajgunj', lat: 27.7360, lng: 85.3305, region: 'Northern Kathmandu' },
    { label: 'Baluwatar', value: 'baluwatar', lat: 27.7280, lng: 85.3360, region: 'Northern Kathmandu' },
    { label: 'Handigaun', value: 'handigaun', lat: 27.7265, lng: 85.3430, region: 'Northern Kathmandu' },
    { label: 'Bauddha', value: 'bauddha', lat: 27.7215, lng: 85.3620, region: 'Eastern Kathmandu' },
    { label: 'Mitrapark', value: 'mitrapark', lat: 27.7160, lng: 85.3500, region: 'Eastern Kathmandu' },
    { label: 'Pashupati', value: 'pashupati', lat: 27.7100, lng: 85.3460, region: 'Eastern Kathmandu' },
    { label: 'Gaushala', value: 'gaushala', lat: 27.7080, lng: 85.3400, region: 'Eastern Kathmandu' },
    { label: 'Baneshwor', value: 'baneshwor', lat: 27.6925, lng: 85.3420, region: 'Eastern Kathmandu' },
    { label: 'Tripureshwor', value: 'tripureshwor', lat: 27.6940, lng: 85.3150, region: 'Southern Kathmandu' },
    { label: 'Teku', value: 'teku', lat: 27.6890, lng: 85.3060, region: 'Southern Kathmandu' },
    { label: 'Kalimati', value: 'kalimati', lat: 27.7005, lng: 85.2910, region: 'Southern Kathmandu' },
    { label: 'Kalanki', value: 'kalanki', lat: 27.6935, lng: 85.2812, region: 'Western Kathmandu' },
    { label: 'Dallu', value: 'dallu', lat: 27.7020, lng: 85.2950, region: 'Western Kathmandu' },
    { label: 'Swoyambhu', value: 'swoyambhu', lat: 27.7150, lng: 85.2900, region: 'Western Kathmandu' },
    { label: 'Kshetrapati', value: 'kshetrapati', lat: 27.7080, lng: 85.3100, region: 'Central Kathmandu' },
    { label: 'Nard Devi', value: 'nard-devi', lat: 27.7105, lng: 85.3170, region: 'Central Kathmandu' },
    { label: 'Damaichok', value: 'damaichok', lat: 27.7060, lng: 85.3200, region: 'Central Kathmandu' },
    { label: 'Bhimsensthan', value: 'bhimsensthan', lat: 27.7010, lng: 85.3130, region: 'Central Kathmandu' },
    { label: 'Asan', value: 'asan', lat: 27.7070, lng: 85.3120, region: 'Central Kathmandu' },
    { label: 'Indrachok', value: 'indrachok', lat: 27.7085, lng: 85.3110, region: 'Central Kathmandu' },
    { label: 'Kel Tole', value: 'kel-tole', lat: 27.7065, lng: 85.3090, region: 'Central Kathmandu' },
    { label: 'Thamel', value: 'thamel', lat: 27.7156, lng: 85.3123, region: 'Central Kathmandu' },
    { label: 'Bagbazar', value: 'bagbazar', lat: 27.7040, lng: 85.3190, region: 'Central Kathmandu' },
    { label: 'Dillibazar', value: 'dillibazar', lat: 27.7045, lng: 85.3270, region: 'Central Kathmandu' },
    { label: 'Putalisadak', value: 'putalisadak', lat: 27.7025, lng: 85.3250, region: 'Central Kathmandu' },
    { label: 'Gyaneshwor', value: 'gyaneshwor', lat: 27.7120, lng: 85.3300, region: 'Eastern Kathmandu' },
    { label: 'Chhetrapati', value: 'chhetrapati', lat: 27.7140, lng: 85.3080, region: 'Central Kathmandu' },
    { label: 'Dharahara', value: 'dharahara', lat: 27.7000, lng: 85.3170, region: 'Central Kathmandu' },
    { label: 'Sundhara', value: 'sundhara', lat: 27.6980, lng: 85.3160, region: 'Central Kathmandu' },
    { label: 'Kamaladi', value: 'kamaladi', lat: 27.7090, lng: 85.3210, region: 'Central Kathmandu' },
  ];

const formattedCountries = countries.map((country) => ({
    value: country.value,
    region: country.region,
    label: country.label,
    latlng: [country.lat, country.lng], // Combine lat and lng into an array
}));


const useCountries = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === value);
    }

    return {
        getAll,
        getByValue
    }
};

export default useCountries;