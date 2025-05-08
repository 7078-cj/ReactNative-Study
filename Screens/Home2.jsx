import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

import "../global.css";
import ItemComponent from '../Components/ItemComponent';


function Home2() {
    
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleDelete = (title) => {
        setItems((prevItems) => prevItems.filter((item) => item.title !== title));
    }


    return (
        <View className="bg-slate-200 flex flex-col justify-center items-center">
            <View className='bg-slate-400 p-4'>
                <Text >Screen2</Text> 
            </View>
            <View className='bg-slate-400 p-4'>
                <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Insert item"
                            placeholderTextColor="#9ca3af"
                            className="bg-white rounded-lg px-4 py-3 mb-4 text-base"
                          />
                <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Insert description"
                            placeholderTextColor="#9ca3af"
                            className="bg-white rounded-lg px-4 py-3 mb-4 text-base"
                          />
                <TouchableOpacity
                            onPress={() => {
                                setItems([...items, { title: name, description: description }]);
                                setName('');
                                setDescription('');
                            }}
                            className="bg-blue-200 px-6 py-3 rounded-lg mt-2 active:bg-blue-700"
                        />
            </View>

            <View className='flex flex-col justify-center items-center h-full bg-slate-100 gap-4'>
                {items.map((item, index) => (
                    <ItemComponent item={item} handleDelete={handleDelete}/>
                ))}
                <View className='bg-slate-200 p-4 rounded-lg shadow-md'>
                    <Text className='text-lg font-bold'>No items</Text>
                </View>
            
            </View>
        </View>
    )
 
}

export default Home2