import React from 'react';
interface Props {
  about: string;
  primaryColor: string;
  secondaryColor: string;
}
function AboutSection(props: Props) {
  const { about, secondaryColor, primaryColor } = props;
  return (
    <div className={`text-left p-2  pb-4 h-fit`}>
      <p
        className={`ml-[9.1%] text-sm 
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
