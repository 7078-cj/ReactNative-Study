import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import "../global.css"
import axios from 'axios';


function Pokemon() {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    try {
      setError('');
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      setPokemon(res.data);
      console.log(res.data);
    } catch (err) {
      setError('Pokémon not found');
      setPokemon(null);
    }
  };
   
    
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="bg-slate-200 flex-1 justify-center items-center p-6">
        <View className="bg-slate-500 p-6 w-full max-w-md rounded-2xl shadow-md">
          <Text className="text-2xl font-bold text-white mb-4 text-center">Pokémon Search</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g., pikachu"
            placeholderTextColor="#9ca3af"
            className="bg-white rounded-lg px-4 py-3 mb-4 text-base"
          />
          <TouchableOpacity
            onPress={fetchPokemon}
            className="bg-blue-600 px-6 py-3 rounded-lg mt-2 active:bg-blue-700"
          >
            <Text className="text-white text-center text-base font-semibold">Fetch</Text>
          </TouchableOpacity>

          {error ? (
            <Text className="text-red-600 mt-4 text-center">{error}</Text>
          ) : null}

          {pokemon && (
            <View className="mt-6 items-center">
              <Text className="text-xl font-semibold capitalize text-white mb-2">
                {pokemon.name}
              </Text>
              <Image
                source={{ uri: pokemon.sprites.front_default }}
                style={{ width: 120, height: 120 }}
              />

              <View className="mt-4 w-full bg-slate-600 rounded-lg p-4">
                <Text className="text-white font-semibold text-center mb-2">Base Stats</Text>
                {pokemon.stats.map((stat, index) => (
                  <View key={index} className="flex-row justify-between mb-1">
                    <Text className="text-white capitalize">{stat.stat.name}</Text>
                    <Text className="text-white font-bold">{stat.base_stat}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
   
  )
}

export default Pokemon