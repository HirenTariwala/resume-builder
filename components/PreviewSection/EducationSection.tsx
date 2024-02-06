import React from 'react';
import { EducationProps } from './types';

function EducationSection(props: EducationProps) {
  const { educationData } = props;
  return (
    <>
      <p className='text-[20px] font-bold uppercase tracking-wider'>
        Education
      </p>
      {educationData?.map((val, index) => (
        <div key={index} className='flex justify-between m-[10px_0px]'>
          <div>
            <p className='font-bold text-lg'>
              {!val?.university && educationData.length <= 1
                ? 'University'
                : val.university}
            </p>
            <p className='font-semibold text-sm'>
              {!val?.degree && educationData.length <= 1 ? '60%' : val?.degree}
            </p>
          </div>
          <label className='italic text-base font-bold text-gray-700'>
            {(!val?.graduationStartYear && educationData.length <= 1
              ? '2013'
              : val.graduationStartYear) +
              ' - ' +
              (!val?.graduationEndYear && educationData.length <= 1
                ? '2020'
                : val.graduationEndYear)}
          </label>
        </div>
      ))}
    </>
  );
}

export default EducationSection;