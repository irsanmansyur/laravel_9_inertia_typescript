<x-mail::message>
    # {{ $subject }}

    ## {{ $message}}

    Feel free to contact me via
    {{$telp}} or {{ $email}}

    Thanks,
    == {{ $name }} ==
    {{ config('app.name') }}
</x-mail::message>
