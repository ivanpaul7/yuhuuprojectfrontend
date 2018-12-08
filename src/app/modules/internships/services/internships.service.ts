import { Injectable } from '@angular/core';
import { Internship } from './internships.model';

@Injectable()
export class InternshipsService {
    private internships: Internship[] = [
        new Internship(
            'La fortech',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
            'sambata viitoare',
            'multa info',
            'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg',
            '2012/10/11',
            '2013/10/11'
        ),
        new Internship(
            'La arobs',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
            'vineri',
            'prezentare dupa prezentare',
            'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
            '2012/10/11',
            '2013/10/11'
        ),
        new Internship(
            'Un internship',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
            '12/12/2022',
            'JAVA',
            'https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg',
            '2012/10/11',
            '2013/10/11'
        ),
    ];

    constructor() {}

    getInternships() {
      return this.internships.slice();
    }
}
