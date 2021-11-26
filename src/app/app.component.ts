import { Component } from '@angular/core';
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ordenar-dados-imoveis';

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTiktok = faTiktok;

  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
}
