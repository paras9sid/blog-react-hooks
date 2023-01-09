import { useState } from "react";

//creating custom hooks for creation Posts
export function useFormInput(initiavalue){
    const [value,setValue] = useState('');

    function handleChange(e){
        setValue(e.target.value);
    }

    return {
        value,
        onChange:handleChange
    }

}