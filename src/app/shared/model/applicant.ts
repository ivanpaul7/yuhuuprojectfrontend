
export class Role {
  roleId: number;
  roleString: string;
}

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  active: boolean;
  roles: Role[];
}

export class Address {
  id: number;
  latitude: number;
  longitude: number;
  country: string;
  county: string;
  sector: string;
  postalCode: string;
  town: string;
  street: string;
  number: string;
  block: string;
  entrance: string;
  floor: string;
  apartment: string;
}

export interface Photo {
  id: number;
  url?: any;
  public_id?: any;
  path: string;
}

export interface Cv {
  id: number;
  url: string;
  public_id: string;
  path: string;
}

export class Contact {
  id: number;
  phoneNumber: string;
  facebookLink: string;
  website: string;
  linkedinLink: string;
  address: Address;
  photo: Photo;
  cv: Cv;
}

export class Applicant {
  id: number;
  user: User;
  firstName: string;
  lastName: string;
  birthday: string;
  description: string;
  contact: Contact;
}
