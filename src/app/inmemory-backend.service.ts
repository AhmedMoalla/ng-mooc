import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

export class FakeCourseBackend extends InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> {
        return {
            courses: [
                {
                    id: 1,
                    title: 'Angular',
                    image: 'https://angular.io/assets/images/logos/angular/angular.png',
                    category: 'SPA Framework',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta et dui at porttitor. Nullam sed lectus aliquam, dictum lacus eu, vestibulum libero.',
                    price: 30.5,
                    date: '03-11-2019',
                    rating: 4.3,
                    public: true
                },
                {
                    id: 2,
                    title: 'Java',
                    image: 'https://i.pinimg.com/originals/bb/72/c8/bb72c84af959c4689e0bae3bfed496f5.png',
                    category: 'Programming Language',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta et dui at porttitor. Nullam sed lectus aliquam, dictum lacus eu, vestibulum libero.',
                    price: 14.36,
                    date: '12-12-2012',
                    rating: 5,
                    public: true
                },
                {
                    id: 3,
                    title: 'C++',
                    image: 'https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png',
                    category: 'Programming Language',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta et dui at porttitor. Nullam sed lectus aliquam, dictum lacus eu, vestibulum libero.',
                    price: 8.5,
                    date: '20-09-2018',
                    rating: 3.2,
                    public: false
                }
            ]
        }
    }
}