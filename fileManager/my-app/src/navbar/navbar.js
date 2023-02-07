
import './navbar.css'
import {useDispatch, useSelector} from "react-redux";
import {
    editAction,
    editFolderModalAction,
    openFileModalAction,
    openFolderModalAction,
    removeAll,
    removeIsChecked
} from "../redux/actions";
import { Button } from 'react-bootstrap';
import {Link, useLocation,useNavigate} from "react-router-dom";



function Navbar({parentId}) {




    const dispatch = useDispatch()
    const location = useLocation().pathname
    const selected = useSelector(state => state.fileReducer.selected)
    const disabled = selected?.every(item=>!item.isChecked)
    const container = useSelector(state => state.fileReducer.container)


    const navigate = useNavigate()
    return(
        <>
            <div className='navbar'>
                <button onClick={()=>navigate('/')}>Home</button>
                <button onClick={()=> dispatch(openFileModalAction(true))}>Create File</button>
                <button onClick={()=>dispatch(openFolderModalAction(true))}>Create Folder</button>
                <Button className='edit' disabled={disabled}  onClick={(e)=>{
                    container.map(item =>  {

                          return  dispatch(editFolderModalAction({
                        open: false,
                        value: item.value,
                        id: item.id

                    }))})
                   }} >edit Folder</Button>
                <button onClick={()=>dispatch(removeIsChecked())}>Remove checked</button>
                <button onClick={()=>dispatch(removeAll())}>Remove All</button>
                <button onClick={()=>location!=='/'? navigate(-1):''}>Back</button>
                <button onClick={()=>{navigate(parentId.lastIndexOf())}}>Parent Folder</button>
            </div>


        </>
    )}
export default Navbar