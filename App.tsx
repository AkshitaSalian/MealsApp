import { StatusBar } from "expo-status-bar";
import "./global.css";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverview";
import { Ionicons } from "@expo/vector-icons";
import MealsDetails from "./screens/MealsDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "./screens/AboutUs";
import Favourites from "./screens/Favourites";
import FavouritesContextProvider from "./store/context/favourites-context";
import FeedBack from "./screens/Feedback";
import AllPlaces from "./screens/places/AllPlaces";
import AddPlace from "./screens/places/AddPlace";
import IconButton from "./components/IconButton";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen
        name="Places"
        component={AllPlaces}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              color={"black"}
              onPress={() => {
                navigation.navigate("Add Place");
              }}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Add Place"
        component={AddPlace}
        options={{ title: "Add a new place" }}
      />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Feedback" component={FeedBack} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <FavouritesContextProvider>
        <NavigationContainer>
          {/* <SafeAreaView style={{ flex: 1 }}> */}
          <StatusBar style="dark" />

          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false, title: "All categories" }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverView}
              // options={({ route, navigation }) => {
              //   return { title: route?.params?.categoryId };
              // }}
            />
            <Stack.Screen name="MealsDetails" component={MealsDetails} />
          </Stack.Navigator>
          {/* </SafeAreaView> */}

          {/* <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Categories}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="home" />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Categories}
            options={{
              tabBarIcon: ({ color, size }) => <Ionicons name="home" />,
            }}
          />
        </Tab.Navigator> */}
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
