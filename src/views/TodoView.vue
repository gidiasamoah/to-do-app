<script setup>
import { ref } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import TaskComponent from '../components/TaskComponent.vue';
import {useTaskStore} from "../stores/taskStore";


const store = useTaskStore()

const taskItems = ref([
    {
        id: 1,
        titile: "Go to sleep",
        subtitle: new Date(),
        isCompleted: false
    },
    {
        id: 2,
        titile: "Go for walk",
        subtitle: new Date(),
        isCompleted: true
    },
])

const submitTask = (event) => {
    event.preventDefault();

    store.setValue("hello")
    taskItems.value.push({
        id: Math.random(),
        title: store.getInputText,
        subtitle: new Date(),
        isCompleted: false
    })

}

</script>
<template>
<div class="text_wrapper">
    <input type="text" placeholder="Add task..." class="task_content">
<ButtonComponent :action="submitTask" text="Save"/>
</div>
<div class="task" v-for="task in taskItems" :key="task.id">
    <TaskComponent :title="task.titile" :subtitle="task.subtitle" :isCompleted="task.isCompleted"/>
</div>


</template>

<style>
.text_wrapper {
    height: auto;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.task_content{
    width: 100%;
    outline: none;
    padding: 20px;
    border: none;
}

input::placeholder{
    color: #00000066;
}




</style>
