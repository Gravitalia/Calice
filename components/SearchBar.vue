<template>
    <div>
        <br />
        <input class="mb-4 w-96 rounded-full py-1.5 p-4" placeholder="Search..." type="text" v-model="searchQuery" />
        <div class="absolute">
            <NuxtLink prefetch v-if="results.length !== 0" v-for="(element, index) of results" :key="index" :to="element._path" class="rounded-sm w-96 block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-out focus:outline-none relative bg-white hover:bg-gray-50 hover:text-gray-900">
                <div class="text-gray-800 font-semibold text-xl">
                    <span class="text-gray-500 font-base text-base">
                        {{ element.title }}
                    </span>
                </div>
                <div class="whitespace-normal text-justify">
                    {{ element.description }}
                </div>
            </NuxtLink>
            <div v-else-if="results.length === 0 && searchQuery.length !== 0">
                <div class="rounded-sm w-96 block px-4 py-2 text-sm text-gray-700 transition duration-150 ease-out focus:outline-none relative bg-white hover:bg-gray-50 hover:text-gray-900">
                    <div class="whitespace-normal text-justify">
                        No results found... Contact us!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchQuery: "",
                results: []
            };
        },
        watch: {
            async searchQuery(q) {
                if(q === "") return this.results = [];
                this.results = await queryContent("/").where({ description: { $contains: q } }).only(["title", "description", "_path"]).limit(2).find();
            }
        }
    };
</script>