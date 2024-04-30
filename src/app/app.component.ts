import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Portfolio2Component } from './portfolio2/portfolio2.component';
import { Portfolio3Component } from './portfolio3/portfolio3.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { TranslationService } from './translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { MainContentComponent } from './main-content/main-content.component';

export class HeaderComponent {

  translate = inject(TranslationService);

  
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    RouterOutlet,
    LandingComponent,
    AboutMeComponent,
    MyskillsComponent,
    PortfolioComponent,
    Portfolio2Component,
    Portfolio3Component,
    FooterComponent,
    CommonModule,
    MainContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'Portfolio - Soufian El Makhfi';

  @ViewChild('navMenu') navMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('btn') btn!: ElementRef<HTMLDivElement>;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('changeLanguageBtn') changeLanguageBtn!: ElementRef<HTMLDivElement>;
  @ViewChild('languageList') languageList!: ElementRef<HTMLDivElement>;
  showLanguages = false; 

  constructor() {}

  ngAfterViewInit() {
    this.addMobileLinksEventListener();
  }

  addMobileLinksEventListener(): void {
    const mobileLinks = this.mobileMenu.nativeElement.querySelectorAll('.mobile_links');

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.toggleIcon();
      });
    });
  }

  toggleIcon(): void {
    this.navMenu.nativeElement.classList.toggle('nav_menu');
    this.mobileMenu.nativeElement.classList.toggle('mobile_links_hidden');
    this.btn.nativeElement.classList.toggle('not-active');
  }

  toggleLanguageList(): void {
    this.showLanguages = !this.showLanguages; 
  }

  translate = inject(TranslationService);

}
