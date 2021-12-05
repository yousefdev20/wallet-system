<template>
  <div>
    <div class="row mb-4">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4 card my-3 p-4">
        <div class="card-body px-0 pb-2">
          <div class="row">
            <div class="col-md-6 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Payment Name</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <input class="form-control p-0" v-model="payment.name" />
              </div>
              <b v-if="errors.name" class="text-sm text-danger mt-0 pt-0">{{ errors.name.join(', ') }}</b>
            </div>
            <div class="col-md-6 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Payment Image</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <input class="form-control p-0" type="file" ref="image" v-on:change="handleFileUpload('image')">
              </div>
              <b v-if="errors.image" class="text-sm text-danger mt-0 pt-0">{{ errors.image.join(', ') }}</b>
            </div>
            <div class="col-md-6 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Allow Currency</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <select class="form-control p-0" v-model="payment.allow_currency">
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <b v-if="errors.allow_currency" class="text-sm text-danger mt-0 pt-0">{{ errors.allow_currency.join(', ') }}</b>
            </div>

            <div class="col-md-6 mb-md-0 mb-4">
            </div>

            <div class="col-md-3 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Min Deposit</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" type="number" v-model="payment.min_deposit" />
              </div>
              <b v-if="errors.min_deposit" class="text-sm text-danger mt-0 pt-0">{{ errors.min_deposit.join(', ') }}</b>
            </div>

            <div class="col-md-3 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Max Deposit</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" type="number" v-model="payment.max_deposit" />
              </div>
              <b v-if="errors.max_deposit" class="text-sm text-danger mt-0 pt-0">{{ errors.max_deposit.join(', ') }}</b>
            </div>

            <div class="col-md-3 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">MIN Withdraw</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" type="number" v-model="payment.min_withdraw" />
              </div>
              <b v-if="errors.min_withdraw" class="text-sm text-danger mt-0 pt-0">{{ errors.min_withdraw.join(', ') }}</b>
            </div>

            <div class="col-md-3 mb-md-0 mb-4">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Max Withdraw</h6>
              </div>
              <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row rounded-0">
                <input class="form-control w-100 pt-0 pb-0 mb-0 mt-0" type="number" v-model="payment.max_withdraw" />
              </div>
              <b v-if="errors.max_withdraw" class="text-sm text-danger mt-0 pt-0">{{ errors.max_withdraw.join(', ') }}</b>
            </div>
          </div>

          <div class="float-right m-2 mt-5 text-end">
            <button class="btn bg-gradient-dark mb-0" @click="create">Add</button>
          </div>

        </div>
      </div>

      <div class="col-lg-12 col-md-12 mb-md-0 my-4 card">
        <div class="card-body px-0 pb-2">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">image</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">name</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">allow currency</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">min deposit</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">max deposit</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">min withdraw</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">max withdraw</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">created at</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) in payment_gateways" :key="index">
                <td class="align-middle text-center text-sm">
                  {{ item.id }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.image }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.name }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.allow_currency ? 'Yes' : 'No' }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.min_deposit }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.max_deposit }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.min_withdraw }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.max_withdraw }}
                </td>
                <td class="align-middle text-center text-sm">
                  {{ item.created_at }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "paymentGateway",
  created () {
    this.init()
  },
  data () {
    return {
      payment_gateways: [],
      payment: {
        name: '',
        image: '',
        allow_currency: '',
        min_deposit: '',
        max_deposit: '',
        min_withdraw: '',
        max_withdraw: ''
      },
      errors: {
        name: '',
        image: '',
        allow_currency: '',
        min_deposit: '',
        max_deposit: '',
        min_withdraw: '',
        max_withdraw: ''
      }
    }
  },
  methods: {
    init () {
      this.axios.get('/admin/payment/gateways').then(response => {
        console.log(response)
        this.payment_gateways = response.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    create () {
      let formData = new FormData()
      Object.keys(this.payment).map(el => {
        formData.append(el, this.payment[el])
      })
      this.reset_error_message()
      this.axios.post('/admin/gateway/create', formData).then(response => {
        if (response.status === 200) {
          this.$notify({text: "The Payment method has been created", type: 'success'})
          this.payment_gateways.push(response.data.data)
        }
      }).catch(err => {
        this.errors = err.response.data.errors
        this.$notify({text: err.response.data.error || "Some thing wrong", type: 'error'})
      })
    },
    reset_error_message () {
      this.errors = {
        name: '',
        image: '',
        allow_currency: '',
        min_deposit: '',
        max_deposit: '',
        min_withdraw: '',
        max_withdraw: ''
      }
    },
    handleFileUpload (index) {
      this.payment[index] = this.$refs[index].files[0]
    },
  }
}
</script>
