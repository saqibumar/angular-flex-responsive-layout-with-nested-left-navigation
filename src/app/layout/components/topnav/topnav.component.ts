import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss'],
    animations: [
        // Each unique animation requires its own trigger. The first argument of the trigger function is the name
        trigger('rotatedState', [
          state('default', style({ transform: 'rotate(0)' })),
          state('rotated', style({ transform: 'rotate(-90deg)' })),
          transition('rotated => default', animate('500ms ease-out')),
          transition('default => rotated', animate('400ms ease-in'))
      ])
  ]
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;

    constructor(public router: Router, private translate: TranslateService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    state: string = 'default';
    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

    ngOnInit() {
        // this.state = 'rotated';
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        if(this.isToggled()){
            this.state = 'default';
        }else{
            const menuBtnImg: any = document.getElementById('menuBtnImg');
            menuBtnImg.classList.remove('resetRotate');
            console.log(">>>>> remove resetclass");
            this.state = 'rotated';
        }

        console.log("toggleSideBar in topNav", this.isToggled());
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);

    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
