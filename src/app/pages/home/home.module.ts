import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [HomeComponent, WyCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    ShareModule
  ]
})
export class HomeModule { }
