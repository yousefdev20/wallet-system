<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-12 mb-lg-0 mb-4">
        <div class="card mt-4">
          <div class="card-header pb-0 p-3">
            <div class="row">
            </div>
          </div>
          <div class="card-body p-3">
            <div class="row">
              <div class="col-md-12 mb-md-0 mb-4">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Payment Method</h6>
                </div>
                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                  <select class="form-control w-100 pt-0 pb-0 mb-0 mt-0" v-model="account.payment_gateway_id">
                    <option v-for="(item, index) in payment_gateways" :value="item.id" :key="index">{{ item.name }}</option>
                  </select>
                </div>
                <b v-if="errors.payment_gateway_id" class="text-sm text-danger mt-0 pt-0">{{ errors.payment_gateway_id.join(', ') }}</b>
              </div>
              <div class="col-md-8 mb-md-0 mb-4">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Card Number</h6>
                </div>
                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                  <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" v-model="account.card_number" maxlength="14">
                </div>
                <b v-if="errors.card_number" class="text-sm text-danger mt-0 pt-0">{{ errors.card_number.join(', ') }}</b>
              </div>

              <div class="col-md-4 mb-md-0 mb-4">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Security Code</h6>
                </div>
                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                  <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" maxlength="3" v-model="account.security_code">
                </div>
                <b v-if="errors.security_code" class="text-sm text-danger mt-0 pt-0">{{ errors.security_code.join(', ') }}</b>
              </div>

              <div class="col-md-12 mb-md-0 mb-4">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Expiration</h6>
                </div>
                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                  <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" type="month" v-model="account.card_expire_year">
                </div>
                <b v-if="errors.card_expire_year" class="text-sm text-danger mt-0 pt-0">{{ errors.card_expire_year.join(', ') }}</b>
              </div>

              <div class="col-md-12 mb-md-0 mb-4">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Amount</h6>
                </div>
                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                  <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" type="number" v-model="account.amount">
                </div>
                <b v-if="errors.amount" class="text-sm text-danger mt-0 pt-0">{{ errors.amount.join(', ') }}</b>
              </div>
            </div>
          </div>
          <div class="float-right m-2 text-end">
            <a class="btn bg-gradient-dark mb-0" href="javascript:void;" @click="add_transaction">Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User.Dashboard.Withdraw",
  created () {
    this.init()
  },
  data () {
    return {
      currencies: [],
      payment_gateways: [],
      account: {
        payment_gateway_id: '',
        card_number: '',
        security_code: '',
        card_expire_year: '',
        amount: ''
      },
      errors: {
        payment_gateway_id: '',
        card_number: '',
        currency_id: '',
        security_code: '',
        card_expire_year: '',
        amount: ''
      }
    }
  },
  methods: {
    init () {
      this.axios.get('/payment/gateways').then(response => {
        this.payment_gateways = response.data.data
      }).catch(err => {
        console.log(err)
      })
      this.axios.get('/currencies').then(response => {
        this.currencies = response.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    add_transaction () {
      this.reset_error_message()
      this.axios.post('withdraw', this.account).then(() => {
        this.$notify({text: "Transaction has been successful", type: 'success'})
      }).catch(err => {
        console.log(err.response.data.error)
        this.errors = err.response.data.errors
        this.$notify({text: err.response.data.error || "Some thing wrong", type: 'error'})
      })
    },
    reset_error_message () {
      this.errors = {
        payment_gateway_id: '',
        currency_id: '',
        card_number: '',
        security_code: '',
        card_expire_year: '',
        amount: ''
      }
    }
  }
}
</script>

<style scoped>
.disable {
  pointer-events: none;
  opacity: 0.4;
}
</style>