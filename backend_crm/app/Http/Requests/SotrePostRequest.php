<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SotrePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'           => 'required|string|max:255',
            'lastname'       => 'required|string|max:255',
            'email'          => 'required|email|unique:client',
            'phone'          => 'sometimes|string|max:20',
            'company'        => 'required|string|max:255',
            'country'        => 'required|string|max:255',
            'languaje'       => 'required|string|max:255',
            'company_size'   => 'required|string|in:crm,marketing,support',
            'main_interest'  => 'required|string|max:255',
            'password'       => 'required|string|min:8|confirmed'
        ];
    }

    public function messages(): array
    {
        return [
            'email.required'    => 'Este correo ya esta registrado',
            'password.required' => 'La contrasena debe tener al menos 8 caracteres', 
        ];
    }
}
