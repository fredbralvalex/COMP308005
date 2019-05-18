import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoursesRoutes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MenuModule } from '../menu/menu.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MenuModule,
        RouterModule.forChild(CoursesRoutes),
    ],
    declarations: [
        ViewComponent,
        CoursesComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ]
})
export class CoursesModule { }
