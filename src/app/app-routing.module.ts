import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShapeokoFeedsAndSpeedsComponent } from './shapeoko-feeds-and-speeds/shapeoko-feeds-and-speeds.component';

const routes: Routes = [
  { path: 'shapeoko-feeds-and-speeds', component: ShapeokoFeedsAndSpeedsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
