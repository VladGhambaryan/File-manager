import {
    ADD_NEW_FILES,
    CLOSE_FIlE_MODAL,
    CLOSE_FOLDER_MODAL,
    OPEN_EDIT_FIlE_MODAL, OPEN_EDIT_FOLDER_MODAL,
    OPEN_FIlE_MODAL,
    OPEN_FOLDER_MODAL,
    ADD_NEW_FOLDERS, IS_CHECKED, REMOVE_ISCHECKED, REMOVE_ALL, EDIT_FOLDER_MODAL, EDIT_FILE_MODAL,
} from "./constants";

export const openFileModalAction = (payload)=>({type:OPEN_FIlE_MODAL,payload})
export const openFolderModalAction = (payload)=>({type:OPEN_FOLDER_MODAL,payload})
export const closeFileModalAction= (payload)=>({type:CLOSE_FIlE_MODAL,payload})
export const closeFolderModalAction= (payload)=>({type:CLOSE_FOLDER_MODAL,payload})
export const editFileModalAction= (payload)=>({type:OPEN_EDIT_FIlE_MODAL,payload})
export const editFolderModalAction= (payload)=>({type:OPEN_EDIT_FOLDER_MODAL,payload})

export const addNewFile = (payload)=>({type:ADD_NEW_FILES,payload})
export const addNewFolder = (payload)=>({type:ADD_NEW_FOLDERS,payload})
export const isChecked = (payload)=>({type:IS_CHECKED,payload})
export const removeIsChecked = (payload)=>({type:REMOVE_ISCHECKED,payload})
export const removeAll = (payload)=>({type:REMOVE_ALL,payload})
export const editFolder = (payload)=>({type:EDIT_FOLDER_MODAL,payload})
export const editFile = (payload)=>({type:EDIT_FILE_MODAL,payload})


