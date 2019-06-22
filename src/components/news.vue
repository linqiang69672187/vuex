<template>
    <div>Hello vue{{news}},{{points}}
        <Button type="button" @click="increase(5)"  >点击</Button><Button  type="primary">dbc</Button>
    </div>

</template>
<script>
import store from "@/vuex/store"
import {INCREASE} from '@/vuex/modul_types'
import { Button, Table } from 'iview';

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
    components:{
        Button,
        Table
    },
    methods:{
        increase:function(val){
            store.dispatch(INCREASE,val)
        }
    }
}
</script>
