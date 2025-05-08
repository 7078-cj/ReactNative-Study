import React from 'react'
import { Button, View } from 'react-native'
import "../global.css"

function Navbar({setPage}) {
  return (
    <View className="flex flex-row justify-center items-center gap-3 w-full max-w-md p-4 bg-slate-500 rounded-2xl shadow-md">
        
        <Button
        title="Home"
        onPress={() =>
            setPage('Home')
        }
        />
        <Button
        title="profile"
        onPress={() =>
          setPage('Lists')
        }
        />
        <Button
        title="Pokemon"
        onPress={() =>
          setPage('Pokemon')
        }
        />
    </View>
  )
}

export default Navbar