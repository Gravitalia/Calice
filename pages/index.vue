<template>
    <Navbar />
    <div class="bg-indigo-800 relative flex flex-col items-center justify-center h-80">
        <h2 class="text-white text-4xl font-bold">Help center</h2>
        <SearchBar />
    </div>
    <br />

    <div class="grid grid-cols-4 gap-4 ml-12">
        <NuxtLink prefetch to="/account" class="w-72 bg-white hover:bg-gray-100 h-32 border shadow-md hover:shadow-lg" align="center">
            <br />
            <p class="text-lg font-semibold">Account</p>
            <br />
            <p>All information for your account!</p>
        </NuxtLink>
    </div>
</template>