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
            <Label class="action-bar-title" text="Transaction"></Label>
        </ActionBar>


        <GridLayout>

                
     

        <ScrollView>
            <StackLayout class="home-panel">
            <card-view class="styleCard" margin="10" elevation="40" radius="1" > 
                <ListView class="list-group" for="transact in users"
                    style="height:1250px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" 
                            class="list-group-item">
                            <Label :text="transact.name" 
                                horizontalAlignment="left"
                                class="list-group-item-heading"
                                style="width: 60%" />
                                <Label :text="transact.email"
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
    import * as http from "http";

    export default {
        data() {
            return {
                 users: null
            };
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Transaction");

            axios({ method: "GET", "url": "https://jsonplaceholder.typicode.com/users" }).then(result => {
                     this.users = result.data;
                    }, error => {
                        console.error(error);
                    });

            // http.getJSON("https://jsonplaceholder.typicode.com/users").then(result => {
            //         this.users = result.results;
            //         }, error => {
            //         console.log(error);
            //         });

            // http.request({
            //             url: "https://api.github.com/users",
            //             method: "POST",
            //             headers: { "Content-Type": "application/json" },
            //             content: JSON.stringify({
            //                 username: "brownyin365",
            //                 password: "berlinbrown231231"
            //             })
            //             }).then(response => {
            //             var result = response.content.toJSON();
            //             }, error => {
            //             console.error(error);
            //             });

            
        },
   
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
     
  
        }
    };
</script>

<style scoped lang="scss">
    table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
</style>
