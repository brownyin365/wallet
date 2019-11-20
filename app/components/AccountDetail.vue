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
            <Label class="action-bar-title" text="Account Details"></Label>
        </ActionBar>

        <GridLayout class="page-content">
            <ScrollView>
            <StackLayout class="home-panel">
            <card-view class="styleCard" margin="10" elevation="40" radius="1" > 
                <ListView class="list-group" for="account in pokemon"
                    @itemTap="onItemTap" style="height:1250px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" 
                            class="list-group-item">
                            <Label :text="account.name" 
                                horizontalAlignment="left"
                                class="list-group-item-heading"
                                style="width: 60%" />
                                <Label :text="account.info"
                                horizontalAlignment="right"
                                class="list-group-item-heading"
                                style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
              </card-view>  
            </StackLayout>
        </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import axios from 'axios';

    export default {
        data() {
            return {
                pokemon: [],
                
            };
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AccountDetail");

            axios({ method: "GET", "url": "https://pokeapi.co/api/v2/pokemon/?limit=151" }).then(result => {
                        this.pokemon = result.data.results;
                    }, error => {
                        console.error(error);
                    });

        },

        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },

        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
</style>
