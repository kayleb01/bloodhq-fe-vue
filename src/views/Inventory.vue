<template>
    <div id="body">
        <Logo />
        <div class="grid grid-flow-col grid-2 gap-10 ">
            <div class="container">
            <PrevBtn @click="prevBtn"/> 
              <h3>Welcome back, <span class="text-red-500"> St. Benedict Hospital</span></h3>
              <h6>Here is your Account overview</h6>
              <h4 class="text-red-500 font-semibold">INVENTORY</h4>
              <table class="table-auto w-full border-b-2 border-gray-200">
                <thead class="flex w-full">
                    <tr class="text-red-400 bg-gray-200 flex w-full">
                    <th class="text-left px-4 py-4">SN</th>
                    <th class="text-left px-4 py-4"> BLOOD</th>
                    <th class="text-left px-4 py-4">STOCK</th>
                    <th class="text-left px-4 py-4">SOLD</th>
                    <th class="text-left px-4 py-4">PRICE</th>
                    <th class="text-left px-4 py-4">ACTION</th>
                    </tr>
                </thead>
                <tbody class="flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 50vh;">
                    <tr class="flex w-full mb-4">
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">A+</td>
                    <td class="px-8 py-4">3</td>
                    <td class="px-8 py-4">3000</td>
                    <td class="px-8 py-4"> 
                        <a href="#" class="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin m-1">Add</a>
                        <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin m-1">Update</a>
                        <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin m-1">Drop</a>
                    </td>
                    </tr>
                    <tr class="flex w-full mb-4">
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">A+</td>
                    <td class="px-8 py-4">3</td>
                    <td class="px-8 py-4">3000</td>
                    </tr>
                    <tr class="flex w-full mb-4">
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">A+</td>
                    <td class="px-8 py-4">3</td>
                    <td class="px-8 py-4">3000</td>
                    </tr>
                    <tr class="flex w-full mb-4">
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">1</td>
                    <td class="px-8 py-4">A+</td>
                    <td class="px-8 py-4">3</td>
                    <td class="px-8 py-4">3000</td>
                    </tr>
                
                </tbody>
                </table>
            <span><i class="text-red-600 m-4">+</i><a href="#"> ADD INVENTORY</a></span>
            </div>
        <div class="flex relative">
         <h3 class="text-red-400">NOTIFICATION</h3>
       
        </div>
        </div>
     
    </div>
    
</template>

<script>
import Logo from '../components/Logo';
import PrevBtn from '../components/PrevBtn';

export default {
    name:'Inventory',
    data(){
        return{

        };
    },


 components: {
    Logo,
    PrevBtn
    }
}
</script>