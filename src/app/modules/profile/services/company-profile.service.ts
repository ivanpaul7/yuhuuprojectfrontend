import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export abstract class AbstractCompanyProfileService {

}

export class MockCompanyProfileService implements AbstractCompanyProfileService {

}

export class ServerCompanyProfileService implements AbstractCompanyProfileService {

}
