<template>
<h2>Pote de {{ kg }} Kg.</h2>
<template class="container">
    <h4>Elegiste:</h4>
<ul>
    <li v-for="icecream in icecreams" :key="icecream">
    {{ icecream }}
    <button>X</button>
    </li>
</ul>
</template>
</template>

<script>
import { computed } from 'vue'
import { useIceCream } from '@/store/useIceCream';

export default {
setup() {
    const { amount, icecreams } = useIceCream();

    const kg = computed(() => {

        if (amount === 4) {
            return "1"
        } else if (amount === 3) {
            return "1/2"
        } else {
            return "1/4"
        }
    })

    return {
        icecreams,
        kg
    };
}
}
</script>

<style scoped>
h2 {
     margin: 1rem;
    text-align: center;
    font-family: 'Rubik Dirt', cursive;
    font-size: 2.8rem;
}
.container {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;  
}
h4 {
    font-size: 1.2rem;
    padding: 0.5rem;
    color: #F37878;
}
li {
    margin: 0.5rem;
    list-style: none;
    text-align: center;
}
button {
    margin-left: 0.5rem;
    color: #fff;
    font-weight: 600;
    padding: 0.5rem 0.8rem;
    background-color: #a6d487;
    border-radius: 50%;
    border: 1px solid #a6d487;
}
button:hover {
    background-color: #a6d487d2;
    border: 1px solid #a6d487d2;
}
</style>