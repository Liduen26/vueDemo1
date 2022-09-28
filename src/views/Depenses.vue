<script>
    import Form from "./myComponents/Form.vue";
    import Table from "./myComponents/Table.vue";
    
    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            onAdd(obj) {
                console.log(obj);
                this.list.push(obj);
            },
            
            delEvent(id) {
                this.list.splice(id, 1);
            }
        },
        
        components: { Form, Table }
    }
</script>

<template>
    <Table :list-table="this.list" @delEvent="delEvent"/>
    <Form @logEvent="onAdd"/>
    
</template>