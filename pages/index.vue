<template>
  <div class="container">
    <h1>Toto je homepage na digital ocean</h1>
    <h2>Example heading <b-badge>New</b-badge></h2>
    <div v-if="$auth.loggedIn">
      Práve je prihlásený používateľ {{ $auth.user.name }}
    </div>
  </div>
</template>
