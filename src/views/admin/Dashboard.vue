<template>
  <div class="row">
    <div class="col-lg-12 card">
      <div class="w-75">
        <apexchart
            class="w-100"
            type="bar"
            :options="chartOptions"
            :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin.Dashboard",
  created () {
    this.init()
  },
  data () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "deposit",
          data: [],
        },
        {
          name: "withdraw",
          data: [],
        },
      ],
    }
  },
  methods: {
    async init () {
      await this.axios.get('/admin/transaction/chart').then(response => {
        let days = []
        let sum_deposit = []
        let sum_withdraw = []
        response.data.data.map(el => {
          days.push(el.day)
          el.type === 'deposit' ?
              sum_deposit.push(el.sum) :
              sum_withdraw.push(el.sum)
        })
        this.series[0].data = sum_deposit
        this.series[1].data = sum_withdraw
        console.log(this.series)
        console.log(this.chartOptions)
        Object.values(days.filter(this.onlyUnique)).map(el => {
          this.chartOptions.xaxis.categories.push(el)
        })
        console.log(this.chartOptions.xaxis.categories)
      }).catch(err => {
        console.log(err)
      })
    },
    onlyUnique (value, index, self) {
      return self.indexOf(value) === index
    }
  }
}
</script>

<style scoped>

</style>