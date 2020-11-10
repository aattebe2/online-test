import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestPortalService {

    constructor(private httpClient:HttpClient) { }

    loadData(): Observable<TestPortal[]> {
        return this.httpClient.get<TestPortal[]>('assets/testdata.json');
    }

}

export class TestPortal {

    public question: string;
    public answers: string[];
    public correctAnswer: number;

    constructor(question: string, answers: string[], correctAnswer: number) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

}