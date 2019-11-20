<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!-- 
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
            <!-- 
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://navigation/menu" 
                android:visibility="collapsed" 
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

               
      <GridLayout>
        <!-- <ActionBar title="E-wallet"/> -->
        <GridLayout columns="*" rows="*">
            <GridLayout>
            <!-- <Image src="https://s7d2.scene7.com/is/image/TWCNews/1031_nc_sunny_weather_2-1" rowSpan="5" iosOverflowSafeArea="true" stretch="aspectFill"></Image> -->
                <StackLayout class="page-content">
                <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFUWJI0aAUjqcX7CkPGczhHgJTYxktaIy_91IhMV8DEROVkvX&s"/>
                    <StackLayout class="form" justifyContent="center">
                        <!-- Option 5: An input with a rounded border and no label -->
                        <TextField hint="E-mail" v-model="email" class="input input-rounded m-t-10" />
                        <TextField hint="Password" v-model="password" class="input input-rounded m-t-10" />
                        <Button text="Login" class="my-button" @tap="home"/>

                              <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
                                <Label horizontalAlignment="left" text="Create Account" />
                                <Label horizontalAlignment="right" @tap="changeRoute" text="Reset Passwaord" />
                              </FlexboxLayout>             
                    </StackLayout>
                      
                </StackLayout>
          </GridLayout>
           
            <!-- <StackLayout>
              <Button class="btn btn-primary" text="Home"   /> 
           </StackLayout>           -->
        </GridLayout>


      </GridLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        data() {
          return {
                email: '',
                password: '',
          }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            }
            // changeRoute() {
            //   SelectedPageService.getInstance().updateSelectedPage("changePassword");
            // }
        }
    };
</script>

<style scoped lang="scss">
//     @keyframes spin {
//     from { transform: rotate(0); }
//     to { transform: rotate(360); }
// }
// Image {
//     animation-name: spin; 
//     animation-duration: 3s;
//     animation-iteration-count: infinite;`
//     animation-timing-function: linear;
// }
.page {
        background-color: #ffffff;
    }
   .border-bottom {
       border-bottom-with: 1;
       border-bottom-color: white;
       margin-bottom: 40;
       padding-bottom: 8;
   }
   .form-input {
       color: white;
       placeholder-color: gray;
   }
   .my-button {
       background-color: #4a148c;
       color: #FFFFFF;
       font-weight: bold;
       border-radius: 25;
       padding-top: 14;
       padding-bottom: 14;
       text-transform: uppercase;
       latter-spacing: 0.1;
       margin-bottom: 20;
       margin-top: 10;
   }
   .page-name {
    vertical-align: top;
    text-align: center;
    font-size: 50;
    color: gray;
    text-transform: uppercase;
}
.full-height {
    height: 100%;
}
.form {
    margin-left: 34;
    margin-right: 34;
}
.auth-buttons {
    color: black;
}
</style>