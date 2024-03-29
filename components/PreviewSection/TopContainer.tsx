import React from 'react';
import { TopContainerProps } from './types';
import logoImage from '@/assets/Declone_Logo.png';
import Image from 'next/image';

function TopContainer(props: TopContainerProps) {
  const { phone, email, address, logo } = props;
  return (
    <div className='flex justify-between'>
      <div className='-ml-[14px]'>
        {logo && <Image src={logoImage} alt='logo' height={100} width={100} />}
      </div>
      <div className='flex flex-col font-semibold text-[14px] mt-4 items-end'>
        {phone !== '' && (
          <div className='flex justify-center'>
            <h1>Phone: {phone}</h1>
          </div>
        )}
        {email !== '' && (
          <div className='flex justify-center'>
            <h1> Email: {email}</h1>
          </div>
        )}
        {address !== '' && (
          <div className='flex justify-center'>
            <h1>Address: {address}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopContainer;