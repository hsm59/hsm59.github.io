import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openLink() {
    window.open('https://speakerdeck.com/hsm59/kotlin-101', '_blank');
  }
  openGithubProfile() {
    window.open('https://github.com/hsm59', '_blank');
  }
  openSOProfile() {
    window.open('https://stackoverflow.com/users/1992823/hsm59', '_blank');
  }
  openLinkedInProfile() {
    window.open('https://www.linkedin.com/in/mukadam59/', '_blank');
  }
  openMediumBlog() {
    window.open('https://medium.com/@mukadam59', '_blank');
  }
  openTwitterProfile() {
    window.open('https://twitter.com/HSM59', '_blank');
  }
  sendMail() {
    window.location.href = 'mailto:androeeddev@gmail.com';
  }
}
