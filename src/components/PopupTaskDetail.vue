<template>
    <section class="task_detail w-full bg-white rounded-t-3xl rounded-r-3xl overflow-x-hidden">
        <div class="detail_header h-[6rem] flex justify-around py-2 px-20 text-white rounded-t-2xl rounded-r-2x">
            <div class="detail_titles">
                <p class="text-sm font-normal">{{this.selectedTask.value.title}}</p>
                <h3 class="title text-4xl font-semibold">UI Benchmark</h3>
                <p class="font-normal text-sm">Yapılacaklar</p>
            </div>
            <div class="detail_edit_button">
                <button class="btn btn-edit flex items-center gap-2 text-[#724CF9] px-4 py-2 bg-white rounded-lg">
                    <i class="fa-regular fa-pen-to-square"></i>
                    Düzenle
                </button>
            </div>
            <button class="btn btn-close absolute top-4 right-6" @click="changeModal()">
                    <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="detail_content pt-2 px-5">
            <div class="detail_navbar">
                <ul class="detail_navbar_items flex items-center justify-center gap-1">
                    <li class="detail_navbar_item p-1 bg-[#EEEAFE] text-[#724CF9] rounded-lg cursor-pointer">Detaylar</li>
                    <li class="detail_navbar_item p-1 cursor-pointer">Dosyalar</li>
                    <li class="detail_navbar_item p-1 cursor-pointer">Süreler</li>
                    <li class="detail_navbar_item p-1 cursor-pointer">Yorumlar</li>
                    <li class="detail_navbar_item p-1 cursor-pointer">Gantt</li>
                    <li class="detail_navbar_item p-1 cursor-pointer">Ayarlar</li>
                    <li class="detail_navbar_item p-1 cursor-pointer">Bağlantılar</li>
                </ul>
            </div>
            <div class="detail_container flex gap-6">
                <div class="detail_task_section basis-1/3 ">
                    <div class="task_title_section flex items-center justify-between">
                        <h3 class="task_section_title text-sm font-bold text-primary">Alt Görevler</h3>
                        <button class="btn-btn add_task px-4 py-2 bg-[#4224F5] text-white rounded-lg flex items-center gap-2">
                            <i class="fa-solid fa-plus"></i>
                            Alt Görev Ekle
                        </button>
                    </div>
                    <div class="detail_task_content flex gap-4 justify-between items-center">
                        <div class="line pt-1">
                            <img src="@/assets/line.png" alt="TimeLine">
                        </div>
                        <div class="details">
                            <ul class="details_content pt-6">
                                <li class="border-[1px] border-[#BDBDBD] w-[298px] flex justify-between p-3 rounded-lg mb-[0.5rem]">
                                    <div class="detail_text">
                                        <h3 class="text-base font-bold">{{this.selectedTask.value.task}} - benchmark</h3>
                                        <p class="text-xs font-normal">{{this.selectedTask.value.title}}</p>
                                        <p class="text-xs font-normal">{{ this.selectedTask.value.category }}</p>
                                    </div>
                                    <span class="text-base">
                                        <i class="fa-solid fa-plus"></i>
                                    </span>  
                                </li>
                                <li class="border-[1px] border-[#BDBDBD] w-[298px] flex justify-between p-3 rounded-lg mb-[0.5rem]">
                                    <div class="detail_text">
                                        <h3 class="text-base font-bold">Search bar benchmark</h3>
                                        <p class="text-xs font-normal">{{this.selectedTask.value.title}}</p>
                                        <p class="text-xs font-normal">{{ this.selectedTask.value.category }}</p>
                                    </div>
                                    <span><i class="fa-solid fa-plus"></i></span>
                                </li>
                                <li class="border-[1px] border-[#BDBDBD] w-[298px] flex justify-between p-3 rounded-lg mb-[0.5rem]">
                                    <div class="detail_text">
                                        <h3 class="text-base font-bold">Dashboard benchmark</h3>
                                        <p class="text-xs font-normal">{{this.selectedTask.value.title}}</p>
                                        <p class="text-xs font-normal">{{ this.selectedTask.value.category }}</p>
                                    </div>
                                    <span><i class="fa-solid fa-plus"></i></span>
                                </li>
                                <li class="border-[1px] border-[#BDBDBD] w-[298px] flex justify-between p-3 rounded-lg ">
                                    <div class="detail_text">
                                        <h3 class="text-base font-bold">Dashboard benchmark</h3>
                                        <p class="text-xs font-normal">{{this.selectedTask.value.title}}</p>
                                        <p class="text-xs font-normal">{{ this.selectedTask.value.category }}</p>
                                    </div>
                                    <span><i class="fa-solid fa-plus"></i></span>
                                </li>
                            </ul>
                            <span class="cursor-pointer text-[#6A45F8] flex justify-end pt-1">Tümünü Gör</span>
                        </div>
                    </div>
                    <div class="time_graph_contet flex justify-around relative pt-4">
                        <img src="@/assets/Union.png" alt="" class="absolute -z-10 right-0 -top-4"> 
                        <div class="status">
                            <h3 class="text-base font-bold">İlerleme Durumu</h3>
                            <p class="flex justify-between text-[#757575] text-sm font-semibold" >Toplam <span class="text-[#5F3CF7] text-xs">24 sa</span></p>
                            <p class="flex justify-between text-[#757575] text-sm font-semibold">İlerleme<span class="text-[#5F3CF7] text-xs">11 sa 32 dk</span></p>
                        </div>
                        <div class="time_bar">
                            <CircleProgress :percent="46" :size="60"  :border-width="6" :border-bg-width="6" fill-color='#8767FA'/>
                        </div>
                    </div>
                </div>
                <div class="detail_task_main basis-2/3 text-primary">
                    <div class="desc_section mb-4">
                        <h3 class="desc_title text-sm font-bold mb-4">Açıklama</h3>
                        <p class="text-sm font-normal">Lorem ipsum dolor sit amet consectetur. Diam nibh mi elementum imperdiet sit mauris tempus. Ornare quisque tortor rhoncus nisl sed diam. Eget porttitor amet congue cum laoreet dictum at cras. Ipsum pellentesque convallis.</p>
                    </div>
                    <div class="tag_section mb-4">
                        <h3 class="tag_title text-sm font-bold mb-4">Etiket</h3>
                        <p class="text-sm font-normal">Etiket-1, Eitket-2, Etiket-3, Etiket-4</p>
                    </div>
                    <div class="time_section flex items-center gap-56 mb-4">
                        <p class="flex flex-col">
                            <span class="text-sm font-bold mb-1">Başlangıç Tarihi</span><span>09.01.2022</span>
                        </p>
                        <p class="flex flex-col">
                            <span class="text-sm font-bold mb-1">Bitiş Tarihi</span><span>12.01.2022</span>
                        </p>
                    </div>
                    <div class="duration_section mb-4">
                        <h3 class="duration_title text-sm font-bold mb-4">Süre</h3>
                        <p class="flex items-center gap-4">
                            <span>Saat</span><span>24</span><span>Dakika</span><span>00</span>
                        </p>
                    </div>
                    <div class="status_section mb-4">
                        <h3 class="status_title text-sm font-bold mb-4">Öncelik</h3>
                        <button class=" py-1 text-white rounded-[40px] w-[5rem]" :class="`${this.selectedTask.value.value.color}`">{{this.selectedTask.value.value.value}}</button>
                    </div>
                    <div class="people_section">
                        <h3 class="people_title text-sm font-bold mb-4">Kişiler</h3>
                        <div>
                            <span class="flex gap-2 text-sm font-normal mb-2">
                                <img src="@/assets/peopleIcon.png" alt="People Icon">
                                Guillemette Jacob
                            </span>
                            <span class="flex gap-2 text-sm font-normal mb-2">
                                <img src="@/assets/peopleIcon.png" alt="People Icon">
                                Yasmine Thys</span>
                            <span class="flex gap-2 text-sm font-normal">
                                <img src="@/assets/peopleIcon.png" alt="People Icon">
                                Solene Aubert</span>
                        </div>
                    </div>
                </div>
                <div class="detail_task_planner basis-1/3 px-6 pt-2 text-primary">
                    <h2 class="planner-title text-2xl font-semibold mb-6">Süre Ekle</h2>
                    <div class="name_section flex flex-col relative mb-6">
                        <label for="name" class="text-sm font-bold mb-2">Kim</label>
                        <i class="fa-solid fa-user text-[#BDBDBD] absolute top-11 left-4"></i>
                        <input type="text" name="name" id="name" class="w-[17.5rem] h-[3rem] border-[1px] border-[#BDBDBD] rounded-lg bg-[#eee] text-[#757575] pl-[2.375rem]" placeholder="Holly Golightly" disabled>
                    </div>
                    <div class="date_section flex flex-col relative mb-6">
                        <i class="fa-solid fa-calendar text-[#BDBDBD] absolute top-11 left-4"></i>
                        <label for="" class="text-sm font-bold mb-2">Tarih</label>
                        <input type="text" class="w-[17.5rem] h-[3rem] border-[1px] border-[#BDBDBD] rounded-lg bg-[#fff] text-[#757575] pl-[2.375rem] pr-3" placeholder="Tarih seçiniz">
                    </div>
                    <div class="time_section flex mb-6">
                        <div class="start basis-1/2">
                            <label for="" class="text-sm font-bold mb-2">Başlangıç Zamanı</label>
                            <input type="time" name="" id="" class="h-[3rem] border-[1px] border-[#BDBDBD] rounded-lg pl-2">
                        </div>
                        <div class="end basis-1/2">
                            <label for="" class="text-sm font-bold mb-2">Bitiş Zamanı</label>
                            <input type="time" name="" id="" class="h-[3rem] border-[1px] border-[#BDBDBD] rounded-lg pl-2">
                        </div>
                    </div>                    
                    <div class="duraction mb-4">
                        <h3 class="text-sm font-bold mb-2">Harcanan Süre</h3>
                        <p class="text-xs font-normal pl-2">0:50</p>
                    </div>
                    <div class="description_section mb-6">
                        <h3 class="text-sm font-bold mb-2">Açıklama</h3>
                        <input type="text" name="" id="" class="w-[17.5rem] h-[2rem] border-[1px] border-[#BDBDBD] rounded-lg bg-[#fff] text-[#757575] pl-[2.375rem] pr-3">
                    </div>
                    <button class="btn btn-add w-[17.5rem] px-4 py-2 bg-[#B9A6FC] rounded-xl text-white">Ekle</button>
                </div>
            </div>
        </div>
        <Footer  class="pr-[23rem]"/>
    </section>
</template>
<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import Footer from "@/components/Footer.vue"
export default {
    components:{
        CircleProgress,Footer
    },
    inject:["changeModal","selectedTask"],
    
}
</script>