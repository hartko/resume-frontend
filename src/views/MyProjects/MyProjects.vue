<template>

    <b-container>

        <b-row>

            <b-col cols="4" class ="mb-5" v-for ="project in projects" :key="index" >
                <b-card
                title="AAAAAAAAAAAAAAAAAAAAAAAAAA"
                >
                <b-img thumbnail fluid :src="project.url" v-bind:alt="pic"></b-img>
                <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

            </b-card>
            </b-col>

        </b-row>

    </b-container>
</template>

<script>
export default {
    name: 'MyProjects',
    data () {
        return {

            projects:[
                {
                    title:'First Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                },
                {
                    title:'Second Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                },
                {
                    title:'Third Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                },
                {
                    title:'Third Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                },
                {
                    title:'Third Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                },
                {
                    title:'Third Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                },
                {
                    title:'Third Project',
                    url:'https://picsum.photos/350/250/?image=54',
                    imgUrl:'https://picsum.photos/350/250/?image=54'
                }


            ]
        }
    }
}

</script>
