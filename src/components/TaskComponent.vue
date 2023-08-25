<script setup>
import {useTaskStore} from "../stores/taskStore";
import {ref} from 'vue';
const props = defineProps({
    title: {type: String},
    subtitle: {type: Date},
    isCompleted: {type: Boolean},
})

const inputText = ref("")

const store = useTaskStore()



</script>

<template>
<div class="card">
    <div class="content-inner">
        <input type="checkbox" v-model="inputText" name="isCompleted" class="isTaskCompleted" id="isCompleted" :checked="props.isCompleted" readonly>
        <div class="text">
            <p :class="['task-text', props.isCompleted ? 'completed' : '']">{{props.title}}</p>
            <p class="task-subtext">{{props.title}}</p>

        </div>
    </div>
</div>
</template>


<style>
 .card { 
    background-color: #fff;
    height: auto;
    padding: 20px 40px;
    border-radius: 12px;

}

 .content-inner { 
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flex;
}

 .isTaskCompleted { 
    width: 20px;
    background-color: #5222D0;
}

input[type="checkbox"]:active{
    background-color: #5222D0;
    color: #5222D0;
}

.task-subtext {
    margin: 0px 10px;
    font-size: 12px;
    font-weight: normal;
}

.task-text {
    margin: 0px 10px;
    font-size: 16px;
    font-weight: 600;
}
.completed {
    text-decoration: line-through;
}
 </style> 