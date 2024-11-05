import { View, Text, ScrollView } from "react-native";
import { useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: ""
  })

  const [ isSubmitting, setIsSubmitting ] = useState(false)

  const submit = async () => {

  }

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className=" justify-center min-h-[100vh]">
          <View className="w-full justify-center items-center px-4 my-6">
            <Text className="text-black font-pbold text-3xl">
              Care<Text className="text-primary">Match</Text>
            </Text>
            <Text className="font-psemibold text-2xl">Welcome Back!</Text>
            <Text className="text-lg text-gray-500 font-pregular text-center">
              Glad to see you again 👋.{"\n"} Login to your account below.
            </Text>
          </View>
          <View className="w-full px-4">
            <FormField 
              title="First Name"
              value={form.firstName}
              handleChangeText={(e) => setForm({ ...form, firstName: e})}
              otherStyles="mt-7"
              placeholder="enter your first name"
            />
            <FormField 
              title="Last Name"
              value={form.lastName}
              handleChangeText={(e) => setForm({ ...form, lastName: e})}
              otherStyles="mt-7"
              placeholder="enter your last name"
            />
            <FormField 
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
              placeholder="enter your email"
            />
            <FormField 
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e})}
              otherStyles="mt-7"
              placeholder="enter your password"
              
            />
            <FormField 
              title="Confirm Password"
              value={form.confirmPassword}
              handleChangeText={(e) => setForm({ ...form, confirmPassword: e})}
              otherStyles="mt-7"
              placeholder="confirm your password"
              
            />
            <CustomButton 
              title="Login"
              handlePress={submit}
              containerStyles='mt-7'
              isLoading={isSubmitting}
            />
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-500 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-primary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
