<template>
  <div id="is-logged-in" class="dashboard-container">
    <header class=".htmlheader">
      <div class="full-width hamburger">
          <div id="icon_hamburger">
            <el-icon @click="openModal"><more /></el-icon>
          </div> 
      </div>
      <div class="full-width">  
          <HeaderComponent/>    
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    </header>
    <aside class="side"><Sidebar/></aside>
    <div class="maincontent">
            <div class="border-rounded">
                <router-view></router-view>
            </div>
        </div>
    <div class="footer"><FooterComponent/></div>
    <div class="modal-overlay" v-if="isModalOpen">
        <div class="modal">
          <el-icon class="icon-close" 
            @click="modalStore.close()" v-if="currentModal === 'sidebar'"
          >
            <close />
          </el-icon>
          <Sidebar v-if="currentModal === 'sidebar'"/>
          <SaveConfirm v-if="currentModal === 'save-confirm'"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ is an alias to /src
import { ref,
  reactive,
  computed,
} from 'vue';
import HeaderComponent from '@/components/Header.vue';
import Sidebar from "@/components/Sidebar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { More, Close } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
import { useModalStore } from '@/stores/modal';
import SaveConfirm from "@/components/popups/SaveConfirm.vue";
import { storeToRefs } from 'pinia';

const modalStore = useModalStore();
const { isOpen: isModalOpen,
        current: currentModal
} = storeToRefs(modalStore);

  const openModal = () => {
      modalStore.openModal();
  }

</script>

<style lang="scss">
html, body {
    height: 100vh;
    min-width: 300px;
    padding: 0px;
    margin: 0px;
}

header {
  grid-area: header;
  display: flex;
  height: 64px;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(208,188,179,1) 0%, rgba(212,175,223,1) 50%, rgba(180,228,211,1) 100%);
}

.htmlheader {
    display: flex;
    justify-content: center;
    align-items: center;
}


.maincontent {
  grid-area: maincontent;
  overflow-y: auto;
  max-height: calc(100vh - 128px);
}

.content-page {
  padding: 10px;
}

.footer {
    grid-area: footer;
    color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
}

.footer, .maincontent {
    background-color: #5c5c5c;
}

.full-width {
    width: 100%;
}

@media (max-width: 470px) {
  .dashboard-container {
    .side {
        display: none;
    }
  }

  .dashboard-container {
        height: 100vh;
        display: grid;
        grid-template-rows: 64px 6fr 64px;
        grid-template-areas:
            "header"
            "maincontent"    
            "footer";   
    }
    .htmlheader {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .full-width {
        position: absolute;        
        display: flex;

        .header {
            justify-self: center;
            justify-content: center;
            z-index: 0;
            position: relative;

            .icon-group {
                position: absolute;
                top: 10px;
                right: 5px;
            }
        }
    }

    #icon_hamburger {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 10px;
        top: 10px;
        color: white;
        z-index: 2;
    }
}

.border-rounded {
    border-radius: 10px;
    background: white;
    height: 100%;
    overflow-y: auto;
}

@media (min-width: 470px) {
    .hamburger {
        display: none;
    }
    .side {
         display: unset;
         grid-area: sidebar;
            &, .el-menu {
                background-color: #433d57;
            }
    }
  .dashboard-container { 
    display: grid;
    grid-template-columns: auto 5fr;
    grid-template-rows: 64px 6fr 64px;
    grid-template-areas:
      "sidebar  header"
      "sidebar maincontent"
      "sidebar maincontent"
      "sidebar maincontent"
      "sidebar  footer";
  }
}

.el-icon {
    width: 20px;
    height: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  background-color: #00000085;
  z-index: 3;

  & .modal {
    overflow-y: auto;

    .el-icon {
      position: absolute;
    }
    .icon-close {
        position: absolute;
        right: 10px;
        top: 10px;
        color: white;

        svg {
          width: 80px !important;
          height: 80px !important;
        }
    }
  }
}

a {
  text-decoration: none;
  &:visited {
    color: white;
  }
}
</style>
