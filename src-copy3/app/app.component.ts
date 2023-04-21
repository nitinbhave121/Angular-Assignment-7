import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assign7';
  str="Marvellous Infosystems";

  public fun():void{
    this.str="Educating For Better Tommorow";
  }
}
