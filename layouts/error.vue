<template>
  <div id="error">
    <!-- <app-logo/> -->
    <Logo/>
    <p id="errorStatus">
      {{ error.statusCode }}
    </p>
    <p id="errorMsg">
      {{ error.message }}
      {{ error }}
    </p>
  </div>
</template>

<script>
  import Logo from '~/components/Logo';

  export default {
    layout:'error_layout',
    components: { Logo },
    props: [ 'error' ]
  };
</script>

<style scoped>
  #error {
    margin: 20px;
    text-align: center;
  }
  
  #errorStatus {
    font-family: monospace;
    font-size: 42px;
    background: red;
    color: white;
    line-height: 60px;
    margin: 10px 15%
  }
  
  #errorMsg {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 24px;
    line-height: 36px
  }
</style>
