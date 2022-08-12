<template>
<div>
    <ul class="ul-navbar">
        <li><router-link to="/" class="link-home">Dani Helados</router-link></li>
        <li><router-link to="/potes" class="link">Comprar</router-link></li>
        
    </ul>
</div>

</template>

<script setup>

    // const links = {
    //     "/" : "Home",
    //     "sucursales": "Sucursales"
    
    // }   

</script>

<style scoped>
div {
    background-color: #FAD9A1;
    width: 100%;
    padding: 1.2rem;
}
.ul-navbar {
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin-right: 1rem;
    color: #000;
}
li {
    margin-right: 1rem;

}
.link-home {
    font-family: 'Rubik Dirt', cursive;
    color: #000;
    font-size: 1.5rem;
}
.link {
    font-family: 'Rubik Dirt', cursive;
    font-size: 1.3rem;
    color: #fff;
    background-color: #F37878;
    padding: 0.5rem 1rem;
    border: 1px solid #F37878;
    border-radius: 40px;
    font-weight: 500;
}
.link:hover {
    color: rgba(255, 255, 255, 0.733);
    background-color: #f37878e7;
}
</style>