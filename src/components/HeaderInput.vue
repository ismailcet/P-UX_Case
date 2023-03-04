<template>
    <section class="header_section p-6">
        <div class="input_section flex gap-4 items-center">
            <div class="left_input w-full relative">
                <input type="text" class="header_input flex flex-row w-full h-14 items-center gap-4 px-4 py-2" placeholder="Tüm PM`de aramaya veya yaratmaya başlayın">
                <div class="input-button">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    |
                    <span><i class="fa-solid fa-microphone-lines"></i></span>
                </div>
            </div>
            <div class="right_input text-white">
                <ul class="header_links flex gap-4 items-center cursor-pointer">
                    <li class="header_link flex flex-col items-center gap-2">
                        <i class="fa-solid fa-business-time"></i>
                        <a href="">Hatırlatıcılar</a>
                    </li>
                    <li class="header_link flex flex-col items-center gap-2 cursor-pointer">
                        <i class="fa-solid fa-bullseye"></i>
                        <a href="">Hedefler</a>
                    </li>
                    |
                    <li class="header_link flex flex-col items-center gap-2 cursor-pointer">
                        <i class="fa-solid fa-bell"></i>
                        <a href="">Bildirimler</a>                        
                    </li>
                    <li class="header_link flex flex-col items-center gap-2 cursor-pointer">
                        <img src="@/assets/Avatar.png" alt="Profile Page" class="profile_img">
                        Profil
                    </li>
                </ul>
            </div>
        </div>
        <div class="example_section pt-6 flex flex-row items-center gap-4 text-white">
            <h5 class="text-sm font-bold">Örnek Girdiler</h5>

            <ul class="example_list flex flex-row gap-[1.625rem] font-normal text-xs items-center">
                <li class="example_item px-3 py-2 bg-white text-[#212121] rounded-2xl cursor-pointer">X`in Aylık Performans raporu</li>
                <li class="example_item px-3 py-2 bg-white text-[#212121] rounded-2xl cursor-pointer">UI/UX Maintenance adında bir görev yarat</li>
                <li class="example_item px-3 py-2 bg-white text-[#212121] rounded-2xl cursor-pointer">Yarın saat 15:00 için toplantı oluştur</li>
            </ul>
        </div>
    </section>
</template>