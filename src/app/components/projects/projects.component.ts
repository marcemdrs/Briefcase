import { Component, OnInit } from '@angular/core';
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
	
	

	constructor() { 
		this.title = "Proyectos";
		this.titleCourse = "AprendiendoAjax";
		this.selectedCourse = "AprendiendoAjax";
		this.num = 2;
		this.slider;
		
	}

	ngOnInit(): void {
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

	//``
	setDivProjects(){

		$( "#slider" ).empty();	

		if(this.slider) this.slider.destroySlider();

		var text = "";
		console.log("num"+this.num);

		for(let i = 1; i <= this.num; i = i + 1){
			console.log(i);
			console.log(this.titleCourse);
			console.log("testing");
			//text = "../assets/img/projects/"+this.titleCourse+"/"+i+".png";
			text = "/Briefcase/assets/img/projects/"+this.titleCourse+"/"+i+".png";
			var post = `
			<div><img src=${text}></div>
			`;
			console.log(text);

			$("#slider").append(post);
		}

		this.slider = $('.bxslider').bxSlider({
			mode: 'fade',
			slideWidth: 700,
			adaptiveHeight: true,

		});	
	}


}
