import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './styles/global.css';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-4xl font-bold'>Welcome to Voxify!</Text>
      <StatusBar style='auto' />
    </View>
  );
}
