import React, { useState, useRef, useEffect, useCallback } from 'react';
import { download, drop, filter, menLogo } from '../../constants';

const CustomDropdown = ({ selected, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Completed', 'Process', 'Opened'];
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border p-2 rounded-[12px] bg-[#5A75BE] w-full md:w-[155px] h-[40px] text-white flex justify-between items-center"
      >
        {selected}
        <img src={drop} alt="Arrow" className="ml-2 pd-2" />
      </button>
      {isOpen && (
        <ul className="absolute bg-white border mt-1 rounded-[12px] shadow-lg w-full">
          {options.map((option, index) => (
            <li
              key={option}
              onClick={() => { handleSelect(option); setIsOpen(false); }}
              className={`p-2 hover:bg-gray-200 cursor-pointer border-b ${index === options.length - 1 ? 'border-none' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const dummyData = {
  opdDiagnostics: [
    { date: '30 May 2024', name: 'Name Surname', prescriptionId: '57007284', location: 'Chandigarh', type: 'OPD Diagnostics', time: '04:41:44', status: 'Opened' },
  ],
  doctorConsulting: [
    { date: '30 May 2024', name: 'Name Surname', prescriptionId: '57007285', location: 'Chandigarh', type: 'Doctor Consulting', time: '04:42:44', status: 'Process' },
  ],
  prescription: [
    { date: '30 May 2024', name: 'Name Surname', prescriptionId: '57007286', location: 'Chandigarh', type: 'Prescription', time: '04:43:44', status: 'Completed' },
  ]
};

const Tickets = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    opdDiagnostics: true,
    doctorConsulting: false,
    prescription: false
  });
  const [showDatePopup, setShowDatePopup] = useState(null);
  const [sortOrder, setSortOrder] = useState('Ascending');
  const [amPm, setAmPm] = useState('AM');
  const [selectedStatus, setSelectedStatus] = useState('Completed');
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    time: '',
    gender: '',
    priority: '',
    status: 'Completed'
  });
  const filterRef = useRef(null);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectStatus = (option) => {
    setFilters(prevFilters => ({ ...prevFilters, status: option }));
    setSelectedStatus(option);
  };

  const handleTimeChange = (event) => {
    const time = event.target.value;
    const [hours] = time.split(':').map(Number);
    setAmPm(hours >= 12 ? 'PM' : 'AM');
    setFilters(prevFilters => ({ ...prevFilters, time }));
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const handleShowResults = useCallback(() => {
    let combinedData = [
      ...dummyData.opdDiagnostics,
      ...dummyData.doctorConsulting,
      ...dummyData.prescription
    ];

    let filteredResults = combinedData.filter(ticket => {
      return (
        (!filters.date || ticket.date === filters.date) &&
        (!filters.time || ticket.time.includes(filters.time)) &&
        (!filters.gender || ticket.gender === filters.gender) &&
        (!filters.priority || ticket.priority === filters.priority) &&
        (!filters.status || ticket.status === filters.status)
      );
    });

    if (sortOrder === 'Descending') {
      filteredResults.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      filteredResults.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredData(filteredResults);
  }, [filters, sortOrder]);

  const handleAvatarClick = (date) => {
    if (showDatePopup === date) {
      setShowDatePopup(null);
    } else {
      setShowDatePopup(date);
    }
  };

  useEffect(() => {
    handleShowResults();
  }, [filters, selectedOptions, handleShowResults]);

  const getTitle = () => {
    if (selectedOptions.opdDiagnostics) return 'Diagnostics Tickets';
    if (selectedOptions.doctorConsulting) return 'Consultation Tickets';
    if (selectedOptions.prescription) return 'Prescription Tickets';
  };

  return (
    <div className="flex">
      <div className="lg:w-20 h-full bg-gray-200"></div>
      <div className="flex flex-col w-full p-6 space-y-6">
        <div className="bg-white shadow-md p-4 rounded-[20px]">
          <div className="flex overflow-x-auto space-x-4">
            <button className={`py-2 px-4 rounded-[10px] ${selectedOptions.opdDiagnostics ? 'bg-[#EFF3FF]' : 'bg-white'} w-full md:w-auto`} onClick={() => setSelectedOptions({ opdDiagnostics: true, doctorConsulting: false, prescription: false })}>Diagnostics</button>
            <button className={`py-2 px-4 rounded-[10px] ${selectedOptions.doctorConsulting ? 'bg-[#EFF3FF]' : 'bg-white'} w-full md:w-auto`} onClick={() => setSelectedOptions({ opdDiagnostics: false, doctorConsulting: true, prescription: false })}>Consultation</button>
            <button className={`py-2 px-4 rounded-[10px] ${selectedOptions.prescription ? 'bg-[#EFF3FF]' : 'bg-white'} w-full md:w-auto`} onClick={() => setSelectedOptions({ opdDiagnostics: false, doctorConsulting: false, prescription: true })}>Prescription</button>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg w-full">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold">{getTitle()}</h2>
            <div className="flex space-x-2">
              <button className="relative group">
                <img src={download} alt="Download" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 pt-30 bg-white shadow-lg rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Download in Excel
                </div>
              </button>
              <button onClick={toggleFilter} className="flex items-center space-x-1 bg-[#E8EEFF] p-1 rounded-[5px]">
                <span>Filter</span>
                <img src={filter} alt="Filter" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Prescription ID</th>
                  <th className="px-6 py-3">Location</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((ticket, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 relative">
                          <img className="h-10 w-10 rounded-full cursor-pointer" src={menLogo} alt="Avatar" onClick={() => handleAvatarClick(ticket.date)} />
                          {showDatePopup === ticket.date && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white shadow-lg rounded-md text-sm">
                              {ticket.date}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.prescriptionId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{ticket.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.status === 'Opened' ? 'bg-blue-100 text-blue-800' : ticket.status === 'Process' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showFilter && (
          <div ref={filterRef} className="absolute top-10 right-0 mt-20 w-70 bg-white shadow-md p-6 rounded-[15px] z-10">
            <h3 className="text-lg font-bold mb-3">Filter Tickets</h3>
            <div className="flex mb-4 bg-gray-200 rounded-[13px] w-full h-[40px]">
              <button
                className={`py-1 px-6 rounded-l-[13px] w-1/2 ${sortOrder === 'Ascending' ? 'bg-[#5A75BE] text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setSortOrder('Ascending')}
              >
                Ascending
              </button>
              <button
                className={`py-2 px-6 rounded-r-[13px] w-1/2 ${sortOrder === 'Descending' ? 'bg-[#5A75BE] text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => setSortOrder('Descending')}
              >
                Descending
              </button>
            </div>
            <div className="flex mb-5">
              <div className="flex flex-col w-1/2 mr-1">
                <label className="mb-3">Date</label>
                <input type="date" name="date" className="border p-1 rounded-[13px]" onChange={handleFilterChange} />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-3">Time</label>
                <div className="relative flex items-center">
                  <input
                    type="time"
                    name="time"
                    className="border p-1 w-full pr-10 rounded-[13px]"
                    onChange={handleTimeChange}
                  />
                  <div
                    className="absolute right-0 h-full flex items-center px-2 bg-[#5A75BE] text-white rounded-r-[13px] cursor-pointer"
                    onClick={() => setAmPm(amPm === "AM" ? "PM" : "AM")}
                  >
                    {amPm}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Gender</label>
              <div className="flex items-center">
                <input type="radio" name="gender" value="Male" className="form-radio h-5 w-5 border-2 border-[#F5F5F5] checked:bg-blue-500 checked:border-blue-500" onChange={handleFilterChange} />
                <span className="ml-1">Male</span>
                <input type="radio" name="gender" value="Female" className="form-radio ml-4 h-5 w-5 border-2 border-[#F5F5F5] checked:bg-blue-500 checked:border-blue-500" onChange={handleFilterChange} />
                <span className="ml-1">Female</span>
              </div>
            </div>
            <hr className="border-black mb-2" />
            <div className="mb-2">
              <label className="block mb-2">Priority</label>
              <div className="flex items-center mb-5">
                <input type="radio" name="priority" value="High" className="form-radio h-5 w-5 border-2 border-[#F5F5F5] checked:bg-blue-500 checked:border-blue-500" onChange={handleFilterChange} />
                <span className="ml-1">High</span>
                <input type="radio" name="priority" value="Medium" className="form-radio h-5 w-5 border-2 border-[#F5F5F5] ml-3 checked:bg-blue-500 checked:border-blue-500" onChange={handleFilterChange} />
                <span className="ml-1">Medium</span>
                <input type="radio" name="priority" value="Low" className="form-radio h-5 w-5 border-2 border-[#F5F5F5] ml-3 checked:bg-blue-500 checked:border-blue-500" onChange={handleFilterChange} />
                <span className="ml-1">Low</span>
              </div>
            </div>
            <div className="flex mb-2 items-center">
              <label className="mr-5">Status</label>
              <CustomDropdown selected={selectedStatus} handleSelect={handleSelectStatus} />
            </div>
            <button className="bg-[#5A75BE] w-full text-center h-[45px] text-white pt-2 pb-2 rounded-[14px] mt-5" onClick={handleShowResults}>Show Results</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;