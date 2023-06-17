<template>
    <div class="task-page">
        <div class="task-page__form">
            <FormTask @addTask="addTask"></FormTask>
        </div>
        <div class="task-page__list">
            <div v-for="task in taskList" class="task">
                <div class="task-text" v-if="!task.edit">{{ task.text }}</div>
                <CustomInput v-if="task.edit" v-model="task.text" />
                <div class="task-button">
                    <CustonButton @click="deleteTask(task.id)">удалить</CustonButton>
                    <CustonButton v-if="!task.edit" @click="editTask(task.id)">отредактировать</CustonButton>
                    <CustonButton v-if="task.edit" @click="saveTask(task.id)">сохранить</CustonButton>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import FormTask from '@/components/forms/FormTask.vue';
import { mapMutations, mapState } from 'vuex';
import CustomInput from '@/components/input/CustomInput.vue';
import CustonButton from '@/components/buttons/CustomButton.vue'
export default {
    name: "TaskList",
    components: { FormTask, CustomInput ,CustonButton},
    data() {
        return {
            task: '',
            taskList: []
        }
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    },
    mounted() {
        if (localStorage.getItem('tasks')) {
            const json = JSON.parse(localStorage.getItem('tasks'))
            this.taskList = json
        }
    },
    methods: {
        checkAdnSave(taskList) {
            const json = JSON.stringify(taskList)
            localStorage.setItem('tasks', json)
            this.setTask(taskList)
        },
        deleteTask(id) {
            this.taskList = this.taskList.filter((el) => el.id !== id)
            this.checkAdnSave(this.taskList)
        },
        saveTask(id) {
            const index = this.taskList.findIndex((el) => el.id === id)
            if (index !== -1 && this.taskList[index].edit === true) {
                this.$set(this.taskList[index], 'edit', false)
                this.checkAdnSave(this.taskList)
            }
        },
        editTask(id) {
            const index = this.taskList.findIndex((el) => el.id === id)
            if (index !== -1) {
                this.$set(this.taskList[index], 'edit', true)
                this.checkAdnSave(this.taskList)
            }
        },
        addTask(task) {
            if (task === '') {
                return
            }
            const obj = {
                text: task,
                id: Date.now(),
                edit: false
            }
            this.taskList.push(obj)
            this.checkAdnSave(this.taskList)
        },
        ...mapMutations({
            setTask: 'SET_TASK',

        })
    },
}
</script>
  