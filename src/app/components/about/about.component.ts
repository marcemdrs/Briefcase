import { Component, OnInit } from '@angular/core';
import { Global } from '../../../services/global';

declare var $:any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public title: string;
	public name: string;
	public _albums: Array<any> = [];
	public url: string;



	constructor() { 
		
		this.title = "Sobre mi";
		this.name = "Marcelino David Rosas Sánchez";	
		this.url = Global.url;
		console.log(this.url);
	}


	ngOnInit(): void {

		$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 250,
			preventDefaultSwipeY: true,
		});
	}

	
}
