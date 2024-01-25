import React from 'react';
interface data {
  educationData: string;
  university: string;
  graduationDate: string;
  grade: string;
  primaryColor: string;
  secondaryColor: string;
}

interface props {
  educationData: data[];
  university: string;
  graduationDate: string;
  grade: string;
  primaryColor: string;
  secondaryColor: string;
}
function EducationSection(props: props) {
  const {
    educationData,
    university,
    grade,
    graduationDate,
    primaryColor,
    secondaryColor,
  } = props;
  return (
    <>
      <h1 className={`font-bold text-2xl`}>Education</h1>
      {educationData.length === 0 ? (
        <div className='flex justify-between pb-4'>
          <div>
            <p className='font-bold text-xl'>
              {university.length === 0 ? 'University' : university}
            </p>
            <p className='font-bold text-sm'>
              {grade.length === 0 ? '60%' : grade}
            </p>
          </div>
          <div className={`h-fit p-2 bg-black mr-4`}>
            <p className='text-sm text-white'>
              {graduationDate.length === 0 ? '2013 to 2015' : graduationDate}
            </p>
          </div>
        </div>
      ) : (
        educationData?.map((val, ind) => (
          <div key={ind} className='flex justify-between pb-4'>
            <div>
              <p className='font-bold text-xl'>{val?.university}</p>
              <p className='font-bold text-sm'>{val?.grade}</p>
            </div>{' '}
            <div className={`h-fit p-2 bg-black mr-4`}>
              <p className='text-sm text-white'>{val?.graduationDate}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default EducationSection;
