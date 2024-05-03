import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-80 bg-white text-black border">
        <div className="flex items-center justify-between px-4 py-3">
          <FontAwesomeIcon icon={faArrowLeft} />
          
        </div>
        <nav >
            <div className="md:hidden lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-black focus:outline-none p-2"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
          <ul className="p-8 flex gap-6 flex-col">
            <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faGrip} className="mt-3 text-xl" />
              <li className="py-2 px-4 text-xl cursor-pointer">
                My Dashboard
              </li>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="mt-3 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faLink} className="mt-3 text-xl" />
              <li className="py-2 px-4 text-xl cursor-pointer">
                TOTM Links
              </li>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="mt-3 text-xl"
              />
            </div>

            <div className="flex flex-row gap-3">
              <FontAwesomeIcon icon={faGrip} className="mt-3 text-xl" />
              <li className="py-2 px-4 text-xl cursor-pointer">
                Daily Summary
              </li>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
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
                icon={faCircleArrowRight}
                className="mt-3 text-xl"
              />
            </div>
          </ul>
        </nav>
      </div>
  );
};

export default Sidebar;
