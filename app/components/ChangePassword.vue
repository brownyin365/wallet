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
            <Label class="action-bar-title" text="Change Password"></Label>
        </ActionBar>
 <!-- <ActionBar title="E-wallet"/> -->
        <GridLayout columns="*" rows="*">
            <GridLayout>
                <StackLayout class="page-content">
                <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFUWJI0aAUjqcX7CkPGczhHgJTYxktaIy_91IhMV8DEROVkvX&s"/>
                    <StackLayout class="form" justifyContent="center">
                        <!-- Option 5: An input with a rounded border and no label -->
                        <TextField hint="Old Password" v-model="oldPassword" class="input input-rounded m-t-10" />
                        <TextField hint="New Password" v-model="newPassword" class="input input-rounded m-t-10" />
                        <TextField hint="Confirm Password" v-model="confirmPassword" class="input input-rounded m-t-10" />
                        <Button text="Reset Password" class="my-button" @tap="changeRoute('#')"/>
                    </StackLayout>
                      
                </StackLayout>
          </GridLayout>
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
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
            }
        },

        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("ChangePassword");
        },
        computed: {
            message() {
                // return "<!-- Page content goes here -->";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },

            resetBtnTap() {

            }
        }
    };
</script>

<style scoped lang="scss">
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
       background-color: rgb(110, 168, 110);
       color: rgb(48, 47, 79);
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
