<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Client extends Authenticable implements JWTSubject
{
    protected $table = 'client';

    /**
     * The attributes that are mass assignable.
     * @var list<string>
     */
    protected $fillable = [
        'name',           
        'lastname',       
        'email',      
        'phone',                             
        'country',        
        'languaje',       
        'company_size',   
        'main_interest',  
        'password'      
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return []; //Pais, rol, etc... Cosas publicas, ningun dato sensible
    }
}
