import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from "./login/login.module";
import { LoginComponent } from "./login/login.component";
import { LoggedInGuard } from "./guards/logged-in.guard";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./+news/news.module').then(({ NewsModule }) => NewsModule),
    canActivateChild: [LoggedInGuard],
    canLoad: [LoggedInGuard]
  },
  {
    path: '**',
    redirectTo: 'news'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      onSameUrlNavigation: 'ignore'
    }),
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
