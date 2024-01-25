import React from 'react';
interface SkillData {
  skills: string;
}

interface HobbyData {
  hobby: string;
}

interface Props {
  skills: SkillData[];
  skillsDetails: string;
  hobby: HobbyData[];
  hobbyDetails: string;
  primaryColor: string;
  secondaryColor: string;
}
function HobbySkillContainer(props: Props) {
  const { skills, skillsDetails, hobby, hobbyDetails,primaryColor,secondaryColor } = props;
  return (
    <div className={`p-6 pl-[9.7%] w-[40%]`}>
      <h1 className='font-extrabold mt-8'>MY SKILLS</h1>
      {skills.length === 0 ? (
        <div className='font-semibold'>
          <p className='p-1'>
            {skillsDetails.length === 0 ? 'Html' : skillsDetails}
          </p>
        </div>
      ) : (
        skills?.map((skill) => <p className='p-1'>{skill.skills}</p>)
      )}
      <p className='mt-10 font-bold'>HOBBIES</p>
      <div className='flex gap-4  flex-wrap '>
        {hobby.length === 0 ? (
          <div className='font-semibold'>
            <p className='p-1'>
              {hobbyDetails.length === 0 ? 'Html' : hobbyDetails}
            </p>
          </div>
        ) : (
          hobby?.map((hobbies, index) => (
            <p key={index} className='p-1'>
              {hobbies.hobby}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default HobbySkillContainer;
