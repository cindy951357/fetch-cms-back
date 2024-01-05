import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('Sidebar', {
    state: () => ({ 
        isExpanded: true,
     }),
    getters: {
    
    },
    actions: {
      expandSidebar() {
        document.getElementById("my_sidebar")!.style.width = "200px";
        document.querySelector<HTMLElement>('.el-menu--vertical')!.style.width = "200px";
        document.querySelector<HTMLElement>('.toggle-sidebar-btn')!.style.left = "185px";
        this.isExpanded = true;
      },
      collapseSidebar(){
        document.getElementById("my_sidebar")!.style.width = "63.2px";
        document.querySelector<HTMLElement>('.el-menu--vertical')!.style.width = "63.2px";
        // 63.2 - 15 = 48.2
        document.querySelector<HTMLElement>('.toggle-sidebar-btn')!.style.left = "48.2px";
        this.isExpanded = false;
      }
    },
})