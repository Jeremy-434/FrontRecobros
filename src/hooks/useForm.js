import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialValue = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialValue);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState])

    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys(formValidation)) {
            if ( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => {
        setFormState(initialValue);
    }

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Error de validación'] = formValidations[formField];
            // const [ fn, errorMessage ] = formField;

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}