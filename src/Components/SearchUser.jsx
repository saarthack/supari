import React, { useContext, useState } from 'react'
import { MemberContext } from '../Context/Context'


const SearchUser = () => {

    const [memberData, setMemberData] = useContext(MemberContext)
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(memberData);
    

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setQuery(searchText);
        const filtered = memberData.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
      };
    
    return (
        <div className='p-5'>
            <input onChange={handleSearch} type="text" placeholder='Search' className='bg-[#2C2C2C] font-sm w-full py-1 pb-2 font-semibold outline-none px-3 placeholder:font-medium placeholder:text-xs rounded' />
            <div className='py-2 mt-5'>
                {filteredData.map(function (member,idx) {
                    return <h1 key={idx} className='bg-[#2C2C2C] rounded py-1.5 px-3 mb-2 text-lg font-bold text-gray-400'>{member.name}</h1>
                })}
            </div>
        </div>
    )
}

export default SearchUser