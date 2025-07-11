import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import 'react-native-reanimated';



export default function RootLayout() {
 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
   <>
   <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
   <StatusBar style="dark" />
    <Stack
     screenOptions={{
          headerShown: false,
          // contentStyle: { backgroundColor: "white" },
          header: () => null,
          navigationBarHidden: true,
        }}
    >
        <Stack.Screen name="index" options={{ headerShown: false }} />
       
      </Stack>
      </SafeAreaView>
     
      
   </>
     
    
  );
}
