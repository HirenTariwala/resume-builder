'use client';
import Button from '@/components/Atoms/Button/Button';
import Input from '@/components/Atoms/Input/Input';
import React, { useState } from 'react';
import TopContainer from '@/components/PreviewSection/TopContainer';
import TitleContainer from '@/components/PreviewSection/TitleContainer';
import AboutSection from '@/components/PreviewSection/AboutSection';
import HobbySkillContainer from '@/components/PreviewSection/HobbySkillContainer';
import ExperienceSection from '@/components/PreviewSection/ExperienceSection';
import EducationSection from '@/components/PreviewSection/EducationSection';
import Image from 'next/image';
import deleteIcon from '@/assets/delete-icon.svg';
import plusIcon from '@/assets/plus.svg';
import {
  EducationDataType,
  ExperienceDataType,
  HobbySkillDataType,
  ValueType,
} from './types';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/components/Atoms/Editor/Editor'), {
  ssr: false,
});

export default function EditSection() {
  const [isShowPreview, setIsShowPreview] = useState<boolean>(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [showLogo, setShowLogo] = useState<boolean>(false);
  const [skills, setSkills] = useState<HobbySkillDataType[]>([{ data: '' }]);
  const [hobbies, setHobbies] = useState<HobbySkillDataType[]>([{ data: '' }]);
  const [educations, setEducations] = useState<EducationDataType[]>([
    {
      university: '',
      degree: '',
      graduationStartYear: '',
      graduationEndYear: '',
    },
  ]);
  const [experiences, setExperiences] = useState<ExperienceDataType[]>([
    {
      designation: '',
      project: '',
      projectDetails: '',
      startYear: '',
      endYear: '',
      responsibility: '',
    },
  ]);

  const addNewFields = (type: string) => {
    switch (type) {
      case 'skills':
        setSkills((prev) => [...prev, { data: '' }]);
        break;

      case 'hobbies':
        setHobbies((prev) => [...prev, { data: '' }]);
        break;

      case 'educations':
        setEducations((prev) => [
          ...prev,
          {
            university: '',
            degree: '',
            graduationStartYear: '',
            graduationEndYear: '',
          },
        ]);
        break;

      case 'experiences':
        setExperiences((prev) => [
          ...prev,
          {
            designation: '',
            project: '',
            projectDetails: '',
            startYear: '',
            endYear: '',
            responsibility: '',
          },
        ]);
        break;
    }
  };

  const handleChangeField = (
    type: string,
    fieldData: ValueType,
    index: number
  ) => {
    switch (type) {
      case 'skills': {
        const { value } = fieldData;
        const data = [...skills];
        data[index].data = value;
        setSkills(data);
        break;
      }

      case 'hobbies': {
        const { value } = fieldData;
        const data = [...hobbies];
        data[index].data = value;
        setHobbies(data);
        break;
      }

      case 'educations': {
        const { name, value } = fieldData;
        const data = [...educations];
        data[index][name as keyof EducationDataType] = value;
        setEducations(data);
        break;
      }

      case 'experiences': {
        const { name, value } = fieldData;
        const data = [...experiences];
        data[index][name as keyof ExperienceDataType] = value;
        setExperiences(data);
        break;
      }
    }
  };

  const deleteHandler = (type: string, index: number) => {
    switch (type) {
      case 'skills': {
        const data = [...skills];
        data.splice(index, 1);
        setSkills(data);
        break;
      }

      case 'hobbies': {
        const data = [...hobbies];
        data.splice(index, 1);
        setHobbies(data);
        break;
      }

      case 'educations': {
        const data = [...educations];
        data.splice(index, 1);
        setEducations(data);
        break;
      }

      case 'experiences': {
        const data = [...experiences];
        data.splice(index, 1);
        setExperiences(data);
        break;
      }
    }
  };

  function getDropList() {
    const year = new Date().getFullYear();
    return Array.from(new Array(30), (v, i) => (
      <option key={i} value={year - i} defaultValue={year - i}>
        {year - i}
      </option>
    ));
  }

  function handleChange(identifier: string, value: string | any) {
    if (identifier === 'phone') {
      setPhone(value);
    } else if (identifier === 'name') {
      setName(value);
    } else if (identifier === 'email') {
      setEmail(value);
    } else if (identifier === 'address') {
      setAddress(value);
    } else if (identifier === 'title') {
      setTitle(value);
    } else if (identifier === 'about') {
      setAbout(value);
    }
  }

  async function downloadResume() {
    const { default: html2pdf } = await import('html2pdf.js');

    if (typeof window === 'undefined') return;
    if (typeof document === 'undefined') return;
    const resumeContainer = document.getElementById('resume-container');

    if (resumeContainer && html2pdf) {
      const pdfOptions = {
        margin: [10, 10, 10, 10],
        filename: `${name ? name : 'resume'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
        // pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        autoPaging: 'text',
      };
      html2pdf().from(resumeContainer).set(pdfOptions).save();
    }
  }
  return (
    <div>
      {!isShowPreview && (
        <div>
          <div className='flex justify-between'>
            <h1 className='m-9 sm:m-20 font-bold text-2xl'>Add Given Fields</h1>
            <Button
              type='button'
              text='Preview'
              onClick={() => setIsShowPreview(true)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md m-9 sm:m-20 text-lg'
              disabled={false}
            />
          </div>
          <div className='bg-[#022b3a] m-2 w-auto mx-[80px] md:w-auto p-3 rounded-md text-white font-semibold '>
            <div className='container mx-auto px-5 pt-10 flex gap-4'>
              <div className='w-[100%]'>
                <Input
                  type='text'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange('name', e.target.value)
                  }
                  placeholder='Name'
                  className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                  value={name}
                />
              </div>
              <div className='w-[100%]'>
                <Input
                  type='text'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange('title', e.target.value)
                  }
                  placeholder='Professional Title'
                  className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                  value={title}
                />
              </div>
              <div className='w-[100%]'>
                <Input
                  type='tel'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange('phone', e.target.value)
                  }
                  placeholder='Phone No'
                  className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                  value={phone}
                  maxLength={10}
                />
              </div>
              <div className='w-[100%]'>
                <Input
                  type='email'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange('email', e.target.value)
                  }
                  placeholder='Email'
                  className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                  value={email}
                />
              </div>
              <div className='w-[100%]'>
                <Input
                  type='text'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange('address', e.target.value)
                  }
                  placeholder='Address'
                  className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                  value={address}
                />
              </div>
            </div>
            <div className='container mx-auto px-5 pt-2 pb-10'>
              <div className='w-[100%] text-black'>
                <Editor
                  value={about}
                  handleChange={(value) => {
                    handleChange('about', value);
                  }}
                />
              </div>
              <div className='flex gap-3 items-center mt-3'>
                <Input
                  type='checkbox'
                  className='p-2 rounded-sm outline-none text-black'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setShowLogo(e.target.checked);
                  }}
                  checked={showLogo}
                />{' '}
                <label>Add Logo</label>
              </div>
            </div>
            <div className='container mx-auto px-5 py-10'>
              <div className='relative rounded-md border border-gray-600'>
                {experiences.map((experience, index) => {
                  {
                    return (
                      <div className='container mx-auto px-5 py-10' key={index}>
                        <div className='relative rounded-md border border-gray-600'>
                          <div className='absolute top-5 transform -translate-y-1/2 right-2 flex gap-2'>
                            <Image
                              className='cursor-pointer'
                              src={deleteIcon}
                              alt='Delete'
                              width={30}
                              onClick={() =>
                                deleteHandler('experiences', index)
                              }
                            />
                          </div>
                          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5 mt-4'>
                            <div className='w-[100%]'>
                              <Input
                                type='text'
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  handleChangeField(
                                    'experiences',
                                    {
                                      name: e.target.name,
                                      value: e.target.value,
                                    },
                                    index
                                  )
                                }
                                name='designation'
                                placeholder='Designation'
                                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                                value={experience.designation}
                              />
                            </div>
                            <div className='w-[100%]'>
                              <Input
                                type='text'
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  handleChangeField(
                                    'experiences',
                                    {
                                      name: e.target.name,
                                      value: e.target.value,
                                    },
                                    index
                                  )
                                }
                                placeholder='Project'
                                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                                value={experience.project}
                                name='project'
                              />
                            </div>
                            <div className='w-[100%]'>
                              <select
                                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                                onChange={(e) => {
                                  handleChangeField(
                                    'experiences',
                                    {
                                      name: e.target.name,
                                      value: e.target.value,
                                    },
                                    index
                                  );
                                }}
                                name='startYear'
                                value={experience.startYear}
                              >
                                <option value='' disabled>
                                  Select Start Year
                                </option>
                                {getDropList()}
                              </select>
                            </div>
                            <div className='w-[100%]'>
                              <select
                                value={experience.endYear}
                                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                                onChange={(e) => {
                                  handleChangeField(
                                    'experiences',
                                    {
                                      name: e.target.name,
                                      value: e.target.value,
                                    },
                                    index
                                  );
                                }}
                                name='endYear'
                              >
                                <option value='' disabled>
                                  Select End Year
                                </option>
                                {getDropList()}
                              </select>
                            </div>
                          </div>
                          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
                            <div className='w-[50%]'>
                              <p className='mb-2'>Responsibility</p>
                              <div className='text-black'>
                                <Editor
                                  value={experience.responsibility}
                                  handleChange={(value) => {
                                    handleChangeField(
                                      'experiences',
                                      {
                                        name: 'responsibility',
                                        value: value,
                                      },
                                      index
                                    );
                                  }}
                                />
                              </div>
                            </div>
                            <div className='w-[50%]'>
                              <p className='mb-2'>Project Details</p>
                              <div className='text-black'>
                                <Editor
                                  value={experience.projectDetails}
                                  handleChange={(value) => {
                                    handleChangeField(
                                      'experiences',
                                      {
                                        name: 'projectDetails',
                                        value: value,
                                      },
                                      index
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <h2 className='absolute flex top-0 left-[85px] transform -translate-x-1/2 -translate-y-1/2'>
                            <span className='bg-[#022b3a] px-2 text-sm font-medium'>
                              Experience
                            </span>
                          </h2>
                        </div>
                      </div>
                    );
                  }
                })}
                <h2 className='absolute flex top-0 left-[85px] transform -translate-x-1/2 -translate-y-1/2'>
                  <span className='bg-[#022b3a] px-2 text-sm font-medium'>
                    Experience
                  </span>
                </h2>
                <div className='absolute flex top-0 right-[15px] transform -translate-x-1/2 -translate-y-1/2 bg-[#022b3a]'>
                  <Image
                    className='cursor-pointer'
                    src={plusIcon}
                    alt='Add Experience'
                    width={30}
                    onClick={() => addNewFields('experiences')}
                  />
                </div>
              </div>
            </div>

            <div className='container mx-auto px-5 py-10'>
              <div className='relative rounded-md border border-gray-600'>
                {educations.map((education, index) => (
                  <div className='container mx-auto px-5 py-10' key={index}>
                    <div className='relative rounded-md border border-gray-600'>
                      <div className='absolute top-5 transform -translate-y-1/2 right-2 flex gap-2'>
                        <Image
                          className='cursor-pointer'
                          src={deleteIcon}
                          alt='Delete'
                          width={30}
                          onClick={() => deleteHandler('educations', index)}
                        />
                      </div>
                      <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5 mt-4'>
                        <div className='w-[100%]'>
                          <Input
                            type='text'
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleChangeField(
                                'educations',
                                { name: e.target.name, value: e.target.value },
                                index
                              )
                            }
                            name='university'
                            placeholder='University'
                            className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                            value={education.university}
                          />
                        </div>
                        <div className='w-[100%]'>
                          <Input
                            type='text'
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleChangeField(
                                'educations',
                                { name: e.target.name, value: e.target.value },
                                index
                              )
                            }
                            name='degree'
                            placeholder='Degree'
                            className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                            value={education.degree}
                          />
                        </div>

                        <div className='w-[100%]'>
                          <select
                            value={education.graduationStartYear}
                            className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                            onChange={(e) => {
                              handleChangeField(
                                'educations',
                                { name: e.target.name, value: e.target.value },
                                index
                              );
                            }}
                            name='graduationStartYear'
                          >
                            <option value='' disabled>
                              Select Start Year
                            </option>
                            {getDropList()}
                          </select>
                        </div>
                        <div className='w-[100%]'>
                          <select
                            value={education.graduationEndYear}
                            className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                            onChange={(e) => {
                              handleChangeField(
                                'educations',
                                { name: e.target.name, value: e.target.value },
                                index
                              );
                            }}
                            name='graduationEndYear'
                          >
                            <option value='' disabled>
                              Select End Year
                            </option>
                            {getDropList()}
                          </select>
                        </div>
                      </div>
                      <h2 className='absolute flex top-0 left-[85px] transform -translate-x-1/2 -translate-y-1/2'>
                        <span className='bg-[#022b3a] px-2 text-sm font-medium'>
                          Education
                        </span>
                      </h2>
                    </div>
                  </div>
                ))}
                <h2 className='absolute flex top-0 left-[85px] transform -translate-x-1/2 -translate-y-1/2'>
                  <span className='bg-[#022b3a] px-2 text-sm font-medium'>
                    Educations
                  </span>
                </h2>
                <div className='absolute flex top-0 right-[15px] transform -translate-x-1/2 -translate-y-1/2 bg-[#022b3a]'>
                  <Image
                    className='cursor-pointer'
                    src={plusIcon}
                    alt='Add Education'
                    width={30}
                    onClick={() => addNewFields('educations')}
                  />
                </div>
              </div>
            </div>

            <div className='container mx-auto px-5 py-10 flex gap-5'>
              <div className='relative rounded-md border border-gray-600 w-[50%] py-7'>
                {skills.map((skill, index) => (
                  <div className='container mx-auto' key={index}>
                    <div className='pr-5 pl-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
                      <div className='flex gap-2 w-[100%] py-2'>
                        <Input
                          type='text'
                          name='skill'
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeField(
                              'skills',
                              { name: e.target.name, value: e.target.value },
                              index
                            )
                          }
                          placeholder='Add Skills'
                          className='p-2 rounded-sm outline-none text-black w-[100%]'
                          value={skill.data}
                        />
                        <Image
                          className='cursor-pointer'
                          src={deleteIcon}
                          alt='Delete'
                          width={30}
                          onClick={() => deleteHandler('skills', index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <h2 className='absolute flex top-0 left-[85px] transform -translate-x-1/2 -translate-y-1/2'>
                  <span className='bg-[#022b3a] px-2 text-sm font-medium'>
                    Skills
                  </span>
                </h2>
                <div className='absolute flex top-0 right-[15px] transform -translate-x-1/2 -translate-y-1/2 bg-[#022b3a]'>
                  <Image
                    className='cursor-pointer'
                    src={plusIcon}
                    alt='Add Skills'
                    width={30}
                    onClick={() => addNewFields('skills')}
                  />
                </div>
              </div>
              <div className='relative rounded-md border border-gray-600 w-[50%] py-7'>
                {hobbies.map((hobby, index) => (
                  <div className='container mx-auto' key={index}>
                    <div className='pr-5 pl-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
                      <div className='flex gap-2 w-[100%] py-2'>
                        <Input
                          type='text'
                          name='hobby'
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeField(
                              'hobbies',
                              { name: e.target.name, value: e.target.value },
                              index
                            )
                          }
                          placeholder='Add Hobbies'
                          className='p-2 rounded-sm outline-none text-black w-[100%]'
                          value={hobby.data}
                        />
                        <Image
                          className='cursor-pointer'
                          src={deleteIcon}
                          alt='Delete'
                          width={30}
                          onClick={() => deleteHandler('hobbies', index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <h2 className='absolute flex top-0 left-[85px] transform -translate-x-1/2 -translate-y-1/2'>
                  <span className='bg-[#022b3a] px-2 text-sm font-medium'>
                    Hobby
                  </span>
                </h2>
                <div className='absolute flex top-0 right-[15px] transform -translate-x-1/2 -translate-y-1/2 bg-[#022b3a]'>
                  <Image
                    className='cursor-pointer'
                    src={plusIcon}
                    alt='Add Hobbies'
                    width={30}
                    onClick={() => addNewFields('hobbies')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Template goes here */}
      {isShowPreview && (
        <div className='flex-col md:flex gap-4 w-[750px] mx-auto'>
          <div className='flex-col md:flex-row md:flex gap-4 justify-end mt-10'>
            <Button
              type='button'
              text='Download Resume'
              onClick={downloadResume}
              className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
              disabled={false}
            />
            <Button
              type='button'
              text='Edit'
              onClick={() => setIsShowPreview(false)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
              disabled={false}
            />
          </div>
          <div
            id='resume-container'
            className='shadow-[0_25px_50px_-12px_rgb(0,0,0,1.25)] mt-4 rounded-md h-fit p-[0px_20px]'
          >
            <TopContainer
              phone={phone}
              email={email}
              address={address}
              logo={showLogo}
            />
            <div>
              <TitleContainer name={name} title={title} />
              <AboutSection about={about} />
              <div className='flex h-fit justify-between'>
                <HobbySkillContainer hobbies={hobbies} skills={skills} />
                <div className='mt-8 w-[75%]'>
                  <ExperienceSection experiencesData={experiences} />
                  <div className='border-t border-dotted border-gray-500 my-6 w-[100%] mr-2'></div>
                  <EducationSection educationData={educations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
