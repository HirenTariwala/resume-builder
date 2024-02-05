import React from 'react';
import { TitleProps } from './types';

function TitleContainer(props: TitleProps) {
  const { name, title } = props;
  return (
    <div className={`flex flex-col mt-3 text-left pb-2`}>
      <p className={`text-[40px] font-medium capitalize`}>
        {name.length === 0 ? 'Luke Ronchi' : name}
      </p>
      <p className={`font-bold text-[1rem] ml-[2px] capitalize`}>
        {title.length === 0 ? 'UI/UX Designer' : title}
      </p>
    </div>
  );
}

export default TitleContainer;