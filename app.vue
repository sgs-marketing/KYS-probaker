<script setup lang="ts">

</script>

<template>
<NuxtLayout>  
    <NuxtPage />
</NuxtLayout>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

:root {
  --black: #1b1b1b;
  --grey: #616161;
  --bright: #f0f0f0;

  --grey-border: 1px solid var(--grey);
  --dark-border: 1px solid var(--black);
  --bright-border: 1px solid var(--bright);
  --border-radius: 0.313rem;

  --page-padding: 2.4rem 3.7rem;
  --mobile-page-padding: 2.4rem 1rem;

  --box-height: 3rem;
  --box-padding: 0 1.3rem;
}

body, * {
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;

  &[data-bold] {
    font-weight: 700;
  }

  &[data-semibold] {
    font-weight: 600;
  }

  &[data-medium] {
    font-weight: 500;
  }

  &[data-grey] {
    color: var(--grey);
  }

  &[data-plain] {
    text-decoration: none;
  }

  &[data-white] {
    color: #fff;
  }

  &[data-border-dark] {
    border: var(--dark-border);
  }
  
  &[data-border-grey] {
    border: var(--grey-border);
  }

  &[data-border-bright] {
    border: var(--bright-border);
  }

  &[data-border-radius] {
    border-radius: var(--border-radius);
  }

}

h1 {
  color: var(--black);
  font-size: 3rem;
  font-weight: 500;
}

h2 {
  color: var(--black);
  font-size: 1.875rem;
  font-weight: 500;
}

h3 {
  color: var(--black);
  font-size: 1.25rem;
  font-weight: 400;

}

h4 {
  color: var(--black);
  font-size: 1.125rem;
  font-weight: 400;

}

p {
  color: var(--black);
  font-size: 1rem;
}

hr {
  background-color: var(--black);
  width: 100%;
  height: 3px;
  opacity: 0.1;
}

button {
  user-select: none;
  transition: all 0.2s;

  background-color: #fff;
  border: var(--dark-border);
  border-radius: var(--border-radius);

  color: var(--black);
  font-size: 1rem;
  font-weight: 400;

  height: var(--box-height);
  padding: var(--box-padding);

  text-align: center;


  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  

  &[data-dark] {
    color: #fff!important;
    background-color: var(--black)!important;
  }
}

input {
  user-select: none;
  outline: none;
  transition: all 0.3s;

  background-color: #fff;
  border: var(--bright-border);
  border-radius: var(--border-radius);

  color: var(--black);
  font-size: 1rem;
  font-weight: 400;

  height: var(--box-height);
  padding: var(--box-padding);

  &:hover {
    background-color: var(--bright);
  }

  &:focus {
    border: var(--dark-border);
    background-color: #fff;
  }

  &::placeholder {
    color: var(--grey);
    font-size: 1rem;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>