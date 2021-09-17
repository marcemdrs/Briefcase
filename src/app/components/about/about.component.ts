import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public title: string;
	public name: string;



	constructor() { 
		this.title = "Sobre mi";
		this.name = "Marcelino David Rosas Sánchez";

	}

	ngOnInit(): void {

		$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 600
		});
	}

}
