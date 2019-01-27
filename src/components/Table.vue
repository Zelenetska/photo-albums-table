<template>
    <div class="table-responsive-lg table-container" id="tableContainer">
        <div class="table-header">
            <div class="table-row">
                <div class="col id-col" @click="sortColumn('albumId')">ID <img src="../assets/sort-icon.svg" alt="">
                </div>
                <div class="col album-title-col" @click="sortColumn('albumTitle')">Album Title <img
                        src="../assets/sort-icon.svg" alt=""></div>
                <div class="col photo-title-col" @click="sortColumn('title')">Photo Title <img
                        src="../assets/sort-icon.svg" alt=""></div>
                <div class="col img-col">Photo</div>
            </div>
        </div>

        <div class="table-body">
            <tableRow v-for="(photo) in infoForTheTableShortened"
                      :key="photo.id"
                      :photoData="photo"
            ></tableRow>
        </div>
    </div>
</template>

<script>
    import TableRow from './TableRow.vue';
    import axios from 'axios';

    export default {
        name: "Table",
        components: {
            tableRow: TableRow
        },
        props: ['searchQuery'],
        data() {
            return {
                albumsArr: '',
                photosArr: '',
                listFrom: 0,
                listTo: 25,
                photosWithAlbumInfoArr: {},
                infoForTheTable: {},
                tableBodyHeight: 0
            }
        },
        methods: {
            joinAPIResponses(albumsResponse, photosResponse) {
                this.photosWithAlbumInfoArr = photosResponse;
                let tempArr = {};
                albumsResponse.forEach((album) => {
                    tempArr[album.id] = album;
                });
                this.photosWithAlbumInfoArr.forEach((photo) => {
                    photo.albumTitle = tempArr[photo.albumId].title;
                    photo.albumUserId = tempArr[photo.albumId].userId;
                });
                this.infoForTheTable = this.photosWithAlbumInfoArr;
            },

            sortColumn(columnName) {
                this.infoForTheTable = this.infoForTheTable.sort(function (a, b) {
                    if (a[columnName] > b[columnName]) {
                        return 1;
                    }
                    if (a[columnName] < b[columnName]) {
                        return -1;
                    }
                    return 0;
                });
            },

            scroll() {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                    if (bottomOfWindow) {
                        this.listTo += 25;
                    }
                };
            }
        },
        watch: {
            searchQuery() {
                if (this.searchQuery) {
                    this.infoForTheTable = this.photosWithAlbumInfoArr.filter(item =>
                        item.albumTitle.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase()) ||
                        item.title.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase())
                    );
                } else {
                    this.infoForTheTable = this.photosWithAlbumInfoArr;
                }
            }
        },
        mounted() {
            this.scroll();
        },
        created() {
            const vi = this;

            axios.all([
                axios.get('/albums'),
                axios.get('/photos')
            ])
                .then(axios.spread(function (albums, photos) {
                    vi.joinAPIResponses(albums.data, photos.data);
                }))
                .catch(() => new Error('Something went wrong'));

        },
        computed: {
            infoForTheTableShortened() {
                const vi = this;
                if (Object.keys(this.infoForTheTable).length !== 0) {
                    return this.infoForTheTable.filter((item, index) => index >= vi.listFrom && index <= vi.listTo);
                } else {
                    return undefined;
                }

            }
        }
    }

</script>

<style scoped>

</style>
