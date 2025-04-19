import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950">
      <Text className="text-2xl font-bold text-red-500">Welcome to Voxify!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
