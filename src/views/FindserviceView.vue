<script setup>
import UserLayout from '@/components/user/UserLayout.vue';
import Back from '@/components/user/Back.vue';
</script>

<template>
    <UserLayout>
        <RouterLink to="/repair">
            <div class="w-8 h-8 absolute cursor-pointer lg:[top:170px] lg:[left:50px] 2xl:[top:170px] 2xl:[left:350px]">
                <Back></Back>
            </div>
        </RouterLink>

        <div class="w-full justify-center items-center mb-15">
            <div class=" text-center ">
                <p class="text-base-content mt-10 lg:text-4xl 2xl:text-5xl">รวมบริการช่างอาสา</p>
            </div>
        </div>

        <!-- button -->

        <div class="flex w-full mb-15 gap-15 lg:flex-col 2xl:flex-row 2xl:w-[1500px]">
            <div class="flex lg:justify-center">
                <img src="@/assets/icon/รวมอาสา.png" alt="" class="rounded-xl">
            </div>

            <div class="flex flex-col w-1/2 lg:w-full lg:items-center 2xl:w-1/2">
                <div class=" bg-base-300 rounded-xl p-5 w-full lg:w-[900px] 2xl:w-full">
                    <div class="text-center my-5">
                        <p class="text-3xl text-black">บริการของเรา</p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <div class="flex gap-5  basis-1/2 p-4 bg-neutral-content rounded-xl">
                            <img src="@/assets/icon/ไฟฟ้า.png" alt="" class="ml-5">
                            <p class="text-xl text-black">งานไฟฟ้า</p>
                        </div>
                        <div class="flex gap-5  basis-1/2 p-4 bg-neutral-content rounded-xl">
                            <img src="@/assets/icon/งานสะสม.png" alt="" class="ml-5">
                            <p class="text-xl text-black">งานอนุรักษ์ของสะสม</p>
                        </div>
                        <div class="flex gap-5  basis-1/2 p-4 bg-neutral-content rounded-xl">
                            <img src="@/assets/icon/งานซ่อม.png" alt="" class="ml-5">
                            <p class="text-xl text-black">งานช่างซ่อม</p>
                        </div>
                        <div class="flex gap-5  basis-1/2 p-4 bg-neutral-content rounded-xl">
                            <img src="@/assets/icon/ธรรมชาติ.png" alt="" class="ml-5">
                            <p class="text-xl text-black">งานเกษตร</p>
                        </div>

                    </div>

                </div>

                <div class="flex gap-3 flex-col bg-success-content mt-10 text-black rounded-xl lg:w-[900px] 2xl:w-full">
                    <div class="w-full bg-success-content  my-5  rounded-xl  text-center">
                        <p class="text-black text-3xl">ติดต่อ</p>

                    </div>
                    <div class=" flex mx-auto w-150 p-4 bg-[#91FFAE]  text-black rounded-xl text-xl">
                        <img src="@/assets/icon/line.png" alt="" class="w-7">
                        <p class="ml-3 text-xl text-black">Line</p>

                    </div>
                    <div class="flex mx-auto w-150 p-4 bg-accent  text-black rounded-xl">
                        <img src="@/assets/icon/tel.png" alt="">
                        <p class="ml-3 text-xl text-black">081-123-4455</p>

                    </div>
                    <div class="w-full p-4 bg-success-content  text-black rounded-xl text-center">
                        <p class="text-3xl">สถานที่ให้บริการ</p>

                    </div>
                    <div class="flex w-100 p-4 bg-success-content mx-auto  text-black rounded-xl">
                        <img src="@/assets/icon/location.png" alt="w-10">
                        <p class="text-xl ml-3">กรุงเทพมหานคร</p>

                    </div>
                    <div class="flex w-100 p-4 bg-success-content mb-10 mx-auto text-black rounded-xl">
                        <img src="@/assets/icon/location.png" alt="w-10">
                        <p class="text-xl ml-3">ปทุมธานี</p>

                    </div>

                </div>
            </div>
        </div>


    </UserLayout>
</template>
