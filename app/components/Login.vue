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

        <Gradient directions="to right" colors="#39B994, #337FC7">
            <Label class="login here"></Label>
        </Gradient>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },

            SignIn = () => {
                console.log('login clicked')
                let data = JSON.stringify({
                    password: this.state.password,
                    username: this.state.email
                })

                axios.post('url', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
                )
            }
        }
    };
</script>


</style>