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
            <Label class="action-bar-title" text="Beneficiries"></Label>
        </ActionBar>
        <ScrollView>
            <StackLayout class="home-panel">
            <CardView class="styleCard" margin="10" elevation="40" radius="1" > 
                <ListView class="list-group" for="benefit in info"
                     style="height:1250px">
                    <v-template>
                    <Label :text="info" />
                        <FlexboxLayout flexDirection="row" 
                            class="list-group-item">
                            <Label :text="benefit.fullName" 
                                horizontalAlignment="left"
                                class="list-group-item-heading"
                                style="width: 60%" />
                                <Label :text="benefit.gender"
                                horizontalAlignment="right"
                                class="list-group-item-heading"
                                style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
              </CardView>   
               <!-- <RadDataForm :source="benefit">
            </RadDataForm> -->
            </StackLayout>
        </ScrollView>    
  </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import axios from 'axios';
    import * as http from "http";

    const httpModule = require("tns-core-modules/http");

    // var btoa = require('btoa');
    export default {
        data() {
           
            return {
                 info: null,
                
            };
     
        },

    

        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Beneficiriary");


            // axios({ 
            //     method: "GET", 
            //     "url": "http://norbusserver:8080/pat.srs/norbus.api/member/40059",
            //     contentType: "application/json",
            //     username: "admin",
            //     password: "admin" 
            //     }).then(result => {
            //             this.info = result.data;
            //         }, error => {
            //             console.error(error);
            //         });


        //   axios
        //         .get('http://norbusserver:8080/pat.srs/norbus.api/member/full/40060',{
        //             params:{
        //             username: 'admin',
        //             password: 'admin'
                   
        //             }
        //         })
        //         .then(response => (this.info = response))





            // axios({
            //         method: 'get',
            //         url: 'https://api.github.com/user',
            //         data: {
            //             firstName: 'brownyin365',
            //             lastName: 'berlinbrown231231'
            //         }
            //         }).then(response => {
            //         var info = response.content.toJSON();
            //         }, error => {
            //         console.error(error);
            //         });;            
        
        
            http.request({
                    url: "http://norbusserver:8080/pat.srs/norbus.api/member/40059",
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    content: JSON.stringify({
                        username: "admin",
                        password: "admin"
                    })
                    }).then(response => {
                    var info = response.content.toJSON();
                    }, error => {
                    console.error(error);
                    });


        
                    
        },
           
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },    

    }  

 }  
</script>

<style scoped lang="scss">
    .styleCard {
        height: 300;
    }
   
</style>
