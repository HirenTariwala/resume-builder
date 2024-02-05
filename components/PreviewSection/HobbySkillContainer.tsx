import React from 'react';
import { HobbySkillProps } from './types';
function HobbySkillContainer(props: HobbySkillProps) {
  const { skills, hobbies } = props;
  return (
    <div className={`mt-8 w-[40%] flex flex-col gap-6`}>
      <div>
        <p className='text-[20px] font-bold uppercase tracking-wider'>skills</p>
        <ul className='text-base capitalize'>
          {skills
            ?.filter((e) => e?.data !== '')
            ?.map((skill, index) => {
              return <li key={index}>{skill.data}</li>;
            })}
        </ul>
      </div>

      <div>
        <p className='text-[20px] font-bold uppercase tracking-wider'>
          hobbies
        </p>
        <ul className='text-base capitalize'>
          {hobbies
            ?.filter((hobbies) => hobbies.data !== '')
            .map((hobbies, index) => {
              return <li key={index}>{hobbies.data}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default HobbySkillContainer;