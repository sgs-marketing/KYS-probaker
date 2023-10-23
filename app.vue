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
  --primary: #2E343C;
  --accent: #2E343CB2;
  --test: #2E343C;
  --contrast: #fff;

  --border-primary: 1px solid var(--primary);
  --border-accent: 1px solid var(--accent);
  --border-contrast: 1px solid var(--contrast);

  --border-radius: 0.313rem;

  --page-padding: 2.4rem 5.5rem;
  --page-padding-wall: 5.5rem;

  --page-padding-mobile: 2.4rem 1rem;
  --page-padding-wall-mobile: 1rem;

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

  &[data-primary] {
    color: var(--primary);
  }

  &[data-accent] {
    color: var(--accent);
  }

  &[data-contrast] {
    color: var(--contrast);
  }
  
  &[data-plain] {
    text-decoration: none;
  }
  
  &[data-border-radius] {
    border-radius: var(--border-radius);
  }
  
  &[data-border-primary] {
    border: var(--border-primary);
  }

  &[data-border-accent] {
    border: var(--border-accent);
  }

  &[data-border-contrast] {
    border: var(--border-contrast);
  }

  &[data-box] {
    height: var(--box-height);
    padding: var(--box-padding);
  }

  &[data-hover] {
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      opacity: 0.6;
    }
  }

  &[data-weak-hover] {
    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      opacity: 0.8;
    }
  }
}

h1 {
  color: var(--primary);
  font-size: 3rem;
  font-weight: 500;
}

h2 {
  color: var(--primary);
  font-size: 1.875rem;
  font-weight: 500;
}

h3 {
  color: var(--primary);
  font-size: 1.25rem;
  font-weight: 400;

}

h4 {
  color: var(--primary);
  font-size: 1.125rem;
  font-weight: 400;

}

p {
  color: var(--primary);
  font-size: 1rem;
}

hr {
  background-color: var(--accent);
  width: 100%;
  height: 3px;
  opacity: 0.1;
}

button {
  user-select: none;
  transition: all 0.2s;

  background-color: var(--contrast);
  border: var(--border-primary);
  border-radius: var(--border-radius);

  color: var(--black);
  font-size: 1rem;
  font-weight: 400;

  height: var(--box-height);
  padding: var(--box-padding);

  text-align: center;


  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  

  &[data-dark] {
    color: var(--contrast);
    background-color: var(--primary);

    &:hover {
      opacity: 0.8;
    }
  }

  &[data-weak-hover] {
    &:hover {
      opacity: 0.8;
    }
  }
}

input {
  user-select: none;
  outline: none;
  transition: all 0.2s;

  background-color: var(--contrast);
  border: var(--border-contrast);
  border-radius: var(--border-radius);

  color: var(--primary);
  font-size: 1rem;
  font-weight: 400;

  height: var(--box-height);
  padding: var(--box-padding);

  &:hover {
    background-color: var(--bright);
  }

  &:focus {
    border: var(--border-primary);
    background-color: var(--contrast);
  }

  &::placeholder {
    color: var(--accent);
    font-size: 1rem;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>