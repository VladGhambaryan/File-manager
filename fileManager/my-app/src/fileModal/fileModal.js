import React, {useEffect, useState} from "react";
import './fileModal.css'
import {addNewFile, closeFileModalAction, editFile} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {OPEN_EDIT_FIlE_MODAL} from "../redux/constants";
import {useLocation} from "react-router-dom";


export const FileModal = () => {
    const [value, setValue] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const location = useLocation().pathname
    const state = useSelector(state => state.fileReducer.fileModal)
    console.log(state.type,'state::::::::::')
    const handleClick = () => {
        if (state.type !== OPEN_EDIT_FIlE_MODAL) {

            if (value.length === 0 || content.length === 0) {
                return false
            }
            dispatch(addNewFile({
                name: 'file',
                id: Math.random(),
                parentId: location ? location : '',
                value: value,
                content: content,
                isChecked: false

            }));
            dispatch(closeFileModalAction(false))
        } else dispatch(editFile({value: value, content: content}));
        dispatch(closeFileModalAction(false))
    }

    useEffect(() => {
        if (state.type === OPEN_EDIT_FIlE_MODAL) {
            setValue(state.value)
            setContent(state.content)
        }
    }, [])
    return (

        <div className={!state ? 'file-Modal' : 'modal'} onClick={() => dispatch(closeFileModalAction(false))}>

            <div className='fileModal-content' onClick={e => e.stopPropagation()}>
                {state.type === OPEN_EDIT_FIlE_MODAL ? "EDITE FILE" : "CREATE FILE"}
                <div>Value<input value={value} type='text' onChange={(e) => setValue(e.target.value)}/>
                </div>
                <div>content
                    <textarea value={content} type='text' onChange={(e) => setContent(e.target.value)}/>
                </div>
                <button onClick={() => {
                    handleClick()
                }}>
                    {state.type === OPEN_EDIT_FIlE_MODAL ? "Edit" : "Add"}
                </button>


            </div>

        </div>
    )
}