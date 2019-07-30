<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <router-link class="navbar-brand" to="/">
        Gradebooks
      </router-link>
    </div>
    <div>
      <router-link class="navbar-brand"  :to="{ name: 'login' }">
        Login
      </router-link>
    </div>
    <div>
      <router-link class="navbar-brand"  :to="{ name: 'register' }">
        Register
      </router-link>
    </div>
    <div>
      <router-link class="navbar-brand"  :to="{ name: 'teachers' }">
        All Professors
      </router-link>
    </div>
    <div>
      <router-link class="navbar-brand" :to="{ name: 'my-gradebook' }">
        My Gradebook
      </router-link>       
    </div>
    <div>
      <router-link class="navbar-brand" :to="{ name: 'create-gradebook' }">
        Add Gradebook
      </router-link>
    </div>
    <div>
      <router-link class="navbar-brand"  :to="{ name: 'create-professor' }">
        Add Professor
      </router-link>
    </div>
    <hr />
    <div>
      <button  @click="logout">
        Logout
      </button>
    </div>
    <hr />
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
