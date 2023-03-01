<template>
    <main class="flex flex-row py-[3.25rem] px-[0.75rem] gap-[0.625rem]">
        <Navigation />
        <Content />
    </main>
</template>
<script>
import Navigation from "@/components/Navigation.vue"
import Content from "@/components/Content.vue"
export default {
    components:{
        Navigation,Content
    }
}
</script>