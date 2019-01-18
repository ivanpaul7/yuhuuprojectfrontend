/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import {Applicant, Internship} from './models';
import {IntershipStatusRequestStringEnum} from './IntershipStatusRequest';

export interface InternshipRequest {
  id: number;
  applicant: Applicant;
  internship: Internship;
  internshipRequestStatus: IntershipStatusRequestStringEnum;
}



