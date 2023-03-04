<template>
    <main class="flex flex-row py-[3.25rem] px-[0.75rem] gap-[0.625rem]">
        <Navigation />
        <div class="w-[80%]">
            <router-view>
            </router-view>
        </div>
    </main>
</template>
<script>
import Navigation from "@/components/Navigation.vue"
import Tasks from "@/components/Tasks.vue"
export default {
    components:{
        Navigation,Tasks
    }
}
</script>