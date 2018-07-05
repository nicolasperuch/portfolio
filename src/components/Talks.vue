<template>
    <div>
        <div class="title-margin">
            <h2> {{ talksTitle }} </h2>
        </div>
        <div class="paragraph-margin">
            <a href="https://docs.google.com/presentation/d/1eYRAMhEvu0902FoLEKZ8K6feOp2F7D6uw4O_EXGhayg/edit?usp=sharing" target="_blank">
            <h5> My first step with node and elasticsearch </h5>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Talks',
        data() {
            return {
              talksTitle: 'Talks that I did'
            }
        }
    }
</script>