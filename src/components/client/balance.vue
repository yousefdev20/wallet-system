<template>
  <div>
    <div class="row mt-4">
      <div class="col-lg-12 col-md-12 mt-4 mb-4">
        <div class="card z-index-2 ">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
            <div class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
              <div class="chart">
                <div class="card-body">
                  <h6 class="mb-0 text-4xl text-light">Balance</h6>
                  <hr class="dark horizontal">
                  <b class="text-sm"> active balance </b>
                  <div class="d-flex">
                    <h5 class="text-4xl text-light"> {{ wallet.balance + '$' }} </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "balance",
  created () {
    this.init()
  },
  data () {
    return {
      wallet: 0
    }
  },
  methods: {
    init () {
      this.axios.get('/wallet').then(response => {
        console.log(response.data.data.wallet)
        this.wallet = response.data.data.wallet
      })
    }
  }
}
</script>

<style scoped>

</style>