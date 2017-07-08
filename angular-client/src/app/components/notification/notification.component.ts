import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
	private notifications;

	constructor(private notificationService: NotificationService) {
		this.notifications = null;
	}

	ngOnInit() {
		this.notificationService.getRssFeed().subscribe(res => {
			if (res.status == "ok") {
				this.notifications = res.items;
				console.log(this.notifications);
			}
		});
	}

}
