import React from 'react';
import { AboutProps } from './types';

function AboutSection(props: AboutProps) {
  const { about} = props;
  return (
    <div className={`text-left h-fit text-justify`}>
      <p
        className={`text-sm 
        text-[black]`}
      >
        {about.length === 0
          ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia in, voluptatem, commodi velit eius aperiam fugiat, magni earum tenetur optio labore ad explicabo deleniti perspiciatis ut eaque nam veritatis'
          : about}
      </p>
    </div>
  );
}

export default AboutSection;