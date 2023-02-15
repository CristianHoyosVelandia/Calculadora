<template>

  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4 mb-2 layout-spacing" id="center">
    <div class="statbox panel box box-shadow">
      
      <!-- Heading or Tittle for Panel -->
      <div class="panel-heading">
        <div id="centertext">
          <h2> Calculadora - Corretaje </h2>
        </div>
      </div>

      <div class="panel-body">

        <div class="row">
          
          <!-- tittle calculator -->
          <div class="row mb-4">
            <div class="col-4">  
              <p class="mt-2" id="centertext">Resultado Fórmula W1-W2</p>
            </div>

            <div class="col-4"/> 

            <OutBeneficio
              :key="totalPercent"
              :profits="totalPercent"
              sign= '%'
            />
          </div>

          <!-- tittle calculator -->
          <div class="row mt-4 mb-5">
            <div class="col-4 backgroundtittleCalculator">  
              <p class="mt-2 colortittle" id="centertext">Cuota</p>
            </div>

            <div class="col-4 backgroundtittleCalculator">  
              <p class="mt-2 colortittle" id="centertext">Apuesta</p>
            </div>

            <div class="col-4 backgroundtittleCalculator">  
              <p class="mt-2 colortittle" id="centertext">Beneficio</p>
            </div>
          </div>
          <!-- end calculator -->

          <!-- Body -->
          <div class="col-1 mt-4 mb-4">  
            <p class="mt-2" id="centertext"> W1 </p>
          </div>
          
          <div class="col-3 mt-4 mb-4">  
            <div class="input-group mb-2">
              <!-- Icon -->
              <span class="input-group-text" id="basic-addon2">
                <fa :icon="['fas', 'percent']"> </fa> 
              </span>
              <input
                class="form-control" aria-label="notification"
                aria-describedby="basic-addon2" type="number"
                placeholder="0"
                v-model="w1Cuota"
                draggable="false"
                autocomplete="off"
                @input="W1CuotaFun"
              />
            </div>
          </div>

          <div class="col-1"/>
          
          <div class="col-3 mt-4 mb-4">  
            <div class="input-group mb-2">
              <!-- Icon -->
              <span class="input-group-text" id="basic-addon2">
                <fa :icon="['fas', 'dollar-sign']"> </fa> 
              </span>
              <input
                class="form-control" aria-label="notification"
                aria-describedby="basic-addon2" type="number"
                placeholder="0"
                v-model="w1money"
                draggable="false"
                autocomplete="off"
                @input="W1MoneyFun"
              />
            </div>
          </div>
          

          <OutBeneficio
            :key="w1profits"
            :profits="w1profits"
            sign="$"
          />

          <!-- Body -->
          <div class="col-1   mt-4 mb-4">  
            <p class="mt-2" id="centertext"> W2 </p>
          </div>
          
          <div class="col-3 mt-4 mb-4">  
            <div class="input-group mb-2">
              <!-- Icon -->
              <span class="input-group-text" id="basic-addon2">
                <fa :icon="['fas', 'percent']"> </fa> 
              </span>
              <input
                class="form-control" aria-label="notification"
                aria-describedby="basic-addon2" type="number"
                placeholder="0"
                v-model="w2Cuota"
                draggable="false"
                autocomplete="off"
                @input="W2CuotaFun"
              />
            </div>
          </div>

          <div class="col-1 mt-4 mb-4"/>
          
          <div class="col-3 mt-4 mb-4">  
            <div class="input-group mb-2">
              <!-- Icon -->
              <span class="input-group-text" id="basic-addon2">
                <fa :icon="['fas', 'dollar-sign']"> </fa> 
              </span>
              <input
                class="form-control" aria-label="notification"
                aria-describedby="basic-addon2" type="number"
                placeholder="0"
                v-model="w2money"
                draggable="false"
                autocomplete="off"
                @input="W2MoneyFun"
              />
            </div>
          </div>

          <OutBeneficio
            :key="w2profits"
            :profits="w2profits"
            sign="$"
          />
          <!-- End Body -->  
        </div>

        <div class="row mt-4">
            
          <div class="col-4 mb-2">
            <p class="mt-2 SubtittleColor"> Dinero a Apostar: </p>
          </div>

          <div class="col-1"/>
          <div class="col-3">  
            <div class="input-group mb-2">
              <!-- Icon -->
              <span class="input-group-text" id="basic-addon2">
                <fa :icon="['fas', 'dollar-sign']"> </fa> 
              </span>
              <input
                class="form-control" aria-label="notification"
                aria-describedby="basic-addon2" type="number"
                placeholder="0"
                v-model="totalMoney"
                draggable="false"
                autocomplete="off"
                @input="TotalMoneyFunc"
              />
            </div>
          </div>
          
          <DefSeparator />
        </div>
            
      </div>

    </div>
  </div>

