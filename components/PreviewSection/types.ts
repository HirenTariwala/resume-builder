import {
  EducationDataType,
  ExperienceDataType,
  HobbySkillDataType,
} from '../EditSection/types';

export interface AboutProps {
  about: string;
}

export interface EducationProps {
  educationData: EducationDataType[];
}

export interface ExperienceProps {
  experiencesData: ExperienceDataType[];
}

export interface HobbySkillProps {
  skills: HobbySkillDataType[];
  hobbies: HobbySkillDataType[];
}

export interface TitleProps {
  name: string;
  title: string;
}

export interface TopContainerProps {
  phone: string;
  email: string;
  address: string;
  logo: boolean;
}