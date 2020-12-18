<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:title" content="{{ config('app.name') }}">
    <meta property="og:description" content="A beautiful, simple, and free bio link with great features">
    <meta property="og:image" content="{{ asset('static/favicon/android-chrome-192x192.png') }}">
    @include('extensions.favicon')
    <title>@yield('page-title')</title>
    <script>
        window.app = {
            csrf_token: '{{ csrf_token() }}'
        }
    </script>
    @routes
</head>
<body class="dark:bg-gray-900">
    @inertia
    <div class="mx-auto flex flex-col md:flex-row items-center justify-between p-5 w-full sm:w-10/12 md:w-8/12 xl:w-7/12">
        @include('layouts.footer')
    </div>
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @include('extensions.cookie')
    @include('extensions.google')
    @include('extensions.support')
</body>
</html>
