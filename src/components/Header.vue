<template>
        <div class="header">
        <div className="brand-link">
            <router-link to="/">
                <el-text class="mx-1 brand-name" size="large">Fetch</el-text>
            </router-link>
        </div>
        <div>
            <el-menu
                class="el-menu-popper-demo"
                mode="horizontal"
                :popper-offset="2"
                style="width: 300px"
                :collapse="true"
            >
                <el-sub-menu index="1">
                        <template #title>
                            <el-icon class="icon-service" id="icon_user" ><service /></el-icon>
                        </template> 
                        <el-menu-item index="1-1">
                            <template #title>Who Am I</template>
                        </el-menu-item>
                </el-sub-menu>                
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon class="icon-user" id="icon_user" ><user /></el-icon>
                    </template> 
                    <el-sub-menu index="2-1">
                        <template #title>Hello Hello</template>
                    </el-sub-menu>
                </el-sub-menu>
                
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

    .brand-link {
        min-width: 100px;
        a {
            text-decoration: none;
            line-height: 52px;
            .el-text {
                font-size: 36px;
            }
        }
    }

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