import React from 'react';
interface props {
  name: string;
  title: any;
  primaryColor: string;
  secondaryColor: string;
}

function TitleContainer(props: props) {
  const { name, title, primaryColor, secondaryColor } = props;
  return (
    <div className={`flex flex-col pl-[9.7%] mt-8 text-left pb-4`}>
      <p className={`font-extrabold text-[1.5rem]`}>
        {name.length === 0 ? 'Luke Ronchi' : name}
      </p>
      <p className={`font-bold text-[1rem] ml-[2px]`}>
        {title.length === 0 ? 'UI/UX DESIGNER' : title}
      </p>
    </div>
  );
}

export default TitleContainer;
