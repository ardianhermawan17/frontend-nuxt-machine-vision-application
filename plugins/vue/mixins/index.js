import Vue from 'vue'

if (!Vue.__global_mixin__) {
    Vue.__global_mixin__ = true
    Vue.mixin({
        directive: {
            focus: {
                inserted(element) {
                    element.focus()
                }
            }
        },
        filters: {
            formatPrice(price, prefix = 'Rp') {
                const numberToString = String(price)
                    .replace(/[^,\d]/g, '')
                    .toString()
                const split = numberToString.split(',')
                const sisa = split[0].length % 3
                let rupiah = split[0].substr(0, sisa)
                const ribuan = split[0].substr(sisa).match(/\d{3}/gi)


                if (ribuan) {
                    const separator = sisa ? '.' : ''
                    rupiah += separator + ribuan.join('.')
                }

                rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
                return prefix + rupiah
            },
        },
        computed: {
            $user() {
                // TODO:: Rearrange this with your state
                return this.$store.state.account.user
            }
        },
        methods: {
            $baseDialog(action, dialog) {
                this.$nuxt.$emit('toggle-dialog', { action, dialog })
            },
            $baseSnackbar(name, snackbarData) {
                this.$nuxt.$emit(
                    'show-snackbar',
                    Object.assign(snackbarData, { name })
                )
            },
            $switchDialog(toCloseDialog, toOpenDialog) {
                this.$baseDialog('close', toCloseDialog)
                this.$baseDialog('open', toOpenDialog)
            }
        },
    })
}