import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomButton from './CustomButton';


const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-500 font-pmedium">{title}</Text>
      <View className="border border-gray-100 h-16 w-full rounded-lg px-4 flex-row items-center"> 
        <TextInput className="flex-1 text-black font-pregular text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#6b7280"
            onChangeText={handleChangeText}
            keyboardType={keyboardType}
            secureTextEntry={title === 'Password' && !showPassword}
        />
        { (title === "Password" || title === "Confirm Password") && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome 
                    name={!showPassword ? 'eye' : 'eye-slash'}
                    size={24}
                />
            </TouchableOpacity>
        )}
        
      </View>
    </View>
  )
}

export default FormField