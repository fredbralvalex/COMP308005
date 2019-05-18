import { Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
export const CoursesRoutes: Routes = [{
    path: 'courses',
    component: CoursesComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'add', component: AddComponent },
        { path: ':courseId', component: ViewComponent },
        { path: ':courseId/edit', component: EditComponent }
    ],
}];