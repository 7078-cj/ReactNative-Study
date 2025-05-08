import React from 'react'
import { Touchable } from 'react-native'

function ItemComponent({item, handleDelete, }) {
  return (
    <Touchable className='flex flex-col justify-center items-center h-full bg-slate-100 gap-4'>
      <Touchable className='bg-slate-200 p-4 rounded-lg shadow-md'>
        <Text className='text-lg font-bold'>{item.title}</Text>
        <Text className='text-sm text-gray-500'>{item.description}</Text>
      </Touchable>
      <Touchable className='bg-red-200 px-6 py-3 rounded-lg mt-2 active:bg-red-700' onPress={() => handleDelete(item.title)}>
        <Text className='text-white'>Delete</Text>
      </Touchable>
    </Touchable>
  )
}

export default ItemComponent