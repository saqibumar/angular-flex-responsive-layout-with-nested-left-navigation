import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ComponentRef } from '@angular/core/src/render3';
import { TopnavComponent } from './layout/components/topnav/topnav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    openedSubject = new Subject<boolean>();
    
    constructor(private translate: TranslateService, 
            private matIconRegistry: MatIconRegistry,
            private domSanitizer: DomSanitizer) {
        translate.setDefaultLang('en');
        this.setSVGIcons();
        
    }
    public pushRightClass: string;

    ngOnInit() {
        // this.state = 'rotated';
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    
    toggleSidebar(event:any) {

        if(event.target.id === "menuBtnImg" 
            || event.target.id === "menuBtn" 
            || event.target.id === "menuBtnIcon"
            || event.target.innerText === "Page1" 
            || event.target.innerText === "Main") {
            return;
            }

        if(this.isToggled()){
            console.log("toggleSidebar()", this.isToggled(), event);
            const menuBtnImg: any = document.getElementById('menuBtnImg');
            menuBtnImg.classList.add('resetRotate');
            const dom: any = document.querySelector('body');
            dom.classList.toggle(this.pushRightClass);
        }
        
        

    }

    dismissSidebar() {
        
        this.openedSubject.next(false);
      }

      setSVGIcons(){
        this.matIconRegistry.addSvgIcon(
            "icon_languages",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_languages.svg")
          );
        this.matIconRegistry.addSvgIcon(
            "icon_GueZZ",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_guezz.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_bar_factz",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_factz.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_bar_factz_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_factz_on.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_bar_guezz_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_guezz_on.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_bar_languages_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_languages_on.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_bar_quiz",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_quiz.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_bar_quiz_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_bar_quiz_on.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_header_menu",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_header_menu.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_header_user",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_header_user.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_login",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_login.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_tab_gamplay",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_tab_gamplay.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_tab_gamplay_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_tab_gamplay_on.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_tab_tutorial",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_tab_tutorial.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_tab_tutorial_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_tab_tutorial_on.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_tab_warnings",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_tab_warnings.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "kdz_ico_tab_warnings_on",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/kdz_ico_tab_warnings_on.svg")
          );

      }
}
