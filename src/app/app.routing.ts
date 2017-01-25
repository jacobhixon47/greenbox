import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'store',
    component: MarketplaceComponent
  },
  {
    path: 'boxes/:id',
    component: BoxDetailComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
