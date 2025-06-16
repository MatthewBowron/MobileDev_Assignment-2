import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ href: null, tabBarLabel: "index", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="calgary"
        options={{ tabBarLabel: "Calgary", tabBarIcon: () => null }}
      />
      <Tabs.Screen
        name="vancouver"
        options={{ tabBarLabel: "Vancouver", tabBarIcon: () => null }}
      />
    </Tabs>
  );
}