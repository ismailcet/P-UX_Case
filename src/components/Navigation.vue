<template>
    <header class="w-[20%] h-[63.75rem] rounded-3xl navbar px-[1.25rem] py-[1.375rem]">
        <div class="logo_section">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="Logo" class="logo mb-5">
            </router-link>
        </div>
        <hr class="text-white">
        <div class="navbar_item_section pt-5">
            <ul class="navbar_items ">
                <router-link to="/task" active-class="active" class="navbar_item  text-white font-bold text-base p-2 flex items-center gap-3 mb-6">
                    <li><fa icon="fa-solid fa-list-check" /> Görevlerim</li>
                </router-link>
                <router-link to="/projects" active-class="active" class="navbar_item  text-white font-bold text-base p-2 flex items-center gap-3 mb-6">
                    <li><fa icon="fa-solid fa-folder-open" /> Projelerim</li>
                </router-link>
                <router-link to="company" active-class="active" class="navbar_item text-white font-bold text-base p-2 flex items-center gap-3 mb-6">                
                    <li><fa icon="fa-solid fa-briefcase" /> Firmalar</li>
                </router-link>
                <router-link to="calendar" active-class="active" class="navbar_item text-white font-bold text-base p-2 flex items-center gap-3 mb-6">
                    <li><fa icon="fa-solid fa-calendar" /> Takvim</li>
                </router-link>
                <router-link to="people" active-class="active" class="navbar_item text-white font-bold text-base p-2 flex items-center gap-3 mb-6">
                    <li><fa icon="fa-solid fa-user-group" /> Kişiler</li>
                </router-link>
                <router-link to="reports" active-class="active" class="navbar_item text-white font-bold text-base p-2 flex items-center gap-3 mb-6">
                    <li><fa icon="fa-solid fa-chart-line" /> Raporlar</li>
                </router-link>
                <router-link to="automation" active-class="active" class="navbar_item text-white font-bold text-base p-2 flex items-center gap-3">
                    <li ><fa icon="fa-solid fa-timeline" /> Otomasyon</li>
                </router-link>
            </ul>
        </div>
    </header>
</template>
<script>

export default {
    
}
</script>