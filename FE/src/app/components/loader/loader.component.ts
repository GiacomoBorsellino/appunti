import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public imgSrc = '../../../assets/loacker1.png';
  constructor() { }

  ngOnInit() {
  }

}
