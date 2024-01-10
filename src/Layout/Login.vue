<template>
<router-view>
    <div id="not-log-in-yet">
        <header class=".htmlheader">
        <div class="full-width">  
            <HeaderComponent/>    
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        </header>
        <div class="maincontent">
                <div class="border-rounded">
                    <div class="main-login">
                        <LoginForm/>
                    </div>                    
                </div>
            </div>
        <div class="footer"><FooterComponent/></div>
    </div>
</router-view>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from "@/components/FooterComponent.vue";
import LoginForm from '@/components/forms/LoginForm';

</script>

<style lang="scss" scoped>

html, body, #not-log-in-yet {
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
  height: calc(100vh - 128px);
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
}

.border-rounded {
    border-radius: 10px;
    background: white;
    height: 100%;
    overflow-y: auto;
}

@media (min-width: 470px) {
  .dashboard-container { 
    display: grid;
    grid-template-rows: 64px 6fr 64px;
    grid-template-areas:
      "header"
      "maincontent"
      "maincontent"
      "maincontent"
      "footer";
  }
}

.not-login-yet {
    & .maincontent, .border-rounded {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}

.main-login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 400px;
}
</style>