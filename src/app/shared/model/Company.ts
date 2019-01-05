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


  constructor(id: number, url: string, public_id?: string, path?: string) {
    this.id = id;
    this.url = url;
    this.public_id = public_id;
    this.path = path;
  }
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


  constructor(id: number, phoneNumber: string, photo?: Photo, website?: string,
              linkedinLink?: string, address?: Address, facebookLink?: string, cv?: string) {
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.facebookLink = facebookLink;
    this.website = website;
    this.linkedinLink = linkedinLink;
    this.address = address;
    this.photo = photo;
    this.cv = cv;
  }
}

export class Company {
  id: number;
  name: string;
  description: string;
  dimension: number;
  views: number;
  contact: Contact;
  user: User;

  // internships: string[];


  constructor(id: number, name: string, description: string, dimension: number, views: number,
              contact?: Contact, user?: User) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dimension = dimension;
    this.views = views;
    this.contact = contact;
    this.user = user;
    // this.internships = internships;
  }
}


