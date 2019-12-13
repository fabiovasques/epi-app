import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chamar-api',
  templateUrl: './chamar-api.page.html',
  styleUrls: ['./chamar-api.page.scss'],
})
export class ChamarApiPage implements OnInit {

  constructor(private apiService: ApiService){}
  articles;
  ionViewDidEnter(){

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

  ngOnInit() {
  }

}
