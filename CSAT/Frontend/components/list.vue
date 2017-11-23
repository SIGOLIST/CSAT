<template>
    <section>
        <hr/>
        <b-table
            :data="data"
            :loading="loading"

            backend-sorting
            :default-sort-direction="defaultSortOrder"
            :default-sort="[sortField, sortOrder]"
            @sort="onSort">

            <template scope="props">
                <b-table-column field="original_title" label="Title" sortable>
                    {{ props.row.original_title }}
                </b-table-column>

                <b-table-column field="vote_average" label="Vote Average" numeric sortable>
                    <span class="tag">
                        {{ props.row.vote_average }}
                    </span>
                </b-table-column>

                <b-table-column field="vote_count" label="Vote Count" numeric sortable>
                     {{ props.row.vote_count }}
                </b-table-column>

                <b-table-column field="release_date" label="Release Date" sortable centered>
                    {{ props.row.release_date ? new Date(props.row.release_date).toLocaleDateString() : '' }}
                </b-table-column>

                <b-table-column label="Overview" width="500">
                    {{ props.row.overview }}
                </b-table-column>
            </template>
        </b-table>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </section>
</template>

<script>
    import Sort from '~/components/sort.vue'
    import InfiniteLoading from 'vue-infinite-loading'
    export default {
        components: { Sort, InfiniteLoading },
        data() {
            return {
                data: [],
                total: 0,
                loading: false,
                sortField: 'vote_count',
                sortOrder: 'desc',
                defaultSortOrder: 'desc',
                page: 1,
                perPage: 10
            }
        },
        methods: {
          infiniteHandler($state) {
            setTimeout(() => {
              this.page++
              this.loadAsyncData()
                  $state.loaded();
                }, 1000);
            },
            /*
             * Load async data
             */
            loadAsyncData() {
                this.loading = true
                this.$axios.$get(`https://api.themoviedb.org/3/discover/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&language=en-US&include_adult=false&include_video=false&sort_by=${this.sortField}.${this.sortOrder}&page=${this.page}`)
                    .then(( data ) => {
                        data.results.forEach((item) => this.data.push(item))
                        this.loading = false
                    }, response => {
                        this.data = []
                        this.total = 0
                        this.loading = false
                    })
            },
            /*
             * Handle sort event
             */
            onSort(field, order) {
                this.data = []
                this.sortField = field
                this.sortOrder = order
                this.loadAsyncData()
            },
            /*
             * Type style in relation to the value
             */
        },
        mounted() {
            this.loadAsyncData()
        }
    }
</script>