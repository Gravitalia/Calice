<template>
    <div>
        <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
            <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
                <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div class="flex flex-row items-center justify-between p-4">
                        <a href="/" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                            <img alt="Gravitalia" src="/favicon.webp" width="40" />
                        </a>
                        <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <nav class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                        <a class="cursor-pointer py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-[#332b43] dark:bg-indigo-600 flex" href="mailto:contact@gravitalia.com"><div class="pt-1 pr-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg></div> Contact</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>