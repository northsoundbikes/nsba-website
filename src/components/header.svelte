<script>
    import { onMount } from "svelte";

    let mobileMenuOpen = false;
    let topbarVisible = true; // Track visibility of the events menu

    function toggleMobileMenu() {
        console.log("Toggling mobile menu");
        mobileMenuOpen = !mobileMenuOpen;
    }

    function dismissTopbar() {
        console.log("Dismissing topbar");
        topbarVisible = false;
        localStorage.setItem('topbarVisible', topbarVisible); // Persist state
    }

    // Retrieve visibility states on component mount
    onMount(() => {
        topbarVisible = localStorage.getItem('topbarVisible') !== 'false'; // Retrieve events menu state
    });
</script>

{#if topbarVisible}
<div class="flex items-center gap-x-6 bg-green-800 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <p class="text-sm leading-6 text-white">
      <a href="#events">
        <strong class="font-semibold ss-04">🔔 September rides & events announced</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Check out what's happening! 🡪
      </a>
    </p>
    <div class="flex flex-1 justify-end">
      <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]" on:click={dismissTopbar}>
        <span class="sr-only">Dismiss</span>
        <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
</div>  
{/if}
<header class="bg-blue-200">
    <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
    >
        <div class="flex items-center gap-x-12">
            <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">North Sound Bicycle Advocates</span>
                <img
                    class="h-16
                     w-auto"
                    src="logo.png"
                    alt=""
                />
            </a>
            <div class="hidden lg:flex lg:gap-x-12">
                <a
                    href="about"
                    class="font-semibold leading-6 text-gray-900"
                    >About</a
                >
                <a
                    href="get-involved"
                    class="font-semibold leading-6 text-gray-900"
                    >Get Involved</a
                >
                <!-- <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-900"
                    >News</a
                > -->
                <!-- <a
                    href="#"
                    class="font-semibold leading-6 text-gray-900"
                    >Events</a
                > -->
                <!-- <a
                    href="#"
                    class="text-sm font-semibold leading-6 text-gray-900"
                    >Resources</a
                > -->
            </div>
        </div>
        <div class="flex lg:hidden">
            <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                on:click={toggleMobileMenu}
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                </svg>
            </button>
        </div>
        <div class="hidden lg:flex">
            <a
                href="get-involved"
                class="font-semibold leading-6 text-white bg-blue-600 py-3 px-4 rounded-tr-lg"
                >Join us <span aria-hidden="true">&rarr;</span></a
            >
        </div>
    </nav>
    {#if mobileMenuOpen}
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-10"></div>
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-200 p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between h-16">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-16 w-auto"
                            src="/logo.png"
                            alt=""
                        />
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700"
                        on:click={toggleMobileMenu}
                    >
                        <span class="sr-only">Close menu</span>
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a
                                href="about"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                                >About</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                                >Get Involved</a
                            >
                        </div>
                        <div class="py-12">
                            <a
							href="get-involved"
							class="rounded-tr-lg bg-blue-600 px-6 py-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Join us →</a
						>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
