<template>
    <h1>Podés elegir {{ maxSelectedItems }} sabores</h1>
    <form>
    <ul class="list">
        <li v-for="(ic) in icreams" :key="ic.id">       
            <input type="checkbox" :value="ic.value" :disabled="ic.disabled" @change="chooseIcecream($event, ic)">{{ ic.name }}
        </li>
    </ul>
    <button :disabled="!isSubmitActive" @click="submit">Agregar</button>
    </form>
</template>

<script setup>
import { onMounted, ref, nextTick, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useIceCream } from '../store/useIceCream.js';

//Para dirigir al componente final
const router = useRouter();

//Lo que está entre llaves es para renombrar (amount = maxSelectedItems) 
const { amount : maxSelectedItems, setIcecreams} = useIceCream();

//console.log(maxSelectedItems);

const icreams = ref([]);
//Función para saber qué sabor eligió y que no esté seleccionado ya
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
    
    //Para saber cuántos ha seleccionado
    }).map((ic, index, icecreamsUpdated) => {
        const icecreamChecked = icecreamsUpdated.filter(x => !!(x.value)).length;

        console.log(icecreamChecked)

        return {
            ...ic,
            //Para que disabled se vuelva true
            disabled: ic.value !== true && icecreamChecked == maxSelectedItems //va con 2 iguales y no 3
        }

    });
    nextTick(()=> {
        console.log(maxSelectedItems)
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

//Desabilitar botón submit antes de haber elegido los sabores
const isSubmitActive = computed(() => {
    const icecreamChecked = icreams.value.filter(x=> x.value).length;

    return icecreamChecked <= maxSelectedItems && icecreamChecked > 0
})

function submit () {
    setIcecreams(

        icreams.value
            .filter(icecream => icecream.value)
            .map(icecream => icecream.name)
    )
         router.push({
            name: "final"
    });
    
} 

</script>

<style scoped>
h1 {
    margin: 1rem;
    text-align: center;
    font-family: 'Rubik Dirt', cursive;
    font-size: 2.8rem;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.list {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
li {
    margin: 0.5rem;
    list-style: none;
}
input {
    margin-right: 0.5rem;
}
button {
    width: 14rem;
    height: 3rem;
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