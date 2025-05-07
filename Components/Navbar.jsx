import React from 'react'
import { Button, View } from 'react-native'
import "../global.css"

function Navbar({setPage}) {
  return (
    <View className="flex flex-row justify-center items-center gap-3">
        
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