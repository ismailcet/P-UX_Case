<template>
    <section class="task_table mt-6">
        <div class="task_title_section flex items-center gap-[0.625rem]">
            <h3 class="task_title text-primary">Tümü</h3>
            <img src="@/assets/copy.png" alt="Copy">
        </div>
        <div class="table_content mt-6 px-4 overflow-scroll overflow-x-hidden overflow-y-hidden " v-dragscroll>
            <table>
                <thead>
                    <tr class="flex h-8 mb-[1.25rem]">
                        <th class="flex items-center">
                            <input type="checkbox" class="w-4 h-4">
                        </th>
                        <th class="flex items-center justify-between w-[13rem] px-6 text-lg font-bold">Proje</th>
                        <th class="flex items-center justify-between w-[13rem] px-6 text-lg font-bold border-x-[1px] border-[#BDBDBD]">Görev</th>
                        <th class="flex items-center justify-between w-[8rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Kategori</th>
                        <th class="flex items-center justify-between w-[9.5rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Etiket</th>
                        <th class="flex items-center justify-around w-[7.125rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Tarih <i class="fa-solid fa-chevron-down"></i></th>
                        <th class="flex items-center justify-around w-[11.25rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Öncelik <i class="fa-solid fa-chevron-down"></i></th>
                        <th class="flex items-center justify-around w-[7.125rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Kişiler</th>
                        <th class="flex items-center justify-start w-[11.25rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">İlerleme</th>
                        <th class="flex items-center justify-around text-lg px-6  font-bold  border-[#BDBDBD] pt-1">
                            <button class="p-[6px] bg-[#724CF9] text-white rounded-lg">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr @click="showModal = true" v-for="task in taskList" :key="task.id" class="flex items-center text-xs border-[1px] border-[#BDBDBD] h-[102px] w-[96.5625rem] ml-[-1rem] pl-4 rounded-2xl gap-6 mb-6 cursor-pointer">
                        <td>
                            <input type="checkbox" class="w-4 h-4">
                        </td>
                        <td class="flex flex-col items-start gap-1 mr-6 w-[9.5rem]">
                            <p>{{ task.title }}</p>
                            <span :class="`text-[${task.status.color}]`">{{ task.status.status }}</span>
                        </td>
                        <td class="flex flex-row items-start gap-1text-sm font-bold pl-6 mr-6  w-[10rem]">
                            {{task.task}}
                        </td>
                        <td class="flex items-start gap-1 pl-8 mr-6 w-[5rem]"> 
                            {{task.category}}
                        </td>
                        <td class="flex flex-col gap-1 mr-6 w-[9.5rem]">
                        <button class="px-3 py-2 border-[1px] border-[#F86624] rounded-2xl max-w-[3rem]">PUX</button>
                        <button class="px-3 py-2 border-[1px] border-[#1C8CB5] rounded-2xl">PUX-Maintenance</button>
                        </td>
                        <td class="max-w-[7.125rem] mr-8">
                            Etiket-1, Etiket-2, Etiket-3,Etiket-4, Etiket-5, ... +3 
                        </td>
                        <td class="max-w-[4.625rem] flex flex-col gap-[0.625rem] mr-12">
                            <span>22 May Çar. - </span>
                            <span>23 Oca Perş.</span>
                        </td>
                        <td class="mr-6">
                            <button :class="`bg-[${task.value.color}]`" class="py-1 text-sm font-normal text-white rounded-[2.5rem] w-[5rem]">{{ task.value.value }}</button>
                        </td>
                        <td class="mr-6">
                            <img :src="`${task.img}`" alt="Three-Avatars">
                        </td>
                        <td class="mr-12 relative" :class="{ 'w-[120px]': task.timeline===null }">
                            
                            <label for="progress" class="progress_label" >50%</label>
                            <progress id="progress" value="50" max="100" class="progress_bar" v-if="task.timeline">50%</progress>
                            <p v-if="task.timeline" class="time">{{ task.timeline.time }} saat kaldı</p>
                        </td>
                        <td >
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
        <PopupTaskDetail class="modal" v-if="showModal"/>
    </transition>
</template>

