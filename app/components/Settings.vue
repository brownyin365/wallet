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
            <Label class="action-bar-title" text="Settings"></Label>
        </ActionBar>

        <GridLayout class="page-content">
           
             <!-- <ScrollView class="container"> -->
            <!-- <ListView for="item in items" class="list-group"
                @itemTap="onItemTap">
                <v-template>
                    <GridLayout class="list-group-item" rows="*"
                        columns="auto, *">
                        <!-- <Image row="0" col="0" :src="item.src"
                            class="thumb img-circle" /> -->
                        <!-- <Label class="h2 text-left p-10 banner" row="0"
                            col="1" :text="item.text" />
                        <Label class="h3 text-right p-10 banner" row="0"
                            col="1" :text="item.last"
                            horizontalAlignment="right" />
                    </GridLayout>
                </v-template>
            </ListView> -->

            <!-- <RadDataForm :source="person">
            </RadDataForm>
        </ScrollView> -->

        <StackLayout>
      <RadListView ref="listView"
                   for="item in items"
                   @itemTap="onItemTap">
        <v-template>
          <StackLayout class="item" orientation="horizontalvertical" itemHeight="200" spanCount="1" BorderWidth="2">
            <Label :text="item.text" class="nameLabel"></Label>
            <Label :text="item.last" class="descriptionLabel"></Label>
            <StackLayout class="hr-dark"></StackLayout>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
       
        </GridLayout> 
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        data() {
            return {
                
                items: [{
                        text: "First Name",
                        last: "Robert",
                        src: "1"
                    },
                    {
                        text: "Middle Name",
                        last: "Bawa",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                    },
                    {
                        text: "Last Name",
                        last: "Bawaah",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                    },
                    {
                        text: "Date of Birth",
                        last: "12-July-2020",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                    },
                    {
                        text: "Gender",
                        last: "Male",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                    },
                    {
                        text: "Country of Origin",
                        last: "Ghana",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                    },
                    {
                        text: "Country of Birth",
                        last: "Ghana",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                    },
                    {
                        text: "Region",
                        last: "Upper East",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
                    },
                    {
                        text: "Hometown",
                        last: "Tongo",
                        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
                    }
                ]
            };
        },
        
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Settings");
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
             onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
        }
    };
</script>

<style scoped lang="scss">
    .container {
        /* background-color: #FD89CC; */
        text-transform: uppercase;
    }
    .nameLabel {
        font-size: 20;
        color: #000000;

    }
    .descriptionLabel{
        font-size: 16;
    }
</style>