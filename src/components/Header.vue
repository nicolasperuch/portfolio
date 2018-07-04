<template>
    <div class="parallax">
        <div class="header-margin">  
            <h1> {{ title }} </h1>
        </div>  
        
        <div class="paragraph-margin">
            <p> {{ description }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return  {
                title: 'My name is Nicolas Peruch & I\'m a technology enthusiast ',
                description: 'Hello! I\'m a brazilian software engineer. I have being working with developement since 2017, '+
                'and I\'m building my path to be the best version of myself!'
            }
        }
    }
</script>