<script>
import PopupTaskDetail from "@/components/PopupTaskDetail.vue"
export default {
    components:{
        PopupTaskDetail,
    },
    data(){
        return{
            taskList:[
                {
                    id:1,
                    title:"Koçtaş UI&UX Maintenance",
                    status:{
                        status:"Devam Ediyor",
                        color:"#F79009"
                    },
                    task:"Anasayfada ara çözümler",
                    category:"UX&UI",
                    value:{
                        value:"Acil",
                        color:"#F79009"
                    },
                    img:require("@/assets/Avatars.png"),
                    timeline:{
                        time:"12",
                        progress:"50%",
                    }
                },
                {
                    id:2,
                    title:"Ford UI&UX Maintenance",
                    status:{
                        status:"Yapılacaklar",
                        color:"#4224F5"
                    },
                    task:"Wireframe",
                    category:"UX&UI",
                    value:{
                        value:"Normal",
                        color:"#12B76A"
                    },
                    img:require("@/assets/Avatar2.png"),
                    timeline:null,
                },
                {
                    id:3,
                    title:"AI Proje/ AR-GE",
                    status:{
                        status:"Geç",
                        color:"#F04438"
                    },
                    task:"Toplantı eforları",
                    category:"Toplantılar",
                    value:{
                        value:"Çok Acil",
                        color:"#F04438"
                    },
                    img:require("@/assets/Avatar2.png"),
                    timeline:{
                        time:"4",
                        progress:"50%",
                    },
                },
                {
                    id:4,
                    title:"Koçtaş UI&UX Maintenance",
                    status:{
                        status:"Devam Ediyor",
                        color:"#F79009"
                    },
                    task:"Anasayfada ara çözümler",
                    category:"UX&UI",
                    value:{
                        value:"Acil",
                        color:"#F79009"
                    },
                    img:require("@/assets/Avatars.png"),
                    timeline:{
                        time:"12",
                        progress:"50%",
                    }
                },
                {
                    id:5,
                    title:"Ford UI&UX Maintenance",
                    status:{
                        status:"Yapılacaklar",
                        color:"#4224F5"
                    },
                    task:"Wireframe",
                    category:"UX&UI",
                    value:{
                        value:"Normal",
                        color:"#12B76A"
                    },
                    img:require("@/assets/Avatar2.png"),
                    timeline:null,
                },
                {
                    id:6,
                    title:"Koçtaş UI&UX Maintenance",
                    status:{
                        status:"Devam Ediyor",
                        color:"#F79009"
                    },
                    task:"Anasayfada ara çözümler",
                    category:"UX&UI",
                    value:{
                        value:"Acil",
                        color:"#F79009"
                    },
                    img:require("@/assets/Avatars.png"),
                    timeline:{
                        time:"12",
                        progress:"50%",
                    }
                },
                {
                    id:7,
                    title:"Ford UI&UX Maintenance",
                    status:{
                        status:"Yapılacaklar",
                        color:"#4224F5"
                    },
                    task:"Wireframe",
                    category:"UX&UI",
                    value:{
                        value:"Normal",
                        color:"#12B76A"
                    },
                    img:require("@/assets/Avatar2.png"),
                    timeline:null,
                },
                {
                    id:8,
                    title:"Koçtaş UI&UX Maintenance",
                    status:{
                        status:"Devam Ediyor",
                        color:"#F79009"
                    },
                    task:"Anasayfada ara çözümler",
                    category:"UX&UI",
                    value:{
                        value:"Acil",
                        color:"#F79009"
                    },
                    img:require("@/assets/Avatars.png"),
                    timeline:{
                        time:"12",
                        progress:"50%",
                    }
                },
                {
                    id:9,
                    title:"Ford UI&UX Maintenance",
                    status:{
                        status:"Yapılacaklar",
                        color:"#4224F5"
                    },
                    task:"Wireframe",
                    category:"UX&UI",
                    value:{
                        value:"Normal",
                        color:"#12B76A"
                    },
                    img:require("@/assets/Avatar2.png"),
                    timeline:null,
                },
                {
                    id:10,
                    title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
                    status:{
                        status:"Tamamlandı",
                        color:"#12B76A"
                    },
                    task:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
                    category:"Lorem ipsum dolor sit ",
                    value:{
                        value:"",
                        color:"#FFF"
                    },
                    img:require("@/assets/Avatars.png"),
                    timeline:{
                        time:"12",
                        progress:"50%",
                    }
                },
            ],
            showModal : false,
        }
    },
    methods:{
        changeModal(){
            this.showModal = !this.showModal;
        }
    },
    provide(){
        return{
            changeModal : this.changeModal,
        }
    },
}
</script>