<template>
<h4>Pote de </h4>
<ul>
    <li v-for="icecream in icecreams" :key="icecream">
    {{ icecream }}
    </li>
</ul>
</template>

<script>
//import { computed } from 'vue'
import { useIceCream } from '@/store/useIceCream';

export default {
setup() {
    const { icecreams } = useIceCream();


    // const kg = computed(() => {
    //     switch (amount) {
    //         case 4:
    //             return "1"
    //         case 3:
    //             return "1/2"
    //         case 2:
    //             return "1/4"
    //         default:
    //             break;    
    //     }   
    // })
    return {
        icecreams
    };
}
}
</script>