import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import "../global.css";



function Home({navigation}) {
  const [count, setCount] = useState(0);
  

  return (
    <View className="flex flex-col justify-center items-center bg-slate-400 gap-5 p-4 rounded-lg shadow-md"> 
      <Text className="text-lg mb-4 p-5 bg-slate-400">Count: {count}</Text>
      <TouchableOpacity
        onPress={()=>setCount(count + 1)}
        className="bg-blue-200 px-6 py-3 rounded-lg mt-2 active:bg-blue-700"
      >
        <Text className="text-white text-center text-base font-semibold">increase</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;