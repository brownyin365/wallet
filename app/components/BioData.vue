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
            <Label class="action-bar-title" text="Bio Data"></Label>
        </ActionBar>

        

        <ScrollView>
            <StackLayout class="home-panel">
            <card-view class="styleCard" margin="10" elevation="40" radius="1" > 
                <ListView class="list-group" for="bio in info"
                    @itemTap="onItemTap" style="height:1250px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" 
                            class="list-group-item" margin="10" elevation="40" radius="1">
                            <Label :text="bio.name"
                                horizontalAlignment="left"
                                class="list-group-item-heading"
                                style="width: 60%" />
                                <Label :text="bio.username"
                                horizontalAlignment="right"
                                class="list-group-item-heading"
                                style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
              </card-view>  
            

               <!-- <RadDataForm :source="biodata">
            </RadDataForm> -->

            </StackLayout>
        </ScrollView>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import axios from 'axios';

    export default {
        data() {
            return {
                info: null
            
            };
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("BioData");


            axios({ method: "GET", "url": "https://jsonplaceholder.typicode.com/users" }).then(result => {
                        this.info = result.data;
                    }, error => {
                        console.error(error);
                    });
                    
            // axios
            //     .get('https://api.github.com/users',{
            //             auth:{
            //             username: "brownyin365",
            //             password: "berlinbrown231231"
            //             }
            //         })
            //         .then(response => (this.users = response))
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
            }

        },
    
    };
</script>

<style scoped lang="scss">
    @keyframes spin {
    from { transform: rotate(0); }
    to { transform: rotate(360); }
}
Image {
    animation-name: spin; 
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
</style>