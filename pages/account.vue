<template>
    <Navbar />
    <div class="bg-indigo-800 relative flex flex-col items-center justify-center h-80">
        <h2 class="text-white text-4xl font-bold">Account category</h2>
        <SearchBar />
    </div>
    <br />

    <div v-for="data in results" class="grid grid-cols-4 gap-4 ml-12">
        <NuxtLink prefetch :to="data._path" class="w-72 bg-white hover:bg-gray-100 h-32 border shadow-md hover:shadow-lg" align="center">
            <br />
            <p class="text-lg font-semibold">{{ data.title }}</p>
            <br />
            <p>{{ data.description }}</p>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                results: []
            };
        },
        async mounted() {
            this.results = await queryContent("/account").only(["title", "description", "_path"]).find();
        }
    };
</script>