import userService from "~/service/user.service"
import postService from "~/service/post.service"


export default ({ $axios }, inject) => {
    inject('userService', userService($axios, '/user'))
    inject('postService', postService($axios, ''))
}