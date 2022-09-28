<script>
    
</script>

<template>
    <header class="head">
        <h1>Accueil</h1>

        <div class="toolBar">
            <router-link to="/"><button>Accueil</button></router-link>
            <router-link to="/depenses"><button>Dépenses</button></router-link>
            <router-link to="/categories"><button>Catégories</button></router-link>
        </div>
    
    </header>

    <p>
        <RouterView></RouterView>

    </p>
        

</template>

<style scoped>
    .head {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .toolBar button {
        margin: 5px;
        padding: 5px;
    }



    p {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
