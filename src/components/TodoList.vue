<template>
    <section>
        <div class="block">
            <select class="select" v-model="status">
                <option value="all"> All </option>
                <option value="pending"> Pending </option>
                <option value="completed"> Completed </option>
            </select>
        </div>
        <table class="table is-fullwidth">
            <tbody>
                <tr v-for="(todo, index) in todos" :key="index">
                    <td> {{ todo.text }} </td>
                    <td>
                        <a  href="#"
                            v-show="!todo.done"
                            class="button is-pulled-right" 
                            @click.prevent="markAsDone(todo)"> Done </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    name: 'TodoList',
    data() {
        return {
            status: 'pending'
        }
    },
    computed: {
        todos() {
            if (this.status === 'all') {
                return this.$store.getters.todos
            } else if (this.status === 'pending') {
                return this.$store.getters.pendingTodos
            } else if (this.status === 'completed') {
                return this.$store.getters.completedTodos
            }
        }
    },
    methods: {
        markAsDone(todo) {
            this.$store.dispatch('markAsDone', todo.id)
        }
    }
}
</script>