</template>

<script setup>
  // Importacion de liberias
  import { onMounted, ref } from 'vue';
  import feather from 'feather-icons';
  // Components of view
  import OutBeneficio from '@/views/components/output_beneficio.vue';

  import DefSeparator from '@/views/components/Defaultseparator.vue';


  const w1Cuota = ref();
  const percent1 = ref(0);
  const percent2 = ref(0);
  const sumCuotas = ref(0);

  const w1profits = ref(0);
  const w1money   = ref();
  const w2Cuota = ref();
  const w2profits = ref(0);
  const w2money   = ref();
  const totalPercent = ref(0);
  const totalMoney = ref(0);


  const TotalPerfectFunc = ( ) => {

    if( w2Cuota.value > 0) {

      if(w1Cuota.value>0) {

        w1Cuota.value = parseFloat(w1Cuota.value)
        w2Cuota.value = parseFloat(w2Cuota.value)
        sumCuotas.value = (w1Cuota.value + w2Cuota.value).toFixed(3)
        percent1.value   =  (((w2Cuota.value)/sumCuotas.value)*100).toFixed(3)
        percent2.value   =  (((w1Cuota.value)/sumCuotas.value)*100).toFixed(3)
        const retail     =  ((percent2.value*w2Cuota.value)).toFixed(4)
        totalPercent.value = parseFloat((retail-100).toFixed(2))
        TotalMoneyFunc()
      }
      else{
        totalPercent.value = parseFloat(0)
      }
    }
    else{
      totalPercent.value = parseFloat(0)
    }

  }

  const TotalMoneyFunc = () => {
    console.log("Entramso aqui:", totalMoney.value)
    if(totalMoney.value>0){

      totalMoney.value = parseFloat(totalMoney.value);
      w1money.value = parseFloat((percent1.value*totalMoney.value/100).toFixed(2))
      w2money.value = parseFloat((percent2.value*totalMoney.value/100).toFixed(2))

      w1profits.value = parseFloat(w1money.value*w1Cuota.value-totalMoney.value).toFixed(2)
      w2profits.value = parseFloat(w2money.value*w2Cuota.value-totalMoney.value).toFixed(2)

    }

  }
  const W1CuotaFun = () => {

    TotalPerfectFunc(1)
  }

  const W2CuotaFun = () => {

    TotalPerfectFunc(2)
  }

  const W1MoneyFun = () => {

    if(w1money.value>0){

      w1money.value = parseFloat(w1money.value);

      totalMoney.value = parseFloat((w1money.value*100/percent1.value).toFixed(2))
      w2money.value = parseFloat((totalMoney.value-w1money.value).toFixed(2))

      w1profits.value = parseFloat(w1money.value*w1Cuota.value-totalMoney.value).toFixed(2)
      w2profits.value = parseFloat(w2money.value*w2Cuota.value-totalMoney.value).toFixed(2)

    }
  
  }

  const W2MoneyFun = () => {

    if(w2money.value>0){

      w2money.value = parseFloat(w2money.value);

      totalMoney.value = parseFloat((w2money.value*100/percent2.value).toFixed(2))
      w1money.value = parseFloat((totalMoney.value-w2money.value).toFixed(2))

      w1profits.value = parseFloat(w1money.value*w1Cuota.value-totalMoney.value).toFixed(2)
      w2profits.value = parseFloat(w2money.value*w2Cuota.value-totalMoney.value).toFixed(2)

    }
  }
  
  onMounted(() => { 
    feather.replace();
  });


</script>

<style>
  #center {
    margin: 0 auto;
  }

  #centertext {
    text-align: center;
    justify-content: center;
  }
  #hbtn {
      min-width: 100%;
      min-height: 50px;
  }

  .backgroundtittleCalculator{
    background-color: #3b3f5c;
    /* border-radius: 5px; */
    padding: 0px 5px;
    margin-bottom: 5px;
  }

  .colortittle {
    color: white;
    font-size: 16px;
    letter-spacing: 2px;
  }

  .SubtittleColor {
    color: #3b3f5c;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    text-align: center;
    justify-content: center;
  } 
</style>
