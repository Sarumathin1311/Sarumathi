import { Component } from '@angular/core';
import {RemoveSpaces} from './remove-space';
@Component({
  selector: 'remove-spaces-impl',
	template: `
	    <h2>Custom pipe : removeSpaces</h2>
			<h4> {{sampleString | removeSpaces}}</h4>
			<p (click)="somefun()">Click Here to see console output</p>
	    `
})

export class AppComponent {
	sampleString = "Angular 2 is excellent";

	somefun():void{
		console.log(new RemoveSpaces().transform(this.sampleString));
	}
}