<template lang="html">
<GridLayout rows="auto, *" class="sidedrawer sidedrawer-left">
            <StackLayout row="0" class="sidedrawer-header">
                <Label class="sidedrawer-header-image fa" text.decode="&#xf2bd;"></Label>
                <Label class="sidedrawer-header-brand" text="User Name"></Label>
                <Label class="footnote" text="username@mail.com"></Label>
            </StackLayout>
        
            <ScrollView row="1" class="sidedrawer-content">
                <StackLayout>
                    <!-- <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Login' ? ' selected': '')" @tap="onNavigationItemTap(Login)">
                        <Label col="0" text.decode="&#xf015;" class="fa"></Label>
                        <Label col="1" text="Login" class="p-r-10"></Label>
                    </GridLayLogin> -->

                    <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Home' ? ' selected': '')" @tap="onNavigationItemTap(Home)">
                        <Label col="0" text.decode="&#xf015;" class="fa"></Label>
                        <Label col="1" text="Home" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'AccountDetail' ? ' selected': '')" @tap="onNavigationItemTap(AccountDetail)">
                        <Label col="0" text.decode="&#xf2bd;" class="fa"></Label>
                        <Label col="1" text="Account" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'BioData' ? ' selected': '')" @tap="onNavigationItemTap(BioData)">
                        <Label col="0" text.decode="&#xf1c0;" class="fa"></Label>
                        <Label col="1" text="Bio Data" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Beneficiary' ? ' selected': '')" @tap="onNavigationItemTap(Beneficiary)">
                        <Label col="0" text.decode="&#xf0c0;" class="fa"></Label>
                        <Label col="1" text="Beneficiary" class="p-r-10"></Label>
                    </GridLayout>

                    <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Transaction' ? ' selected': '')" @tap="onNavigationItemTap(Transaction)">
                        <Label col="0" text.decode="&#xf1ad;" class="fa"></Label>
                        <Label col="1" text="Transaction" class="p-r-10"></Label>
                    </GridLayout>

                    <StackLayout class="hr-light"></StackLayout>
                    
                     <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'ChangePassword' ? ' selected': '')" @tap="onNavigationItemTap(ChangePassword)">
                        <Label col="0" text.decode="&#xf13e;" class="fa"></Label>
                        <Label col="1" text="ChangePassword" class="p-r-10"></Label>
                    </GridLayout>   

                    <GridLayout columns="auto, *" :class="'sidedrawer-list-item' + (selectedPage === 'Settings' ? ' selected': '')" @tap="onNavigationItemTap(Settings)">
                        <Label col="0" text.decode="&#xf013;" class="fa"></Label>
                        <Label col="1" text="Settings" class="p-r-10"></Label>
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </GridLayout>
</template>

<script>
    // import Login from "./Login";
    import Home from "./Home";
    import AccountDetail from "./AccountDetail";
    import BioData from "./BioData";
    import Beneficiary from "./Beneficiary";
    import Transaction from "./Transaction";
    import ChangePassword from "./ChangePassword";
    import Settings from "./Settings";
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";    
    
    export default {
        mounted() {
            SelectedPageService.getInstance().selectedPage$
                .subscribe((selectedPage) => this.selectedPage = selectedPage);
        },
        data () {
            return {
                // Login: Login,
                Home: Home,
                AccountDetail: AccountDetail,
                BioData: BioData,
                Beneficiary: Beneficiary,
                Transaction: Transaction,
                Settings: Settings,
                ChangePassword: ChangePassword,
                selectedPage: ""
            };
        },
        components: {
            // Login,
            Home,
            AccountDetail,
            BioData,
            Beneficiary,
            Transaction,
            ChangePassword,
            Settings
        },
        methods: {
            onNavigationItemTap(component) {
                this.$navigateTo(component, {
                    clearHistory: true
                });
                utils.closeDrawer();
            }
        }
    };
</script>

<style scoped lang="scss">
    // Custom common variables
    @import '../app-variables';

    // Drawer navigation custom styles
    $sidedrawer-header-image-size: 60;
    $sidedrawer-header-image-offset-top: 20;
    $sidedrawer-header-image-offset-bottom: 5;
    $sidedrawer-list-item-offset-left: 15;
    $sidedrawer-list-icon-offset: 10;
    $sidedrawer-list-icon-size: 20;
    .sidedrawer {
        &.sidedrawer-left {
            background-color: $ab-background;

            .sidedrawer-header-image {
                color: $background-dark;
                height: $sidedrawer-header-image-size;
                width: $sidedrawer-header-image-size;
                font-size: $sidedrawer-header-image-size;
                padding: 0;
                margin-bottom: $sidedrawer-header-image-offset-bottom;
                margin-top: $sidedrawer-header-image-offset-top;
            }

            .footnote {
                color: rgba($ab-color, 0.5);
            }
        }

        .sidedrawer-header {
            background-color: $ab-background;

            .sidedrawer-header-brand {
                color: $ab-color;
            }
        }

        .sidedrawer-content {
            background-color: $side-drawer-background;
        }

        .sidedrawer-list-item {
            padding-left: $sidedrawer-list-item-offset-left;

            Label {
                vertical-align: center;
                color: #71c9f8;
            }

            .fa {
                width: $sidedrawer-list-icon-size;
                margin-right: $sidedrawer-list-icon-offset;
                color: #ffffff;
                size: 15;
            }

            &.selected {
                background-color: $item-active-background;

                Label {
                    color: $item-active-color;
                }
            }
        }
       .p-r-10 {
           font-size: 20;
           font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
       }
    }
</style>