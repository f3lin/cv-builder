// here we will define our data model (Interface)
import {LanguageLevel} from "./language-level";

export interface Profile {
  "basics": Basic,
  "location": Location,
  "web": Web,
  "languages": Language[],
  "tools": string[],
  "methodologies": string[],
  "skills": string[],
  "interests": string[],
  "certifications": Certification[],
  "trainings": Training[],
  "technicalExperiences": TechnicalExperience[],
  "educations": Education[],
  "experiences": Experience[],
}

export interface Basic {
  "firstName": string,
  "lastName": string,
  "email": string,
  "professionalTitle": string,
  "avatarUrl": string,
  "phoneNumber": string,
  "aboutMe": string,
  "openToRemote": boolean,
}

export interface Location {
  "city": string,
  "state": string,
  "postalCode": string
  "country": string,
}

export interface Web {
  "github": string ,
  "linkedIn": string,
  "twitter": string,
  "website": string
}

export interface Language {
  "id": number,
  "name": string
  "level": LanguageLevel
}

export interface Certification {
  "id": number,
  "name": string,
  "endDate": DateObject,
}

export interface DateObject {
  "year": number,
  "month": number,
  "day": number,
}

export interface Training {
  "id": number,
  "title": string,
  "platform": string,
}

export interface TechnicalExperience {
  "id": number,
  "topic": string,
  "technicalDetails": TechnicalDetail[]
}

export interface TechnicalDetail {
  "name": string,
  "level": number
}

export interface Education {
  "id": number,
  "institution": string,
  "degree": string,
  "major": string,
  "current": boolean,
  "startDate": DateObject,
  "endDate": DateObject,
  "location": Location,
  "description": string,
}

export interface Experience {
  "id": number,
  "title": string,
  "company": string,
  "companyHomepage": string,
  "current": boolean,
  "remote": boolean,
  "startDate": DateObject,
  "endDate": DateObject,
  "location": Location,
  "pertinentTechnologies": string[],
  "description": string
}
