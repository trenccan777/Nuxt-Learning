<template>
  <div class="container">
    <h1>Toto je homepage</h1>
    <div v-if="$auth.loggedIn">
      Práve je prihlásený používateľ {{ $auth.user.name }}
    </div>
  </div>
</template>
