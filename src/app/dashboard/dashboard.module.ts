import { DashboardRoutingModule } from './dashoard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutingModule],
  // exports: [HomeComponent],
})
export class DashboardModule {}
