var Formio = require('formiojs');
import { Observable } from 'rxjs/Observable';
import { FormioForm } from './formio.common';

import 'rxjs/add/observable/fromPromise';

export class FormioService {
    public formio: any;
    constructor(public url: string) {
        this.formio = new Formio(this.url);
    }
    loadForm(): Observable<FormioForm> {
        return Observable.fromPromise(this.formio.loadForm());
    }
    loadSubmission(): Observable<{}> {
        return Observable.fromPromise(this.formio.loadSubmission());
    }
    saveSubmission(submission: {}): Observable<{}> {
        return Observable.fromPromise(this.formio.saveSubmission(submission));
    }
    loadSubmissions(): Observable<{}>{
        return Observable.fromPromise(this.formio.loadSubmissions());
    }
}
