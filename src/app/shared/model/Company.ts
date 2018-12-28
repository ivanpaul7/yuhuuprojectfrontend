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

export class Photo {
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
  cv: string;
}

export class Company {
  id: number;
  user: User;
  name: string;
  views: number;
  contact: Contact;
  dimension: number;
  description: string;
}


