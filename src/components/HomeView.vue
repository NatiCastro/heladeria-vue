<template>
        <div class="box">
          <div class="box__container">
            <h3 class="box__title">Distruta del mejor helado</h3>
            <p class="box__text">
              Helados artesanales de la mejor calidad y al mejor precio!
            </p>
          </div>
            <img
              class="img-fluid box__img"
              src="https://gastronomiaycia.republica.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2011/07/clasificacion_helados.jpg.webp"
              alt="Pileta externa Andina Iruya"/>
        </div>
        <div class="box box__dos">
          <div class="box__container">
            <h3 class="box__title">Hacé tu compra Online</h3>
            <p class="box__text">
             Pedilo y te lo acercamos hasta tu casa!
            </p>
          </div>
            <img
              class="img-fluid box__img"
              src="https://media.minutouno.com/p/2cf67cde68f4c990c30f0787fc6afc94/adjuntos/150/imagenes/023/804/0023804134/610x0/smart/helado-cuartojpg.jpg"
              alt="Pileta externa Andina Iruya"/>
        </div>
        <div class="box">
          <div class="box__container">
            <h3 class="box__title">Armalo como quieras</h3>
            <p class="box__text">
              Muchos sabores y accesorios para agregarles!
            </p>
          </div>
            <img
              class="img-fluid box__img"
              src="https://www.marcelinocatering.com.ar/resources/themes/default/images/servicios/barra-de-helados-5.jpg"
              alt="Pileta externa Andina Iruya"/>
        </div>
</template>

<script>

export default {
    name: "HomeView"

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box {
    margin: 1rem 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box__dos {
    flex-direction: row-reverse;
  }
  .box__title {
    font-family: 'Rubik Dirt', cursive;
    font-size: 3.5rem;
    text-align: center;
    padding: 0 5rem;
    margin-top: 2rem;
  }
  .box__text {
    font-size: 1rem;
    text-align: center;
    padding: 0 5rem;
  }
  .box__img {
    width: 40%;
  }
</style>
