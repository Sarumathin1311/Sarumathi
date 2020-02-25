import {Component} from '@angular/core';
@Component({
    selector: 'user-app',
    templateUrl: './user.component.html', 
    styleUrls: ['./user.component.css']
})
export class UserComponent {
	users = [
         'Mahesh',
         'Krishna',
         'Narendra',
	 'Jitendra'
    ];
	getCSSClasses(flag:string) {
	  let cssClasses;
	  if(flag == 'nightMode') {  
        cssClasses = {
	       'one': true,
		   'two': true 
	    }	
	  } else {  
        cssClasses = {
	       'two': true,
		   'four': false 
	    }	
	  }
	  return cssClasses;
    }	
 }
  