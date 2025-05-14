import React, { useState, useEffect } from 'react';
import useaxiousSecure from '../useaxiousSecure';
import { useQuery } from '@tanstack/react-query';
import ShowAllProperty from './ShowAllProperty';
import { Typewriter } from 'react-simple-typewriter'

const AllProperty = () => {
    const axiosSecure = useaxiousSecure();
    const { refetch, data: verifiedProperties = [] } = useQuery({
        queryKey: ['verifiedProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allproperty');
            return res.data;
        }
    });

    console.log(verifiedProperties);

    const [property, setProperty] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        setProperty(verifiedProperties);
    }, [verifiedProperties]);

    const handleSearch = () => {
        const filteredProperty = verifiedProperties.filter((property) =>
            property?.location.toLowerCase().includes(searchValue.toLowerCase())
        );
        setProperty(filteredProperty);
    };

    const handleSort = (order) => {
        let sortedProperty = [...verifiedProperties];
        if (order === "asc") {
            sortedProperty.sort((a, b) => parseFloat(a.minPrice) - parseFloat(b.minPrice));
        } else if (order === "desc") {
            sortedProperty.sort((a, b) => parseFloat(b.minPrice) - parseFloat(a.minPrice));
        }
        setProperty(sortedProperty);
    };

    useEffect(() => {
        if (sortOrder) {
            handleSort(sortOrder);
        }
    }, [sortOrder, verifiedProperties]);

    return (
        <div className=''>
            <div className='text-center pt-16 md:pt-24 lg:pt-44'>
                <h1 className='text-3xl font-bold text-transparent bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4] bg-clip-text mt-5'>
                    Here is  <Typewriter words={['ALL Property Verified By Admin !!']}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={90}
                      deleteSpeed={50}
                      delaySpeed={1300}
                    ></Typewriter> 
                </h1>
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14">
                <div className=''>
                    <input
                        className="shadow-md outline-none bg-gray-100 px-4  lg:px-6 py-3 mt-3 md:mt-5 rounded-s-lg "
                        placeholder="Search here"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="shadow-md border px-2 py-3 rounded-e-lg  font-bold  bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div>
                    <select
                        className="shadow-md md:mt-5  px-4 py-3  rounded font-bold  bg-gradient-to-r from-[#3B9DF8] to-[#3BE8C4]  text-white"
                        value={sortOrder}
                        onChange= {(e) => setSortOrder(e.target.value)}
                    >
                        
                        <option className='text-blue-600' value="asc">Ascending</option>
                        <option className='text-blue-600' value="desc">Descending</option>
                    </select>
                </div>
            </div>
            <div className='mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    property?.map(property => (
                        <ShowAllProperty key={property._id} property={property} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllProperty;
