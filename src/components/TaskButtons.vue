<template>
    <section class="task_content mt-8">
        <div class="title_section flex flex-row justify-between items-center">
            <h3 class="title_content text-2xl font-semibold text-[#212121]">Görevlerim</h3>
            <ul class="notifications flex gap-2">
                <li class="notification flex items-center justify-center gap-[0.625rem] px-4 py-2 border-[1px] border-[#D5C9FD] rounded-lg w-[150px] text-sm">
                    <span class="icon "><i class="fa-solid fa-xmark bg-[#F04438] w-5 h-5 flex justify-center items-center text-white rounded-[50%]"></i></span>
                    <p class="text-sm font-bold">Geç <span class="font-black">5</span></p>
                </li>
                <li class="notification flex items-center justify-center gap-[0.625rem] px-4 py-2 border-[1px] border-[#D5C9FD] rounded-lg text-sm">
                    <span class="icon"><i class="fa-solid fa-info bg-[#27ACDD] w-5 h-5 flex justify-center items-center text-white rounded-[50%]"></i></span>
                    <p class="text-sm font-bold">Devam Eden <span class="font-black">12</span></p>
                </li>
                <li class="notification flex items-center justify-center gap-[0.625rem] px-4 py-2 border-[1px] border-[#D5C9FD] rounded-lg  text-sm">
                    <span class="icon"><i class="fa-solid fa-check bg-[#12B76A] w-5 h-5 flex justify-center items-center text-white rounded-[50%]"></i></span>
                    <p class="text-sm font-bold">Tamamlanan <span class="font-black">35</span></p>
                </li>
            </ul>
        </div>
        <div class="button_section mt-6 flex items-center justify-between">
            <div class="left_buttons flex items-center gap-8">
                <div class="select_buttons flex items-center px-[0.125rem] py-1 gap-1 bg-[#FAFAFA] min-w-[21.25rem] h-[2.5rem] rounded-lg">
                    <button @click="changeToggle('liste')" class="btn btn-select flex items-center gap-[0.625rem] px-[1.75rem] py-[0.5rem bg-white rounded-lg" :class="this.toggle==='liste' && 'btn-select-one'">
                        <i class="fa-solid fa-bars"></i>
                        Liste
                    </button>
                    <button @click="changeToggle('galeri')" class="btn btn-select flex items-center gap-[0.625rem] px-[1.75rem] py-[0.5rem] text-[#212121]" :class="this.toggle==='galeri' && 'btn-select-one'">
                        <i class="fa-sharp fa-solid fa-table-cells-large"></i>
                        Galeri
                    </button>
                    <button @click="changeToggle('timeline')" class="btn btn-select flex items-center gap-[0.625rem] px-[1.75rem] py-[0.5rem] text-[#212121]" :class="this.toggle==='timeline' && 'btn-select-one'">
                        <i class="fa-sharp fa-solid fa-list-ul"></i>
                        Timeline
                    </button>
                </div>
                <button class="btn btn-filter px-4 py-2 text-[#724CF9] border-[#724CF9] border-[1px] rounded-lg flex items-center gap-[0.625rem]">
                    <i class="fa-solid fa-filter"></i>                    
                    Filtrele</button>
            </div>

            <div class="right_buttons flex items-center justify-between gap-4">
                <button class="btn btn-addTask flex items-center justify-center gap-3 px-4 py-2 text-white bg-[#724CF9] rounded-xl max-h-[2.5rem]">
                    <i class="fa-solid fa-plus"></i>
                    Yeni Görev Ekle
                </button>
                <button class="btn btn-edit flex items-center justify-center gap-3 px-4 py-2 border-[1px] border-[#724CF9] text-[#724CF9] rounded-xl capitalize max-h-[2.5rem] hover:shadow-lg hover:shadow-indigo-500/40 transition ease-in-out">
                    <img src="@/assets/editSections.png" alt="Edit Section">
                    alanları düzenle
                </button>
                <button class="btn btn-sort flex items-center justify-center gap-3 px-4 py-2 border-[1px] border-[#724CF9] text-[#724CF9] rounded-xl capitalize max-h-[2.5rem] hover:shadow-lg hover:shadow-indigo-500/40 transition ease-in-out">
                    <img src="@/assets/updown.png" alt="Up Down">
                    sırala
                </button>

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            toggle:'liste',
        }
    },
    methods:{
        changeToggle(name){
            this.toggle=name
        }
    }
}
</script>