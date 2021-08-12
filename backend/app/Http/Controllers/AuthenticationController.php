<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function user() 
    {
        return (object) array(
            'is_login' => Auth::check(),
            'user' => Auth::check() ? Auth::user() : null
        );
    }
}
