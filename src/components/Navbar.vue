<template>
  <div class="w-full h-12 bg-stone-900 flex items-center md:flex-row justify-between  ">

    <div class="text-white md:pl-20 md:text-sm md:font-medium font-montserrat">Welcome to Our Store Hiscraves</div>
    <div class="flex items-center md:pr-20 flex-row justify-end text-white md:text-sm font-medium font-montserrat"><img
        class="w-6 h-6 relative" src="../assets/images/Group_1.svg" />Call Us: 1234567890</div>

  </div>
  <div class="w-full h-[88px] bg-white shadow md:pl-20 flex items-center flex-row justify-between">
    <!-- <img class="w-6 h-6 relative" src="../assets/images/Group_3.svg" /> -->
    <button class="relative">
    <div class=" flex flex-col justify-between w-[20px] h-[20px]">
      <div class="bg-[#770015] h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
      <div class="bg-[#770015] h-[1px] rounded"></div>
      <div class="bg-[#770015] h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
    </div>
    </button>
    
    <img class="w-20 h-20 relative" src="../assets/images/elogo.png" />
    <div class="flex items-center md:pr-20 flex-row md:space-x-2">
      <img class="w-6 h-6 relative" src="../assets/images/Frame_1.svg" />
      <img class="w-6 h-6 relative" src="../assets/images/Frame_2.svg" />
      <img class="w-6 h-6 relative" src="../assets/images/Frame_3.svg" />
      <img class="w-6 h-6 relative" src="../assets/images/Frame_4.svg" />
    </div>

    <!-- <div class="text-4xl  relative">
      <i class='bx bx-menu '></i>
      <i class='bx bx-search ' ></i>
      <i class='bx bx-heart '></i>

    </div> -->


  </div>
  <img class="w-full md:h-[632px]" src="../assets/images/banner.png" />
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  


}
</script>
