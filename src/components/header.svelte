<script>
    import { onMount } from "svelte";

    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        console.log("Toggling mobile menu");
        mobileMenuOpen = !mobileMenuOpen;
    }

    // Close the menu when the component mounts (initializes)
    onMount(() => {
        mobileMenuOpen = false; // Ensure menu starts closed
    });
</script>

<header class="bg-blue-200">
    <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
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
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="flex items-center justify-between h-16">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img
                            class="h-8 w-auto"
                            src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f6b2.png"
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
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Product</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Features</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Marketplace</a
                            >
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Company</a
                            >
                        </div>
                        <div class="py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >Log in</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
