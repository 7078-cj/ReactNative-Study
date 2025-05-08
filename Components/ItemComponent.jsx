import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function ItemComponent({item, handleDelete, }) {
  return (
    <TouchableOpacity className='flex flex-row justify-center items-center  bg-slate-100 gap-4 p-3 rounded-2xl shadow-md '>
      <TouchableOpacity className=''>
        <Text className='text-lg font-bold'>{item.title}</Text>
        <Text className='text-sm text-gray-500'>{item.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-red-200 px-6 py-3 rounded-lg mt-2 active:bg-red-700' onPress={() => handleDelete(item.title)}>
        <Text className='text-white'>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ItemComponent