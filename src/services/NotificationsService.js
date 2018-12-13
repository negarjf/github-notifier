import Http from '@/Http'

export default {

    fetchAll(){
        return Http.get('notifications')
    }

}