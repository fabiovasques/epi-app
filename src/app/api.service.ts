import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  	API_KEY = 'dc1321920d1c45699638172b2bab2c12';
    constructor(private httpClient: HttpClient) {}
    getNews(){
	    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
	  }
}
