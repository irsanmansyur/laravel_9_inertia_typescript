<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        Inertia::setRootView("public");
        return Inertia::render("contact/home");
    }
    public function sendMessage(Request $request)
    {
        $setting = getSettingApp();
        $attr = $request->validate([
            "name" => "required",
            "email" => "required|email",
            "telp" => "required",
            "subject" => "required",
            "message" => "required|string",
        ]);

        Mail::to($setting->options['email'])->send(new ContactFormMail($attr));
        return back()->with("success", "your mail has been receiver");
    }
}
