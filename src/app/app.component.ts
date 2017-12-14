import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openLink() {
    window.open('https://speakerdeck.com/hsm59/kotlin-101', '_blank');
  }
}
