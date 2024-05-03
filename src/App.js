import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

  const [isOpen,setIsOpen]=useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Function to toggle sidebar

  // Check screen width on initial load and on resize
  

  return (
    <>
    {!isOpen ? (
      <button onClick={() => setIsOpen(!isOpen)}>
          <svg
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>

    )
    :
    (
    <div>
      <div className="flex flex-col h-full w-80 bg-white text-black border mt-14">
  
        <nav className='{`${isOpen ? translate-x-0 : translate-x-full} ease-in-out duration-300 `}' >
        
          <ul className="p-8 flex gap-6 flex-col">
            <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faGrip} className="mt-3 text-xl" />
              <li className="py-2 px-4 text-xl cursor-pointer">
                My Dashboard
              </li>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="mt-3 text-xl"
              />
            </div>
            <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faLink} className="mt-3 text-xl" />
              <li className="py-2 px-4 text-xl cursor-pointer">
                TOTM Links
              </li>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="mt-3 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faGrip} className="mt-3 text-xl" />
              <li className="py-2 px-4 text-xl cursor-pointer">
                Daily Summary
              </li>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="mt-3 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3 bg-slate-300 rounded-md">
              <FontAwesomeIcon
                icon={faBuildingColumns}
                className="mt-3 text-xl"
              />
              <li className="py-2 px-4 text-xl cursor-pointer">
                Bank Details
              </li>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="mt-3 text-xl"
              />
            </div>
          </ul>
        </nav>
      </div>
    </div>
     )
    }
    </>
  );
};

const BankDetails = () => {
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    routingNumber: '',
    // Add more fields as needed
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Logic to save bank details
    console.log('Bank details saved:', bankDetails);
    setIsSubmitted(true);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col mt-16 max-w-[1050px] gap-8 ">
        <h2 className="text-3xl font-semibold mt-5 ml-28 ">
          Update Bank Details
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <div>
              Sed ut percepient unde osmisiste natus error sit volumptep
              accusatism doloremque lanudatium, totam rem
              <br />
              aperiam, eaque ipsa quae illo inversters verfcel renfgers et
              quaiso architecto breail
            </div>
            <div className="flex flex-col border p-5 justify-between mt-7 ">
              <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
                <h2>Account Holder Name</h2>
                <input
                  type="text"
                  name="accountholdername"
                  value={bankDetails.accountholdername}
                  onChange={handleChange}
                  required={true}
                  placeholder="Account Holder Name"
                  className="border rounded-md px-4  py-2 mb-2 w-[60%]"
                />
              </div>
              <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
            <h2>Account Number</h2>
            <input
              type="text"
              name="accountNumber"
              value={bankDetails.accountNumber}
              required={true}
              onChange={handleChange}
              placeholder="Account Number"
              className="border rounded-md px-4 py-2 mb-2 w-[60%]"
            />

          </div>

          <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
            <h2>IFSC Code</h2>
            <input
              type="text"
              name="ifsccode"
              value={bankDetails.ifsccode}
              required={true}
              onChange={handleChange}
              placeholder="IFSC Code"
              className="border rounded-md px-4 py-2 mb-2 w-[60%]"
            />

          </div>

          <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
            <h2>Bank Name</h2>
            <input
              type="text"
              name="bankname"
              value={bankDetails.bankname}
              onChange={handleChange}
              required={true}
              placeholder="Bank Name"
              className="border rounded-md px-4 py-2 mb-2 w-[60%]"
            />

          </div>

          <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
            <h2>Bank City</h2>
            <input
              type="text"
              name="bankcity"
              value={bankDetails.bankcity}
              required={true}
              onChange={handleChange}
              placeholder="Bank City"
              className="border rounded-md px-4 py-2 mb-2 w-[60%]"
            />

          </div>
          <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
            <h2>Branch Name</h2>
            <input
              type="text"
              name="bracnhname"
              value={bankDetails.branchname}
              required={true}
              onChange={handleChange}
              placeholder="Branch Name"
              className="border rounded-md px-4 py-2 mb-2 w-[60%]"
            />

          </div>
          <div className='flex flex-col lg:justify-between md:justify-between lg:flex-row md:flex-row lg:gap-18 md:gap-12 sm:gap-2'>
            <h2>Relation with holder</h2>
            <input
              type="text"
              name="relation"
              value={bankDetails.relation}
              required={true}
              onChange={handleChange}
              placeholder="Relation with Holder"
              className="border rounded-md px-4 py-2 mb-2 w-[60%]"
            />

          </div>

              {/* Consent */}
              <div className='flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between lg:gap-18 md:gap-12 sm:gap-2'>
                <h2>CONSENT</h2>
                <div className="border flex flex-row p-3 py-6 rounded justify-between">
                  <input
                    type="checkbox"
                    name="consent"
                    value={bankDetails.consent}
                    id="consent"
                    required={true}
                    className=" text-lg mb-7 mr-8"
                  />
                  <label htmlFor="consent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elis.
                    <br />
                    Maiores incidunt distinctio ipsum quo, voluptate
                    <br />
                    ipsum quo, voluptate dignissimos dolorem! Tempora
                  </label>
                </div>
              </div>
              {/* Save button */}
              <button
                onClick={handleSave}
                className=" cursor-pointer ml-[550px] mt-6 w-[20%] bg-green-500 text-white px-3 py-3 font-bold rounded-md hover:bg-green-600"
                disabled={isSubmitted} // Disable button after submission
              >
                Save
              </button>
            </div>
            {/* Additional information */}
            <div className="mt-5 text-gray-700">
              {isSubmitted && (
                <>
                  THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT, IF
                  ANY OF THESE DETAILS ARE WRONG, PLEASE <br />
                  CONTACT YOUR MANAGER IMMEDIATELY! EMAIL THE SAME TO
                  ACCOUNTS@EXAMBAZAAR.COM!
                  <br />
                  <br />
                  FILLED ON: Date: {new Date().toLocaleDateString()}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleBankDetails = () => {
    {isMobileScreen&& setShowBankDetails(!showBankDetails)}
  };

  const checkScreenWidth = () => {
    setIsMobileScreen(window.innerWidth <= 750); 
  };
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Render sidebar only on large screens */}
      {!isMobileScreen && <Sidebar />}

      {/* Show sidebar toggle button */}
      <div className="fixed z-10 left-4 top-4">
        <button
          onClick={() => { toggleBankDetails(); toggleSidebar(); }}
          className="text-black focus:outline-none p-2"
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>

      {/* Render main content */}
      <div className="flex-1">
        {showBankDetails && <BankDetails />}
      </div>

      {/* Render sidebar on mobile if open */}
      {isMobileScreen && isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default App;
