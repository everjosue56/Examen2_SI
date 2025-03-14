import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const categoryaList = ["Tecnologia", "Electrodomesticos", "Joyeria"] 

const useFormulario = () => {
    
        const [formData, setFormData] = useState({
          code: "",
          name: "",
          category: "",
          quantity: "",
          price: "",
          date: "",
          observations: "",
        });
      
        const [errors, setErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isValid, setIsValid] = useState(false);
        const existingCodes = ["PROD123", "ABC456", "XYZ789"]; // Simulación de códigos existentes
      
        useEffect(() => {
          validateForm();
        }, [formData]);
      
        const validateForm = () => {
          let newErrors = {};

          //verificar que no se pase de 10 digitos el codigo y validar que no este registrado ya 
      
          if (!formData.code || formData.code.length > 10) {
            newErrors.code = "El código debe tener hasta 10 caracteres.";
          } else if (existingCodes.includes(formData.code)) {
            newErrors.code = "El código ya existe.";
          }
      
          // validar que el nombre minimo tenga 3 palabras 
          if (!formData.name || formData.name.length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres.";
          }
      
          // validar que el usuario haya seleccionada una categoria 
          if (!formData.category) {
            newErrors.category = "Debe seleccionar una categoría.";
          }
      
          // validar que la cantidad sea mayor a 1
          if (!formData.quantity || isNaN(formData.quantity) || parseInt(formData.quantity) < 1) {
            newErrors.quantity = "La cantidad debe ser un número entero positivo.";
          }
      
        // Validar que el precio sea mayor que a 0
          if (!formData.price || isNaN(formData.price) || parseFloat(formData.price) <= 0) {
            newErrors.price = "El precio debe ser un número positivo.";
          }
      

          // verificar que el cliente haya seleccionado una fecha 
          if (!formData.date) {
            newErrors.date = "Debe seleccionar una fecha.";
          }
      
          setErrors(newErrors);
          setIsValid(Object.keys(newErrors).length === 0);
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (!isValid) return;
      
          setIsSubmitting(true);
          setTimeout(() => {
            alert("Producto registrado con éxito.");
            setIsSubmitting(false);
            setFormData({
              code: "",
              name: "",
              category: "",
              quantity: "",
              price: "",
              date: "",
              observations: "",
            });
          } );
        };

        return {
            errors,
            isSubmitting,
            isValid,
            existingCodes,
            setErrors,
            setIsSubmitting,
            setIsValid,
        };
     
  };
  




export default useFormulario