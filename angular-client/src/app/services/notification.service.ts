import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationService {

	private urlPrefix = "http://localhost:3000/";

	constructor(private http: Http) { }

	getRssFeed() {
		return this.http.get(this.urlPrefix + "api/rss").map(res => res.json());
	}

}
