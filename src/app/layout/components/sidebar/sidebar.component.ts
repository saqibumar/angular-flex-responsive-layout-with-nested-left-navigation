import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    @ViewChild('appDrawer') appDrawer: ElementRef;
    version = VERSION;
    navItems: NavItem[] = [
    {
        displayName: 'Dashboard',
        iconName: 'icon_GueZZ',
        route: '/dashboard',
    },
    {
        displayName: 'Main',
        iconName: 'icon_GueZZ',
        route: '',
        children: [
            {
                displayName: 'Languages',
                iconName: 'icon_languages',
                route: 'languages'
            },
            {
                displayName: 'Page1',
                iconName: 'icon_GueZZ',
                route: '',
                children: [
                    {
                        displayName: 'Glossary',
                        iconName: '',
                        route: 'page1/glossary'
                    },
                    {
                        displayName: 'Contents',
                        iconName: '',
                        route: 'page1/contents'
                    }
                ]
            },
        ]
    },
    {
        displayName: 'Other',
        iconName: 'icon_GueZZ',
        route: '',
        children: [
            {
            displayName: 'something...',
            iconName: 'icon_languages',
            route: 'languages'
            }]
    },

];

    constructor(private translate: TranslateService, private navService: NavService) {}

    ngOnInit() {
        this.showMenu = '';
    }

    
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

    changeLang(language: string) {
        this.translate.use(language);
    }


    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
