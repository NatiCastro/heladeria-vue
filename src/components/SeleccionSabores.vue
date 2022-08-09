<template>
    <h1>Podés elegir {{ maxSelectedItems }} sabores</h1>
    <form>
    <ul>
        <li v-for="(ic) in icreams" :key="ic.id">       
            <input type="checkbox" :value="ic.value" :disabled="ic.disabled" @change="chooseIcecream($event, ic)">{{ ic.name }}
        </li>
    </ul>
    <vs-button color="primary" type="filled">Submit</vs-button>
    </form>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { useIceCream } from '../store/useIceCream.js';

//Lo que estáa entre llaves es para renombrar (amount = mazSelectedItems) 
const { amount : maxSelectedItems} = useIceCream();

//console.log(maxSelectedItems);

const icreams = ref([]);

function chooseIcecream (e, ic) {
    console.log({e, ic})

    icreams.value = icreams.value
        .map(original => {
      
        const value = original.value;
        const isCheckedIcecream = original.id === ic.id;

        if (isCheckedIcecream) {
            const newValue = !value;

            return {
                ...original,
                value: newValue,
            }
        }
        return original

    }).map((ic, index, icecreamsUpdated) => {
        const icecreamChecked = icecreamsUpdated.filter(x => !!(x.value)).length;

        console.log({icecreamChecked})

        /*
            Saber el máximo de sabores
            Los que no están seleccionados

        */

        return {
            ...ic,
            disabled: ic.value !== true && icecreamChecked === maxSelectedItems
        }

    });
    nextTick(()=> {
        console.log(ic.value, maxSelectedItems)
    })
}

// Llamada al json de los sabores
onMounted(() => {
    fetch('icecreams.json')
    .then(res => res.json())
    .then((data) => {
        console.log(data);

       const categories = Object.keys(data);

       const list = categories
       //Con map me trae los arrays de cada categoría
       .map((category) => {
        return data[category]
        //Otro map porque quiero hacer un objeto con el nombre de cada sabor y su categoría correspondiente
        .map((icecream, index) => {
            return { id: `${icecream}-${index}`, name: icecream, category, value: false, disabled: false };
        });        
        })
       //Con flat me los une a todos en un sólo array grande. Contenedor del mismo contenedor
       .flat();

       // Y una forma reducida
    //     const icecreams = categories
    //    .flatMap((category) => {
    //     return data[category];
    //    })

        console.log(list);
        icreams.value = list;
    });
});



</script>