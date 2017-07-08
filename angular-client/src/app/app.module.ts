import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { NotificationComponent } from './components/notification/notification.component';

// Services
import { NotificationService } from './services/notification.service';

@NgModule({
	declarations: [
		AppComponent,
		NotificationComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [
		NotificationService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
