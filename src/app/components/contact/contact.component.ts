import { Component, OnInit } from '@angular/core';
import { Global } from '../../../services/global';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public title: string;
	public name: string;
	public gmailEmail: string;
	public mobile: string;
	public whatsApp: string;
	public url: string;

	constructor() {
		this.title = "Contacto";
		this.name = "Marcelino David Rosas Sánchez";
		this.gmailEmail = "marce.mdrs@gmail.com";
		this.mobile = "55 3845 9818";
		this.whatsApp = "(+52) 55 3845 9818";
		this.url = Global.url;
	 }

	ngOnInit(): void {
	}

}
