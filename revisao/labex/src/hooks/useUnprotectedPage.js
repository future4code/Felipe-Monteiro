import {useHistory} from 'react-router-dom'
import {useLayoutEffect} from 'react'
import {goToAreaAdmin} from '../routes/coordinator'

const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(()=> {
    const token = localStorage.getItem('token')
        if (token){
            goToAreaAdmin(history)
        }
    }, [history])
}
export default useUnprotectedPage