<?php

namespace App\Http\Controllers\SignUp;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use Symfony\Component\HttpFoundation\Request;
use App\Models\Client;

class SignUpController extends Controller
{
    public function store(StorePostRequest $request)
    {
        try {
            $client = Client::create($request->validated());

            return response()->json([
                'message' => 'Client created successfully',
                'data' => $client
            ], Request::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating client',
                'error' => $e->getMessage()
            ], Request::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
