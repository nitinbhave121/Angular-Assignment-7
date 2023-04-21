import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assign7';
  random="MArveLLouS InfoSystEm"
  
  public toUpper():void{
    this.random=this.random.toUpperCase();
  }

  public toLower():void{
    this.random=this.random.toLowerCase();
  }
}
