<template>
    <HeaderText />
    <main class="flex flex-row py-[3.25rem] px-[0.75rem] gap-[0.625rem]">
        <Navigation />
        <div class="w-[80%]">
            <router-view>
            </router-view>
        </div>
    </main>
    <Footer />
</template>
<script>
import HeaderText from "@/components/HeaderText.vue"
import Navigation from "@/components/Navigation.vue"
import Tasks from "@/components/Tasks.vue"
import Footer from "@/components/Footer.vue"
export default {
    components:{
        HeaderText,Navigation,Tasks,Footer
    }
}
</script>