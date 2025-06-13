import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdPersonOutline,
  MdAccessTime,
  MdWorkOutline,
  MdEmojiEvents,
  MdSchool,
  MdAccountBalanceWallet,
  MdLocationOn,
} from 'react-icons/md';

export default function JobOverviewCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFF8EE] rounded-[28px] px-4 sm:px-7 pt-7 pb-2 flex flex-col shadow-sm min-w-0">
      <h3 className="font-bold text-xl mb-5">Job Overview</h3>
      <ul className="space-y-6 text-base">
        <li className="flex items-start gap-4">
          <MdPersonOutline className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Department</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.department}
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MdAccessTime className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Job Type</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.type}
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MdWorkOutline className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Category</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.category}
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MdEmojiEvents className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Experience</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.experience}
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MdSchool className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Degree</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.degree}
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MdAccountBalanceWallet className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Offered Salary</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.salary}
            </div>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <MdLocationOn className="w-7 h-7 text-[#F2B600] mt-0.5" />
          <div>
            <div className="font-bold">Location</div>
            <div className="text-gray-500 font-normal -mt-1 text-[16px]">
              {job.location}
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-10 mb-4 flex">
        <button
          onClick={() => navigate('/jobs')}
          className="bg-[#F2B600] hover:bg-[#FFD234] w-full text-white font-semibold text-lg py-3 rounded-xl transition-all duration-150"
        >
          Search for a Job
        </button>
      </div>
    </div>
  );
}
