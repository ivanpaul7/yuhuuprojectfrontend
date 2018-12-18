export class Internship {
  public title: string;
  public description: string;
  public deadline: string;
  public employmentType: string;
  public active: boolean;
  public startDate: string;
  public endDate: string;
  public freeSpots: number;
  public status: string;
  public companyLogo: string;
  public skills: string[];
  public company: string;
  public tags: string[];
  public attributes: string[];
  public requirements: string[];

  constructor(title: string, description: string, deadline: string,
    employmentType: string, companyLogo: string, startDate: string,
     endDate: string, company?: string, skills?: string[], freeSpots?: number, status?: string, active?: boolean, tags?: string[], attributes?: string[], requirements?: string[]) {
    this.title = title;
    this.deadline = deadline;
    this.description = description;
    this.employmentType = employmentType;
    this.active = active;
    this.startDate = startDate;
    this.endDate = endDate;
    this.freeSpots = freeSpots;
    this.status = status;
    this.companyLogo = companyLogo;
  }
}
