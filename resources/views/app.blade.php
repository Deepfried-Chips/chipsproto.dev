<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>

        <title inertia>{{ config('app.name', 'Deepfried Chips') }}</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="stylesheet" href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap">

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @routes
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <a rel="me" href="https://protogen.social/@DeepfriedChips"></a>
        @inertia
    </body>
</html>
