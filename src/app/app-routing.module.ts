import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent} from './component/location/location.component'
import { NotFoundComponentComponent } from './component/not-found-component/not-found-component.component';


const routes: Routes = [
  { path: '', component: LocationComponent},
  { path: '404', component: NotFoundComponentComponent},
  { path: '**', redirectTo: '404' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
