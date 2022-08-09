<template>
    <h2>Potes</h2>
    <form @submit="submit" ref="form">
    <ul class="potes">
        <li v-for="p in potesKg" :key="p">
        <vs-radio v-model="selectedPotes" vs-name="potes" :vs-value="p">
         {{ p }} Kg.
        </vs-radio>
        </li>
    </ul>
    <vs-button color="dark" type="filled" @click="submit">Enviar</vs-button>
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
const form = ref(null);


onMounted(() => {
    fetch("potes.json")
    .then(res =>(res.json()))
    .then((data) => {
        potes.value = data;
    })
});

const potesKg = computed(() => {
    return Object.keys(potes.value);
})

function submit () {

    //console.log("submit", potes.value[selectedPotes.value]);

    sabores.setAmount(potes.value[selectedPotes.value]);

    router.push({
        name: "sabores"
    })
}

</script>

<style scoped>
h2 {
    margin: 1rem;
}
.potes {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
}
</style>