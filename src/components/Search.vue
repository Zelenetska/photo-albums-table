<template>
    <div class="search-container">
        <form @submit.prevent="onSubmit">
            <div class="input" :class="{invalid: $v.searchQuery.$error}">
                <label for="searchQuery">Search by an album title or a photo title: </label>
                <input type="text"
                       id="searchQuery"
                       @input="$v.searchQuery.$touch()"
                       v-model="searchQuery">
                <p v-if="!$v.searchQuery.maxLength">Too long query</p>
            </div>
            <button class="button" type="submit" :disabled="$v.$invalid">Search</button>
        </form>
    </div>
</template>

<script>
    import { maxLength } from 'vuelidate/lib/validators'
    export default {
        name: "Search",
        data() {
            return {
                searchQuery: ''
            }
        },
        validations: {
            searchQuery: {
                maxLength: maxLength(100)
            }
        },
        methods: {
            onSubmit() {
                this.$emit('searchQueryChanged', this.searchQuery);
            }
        }
    }
</script>

<style scoped>
    .search-container {
        margin: 25px 0 15px 0;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    .button {
        background-color: #2a9e40;
        color: #fff;
        padding: 10px 30px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        margin-left: 20px;
        transition: all .5s ease-out;
    }

    .button:hover {
         background-color: #42c52c;
     }

    .button:focus {
         outline: none;
     }

    .input.invalid input {
        box-shadow: 0 0 5px rgb(255, 37, 6);
    }

    input {
        border: none;
        border-radius: 5px;
        min-width: 250px;
        padding: 9px 10px;
        box-shadow: 0 0 3px rgba(0,0,0,0.25);
    }

    input:focus {
         outline: none;
         box-shadow: 0 0 3px rgba(45, 177, 69, 0.6);
     }

    p {
        font-size: 12px;
        margin: 5px 0;
        color: #ff1c41;
    }

    @media (max-width: 768px) {
        input {
            min-width: 150px;
        }
    }
</style>