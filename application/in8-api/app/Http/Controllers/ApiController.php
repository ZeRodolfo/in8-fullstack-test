<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiController extends Controller
{
    public function getAllContacts()
    {
        // logic to get all contacts goes here
        $contacts = Contact::get()->toJson(JSON_PRETTY_PRINT);
        return Response($contacts, 200);
    }
}
