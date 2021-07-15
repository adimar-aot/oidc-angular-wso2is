import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppMenuComponent } from './app-menu.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FallbackComponent } from './fallback.component';
import { ShouldLoginComponent } from './should-login.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    FallbackComponent,
    ShouldLoginComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'basics/home', pathMatch: 'full' },

      // Note: this way of module loading requires this in your tsconfig.json: "module": "esnext"
      { path: 'basics', loadChildren: () => import('./feature-basics/basics.module').then(m => m.BasicsModule) },
      { path: 'extras', loadChildren: () => import('./feature-extras/extras.module').then(m => m.ExtrasModule) },

      { path: 'should-login', component: ShouldLoginComponent },
      { path: '**', component: FallbackComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
