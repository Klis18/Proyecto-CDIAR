import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Recursos',
              icon: 'pi pi-fw pi-folder-open',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {
                              label: 'Bookmark',
                              icon: 'pi pi-fw pi-bookmark'
                          },
                          {
                              label: 'Video',
                              icon: 'pi pi-fw pi-video'
                          }
                      ]
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  { 
                      separator: true 
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
              label: 'Aprender',
              icon: 'pi pi-fw pi-bolt',
              items: [
                  {
                      label: 'Left',
                      icon: 'pi pi-fw pi-align-left'
                  },
                  {
                      label: 'Right',
                      icon: 'pi pi-fw pi-align-right'
                  },
                  {
                      label: 'Center',
                      icon: 'pi pi-fw pi-align-center'
                  },
                  {
                      label: 'Justify',
                      icon: 'pi pi-fw pi-align-justify'
                  }
              ]
          },
          {
              label: 'Simuladores',
              icon: 'pi pi-fw pi-clock',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'Filter',
                              icon: 'pi pi-fw pi-filter',
                              items: [
                                  {
                                      label: 'Print',
                                      icon: 'pi pi-fw pi-print'
                                  }
                              ]
                          },
                          {
                              icon: 'pi pi-fw pi-bars',
                              label: 'List'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Metas y Rendimiento',
              icon: 'pi pi-fw pi-wave-pulse',
              items: [
                  {
                      label: 'Metas',
                      icon: 'pi pi-fw pi-wave-pulse'
                     
                  },
                  {
                      label: 'Rendimiento',
                      icon: 'pi pi-fw pi-calendar-times'
                  }
              ]
          }
      ];
  }
}
