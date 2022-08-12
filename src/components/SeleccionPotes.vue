<template class="container">
    <h2>Elegí tu pote</h2>
    <form>
    <ul class="potes">
        <li v-for="p in potesKg" :key="p">
        <vs-radio color="#a6d487" v-model="selectedPotes" vs-name="potes" :vs-value="p">
         {{ p }} Kg.
        </vs-radio>
        </li>
    </ul>
    <button :disabled="notSelected" @click="submit">Agregar</button>
    </form>
</template>

<script setup> 

import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useIceCream } from '../store/useIceCream.js'

const router = useRouter();

// Variable para store
const sabores = useIceCream();

const potes = ref([]);
const selectedPotes = ref(null);

onMounted(() => {
    fetch("potes.json")
    .then(res =>(res.json()))
    .then((data) => {
        potes.value = data;
    })
});

const potesKg = computed(() => {
    return Object.keys(potes.value);
    
});

//Función para desabilitar el botón si no eligió
let notSelected = computed(() => {
    return selectedPotes.value == null;
})

function submit () {

    //console.log("submit", potes.value[selectedPotes.value]);
    console.log(sabores.amount);
    sabores.setAmount(potes.value[selectedPotes.value]);
 
    router.push({
        name: "sabores"
    });


}

</script>

<style scoped>
form {
    display: flex;
    justify-content: center;
    align-items: center;
}
h2 {
    margin: 1rem;
    text-align: center;
    font-family: 'Rubik Dirt', cursive;
    font-size: 3rem;
}
.potes {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
}
button {
    width: 10rem;
    height: 2.5rem;
    font-family: 'Rubik Dirt', cursive;
    font-size: 1.3rem;
    color: #fff;
    background-color: #F37878;
    padding: 0.5rem 1rem;
    border: 1px solid #F37878;
    border-radius: 40px;
    font-weight: 500;
}
button:hover {
    color: rgba(255, 255, 255, 0.733);
    background-color: #f37878e7;
}
</style>