import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

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
        <View className='bg-slate-200 flex flex-col justify-center items-center p-6 h-[500px] gap-4'>
            <View className='bg-slate-500 p-4 flex flex-row justify-center items-center w-full max-w-md rounded-2xl shadow-md'>
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
                        >
                            <Text className="text-white text-center text-base font-semibold">Add</Text>
                        </TouchableOpacity>
            </View>

            <ScrollView className='flex-1 w-full'>
                <View className='flex flex-row flex-wrap w-[300px] flex-grow justify-center items-center h-[500px] bg-slate-100 gap-4'>
                    {items.map((item, index) => (
                        <ItemComponent key={index} item={item} handleDelete={handleDelete}/>
                    ))}
                    {items.length === 0 && (
                        <Text className='text-lg font-bold'>No items</Text>
                    )}

                    
                </View>
            
            </ScrollView>
        </View>
    )
 
}

export default Home2