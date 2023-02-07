import React, {useEffect, useState} from 'react'
import './folderModal.css'
import {useDispatch, useSelector} from "react-redux";
import {
    addNewFolder,
    closeFolderModalAction,
    editFolder,
} from "../redux/actions";
import {OPEN_EDIT_FIlE_MODAL, OPEN_EDIT_FOLDER_MODAL} from "../redux/constants";
import {useLocation} from "react-router-dom";

export const FolderModal = () => {
    const [folderName, setFolderName] = useState('')
    const state = useSelector(state => state.fileReducer.folderModal)
    const container = useSelector(state => state.fileReducer.container)
    const dispatch = useDispatch()
    const location = useLocation().pathname

    useEffect(() => {
        if (state.type === OPEN_EDIT_FOLDER_MODAL) {
            setFolderName(state.value)
        }

    }, [state.type, state.value])

    const handleClick = () => {
        if (state.type !== OPEN_EDIT_FOLDER_MODAL) {

            if (!folderName.trim()) {
                return null
            }

            if(container.some(item=>item?.value === folderName)) return null

            dispatch(addNewFolder({
                name: 'folder',
                id: Math.random(),
                parentId: location ? location : '',
                value: folderName,
                isChecked: false
            }));
        } else{
            dispatch(editFolder({value: folderName}));
        }
        dispatch(closeFolderModalAction(false))
    }
    return (
        <div className={!state ? 'folder-modal' : 'modal'} onClick={() => dispatch(closeFolderModalAction(false))}>

            <div className='folder-modal-content' onClick={e => e.stopPropagation()}>
                {state.type === OPEN_EDIT_FIlE_MODAL ? "EDITE FOLDER" : "CREATE FOLDER"}
                <div>Folder Name<input value={folderName} type='text' onChange={(e) => setFolderName(e.target.value)}/>
                </div>
                <button onClick={handleClick}>{state.type === OPEN_EDIT_FOLDER_MODAL ? 'Edit' : 'ADD'}</button>
            </div>

        </div>
    )
}
