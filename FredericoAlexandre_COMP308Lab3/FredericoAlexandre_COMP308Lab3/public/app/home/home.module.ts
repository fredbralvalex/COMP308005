import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { MenuModule } from '../menu/menu.module';
@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        RouterModule.forChild(HomeRoutes)        
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
