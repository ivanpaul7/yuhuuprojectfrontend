import { Injectable } from '@angular/core';
import { Internship } from './internships.model';

@Injectable()
export class InternshipsService {
    private internships: Internship[] = [
        new Internship(
            'La fortech',
            'stam 8 ore',
            'sambata viitoare',
            'multa info'
        ),
        new Internship(
            'La arobs',
            'stam cat stam',
            'vineri',
            'prezentare dupa prezentare'
        ),
        new Internship(
            'Un internship',
            'Acesta este un internship moca.',
            '12/12/2022',
            'JAVA'
        ),
    ];

    constructor() {}

    getInternships() {
      return this.internships.slice();
    }
}
