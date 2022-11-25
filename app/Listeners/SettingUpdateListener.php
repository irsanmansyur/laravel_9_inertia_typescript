<?php

namespace App\Listeners;

use App\Events\SettingUpdateEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Cache;

class SettingUpdateListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\SettingUpdateEvent  $event
     * @return void
     */
    public function handle(SettingUpdateEvent $event)
    {
        Cache::forget("setting-app");
    }
}
