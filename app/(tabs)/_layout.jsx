import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabIcon = ({ color, name, focused, iconName }) => {
  return (
    <View className="items-center justify-center gap-2">
      <FontAwesome
        name={iconName}
        color={color}
        size={24}
      />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular "
        } text-xs `}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#40ACEC",
          tabBarInactiveTintColor: "#000",
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 1,
            height: 84,
          },
        }}
        
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="home"
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="my-shifts"
          options={{
            title: "My Shifts",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="briefcase"
                color={color}
                name="My Shifts"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Wallet",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="google-wallet"
                color={color}
                name="Wallet"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                iconName="user"
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
