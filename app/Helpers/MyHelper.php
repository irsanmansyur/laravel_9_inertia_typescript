<?php

use App\Models\Setting;
use Illuminate\Support\Facades\Cache;

function getSettingApp(): Setting
{
    $settings = Cache::get('setting-app');
    if ($settings) return $settings;

    $settings = Setting::first();
    Cache::add("setting-app", $settings);
    return $settings;
}
