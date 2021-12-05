<template>
  <div>
    <div class="row mb-4">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4 card">
        <div class="card-body px-0 pb-2">
          <transactions></transactions>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Transactions from "../../components/admin/transactions";

export default {
  name: "transaction",
  components: {Transactions}
}
</script>