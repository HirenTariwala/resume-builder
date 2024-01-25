import React from 'react';
interface props {
  phone: string;
  email: any;
  address: any;
  primaryColor: string;
  secondaryColor: string;
}

function TopContainer(props: props) {
  const { phone, email, address, primaryColor, secondaryColor } = props;
  return (
    <div className='flex justify-around gap-[7px]  font-semibold text-[14px] mt-4 ml-[58px]'>
      <h1>Phone: {phone.length === 0 ? '0000000000' : phone}</h1>
      <h1>Email: {email.length === 0 ? 'dummy@gmail.com' : email}</h1>
      <h1 className='w-[40%]'>
        Address: {address.length === 0 ? 'Bilaspur,Chhattisgarh' : address}
      </h1>
    </div>
  );
}

export default TopContainer;
