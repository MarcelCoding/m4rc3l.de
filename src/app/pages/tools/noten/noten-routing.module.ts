import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotenComponent } from './noten.component';

const routes: Routes = [{ path: '', component: NotenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotenRoutingModule { }
