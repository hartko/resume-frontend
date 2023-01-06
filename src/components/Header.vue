    <template>
        <b-navbar toggleable="lg"style="background-color: black;">
        <b-navbar-brand href="#" class="text-warning">SUNT DEZVOLTATOR</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <!-- <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link text-warning" to="/">
                            home()
                            <!-- <span class="sr-only">(current)</span> -->
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-warning" to="/about-me" >aboutMe()</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-warning" to="/my-projects">myProjects()</router-link>
                    </li>
                </ul>

                <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
