import { useState } from 'react';

/**
 * Manejo de campos del formularios
 * @param {Object} initialForm Formulario inicial 
 * @returns {Object} Formulario con los campos y funciones para manejarlos
 * @property {Object} formState Formulario con los campos
 * @property {Function} onInputChange Maneja los cambios en los campos del formulario
 * @property {Function} onResetForm Reinicia el formulario
 */
export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}