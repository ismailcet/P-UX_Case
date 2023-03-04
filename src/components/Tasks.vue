<template>
    <section class="task_page">
        <HeaderInput />
        <TaskButtons />
        <TaskTable />
    </section>
</template>
<script>
import HeaderInput from "@/components/HeaderInput.vue";
import TaskButtons from "@/components/TaskButtons.vue"
import TaskTable from "@/components/TaskTable.vue"
export default {
    components:{
        HeaderInput,
        TaskButtons,
        TaskTable
    }
}
</script>