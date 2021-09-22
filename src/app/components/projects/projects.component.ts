import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Global } from '../../../services/global';
declare var $:any;

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	public title: string;
	public titleCourse: string;
	public selectedCourse: string;
	public num: number;
	public slider: any;
	public _albums: Array<any> = [];
	public url: string;
	
	

	constructor(private _lightbox: Lightbox) { 
		this.title = "Proyectos";
		this.titleCourse = "Seleccione un proyecto";
		this.selectedCourse = "Seleccione un proyecto";
		this.num = 0;
		this.slider;
		this.url = Global.url;
		
	}

	ngOnInit(): void {

		

		// Load item into different lightbox instance
		// With custom gallery config



		/*for (let i = 1; i <= 4; i++) {
			var src = '';
			if(i == 1)  src = "../assets/img/about/Cruz Orlada.jpg"; 
			if(i == 2) src = "../assets/img/about/alien.png"; 
			if(i == 3) src = "../assets/img/about/circle.png"; 
			if(i == 4) src = "../assets/img/about/alien.png"; 
			const album = {
				src: src,
				thumb: src
			};

			this._albums.push(album);

		}
		//console.log(this._albums);*/

		
	}
	ngOnChanges(){
	}
	ngDoCheck(){
	}
	ngAfterContentInit(){
	}
	ngAfterContentChecked(){
	}
	ngAfterViewInit(){
	}
	ngAfterViewChecked(){
		console.log("here 7");
	}
	ngOnDestroy(){	
	}



	setSelectedCourse(selectedCourse: string, countImage: number): void{
		this.selectedCourse = selectedCourse;
		this.titleCourse = selectedCourse;
		this.num = countImage;	
		this.setDivProjects();	
	}

	fakeArray(): any{
		if (this.num >= 0) {
			return new Array(this.num);
		}
	}

	setDivProjects(){

			

		this._albums = [];

		var src = "";
		console.log("num"+this.num);

		for(let i = 1; i <= this.num; i = i + 1){
			console.log(i);
			console.log(this.titleCourse);
			console.log("testing 2");
			src = this.url+"assets/img/projects/"+this.titleCourse+"/"+i+".png";
			//src = "/Briefcase/assets/img/projects/"+this.titleCourse+"/"+i+".png";

			const album = {
				src: src
			};

			this._albums.push(album);


			//console.log(text);
			/*var post = `
			<div><img src=${text}></div>
			`;
			console.log(text);

			$("#slider").append(post);*/
		}

			
	}

	open(index: number): void {
		// open lightbox
		this._lightbox.open(this._albums, index, { 
			showImageNumberLabel: true,
			showRotate: true,
			alwaysShowNavOnTouchDevices: true,
			disableScrolling: true,
			wrapAround: true,
			showZoom: true

		});
	}

	close(): void {
		// close lightbox programmatically
		this._lightbox.close();
	}

}


/*$( "#slider" ).empty();	

		if(this.slider) this.slider.destroySlider();

		var text = "";
		console.log("num"+this.num);

		for(let i = 1; i <= this.num; i = i + 1){
			console.log(i);
			console.log(this.titleCourse);
			console.log("testing 2");
			text = "../assets/img/projects/"+this.titleCourse+"/"+i+".png";
			//text = "/Briefcase/assets/img/projects/"+this.titleCourse+"/"+i+".png";
			console.log(text);
			var post = `
			<div><img src=${text}></div>
			`;
			console.log(text);

			$("#slider").append(post);
		}

		this.slider = $('.bxslider').bxSlider({
			mode: 'fade',
			slideWidth: 700,
			adaptiveHeight: true

		});	*/