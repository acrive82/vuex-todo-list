<template>
    <section class="section"> 
        <div class="content"> 
            <h1 class="has-text-centered"> Todo App </h1> 
        </div> 
        <todo-form></todo-form> 
        <hr /> 
        <todo-list></todo-list> 
    </section>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default {
    name: 'TodoApp',
    components: {
        TodoForm,
        TodoList
    }
}
</script>
