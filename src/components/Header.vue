<template>
    <div class="header">
        <div className="brand-link">
            <h1 class="mx-1 brand-name" size="large">Fetch</h1>
        </div>
        <div>
            <el-menu
                class="el-menu-popper"
                mode="horizontal"
                :popper-offset="2"
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
                <el-sub-menu v-if="authStore.isLoggedIn" index="2">
                    <template #title>
                        <el-icon class="icon-user" id="icon_user" ><user /></el-icon>
                    </template> 
                    <el-menu-item v-if="isLoggedIn" index="2-1">
                        <template #title>
                            <span @click="onLogOutClick">登出</span>
                        </template>
                    </el-menu-item>
                </el-sub-menu>
                
                <el-menu-item index="3">
                    <el-icon class="icon-share" id="icon_share" ><share /></el-icon>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Share, User, Service } from '@element-plus/icons-vue';
import { ElIcon, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { useAuthStore } from "@/stores/auth";
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const router = useRouter();

const { isLoggedIn } = storeToRefs(authStore);

const onLogOutClick = () => {
    authStore.logOut();
    router.push('/');
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    display: flex;
    position: relative;

    .brand-link {
        .brand-name {
            margin: 0;
        }
        
        min-width: 100px;
        a {
            text-decoration: none;
            line-height: 60px;
        }
    }
    
    @media (max-width: 300px) {
        .el-menu--horizontal, .el-menu.el-menu--horizontal {
            width: 150px;
        }
    }

    @media (max-width: 400px) {
        & {
            padding-left: 80px;
        }
    }

    @media (min-width: 300px) {
        .el-menu--horizontal, .el-menu.el-menu--horizontal {
            width: 350px;
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