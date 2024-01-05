<template>
  <div class="sidebar" id="my_sidebar">
    <button v-if="!modalStore.isOpen" class="toggle-sidebar-btn" @click="toggleSidebar">
      <span v-if="sidebarStore.isExpanded">
        <el-icon><back/>
      </el-icon>
      </span>
      <span v-else>
        <el-icon><right />
      </el-icon>
      </span>
      
    </button>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="!modalStore.isOpen && !sidebarStore.isExpanded"
      @open="handleOpen"
      @close="handleClose"
      
    >
        <el-menu-item index="0" @click="handleMenuClick">
            <el-icon><house /></el-icon>
            <template #title><NuxtLink to="/">Home</NuxtLink></template>
        </el-menu-item>
        <template v-for="(item, i) in MainMenuConfig" :key="i">
          <div v-if="item.heading" class="first-item">
            <el-menu-item  :index="`${i}`" @click="handleMenuClick">
                <template #title>{{ item.heading }}</template>
            </el-menu-item>            
          </div>
          <el-sub-menu v-if="item.pages" :index="`${i}`">
            <template #title>{{ item.heading }}</template>
            <template v-for="(secondItem, j) in item.pages" :key="j">
              <template v-if="secondItem.heading">
                <el-menu-item :index="`${i}-${j}`" @click="handleMenuClick"><NuxtLink to="/products">{{ secondItem.heading }}</NuxtLink></el-menu-item>
              </template>
              <template v-if="secondItem.sectionTitle && secondItem.route">
                <span class="second-item-section-title">{{ secondItem.sectionTitle }}</span>
              </template>

               <el-sub-menu v-if="secondItem.sub" :index="`${i}-${j}`">
                <template #title>{{ secondItem.sectionTitle }}</template>
                <template v-for="(thirdItem, k) in secondItem.sub" :key="k">
                   <el-menu-item-group>
                    <template v-if="thirdItem.heading">
                      <el-menu-item :index="`${i}-${j}-${k}`">
                        <router-link to="/contact" @click="handleMenuClick">{{ thirdItem.heading }}</router-link>
                      </el-menu-item>
                    </template>
                  </el-menu-item-group>
                </template>
              </el-sub-menu> 
            </template>
          </el-sub-menu>
        </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {  ref } from 'vue';
  import MainMenuConfig from "@/data/MenuData";
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    House,
    Right,
    Back
  } from '@element-plus/icons-vue';
  import { useModalStore } from '@/stores/modal';
  import { useSidebarStore } from '@/stores/sidebar';

const modalStore = useModalStore();
const sidebarStore = useSidebarStore();
const sidebarRef = ref<any>(null);

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  const handleMenuClick = () => {
    if (modalStore.isOpen) {
        modalStore.close();
    }
  }

  const toggleSidebar = () => {
    if (sidebarStore.isExpanded){
      sidebarStore.collapseSidebar();
    } else {
      sidebarStore.expandSidebar();
    }
  }


</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
    background-color: gray;
    overflow-y: scroll;
  }

  .el-menu {
    .el-menu-item {
        background-color: #433d57;
    }
    
    .el-menu-item, .el-sub-menu, .el-sub-menu__title {
        color: white;

        &:hover {
            color: black;
        }
    }    
  }

  .sidebar {
    position: relative;
    height: 100vh;
  }
  .el-menu--vertical, .sidebar, .toggle-sidebar-btn {
    transition: width left 2s;
  }

  .toggle-sidebar-btn {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 185px;
    top: 40px;
    background-color: white;
    z-index: 1;
  }

  .second-item-section-title {
    color: white;
  }

</style>