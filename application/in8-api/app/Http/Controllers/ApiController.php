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
        return response($contacts, 200);
    }

    public function createContact(Request $request)
    {
        $existsContact = Contact::where('email', $request->email)->exists();
        if ($existsContact) {
            return response()->json([
                'message' => 'Este e-mail já se encontra cadastrado.'
            ], 400);
        }

        $contact = new Contact;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->birthdate = $request->birthdate;
        $contact->phone = $request->phone;
        $contact->save();

        return response()->json([
            $contact
        ], 201);
    }
}
