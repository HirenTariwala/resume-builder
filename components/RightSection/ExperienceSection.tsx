import React from 'react';
interface data {
  designation: string;
  project: string;
  projectDetails: string;
  date: string;
  responsibility: string;
  primaryColor: string;
  secondaryColor: string;
}

interface props {
  data: data[];
  date: string;
  designation: string;
  project: string;
  responsibility: string;
  projectDetails: string;
  primaryColor: string;
  secondaryColor: string;
}

function ExperienceSection(props: props) {
  const {
    data,
    designation,
    date,
    project,
    projectDetails,
    responsibility,
    primaryColor,
    secondaryColor,
  } = props;
  return (
    <>
      <h1 className={`font-bold text-2xl`}>Experience</h1>
      {data.length === 0 ? (
        <div className='flex justify-between'>
          <div>
            <p className='font-bold text-xl'>
              {designation.length === 0 ? 'Frontend' : designation}
            </p>
            <p className='font-bold text-md'>
              {project.length === 0 ? 'Sales' : project}
            </p>
            <p className='font-bold text-sm w-60'>
              {responsibility.length === 0 ? 'Responsibility' : responsibility}
            </p>
            <p className='w-60 text-gray-500 text-xs'>
              {projectDetails.length === 0
                ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit Officiis beatae'
                : projectDetails}
            </p>
          </div>
          <div className={`h-fit p-2 bg-black mr-4`}>
            <p className='text-sm text-white'>
              {date.length === 0 ? '2013 to 2015' : date}
            </p>
          </div>
        </div>
      ) : (
        data?.map((val, ind) => (
          <div key={ind} className='flex justify-between mb-2'>
            <div>
              <p className='font-bold text-xl'>{val?.designation}</p>
              <p className='font-bold text-sm'>{val?.project}</p>
              <p className='font-bold text-sm'>{val?.responsibility}</p>
              <p className='w-60 text-gray-500 text-xs'>
                {val?.projectDetails}
              </p>
            </div>{' '}
            <div className={`h-fit p-2 bg-black mr-4`}>
              <p className='text-sm text-white'>{val?.date}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default ExperienceSection;
