import { Company, Internship, Skill} from './models';

export interface InternshipDTO {
  company?: Company;
  internship?: Internship;
  skills?: Skill[]
}
