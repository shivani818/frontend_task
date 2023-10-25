<template>
    <div class="pt-16">
        <img class="w-full md:h-[498px]" src="../assets/images/banner_3.png" />
        <div class="pt-16 pr-16 pl-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div class="md:w-[548px] md:h-[652px] bg-stone-300">
                    <div class="flex justify-center items-center md:pt-16">
                        <img class="md:w-[172px] h-[172px]" src="../assets/images/diamond.png" />
                    </div>

                    <div class="pt-8 text-center text-zinc-900 md:text-4xl font-semibold font-PlayfairDisplay">Hurry Up!
                    </div>
                    <div class=" pt-8  text-center text-zinc-900 md:text-[84px] font-semibold font-PlayfairDisplay">85% OFF
                    </div>
                    <div class=" pt-8 text-center text-zinc-900 md:text-4xl font-semibold font-PlayfairDisplay">Sale</div>
                    <div class="pt-4">
                        <button class="w-[170px] md:h-12 border border-white">
                            <div class="text-white text-base font-medium font-montserrat uppercase">shop now</div>
                        </button>
                    </div>

                </div>
                <div class="md:w-[548px] md:h-[652px] bg-[#D6BEBE]">
                    <div class="flex justify-center items-center md:pt-16">
                        <img class="w-[172px] h-[172px] " src="../assets/images/discount.png" />
                    </div>

                    <div class="pt-8 text-center text-zinc-900 md:text-4xl font-semibold font-PlayfairDisplay">Hurry Up!
                    </div>
                    <div class="pt-8 text-center text-zinc-900 md:text-[84px] font-semibold font-PlayfairDisplay">75% OFF
                    </div>
                    <div class="pt-8 text-center text-zinc-900 md:text-4xl font-semibold font-PlayfairDisplay">Sale</div>
                    <div class="pt-4">
                        <button class="w-[170px] md:h-12 border border-white">
                            <div class="text-white text-base font-medium font-montserrat uppercase">shop now</div>
                        </button>
                    </div>
                </div>

            </div>


        </div>
        <div class="pt-16">
            <div class="pt-16 pl-16 pr-16 w-full h-[212px] bg-stone-100">
                <div class="flex items-center flex-row justify-evenly ">
                    <div class="flex items-center flex-col ">
                        <img class="md:w-[88px] md:h-[88.17px] relative" src="../assets/images/group_195.png" />
                        <div class="text-center text-zinc-900 text-base font-medium font-montserrat">7 Days Return</div>
                    </div>
                    <div class="w-28 h-[0px]  rotate-90 border border-rose-200"></div>
                    <div class="flex items-center flex-col ">
                        <img class="w-[64.27px] h-[88.17px] relative" src="../assets/images/group_196.png" />
                        <div class="text-center text-zinc-900 text-base font-medium font-montserrat">Quality Products</div>
                    </div>
                    <div class="w-28 h-[0px] rotate-90 border border-rose-200"></div>

                    <div class="flex items-center flex-col ">
                        <img class="w-[112.12px] h-[88.17px] relative" src="../assets/images/group_197.png" />
                        <div class="text-center text-zinc-900 text-base font-medium font-montserrat">Safe Payment</div>
                    </div>

                    <div class="w-28 h-[0px] rotate-90 border border-rose-200"></div>
                    <div class="flex items-center flex-col ">
                        <img class="w-[87.90px] h-[88.17px] relative" src="../assets/images/group_198.png" />
                        <div class="text-center text-zinc-900 text-base font-medium font-montserrat">24x7 Helpline</div>
                    </div>

                </div>
                <!-- <div class="w-[218.25px] h-[218.25px] bg-red-900 justify-end rounded-full"></div> -->
            </div>
            
        </div>

        <div class="pt-16 pl-16 pr-16">
            <div class="w-full h-[312px] bg-gradient-to-r from-red-700 to-red-900">
                <div class="flex items-center flex-row space-x-4 ">
                    <div class="w-[345px] h-[312px] rounded-tr-full rounded-br-full bg-white bg-opacity-30"></div>
                    <div>
                        <div class="text-center text-white md:text-2xl md:font-semibold font-PlayfairDisplay">Subscribe to
                            get updates on
                            exciting offers<br />& deals</div>
                        <div class="flex items-center flex-row h-[68px] pt-16 justify-center">

                            <!-- <div class="relative mb-4 bg-white rounded-[7px] flex w-full flex-wrap items-stretch"> -->
                            <input type="text"
                                class="md:w-[645px] md:h-[68px] bg-white bg-opacity-30 palceholder:text-white  text-base font-medium pl-12 font-montserrat"
                                placeholder="Enter Your Email" aria-label="text" aria-describedby="button-addon3" />

                            <button class=" md:relative md:z-[2] md:w-[142.50px] md:h-[68px] bg-white" type="button"
                                id="button-addon3" data-te-ripple-init>
                                <div class="text-center text-red-900 md:text-[22px] font-semibold font-PlayfairDisplay">
                                    Subscribe
                                </div>

                            </button>



                        </div>
                    </div>
                    <div class="w-[345px] h-[312px] rounded-tl-full rounded-bl-full bg-white bg-opacity-30"></div>
                </div>


            </div>
        </div>


    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Sale',

}
</script>