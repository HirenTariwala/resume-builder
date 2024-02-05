import React from 'react';
import { ExperienceProps } from './types';

function ExperienceSection(props: ExperienceProps) {
  const { experiencesData } = props;
  return (
    <>
      <label className='text-[20px] font-bold uppercase tracking-wider'>
        Work Experience
      </label>
      {experiencesData?.map((val, ind) => (
        <div key={ind} className='m-[10px_0px]'>
          <p className='font-bold text-lg capitalize break-words'>
            {!val?.designation && experiencesData.length <= 1
              ? 'Frontend'
              : val.designation}
          </p>
          <div className='flex justify-between'>
            <p className='font-medium text-lg capitalize break-words'>
              {!val?.project && experiencesData.length <= 1
                ? 'Sales'
                : val.project}
            </p>
            <label className='italic text-base font-bold text-gray-700'>
              {(!val?.startYear && experiencesData.length <= 1
                ? '2013'
                : val.startYear) +
                ' - ' +
                (!val?.endYear && experiencesData.length <= 1
                  ? '2020'
                  : val.endYear)}
            </label>
          </div>
          <div
            className='mb-2 text-justify text-sm mt-[5px]'
            dangerouslySetInnerHTML={{ __html: val?.projectDetails }}
          ></div>
          <p className='font-bold text-base mb-1'>Responsibility</p>
          <div
            className='whitespace-pre-line max-w-2xl text-justify text-sm break-words'
            dangerouslySetInnerHTML={{ __html: val?.responsibility }}
          ></div>
        </div>
      ))}
    </>
  );
}

export default ExperienceSection;
