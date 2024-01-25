'use client';
import Button from '@/components/Atoms/Button/Button';
import Input from '@/components/Atoms/Input/Input';
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
// import { SketchPicker } from 'react-color';
import TopContainer from '@/components/RightSection/TopContainer';
import TitleContainer from '@/components/RightSection/TitleContainer';
import AboutSection from '@/components/RightSection/AboutSection';
import HobbySkillContainer from '@/components/RightSection/HobbySkillContainer';
import ExperienceSection from '@/components/RightSection/ExperienceSection';
import EducationSection from '@/components/RightSection/EducationSection';
type myData = {
  designation: string;
  project: string;
  projectDetails: string;
  date: string;
  responsibility: string;
  primaryColor: string;
  secondaryColor: string;
}[];
type skillData = {
  skills: string;
}[];
type hobbyData = {
  hobby: string;
}[];
type educationData = {
  university: string;
  grade: string;
  graduationDate: string;
  educationData: string;
  primaryColor: string;
  secondaryColor: string;
}[];
export default function LeftSection() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [designation, setDesignation] = useState('');
  const [project, setProject] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState<myData>([]);
  const [skills, setSkills] = useState<skillData>([]);
  const [skillsDetails, setSkillsDetails] = useState('');
  const [hobby, setHobby] = useState<hobbyData>([]);
  const [hobbyDetails, setHobbyDetails] = useState('');
  const [university, setUniversity] = useState('');
  const [grade, setGrade] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [educationData, setEducationData] = useState<educationData>([]);
  // const [pickColor, setPickColor] = useState(false);
  // const [blockPickerColor, setBlockPickerColor] = useState();
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  function handleAddData() {
    setData([
      ...data,
      {
        designation: designation,
        project: project,
        projectDetails: projectDetails,
        date: date,
        responsibility: responsibility,
      },
    ]);
  }
  function addEducationData() {
    setEducationData([
      ...educationData,
      {
        university: university,
        grade: grade,
        graduationDate: graduationDate,
      },
    ]);
  }
  function addSkills() {
    setSkills([
      ...skills,
      {
        skills: skillsDetails,
      },
    ]);
    setSkillsDetails('');
  }
  function addHobby() {
    setHobby([
      ...hobby,
      {
        hobby: hobbyDetails,
      },
    ]);
    setHobbyDetails('');
  }
  function handleChange(identifier: string, value: string) {
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
    } else if (identifier === 'designation') {
      setDesignation(value);
    } else if (identifier === 'project') {
      setProject(value);
    } else if (identifier === 'responsibility') {
      setResponsibility(value);
    } else if (identifier === 'projectDetails') {
      setProjectDetails(value);
    } else if (identifier === 'date') {
      setDate(value);
    } else if (identifier === 'skillsDetails') {
      setSkillsDetails(value);
    } else if (identifier === 'hobby') {
      setHobbyDetails(value);
    } else if (identifier === 'university') {
      setUniversity(value);
    } else if (identifier === 'grade') {
      setGrade(value);
    } else if (identifier === 'graduationDate') {
      setGraduationDate(value);
    }
  }
  function downloadResume() {
    const resumeContainer = document.getElementById('resume-container');

    if (resumeContainer) {
      const pdfOptions = {
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf().from(resumeContainer).set(pdfOptions).save();
    }
  }
  return (
    <div className='flex-col md:flex-row md:flex gap-4'>
      <div>
        <h1 className='m-10 sm:m-20 font-bold text-2xl'>Add Given Fields</h1>
        <div className='bg-[#022b3a] ml-10 sm:ml-20 w-fit md:w-[80%] p-3 rounded-md text-white font-semibold max-h-[78vh] overflow-y-scroll scrollbar-hide'>
          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
            <div>
              <p>Phone No</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('phone', e.target.value)
                }
                placeholder='phoneno'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={phone}
              />
            </div>
            <div className='mt-2'>
              <p>Email</p>
              <Input
                type='email'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('email', e.target.value)
                }
                placeholder='email'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={email}
              />
            </div>
            <div className='mt-2'>
              <p>Address</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('address', e.target.value)
                }
                placeholder='address'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={address}
              />
            </div>
          </div>
          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
            <div className='mt-2'>
              <p>Name</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('name', e.target.value)
                }
                placeholder='name'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={name}
              />
            </div>
            <div>
              <p>Title</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('title', e.target.value)
                }
                placeholder='title'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={title}
              />
            </div>
            <div>
              <p>About</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('about', e.target.value)
                }
                placeholder='about yourself'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={about}
              />
            </div>
          </div>
          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
            <div>
              <p>Designation</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('designation', e.target.value)
                }
                placeholder='designation'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={designation}
              />
            </div>
            <div>
              <p>Project</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('project', e.target.value)
                }
                placeholder='project'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={project}
              />
            </div>
            <div>
              <p>Responsibility</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('responsibility', e.target.value)
                }
                placeholder='responsibility'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={responsibility}
              />
            </div>
          </div>
          <div className='p-5 flex-col sm:flex sm:flex-row gap-5'>
            <div className='mt-2'>
              <p>Project Details</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('projectDetails', e.target.value)
                }
                placeholder='project details'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={projectDetails}
              />
            </div>
            <div className='mt-2'>
              <p>Date</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('date', e.target.value)
                }
                placeholder='date'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={date}
              />
            </div>
            <Button
              type='button'
              text='Add Experience'
              onClick={handleAddData}
              className=' bg-black  rounded-md  mt-10 p-2'
              disabled={false}
            />
          </div>
          <div className='p-5 flex-col items-baseline sm:flex sm:flex-row gap-5'>
            <div>
              <p>University</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('university', e.target.value)
                }
                placeholder='university'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={university}
              />
            </div>
            <div>
              <p>Grade</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('grade', e.target.value)
                }
                placeholder='grade'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={grade}
              />
            </div>
          </div>
          <div className='p-5 flex-col sm:flex sm:flex-row gap-5'>
            <div className='mt-2'>
              <p>Date</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('graduationDate', e.target.value)
                }
                placeholder='graduationDate'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={graduationDate}
              />
            </div>
            <Button
              type='button'
              text='Add Education'
              onClick={addEducationData}
              className=' bg-black  rounded-md mt-10 p-2'
              disabled={false}
            />
          </div>
          <div className='p-5 flex-col  sm:flex sm:flex-row gap-5'>
            <div>
              <p>Skills</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('skillsDetails', e.target.value)
                }
                placeholder='add skills'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={skillsDetails}
              />
            </div>
            <Button
              type='button'
              text='AddSkills'
              onClick={addSkills}
              className=' bg-black p-3 rounded-md h-10 mt-9'
              disabled={false}
            />
          </div>
          <div className='p-5 flex-col  sm:flex sm:flex-row gap-5'>
            <div>
              <p>Hobby</p>
              <Input
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange('hobby', e.target.value)
                }
                placeholder='add hobby'
                className='p-2 rounded-sm outline-none mt-3 text-black w-[100%]'
                value={hobbyDetails}
              />
            </div>
            <Button
              type='button'
              text='Add Hobby'
              onClick={addHobby}
              className=' bg-black p-3 rounded-md mt-8'
              disabled={false}
            />
          </div>
        </div>
      </div>
      {/* Resume Template goes here */}
      <div id='resume-container' className='shadow-md  mt-20 rounded-md h-fit'>
        <TopContainer
          phone={phone}
          email={email}
          address={address}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
        <div className='mt-2'>
          <TitleContainer
            name={name}
            title={title}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
          <AboutSection
            about={about}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />
          <div className='flex gap-8 h-fit'>
            <HobbySkillContainer
              hobby={hobby}
              hobbyDetails={hobbyDetails}
              skills={skills}
              skillsDetails={skillsDetails}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
            <div className='mt-2'>
              <ExperienceSection
                data={data}
                date={date}
                designation={designation}
                project={project}
                projectDetails={projectDetails}
                responsibility={responsibility}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
              />
              <div className='border-t border-dotted border-gray-500 my-10 w-[25rem] mr-2'></div>
              <EducationSection
                educationData={educationData}
                grade={grade}
                graduationDate={graduationDate}
                university={university}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          type='button'
          text='Download Resume'
          onClick={downloadResume}
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
          disabled={false}
        />
        {/* <div>
          <Button
            type='button'
            text={pickColor === true ? 'Close' : 'Pick Color'}
            onClick={() => setPickColor((prev) => !prev)}
            className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'
            disabled={false}
          />
        </div> */}
      </div>
      {/* <div className='absolute left-[84%] top-[31%]'>
        {pickColor && (
          <SketchPicker
            color={blockPickerColor}
            onChange={(color: any) => {
              setBlockPickerColor(color.hex);
            }}
          />
        )}
      </div> */}
    </div>
  );
}
