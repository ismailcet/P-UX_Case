<template>
    <section class="task_table mt-6">
        <div class="task_title_section flex items-center gap-[0.625rem]">
            <h3 class="task_title text-primary">Tümü</h3>
            <img src="@/assets/copy.png" alt="Copy">
        </div>
        <div class="table_content mt-6 px-4">
            <table>
                <thead>
                    <tr class="flex h-8 mb-[1.25rem]">
                        <th class="flex items-center">
                            <input type="checkbox" class="w-4 h-4">
                        </th>
                        <th class="flex items-center justify-between w-[13rem] px-6 text-lg font-bold">Proje</th>
                        <th class="flex items-center justify-between w-[13rem] px-6 text-lg font-bold border-x-[1px] border-[#BDBDBD]">Görev</th>
                        <th class="flex items-center justify-between w-[8rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Kategori</th>
                        <th class="flex items-center justify-between w-[8rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Etiket</th>
                        <th class="flex items-center justify-around w-[7.125rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Tarih <i class="fa-solid fa-chevron-down"></i></th>
                        <th class="flex items-center justify-around w-[11.25rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Öncelik <i class="fa-solid fa-chevron-down"></i></th>
                        <th class="flex items-center justify-around w-[11.25rem] px-6 text-lg font-bold border-r-[1px] border-[#BDBDBD]">Kişiler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="flex items-center text-xs border-[1px] border-[#BDBDBD] h-[102px] ml-[-1rem] pl-4 rounded-2xl">
                        <td>
                            <input type="checkbox" class="w-4 h-4">
                        </td>
                        <td class="flex flex-col items-start gap-1 px-6">
                            <p>Koçtaş UI&UX Maintenance</p>
                            <span>Devam Ediyor</span>
                        </td>
                        <td class="flex flex-row items-start gap-1 px-6 text-sm font-bold">
                            Anasayfada ara çözümler
                        </td>
                        <td class="flex items-start gap-1 px-10"> 
                            UX&UI
                        </td>
                        <td class="flex flex-col gap-1 px-10">
                        <button class="px-3 py-2 border-[1px] border-[#F86624] rounded-2xl max-w-[3rem]">PUX</button>
                        <button class="px-3 py-2 border-[1px] border-[#1C8CB5] rounded-2xl">PUX-Maintenance</button>
                        </td>
                        <td class="max-w-[7.125rem]">
                            Etiket-1, Etiket-2, Etiket-3,Etiket-4, Etiket-5, ... +3 
                        </td>
                        <td>
                            22 May Çar. -
                            23 Oca Perş.
                        </td>
                        <td>
                            <button>Acil</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>