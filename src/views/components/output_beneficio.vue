<template>

  <div class="col-4 mt-4 mb-4">  
    <div v-if="props.profits>=0" class ="text-success" id="boldText"> {{props.sign}} {{props.profits}} </div>
    <div v-else class ="text-danger" id="boldText"> $ {{props.profits}} </div>
  </div>
  
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import feather from 'feather-icons';

  const props = defineProps({
    profits: { default: 500, type: Number },
    sign:    { default: '$', type: String },

  });

  onMounted(() => {
    feather.replace();
  });

</script>

<style>
  #boldText {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
  }
</style>