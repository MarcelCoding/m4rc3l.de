import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToolsComponent} from './tools.component';

const routes: Routes = [
  {path: '', component: ToolsComponent},
  {path: 'noten', loadChildren: () => import('./noten/noten.module').then(m => m.NotenModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule {
}
