import { catchError, throwError } from 'rxjs';
export class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url).pipe(catchError((error) => {
            console.error('An error occurred:', error.message);
            return throwError('Something went wrong while getting the posts.');
        }));
    }
    create(resource) {
        return this.http.post(this.url, resource).pipe(catchError((error) => {
            console.error('An error occurred:', error.message);
            return throwError('Something went wrong while creating the post.');
        }));
    }
    update(id) {
        return this.http
            .patch(this.url + `/${id}`, {
            title: 'Hello World',
        })
            .pipe(catchError((error) => {
            console.error('An error occurred:', error.message);
            return throwError('Something went wrong while updating the post.');
        }));
    }
    deletePost(id) {
        return this.http.delete(this.url + `/${id}`).pipe(catchError((error) => {
            console.error('An error occurred:', error.message);
            return throwError('Something went wrong while deleting the post.');
        }));
    }
}
//# sourceMappingURL=data.service.js.map