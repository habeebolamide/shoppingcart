<template>
    <div>
        <Navbar />
        <div class="container mb-5 mt-4" v-if="totalPrice != 0" >
            <div class="row">
                <div class="col-md-4">
                    <h2>Summary</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <h4>
                                Total:
                            </h4>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                {{ totalPrice }}
                            </h4>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                Shipping:
                            </h4>
                        </div>
                        <div class="col-md-6">
                            <h4>50</h4>
                        </div>
                        <hr class="mt-4">
                        <div class="col-md-6">
                            <h4>Subtotal :</h4>
                        </div>
                        <div class="col-md-6">
                            <h4>
                                {{ totalPrice + 50 }}
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-7">
                    <h2>Cart</h2>
                    <div class="card">
                        <div class="card-body">
                            <ul>
                                <li style="list-style-type: none;" v-for="item in cartItems " :key="item.id">
                                    <img :src=item.src class="mx-4" width="50px" height="50px" alt="" style="border-radius: 50%;">
                                    <span class="h4 mx-3">{{item.name}}</span>
                                    <button class="mx-4 btn btn-light" @click="addItem(item)">+</button>
                                    <span>{{ item.quantity }}</span>
                                    <button class="mx-4 btn btn-light" @click="removeItem(item)">-</button>
                                    <span class="h4 mx-5">{{ item.price }}</span>
                                    <hr>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn btn-success mt-4" @click="makePayment(totalPrice + 50)">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        <EmptyCart v-if="totalPrice == 0" />
    </div>
</template>
<script>
import Navbar from "./Navbar";
import EmptyCart from "./EmptyCart.vue";
export default {
    name: "carT",
    components: {
        Navbar,
        EmptyCart
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems;
        },
        totalPrice() {
            let price = 0
            this.$store.state.cartItems.map(el => {
                price += el['quantity'] * el['price']
            })
            return price
        }
    },
    methods:{
    addItem(product){
      // console.log(product);
      // this.$store.commit("addToCart")
      this.$store.dispatch("addToCart",product)
    },
    removeItem(product){
      this.$store.dispatch("removeItem",product)
    },
    makePayment (amount) {
      this.loading = true
      let amount2 = amount * 100
      const data = {
        email: "testpaypal415@gmail.com",
        amount: amount2 * 700
      }
      const url = 'https://api.paystack.co/transaction/initialize'
      fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer sk_test_c7f4c3346047c4492198fa4ab0c5ed2d7bedadc4',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(res => {
          const paystack = new window.PaystackPop()
          paystack.resumeTransaction(res.data.access_code)
          this.loading = false
          this.resetForm()
        })
        .catch(() => {
          // handle error here
        })
    },
    },
    mounted () {
    const popup = document.createElement('script')
    popup.setAttribute('src', 'https://js.paystack.co/v2/inline.js')
    popup.async = true
    document.head.appendChild(popup)
  },
}
</script>