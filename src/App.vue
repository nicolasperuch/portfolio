<template>
  <div id="app">
    <div class="parallax">
      <div class="header-margin">  
        <h1> {{ title }} </h1>
      </div>  
      
      <div class="paragraph-margin">
        <p> {{ description }} </p>
      </div>
    </div>
    <div class="title-margin">
        <h2> {{ socialMediaTitle }} </h2>
    </div>  
    <div class="container">
        <div id="social-media" class="img-margin" v-for="item in socialMedia">
            <a :href="item.profile" target="_blank">
              <img v-bind:src=item.icon class="img-resize" alt=item.alt>
            </a>
        </div>
    </div>

    <div>
      <div class="title-margin">
        <h2> {{ technologyTitle }} </h2>
      </div>
      <div class="container">
          <div class="img-margin" v-for="item in techList">
            <img v-bind:src=item.icon class="img-resize" alt=item.name>
          </div>
      </div>
    </div>  
    
    <div>
      <div class="title-margin">
        <h2> {{ talksTitle }} </h2>
      </div>
      <div class="paragraph-margin">
        <a href="https://docs.google.com/presentation/d/1eYRAMhEvu0902FoLEKZ8K6feOp2F7D6uw4O_EXGhayg/edit?usp=sharing" target="_blank">
          <h5> My first step with node and elasticsearch</h5>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'My name is Nicolas Peruch & I\'m a technology enthusiast ',
      description: 'Hello! I\'m a brazilian software engineer. I have being working with developement since 2017, '+
      'and I\'m building my path to be the best version of myself!',
      technologyTitle: 'Studied Technologies',
      talksTitle: 'Talks that I did',
      socialMediaTitle: 'Social Media',

      socialMedia: [
        {
          icon: 'http://icons.iconarchive.com/icons/sicons/basic-round-social/512/linkedin-icon.png',
          profile: 'https://www.linkedin.com/in/nicolasperuch/',
          alt: 'linkedin logo'
        },
        {
          icon: 'https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-62-512.png',
          profile: 'https://medium.com/@nicolasperuch',
          alt: 'medium logo'
        },
        {
          icon: 'http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png',
          profile: 'https://twitter.com/nicolasperuch',
          alt: 'twitter logo'
        },
        {
          icon: 'https://image.flaticon.com/icons/svg/25/25231.svg',
          profile: 'https://github.com/nicolasperuch',
          alt: 'github logo'
        }
      ],
      techList: [
        {
          name: 'Elasticsearch',
          icon: 'https://cdn.worldvectorlogo.com/logos/elasticsearch.svg'
        },
        {
          name: 'Docker',
          icon: 'https://www.vectorlogo.zone/logos/docker/docker-tile.svg'
        },
        {
          name: 'Kafka',
          icon: 'https://pbs.twimg.com/profile_images/781633389577195521/kazUJooF_400x400.jpg'
        },
        {
          name: 'Spring boot',
          icon: 'https://cdn-images-1.medium.com/max/300/1*DeBhsZUhS7RPLwyd1-Ul8A.png'
        },
        {
          name: 'Grafana',
          icon: 'https://archive.fosdem.org/2017/schedule/event/grafana_past_present_and_future/grafana_past_present_and_future-80416053e9f3a779d94b3cf732141cb47e9112fb6b7c7e9b3f876be9784dd75b.png'
        },
        {
          name: 'FluentD',
          icon: 'data:image/jpeg;base64,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'
        },
        {
          name: 'MySql',
          icon: 'https://sqlbackupandftp.com/blog/wp-content/uploads/2015/01/mysql-logo_2800x2800_pixels1.png'
        },
        {
          name: 'Java',
          icon: 'https://cdn.iconscout.com/public/images/icon/free/png-256/java-logo-3157e85731f1342a-256x256.png'
        },
        {
          name: 'Node',
          icon: 'https://cdn-images-1.medium.com/max/400/1*7xUxphx7WwttvlFu5gVvVw.png'
        }    
      ]
    }
  }
}
</script>

<style>
  h1 {
    margin-top: 0px;
    text-align: left;
    font-size: 80px;
    font-family: 'Athiti', sans-serif;
  }
  h2 {
    text-align: left;
    font-size: 50px;
    font-family: 'Athiti', sans-serif;
  }
  h5 {
    text-align: left;
    font-size: 35px;
    font-family: 'Athiti', sans-serif;
  }
  p {
    text-align: justify;
    font-size: 25px;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .img-resize {
    width: 100px;
    height: 100px;
  }
  .img-margin {
    margin: 50px;
  }
  .img-margin img {
    -webkit-transition: all 0.3s ease; /* Safari and Chrome */
    -moz-transition: all 0.3s ease; /* Firefox */
    -ms-transition: all 0.3s ease; /* IE 9 */
    -o-transition: all 0.3s ease; /* Opera */
    transition: all 0.3s ease;
  }

  .img-margin:hover img {
      -webkit-transform:scale(1.35); /* Safari and Chrome */
      -moz-transform:scale(1.35); /* Firefox */
      -ms-transform:scale(1.35); /* IE 9 */
      -o-transform:scale(1.35); /* Opera */
      transform:scale(1.35);
  }
  .header-margin {
    padding-top: 80px;
    margin-left: 50px;
  }
  .title-margin {
    margin: 50px;
  }
  .paragraph-margin {
    margin: 0px 100px;
    padding: 170px 0px;
  } 
  .parallax {
    /* The image used */
    background-image: url("./assets/capa.jpg");

    /* Set a specific height */
    min-height: 350px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: grayscale(1);
  }
</style>
