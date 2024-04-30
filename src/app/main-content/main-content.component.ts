import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { Portfolio2Component } from '../portfolio2/portfolio2.component';
import { Portfolio3Component } from '../portfolio3/portfolio3.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingComponent,
    AboutMeComponent,
    MyskillsComponent,
    PortfolioComponent,
    Portfolio2Component,
    Portfolio3Component,
    
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
