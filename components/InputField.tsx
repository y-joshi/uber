import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { InputFieldProps } from '@/types/types';

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  className,
  iconStyle,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className={`text-xl font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-center items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image
                source={icon}
                className={`justify-center w-6 h-6 ml-5 ${iconStyle}`}
              />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[17px] flex-1 text-left ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              placeholderTextColor="#A3A3A3"
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
