import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[100vh] px-4">
          <Text className="text-black font-pbold text-3xl">Care<Text className="text-primary">Match</Text></Text>
          <Image
            source={images.onboardingImage}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-lg text-gray-500 font-pregular text-center">
              We are powering a human tech approach for hiring by evolbing the
              way recruiters and healthcare talent find each other
            </Text>
            
          </View>
          <CustomButton title="get started" containerStyles="mt-7 w-full" handlePress={() => router.push('/sign-in')}  />
        </View>
      </ScrollView>
      {/* <StatusBar style="light" backgroundColor="#fff" /> */}
    </SafeAreaView>
  );
}
