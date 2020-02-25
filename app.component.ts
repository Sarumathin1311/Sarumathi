import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})

export class AppComponent{
	name:string='abcdef';
	welcomeText:string;
	
	constructor() { 
    this.name = 'pink';
    this.welcomeText= 'You are welcome';
    console.log('aaaaaaaaaaaaa');
	}
}