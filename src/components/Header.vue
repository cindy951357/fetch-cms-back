<template>
        <div class="header">
        <div className="brand-link">
            <router-link to="/">
                <el-text class="mx-1 brand-name" size="large">Fetch</el-text>
            </router-link>
        </div>
        <!-- <div class="icon-group">
            <el-icon class="icon-share"><share /></el-icon>
            <div class="popup-icon relative">
                <el-icon class="icon-user" id="icon_user" @click="toggleUserPopup"><user /></el-icon>
                <div v-if="isUserPopupOpen" class="popup-wrapper absolute"><UserPopup/></div>
            </div>            
            <el-icon class="icon-service"><service /></el-icon>
        </div> -->
        <div>
            <el-menu
                class="el-menu-popper-demo"
                mode="horizontal"
                :popper-offset="2"
                style="width: 300px"
            >
                <el-menu-item index="1">
                    <el-icon class="icon-service" id="icon_service" ><service /></el-icon>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon class="icon-user" id="icon_user" ><user /></el-icon>
                    <el-sub-menu index="2-1">
                        <el-sub-menu index="2-1-1">
                            <template #title>Hello Hello</template>
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu-item>
                
                <el-menu-item index="3">
                    <el-icon class="icon-share" id="icon_share" ><share /></el-icon>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import UserPopup from "@/components/popups/UserPopup";
import { Share, User, Service } from '@element-plus/icons-vue';
import { ElIcon, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { ref } from 'vue';

const isUserPopupOpen = ref(false);
const toggleUserPopup = () => {
    isUserPopupOpen.value = !isUserPopupOpen.value;
}
</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    display: flex;
    position: relative;

    @media (min-width: 470px) {
        justify-content: space-between;
    }    
}
.brand-name {
    padding: 10px;
    color: white;
}
.icon-group {
    padding: 10px;
    color: white;
    display: flex;
    .el-icon:hover {
        cursor: pointer;
    }
    .el-icon svg{
        width: 30px;
        height: 30px;
    }
}

.popup-wrapper {
    z-index: 1000;
    left: calc(-400px + 30px);
    top: 40px;
}
.relative {
    position: relative;
}
.absolute {
    position: absolute;
}

.el-menu {
    background-color: transparent;
}
</style>