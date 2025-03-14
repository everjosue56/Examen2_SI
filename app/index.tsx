import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import useFormulario from '@/hook/useFormulario'
 

 
const Index = () => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    handleSelectTo,
    categoryList,
    isSubmitting
  } = useFormulario();

  return (
    <View>
      <Text className='text-center color-white font-bold bg-black'>Gestión de Inventario</Text>
      <View className='bg-slate-500 mt-3'>
        <Text className='font-extrabold mt-5 text-center color-white'>Registro de productos</Text>
        
        {/* Código de producto */}
        <Text className='text-bold mt-3 text-center color-white'>Código de producto</Text>
        <TextInput
          className='bg-white text-center mt-2 rounded-2xl ml-4 mr-4'
          placeholder='Ingrese el código'
          maxLength={10}
          value={formData.code}
          onChangeText={(text) => handleChange("code", text)}
        />
        {errors.code && <Text className='text-red-500 text-center'>{errors.code}</Text>}
        
        {/* Nombre de producto */}
        <Text className='text-bold mt-3 text-center color-white'>Nombre de producto</Text>
        <TextInput
          className='bg-white text-center mt-2 rounded-2xl ml-4 mr-4'
          placeholder='Ingrese el nombre'
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
        {errors.name && <Text className='text-red-500 text-center'>{errors.name}</Text>}
        
        {/* Categoría */}
        <Text className='text-bold mt-3 text-center color-white'>Categoría</Text>
        <FlatList
          className='bg-white mt-3 ml-5 mr-5 rounded-xl'
          data={categoryList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity className='items-start' onPress={() => handleSelectTo(item)}>
              <Text className='ml-10 color-slate-500 font-medium'>{item}</Text>
            </TouchableOpacity>
          )}
        />
        {errors.category && <Text className='text-red-500 text-center'>{errors.category}</Text>}
        
        {/* Cantidad */}
        <Text className='text-bold mt-3 text-center color-white'>Cantidad</Text>
        <TextInput
          className='bg-white text-center mt-2 rounded-2xl ml-4 mr-4'
          placeholder='Ingrese la cantidad'
          keyboardType='numeric'
          value={formData.quantity}
          onChangeText={(text) => handleChange("quantity", text)}
        />
        {errors.quantity && <Text className='text-red-500 text-center'>{errors.quantity}</Text>}
        
        {/* Precio unitario */}
        <Text className='text-bold mt-3 text-center color-white'>Precio unitario</Text>
        <TextInput
          className='bg-white text-center mt-2 rounded-2xl ml-4 mr-4'
          placeholder='Ingrese el precio'
          keyboardType='numeric'
          value={formData.price}
          onChangeText={(text) => handleChange("price", text)}
        />
        {errors.price && <Text className='text-red-500 text-center'>{errors.price}</Text>}
        
        {/* Fecha de ingreso */}
        <Text className='text-bold mt-3 text-center color-white'>Fecha de ingreso</Text>
        <TextInput
          className='bg-white text-center mt-2 rounded-2xl ml-4 mr-4'
          placeholder='Ingrese una fecha'
          value={formData.date}
          onChangeText={(text) => handleChange("date", text)}
        />
        {errors.date && <Text className='text-red-500 text-center'>{errors.date}</Text>}
        
        {/* Observaciones */}
        <Text className='text-bold mt-3 text-center color-white'>Observaciones</Text>
        <TextInput
          className='bg-white text-center mt-2 rounded-2xl ml-4 mr-4'
          placeholder='Ingrese una observación'
          value={formData.observations}
          onChangeText={(text) => handleChange("observations", text)}
        />
        
        {/* Botón de Guardar */}
        <TouchableOpacity
          className={`bg-green-700 rounded-full mt-5 ${isSubmitting ? "opacity-50" : ""}`}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          <Text className='text-bold mt-3 text-center color-white'>{isSubmitting ? "Guardando..." : "Guardar"}</Text>
        </TouchableOpacity>
      </View>
      <Text className='bg-black color-white mt-5 text-center'>@Sistemas De Información</Text>
    </View>
  );
};

export default Index;
