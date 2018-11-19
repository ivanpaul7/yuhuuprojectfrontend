export class Internship {
  public title: string;
  public description: string;
  public deadline: string;
  public employmentType: string;

  constructor(title: string, description: string, deadline: string, employmentType: string) {
    this.title = title;
    this.deadline = deadline;
    this.description = description;
    this.employmentType = employmentType;
  }
}
