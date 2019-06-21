<template>
    <div>Hello vue{{news}},{{points}}
        <input type="button" @click="increase(5)" value="点击" ></button>
    </div>

</template>
<script>
import store from "@/vuex/store"
import {INCREASE} from '@/vuex/modul_types'

export default {
    data(){
       return{
            news:'aaaa',
            name:'lq',
       }
    },
    computed:{
        points:function(){
            return store.getters.get_points
        }
            
        
    },
    methods:{
        increase:function(val){
            store.dispatch(INCREASE,val)
        }
    }
}
</script>
