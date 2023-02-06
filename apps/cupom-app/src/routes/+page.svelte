<script lang="ts">
  import { MyCounterButton } from 'ui';
    import type { PageData } from './$types';
  export let data: PageData;
</script>

<h1>Cupom App</h1>
<MyCounterButton />
{#if data.users.length === 0}
  <p>No users found</p>
{:else}
  {#each data.users as user}
    <ul>
      <li>{user.name}</li>
    </ul>
  {/each}
{/if}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
