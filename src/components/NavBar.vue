<template>
<div>
    <ul class="ul-navbar">
        <li><router-link to="/" class="link">NavBar</router-link></li>
        <li><router-link to="/potes" class="link">Potes</router-link></li>
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
    background-color: sandybrown;
    width: 100%;
    padding: 0.8rem;
}
.ul-navbar {
    display: flex;
    list-style: none;
    justify-content: start;
    margin-right: 1rem;
    color: #000;
}
li {
    margin-right: 1rem;
    color: #000;
    font-weight: 500;
}
.link {
    color: #000;
}
.link:hover {
    color: gray;
}
</style>