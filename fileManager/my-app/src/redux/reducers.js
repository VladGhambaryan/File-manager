import {
    ADD_NEW_FILES, ADD_NEW_FOLDERS,
    CLOSE_FIlE_MODAL,
    CLOSE_FOLDER_MODAL, EDIT_FILE_MODAL, EDIT_FOLDER_MODAL, IS_CHECKED,
    OPEN_EDIT_FIlE_MODAL, OPEN_EDIT_FOLDER_MODAL,
    OPEN_FIlE_MODAL,
    OPEN_FOLDER_MODAL, REMOVE_ALL,
    REMOVE_ISCHECKED
} from "./constants";

export const initialState = {
    container: [],
    fileModal: false,
    folderModal: false,
    selectedItem: null,
    isCheckedes:false

}
export const fileReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_FIlE_MODAL:
            return {...state, fileModal: action.payload}


        case OPEN_EDIT_FIlE_MODAL:
            return {
                ...state,
                fileModal: {
                    open: true,
                    type: action.type,
                    value: action.payload.value,
                    content: action.payload.content,
                    id: action.payload.id
                },
            }

        case OPEN_EDIT_FOLDER_MODAL:
            console.log(action.payload.value,action.payload.id,'action.payload.id')
            return {
                ...state,
                folderModal: {open: true, type: action.type, value: action.payload.value, id: action.payload.id}
            }
        case EDIT_FOLDER_MODAL:
            const editedFolder = state.container.map(item => {
                if (state.folderModal.id === item.id) {
                    item.value = action.payload.value
                }
                return item
            })
            return {
                ...state,
                container: [
                    ...state.container,
                    editedFolder]
            }
        case EDIT_FILE_MODAL:
            console.log(action.payload.id,'edit',state.fileModal.id)

            const editFile = state.container.map(item => {
                if (item.id === state.fileModal.id) {

                    return item.value = action.payload.value ,item.content = action.payload.content

                }
            })
            return {

                ...state,
                container: [
                    ...state.container,
                    editFile]
            }

        case OPEN_FOLDER_MODAL:
            return {...state, folderModal: action.payload}
        case CLOSE_FIlE_MODAL:

            return {...state, fileModal: action.payload}

        case CLOSE_FOLDER_MODAL:

            return {...state, folderModal: action.payload}

        case ADD_NEW_FILES:

            if(state?.container?.every(item=>item?.value!==action.payload.value||item?.content!==action.payload.content)){
                return {
                    ...state,
                    container: [
                        ...state.container,
                        action.payload]
                }
            }else{
                return (state)


            }

        case ADD_NEW_FOLDERS:

            if(state?.container?.every(item=>item?.value!==action.payload.value||item?.content!==action.payload.content)){
                return {
                    ...state,
                    container: [
                        ...state.container,
                        action.payload]
                }
            }else{
                return (state)


            }
        case IS_CHECKED:
            console.log(action.payload.id,'idididi')
            return {
                ...state,
                selectedItem: action.payload.id
            }

            // return {
            //     ...state,
            //     // container: newContainer,
            //     selected: true
            //
            // }

        case REMOVE_ISCHECKED:
            console.log(state.container)
            const newArr = state.container.filter(item => !item.isChecked)
            return {
                ...state,
                container: newArr
            }
        case REMOVE_ALL:
            return {
                ...state,
                container: []
            }

        default:
            return state
    }

}