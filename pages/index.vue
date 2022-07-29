<script>
export default {
  name: 'Default',

  middleware({ route, redirect }) {
     return redirect('/user/')
  }
}
</script>
